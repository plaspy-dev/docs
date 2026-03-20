---
slug: /eelink/got10/features
id: got10-features
sidebar_label: Features
title: EElink - GOT10 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador OBD EElink GOT10 y su integración con Plaspy para rastreo y diagnóstico de vehículos
keywords:
  - EElink GOT10
  - funciones GOT10
  - rastreador GPS EElink
  - rastreador OBD II
  - telemetría CAN BUS
  - rastreador diagnóstico vehicular
  - rastreador gestión de flotas
  - rastreador compatible con Plaspy
  - rastreador GPS para vehículos
  - diagnóstico OBD Plaspy
---

# EElink - Funciones del GOT10

Esta página describe el contexto público de las funciones disponibles al usar el rastreador EElink GOT10 con Plaspy. Explica las capacidades prácticas que puede esperar cuando el GOT10 está conectado a un vehículo e integrado en Plaspy para monitoreo de ubicación y diagnóstico vehicular.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión del hardware, la marca o modelo del vehículo, el método de instalación y la implementación del fabricante. Para obtener detalles específicos y actualizados del dispositivo, consulte la documentación oficial de EElink antes de planificar implementaciones.

## Visión general de las funciones

El GOT10 es un rastreador que se conecta al puerto OBD-II y combina el posicionamiento GPS (cuando está disponible en el vehículo) con datos de diagnóstico extraídos del bus CAN y del sistema OBD del vehículo. En Plaspy, el dispositivo permite ofrecer una vista unificada de la ubicación y el estado del vehículo junto con paneles de control y herramientas de reporte para flotas.

- Instalación plug-and-play en OBD-II que evita cableado adicional en la mayoría de los vehículos.
- Acceso a datos del CAN BUS y lecturas diagnósticas OBD como códigos de fallo del motor y parámetros operativos cuando el vehículo los expone.
- Telemetría operativa como velocidad y RPM disponible en Plaspy cuando el vehículo suministra esas señales.
- Integración fluida de telemetría y diagnósticos en Plaspy para seguimiento en vivo, reproducción histórica y alertas.
- Factor de forma compacto diseñado tanto para flotas profesionales como para uso en vehículos particulares.

## Funciones principales del EElink GOT10

- Diseño plug-in OBD-II para una instalación sencilla en vehículos compatibles.
- Captura de datos del CAN BUS y lectura de diagnósticos OBD para consolidar la telemetría.
- Envío de mensajes de ubicación y diagnóstico a Plaspy para visibilidad centralizada.
- Reporte de códigos de fallo del motor e información diagnóstica relacionada cuando esté disponible.
- Disponibilidad de métricas operativas del vehículo como velocidad y RPM cuando el bus CAN las provee.
- Pensado para flujos de trabajo de flotas, incluyendo planificación de mantenimiento y monitoreo remoto.
- Factor de forma compacto y compatible con despliegues mixtos de flota.

## Cómo funcionan estas funciones con Plaspy

Cuando el GOT10 está conectado a un vehículo y configurado en Plaspy, reenvía telemetría y datos diagnósticos estandarizados para que los equipos de flota vean ubicación y estado del vehículo en un solo lugar. Plaspy presenta esos datos junto a mapas, historiales y funciones de alerta usadas en las operaciones diarias de la flota.

- Actualizaciones de posición en tiempo real y reproducción histórica en Plaspy cuando hay datos de localización disponibles.
- Códigos de diagnóstico mostrados en Plaspy para facilitar la triage de fallos y las decisiones de mantenimiento.
- Telemetría del vehículo, como velocidad y RPM, reflejada en reportes y líneas de tiempo del vehículo cuando el CAN bus las expone.
- Alertas e informes basados en códigos diagnósticos o umbrales de telemetría para apoyar mantenimiento proactivo.
- Fichas de vehículo y paneles consolidados en Plaspy que muestran tanto la ubicación como los indicadores de salud derivados del OBD.

## Casos de uso típicos

- Gestión de flotas que combina ubicación GPS con diagnósticos del motor para optimizar despacho y aprovechamiento.
- Flujo de mantenimiento preventivo que utiliza códigos de falla y telemetría para programar reparaciones antes de fallas.
- Monitoreo antirrobo y recuperación mediante seguimiento en vivo y visibilidad de movimiento en Plaspy.
- Análisis de consumo y eficiencia cuando el vehículo proporciona datos de combustible y motor por CAN.
- Capacitación de conductores y revisiones de seguridad basadas en velocidad y telemetría del motor proporcionada por OBD.
- Despliegues de flotas mixtas donde la instalación rápida plug-and-play reduce el tiempo y esfuerzo de implementación.

## Notas sobre disponibilidad de funciones

- La presencia de funciones depende de la implementación del CAN BUS del vehículo y de los PIDs diagnósticos que el vehículo exponga.
- Revisiones de firmware y hardware del GOT10 pueden afectar la telemetría disponible y su comportamiento.
- Algunas métricas son condicionales y solo estarán disponibles cuando el vehículo entregue los datos correspondientes por OBD o CAN.
- El tipo de instalación y el modelo del vehículo pueden cambiar qué señales diagnósticas son accesibles.
- Verifique siempre la documentación del fabricante para notas de firmware y detalles de compatibilidad por vehículo.

## Por qué usar Plaspy con estas funciones

Usar el GOT10 con Plaspy ofrece a las organizaciones una vista única que integra ubicación y estado del vehículo. Esa visión consolidada ayuda a reducir tiempos de inactividad, priorizar mantenimientos y responder con mayor rapidez ante fallos al combinar rastreo y diagnóstico dentro de las operaciones rutinarias de la flota.

Para saber más sobre cómo Plaspy puede trabajar con rastreadores OBD como el GOT10, visite https://www.plaspy.com. Para especificaciones del dispositivo, información de firmware y orientación del fabricante, verifique los detalles en el sitio de EElink https://www.eelink.com.cn/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
