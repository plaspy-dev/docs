---
slug: /teltonika/fmm920/features
id: fmm920-features
sidebar_label: Features
title: Teltonika - FMM920 Features
sidebar_class_name: menu_item_tracker
description: Resumen de características del Teltonika FMM920 y su compatibilidad con Plaspy para rastreo en tiempo real y telemetría vía BLE
keywords:
  - Teltonika FMM920
  - características FMM920
  - rastreador GPS Teltonika
  - compatibilidad FMM920 Plaspy
  - sensores BLE FMM920
  - rastreador GPS compacto
  - rastreador Cat M1 NB IoT
  - rastreo de vehículos FMM920
  - telemetría Teltonika FMM920
  - inmovilizador remoto rastreador
---

# Teltonika - Características del FMM920

Esta página ofrece una descripción pública orientada a características del Teltonika FMM920 tal como suele emplearse con Plaspy. Resume las capacidades del equipo que importan para el seguimiento centralizado, el reenvío de telemetría y los flujos de trabajo de control remoto cuando la unidad forma parte de una flota gestionada por Plaspy.

La disponibilidad y el comportamiento exacto de las funciones dependen de la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para la configuración específica del equipo, notas de versión de firmware y diferencias entre variantes, consulte la documentación oficial de Teltonika antes del despliegue.

## Resumen de características

El FMM920 es un rastreador GPS delgado y compacto diseñado para reportes continuos de posición y telemetría flexible en redes celulares. Combina conectividad de bajo consumo LTE Cat M1 / NB-IoT con fallback 2G, e incluye soporte BLE y batería de respaldo para mantener los reportes en escenarios comunes de seguimiento de flotas y activos.

- Reporte continuo de posición GNSS para seguimiento en vivo y reproducción del historial de rutas.
- Conectividad primaria LTE Cat M1 y NB-IoT con fallback 2G cuatribanda para mayor cobertura regional.
- Batería de respaldo integrada para mantener los reportes ante pérdida de alimentación principal y en situaciones de recuperación por robo.
- Soporte Bluetooth Low Energy (BLE) para emparejar sensores y balizas externas que entregan telemetría de temperatura, humedad, magnetismo y movimiento.
- Acciones remotas como bloqueo de motor / control de inmovilizador, junto con gestión remota de firmware.
- Perfil slim de 12 mm para una instalación discreta en vehículos y espacios reducidos.

## Características principales del Teltonika - FMM920

- Reporte de posición GNSS para ubicación en tiempo real y telemetría histórica.
- Conectividad celular mediante Cat M1 y NB-IoT con fallback 2G cuatribanda (B2, B3, B5, B8).
- Bluetooth Low Energy para integración con sensores y balizas externas.
- Batería de respaldo integrada que mantiene el dispositivo operativo cuando se pierde la alimentación del vehículo.
- Inmovilizador remoto y acciones de bloqueo de motor para medidas antirrobo y control de flota.
- Actualizaciones remotas de firmware y configuración vía Teltonika FOTA WEB para el mantenimiento de la flota.
- Factor de forma compacto de 12 mm apto para instalaciones discretas.

## Cómo funcionan estas funciones con Plaspy

Cuando el FMM920 está conectado a Plaspy, la ubicación y la telemetría del dispositivo se entregan a un entorno de monitoreo centralizado para visibilidad, alertas y análisis. Plaspy detecta los protocolos compatibles del rastreador e ingiere la telemetría necesaria para la supervisión operativa y los flujos de trabajo basados en eventos.

- Las posiciones GNSS se muestran en Plaspy para seguimiento en vivo, historial de rutas y reproducción.
- Las lecturas de sensores BLE reenviadas por el FMM920 están disponibles en Plaspy como eventos de telemetría para temperatura, humedad, detección magnética y movimiento.
- Los estados de pérdida de alimentación y de la batería de respaldo alimentan alertas en Plaspy para continuidad y eventos relacionados con posibles robos.
- Los eventos de inmovilizador remoto y el estado de control se reflejan como acciones y sucesos de dispositivo dentro de Plaspy.
- Los cambios de firmware y configuración por aire (vía herramientas del fabricante como Teltonika FOTA WEB) facilitan un comportamiento consistente de los equipos en una flota gestionada por Plaspy.

## Casos de uso típicos

- Flujos antirobo y recuperación rápida usando seguimiento persistente y control de inmovilizador remoto.
- Gestión de flotas para vehículos comerciales ligeros donde se exige instalación compacta y telemetría continua.
- Flotas de alquiler y carsharing que requieren seguimiento discreto, control remoto y supervisión centralizada.
- Monitoreo de carga sensible a temperatura cuando se emparejan sensores BLE de temperatura o humedad al rastreador.
- Protección de activos distribuidos para remolques, contenedores o equipos auxiliares instalados en espacios reducidos.
- Gestión de mantenimiento y ciclo de vida de dispositivos mediante actualizaciones remotas de firmware y monitoreo centralizado.

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones puede variar según la versión de firmware y la revisión de hardware; no todas las funciones estarán presentes en cada unidad o variante regional.
- Las funciones de sensores BLE y los tipos de sensores soportados dependen de la implementación del fabricante y del firmware; el emparejamiento y el comportamiento de telemetría deben validarse durante la puesta en marcha.
- El comportamiento del inmovilizador remoto puede verse afectado por la conexión eléctrica y los sistemas del vehículo; una instalación y pruebas correctas son esenciales.
- Las capacidades de actualización por aire vía Teltonika FOTA WEB requieren los servicios del proveedor y la provisión correcta del dispositivo para realizar actualizaciones de flota.
- El soporte de bandas celulares regionales y las variantes regulatorias pueden afectar las opciones de conectividad para Cat M1, NB-IoT y fallback 2G.

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMM920 con Plaspy centraliza la ubicación, la telemetría de sensores y las acciones de control remoto en un único entorno de monitoreo e informes. Para organizaciones que necesitan visibilidad operativa sobre vehículos y activos, esta combinación reduce el esfuerzo manual requerido para rastrear dispositivos, observar datos de sensores y responder a eventos como pérdida de energía o movimientos no autorizados.

Para saber más sobre cómo Plaspy puede aprovechar el FMM920 para ofrecer seguimiento en tiempo real y supervisión de flotas visite https://www.plaspy.com. Para detalles específicos del dispositivo, comportamiento de firmware e información sobre variantes consulte al fabricante en https://www.teltonika-gps.com/ para verificar capacidades y documentación actualizadas.
