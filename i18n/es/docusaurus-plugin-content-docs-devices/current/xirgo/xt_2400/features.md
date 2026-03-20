---
slug: /xirgo/xt_2400/features
id: xt_2400-features
sidebar_label: Features
title: Xirgo - XT-2400 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador OBD II Xirgo XT-2400 y cómo se integran con Plaspy para el monitoreo de vehículos y flotas
keywords:
  - Xirgo XT-2400
  - XT-2400 características
  - Xirgo XT 2400 GPS
  - XT-2400 rastreador OBD II
  - XT-2400 acelerómetro
  - XT-2400 diagnósticos DTC
  - compatibilidad Xirgo Plaspy
  - XT-2400 seguimiento de vehículos
  - XT-2400 comportamiento del conductor
  - XT-2400 gestión de flotas
---

# Xirgo - XT-2400 Características

Esta página describe el contexto público de funcionalidades al utilizar el Xirgo XT-2400 con Plaspy. El XT-2400 es un dispositivo OBD II tipo plug and play para vehículos de pasajeros y de uso ligero que proporciona ubicación GPS, parámetros del vehículo y datos de diagnóstico. Este documento se centra en las capacidades visibles para el usuario y en cómo se representan dichas capacidades cuando el dispositivo está integrado con Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, la implementación OBD del vehículo y el tipo de instalación. Cuando las funciones son scriptables o configurables en el dispositivo, su comportamiento puede diferir según la configuración que aplique el instalador o el operador de la flota. Consulte siempre la documentación del fabricante para detalles específicos del dispositivo.

## Resumen de funciones

El XT-2400 combina una conexión OBD II con antenas celulares y GPS integradas, además de un motor GPS de alta precisión y un acelerómetro. Está pensado para una instalación sencilla y un despliegue flexible en escenarios de flotas, posventa y consumo particular.

- Conexión OBD II plug and play para instalación rápida en vehículos compatibles
- Motor GPS de alta precisión para reportes de ubicación y seguimiento confiables
- Acelerómetro integrado para detectar movimiento y eventos de aceleración
- Acceso a identificadores y estados del vehículo, como VIN y estado de encendido
- Reporte de códigos de falla diagnóstica para visibilidad de mantenimiento y solución de problemas

## Características principales del Xirgo - XT-2400

- Interfaz OBD II plug and play para vehículos de pasajeros y de uso ligero
- Antenas celulares y GPS integradas para comunicación consolidada
- Motor GPS de alta precisión para reportes de posición exactos
- Acelerómetro incorporado para detectar movimientos y cambios de aceleración
- Lectura de identificadores y estados operativos del vehículo, incluido VIN y estado de encendido
- Códigos de falla diagnóstica (DTC) accesibles para flujos de servicio y mantenimiento
- Capacidad programable mediante scripts que permite personalizar reportes y eventos
- Aplicaciones previstas: gestión de recursos móviles, posventa automotriz y monitoreo del comportamiento del conductor

## Cómo funcionan estas funciones con Plaspy

Cuando se usa con Plaspy, la ubicación y los datos derivados del OBD del XT-2400 pueden recopilarse y mostrarse dentro de la plataforma Plaspy, de modo que los equipos puedan monitorear vehículos y eventos en un único lugar. Plaspy detecta automáticamente muchos protocolos de rastreadores compatibles, lo que facilita la incorporación de dispositivos.

- Las posiciones GPS del XT-2400 aparecen en los mapas de Plaspy para seguimiento en tiempo real y reproducción histórica
- Campos derivados del OBD, como VIN, estado de encendido y velocidad, se muestran como identificadores del vehículo y telemetría en Plaspy
- Los códigos de falla diagnóstica reportados por el dispositivo pueden generarse como elementos de mantenimiento o alertas para revisión
- Los eventos basados en el acelerómetro, como movimiento o impactos, pueden representarse como registros de movimiento o eventos para análisis del comportamiento del conductor
- El XT-2400 es scriptable, lo que permite payloads de eventos personalizados que Plaspy puede ingerir cuando el dispositivo está configurado de esa manera
- Plaspy acepta conexiones de dispositivos a su endpoint de ingestión y puede operar con el dispositivo sobre UDP o TCP cuando el instalador lo soporte

## Casos de uso típicos

- Seguimiento de vehículos de flota para visibilidad de ubicación y supervisión de rutas
- Telemática posventa para talleres de servicio y revendedores de vehículos
- Monitoreo de vehículos para uso familiar o personal
- Monitoreo y coaching del comportamiento del conductor utilizando eventos del acelerómetro y datos de viaje
- Flujos de trabajo de salud y mantenimiento del vehículo impulsados por reportes DTC
- Gestión de recursos móviles para despliegues de vehículos de uso ligero

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones dependen del firmware del dispositivo y pueden cambiar con actualizaciones de firmware o revisiones del fabricante
- Las revisiones de hardware o variantes regionales del XT-2400 pueden afectar los sensores disponibles o las opciones de reporte
- Los datos disponibles desde OBD II dependen de la marca y modelo del vehículo y de la provisión OBD por parte del fabricante
- Las funciones scriptables requieren configuración del dispositivo y pueden no estar habilitadas por defecto
- Para despliegues operativos verifique tanto el firmware del dispositivo como la configuración de la cuenta Plaspy para asegurar los flujos de datos esperados

## Por qué usar Plaspy con estas funciones

Usar el Xirgo XT-2400 con Plaspy integra la telemetría de ubicación, diagnósticos y la detección de eventos en una plataforma unificada. Plaspy ofrece seguimiento basado en mapas, revisión histórica de viajes y alertas que facilitan convertir los datos del XT-2400 en información operativa para flotas y programas de vehículos. La integración OBD II y el reporte de diagnósticos del XT-2400 complementan las capacidades de visibilidad e informes de Plaspy para mantenimiento y gestión de activos.

Learn more about Plaspy on the main website https://www.plaspy.com. Device features firmware behavior and manufacturer implementation details can change over time so verify the latest device specific information on the manufacturer site https://xirgo.com/ and in the official Xirgo documentation.
