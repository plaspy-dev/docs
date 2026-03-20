---
slug: /ruptela/plug5/features
id: plug5-features
sidebar_label: Features
title: Ruptela - Plug5 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador OBD Ruptela Plug5 y su integración con Plaspy para telemática y datos vehiculares
keywords:
  - Ruptela Plug5
  - características Plug5
  - rastreador GPS Ruptela Plug5
  - dongle OBD Plug5
  - Plug5 LTE M
  - Plug5 BLE 5.1
  - Plug5 CAN OBDII
  - detección movimiento Plug5
  - gestión de flotas Plug5
  - compatibilidad Plug5 Plaspy
---

# Ruptela - Características del Plug5

Esta página ofrece un resumen público de las capacidades del rastreador GPS OBD Plug5 de Ruptela y describe cómo se presentan esas funciones cuando el dispositivo se utiliza con Plaspy. Está pensada para ayudar a gerentes de flota, integradores y equipos técnicos a comprender las funciones prácticas del Plug5 en el contexto de monitoreo y generación de informes de flotas con Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, la variante regional y la forma en que la unidad se instala o configura. Para parámetros específicos del equipo, comportamiento del firmware o SKUs regionales, consulte la documentación y las notas de versión del fabricante para obtener los detalles técnicos más actuales.

## Resumen de funciones

El Plug5 es un dongle telemático en formato OBD diseñado para instalaciones rápidas de tipo plug and play y para acceder a datos profundos del vehículo. Cuando se usa con Plaspy, ofrece seguimiento de ubicación junto con diagnóstico vehicular y generación de eventos para apoyar operaciones de flota y prevención de pérdidas.

- Formato OBD/OBDII plug and play que simplifica el despliegue y permite la detección automática del modelo de vehículo en flotas mixtas.
- Posicionamiento GNSS combinado con conectividad LTE‑M y fallback a 2G para mantener el reporte de ubicación en tiempo real según las condiciones de cobertura.
- Acceso completo a datos OBDII y CAN más parámetros propietarios del fabricante para telemetría vehicular más detallada y métricas relacionadas con combustible.
- Soporte BLE 5.1 para sensores accesorios y casos de uso de identificación de conductor o de carga.
- Detección de movimiento y choques mediante un acelerómetro interno de 3 ejes, con buffering interno y batería de respaldo para continuidad ante pérdida de energía.

## Características principales de Ruptela - Plug5

- Diseño tipo dongle OBD/OBDII para instalación rápida y detección automática de modelo de vehículo y parámetros básicos.
- Posicionamiento GNSS con un receptor de alto rendimiento para suministro continuo de datos de ubicación.
- Conectividad LTE‑M con fallback automático a 2G para preservar la conectividad en entornos de red variables.
- Lectura nativa de protocolos OBDII y CAN, incluyendo interfaces comunes de flotas y parámetros propietarios del fabricante cuando estén soportados.
- Radio BLE 5.1 para conectar sensores externos, beacons o accesorios de identificación de conductor.
- Monitorización inercial con acelerómetro de 3 ejes para detección de movimiento y choques y generación de eventos.
- Batería de respaldo interna y almacenamiento local en memoria para guardar eventos y telemetría durante pérdidas temporales de conectividad.
- Comunicaciones seguras y soporte de gestión remota del dispositivo para actualizaciones de firmware y cambios de configuración.

## Cómo se integran estas funciones en Plaspy

Plaspy recibe ubicación y telemetría del vehículo desde el Plug5 para ofrecer visibilidad centralizada, alertas e informes a lo largo de la flota. Los datos del dispositivo se muestran en los paneles y sistemas de eventos de Plaspy para respaldar flujos operativos y la respuesta ante incidentes.

- Ubicación en vivo y telemetría del vehículo mostradas en Plaspy para ruteo, estimación de ETA y revisión histórica de recorridos.
- Parámetros OBD y CAN disponibles como flujos de telemetría en Plaspy para apoyar monitoreo de combustible, planificación de mantenimiento y análisis operativo.
- Cargas de eventos por detección de movimiento, choques, jamming o desenchufe aparecen como alertas o entradas en la línea de tiempo para revisión rápida.
- Registros buffered del dispositivo se suben cuando se restablece la conectividad, preservando la continuidad en los registros de viaje y la reconstrucción de incidentes.
- Entradas de sensores BLE y accesorios pueden reflejarse en Plaspy como datos de sensores externos o eventos de identificación cuando estén configurados.

## Casos de uso típicos

- Despliegues rápidos de flota donde la instalación plug and play y la detección automática del vehículo reducen el tiempo de implementación.
- Seguimiento de flota en tiempo real y monitoreo de rutas en flotas mixtas para operaciones de logística y entrega.
- Monitoreo de combustible y planificación de mantenimiento basada en telemetría derivada de OBD y CAN.
- Flujos de trabajo contra robo y vehículos robados usando detección de desenchufe, alertas por jamming, última posición GNSS conocida e informes de batería interna.
- Identificación de conductor e integración de accesorios usando BLE para etiquetas de conductor o sensores de carga.
- Captura de accidentes e incidentes con eventos disparados por el acelerómetro y telemetría buffered para reconstrucción.

## Notas sobre disponibilidad de funciones

- Las revisiones de firmware y software pueden habilitar o modificar ciertos campos de telemetría y comportamientos; verifique las notas de versión del firmware para detalles específicos.
- Las revisiones de hardware y los SKUs regionales pueden afectar las bandas celulares soportadas, el comportamiento BLE y las certificaciones; confirme la variante del modelo antes de implementaciones masivas.
- Algunos parámetros propietarios del fabricante y datos CAN extendidos requieren soporte por parte del vehículo o la ECU y pueden no estar disponibles en todos los modelos o regiones.
- El método de instalación y el estado del cableado del vehículo o del puerto OBD pueden cambiar qué señales están disponibles para el dispositivo.
- Las capacidades de gestión remota y FOTA dependen del aprovisionamiento del dispositivo y del acceso a la plataforma de gestión de dispositivos del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el Plug5 con Plaspy proporciona a las organizaciones una solución combinada para conciencia de ubicación y telemetría a nivel de vehículo sin instalaciones complejas de hardware. El formato OBD y la detección automática del vehículo simplifican los despliegues, mientras que el acceso a OBD y CAN más BLE amplía los tipos de datos operativos disponibles en Plaspy para informes, alertas y flujos de trabajo de mantenimiento.

Para saber más sobre cómo Plaspy puede usar los datos del Plug5 para visibilidad de flota y supervisión operativa visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, notas de firmware y la guía más reciente del fabricante, por favor verifique las funciones y el comportamiento con Ruptela en https://ruptela.com/ dado que las propiedades del dispositivo y la funcionalidad del firmware pueden cambiar con el tiempo.
