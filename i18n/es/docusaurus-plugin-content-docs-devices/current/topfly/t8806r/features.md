---
slug: /topfly/t8806r/features
id: t8806r-features
sidebar_label: Features
title: TopFly - T8806+R Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS TopFly T8806+R y su integración con Plaspy para rastreo de vehículos y activos
keywords:
  - Características TopFly T8806+R
  - Rastreador GPS TopFly T8806+R
  - Sensores BLE T8806+R
  - Monitoreo de combustible T8806+R
  - Compatibilidad TopFly Plaspy
  - Rastreo vehicular T8806+R
  - Rastreo en tiempo real T8806+R
  - Rastreador 2G quad band
  - GNSS multi constelaciones
  - Detección de encendido salida relé
---

# TopFly - Características del T8806+R

Esta página ofrece un panorama público de las funciones del rastreador TopFly T8806+R y cómo se aprovechan dentro de Plaspy. Describe las capacidades observables y orientadas al usuario del modelo, y explica cómo se mapean esas funciones a la supervisión, las alertas y los flujos operativos en la plataforma Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. La información que sigue se basa en la descripción del modelo proporcionada por el fabricante y se presenta como una guía práctica para usar el dispositivo con Plaspy, no como un sustituto del manual oficial del equipo.

## Resumen de características

El TopFly T8806+R es un rastreador vehicular cableado 2G diseñado para activos con alimentación. Está pensado para reportes continuos de ubicación, almacenamiento local durante períodos sin conectividad, compatibilidad con sensores externos por BLE y RS232, y un conjunto de entradas y salidas para detección de eventos y control. Estas capacidades lo hacen apropiado para seguimiento de flotas, monitoreo de combustible y supervisión básica de comportamiento del conductor cuando se integra con una plataforma de flotas como Plaspy.

- Actualizaciones de ubicación en tiempo real con reportes que pueden llegar hasta cada 3 segundos para seguimiento de alta resolución.
- Gran capacidad de búfer local, capaz de almacenar hasta alrededor de 60,000 puntos de ubicación para preservar el historial durante cortes de red.
- Soporte BLE 4.0 para trabajar con sensores TOPFLYtech BLE como temperatura, humedad, sensores de puerta y relés inalámbricos.
- Detección de encendido y salidas para relé, timbre o sirena que permiten control del vehículo o alertas sonoras cuando el hardware lo admite.
- Detección de eventos de conducción riesgosa, incluyendo aceleraciones bruscas, giros fuertes, frenadas intensas, choques y exceso de velocidad.
- Batería de respaldo y alertas por desconexión de alimentación para mantener la capacidad de notificación cuando se pierde la alimentación principal.

## Características principales del TopFly - T8806+R

- Operación 2G multibanda cableada con compatibilidad GSM phase 2+ para cobertura celular amplia en regiones soportadas.
- Soporte GNSS integrado para múltiples constelaciones, incluyendo GPS, GLONASS, Galileo y Beidou, que mejora el posicionamiento.
- Capacidad de seguimiento en tiempo real con intervalos de reporte configurables hasta aproximadamente 3 segundos.
- Memoria búfer local capaz de almacenar aproximadamente 60,000 puntos de ubicación para subirlos cuando se restaura la conectividad.
- Compatibilidad BLE 4.0 para emparejar con el ecosistema de sensores TOPFLYtech y obtener telemetría auxiliar.
- Detección de encendido y salidas dedicadas que pueden usarse para control de relé, timbre o sirena.
- Entradas analógicas e interfaz RS232, que permiten la conexión a dispositivos externos incluyendo sensores ultrasónicos de combustible.
- Varias entradas y salidas digitales y una batería de respaldo interna para soportar alertas por desconexión y ofrecer cierta resiliencia de energía.

## Cómo funcionan estas funciones con Plaspy

Cuando el T8806+R reporta a Plaspy, sus datos de seguimiento y eventos quedan disponibles para supervisión y revisión histórica. Plaspy recibe e interpreta la información del dispositivo para que los equipos puedan ver ubicaciones en vivo, rastrear movimientos históricos y actuar sobre las alertas generadas por el rastreador y los sensores conectados.

- Ubicación y movimiento en vivo en el mapa de Plaspy con frecuencia de actualización configurable según el reporte del dispositivo.
- Puntos de ubicación almacenados en búfer que se suben tras restaurarse la conexión y se muestran en el historial de Plaspy para mantener la continuidad del rastreo.
- Lecturas de sensores BLE como temperatura, humedad y estado de puertas pueden desplegarse en Plaspy cuando los sensores BLE están emparejados y el dispositivo está configurado para reenviar esa telemetría.
- Eventos como encendido/apagado, desconexión de alimentación y alertas por conducción riesgosa se presentan como notificaciones o eventos en Plaspy para conocimiento operativo.
- Datos de sensores de combustible transmitidos por el rastreador a través de entradas analógicas o RS232 pueden mostrarse como telemetría o parámetros personalizados en Plaspy cuando la plataforma lo soporta.
- Las salidas disponibles en el dispositivo pueden supervisarse y, según la configuración y el firmware, controlarse o activarse mediante comandos compatibles entre el dispositivo y la plataforma.

## Casos de uso típicos

- Rastreo de ubicación de vehículos de flota con actualizaciones de alta frecuencia para supervisión de rutas y despacho.
- Monitoreo de nivel de combustible usando un sensor ultrasónico conectado a entradas analógicas o RS232.
- Monitoreo de cadena de frío o condiciones de carga emparejando sensores BLE de temperatura y humedad al rastreador.
- Detección de robo o manipulación mediante alertas por desconexión de alimentación y notificaciones de batería de respaldo.
- Programas de seguridad y conciencia del conductor mediante eventos detectados de conducción brusca y exceso de velocidad.
- Monitoreo remoto de activos donde el almacenamiento en búfer preserva el historial en zonas sin cobertura.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y las revisiones de hardware pueden modificar el comportamiento funcional y los formatos de reporte; las capacidades descritas aquí pueden variar según la unidad y su firmware.
- La compatibilidad con sensores BLE depende de los sensores TOPFLYtech específicos y del soporte de firmware para reenviar la telemetría.
- La disponibilidad de cobertura 2G depende del soporte de los operadores de red regionales y puede afectar la conectividad del dispositivo.
- Las funciones de RS232 y entradas analógicas requieren una instalación y configuración correctas para entregar la telemetría esperada, como lecturas de combustible.
- Plaspy puede detectar protocolos comunes de rastreadores de forma automática, pero puede ser necesaria la configuración del dispositivo y de la cuenta de Plaspy para habilitar el uso completo de las funciones.

## Por qué usar Plaspy con estas funciones

Usar el TopFly T8806+R con Plaspy ofrece a las organizaciones un punto centralizado para ver ubicación, telemetría de sensores y eventos del dispositivo. Plaspy recoge las posiciones rastreadas, el historial almacenado en búfer y las alertas generadas por el equipo, de modo que los equipos pueden supervisar vehículos y activos en tiempo real, revisar viajes históricos y responder con rapidez a eventos de alimentación o seguridad.

Plaspy está diseñado para integrar los datos entrantes de los rastreadores y presentarlos en paneles, mapas y listas de alertas que ayudan a los equipos operativos a mantener visibilidad y control. Si desea conocer más sobre cómo Plaspy puede aprovechar el TopFly T8806+R para sus necesidades de monitoreo de flotas o activos visite https://www.plaspy.com. Para las especificaciones oficiales más recientes, notas de firmware y guías de instalación consulte al fabricante en https://www.topflytech.com/ para verificar el comportamiento y las funciones soportadas del dispositivo.
