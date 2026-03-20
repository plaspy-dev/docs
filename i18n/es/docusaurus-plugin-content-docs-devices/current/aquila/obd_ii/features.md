---
slug: /aquila/obd_ii/features
id: obd_ii-features
sidebar_label: Features
title: Aquila - OBD II Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador OBD II Aquila y cómo sus diagnósticos y telemetría trabajan con Plaspy
keywords:
  - Aquila OBD II
  - Aquila OBD II características
  - rastreador GPS Aquila OBD II
  - diagnósticos OBD II vehículos
  - rastreo de vehículos Plaspy
  - rastreador compatible con Plaspy
  - telemática OBD II
  - rastreador GPS gestión de flotas
  - seguimiento acelerómetro OBD II
  - compatibilidad CAN K-Line
---

# Aquila - Funciones OBD II

Esta página presenta el contexto público de funciones del rastreador OBD II Aquila y explica cómo se usan esas funciones con Plaspy. Describe las capacidades visibles para el usuario, flujos de trabajo prácticos y el tipo de telemetría que el dispositivo puede enviar a un servidor Plaspy para que gestores de flotas y evaluadores técnicos comprendan cómo encaja el rastreador en un despliegue operativo.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware del dispositivo, la revisión de hardware, la interfaz del vehículo y la implementación del fabricante. Consulte al proveedor del rastreador y la documentación del equipo para detalles técnicos específicos del modelo antes del despliegue.

## Descripción general de funciones

El Aquila OBD II es un rastreador OBD-II plug-and-play que combina ubicación GPS con diagnóstico a bordo para enviar telemetría de posición y parámetros del vehículo a un servidor. Está pensado para recopilar tanto PIDs estándar como algunos parámetros específicos de fabricante y transmitir esos datos por celular a una plataforma remota para su procesamiento.

- Reporte de ubicación GPS en tiempo real combinado con datos diagnósticos OBD-II para aportar contexto más completo del vehículo.
- Interfaz OBD-II capaz de leer PIDs estándar y ciertos parámetros específicos de fabricante para diagnóstico y monitoreo.
- Sensado de movimiento con acelerómetro de 3 ejes para detectar desplazamientos y generar eventos de actividad.
- Soporte para protocolos de bus vehicular CAN y K-Line para acceder a una amplia gama de modelos.
- Enlace de datos celular GPRS usando TCP/IP con optimizaciones de conexión para reducir tráfico y conservar datos.

## Características principales de Aquila - OBD II

- Diseño plug-in OBD-II para instalación rápida y acceso a diagnósticos del vehículo.
- Reporte de ubicación GPS para seguimiento continuo de la posición y visibilidad de rutas.
- Detección de movimiento basada en acelerómetro de 3 ejes para identificación de desplazamientos y generación de eventos.
- Soporte de protocolos CAN y K-Line para lectura de datos del bus del vehículo cuando estén disponibles.
- Capacidad para reportar voltaje de batería del vehículo y estado eléctrico básico.
- Soporte para configuración por aire (OTA) que permite actualizar ajustes de forma remota cuando el fabricante lo proporciona.
- Detección automática de protocolo para simplificar la integración con servidores de rastreo.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe la telemetría y los datos de diagnóstico que envía el Aquila OBD II y presenta esa información de forma que apoye la supervisión y el control operativo. Plaspy detecta automáticamente protocolos comunes de rastreadores y acepta conexiones de dispositivos en la plataforma; los equipos Aquila pueden configurarse para reportar a Plaspy mediante TCP o UDP hacia el dominio del servidor Plaspy.

- Los datos de ubicación del rastreador aparecen en los mapas de Plaspy y en las rutas históricas para seguimiento y reproducción.
- Los parámetros OBD-II y los PIDs de diagnóstico soportados que recibe el dispositivo se almacenan como telemetría y pueden mostrarse como estado del vehículo o campos de datos personalizados.
- Los eventos de movimiento generados por el acelerómetro se reflejan como eventos de desplazamiento o detención dentro de Plaspy, ayudando en la monitorización de actividad.
- Los reportes de fallo de alimentación y voltaje de batería ofrecen visibilidad del estado eléctrico del vehículo y pueden mostrarse como alertas o indicadores en paneles.
- Plaspy puede recibir mensajes de configuración y telemetría de dispositivos sobre TCP o UDP hacia el dominio de la plataforma, y detecta automáticamente el protocolo del rastreador para facilitar el onboarding.

## Casos de uso típicos

- Seguimiento de flotas con contexto combinado de ubicación y diagnóstico del vehículo para planificación de mantenimiento.
- Visibilidad remota del voltaje de batería y eventos de energía para reducir tiempos de inactividad.
- Monitoreo de movimientos y paradas usando detección por acelerómetro para reportes operativos.
- Priorización de vehículos para servicio mediante triage basado en diagnósticos reportados.
- Instalaciones plug-and-play para despliegues rápidos en flotas grandes.

## Notas sobre disponibilidad de funciones

- Algunas capacidades dependen de la versión de firmware del dispositivo y pueden cambiar con actualizaciones del fabricante.
- La disponibilidad de datos CAN y K-Line varía según la marca, modelo y año del vehículo; no todos los parámetros estarán disponibles en cada vehículo.
- Funciones opcionales como Bluetooth y PIDs específicos de fabricantes pueden no estar presentes en todas las variantes de hardware.
- La configuración por aire y lecturas avanzadas de parámetros dependen del soporte del fabricante y de las opciones de configuración que el dispositivo exponga.

## Por qué usar Plaspy con estas funciones

El uso del Aquila OBD II junto con Plaspy ofrece a los equipos una vista unificada de la ubicación y las señales de salud del vehículo en una sola plataforma. El onboarding de dispositivos y la detección de protocolos de Plaspy simplifican la integración para que las flotas puedan empezar a consumir telemetría GPS y OBD rápidamente, y luego usar la plataforma para supervisar rutas, detectar eventos de movimiento y mostrar el estado del vehículo en paneles e informes.

Learn more about how Plaspy can work with compatible trackers on the Plaspy website https://www.plaspy.com. For the most current device features, firmware behavior, and manufacturer implementation details, verify information with the device maker at https://www.itriangle.in/.
