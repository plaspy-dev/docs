---
slug: /ruptela/lcv5/features
id: lcv5-features
sidebar_label: Features
title: Ruptela - LCV5 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del rastreador Ruptela LCV5 y su integración con Plaspy para rastreo vehicular y telemática
keywords:
  - características Ruptela LCV5
  - características rastreador GPS Ruptela LCV5
  - funciones Ruptela LCV5
  - capacidades Ruptela LCV5
  - compatibilidad LCV5 Plaspy
  - rastreo de vehículos Ruptela
  - telemática CAN OBD
  - monitoreo de combustible LCV5
  - telemática BLE LCV5
  - rastreador gestión de flotas
---

# Ruptela - Características del LCV5

Esta página ofrece un resumen público de las capacidades del rastreador Ruptela LCV5 y el contexto práctico de su uso con Plaspy. Se centra en las funciones orientadas al usuario relevantes para la gestión de flotas, telemetría y supervisión de vehículos, y explica cómo esas capacidades se reflejan en los flujos de trabajo de Plaspy.

La disponibilidad exacta de funciones en un equipo instalado puede variar según la versión de firmware, la variante de hardware, el modelo regional y la forma en que se instala o configura la unidad. Para obtener información específica y actualizada sobre el dispositivo, consulte siempre la documentación del fabricante y los registros de configuración de su equipo.

## Resumen de funciones

El LCV5 es un rastreador de grado vehicular para autos y vehículos comerciales ligeros que ofrece ubicación en tiempo real y un conjunto amplio de telemetría del vehículo hacia una plataforma central como Plaspy. Está disponible en varias variantes de hardware y soporta distintas opciones de E/S y comunicaciones para adaptarse a requisitos comunes de seguimiento de flotas y activos.

- Reporte de ubicación GPS en tiempo real para seguimiento en vivo y reproducción de rutas.
- Telemetría profunda del vehículo vía CAN y parámetros OBD para visibilidad del estado del motor y el vehículo.
- Monitoreo de nivel de combustible e integración con sondas de tanque para reportes de consumo e inventarios.
- Identificación de conductor y entradas configurables para control de acceso y registro de uso.
- Variante con BLE para conectar sensores y balizas externas que amplían la telemetría.
- Funciones antirrobo como detección de interferencias y batería de respaldo integrada para mayor resiliencia.

## Funciones principales del Ruptela LCV5

- Reporte de posición basado en GNSS para localización continua del vehículo.
- Lectura de bus CAN y parámetros OBD para diagnóstico del vehículo y análisis de comportamiento.
- Opciones duales de conectividad celular, con variantes GSM 2G y LTE Cat M1 según los requisitos de despliegue.
- Múltiples interfaces de E/S y serie, incluyendo interfaces CAN, RS232 y RS485, además de entradas y salidas analógicas y digitales para integrarse con encendido y circuitos relacionados.
- Monitoreo de combustible mediante entradas analógicas y soporte para sondas para capturar niveles de tanque.
- Soporte para identificación de conductor y registro de eventos para flujos de trabajo de uso compartido de vehículos y control de acceso.
- Batería de respaldo integrada, detección de movimiento por acelerómetro y detección de interferencias para mejorar la monitorización antirrobo.
- Variante de hardware con BLE que permite conectar sensores Bluetooth y balizas para ampliar la cobertura de telemetría.

## Cómo funcionan estas funciones con Plaspy

Cuando un dispositivo LCV5 se registra en Plaspy, transmite posición y telemetría para que los operadores de flota puedan supervisar vehículos y eventos desde una única interfaz. Plaspy procesa los datos del dispositivo para mostrar ubicación, telemetría y eventos de entradas junto con alertas y reportes para la supervisión operativa.

- Localización en vivo y reproducción de rutas basadas en las posiciones GNSS reportadas por el dispositivo.
- La telemetría CAN y OBD se presenta como parámetros del vehículo en Plaspy para métricas del motor, velocidad y visibilidad de diagnósticos.
- Los valores de nivel de combustible y entradas analógicas están disponibles en los paneles y pueden usarse para activar alertas o generar reportes.
- Los eventos de entradas y salidas digitales, como encendido, puertas o identificación de conductor, se muestran para reglas basadas en eventos e historial.
- Los datos de sensores BLE de la variante con BLE pueden aparecer en Plaspy cuando el dispositivo reporta lecturas de dichos sensores.
- Las alertas basadas en eventos y los reportes históricos combinan ubicación y telemetría para investigaciones y revisiones operativas.

Usted podrá configurar reglas, paneles y reportes en Plaspy que articulen estos datos para obtener visibilidad operativa y toma de decisiones basada en telemetría.

## Casos de uso típicos

- Seguimiento en tiempo real de flotas de autos y vehículos comerciales ligeros.
- Monitoreo de combustible y análisis de consumo para reducir desperdicios y detectar anomalías de reabastecimiento.
- Identificación de conductor y registro de actividad para flotas de uso compartido o con acceso controlado.
- Monitorización antirrobo con detección de interferencias y batería de respaldo para mejorar las posibilidades de recuperación.
- Supervisión de carga sensorada usando la variante BLE para añadir sensores ambientales o de proximidad.
- Diagnóstico del vehículo y visibilidad remota de parámetros del motor y rendimiento mediante CAN y OBD.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones varían según la variante de hardware; algunos modelos incluyen BLE o LTE Cat M1 mientras que otros son únicamente 2G.
- La versión de firmware y la configuración del fabricante pueden habilitar o limitar parámetros de telemetría específicos o entradas.
- Las decisiones de instalación y el tendido eléctrico influyen en qué E/S y señales del vehículo quedan disponibles para el dispositivo.
- Restricciones regulatorias regionales pueden afectar las bandas celulares disponibles y la selección de modelo.
- Para gestión de dispositivos y actualizaciones de firmware consulte las herramientas de Ruptela y su proceso de aprovisionamiento de equipos.

## Por qué usar Plaspy con estas funciones

Usar el Ruptela LCV5 con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación de los vehículos y una amplia variedad de datos telemáticos en una sola plataforma. Plaspy puede combinar posición, telemetría CAN/OBD, lecturas de combustible y eventos de entradas en paneles, alertas y reportes que apoyan decisiones operativas, programas de seguridad y el cumplimiento normativo.

Aprenda más sobre Plaspy y cómo se integra con rastreadores vehiculares como el Ruptela LCV5 en https://www.plaspy.com. Las funciones del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique las especificaciones de hardware y detalles de implementación más recientes en el sitio del fabricante https://ruptela.com/ para obtener la información más actual.
