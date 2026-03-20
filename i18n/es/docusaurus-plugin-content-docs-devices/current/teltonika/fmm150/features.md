---
slug: /teltonika/fmm150/features
id: fmm150-features
sidebar_label: Features
title: Teltonika - FMM150 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Teltonika FMM150 y su integración con Plaspy para telemetría de flotas y diagnóstico CAN
keywords:
  - Teltonika FMM150
  - Características FMM150
  - Rastreador GPS Teltonika FMM150
  - Compatibilidad FMM150 Plaspy
  - FMM150 bus CAN
  - telemetría de flotas FMM150
  - telemetría vehículos eléctricos FMM150
  - Funciones rastreador GPS Teltonika
  - FMM150 LTE Cat M1
  - diagnóstico vehicular FMM150
---

# Teltonika - FMM150: Características

Esta página ofrece una visión pública y orientada a funciones del Teltonika FMM150 y de cómo se presentan sus capacidades cuando se usa con Plaspy. El enfoque está en las funciones prácticas relevantes para la gestión de flotas, la telemetría del vehículo y el diagnóstico mediante CAN, sin exponer detalles privados de configuración.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para parámetros específicos del dispositivo, opciones de configuración y los detalles técnicos más recientes, consulte la documentación y las notas de la versión de Teltonika.

## Resumen de funciones

El FMM150 es un rastreador compacto para vehículos que combina conectividad celular moderna con procesamiento integrado del bus CAN para ofrecer localización y telemetría profunda del vehículo, aptas para operaciones de flota. Cuando se conecta a Plaspy, el dispositivo transmite la ubicación y parámetros derivados del CAN para aportar un contexto más completo en la supervisión e informes.

- LTE Cat M1 con NB‑IoT y conmutación a 2G para ampli cobertura de red y telemetría de bajo consumo donde esté disponible
- Procesador de datos CAN integrado que lee más de 100 parámetros del vehículo, incluyendo odómetro, nivel de combustible, consumo y métricas de baterías EV
- Compatibilidad con accesorios como adaptadores CAN de Teltonika, lectores RFID y balizas BLE para ampliar flujos de identificación y sensores
- Soporte para gestión remota de dispositivos mediante las herramientas de Teltonika para configuración y actualizaciones de firmware
- Variantes de producto y opciones de bandas globales para adaptarse a despliegues regionales diversos

## Características principales del Teltonika - FMM150

- Conectividad celular con LTE Cat M1 y NB‑IoT, más conmutación a 2G para continuidad de servicio
- Procesamiento integrado del bus CAN capaz de extraer más de 100 parámetros del vehículo
- Acceso nativo a nivel de combustible, consumo y odómetro cuando esos datos están disponibles en el CAN del vehículo
- Señales relacionadas con la batería y la energía de vehículos eléctricos disponibles cuando el vehículo expone esos parámetros en el CAN
- Compatibilidad con módulos accesorios como adaptadores CAN, lectores RFID y balizas BLE
- Compatibilidad con las herramientas de gestión remota de Teltonika para simplificar configuración y actualizaciones
- Factor de forma compacto diseñado para montaje en vehículo con múltiples códigos de pedido para uso global

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe la ubicación y la telemetría del FMM150 para que los despachadores y los equipos de flota puedan ver la posición en tiempo real junto con los diagnósticos derivados del CAN. Plaspy detecta automáticamente el protocolo del rastreador y muestra las señales disponibles en mapas, alertas e informes.

- Rastreo de ubicación en tiempo real e histórico combinado con telemetría CAN para un contexto más completo de incidentes dentro de Plaspy
- Lecturas de nivel de combustible, consumo y odómetro importadas desde CAN para permitir informes de combustible y análisis de eficiencia
- Métricas de baterías EV disponibles en Plaspy para monitorización de tendencias cuando el CAN del vehículo expone esas señales
- Entradas impulsadas por accesorios como RFID o presencia BLE mostradas como eventos de identificación o proximidad en la plataforma
- Los dispositivos pueden configurarse para comunicarse con el endpoint de ingestión de Plaspy como d.plaspy.com utilizando opciones de transporte estándar y Plaspy detectará el protocolo del dispositivo automáticamente

## Casos de uso típicos

- Supervisión de operaciones de flota que combina ubicación GPS con diagnósticos del vehículo para cumplimiento de rutas y tiempo de actividad
- Monitorización de combustible y control de costes mediante datos de nivel y consumo procedentes del CAN para análisis y alertas
- Planificación de mantenimiento preventivo basada en odómetro y señales de diagnóstico CAN para reducir tiempos de inactividad
- Gestión de flotas EV que registra parámetros de baterías junto con la ubicación para planificar carga y autonomía
- Flujos de trabajo de alquiler y movilidad compartida usando integraciones con RFID o BLE para check in y identificación
- Telemetría de maquinaria pesada y vehículos especiales donde la visibilidad profunda del CAN facilita el servicio y la preparación de la flota

## Notas sobre disponibilidad de funciones

- La disponibilidad de parámetros CAN depende de la marca y el modelo del vehículo y de las señales que la ECU exponga en el bus
- La versión de firmware y el código de pedido de hardware afectan las bandas celulares soportadas, la compatibilidad con accesorios y las funciones disponibles
- Las variantes regionales del dispositivo pueden diferir en soporte de bandas de radio y aprobaciones regulatorias; seleccione el código de pedido correcto para su región
- Funciones de accesorios como RFID o BLE requieren los módulos correspondientes de Teltonika y una instalación adecuada
- Verifique siempre qué PIDs y parámetros CAN están habilitados en su vehículo y si se requiere configuración adicional

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMM150 con Plaspy proporciona a las organizaciones una vista única que combina posición precisa con señales del propio vehículo. Esta combinación facilita decisiones operativas más informadas, desde el seguimiento del consumo de combustible y las tendencias del odómetro hasta el monitoreo de métricas de baterías EV y la gestión del mantenimiento preventivo. El procesamiento CAN integrado del FMM150 reduce la necesidad de pasarelas adicionales y permite que Plaspy presente telemetría accionable junto con mapas e informes.

Para conocer más sobre Plaspy y cómo puede trabajar con rastreadores compatibles como el Teltonika FMM150 visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente en el sitio del fabricante https://www.teltonika-gps.com/.
