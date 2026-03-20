---
slug: /sinotrack/st_908/configuration
id: st_908-configuration
sidebar_label: Configuration
title: SinoTrack - ST-908 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack ST-908 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración SinoTrack ST-908
  - Instalación SinoTrack ST-908
  - Configuración ST 908 Plaspy
  - Ajustes servidor GPS tracker
  - Configuración tracker Plaspy
  - Configuración GPRS SMS
  - Comandos SMS APN
  - Configuración plataforma seguimiento vehicular
  - Detección protocolo tracker
  - Comandos verificación tracker
---

# SinoTrack - ST-908 Configuración

Esta página documenta el contexto público de configuración para usar el SinoTrack ST-908 con la plataforma Plaspy. Se enfoca en los ajustes de servidor prácticos y en los comandos SMS que comúnmente se emplean para que el dispositivo informe ubicación y estado a Plaspy. Utilice esta guía para preparar un rastreador, conectarlo a Plaspy y verificar la comunicación básica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y las herramientas del proveedor. Los ejemplos que aparecen a continuación provienen de la secuencia pública de comandos SMS de Sinotrack y muestran cómo dirigir un ST-908 hacia el endpoint de Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el ST-908 para que establezca una sesión de datos y reporte a Plaspy de forma confiable. La configuración típica ajusta la zona horaria y los parámetros APN, apunta el dispositivo al endpoint de Plaspy y confirma los intervalos de reporte y el modo de operación.

- Configure el APN y los parámetros GPRS para que el rastreador use datos móviles y pueda conectarse a Plaspy.
- Indique el endpoint del servidor Plaspy y el puerto compartido para que el dispositivo abra la conexión.
- Active y ajuste los intervalos de reporte para que las actualizaciones de posición cumplan con los requerimientos operativos.
- Verifique la configuración mediante el comando de verificación del fabricante y confirme que el dispositivo aparece en Plaspy.
- Envíe comandos por SMS o use la herramienta del fabricante según esté disponible para validar la configuración del equipo.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando este se conecte.

## Requisitos típicos antes de la configuración

- Un ST-908 con alimentación, tarjeta SIM funcional y un plan de datos activo que soporte GPRS según lo requiera el equipo.
- El APN del operador y, si aplica, usuario y contraseña del APN; estos datos son necesarios para configurar GPRS.
- Un teléfono o una herramienta capaz de enviar comandos SMS de configuración al rastreador, si opta por la configuración vía SMS.
- Acceso a la documentación oficial de Sinotrack o a la herramienta de instalador para confirmar la sintaxis de comandos y comportamientos específicos de firmware.
- Una cuenta en Plaspy y acceso a la plataforma para confirmar que el dispositivo aparece y envía telemetría tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El ST-908 se configura para enviar datos de ubicación y estado al endpoint y puerto del servidor Plaspy. Cuando el equipo abre correctamente una sesión GPRS y conecta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo y comienza a procesar la telemetría entrante para que la unidad sea visible en el sistema.

- El rastreador se apunta a Plaspy usando la dirección y el puerto configurados.
- Los reportes se envían por GPRS una vez que el APN y las credenciales estén configurados.
- Plaspy recibe la conexión en el puerto compartido y detecta de forma automática el protocolo utilizado por el dispositivo.
- La conexión y el reporte exitosos hacen que el equipo aparezca en la interfaz de Plaspy para monitoreo de ubicación y eventos.
- Los intervalos regulares de reporte y los desencadenantes de eventos ofrecen visibilidad operativa continua.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Sinotrack soportado por su dispositivo y firmware (comandos SMS o herramienta del fabricante).
2. Ingrese el servidor de Plaspy como domain d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los equipos.
4. Elija UDP o TCP si el dispositivo exige seleccionar el transporte antes de guardar.
5. Aplique o guarde la configuración en el equipo, incluyendo los cambios de APN y modo.
6. Reinicie o corte la alimentación del dispositivo si el firmware lo requiere para activar los nuevos ajustes.
7. Valide que el rastreador reporte a Plaspy y que aparezca en la plataforma usando el comando de verificación del proveedor o la lista de dispositivos en Plaspy.

## Ejemplos de comandos de configuración

La secuencia pública de configuración del Sinotrack ST-908 que aparece a continuación se envía comúnmente por SMS al dispositivo. Mantenga los marcadores de posición al reemplazarlos con la información de su operador. Estos comandos se presentan en el mismo orden recomendado por la guía pública de Sinotrack.

- Reinicio opcional para restaurar ajustes de fábrica. Use esto solo si pretende comenzar desde los valores predeterminados.
```text
RESET
```

- Establecer la zona horaria a UTC 0
```text
8960000E00
```

- Configurar el APN de su operador móvil. Reemplace los marcadores con el APN, el usuario y la contraseña de su operador. Si no se requiere usuario o contraseña, deje [apnu] y [apnp] vacíos u omítalos según las reglas del operador.
```text
8030000 [apn] [apnu] [apnp]
```

- Configurar el servidor GPRS para apuntar a Plaspy usando la IP y el puerto de Plaspy
```text
8040000 54.85.159.138 8888
```

- Establecer el intervalo de reportes periódicos cuando el dispositivo está encendido
```text
8050000 60
```

- Establecer el intervalo de reportes periódicos cuando el dispositivo está apagado
```text
8090000 60
```

- Cambiar el rastreador al modo de comunicación GPRS
```text
7100000
```

- Verificar la configuración actual y el ID reportado usando el comando de verificación del dispositivo
```text
RCONF
```

Notas sobre los marcadores de posición:
- [apn] es el nombre del punto de acceso (APN) del operador móvil.
- [apnu] es el usuario del APN si es requerido.
- [apnp] es la contraseña del APN si es requerida.

Envíe estos comandos SMS desde un número autorizado según la política de SMS de su equipo. Ajuste los intervalos de reporte para que se adapten a sus necesidades operativas.

## Observaciones de configuración

- El firmware y la sintaxis de comandos pueden variar entre revisiones de hardware y compilaciones regionales de firmware. Confirme siempre la sintaxis exacta para su unidad.
- Este rastreador soporta configuración vía SMS como se muestra arriba; algunos instaladores prefieren la herramienta del fabricante o software de configuración para aprovisionamiento masivo.
- Al seleccionar el transporte, elija UDP o TCP según las condiciones de su red. Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Use RCONF para verificar la configuración tras enviar los comandos y asegurarse de que el dispositivo guardó los valores de servidor y APN.
- Mantenga un registro del ID del dispositivo que usa Plaspy para cotejar la entrada del equipo en la plataforma.

## Por qué usar Plaspy con esta configuración

Apuntar el SinoTrack ST-908 al servidor Plaspy ofrece una forma directa de incorporar la telemetría del equipo a una plataforma centralizada de rastreo de flotas. Con el endpoint de Plaspy configurado, los dispositivos informan posición y estado a un servidor gestionado donde la detección automática de protocolos reduce la selección manual durante la incorporación.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration commands, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and firmware information at the manufacturer website https://www.sinotrackgps.com/ before deploying devices at scale.
