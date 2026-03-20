---
slug: /teltonika/ftm305/features
id: ftm305-features
sidebar_label: Features
title: Teltonika - FTM305 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Teltonika FTM305 y su integración con Plaspy para rastreo de e movilidad y activos industriales
keywords:
  - Teltonika FTM305
  - características FTM305
  - rastreador GPS FTM305
  - Teltonika FTM305 Plaspy
  - rastreador e-movilidad
  - rastreador CAN bus
  - rastreador IP67
  - rastreador LTE Cat M1
  - monitoreo de baterías
  - telemetría vehicular
---

# Teltonika - Características del FTM305

Esta página ofrece un resumen público de las funcionalidades del Teltonika FTM305 y explica cómo sus capacidades pueden aprovecharse con Plaspy para el monitoreo de vehículos y equipos. Se enfoca en información práctica y no sensible sobre qué datos reporta el dispositivo y cómo esos puntos de información mejoran la visibilidad en flujos de trabajo de gestión de flotas y activos con Plaspy.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, el modelo regional, el cableado de instalación y la implementación del fabricante. Para configuraciones específicas del dispositivo, señales compatibles y los detalles técnicos más recientes, consulte la documentación del fabricante y las notas de firmware de su dispositivo.

## Resumen de funciones

El FTM305 es un rastreador 4G LTE Cat M1 compacto, diseñado para e-movilidad y equipo industrial donde la robustez, el amplio rango de voltaje y la telemetría del vehículo son importantes. En Plaspy, el dispositivo puede proporcionar posición y telemetría derivada del CAN para ayudar a los operadores a supervisar activos, activar eventos y generar reportes.

- Posicionamiento GNSS en tiempo real apto para e-bikes, montacargas y otros equipos eléctricos compactos
- Captura de telemetría por CAN bus para mostrar datos del vehículo como señales de batería y voltaje cuando están disponibles
- Carcasa robusta con clasificación IP67 para montaje en exteriores y entornos industriales exigentes
- Soporte de entrada de voltaje amplio para sistemas de micromovilidad de baja tensión y equipos industriales de mayor voltaje
- Conectividad LTE Cat M1 con opciones de fallback para ampliar cobertura y reducir consumo de energía

## Características principales del Teltonika FTM305

- Receptor GNSS multi-constelación para mejorar la precisión y la fiabilidad del posicionamiento
- Conectividad celular LTE Cat M1 con fallback a NB2 y soporte 2G cuando aplica según la región
- Adquisición de datos por CAN bus para leer telemetría del vehículo y parámetros del sistema de gestión de baterías (BMS) cuando estén disponibles
- Amplio rango de entrada de CC, cubriendo 10–97 V para soportar diversos vehículos y equipos eléctricos
- Carcasa compacta con clasificación IP67 diseñada para uso exterior e industrial
- Compatibilidad con las herramientas de gestión remota de dispositivos de Teltonika para configuración y supervisión
- Variantes celulares específicas por región para ajustarse a las bandas de red locales y a los requisitos regulatorios

## Cómo funcionan estas capacidades con Plaspy

Plaspy puede recibir coordenadas GNSS y telemetría proveniente del CAN del FTM305 para que los operadores de flota vean la ubicación y las señales vehiculares relevantes en paneles, mapas y reportes. Plaspy detecta automáticamente muchos protocolos comunes de rastreadores y acepta flujos de datos de dispositivos para obtener visibilidad casi en tiempo real. Los dispositivos pueden configurarse para reportar a los endpoints de Plaspy usando los métodos de transporte estándar que soporta el rastreador.

- Seguimiento en mapa en vivo y rutas históricas basadas en las actualizaciones GNSS del dispositivo
- Telemetría derivada del CAN, como voltaje de batería y otras señales del vehículo, mostrada en paneles y gráficos de Plaspy
- Generación de eventos y alertas en Plaspy cuando las entradas CAN o GNSS cumplen reglas configuradas
- Funciones de geocercas, generación de informes y analítica que usan tanto la ubicación como la telemetría para apoyar las operaciones
- Visibilidad de estado y configuración remota compatible junto con la gestión remota de Teltonika cuando se configura para su despliegue

## Casos de uso típicos

- Rastreo y gestión de flotas de e-bikes y scooters para optimizar rutas y disponibilidad
- Monitoreo de montacargas, vehículos de traslado y equipos de almacén para obtener datos de posición y uso
- Información para la gestión de baterías en equipos eléctricos leyendo parámetros BMS por CAN cuando estén disponibles
- Coordinación logística de cambio de baterías y movimientos en estaciones de micro-movilidad
- Rastreo de activos robusto en exteriores para equipos expuestos a polvo y humedad
- Despliegues escalables en entornos urbanos e industriales usando variantes celulares adecuadas a cada región

## Notas sobre disponibilidad de funciones

- Algunas señales CAN y telemetría dependen del cableado del vehículo y de los datos concretos expuestos por la ECU en el bus CAN; no todos los vehículos ofrecen los mismos parámetros
- El soporte de bandas celulares y el comportamiento de fallback varían según el modelo regional y el código de producto; confirme la variante correcta para su zona
- La versión de firmware puede modificar las funciones soportadas, los nombres de señales y el comportamiento; revise las notas de la versión al actualizar dispositivos
- Capacidades remotas como configuración y monitoreo remoto requieren ajustes y acceso apropiados en las herramientas de gestión de Teltonika
- El método de instalación y el uso de interfaces externas pueden afectar qué entradas están disponibles para Plaspy

## Por qué usar Plaspy con estas funciones

Combinar el FTM305 con Plaspy ofrece a las operaciones una forma práctica de integrar la ubicación GNSS precisa y la telemetría vehicular en un único entorno de supervisión y generación de informes. Las herramientas de visualización, reglas y reportes de Plaspy convierten las entradas GNSS y CAN en información accionable para ruteo, planificación de mantenimiento y alertas operativas.

Learn more about how Plaspy can work with trackers like the FTM305 at https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time, so verify the latest device-specific information on the manufacturer site https://www.teltonika-gps.com/.
