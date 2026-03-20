---
slug: /atrack/au7/features
id: au7-features
sidebar_label: Features
title: ATrack - AU7 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador ATrack AU7 y su integración con Plaspy para rastreo y visibilidad de flotas
keywords:
  - Características ATrack AU7
  - Rastreador GPS AU7
  - ATrack AU7 Plaspy
  - Rastreo de vehículos AU7
  - Rastreador GPS GLONASS AU7
  - Seguimiento de flotas AU7
  - Soporte de geocercas AU7
  - FOTA firmware AU7
  - Accesorios 1-Wire AU7
  - Encriptación AES AU7
---

# ATrack - Características del AU7

Esta página ofrece una visión pública y centrada en las funciones del ATrack AU7 y cómo sus capacidades se integran con Plaspy. Está pensada para describir las funcionalidades del rastreador y las funciones prácticas relevantes para los usuarios de Plaspy, además de ayudar a los equipos a comprender cómo se puede emplear el dispositivo para el rastreo de vehículos y la monitorización operativa a través de la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el modelo regional, el tipo de instalación y la configuración específica del fabricante. Para comandos específicos del dispositivo, notas de firmware y los detalles técnicos más recientes, consulte la documentación oficial de ATrack y las notas de lanzamiento de firmware.

## Resumen de características

El ATrack AU7 es un rastreador vehicular GPS/GLONASS diseñado para ofrecer conectividad flexible y múltiples opciones de accesorios. Combina varios métodos de reporte y comunicación con lógica de eventos configurable y soporte para sensores externos, lo que lo hace adecuado tanto para seguimiento básico de posición como para implementaciones más avanzadas de monitorización vehicular.

- Posicionamiento Multi GNSS con soporte para GPS y GLONASS para una localización fiable.
- Compatibilidad con múltiples tecnologías de redes móviles para permitir el reporte de datos y la comunicación remota.
- Lógica de reporte y eventos configurable para ajustar la transmisión de datos y reducir costos de comunicación.
- Soporte para accesorios e interfaces externas como RS-232, intérprete de CAN Bus y dispositivos 1-Wire para ampliar la telemetría y la identificación.
- Detección de movimiento y comportamiento de conducción integrados mediante un acelerómetro de 3 ejes y controles de evento configurables para detectar conducción brusca.

## Características principales del ATrack AU7

- Posicionamiento por satélite GPS y GLONASS para un rastreo preciso de ubicación.
- Opciones de comunicación de datos celulares que incluyen tecnologías CDMA, UMTS y HSPA.
- Modos de reporte flexibles y un mecanismo de reporte personalizable para definir intervalos y disparadores de envío.
- Interfaces externas como RS-232, intérprete de CAN Bus y soporte 1-Wire para accesorios como Dallas Key y sensores de temperatura.
- Encriptación AES-128 para proteger los datos transmitidos.
- Acelerómetro integrado de 3 ejes y soporte de sensor de velocidad del vehículo (VSS) para detección de eventos y monitorización del comportamiento al conducir.
- Soporte de geocercas para hasta 64 zonas definidas por el usuario con formas circulares, rectangulares y poligonales.
- Actualización de firmware por aire (FOTA) mediante FTP y opciones de preferencia de roaming.

## Cómo funcionan estas funciones con Plaspy

Plaspy puede recibir e interpretar los reportes del AU7 para ofrecer ubicación en tiempo real, historial de eventos y visibilidad operativa. La capacidad de configurar los reportes y el soporte de accesorios del AU7 permiten a los equipos exponer los datos necesarios dentro de Plaspy para la monitorización y la toma de decisiones.

- Actualizaciones de posición e historial grabados en Plaspy para reproducción de rutas y cronologías de ubicación.
- Notificaciones de eventos originadas por disparos del acelerómetro, detección de conducción brusca, eventos VSS y transiciones de geocercas, visibles en los paneles de Plaspy.
- Datos de accesorios y entradas externas, como identificación por 1-Wire y sensores compatibles, pueden reflejarse como atributos del dispositivo o eventos cuando son reportados por el equipo.
- Las transmisiones seguras del AU7 mediante AES-128 ayudan a mantener la privacidad de los datos al reportar a Plaspy.
- Plaspy detecta automáticamente muchos protocolos de rastreadores y acepta reportes por TCP o UDP, facilitando la integración de dispositivos AU7 en la plataforma.
- El uso de la dirección de servidor y la configuración de puerto unificada de Plaspy simplifica la incorporación de dispositivos y centraliza los datos entrantes para su uso operativo.

## Casos de uso típicos

- Rastreo de ubicación de flotas e historial de rutas para operaciones diarias y despacho.
- Identificación de conductores y control de acceso básico mediante integración de Dallas Key 1-Wire.
- Monitorización de eventos de conducción brusca y alertas relacionadas con el movimiento para apoyar programas de seguridad.
- Monitorización basada en zonas con múltiples geocercas para reportes de entrada y salida de sitios.
- Gestión remota de dispositivos y actualizaciones de firmware mediante FOTA para mantener equipos en campo.
- Integración de datos de accesorios, como sensores de temperatura, para aplicaciones que requieren monitoreo ambiental junto con la ubicación.

## Notas sobre la disponibilidad de funciones

- La disponibilidad de funciones puede depender de la versión de firmware del AU7 y de la revisión de hardware específica en uso.
- Algunas funciones de accesorios requieren cableado, instalación y modelos de accesorios compatibles con el AU7.
- El soporte de bandas celulares regionales y el comportamiento de roaming se determinan por la variante del dispositivo y la configuración de la SIM/red.
- Ciertas funciones e integraciones avanzadas, como el intérprete de CAN Bus, soporte de voz y wire-tap, dependen de las opciones de firmware del fabricante y de las regulaciones locales.
- Siempre confirme las capacidades exactas de una unidad AU7 específica revisando la documentación del fabricante y los registros de cambios.

## Por qué usar Plaspy con estas funciones

Usar el ATrack AU7 con Plaspy permite a las organizaciones recopilar datos configurables y orientados a eventos, y mostrarlos en una vista operativa unificada. Plaspy transforma las posiciones reportadas, eventos de geocercas, alertas de movimiento y entradas de accesorios en información accionable para la gestión de flotas, la monitorización de seguridad y la planificación operativa.

Si usted desea saber más sobre cómo Plaspy puede funcionar con el ATrack AU7 y otros dispositivos compatibles, visite https://www.plaspy.com. Para las especificaciones de dispositivo más recientes, detalles de firmware y documentación técnica oficial, consulte al fabricante en https://www.atrack.com.tw/.
