---
slug: /queclink/gv355ceu/features
id: gv355ceu-features
sidebar_label: Features
title: QuecLink - GV355CEU Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador QuecLink GV355CEU y su integración con Plaspy para flotas y tacógrafos
keywords:
  - QuecLink GV355CEU
  - funciones GV355CEU
  - rastreador GPS QuecLink
  - soporte tacógrafo GV355CEU
  - descarga archivo DDD
  - rastreador telemetría vehicular
  - rastreador doble CAN OBDII
  - sensores BLE 1-Wire
  - rastreador compatible Plaspy
  - funciones seguimiento de flotas
---

# QuecLink - Funciones del GV355CEU

Esta página ofrece un resumen público y orientado a funciones del QuecLink GV355CEU cuando se utiliza con Plaspy. Describe las capacidades del dispositivo que Plaspy puede mostrar a gerentes de flota, equipos de cumplimiento y personal de operaciones, sin entrar en detalles de configuración privada o implementaciones sensibles.

La disponibilidad y el comportamiento exacto de cada función dependen de la versión de firmware, la revisión de hardware, las variantes regionales del modelo y la manera en que se instala el rastreador. Los fabricantes suelen actualizar firmware y conjuntos de funciones, por lo que considere esta página como un resumen práctico más que una especificación técnica exhaustiva.

## Resumen de características

El GV355CEU es un rastreador vehicular LTE de alta precisión diseñado para la gestión de flotas exigente y el cumplimiento normativo. Al conectarlo a Plaspy, el dispositivo proporciona informes continuos de ubicación, agregación de telemetría del vehículo y recuperación remota de tacógrafo para ayudar a centralizar los flujos de trabajo de monitoreo y cumplimiento.

- Informes de ubicación GPS en tiempo real con precisión GNSS autónoma inferior a 2 metros para enrutamiento y geocercas precisas.
- Descarga remota de archivos DDD de tacógrafo para soportar reportes de horas de conducción y cumplimiento normativo.
- Amplio soporte de interfaces vehiculares, incluyendo doble CAN, J1708, K‑Line y OBDII para captura de parámetros de diagnóstico y motor.
- Soporte para BLE 5.2 y sensores 1‑Wire para identificación de conductor y monitoreo de temperatura o accesorios.
- Conjunto configurable de eventos y alarmas, incluyendo geocercas, alarma de remolque, conducción brusca y alertas basadas en entradas para flujos de trabajo de robo y seguridad.

## Características principales de QuecLink - GV355CEU

- Receptor GNSS de alta precisión que soporta posicionamiento multiconstelación con precisión autónoma inferior a 2 metros.
- Conectividad celular LTE Cat 1 con fallback a 2G para reportes continuos en distintas condiciones de cobertura.
- Soporte remoto de tacógrafo con recuperación de archivos DDD para centralizar los datos de horas de conductor y cumplimiento.
- Doble CAN además de J1708, K‑Line y OBDII para acceso a telemetría del vehículo y parámetros de diagnóstico.
- Interfaces BLE 5.2 y 1‑Wire para sensores externos y flujos de trabajo de identificación de conductor.
- Múltiples entradas digitales y analógicas y una salida con enclavamiento configurable para alarmas y acciones de control remoto.
- Antenas internas y batería de respaldo interna para mantener los reportes durante breves interrupciones de alimentación.

## Integración con Plaspy

Plaspy recibe la telemetría y los eventos de estado del GV355CEU para presentar una vista unificada de la ubicación de la flota, el estado del vehículo y las evidencias de cumplimiento. Plaspy detecta automáticamente los protocolos compatibles del rastreador y mapea los eventos reportados en la plataforma para que los equipos puedan actuar sobre los datos sin necesidad de parseo manual.

- Seguimiento de posición en vivo e histórico mostrado en los mapas y herramientas de reproducción de Plaspy para visibilidad operativa.
- Los archivos DDD de tacógrafo recibidos desde el dispositivo se almacenan y presentan para flujos de trabajo de cumplimiento y generación de informes.
- La telemetría del vehículo proveniente de CAN y OBDII está disponible en los paneles de Plaspy cuando esos datos son expuestos por el vehículo, apoyando diagnósticos y planificación de mantenimiento.
- Entradas del dispositivo y eventos de alarma, como violaciones de geocerca, alarmas de remolque o disparadores configurables de sensores, generan alertas y pueden activar reglas y notificaciones en Plaspy.
- Los datos de sensores BLE y 1‑Wire y los eventos de identificación de conductor se muestran junto con la ubicación y el estado del vehículo para una gestión integrada de carga y personal.

## Casos de uso típicos

- Gestión de cumplimiento de flotas con recuperación automática de archivos DDD de tacógrafo y consolidación de reportes de horas de conducción.
- Disuasión y recuperación ante robo mediante geocercas, detección de remolque y flujos de control remoto de salidas.
- Telemetría en flotas mixtas de vehículos pesados y ligeros usando doble CAN y OBDII para análisis de mantenimiento y eficiencia de combustible.
- Monitoreo de cadena de frío o carga combinando ubicación GPS con lecturas de temperatura de sensores 1‑Wire y BLE.
- Identificación de conductor y monitoreo de comportamiento para apoyar conciliación de nóminas y programas de formación en seguridad.

## Notas sobre disponibilidad de funciones

- Las funciones exactas y las opciones de menú dependen de la versión de firmware del rastreador y de la revisión de hardware específica instalada en el vehículo.
- Algunas señales de telemetría del vehículo solo están disponibles si el vehículo las expone; la disponibilidad de datos CAN y OBDII varía según la marca y el modelo.
- Variantes regionales o requisitos del operador móvil pueden afectar el soporte de bandas celulares y la certificación para LTE o fallback 2G.
- Una correcta configuración e instalación influye en el comportamiento de alarmas y las funciones de control remoto; verifique las guías de instalación para el cableado y el mapeo de E/S.
- Para conocer las funcionalidades compatibles más recientes y el historial de cambios de firmware, consulte la documentación oficial de QuecLink y las notas de la versión.

## Por qué usar Plaspy con estas funciones

Usar el GV355CEU con Plaspy centraliza la ubicación, la telemetría del vehículo y los artefactos de cumplimiento en una sola plataforma, facilitando que los equipos de operaciones, seguridad y cumplimiento vean el panorama completo. Plaspy traduce los eventos del dispositivo en alertas accionables, reportes programados y registros históricos para que las organizaciones reduzcan el trabajo manual, mejoren la supervisión de seguridad y optimicen la presentación de informes regulatorios.

To learn more about Plaspy and how it supports Queclink devices visit https://www.plaspy.com. For the most current device specific feature details, firmware behavior and manufacturer guidance verify information on the Queclink website https://www.queclink.com/
