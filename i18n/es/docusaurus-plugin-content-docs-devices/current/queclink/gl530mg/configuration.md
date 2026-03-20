---
slug: /queclink/gl530mg/configuration
id: gl530mg-configuration
sidebar_label: Configuration
title: QuecLink - GL530MG Configuration
sidebar_class_name: menu_item_tracker
description: Configure el QuecLink GL530MG para Plaspy con ajustes de servidor públicos y ejemplos de comandos SMS
keywords:
  - QuecLink GL530MG configuración
  - QuecLink GL530MG instalación
  - configuración servidor GL530MG
  - GL530MG Plaspy configuración
  - configuración rastreador GPS Plaspy
  - configuración rastreador de activos
  - configuración plataforma GPS
  - configuración seguimiento vehicular
  - rastreador QuecLink Plaspy
  - configuración SMS GL530MG
---

# QuecLink - Configuración del GL530MG

Esta página documenta el contexto público de configuración para utilizar el QuecLink GL530MG con Plaspy. Se enfoca en los ajustes prácticos del servidor y en ejemplos de comandos que puede usar para apuntar un GL530MG al endpoint de Plaspy y validar el envío de reportes. Cuando applique, se incluyen comandos SMS públicos del fabricante como ejemplo para pasos comunes de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use las recomendaciones a continuación junto con la documentación del dispositivo y cualquier herramienta del proveedor que tenga disponible.

## Resumen de la configuración

El proceso de configuración prepara al GL530MG para enviar ubicación y telemetría a Plaspy de forma fiable. La instalación típica se centra en la conectividad de red, la dirección del servidor, la frecuencia de reportes y en asegurar que el dispositivo use el transporte correcto para que Plaspy pueda recibir sus mensajes.

- Configure los ajustes de red del dispositivo y el APN para que el rastreador tenga conectividad de datos activa.
- Apunte el dispositivo al endpoint del servidor de Plaspy para que los mensajes de posición y eventos se entreguen.
- Elija transporte UDP o TCP en el puerto 8888 según el comportamiento del dispositivo y la red.
- Establezca intervalos de reporte y disparadores de eventos para equilibrar visibilidad y duración de batería.
- Valide que el dispositivo aparece en Plaspy y que se reciben telemetría, eventos de movimiento y de manipulación.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará el protocolo que el rastreador esté usando.

## Requisitos típicos antes de configurar

- Una unidad QuecLink GL530MG con batería suficiente o alimentación externa para realizar la configuración.
- Una SIM funcional provisionada para datos y SMS según lo requiera su despliegue y el firmware del GL530MG.
- Credenciales APN del operador móvil si la SIM o el operador regional lo requieren.
- Acceso al método de configuración oficial de QuecLink que prefiera, como comandos SMS o software del proveedor.
- La contraseña del dispositivo si el rastreador la requiere para la configuración; los comandos de ejemplo a continuación usan la contraseña pública por defecto queclink.
- Cobertura de red que soporte la variante del rastreador en su mercado.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GL530MG envía reportes periódicos y basados en eventos al endpoint y puerto compartido de Plaspy para que la plataforma muestre ubicación, historial y alertas. El dispositivo puede usar transporte TCP o UDP y Plaspy interpretará el protocolo entrante automáticamente.

- El rastreador se configura para enviar mensajes GNSS y de telemetría a d.plaspy.com en el puerto 8888 o a la IP del servidor 54.85.159.138 en el puerto 8888.
- Plaspy recibe fix de ubicación, eventos de movimiento y manipulación, estado de batería y otros reportes de sensores configurados para mapeo y alertas.
- Los reportes programados y mensajes de activación se usan para equilibrar la visibilidad con la vida útil de la batería.
- Reportes por evento como SOS, manipulación o movimiento pueden reenviarse inmediatamente a Plaspy para alertas en tiempo real.
- Plaspy utiliza su detección automática de protocolo para parsear los mensajes del dispositivo sin importar si se selecciona TCP o UDP.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de QuecLink que usará, como la interfaz por comandos SMS o las herramientas de configuración de QuecLink.
2. Si usa configuración por SMS, confirme la contraseña del dispositivo y, opcionalmente, realice un restablecimiento de fábrica solo si necesita una base limpia.
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Configure el puerto del servidor en 8888.
5. Seleccione el transporte UDP o TCP en el dispositivo si es necesario elegir.
6. Configure los parámetros APN para la SIM instalada usando el APN del operador, usuario y contraseña según corresponda.
7. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reboot para aplicar cambios de red o servidor.
8. Valide que el dispositivo reporte a Plaspy y confirme que los mensajes de posición y eventos aparecen en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS públicos son una secuencia de ejemplo para configurar un GL530MG. Estos comandos están disponibles en materiales públicos del fabricante y usan la contraseña del dispositivo queclink como se muestra. Preserve los marcadores de posición cuando adapte los comandos para su despliegue.

1. Restauración de fábrica inicial opcional para devolver el rastreador a valores por defecto. Use solo cuando sea necesario.
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC 0 como ejemplo.
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador. Reemplace los marcadores de posición con los valores de su operador:
- {{apn}} es el nombre del APN para la SIM
- {{apnu}} es el usuario del APN si se requiere
- {{apnp}} es la contraseña del APN si se requiere
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

4. Configurar la entrada del servidor GPRS para apuntar a Plaspy. Este ejemplo incluye tanto el dominio como la IP y establece el puerto 8888. El comando muestra el dominio d.plaspy.com y la IP del servidor 54.85.159.138 con puerto 8888.
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de reporte a 60 segundos como ejemplo.
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar la notificación del botón SOS en la entrada 2 como ejemplo de configuración de eventos.
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre los comandos anteriores:
- El orden de los comandos es importante para un comportamiento predecible. Aplique la configuración de red y servidor antes de habilitar reportes programados.
- Mantenga la contraseña del dispositivo correcta en cada comando; los ejemplos usan la contraseña pública por defecto queclink.
- Reemplace valores marcadores como {{apn}}, {{apnu}} y {{apnp}} con las credenciales de su operador.

## Observaciones sobre la configuración

- La configuración por SMS está documentada públicamente para este dispositivo y es útil para provisión remota en campo cuando el acceso físico es limitado.
- Preserve los marcadores de posición de las credenciales APN y reemplace con los valores de su proveedor antes de enviar los comandos.
- Elija UDP o TCP según el comportamiento de la red del operador; Plaspy soporta ambos y detectará automáticamente el protocolo del rastreador al conectar.
- El firmware y la sintaxis de comandos pueden variar entre versiones de QuecLink y revisiones de hardware; confirme los formatos exactos con la documentación del fabricante.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888 para conexiones al servidor, lo que simplifica la configuración y permite la detección automática de protocolo.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GL530MG con Plaspy permite una visibilidad de activos confiable a largo plazo para despliegues que requieren bajo mantenimiento y buen desempeño en exteriores. Apuntar los dispositivos GL530MG al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888 y seleccionar UDP o TCP permite a Plaspy ingerir posiciones GNSS, reportes de eventos y datos de sensores para mapeo, alertas y reproducción de historial.

Learn more about Plaspy and how the platform can manage GL530MG devices at https://www.plaspy.com. For the most current device specific commands, firmware details and supported options verify the QuecLink documentation at https://www.queclink.com/ since firmware behavior and configuration methods can change over time.
