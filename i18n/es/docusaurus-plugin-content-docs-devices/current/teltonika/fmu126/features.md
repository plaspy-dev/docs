---
slug: /teltonika/fmu126/features
id: fmu126-features
sidebar_label: Features
title: Teltonika - FMU126 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Teltonika FMU126 y su integración con Plaspy para seguimiento vehicular y telemática
keywords:
  - Teltonika FMU126 características
  - Rastreador GPS Teltonika FMU126
  - Capacidades FMU126
  - Sensores BLE FMU126
  - Interfaz RS232 FMU126
  - Soporte adaptador CAN FMU126
  - Monitoreo de combustible FMU126
  - Detección de ignición FMU126
  - Compatibilidad FMU126 Plaspy
  - Seguimiento vehicular FMU126
---

# Teltonika - FMU126: Funcionalidades

Esta página ofrece un resumen público de las capacidades del rastreador Teltonika FMU126 y explica cómo se integran con Plaspy para el seguimiento vehicular y soluciones de telemática. El contenido está orientado a funciones visibles para el usuario, casos prácticos dentro de Plaspy y qué capacidades del equipo son relevantes para el monitoreo de flotas y activos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, variantes regionales, opciones de instalación y la implementación del fabricante. Para detalles específicos y actualizados consulte la documentación oficial de Teltonika y las notas de versión del firmware.

## Resumen de características

El FMU126 es un rastreador compacto con capacidad 3G, GNSS integrado y Bluetooth, además de una serie de interfaces para periféricos externos. Está diseñado para soportar reporte continuo de posición, integraciones de sensores y recolección de datos vehiculares para proveedores de telemática.

- Posicionamiento GNSS en tiempo real con conectividad 3G y retroceso a 2G para mayor cobertura de red.
- Soporte Bluetooth Low Energy para sensores y beacons externos que amplían la telemetría.
- Interfaz RS232 y modos variados para conectar lectores de tarjetas magnéticas y dispositivos de terceros.
- Compatibilidad con adaptadores CAN para capturar datos del bus del vehículo cuando se emplean adaptadores.
- Conveniencias integradas como una salida de +5V para periféricos y un buzzer en PCB que facilitan las instalaciones.
- Batería interna de larga duración adecuada para intervalos de registro continuos, incluso con logging de un segundo.

## Características principales del Teltonika FMU126

- Posicionamiento GNSS combinado con Bluetooth para una ubicación flexible y soporte de sensores periféricos.
- Conectividad a redes 3G con fallback a 2G para ampliar la cobertura.
- Interfaz RS232 que admite varios modos y dispositivos externos, incluidos lectores magnéticos.
- Soporte para sensores y beacons BLE para capturar telemetría y eventos de presencia adicionales.
- Compatibilidad con adaptadores CAN para incorporar datos del bus vehicular en los flujos de telemática.
- Salida +5V e indicador sonoro en PCB para simplificar la alimentación de periféricos y la retroalimentación en la instalación.
- Funcionamiento con batería prolongada que permite registros de alta frecuencia en despliegues temporales.
- Soporte integrado para configuración remota, opciones de actualización de firmware, manejo de comandos por SMS y GPRS, sincronización horaria, monitoreo de combustible, detección de ignición y modos de sueño configurables.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe e interpreta la ubicación y la telemetría del FMU126, poniendo esos datos a disposición para monitoreo en tiempo real, análisis histórico y generación de eventos. La plataforma detecta automáticamente protocolos comunes de rastreadores y presenta el estado del equipo y los eventos en una interfaz consistente.

- Las actualizaciones de posición y el historial de movimiento aparecen en los mapas y vistas de línea de tiempo de Plaspy para seguimiento y reconstrucción de rutas.
- Los eventos de sensores y beacons BLE del FMU126 pueden mostrarse como telemetría o atributos personalizados cuando los sensores conectados lo soportan.
- Dispositivos conectados por RS232, como lectores de tarjetas magnéticas, pueden representarse en Plaspy como entradas externas o registros de eventos cuando el equipo reenvía esos eventos.
- Los datos de adaptadores CAN y de monitoreo de combustible pueden asignarse a canales en Plaspy para nivel de combustible, indicadores de consumo u otras métricas específicas del vehículo cuando son proporcionados por el dispositivo y el adaptador.
- El estado de ignición, las transiciones de modo de sueño y los eventos de batería o alimentación se muestran como indicadores de estado para apoyar el monitoreo operativo y las alertas.
- Las capacidades de configuración remota y comandos del FMU126 (SMS, GPRS u equivalentes) pueden utilizarse junto con los flujos de trabajo de Plaspy cuando la implementación lo permite.

## Casos de uso típicos

- Seguimiento de ubicación de flotas y generación de informes de cumplimiento para operaciones de transporte reguladas.
- Identificación de conductores y registro de actividad mediante lectores de tarjetas conectados por RS232.
- Monitoreo de combustible y diagnóstico vehicular cuando se requiere información del bus CAN.
- Monitoreo temporal de activos o vehículos usando la batería interna del equipo y registros de alta frecuencia.
- Ampliación de la telemetría con sensores BLE para condiciones de carga, detección de presencia o flujos basados en proximidad.
- Integración de dispositivos de terceros vía RS232 para sensores o entradas específicas de la industria.

## Notas sobre disponibilidad de funciones

- La versión de firmware, la revisión de hardware y las variantes regionales pueden afectar qué funciones están disponibles o el comportamiento exacto de las mismas.
- Algunas capacidades, como captura de datos CAN, lectura de sensores BLE o soporte para lectores magnéticos, requieren accesorios o adaptadores adicionales.
- Las opciones de instalación y cableado (alimentación, adaptadores CAN y dispositivos externos) influyen en qué funciones quedan activas y cómo el dispositivo reporta a Plaspy.
- Las opciones de configuración del fabricante y los canales de comandos soportados determinan cómo se realizan las actualizaciones y la configuración remota.
- Revise siempre la documentación de producto de Teltonika y el changelog de firmware del dispositivo para obtener la información de funciones más precisa y actualizada.

## Por qué usar Plaspy con estas funciones

Usar el FMU126 con Plaspy proporciona a las organizaciones una forma centralizada de visualizar y actuar sobre datos de ubicación, sensores y del vehículo. Plaspy integra el historial de posiciones, la visibilidad de eventos y los canales de telemetría para que usted pueda monitorear el estado del vehículo, rastrear activos e incorporar eventos generados por el dispositivo en flujos operativos.

Para obtener más información sobre cómo Plaspy soporta rastreadores como el FMU126 visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, comportamiento de firmware y documentación del fabricante consulte Teltonika en https://www.teltonika-gps.com/ ya que las funciones e implementaciones pueden cambiar con el tiempo.
