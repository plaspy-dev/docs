---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_fms/features
id: mta_glonass_ver12m_can_fms-features
sidebar_label: Features
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del MTA-Glonass ver.12M CAN FMS y su integración con Plaspy para telemetría de flotas
keywords:
  - OKB Tehnoavtomatika MTA Glonass funciones
  - MTA Glonass ver12M CAN FMS rastreador GPS
  - rastreador compatible con Plaspy
  - telemetría vehicular CAN FMS
  - rastreador GPS monitoreo de combustible
  - receptor GNSS GLONASS GPS
  - rastreo de camiones pesados
  - telemetría para gestión de flotas
  - flujos de trabajo antirobo
  - almacenamiento de eventos e informes
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) — Características

Esta página presenta el contexto público de funcionalidades del rastreador OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN FMS) cuando se usa con Plaspy. Describe capacidades prácticas, usos habituales y cómo la posición GNSS del dispositivo y la telemetría del vehículo suelen ser consumidas por Plaspy para seguimiento en tiempo real, alertas y reportes históricos.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, variantes opcionales del modelo y los detalles de la instalación y el cableado. Para la configuración específica del equipo, interfaces opcionales y los detalles técnicos más recientes consulte la documentación oficial del fabricante y las notas de la versión del firmware.

## Resumen de características

El MTA-Glonass (ver.12M-CAN FMS) es un terminal vehicular compacto pensado para flotas comerciales que requieren posicionamiento GNSS fiable y la ingestión directa de telemetría del vehículo. Integra un receptor GNSS de 50 canales con comunicaciones GSM y un conjunto de E/S orientado al vehículo para monitoreo de combustible, almacenamiento de eventos y operación continua en entornos de vehículos pesados.

- Posicionamiento GNSS de alta sensibilidad para actualizaciones de ubicación precisas en entornos típicos de flotas.
- Conectividad nativa CAN FMS para capturar telemetría del motor y del bus del vehículo cuando está disponible.
- Múltiples opciones de detección de combustible, incluyendo entradas por pulso de contacto seco y un ADC analógico para monitoreo de nivel de tanque.
- Amplio rango de alimentación en DC y batería interna de respaldo para operación ininterrumpida y transición controlada a modo de espera.
- Almacenamiento no volátil de eventos que permite conservar miles de registros para posterior carga y auditoría.
- Diseñado para operación continua en vehículos, con consumo de energía optimizado y factor de forma compacto.

## Características principales del OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS)

- Receptor GNSS de 50 canales compatible con GLONASS y GPS para posicionamiento satelital robusto.
- Comunicaciones GSM que incluyen datos GPRS y SMS para entrega de telemetría a plataformas en la nube.
- Interfaz CAN FMS nativa para acceder a parámetros del motor y del bus del vehículo en camiones compatibles.
- Múltiples entradas para sensores, incluyendo entrada por pulso de contacto seco y un ADC analógico para integración de combustible y otros sensores.
- Batería de respaldo recargable interna para mantener la operación durante cortes de energía transitorios.
- Amplio rango de voltaje de entrada adecuado para sistemas eléctricos de vehículos pesados.
- Memoria de eventos no volátil capaz de almacenar un gran número de registros para transmisión posterior.
- Interfaces opcionales como entrada para sensor 1-Wire y salida colector abierto en variantes de hardware compatibles.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el MTA-Glonass envía ubicación y telemetría del vehículo a la plataforma para que los administradores de flota puedan monitorear unidades en tiempo real, revisar registros históricos y configurar alertas basadas en eventos reportados por el dispositivo. Plaspy detecta automáticamente los protocolos de rastreador compatibles y mapea la telemetría entrante en paneles y reportes.

- Ubicación del vehículo en tiempo real mostrada en los mapas de Plaspy y disponible en vistas de seguimiento en vivo.
- Campos de telemetría CAN FMS ingeridos por Plaspy cuando están disponibles para mostrar horas de motor, velocidad y otros datos del bus.
- Entradas de sensores de combustible convertidas a niveles o eventos por pulso para análisis de consumo y flujos de trabajo de detección de robo.
- Eventos almacenados en el dispositivo que se cargan a Plaspy y aparecen en los registros históricos para cumplimiento y auditoría.
- Entradas del dispositivo y salidas opcionales pueden usarse en los motores de reglas de Plaspy para activar alertas y flujos remotos como acciones antirobo.

## Casos de uso típicos

- Gestión de flotas de camiones pesados empleando telemetría CAN FMS para planificación de mantenimiento y supervisión operativa.
- Monitoreo y conciliación de combustible combinando entradas analógicas y por pulso para detectar anomalías y patrones de consumo.
- Monitoreo antirobo y flujos de inmovilización remota coordinados mediante reglas de eventos y salidas de Plaspy.
- Diagnóstico remoto y seguimiento del ciclo de vida usando parámetros del motor y del bus del vehículo cuando estén disponibles.
- Monitoreo de carga sensible a temperatura cuando se instala un sensor 1-Wire y la telemetría se envía a Plaspy.
- Informes históricos para cumplimiento, auditorías y análisis operativo basados en registros de eventos retenidos.

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones puede depender de la versión de firmware y la revisión de hardware; algunas entradas o salidas pueden ser opcionales en ciertas unidades.
- Los parámetros CAN FMS disponibles para ingestión dependen de la marca, modelo del vehículo y la implementación CAN FMS del fabricante.
- Interfaces opcionales como la entrada 1-Wire y las salidas colector abierto pueden no estar presentes en todas las variantes de hardware.
- Las prácticas de instalación y el cableado afectan las lecturas de sensores y la calidad de la telemetría; se recomienda instalación profesional para conexiones al bus.
- Las variantes regionales de bandas celulares y el soporte de operadores pueden influir en la conectividad de red y el comportamiento de entrega de mensajes.
- Consulte siempre la documentación del fabricante para especificaciones definitivas y para cualquier cambio introducido en actualizaciones de firmware.

## Por qué usar Plaspy con estas funciones

Usar el MTA-Glonass (ver.12M-CAN FMS) con Plaspy ofrece a las organizaciones una forma práctica de combinar posicionamiento GNSS preciso y telemetría a nivel de vehículo en una única solución de monitoreo y reporte. Plaspy ingiere ubicación, datos CAN FMS, entradas de sensores de combustible y eventos almacenados para que los administradores de flota puedan visualizar operaciones, configurar alertas accionables y generar reportes históricos desde una sola plataforma.

Para saber más sobre Plaspy y cómo puede integrarse con el MTA-Glonass visite https://www.plaspy.com. Para detalles de funciones específicas del dispositivo, notas de firmware y documentación técnica oficial, verifique la información con el fabricante en http://www.okb-ta.ru/.
