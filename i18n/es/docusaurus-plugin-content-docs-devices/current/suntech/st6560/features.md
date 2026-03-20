---
slug: /suntech/st6560/features
id: st6560-features
sidebar_label: Features
title: Suntech - ST6560 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador OBD II Suntech ST6560 y su integración con Plaspy
keywords:
  - Características Suntech ST6560
  - Rastreador GPS Suntech ST6560
  - Compatibilidad ST6560 Plaspy
  - Rastreador OBD II ST6560
  - Diagnóstico vehicular ST6560
  - Seguimiento multired ST6560
  - Posicionamiento por Dead Reckoning ST6560
  - Sensores BLE ST6560
  - Soporte J1939 FMS Suntech
  - Gestión de flotas ST6560
---

# Suntech - Características del ST6560

Esta página ofrece una visión pública de las capacidades del Suntech ST6560 y de cómo se aprovechan en la plataforma Plaspy. Se centra en los aspectos prácticos y no sensibles del equipo que los operadores de flota e integradores suelen preguntar al emparejar un rastreador OBD II con Plaspy para obtener ubicación, diagnóstico y telemetría.

La disponibilidad exacta de funciones y su comportamiento dependen de la versión de firmware, la revisión de hardware, la compatibilidad del vehículo, el método de instalación y la implementación del fabricante. Use esta página como una guía general de lo que el ST6560 puede ofrecer con Plaspy y consulte la documentación oficial de Suntech para detalles definitivos del dispositivo.

## Resumen de funciones

El ST6560 es un rastreador OBD II de tipo plug and play diseñado para transmitir ubicación del vehículo y telemetría del motor a plataformas en la nube como Plaspy. Su combinación de conectividad celular multired, GNSS multi constelación y acceso a datos OBD II / J1939 está pensada para flotas que requieren reporte continuo de posición y diagnósticos útiles.

- Instalación sencilla mediante conector OBD II para despliegues rápidos y acceso a señales e identificación del vehículo.
- Conectividad celular multired para reportes resilientes en zonas con cobertura variable.
- GNSS multi constelación más Dead Reckoning para mantener continuidad de la posición en túneles y cañones urbanos.
- Diagnóstico profundo por OBD II y reporte de DTC para mostrar fallas del motor y telemetría del vehículo.
- Soporte J1939 y FMS para integración de telemetría en vehículos pesados y comerciales.
- Soporte BLE 5.3 para emparejar sensores locales que amplíen la telemetría a bordo, como sensores de temperatura o de carga.

## Características principales del Suntech - ST6560

- Conexión OBD II J1962 plug and play que proporciona identificación del vehículo, sondeo de PIDs y acceso a códigos de diagnóstico (DTC).
- Diseño celular multired incluyendo LTE Cat M1 y NB-IoT con retroceso a 2G para mayor resiliencia de conectividad.
- GNSS multi constelación (GPS, GLONASS, Galileo, BeiDou) combinado con Dead Reckoning para mejorar la continuidad del rastreo.
- Soporte de protocolos J1939 ELD y FMS para telemetría en vehículos pesados y flotas comerciales.
- Radio BLE 5.3 para integración de sensores inalámbricos y accesorios locales.
- Detección de movimiento y conciencia de orientación mediante acelerómetro y giroscopio integrados para detectar desplazamientos.
- Soporte de geocercas, incluyendo zonas circulares y poligonales, para generar eventos automáticos de entrada y salida.
- Factor de forma compacto con una pequeña batería de respaldo para mantener reportes básicos durante breves interrupciones de energía.

## Cómo funcionan estas características con Plaspy

Plaspy ingiere la ubicación y la telemetría de rastreadores compatibles como el ST6560 para ofrecer mapas en tiempo real, reproducción histórica, alertas e informes. Cuando usted instala y pone a reportar un ST6560, Plaspy muestra la posición del vehículo y los diagnósticos disponibles para que los responsables de flota puedan monitorear estados y tendencias desde una sola plataforma.

- Las posiciones GPS en tiempo real y las rutas históricas aparecen en los paneles de Plaspy para supervisión operativa y reproducción.
- Los datos del motor por OBD II y los DTC pueden mostrarse como indicadores de estado del vehículo e incorporarse a flujos de trabajo de mantenimiento.
- El soporte de mensajes J1939 y FMS permite que Plaspy presente telemetría de vehículos pesados cuando esos datos están disponibles en la red del vehículo.
- Los eventos de geocerca generados por el rastreador alimentan las alertas de Plaspy para cumplimiento de rutas y notificaciones de entrada/salida de sitios.
- Los datos de sensores BLE emparejados con el rastreador se transmiten a Plaspy como telemetría complementaria cuando el dispositivo lo soporta.
- Plaspy detecta automáticamente los protocolos de rastreadores compatibles y presenta la telemetría entrante sin que usted necesite gestionar detalles de protocolo de bajo nivel.

## Casos de uso habituales

- Rastreo centralizado de flotas para visibilidad de rutas, despacho y análisis de viajes históricos.
- Programas de mantenimiento preventivo usando datos OBD II y alertas de DTC para reducir tiempos de inactividad.
- Telemática para vehículos pesados en flotas de largo recorrido aprovechando telemetría J1939 y FMS en los informes de Plaspy.
- Flujos de trabajo de prevención de robo y recuperación mediante instalación discreta en OBD II, ubicación en vivo y alertas de geocerca.
- Monitoreo de carga con sensores emparejados por BLE y visualización de esos datos en Plaspy.
- Proyectos piloto de telemática que requieren dispositivos OBD II compactos, fáciles de desplegar y con telemetría completa para evaluación.

## Notas sobre disponibilidad de funciones

- Las revisiones de firmware y software pueden cambiar qué conjuntos de PID, mensajes J1939 o tipos de sensores son compatibles; verifique la lista de funciones para su revisión de dispositivo.
- La marca, modelo y año del vehículo influyen en qué PIDs OBD II y mensajes J1939 expone la ECU del vehículo.
- Las variantes regionales del dispositivo pueden diferir en bandas celulares y funciones certificadas; confirme la variante de hardware destinada a su despliegue.
- La compatibilidad con sensores BLE depende del perfil del sensor y del soporte de firmware en el rastreador.
- La precisión de geocercas y el rendimiento de Dead Reckoning dependen de la ubicación de la instalación, el montaje de la antena y las condiciones de señal GNSS.

## Por qué usar Plaspy con estas características

Usar el Suntech ST6560 con Plaspy ofrece a los operadores una vista integrada de la ubicación y la salud del vehículo en una sola plataforma. Plaspy agrega posición, diagnósticos, alertas y datos de sensores para que las flotas reduzcan tiempos de respuesta, prioricen mantenimiento y mantengan conciencia operativa sobre grandes grupos de vehículos sin tener que gestionar la telemetría cruda de los dispositivos directamente.

Para conocer más sobre cómo Plaspy funciona con rastreadores compatibles y evaluar si la plataforma se ajusta a su flota, visite https://www.plaspy.com. Las características del dispositivo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que conviene verificar los detalles específicos más recientes en el sitio del fabricante http://www.suntechint.com/.
