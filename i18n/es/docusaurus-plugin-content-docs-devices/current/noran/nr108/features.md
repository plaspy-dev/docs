---
slug: /noran/nr108/features
id: nr108-features
sidebar_label: Features
title: Noran - NR108 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador GPS Noran NR108 y su integración con Plaspy para monitoreo de combustible y antirrobo
keywords:
  - características Noran NR108
  - características rastreador GPS Noran NR108
  - funciones Noran NR108
  - capacidades Noran NR108
  - características Noran NR108 para Plaspy
  - monitoreo de combustible NR108
  - rastreador NR108 para moto
  - características rastreador GPS Noran
  - características antirrobo NR108
  - compatibilidad de rastreo NR108
---

# Noran - NR108: Características

Esta página presenta el contexto público de funcionalidades del rastreador GPS Noran NR108 y cómo se integra con Plaspy para seguimiento de vehículos en tiempo real, telemetría y flujos de trabajo antirrobo. Se enfoca en las capacidades prácticas del modelo y en qué esperar al integrar el NR108 en Plaspy para paneles, alertas e informes.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Cuando sea útil, esta página hace referencia a capacidades documentadas del NR108; sin embargo, usted debe verificar las especificaciones del equipo con el fabricante y confirmar el comportamiento del firmware actual tras la instalación.

## Resumen de características

El NR108 es un rastreador compacto diseñado para una instalación discreta en motocicletas y vehículos pequeños. Busca ofrecer reporte continuo de ubicación, telemetría de combustible y alertas antirrobo, minimizando el uso de datos y preservando el historial de posiciones durante interrupciones de conectividad.

- Carcasa compacta con antenas GPS y GSM internas para montaje discreto en el vehículo.
- Reportes de ubicación en tiempo real vía Internet y SMS, con fallback por LBS cuando la recepción GPS es limitada.
- Monitoreo de nivel de combustible y reportes de consumo para soportar telemetría y control de costos.
- Herramientas antirrobo como alarma por exceso de velocidad, alertas de geocercas, alarma SOS y corte remoto de motor mediante el relé suministrado.
- Batería de respaldo integrada e informe de corte de alimentación para mantener visibilidad durante interrupciones de energía.

## Funciones principales del Noran - NR108

- Rastreo en tiempo real vía reportes GPRS a Internet y SMS como canal secundario.
- Fallback por LBS para proporcionar ubicación aproximada cuando la recepción GPS disminuye.
- Telemetría de nivel de combustible y consumo para monitoreo y generación de reportes.
- Alarmas antirrobo que incluyen exceso de velocidad, geocercas y función de alarma SOS.
- Capacidad de corte remoto de motor usando el relé incluido para control de inmovilizador.
- Batería interna de respaldo y detección de corte de alimentación para continuar reportando durante cortes de energía.
- Bajo consumo de datos con paquetes de posición compactos y registro opcional en memoria flash interna para almacenamiento offline.

## Cómo funcionan estas características con Plaspy

Cuando el NR108 se conecta a Plaspy, sus actualizaciones de ubicación y telemetría alimentan el mapa en tiempo real, el motor de alertas y los módulos de reporte de Plaspy. Plaspy detecta automáticamente la mayoría de protocolos de rastreadores y consume la telemetría del dispositivo para proporcionar visibilidad operativa y registros históricos.

- Las fijaciones de posición y las ubicaciones por fallback LBS aparecen en el mapa en tiempo real de Plaspy para seguimiento continuo.
- La telemetría de combustible se integra en los informes y paneles de Plaspy para análisis de consumo y reposición.
- Eventos antirrobo como exceso de velocidad, violaciones de geocerca y alarmas SOS generan notificaciones y pueden usarse en reglas de escalamiento.
- Los informes de corte de alimentación y de batería de respaldo muestran la continuidad del dispositivo y sirven para investigar interrupciones.
- Las posiciones registradas localmente en el dispositivo se suben a Plaspy cuando se restablece la conectividad, preservando las rutas históricas.

## Casos de uso típicos

- Seguimiento de flotas de motocicletas donde se requiere un rastreador compacto y discreto para instalación oculta.
- Flotas de vehículos de reparto o de servicio pequeñas que necesitan monitoreo de combustible para controlar costos y detectar pérdidas.
- Monitoreo antirrobo con alertas inmediatas para eventos SOS, violaciones de geocerca y exceso de velocidad.
- Vehículos que experimentan cortes intermitentes de energía, donde el reporte de batería de respaldo mantiene la visibilidad.
- Aplicaciones con bajo costo de datos que se benefician de paquetes telemétricos compactos y registro local durante cortes.

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen de la versión de firmware del equipo y de opciones habilitadas por el fabricante; la disponibilidad puede variar según el firmware.
- Las revisiones de hardware y variantes regionales pueden afectar las bandas soportadas y la configuración regional, aspectos que no se detallan aquí.
- Las decisiones de instalación y el cableado influyen en el comportamiento de las alarmas, la detección de corte de alimentación y las conexiones del inmovilizador.
- Las funciones opcionales, como el registro en memoria flash interna, dependen de la configuración del dispositivo y de cómo se provea la unidad.
- Consulte siempre la documentación del fabricante para las instrucciones de instalación detalladas y las configuraciones soportadas.

## Por qué usar Plaspy con estas funciones

Combinar el NR108 con Plaspy ofrece a las organizaciones una forma práctica de convertir la telemetría de un rastreador compacto en información operativa. Plaspy consolida datos de ubicación, combustible y alarmas en vistas e informes unificados que ayudan a las flotas a reducir costos, mejorar la seguridad y mantener la continuidad del rastreo aun cuando la conectividad se interrumpe.

Conozca más sobre Plaspy en el sitio principal https://www.plaspy.com. Tenga en cuenta que las funciones del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica más reciente en el sitio del fabricante http://www.norantracker.com/ antes de la instalación o configuración final.
