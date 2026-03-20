---
slug: /concox/jm_bl11/features
id: jm_bl11-features
sidebar_label: Features
title: Concox - JM-BL11 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador candado Concox JM-BL11 y su integración con Plaspy para gestión de flotas y antirrobo
keywords:
  - Concox JM-BL11
  - funciones Concox JM-BL11
  - rastreador GPS Concox JM-BL11
  - rastreador candado JM-BL11
  - rastreador GPS micromovilidad
  - rastreador compatible Plaspy
  - GNSS A-GPS LBS posicionamiento
  - desbloqueo Bluetooth 4.0 LE
  - rastreador bici asistido solar
  - candado GPS resistente a manipulaciones
---

# Concox - JM-BL11: Características

Esta página ofrece una descripción pública y no sensible del conjunto de características del Concox JM-BL11 en relación con su uso en Plaspy. Está pensada para que operadores e integradores comprendan las capacidades prácticas del dispositivo, cómo se mapean esas capacidades a la supervisión de flotas y a los flujos de eventos en Plaspy, y qué esperar al desplegar unidades JM-BL11 a gran escala.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, la variante regional y las opciones de instalación. Para detalles técnicos específicos del dispositivo, guías de configuración y notas de firmware más recientes, consulte la documentación y notas de versión del fabricante.

## Resumen de funcionalidades

El JM-BL11 es un rastreador-candado diseñado específicamente para bicicletas compartidas y micromovilidad, que combina posicionamiento GNSS, larga autonomía en campo y desbloqueo local para usuarios, pensado para flotas distribuidas a gran escala. Está concebido para ofrecer telemetría continua de ubicación y eventos, además de funciones antirobo y operativas que se integran con plataformas de gestión de flotas como Plaspy.

- Posicionamiento GNSS con GPS y A-GPS y retroceso a LBS para mantener la localización en entornos urbanos y mixtos.
- Conectividad LTE Cat M1 / NB2 con opciones de conmutación de respaldo para telemetría y reporte de eventos a larga distancia.
- Batería interna de larga duración con opción de carga solar para reducir visitas de mantenimiento.
- Bluetooth 4.0 LE y desbloqueo mediante código QR para interacciones de usuario y flujos impulsados por la app.
- Mecánica resistente a manipulaciones con alertas por movimiento y vibración para detección de intento de robo e informe de incidentes.

## Características principales del Concox - JM-BL11

- Posicionamiento GNSS que incluye GPS y A-GPS, con fallback a LBS para obtener ubicaciones consistentes.
- Conectividad celular LTE Cat M1 / NB2 con opciones de respaldo para mayor resiliencia de red.
- Batería de alta capacidad con opción de carga solar para prolongar el tiempo operativo en campo.
- Soporte Bluetooth 4.0 LE para desbloqueo local e interacciones con el dispositivo.
- Resistencia a manipulación y detección de movimiento mediante acelerómetro con alertas.
- Comunicaciones cifradas TLS para telemetría y reporte de eventos seguros.
- Almacenamiento y buffering en el dispositivo para preservar datos durante cortes temporales de red.
- Carcasa compacta y robusta con protección IP66 diseñada para uso exterior en micromovilidad.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, los dispositivos JM-BL11 envían datos de ubicación, telemetría y eventos que Plaspy ingiere para ofrecer visibilidad en tiempo real y reportes históricos. Plaspy detecta automáticamente los protocolos compatibles del rastreador y presenta los datos del dispositivo en paneles de flota y mapas para ayudar a los operadores a gestionar disponibilidad e incidentes.

- Actualizaciones de ubicación GNSS en tiempo real y posicionamiento por fallback presentados en mapas y el historial de dispositivo en Plaspy.
- Eventos de movimiento y manipulación marcados en Plaspy como alertas para revisión y respuesta por parte del operador.
- Indicadores de nivel de batería y carga solar visibles en la telemetría del dispositivo para apoyar la programación de mantenimiento.
- Eventos de desbloqueo por Bluetooth e interacciones con códigos QR registrados como eventos operativos en Plaspy.
- Soporte de geo-cercas y eventos basados en zonas en Plaspy para supervisión y aplicación según ubicación.

## Casos de uso típicos

- Flotas de bicicletas compartidas sin anclaje o con anclaje flexible que requieren supervisión en tiempo real de ubicación y disponibilidad.
- Flujos de trabajo de detección y recuperación antirrobo que combinan alertas de manipulación y movimiento con reportes de ubicación.
- Despliegues con asistencia solar en zonas donde la mayor autonomía reduce las intervenciones de campo.
- Flujos de desbloqueo orientados al usuario que combinan QR o Bluetooth con registro de eventos en el backend.
- Planificación operativa de mantenimiento impulsada por telemetría de batería y eventos para flotas distribuidas.

## Notas sobre disponibilidad de funciones

- La presencia y el funcionamiento de ciertas funciones dependen de la versión de firmware y de las variantes regionales del hardware.
- El método de instalación y la ubicación del montaje pueden afectar la recepción GNSS, la sensibilidad de detección de movimiento y el rendimiento de la carga solar.
- Las opciones de configuración del fabricante o la provisión por parte del operador móvil pueden modificar cómo funciona la conectividad celular y los mecanismos de respaldo.
- Algunos campos de telemetría y nombres de eventos visibles en Plaspy dependen de los datos que el firmware del dispositivo transmita.
- Para las especificaciones técnicas más actuales, consulte siempre la documentación oficial del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el Concox JM-BL11 con Plaspy ofrece a los operadores una vía práctica para combinar hardware robusto de micromovilidad con visibilidad de nivel flota. Plaspy pone a disposición ubicación en tiempo real, alertas de manipulación y movimiento, telemetría de batería y carga, y eventos de desbloqueo para que los equipos puedan supervisar disponibilidad, responder incidentes y priorizar mantenimiento en despliegues de gran escala.

Learn more about how Plaspy can work with devices like the JM-BL11 at https://www.plaspy.com. For the latest device specifications, firmware information, and manufacturer implementation details verify current information on the official Concox website https://www.iconcox.com/.
