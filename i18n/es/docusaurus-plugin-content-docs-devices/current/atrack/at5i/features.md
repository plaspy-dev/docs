---
slug: /atrack/at5i/features
id: at5i-features
sidebar_label: Features
title: ATrack - AT5i Features
sidebar_class_name: menu_item_tracker
description: Descripción pública de las funciones del rastreador ATrack AT5i y su integración con la plataforma Plaspy
keywords:
  - ATrack AT5i características
  - rastreador GPS ATrack AT5i
  - capacidades AT5i
  - funciones AT5i para Plaspy
  - rastreador GPS GLONASS
  - dispositivo de rastreo vehicular
  - soporte geocercas
  - cifrado AES 128
  - entradas salidas digitales analogicas
  - seguimiento en tiempo real
---

# ATrack - Funcionalidades del AT5i

Esta página presenta el contexto público de funcionalidades para utilizar el rastreador ATrack AT5i con la plataforma Plaspy. Destaca las capacidades principales no sensibles del AT5i y explica cómo se traducen en monitoreo, generación de eventos y revisión histórica dentro de Plaspy.

La disponibilidad y el comportamiento exacto de cada función pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y la implementación del fabricante. Use esta página como un resumen práctico y consulte la documentación del fabricante para especificaciones técnicas precisas y actualizadas.

## Resumen de características

El AT5i se posiciona como un rastreador vehicular versátil, enfocado en reportes de posición confiables, reportes de eventos configurables y opciones básicas de integración de E/S. Integra posicionamiento multi GNSS, comunicaciones GPRS y alarmas configurables para soportar tanto el monitoreo de vehículos individuales como aplicaciones de flota.

- Actualizaciones de ubicación en tiempo real mediante enlace GPRS para conocer posición y movimiento actuales
- Soporte dual GNSS con GPS y GLONASS para mayor disponibilidad satelital y mejor posicionamiento
- Seguimiento en tiempo real configurable y registro local en el dispositivo para conservar el historial reciente de movimiento
- Eventos y alarmas definidos por el usuario que pueden personalizarse para desencadenantes operativos
- Múltiples puertos de entradas y salidas digitales y analógicas para integrar hardware y sensores externos
- Funciones de seguridad como cifrado AES 128 de datos y detección de manipulación de la antena GPS con reporte

## Características principales del ATrack - AT5i

- Reporte continuo de ubicación mediante GPRS hacia un servidor
- Soporte de satélites GPS y GLONASS para posicionamiento
- Intervalos de seguimiento en tiempo real configurables y registro local de posiciones
- Generación de eventos personalizables por movimiento, cambios en entradas o condiciones definidas
- Varios puertos de E/S digitales y analógicas para integración de periféricos
- Cifrado AES 128 para proteger las comunicaciones del dispositivo
- Detección de manipulación de la antena GPS y reporte específico de tamper
- Soporte para hasta 64 geocercas definidas por el usuario en diversas formas

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y muestra los datos de posición y eventos del AT5i para que usted pueda monitorear vehículos y responder alertas. La gestión de dispositivos en Plaspy está diseñada para ingerir mensajes estándar de rastreadores y presentarlos como ubicaciones en el mapa, flujos de eventos y recorridos históricos.

- Las posiciones en tiempo real aparecen en los mapas de Plaspy y se actualizan conforme el dispositivo envía datos
- Los eventos personalizados del AT5i se registran en los logs de eventos de Plaspy para que los equipos revisen disparadores y marcas de tiempo
- Las entradas y salidas de geocercas creadas en el dispositivo o dentro de Plaspy se muestran como alertas y elementos de historial
- Los cambios en E/S digitales y analógicas reportados por el rastreador pueden almacenarse y visualizarse como entradas de dispositivo o datos personalizados
- El seguimiento histórico y el registro en el dispositivo permiten reconstruir los movimientos recientes en Plaspy para investigaciones o revisión de rutas

## Casos de uso típicos

- Monitoreo en vivo de la ubicación de vehículos para pequeñas flotas y unidades individuales
- Alertas basadas en eventos por movimiento, manipulación o cambios en E/S
- Supervisión de geocercas para detectar entradas y salidas en hasta 64 zonas definidas por el usuario
- Integración con periféricos montados en el vehículo mediante puertos de E/S digitales y analógicos
- Revisión retrospectiva de rutas y movimientos usando el registro en el dispositivo y el historial de Plaspy
- Monitoreo de seguridad con detección de manipulación de antena y comunicaciones cifradas

## Notas sobre disponibilidad de funciones

- Versiones de firmware y variantes regionales pueden cambiar cómo se exponen o configuran las funciones en el dispositivo
- Las revisiones de hardware y el cableado de instalación determinan qué puertos de E/S están disponibles y cómo se comportan
- El número y las formas disponibles para geocercas dependen del firmware del dispositivo y de las herramientas de gestión
- El cifrado y la detección de manipulación requieren configuración correcta tanto en el dispositivo como en el servidor para funcionar correctamente
- Verifique siempre el soporte de funciones y los pasos de configuración en la documentación oficial del fabricante para la revisión de su dispositivo

## Por qué usar Plaspy con estas funciones

Combinar el AT5i con Plaspy ofrece a las organizaciones una vista unificada para conciencia de ubicación, monitoreo de eventos y revisión histórica. Plaspy centraliza el flujo de posiciones del dispositivo, expone eventos personalizados del rastreador y conserva el historial de movimientos para análisis operativo. Esta combinación es útil para equipos que necesitan supervisión práctica de vehículos sin exponer la complejidad técnica del dispositivo a los usuarios finales.

To learn more about Plaspy and how it supports devices like the ATrack AT5i visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer guidance consult the official ATrack website https://www.atrack.com.tw/ as device features and firmware behavior may change over time.
