---
slug: /atrack/ax11/features
id: ax11-features
sidebar_label: Features
title: ATrack - AX11 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones públicas del tracker OBDII ATrack AX11 y su integración con Plaspy para telemetría y monitoreo de flotas
keywords:
  - funciones ATrack AX11
  - rastreador GPS ATrack AX11
  - rastreador OBDII AX11
  - compatibilidad AX11 Plaspy
  - rastreador OBDII plug and play
  - telemetría AX11
  - seguimiento GNSS AX11
  - rastreador LTE AX11
  - seguimiento de flotas AX11
  - comportamiento de conducción AX11
---

# ATrack - AX11: Características

Esta página describe el contexto público de funcionalidades al usar el ATrack AX11 con Plaspy. Resume las capacidades prácticas del AX11 como un rastreador OBDII plug-and-play, explica cómo sus datos de telemetría y sensores encajan en flujos de trabajo de monitoreo vehicular y de flotas, y aclara qué puede esperar usted al desplegar el dispositivo con Plaspy para seguimiento en tiempo real y generación de reportes.

La disponibilidad exacta de funciones en una unidad concreta puede variar según la versión de firmware, la revisión de hardware, la variante regional, el método de instalación y la implementación del bus del vehículo. Para detalles específicos y actualizados del equipo, consulte siempre la documentación oficial del fabricante y las notas de la versión.

## Resumen de funciones

El AX11 está diseñado para despliegues rápidos y telemática centrada en el vehículo. Ofrece seguimiento de ubicación, telemetría del bus del vehículo, registro local y detección de eventos de movimiento en un formato compacto OBDII que se integra con plataformas de flotas como Plaspy.

- Instalación OBDII plug-and-play para despliegues rápidos en autos particulares y vehículos comerciales.
- Conectividad celular LTE con soporte para los métodos de transporte de datos habituales, permitiendo actualizaciones en tiempo real a plataformas telemáticas.
- Posicionamiento GNSS integrado para obtener fijaciones de ubicación consistentes y reproducción histórica de rutas.
- Soporte de telemetría del bus del vehículo que permite capturar parámetros OBDII y protocolos de vehículos pesados cuando están disponibles.
- Almacenamiento flash local para almacenar registros y subir lotes tras reconexiones o periodos sin cobertura.
- Sensores de movimiento integrados para detección de comportamientos al volante y eventos bruscos, además de soporte opcional BLE para sensores periféricos.

## Características principales del ATrack - AX11

- Formato OBDII SAE J1962 tipo B plug-and-play para una instalación rápida sin necesidad de cableado fijo.
- Conectividad celular LTE con variantes de módulo convencionales y de bajo consumo para adaptarse a la cobertura de red.
- Motor GNSS (GPS/GLONASS) integrado para proporcionar ubicación del vehículo e historial de rutas.
- Amplia compatibilidad con protocolos de bus del vehículo, incluyendo OBDII y protocolos para vehículos pesados cuando el vehículo lo soporta.
- Almacenamiento local de registros para datos en búfer cuando la cobertura celular es intermitente.
- Sensado de movimiento a bordo con acelerómetro y giroscopio para detección de eventos bruscos y puntuación de conductor.
- Soporte opcional Bluetooth Low Energy para conectar accesorios y sensores compatibles.
- Capacidades de gestión remota del dispositivo, incluyendo actualizaciones de firmware OTA y configuración remota.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el AX11 transmite la posición del vehículo, la telemetría del bus y los eventos de sensores a la plataforma para que gestores y operadores de flotas puedan monitorear activos y analizar comportamientos. Plaspy procesa estos datos para mostrar mapas en vivo, líneas de tiempo de eventos y reportes históricos.

- Los datos GNSS de ubicación y movimiento en tiempo real aparecen en los mapas de Plaspy y en los historiales de vehículos para monitoreo y despacho.
- La telemetría OBDII y de vehículos pesados recibida del dispositivo puede mostrarse en reportes de Plaspy cuando el vehículo expone esos parámetros.
- Los registros locales almacenados en el dispositivo se suben a Plaspy después de las reconexiones para asegurar la continuidad del historial de datos.
- Los eventos de comportamiento de conducción derivados del acelerómetro y el giroscopio pueden visualizarse en Plaspy para análisis de seguridad y formación de conductores.
- Los datos opcionales de sensores BLE pueden ampliar la telemetría en Plaspy cuando periféricos BLE están emparejados con el dispositivo.

## Casos de uso típicos

- Gestión de flotas para visibilidad de rutas, utilización de activos e indicadores básicos de salud del vehículo.
- Programas de seguro basado en uso y puntuación de conductores que combinan datos del bus del vehículo con eventos de movimiento.
- Servicios de alquiler de autos y movilidad compartida que requieren instalación rápida e informes de ubicación confiables.
- Monitoreo parental y de conductores jóvenes con reportes de eventos por frenadas bruscas y historial de ubicaciones.
- Telemetría para vehículos vocacionales y pesados cuando se usan adaptadores e interfaces compatibles.
- Despliegues IoT centrados en el vehículo que necesitan registro local y gestión remota de dispositivos.

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen del soporte del vehículo; los parámetros OBDII y CAN solo están disponibles si el vehículo los expone.
- La versión de firmware y la variante de hardware determinan el comportamiento exacto de la sensibilidad GNSS, modos de ahorro de energía y conjuntos de telemetría.
- Las variantes celulares regionales y las certificaciones de operadores afectan las bandas LTE y opciones de módulo suministradas.
- Las funciones opcionales como periféricos BLE, adaptadores para buses de vehículos pesados y comportamiento de la batería de respaldo pueden variar según el modelo y los accesorios elegidos.
- Consulte al fabricante para obtener listas de accesorios compatibles, notas de firmware y métodos de configuración.

## Por qué usar Plaspy con estas funciones

La combinación del AX11 con Plaspy ofrece a las organizaciones visibilidad práctica sobre la ubicación del vehículo, telemetría básica del bus y eventos de movimiento sin instalaciones complejas. Plaspy organiza los datos entrantes en mapas en vivo, reportes históricos y líneas de tiempo de eventos para que los equipos monitoreen operaciones, analicen comportamiento de conductores y respondan a incidentes de forma eficiente.

Si desea más información sobre cómo Plaspy puede trabajar con trackers compatibles como el AX11, visite https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware e información sobre accesorios más actualizadas, verifique los detalles con el fabricante en https://www.atrack.com.tw/. Las funciones del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es recomendable consultar la documentación oficial del fabricante para obtener la información más reciente.
