---
slug: /teltonika/fmb120/features
id: fmb120-features
sidebar_label: Features
title: Teltonika - FMB120 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador Teltonika FMB120 y su integración con Plaspy
keywords:
  - Características Teltonika FMB120
  - Rastreador GPS Teltonika FMB120
  - Compatibilidad FMB120 Plaspy
  - Seguimiento de vehículos FMB120
  - Soporte inmovilizador FMB120
  - Bluetooth LE sensores FMB120
  - 1-Wire temperatura FMB120
  - seguimiento de flotas Plaspy
  - RFID iButton FMB120
  - telemetría de bajo costo FMB120
---

# Teltonika - FMB120: Características

Esta página ofrece un resumen público de las funcionalidades del Teltonika FMB120 y explica cómo se aprovechan con Plaspy. Aquí se describen detalles prácticos y no sensibles sobre el reporte de ubicación, telemetría básica y la integración del dispositivo en los flujos de trabajo de Plaspy para monitoreo y control remoto.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, la SKU regional y las opciones de instalación. Verifique siempre las capacidades específicas de su unidad y el estado del firmware consultando la documentación del fabricante y el equipo desplegado antes de planear un despliegue en producción.

## Resumen de funciones

El FMB120 es un rastreador vehicular compacto y orientado a bajo costo, diseñado para el reporte continuo de ubicación por GPS y telemetría básica en redes 2G. En uso práctico ofrece actualizaciones de posición en vivo, reporte de eventos a través de entradas digitales y opciones para ampliar el monitoreo con sensores externos y lectores de identificación.

- Reporte en tiempo real de posición GPS para seguimiento en vivo y reproducción histórica de rutas.
- Control remoto del inmovilizador para apoyar flujos de trabajo antirobo y desactivación de unidades.
- Soporte Bluetooth LE para conectar balizas (beacons) y periféricos sensores.
- Puerto 1-Wire y compatibilidad con lector RFID iButton para sondas de temperatura e identificación de conductores o activos.
- Entradas y salidas digitales estándar para detección de encendido y otros sensores del vehículo.
- Varias SKUs y opciones de empaque, incluyendo variantes con batería interna para despliegues flexibles.

## Funciones principales del Teltonika - FMB120

- Seguimiento continuo de ubicación por GPS, adecuado para mapeo de vehículos y historial de recorridos.
- Conectividad celular GSM 2G para telemetría económica en regiones compatibles.
- Capacidad de inmovilización remota del motor para ayudar en respuestas antirobo.
- Conectividad Bluetooth Low Energy para sensores y balizas externas.
- Interfaz 1-Wire para integrar directamente sondas de temperatura.
- Compatibilidad con lector RFID iButton para flujos de identificación de conductor o activos.
- Entradas y salidas digitales estándar para estado de encendido y monitoreo de eventos.
- Factor de forma compacto con múltiples opciones de empaque y batería.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el FMB120 transmite datos de posición y estado a la plataforma para que los equipos puedan monitorear vehículos, revisar el historial de eventos y activar flujos de trabajo. Plaspy ingiere la ubicación y la telemetría y muestra esa información en mapas en vivo, alertas e informes para la supervisión operativa.

- Las actualizaciones de ubicación en vivo y la reproducción de viajes aparecen en los paneles y mapas de Plaspy.
- Los eventos de E/S digitales, como encendido o sensores de puerta, se procesan para el registro de viajes y la activación de reglas.
- Los comandos de inmovilizador remoto pueden emitirse desde Plaspy como parte de procedimientos antirobo o control de flota.
- Los datos de sensores Bluetooth LE y las lecturas de temperatura por 1-Wire se reportan en Plaspy para monitorización ambiental cuando se usan periféricos compatibles.
- Los eventos de identificación de conductor o activo desde RFID o iButton están disponibles para asignaciones y auditorías.
- Plaspy detecta automáticamente protocolos comunes de rastreadores, por lo que incorporar dispositivos FMB120 suele ser sencillo en la mayoría de los despliegues.

## Casos de uso típicos

- Monitoreo antirobo y inmovilización remota de vehículos en caso de robo o uso no autorizado.
- Transporte con control de temperatura usando sensores BLE o sondas 1-Wire para carga sensible.
- Flotas de alquiler, taxis y carsharing que usan RFID o iButton para identificación de conductores y control de viajes.
- Gestión básica de flotas para pymes y medianas empresas centrada en ubicación, registro de viajes y alertas simples.
- Alertas por puertas, magnéticos o manipulación usando sensores externos conectados por Bluetooth o entradas digitales.
- Despliegues orientados a costo donde la conectividad 2G y el hardware compacto reducen gastos operativos.

## Notas sobre disponibilidad de funciones

- El nivel de firmware y la configuración de software pueden cambiar qué funciones están disponibles o cómo se comportan.
- Las revisiones de hardware y las diferentes SKUs pueden incluir u omitir baterías internas, conectores o paquetes de accesorios.
- El soporte de bandas celulares regionales y las variaciones regulatorias pueden afectar las opciones de despliegue.
- Algunas funciones extendidas requieren sensores o accesorios externos compatibles y una instalación correcta.
- Consulte siempre la documentación del fabricante para conocer las capacidades exactas de su dispositivo y cualquier variante regional.

## Por qué usar Plaspy con estas funciones

Usar el FMB120 con Plaspy proporciona a los equipos operativos una vía práctica hacia la visibilidad vehicular y telemetría básica sin requerir hardware complejo. Plaspy presenta ubicación, eventos y datos de sensor en mapas en vivo, alertas e informes para que los equipos puedan actuar frente a eventos de robo, vigilar cargas sensibles a la temperatura y gestionar las operaciones diarias de la flota desde una plataforma central.

Learn more about Plaspy and how it integrates with devices like the FMB120 at https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time so please verify the latest device specific information with the manufacturer at https://www.teltonika-gps.com/.
