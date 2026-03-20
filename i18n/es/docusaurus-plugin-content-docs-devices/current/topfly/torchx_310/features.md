---
slug: /topfly/torchx_310/features
id: torchx_310-features
sidebar_label: Features
title: TopFly - TorchX 310 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador TopFly TorchX 310 y su integración con Plaspy para gestión de flotas
keywords:
  - TopFly TorchX 310
  - características TorchX 310
  - rastreador GPS TopFly
  - TorchX 310 Plaspy
  - rastreador OBD II
  - telemetría bus CAN
  - rastreador BLE 5.0
  - rastreador LTE Cat M1
  - diagnóstico vehicular GPS
  - rastreo de flotas TopFly
---

# TopFly - TorchX 310 — Características

Esta página describe el contexto público de uso del rastreador GPS TopFly TorchX 310 con Plaspy. Resume las capacidades del dispositivo que son relevantes para usuarios de Plaspy, enfocándose en funciones prácticas y en cómo la telemetría y los eventos del equipo pueden aprovecharse dentro de la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el modelo regional y las particularidades de la instalación en cada vehículo. Para detalles técnicos específicos del equipo y las especificaciones más recientes, consulte la documentación del fabricante.

## Resumen de características

El TorchX 310 es un rastreador OBD-II listo para usar, diseñado para aportar ubicación del vehículo y telemetría derivada del bus CAN a plataformas de gestión de flotas como Plaspy. Su combinación de instalación OBD-II sencilla, conectividad celular, posicionamiento GNSS, soporte BLE para accesorios y funciones de seguridad integradas lo hace apropiado para despliegues rápidos y monitoreo operativo.

- Instalación OBD-II plug-and-play para despliegues rápidos y sin cambios de cableado complejos
- Lecturas del bus CAN que incluyen VIN, odómetro real, nivel de combustible y códigos de diagnóstico para un contexto vehicular preciso
- Seguimiento GNSS en tiempo real con intervalos de reporte configurables para monitoreo en vivo
- Soporte BLE 5.0 para emparejar sensores y accesorios que amplían la telemetría
- Conectividad celular LTE Cat M1 con soporte NB2 y fallback a 2G cuando aplica para amplia cobertura
- Gran buffer offline para almacenar puntos de ubicación cuando no hay cobertura y reenviarlos cuando se restablece la conectividad

## Características principales de TopFly - TorchX 310

- Factor de forma OBD-II plug-in para una instalación sencilla en el vehículo
- Telemetría del bus CAN que captura VIN, odómetro real, nivel de combustible, DTCs y estado de encendido
- GNSS multiconstelación para datos de ubicación confiables
- Conectividad celular LTE Cat‑M1 con NB2 y fallback a 2G cuando está disponible
- BLE 5.0 para emparejar accesorios como sensores de temperatura, sensores de puerta o llaveros inalámbricos
- Reportes de alta frecuencia configurables con capacidad para intervalos cortos de hasta 3 segundos
- Amplio buffer interno capaz de almacenar miles de puntos de ubicación para registro offline
- Funciones de seguridad para el conductor que incluyen detección de choque, monitoreo de conducción brusca y un buzzer interno para alertas dentro de la cabina

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere la telemetría del TorchX 310 para ofrecer visibilidad de ubicación, diagnósticos y reportes de eventos orientados a operaciones de flota. Los datos enviados por el rastreador se presentan en los dashboards, mapas y flujos de alertas de Plaspy para que los equipos puedan actuar sobre el estado del vehículo y el comportamiento del conductor.

- Actualizaciones de ubicación en tiempo real e intervalos de reporte configurables reflejados en los mapas en vivo de Plaspy
- Identidad del vehículo y diagnósticos como VIN, odómetro y DTCs disponibles como campos de telemetría en Plaspy
- Señales de encendido y eventos de conducción (aceleraciones bruscas, frenadas fuertes, detección de choque) publicadas como eventos para alertas e informes
- La carga de datos en buffer asegura que los puntos de ubicación históricos se reenvíen a Plaspy una vez que se restablece la conectividad
- La telemetría de accesorios BLE puede ser transmitida a Plaspy cuando el equipo reporta datos de sensores emparejados
- Plaspy detecta automáticamente protocolos de rastreadores compatibles y acepta transportes comunes para ingerir los datos del dispositivo

## Casos de uso típicos

- Gestión y despacho de flotas donde las lecturas OBD-II proporcionan verificación de odómetro y VIN junto con ubicación en tiempo real
- Programas de seguros basados en uso y de entrenamiento de conductores que aprovechan la detección de eventos bruscos y alertas de comportamiento de conducción
- Monitoreo antirobo y detección de manipulación usando registro de respaldo y alertas internas en la cabina
- Monitoreo de cadena de frío o transporte refrigerado emparejando sensores BLE de temperatura y puertas con la telemetría del vehículo
- Programas de despliegue rápido que requieren rastreadores plug-and-play para minimizar el tiempo de instalación en flotas grandes

## Notas sobre disponibilidad de funciones

- El conjunto de funciones puede variar según la versión de firmware y puede ampliarse o modificarse mediante actualizaciones del fabricante
- Las variantes regionales del dispositivo pueden diferir en soporte de bandas celulares y opciones de fallback
- Algunos parámetros del bus CAN y la disponibilidad de DTCs dependen de la marca, modelo y la implementación OBD-II del vehículo
- La compatibilidad y el comportamiento de accesorios BLE dependen del fabricante y firmware específico del sensor
- El tipo de instalación y el cableado del vehículo pueden influir en qué señales OBD-II y CAN están disponibles para el rastreador

## Por qué usar Plaspy con estas funciones

Usar el TorchX 310 con Plaspy proporciona a las organizaciones una vía práctica para combinar diagnósticos a nivel de vehículo derivados del CAN con seguimiento de ubicación y monitoreo de eventos. Plaspy muestra campos derivados del CAN como VIN, odómetro y DTCs junto con la posición GNSS y datos de eventos de conductor, ayudando a las flotas a mantener visibilidad operativa, simplificar diagnósticos y reaccionar ante señales relacionadas con la seguridad.

Para saber más sobre cómo Plaspy puede trabajar con dispositivos como el TorchX 310 visite https://www.plaspy.com. Para las especificaciones más recientes, notas de firmware y orientación del fabricante, verifique los detalles directamente con TopFly en https://www.topflytech.com/
