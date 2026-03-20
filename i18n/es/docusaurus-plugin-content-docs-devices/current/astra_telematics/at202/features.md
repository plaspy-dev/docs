---
slug: /astra_telematics/at202/features
id: at202-features
sidebar_label: Features
title: Astra Telematics - AT202 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Astra Telematics AT202 y su integración con Plaspy para seguimiento y telemetría de flotas
keywords:
  - Astra Telematics AT202
  - características AT202
  - rastreador GPS AT202
  - AT202 Plaspy
  - características Astra Telematics
  - rastreo vehicular AT202
  - telemetría de flota AT202
  - CANBus AT202
  - NB IoT AT202
  - LTE-M AT202
---

# Astra Telematics - Funciones del AT202

Esta página ofrece un resumen público y no sensible de las funciones del Astra Telematics AT202 y de cómo puede integrarse con Plaspy para el seguimiento y la telemetría de flotas. Resume las capacidades del dispositivo relevantes para los usuarios de Plaspy, con enfoque práctico en posicionamiento, conectividad, integración de entradas y salidas (I/O) y robustez del equipo, sin sustituir la documentación del fabricante.

La disponibilidad exacta y el comportamiento de cada función pueden variar según la versión de firmware, la revisión de hardware, la variante regional, el método de instalación y las decisiones de implementación del fabricante. Para configuración específica del equipo, detalles de firmware y especificaciones técnicas actualizadas consulte siempre la documentación oficial de Astra Telematics y las notas de la versión.

## Resumen de funciones

El AT202 es un rastreador compacto pensado para vehículos y despliegues IoT en flotas, que combina posicionamiento GNSS multi constelación con conectividad celular multi red y un conjunto amplio de entradas y salidas para vehículo. Está diseñado para ofrecer ubicación y telemetría continuas a plataformas como Plaspy y soportar los entornos habituales de instalación en flotas.

- GNSS multi constelación para obtener posiciones consistentes mediante GPS, Galileo, GLONASS y BeiDou
- Conectividad celular multi red con GPRS, LTE-M y NB‑IoT para amplia cobertura
- Entradas y salidas (I/O) completas incluyendo CANBus, entradas y salidas digitales, ADC, RS232 y 1‑Wire para telemetría de vehículo e identificación de conductor
- Batería interna de respaldo de 900 mAh y modos de reporte de bajo consumo para mantener datos durante pérdidas de energía
- Tolerancia eléctrica del vehículo hasta 65 V y acelerómetro MEMS interno para detección de movimiento y manipulación
- Factor de forma compacto con antenas internas y variantes de kits disponibles para distintas instalaciones

## Funciones principales del Astra Telematics - AT202

- Soporte GNSS multi constelación que abarca GPS, Galileo, GLONASS y BeiDou para posicionamiento fiable
- Radios celulares multi red incluyendo GPRS, LTE‑M y NB‑IoT para operar en una amplia variedad de redes y escenarios de cobertura
- Conjunto completo de I/O: CANBus, 2 entradas digitales, 2 salidas digitales, 1 ADC, RS232 y 1‑Wire para sensores externos e identificación de conductor
- Batería interna de respaldo de 900 mAh con modos de reporte de bajo consumo para mantener la telemetría ante cortes de alimentación
- Acelerómetro MEMS interno para detección de movimiento, impactos y eventos relevantes
- Tolerancia eléctrica hasta 65 V, lo que hace la unidad adecuada para muchos tipos de vehículos
- Antenas GNSS y celulares internas con variantes de kits y opciones de accesorios para mayor flexibilidad de instalación

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el AT202 envía fijaciones GNSS y telemetría del vehículo a la plataforma para seguimiento en tiempo real y generación de historiales. Plaspy procesa los datos de ubicación y eventos, transformando las entradas crudas en información accionable para monitoreo y operaciones.

- Actualizaciones de ubicación en tiempo real e historial de posiciones visibles en los paneles y mapas de Plaspy
- Interpretación de canales CANBus e ingestión de telemetría para valores como cuentakilómetros del motor y otros canales OEM compatibles
- Eventos de entradas digitales como ignición o estado de puertas disponibles como eventos discretos en Plaspy
- Lecturas ADC y valores analógicos representados en Plaspy para niveles de combustible u otros sensores analógicos cuando están configurados
- Integraciones RS232 y 1‑Wire capturadas como eventos seriales o de identificación de conductor para atribución y registro
- Eventos de movimiento e impacto generados por el acelerómetro, junto con estado de batería y conectividad reportados a Plaspy para detección de manipulación y desconexión

Plaspy detecta automáticamente el protocolo del rastreador y acepta reportes del dispositivo por TCP o UDP hacia el dominio de ingestión de Plaspy, simplificando la incorporación de dispositivos y la ingestión de datos.

## Casos de uso típicos

- Gestión de flotas y optimización de despacho con ubicación en tiempo real y reproducción de rutas
- Monitoreo antirrobo y flujos de recuperación usando eventos de acelerómetro y alertas por entradas digitales
- Telemetría de vehículo y programación de mantenimiento mediante captura de datos CANBus y sensores ADC
- Identificación de conductor y atribución de comportamiento utilizando integración 1‑Wire o serial para ID de conductor
- Monitoreo de flotas mixtas en vehículos a combustión y muchos eléctricos gracias a la tolerancia de 65 V
- Instalaciones remotas donde el reporte en bajo consumo o la batería de respaldo preservan datos críticos

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones puede depender de la versión de firmware del AT202 y de la configuración de características definida por el fabricante.
- Variantes de hardware y diferencias en bandas celulares regionales pueden afectar el soporte de redes y opciones de conectividad.
- Algunos canales de I/O o telemetría requieren una instalación y cableado adecuados al sistema del vehículo y pueden verse limitados por las decisiones de instalación.
- Las variantes de kit y los cables accesorios influyen en qué interfaces están listas para usar desde el paquete.
- Consulte siempre la documentación de producto de Astra Telematics para conocer las capacidades precisas según el número de serie y la configuración de su dispositivo.

## Por qué usar Plaspy con estas funciones

Combinar el AT202 con Plaspy ofrece una forma práctica de centralizar la ubicación y la telemetría del vehículo para supervisión operativa. El posicionamiento del equipo, la redundancia celular y el extenso conjunto de I/O permiten a Plaspy mostrar contexto de ubicación accionable junto con señales del vehículo y datos de eventos, ayudando a los equipos a monitorear flotas, responder a alertas y analizar el rendimiento histórico.

Learn more about how Plaspy can ingest and visualize AT202 data at https://www.plaspy.com. Device features firmware behavior and manufacturer implementation can change over time so verify the latest device specific information and installation guidance at the Astra Telematics website https://astratelematics.com/.
