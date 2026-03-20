---
slug: /teltonika/fmc800/features
id: fmc800-features
sidebar_label: Features
title: Teltonika - FMC800 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Teltonika FMC800 y su integración con Plaspy para gestión de flotas y registro de choques
keywords:
  - Características Teltonika FMC800
  - Rastreador GPS Teltonika FMC800
  - Características FMC800
  - Detección de choques FMC800
  - Bluetooth LE FMC800
  - Teltonika FMC800 Plaspy
  - Rastreo de vehículos FMC800
  - Gestión de flotas FMC800
  - Seguimiento GNSS FMC800
  - Rastreador OBD II FMC800
---

# Teltonika - FMC800: Características

Esta página presenta un resumen público de las capacidades del Teltonika FMC800 y cómo se aprovechan dentro de Plaspy para el seguimiento de flotas y el registro de trazas de impacto. El enfoque está en las funciones visibles para el usuario, su valor práctico y la forma en que el dispositivo reporta a Plaspy, sin exponer detalles privados de implementación.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Usted debe considerar la información aquí como un resumen práctico y consultar la documentación oficial de Teltonika para detalles técnicos específicos del dispositivo.

## Resumen de funciones

El FMC800 es un rastreador compacto de tipo OBD II plug and play diseñado para seguimiento de vehículos y gestión de flotas. Integra conectividad celular LTE Cat 1 con conmutación a 2G, posicionamiento GNSS multi constelación, trazado de choques mediante acelerómetro integrado y Bluetooth LE para emparejar dispositivos o sensores de baja energía.

- Factor de forma OBD II plug and play para instalación rápida y alimentación desde el vehículo
- Conectividad LTE Cat 1 con fallback a 2G para amplia cobertura y resiliencia en redes
- Trazado de choques configurable mediante un acelerómetro interno de 3 ejes para datos de incidente detallados
- Soporte Bluetooth LE para conectar balizas y sensores de baja energía como temperatura y detección magnética
- Posicionamiento GNSS multi constelación para actualizaciones de ubicación con alta precisión
- Tamaño reducido y batería interna de respaldo para mantener reportes durante breves cortes de energía

## Funciones principales del Teltonika - FMC800

- Conexión OBD II plug and play para instalación sencilla y alimentación directa del vehículo
- Módem celular LTE Cat 1 con conmutación a 2G para conectividad móvil
- Acelerómetro interno de 3 ejes con parámetros de trazado de choque configurables
- Interfaz Bluetooth Low Energy para balizas externas y sensores de bajo consumo
- Soporte GNSS multi constelación incluyendo GPS, GLONASS, GALILEO, BEIDOU y QZSS, además de asistencia A-GPS
- Precisión de posición adecuada para seguimiento vehicular con alta sensibilidad GNSS
- Batería de respaldo interna para mantener operación durante pérdidas breves de alimentación
- Carcasa con clasificación IP41 y amplio rango de temperatura operativa pensado para entornos vehiculares

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe los datos de ubicación y eventos del FMC800 para que los administradores de flota puedan ver el estado del vehículo, las trazas de choque y la información de sensores conectados directamente en la plataforma. Plaspy detecta automáticamente el protocolo del dispositivo y normaliza los datos entrantes para su visualización y generación de informes.

- Ubicación en tiempo real e historial de rutas visibles en Plaspy a medida que el rastreador envía arreglos GNSS
- Eventos de choque y datos detallados de traza de impacto aparecen como eventos con marca de tiempo para revisión de incidentes
- Eventos de sensores vinculados por Bluetooth LE y la presencia de balizas pueden capturarse y mostrarse cuando el FMC800 los reporta
- Estado de conectividad y alimentación del dispositivo, incluidos eventos de desconexión o activación de batería de respaldo, disponibles para monitoreo
- Plaspy acepta conexiones estándar TCP o UDP y puede recibir tráfico de dispositivos dirigido al dominio del servidor Plaspy para su manejo automático

## Casos de uso típicos

- Despliegue rápido de seguimiento vehicular usando la conexión OBD II plug and play
- Detección de choques y análisis post incidente con datos de traza basados en el acelerómetro
- Monitoreo de estado de activos mediante emparejamiento de sensores Bluetooth LE para alertas de temperatura o movimiento
- Seguimiento del desempeño de conductores y flota con historial posicional y reportes de eventos
- Detección de robo o movimiento no autorizado mediante eventos de desconexión o detección de arrastre/remolque
- Visibilidad a largo plazo de la flota y auditoría de rutas habilitada por el seguimiento GNSS multi constelación

## Notas sobre disponibilidad de funciones

- El comportamiento de las funciones puede variar entre versiones de firmware y configuraciones del fabricante
- Revisiones de hardware y variantes regionales pueden cambiar las bandas celulares soportadas o las certificaciones
- Algunos casos de uso de Bluetooth LE dependen de la disponibilidad y configuración de balizas o sensores externos compatibles
- El método de instalación y el cableado del vehículo pueden afectar qué señales del vehículo y estados de alimentación están disponibles para el dispositivo
- Para rangos de parámetros y opciones de configuración precisas, consulte la documentación oficial de Teltonika

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMC800 con Plaspy brinda a las organizaciones visibilidad consolidada de la ubicación de los vehículos, eventos de choque y datos de sensores conectados. La plataforma de Plaspy recopila y normaliza los datos del rastreador para que los equipos operativos puedan monitorear flotas, investigar incidentes y generar informes sin gestionar tráfico bruto del dispositivo.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific feature and firmware details on the manufacturer site https://www.teltonika-gps.com/ . Device features and firmware behavior can evolve over time so confirm current specifications and configuration steps with the official manufacturer documentation.
