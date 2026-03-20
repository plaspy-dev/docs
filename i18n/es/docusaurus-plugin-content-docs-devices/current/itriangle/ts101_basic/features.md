---
slug: /itriangle/ts101_basic/features
id: ts101_basic-features
sidebar_label: Features
title: iTriangle - TS101 BASIC Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS iTriangle TS101 BASIC y cómo sus capacidades interactúan con la plataforma Plaspy
keywords:
- iTriangle TS101 BASIC
- funciones TS101 BASIC
- rastreador GPS iTriangle
- compatibilidad TS101 Plaspy
- funciones rastreador GPS
- dispositivo de rastreo vehicular
- rastreador para gestión de flotas
- GNSS multiconstelación
- almacenamiento interno para seguimiento
- rastreador con sensor Bluetooth
---

# iTriangle - Características del TS101 BASIC

Esta página presenta el contexto público de funciones del rastreador GPS iTriangle TS101 BASIC y cómo se muestran sus capacidades cuando se utiliza con la plataforma Plaspy. El contenido se centra en información práctica y no sensible sobre lo que el equipo reporta y cómo esas señales se traducen en visibilidad y flujos operativos dentro de Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el modelo regional, el método de instalación y la implementación del fabricante. Cuando el comportamiento específico sea importante para su despliegue, consulte la documentación del dispositivo y su flujo de aprovisionamiento para confirmar opciones como conectividad, cableado de E/S y las funciones de firmware soportadas.

## Resumen de funciones

El TS101 BASIC es un rastreador compacto para vehículos diseñado para reportes continuos de posición, recopilación básica de telemetría y operación robusta en entornos de flotas y transporte. Combina posicionamiento GNSS multiconstelación con E/S prácticas y almacenamiento local para mantener la continuidad del seguimiento en escenarios habituales de vehículos.

- Seguimiento en tiempo real y reportes compatibles con Plaspy para vistas de ubicación en vivo y reproducción histórica
- Soporte GNSS multiconstelación que mejora la disponibilidad de ubicación en condiciones de recepción difíciles
- Almacenamiento a bordo de hasta 6,000 registros para cubrir interrupciones temporales de red y asegurar la sincronización con Plaspy cuando vuelva la conectividad
- Amplio rango de entrada 9–32 V DC y batería interna de respaldo para preservar la telemetría durante cortes de energía
- Detección de movimiento y alertas por manipulación mediante acelerómetro interno para monitoreo antirrobo y visibilidad de eventos
- Carcasa con clasificación IP65 y factor de forma compacto adecuado para instalaciones en vehículos

## Funciones principales del iTriangle - TS101 BASIC

- Soporte GNSS multiconstelación incluyendo GPS, GLONASS, Galileo y BeiDou para mayor disponibilidad de satélites
- Reportes de telemetría en tiempo real y compatibilidad con la plataforma Plaspy para ingestión de ubicaciones y eventos
- Almacenamiento de registros a bordo de hasta 6,000 puntos de seguimiento para evitar pérdida de datos durante huecos de cobertura
- Rango de entrada de voltaje amplio y batería interna de respaldo para mantener telemetría básica cuando se interrumpe la alimentación principal
- Acelerómetro interno para detección de movimiento y reporte de eventos de manipulación
- Conjunto práctico de E/S que incluye monitoreo de encendido, una entrada analógica, dos entradas digitales, una salida digital y una interfaz de depuración RS232
- Soporte Bluetooth Classic para emparejar sensores locales o balizas y ampliar la telemetría cuando se usan accesorios compatibles
- Capacidad OTA FOTA para actualización remota de firmware y configuración, sujeta a aprovisionamiento y flujos de trabajo soportados

## Cómo estas funciones interactúan con Plaspy

Cuando se conecta y aprovisiona para Plaspy, el TS101 BASIC proporciona fijaciones de posición, eventos de E/S y puntos almacenados a bordo que Plaspy utiliza para ofrecer conocimiento de ubicación, monitoreo de eventos e informes. Plaspy reconoce automáticamente formatos comunes de reporte de rastreadores y presenta los datos necesarios para la supervisión operativa.

- Las actualizaciones de ubicación en tiempo real aparecen en los mapas y vistas de seguimiento en vivo de Plaspy para despacho y monitoreo
- El estado de encendido, los eventos de entradas digitales y las alertas de movimiento/manipulación se ingieren como eventos que pueden activar reglas y notificaciones en Plaspy
- Los registros almacenados se suben y reconcilian en Plaspy al restablecerse la conectividad, permitiendo la reconstrucción completa de recorridos
- Los flujos de trabajo de configuración remota y OTA compatibles con el dispositivo pueden coordinarse a través de Plaspy cuando el aprovisionamiento y los accesos lo permiten
- Los datos de sensores emparejados por Bluetooth y la telemetría de entrada analógica pueden exponerse en Plaspy cuando el dispositivo está configurado para reenviar esa información

## Casos de uso típicos

- Gestión de flotas para seguimiento de vehículos en vivo, reproducción de rutas y supervisión operativa
- Monitoreo antirrobo y de seguridad mediante detección de movimiento, alertas de manipulación y control remoto de salidas digitales
- Supervisión de transporte escolar con registro de encendido y eventos para verificación de viajes e informes de incidentes
- Visibilidad en logística y entregas que depende del almacenamiento a bordo para mantener continuidad de seguimiento durante huecos de cobertura
- Telemetría aumentada con sensores mediante Bluetooth o la entrada analógica para ampliar los datos vehiculares disponibles en Plaspy
- Mantenimiento remoto del dispositivo y actualizaciones de firmware usando capacidades OTA FOTA coordinadas a través de Plaspy

## Notas sobre disponibilidad de funciones

- El comportamiento de las funciones puede variar según el nivel de firmware y los cambios del fabricante; confirme el comportamiento exacto para su versión de firmware
- Los variantes regionales como configuraciones de bandas 2G GSM pueden cambiar las bandas de red soportadas y afectar la conectividad celular
- Las revisiones de hardware y el soporte de accesorios opcionales pueden afectar qué E/S y funciones de sensor están presentes en una unidad determinada
- El cableado de instalación y las interfaces del vehículo determinan cómo deben usarse e interpretarse el monitoreo de encendido y las entradas digitales
- OTA FOTA, configuración remota e integración de sensores Bluetooth dependen del aprovisionamiento y de los flujos de trabajo soportados en su entorno de gestión
- Siempre consulte la documentación del fabricante para la lista definitiva de funciones soportadas y los comandos de configuración

## Por qué usar Plaspy con estas funciones

Combinar el TS101 BASIC con Plaspy brinda a los operadores una forma práctica de convertir las señales del dispositivo en inteligencia operativa. Plaspy agrega datos de posición en vivo, eventos de E/S, alertas de movimiento y registros almacenados para que las flotas mantengan continuidad, respondan a incidentes y analicen la actividad histórica de los vehículos. Para organizaciones que requieren seguimiento simple y robusto con E/S claras y capacidades de gestión remota, el TS101 BASIC ofrece una fuente de telemetría fiable que Plaspy puede ingerir y presentar.

Para saber más sobre cómo Plaspy soporta dispositivos como el TS101 BASIC y explorar las capacidades de la plataforma, visite https://www.plaspy.com. Para especificaciones más recientes del dispositivo, notas de firmware y detalles del fabricante, verifique la información actual en el sitio oficial de iTriangle https://www.itriangle.net/.
