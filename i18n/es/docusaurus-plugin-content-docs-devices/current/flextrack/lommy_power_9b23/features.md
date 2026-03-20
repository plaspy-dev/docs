---
slug: /flextrack/lommy_power_9b23/features
id: lommy_power_9b23-features
sidebar_label: Features
title: Flextrack - Lommy Power 9B23 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del Flextrack Lommy Power 9B23 y su integración con Plaspy para seguimiento continuo de maquinaria
keywords:
  - características Flextrack Lommy Power 9B23
  - rastreador GPS Lommy Power 9B23
  - rastreador GPS Flextrack
  - características Lommy Power Plaspy
  - seguimiento de máquinas GPS
  - seguimiento de equipos
  - registro de horas de funcionamiento
  - rastreador LTE Cat M1
  - GNSS multiconstelación
  - rastreador compatible con Plaspy
---

# Flextrack - Lommy Power 9B23: Características

Esta página describe el contexto público de funciones del Flextrack Lommy Power 9B23 y cómo esas capacidades se integran con Plaspy para el monitoreo continuo de maquinaria pesada. Se enfoca en las capacidades orientadas al usuario, el valor operativo práctico y la manera en que los eventos y la telemetría del dispositivo alimentan flujos de trabajo y paneles en Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para configuración específica del dispositivo, guía de instalación y los detalles técnicos más recientes consulte la documentación y las notas de versión de Flextrack.

## Resumen de funciones

El Lommy Power 9B23 es un rastreador compacto de alimentación por cable diseñado para el monitoreo continuo de maquinaria en entornos exteriores exigentes. Su diseño prioriza la conectividad siempre activa cuando la batería del equipo está presente, posicionamiento GNSS multiconstelación, conectividad celular con respaldo, y lógica de reporte ajustada para los estados de operación frente a parqueo.

- Alimentación por cable para operación continua mientras esté conectado a la batería de la máquina
- GNSS multiconstelación para posicionamiento confiable en entornos de construcción y forestales
- Conectividad LTE Cat M1 con fallback GSM para mantener cobertura en distintas regiones
- Reglas inteligentes de reporte que reducen el uso de datos cuando los activos están inactivos y ofrecen actualizaciones frecuentes durante la operación
- Telemetría integrada para horas de funcionamiento, detección de ignición y reporte de entradas auxiliares

## Funciones principales del Flextrack - Lommy Power 9B23

- Entrada de alimentación por cable compatible con sistemas de batería de la máquina y un rango operativo que soporta monitoreo continuo
- GNSS multiconstelación incluyendo GPS, GLONASS, GALILEO, BEIDOU y QZSS para mejorar la disponibilidad de posicionamiento
- Conectividad celular LTE Cat M1 con fallback quad band 2G para extender la cobertura donde LTE Cat M1 no esté disponible
- Lógica de reporte inteligente con actualizaciones frecuentes durante movimiento u operación y latidos esporádicos cuando está estacionado
- Medición de corriente de batería y detección de arranque/parada de ignición para capturar eventos del motor y soportar el cálculo de horas de funcionamiento
- Acumulación de horas de funcionamiento para programación de mantenimiento preventivo y flujos de trabajo de facturación
- Entrada auxiliar opcional para detección y reporte de actividad de implementos o accesorios

## Cómo funcionan estas funciones con Plaspy

El Lommy Power 9B23 envía ubicación y telemetría a Plaspy para que gerentes de flota y operadores puedan ver el estado en vivo de los activos, recibir notificaciones de eventos y generar informes de utilización. Plaspy ingiere los eventos del dispositivo y los mapea a paneles, alertas y herramientas de reporte usadas para supervisión operativa.

- La ubicación en tiempo real y la telemetría aparecen en los paneles de Plaspy para apoyar decisiones de seguimiento y despacho
- Los eventos de ignición y movimiento se traducen en alertas y líneas de tiempo de actividad en Plaspy para monitoreo anti robo y de utilización
- Las horas de funcionamiento reportadas por el dispositivo alimentan los informes de utilización y mantenimiento de Plaspy para programación y facturación
- Los eventos de la entrada auxiliar pueden representarse en Plaspy como entradas personalizadas o marcadores de actividad para accesorios e implementos
- El almacenamiento local del dispositivo amortigua datos recientes durante interrupciones de conectividad, de modo que Plaspy recibe una imagen continua cuando se restaura el enlace

## Casos de uso típicos

- Gestión continua de flotas de equipos de construcción para monitorear ubicación y uso entre sitios de trabajo
- Operaciones de alquiler y arrendamiento a corto plazo que requieren facturación precisa por horas de funcionamiento y verificación de actividad
- Planificación de mantenimiento preventivo usando las horas acumuladas y los eventos de funcionamiento del motor para programar servicios
- Flujos de trabajo de detección y recuperación ante robo aprovechando movimiento, ignición y actualizaciones de ubicación
- Monitoreo de implementos o accesorios mediante la entrada auxiliar opcional para facturación o visibilidad operativa

## Notas sobre disponibilidad de funciones

- La versión de firmware puede afectar los intervalos exactos de reporte, los tipos de eventos disponibles y los campos de telemetría expuestos a Plaspy
- Las revisiones de hardware y las variantes celulares regionales pueden cambiar las bandas celulares soportadas o las certificaciones regulatorias
- El tipo de instalación y la correcta conexión influyen en la detección de ignición y en la precisión del conteo de horas de funcionamiento
- Las funciones opcionales, como el comportamiento de la entrada auxiliar, dependen de cómo se instala y configura la unidad
- Verifique siempre la configuración del dispositivo y los ajustes de firmware antes de confiar en un comportamiento de telemetría específico en flujos de trabajo de producción

## Por qué usar Plaspy con estas funciones

Usar el Lommy Power 9B23 con Plaspy ofrece una vía directa desde hardware robusto de campo hasta información operativa. El dispositivo suministra ubicación continua, detección de eventos del motor y telemetría de horas de funcionamiento, mientras que Plaspy convierte esos datos en paneles, alertas e informes que ayudan a reducir tiempos de inactividad, hacer cumplir términos de alquiler y programar mantenimientos de forma más predecible.

Learn more about how Plaspy supports operational visibility and telematics workflows at https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time so verify the latest device specific information on the manufacturer site https://flextrack.dk.
