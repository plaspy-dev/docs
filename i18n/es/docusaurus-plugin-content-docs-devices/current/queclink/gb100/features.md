---
slug: /queclink/gb100/features
id: gb100-features
sidebar_label: Features
title: QuecLink - GB100 Features
sidebar_class_name: menu_item_tracker
description: Rastreador vehicular IP65 compacto con GNSS preciso y telemetría de comportamiento compatible con Plaspy
keywords:
  - funciones QuecLink GB100
  - características rastreador GPS QuecLink GB100
  - compatibilidad GB100 Plaspy
  - rastreador vehicular GB100
  - eventos acelerómetro GB100
  - almacenamiento mensajes GB100
  - rastreador IP65 GB100
  - rastreador GPS para UBI
  - seguimiento de flotas GB100
  - rastreador para financiamiento automotriz
---

# QuecLink - GB100: Características

Esta página presenta el contexto público de las características para el uso del rastreador vehicular QuecLink GB100 con Plaspy. Resume las capacidades del dispositivo que resultan relevantes para usuarios e integradores de Plaspy, incluyendo cómo el equipo entrega posiciones y telemetría de eventos que Plaspy puede aprovechar en mapas en vivo, alertas y análisis.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. El resumen que sigue se basa en la descripción del GB100 y destaca capacidades prácticas sin sustituir la documentación oficial de QuecLink.

## Resumen de características

El GB100 es un rastreador GPS compacto diseñado para implementaciones telemáticas a gran escala, como seguros basados en uso, financiamiento automotriz y gestión de flotas. Integra posicionamiento GNSS de alta sensibilidad, comunicaciones en múltiples modos, un acelerómetro interno de 3 ejes y un robusto buffer de mensajes dentro de una carcasa IP65, lo que facilita instalaciones ocultas y protege los datos durante interrupciones de conectividad.

- Seguimiento GNSS en tiempo real con posicionamiento de alta sensibilidad y precisión reportada por debajo de 2.5 m CEP para ubicaciones fiables.
- Acelerómetro de 3 ejes integrado con alta tasa de muestreo y trazas pre y post evento para capturar comportamientos del conductor y choques.
- Comunicaciones flexibles mediante TCP, UDP y SMS para entregar telemetría a plataformas back end como Plaspy.
- Almacenamiento interno de mensajes de hasta 10,000 entradas para preservar datos durante cortes temporales de red.
- Carcasa compacta con clasificación IP65 diseñada para montajes bajo capó u ocultos que reduce la complejidad y el costo de instalación.

## Características principales del QuecLink - GB100

- Receptor GNSS u-blox All-in-One de alta sensibilidad con tiempo rápido al primer fix y registro de 1 segundo durante la conducción.
- GSM quad band con soporte GPRS y transporte configurable por TCP, UDP o SMS para reportes en tiempo real y alternativas de respaldo.
- Acelerómetro de 3 ejes incorporado con muestreo a 100 Hz, paquetes de datos de impacto y trazas pre/post evento.
- Batería interna recargable NiMH de respaldo y amplio rango de tensión de operación para compatibilidad con una gran variedad de vehículos.
- Buffer en el dispositivo capaz de almacenar colas de mensajes extensas para proteger la integridad de los datos durante cortes.
- Protección ambiental con carcasa impermeable IP65 para montaje vehicular y aplicaciones con instalaciones ocultas.
- Reportes programables por tiempo, distancia y kilometraje, además de soporte configurable de geocercas y alertas de velocidad.

## Cómo funcionan estas características con Plaspy

Plaspy recibe la telemetría y los datos de eventos del GB100 y los pone a disposición en mapas, alertas y flujos de trabajo analíticos. Plaspy detecta automáticamente el protocolo del rastreador e ingiere las secuencias de posición y evento para que los equipos operativos puedan monitorear activos y construir respuestas basadas en políticas.

- Las actualizaciones de ubicación en tiempo real y los reportes frecuentes durante la conducción aparecen en los mapas y vistas de seguimiento en vivo de Plaspy.
- Los eventos de comportamiento del conductor derivados de las trazas del acelerómetro están disponibles para análisis y flujos de puntuación UBI en Plaspy.
- Los mensajes almacenados en buffer se cargan cuando vuelve la conectividad, de modo que la telemetría histórica y los eventos llegan a Plaspy para informes completos.
- La telemetría de estado de alimentación y batería puede mostrarse en Plaspy para señalar pérdida de alimentación externa o manipulación del dispositivo.
- Las geocercas y alertas de velocidad configuradas en el equipo pueden desencadenar notificaciones y flujos automáticos en Plaspy.

## Casos de uso típicos

- Programas a gran escala de seguros basados en uso que dependen de telemetría GNSS y acelerómetro para scoring y suscripción.
- Gestión de flotas y supervisión de rutas con seguimiento en tiempo real, alertas de velocidad y monitoreo de geocercas.
- Financiamiento automotriz y monitoreo de activos con telemetría continua del vehículo y detección de pérdida de alimentación.
- Reconstrucción de accidentes y capacitación de conductores usando trazas pre y post evento del acelerómetro y datos de choque.
- Monitoreo antirrobo y flujos de recuperación impulsados por actualizaciones de ubicación y alertas de estado de energía.

## Notas sobre disponibilidad de funciones

- Conjuntos de funciones como intervalos de reporte, límites de geocerca y umbrales de eventos pueden variar según firmware y revisión de hardware.
- Las bandas celulares regionales y las variantes regulatorias pueden afectar el comportamiento de comunicaciones disponible y deben confirmarse para su mercado.
- Opciones de instalación, como montaje oculto bajo el capó, pueden influir en la recepción GPS; el rendimiento GNSS depende de la ubicación del dispositivo.
- Algunas funciones de gestión remota, como FOTA o ciertas opciones de configuración, pueden no estar especificadas para todas las revisiones de hardware.
- Para detalles de parámetros de dispositivo y las especificaciones más recientes consulte la documentación oficial de QuecLink.

## Por qué usar Plaspy con estas funciones

Usar el QuecLink GB100 con Plaspy ofrece a las organizaciones una vía práctica para recopilar telemetría de ubicación y comportamiento de forma consistente y a escala. El diseño del dispositivo prioriza la instalación oculta, el buffering confiable y la captura de eventos basada en acelerómetro, lo que encaja con las necesidades de Plaspy para seguimiento continuo, análisis de comportamiento y alertas operativas. Plaspy hace accesibles los datos del dispositivo mediante mapas en vivo, alertas e informes para que los equipos puedan actuar sobre señales de flota y riesgo casi en tiempo real.

Para saber más sobre cómo funciona Plaspy con rastreadores compatibles visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, detalles de firmware y orientaciones del fabricante verifique la documentación del GB100 en https://www.queclink.com/
