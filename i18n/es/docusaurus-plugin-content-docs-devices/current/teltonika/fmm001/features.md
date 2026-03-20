---
slug: /teltonika/fmm001/features
id: fmm001-features
sidebar_label: Features
title: Teltonika - FMM001 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del Teltonika FMM001 y cómo sus funciones OBD, GNSS y Bluetooth funcionan con Plaspy para flotas
keywords:
  - características Teltonika FMM001
  - rastreador GPS Teltonika FMM001
  - rastreador OBD FMM001
  - Bluetooth GPS FMM001
  - funciones GNSS FMM001
  - Teltonika FMM001 Plaspy
  - seguimiento de flotas FMM001
  - rastreador OBD II Teltonika
  - funciones telemáticas FMM001
  - modos de suspensión FMM001
---

# Teltonika - FMM001: Características

Esta página ofrece un resumen público de las características del Teltonika FMM001 y explica cómo se integran con Plaspy. Está dirigida a responsables de flotas, integradores y evaluadores técnicos que necesitan entender las capacidades prácticas que puede ofrecer este dispositivo cuando se utiliza con Plaspy para seguimiento, telemática y monitorización básica del vehículo.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para configuraciones específicas, diagnóstico avanzado y el conjunto de funciones más reciente, consulte la documentación oficial del fabricante indicada más abajo.

## Visión general de funciones

El Teltonika FMM001 es un dispositivo OBD plug-and-track que combina posicionamiento GNSS, conectividad Bluetooth Low Energy, acceso a datos OBD II y detección de movimiento, ofreciendo una solución telemática compacta. Está pensado para proporcionar conocimiento de la ubicación, detección de eventos del conductor y del vehículo, y lectura de parámetros básicos del vehículo para flotas y servicios de movilidad.

- Factor de forma Plug and Track OBD para instalación rápida en vehículos compatibles
- Reporte de ubicación GNSS para seguimiento continuo y registro de viajes
- Lectura de parámetros OBD II para exponer datos del vehículo relevantes a combustible y motor
- Soporte Bluetooth Low Energy para integración de sensores y beacons
- Datos detallados del acelerómetro para eventos de movimiento como remolque, choque y desconexión
- Múltiples modos de suspensión configurables para reducir el consumo durante periodos de inactividad

## Funciones principales del Teltonika - FMM001

- Lectura de parámetros OBD II para telemetría y monitoreo relacionado con combustible
- Posicionamiento GNSS para ubicación, registro de viajes y eventos de geocerca
- Soporte Bluetooth Low Energy para sensores externos y beacons
- Acelerómetro integrado para detección de movimiento y clasificación de eventos
- Diseño listo para LTE CAT M1 para conectividad celular
- Múltiples modos de suspensión, incluidos modos de ahorro de GPS y deep sleep
- Sincronización de tiempo mediante GNSS, NITZ o NTP
- Configuración y actualizaciones de firmware vía FOTA Web, FOTA, Teltonika Configurator y la app FMBT

## Cómo estas funciones funcionan con Plaspy

Plaspy puede ingerir y mostrar los datos del FMM001 para proporcionar visibilidad operacional, monitoreo de eventos y registros históricos de ubicación. Cuando el dispositivo reporta a Plaspy, sus capacidades soportadas se pueden mapear a las vistas habituales de la plataforma para supervisión y análisis.

- Los datos de ubicación y de viaje provenientes del GNSS se muestran en Plaspy para seguimiento en tiempo real y el historial de rutas
- Los parámetros OBD II reportados por el dispositivo pueden utilizarse en Plaspy para monitoreo de combustible y análisis del rendimiento del vehículo en los paneles
- Los eventos impulsados por el acelerómetro, como remolque, choque o desconexión, aparecen como eventos para alertas e investigación
- La presencia de sensores Bluetooth y la actividad de beacons pueden representarse en la plataforma cuando el dispositivo reporta esas entradas
- El estado de configuración y de firmware informado por el rastreador puede registrarse en Plaspy para facilitar la gestión de dispositivos y el diagnóstico

## Casos de uso típicos

- Seguimiento de flotas e historial de rutas para equipos de reparto, servicios y campo
- Programas de alquiler y leasing que requieren instalación plug-and-play y registro de viajes
- Flujos de trabajo de monitoreo del comportamiento del conductor, como análisis de exceso de velocidad e inactividad con datos de acelerómetro y OBD
- Programas telemáticos para seguros que aprovechan parámetros OBD y eventos de movimiento
- Detección anti-manipulación de equipos o vehículos mediante alertas de desconexión y remolque
- Integración de sensores BLE o beacons para monitoreo adicional de activos o cabina

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen de la versión de firmware del FMM001; firmware más nuevo puede añadir o refinar capacidades
- Revisiones de hardware y variantes regionales pueden cambiar las bandas celulares o las opciones soportadas
- Ciertos modelos de vehículos pueden limitar los parámetros OBD II disponibles según la implementación del fabricante
- El tipo de instalación y el cableado pueden afectar la detección de ignición y el reporte de alimentación externa
- El soporte de sensores Bluetooth requiere dispositivos BLE compatibles y la configuración adecuada

## Por qué usar Plaspy con estas funciones

Utilizar el Teltonika FMM001 con Plaspy ofrece a las organizaciones una opción telemática compacta y lista para instalar que combina datos OBD del vehículo, ubicación GNSS y eventos de movimiento en un único flujo de información. Plaspy puede centralizar los datos del rastreador para visibilidad de la flota, alertas basadas en eventos e informes históricos, ayudando a los equipos a tomar decisiones operativas con un contexto vehicular más claro.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current and detailed device specifications, firmware notes, and manufacturer implementation details please verify with the official Teltonika documentation at https://www.teltonika-gps.com/ .
