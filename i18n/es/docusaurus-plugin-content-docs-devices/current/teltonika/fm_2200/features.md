---
slug: /teltonika/fm_2200/features
id: fm_2200-features
sidebar_label: Features
title: Teltonika - FM 2200 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Teltonika FM 2200 y su integración con Plaspy
keywords:
  - Teltonika FM 2200
  - funciones FM 2200
  - rastreador GPS Teltonika
  - compatibilidad FM 2200 Plaspy
  - salida NMEA FM 2200
  - geocercas FM 2200
  - GPRS FM 2200
  - seguimiento de vehículos FM 2200
  - sensor de movimiento FM 2200
  - entradas salidas FM 2200
---

# Teltonika - Funciones del FM 2200

Esta página ofrece un resumen público orientado a las funciones del Teltonika FM 2200 y cómo sus capacidades se integran con la plataforma Plaspy. Está pensada para ayudar a gerentes de flota, integradores y usuarios técnicos a comprender qué puede reportar el dispositivo hacia Plaspy y qué valor práctico aportan esas funciones en operaciones reales.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Cuando es posible, esta página hace referencia a las capacidades del FM 2200 reportadas por Teltonika; sin embargo, los instaladores y operadores deben confirmar los detalles contra el firmware del equipo y la documentación oficial de Teltonika.

## Resumen de características

El FM 2200 es un rastreador GPS compacto con conectividad GSM, orientado a reportes de posición fiables e integración flexible. Combina recepción GPS, entradas y salidas configurables, salida NMEA por USB y múltiples métodos de reporte y actualización de datos para adaptarse a flujos de trabajo de seguimiento de vehículos y activos.

- Reporte de ubicación en tiempo real vía GPRS con soporte para transporte TCP y UDP
- Puerto USB con salida NMEA y ruta de configuración para ajustes locales
- Entradas digitales configurables y salidas de colector abierto para monitoreo y control remoto
- Sensor de movimiento integrado para optimizar el comportamiento de reporte y reducir transmisiones innecesarias
- Soporte para múltiples áreas de geocerca y almacenamiento histórico de registros para recuperación posterior

## Funciones principales del Teltonika - FM 2200

- Comunicación GSM GPRS con soporte para reportes TCP IP y UDP IP
- Receptor GPS de 50 canales compatible con sentencias NMEA comunes incluyendo GGA GGL GSA GSV RMC y datum WGS 84
- Puerto USB para salida NMEA y acceso de configuración
- Dos entradas digitales y dos salidas de colector abierto para monitoreo de dispositivos externos y control básico
- Sensor de movimiento integrado para detección de movimiento y lógica de reporte optimizada
- Almacenamiento interno de datos históricos con capacidad para hasta 15 000 registros
- Áreas de geocerca configurables con detección de entrada y salida
- Múltiples métodos de actualización y mantenimiento, incluyendo actualizaciones de firmware y configuración por GPRS, SMS y USB

## Cómo funcionan estas características con Plaspy

Plaspy puede recibir datos de posición y eventos desde el FM 2200 y presentarlos en interfaces de mapas, historial y eventos para respaldar el monitoreo operativo. Plaspy detecta automáticamente el protocolo del rastreador y puede aceptar reportes de dispositivos FM 2200 configurados para informar al servidor de Plaspy.

- Ubicación en vivo y recorrido histórico mostrados en los mapas de Plaspy usando las fijaciones GPS recibidas
- Posiciones registradas en el dispositivo pueden transmitirse a Plaspy y visualizarse como viajes históricos o puntos individuales
- Eventos de geocerca generados por el FM 2200 se traducen en alertas en Plaspy y pueden usarse para automatizaciones o notificaciones
- Cambios de estado en entradas y salidas reportados por el dispositivo aparecen como eventos discretos en Plaspy para monitoreo de sensores o actuadores externos
- Plaspy soporta recibir datos por TCP o UDP y puede aceptar reportes de dispositivos configurados para enviar a d.plaspy.com usando el puerto estándar de ingestión de Plaspy
- Los flujos de trabajo de configuración y actualización de firmware se mantienen con las herramientas del dispositivo, mientras que la telemetría operativa es consumida por Plaspy para supervisión

## Casos de uso típicos

- Seguimiento de vehículos en tiempo real para monitoreo de rutas y coordinación de despacho
- Rastreo de activos donde la detección de movimiento y el reporte periódico reducen el uso de datos
- Monitoreo perimetral usando múltiples geocercas para alertas de entrada y salida
- Monitoreo remoto de equipos auxiliares mediante las entradas y salidas del dispositivo
- Reconstrucción de viajes históricos e informes de cumplimiento usando registros almacenados
- Actualizaciones remotas de firmware y configuración para mantener los dispositivos con ajustes actuales

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen de la versión de firmware y la revisión de hardware; lotes más recientes pueden incluir sensibilidad GPS mejorada o variantes de chipset distintas
- El comportamiento de entradas y salidas puede variar según el cableado y las elecciones de instalación; confirme detalles de conexionado e integración durante la instalación
- El comportamiento de geocercas y los límites de almacenamiento se ven influenciados por parámetros de configuración establecidos en el dispositivo
- Las variantes regionales del FM 2200 pueden tener características radioeléctricas o de certificación diferentes
- Siempre revise las notas de versión y la documentación de firmware de Teltonika antes de depender de una función específica

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el Teltonika FM 2200 integra la telemetría del dispositivo en una plataforma unificada para visibilidad de ubicación, monitoreo de eventos y análisis histórico. Plaspy transforma las fijaciones GPS entrantes, los eventos de geocerca y los cambios de estado de entradas en información accionable para los equipos operativos, ayudando a reducir el tiempo de detección de incidentes y simplificando la supervisión de la flota.

Para obtener más información sobre Plaspy y cómo gestiona la telemetría de dispositivos visite https://www.plaspy.com. Para las especificaciones de equipo más recientes, notas de firmware y detalles de implementación verifique la información con el fabricante en https://www.teltonika-gps.com/
