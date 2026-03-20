---
slug: /okb_tehnoavtomatika/mta_12/features
id: mta_12-features
sidebar_label: Features
title: OKB Tehnoavtomatika - MTA-12 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador GPS OKB Tehnoavtomatika MTA-12 y su compatibilidad con Plaspy
keywords:
  - OKB Tehnoavtomatika MTA-12
  - características MTA-12
  - rastreador GPS MTA-12
  - MTA-12 CAN FMS
  - control de combustible MTA-12
  - monitoreo encendido MTA-12
  - rastreo vehicular MTA-12
  - rastreador compatible Plaspy
  - gestión de flotas MTA-12
  - funciones GPS Plaspy
---

# OKB Tehnoavtomatika - Características del MTA-12

Esta página ofrece un resumen público de las capacidades del rastreador OKB Tehnoavtomatika MTA-12 y cómo estas funciones se integran con Plaspy. Aquí encontrará las funcionalidades prácticas y el valor operativo esperado al desplegar el MTA-12 con Plaspy para la supervisión de vehículos y equipos.

La disponibilidad exacta de funciones depende de la versión de firmware del equipo, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para límites técnicos precisos, comportamiento de firmware, guías de instalación y variantes regionales consulte la documentación oficial del fabricante.

## Resumen de características

El MTA-12 es una unidad de rastreo GPS flexible con soporte para integración con buses de vehículo y múltiples métodos de reporte. Está pensado para transporte y equipos especializados donde resultan valiosos tanto la ubicación como el estado de la máquina.

- Receptor GPS de alta sensibilidad con 50 canales para reportes de posición fiables en distintos entornos
- Interfaz Controller Area Network (CAN) para recibir datos de la máquina y datos estilo FMS
- Control de combustible y monitoreo del estado de encendido cuando esos parámetros se exponen al dispositivo vía CAN
- Varias opciones de notificación y reporte, incluyendo reporte por internet vía GPRS y SMS como canal alternativo
- Amplio rango de alimentación vehicular y batería recargable integrada para respaldo básico y apagado controlado
- Caja compacta y perfil físico adecuados para instalación en el interior de vehículos y equipos especializados

## Funciones principales del OKB Tehnoavtomatika - MTA-12

- Receptor GPS de 50 canales y alta sensibilidad para obtener posiciones precisas
- Interfaz de bus CAN para recopilar datos de máquina o información FMS en vehículos compatibles
- Capacidad de reporte de control de combustible cuando la telemetría está disponible por CAN
- Monitoreo del estado de encendido reportado vía CAN para detección de uso y eventos
- Múltiples vías de reporte, incluida la comunicación por internet vía GPRS y notificaciones por SMS
- Soporte para un amplio rango de tensión de entrada DC para uso en distintos tipos de vehículos y equipos
- Batería recargable integrada para continuidad temporal de energía
- Carcasa compacta adecuada para instalación en vehículo

## Cómo estas funciones trabajan con Plaspy

Cuando se configura para reportar a través de la red móvil de datos, el MTA-12 puede enviar posición y telemetría proveniente del CAN a Plaspy, de modo que la plataforma presente conjunto la ubicación y el estado de la máquina. Plaspy detecta automáticamente el protocolo del dispositivo y pone a disposición los datos recibidos para visualización y reporte.

- El reporte por internet vía GPRS desde el rastreador puede dirigirse a los servidores de Plaspy para ubicación en tiempo real e historial
- Valores derivados del CAN, como combustible y estado de encendido, aparecen en los paneles y listas de eventos de Plaspy cuando el firmware del dispositivo los envía
- Plaspy detecta automáticamente los protocolos de rastreadores compatibles para simplificar la incorporación del MTA-12
- Las trayectorias históricas, vistas de posición en vivo y líneas de tiempo de eventos en Plaspy ayudan a correlacionar el movimiento del vehículo con eventos reportados por CAN
- El SMS sigue siendo un canal de notificación alternativo, independiente del reporte a Plaspy, y puede usarse para alertas directas a números configurados en el dispositivo

## Casos de uso típicos

- Seguimiento de ubicación de flotas y historial de rutas para vehículos de transporte
- Supervisión de equipos especializados donde se requiere el estado de la máquina desde CAN
- Control y supervisión del consumo de combustible y reportes básicos de estado cuando está disponible vía CAN
- Detección de eventos de encendido y apagado para auditoría operativa
- Monitoreo remoto de activos con variabilidad de alimentación usando el amplio rango de entrada y la batería de respaldo

## Notas sobre disponibilidad de funciones

- Los campos de datos CAN y los parámetros exactos de combustible o encendido dependen de la implementación del bus del vehículo y de qué señales se exponen al rastreador
- La versión de firmware y la revisión de hardware pueden cambiar qué campos de telemetría se reportan y cómo se codifican
- El método de instalación y el cableado influyen en si el control de combustible y el estado de encendido están disponibles para el equipo
- Las variantes regionales y la asignación de bandas celulares pueden afectar la disponibilidad de GPRS y el comportamiento de reporte
- Siempre confirme las capacidades exactas de su unidad según la documentación del fabricante para el firmware y la revisión instalados

## Por qué usar Plaspy con estas funciones

Plaspy centraliza ubicación y telemetría de rastreadores compatibles para que las organizaciones obtengan mayor visibilidad operativa. Cuando el MTA-12 suministra datos GPS y datos de máquina derivados del CAN, Plaspy puede mostrar ubicación, líneas de tiempo de eventos y telemetría básica para ayudar a los equipos a comprender el uso del vehículo y responder ante anomalías.

Learn more about how Plaspy supports device visibility and fleet oversight at https://www.plaspy.com. Device features, firmware behavior, and manufacturer implementation can change over time so verify the latest device specific details with the manufacturer at http://www.okb-ta.ru/
