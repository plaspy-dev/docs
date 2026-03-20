---
slug: /skypatrol/sp3400c/features
id: sp3400c-features
sidebar_label: Features
title: SkyPatrol - SP3400C Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador GPS SkyPatrol SP3400C y cómo se integra con la gestión de flotas de Plaspy
keywords:
  - SkyPatrol SP3400C
  - características SP3400C
  - rastreador GPS SkyPatrol
  - rastreador GPS CDMA
  - rastreo de vehículos Plaspy
  - rastreador compatible con Plaspy
  - actualización de firmware OTA
  - acelerómetro 3 ejes
  - salidas digitales y entrada de ignición
  - comunicaciones de datos UDP SMS
---

# SkyPatrol - Características del SP3400C

Esta página ofrece una visión pública de las funciones del SkyPatrol SP3400C y explica cómo se suelen aprovechar esas capacidades dentro de la plataforma de gestión de flotas y activos Plaspy. Se centra en los aspectos prácticos y no sensibles de los datos que el dispositivo reporta y en cómo esos reportes pueden mejorar la visibilidad operativa en Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación, el soporte del operador regional y las decisiones de implementación del fabricante. Para obtener detalles específicos y actualizados consulte la documentación oficial de SkyPatrol.

## Resumen de características

El SP3400C es un rastreador GPS CDMA robusto diseñado para telemática vehicular y diversas aplicaciones de flotas y consumo. Combina un receptor GPS de alta precisión con conectividad celular y entradas y salidas discretas, y admite actualizaciones de firmware por aire para mantener los despliegues actualizados.

- Conectividad celular CDMA 1xRTT en doble banda, diseñada para despliegues certificados por operadores en regiones compatibles
- Receptor GPS de alta precisión con antenas integradas para una adquisición de posición confiable
- Acelerómetro integrado de 3 ejes para detección de movimiento y eventos
- Actualizaciones de firmware por aire para gestionar ajustes y firmware de forma remota
- Entradas y salidas discretas que incluyen salidas digitales, entrada analógica y entrada de ignición para control y monitoreo del vehículo
- Soporte para comunicaciones de datos UDP y SMS junto con una pila TCP IP integrada

## Funciones principales del SP3400C

- Soporte CDMA 1xRTT 800/1900 MHz en doble banda para cumplimiento con operadores donde esté disponible
- Receptor GPS integrado de alta precisión y antenas que mejoran la adquisición y la sensibilidad de rastreo
- Acelerómetro de 3 ejes integrado para detectar movimiento y activar eventos básicos
- Capacidad de actualización de firmware por aire para gestión y configuración remota
- Soporte de UDP y SMS para comunicaciones de enlace ascendente y descendente, además de una pila TCP IP embebida
- Dos circuitos de E/S discretos que incluyen 2 salidas digitales, 1 entrada analógica y 1 entrada de ignición
- Detección automática de ignición por vía inalámbrica y soporte para activación de relés para habilitar o deshabilitar componentes del vehículo cuando está configurado

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe reportes de ubicación y eventos de rastreadores compatibles y mapea esos datos a las funciones de monitoreo, informes y alertas de la plataforma. Las capacidades de reporte del SP3400C pueden mostrarse en Plaspy para proporcionar conciencia operativa continua y datos históricos de ubicación.

- Plaspy detecta automáticamente protocolos de rastreadores comunes y puede aceptar reportes de dispositivos a través de los tipos de transporte compatibles
- La posición GPS y la calidad de adquisición aparecen en el historial de ubicaciones y en las vistas de seguimiento en tiempo real de Plaspy
- Los eventos de movimiento derivados del acelerómetro integrado pueden representarse como actividad o indicadores de manipulación dentro de Plaspy
- Los eventos de E/S discretos y las actualizaciones de estado de ignición pueden alimentar campos de estado, disparadores y flujos de trabajo personalizados en la plataforma
- La capacidad de actualización de firmware por aire facilita mantener un comportamiento consistente en una flota desplegada cuando se coordina con procesos de gestión de dispositivos

## Casos de uso típicos

- Seguimiento de ubicación de flotas y visibilidad de rutas para vehículos ligeros y pesados
- Servicios de recuperación y sector automotriz subprime que utilizan la activación de relés para flujos de trabajo controlados de deshabilitación o habilitación
- Telemática de consumo y monitoreo de vehículos donde se requiere hardware compacto y resistente
- Despliegues en entornos urbanos o rurales exigentes que se benefician de un diseño de antena optimizado y mayor sensibilidad GPS
- Gestión remota de firmware y configuración para implementaciones a gran escala
- Monitoreo de ignición para reportes de tiempo de funcionamiento y análisis básicos de uso

## Notas sobre disponibilidad de funciones

- El soporte regional para bandas CDMA varía según el país y el operador; confirme la compatibilidad local antes de la compra
- Funciones de firmware como el comportamiento de OTA o la generación de eventos pueden diferir según la versión de firmware o las compilaciones publicadas por el fabricante
- Las revisiones de hardware y variantes opcionales pueden cambiar el conjunto exacto de pines de E/S disponibles o su comportamiento
- El cableado de instalación y la integración con el vehículo pueden afectar el funcionamiento práctico de la detección de ignición y el control de relés
- Consulte la documentación de SkyPatrol para obtener los detalles técnicos y de certificación más recientes del SP3400C

## Por qué usar Plaspy con estas funciones

Usar el SP3400C junto con Plaspy ofrece un camino práctico hacia la visibilidad operativa para flotas y proyectos de telemática. El dispositivo aporta datos de ubicación, movimiento y entradas discretas, mientras que Plaspy centraliza esa información en mapas, historiales y manejo de eventos configurable para respaldar la supervisión y la toma de decisiones.

Para saber más sobre Plaspy y cómo funciona con rastreadores como el SkyPatrol SP3400C visite https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware y orientación del fabricante más recientes, verifique la información actual en el sitio de SkyPatrol https://www.skypatrol.com/
