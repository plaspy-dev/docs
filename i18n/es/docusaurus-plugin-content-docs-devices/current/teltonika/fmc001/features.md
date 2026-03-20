---
slug: /teltonika/fmc001/features
id: fmc001-features
sidebar_label: Features
title: Teltonika - FMC001 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del rastreador GPS Teltonika FMC001 y su integración OBD y telemetría con Plaspy
keywords:
  - Características Teltonika FMC001
  - Rastreador GPS Teltonika FMC001
  - FMC001 Plaspy
  - Rastreador OBD II
  - Rastreador GNSS para vehículos
  - Rastreador Bluetooth Low Energy
  - Acelerómetro comportamiento de conducción
  - Gestión de flotas FMC001
  - Telemetría vehicular FMC001
  - Modos de suspensión FMC001
---

# Teltonika - FMC001 Características

Esta página ofrece un resumen público de las funciones del Teltonika FMC001 y cómo se emplean con Plaspy. Resume las capacidades del FMC001 relevantes para el seguimiento de flotas y la telemetría en Plaspy, y describe cómo el dispositivo aporta visibilidad del vehículo, supervisión del conductor y apoyo a los flujos operativos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para detalles técnicos específicos del dispositivo, pasos de configuración y el comportamiento del firmware más reciente, consulte la documentación oficial de Teltonika.

## Resumen de funciones

El Teltonika FMC001 es un rastreador centrado en OBD diseñado para una instalación rápida y telemática vehicular. Combina posicionamiento GNSS, lectura de parámetros OBD II, conectividad Bluetooth Low Energy y datos de comportamiento de manejo a partir de un acelerómetro integrado, entregando información práctica para gestores de flotas y vehículos.

- Lectura de parámetros OBD II para diagnóstico del vehículo y métricas relacionadas con combustible a través del puerto del vehículo.
- Reporte de ubicación basado en GNSS para posición en tiempo real e historial de rutas dentro de Plaspy.
- Soporte Bluetooth Low Energy para sensores y beacons externos que amplían la funcionalidad y la asociación de activos.
- Telemetría detallada del acelerómetro para detectar eventos de conducción como maniobras bruscas, remolque, desconexión y impactos tipo choque.
- Varios modos de administración de energía para equilibrar la frecuencia de reportes y el consumo del dispositivo.

## Funciones principales del Teltonika - FMC001

- Lectura de parámetros OBD II, incluyendo métricas relacionadas con combustible y RPM del motor cuando están disponibles en el puerto del vehículo.
- Posicionamiento GNSS para seguimiento de ubicación continuo y periódico.
- Conectividad Bluetooth Low Energy para emparejar sensores y beacons.
- Datos de conducción basados en acelerómetro que permiten detectar exceso de velocidad, inactividad excesiva, indicios de remolque o desconexión y eventos de detección de choque.
- Múltiples modos de suspensión: GPS Sleep, Online Deep Sleep, Deep Sleep y Ultra Deep Sleep para optimizar la gestión de energía.
- Detección del estado de ignición usando entrada del acelerómetro, voltaje de alimentación externa y señales de RPM del motor cuando están disponibles.
- Opciones de sincronización horaria vía GPS, NITZ y NTP.
- Soporte para configuración y actualizaciones de firmware mediante FOTA Web, FOTA, Teltonika Configurator (USB y Bluetooth) y la aplicación móvil FMBT.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere la telemetría del FMC001 para que los operadores de flota puedan ver posición, estado del vehículo y datos de eventos desde un tablero central. Plaspy detecta automáticamente el protocolo del rastreador y acepta conexiones de dispositivos configurados para el servidor Plaspy, permitiendo que el FMC001 entregue su telemetría compatible a mapas, reportes y vistas de eventos.

- Las actualizaciones de ubicación e historial de rutas del FMC001 aparecen en los mapas y vistas de seguimiento de Plaspy para reproducción en tiempo real y en históricos.
- Los parámetros OBD II reportados por el dispositivo están disponibles en Plaspy como diagnósticos del vehículo y métricas operativas cuando la plataforma soporta esos campos.
- Los eventos de conducción derivados de los datos del acelerómetro (por ejemplo detección de choque o alarmas de remolque) se registran como eventos en Plaspy para revisión y notificaciones.
- Los modos de suspensión afectan la cadencia de reporte y pueden reflejarse en Plaspy como menor frecuencia de actualización o intervalos sin conexión, ayudando a los operadores a entender la disponibilidad del dispositivo.
- Las asociaciones de sensores Bluetooth Low Energy desde el dispositivo pueden representarse en Plaspy como datos de sensores vinculados o etiquetas de activos cuando están configuradas.
- Plaspy soporta patrones estándar de conectividad de dispositivos y aceptará FMC001 configurados para enviar datos al dominio del servidor Plaspy; además, Plaspy detecta automáticamente detalles del protocolo del rastreador para simplificar la incorporación del dispositivo.

## Casos de uso típicos

- Monitoreo de flotas para vehículos comerciales ligeros utilizando datos OBD II y seguimiento GNSS para supervisión de rutas y utilización.
- Libros de registro de conductor y análisis de comportamiento mediante eventos del acelerómetro y parámetros derivados de OBD.
- Operaciones de alquiler y leasing para rastrear ubicación del vehículo, estado de ignición y diagnósticos básicos.
- Telemetría para seguros y flujos de trabajo de seguros basados en uso que dependen del análisis del comportamiento de conducción y del reporte de kilometraje.
- Detección de remolque y robo mediante el acelerómetro y señales de desconexión.
- Asociación de activos y monitoreo de proximidad usando beacons y sensores Bluetooth Low Energy.

## Notas sobre disponibilidad de funciones

- Algunos parámetros OBD II y lecturas relacionadas con combustible dependen de la marca y el modelo del vehículo y de los datos OBD II que el vehículo exponga.
- La versión de firmware y la revisión de hardware pueden cambiar las funciones disponibles, los umbrales de detección de eventos y el comportamiento de gestión de energía.
- El tipo de instalación y el cableado (por ejemplo la presencia de alimentación externa o alimentación de ignición permanente) influyen en la detección de ignición y en el reporte de voltaje externo.
- El comportamiento de sensores Bluetooth y los tipos de beacons soportados pueden variar; el emparejamiento y el manejo de datos de sensores dependen del firmware y de la configuración local.
- Verifique siempre cómo se implementa una función concreta para su firmware y variante regional de hardware consultando los recursos del fabricante.

## Por qué usar Plaspy con estas funciones

Combinar el Teltonika FMC001 con Plaspy ofrece a las organizaciones una vía práctica para centralizar la visibilidad de vehículos, obtener información sobre comportamiento y mejorar la supervisión operativa. El FMC001 suministra posición, métricas derivadas de OBD y eventos del acelerómetro que Plaspy puede presentar en mapas, reportes y flujos de eventos para apoyar la toma de decisiones y los flujos de trabajo de flota.

Para obtener más información sobre cómo Plaspy puede trabajar con dispositivos como el FMC001 visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y detalles de implementación del fabricante, verifique la información en el sitio oficial de Teltonika https://www.teltonika-gps.com/
