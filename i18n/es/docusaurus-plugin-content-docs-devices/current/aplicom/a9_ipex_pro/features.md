---
slug: /aplicom/a9_ipex_pro/features
id: a9_ipex_pro-features
sidebar_label: Features
title: Aplicom - A9 IPEX PRO Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del Aplicom A9 IPEX PRO y su integración con Plaspy para telemática de flotas y activos
keywords:
  - Aplicom A9 IPEX PRO
  - Aplicom A9 IPEX PRO características
  - rastreador GPS Aplicom
  - rastreador GPS A9 IPEX PRO
  - características A9 IPEX PRO
  - tracker Aplicom Plaspy
  - dispositivo rastreo remolque
  - rastreador GPS robusto
  - unidad de control telemática
  - telemetría bus CAN
---

# Aplicom - A9 IPEX PRO: Características

Esta página ofrece una descripción pública de las funciones del Aplicom A9 IPEX PRO y cómo sus capacidades se relacionan con el uso en Plaspy. Se centra en información práctica y no sensible sobre telemetría, posicionamiento y opciones de integración para que los responsables de flota y activos sepan qué esperar al desplegar este dispositivo con Plaspy.

La disponibilidad y el comportamiento exactos de las funciones dependen del firmware del dispositivo, la revisión de hardware, el método de instalación y la implementación del fabricante. Para configuración específica, notas de firmware y guías de instalación consulte la documentación y las notas de lanzamiento oficiales de Aplicom.

## Resumen de características

El A9 IPEX PRO es una unidad telemática resistente diseñada para uso exigente en campo, donde se requiere datos de posición fiables y telemetría resistente. Combina conectividad celular, receptor GNSS mejorado, respaldo de energía interno e interfaces configurables para vehículos y sensores, ofreciendo seguimiento continuo e informe de eventos en entornos adversos.

- Seguimiento y telemetría en tiempo real por 4G LTE con un receptor GNSS mejorado para actualizaciones de posición precisas y reproducción de rutas.
- Carcasa IP67 robusta con antenas internas y salida de cable sellada para instalaciones a prueba de clima en remolques y maquinaria pesada.
- Batería interna de 4000 mAh para mantener la operación durante interrupciones de alimentación externa y soportar escenarios de energía intermitente.
- Interfaz CAN mejorada con opciones configurables, incluyendo FMS y IDs CAN personalizadas para recoger telemetría del vehículo cuando esté disponible en el bus.
- Múltiples puertos I/O configurables que incluyen serial, entradas analógicas y digitales, 1-Wire y una salida de colector abierto para integrar sensores y alarmas.
- Acelerómetro integrado y reloj en tiempo real para detección de movimiento y sellado de eventos con marcas temporales fiables.

## Características principales del Aplicom - A9 IPEX PRO

- Conectividad celular 4G LTE para baja latencia en transmisión de datos y telemetría remota.
- Receptor GNSS mejorado que provee fixes de posición continuos para seguimiento y reproducción de rutas.
- Carcasa sellada IP67, resistente y apta para uso exterior e industrial.
- Batería interna de 4000 mAh que mantiene la operación cuando no hay alimentación externa.
- Interfaz CAN configurable con soporte para FMS e IDs CAN personalizadas para extracción de datos del vehículo.
- Conjunto flexible de I/O que incluye puerto serial, entradas analógicas y digitales multipropósito, soporte 1-Wire y salida de colector abierto.
- Acelerómetro y RTC integrados para eventos basados en movimiento y marcas temporales precisas.
- Gestión remota y soporte de actualizaciones OTA mediante las herramientas y servicios de configuración de Aplicom.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el A9 IPEX PRO transmite ubicación y telemetría a su instancia de Plaspy para que usted pueda monitorear activos, recibir notificaciones de eventos y analizar la actividad histórica. Plaspy detecta automáticamente los rastreadores compatibles y presenta los datos del dispositivo para monitoreo e informes.

- Los reportes de posición GNSS y los eventos de movimiento aparecen en Plaspy para seguimiento en vivo y análisis de rutas históricas.
- La telemetría proveniente del CAN, como diagnósticos del vehículo, kilometraje y otros datos del bus, se dirige a Plaspy cuando está disponible en el bus del vehículo y configurada en el dispositivo.
- Los estados de entradas y salidas de puertos analógicos y digitales se representan en Plaspy como indicadores de estado y pueden activar alertas o reglas de automatización.
- Eventos detectados por el acelerómetro, como movimientos o impactos, están disponibles en Plaspy para flujos de trabajo de manipulación y antirrobo, con marcas temporales proporcionadas por el RTC del dispositivo.
- La configuración remota y las actualizaciones de firmware reducen las visitas de campo al mantener ajustes y software actualizados dentro de un despliegue gestionado por Plaspy.

## Casos de uso típicos

- Rastreo de remolques y recolección de datos EBS para mejorar la utilización y planificación de mantenimiento.
- Telemática para camiones pesados y flotas usando datos CAN para diagnósticos, kilometraje y supervisión operativa.
- Monitoreo de activos estacionarios, como máquinas expendedoras y equipos remotos, donde la carcasa robusta y la batería interna son beneficiosas.
- Despliegues de IoT industrial que requieren integración de sensores cableados vía serial, entradas analógicas y digitales.
- Flujos de trabajo de antirrobo y detección de manipulación mediante acelerómetro y monitoreo de entradas.
- Sitios remotos donde la gestión OTA simplifica el mantenimiento a gran escala de los dispositivos.

## Notas sobre disponibilidad de funciones

- El soporte de funciones puede variar según la versión de firmware y la revisión de hardware; algunas funciones pueden requerir firmware o configuración específicos.
- La disponibilidad de datos CAN depende de la implementación del bus del vehículo y de qué IDs CAN expone el vehículo o los sistemas del remolque.
- Las opciones de instalación, incluido el cableado y las conexiones externas, afectan qué funciones de I/O estarán disponibles en una implementación determinada.
- Las variantes regionales o las bandas de los operadores para la conectividad celular pueden diferir; consulte a Aplicom para detalles de bandas y certificaciones.
- Para especificaciones definitivas del dispositivo y protocolos soportados, consulte la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Utilizar el Aplicom A9 IPEX PRO con Plaspy ofrece a las organizaciones un camino práctico para combinar hardware de campo resistente con una plataforma telemática gestionada. Plaspy brinda visibilidad sobre ubicación, entradas del dispositivo y telemetría del vehículo para que los equipos puedan monitorear activos, responder a eventos y analizar operaciones sin gestionar manualmente la ingestión de datos a nivel de dispositivo.

Learn more about Plaspy and how the A9 IPEX PRO can fit into your telematics strategy at https://www.plaspy.com. For the latest device specifications, firmware details, and manufacturer implementation notes verify information on the official Aplicom website https://www.aplicom.com/ .
