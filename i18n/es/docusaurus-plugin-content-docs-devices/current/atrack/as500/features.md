---
slug: /atrack/as500/features
id: as500-features
sidebar_label: Features
title: ATrack - AS500 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del resistente rastreador GPS AS500 y su integración con Plaspy para seguimiento prolongado de activos
keywords:
  - ATrack AS500
  - AS500 características
  - rastreador GPS AS500
  - ATrack AS500 Plaspy
  - AS500 LTE Cat M1
  - AS500 GNSS
  - AS500 BLE Wi Fi
  - rastreador robusto de activos
  - rastreador GPS de larga duración de batería
  - telemetría AS500
---

# ATrack - AS500: Características

Esta página describe el contexto público de uso del rastreador ATrack AS500 con Plaspy. Resume las capacidades prácticas del AS500 y explica cómo sus datos de ubicación, telemetría y sensores pueden integrarse en Plaspy para monitoreo en tiempo real, informes históricos y flujos de trabajo basados en eventos.

La disponibilidad y el comportamiento exacto de funciones pueden variar según la versión de firmware, la revisión de hardware, el modelo regional, el método de instalación y la implementación del fabricante. Use esta página como una visión práctica y consulte la documentación del fabricante para detalles técnicos específicos del dispositivo y las notas de firmware más recientes.

## Resumen de funciones

El AS500 es un rastreador de activos resistente diseñado para entornos exigentes y activos sin alimentación. Combina protección mecánica duradera, gestión eficiente de energía y múltiples entradas de posicionamiento para ofrecer seguimiento continuo y reportes de eventos adecuados para construcción, minería, patios logísticos y otras implementaciones exigentes.

- Carcasa resistente con clasificación IP67 e IP69K y resistencia conforme a estándares MIL STD para uso exterior severo
- Muy larga duración en espera con celdas primarias, optimizada para reportes diarios y reducción de mantenimiento en activos sin alimentación
- Posicionamiento GNSS de alta calidad mediante receptor de 99 canales para precisión confiable en exteriores
- Escaneo Wi Fi y Bluetooth Low Energy 5.1 para ampliar la visibilidad en interiores y capturar telemetría de sensores cercanos
- Conectividad celular LTE Cat M1 con soporte para UDP, TCP y MQTT y opciones de SIM flexibles
- Cola local de eventos para preservar la telemetría durante interrupciones de conectividad, entregando los datos a Plaspy cuando se restablece el enlace

## Características principales del ATrack - AS500

- Protección mecánica robusta con clasificación IP67 e IP69K y resistencia ambiental según MIL STD
- Larga vida de batería optimizada para varios años en espera con modos de bajo consumo profundo
- GNSS de 99 canales compatible con GPS y GLONASS para posicionamiento consistente en exteriores
- Escaneo Wi Fi y BLE 5.1 para complementar la localización en interiores y recoger datos de sensores remotos
- Módem celular LTE Cat M1 con opciones Nano SIM y eSIM y soporte para trasportes UDP TCP MQTT
- Cola en memoria flash para el almacenamiento temporal de eventos y ubicaciones sin conexión
- Entradas para detección de manipulación y apertura de puertas, además de soporte interno para detección de movimiento y eventos relacionados
- Capacidad de gestión remota vía ADM y UART para configuración y mantenimiento de firmware

## Cómo se integran estas funciones con Plaspy

Al implementarse con Plaspy, el AS500 transmite y almacena en buffer datos de ubicación y sensores para que los administradores puedan monitorear activos en tiempo real y revisar la telemetría histórica. Plaspy ingiere la telemetría del dispositivo, ofrece alertas configurables y visualiza los datos en paneles diseñados para seguimiento de activos y flujos de trabajo de seguridad.

- Actualizaciones de posición y telemetría en tiempo real se reciben en Plaspy para mapas en vivo y listas de activos
- Los datos en cola almacenados en el dispositivo se suben a Plaspy cuando se restablece la conectividad, manteniendo un historial completo
- Resultados de escaneo BLE y Wi Fi y lecturas de sensores conectados aparecen en los paneles de Plaspy para mejorar la visibilidad mixta interior/exterior
- Eventos de manipulación, apertura de puertas y movimiento se informan a Plaspy para activar alertas y flujos de trabajo automatizados
- El aprovisionamiento de dispositivos y la configuración remota son compatibles mediante los procesos de administración de dispositivos alineados con Plaspy

## Casos de uso típicos

- Monitoreo a largo plazo de contenedores, remolques y otros activos sin alimentación en operaciones logísticas
- Seguimiento de equipos y herramientas en obras de construcción y entornos mineros que enfrentan condiciones severas
- Supervisión de generadores y equipos estacionarios usando eventos de movimiento y manipulación para prevención de robos
- Cobertura mixta interior y exterior combinando GNSS en exteriores con Wi Fi y BLE en interiores
- Gestión de patios y seguimiento auxiliar de flotas temporales donde la conectividad intermitente y el almacenamiento en buffer son frecuentes

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según el nivel de firmware y la revisión de hardware; consulte las notas de la versión de firmware del dispositivo para detalles
- Las variantes regionales pueden ofrecer diferente cobertura de bandas celulares y aprobaciones de operadores; elija el modelo apropiado para su mercado
- Las estimaciones de vida de batería dependen de la frecuencia de reporte, las condiciones ambientales y los sensores habilitados
- El método de instalación y el cableado pueden afectar las entradas disponibles y el comportamiento de detección de manipulación
- Consulte la documentación oficial del fabricante para las especificaciones técnicas y aprobaciones regulatorias más actuales

## Por qué usar Plaspy con estas funciones

Combinar el AS500 con Plaspy brinda a las organizaciones visibilidad centralizada, alertas configurables y telemetría histórica para activos de campo duraderos. La plataforma Plaspy está diseñada para ingerir los datos GNSS, Wi Fi, BLE y de eventos del AS500, de modo que los equipos puedan monitorear la ubicación de activos, responder a incidentes y mantener supervisión operativa con una carga de mantenimiento mínima.

Para obtener más información sobre cómo Plaspy soporta el seguimiento de activos y flujos de telemetría, visite https://www.plaspy.com. Para las especificaciones de dispositivo más detalladas, las notas de firmware y la orientación del fabricante sobre el AS500, consulte ATrack en https://www.atrack.com.tw/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con la documentación oficial del fabricante.
