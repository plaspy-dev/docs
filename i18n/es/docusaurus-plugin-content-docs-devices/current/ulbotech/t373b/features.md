---
slug: /ulbotech/t373b/features
id: t373b-features
sidebar_label: Features
title: Ulbotech - T373B Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador OBD II Ulbotech T373B y cómo su telemetría y funciones antirobo se integran con Plaspy
keywords:
  - Ulbotech T373B
  - Características del T373B
  - Rastreador GPS Ulbotech T373B
  - Rastreador GPS OBD II
  - Rastreador compatible con Plaspy
  - Telemetría vehicular OBDII
  - Seguimiento de comportamiento del conductor
  - Inmovilizador de vehículo
  - Rastreador FOTA
  - Rastreador OBD Bluetooth LE
---

# Ulbotech - T373B: Características

Esta página ofrece un resumen público de las funciones del Ulbotech T373B y explica cómo sus capacidades se reflejan en las herramientas de monitoreo y gestión dentro de Plaspy. Está pensada para operadores de flota, integradores y usuarios técnicos que consideren el T373B para seguimiento de vehículos y telemetría con Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para despliegues críticos, verifique las capacidades específicas, el comportamiento del firmware y los protocolos de vehículo compatibles con el fabricante, y consulte las notas de la versión del firmware antes de desplegar a gran escala.

## Resumen de funciones

El T373B es un rastreador OBD II plug and play diseñado para ofrecer localización en tiempo real junto con diagnósticos a bordo y reporte de eventos. Combina posicionamiento GNSS, telemetría celular, conectividad Bluetooth local y diagnóstico OBDII/CAN en un formato OBD II compacto para instalaciones rápidas y despliegues a escala de flota.

- Conexión plug and play al puerto OBD II del vehículo para desplegar rápidamente sin cableado permanente.
- Posicionamiento GNSS con u blox MAX 7 y A‑GPS asistido para reducir el tiempo hasta el primer fix en instalaciones típicas de vehículos.
- Telemetría vehicular desde OBD II y CANBUS, incluyendo diagnósticos comunes y reportes DTC para visibilidad de mantenimiento.
- Soporte antirobo con salida digital de inmovilizador para corte remoto del motor y alertas en tiempo real.
- Bluetooth 4.0 LE para configuración local desde el móvil y emparejamiento complementario de accesorios.
- Actualizaciones de firmware por aire (FOTA) para mantener los dispositivos actualizados sin intervención manual.

## Características principales del Ulbotech - T373B

- Interfaz OBD II para acceso a datos del vehículo e informes de encendido/estado usando protocolos OBDII estándar.
- Posicionamiento GNSS (GPS y GLONASS) para ubicaciones continuas y registro de recorridos.
- Módem celular compatible con bandas GSM/WCDMA para enviar telemetría a plataformas en la nube.
- Diagnóstico a bordo y alertas DTC, con soporte para SAE J1939 y J1708/J1587 cuando aplicable.
- Salida digital de inmovilizador para soportar funciones de corte remoto de motor en flujos antirobo.
- Acelerómetro interno de 3 ejes y detección de eventos de conducción para identificar maniobras bruscas y puntuación de conductor.
- Bluetooth 4.0 Low Energy para configuración móvil y extensión de funciones en campo.
- Soporte FOTA para gestionar actualizaciones de firmware de forma remota y reducir el mantenimiento en campo.

## Cómo interactúan estas funciones con Plaspy

Cuando un T373B está conectado a Plaspy, el dispositivo envía posiciones, datos diagnósticos y notificaciones de eventos a la plataforma, permitiendo a los operadores visibilidad en tiempo real y alertas accionables. Plaspy detecta automáticamente los protocolos compatibles del rastreador y muestra los informes del dispositivo en paneles y registros para uso operativo.

- Los datos de ubicación y de viaje aparecen en Plaspy como actualizaciones de posición continuas, habilitando mapeo, historial de rutas y seguimiento en vivo.
- La telemetría OBD II y los reportes DTC están disponibles en Plaspy para alertas de mantenimiento, flujos de monitoreo de combustible y programación de servicios.
- Los eventos de inmovilizador y las señales de corte remoto del motor pueden reflejarse como salidas del dispositivo y condiciones de alerta para procesos de respuesta ante robo.
- Los eventos de comportamiento del conductor, como frenadas o aceleraciones bruscas, se transmiten a Plaspy para puntuación, informes y programas de capacitación.
- La configuración local vía Bluetooth y el emparejamiento de accesorios sirven para ajustes en campo que complementan la gestión remota dentro de Plaspy.

## Casos de uso típicos

- Gestión de flotas de reparto, servicio y transporte que requieren instalación OBD II rápida y seguimiento en tiempo real.
- Operaciones antirobo que combinan alertas de ubicación con salida de inmovilizador para recuperación y respuesta.
- Telemática para alquileres y aseguradoras, incluyendo control de kilometraje, reportes DTC y perfilado de conducta del conductor.
- Asistencia en carretera y recuperación donde la ubicación rápida y el estado del vehículo reducen el tiempo de respuesta.
- Programas de capacitación para conductores que usan detección de eventos bruscos y resúmenes de viaje para mejorar seguridad y eficiencia de combustible.
- Flujos de mantenimiento preventivo impulsados por alertas DTC y telemetría del vehículo.

## Notas sobre disponibilidad de funciones

- La presencia de funciones y los campos de telemetría exactos dependen de la versión de firmware y de la revisión del hardware del dispositivo.
- El soporte de vehículos para PIDs OBD II o protocolos SAE específicos varía según la marca, el año del modelo y la implementación del ECU.
- Las capacidades de Bluetooth y FOTA dependen de la configuración de la unidad y pueden requerir versiones de firmware específicas para habilitarse.
- La disponibilidad regional de bandas celulares puede afectar la conectividad según la variante del módem y la cobertura de la red local.
- Siempre confirme el soporte de accesorios opcionales y los adaptadores de instalación requeridos con la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el Ulbotech T373B con Plaspy proporciona a las organizaciones una forma sencilla de combinar posicionamiento preciso con diagnósticos del vehículo e información sobre el comportamiento del conductor. Plaspy recopila y normaliza la telemetría del rastreador para que los operadores de flota puedan monitorear ubicación, señales de mantenimiento y eventos de seguridad desde una única plataforma, reduciendo la carga operativa y mejorando los tiempos de respuesta.

Learn more about Plaspy on the main website https://www.plaspy.com. Device features, firmware behavior, and manufacturer specifics can change over time; please verify the latest device specific details and firmware notes on the official Ulbotech site http://www.ulbotech.com/ before deploying at scale.
