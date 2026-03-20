---
slug: /teltonika/fmm130/features
id: fmm130-features
sidebar_label: Features
title: Teltonika - FMM130 Features
sidebar_class_name: menu_item_tracker
description: Resumen compacto de características del Teltonika FMM130 y su integración con Plaspy para telemetría y monitoreo de sensores
keywords:
  - Teltonika FMM130
  - Características FMM130
  - Rastreador GPS Teltonika
  - FMM130 sensores BLE
  - FMM130 bus CAN
  - FMM130 monitoreo de combustible
  - FMM130 inmovilizador
  - FMM130 LTE Cat M1
  - FMM130 NB IoT
  - Rastreador compatible con Plaspy
---

# Teltonika - FMM130: Características

Esta página ofrece una visión pública y no sensible del Teltonika FMM130 y explica cómo sus capacidades se integran con Plaspy para rastreo de flotas, telemetría y monitoreo de sensores. Se enfoca en funciones prácticas y orientadas al usuario, indicando qué puede esperar al usar dispositivos FMM130 con Plaspy.

La disponibilidad y el comportamiento exacto de funciones específicas dependen de la versión de firmware instalada, la revisión o variante de hardware, el soporte de la red local y de cómo el integrador instale y configure el equipo. Para detalles técnicos definitivos y las notas de firmware más recientes consulte la documentación del fabricante.

## Resumen de funciones

El FMM130 es un rastreador compacto para vehículos y activos diseñado para telemática profesional. Combina radios celulares de área amplia y bajo consumo con soporte para sensores e integración de datos vehiculares, entregando ubicación, telemetría ambiental y funciones de control remoto útiles en flujos de trabajo de flota y activos.

- Soporte LTE Cat M1 y NB‑IoT para conectividad celular eficiente con fallback a 2G en variantes seleccionadas
- Bluetooth Low Energy para sensores externos que informan temperatura, humedad, estado de imán o movimiento
- Integración con bus CAN y reporte de parámetros del vehículo para odómetro y datos relacionados con el motor cuando estén disponibles
- Entradas digitales y analógicas múltiples más soporte para entrada por impulsos para medidores de combustible y otras señales externas
- Batería de respaldo para continuar enviando reportes básicos durante cortes de alimentación principal
- Gestión remota de firmware y configuración mediante las herramientas remotas de Teltonika

## Funciones principales del Teltonika - FMM130

- Conectividad LTE Cat M1 y NB‑IoT para telemetría de área amplia y bajo consumo con variantes regionales de radio
- Soporte de sensores BLE para incorporar datos ambientales y de balizas a los flujos telemáticos
- Integración con bus CAN para diagnóstico del vehículo y parámetros cuando el vehículo y el firmware lo soportan
- Entrada por impulsos e entradas digitales/analógicas configurables para integración con medidores de combustible y sensores externos
- Reporte de batería de respaldo para ofrecer visibilidad durante eventos de pérdida de energía
- Actualización remota de firmware y capacidades de configuración a través de las herramientas de gestión de Teltonika
- Factor de forma compacto, adecuado para montaje en vehículos y activos en despliegues profesionales

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe las posiciones y la telemetría que proporciona el FMM130 y las presenta como elementos unificados de rastreo, reporte y alertas. La plataforma de Plaspy puede usar los datos del dispositivo para mostrar ubicación, lecturas de sensores y parámetros vehiculares juntos y así ofrecer información operativa.

- Ubicación en tiempo real y reproducción de rutas basadas en los fixes GNSS reportados por el dispositivo
- Telemetría de sensores BLE visible en Plaspy para monitoreo ambiental y control de condiciones de carga
- Parámetros derivados del CAN y valores de odómetro mostrados en diagnósticos y reportes históricos cuando están disponibles
- Eventos de entrada por impulsos y lecturas de combustible reflejados en reportes de consumo y alertas en Plaspy
- Eventos de batería de respaldo o pérdida de alimentación visibles como cambios de estado del dispositivo para apoyar flujos de trabajo de seguridad de activos

## Casos de uso típicos

- Seguimiento de flotas y historial de rutas para autos, vans, camiones y buses con visibilidad centralizada
- Monitoreo de combustible y detección de robo usando entradas por impulsos y lecturas de combustible vía CAN
- Cadena de frío y monitoreo de cargas sensibles mediante sensores BLE de temperatura y humedad
- Inmovilización remota y procesos anti robo cuando las salidas I/O estén configuradas para ese propósito
- Telemetría de maquinaria especial donde la integración CAN aporta horas de motor y parámetros operativos
- Seguridad de activos con detección de movimiento y estado de imán mediante balizas BLE más reportes de batería de respaldo

## Notas sobre disponibilidad de funciones

- La presencia de funciones depende de la versión de firmware y la variante de hardware que envíe el fabricante
- El soporte regional de radios y las opciones de fallback varían según el SKU y la cobertura del operador celular local
- CAN, BLE y ciertas funciones I/O requieren cableado correcto, adaptadores o configuraciones opcionales durante la instalación
- Algunas funciones de telemetría y control remoto requieren configuración tanto en el dispositivo como en Plaspy para aparecer correctamente
- Para los detalles de capacidad más recientes y los registros de cambios de firmware consulte la documentación oficial del fabricante

## Por qué usar Plaspy con estas funciones

Usar el FMM130 con Plaspy ofrece un único lugar para ver ubicación, parámetros vehiculares y datos de sensores ambientales de forma conjunta. Esa visibilidad combinada ayuda a los equipos operativos a monitorear rutas, detectar anomalías en consumo o comportamiento del motor y responder más rápido a alertas sobre el estado de la carga.

Si desea explorar cómo se comportan los dispositivos FMM130 en una implementación con Plaspy o ver el mapeo de funciones para su flota, obtenga más información en https://www.plaspy.com. Para los detalles específicos del dispositivo, notas de firmware y la información de variantes más actual, verifique la documentación del fabricante en https://www.teltonika-gps.com/ antes de planificar su despliegue.
