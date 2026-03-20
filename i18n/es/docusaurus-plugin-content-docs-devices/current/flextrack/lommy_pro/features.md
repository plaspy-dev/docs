---
slug: /flextrack/lommy_pro/features
id: lommy_pro-features
sidebar_label: Features
title: Flextrack - Lommy Pro Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones y compatibilidad del rastreador Flextrack Lommy Pro con Plaspy para gestión de flotas y telemetría
keywords:
  - Características de Flextrack Lommy Pro
  - Rastreador GPS Flextrack Lommy Pro
  - Compatibilidad Lommy Pro Plaspy
  - Seguimiento GNSS Lommy Pro
  - Rastreador Lommy Pro LTE Cat M1
  - Seguimiento vehicular Lommy Pro
  - Respaldo de batería Lommy Pro
  - Funciones inmovilizador Lommy Pro
  - Integración de telemetría Flextrack
  - Lommy Pro CAN RS232 RS485
---

# Flextrack - Características de Lommy Pro

Esta página describe el contexto público de uso del rastreador Flextrack Lommy Pro con Plaspy. Resume las capacidades prácticas, los usos habituales y la forma en que Lommy Pro reporta ubicación y telemetría a Plaspy para gestión de flotas, monitoreo antirrobo y supervisión de activos. El contenido se enfoca en funciones relevantes para usuarios de Plaspy y no reemplaza la documentación del fabricante.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, los accesorios instalados y el tipo de instalación. Aspectos de despliegue como instalaciones con alimentación cableada frente a unidades autónomas con batería de respaldo, opciones de accesorios y variantes regionales de conectividad celular pueden cambiar qué funciones están presentes o habilitadas en una unidad concreta.

## Resumen de funcionalidades

Lommy Pro es un rastreador compacto y eficiente en consumo que brinda posicionamiento GNSS continuo y telemetría vehicular a Plaspy para mapas en vivo, recorridos históricos y alertas automatizadas. Está diseñado para instalaciones mixtas donde puede usarse una alimentación cableada o una batería interna de respaldo, y dispone de interfaces de grado vehicular y modos de sueño configurables para equilibrar la frecuencia de reporte y la duración de la batería.

- Posicionamiento GNSS multinav (múltiples constelaciones) para obtener fijaciones de ubicación fiables en distintos entornos.
- Conectividad celular dual con LTE Cat M1 y GSM para reporte amplio de telemetría y recepción de comandos remotos.
- Batería interna recargable de Li-Ion y modos de sueño configurables para despliegues con respaldo de batería.
- Sensor de movimiento y detección de eventos para registro de viajes, detección de exceso de velocidad y de ralentí.
- Interfaces vehiculares como CAN y entradas seriales, además de entradas analógicas y digitales para telemetría y sensores.
- Soporte ampliable de accesorios, por ejemplo balizas RF y sensores de temperatura externos para monitoreo ambiental.

## Funciones principales del Flextrack - Lommy Pro

- Soporte para GNSS multinav que mejora la fiabilidad del posicionamiento en distintas regiones.
- Conectividad LTE Cat M1 y GSM para entregar posición y telemetría a Plaspy en tiempo real.
- Batería interna recargable Li-Ion con gestión de energía y modos de sueño configurables.
- Detección de movimiento y registro de viajes para un seguimiento preciso de trayectos y registros tipo odómetro.
- Detección de exceso de velocidad y monitoreo de ralentí para alertas operativas e informes de eficiencia.
- Control de inmovilizador y detección de arranque/parada para respaldar flujos de trabajo antirobo.
- Interfaces de nivel vehicular incluyendo CAN J1939 y conexiones seriales, además de entradas analógicas y digitales y una salida digital configurable.
- Soporte para configuración remota y actualizaciones de firmware para facilitar el mantenimiento del dispositivo.

## Cómo funcionan estas funciones con Plaspy

Lommy Pro envía fijaciones GNSS y telemetría a Plaspy usando métodos estándar de reporte de rastreadores. Plaspy ingiere la posición y la telemetría vehicular, normaliza los datos y los presenta mediante mapas, reproducción de trayectos, alertas e informes para que las flotas y los propietarios de activos puedan reaccionar ante eventos y tendencias.

- Mapas en vivo y actualizaciones de posición en Plaspy basadas en las fijaciones GNSS del dispositivo.
- La telemetría y los datos del vehículo, como CAN y entradas analógicas, aparecen en los paneles de Plaspy para monitoreo y análisis histórico.
- Las reglas y alertas en Plaspy pueden dispararse por eventos como exceso de velocidad, ralentí o umbrales de temperatura, notificando a los operadores por los canales configurados.
- Comandos remotos y acciones de inmovilizador pueden enviarse desde Plaspy al dispositivo cuando el firmware y la red lo permiten.
- Se admite la configuración remota y la gestión de firmware para ayudar a mantener ajustes y actualizaciones a lo largo de la flota.

## Casos de uso típicos

- Gestión de flotas con seguimiento en tiempo real, historial de viajes e informes de utilización.
- Flujos antirobo y de inmovilizador que aprovechan la detección de arranque/parada y las capacidades de comando remoto.
- Monitoreo de combustible y telemetría del motor vía CAN y entradas analógicas para análisis de consumo.
- Monitoreo de temperatura y sensores de puertas para remolques refrigerados y cargas con control climático.
- Rastreo de activos con respaldo de batería para remolques, equipos y embarcaciones donde no hay alimentación principal.
- Entornos de instalación mixtos donde el mismo modelo de dispositivo se usa tanto cableado en vehículos como en unidades autónomas.

## Notas sobre disponibilidad de funciones

- El conjunto de funciones puede depender de la versión de firmware instalada y de las características de firmware habilitadas por el fabricante en cada unidad.
- Algunas capacidades requieren accesorios o cableado específicos, como sensores externos, balizas RF o interfaces vehiculares particulares.
- El soporte de bandas celulares regionales y variantes regulatorias puede afectar las opciones de conectividad y debe verificarse según la región de despliegue.
- El tipo de instalación influye: las instalaciones cableadas en vehículos pueden habilitar telemetría más continua en comparación con configuraciones exclusivamente alimentadas por batería.
- Consulte siempre la documentación del fabricante y las notas de la versión para la revisión de hardware y firmware que planea desplegar.

## Por qué usar Plaspy con estas funciones

Combinar Lommy Pro con Plaspy ofrece una vía práctica para obtener visibilidad centralizada y supervisión operativa de vehículos y activos móviles. Plaspy puede ingerir ubicación y telemetría vehicular desde el rastreador, mostrarlos en tiempo real en mapas y líneas de tiempo, y permitir que los equipos configuren alertas e informes adecuados a sus necesidades operativas. La combinación de GNSS multinav, conectividad celular, interfaces vehiculares y operación con respaldo de batería hace a Lommy Pro útil para flotas mixtas que requieren despliegues tanto cableados como autónomos.

Para obtener más información sobre cómo Plaspy soporta la integración de dispositivos y los flujos de trabajo de flota visite https://www.plaspy.com. Para detalles específicos del equipo, comportamiento de firmware y opciones de accesorios consulte la documentación del fabricante en https://flextrack.dk.
