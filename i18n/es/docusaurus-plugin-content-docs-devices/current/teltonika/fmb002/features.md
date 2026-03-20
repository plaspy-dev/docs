---
slug: /teltonika/fmb002/features
id: fmb002-features
sidebar_label: Features
title: Teltonika - FMB002 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador Teltonika FMB002 OBDII y su integración con Plaspy
keywords:
  - Teltonika FMB002
  - funciones Teltonika FMB002
  - rastreador GPS FMB002
  - FMB002 OBDII
  - Teltonika BLE OBDII
  - seguimiento de flotas FMB002
  - Teltonika FMB002 Plaspy
  - seguimiento vehicular FMB002
  - actualizaciones firmware FMB002
  - datos OBDII vehicular
---

# Teltonika - Funciones del FMB002

Esta página ofrece una visión pública orientada a características del Teltonika FMB002 y cómo Plaspy utiliza sus capacidades. Se centra en detalles prácticos y no sensibles sobre el dispositivo como un rastreador OBDII ultra compacto plug and play, y explica qué telemetría y funciones puede esperar ver en la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de funciones individuales pueden variar según la versión de firmware del dispositivo, la revisión de hardware, el método de instalación y las decisiones de implementación del fabricante. Para configuración del dispositivo, diagnósticos avanzados y los detalles técnicos más recientes consulte la documentación oficial de Teltonika.

## Resumen de características

El FMB002 es un rastreador OBDII plug and play ultra compacto diseñado para leer datos del vehículo y reportar ubicación e información de eventos. Su forma compacta y la conexión OBDII facilitan la instalación en vehículos livianos compatibles, mientras que el GNSS integrado, la conectividad celular y el soporte Bluetooth amplían las posibilidades de recopilación y transmisión de datos.

- Conexión OBDII plug and play para acceso directo a los datos del ordenador a bordo
- Posicionamiento GNSS y reporte celular para seguimiento continuo de ubicación
- Soporte Bluetooth Low Energy para sensores externos, balizas y accesorios
- Acelerómetro integrado que permite detectar eventos como choques, remolque o desconexión
- Múltiples modos de alimentación y suspensión para minimizar el impacto en la batería del vehículo cuando está inactivo

## Características principales del Teltonika - FMB002

- Lectura de datos estándar OBDII para diagnósticos y parámetros accesibles por el bus del vehículo
- GNSS para fijar posiciones y sincronizar tiempo
- Conectividad celular GSM para enviar telemetría a un servidor
- Bluetooth Low Energy 4.0 para emparejar sensores, balizas y periféricos manos libres
- Capacidad de lectura de datos por bus CAN para acceder a información adicional de la red del vehículo
- Acelerómetro integrado para detección de movimiento e impactos
- Múltiples modos de suspensión, incluyendo suspensión del GPS y estados de ahorro de energía más profundos para conservar la batería del vehículo
- Soporte para actualizaciones de firmware y configuración a través de herramientas Teltonika y Bluetooth

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe los reportes del rastreador y presenta la ubicación, los eventos y los datos del vehículo en una vista unificada de la flota. Cuando el FMB002 está configurado para reportar a Plaspy, la plataforma procesa los mensajes entrantes y pone a disposición los datos reportados por el dispositivo para monitoreo e informes.

- Seguimiento de ubicación en tiempo real e histórico visible en los mapas y registros de viajes de Plaspy
- Parámetros OBDII y por bus CAN reportados por el dispositivo mostrados como campos de datos del vehículo cuando están disponibles
- Visibilidad de eventos basados en el acelerómetro como alertas de choque, remolque, desconexión y ralentí excesivo según lo informe el dispositivo
- Detecciones de sensores BLE y balizas presentadas en Plaspy si el rastreador reenvía esos eventos
- Metadatos de firmware y configuración reportados por el dispositivo para inventario y seguimiento de mantenimiento

## Casos de uso típicos

- Gestión de flotas de vehículos comerciales ligeros donde la instalación rápida por OBDII reduce tiempos de inactividad
- Registro de jornadas y seguimiento de viajes para reportes de kilometraje y supervisión operativa
- Flujos de trabajo de seguros basados en uso que dependen de datos del vehículo y detección de eventos
- Flotas de rentas y leasing que requieren instalación sencilla y monitoreo remoto
- Monitoreo de salud y diagnóstico del vehículo mediante lectura de parámetros OBDII y CAN
- Monitoreo de integridad de activos usando eventos del acelerómetro para detección de remolque o choques

## Notas sobre disponibilidad de funciones

- Los parámetros OBDII y CAN específicos disponibles dependen de la marca, modelo y la implementación OBDII del vehículo
- Las funciones Bluetooth y los sensores externos soportados dependen de las capacidades del firmware y de cómo se configure el dispositivo
- Algunos umbrales de detección de eventos y el comportamiento de los modos de suspensión pueden cambiar entre versiones de firmware o revisiones de hardware
- El método de instalación y el cableado pueden afectar qué señales puede acceder el dispositivo; el acceso plug and play por OBDII suele ser más simple
- Verifique siempre las variantes regionales y las notas de la versión de firmware para funciones que puedan variar según el mercado

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMB002 con Plaspy permite a las organizaciones combinar telemetría vehicular compacta basada en OBDII con monitoreo y reportes centralizados. Plaspy ingiere los reportes del dispositivo para que las flotas puedan ver ubicaciones, historiales de viaje y datos reportados por el equipo junto con alertas y eventos para una mejor supervisión operativa.

Para obtener más información sobre Plaspy y cómo la plataforma funciona con dispositivos como el FMB002 visite https://www.plaspy.com. Para conocer las funciones más actuales del dispositivo, el comportamiento del firmware y los detalles del fabricante confirme las especificaciones en el sitio oficial de Teltonika https://www.teltonika-gps.com/
