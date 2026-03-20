---
slug: /meitrack/t622e_f9_t622g_f9/features
id: t622e_f9_t622g_f9-features
sidebar_label: Features
title: Meitrack - T622E-F9/T622G-F9 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Meitrack T622E-F9 y T622G-F9 y su integración con Plaspy para gestión de flotas
keywords:
  - Funciones Meitrack T622E-F9
  - Funciones Meitrack T622G-F9
  - Rastreador Meitrack T622
  - Rastreador GPS T622E-F9
  - Rastreador GPS T622G-F9
  - Compatibilidad Meitrack Plaspy
  - Funciones rastreador GPS vehicular
  - Rastreador para gestión de flotas
  - Rastreador GPS Iridium SBD
  - Rastreador GPS con CAN bus
---

# Meitrack - Características del T622E-F9/T622G-F9

En esta página se presenta un resumen público de las capacidades del Meitrack T622E-F9 y T622G-F9 cuando se integran con Plaspy. El enfoque está en las funcionalidades prácticas, los tipos de datos que el dispositivo puede generar y cómo suelen reflejarse esas capacidades en una implementación de Plaspy para gestión de flotas y monitoreo de activos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el modelo regional, las opciones de instalación y la implementación del fabricante. Para especificaciones técnicas precisas y notas de compatibilidad más recientes, consulte la documentación del fabricante además de la guía de Plaspy.

## Resumen de funciones

Los Meitrack T622E-F9 y T622G-F9 son rastreadores orientados a vehículos, diseñados para mantener la localización en áreas con cobertura mixta. Combinan posicionamiento GNSS de alta sensibilidad, conectividad celular multibanda y una ruta de respaldo por satélite Iridium SBD para preservar la visibilidad del activo donde las redes terrestres pueden ser inestables. Sus interfaces para vehículos y soporte de periféricos permiten telemetría y eventos más completos, útiles para operaciones de flota.

- Posicionamiento global con GNSS de alta sensibilidad para actualizaciones precisas y reconstrucción de rutas.
- Conectividad celular multibanda con conmutación automática a satélite para asegurar la entrega de mensajes en zonas de baja cobertura.
- Telemática vehicular mediante CAN bus y puertos seriales para reportar estado del motor y del vehículo a Plaspy.
- Soporte de periféricos como RFID, sensores ultrasónicos de combustible, relés y disparadores de cámara RS232 para reportes basados en eventos.
- Gestión remota de firmware y configuración mediante OTA y aprovisionamiento por Wi‑Fi para facilitar el mantenimiento de flotas.

## Funciones principales del Meitrack - T622E-F9/T622G-F9

- Receptor GNSS de alta sensibilidad para reportes de posición fiables y seguimiento histórico.
- Módem celular multibanda con respaldo por satélite Iridium SBD para conservar la conectividad fuera del alcance GSM.
- Puertos de integración vehículo como CAN bus, RS232 y RS485 para telemetría y datos personalizados.
- Soporte de periféricos para identificación de conductor por RFID, sensores ultrasónicos de nivel de combustible, relés para control de inmovilizadores y disparadores de cámara RS232.
- Capacidad de actualización OTA/FOTA y configuración por Wi‑Fi para aprovisionamiento y despliegue remoto de firmware.
- Registro local y buffering para almacenar posición y telemetría cuando no es posible transmitir de inmediato.
- Gestión de energía robusta con amplio rango de entrada DC y batería interna de respaldo para reportes controlados durante eventos de corte de energía.

## Cómo funcionan estas funciones con Plaspy

Al desplegarse con Plaspy, los T622E-F9 y T622G-F9 envían posiciones y telemetría vehicular a la plataforma para que los operadores puedan monitorear activos en tiempo real y revisar comportamientos históricos. Plaspy detecta automáticamente los protocolos de rastreador compatibles e ingiere mensajes de posición, telemetría y eventos para visualización, alertas e informes.

- Actualizaciones de posición en tiempo real y recorridos históricos visibles en los mapas y herramientas de reproducción de Plaspy.
- Valores de telemetría del vehículo, reportados por CAN bus o serial, mapeados en Plaspy para paneles y análisis de tendencias.
- Eventos de periféricos como identificación de conductor por RFID, lecturas de sensores de combustible y cambios de estado de relés aparecen como eventos y pueden activar alertas.
- Plaspy acepta datos en búfer y cargas diferidas para mantener la continuidad durante interrupciones de cobertura.
- La plataforma muestra el estado de conectividad del dispositivo para que los equipos operativos identifiquen si el reporte se realiza por celular o por rutas de respaldo.

## Casos de uso típicos

- Operaciones de flota que requieren seguimiento continuo en rutas urbanas, rurales y remotas con entrega confiable de mensajes.
- Logística de largo recorrido y rutas con cobertura mixta donde el respaldo satelital preserva la visibilidad.
- Vehículos que necesitan flujos de trabajo anti‑robo como control remoto de inmovilizador y registro de identificación de conductores.
- Mantenimiento y diagnóstico basados en telemetría CAN y serial para obtener información sobre el estado del motor y del vehículo.
- Monitoreo de combustible y seguimiento de consumo mediante sensores ultrasónicos integrados en una plataforma centralizada.
- Despliegues que se benefician de la gestión remota de firmware y del aprovisionamiento estandarizado a escala.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones y el comportamiento exacto dependen de la variante de modelo, el soporte de frecuencias regionales y la revisión de firmware.
- Algunos periféricos e integraciones requieren cableado y selección correcta de accesorios en la instalación; las opciones durante la instalación afectan los datos disponibles.
- El respaldo satelital y las capacidades celulares regionales varían según el modelo y las certificaciones; consulte la documentación de Meitrack para detalles por modelo.
- La capacidad de registro, la corriente en reposo y el tiempo de operación dependen de las tasas de reporte, el uso de periféricos y la configuración de energía.
- Plaspy puede ingerir los datos que el rastreador soporte, pero el mapeo exacto de campos CAN o serial a la telemetría de la plataforma puede requerir configuración.

## Por qué usar Plaspy con estas funciones

Usar el Meitrack T622E-F9 o T622G-F9 con Plaspy entrega a los operadores de flota una combinación práctica de integración vehicular robusta y conectividad resiliente. El rastreador aporta posiciones GNSS, telemetría vehicular y eventos de periféricos que Plaspy utiliza para presentar una vista operativa única para despacho, cumplimiento y revisión de incidentes. El respaldo satelital y el almacenamiento local reducen los puntos ciegos para que los equipos mantengan supervisión en entornos con cobertura complicada.

To learn more about Plaspy and how it supports Meitrack devices visit https://www.plaspy.com. For the latest device specifications, firmware details and accessory compatibility always verify current information on the manufacturer site https://www.meitrack.com/.
