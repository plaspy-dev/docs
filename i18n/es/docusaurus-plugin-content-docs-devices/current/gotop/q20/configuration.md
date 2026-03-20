---
slug: /gotop/q20/configuration
id: q20-configuration
sidebar_label: Configuration
title: GOTOP - Q20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP Q20 y apuntarlo al servidor Plaspy para seguimiento y alertas
keywords:
  - configuración GOTOP Q20
  - instalación GOTOP Q20
  - GOTOP Q20 Plaspy
  - configuración servidor GOTOP Q20
  - configuración rastreador GPS Q20
  - configuración software de seguimiento GOTOP Q20
  - configuración plataforma GOTOP Q20
  - configuración de rastreador Plaspy
  - ajustes servidor Plaspy
  - rastreador GPS Q20 configuración
---

# GOTOP - Configuración del Q20

Esta página ofrece el contexto público de configuración para usar el rastreador GPS GOTOP Q20 4G SOS con Plaspy. Describe los ajustes de servidor y el proceso práctico necesarios para apuntar el dispositivo a Plaspy, habilitando el seguimiento en tiempo real, la recepción de alarmas y la ingesta de telemetría. La guía se centra en hechos de integración públicos y en los pasos habituales que seguirán instaladores y administradores para que el dispositivo sea visible en Plaspy.

Plaspy utiliza parámetros de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Use esta página para preparar el Q20 para Plaspy y consulte la documentación oficial de GOTOP para interfaces específicas del dispositivo, comandos actualizados o notas de firmware.

## Resumen de configuración

Configurar el Q20 para Plaspy garantiza que el rastreador envíe su ubicación y telemetría de seguridad a la plataforma Plaspy, de modo que usted pueda monitorear dispositivos, recibir alertas y revisar historiales. El proceso consiste principalmente en apuntar el dispositivo al endpoint de Plaspy, elegir el método de transporte si es necesario y validar que el equipo informe correctamente.

- Ingrese el endpoint del servidor Plaspy en el dispositivo o mediante la herramienta del fabricante para que los reportes GPRS y las cadenas de alarma por SMS lleguen a Plaspy.
- Seleccione el tipo de transporte (UDP o TCP) cuando el equipo requiera una elección; Plaspy acepta cualquiera de los dos en el puerto compartido.
- Configure el puerto de reporte del dispositivo al puerto utilizado por Plaspy para que los mensajes alcancen la plataforma.
- Guarde y aplique la configuración del rastreador y, si es necesario, reinicie el dispositivo para que los cambios de red entren en vigor.
- Valide la conectividad para confirmar que el rastreador aparece en Plaspy y envía datos de ubicación y alarmas correctamente.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes del servidor Plaspy al configurar el Q20 para la integración:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport required by your device or configuration method
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos previos habituales

- Un dispositivo Q20 cargado y con alimentación, con acceso al método o herramienta de configuración del fabricante
- Un plan de datos celulares activo en la SIM del dispositivo para que los reportes GPRS lleguen a Plaspy
- Conocimiento de la interfaz de configuración que GOTOP utiliza en su región o en su firmware (comandos SMS, app del fabricante o herramienta web)
- Acceso a las credenciales o PIN de configuración que provea el proveedor del dispositivo, si aplica
- Un plan de pruebas para confirmar que el dispositivo aparece en Plaspy y que las alarmas como SOS o detección de caídas se transmiten correctamente

## Cómo se conecta este rastreador a Plaspy

El Q20 envía actualizaciones de posición y telemetría de seguridad a Plaspy a través de la red celular usando sus canales de reporte GPRS y las cadenas de alarma configuradas. El dispositivo se apunta al endpoint y puerto compartidos de Plaspy, y la plataforma determina el protocolo, por lo que no es necesario mapear manualmente el protocolo.

- El rastreador se configura para reportar al endpoint compartido d.plaspy.com o a la IP 54.85.159.138
- Los reportes y alarmas se envían al puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles
- El dispositivo puede usar transporte UDP o TCP según la configuración; Plaspy acepta ambos
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos, lo que simplifica despliegues con varios modelos
- Una vez conectado, la ubicación, las alertas SOS, la detección de caídas y otros eventos configurados son visibles en Plaspy para monitoreo y reproducción de historial

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de GOTOP o al software apropiado para su dispositivo y región (comandos SMS, app del proveedor o herramienta de configuración).
2. Ingrese el nombre de host del servidor d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor o IP.
3. Configure el puerto de reporte en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia de instalación.
5. Guarde o aplique la configuración usando la herramienta del fabricante o enviando los comandos SMS correspondientes.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para aplicar los ajustes de red.
7. Valide que el dispositivo informa a Plaspy comprobando la visibilidad del equipo y la telemetría reciente en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El Q20 puede configurarse mediante métodos proporcionados por el fabricante, como cadenas de comandos SMS, una app del proveedor o una herramienta de configuración de escritorio. Los comandos y la sintaxis exacta varían según el firmware y las variantes regionales, por lo que debe seguir la documentación oficial de GOTOP o la utilidad de configuración que le haya suministrado su proveedor.

Al configurar vía la interfaz de comandos del fabricante, normalmente establecerá:
- El nombre de host del servidor d.plaspy.com o la IP del servidor 54.85.159.138
- El puerto de reporte 8888
- El tipo de transporte UDP o TCP si el dispositivo lo requiere

Dado que los comandos difieren según el firmware y la herramienta, consulte los materiales de GOTOP para las cadenas SMS exactas o los flujos de trabajo de la utilidad necesarios para aplicar estos valores.

## Notas de configuración

- Las variaciones de firmware y las versiones regionales del dispositivo pueden cambiar la sintaxis de los comandos y los campos de configuración disponibles; siempre verifique las notas del firmware del equipo.
- Elegir UDP o TCP puede afectar cómo el rastreador maneja la retransmisión y el estado de conexión; seleccione el transporte más adecuado para su entorno de red.
- La configuración por SMS es habitual en muchos dispositivos GOTOP; si utiliza comandos SMS, asegúrese de que la SIM pueda enviar y recibir SMS y de conservar los marcadores que el fabricante indique.
- El puerto compartido de Plaspy simplifica los despliegues porque todos los dispositivos reportan al puerto 8888 y Plaspy detecta el protocolo automáticamente.
- Mantenga un registro de los ajustes aplicados y una lista de verificación de pruebas del dispositivo para validar la telemetría y el comportamiento de las alarmas tras la configuración.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP Q20 con Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación, alertas SOS y telemetría de seguridad que provee el Q20 mediante su posicionamiento híbrido y sensores de seguridad. Apuntar el dispositivo al endpoint y puerto de Plaspy permite monitoreo en tiempo real, reproducción histórica de rutas y flujos de trabajo de alarmas que ayudan a los equipos a responder más rápido y a gestionar personal o activos de manera más eficaz.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer setup instructions verify details on the GOTOP website https://www.gotop.cc/ as device configuration methods and firmware behavior can change over time.
