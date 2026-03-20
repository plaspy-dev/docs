---
slug: /teltonika/fmb640_fmb641/features
id: fmb640_fmb641-features
sidebar_label: Features
title: Teltonika - FMB640-FMB641 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones de los rastreadores Teltonika FMB640 y FMB641 y su integración con Plaspy para gestión de flotas
keywords:
  - Características Teltonika FMB640
  - Características Teltonika FMB641
  - Rastreador GPS Teltonika FMB640
  - Rastreador GPS Teltonika FMB641
  - Características FMB640 FMB641 Plaspy
  - Funciones tacógrafo FMB640 FMB641
  - Rastreador datos CAN Teltonika
  - Integración RS232 RS485 Teltonika
  - Seguimiento de flotas compatibilidad Plaspy
  - Telemetría vehicular Teltonika Plaspy
---

# Teltonika - Funciones de FMB640 y FMB641

Esta página ofrece un resumen público de las funciones de los rastreadores Teltonika FMB640 y FMB641 y explica cómo se aprovechan sus capacidades en Plaspy. Se describen las funciones prácticas y no sensibles que reportan estos modelos, cómo Plaspy recibe y presenta esa información y qué factores conviene considerar al planificar despliegues con estos dispositivos.

La disponibilidad y el comportamiento exacto de cada función pueden variar según la versión de firmware, la revisión de hardware, la variante regional, las elecciones de instalación y la implementación del fabricante. Utilice esta página como vista general de compatibilidad con Plaspy y consulte la documentación del fabricante para detalles definitivos y específicos del dispositivo.

## Resumen de funciones

Los modelos FMB640 y FMB641 están orientados a aplicaciones profesionales de flotas y vehículos donde son relevantes los datos del bus del vehículo, la interacción con tacógrafos, la integración de periféricos y la conectividad robusta. Ambos combinan telemetría vehicular con soporte para periféricos y características de gestión de energía que los hacen versátiles en distintos sectores.

- Soporte directo de datos del bus del vehículo, incluyendo FMS CAN J1939 y fuel CAN J1708 para diagnósticos y reportes de consumo
- Integración con tacógrafo mediante datos K en vivo y descarga remota de archivos DDD para flujos de trabajo de cumplimiento de conductor y flota
- Compatibilidad con dispositivos de terceros vía RS232 y RS485, además de soporte para periféricos 1 Wire e entradas RFID para integración de sensores y control de acceso
- Opciones de conectividad con Dual SIM o eSIM para comunicaciones más resilientes y detección de eventos como interferencia en GNSS, choque, remolque, ralentí excesivo y exceso de velocidad
- Mejoras específicas del FMB641, como un procesador de mayor potencia, terminadores CAN conmutable para redes CAN complejas y la posibilidad de alimentación por USB para facilitar la configuración
- Modos de ahorro de energía y herramientas de configuración remota, incluyendo actualizaciones FOTA desde web y soporte de comandos por SMS o GPRS para gestionar equipos en campo

## Características principales de Teltonika FMB640 y FMB641

- Soporte de datos FMS CAN con J1939 y datos de fuel CAN J1708 para telemetría del vehículo y monitorización de combustible
- Capacidades relacionadas con tacógrafos, incluyendo datos K en tiempo real y descarga remota de DDD además de información tacho online
- Interfaces RS232 y RS485 para integrar dispositivos y sensores de terceros
- Compatibilidad con periféricos como RFID RS232, RFID 1 Wire, iButton 1 Wire, sensores de temperatura 1 Wire y soporte para sensores de presión de neumáticos Continental
- Opciones de conectividad Dual SIM o eSIM para mayor continuidad de conexión
- Detección basada en acelerómetro para eventos como choque y remolque
- Mejoras del FMB641 que incluyen un procesador de mayor rendimiento, terminadores CAN conmutable para redes CAN muy activas y alimentación por USB para facilitar la configuración
- Funciones de gestión de energía como modos de reposo del GPS y modos de sueño profundo para extender la vida operativa cuando corresponda

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe telemetría y eventos desde rastreadores Teltonika compatibles y presenta esos datos en vistas centradas en el vehículo para monitoreo e informes. Plaspy detecta automáticamente el protocolo del rastreador y acepta conexiones de dispositivos a través de métodos de transporte estándar, lo que simplifica la incorporación de equipos y la operación diaria.

- Visibilidad en tiempo real de la ubicación y el movimiento combinada con banderas de eventos como exceso de velocidad, ralentí excesivo, choque y desconexión GNSS
- Métricas derivadas del bus del vehículo y CAN se muestran cuando el dispositivo las reporta, permitiendo contadores de combustible, seguimiento del odómetro y visibilidad de datos del motor dentro de Plaspy
- Eventos relacionados con el tacógrafo y el estado de transferencia de archivos reportados por el dispositivo pueden correlacionarse con viajes y actividad de conductores para el monitoreo de cumplimiento
- Estados de periféricos y entradas como RFID, sensores 1 Wire y lecturas de temperatura aparecen como entradas del dispositivo o campos de telemetría personalizados en Plaspy
- Rastreo offline y cargas en búfer desde el dispositivo son procesados por Plaspy cuando se restablece la conectividad, para mantener intactos los registros históricos de posición
- La detección automática de protocolo y el uso de un único puerto configurado en el servidor Plaspy simplifican la configuración cuando los dispositivos apuntan a endpoints de Plaspy como d.plaspy.com por TCP o UDP en el puerto soportado

## Casos de uso típicos

- Transporte de larga distancia e internacional donde las descargas de tacógrafo y el diagnóstico del bus CAN apoyan el cumplimiento y el mantenimiento del vehículo
- Transporte refrigerado y cadena de frío que combinan entradas de sensores de temperatura con seguimiento de ubicación y alertas
- Flotas de construcción, minería y maquinaria pesada que requieren datos del bus del vehículo e integraciones robustas de periféricos
- Servicios de seguridad y emergencia que necesitan ubicación en tiempo real, detección de choques y remolque, y conectividad priorizada
- Programas de eficiencia de flota que aprovechan conducción económica, detección de exceso de velocidad e informes de ralentí para reducir consumo y costos operativos
- Proyectos de integración de activos que utilizan dispositivos RS232 y RS485 y RFID para control de acceso o telemetría de equipos

## Notas sobre disponibilidad de funciones

- La versión de firmware, la revisión de hardware y los accesorios opcionales determinan qué funciones están disponibles en una unidad concreta
- Algunas funciones dependen de periféricos compatibles o de prácticas de cableado e instalación específicas para que la telemetría esperada esté disponible
- El FMB641 incluye mejoras específicas frente al FMB640, como un procesador más potente y terminadores CAN conmutables, lo que puede influir en el rendimiento en redes CAN complejas
- Las variantes regionales y las restricciones regulatorias pueden afectar funciones de conectividad y soporte de periféricos
- Verifique siempre las listas de funciones, notas de versiones de firmware y guías de instalación del fabricante para conocer las capacidades exactas de la unidad adquirida

## Por qué usar Plaspy con estas funciones

Usar dispositivos Teltonika FMB640 o FMB641 con Plaspy ofrece a las organizaciones una forma práctica de consolidar ubicación de vehículos, métricas derivadas del CAN, interacciones con tacógrafos y entradas de periféricos en un único entorno de monitoreo. La detección automática de protocolos y el manejo unificado de dispositivos de Plaspy reducen la fricción en la incorporación y permiten a los operadores concentrarse en la supervisión de eventos, el cumplimiento y los conocimientos operativos en lugar de en detalles de bajo nivel del protocolo.

Para obtener más información sobre cómo Plaspy puede trabajar con rastreadores Teltonika visite https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware y guías de instalación más actuales y detalladas consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ para verificar las funciones y el comportamiento del dispositivo a lo largo del tiempo.
