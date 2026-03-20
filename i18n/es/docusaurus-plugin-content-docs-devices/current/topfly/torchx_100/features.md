---
slug: /topfly/torchx_100/features
id: torchx_100-features
sidebar_label: Features
title: TopFly - TorchX 100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del TopFly TorchX 100 y su integración con Plaspy
keywords:
  - TopFly TorchX 100
  - características TorchX 100
  - rastreador GPS TopFly
  - TorchX 100 Plaspy
  - rastreador OBDII GPS
  - telemetría CAN BUS
  - rastreador de cumplimiento ELD
  - rastreador gestión de flotas
  - diagnóstico vehicular GPS
  - hotspot WiFi para pasajeros
---

# TopFly - TorchX 100 - Características

Esta página ofrece un resumen público de las funciones del TopFly TorchX 100 y explica cómo sus capacidades se incorporan a Plaspy para la gestión de flotas, cumplimiento normativo y monitoreo operativo. El contenido se centra en información práctica y no sensible sobre qué datos reporta el dispositivo y cómo esos reportes son visibles y accionables dentro de Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación, la variante regional y la implementación del fabricante. Revise la documentación del fabricante y las notas de la versión para obtener los detalles más recientes del dispositivo antes de planificar despliegues o flujos de trabajo de cumplimiento.

## Visión general de las funciones

El TorchX 100 es un rastreador OBDII plug-and-play diseñado para entregar actualizaciones de ubicación frecuentes y telemetría profunda del vehículo a Plaspy. Combina lecturas del CAN BUS del vehículo con conectividad y almacenamiento en búfer para ofrecer visibilidad continua en operaciones de flotas y transporte de pasajeros.

- Instalación plug-and-play en OBDII para despliegues rápidos y montaje sencillo en la mayoría de los vehículos
- Telemetría completa de CAN BUS incluyendo VIN, odómetro verdadero, nivel de combustible, estado de ignición y códigos de diagnóstico
- Soporte ELD para reporte de horas de conducción y flujos de trabajo regulatorios visibles en Plaspy
- Conectividad celular global con conmutación a redes heredadas y almacenamiento local para preservar datos cuando se pierde cobertura
- Hotspot WiFi de doble banda integrado y soporte BLE para ampliar servicios a pasajeros e integración de sensores
- Detección de comportamiento de conducción y alertas por interferencia de red para mejorar la supervisión de seguridad y la salud del dispositivo

## Funciones principales del TopFly - TorchX 100

- Factor de forma OBDII plug-and-play para instalación rápida en vehículos compatibles
- Lectura completa de datos CAN BUS con VIN, odómetro verdadero, nivel de combustible, estado de ignición y reporte de DTC
- Funcionalidad ELD para RODS y el seguimiento de horas de servicio
- Conectividad global 4G LTE Cat 4 con respaldo a 3G y 2G para mantener el reporte en áreas con cobertura variable
- Posicionamiento GNSS de alta precisión que soporta actualizaciones de ubicación frecuentes y exactas
- Gran búfer de datos local para almacenar puntos de ubicación cuando el dispositivo está fuera de línea
- Hotspot WiFi de doble banda integrado para ofrecer acceso a internet a pasajeros y servicios a bordo
- Soporte BLE 4.2 para sensores Bluetooth externos y balizas, además de funciones de seguridad del dispositivo como detección de conducta de conducción y alertas por interferencia

## Cómo funcionan estas funciones en Plaspy

Plaspy ingiere la telemetría del TorchX 100 y la presenta en paneles, reportes y flujos de alertas para que los gestores de flota y equipos de cumplimiento puedan actuar sobre los datos de ubicación y del vehículo. Plaspy detecta automáticamente los protocolos compatibles del rastreador y mapea los campos reportados en la plataforma para visibilidad y flujos de trabajo orientados a eventos.

- Ubicación en tiempo real y telemetría CAN BUS mostradas en mapas de Plaspy y en las líneas de tiempo de activos, con intervalos de reporte configurables
- Registros ELD y horas de los conductores integrados en los reportes de Plaspy para supervisión regulatoria y revisión histórica
- Códigos de diagnóstico, VIN y valores de odómetro verdadero registrados en Plaspy para soportar flujos de trabajo de mantenimiento e identificación de activos
- La continuidad del almacenamiento en búfer offline se refleja como cargas retrasadas o datos que rellenan huecos para que las trazas históricas sean precisas una vez que se restablece la conectividad
- Estados de BLE y WiFi y eventos de salud del dispositivo disponibles como indicadores operativos dentro de Plaspy para servicios a pasajeros y monitoreo de sensores

## Casos de uso típicos

- Gestión de flotas para monitoreo de rutas, flujos de trabajo basados en odómetro y planificación operativa informada por el consumo de combustible
- Transporte de pasajeros y servicios de lanzadera que combinan actualizaciones de ubicación frecuentes con WiFi a bordo para mejorar la experiencia del usuario y la programación
- Operaciones de alquiler de autos y movilidad compartida que usan VIN y odómetro verdadero para simplificar los procesos de check in y check out y apoyar la detección antirrobo
- Cumplimiento regulatorio para conductores comerciales mediante la funcionalidad ELD integrada y los reportes de Plaspy para auditorías
- Diagnóstico vehicular y planificación de mantenimiento basados en reportes DTC y telemetría CAN BUS
- Detección y recuperación ante robos apoyada por actualizaciones de posición frecuentes y reporte del estado de ignición

## Notas sobre la disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware y la revisión de hardware; los fabricantes pueden añadir, eliminar o cambiar comportamientos con el tiempo
- Algunas funciones dependen de la disponibilidad de OBDII en el vehículo y de los protocolos CAN BUS soportados por el propio vehículo
- El soporte de bandas celulares regionales y el comportamiento de roaming pueden diferir según la variante del modelo o la configuración de firmware
- La funcionalidad ELD y los reportes regulatorios pueden requerir configuración o certificación específica por región para cumplir con las normativas locales
- El comportamiento del hotspot WiFi integrado y de BLE puede verse influido por ajustes de firmware y requisitos regulatorios regionales

## Por qué usar Plaspy con estas funciones

Usar el TorchX 100 con Plaspy centraliza la ubicación del vehículo, la telemetría CAN BUS y los registros de cumplimiento en una sola vista operativa. Plaspy traduce las actualizaciones frecuentes de ubicación, los registros ELD y los datos de diagnóstico en paneles, alertas y reportes que ayudan a los equipos operativos a gestionar rutas, monitorear la salud de los vehículos y garantizar el cumplimiento de las horas de los conductores.

Para obtener más información sobre Plaspy y cómo el TorchX 100 puede integrarse en sus flujos de telemática y cumplimiento, visite https://www.plaspy.com. Para los detalles más actuales sobre funciones del dispositivo, notas de firmware y especificaciones del fabricante, verifique la información en el sitio oficial de TopFly https://www.topflytech.com/ ya que el comportamiento y las funciones disponibles pueden cambiar con nuevas versiones.
