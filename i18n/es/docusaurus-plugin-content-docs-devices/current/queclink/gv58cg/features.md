---
slug: /queclink/gv58cg/features
id: gv58cg-features
sidebar_label: Features
title: QuecLink - GV58CG Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS QuecLink GV58CG y su integración con Plaspy para seguimiento de flotas y telemetría
keywords:
  - QuecLink GV58CG
  - características GV58CG
  - rastreador GPS QuecLink GV58CG
  - GV58CG Plaspy
  - características rastreador GPS QuecLink
  - rastreador de vehículos GV58CG
  - seguimiento de flotas GV58CG
  - rastreador sensores BLE
  - detección de encendido rastreador
  - inmovilizador remoto rastreador
---

# QuecLink - GV58CG: Características

Esta página ofrece un panorama público centrado en las funciones del QuecLink GV58CG y en cómo sus capacidades se aprovechan con Plaspy para el rastreo de flotas, telemetría y supervisión operativa. Está dirigida a gerentes de flota, integradores y evaluadores técnicos que necesiten entender las funciones prácticas del GV58CG cuando se conecta con la plataforma Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación, la variante regional y la implementación del fabricante. Las descripciones que siguen se basan en la información del dispositivo proporcionada; para detalles técnicos precisos consulte la documentación y las notas de versión del fabricante.

## Resumen de funciones

El GV58CG es un dispositivo telemático GNSS compacto diseñado para el rastreo vehicular, el envío de telemetría y flujos básicos de control del vehículo. Combina posicionamiento GNSS multi-constelación, conectividad celular con mecanismos de respaldo y E/S y soporte BLE integrados, lo que le permite reportar estado y permitir acciones remotas sencillas a través de Plaspy.

- Reporte de posición GNSS en tiempo real con receptor de alta sensibilidad u‑blox para localizaciones precisas.
- Conectividad celular LTE Cat 1 con retroceso a 2G para mantener la conectividad en condiciones variables de cobertura.
- Detección de encendido y control remoto de corte de combustible para flujos de trabajo antirrobo e inmovilización.
- BLE 5.2 y opciones de identificación por 1-wire, además de compatibilidad con sensores BLE ambientales y de combustible.
- Reportes programados y generación de alarmas por geo-cercas, remolque, choque y otros eventos de la flota.

## Funciones principales del QuecLink - GV58CG

- GNSS multi-constelación (GPS/GLONASS/Galileo/BeiDou) para fijaciones de posición robustas y precisión posicional respaldada en materiales de producto.
- Conectividad celular LTE Cat 1 con retroceso EGPRS para mantener el reporte cuando la cobertura LTE es variable.
- Detección de encendido mediante entrada digital positiva para registrar eventos motor encendido/apagado y log de viajes.
- Inmovilizador remoto y corte de combustible controlable a través de una salida digital configurable para acciones anti-robo.
- Entrada analógica única para lecturas de combustible u otros sensores, permitiendo telemetría cuando se combina con sensores apropiados.
- Soporte BLE 5.2 para identificación de conductor, sensores BLE de combustible, sensores de temperatura y humedad, y sensores de inclinación.
- Batería de respaldo integrada para alarmas de bajo consumo y reporte de pérdida de alimentación.
- Funcionalidades de alarmas y reporte que incluyen alertas por geo-cerca, detección de remolque, detección de choque y modos de reporte programado.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere actualizaciones de posición, eventos de estado, telemetría de sensores y alarmas desde rastreadores compatibles como el GV58CG y los presenta en un panel centralizado para monitoreo e informes. Plaspy detecta automáticamente los protocolos de dispositivo y soporta las opciones de transporte más comunes para que los dispositivos reporten de forma fiable a la plataforma.

- Dispositivos como el GV58CG pueden enviar posición y telemetría a Plaspy usando transportes estándar soportados por el equipo, como TCP, UDP y SMS.
- Plaspy recibe eventos de encendido y entradas digitales y puede mostrar eventos motor encendido/apagado y registros de turnos de conductor en la plataforma.
- La telemetría de entrada analógica y sensores BLE se traduce en niveles de combustible, lecturas de temperatura o inclinación que se muestran en vistas de tendencias y alertas en Plaspy.
- Los comandos remotos desde Plaspy pueden activar salidas digitales configuradas para inmovilización u otras acciones de control compatibles.
- Plaspy centraliza alarmas de geo-cercas, remolque y choque para que los operadores de flota puedan actuar rápidamente ante eventos críticos.
- Plaspy acepta conexiones a su endpoint de servidor (d.plaspy.com) y gestionará automáticamente la detección de protocolo para rastreadores compatibles.

## Casos de uso típicos

- Flujos anti-robo e inmovilización de flotas usando detección de encendido y control remoto de corte de combustible gestionados vía Plaspy.
- Operaciones de renta y leasing que combinan identificación de conductor con registro de viajes e historial de eventos para mayor responsabilidad.
- Búsqueda y recuperación de vehículos robados con reporte continuo de ubicación y alertas de remolque/choque para facilitar una respuesta rápida.
- Cumplimiento de rutas y monitoreo logístico mediante reporte programado, alertas por geo-cerca e historiales de viaje.
- Monitoreo de carga sensible a condiciones ambientales cuando se emparejan sensores BLE de temperatura o humedad con el rastreador.
- Supervisión de combustible que combina la entrada analógica y sensores BLE de combustible para generar informes de tendencias en Plaspy.

## Notas sobre disponibilidad de funciones

- Conjuntos de funciones como perfiles BLE disponibles, comportamiento de la entrada analógica y lógica de alarmas pueden variar según la versión de firmware y la revisión de hardware.
- Algunas funciones dependen de las elecciones de instalación y de los accesorios seleccionados para sensores BLE, dispositivos 1-wire y conexiones de E/S cableadas.
- El soporte de bandas celulares regionales y el comportamiento de retroceso varían según la variante comercial del dispositivo; verifique la variante de hardware con su región de despliegue.
- Las actualizaciones de firmware del fabricante pueden añadir, cambiar o refinar funciones; revise las notas de versión de QuecLink para comportamientos específicos de firmware.
- Para detalles de configuración del dispositivo y parámetros avanzados consulte la documentación oficial y las guías de configuración de QuecLink.

## Por qué usar Plaspy con estas funciones

Emparejar el GV58CG con Plaspy brinda a los operadores un punto único para ver ubicación, eventos y telemetría de sensores en una flota heterogénea. Los paneles centralizados y el sistema de alertas de Plaspy facilitan convertir las señales crudas del GV58CG en operaciones accionables: mitigación de robos, atribución de conductores, cumplimiento de rutas y monitoreo ambiental.

Learn more about Plaspy and how it integrates with devices like the GV58CG by visiting https://www.plaspy.com. For the most current device specifications, firmware behavior, and manufacturer implementation details please verify information on the QuecLink website https://www.queclink.com/.
