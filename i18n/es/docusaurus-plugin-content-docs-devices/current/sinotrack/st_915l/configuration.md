---
slug: /sinotrack/st_915l/configuration
id: st_915l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-915L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública del ST-915L para apuntar el rastreador a Plaspy con comandos SMS y ajustes de servidor
keywords:
  - Configuración SinoTrack ST-915L
  - Instalación SinoTrack ST-915L
  - Configuración servidor ST-915L
  - Comandos SMS ST-915L
  - Configuración dispositivo Plaspy
  - Configuración GPS Plaspy
  - Configuración APN ST-915L
  - Configuración GPRS ST-915L
  - Configuración seguimiento vehículo
  - Seguimiento de flotas ST-915L
---

# SinoTrack - Configuración del ST-915L

Esta página documenta el contexto público de configuración para usar el SinoTrack ST-915L con Plaspy. Se centra en los pasos prácticos publicados por el fabricante y en los ajustes de servidor compartidos por Plaspy necesarios para apuntar el dispositivo a una instancia de Plaspy. La guía refleja los comandos SMS publicados por el proveedor para actualizar APN y parámetros de servidor, así como la forma en que Plaspy identifica y acepta reportes de rastreadores compatibles.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice los comandos SMS del proveedor mostrados aquí como punto de partida práctico y verifique las diferencias específicas del equipo contra la documentación más reciente del fabricante antes de desplegar a escala.

## Resumen de configuración

Este proceso prepara el ST-915L para enviar ubicación y telemetría a Plaspy mediante la actualización del APN y del objetivo de servidor del dispositivo y la validación de la conectividad. El objetivo típico es asegurar que el rastreador informe de manera confiable al endpoint de Plaspy para que el dispositivo aparezca en la plataforma y entregue posición, batería y actualizaciones de estado.

- Apuntar el dispositivo al endpoint y puerto del servidor de Plaspy para que el tráfico saliente GPRS se dirija a la plataforma.
- Configurar las credenciales APN de la SIM instalada para que el rastreador pueda establecer una sesión GPRS.
- Habilitar el intervalo de reporte y el modo de operación para que el dispositivo envíe actualizaciones de posición de forma regular.
- Verificar la identidad y los ajustes del dispositivo usando el comando RCONF del fabricante para que Plaspy pueda correlacionar el ID del equipo.
- Confirmar que el rastreador aparece en Plaspy y que se reciben mensajes de telemetría y ubicación.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com es el endpoint nombrado que usa Plaspy para los reportes de dispositivos.
- La IP del servidor 54.85.159.138 puede emplearse cuando se configura el dispositivo con una dirección IP en lugar de un dominio.
- El puerto 8888 es el puerto único que Plaspy utiliza para todos los dispositivos soportados.
- El dispositivo admite UDP o TCP; puede seleccionar UDP o TCP cuando el rastreador requiera una elección de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que los dispositivos pueden reportar usando su protocolo nativo sin configuración de protocolo por dispositivo.

## Requisitos previos habituales

- Un ST-915L con batería y una tarjeta SIM operativa que tenga datos y SMS habilitados.
- Acceso al método de configuración por SMS del equipo o a una herramienta aprobada por el fabricante para enviar comandos SMS de configuración.
- Los ajustes APN del operador móvil para configurar el acceso GPRS usando los marcadores de posición {{apn}} {{apnu}} y {{apnp}}.
- Conocimiento de si el firmware del dispositivo espera una dirección IP o un dominio para la configuración del servidor.
- Una cuenta de prueba o acceso a Plaspy para confirmar que el dispositivo aparece y reporta tras la configuración.
- Herramientas básicas para el envío de SMS, como un teléfono con capacidad de mensajes y el número del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El ST-915L se configura para reportar al endpoint y puerto compartidos de Plaspy actualizando los parámetros APN y GPRS del dispositivo vía SMS. Una vez que el equipo establece una sesión GPRS con el APN configurado, envía paquetes de posición y telemetría a la dirección y puerto configurados de Plaspy para que la plataforma muestre y procese los datos del dispositivo.

- Se apunta el dispositivo a Plaspy estableciendo la IP o el dominio del servidor y el puerto en la configuración del rastreador.
- La configuración del APN permite que el rastreador levante una conexión GPRS para la transferencia de datos.
- Con GPRS activo, el rastreador envía informes periódicos de posición y estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy ingiere los paquetes entrantes y detecta automáticamente el protocolo del rastreador para procesar el dispositivo sin mapeo manual de protocolos.
- La visibilidad en la plataforma incluye actualizaciones de ubicación, reportes de batería o estado y reproducción histórica cuando se reciben los reportes.

## Flujo de configuración común

1. Acceda al método de configuración oficial del fabricante o al software para el ST-915L, normalmente comandos basados en SMS publicados por SinoTrack.
2. Opcionalmente restaure la configuración de fábrica si necesita un punto de partida limpio usando el comando de reinicio del proveedor.
3. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor del dispositivo según acepte dominio o IP.
4. Configure el puerto 8888 en la configuración del servidor del dispositivo; Plaspy usa el mismo puerto para todos los dispositivos soportados.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el protocolo de transporte.
6. Aplique o guarde la configuración y cambie el dispositivo a modo GPRS para que pueda conectarse con el APN configurado.
7. Reinicie el dispositivo si el fabricante lo requiere para aplicar los ajustes de red.
8. Valide que el dispositivo informe a Plaspy comprobando la salida de RCONF y confirmando que el equipo aparece en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El fabricante del SinoTrack ST-915L publica estos comandos SMS para configuración. Los comandos se envían como mensajes SMS al número del dispositivo en el orden indicado cuando el orden es importante. Preserve los marcadores de posición al sustituir valores de APN.

- Restaurar configuración de fábrica (paso inicial opcional)
```text
RESET
```

- Ajustar la zona horaria a UTC 0
```text
8960000E00
```

- Establecer el APN del operador usando marcadores de posición
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Nota: Mantenga los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por el nombre APN del operador, el usuario APN y la contraseña APN según sea necesario. Si su operador no usa usuario ni contraseña, deje esos marcadores vacíos.

- Configurar el servidor GPRS para apuntar a Plaspy usando la IP y el puerto de Plaspy
```text
8040000 54.85.159.138 8888
```
También puede configurar el servidor usando el dominio d.plaspy.com si el dispositivo acepta nombres de dominio.

- Establecer intervalo de actualización cuando el dispositivo está encendido
```text
8050000 60
```

- Establecer intervalo de actualización cuando el dispositivo está apagado
```text
8090000 60
```

- Cambiar el dispositivo a modo GPRS
```text
7100000
```

- Verificar ajustes del dispositivo y recuperar el ID que Plaspy usará
```text
RCONF
```
La respuesta de RCONF incluye el ID del dispositivo que se utiliza para correlacionar el rastreador en Plaspy.

## Notas de configuración

- Las variantes regionales y el firmware pueden cambiar el formato exacto de los comandos SMS o los parámetros disponibles; confirme siempre con el manual del equipo la versión de firmware correspondiente.
- El dispositivo permite seleccionar UDP o TCP para el transporte. Elija el transporte que coincida con las condiciones de su red y con el comportamiento del firmware del dispositivo.
- La configuración por SMS es práctica para ajustes remotos o en campo, pero asegúrese de enviar los mensajes desde un número de teléfono de confianza para evitar configuraciones no autorizadas.
- Use la dirección IP 54.85.159.138 o el dominio d.plaspy.com al configurar el servidor. El puerto 8888 es el puerto único que Plaspy utiliza para todos los dispositivos.
- Tras aplicar los ajustes, valide con RCONF y compruebe en Plaspy que se reciben los reportes y la telemetría de estado del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el SinoTrack ST-915L para que informe a Plaspy proporciona una forma directa de centralizar la ubicación y la telemetría del dispositivo para gestión de flotas, monitoreo antirrobo y seguimiento de activos a largo plazo. Las características del hardware ST-915L, como la autonomía prolongada de batería y el rendimiento GNSS fiable, combinadas con la detección automática de protocolos de Plaspy, facilitan el despliegue de dispositivos y el comienzo de la recepción de datos en vivo e históricos sin mapeos de protocolo por dispositivo complejos.

Para obtener más información sobre Plaspy e integraciones de dispositivos soportados visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y orientación del fabricante, verifique la configuración y el comportamiento en el sitio oficial de SinoTrack https://www.sinotrackgps.com/ ya que el firmware y los métodos de configuración pueden cambiar con el tiempo.
