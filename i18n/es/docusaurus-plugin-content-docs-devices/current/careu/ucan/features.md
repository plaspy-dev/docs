---
slug: /careu/ucan/features
id: ucan-features
sidebar_label: Features
title: CAREU - UCAN Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador CAREU UCAN y su compatibilidad con Plaspy para telemetría OBD II y rastreo en tiempo real
keywords:
  - funciones CAREU UCAN
  - rastreador GPS CAREU UCAN
  - rastreador OBD II UCAN
  - rastreador compatible Plaspy
  - telemetría vehicular UCAN
  - eventos acelerómetro UCAN
  - rastreador UCAN 4G LTE
  - UCAN Bluetooth 4.0
  - seguimiento de flotas UCAN
  - telemetría OBD II para Plaspy
---

# CAREU - UCAN - Características

Esta página ofrece una visión pública y centrada en las funciones del rastreador CAREU UCAN y la forma en que sus capacidades se integran con Plaspy. Está dirigida a gerentes de flota, integradores y evaluadores técnicos para que comprendan las funciones prácticas del UCAN al reportar ubicación, telemetría del vehículo y eventos en la plataforma Plaspy.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y cómo se instala o configura el equipo. Para detalles actualizados por dispositivo consulte la documentación y las notas de versión de firmware proporcionadas por CAREU.

## Resumen de funciones

El CAREU UCAN es un rastreador OBD-II plug-and-play pensado para despliegues rápidos y visibilidad continua de la flota. Combina posicionamiento GNSS, datos OBD-II del vehículo, detección de eventos y conectividad celular para que las flotas capturen tanto la ubicación como la telemetría operativa sin cableado complejo.

- Instalación OBD-II plug-and-play para despliegues rápidos y tiempo mínimo de instalación.
- Reporte de posición GNSS en tiempo real combinado con telemetría OBD-II como odómetro, RPM, velocidad, nivel de combustible, horas de trabajo y códigos de diagnóstico DTC.
- Conectividad 4G LTE con retroceso a 3G y 2G donde esté soportado, además de eSIM opcional para provisión y roaming flexibles.
- Acelerómetro integrado de 6 ejes para detectar aceleraciones bruscas, frenadas intensas, impactos y otros eventos de conducción útiles en análisis de seguridad.
- Gran memoria de registro interna para preservar el historial de posiciones durante interrupciones de red y sincronizarse con Plaspy cuando se restablece la conectividad.
- Bluetooth 4.0 (variante 4G) para extender la telemetría con sensores y accesorios Bluetooth compatibles.

## Funciones principales del CAREU - UCAN

- Interfaz OBD-II plug-and-play para conexión directa al vehículo y acceso a telemetría.
- Reporte de ubicación GNSS para seguimiento en vivo y rutas históricas.
- Captura de datos OBD-II que incluye kilometraje/odómetro, RPM, velocidad, nivel de combustible, horas de trabajo y códigos DTC de diagnóstico.
- Conectividad celular con 4G LTE Cat.1 / Cat.M y soporte de retroceso a 3G/2G según la variante; provisión de eSIM opcional donde esté disponible.
- Acelerómetro integrado de 6 ejes para detección de eventos como frenadas bruscas, aceleraciones intensas, impactos y vuelcos.
- Almacenamiento interno de registros dimensionado para grabaciones extensas offline (dependiente de la variante).
- Bluetooth 4.0 disponible en la variante 4G para integración de accesorios y sensores.
- Soporte para configuración remota y actualizaciones FOTA de firmware vía FTP, además de accesorios opcionales como RS-232, E/S digitales y relé inalámbrico en las variantes que lo soporten.

## Cómo funcionan estas funciones con Plaspy

Al instalarse, el UCAN envía posición GNSS y telemetría OBD a Plaspy para ofrecer visibilidad centralizada de la flota. Plaspy reconoce automáticamente protocolos de rastreadores compatibles y consolida los datos para monitoreo, alertas e informes.

- Las actualizaciones de ubicación en vivo y las rutas históricas son visibles en Plaspy para seguimiento y análisis de rutas.
- Estado del motor e ignición, además de diagnósticos OBD-II incluyendo códigos DTC, RPM y velocidad, aparecen en los paneles de Plaspy para flujos de trabajo de mantenimiento y cumplimiento.
- Datos de nivel de combustible y odómetro capturados por OBD-II pueden utilizarse en los informes de Plaspy para el control de combustible y la planificación operativa.
- Eventos detectados por el acelerómetro, como frenadas bruscas o impactos, se muestran como eventos para puntuaciones de conductor y alertas de seguridad.
- Los datos de sensores Bluetooth de la variante 4G pueden integrarse en Plaspy cuando la telemetría del sensor esté configurada.
- Los registros almacenados en el dispositivo se sincronizan con Plaspy cuando se restablece la conectividad de red, preservando la continuidad del historial de posiciones.

## Casos de uso típicos

- Despliegue rápido de flotas donde la instalación OBD-II plug-and-play reduce el tiempo fuera de servicio para vehículos en flotas mixtas.
- Monitoreo de flota en tiempo real y gestión de rutas para operaciones de reparto, servicios y logística.
- Programas de comportamiento del conductor y seguridad que usan la detección de eventos por acelerómetro para apoyar la capacitación y la revisión de incidentes.
- Planificación de mantenimiento y diagnóstico utilizando telemetría OBD-II y códigos DTC para priorizar intervenciones.
- Detección de robo y monitoreo de seguridad mediante reporte continuo de ubicación y preservación de registros offline para análisis de recuperación.
- Extensiones con sensores Bluetooth o accesorios de E/S opcionales para sensores operativos o integraciones específicas.

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen de la variante; Bluetooth y ciertas interfaces de accesorios están disponibles solo en las variantes 4G especificadas.
- La capacidad de memoria de registros y el comportamiento de retroceso celular difieren entre variantes 4G y 3/2G; verifique la etiqueta del equipo y los detalles de la variante.
- La configuración remota y FOTA son compatibles, pero las opciones y flujos pueden cambiar con las versiones de firmware.
- Los accesorios opcionales como RS-232, E/S digitales y relé inalámbrico no son estándar en todas las unidades y requieren aprovisionamiento y configuración separados.
- El soporte celular regional y la disponibilidad de eSIM dependen de acuerdos con operadores y de la variante enviada para ese mercado.

## Por qué usar Plaspy con estas funciones

Combinar el CAREU UCAN con Plaspy proporciona a los equipos de flota una forma directa de unificar ubicación del vehículo, telemetría OBD-II y detección de eventos en una sola plataforma de gestión. Plaspy consolida reportes y alertas para que los equipos de operaciones, mantenimiento y seguridad actúen sobre datos de ubicación y estado del vehículo sin tener que manejar múltiples sistemas. El factor de forma plug-and-play del UCAN y su almacenamiento interno de registros reducen la fricción de instalación y ayudan a mantener la continuidad cuando la cobertura celular es inconsistente.

Para obtener más información sobre Plaspy y cómo rastreadores compatibles como el CAREU UCAN se integran con nuestra plataforma visite https://www.plaspy.com. Verifique las capacidades más recientes del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante en las páginas oficiales de CAREU en https://www.systech-iot.com/ ya que las funciones y el firmware pueden cambiar con el tiempo.
