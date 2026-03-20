---
slug: /teltonika/fmb150/features
id: fmb150-features
sidebar_label: Features
title: Teltonika - FMB150 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del Teltonika FMB150 y su integración con Plaspy para monitoreo de flotas y vehículos
keywords:
  - Características Teltonika FMB150
  - Rastreador GPS Teltonika FMB150
  - Datos CAN FMB150
  - Bluetooth LE FMB150
  - Soporte GNSS FMB150
  - Seguimiento de flotas FMB150
  - Compatibilidad EV FMB150
  - Rastreador compatible con Plaspy
  - Especificaciones del dispositivo FMB150
  - Telemetría FMB150
---

# Teltonika - Características del FMB150

Esta página presenta el contexto público de características para el uso del rastreador GPS Teltonika FMB150 con Plaspy. Resume las capacidades principales relevantes para gestores de flota, integradores y usuarios técnicos que desean comprender cómo este equipo puede aportar datos de ubicación, vehículo y sensores a Plaspy para monitoreo y operación.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para parámetros específicos del equipo, modelos de vehículo soportados y notas de firmware más recientes consulte la documentación oficial de Teltonika.

## Resumen de funciones

El Teltonika FMB150 es un rastreador 2G pensado para seguimiento vehicular y lectura de datos del bus CAN, con soporte Bluetooth LE para sensores externos. Su receptor multi GNSS y su robustez lo hacen idóneo para diversos casos de monitoreo de flotas y vehículos eléctricos.

- Lectura de datos del bus CAN para rendimiento del vehículo y diagnósticos básicos, incluyendo soporte para muchos modelos de vehículos eléctricos
- Soporte Bluetooth Low Energy para conectar beacons y sensores externos como temperatura, humedad, detección magnética y movimiento
- Soporte multi GNSS para GPS, GLONASS, Galileo, BeiDou y sistemas auxiliares para mejorar el posicionamiento
- GSM 2G cuatribanda con transferencia de datos GPRS para reportes de ubicación y telemetría
- Amplio rango de temperatura de operación y protección IP41 para uso resistente en campo

## Funciones principales del Teltonika FMB150

- Procesador de datos CAN integrado que permite la lectura del bus CAN en vehículos ligeros, camiones, buses y vehículos eléctricos compatibles
- Radio Bluetooth LE para emparejar beacons de baja energía y sensores externos que amplían la telemetría
- Receptor GNSS de múltiples constelaciones compatible con GPS, GLONASS, GALILEO y BEIDOU, además de métodos de posicionamiento asistido
- Módulo basado en TM2500 que soporta GSM, GPRS, GNSS y Bluetooth
- Sensibilidad de seguimiento y precisión de posición pensadas para actualizaciones de ubicación confiables
- Múltiples interfaces físicas que incluyen entradas y salidas digitales, entradas analógicas, interfaces CAN y una interfaz 1-Wire
- Funciones en el dispositivo como sensor de acelerómetro, modos de suspensión, soporte de comandos SMS y GPRS, sincronización horaria, detección de encendido y capacidad de configuración de firmware

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere la telemetría del FMB150 para ofrecer visibilidad consolidada de ubicación, vehículo y sensores. La plataforma detecta automáticamente los protocolos soportados por el rastreador para que los dispositivos puedan reportar a Plaspy con mínima configuración manual de protocolo.

- Las ubicaciones y actualizaciones GNSS del vehículo aparecen en los mapas e historial de Plaspy para seguimiento y revisión de rutas
- Los parámetros derivados del CAN pueden mostrarse como telemetría del vehículo o campos de diagnóstico dentro de los paneles e informes de Plaspy
- Los eventos provenientes de beacons Bluetooth LE y sensores externos pueden visualizarse como lecturas de sensores o eventos de presencia en Plaspy
- Entradas como encendido y entradas digitales se traducen en marcadores de evento e indicadores de estado para el monitoreo operativo
- El estado de configuración del dispositivo y la disponibilidad para actualización de firmware reportada por el equipo pueden rastrearse dentro de Plaspy para planificar mantenimiento

## Casos de uso típicos

- Seguimiento de flotas y monitoreo rutinario de la ubicación de vehículos para flotas comerciales ligeras
- Monitoreo de flotas de vehículos eléctricos donde los datos CAN aportan parámetros adicionales del vehículo
- Integración de sensores de temperatura o humedad por Bluetooth LE para controlar condiciones ambientales de activos
- Supervisión de maquinaria especial y buses donde la telemetría CAN añade contexto operativo
- Detección de movimiento y manipulación mediante acelerómetro y sensores magnéticos externos
- Etiquetado de activos y detección por proximidad usando beacons BLE en flujos de trabajo mixtos de activos

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones depende de la versión de firmware del dispositivo y de la revisión de hardware específica instalada
- Los campos de datos CAN y los modelos de EV soportados varían según la marca, el modelo y la implementación del fabricante
- La funcionalidad Bluetooth LE depende de la compatibilidad de los sensores y beacons externos
- Las redes celulares regionales y la disponibilidad continua de servicios 2G pueden afectar la conectividad en algunas zonas
- El cableado de instalación y la presencia de señales CAN del vehículo o sensores externos determinan qué funciones son utilizables

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMB150 con Plaspy ofrece una manera práctica de combinar la ubicación GNSS precisa con datos de vehículo derivados del bus CAN y entradas de sensores BLE en una sola plataforma de monitoreo. Esta combinación ayuda a gestores de flota y equipos operativos a obtener una conciencia situacional más completa al correlacionar movimiento, estado del vehículo y datos ambientales junto con reportes históricos y alertas.

Para obtener más información sobre Plaspy y cómo puede integrarse con dispositivos como el Teltonika FMB150 visite https://www.plaspy.com. Para las especificaciones de dispositivo más actuales, comportamiento de firmware y listas de vehículos soportados verifique los detalles en el sitio del fabricante https://www.teltonika-gps.com/
