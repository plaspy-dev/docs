---
slug: /itriangle/obd_ii/features
id: obd_ii-features
sidebar_label: Features
title: iTriangle - OBD II Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador iTriangle OBD II y cómo su telemetría se integra con Plaspy para monitoreo de flotas
keywords:
  - iTriangle OBD II
  - funciones iTriangle OBD II
  - rastreador GPS iTriangle
  - rastreador OBD II
  - funciones OBD II Plaspy
  - rastreador diagnóstico vehicular
  - telemetría CAN bus
  - rastreador OBD plug and play
  - rastreo de flotas Plaspy
  - rastreador con BLE
---

# iTriangle - Características OBD II

Esta página ofrece el contexto público de las funcionalidades del rastreador iTriangle OBD II cuando se utiliza con Plaspy. Resume las capacidades prácticas del modelo, describe cómo se aprovechan sus telemetría y fuentes de datos dentro de Plaspy, y explica el valor operativo típico que este dispositivo plug and play aporta a los flujos de trabajo de monitoreo de vehículos y flotas.

La disponibilidad exacta de funciones y su comportamiento puede variar según la versión de firmware, la revisión de hardware, la marca y modelo del vehículo, el tipo de instalación y la implementación del fabricante. Para detalles técnicos específicos del dispositivo y las notas de firmware más recientes, consulte la documentación oficial de iTriangle y las notas de la versión.

## Resumen de funciones

El iTriangle OBD II es un rastreador compacto en formato OBD II diseñado para instalación rápida y telemetría continua del vehículo. Combina posicionamiento GNSS, conectividad celular, radio Bluetooth y acceso OBD/CAN en una sola unidad pensada para despliegues en flotas comerciales y vehículos de alquiler.

- Instalación OBD II plug and play para despliegues rápidos sin empalmes ni cableado permanente.
- Posicionamiento GNSS mediante GPS y GLONASS para obtener localizaciones fiables y trazas históricas.
- Antenas integradas de celular y Bluetooth para reducir la complejidad de la instalación y mantener acabados limpios en el vehículo.
- Acceso OBD II y CAN bus para leer telemetría y PIDs de diagnóstico comunes cuando el vehículo los soporta.
- Capacidad de actualización remota de firmware OTA FOTA y opciones de configuración remota para reducir la asistencia en campo.
- Bajo consumo en reposo y batería interna de respaldo para preservar reportes básicos durante interrupciones de alimentación.

## Funciones principales del iTriangle - OBD II

- Factor de forma OBD II para una instalación y extracción rápida desde el puerto de diagnóstico del vehículo.
- Soporte GNSS con posicionamiento combinado GPS y GLONASS para mejorar la disponibilidad de fijaciones.
- Radio celular interna con soporte quad band 2G para cobertura amplia en las regiones objetivo.
- Acceso al bus CAN y lectura de PIDs OBD II donde el vehículo lo permita, para datos de motor y diagnóstico.
- Radio Bluetooth incorporada para emparejar accesorios de corto alcance y transportar datos adicionales de sensores.
- Acelerómetro integrado y alerta por manipulación para detección básica de movimiento y eventos de seguridad.
- Soporte de gestión remota incluyendo actualizaciones de firmware OTA FOTA y configuración vía canales compatibles.

## Cómo funcionan estas funciones con Plaspy

Cuando el iTriangle OBD II está conectado a Plaspy, las fijaciones de posición del dispositivo, la telemetría OBD II y los eventos de sensores se reportan a la plataforma para que usted pueda ver ubicación en tiempo real, viajes históricos, indicadores de diagnóstico y eventos de seguridad en un único lugar. Plaspy interpreta automáticamente las señales comunes del rastreador y las presenta para informes y alertas.

- La ubicación en tiempo real y las trazas históricas están disponibles en Plaspy mediante las fijaciones GNSS del dispositivo.
- Registros OBD II y CAN como PIDs soportados y códigos de diagnóstico se incorporan a los paneles de Plaspy cuando el vehículo los provee.
- Eventos de movimiento, manipulación y pérdida de alimentación generados por el dispositivo se reportan a Plaspy para flujos de trabajo de seguridad e incidentes.
- Las actualizaciones de firmware remotas y los cambios de configuración pueden coordinarse junto con la gestión de flotas en Plaspy para minimizar el mantenimiento en sitio.
- Datos de sensores emparejados por BLE e identificadores de accesorios pueden transmitirse a través del dispositivo hacia Plaspy para aportar contexto adicional del activo.

## Casos de uso típicos

- Gestión de flotas y despacho: instalación rápida y seguimiento centralizado para flotas de vehículos mixtos.
- Mantenimiento preventivo y diagnósticos remotos: supervisión de PIDs OBD II soportados y códigos de diagnóstico para planificar servicios.
- Programas de vehículos de alquiler y uso compartido: despliegue y retiro ágiles sin cableado fijo, con telemetría para control de uso.
- Antirrobo y monitoreo de seguridad: alertas por manipulación y reportes de ubicación para apoyar procesos de recuperación.
- Aumento de activos con sensores BLE: transmisión de datos de sensores de corto alcance hacia los registros de la flota para informes más completos.

## Notas sobre disponibilidad de funciones

- El soporte de PIDs OBD II y los datos diagnósticos disponibles dependen de la marca, modelo y año del vehículo, y pueden variar según la región.
- La compatibilidad con sensores Bluetooth depende del tipo de sensor y del método de emparejamiento que admita el firmware del dispositivo.
- Las revisiones de firmware y las variantes de hardware pueden añadir, modificar o eliminar funciones con el tiempo; el soporte OTA reduce la necesidad de servicio físico pero no garantiza capacidades específicas en todas las unidades.
- La fuente de alimentación, la calidad de la instalación y los sistemas eléctricos del vehículo pueden afectar los reportes de respaldo durante pérdida de energía.
- Consulte la documentación de iTriangle para soporte regional de bandas celulares y cualquier limitación regulatoria en su área de despliegue.

## Por qué usar Plaspy con estas funciones

Usar el iTriangle OBD II con Plaspy ofrece a las organizaciones una vía directa desde el despliegue del dispositivo hasta la visibilidad operativa. El factor de forma plug and play reduce el tiempo de instalación, y la combinación de posicionamiento GNSS con telemetría OBD II permite correlacionar la ubicación con el estado y uso del vehículo. Plaspy reúne esas señales en mapas en vivo, informes históricos, alertas e integraciones de flujo de trabajo para apoyar la eficiencia de la flota, el mantenimiento preventivo y la respuesta a incidentes.

Learn more about Plaspy and how it can integrate device telemetry into your fleet workflows at https://www.plaspy.com. For the most current device specifications, firmware behavior and manufacturer guidance please verify details with the official iTriangle documentation at https://www.itriangle.net/.
