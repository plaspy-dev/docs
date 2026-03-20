---
slug: /laipac/starfinder_datalogger/protocol
id: starfinder_datalogger-protocol
sidebar_label: Protocol
title: Laipac - Starfinder Datalogger Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Laipac Starfinder Datalogger con Plaspy
keywords:
  - Protocolo Laipac Starfinder Datalogger
  - Protocolo GPS Laipac Starfinder Datalogger
  - Protocolo de comunicación Laipac Starfinder Datalogger
  - Integración NMEA Starfinder Datalogger
  - Compatibilidad de trackers Plaspy
  - Protocolo de rastreador GPS Laipac
  - Protocolo de rastreo Starfinder Datalogger
  - Protocolo GPS Laipac Plaspy
  - Rastreo de vehículos Laipac Starfinder
  - Telemetría NMEA Laipac
---

# Laipac - Protocolo Starfinder Datalogger

Esta página describe el contexto público del protocolo para usar el Laipac Starfinder Datalogger con Plaspy. Se centra en cómo el dispositivo informa posiciones y waypoints de forma que Plaspy pueda recibirlos y mostrarlos, basándose en las salidas NMEA estándar del Starfinder a través de interfaces cableadas y en el registro persistente de waypoints a bordo, pensado para análisis posteriores a la misión.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy. Para integraciones en red, el servidor de Plaspy es accesible en d.plaspy.com o 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene validar los detalles del dispositivo al planear una integración.

## Resumen del protocolo

El Starfinder Datalogger ofrece salida estándar de sentencias NMEA pensadas para telemetría en vivo y un registro local de waypoints que puede importarse posteriormente. El protocolo de comunicación del dispositivo define cómo se entregan los datos de ubicación, tiempo y estado a un punto de ingestión que luego reenvía esa información a Plaspy para seguimiento en tiempo real o para reproducción archivada.

- Transporta la información de ubicación y estado del Starfinder como flujos de sentencias NMEA para flujos de trabajo en tiempo real.
- Permite la identificación del dispositivo y la continuidad de sesión para que Plaspy asocie los datos entrantes con el activo correcto.
- Proporciona registros persistentes de waypoints que pueden exportarse e importarse en Plaspy para análisis históricos e informes.
- Soporta modelos de integración cableada donde las salidas RS232 o USB-C se reencaminan mediante un gateway u host hacia Plaspy.
- Actúa como puente entre la telemetría a bordo y los paneles de Plaspy para monitoreo y mapeo.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del tracker para dispositivos que reportan al endpoint compartido de Plaspy. Cuando un Starfinder o su gateway reenvía NMEA u otra telemetría al endpoint de Plaspy, la plataforma asocia los datos entrantes con el dispositivo y la lógica de parseo adecuados sin que, en la mayoría de los casos, sea necesario seleccionar el protocolo manualmente.

- Plaspy recibe tráfico de dispositivos en d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- El mismo puerto se utiliza para todos los dispositivos compatibles con Plaspy, lo que simplifica la configuración del endpoint.
- Los dispositivos pueden configurarse para enviar datos por UDP o TCP al endpoint de Plaspy en el puerto 8888.
- En configuraciones típicas, usted configura el dispositivo o el gateway para reportar a d.plaspy.com y Plaspy gestiona la identificación del protocolo automáticamente.
- Si un dispositivo reenvía NMEA mediante un gateway u host, asegúrese de que ese gateway reenvíe el flujo al endpoint de Plaspy para permitir la detección automática.

## Contexto de transporte y conexión

El Starfinder es, principalmente, una fuente NMEA cableada y la descripción proporcionada no incluye un módem celular integrado. Para integraciones con Plaspy, un gateway o host en red suele reenviar los datos del Starfinder a Plaspy a través de Internet. La elección del transporte de red y la direccionamiento determinan cómo el dispositivo alcanza los servidores de Plaspy.

- El dispositivo o un gateway intermedio pueden reenviar flujos a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todos los dispositivos compatibles; los dispositivos pueden usar UDP o TCP en ese puerto según capacidades y configuración.
- Las salidas NMEA cableadas por RS232 o USB-C se alimentan típicamente a un gateway, radio de telemetría o equipo host que reenvía los datos a Plaspy.
- Usar un gateway permite encapsular las señales NMEA locales del Starfinder y enviarlas a Plaspy por el transporte de red elegido.
- Asegúrese de que el enrutamiento de red, las reglas de firewall y la configuración del gateway permitan sesiones salientes UDP o TCP hacia d.plaspy.com en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y software pueden cambiar el conjunto exacto de sentencias NMEA o los detalles de telemetría que el dispositivo emite.
- Las revisiones de hardware y las configuraciones de fábrica pueden introducir variaciones en la cadencia de salida por defecto o en los parámetros de interfaz para RS232 y USB-C.
- El Starfinder suministra flujos NMEA y registros de waypoints; la forma en que se exportan los registros y sus formatos exactos pueden variar según el firmware.
- La elección de transporte UDP frente a TCP puede afectar las características de entrega y debe coincidir con los requisitos del gateway y la red.
- Valide la configuración del dispositivo para asegurar que el gateway u host reenvíe el flujo correcto a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Consulte siempre la documentación del fabricante para comportamientos específicos de firmware antes de desplegar a escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Starfinder y cómo Plaspy recibe esos datos ayuda a garantizar una configuración exitosa, telemetría fiable y registros históricos precisos. Conocer las opciones de transporte, el cableado de interfaces y las diferencias de firmware reduce la fricción en la integración y acorta los ciclos de resolución de problemas.

- Confirma la correcta configuración del dispositivo para que los datos lleguen al endpoint de Plaspy de forma fiable.
- Ayuda a determinar si es necesario contar con un gateway u host que reenvíe los flujos NMEA por RS232 o USB-C hacia Plaspy.
- Facilita la resolución de problemas cuando las actualizaciones en tiempo real o las importaciones de registros no aparecen en Plaspy.
- Orienta la decisión sobre usar UDP o TCP en la ruta de red hacia d.plaspy.com en el puerto 8888.
- Reduce el tiempo de integración al alinear los ajustes de salida del dispositivo con las expectativas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Laipac Starfinder Datalogger con Plaspy ofrece a los equipos una forma directa de combinar el registro preciso de waypoints con el monitoreo en vivo. Las salidas NMEA estándar del Starfinder se integran con facilidad en gateways de telemetría y sistemas host que reenvían datos a Plaspy para mapeo, alertas y supervisión de flotas. La combinación de registros locales persistentes y flujos en vivo soporta tanto la conciencia situacional inmediata como el trabajo forense o de mapeo posterior.

Para saber más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente del fabricante en https://laipac.com/.
