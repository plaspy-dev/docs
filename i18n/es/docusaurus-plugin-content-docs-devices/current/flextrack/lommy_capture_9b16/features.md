---
slug: /flextrack/lommy_capture_9b16/features
id: lommy_capture_9b16-features
sidebar_label: Features
title: Flextrack - Lommy Capture 9B16 Features
sidebar_class_name: menu_item_tracker
description: Características del rastreador GPS sin batería para remolques y caravanas y compatibilidad con Plaspy para visibilidad discreta en tiempo real
keywords:
  - Flextrack Lommy Capture 9B16
  - Características Lommy Capture
  - Lommy Capture compatible con Plaspy
  - rastreador GPS para remolques
  - dispositivo de seguimiento para caravanas
  - rastreador por captura de energía
  - informes adaptativos GNSS
  - rastreador discreto IP65
  - seguimiento por detección de movimiento
  - seguimiento de flotas Plaspy
---

# Flextrack - Lommy Capture 9B16: Características

Esta página resume el conjunto público de características para el uso del Flextrack Lommy Capture 9B16 con Plaspy. Se centra en las capacidades prácticas, el comportamiento operativo típico y la forma en que el dispositivo puede integrarse en los flujos de trabajo de monitorización de flotas y rastreo de activos impulsados por Plaspy.

La disponibilidad exacta de funciones y el comportamiento pueden variar según la versión de firmware, la revisión de hardware, la variante regional y los detalles de cada instalación. Para especificaciones finales del dispositivo, instrucciones de configuración y cuestiones regulatorias, consulte la documentación del fabricante y las notas de la versión.

## Resumen de funciones

El Lommy Capture 9B16 es un rastreador GPS compacto sin batería pensado para instalación oculta en alojamientos de luces de remolques, caravanas y otros activos remolcados. Su propuesta principal es bajo mantenimiento, posicionamiento discreto y compatibilidad con Plaspy para ofrecer visibilidad de activos en tiempo real.

- Funcionamiento sin batería mediante captura de energía de los circuitos de freno y direccionales, lo que permite despliegues prolongados sin cambiar baterías.
- Conectividad celular con LTE Cat M1 y retroceso a 2G, con soporte de reportes por UDP o SMS hacia backends compatibles con Plaspy.
- GNSS multiconstelación con SBAS y asistencia GNSS para obtener fijaciones de posición más rápidas y fiables.
- Sensor de movimiento integrado para detectar desplazamientos y activar un reporte adaptativo que conserve la carga captada.
- Almacenamiento local en flash para guardar posiciones y telemetría cuando no hay conectividad y enviarlas posteriormente.
- Carcasa discreta con clasificación IP65, diseñada para instalaciones en el interior de luminarias para una colocación poco visible y resistente a manipulaciones.

## Funciones principales del Flextrack - Lommy Capture 9B16

- Captura de energía desde circuitos de iluminación del vehículo para operar sin batería cuando existe alimentación externa.
- Transporte de datos celulares con soporte para reportes por UDP o SMS hacia plataformas de monitoreo.
- GNSS multiconstelación que incluye GPS, GLONASS, GALILEO, BEIDOU y QZSS, además de asistencia SBAS.
- Lógica de reportes adaptativa que incrementa la frecuencia de actualización cuando se está cargando y la reduce cuando la energía es limitada.
- Sensor de movimiento integrado de 3 ejes para detectar actividad y optimizar el comportamiento de reportes.
- 2 MB de memoria flash local para almacenar posiciones y telemetría durante cortes de conectividad.
- Carcasa compacta IP65 pensada para instalaciones dentro de luminarias para reducir la visibilidad y el riesgo de manipulación.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el Lommy Capture 9B16 entrega señales de ubicación y actividad que Plaspy puede mostrar, registrar y usar para alertas y análisis. Plaspy detecta automáticamente protocolos comunes de trackers e ingiere los datos del dispositivo para monitorización e informes históricos.

- El dispositivo reporta fijaciones GNSS y actividad de movimiento a Plaspy mediante UDP o SMS, de modo que las actualizaciones de ubicación aparecen en los paneles de Plaspy.
- El reporte adaptativo reduce mensajes innecesarios cuando el rastreador no tiene alimentación o está estacionario, y aumenta la cadencia cuando se detecta movimiento o alimentación externa.
- Los reportes en búfer almacenados en la memoria flash local se reenvían a Plaspy una vez que la conectividad o la alimentación se restablecen, preservando el historial de ruta.
- Los eventos del sensor de movimiento se traducen en indicadores de actividad y pueden desencadenar alertas en Plaspy por posible desplazamiento o manipulación.
- Plaspy acepta formatos de telemetría estándar y puede correlacionar los datos del Lommy Capture con otros activos en vistas de flota o exportaciones históricas.
- Endpoints de Plaspy como https://d.plaspy.com pueden recibir el tráfico del dispositivo y la plataforma ayudará a visibilizar ubicación, actividad y datos en búfer en toda su flota.

## Casos de uso típicos

- Rastreo discreto de remolques y caravanas cuando la instalación oculta y el bajo mantenimiento son prioritarios.
- Monitorización antirrobo para activos remolcados usando detección de movimiento y colocación oculta dentro de luminarias.
- Visibilidad a largo plazo de activos de flota cuando el reemplazo de baterías sería impráctico o costoso.
- Registro de historial de rutas y generación de informes de uso para remolques y caravanas de alquiler.
- Integraciones donde la posición y los datos de movimiento del Lommy Capture se combinan con otros sistemas telemáticos o de negocio a través de Plaspy.

## Notas sobre disponibilidad de funciones

- Las revisiones de firmware y software pueden cambiar el comportamiento de reporte, las salidas de diagnóstico disponibles y las estrategias de gestión de energía.
- Las revisiones de hardware o variantes regionales pueden afectar las bandas celulares soportadas y el comportamiento de retroceso.
- Detalles de instalación como cableado, sellado y ubicación del montaje influyen en la energía captada y la cadencia de reportes.
- Las aprobaciones regulatorias locales y la disponibilidad de operadores pueden afectar la conectividad celular y la entrega de SMS.
- Consulte siempre la documentación del fabricante para conocer el conjunto exacto de funciones según el número de serie y el nivel de firmware específico.

## Por qué usar Plaspy con estas funciones

Usar el Lommy Capture 9B16 con Plaspy ofrece a gerentes de flota e integradores una opción de bajo mantenimiento para añadir visibilidad en tiempo real de ubicación y actividad en activos remolcados. La combinación de captura de energía, reportes desencadenados por movimiento y almacenamiento local ayuda a mantener historial de posiciones útil con mínima intervención física y una instalación discreta.

Conozca más sobre cómo Plaspy puede incorporar la telemetría del Lommy Capture y otros datos de flota en el sitio web de Plaspy https://www.plaspy.com. Las características del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar las especificaciones y la guía de instalación actuales en el sitio del fabricante https://flextrack.dk.
