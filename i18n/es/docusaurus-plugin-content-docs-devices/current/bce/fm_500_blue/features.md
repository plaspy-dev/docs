---
slug: /bce/fm_500_blue/features
id: fm_500_blue-features
sidebar_label: Features
title: BCE - FM-500 Blue Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador GPS BCE FM-500 Blue y su integración con Plaspy para seguimiento de flotas y activos
keywords:
  - características BCE FM-500 Blue
  - rastreador GPS FM-500 Blue
  - BCE FM-500 Blue Plaspy
  - características FM-500 Blue Plaspy
  - rastreador GPS BCE FM-500 Blue
  - seguimiento de flotas FM-500 Blue
  - FMS CAN J1939 FM-500 Blue
  - OBDII FM-500 Blue
  - rastreador GPS GLONASS
  - seguimiento vehicular BCE
---

# BCE - FM-500 Blue: Características

Esta página ofrece una visión pública a nivel de características del BCE FM-500 Blue y cómo sus capacidades se integran con Plaspy. Está dirigida a gestores de flotas, integradores y propietarios de activos para que comprendan las funciones prácticas que el FM-500 Blue puede aportar al usarse con Plaspy para localización, monitoreo y recopilación básica de datos del vehículo.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y la implementación del fabricante. Cuando resulte útil, esta página hace referencia a capacidades generales del dispositivo; siempre verifique la presencia y el comportamiento concreto en su unidad y firmware consultando la documentación y las notas de la versión del fabricante.

## Visión general de funciones

El FM-500 Blue es un dispositivo de seguimiento de objetos y vehículos basado en posicionamiento GNSS y comunicación celular. Proporciona actualizaciones continuas de ubicación y dispone de entradas e interfaces adicionales para capturar el estado del vehículo o activo; además, está diseñado para una configuración flexible que se adapte a distintos escenarios de seguimiento.

- Posicionamiento GNSS con información de ubicación, velocidad y rumbo, adecuado para seguimiento de vehículos y activos.
- Transferencia de datos mediante red celular GSM para reportar posición y eventos a un servidor de monitoreo central.
- Entradas digitales y analógicas para conectar sensores externos y vigilar señales discretas.
- Salidas para activación remota de equipos externos o señalización basada en eventos.
- Interfaces compatibles con FMS CAN J1939 y OBDII para lectura de datos del bus del vehículo cuando están soportadas.

## Funciones principales del BCE - FM-500 Blue

- Posicionamiento por GPS y GLONASS para ofrecer ubicación precisa, velocidad y dirección.
- Conectividad GSM para transmitir reportes de rastreo a través de la red móvil.
- Entradas digitales para detectar eventos binarios externos y señales del vehículo.
- Entradas analógicas para monitoreo de valores sencillos de sensores analógicos cuando se requiera.
- Salidas configurables para controlar o activar dispositivos externos de forma remota.
- Capacidad de lectura FMS CAN J1939 para acceder a parámetros del bus del vehículo en unidades compatibles.
- Soporte OBDII y CAN para integraciones en vehículos ligeros cuando exista la interfaz.
- Batería interna de respaldo para mantener continuidad de energía durante interrupciones breves.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe los reportes de los dispositivos compatibles y muestra la ubicación, eventos y datos del vehículo en sus herramientas de monitoreo y reporte. Cuando un FM-500 Blue está configurado para reportar a Plaspy, la plataforma puede mostrar trazas de posición y presentar las entradas y ciertos datos del bus del vehículo junto a la información geoespacial estándar.

- La posición, velocidad y rumbo reportados por el dispositivo aparecen en los mapas de Plaspy y en el historial de viajes.
- Los eventos de entradas digitales y analógicas pueden registrarse y mostrarse como eventos o entradas en los paneles del dispositivo.
- Las salidas pueden usarse operativamente y su estado o activaciones pueden quedar registradas en Plaspy cuando el dispositivo las reporte.
- Los datos FMS CAN J1939 y OBDII leídos por el dispositivo pueden reenviarse a Plaspy como parámetros del vehículo cuando están disponibles y mapeados por la integración.
- Plaspy detecta automáticamente muchos protocolos de rastreadores y acepta reportes de dispositivos al dominio del servidor Plaspy d.plaspy.com usando TCP o UDP según la configuración del dispositivo.
- La configuración y los umbrales en el dispositivo determinan qué datos envía el rastreador a Plaspy y con qué frecuencia reporta.

## Casos de uso típicos

- Seguimiento de vehículos de flota y registro de rutas para supervisión operativa y despacho.
- Monitoreo remoto de equipos o activos que se mueven entre distintos sitios.
- Recolección de parámetros básicos del bus del vehículo desde FMS CAN J1939 u OBDII cuando están soportados, para diagnóstico y reportes de uso de flota.
- Activación remota de salidas para tareas de control simples o para señalizar equipos externos.
- Integración de señales de sensores discretos en un flujo central de monitoreo mediante entradas digitales y analógicas.
- Soporte de batería de respaldo de corta duración para mantener el reporte durante pérdidas breves de alimentación.

## Notas sobre disponibilidad de funciones

- La presencia de funciones depende de la revisión exacta del hardware FM-500 Blue y del nivel de firmware instalado en el dispositivo.
- La funcionalidad del bus del vehículo, como acceso a FMS CAN J1939 y OBDII, requiere interfaces vehiculares compatibles y una instalación y cableado adecuados.
- El comportamiento de entradas y salidas puede verse afectado por el cableado de instalación, la compatibilidad de sensores externos y la configuración aplicada por distribuidores o integradores.
- Diferencias regionales en las redes celulares y la provisión de la SIM influyen en la fiabilidad con que el dispositivo puede reportar a Plaspy a través de GSM.
- Plaspy recibe e interpreta los datos que el dispositivo está configurado para enviar; revise la configuración del dispositivo cuando sea necesario garantizar visibilidad de eventos o telemetría específica.

## Por qué usar Plaspy con estas funciones

Usar el FM-500 Blue con Plaspy integra ubicación, visibilidad de eventos y datos del vehículo en un entorno de monitoreo centralizado donde los equipos operativos pueden ver posiciones en tiempo real, revisar historial y actuar sobre eventos de entradas. El manejo de dispositivos y el mapeo de parámetros reportados por Plaspy facilitan la combinación de posicionamiento GNSS, entradas digitales y analógicas y datos soportados del bus del vehículo en una única vista operativa para la gestión de flotas y activos.

To learn more about using Plaspy with compatible trackers and to review platform capabilities, visit https://www.plaspy.com. For the most current device specific specifications, firmware behavior, and manufacturer guidance please verify details on the official BCE website http://www.bce.en/ .
