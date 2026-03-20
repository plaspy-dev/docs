---
slug: /sinotrack/al_900e/configuration
id: al_900e-configuration
sidebar_label: Configuration
title: SinoTrack - AL-900E Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack AL-900E y apuntarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración SinoTrack AL-900E
  - Instalación SinoTrack AL-900E
  - Configuración AL-900E Plaspy
  - Configuración rastreador SinoTrack
  - Configuración servidor AL-900E
  - Guía configuración rastreador GPS
  - Configuración plataforma rastreo vehicular
  - Comandos SMS GPRS rastreador
  - Integración rastreador con Plaspy
  - Rastreo de flotas AL-900E
---

# SinoTrack - Configuración del AL-900E

Esta página reúne la información pública de configuración necesaria para usar el SinoTrack AL-900E con Plaspy. Contiene los ajustes de servidor habituales y los comandos SMS que se usan comúnmente para apuntar un AL-900E a Plaspy, de modo que el dispositivo pueda enviar ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos que se muestran aquí son comandos SMS públicos para el AL-900E y deben verificarse con la documentación del dispositivo y la versión de firmware correspondiente.

## Resumen de la configuración

El proceso de configuración del AL-900E prepara el rastreador para comunicarse con Plaspy, garantiza conectividad GPRS válida y habilita a la plataforma para recibir actualizaciones de posición. Con la configuración correcta, el rastreador enviará informes de ubicación y eventos al endpoint del servidor de Plaspy y así la unidad será visible y manejable en la plataforma.

- Configure el dispositivo para usar los ajustes de servidor de Plaspy y enviar los informes al endpoint correcto.
- Establezca el APN del operador y el modo GPRS para que el rastreador pueda abrir sesión de datos móviles.
- Seleccione el protocolo de transporte y el puerto que el dispositivo utilizará para enviar datos.
- Valide los ajustes y confirme que el dispositivo reporta a Plaspy con un comando de verificación.
- Use SMS o la herramienta del fabricante para aplicar la configuración y, si es necesario, reinicie el equipo para que los cambios surtan efecto.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP
- Plaspy automatically detects the tracker protocol

Todos los dispositivos de Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo adecuado para los rastreadores compatibles. Use el dominio o la IP según el método de configuración que permita su dispositivo.

## Requisitos habituales antes de la configuración

- Un rastreador AL-900E encendido con una SIM operativa que tenga datos y SMS habilitados.
- Conocer los valores APN del operador móvil de la SIM que se va a usar.
- Poder enviar comandos SMS al dispositivo o disponer de la herramienta oficial del fabricante para configuración.
- Que el rastreador tenga batería suficiente o alimentación del vehículo durante la configuración.
- Un método para verificar que el rastreador esté reportando en vivo a Plaspy tras la configuración, por ejemplo desde la plataforma Plaspy o mediante los logs del servidor.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el AL-900E envía datos de ubicación y eventos al endpoint compartido y al puerto de Plaspy. El rastreador se puede configurar por SMS para usar GPRS en reportes en tiempo real o para aceptar cambios remotos de parámetros.

- El rastreador se apunta para enviar reportes GPRS a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP según las opciones del dispositivo y las condiciones de la red.
- Plaspy recibe las conexiones entrantes y detecta automáticamente el protocolo del dispositivo para su procesamiento.
- SMS se utiliza para la configuración inicial y los cambios de parámetros cuando no hay herramienta de configuración disponible.
- Tras la configuración, el dispositivo reporta actualizaciones de posición y estado a Plaspy para su visualización y monitoreo.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante o software, o prepárese para enviar comandos SMS según la documentación de SinoTrack.
2. Introduzca el endpoint del servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere escoger un protocolo de transporte.
5. Configure el APN del operador y el nombre de usuario y contraseña del APN si fueran necesarios para la conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si la unidad o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación del equipo o comprobando la plataforma Plaspy para la unidad.

## Comandos de configuración de ejemplo

El AL-900E soporta configuración por SMS. Los siguientes comandos públicos se ofrecen como ejemplos y se envían como mensajes SMS de texto al rastreador en el orden indicado cuando sea necesario. Mantenga los marcadores de posición tal como aparecen y reemplácelos por los valores de su operador.

- Optional initial factory reset (use only when needed)
```text
RESET
```

- Set the time zone to UTC 0
```text
8960000E00
```

- Set the APN of the mobile operator
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explicación: reemplace {{apn}} por el APN del operador, {{apnu}} por el usuario del APN si fuera necesario y {{apnp}} por la contraseña del APN si fuera requerida. Deje usuario o contraseña en blanco si el operador no los solicita.

- Set the GPRS server to Plaspy using the Plaspy server IP and port
```text
8040000 54.85.159.138 8888
```
Nota: También es posible usar d.plaspy.com en algunas herramientas de configuración que aceptan nombres de dominio en lugar de la IP numérica.

- Set reporting interval when the device is active
```text
8050000 60
```

- Set reporting interval when the device is in low power or sleep
```text
8090000 60
```

- Switch the tracker to GPRS mode
```text
7100000
```

- Verify current settings
```text
RCONF
```
Envíe RCONF para solicitar la configuración actual al rastreador y así confirmar valores de servidor, APN e intervalos.

## Notas sobre la configuración

- La sintaxis exacta de los comandos SMS y su comportamiento pueden variar según la versión de firmware y la revisión de hardware. Consulte el manual del dispositivo si algún comando no es aceptado.
- Si el dispositivo o el firmware admiten nombres de dominio, puede usar d.plaspy.com en lugar de la IP 54.85.159.138. Si no, use la IP tal como se indica.
- Elija UDP o TCP según la fiabilidad de la red y el tipo de instalación. Plaspy detectará automáticamente el protocolo entrante.
- La configuración por SMS es útil para intervenciones en campo, mientras que las herramientas del fabricante pueden ofrecer opciones de configuración masiva o por USB.
- Mantenga los marcadores de posición como {{apn}} {{apnu}} y {{apnp}} y proporcione valores reales de su operador móvil durante la configuración.

## Por qué usar Plaspy con esta configuración

Configurar el AL-900E para que reporte a Plaspy proporciona a las organizaciones un método simple y estandarizado para recopilar datos de ubicación y eventos de un dispositivo SinoTrack ampliamente utilizado. Con los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo, los equipos pueden unificar el alta de dispositivos y conseguir que los rastreadores informen a la plataforma de forma constante.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup methods and firmware details on the manufacturer site https://www.sinotrackgps.com/ as specifications and commands can change over time.
