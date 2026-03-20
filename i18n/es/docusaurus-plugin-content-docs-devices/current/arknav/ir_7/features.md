---
slug: /arknav/ir_7/features
id: ir_7-features
sidebar_label: Features
title: ArkNav - IR-7 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador híbrido ArkNav IR-7 y su integración con Plaspy
keywords:
  - ArkNav IR-7
  - Funciones IR-7
  - Rastreador GPS ArkNav
  - Rastreador satelital IR-7
  - Rastreador híbrido satélite GSM
  - IR-7 Plaspy
  - Seguimiento de activos en zonas remotas
  - Rastreador para activos marítimos
  - Rastreador GPS IP67
  - Actualizaciones FOTA COTA
---

# ArkNav - IR-7: Características

Esta página describe el contexto público de funcionalidad para el uso del rastreador ArkNav IR-7 con Plaspy. Resume las capacidades del IR-7 relevantes para el seguimiento de flotas y activos, explica cómo se reflejan esas capacidades cuando el dispositivo reporta en Plaspy y destaca beneficios prácticos para operaciones que requieren vigilancia de posición fiable en entornos remotos o exigentes.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional, el método de instalación y la implementación del fabricante. Use esta página como una guía de alto nivel y consulte la documentación del fabricante para detalles técnicos específicos del modelo y las opciones de firmware y configuración más recientes.

## Visión general de funciones

El ArkNav IR-7 es un rastreador híbrido satelital y GSM diseñado para seguimiento global continuo donde la cobertura GSM puede ser intermitente. Combina múltiples vías de comunicación y un diseño robusto para ofrecer reportes persistentes, activación por eventos y capacidad de configuración remota para activos que operan en entornos marinos, desérticos, montañosos y otros escenarios remotos.

- Conectividad satelital global mediante un módulo Iridium integrado para ubicaciones fuera del alcance de la red celular.
- Soporte GSM GPRS para reportes rutinarios cuando hay servicio celular disponible, lo que permite comunicaciones locales más económicas.
- Conmutación híbrida entre satélite y GSM para mantener salida de ubicación continua en tiempo real.
- Carcasa robusta con clasificación IP67 y amplio rango de alimentación de vehículo para uso fiable en ambientes difíciles.
- Múltiples entradas y salidas digitales para conectar sensores externos y señales y activar reportes basados en eventos.

## Funciones principales del ArkNav IR-7

- Módem satelital Iridium integrado que proporciona alcance global independiente de redes terrestres.
- Comunicaciones GSM GPRS para reporte celular estándar donde esté disponible.
- Operación híbrida que permite alternar entre satélite y GSM según la disponibilidad de señal.
- Cuatro entradas configurables y cuatro salidas para integración con sensores externos y controles.
- Carcasa con clasificación IP67 para resistencia al agua y al polvo, apta para instalaciones expuestas.
- Protección de entrada de alimentación ISO7637 y amplio rango de alimentación de 9 a 48 V para compatibilidad vehicular.
- Capacidades de activación por evento incluyendo disparadores por tiempo, distancia y ángulo para reportes eficientes.
- Soporte para almacenamiento en búfer de mensajes, guardado automático y reenvío para preservar datos durante interrupciones temporales.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y presenta los datos del dispositivo IR-7 para que usted y su equipo puedan monitorear ubicación, eventos y estado del dispositivo en una única plataforma. Plaspy detecta automáticamente muchos protocolos de rastreadores y puede aceptar reportes de dispositivos híbridos como el IR-7, ayudando a unificar la telemetría satelital y GSM en una sola vista operativa.

- Seguimiento continuo de ubicación en Plaspy tanto si el IR-7 reporta vía satélite como por GSM, ofreciendo historial unificado y posición en vivo.
- Visibilidad de eventos por entradas, detección de pérdida de alimentación y disparadores configurados que se muestran en los registros y cronologías de eventos de Plaspy.
- El comportamiento de almacenamiento en búfer de mensajes se refleja como telemetría retrasada o enviada en lotes cuando se restablece la conectividad, ayudando a los operadores a entender brechas.
- Indicadores de estado del dispositivo en Plaspy para en línea/fuera de línea, método de comunicación y actividad reciente que apoyan la toma de decisiones operativas.
- Los dispositivos pueden configurarse para reportar a los endpoints del servidor de Plaspy y Plaspy detectará automáticamente protocolos compatibles para integrar los datos entrantes.

## Casos de uso típicos

- Seguimiento de embarcaciones, equipos o activos que operan en entornos marinos u offshore donde la cobertura celular es limitada.
- Monitoreo de infraestructura remota y vehículos que se desplazan por zonas con recepción GSM deficiente.
- Logística de larga distancia y carga que atraviesa regiones con servicio celular intermitente y que requieren reportes de posición persistentes.
- Operaciones de campo y expediciones en desiertos o terrenos montañosos que necesitan reportes de ubicación global fiables.
- Activos que requieren reportes basados en eventos como detección de pérdida de alimentación principal o mensajes desencadenados por sensores.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y la configuración del fabricante pueden habilitar o deshabilitar ciertas capacidades; revise las notas de la versión de firmware del dispositivo para detalles.
- Las revisiones de hardware o las variantes regionales pueden afectar la certificación satelital, el soporte de socios de roaming o la compatibilidad con bandas celulares locales.
- El método de instalación, la colocación de antenas y el cableado influyen en la recepción satelital y GSM y deben seguir la guía de instalación del fabricante.
- Algunas funciones, como actualizaciones y configuración por aire, requieren acceso a la red y pueden depender de suscripciones o acuerdos de servicio.
- Para las especificaciones técnicas y comportamientos compatibles más recientes, consulte la documentación oficial de producto de ArkNav.

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el ArkNav IR-7 integra la telemetría híbrida satelital y GSM en una sola plataforma de seguimiento, simplificando el monitoreo en entornos de conectividad mixta. Plaspy ofrece historial consolidado, registros de eventos y visibilidad del estado que ayudan a los equipos a gestionar activos que se mueven entre cobertura celular y áreas solo satelitales sin necesidad de sistemas separados.

Learn more about how Plaspy can present hybrid tracking data and support operational oversight on https://www.plaspy.com. For the latest device specifications, firmware behavior, and manufacturer details verify information with ArkNav at https://www.arknavgps.com.tw/ as device features and implementations can change over time.
