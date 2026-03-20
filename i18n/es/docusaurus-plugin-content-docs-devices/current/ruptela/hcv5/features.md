---
slug: /ruptela/hcv5/features
id: hcv5-features
sidebar_label: Features
title: Ruptela - HCV5 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Ruptela HCV5 y su integración con Plaspy para gestión de flotas y telemetría
keywords:
  - Ruptela HCV5
  - características Ruptela HCV5
  - rastreador GPS Ruptela HCV5
  - telemática HCV5
  - HCV5 CAN OBD
  - HCV5 BLE 5.1
  - HCV5 LTE Cat M1
  - seguimiento de flotas HCV5
  - rastreadores compatibles con Plaspy
  - telemetría vehicular
---

# Ruptela - Características del HCV5

Esta página ofrece un resumen público de las capacidades del Ruptela HCV5 y de cómo se presentan y usan junto con Plaspy para la gestión de flotas y el seguimiento de activos. Se centra en funciones operativas no sensibles que interesan a operadores de flota e integradores cuando el HCV5 forma parte de una implementación con Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y el entorno del vehículo o accesorios. Cuando una capacidad depende del soporte del vehículo o de accesorios opcionales, se indica esa dependencia; usted debe consultar la documentación del fabricante para detalles específicos del dispositivo.

## Resumen de características

El HCV5 es una unidad telemática compacta y profesional diseñada para uso en flotas comerciales y validada para su compatibilidad con Plaspy. Integra posicionamiento GNSS continuo, conectividad celular multinetwork, acceso al bus del vehículo y una variedad de opciones de E/S y expansión para que los operadores recopilen ubicación y telemetría vehicular para monitoreo en vivo, informes y flujos de trabajo basados en eventos dentro de Plaspy.

- Posicionamiento GNSS continuo con un receptor u‑blox de calidad para seguimiento fiable en entornos urbanos y rurales.
- Conectividad celular multinetwork con LTE Cat M1 y NB‑IoT y fallback 2G para asegurar la entrega de telemetría en zonas de cobertura variable.
- Captura directa de datos del vehículo mediante doble CAN y línea K OBD para parámetros de combustible y motor, y soporte para flujos relacionados con tacógrafos cuando estén disponibles.
- Soporte BLE 5.1 para sensores de corto alcance y etiquetas de identificación de conductor que pueden integrarse en reportes y alertas de Plaspy.
- Detección de manipulación y de interferencias por jamming, además de batería interna de respaldo para preservar el registro de eventos durante cortes de energía.
- Amplias interfaces de E/S y seriales para integración de sensores, entradas/salidas y accesorios.

## Funciones principales del Ruptela - HCV5

- Módulo GNSS de alta gama para informes de ubicación precisos y continuos.
- Conectividad LTE Cat M1 y NB‑IoT con fallback 2G para una transmisión de telemetría resiliente.
- Acceso dual al bus CAN y línea K OBD para telemetría vehicular completa y diagnóstico.
- Bluetooth Low Energy 5.1 para sensores externos y emparejamiento de dispositivos de corto alcance.
- Detección de manipulación y detección de jamming para mayor seguridad del activo.
- Múltiples entradas digitales y analógicas y salidas digitales configurables para captura de eventos y control.
- Batería interna de respaldo que permite operación durante pérdida de energía externa.
- Funciones de gestión remota incluyendo actualización de firmware pensadas para despliegues a gran escala.

## Cómo funcionan estas funciones con Plaspy

Al desplegar y vincular un dispositivo HCV5 a una cuenta de Plaspy, su ubicación y telemetría vehicular se recopilan y muestran en los tableros, mapas e informes de Plaspy. Plaspy ingiere los datos GNSS y del bus del vehículo compatibles y convierte las entradas orientadas a eventos en información accesible para los gestores de flota para monitoreo y análisis.

- Seguimiento en mapa en tiempo real y rutas históricas basadas en actualizaciones GNSS continuas enviadas por el dispositivo.
- Parámetros del bus del vehículo desde CAN y OBD visibles en los paneles de Plaspy para control de combustible, indicadores de estado del motor e informes cuando el vehículo expone esas señales.
- Entradas de evento como ignición, puertas o activaciones de sensores mostradas como eventos y líneas de tiempo dentro de Plaspy para agilizar la investigación de incidentes.
- Datos de sensores BLE o etiquetas de conductor incluidos en informes de activos y en el monitoreo de condiciones cuando están emparejados con el HCV5 y enviados a Plaspy.
- Flujos de trabajo de configuración remota y gestión de firmware soportados cuando la gestión de dispositivos está habilitada junto con el monitoreo en Plaspy.

## Casos de uso típicos

- Seguimiento de flotas en tiempo real y visibilidad de rutas para operaciones con vehículos comerciales.
- Monitoreo de combustible y parámetros del motor para control de costos y planificación de mantenimiento preventivo.
- Descarga remota de tacógrafos e identificaciones de conductor donde lo permitan el vehículo y la regulación correspondiente.
- Recuperación de vehículos robados y monitoreo antirobo usando alertas de manipulación y funciones de respaldo de energía.
- Monitoreo de condiciones de carga y refrigeración con sensores BLE integrados en los informes de telemetría.
- Implementaciones mixtas de flota y remolques que consolidan la telemetría de vehículos y tráileres bajo una sola cuenta de Plaspy.

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen del nivel de firmware y pueden añadirse o afinarse en versiones posteriores por parte del fabricante.
- La compatibilidad del vehículo afecta el acceso a parámetros CAN y OBD y a cualquier capacidad relacionada con tacógrafos.
- Las variantes de hardware regionales y el soporte de bandas radioeléctricas difieren según el mercado; consulte la documentación del producto para confirmar la variante correcta.
- Las opciones de instalación, como montaje oculto o selección de arnés, influyen en qué funciones de E/S y accesorios estarán disponibles.
- El BLE y ciertas funciones periféricas requieren accesorios compatibles y pueden necesitar configuración en Plaspy para aparecer en los informes.

## Por qué usar Plaspy con estas funciones

Emparejar el Ruptela HCV5 con Plaspy ofrece a los operadores visibilidad unificada de la ubicación y la telemetría vehicular, permitiendo monitoreo en tiempo real, alertas accionables e informes consolidados en flotas mixtas. El HCV5 proporciona los datos brutos del vehículo y conectividad segura, mientras que Plaspy entrega la visualización, el manejo de eventos y el análisis histórico que los equipos de flota usan para mejorar operaciones y seguridad.

Para obtener más información sobre cómo funciona Plaspy con dispositivos como el HCV5 visite https://www.plaspy.com. Para las especificaciones más actuales y autorizadas del dispositivo, notas de firmware y detalles de implementación del fabricante verifique la información en el sitio de Ruptela https://ruptela.com/.
