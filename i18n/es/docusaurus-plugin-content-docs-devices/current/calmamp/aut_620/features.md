---
slug: /calmamp/aut_620/features
id: aut_620-features
sidebar_label: Features
title: CalmAmp - AUT-620 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador CalmAmp AUT-620 compatible con Plaspy reglas PEG y gestión PULS OTA
keywords:
  - CalmAmp AUT-620
  - funciones AUT-620
  - rastreador GPS CalmAmp AUT-620
  - rastreador de activos AUT-620
  - rastreador GPS a batería
  - pilas AA reemplazables
  - PEG generador de eventos programable
  - PULS actualizaciones OTA
  - antenas internas GPS celular
  - compatibilidad de dispositivos Plaspy
---

# CalmAmp - AUT-620: Características

Esta página describe el contexto público de funciones para usar el rastreador de activos CalmAmp AUT-620 con Plaspy. Resume las capacidades del equipo relevantes para monitoreo, alertas y administración remota dentro de la plataforma Plaspy, y explica cómo se emplean habitualmente en escenarios de seguimiento de flotas y activos.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la revisión de firmware, la versión de hardware, el método de instalación y las decisiones de implementación del fabricante. El resumen a continuación se basa en la descripción del dispositivo AUT-620 y se enfoca en las capacidades visibles para el usuario; consulte la documentación del fabricante para obtener detalles técnicos precisos y el comportamiento del firmware más reciente.

## Resumen de características

El CalmAmp AUT-620 es un rastreador de activos compacto, alimentado por baterías, diseñado para despliegues a largo plazo y operación de bajo mantenimiento. Combina recepción GPS de alta sensibilidad con comunicaciones celulares multi-red e incluye lógica de reglas a bordo y funciones de administración remota para soportar flujos de trabajo basados en excepciones.

- Seguimiento de activos a largo plazo con alimentación por baterías reemplazables AA para un servicio de campo sencillo.
- Factor de forma reducido y antenas internas que facilitan una instalación discreta dentro de activos móviles.
- Rendimiento GPS super-sensible para mejorar la adquisición de posición en entornos complicados.
- Soporte celular multi-red para cobertura amplia en redes GSM GPRS, CDMA 1xRTT y HSPA.
- PEG, generador de eventos programable, para reglas definidas por el cliente basadas en tiempo, fecha, movimiento, ubicación y geocercas.
- PULS para gestión over-the-air que permite la configuración remota de parámetros, reglas PEG y actualizaciones de firmware.

## Características principales del CalmAmp - AUT-620

- Diseño alimentado por baterías con pilas alcalinas AA reemplazables, adecuado para despliegues prolongados.
- Tamaño compacto y antenas celulares y GPS internas que permiten el montaje dentro de los activos.
- Tecnología de receptor GPS super-sensible que mejora la fiabilidad de la posición en condiciones exigentes.
- Compatibilidad con varios tipos de redes celulares, incluyendo GSM GPRS, CDMA 1xRTT y HSPA.
- PEG para procesamiento de reglas a bordo y detección de excepciones sin necesidad de comunicación continua.
- Sistema PULS para programación, actualizaciones y gestión logística over-the-air del dispositivo y su firmware.
- Posibilidad de montaje prácticamente en cualquier lugar dentro de un activo móvil para opciones de instalación flexibles.
- Comunicaciones y reporte de eventos a bordo aptos tanto para telemetría periódica como para reportes accionados por excepciones.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y muestra datos de ubicación y eventos desde rastreadores compatibles como el AUT-620 para que gestores de flota y de activos puedan monitorear equipos, responder a excepciones y revisar la actividad histórica. El manejo de dispositivos en Plaspy está diseñado para presentar la ubicación del equipo y los eventos generados por reglas en un contexto operativo claro.

- Plaspy detecta automáticamente protocolos compatibles y procesa mensajes de ubicación y alertas desde dispositivos AUT-620.
- Los dispositivos pueden configurarse para enviar reportes a los endpoints de Plaspy (por ejemplo d.plaspy.com) usando métodos de transporte estándar; Plaspy utiliza puertos consistentes y acepta tipos de conexión comunes.
- Las excepciones y coincidencias de reglas generadas por PEG aparecen como notificaciones de evento dentro de Plaspy para alertas y automatización de flujos de trabajo.
- PULS proporciona capacidad OTA a nivel de dispositivo, mientras que Plaspy muestra el estado del equipo y metadatos de configuración para que los administradores sepan qué dispositivos están inscritos y reportando.
- Las líneas de tiempo y los mapas en Plaspy ofrecen visibilidad sobre patrones de reporte intermitentes o programados, típicos de rastreadores a batería con despliegues largos.

## Casos de uso típicos

- Seguimiento a largo plazo de remolques, contenedores y otros activos móviles que requieren mantenimiento mínimo.
- Verificaciones periódicas de ubicación y alertas basadas en excepciones para equipos almacenados fuera del sitio o en ubicaciones remotas.
- Visibilidad de activos en alquiler o consignación donde se necesita una instalación discreta y sin impacto.
- Monitoreo de inventario y logística para activos en tránsito durante períodos prolongados.
- Situaciones en las que la configuración remota y las actualizaciones de firmware facilitan despliegues a gran escala.

## Notas sobre disponibilidad de funciones

- La disponibilidad de las capacidades PEG y los tipos de reglas soportados puede depender del firmware del dispositivo y de builds específicos.
- Las funciones PULS, como la configuración remota y la entrega de firmware, son provistas por el fabricante y pueden variar según región o la provisión de cuenta.
- Las revisiones de hardware y las variantes regionales celulares pueden afectar las bandas y tecnologías de red soportadas.
- Factores de instalación, como la ubicación del dispositivo dentro de un activo, pueden influir en la recepción GPS y el rendimiento celular a pesar de las antenas internas.
- Confirme siempre el conjunto exacto de funciones para una unidad específica consultando la documentación del fabricante y las notas de la versión del firmware vigente.

## Por qué usar Plaspy con estas funciones

Usar el CalmAmp AUT-620 con Plaspy combina una opción de hardware de bajo mantenimiento y alimentada por batería con una plataforma diseñada para visibilidad y monitoreo orientado a eventos. Plaspy ayuda a presentar los datos de ubicación y las excepciones PEG del AUT-620 en un contexto operativo, de modo que los equipos puedan priorizar excepciones, administrar flotas de forma remota y reducir ciclos de mantenimiento in situ.

Learn more about Plaspy and how it can present AUT-620 data and alerts on a managed platform at https://www.plaspy.com. For device specific feature details firmware behavior and manufacturer implementation notes verify the most current information on the manufacturer site http://www.calamp.com/
