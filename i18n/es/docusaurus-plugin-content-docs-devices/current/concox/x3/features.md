---
slug: /concox/x3/features
id: x3-features
sidebar_label: Features
title: Concox - X3 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Concox X3 y su integración de rastreo en tiempo real y telemática con Plaspy
keywords:
  - Concox X3
  - características Concox X3
  - rastreador GPS Concox X3
  - características X3 Plaspy
  - capacidades GPS X3
  - rastreador vehicular Concox
  - comportamiento de manejo X3
  - rastreadores compatibles Plaspy
  - telemática vehicular X3
  - seguimiento GNSS X3
---

# Concox - Características del X3

Esta página ofrece un resumen público de las funcionalidades del rastreador Concox X3 cuando se utiliza con Plaspy. Se centra en las capacidades visibles para el usuario y explica cómo los reportes de posición, las señales I/O, la telemetría de eventos y la monitorización por voz del X3 se presentan dentro de los paneles y flujos de trabajo de Plaspy para supervisión operativa y gestión de flotas.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación, la variante regional y la implementación del fabricante. Cuando alguna función depende de un firmware o configuración específica, esta página describe funciones prácticas y no sensibles, y recomienda consultar la documentación del fabricante para detalles a nivel de dispositivo.

## Visión general de funciones

El Concox X3 es un rastreador vehicular compacto diseñado para reporte de ubicación en tiempo real y eventos hacia Plaspy. Combina posicionamiento GNSS multi-constelación con conectividad celular y entradas/salidas flexibles para soportar rastreo de ubicación, detección de conducta de manejo y flujos de trabajo de seguridad.

- GNSS de alta precisión con GPS, BDS y LBS para posiciones vehiculares precisas, adecuadas para visualización en mapas y monitoreo de rutas.
- Conectividad celular para carga continua de telemetría a Plaspy y visibilidad remota del estado del vehículo.
- Interfaces de accesorios como RS232 y TTL, además de entradas digitales y múltiples salidas para integrar con sistemas vehiculares y alarmas.
- Detección de comportamiento de manejo y acelerómetro integrado para reportar eventos de aceleración brusca, frenado fuerte, curvas cerradas y colisiones.
- Micrófono externo y soporte de comunicación bidireccional para aportar contexto de voz en cabina ante incidentes y comunicaciones con el conductor.

## Funciones principales del Concox - X3

- Posicionamiento GNSS multi-constelación (GPS + BDS + LBS) para localizaciones confiables y mayor precisión.
- Análisis de comportamiento de manejo que incluye detección de aceleraciones bruscas, frenadas intensas, curvas bruscas y colisiones.
- Soporte de entradas/salidas vehiculares: entrada ACC (ignición), entradas SOS y auxiliares, y salidas/relés para acciones remotas.
- Interfaces de accesorios RS232 y TTL para integración con dispositivos y sensores externos.
- Soporte para micrófono externo y capacidad de voz bidireccional para monitorización en cabina y verificación de incidentes.
- Rango amplio de alimentación vehicular y batería interna de respaldo para mantener el reporte durante eventos transitorios de energía.
- Factor de forma compacto pensado para instalaciones en vehículos con indicadores LED para estado GNSS, celular y alimentación.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere la telemetría en vivo y los datos de eventos del X3 para que los operadores puedan monitorear vehículos, activar notificaciones automatizadas y usar flujos de trabajo de Plaspy para respuesta operativa. Plaspy detecta automáticamente muchos protocolos de rastreadores y muestra el estado y los eventos del X3 en vistas de mapa e informes.

- Actualizaciones de ubicación en tiempo real y trayectorias históricas disponibles en los mapas de Plaspy para revisión de rutas y seguimiento de activos.
- Reporte de entradas digitales como ACC/ignición y SOS mostrado como eventos de estado para apoyar la detección de viajes y los flujos de trabajo de incidentes.
- Control de relés y salidas accesible desde Plaspy para habilitar inmovilizadores remotos o cortes cuando la instalación y las políticas de seguridad lo permitan.
- Eventos de comportamiento de manejo y colisiones entregados a Plaspy como alertas para monitoreo de seguridad y programas de entrenamiento al conductor.
- Monitorización por voz y soporte bidireccional que aparecen como contexto adicional para incidentes cuando están desplejados y habilitados.
- Plaspy puede correlacionar señales I/O del X3 con otros datos de la plataforma para generar informes operativos y alertas relevantes para la gestión de flotas.

## Casos de uso típicos

- Respuesta antirrobo con corte por relé combinado con alertas de Plaspy para asegurar un vehículo tras un incidente.
- Programas de seguridad de conductores que usan reportes de conducción brusca para identificar oportunidades de capacitación y reducir riesgos.
- Rastreo en tiempo real para logística y entregas, para monitorear ubicaciones de vehículos, ETAs y eventos de custodia.
- Verificación de incidentes mediante monitorización por voz en cabina y comunicación bidireccional para recabar contexto de accidentes o disputas.
- Telemática de activos mixtos donde la telemetría vehicular del X3 se consolida en Plaspy junto con otras fuentes de datos para una supervisión unificada.

## Notas sobre disponibilidad de funciones

- Funciones exactas como entradas disponibles, salidas y definiciones de eventos pueden variar según la versión de firmware y la revisión de hardware.
- Algunas funciones requieren un cableado de instalación específico o accesorios externos para estar presentes y configurados correctamente.
- Las variantes regionales de bandas celulares y la provisión de SIM pueden afectar la cobertura de red y la entrega de telemetría.
- Las capacidades de gestión remota y los métodos de actualización de firmware no están totalmente especificados en este resumen; consulte los recursos del fabricante para detalles.
- Confirme siempre la revisión del dispositivo instalado y el nivel de firmware antes de confiar en una función específica en flujos de trabajo de producción.

## Por qué usar Plaspy con estas funciones

Combinar el Concox X3 con Plaspy ofrece a los operadores de flotas visibilidad centralizada de la ubicación del vehículo, entradas de estado y telemetría basada en eventos en una única plataforma. Plaspy transforma la posición, las señales I/O y los eventos de incidente del X3 en visualizaciones en mapa, alertas e informes que facilitan respuestas más rápidas, mejor supervisión de conductores y mayor control operativo.

Learn more about how Plaspy can display and act on X3 telemetry by visiting https://www.plaspy.com. For the most current and device specific technical details, firmware notes, and installation instructions, verify feature availability with the manufacturer at https://www.iconcox.com/ as device features and firmware behavior may change over time.
