---
slug: /atrack/al300/features
id: al300-features
sidebar_label: Features
title: ATrack - AL300 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS ATrack AL300 y su integración con Plaspy para rastreo de vehículos y telemetría de flotas
keywords:
  - ATrack AL300
  - características AL300
  - rastreador GPS ATrack
  - características rastreador GPS AL300
  - compatibilidad AL300 Plaspy
  - rastreo de vehículos
  - gestión de flotas
  - rastreador GPS resistente
  - rastreador LTE Cat M1
  - rastreador GPS CAN Bus
---

# ATrack - AL300: Características

Esta página ofrece una descripción pública centrada en las funciones del rastreador GPS ATrack AL300 y en cómo sus capacidades se integran con la plataforma Plaspy. Está dirigida a gerentes de flota, integradores y evaluadores técnicos que desean comprender qué puede aportar el AL300 en Plaspy sin entrar en pasos de configuración privados.

La disponibilidad y el comportamiento exacto de las funciones dependen de factores como la versión de firmware, la revisión de hardware, los módulos opcionales, el tipo de instalación y la implementación del fabricante. Para instrucciones específicas del equipo, ejemplos de configuración y las últimas especificaciones técnicas, consulte la documentación oficial de ATrack.

## Resumen de funcionalidades

El AL300 es un dispositivo de rastreo resistente y compatible con Plaspy, diseñado para telemática de vehículos y maquinaria pesada. Combina conectividad celular multinetwork, certificaciones ambientales robustas y opciones de interfaces para vehículos y sensores que permiten enviar ubicación y telemetría a Plaspy para monitoreo, alertas y generación de informes.

- Carcasa resistente con certificación IP67, cumplimiento MIL‑STD‑810G y SAE J1455 frente a vibraciones para entornos exigentes.
- Variantes celulares regionales que soportan LTE Cat.M1 y Cat.1, además de GSM heredado cuando se requiere cobertura.
- Opciones flexibles de transporte de datos incluyendo UDP, TCP, MQTT y SMS sobre IMS para entregar telemetría a Plaspy.
- Interfaz opcional CAN Bus y Bluetooth Low Energy v5.1 para diagnóstico del vehículo, integración de combustible y sensores.
- Registro a bordo y batería de respaldo para almacenar datos durante cortes de cobertura y reanudar envíos cuando se restablece la conectividad.

## Funciones principales del ATrack - AL300

- Certificaciones ambientales y de vibración robustas, aptas para despliegue en vehículos, maquinaria de construcción y equipos agrícolas.
- Soporte celular multinetwork con variantes regionales (AL300‑MG, AL300‑MX, AL300‑LE) para amplia compatibilidad con operadores.
- Protocolos de transporte múltiples: UDP, TCP, MQTT y SMS sobre IMS para entrega flexible al servidor.
- Interfaz CAN Bus opcional para transmitir parámetros del vehículo como kilometraje, métricas del motor y datos relacionados con combustible cuando está equipada.
- Soporte opcional Bluetooth Low Energy v5.1 para sensores inalámbricos e integración de periféricos.
- Posicionamiento GNSS con soporte combinado GPS/GLONASS y registro de ubicaciones a bordo para reproducción histórica.
- Entradas/salidas integradas que incluyen entradas digitales, detección de ignición, una salida digital y opciones de interfaz serial según el modelo.
- Memoria flash interna y batería de respaldo para registro en cola y capacidades de reporte corto en modo offline.

## Cómo funcionan estas funciones con Plaspy

Al emparejarse con Plaspy, el AL300 puede enviar posiciones, telemetría del vehículo y eventos de sensores a los paneles e informes de Plaspy. Plaspy ingiere los datos entrantes, los asigna a activos y ofrece visibilidad en seguimiento en tiempo real, alertas de eventos y registros históricos.

- Los dispositivos pueden enviarse al endpoint de ingestión de Plaspy en d.plaspy.com; Plaspy detecta automáticamente el protocolo del rastreador.
- Las opciones de transporte del AL300 (UDP/TCP/MQTT/SMS sobre IMS) brindan flexibilidad en cómo se reenvían posiciones y telemetría a Plaspy.
- Los parámetros del vehículo derivados del CAN y las lecturas de sensores BLE se muestran en Plaspy para monitoreo operativo e informes cuando el dispositivo dispone de dichas interfaces.
- El registro a bordo y los mensajes en cola permiten cargas diferidas a Plaspy tras breves interrupciones de cobertura, preservando la continuidad de eventos.
- Las entradas digitales y el estado de ignición pueden representarse como eventos o indicadores de estado dentro de Plaspy para respaldar alertas y flujos de trabajo basados en reglas.

## Casos de uso habituales

- Rastreo de flotas y reproducción de rutas para camiones, camionetas y flotas mixtas.
- Monitoreo de maquinaria pesada en construcción y agricultura, donde se requiere hardware resistente.
- Monitoreo antirrobo y flujos de control remoto usando detección de ignición y salidas digitales.
- Monitorización de consumo de combustible y parámetros del motor mediante telemetría CAN opcional.
- Supervisión de remolques y cargas con sensores BLE combinados con datos de ubicación.
- Entornos que exigen dispositivos impermeables y duraderos, con registro en cola fiable para cobertura intermitente.

## Notas sobre disponibilidad de funciones

- Funciones opcionales como CAN Bus y Bluetooth requieren variantes específicas del AL300 o instalaciones de accesorios; verifique la configuración exacta del modelo.
- Las variantes celulares regionales difieren en bandas soportadas y certificaciones de operador; elija la variante adecuada para su región de despliegue.
- La versión de firmware puede afectar el soporte de protocolos disponibles, el comportamiento del registro y los parámetros reportados; las actualizaciones de firmware pueden añadir o ajustar funciones.
- La instalación física y el cableado determinan qué entradas/salidas y funciones de ignición están disponibles en una instalación concreta.
- Consulte siempre la documentación de ATrack para obtener la lista definitiva de interfaces soportadas y opciones de embalaje para un número de serie o número de parte específico.

## Por qué usar Plaspy con estas funciones

Usar el AL300 con Plaspy brinda a las organizaciones visibilidad centralizada sobre vehículos y activos dispersos, aprovechando al mismo tiempo el diseño resistente del dispositivo y sus interfaces de telemetría opcionales. Plaspy puede consolidar posiciones GNSS, registros en cola, datos del vehículo provenientes de CAN y lecturas de sensores BLE en mapas, alertas e informes históricos que apoyan la toma de decisiones operativas y la investigación de incidentes.

Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles como el ATrack AL300 visite https://www.plaspy.com. Para las especificaciones más recientes del equipo, actualizaciones de firmware y guías del fabricante verifique los detalles en el sitio oficial de ATrack https://www.atrack.com.tw/.
