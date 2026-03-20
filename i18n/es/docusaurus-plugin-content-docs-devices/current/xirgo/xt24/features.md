---
slug: /xirgo/xt24/features
id: xt24-features
sidebar_label: Features
title: Xirgo - XT24 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del rastreador Xirgo XT24 y su compatibilidad con Plaspy para seguimiento de vehículos y telemetría OBD
keywords:
  - Xirgo XT24
  - características XT24
  - rastreador GPS Xirgo
  - rastreador OBD XT24
  - compatibilidad XT24 Plaspy
  - seguimiento de vehículos
  - telemetría OBD
  - rastreador LTE Cat M1
  - rastreador para gestión de flotas
  - detección de movimiento
---

# Xirgo - XT24 Características

Esta página describe el contexto de funcionalidades públicas para el uso del Xirgo XT24 con Plaspy. Resume las capacidades prácticas que puede esperar cuando el XT24 está conectado a Plaspy, incluyendo su instalación OBD plug-and-play, receptor GNSS integrado, conectividad celular LTE Cat M1, soporte para parámetros OBD-II estándar y numerosos PIDs propietarios de fabricantes, además de un acelerómetro de 3 ejes para eventos de movimiento. El contenido se centra en cómo estas funciones se traducen en visibilidad y telemetría dentro de Plaspy, más que en detalles de configuración a bajo nivel.

La disponibilidad y el comportamiento exacto de las funcionalidades pueden variar según la versión de firmware del dispositivo, la revisión de hardware, el lugar de instalación y la implementación del fabricante. Dependiendo de la marca y modelo del vehículo, algunos PIDs OBD pueden no estar disponibles, y ciertas funciones pueden cambiar con actualizaciones de firmware o variantes regionales. Para configuraciones específicas del dispositivo y las capacidades más recientes, consulte la documentación del fabricante y las notas de la versión.

## Resumen de funciones

El XT24 es un rastreador compacto, con conexión directa al puerto OBD, diseñado para despliegues rápidos en vehículos de pasajeros y de trabajo ligero, proporcionando posición GNSS, telemetría del bus del vehículo y datos de movimiento a Plaspy. Está pensado para ofrecer ubicación confiable, velocidad y parámetros OBD seleccionados para soportar seguimiento en tiempo real, generación de reportes de flota y alertas basadas en eventos.

- Instalación OBD plug-and-play para montaje rápido en vehículos compatibles
- Informes en tiempo real de posición GNSS y velocidad para seguimiento en vivo y historial de rutas
- Lectura de parámetros OBD-II estándar y numerosos PIDs propietarios OEM para exponer telemetría del bus del vehículo
- Conexión celular LTE Cat M1 para transmitir telemetría de forma eficiente a Plaspy
- Acelerómetro de 3 ejes para detección de movimiento, impactos y manipulación, con alertas asociadas

## Funciones principales del Xirgo - XT24

- Interfaz OBD plug-and-play para instalación rápida en vehículos de pasajeros y ligeros
- Receptor GPS integrado y antena para informes de posición y velocidad confiables
- Conectividad LTE Cat M1 para comunicación de área amplia y bajo consumo hacia Plaspy
- Lectura de parámetros OBD-II estándar y numerosos PIDs propietarios cuando están disponibles
- Acelerómetro de 3 ejes y detector de movimiento para eventos de desplazamiento e impacto
- Indicadores LED para bloqueo GPS, registro GSM y comunicación OBD que facilitan la puesta en marcha
- Reporta estado de ignición y otra telemetría del bus del vehículo a Plaspy cuando el vehículo expone esas señales
- Alimentación desde el puerto OBD del vehículo con batería interna de respaldo opcional en algunas variantes

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere la ubicación, la telemetría OBD y los eventos de movimiento del XT24 para ofrecer visibilidad en tiempo real, reportes históricos y sistemas de alerta. Una vez instalado el XT24 en el vehículo y establecida la comunicación, Plaspy asigna la posición GNSS a los registros del vehículo y asocia los parámetros OBD disponibles con esa ubicación y momento.

- Actualizaciones en vivo de ubicación y velocidad mostradas en los mapas y paneles de Plaspy
- Telemetría del bus del vehículo, como estado de ignición y PIDs OBD compatibles, visibles en paneles de telemetría
- PIDs relacionados con combustible y parámetros de diagnóstico mostrados cuando el vehículo soporta esas lecturas OBD
- Eventos de movimiento, impacto y manipulación detectados por el acelerómetro utilizados para alertas y flujos de trabajo
- Historial de rutas y telemetría que combina datos GNSS y OBD para informes y análisis

## Casos de uso típicos

- Gestión de flotas y despacho con ubicación del vehículo en tiempo real e historial de viajes
- Monitoreo antirrobo y recuperación rápida mediante alertas de posición y movimiento en tiempo real
- Diagnóstico del vehículo y monitoreo de combustible cuando los PIDs OBD están disponibles
- Programas de comportamiento y seguridad del conductor usando eventos de movimiento para detectar conducción agresiva
- Despliegues rápidos y rollouts a gran escala habilitados por la instalación OBD plug-and-play
- Planificación de mantenimiento y análisis de utilización mediante la telemetría combinada GNSS y OBD

## Notas sobre disponibilidad de funciones

- La disponibilidad de PIDs OBD depende de la marca, modelo y la implementación de la ECU; no todos los vehículos exponen todos los parámetros
- La versión de firmware y la revisión de hardware pueden afectar las funciones soportadas, la frecuencia de telemetría y el comportamiento de los eventos
- El tipo de instalación y el acceso al puerto pueden influir en qué señales son legibles desde el bus del vehículo
- Variantes regionales o certificaciones pueden modificar las bandas celulares soportadas o las opciones de batería de respaldo
- Para funciones avanzadas como flujos de trabajo de inmovilización o integración con periféricos externos, puede requerirse hardware compatible y trabajo de integración

## Por qué usar Plaspy con estas funciones

Usar el XT24 con Plaspy ofrece a los equipos de operaciones una forma directa de combinar posición GNSS, telemetría del bus del vehículo y eventos de movimiento en una vista unificada de la flota. El factor de forma OBD plug-and-play reduce el tiempo de instalación, mientras que el dispositivo proporciona a Plaspy las entradas comúnmente utilizadas para seguimiento, generación de reportes y flujos de trabajo basados en eventos que apoyan la optimización de flota, la respuesta ante robos y la visibilidad diagnóstica básica.

Learn more about how Plaspy can use XT24 data to provide operational oversight and reporting by visiting https://www.plaspy.com. For the most current device specific details, firmware notes and manufacturer guidance, verify feature lists and technical specifications on the Xirgo website https://xirgo.com/.
