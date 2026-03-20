---
slug: /queclink/gb100cg/features
id: gb100cg-features
sidebar_label: Features
title: QuecLink - GB100CG Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del QuecLink GB100CG y su integración con Plaspy para gestión de flotas y telemática de seguros
keywords:
  - Características QuecLink GB100CG
  - Rastreador GPS QuecLink GB100CG
  - Compatibilidad GB100CG Plaspy
  - Rastreador LTE QuecLink GB100CG
  - Sensor de movimiento GB100CG
  - GB100CG BLE 5.2
  - Capacidades de geocerca GB100CG
  - Rastreador UBI GB100CG
  - Rastreador vehicular QuecLink
  - Funciones antirrobo GB100CG
---

# QuecLink - Características del GB100CG

En esta página se describe el contexto de las funcionalidades públicas del tracker QuecLink GB100CG y su uso con Plaspy. Se resume lo que el GB100CG puede ofrecer en la práctica y cómo esas capacidades suelen integrarse y presentarse dentro de Plaspy para la gestión de flotas, telemática de seguros y procesos antirobo.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación, la variante regional y la implementación del fabricante. Considere siempre esas variables al planear despliegues y consulte la documentación del fabricante para detalles específicos del dispositivo y la información de firmware más reciente.

## Resumen de funcionalidades

El GB100CG es un rastreador compacto con montaje en batería, diseñado para aplicaciones de telemática automotriz y telemática para seguros. Combina cobertura celular amplia con detección de movimiento de alta frecuencia y emparejamiento Bluetooth de corto alcance para ofrecer informes de posición, movimiento y eventos adecuados para monitoreo en tiempo real, análisis de incidentes y servicios basados en uso.

- Conectividad LTE Cat 1 con fallback a 2G para cobertura amplia y reportes de ubicación continuos.
- Sensor de movimiento de alta frecuencia de 6 ejes que proporciona datos detallados de conducción y detección de eventos con nivel de choque.
- Caja compacta con grado IP67 y montaje en batería para instalaciones discretas y resistencia ambiental.
- Soporte BLE 5.2 para emparejar sensores y accesorios de corto alcance que amplían la telemetría disponible en Plaspy.
- Opciones de reporte configurables que incluyen informes por tiempo, distancia y kilometraje, además de eventos de geocerca y velocidad.

## Características principales del QuecLink GB100CG

- Conectividad principal LTE Cat 1 con fallback a GSM 2G para mantener comunicación donde la red primaria sea limitada.
- Sensor de movimiento de alta frecuencia de 6 ejes (acelerómetro 3 ejes + giroscopio 3 ejes) para análisis de comportamiento del conductor y recopilación de datos de choques.
- Carcasa impermeable IP67 y factor de forma compacto montado en batería, pensado para instalaciones discretas u ocultas.
- BLE 5.2 para emparejamiento de accesorios y telemetría de corto alcance, como sensores auxiliares y balizas.
- Reportes de eventos configurables, incluyendo informes programados, alarmas por velocidad y remolque, y entradas/salidas de geocerca.
- Lógica virtual de detección de encendido que combina entradas de voltaje y movimiento para segmentar viajes y generar alertas basadas en el encendido.
- Batería interna de respaldo y amplio rango de voltaje de entrada para continuar reportando durante cortes de energía del vehículo.
- Soporte multi-GNSS para ofrecer posicionamiento robusto mediante diferentes constelaciones satelitales regionales.

## Cómo funcionan estas funciones con Plaspy

Plaspy procesa la telemetría y los mensajes de eventos del GB100CG para ofrecer visibilidad, alertas y análisis. El dispositivo puede configurarse para reportar mediante TCP o UDP a los endpoints de Plaspy, y Plaspy detecta automáticamente los protocolos de tracker comunes para mapear los datos entrantes en la plataforma para seguimiento y procesamiento de eventos.

- Actualizaciones de ubicación en tiempo real e informes periódicos aparecen en los paneles de Plaspy para monitoreo en vivo y reproducción histórica.
- Registros de movimiento y choques de alta frecuencia se capturan como eventos y pueden utilizarse en Plaspy para reconstrucción de incidentes y análisis de conducción agresiva.
- Disparadores de geocerca, alarmas de velocidad, reportes de remolque y pérdida de alimentación generan notificaciones inmediatas y crean registros históricos de eventos para auditoría y respuesta.
- La telemetría de sensores BLE que reenvía el GB100CG puede correlacionarse en Plaspy con eventos GPS para enriquecer el estado del activo y las alertas contextuales.
- La detección virtual de encendido facilita la segmentación de viajes y los reportes basados en uso dentro de Plaspy para flujos de trabajo de UBI y facturación.

## Casos de uso típicos

- Telemática para seguros basada en uso, donde el muestreo de movimiento de alta frecuencia respalda la puntuación de riesgo y la reconstrucción de siniestros.
- Gestión de flotas para seguimiento en tiempo real, verificación de rutas, registro de kilometraje y monitoreo del comportamiento del conductor.
- Recuperación de vehículos robados y monitoreo antirrobo aprovechando detección de remolque, alertas por interferencia y reportes persistentes ante pérdida de energía.
- Detección de choques y análisis post incidente usando datos de movimiento con alta tasa de muestreo para mejorar la gestión de siniestros y la pericia forense.
- Telemetría aumentada por sensores donde sensores emparejados por BLE añaden datos de temperatura, presencia o proximidad al rastreo vehicular.
- Monitoreo de cumplimiento y supervisión operativa donde se requieren registros de eventos fiables y alertas de geocercas.

## Notas sobre disponibilidad de funciones

- La presencia de funciones y su comportamiento exacto dependen de la versión de firmware del dispositivo y de la revisión de hardware instalada.
- El soporte de bandas celulares regionales, las opciones de configuración de SIM y el comportamiento inalámbrico pueden variar según el mercado y el SKU del producto.
- El tipo de instalación y el cableado afectan las señales disponibles, como la detección de voltaje del vehículo y la lógica virtual de encendido.
- La funcionalidad de accesorios BLE puede requerir firmware específico o accesorios concretos y puede diferir por región y configuración.
- Confirme siempre las funciones soportadas para su número de serie y firmware del dispositivo en los recursos oficiales de QuecLink antes del despliegue.

## Por qué usar Plaspy con estas funciones

Usar el GB100CG con Plaspy ofrece a las organizaciones una forma práctica de combinar conectividad fiable, detección de movimiento de alta fidelidad y reportes configurables en un flujo de monitoreo unificado. Plaspy transforma las posiciones, eventos e informes de sensores del tracker en paneles, alertas y registros históricos que apoyan las operaciones de flota, el análisis para seguros y la respuesta a incidentes.

Para saber más sobre cómo Plaspy trabaja con trackers compatibles visite https://www.plaspy.com. Para las especificaciones detalladas del dispositivo, notas de firmware y la información del fabricante más reciente verifique los datos en el sitio oficial de QuecLink https://www.queclink.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
