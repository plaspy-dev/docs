---
slug: /concox/vg502/features
id: vg502-features
sidebar_label: Features
title: Concox - VG502 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador OBDII GNSS Concox VG502 y su integración con Plaspy para telemetría y gestión de flotas
keywords:
  - Concox VG502 características
  - rastreador GPS Concox VG502
  - rastreador OBDII VG502
  - Concox VG502 Plaspy
  - características GPS VG502
  - rastreo de vehículos OBDII
  - rastreador GNSS OBDII
  - análisis de comportamiento de conducción
  - telemetría de flotas VG502
  - rastreador para seguro basado en uso
---

# Concox - VG502 — Características

Esta página describe el contexto público de funcionalidades para el uso del rastreador OBDII GNSS Concox VG502 con Plaspy. Se centra en las capacidades del dispositivo relevantes para usuarios de Plaspy y administradores de flotas, explica cómo se integran estas funciones en los flujos de trabajo de Plaspy y destaca los beneficios prácticos para despliegue, monitorización e informes.

La disponibilidad y el comportamiento exacto de cada función pueden variar según la versión de firmware, la revisión de hardware, la implementación OBD del vehículo y la configuración del fabricante. Para detalles técnicos específicos del dispositivo, notas de firmware y las especificaciones más recientes, consulte la documentación oficial y las notas de lanzamiento de Concox.

## Resumen de características

El VG502 es un rastreador OBD-II GNSS plug-and-play diseñado para instalaciones rápidas en vehículos particulares, autos corporativos y programas de seguros basados en uso. Combina posicionamiento GNSS dual y conectividad celular con telemetría derivada del OBD y análisis del comportamiento de conducción para ofrecer información accionable sobre ubicación y estado del vehículo para la supervisión operativa.

- Factor de forma OBD-II plug-and-play para instalación rápida sin cableado fijo.
- Posicionamiento GNSS dual con GPS y BDS para obtener fijaciones de ubicación más fiables y precisión citada en condiciones típicas.
- Telemetría OBD-II que incluye kilometraje, códigos de falla, estado de ACC o encendido, consumo estimado de combustible, voltaje de batería y revoluciones del motor para una visión más completa del vehículo.
- Análisis del comportamiento de conducción que detecta maniobras bruscas y eventos de colisión para puntuaciones de seguridad y programas de seguros basados en uso (UBI).
- BLE 4.0 para configuración local, actualizaciones de firmware y soporte opcional de sensores Bluetooth para ampliar las capacidades de monitoreo.
- Alertas instantáneas por códigos de falla, colisiones, entrada y salida de geo-cercas, extracción del dispositivo y desconexión de alimentación para facilitar una respuesta oportuna.

## Características principales del Concox - VG502

- Factor de forma tipo enchufe OBD-II para despliegues rápidos en vehículos compatibles con puertos OBD-II.
- GNSS dual (GPS + BDS) para mejorar la disponibilidad de fijaciones y la precisión de la ubicación.
- Telemetría OBD completa que incluye odómetro, códigos de diagnóstico, estado de ACC o encendido, estimaciones de consumo de combustible, voltaje de batería y velocidad del motor.
- Análisis de comportamiento de conducción para detectar eventos como aceleraciones y frenadas bruscas y generar datos de seguridad del conductor.
- Soporte BLE 4.0 que permite configuración local del dispositivo, actualizaciones de firmware y sensores accesorios Bluetooth opcionales.
- Alertas e informes de eventos que cubren colisiones, entrada/salida de geo-cercas, extracción o manipulación del dispositivo, pérdida de alimentación y condiciones de fallo diagnóstico.
- Compatibilidad con protocolos OBD-II comunes para maximizar la interoperabilidad entre distintas marcas y modelos de vehículos.

## Cómo funcionan estas funcionalidades con Plaspy

Al integrarse con Plaspy, el VG502 transmite fijaciones de ubicación, telemetría OBD y reportes de eventos a la plataforma Plaspy, donde los datos se muestran en mapas en tiempo real, en informes históricos y mediante alertas configurables. Plaspy procesa los datos del dispositivo y aplica geocercas, generación de informes y análisis para convertir la información del vehículo y del conductor en datos operativos útiles.

- Ubicación en tiempo real y reproducción de recorridos basada en las fijaciones GNSS reportadas por el VG502.
- Registros de eventos en Plaspy que reflejan el estado de ACC o encendido y la segmentación de viajes para análisis de tiempo de servicio e inactividad.
- Telemetría derivada del OBD, como kilometraje y consumo de combustible, que alimenta los informes de Plaspy para monitoreo de costos y eficiencia.
- Eventos de comportamiento de conducción y colisiones presentados como alertas y cuadros de puntuación para apoyar programas de seguridad y análisis para aseguradoras.
- Indicadores de salud del dispositivo y de manipulación (pérdida de alimentación, extracción del dispositivo) visibles en Plaspy para facilitar una respuesta rápida ante incidentes.

## Casos de uso típicos

- Despliegue rápido de flota donde la instalación plug-and-play reduce tiempos de inactividad y costos de instalación.
- Programas de seguros basados en uso que utilizan telemetría OBD y análisis de comportamiento de conducción para tarificación y evaluación de riesgo.
- Programas de autos corporativos que rastrean kilometraje, consumo de combustible y diagnósticos del vehículo para cumplimiento y control de costos.
- Iniciativas de seguridad y coaching de conductores que emplean eventos DBA y el historial de viajes para mejorar la conducta al volante.
- Flujos de trabajo de disuasión y recuperación ante robo que combinan alertas de extracción del dispositivo y pérdida de alimentación con el historial de ubicaciones.
- Despliegues en flotas mixtas donde el amplio soporte de protocolos OBD ayuda a asegurar la compatibilidad entre diferentes marcas y modelos.

## Notas sobre disponibilidad de funciones

- El comportamiento y la disponibilidad de funciones pueden cambiar con actualizaciones de firmware; los fabricantes pueden habilitar o restringir campos de telemetría específicos en distintas revisiones.
- Los datos OBD-II devueltos por el vehículo dependen de la marca, modelo y ECU del vehículo; algunos parámetros pueden variar según el año y la variante regional del modelo.
- El soporte para accesorios BLE y el comportamiento de actualizaciones de firmware locales pueden diferir entre versiones de firmware y variantes regionales del producto.
- Las capacidades de geocerca, alertas y análisis son proporcionadas por Plaspy; los umbrales exactos de alerta y los formatos de informe se pueden configurar dentro de la plataforma.
- Verifique los protocolos OBD-II compatibles y las afirmaciones de rendimiento GNSS contra la documentación del vehículo y del fabricante para obtener los mejores resultados.

## Por qué usar Plaspy con estas funciones

Combinar el Concox VG502 con Plaspy ofrece una solución práctica para organizaciones que necesitan despliegues rápidos, visibilidad en tiempo real y telemetría de vehículos más detallada sin realizar cableado fijo. Plaspy transforma la transmisión de datos del VG502 en mapas en vivo, alertas basadas en eventos e informes históricos para que los equipos de operaciones, gerentes de flota y aseguradoras puedan supervisar el estado del vehículo, el comportamiento del conductor y los indicadores de mantenimiento desde una plataforma centralizada.

Para obtener más información sobre cómo Plaspy admite rastreadores como el Concox VG502, visite https://www.plaspy.com. Para las especificaciones de dispositivo, notas de firmware y documentación del fabricante más actuales, verifique los detalles con Concox en https://www.iconcox.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
