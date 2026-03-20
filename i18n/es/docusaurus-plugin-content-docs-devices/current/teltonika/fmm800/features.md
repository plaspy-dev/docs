---
slug: /teltonika/fmm800/features
id: fmm800-features
sidebar_label: Features
title: Teltonika - FMM800 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador Teltonika FMM800 OBD II y su integración con Plaspy para rastreo y telemetría vehicular
keywords:
  - Teltonika FMM800
  - funciones FMM800
  - rastreador GPS Teltonika
  - rastreador OBD II
  - FMM800 Plaspy
  - rastreo de vehículos
  - telemática de flotas
  - rastreador con sensores BLE
  - seguimiento por acelerómetro
  - NB IoT LTE Cat M1
---

# Teltonika - FMM800: Características

Esta página ofrece un resumen público de las capacidades del Teltonika FMM800 y de cómo se aprovechan en Plaspy para el rastreo de vehículos, la telemetría y el monitoreo de flotas. El contenido se centra en detalles prácticos y no sensibles que ayudan a gestores de flotas e integradores a entender qué puede aportar el FMM800 cuando reporta a Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para detalles técnicos específicos del dispositivo, notas de cambios de firmware y compatibilidad de accesorios, consulte la documentación y las notas de lanzamiento de Teltonika.

## Visión general de funciones

El FMM800 es un rastreador OBD II plug and play pensado para instalaciones rápidas y reportes continuos del vehículo. Combina conectividad celular, detección de movimiento integrada y Bluetooth Low Energy para transmitir ubicación y telemetría vehicular a plataformas en la nube como Plaspy.

- Instalación OBD II plug and play para despliegues ágiles sin cableado complejo.
- Conectividad celular optimizada para redes de área amplia de baja potencia con modos múltiples de respaldo para amplia cobertura.
- Acelerómetro integrado de 3 ejes para generar eventos relacionados con movimiento e impactos.
- Soporte Bluetooth Low Energy para emparejar sensores y balizas externas y monitorear condiciones ambientales y de movimiento.
- Datos derivados del OBD II utilizados para telemetría de combustible y reporte del estado de ignición.
- Gestión remota de firmware y configuración mediante las herramientas de provisión de Teltonika.

## Características principales del Teltonika - FMM800

- Interfaz OBD II plug and play para alimentación y acceso a datos del vehículo.
- Conectividad celular multimodo que incluye LTE Cat M1 y NB IoT con respaldo 2G.
- Acelerómetro de 3 ejes integrado para detectar eventos bruscos e impactos.
- Soporte Bluetooth Low Energy para sensores y balizas externas.
- Telemetría OBD II compatible, incluyendo estado de ignición y datos de diagnóstico útiles para análisis de flota.
- Integración con las herramientas de administración remota de Teltonika para FOTA y provisión.
- Factor de forma compacto OBD II apto para una instalación discreta en vehículos particulares.

## Cómo Plaspy aprovecha estas funciones

Plaspy ingiere la ubicación y la telemetría del FMM800 para ofrecer mapas en vivo, alertas e informes históricos. El dispositivo transmite datos GPS y parámetros derivados del OBD II a Plaspy, donde pasan a formar parte de los historiales de los vehículos, disparadores de eventos y paneles operativos.

- Las actualizaciones de ubicación en tiempo real aparecen en los mapas y feeds de Plaspy para despacho y monitoreo.
- Los eventos del acelerómetro pueden convertirse en disparadores de alertas por frenadas bruscas, detección de colisiones u otros incidentes de movimiento.
- La telemetría OBD II, como el estado de ignición y métricas del motor, está disponible para soportar monitoreo de combustible y análisis del comportamiento del conductor.
- Los datos de sensores BLE reenviados desde el dispositivo pueden completar lecturas de sensores y alertas ambientales en Plaspy cuando están configurados.
- Los dispositivos se registran y reportan en Plaspy usando métodos de transporte estándar; Plaspy detecta automáticamente el protocolo de rastreador soportado para ingestión.
- Los flujos de trabajo de firmware y configuración remotos siguen gestionándose con las herramientas de Teltonika, mientras Plaspy se encarga de la visualización, las reglas y las integraciones.

## Casos de uso típicos

- Gestión de flotas con seguimiento continuo de ubicación, reproducción de rutas y monitoreo del comportamiento del conductor.
- Servicios de carsharing y renta que aprovechan despliegues OBD II rápidos y registros de uso para facturación y seguridad.
- Operaciones logísticas y de reparto que requieren rastreo en vivo y detección de incidentes mediante acelerómetro.
- Monitoreo ambiental y de cabina mediante sensores BLE emparejados para alertas de temperatura o movimiento.
- Flujos de trabajo de seguridad de activos y anti robo que usan el historial de posiciones y el estado de ignición OBD II para apoyar procesos de recuperación.
- Escalado de programas telemáticos donde la provisión remota y FOTA reducen el mantenimiento in situ.

## Notas sobre disponibilidad de funciones

- Las diferencias de firmware pueden habilitar o limitar campos de telemetría específicos, perfiles BLE o la lógica de eventos. Revise las notas de la versión de firmware para detalles.
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas celulares soportadas y la compatibilidad de accesorios.
- La disponibilidad de datos OBD II depende de la marca y modelo del vehículo y de los parámetros que exponga la ECU.
- El soporte de sensores BLE requiere sensores compatibles y puede depender del firmware y la configuración del dispositivo.
- Las herramientas de configuración del fabricante, como Teltonika Configurator y FOTA WEB, son los métodos principales para provisionar y actualizar el firmware del equipo.

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMM800 con Plaspy ofrece una vía práctica para incorporar vehículos rápidamente, obtener visibilidad continua de su ubicación y consolidar telemetría para supervisión operativa. El factor de forma OBD II reduce la fricción de instalación, mientras que los datos de BLE y acelerómetro amplían la detección de eventos y los flujos de trabajo con sensores que Plaspy puede transformar en alertas e informes.

Aprenda más sobre cómo Plaspy puede aprovechar la telemetría y los datos de sensores del FMM800 para mejorar la visibilidad de su flota en https://www.plaspy.com. Las características del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información específica más reciente y la compatibilidad de accesorios en el sitio del fabricante https://www.teltonika-gps.com/.
