---
slug: /teltonika/fmb122/features
id: fmb122-features
sidebar_label: Features
title: Teltonika - FMB122 Features
sidebar_class_name: menu_item_tracker
description: Resumen de características del Teltonika FMB122 y su compatibilidad con Plaspy para seguimiento de flotas, sensores BLE, 1-Wire y doble SIM
keywords:
  - Teltonika FMB122
  - Características FMB122
  - Rastreador GPS Teltonika FMB122
  - Compatibilidad BLE FMB122
  - FMB122 1-Wire
  - FMB122 doble SIM
  - FMB122 Plaspy
  - Seguimiento de flotas Teltonika
  - Antena GNSS FMB122
  - Adaptador CAN FMB122
---

# Teltonika - Características del FMB122

Esta página ofrece una visión pública de las capacidades del Teltonika FMB122 en relación con su uso junto a Plaspy. Describe las funciones prácticas que puede esperar al integrar el FMB122 en una implementación de Plaspy y pone énfasis en cómo la telemetría y las entradas de sensores del dispositivo se emplean habitualmente en la gestión de flotas y en flujos de trabajo de anti robo.

La disponibilidad y el comportamiento exacto de las funciones dependen de la versión de firmware, la revisión de hardware, las elecciones de instalación y la implementación del fabricante. Dado que Teltonika publica varias variantes y actualizaciones, confirme los detalles de las funciones para su unidad y firmware específicos antes del despliegue.

## Resumen de características

El Teltonika FMB122 es un rastreador GPS compacto basado en 2G orientado al seguimiento de vehículos y activos cuando una conectividad GSM fiable es adecuada. Está diseñado para ofrecer actualizaciones de ubicación y soportar un pequeño ecosistema de sensores e interfaces de identificación que amplían su utilidad más allá de la mera posición GPS.

- Informes de posición GPS en tiempo real para seguimiento de flotas y visibilidad de activos
- Doble SIM para mejorar la resiliencia de la conexión y reducir la exposición a roaming
- Soporte Bluetooth Low Energy para sensores externos e integración de balizas
- Interfaz 1-Wire para identificación tipo iButton RFID y sensores 1-Wire compatibles
- Antena GNSS externa opcional para mejorar la recepción en instalaciones complejas

## Características principales del Teltonika - FMB122

- Telemetría celular basada en 2G con capacidad de doble SIM para conmutación por fallo y control de costos
- Posicionamiento GNSS con soporte para antena externa opcional para mejorar la recepción
- Soporte Bluetooth Low Energy para integrar sensores inalámbricos y balizas compatibles
- Interfaz 1-Wire para identificación con iButton RFID y sensores de temperatura 1-Wire
- Factor de forma compacto enfocado a vehículos, adecuado para instalaciones discretas
- Compatibilidad con utilidades de gestión de Teltonika como FOTA WEB y herramientas de configuración
- Soporte para el ecosistema de accesorios, incluidas antenas externas, cables de alimentación y adaptadores CAN cuando corresponda
- Telemetría orientada a la gestión de flotas y al monitoreo anti robo en tiempo real

## Cómo funcionan estas características con Plaspy

Cuando se configura para reportar a Plaspy, el FMB122 envía posiciones GNSS y las entradas de sensores soportadas a la plataforma para que usted pueda supervisar ubicaciones y eventos en casi tiempo real. Plaspy detecta automáticamente protocolos comunes de rastreadores y acepta conexiones de dispositivos Teltonika estándar, lo que facilita la incorporación de unidades compatibles.

- Las actualizaciones de posición GNSS aparecen en Plaspy para ubicación en vivo, historial de recorridos y visibilidad en el mapa
- Las lecturas de sensores BLE y los eventos de balizas pueden capturarse y mostrarse como valores de sensor o alertas en Plaspy cuando el dispositivo y los sensores se instalan conjuntamente
- Las entradas 1-Wire, como IDs de iButton RFID y sensores de temperatura 1-Wire compatibles, se informan a Plaspy para registros de identificación de conductor y monitoreo ambiental
- La operación con doble SIM ayuda a mantener un flujo de telemetría continuo hacia Plaspy durante cambios de cobertura o roaming
- La configuración del dispositivo y las actualizaciones de firmware pueden gestionarse con las herramientas de Teltonika en paralelo con la monitorización en Plaspy para mantener la continuidad operativa

## Casos de uso típicos

- Seguimiento de flotas para supervisión de rutas, coordinación de despachos y visibilidad basada en ubicación
- Monitoreo anti robo con reporte de ubicación continuo y detección de manipulación o movimiento a través de sensores
- Identificación de conductor u operador mediante iButton RFID para registros y responsabilidad
- Monitoreo de cadena de frío o estado de activos con sensores de temperatura 1-Wire y sensores ambientales BLE
- Rastreo de vehículos de servicio donde se requieren instalación compacta y soporte de accesorios
- Seguimiento de activos de alto valor que se benefician de integraciones BLE y 1-Wire

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la revisión de hardware y la versión de firmware; verifique las capacidades presentes en su unidad específica antes del despliegue
- Las funciones BLE y 1-Wire requieren sensores externos apropiados y una instalación eléctrica o de accesorios correcta
- El soporte de datos CAN u otras integraciones con el bus del vehículo depende de adaptadores opcionales y del conjunto de accesorios específico utilizado con el dispositivo
- El soporte de antena GNSS externa mejora la recepción en montajes complicados pero requiere el hardware de antena y el tendido adecuados
- Algunas variantes del FMB122 o modelos regionales pueden aparecer como End of Life en las páginas del fabricante, aunque sigan siendo funcionales en despliegues existentes

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMB122 junto a Plaspy brinda a las organizaciones una vía sencilla para consolidar la ubicación y la telemetría de sensores en una única plataforma de monitoreo e informes. Plaspy convierte las actualizaciones de posición, las entradas de sensores BLE y los eventos de identificación 1-Wire en información operativa, alertas y registros históricos que ayudan a los equipos a responder más rápido y mantener la supervisión.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specifications, firmware behavior, and manufacturer details verify the official Teltonika documentation at https://www.teltonika-gps.com/ since features and implementations can change over time.
