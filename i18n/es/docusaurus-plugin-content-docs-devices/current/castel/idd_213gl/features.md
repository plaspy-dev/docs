---
slug: /castel/idd_213gl/features
id: idd_213gl-features
sidebar_label: Features
title: Castel - IDD-213GL Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Castel IDD 213GL y su compatibilidad con Plaspy para rastreo y diagnóstico
keywords:
  - Características Castel IDD 213GL
  - Rastreador GPS Castel IDD 213GL
  - Características rastreador GPS Castel
  - Rastreador diagnóstico IDD 213GL
  - OBD II J1939 J1708 rastreador
  - diagnóstico vehicular Castel
  - Compatibilidad IDD 213GL Plaspy
  - gestión de flotas Castel
  - rastreo en tiempo real Castel
  - monitoreo comportamiento de conducción Castel
---

# Castel - IDD-213GL: Funciones

Esta página describe el contexto público de funcionalidades al usar el Castel IDD-213GL con Plaspy. Resalta las capacidades del dispositivo relevantes para el rastreo remoto y el diagnóstico vehicular cuando está conectado a la plataforma Plaspy, y explica cómo esas capacidades se traducen en visibilidad operativa e informes dentro de Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, la marca y modelo del vehículo, el tipo de instalación y la forma en que el fabricante implementa protocolos específicos. Utilice los detalles a continuación como un resumen práctico y consulte la documentación del fabricante para referencias técnicas específicas del equipo.

## Resumen de funciones

El IDD-213GL es un rastreador OBD inteligente que combina ubicación GPS con la recolección de datos del ECU del vehículo. Soporta un amplio conjunto de protocolos vehiculares, recopila métricas de diagnóstico y rendimiento, y entrega información sobre el comportamiento de conducción útil para la supervisión de flotas y los flujos de trabajo de servicio.

- Instalación tipo OBD plug and play para despliegues rápidos en vehículos compatibles
- Soporta OBD II/EOBD así como protocolos para vehículos pesados J1939 y J1708
- Reporte de ubicación en tiempo real combinado con datos diagnósticos como velocidad y RPM
- Recolección de códigos de falla (DTC) y datos de freeze frame para diagnóstico remoto
- Estadísticas agregadas de kilometraje y consumo de combustible para análisis de eficiencia de la flota
- Monitoreo de eventos de conducta al volante, incluyendo exceso de velocidad, aceleraciones y desaceleraciones bruscas

## Funciones principales del Castel - IDD-213GL

- Compatibilidad con protocolos OBD II, EOBD, J1939 y J1708 para soporte amplio de vehículos
- Modo de instalación plug and play diseñado para conexión rápida al puerto de diagnóstico del vehículo
- Lectura de parámetros en tiempo real como velocidad del vehículo, RPM y temperatura del refrigerante del motor
- Recuperación de códigos de diagnóstico y snapshots de freeze frame desde el ECU
- Estadísticas de kilometraje y consumo de combustible para reportes operativos
- Monitoreo del comportamiento de conducción: eventos de exceso de velocidad, aceleraciones y desaceleraciones bruscas, y detección de motor en ralentí
- Batería interna de respaldo para notificar desconexiones y mantener cierta continuidad cuando se retira la alimentación externa
- Modos adecuados para automóviles de pasajeros y vehículos pesados, para adaptarse a distintos tipos de flota

## Cómo funcionan estas funciones con Plaspy

Cuando se usa con Plaspy, el IDD-213GL envía su ubicación y datos diagnósticos al backend de Plaspy para que los equipos puedan monitorear la salud y el movimiento de los vehículos desde una interfaz central. Plaspy detecta automáticamente los protocolos compatibles del rastreador e incorpora los datos del dispositivo en vistas de mapas e informes.

- Las actualizaciones de ubicación en tiempo real y los puntos GPS almacenados aparecen en los mapas e historial de Plaspy
- Los parámetros diagnósticos y los códigos de falla se presentan como telemetría o eventos para apoyar el diagnóstico remoto
- Los eventos de comportamiento de conducción y la detección de ralentí están disponibles para supervisión y evaluación del desempeño del conductor
- Las estadísticas de kilometraje y combustible pueden revisarse en los reportes de Plaspy para análisis de utilización y costos
- Los eventos de desconexión y de encendido/apagado son visibles en Plaspy para ayudar a detectar manipulación o problemas de alimentación
- Plaspy soporta las opciones de transporte estándar y puede aceptar el tráfico del dispositivo dirigido al dominio del servidor Plaspy para su procesamiento

## Casos de uso típicos

- Equipos de gestión de flotas que rastrean ubicación y diagnóstico del motor para planificación de mantenimiento
- Talleres y concesionarios que capturan códigos de falla y datos de freeze frame durante inspecciones
- Programas de aseguradoras que requieren datos de comportamiento de conducción y kilometraje para evaluación de riesgos y telemática
- Flotas mixtas que incluyen vehículos de pasajeros y pesados usando el mismo modelo de dispositivo en distintos activos
- Monitoreo remoto del rendimiento del vehículo para priorizar reparaciones y reducir tiempos de inactividad
- Reportes operativos donde consumo de combustible y estadísticas de kilometraje informan la programación y el ruteo

## Notas sobre disponibilidad de funciones

- Algunos diagnósticos y parámetros dependen de que el ECU del vehículo exponga esos valores vía OBD o protocolos para vehículos pesados; la disponibilidad puede variar según marca y modelo
- La versión de firmware y las revisiones de hardware pueden cambiar qué elementos de datos se reportan y cómo se detectan los eventos
- El método de instalación, como conexión directa OBD versus una disposición de cableado diferente, puede afectar qué señales están disponibles
- Las variantes regionales de red y las configuraciones telemáticas pueden influir en los métodos y comportamiento de transmisión de datos
- Verifique siempre las notas de la versión de firmware del dispositivo y la documentación del fabricante para obtener el comportamiento más reciente y la lista de parámetros soportados

## Por qué usar Plaspy con estas funciones

Usar el Castel IDD-213GL con Plaspy ofrece una combinación práctica de diagnóstico a nivel vehicular y rastreo de ubicación en una sola fuente de datos. Esta integración ayuda a las organizaciones a obtener visibilidad consolidada sobre la salud y el movimiento de sus vehículos, permitiendo una triage más rápida de fallas, decisiones de mantenimiento mejor fundamentadas y una supervisión operativa más eficiente en flotas mixtas.

Para conocer más sobre cómo Plaspy puede procesar y presentar datos de dispositivos como el IDD-213GL, visite https://www.plaspy.com. Para la información técnica más actualizada, notas de firmware y detalles de implementación del dispositivo, verifique la documentación del fabricante en http://www.castelecom.com/ ya que las funcionalidades y el comportamiento del firmware pueden cambiar con el tiempo.
