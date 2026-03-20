---
slug: /astra_telematics/at240/features
id: at240-features
sidebar_label: Features
title: Astra Telematics - AT240 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Astra Telematics AT240 para uso con Plaspy de seguimiento y gestión de flotas
keywords:
  - Características Astra Telematics AT240
  - Rastreador GPS AT240
  - Compatibilidad AT240 con Plaspy
  - Rastreo de vehículos AT240
  - Gestión de flotas AT240
  - Bluetooth de baja energía AT240
  - FMS CAN bus AT240
  - AT240 IP67 resistente al agua
  - Capacidades del rastreador Astra Telematics
  - Rastreo y trazabilidad AT240
---

# Astra Telematics - Características del AT240

Esta página ofrece una visión pública de las capacidades del Astra Telematics AT240 en el contexto de su uso con Plaspy. Resume las funciones del equipo relevantes para los usuarios de Plaspy, aclara qué puede mostrar y supervisar la plataforma, y destaca consideraciones prácticas para la integración y la operación diaria.

La disponibilidad y el comportamiento exacto de las funciones en una unidad AT240 pueden variar según la versión de firmware, la revisión de hardware, accesorios opcionales y el tipo de instalación. Para límites técnicos específicos del dispositivo, opciones de configuración y notas de firmware más recientes, consulte la documentación y las notas de lanzamiento del fabricante.

## Resumen de funciones

El AT240 es un rastreador GPS compacto, de estilo automotriz, diseñado para el seguimiento de vehículos y telemática de flotas. Combina precisión en el posicionamiento, opciones de integración con el vehículo y un sellado robusto para soportar despliegues de rastreo que requieren informes de posición y eventos fiables.

- Posicionamiento GNSS preciso gracias a un receptor SiRFStar IV que proporciona actualizaciones de ubicación consistentes.
- Conectividad Bluetooth de baja energía para soportar interacción con dispositivos cercanos e integraciones de corto alcance.
- Soporte CANBus incluyendo compatibilidad FMS para integrar datos del vehículo cuando esté disponible.
- Carcasa con clasificación IP67 y antenas integradas para instalaciones discretas y resistencia a la intemperie.
- Batería de respaldo interna y memoria interna para preservar datos entre comunicaciones o durante interrupciones de alimentación.

## Características principales del AT240

- Receptor GNSS SiRFStar IV para obtenciones de posición precisas.
- Procesador basado en Cortex M3 para control del dispositivo y manejo de eventos.
- Bluetooth Low Energy para emparejamiento local e integraciones a nivel de dispositivo.
- Soporte CANBus FMS para leer datos del bus del vehículo en automóviles compatibles.
- Sellado IP67 y antenas GPS y GSM integradas para una instalación duradera y discreta.
- Batería de respaldo interna para mantener reportes y permitir secuencias de apagado seguro.
- Memoria interna para almacenamiento temporal de eventos y posiciones.
- Múltiples entradas digitales y generación de eventos configurable para reflejar sensores y disparadores instalados.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe e interpreta datos de ubicación y eventos del AT240 para que los operadores de flotas puedan supervisar vehículos y responder a incidencias. La plataforma detecta automáticamente protocolos comunes de rastreadores y acepta conexiones por los modos de transporte estándar que emplea el dispositivo.

- Las actualizaciones de ubicación y las cargas de posiciones almacenadas se muestran en los mapas y paneles de historial de Plaspy para visibilidad operativa.
- Los eventos de entradas digitales y los eventos internos del dispositivo pueden transformarse en alertas supervisables o entradas en la línea de tiempo dentro de Plaspy.
- Los datos derivados del CANBus (cuando la instalación los provee) aparecen en Plaspy como campos telemétricos disponibles para obtener información del vehículo.
- La información de proximidad relacionada con Bluetooth o el emparejamiento de dispositivos puede usarse localmente y reflejarse en notas del dispositivo cuando esté soportado.
- Plaspy acepta conexiones TCP o UDP desde dispositivos y detectará automáticamente el protocolo del AT240 para el reporte normal hacia la plataforma en el endpoint del servidor Plaspy.

## Casos de uso típicos

- Seguimiento de ubicación de flotas para visibilidad de rutas, despacho y supervisión de activos.
- Rastreo y trazabilidad de vehículos y equipos de alto valor que requieren historial de ubicación preciso.
- Flujos de trabajo de recuperación de vehículos respaldados por actualizaciones de posición fiables y cargas desde la memoria interna.
- Informes telemáticos donde los datos CANBus FMS son necesarios para monitorizar rendimiento o estado del vehículo.
- Integraciones de corto alcance usando Bluetooth de baja energía para emparejamiento con el dispositivo del conductor o configuración local.
- Instalaciones que requieren carcasas resistentes a la intemperie y antenas internas para montajes discretos.

## Notas sobre disponibilidad de funciones

- Los campos telemétricos específicos y los parámetros CANBus disponibles dependen del vehículo, el arnés de cableado y la implementación FMS.
- El comportamiento del Bluetooth Low Energy y los perfiles BLE soportados pueden variar según el firmware y la revisión de hardware.
- Algunas funciones, como el mapeo de entradas digitales, modos de suspensión y disparadores de eventos, son configurables y pueden diferir según la instalación.
- La capacidad de la memoria interna y el comportamiento de la batería de respaldo pueden verse afectados por la versión de firmware y la antigüedad o revisión del dispositivo.
- Las variantes regionales y las bandas celulares pueden modificar el comportamiento de comunicación; verifique el modelo exacto comercializado en su región.

## Por qué usar Plaspy con estas funciones

Usar el AT240 con Plaspy proporciona a las organizaciones una forma práctica de centralizar la ubicación, los eventos y la información del bus del vehículo en una única plataforma de monitoreo. Plaspy presenta historial de posiciones, líneas de tiempo de eventos y la telemetría disponible para que los equipos mantengan supervisión operativa y respondan con mayor rapidez a incidentes o desviaciones de itinerario.

Para conocer más sobre cómo Plaspy puede trabajar con dispositivos Astra Telematics y revisar las características de la plataforma visite https://www.plaspy.com. Para el conjunto de funciones más reciente del dispositivo, comportamiento de firmware y detalles de implementación del fabricante, verifique la información en el sitio web de Astra Telematics https://astratelematics.com/ .
