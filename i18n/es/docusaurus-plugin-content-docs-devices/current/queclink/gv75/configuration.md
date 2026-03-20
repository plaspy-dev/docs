---
slug: /queclink/gv75/configuration
id: gv75-configuration
sidebar_label: Configuration
title: QuecLink - GV75 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar QuecLink GV75 con Plaspy, incluye ajustes de servidor y comandos SMS para validar conectividad
keywords:
  - Configuración QuecLink GV75
  - Configuración GV75 Plaspy
  - Configuración servidor QuecLink GV75
  - Configuración rastreador GPS GV75
  - Configuración plataforma GPS QuecLink
  - Configuración software seguimiento GV75
  - Comandos SMS QuecLink GV75
  - Configuración rastreador Plaspy
  - Configuración APN GV75
  - Seguimiento de flota GV75
---

# QuecLink - Configuración GV75

Esta página describe el contexto de configuración pública para usar el QuecLink GV75 con la plataforma Plaspy. Incluye los ajustes principales de servidor y un ejemplo práctico de comandos SMS publicados en recursos de configuración pública para que usted pueda apuntar un GV75 a Plaspy y verificar la conectividad para seguimiento en tiempo real y alertas.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use esta guía como referencia práctica y confirme pasos específicos del dispositivo en la documentación oficial de QuecLink cuando sea necesario.

## Resumen de la configuración

El proceso de configuración prepara el GV75 para enviar datos de ubicación y eventos a la plataforma Plaspy y valida que el dispositivo aparezca en Plaspy para monitoreo en tiempo real. La configuración típica utiliza SMS del GV75 o herramientas del fabricante para aplicar los ajustes de servidor y APN, además de habilitar los intervalos de reporte e entradas necesarios para su despliegue.

- Apuntar el GV75 al endpoint de servidor de Plaspy para que las posiciones GNSS y eventos lleguen a la plataforma
- Configurar el APN y los ajustes GPRS del dispositivo para que pueda conectarse por celular
- Establecer intervalos de reporte y comportamiento de entradas para que el dispositivo envíe la telemetría deseada
- Validar la conectividad del dispositivo y su visibilidad en Plaspy tras aplicar los ajustes
- Usar los comandos SMS que se muestran abajo como secuencia pública de ejemplo frecuentemente usada en una configuración inicial

## Ajustes de servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden conectarse usando el transporte que soporten
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe ingresar el puerto 8888 para cualquier dispositivo soportado

## Requisitos típicos antes de configurar

- Un GV75 energizado e instalado con acceso al instalador o al vehículo donde está montado el dispositivo
- Una SIM celular activa con datos y los valores de APN correctos para el operador
- Acceso al método de configuración soportado por el fabricante, como comandos SMS o el software oficial de configuración de QuecLink
- Conocimiento de la contraseña del dispositivo o de la contraseña de fábrica para la configuración por SMS
- Cobertura celular en el lugar de instalación para permitir el registro GPRS y la conexión al servidor
- Una cuenta en Plaspy y el flujo de aprovisionamiento de dispositivos para confirmar que el equipo se ve en la plataforma después de la configuración

## Cómo se conecta este rastreador a Plaspy

El GV75 se configura para reportar posiciones GNSS y eventos del dispositivo al endpoint y puerto compartidos de Plaspy. Los datos se envían por el método de transporte seleccionado y son procesados por Plaspy para mapas, alertas e informes.

- El dispositivo envía posiciones y telemetría a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- El transporte puede ser TCP o UDP según la configuración del dispositivo y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo cuando el dispositivo se conecta, por lo que normalmente no se requiere selección de protocolo en la plataforma
- Eventos como SOS, encendido del motor o cambios en entradas digitales se reenvían a Plaspy según la configuración en el GV75
- Los mensajes en búfer almacenados en el dispositivo se transmiten al endpoint de Plaspy cuando se recupera la cobertura celular

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de QuecLink necesario para su dispositivo, por ejemplo comandos SMS o la herramienta de configuración del fabricante
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo
3. Configure el puerto del servidor en 8888, que es el puerto compartido usado por Plaspy para todos los dispositivos soportados
4. Seleccione UDP o TCP si el dispositivo requiere selección explícita de transporte
5. Configure el APN y cualquier autenticación requerida para que el dispositivo pueda establecer una conexión GPRS
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere
7. Verifique que el GV75 reporte a Plaspy y que las posiciones y eventos lleguen a la plataforma

## Comandos de configuración de ejemplo

El GV75 puede configurarse enviando comandos SMS al dispositivo. El ejemplo que sigue es una secuencia compartida públicamente. La configuración de ejemplo usa la contraseña por defecto queclink en los comandos donde se solicita. Trate el comando de restaurar valores de fábrica como un paso inicial opcional solo si necesita resetear ajustes del dispositivo.

- Restaurar valores de fábrica (paso inicial opcional)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Establecer la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explicación: conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por el APN, el nombre de usuario APN y la contraseña APN de su operador según lo requiera su proveedor.

- Configurar el servidor GPRS apuntando a Plaspy usando dominio e IP con puerto 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Establecer el intervalo de actualización periódico a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre estos comandos
- Envíe cada comando como un mensaje SMS separado al número de teléfono del dispositivo
- Reemplace los marcadores como {{apn}} con los valores proporcionados por su operador celular
- El ejemplo usa la contraseña por defecto queclink en cada comando cuando se requiere; cambie la contraseña tras la configuración inicial si el firmware del dispositivo lo permite

## Observaciones de configuración

- Las versiones de firmware y las revisiones de hardware de QuecLink pueden cambiar la sintaxis exacta de los comandos y los parámetros disponibles, por lo que debe revisar el manual del dispositivo para su revisión de firmware
- El GV75 soporta la configuración vía SMS como se muestra en los comandos de ejemplo o herramientas de configuración alternativas del fabricante según el paquete del proveedor
- Elija UDP para menor overhead y entrega típicamente más rápida, o TCP si el despliegue prefiere un transporte orientado a conexión; tenga en cuenta que Plaspy acepta ambos
- Confirme siempre los valores de APN y las credenciales de la SIM con el operador móvil antes de aplicar los ajustes del servidor GPRS
- Después de la configuración inicial es buena práctica verificar que el dispositivo aparezca en Plaspy y que transmita las posiciones y eventos esperados

## Por qué usar Plaspy con esta configuración

Usar el GV75 con Plaspy proporciona a los operadores una forma sencilla de recolectar datos de ubicación y eventos en tiempo real de activos robustos. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy simplifican la incorporación de dispositivos y le permiten enfocarse en afinar los intervalos de reporte y las reglas de evento para los flujos de trabajo de su flota.

Para obtener más información sobre Plaspy y las integraciones de dispositivos soportados visite https://www.plaspy.com. Los métodos de configuración específicos de dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones de configuración más recientes en el sitio oficial de QuecLink https://www.queclink.com/ antes de desplegar a gran escala.
