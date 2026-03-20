---
slug: /okb_tehnoavtomatika/mpu_01glonass/features
id: mpu_01glonass-features
sidebar_label: Features
title: OKB Tehnoavtomatika - MPU-01GLONASS Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador OKB Tehnoavtomatika MPU 01GLONASS y su integración con Plaspy para ubicación y seguimiento vía SMS
keywords:
  - OKB Tehnoavtomatika MPU-01GLONASS
  - características MPU-01GLONASS
  - rastreador MPU 01 GLONASS
  - rastreador GLONASS GPS
  - seguimiento GSM SMS
  - rastreadores compatibles con Plaspy
  - seguimiento de vehículos MPU-01GLONASS
  - seguimiento de activos GLONASS
  - rastreador GPS compacto
  - configuración de entradas y salidas del rastreador
---

# OKB Tehnoavtomatika — Funciones del MPU-01GLONASS

Esta página ofrece un resumen público de las capacidades del rastreador OKB Tehnoavtomatika MPU-01GLONASS y explica cómo sus funciones se relacionan con el uso en la plataforma Plaspy. Está dirigida a compradores técnicos, integradores y usuarios de Plaspy para ayudarles a comprender las funciones prácticas del dispositivo y cómo se muestran cuando el equipo reporta a Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las configuraciones del fabricante. Utilice esta página como guía general y verifique los detalles específicos y el comportamiento actual del firmware en el sitio del fabricante al planificar despliegues.

## Resumen de características

El MPU-01GLONASS es un rastreador compacto GLONASS/GPS diseñado para reportes de ubicación sencillos e integración básica de entradas/salidas. Combina posicionamiento multi-constelación con manejo de mensajes GSM y opciones de E/S configurables para cubrir distintos escenarios de seguimiento de vehículos y activos.

- Factor de forma compacto y peso reducido (90 × 50 × 16 mm y menos de 200 g) para instalaciones flexibles
- Receptor GLONASS/GPS de 24 canales NV08C-CSM para fijaciones de posición fiables en entornos variados
- Soporte de bandas GSM 900 y 1800 para comunicación celular y recepción de SMS
- Capacidad de entrega (handover) de mensajes SMS para permitir interacciones remotas sencillas con el rastreador
- Opciones de E/S configurables que permiten combinaciones de entradas digitales y analógicas y al menos una salida para integración básica de sensores o actuadores

## Características principales del OKB Tehnoavtomatika - MPU-01GLONASS

- Receptor NV08C-CSM de 24 canales para posicionamiento con GLONASS y GPS
- Dimensiones mecánicas compactas adecuadas para instalaciones discretas o con espacio limitado
- Construcción ligera por debajo de los 200 gramos, ideal para activos portátiles
- Soporte GSM 900/1800 que habilita conectividad celular y manejo de SMS
- Recepción y entrega de SMS para comandos remotos sencillos o mensajes de estado
- Variantes de configuración flexibles con combinaciones soportadas de entradas digitales, entrada analógica y una salida digital
- Diseñado para una instalación e integración sencillas en soluciones de seguimiento

## Cómo funcionan estas funciones con Plaspy

Al usar el MPU-01GLONASS con Plaspy, sus capacidades de posicionamiento y mensajería pasan a formar parte de las herramientas de visibilidad y supervisión de la plataforma. Plaspy detecta automáticamente los protocolos compatibles y puede recibir los reportes del dispositivo para mostrar la posición y eventos básicos en mapas y paneles de control.

- Las fijaciones de posición del dispositivo aparecen en Plaspy como actualizaciones de ubicación GNSS mostradas en el mapa
- Los equipos con capacidad SMS pueden ofrecer un canal de comunicación secundario; alertas o mensajes de estado basados en SMS pueden capturarse según la configuración
- Las configuraciones flexibles de E/S permiten que sensores externos o interruptores simples se representen como eventos o entradas digitales en Plaspy
- El factor de forma compacto y portable facilita el despliegue rápido de activos que Plaspy puede monitorizar sin instalaciones complejas
- Plaspy acepta conexiones comunes de rastreadores y detecta automáticamente los detalles del protocolo para que el MPU-01GLONASS pueda configurarse para reportar a los endpoints de Plaspy como d.plaspy.com usando TCP o UDP según lo soporte el dispositivo

## Casos de uso típicos

- Seguimiento de flotas de vehículos donde se requiere instalación compacta y precisión GNSS
- Rastreo de activos portátiles para equipos que se benefician de un rastreador liviano
- Monitoreo remoto que utiliza SMS como canal de comunicación complementario
- Telemetría o monitoreo de estado sencillo empleando las opciones de E/S para entradas digitales o analógicas
- Situaciones que requieren recepción multi-constelación GNSS para mayor disponibilidad de posición
- Instalaciones donde la pequeña huella y la facilidad de montaje reducen el tiempo de despliegue

## Notas sobre disponibilidad de funciones

- Las diferencias de firmware pueden habilitar o limitar funciones particulares, como el comportamiento de entrega de SMS o las asignaciones de E/S
- Revisiones de hardware y variantes regionales pueden afectar las bandas GSM soportadas, tipos de conectores o combinaciones de E/S disponibles
- Las opciones de configuración pueden variar según los ajustes de fábrica o del integrador aplicados durante la instalación
- Las funciones SMS y celulares dependen de la cobertura de la red móvil local y del soporte del operador en la región de despliegue
- Confirme siempre la configuración exacta de E/S y los modos soportados de su unidad antes de la instalación

## Por qué usar Plaspy con estas funciones

Integrar el MPU-01GLONASS con Plaspy ofrece una vía sencilla para incorporar seguimiento GLONASS y GPS compacto en un flujo de trabajo centralizado de supervisión. Las capacidades de Plaspy para mapeo, visibilidad de eventos y gestión de dispositivos facilitan convertir los reportes de posición y los eventos de E/S del MPU-01GLONASS en información operativa útil para responsables de flota y custodios de activos.

Learn more about Plaspy on the main website https://www.plaspy.com and verify current device features and firmware behavior with the manufacturer at http://www.okb-ta.ru/. Device features, firmware behavior, and manufacturer implementation can change over time so checking official manufacturer documentation is recommended for the most current device specific details.
