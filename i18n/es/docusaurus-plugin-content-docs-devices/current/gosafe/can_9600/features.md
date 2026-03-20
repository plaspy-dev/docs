---
slug: /gosafe/can_9600/features
id: can_9600-features
sidebar_label: Features
title: Gosafe - CAN-9600 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador Gosafe CAN-9600 y su compatibilidad con Plaspy para reenvío y monitoreo de datos FMS
keywords:
  - Gosafe CAN-9600
  - características Gosafe CAN-9600
  - rastreador GPS CAN-9600
  - lector FMS Gosafe
  - lector J1939 J1708
  - salida RS232 FMS
  - reenvío de datos FMS
  - compatibilidad Plaspy
  - seguimiento de flotas vehiculares
  - telemática para camiones y autobuses
---

# Gosafe - Características del CAN-9600

Esta página describe el contexto público de funcionalidades del Gosafe CAN-9600 y cómo sus capacidades FMS se utilizan con Plaspy. Se enfoca en información práctica y no sensible sobre lo que el CAN-9600 puede ofrecer y cómo esos datos se muestran y resultan útiles dentro de la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para obtener detalles específicos y actualizados del dispositivo, consulte la documentación del fabricante y las notas de firmware de su equipo.

## Visión general de funciones

El CAN-9600 está diseñado para leer datos FMS de vehículos comerciales como camiones y autobuses y presentar esa información a través de una interfaz serial para su envío a sistemas de seguimiento. Su valor principal es convertir la salida FMS del vehículo en un flujo serial estándar que puede integrarse con dispositivos de rastreo GPS y plataformas servidoras compatibles.

- Lee datos FMS de camiones y autobuses usando familias de protocolo CAN estándar
- Soporta los formatos FMS estándar SAE J1939 y SAE J1708 para cobertura amplia de vehículos
- Proporciona salida serial RS232 para conectar a rastreadores GPS o dispositivos a bordo
- Ofrece una interfaz serial por SMS para comunicación serial remota cuando aplica
- Diseñado para integrarse de forma sencilla con rastreadores GPS y equipos telemáticos
- Permite el reenvío de datos FMS hacia un servidor para acceso y monitoreo web

## Características principales del Gosafe - CAN-9600

- Lector de datos FMS pensado para redes de vehículos comerciales
- Compatibilidad con las familias de protocolo SAE J1939 y SAE J1708
- Interfaz serial RS232 para transmitir datos del vehículo a dispositivos externos
- Interfaz serial por SMS para entrega remota de datos seriales
- Protocolo pensado para facilitar la integración con rastreadores GPS y unidades telemáticas
- Compatibilidad conocida con modelos de rastreadores Gosafe como G6S y G92I
- Capacidad para reenviar datos FMS del vehículo a un servidor para su acceso desde una plataforma

## Cómo funcionan estas funciones con Plaspy

Cuando se usa con Plaspy, el CAN-9600 actúa como un puente que introduce la salida FMS del vehículo en el entorno Plaspy para monitoreo centralizado y generación de reportes. Plaspy detecta automáticamente muchas variaciones de protocolo de los rastreadores y presenta los datos entrantes dentro de la plataforma para su uso operativo.

- Los datos FMS reenviados por un rastreador GPS conectado se reciben y asocian con el dispositivo correspondiente en Plaspy
- Plaspy muestra la información relacionada con el vehículo y el motor como parte de la línea de tiempo y los reportes del dispositivo
- La integración simplifica la visibilidad a nivel de flota al consolidar ubicación y flujos FMS en una sola plataforma
- La detección de protocolos de dispositivo en Plaspy reduce la configuración necesaria al agregar rastreadores vinculados al CAN-9600
- Los mensajes FMS entrantes pueden incluirse en registros y exportarse desde la plataforma web de Plaspy

## Casos de uso típicos

- Operadores de flotas que recopilan datos FMS de camiones y autobuses para monitoreo centralizado
- Integrar la salida FMS con rastreadores GPS existentes para enriquecer los registros de seguimiento con datos del vehículo
- Acceso remoto a datos seriales FMS cuando la salida RS232 se enlaza a una unidad telemática
- Consolidar flujos de ubicación y parámetros del vehículo para supervisión operativa e informes
- Manejar flotas mixtas con diferentes estándares de bus gracias al soporte de J1939 y J1708
- Alimentar datos del vehículo a una plataforma servidor para archivado, análisis o procesos de cumplimiento

## Notas sobre disponibilidad de funciones

- Las revisiones de firmware y hardware pueden cambiar qué parámetros FMS están expuestos o cómo se formatean
- La elección de la instalación y la calidad de la conexión serial influyen en la disponibilidad de la salida RS232
- Variaciones regionales del vehículo y las implementaciones OEM de J1939/J1708 pueden afectar qué campos FMS están presentes
- La compatibilidad con rastreadores GPS específicos puede depender del firmware del rastreador y de las configuraciones de integración
- Revise la documentación del fabricante y las notas de versión para confirmar el comportamiento de una unidad en particular

## Por qué usar Plaspy con estas funciones

Usar el Gosafe CAN-9600 junto con Plaspy ofrece un camino práctico para recolectar, consolidar y aprovechar los datos FMS del vehículo junto con el rastreo de ubicación. Plaspy convierte los flujos seriales FMS reenviados por un rastreador GPS en eventos visibles, registros y reportes, de modo que usted pueda mantener supervisión sobre flotas mixtas.

Learn more about how Plaspy supports vehicle tracking and telematics on the Plaspy website https://www.plaspy.com. For the latest and most detailed device specific information including firmware behavior and manufacturer implementation details, verify specifications on the Gosafe website https://gosafesystem.com/.
