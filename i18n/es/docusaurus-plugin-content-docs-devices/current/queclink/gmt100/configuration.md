---
slug: /queclink/gmt100/configuration
id: gmt100-configuration
sidebar_label: Configuration
title: QuecLink - GMT100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GMT100 para conectarlo a Plaspy con ajustes de servidor compartidos
keywords:
  - Configuración QuecLink GMT100
  - Instalación QuecLink GMT100
  - Configuración del servidor QuecLink GMT100
  - QuecLink GMT100 Plaspy
  - Configuración rastreador GPS GMT100
  - Configuración rastreador QuecLink
  - Configuración de dispositivo Plaspy
  - Configuración APN GMT100
  - Comandos SMS GMT100
  - Integración rastreador QuecLink
---

# QuecLink - Configuración del GMT100

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GMT100 con Plaspy. Reúne los ajustes de servidor prácticos y un flujo de trabajo típico que puede aplicar al integrar el GMT100 con el backend de Plaspy. Las notas aquí usan comandos y parámetros de servidor disponibles públicamente para ayudarle a preparar el dispositivo para reportar a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador a nivel de plataforma. Los pasos en el lado del fabricante pueden variar según versiones de firmware, revisiones de hardware, tipos de instalación y herramientas de configuración del proveedor. Utilice esta guía para una configuración general y consulte la documentación del fabricante QuecLink para detalles específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara un equipo GMT100 para enviar datos de posición y eventos a Plaspy, de modo que el dispositivo sea visible y gestionable en la plataforma. El GMT100 admite reportes por GPRS y comandos de configuración por SMS; los comandos de ejemplo a continuación muestran un flujo común basado en SMS utilizado con Plaspy.

- Configure el dispositivo para reportar al endpoint del servidor de Plaspy para que los informes de ubicación lleguen a la plataforma
- Establezca el APN y los parámetros GPRS para que el rastreador pueda abrir una sesión de datos
- Opcionalmente restaure los valores de fábrica y ajuste la zona horaria o las frecuencias de reporte según sus necesidades de monitoreo
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy usando el servidor y puerto compartidos
- Habilite entradas básicas como SOS o detección de movimiento para recibir notificaciones de eventos en la plataforma

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una unidad GMT100 con alimentación y batería interna cargada o conectada a la fuente de alimentación del vehículo
- Una tarjeta SIM válida con un plan de datos activo y los valores APN correctos para el operador móvil
- Acceso al método de configuración por SMS de QuecLink o a la herramienta oficial de configuración QuecLink compatible con su firmware
- Conocimiento de la contraseña del dispositivo si se requiere para la configuración por SMS (el ejemplo público usa la contraseña por defecto queclink)
- Cobertura básica de servicio en las bandas GPRS/GSM que soporta el GMT100
- Registro del IMEI o número de serie del dispositivo para verificarlo en Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El GMT100 se configura para enviar mensajes de posición y eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar y gestionar el dispositivo. Una vez que el servidor y el transporte estén configurados en el rastreador, la plataforma interpretará automáticamente el protocolo entrante.

- El dispositivo envía informes periódicos de posición GPS a d.plaspy.com usando el puerto 8888
- GPRS se utiliza para transportar los mensajes del rastreador al IP del servidor Plaspy 54.85.159.138 o a través del nombre de dominio
- El rastreador puede configurarse mediante comandos SMS para ajustar APN, endpoint de servidor e intervalos de reporte
- Plaspy detecta el protocolo del dispositivo automáticamente y trata todos los dispositivos que usan el mismo puerto de forma consistente
- Mensajes de evento como SOS y alertas de movimiento se reportan al mismo endpoint de Plaspy y son visibles en la plataforma

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración QuecLink para su GMT100, típicamente comandos SMS o la herramienta del fabricante compatible con su firmware
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor Plaspy 54.85.159.138
3. Configure el puerto en 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte
5. Configure el APN y las credenciales del operador necesarias para la conectividad GPRS
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo requieren
7. Valide que el dispositivo reporta a Plaspy y aparece en su cuenta o inventario

## Ejemplo de comandos de configuración

El GMT100 puede configurarse por SMS usando comandos estilo AT de QuecLink. El siguiente ejemplo público conserva el orden usado para una configuración típica. Los comandos de muestra usan la contraseña por defecto del dispositivo queclink. Envíe estos comandos como mensajes SMS al número del dispositivo.

Nota sobre marcadores
- [apn] es la cadena APN de la red móvil de su proveedor de SIM
- [apnu] es el nombre de usuario del APN cuando lo solicita el operador
- [apnp] es la contraseña del APN cuando lo solicita el operador

1. Paso inicial opcional para restaurar valores de fábrica (usar solo cuando sea necesario)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador móvil y las credenciales
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4. Configurar el servidor GPRS para reportar a Plaspy por dominio e IP en el puerto 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo periódico de actualización GPS a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Mantenga el orden de los comandos al seguir la secuencia anterior. Reemplace los marcadores por su APN y credenciales reales antes de enviar los SMS. El comando de restauración de fábrica es opcional y solo debe usarse cuando desee restablecer la configuración del dispositivo.

## Notas de configuración

- La configuración por SMS es comúnmente soportada en el GMT100; utilice los formatos oficiales de comandos SMS de QuecLink y confirme la contraseña del dispositivo antes de enviar comandos
- Diferentes versiones de firmware pueden requerir pequeñas variaciones de sintaxis o parámetros adicionales; consulte la documentación de QuecLink para orientación específica de firmware
- Elija UDP o TCP según los requisitos de su red; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y interpreta automáticamente el protocolo entrante
- Verifique el APN, nombre de usuario y contraseña con su operador móvil antes de configurar el dispositivo
- Después de la configuración, confirme que el dispositivo aparece y reporta correctamente en Plaspy usando los ajustes de servidor indicados arriba

## Por qué usar Plaspy con esta configuración

Usar el GMT100 con Plaspy ofrece a las organizaciones una vía sencilla para convertir los reportes del dispositivo en visibilidad operativa. Con el rastreador configurado para reportar a Plaspy, las flotas y operadores pueden recibir actualizaciones de ubicación, alertas de eventos y datos de monitoreo mediante un endpoint y puerto consistentes utilizados en los dispositivos compatibles.

Para obtener más información sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles técnicos completos, verifique los métodos de configuración en el sitio del fabricante https://www.queclink.com/ ya que el comportamiento del dispositivo y los pasos de instalación pueden cambiar con el tiempo.
