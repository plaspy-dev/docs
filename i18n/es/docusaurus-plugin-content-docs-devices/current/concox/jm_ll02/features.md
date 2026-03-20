---
slug: /concox/jm_ll02/features
id: jm_ll02-features
sidebar_label: Features
title: Concox - JM-LL02 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Concox JM-LL02 y su integración con Plaspy para rastreo de activos y monitoreo de flotas a largo plazo
keywords:
  - Funciones Concox JM-LL02
  - Rastreador GPS Concox JM-LL02
  - Compatibilidad JM-LL02 Plaspy
  - Rastreador de activos Concox
  - Rastreador GPS batería de larga duración
  - Rastreador con montaje magnético
  - Rastreador GPS IP67
  - Rastreador LTE Cat M1 NB2
  - Configuración Bluetooth 5.0
  - Rastreador con detección de manipulación
---

# Concox - JM-LL02: Características

Esta página ofrece un resumen público de las funcionalidades del Concox JM-LL02 y explica cómo se aprovechan con Plaspy para la gestión de flotas, el rastreo de activos y la supervisión de seguridad. Se centra en información práctica y no sensible sobre qué datos informa el dispositivo y cómo se visualizan esos reportes en Plaspy, en lugar de detallar provisión paso a paso o detalles de implementación privada.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Utilice esta página como un resumen funcional para planificación y operaciones, y consulte al fabricante para especificaciones técnicas actualizadas cuando necesite información exacta.

## Resumen de funciones

El JM-LL02 es un rastreador robusto compatible con Plaspy, diseñado para despliegues de larga duración y redeploys sencillos. Combina conectividad celular, gran autonomía y montaje sin herramientas para ofrecer telemetría de ubicación y eventos práctica para activos móviles.

- Batería de larga duración pensada para standby prolongado y ciclos de mantenimiento reducidos
- Carcasa resistente IP67 y montaje magnético compacto para instalaciones no permanentes
- Posicionamiento multi fuente con alta sensibilidad y precisión CEP inferior a 2.5 metros para informes de ubicación fiables
- Bluetooth 5.0 para configuración in situ sin cables y provisión rápida
- Alertas por escenarios como manipulación, batería baja, vibración, exceso de velocidad y geocerca para prevención de robo y monitoreo operativo

## Características principales del Concox - JM-LL02

- Conectividad celular mediante LTE Cat M1 y NB2 con fallback GSM para reporte resiliente a Plaspy
- Batería industrial Li-Polymer de alta capacidad de 6,000 mAh y modos de ahorro de energía para despliegues prolongados
- Carcasa con clasificación IP67 y amplio rango de temperatura operativa para entornos exigentes
- Montaje magnético integrado y puerto de carga magnético para instalaciones y mantenimiento rápidos y no invasivos
- Posicionamiento GPS combinado con LBS, alta sensibilidad GNSS y precisión de posicionamiento CEP menor a 2.5 m
- Radio Bluetooth 5.0 para configuración directa del dispositivo durante el despliegue o reprovisión
- Detección de manipulación mediante sensor de luz integrado y soporte para alertas de vibración y exceso de velocidad
- Almacenamiento local en buffer para retener datos cuando la cobertura celular no está disponible temporalmente

## Cómo se integran estas funciones con Plaspy

El JM-LL02 envía ubicación y telemetría de eventos a Plaspy, donde esa información forma parte de paneles, flujos de alertas y registros históricos. Plaspy detecta automáticamente protocolos de trackers comunes y presenta los eventos del dispositivo en una vista operacional unificada para que los equipos puedan actuar rápidamente ante señales de ubicación y seguridad.

- Actualizaciones de ubicación en tiempo real y reproducción histórica de rutas en las vistas de mapa de Plaspy
- Eventos de entrada y salida de geocercas convertidos en reglas y notificaciones dentro de Plaspy
- Alertas de manipulación, batería baja, vibración y exceso de velocidad enviadas a Plaspy para activar flujos de trabajo automatizados
- Reporte diferido desde el almacenamiento local que asegura que Plaspy reciba eventos perdidos tras una pérdida temporal de conectividad
- Provisionamiento habilitado por Bluetooth que simplifica la configuración inicial para que los dispositivos lleguen listos para reportar a Plaspy

## Casos de uso típicos

- Rastreo de remolques y contenedores donde el montaje magnético y la batería de larga duración reducen tiempos de instalación y mantenimiento
- Monitoreo de maquinaria de construcción y equipos móviles con alertas de manipulación y vibración para flujos de trabajo de seguridad
- Rastreo de vehículos de alquiler para flotas que se benefician del anclaje no permanente y la rápida redeployabilidad
- Monitorización logística en trayectos largos donde el tiempo de espera y el almacenamiento en buffer preservan los reportes entre cargas
- Procesos anti robo que se apoyan en geocercas, detección de manipulación y alertas de movimiento integradas en operaciones centralizadas

## Notas sobre disponibilidad de funciones

- Las diferencias de firmware pueden habilitar o modificar umbrales de alerta, intervalos de reporte y modos de energía
- Revisiones de hardware y variantes regionales pueden afectar las bandas celulares soportadas y el comportamiento en campo
- El método de instalación influye en las señales disponibles para detección de manipulación y en los procedimientos de mantenimiento de la batería
- Las capacidades de provisión por Bluetooth dependen del firmware del equipo y de las herramientas de configuración emparejadas
- Consulte siempre la documentación del fabricante para detalles exactos sobre memoria, comportamiento de LED y interfaces físicas

## Por qué usar Plaspy con estas funciones

Usar el JM-LL02 con Plaspy proporciona a las organizaciones visibilidad centralizada sobre ubicación y alertas por escenario para activos móviles. La combinación de larga autonomía de la batería, carcasa robusta y provisión por Bluetooth reduce la fricción operativa en despliegues que requieren bajo mantenimiento y redeploys rápidos entre el parque de activos.

Aprenda más sobre Plaspy y cómo puede consolidar la telemetría del JM-LL02 en paneles y alertas automatizadas en https://www.plaspy.com. Para las especificaciones de dispositivo, notas de firmware y guía del fabricante más actuales, verifique los detalles con Concox en https://www.iconcox.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
