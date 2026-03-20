---
slug: /flextrack/lommy_capture/features
id: lommy_capture-features
sidebar_label: Features
title: Flextrack - Lommy Capture Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características de Flextrack Lommy Capture y su integración con Plaspy para rastreo de remolques y activos remolcados
keywords:
  - Flextrack Lommy Capture
  - características Flextrack Lommy Capture
  - rastreador GPS Lommy Capture
  - rastreador GPS Flextrack
  - Lommy Capture Plaspy
  - características Lommy Capture Plaspy
  - rastreador GPS para remolque
  - rastreo de activos remolcados
  - rastreador con recuperación de energía
  - dispositivo de seguimiento de flotas
---

# Flextrack - Características de Lommy Capture

Esta página ofrece un resumen público de las capacidades de Flextrack Lommy Capture y de cómo el dispositivo se integra con Plaspy para el monitoreo persistente de remolques, caravanas y otros activos remolcados. Se concentra en las capacidades prácticas, los tipos de telemetría soportados y el valor operativo que puede esperar cuando Lommy Capture se utiliza con Plaspy para rastreo, alertas e informes.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Cuando procede, esta página señala características operativas comunes —como recuperación de energía desde circuitos de iluminación, GNSS multiconstelación, conmutación celular y registro de movimiento a bordo—, pero siempre debe consultar al fabricante para obtener los detalles más recientes y específicos del dispositivo.

## Resumen de características

Lommy Capture está diseñado para una instalación discreta y de bajo mantenimiento dentro de las carcasas de luces, con el objetivo de proporcionar conciencia de ubicación continua para activos remolcados. Su énfasis está en la operación mediante recuperación de energía, posicionamiento robusto y registro de eventos, de modo que las flotas mantengan supervisión sin mantenimiento frecuente de baterías ni grandes modificaciones.

- Instalación interna y discreta que encaja dentro de carcasas de luces, ofreciendo colocación resistente a manipulaciones y menor visibilidad.
- Recuperación de energía desde los circuitos de luces de freno y direccionales para mantener la operación sin batería dedicada.
- Rastreo de ubicación en tiempo real y recuperación de rutas históricas para supervisión de flotas y cumplimiento.
- Detección de movimiento y registro de eventos para identificar desplazamientos y generar alertas en Plaspy.
- Conectividad resiliente con LTE Cat M1 y retroceso a 2G para mantener la telemetría en condiciones de cobertura variadas.

## Características principales de Flextrack - Lommy Capture

- Compatible con Plaspy mediante APIs abiertas y protocolos de datos estándar de la industria para una ingestión directa de posiciones y mensajes de evento.
- Diseño de recuperación de energía que utiliza circuitos de iluminación del vehículo y almacenamiento en supercondensador para evitar una batería fija.
- Informes persistentes cuando está alimentado por las luces traseras, con actualizaciones frecuentes aproximadas cada dos minutos.
- Informes de respaldo limitados cuando está desconectado de la alimentación para proporcionar cierta visibilidad después de que un remolque sea desenchufado.
- GNSS multiconstelación con SBAS y posicionamiento asistido para fijaciones más rápidas y fiables.
- Conectividad celular con LTE Cat M1 y retroceso a 2G, además de localización basada en red celular cuando GNSS no está disponible.
- Sensor G integrado de 3 ejes y almacenamiento flash local para registrar eventos de movimiento y subirlos posteriormente a Plaspy.
- Carcasa compacta con clasificación IP65 y factor de forma robusto diseñada para instalación en el interior de las carcasas de luces de los activos remolcados.

## Cómo funcionan estas características con Plaspy

Cuando Lommy Capture está registrado en Plaspy, sus mensajes de posición, movimiento y alarma se hacen visibles en los paneles e informes de Plaspy. Plaspy ingiere los mensajes del dispositivo y los asigna a objetos de seguimiento, líneas de tiempo y alertas configurables para respaldar los flujos operativos.

- Actualizaciones de ubicación en tiempo real y seguimiento en el mapa que reflejan fijaciones frecuentes cuando la unidad está alimentada por los circuitos de iluminación.
- Eventos de movimiento y alarma generados por el sensor G que aparecen como marcadores de evento y pueden disparar notificaciones o flujos de trabajo en Plaspy.
- La recuperación de rutas históricas desde la memoria flash del dispositivo se sube y queda disponible para reproducción, análisis e informes.
- Informes de desconexión de energía y de respaldo permiten que Plaspy marque posibles manipulaciones o robos y notifique a los operadores.
- Plaspy detecta automáticamente protocolos de rastreadores comunes y puede parsear mensajes basados en UDP o SMS para una integración fluida.

## Casos de uso típicos

- Monitoreo antirrobo y recuperación para remolques y equipos remolcados con instalación interna discreta.
- Monitoreo de utilización y rutas de remolques para optimizar la asignación de la flota y reducir kilómetros vacíos.
- Programación de mantenimiento basada en el uso real y la actividad detectada por movimiento en lugar de periodos de calendario.
- Geocercas y control de paradas para supervisión logística y seguimiento del desempeño en entregas.
- Mantener visibles activos con alimentación intermitente gracias a la recuperación de energía y los informes de respaldo.
- Rastreo de bajo mantenimiento para activos en los que reemplazar baterías es poco práctico o costoso.

## Notas sobre disponibilidad de funciones

- El comportamiento de las funciones puede variar con la versión de firmware y la revisión de hardware del fabricante; no todas las capacidades están garantizadas en cada unidad.
- El método de instalación y el cableado dentro de la carcasa de la luz afectan el rendimiento de la recuperación de energía y los intervalos de reporte.
- El soporte regional de bandas celulares y la disponibilidad de la red influyen en la conectividad y el comportamiento de retroceso.
- Las duraciones de los informes de respaldo dependen de la energía almacenada en los supercondensadores y de la configuración específica del dispositivo.
- Consulte la documentación y las notas de la versión de Flextrack para el número de serie o SKU del dispositivo que planea desplegar.

## Por qué usar Plaspy con estas funciones

Combinar Lommy Capture con Plaspy ofrece a los gestores de flota una solución de rastreo práctica y de bajo mantenimiento para activos remolcados que requieren visibilidad persistente sin grandes cambios de hardware. Plaspy integra esos flujos de datos en una plataforma unificada para mapeo, alertas de eventos, geocercas e informes históricos, de modo que los operarios puedan reaccionar rápidamente ante movimientos y eventos de alimentación.

Para obtener más información sobre Plaspy y cómo rastreadores compatibles como Lommy Capture encajan en flujos de trabajo de flota más amplios, visite https://www.plaspy.com. Las características del dispositivo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo, por lo que le recomendamos verificar las especificaciones más recientes y la guía de instalación en el sitio del fabricante https://flextrack.dk.
