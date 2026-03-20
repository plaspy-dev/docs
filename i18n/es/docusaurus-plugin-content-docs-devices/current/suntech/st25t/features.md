---
slug: /suntech/st25t/features
id: st25t-features
sidebar_label: Features
title: Suntech - ST25T Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del interfaz de telemetría Suntech ST25T y su integración con Plaspy para gestión de flotas
keywords:
  - Características Suntech ST25T
  - funciones rastreador GPS Suntech ST25T
  - interfaz telemetría ST25T
  - interfaz telemática vehicular
  - integración J1939 J1708
  - sensor combustible RS485 LLS
  - integración serial RS232
  - configuración Bluetooth 4.1
  - dispositivo compatible Plaspy
  - telemetría de flotas ST25T
---

# Suntech - ST25T: Características

Esta página ofrece un resumen público de las capacidades del Suntech ST25T y de cómo se utiliza el dispositivo con Plaspy. Se centra en información práctica y no sensible sobre el ST25T como módulo interfaz de telemetría compatible con Plaspy, y explica la funcionalidad que aporta cuando se empareja con un gateway Plaspy para seguimiento en tiempo real y gestión de flotas.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el modelo regional y el método de instalación. Para detalles específicos del equipo, como asignaciones de pines, planos mecánicos y cambios de firmware, consulte la documentación y la hoja de datos del fabricante.

## Resumen de funcionalidades

El ST25T es un módulo compacto de interfaz de telemetría diseñado para encaminar datos de buses de vehículo y sensores hacia un gateway compatible con Plaspy. Está pensado para integrar equipos seriales heredados, sensores de combustible y redes vehiculares estándar dentro de un flujo de trabajo de seguimiento en tiempo real, en lugar de funcionar como un rastreador GNSS independiente.

- Reenvía datos del bus del vehículo y de sensores a gateways habilitados para Plaspy como el ST4305 y el ST8300 para consolidar la telemetría.
- Soporta interfaces vehiculares estándar, incluyendo J1939 y J1708, para el reenvío de datos de la ECU hacia Plaspy.
- Múltiples canales seriales: dos puertos RS232 y un puerto RS485 con soporte LLS para sensores de combustible y dispositivos legacy.
- Dos entradas ADC configurables que pueden usarse como entradas analógicas o digitales para detección de ignición y señalización de eventos.
- Bluetooth 4.1 opcional para configuración local y emparejamiento de accesorios o sensores BLE durante la instalación.
- Diseño robusto y operación de bajo consumo, adecuado para camiones pesados, autobuses y otros vehículos comerciales.

## Características principales del Suntech - ST25T

- Reenvío de telemetría a gateways compatibles con Plaspy, permitiendo combinar datos GPS y del vehículo en la plataforma de flotas.
- Soporte para redes vehiculares J1939 y J1708 para capturar parámetros del motor y del vehículo.
- Interfaces RS232 dobles para integrar dispositivos heredados y conexiones de subsistemas.
- Puerto RS485 con soporte del protocolo LLS para conectar sensores de nivel de combustible.
- Dos entradas ADC configurables como analógicas o digitales para señales de ignición, puertas o alarmas.
- Módulo Bluetooth 4.1 opcional para configuración local y emparejamiento de accesorios BLE.
- Factor de forma compacto con amplio rango de temperatura de operación y certificación FCC para uso en campo.

## Cómo estas funciones se integran con Plaspy

Cuando se instala junto a un gateway compatible con Plaspy, el ST25T actúa como fuente de telemetría de vehículo y sensores que el gateway reenvía a Plaspy para su monitoreo y generación de informes unificados. Plaspy recibe el flujo enriquecido de telemetría y lo presenta junto con la ubicación GPS y el estado celular proporcionados por el gateway.

- Reenvío en tiempo real de mensajes ECU y datos seriales al gateway para su ingestión en paneles e informes de Plaspy.
- Lecturas de nivel de combustible desde sensores compatibles con LLS conectados vía RS485 que pueden procesarse en Plaspy para análisis de consumo y detección de discrepancias.
- Entradas ADC o digitales que reportan estado de ignición y eventos de puerta o alarma aparecen en Plaspy como marcadores de evento para registros de viaje, cálculos de ralentí y flujos de trabajo de seguridad.
- Dispositivos legacy por RS232 y datos de subsistemas pueden preservarse y reenviarse, permitiendo que Plaspy incluya esos históricos en los registros de la flota.
- El Bluetooth opcional se usa principalmente para configuración local y emparejamiento de sensores; los accesorios emparejados pueden complementar la telemetría que finalmente el gateway envía a Plaspy.

## Casos de uso típicos

- Mejora de telemetría de flota reenviando datos de motor CAN/J1939 a Plaspy para informes operativos.
- Monitoreo de nivel de combustible y detección de robo mediante sensores LLS conectados al RS485.
- Integración de dispositivos seriales heredados como impresoras a bordo o módulos telemáticos especializados sin rediseñar el gateway.
- Captura de señales de ignición, puertas y alarmas para registro de viajes, cálculo de tiempos de inactividad y alertas antirrobo en Plaspy.
- Configuración y puesta en marcha local durante la instalación o mantenimiento usando la interfaz Bluetooth opcional.
- Despliegues en vehículos pesados y autobuses donde el amplio rango de temperatura y el bajo consumo son requisitos importantes.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones y el comportamiento pueden variar según las versiones de firmware y revisiones de hardware; confirme la versión de firmware para capacidades específicas.
- El ST25T es una interfaz de telemetría y no sustituye al receptor GNSS de un gateway; la conectividad GPS y celular la proporciona el gateway emparejado.
- Los pines del conector, las asignaciones exactas de señales y los detalles de montaje están documentados en la hoja de datos oficial y deben revisarse antes de la instalación.
- Las variantes regionales u opciones como el módulo Bluetooth pueden no estar presentes en todas las unidades; verifique la configuración del modelo.
- Las decisiones de instalación del fabricante o del integrador pueden cambiar el uso de las entradas ADC (analógico versus digital) y qué señales se reenvían.

## Por qué usar Plaspy con estas funciones

Incorporar el ST25T dentro de una solución gestionada por Plaspy permite a las organizaciones combinar señales del bus del vehículo y de sensores con la telemetría GPS y celular del gateway. Esta integración ofrece una visión operacional más completa en Plaspy para monitoreo, alertas e informes sin sustituir el equipo a bordo existente.

Para saber más sobre cómo Plaspy puede utilizar la telemetría de dispositivos como el ST25T, visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware e información detallada de conectores, consulte la documentación oficial de Suntech en http://www.suntechint.com/ ya que las características del dispositivo y los detalles del fabricante pueden cambiar con el tiempo.
