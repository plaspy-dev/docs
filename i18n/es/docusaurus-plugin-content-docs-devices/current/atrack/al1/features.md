---
slug: /atrack/al1/features
id: al1-features
sidebar_label: Features
title: ATrack - AL1 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS ATrack AL1 y su integración con Plaspy para supervisión de vehículos y flotas
keywords:
  - características ATrack AL1
  - rastreador GPS ATrack AL1
  - características AL1
  - capacidades ATrack AL1
  - rastreador GPS Plaspy
  - rastreador GPS para vehículos
  - seguimiento de flotas
  - sensor G AL1
  - FOTA AL1
  - compatibilidad ATrack
---

# ATrack - AL1: Características

Esta página describe el contexto público de uso del rastreador GPS ATrack AL1 con Plaspy. Resume las capacidades del AL1 que son relevantes para la supervisión, la visibilidad de eventos y la operativa dentro de Plaspy, sin exponer detalles de implementación privados. El contenido se centra en qué hace el AL1 y en cómo se suelen representar dichas funciones cuando el dispositivo informa a una plataforma de flotas como Plaspy.

La disponibilidad y el comportamiento exacto de las funciones en un dispositivo AL1 concreto pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación, la configuración y la manera en que el fabricante implemente cada función. Para la configuración específica del dispositivo, ajustes avanzados o notas sobre el firmware más reciente, consulte la documentación oficial de ATrack y las notas de la versión.

## Resumen de características

El ATrack AL1 es un rastreador GPS compacto para vehículos, pensado para una instalación sencilla y un reporte continuo de ubicación. Combina posicionamiento GPS preciso con comunicaciones GSM GPRS y un motor de eventos integrado para ofrecer seguimiento en tiempo real configurable, registro de historial y detección de eventos útiles para el monitoreo de flotas y vehículos.

- Posicionamiento GPS de alta precisión para seguimiento de ubicación y registro de histórico fiable
- Sensor G integrado de 3 ejes para detectar eventos de conducción brusca y monitoreo de comportamiento
- Comunicaciones flexibles por SMS, USSD, TCP y UDP para múltiples opciones de reporte
- Motor inteligente de control de eventos para definir combinaciones de condiciones y activar acciones personalizadas
- Capacidad de actualización de firmware por FOTA mediante FTP para aplicar actualizaciones del fabricante
- Soporte para GPIO configurables y sensores externos de nivel de combustible para monitoreo de entradas

## Características principales del ATrack - AL1

- Factor de forma compacto y diseño pensado para montaje en vehículo y fácil instalación
- Posicionamiento GPS de alta precisión para mantener información de ubicación exacta
- Comunicaciones GSM GPRS con soporte para SMS y USSD además de reportes basados en IP
- Sensor G de 3 ejes integrado para detectar y registrar eventos de conducción agresiva
- Motor inteligente de control de eventos que permite aplicar reglas y generar acciones personalizadas
- Seguimiento y registro en tiempo real configurables para monitoreo continuo e informes históricos
- Actualización de firmware por FOTA usando FTP para mantener los dispositivos al día con las versiones del fabricante
- Detección de bloqueo de señal GSM, GPIO configurables y soporte para sensores externos de nivel de combustible

## Cómo interactúan estas funciones con Plaspy

Cuando un dispositivo AL1 se integra con Plaspy, los reportes de posición, los eventos y los estados de entrada del rastreador se recogen y se presentan para uso operativo. Plaspy detecta automáticamente protocolos de tracker comunes y ofrece una vista unificada de los reportes del dispositivo, el historial de eventos y el estado.

- Las actualizaciones de ubicación y las rutas históricas del AL1 se muestran en los mapas y en los informes de línea de tiempo de Plaspy
- Los eventos de conducción brusca detectados por el sensor G de 3 ejes aparecen como eventos con sello de tiempo para análisis de comportamiento del conductor
- El seguimiento y registro en tiempo real configurables se traducen en intervalos de reporte ajustables y viajes almacenados dentro de Plaspy
- Las entradas de GPIO configurables y los sensores externos compatibles pueden presentarse como entradas digitales o campos de telemetría personalizados
- Eventos relacionados con GSM, como la detección de bloqueo de señal, se capturan como alertas o eventos de estado para consciencia operativa
- Plaspy acepta reportes de dispositivos por TCP o UDP e identifica automáticamente el protocolo del tracker para que posiciones y eventos se parseen dentro de la plataforma

## Casos de uso típicos

- Seguimiento de rutas de flota y generación de informes de viajes históricos para planificación y logística
- Monitoreo del comportamiento del conductor y programas de coaching mediante registros de eventos de conducción brusca
- Seguridad del vehículo y detección de manipulación con alertas por bloqueo de señal GSM y eventos relacionados
- Integración de monitoreo de combustible cuando se instala y configura un sensor externo de nivel de combustible
- Instalaciones de rastreo compactas para vehículos de alquiler, vehículos comerciales ligeros y flotas de servicios
- Registro centralizado y cumplimiento donde se requiere historial continuo de ubicación y eventos

## Notas sobre la disponibilidad de funciones

- Algunas funciones requieren versiones específicas de firmware o ajustes de configuración para activarse; el comportamiento del firmware puede cambiar entre lanzamientos
- Las revisiones de hardware y las variantes regionales pueden alterar la disponibilidad de sensores o las interfaces soportadas
- Los sensores externos, como sondas de nivel de combustible y entradas adicionales, requieren instalación y cableado correctos para exponer sus datos
- FOTA mediante FTP depende del soporte del fabricante y de la disponibilidad de la red, y puede requerir configuración adicional fuera de Plaspy
- Verifique siempre la presencia de funciones y los pasos de configuración con la documentación de ATrack para el número de serie y firmware de su dispositivo

## Por qué usar Plaspy con estas funciones

Usar el ATrack AL1 junto con Plaspy ofrece una forma centralizada de supervisar la ubicación de vehículos, revisar el historial de eventos y responder a alertas operativas. Plaspy consolida reportes de posición, eventos de conducción brusca y estados de entradas en paneles, informes y flujos de eventos para que los equipos mantengan supervisión sobre la actividad de la flota y las tendencias de seguridad sin tener que procesar datos crudos del dispositivo.

Para conocer más sobre cómo Plaspy puede ayudarle a gestionar dispositivos AL1 y otros trackers visite https://www.plaspy.com. Para detalles de funciones específicos del dispositivo, notas de firmware y orientación del fabricante consulte el sitio oficial de ATrack en https://www.atrack.com.tw/. Las funciones del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la documentación más reciente del fabricante.
