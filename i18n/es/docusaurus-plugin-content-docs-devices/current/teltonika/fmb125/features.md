---
slug: /teltonika/fmb125/features
id: fmb125-features
sidebar_label: Features
title: Teltonika - FMB125 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Teltonika FMB125 y su integración con Plaspy para telemetría de flotas y visibilidad de ubicación
keywords:
  - Características Teltonika FMB125
  - Rastreador GPS FMB125
  - Teltonika FMB125 Plaspy
  - Capacidades FMB125
  - Telemetría FMB125
  - Monitoreo de combustible FMB125
  - Teltonika FMB125 RS232 RS485
  - FMB125 RFID 1wire
  - FMB125 respaldo satelital
  - Alternativas Teltonika EOL
---

# Teltonika - FMB125 — Funciones

Esta página presenta el contexto público de funciones para el uso del rastreador Teltonika FMB125 con Plaspy. Resume las capacidades del dispositivo relevantes para gerentes de flota e integradores de sistemas que utilizan Plaspy para seguimiento en tiempo real, captura de telemetría e identificación de conductores o activos. El enfoque está en información práctica y no sensible, y en cómo esas funciones aportan valor operativo dentro de Plaspy.

La disponibilidad y el comportamiento exacto de las funciones listadas pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. El FMB125 está listado como End of Life, por lo que algunas funciones o variantes regionales pueden diferir; consulte la documentación oficial de Teltonika para las especificaciones definitivas del equipo.

## Resumen de funciones

El FMB125 es un rastreador profesional y compacto diseñado para seguimiento de flotas y activos cuando es importante la posición GNSS junto con telemetría externa. En la práctica, el dispositivo ofrece reporte de ubicación, entradas por pulsos para combustible, integración de telemetría serial y eventos de identificación de conductor o activo para mejorar la visibilidad y los reportes operativos en Plaspy.

- Reporte de posición GNSS en tiempo real para mapas en vivo y visibilidad de rutas.
- Conectividad celular Dual‑SIM 2G para ayudar a mantener el enlace de datos en regiones con soporte.
- Soporte de entrada por impulso para capturar señales de medidores de flujo de combustible y sensores similares.
- Puertos seriales RS232 y RS485 para integrar dispositivos de telemetría de terceros.
- Soporte integrado de RFID y 1‑wire para eventos de identificación de conductor o activos.
- Opción de respaldo satelital mediante un módem Iridium Edge conectado por RS232 para cobertura fuera de la red celular.

## Funciones principales del Teltonika - FMB125

- Compatible con Plaspy desde el primer momento para una integración sencilla de telemetría y ubicación.
- Receptor GNSS para obtener fijaciones de posición confiables usadas en seguimiento en vivo y reproducción histórica.
- Módem celular Dual‑SIM 2G que aporta resiliencia en regiones donde el servicio 2G está disponible.
- Interfaces seriales RS232 y RS485 para reenviar datos seriales de sensores e integrar dispositivos externos.
- Entrada por impulso para conteo de pulsos de medidores de combustible y reporte de consumo.
- Lector RFID integrado e interfaz 1‑wire para flujos simples de identificación de conductores o activos.
- Soporte para módem satelital Iridium Edge vía RS232 para ampliar la cobertura cuando las redes terrestres no están disponibles.
- Configuración remota y actualizaciones de firmware mediante herramientas Teltonika como FOTA WEB y Configurator, según la documentación de Teltonika.

## Cómo funcionan estas funciones con Plaspy

Cuando el FMB125 se conecta a Plaspy, la ubicación y la telemetría compatibles se reciben en la plataforma Plaspy para visualización, alertas y reportes. Plaspy detecta automáticamente el protocolo del equipo e ingiere los eventos reportados, de modo que los equipos de flota puedan combinar ubicación y métricas operativas en una sola vista.

- Las posiciones GNSS y los eventos de movimiento aparecen en Plaspy para mapas en vivo e historiales de viaje.
- Los datos de entrada por pulsos provenientes de medidores de combustible llegan como telemetría, permitiendo análisis y reportes de consumo.
- La telemetría serial desde dispositivos RS232 o RS485 puede reenviarse a Plaspy para consolidar lecturas de sensores de terceros con la información de ubicación.
- Los eventos de RFID y 1‑wire registrados por el rastreador pueden utilizarse en Plaspy para asociar viajes a conductores o activos.
- Los reportes de respaldo satelital desde un módem Iridium Edge se muestran en la misma línea de tiempo de Plaspy cuando la celular no está disponible.
- El FMB125 puede configurarse para enviar datos al host colector de Plaspy (por ejemplo el dominio d.plaspy.com) y soporta transporte UDP o TCP en el puerto estándar de Plaspy; Plaspy maneja la detección de protocolo para los equipos entrantes.

## Casos de uso típicos

- Seguimiento de flotas y monitoreo de rutas para vehículos de servicio, camionetas de reparto y flotas logísticas.
- Monitoreo de combustible mediante entradas por pulsos desde medidores de flujo para detectar patrones de consumo y anomalías.
- Identificación de conductores y atribución de viajes usando eventos de RFID y 1‑wire integrados.
- Integración de telemetría de terceros a través de RS232/RS485 para enriquecer los datos del vehículo en los paneles de Plaspy.
- Ampliación de cobertura mediante integración de módem satelital para activos que operan fuera del alcance celular.
- Mantener visibilidad en despliegues antiguos 2G mientras se planifica la migración a modelos más recientes.

## Notas sobre disponibilidad de funciones

- El FMB125 está listado como End of Life; modelos más nuevos de Teltonika como FMC125 y FMM125 están orientados a redes 4G y LTE‑M y se recomiendan para nuevos despliegues a largo plazo.
- La presencia de funciones y su comportamiento exacto dependen de la versión de firmware y la revisión de hardware; actualizaciones de firmware pueden habilitar o modificar funcionalidades.
- Las variantes regionales y el soporte de bandas celulares pueden afectar la conectividad y el comportamiento Dual‑SIM en distintos mercados.
- Las opciones de instalación y el cableado influyen en la disponibilidad de entradas y dispositivos seriales; se recomienda instalación profesional para integraciones de sensores y conexiones de módem satelital.
- Verifique siempre las opciones de configuración del dispositivo y los periféricos compatibles usando la documentación oficial de Teltonika para su unidad específica.

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMB125 con Plaspy permite a las organizaciones combinar reportes de posición confiables con telemetría externa y eventos de identificación en una sola plataforma. La capacidad de Plaspy para ingerir datos GNSS, entradas por pulsos y telemetría serial ofrece visibilidad unificada para los equipos operativos, apoyando la gestión de despachos, los reportes y la supervisión operativa en flotas mixtas.

Para saber más sobre cómo Plaspy puede trabajar con rastreadores como el FMB125, visite https://www.plaspy.com. Para detalles técnicos más actuales y específicos del dispositivo, notas de firmware y guías del fabricante, verifique la información en el sitio de Teltonika https://www.teltonika-gps.com/ ya que las funciones del equipo y el comportamiento del firmware pueden cambiar con el tiempo.
