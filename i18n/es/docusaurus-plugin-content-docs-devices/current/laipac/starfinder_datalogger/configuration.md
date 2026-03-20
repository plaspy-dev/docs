---
slug: /laipac/starfinder_datalogger/configuration
id: starfinder_datalogger-configuration
sidebar_label: Configuration
title: Laipac - Starfinder Datalogger Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Laipac Starfinder Datalogger a Plaspy para transmisión NMEA en vivo e importación de puntos de ruta
keywords:
  - configuración Laipac Starfinder Datalogger
  - configuración Starfinder Datalogger
  - rastreador GPS Laipac Plaspy
  - configuración NMEA Starfinder
  - configuración registrador de datos GPS
  - configuración mapeo GPS vehicular
  - configuración rastreador Plaspy
  - configuración NMEA RS232 USB
  - seguimiento de flotas Starfinder
  - integración Starfinder Plaspy
---

# Laipac - Starfinder Datalogger Configuración

Esta página ofrece contexto público de configuración para usar el Laipac Starfinder Datalogger con Plaspy. Resume los ajustes prácticos y los pasos de preparación necesarios para conectar el Starfinder a Plaspy y habilitar la transmisión NMEA en vivo y la importación de puntos de ruta, además de indicar los parámetros de servidor compartidos que requiere Plaspy.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del tracker, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía para preparar el dispositivo y el entorno host para la integración con Plaspy y consulte la documentación de Laipac para comandos específicos del equipo y detalles de conexión física.

## Resumen de la configuración

El objetivo de la configuración es dirigir el Starfinder Datalogger hacia Plaspy y asegurar que la transmisión NMEA o las exportaciones de puntos de ruta lleguen a la plataforma para monitoreo en tiempo real y análisis histórico. La configuración se centra en las salidas NMEA por cable y en cualquier host o gateway que vaya a reenviar los datos a Plaspy.

- Configure el Starfinder para enviar salida NMEA a un gateway o host que pueda reenviar a Plaspy
- Ingrese el endpoint del servidor de Plaspy y verifique que la configuración de transporte coincida con el dispositivo o gateway
- Guarde y aplique los ajustes en el Starfinder o en el gateway host y reinicie el hardware si es necesario
- Valide la conectividad para que el dispositivo aparezca y se actualice en los paneles de Plaspy
- Exporte o cargue los registros persistentes de puntos de ruta desde el datalogger para importación posterior si lo requiere

## Ajustes del servidor de Plaspy

Configure su gateway o el host que reenvía los datos NMEA del Starfinder con los siguientes ajustes del servidor de Plaspy:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transporte: UDP o TCP
- detección automática de protocolo en Plaspy

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del tracker una vez que el dispositivo empiece a enviar datos al endpoint del servidor.

## Requisitos típicos antes de la instalación

- Confirme que el Starfinder tenga alimentación y sea accesible mediante las interfaces cableadas documentadas RS232 o USB C
- Disponga de la Guía de Inicio Rápido del fabricante o de la herramienta de configuración del dispositivo
- Prepare un equipo host, gateway o interfaz de telemetría para recibir la salida NMEA y reenviarla a Plaspy
- Asegúrese de que el host pueda comunicarse con d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte elegido
- Verifique recepción básica de GNSS para que el Starfinder genere sentencias NMEA válidas para las pruebas
- Tenga acceso administrativo al dispositivo o al host para cambiar los ajustes de servidor y transporte

## Cómo se conecta este tracker a Plaspy

El Starfinder Datalogger proporciona salida NMEA estándar que un host local o gateway envía a Plaspy. En una implementación típica, el datalogger transmite en vivo las sentencias de posición mientras mantiene registros persistentes de puntos de ruta para importación posterior.

- El dispositivo entrega sentencias NMEA en vivo por RS232 o USB C a un host o colector de datos conectado
- El host o gateway se configura para enviar el flujo NMEA recopilado a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Puede seleccionar UDP o TCP en el host reenviante según los requisitos de red y del equipo
- Plaspy detecta automáticamente el protocolo entrante y registra la transmisión del dispositivo para el seguimiento en tiempo real
- Los registros persistentes de puntos de ruta del Starfinder pueden exportarse y cargarse en Plaspy para reproducir y analizar misiones

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Laipac o al software descrito en la Guía de Inicio Rápido del Starfinder o en la documentación del fabricante
2. Conecte el Starfinder a un equipo host o gateway usando RS232 o USB C para poder efectuar cambios de configuración
3. Ingrese d.plaspy.com o 54.85.159.138 como endpoint del servidor en la configuración del host o gateway
4. Establezca el puerto del servidor en 8888, tal como requiere Plaspy
5. Elija UDP o TCP como transporte si el host o dispositivo solicita una selección explícita
6. Aplique o guarde la configuración y reinicie el dispositivo o el host si la herramienta o el firmware requieren un reinicio
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de datos a la plataforma y confirmando las actualizaciones en tiempo real

## Ejemplos de comandos de configuración

La información pública disponible para el Starfinder Datalogger no incluye cadenas de comandos específicas del dispositivo en esta guía. Los comandos exactos de configuración dependen de la utilidad de configuración de Laipac, la versión de firmware o el software host que utilice para reenviar datos NMEA a Plaspy.

Al utilizar una herramienta del fabricante o un gateway, busque campos para establecer el host y el puerto del servidor y una opción para elegir UDP o TCP. Utilice los valores del servidor de Plaspy indicados más arriba al ingresar la información del servidor en esas herramientas.

## Notas de configuración

- Las revisiones de firmware y las utilidades del proveedor pueden cambiar las opciones de menú disponibles y la sintaxis de los comandos; consulte siempre la Guía de Inicio Rápido del Starfinder o la documentación del fabricante
- Elija TCP cuando necesite entrega orientada a la conexión y gestión de sesión; elija UDP para menor overhead y reenvío de datagramas más simple cuando sea aceptable
- Dado que Plaspy usa el mismo puerto para todos los dispositivos compatibles, concéntrese en el endpoint del servidor y la selección del transporte en lugar de asignaciones de puerto únicas
- El Starfinder ofrece salida NMEA cableada por RS232 y USB C, así que asegúrese de que su host o gateway admita la interfaz física escogida
- Valide la conectividad en un entorno controlado antes de desplegar en producción para confirmar que las sentencias NMEA se parsean y son visibles en Plaspy

## Por qué usar Plaspy con esta configuración

Usar el Laipac Starfinder Datalogger con Plaspy proporciona a las organizaciones seguimiento en vivo sencillo y archivado confiable de puntos de ruta. Las salidas NMEA estándar del Starfinder y su registro persistente de datos encajan bien con los flujos de trabajo de Plaspy para monitoreo en tiempo real, análisis posterior a la misión y visibilidad consolidada de la flota.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details and firmware notes with Laipac at https://laipac.com/ to ensure your configuration remains current with manufacturer updates.
