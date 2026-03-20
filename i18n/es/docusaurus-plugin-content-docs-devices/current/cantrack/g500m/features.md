---
slug: /cantrack/g500m/features
id: g500m-features
sidebar_label: Features
title: CanTrack - G500M Features
sidebar_class_name: menu_item_tracker
description: Funciones del rastreador GPS OBD plug-and-play compacto y compatibilidad con Plaspy para monitoreo de vehículos y gestión de flotas
keywords:
  - características CanTrack G500M
  - rastreador GPS CanTrack G500M
  - rastreador OBD G500M
  - compatibilidad G500M Plaspy
  - GPS OBD II plug and play
  - funciones seguimiento vehicular
  - rastreador para gestión de flotas
  - alertas colisión sensor G
  - detección encendido ACC
  - memoria interna GPS
---

# CanTrack - Características del G500M

Esta página describe el contexto funcional público para el uso del CanTrack G500M con Plaspy. Aquí encontrará las capacidades prácticas del G500M como un rastreador GPS OBD plug-and-play compacto y cómo suelen reflejarse esas capacidades dentro de Plaspy para monitoreo, generación de informes y administración centralizada de flotas.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Considere siempre que algunas funciones pueden estar habilitadas o limitadas por la versión de firmware, variantes regionales o la forma en que el dispositivo se instala en el vehículo.

## Resumen de características

El G500M está pensado para implementaciones sencillas a través del puerto OBD II del vehículo, entregando reportes de posición continuos y telemetría vehicular esencial mediante datos celulares. Sus antenas integradas y el almacenamiento local ayudan a reducir huecos de información y simplifican la instalación en despliegues de flotas o vehículos de alquiler.

- Instalación OBD II plug-and-play para despliegues rápidos sin cableado fijo.
- Seguimiento en tiempo real y reporte de telemetría por datos móviles para visibilidad inmediata.
- Detección de encendido ACC para registrar automáticamente inicio y fin de viajes.
- Almacenamiento local de posiciones para registrar ubicaciones durante pérdidas de cobertura y reenvíarlas después.
- Sensor G y detección de cambios de ángulo para eventos de colisión y movimientos bruscos.
- Alarmas por encendido y desconexión además de reportes de geocercas para flujos de trabajo antirrobo.

## Características principales del CanTrack - G500M

- Factor de forma OBD II que permite acceso no invasivo a alimentación y señal de encendido.
- Receptor GNSS de alta sensibilidad (chipset MTK, 66 canales) para ubicación precisa.
- Conectividad GSM GPRS con reporte TCP/IP para carga continua de datos.
- Detección del estado de ignición ACC para telemetría automatizada de viajes y estado del motor.
- Sensor G con detección de movimiento y reporte de cambio de ángulo para detección de eventos.
- Memoria local con capacidad para aproximadamente 1,400 registros de posición durante zonas sin cobertura.
- Alarmas de encendido y desconexión, además de reportes programados para alertas operativas.
- Soporte de geocercas y configuración de reporte de posiciones para flujos de trabajo basados en ubicación.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe la telemetría que envía el G500M y la presenta en mapas, paneles e informes para que los operadores puedan rastrear vehículos en tiempo real y revisar la actividad histórica. Plaspy detecta automáticamente protocolos compatibles en muchos casos, simplificando la incorporación y mostrando eventos del dispositivo sin necesidad de seleccionar manualmente el protocolo.

- Las actualizaciones de ubicación en vivo y la reproducción histórica aparecen en los mapas de Plaspy para revisión de rutas.
- Los eventos de encendido ACC se convierten en marcadores de inicio y fin para registro de viajes e informes de utilización.
- Las posiciones almacenadas durante huecos de cobertura se reenvían y se reconcilian en los datos históricos de Plaspy.
- Los eventos del sensor G y los cambios de ángulo están disponibles para revisión de incidentes y en las líneas de tiempo de eventos de Plaspy.
- Las alarmas como encendido, desconexión y cruces de geocercas se entregan a los canales de alertas y notificaciones de Plaspy.
- Los diagnósticos del dispositivo y la cadencia de reporte son visibles en Plaspy para apoyar la resolución operativa de problemas.

## Casos de uso típicos

- Gestión de flotas de vehículos ligeros donde se requiere una instalación rápida y consistente.
- Monitoreo de autos de alquiler donde la instalación no invasiva y las alertas por desconexión son relevantes.
- Flujos de trabajo antirrobo y recuperación usando alertas por movimiento, desconexión y geocerca.
- Revisión de incidentes por colisiones o eventos bruscos usando datos del sensor G y cambios de ángulo.
- Resiliencia ante huecos de cobertura donde la memoria a bordo registra posiciones hasta que se restablece la conectividad.
- Despliegues temporales o estacionales que se benefician de la instalación plug-and-play.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones y su comportamiento pueden variar según la versión de firmware y actualizaciones del fabricante.
- Las revisiones de hardware y variantes regionales de bandas celulares pueden afectar la conectividad y el rendimiento.
- Algunas funciones, como escucha remota o ciertos tipos de alarmas, pueden requerir configuración explícita y estar sujetas a regulaciones locales.
- El método de instalación y el cableado específico del puerto OBD del vehículo pueden influir en qué señales están disponibles para el dispositivo.
- Consulte la documentación del fabricante para límites específicos del equipo y prácticas de configuración recomendadas.

## Por qué usar Plaspy con estas funciones

Usar el CanTrack G500M con Plaspy ofrece una ruta directa desde la instalación física hasta el seguimiento centralizado y la supervisión operativa. El factor de forma OBD II plug-and-play reduce el esfuerzo de despliegue, mientras que la detección de ignición, los eventos de movimiento y la memoria a bordo ayudan a mantener registros de viaje precisos y minimizar huecos de datos. Plaspy integra estos eventos de dispositivo en una interfaz unificada para monitoreo, generación de informes y alertas en toda la flota.

Learn more about Plaspy and how it supports trackers like the G500M at https://www.plaspy.com. For the most current device specific feature details, firmware notes, and manufacturer implementation guidance, please verify information on the official CanTrack product site https://www.cantrackgps.com/.
