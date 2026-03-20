---
slug: /tytan_sat/ds540/features
id: ds540-features
sidebar_label: Features
title: Tytan SAT - DS540 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador GPS Tytan SAT DS540 y su integración con Plaspy
keywords:
  - Tytan SAT DS540
  - Características DS540
  - Rastreador GPS Tytan SAT
  - Características de rastreador DS540
  - Soporte CAN bus DS540
  - Rastreo vehicular DS540
  - Compatibilidad DS540 Plaspy
  - GPS GLONASS rastreador DS540
  - Entradas salidas DS540
  - Ahorro de energía DS540
---

# Tytan SAT - DS540 — Características

Esta página presenta el contexto público de las funciones al usar el rastreador Tytan SAT DS540 con Plaspy. Resume las capacidades del dispositivo relevantes para usuarios y administradores de Plaspy y explica cómo los datos y eventos del DS540 suelen reflejarse dentro de la plataforma. El objetivo es ofrecer una visión práctica y clara más que instrucciones detalladas de configuración.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, la integración con el vehículo y la forma en que el equipo esté instalado y configurado. Para funciones críticas o específicas de un vehículo, consulte la documentación oficial del fabricante para obtener la información más reciente.

## Resumen de funciones

El DS540 está pensado para el rastreo en tiempo real de vehículos y cargas, y para la supervisión de objetos técnicos. Transmite posición, movimiento y parámetros a través de redes celulares y puede leer datos del bus del vehículo cuando está disponible, lo que lo hace útil para el monitoreo de flotas y activos.

- Rastreo en tiempo real con posiciones y velocidad mediante GPS y GLONASS para vehículos y carga.
- Comunicación celular GSM/GPRS usando UDP o TCP para reportar ubicación y eventos a un servidor.
- Soporte de bus CAN y otros buses de vehículo para leer parámetros cuando el vehículo es compatible.
- Entradas analógicas y salidas digitales para lecturas de sensores y control remoto de circuitos.
- Soporte para identificadores iButton y sensores de temperatura 1-Wire para control de accesos y monitoreo de temperatura.
- Modos de ahorro de energía y amplia gama de tensión de entrada para adaptarse a distintos tipos de vehículos.

## Funciones principales del Tytan SAT - DS540

- Reporte de posición y velocidad mediante GPS y GLONASS para seguimiento continuo o por intervalos.
- Comunicación GSM/GPRS con soporte para reportes por UDP y TCP hacia un servidor de monitoreo.
- Compatibilidad con bus CAN, incluyendo lectura de datos de muchos autos de pasajeros y soporte para CAN FMS J1939 y J1708 cuando está implementado.
- Obtención de parámetros del vehículo como nivel de combustible, RPM del motor y estado de puertas o cajuela cuando el bus del vehículo los provee.
- Dos entradas analógicas para sensores externos o señales analógicas de nivel de combustible.
- Dos salidas digitales para control remoto de circuitos desde una plataforma de monitoreo.
- Soporte para identificadores iButton para autorización de acceso al vehículo y sensores de temperatura 1-Wire para monitoreo térmico.
- Modos de ahorro de energía integrados y amplio rango de alimentación para sistemas de 12 V y 24 V.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe los reportes del DS540 y muestra ubicación, eventos y los parámetros del vehículo disponibles para facilitar la supervisión y la toma de decisiones operativas. Plaspy detecta automáticamente el protocolo del rastreador y consolida los datos entrantes para su visualización en mapa, generación de informes y gestión de eventos.

- Las actualizaciones de ubicación y velocidad aparecen en los mapas y en las líneas de tiempo de Plaspy, permitiendo un seguimiento casi en tiempo real.
- Parámetros derivados del CAN como nivel de combustible, RPM del motor y estado de puertas pueden mostrarse como elementos de telemetría cuando el vehículo los proporciona.
- Lecturas de entradas analógicas y sensores de temperatura están disponibles como parámetros o campos de sensor personalizados dentro de Plaspy.
- Las salidas digitales pueden controlarse desde Plaspy cuando el control remoto está configurado y soportado en la instalación.
- El reporte de eventos desde el dispositivo, como alarmas derivadas del bus o cambios en el estado de entradas, se captura como eventos en Plaspy para alertas y revisiones históricas.
- Los dispositivos DS540 pueden configurarse para enviar datos a los servidores de Plaspy usando UDP o TCP; Plaspy ingerirá los mensajes reportados y los pondrá a disposición en la plataforma.

## Casos de uso típicos

- Seguimiento de flotas de automóviles, buses y camiones para supervisar ubicación y desplazamientos.
- Monitoreo de vehículos de construcción y agrícolas donde los datos del bus ayudan a evaluar el estado del equipo.
- Vehículos de transporte de valores y transporte seguro donde se requiere ubicación en tiempo real y monitoreo de entradas.
- Rastreo de carga y supervisión de objetos técnicos que necesitan reportes de posición y eventos.
- Integraciones en las que los datos del bus CAN se usan para exponer información del motor y el estado del vehículo en una plataforma central.

## Notas sobre disponibilidad de funciones

- Algunos parámetros del vehículo dependen del fabricante y modelo; no todos los buses exponen las mismas señales CAN.
- La versión de firmware y la configuración del equipo influyen en qué funciones están disponibles y cómo se comportan.
- Revisiones de hardware y variantes regionales pueden cambiar las interfaces soportadas o los modelos de vehículo compatibles.
- El método de instalación y el cableado determinan si funciones como acceso al CAN, sensores analógicos o salidas están disponibles.
- Verifique siempre qué funciones están habilitadas en un dispositivo específico antes de depender de ellas en operaciones.

## Por qué usar Plaspy con estas funciones

Usar el DS540 con Plaspy ofrece una vista consolidada de posición, parámetros del vehículo y eventos del equipo en una sola plataforma de gestión de flotas. Plaspy transforma la telemetría del DS540 en información accionable mediante visualización en mapas, registros de eventos e informes configurables, lo que facilita la supervisión operativa y la toma de decisiones.

Para conocer más sobre cómo Plaspy puede trabajar con los rastreadores Tytan SAT visite el sitio de Plaspy en https://www.plaspy.com. Para la información más actualizada y detallada sobre el dispositivo, incluido el comportamiento del firmware y detalles del fabricante, consulte la documentación oficial en http://tytansat.com/.
