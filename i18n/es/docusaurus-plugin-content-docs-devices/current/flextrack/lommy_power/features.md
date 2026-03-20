---
slug: /flextrack/lommy_power/features
id: lommy_power-features
sidebar_label: Features
title: Flextrack - Lommy Power Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador GPS Flextrack Lommy Power compatible con Plaspy para seguimiento de equipos pesados y telemetría
keywords:
  - Características Flextrack Lommy Power
  - Rastreador GPS Flextrack Lommy Power
  - Compatibilidad Lommy Power Plaspy
  - Capacidades Lommy Power
  - Rastreador GPS para maquinaria pesada
  - Seguimiento de horas de funcionamiento
  - Rastreador GNSS multiconstelación
  - Rastreador con alimentación cableada
  - Rastreador con detección de movimiento
  - Seguimiento de equipos de construcción
---

# Flextrack - Funciones de Lommy Power

Esta página ofrece una visión pública de las funciones del rastreador GPS Flextrack Lommy Power y cómo se presentan sus capacidades cuando se integra con Plaspy. Está dirigida a operadores, gerentes de flota e integradores para que usted pueda comprender las funciones prácticas del equipo y el valor que aporta a la monitorización centralizada en Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. La información a continuación se basa en la descripción del dispositivo proporcionada por Flextrack y pretende ser una guía general, no un sustituto de la documentación oficial del fabricante.

## Resumen de funciones

El Lommy Power es un rastreador cableado y compacto diseñado para la supervisión continua y en tiempo real de maquinaria y equipos pesados en entornos exigentes. Combina un hardware robusto, GNSS multiconstelación y conectividad celular para ofrecer localización persistente y telemetría básica a plataformas de flota como Plaspy.

- Funcionamiento continuo alimentado desde la batería de la máquina para monitoreo a largo plazo sin mantenimiento de baterías internas.
- Posicionamiento GNSS multiconstelación para obtener fijaciones de ubicación confiables en distintos entornos.
- Conectividad celular con LTE y retroceso a 2G para mantener el flujo de datos en áreas con cobertura variable.
- Detección de movimiento mediante acelerómetro integrado para activar reportes de movimiento y alertas por robo.
- Detección de encendido y entradas auxiliares, además de medición de corriente de batería para registrar horas de funcionamiento y eventos de inicio/parada.

## Características principales de Flextrack - Lommy Power

- Entrada de alimentación cableada compatible con voltajes de batería de vehículos y equipos para permitir el seguimiento permanente.
- Carcasa con clasificación IP65 y formato compacto adecuado para instalaciones exteriores e industriales.
- Soporte GNSS multiconstelación incluyendo GPS, GLONASS, GALILEO, BEIDOU y QZSS con asistencia SBAS para mejorar la precisión de posicionamiento.
- Comunicaciones celulares con LTE Cat M1 y retroceso quad band 2G, con soporte para reportes vía UDP y SMS.
- Lógica de reportes con gestión de energía configurable que reduce transmisiones cuando el equipo está inactivo y aumenta la frecuencia durante movimiento o eventos de encendido.
- Acelerómetro de 3 ejes integrado para detección de movimiento y generación de reportes activados por movimiento.
- Detección de encendido y entradas auxiliares, además de medición de corriente de batería para calcular horas de operación y utilización.
- Memoria flash interna para almacenamiento temporal cuando la conexión celular no está disponible.

## Cómo funcionan estas funciones con Plaspy

Cuando los dispositivos Lommy Power envían GNSS y telemetría a Plaspy, la plataforma normaliza los datos entrantes y los pone a disposición para visualización, reglas y generación de informes. Plaspy maneja automáticamente los protocolos comunes de rastreadores, de modo que la telemetría del dispositivo aparece en la plataforma sin necesidad de seleccionar manualmente un protocolo.

- Actualizaciones de ubicación en tiempo real y reproducción del historial en los mapas de Plaspy basadas en reportes GNSS del dispositivo.
- Eventos de inicio y parada derivados de las entradas de encendido y auxiliares que alimentan informes de utilización y mantenimiento.
- Horas de funcionamiento calculadas a partir de la medición de corriente de la batería, disponibles para facturación y programación de servicios.
- Reportes activados por movimiento y eventos del acelerómetro que generan flujos de trabajo de geocercas y alertas por robo en Plaspy.
- Modos de reporte de baja y alta frecuencia reflejados en Plaspy para que usted pueda equilibrar la granularidad de la telemetría y el consumo de datos.

## Casos de uso típicos

- Monitoreo continuo de maquinaria de construcción, agrícola y forestal para rastrear ubicación y utilización.
- Supervisión antirrobo con detección de movimiento, alertas de geocerca y notificaciones rápidas a través de Plaspy.
- Reportes de horas de operación para facturación, cobro y programación de mantenimiento preventivo.
- Sitios remotos donde se requiere hardware robusto y amplia tolerancia a temperaturas.
- Integraciones donde la telemetría de Lommy Power se combina con otros datos de sensores en Plaspy para una visibilidad más completa del activo.

## Notas sobre disponibilidad de funciones

- Las diferencias de firmware pueden cambiar intervalos de reporte, entradas soportadas y el formato de telemetría; verifique las notas de versión del firmware para conocer el comportamiento exacto.
- Las revisiones de hardware o variantes regionales celulares pueden alterar las bandas soportadas o las clasificaciones ambientales.
- El tipo de instalación y el cableado determinan qué entradas (encendido, auxiliar, medición de corriente) están disponibles y cómo se calculan las horas de funcionamiento.
- La configuración o aprovisionamiento por parte del fabricante puede habilitar o deshabilitar funciones específicas como la sensibilidad al movimiento o los modos de reporte.
- Para cualquier implementación crítica, consulte la hoja de datos y la guía de instalación más recientes del fabricante para obtener especificaciones detalladas.

## Por qué usar Plaspy con estas funciones

Usar Lommy Power con Plaspy proporciona visibilidad continua de la ubicación, el movimiento y la utilización de equipos pesados sin la necesidad de ciclos de reemplazo de baterías internas. Plaspy consolida la telemetría de los dispositivos, aplica reglas y geocercas configurables, y genera informes que ayudan a los equipos a gestionar flotas, planificar mantenimiento y responder ante robos o usos indebidos.

Para obtener más información sobre cómo Plaspy puede presentar y actuar sobre la telemetría de Lommy Power visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y guía de instalación consulte con el fabricante en https://flextrack.dk ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
