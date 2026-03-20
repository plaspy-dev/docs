---
slug: /queclink/gv501lg/features
id: gv501lg-features
sidebar_label: Features
title: QuecLink - GV501LG Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador OBD-II QuecLink GV501LG y su integración con Plaspy para rastreo de flotas y diagnóstico
keywords:
  - QuecLink GV501LG características
  - Rastreador GPS QuecLink GV501LG
  - Rastreador OBDII GV501LG
  - Compatibilidad GV501LG Plaspy
  - Diagnóstico vehicular OBDII
  - Rastreo de flotas GV501LG
  - Rastreador BLE WiFi hotspot
  - Rastreador GNSS alta sensibilidad
  - CAN bus VIN odómetro DTC
  - Detección de choques rastreador GPS
---

# QuecLink - Características del GV501LG

Esta página ofrece una visión pública y orientada a funciones del QuecLink GV501LG y cómo sus capacidades se integran con Plaspy para el rastreo de flotas, diagnóstico y monitoreo operativo. Se describen las funciones principales visibles para el usuario y el valor práctico que aporta el GV501LG al integrarse con Plaspy, incluyendo la instalación OBD-II plug-and-play, seguimiento de ubicación, lecturas del bus del vehículo y opciones de conectividad en cabina.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la forma en que se instala el equipo en el vehículo. Los detalles de implementación del fabricante y opciones de firmware o configuración pueden afectar qué funciones están disponibles para Plaspy, por lo que esta página se centra en el contexto público de las funciones y en orientaciones prácticas de uso.

## Resumen de funciones

El GV501LG es una unidad telemática compacta con factor de forma OBD-II pensada para despliegues rápidos en autos y camionetas ligeras. Combina conectividad celular, receptor GNSS de alta sensibilidad, acceso a datos del bus CAN del vehículo, radios de corto alcance y detección de movimiento para ofrecer seguimiento en tiempo real y diagnósticos útiles para programas de flotas y seguros.

- Factor de forma OBD-II plug-and-play para instalación rápida e integración inmediata con Plaspy.
- Posicionamiento GNSS en tiempo real con alta sensibilidad para precisión en la ubicación y el historial de rutas.
- Lecturas ISO CAN bus que incluyen VIN, odómetro y DTCs para respaldar diagnóstico y mantenimientos.
- BLE 5.0 y punto de acceso Wi‑Fi de doble banda para emparejar sensores de corto alcance y compartir internet en cabina.
- Detección de movimiento para identificar choques, remolque y eventos de conducción brusca, alimentando alertas de seguridad y antirrobo.
- Conectividad celular con opciones de respaldo entre generaciones para mantener la telemetría.

## Características principales del QuecLink - GV501LG

- Carcasa OBD-II plug-and-play que provee alimentación y acceso a los datos del bus del vehículo.
- Radio celular LTE Cat 4 con fallback a 3G y 2G para amplia cobertura de red.
- Receptor GNSS integrado u‑blox con alta sensibilidad y rendimiento de posición CEP menor a 2.5 m.
- Acceso al bus ISO CAN para lectura de VIN, odómetro y códigos de diagnóstico (DTC).
- Soporte BLE 5.0 para emparejar sensores y periféricos de corto alcance.
- Punto de acceso Wi‑Fi interno de doble banda para compartir conexión en 2.4 GHz y 5 GHz.
- Sensor de movimiento integrado, incluyendo acelerómetro multi‑eje para detección de choques y eventos severos.
- Soporte para reportes TCP, UDP y SMS para entrega de datos en la nube e ingestión por Plaspy.

## Cómo funcionan estas funciones con Plaspy

Cuando se configura para reportes en la nube, el GV501LG transmite posiciones GNSS, lecturas del bus del vehículo y telemetría de eventos a Plaspy, de modo que usted pueda monitorear la actividad y el estado de servicio de la flota en tiempo real. Plaspy detectará automáticamente los protocolos comunes de rastreadores y procesará los datos del dispositivo para su visualización, alertas e informes.

- Ubicación en vivo y reproducción de rutas basadas en posiciones GNSS de alta sensibilidad reportadas a Plaspy.
- Ingestión de VIN, odómetro y DTCs para poblar perfiles de vehículo y activar alertas de mantenimiento.
- Eventos de choque, remolque y conducción brusca que generan alertas y registros de incidentes en Plaspy para la respuesta operativa.
- Incumplimientos de geocercas e informes programados que aparecen en Plaspy para flujos de trabajo y notificaciones automatizadas.
- Datos de sensores emparejados por BLE y la presencia del hotspot Wi‑Fi como complementos para la conectividad en cabina, mientras la telemetría sigue fluyendo hacia Plaspy.
- Plaspy consolida la telemetría en paneles, informes y reglas de alerta para apoyar la supervisión operativa.

## Casos de uso típicos

- Gestión de flotas para monitoreo de rutas, seguimiento del desempeño de conductores e informes programados.
- Programas de seguro basado en uso que aprovechan el odómetro y la telemetría de eventos derivados del OBD.
- Flujos de trabajo de antirrobo y recuperación usando detección de remolque, alertas de choque y notificaciones de geocercas.
- Conectividad a bordo para pasajeros o tripulación mediante el hotspot Wi‑Fi de doble banda integrado.
- Mantenimiento preventivo y diagnóstico impulsado por VIN, DTCs y lecturas de odómetro desde el bus del vehículo.
- Proyectos de despliegue rápido donde la instalación OBD-II plug-and-play reduce tiempos de puesta en marcha.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware y las variantes de hardware regionales; verifique el modelo del dispositivo y el firmware para conocer las capacidades exactas.
- La marca, modelo y la implementación del bus del vehículo determinan qué parámetros CAN están disponibles a través del conector OBD-II.
- El comportamiento de BLE y Wi‑Fi puede estar limitado por regulaciones regionales de radio o por la configuración de fábrica.
- Algunas funciones avanzadas requieren opciones de firmware específicas o perfiles de configuración para activarse.
- Para detalles precisos a nivel de dispositivo consulte la documentación del fabricante y las notas de versión.

## Por qué usar Plaspy con estas funciones

Usar el GV501LG con Plaspy brinda a las organizaciones un rastreador compacto y fácil de instalar que integra ubicación, diagnóstico vehicular y reporte de eventos de seguridad en una única plataforma en la nube. Plaspy transforma la telemetría del dispositivo en inteligencia operativa, permitiendo a los equipos monitorear activos, automatizar alertas y combinar la información de ubicación con datos CAN para decisiones más inteligentes de mantenimiento y gestión de flotas.

Para obtener más información sobre Plaspy y su integración con rastreadores compatibles como el QuecLink GV501LG visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la información de producto y firmware más reciente con el fabricante en https://www.queclink.com/ antes del despliegue.
