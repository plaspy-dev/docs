---
slug: /cantrack/gf200ls/features
id: gf200ls-features
sidebar_label: Features
title: CanTrack - GF200LS Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del CanTrack GF200LS y su uso con Plaspy para rastreo a largo plazo y alertas de manipulación
keywords:
  - CanTrack GF200LS
  - características GF200LS
  - rastreador GPS CanTrack GF200LS
  - duración de batería GF200LS
  - compatibilidad GF200LS con Plaspy
  - GF200LS IP65
  - rastreador GPS de larga autonomía
  - rastreador con montaje magnético
  - rastreador GPS para activos
  - dispositivo de rastreo para contenedores
---

# CanTrack - Funciones del GF200LS

Esta página describe el contexto público de funcionalidades para el uso del CanTrack GF200LS con Plaspy. Se centra en las capacidades prácticas del GF200LS que son relevantes para usuarios de Plaspy, incluyendo cómo los datos de posición y eventos se utilizan para supervisión, reportes históricos y notificaciones de manipulación dentro de los paneles y vistas móviles de Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, la variante regional, el método de instalación y las decisiones del fabricante. Cuando procede, esta página señala funciones generales e implicaciones de integración; consulte al fabricante para detalles específicos por dispositivo y por firmware.

## Resumen de características

El GF200LS es un rastreador de activos de bajo mantenimiento, con montaje magnético, ideado para despliegues de larga duración y reportes periódicos. Su diseño busca un equilibrio entre una larga vida de batería y modos de reporte configurables, de modo que las organizaciones puedan optar por telemetría a largo plazo o por visibilidad en tiempo real según sus necesidades operativas.

- Operación en modo de larga espera cuando se configura con intervalos de reporte mínimos para reducir visitas de mantenimiento.
- Modos de trabajo configurables que incluyen tiempo real e informes por intervalos para equilibrar la vida de la batería y la frecuencia de actualización.
- Montaje externo robusto con caja IP65 y potente imán para instalación rápida en activos metálicos.
- Alertas de manipulación basadas en sensor de luz que reportan intentos de extracción o apertura de la carcasa a Plaspy como eventos accionables.
- Reporte celular con GNSS para visibilidad de ubicación en vivo y en histórico dentro de Plaspy.

## Características principales del CanTrack - GF200LS

- Operación en espera prolongada alimentada por tres celdas CR123 que permiten despliegues de varios años con tasas de reporte bajas, según documentación del fabricante.
- Varios modos de funcionamiento como tiempo real, por intervalos y modo reloj para controlar la frecuencia de los reportes de ubicación.
- GNSS integrado con receptor sensible para obtenimiento rápido de posiciones y precisión típica por debajo de 5 metros en condiciones normales.
- Conectividad celular multinetwork que abarca LTE y 2G GSM para capacidad de reporte en áreas amplias.
- Carcasa ABS con clasificación IP65 y montaje magnético removible que simplifica la instalación en vehículos, contenedores y otros activos metálicos.
- Reporte anti manipulación mediante sensor de luz para notificar eventos de extracción o apertura de la cubierta.
- Configuración y gestión remota vía comandos SMS y ajustes de servidor configurables para APN, IP o puerto del servidor.

## Cómo funcionan estas funciones con Plaspy

El GF200LS envía datos de posición y eventos que Plaspy ingiere para proporcionar visibilidad y contexto histórico. Plaspy presenta esos reportes en vistas de seguimiento en vivo, rutas históricas y feeds de eventos para que los operadores puedan actuar ante actualizaciones de ubicación y notificaciones de manipulación.

- Visualización de ubicación en vivo y en histórico en Plaspy utilizando los reportes de posición del dispositivo.
- Eventos de manipulación y extracción aparecen como alertas o eventos en la línea de tiempo de Plaspy para que los equipos prioricen investigaciones o acciones de recuperación.
- Flujos de datos según modo: el modo tiempo real proporciona actualizaciones frecuentes, mientras que los modos por intervalos o reloj entregan telemetría periódica para monitoreo a largo plazo.
- Soporte de configuración de servidor y APN que permite al rastreador enviar datos a Plaspy para que los reportes aparezcan de forma consistente en los paneles.
- Plaspy puede combinar los registros de ubicación y eventos del GF200LS con otras entradas o integraciones compatibles para ofrecer un contexto operativo más amplio.

## Casos de uso típicos

- Monitoreo de bajo mantenimiento de vehículos prestados o arrendados donde revisiones de ubicación poco frecuentes preservan la batería.
- Rastreo de contenedores y carga durante tránsitos largos o almacenamiento, cuando reportes periódicos son suficientes.
- Supervisión de colaterales financieros o activos en garantía para ofrecer verificación discreta de ubicación de activos dispersos.
- Asistencia en recuperación de activos robados donde la telemetría discreta y las alertas de manipulación apoyan los flujos de trabajo de recuperación.
- Seguimiento de equipos estacionales o que se mueven raramente para mantener un inventario de ubicación sin visitas periódicas al sitio.
- Visibilidad de flota para vehículos pesados que se benefician de un rastreador robusto montado externamente.

## Notas sobre disponibilidad de funciones

- La duración exacta de la batería y el rendimiento en espera dependen de la tasa de reporte configurada, las condiciones celulares y el comportamiento del firmware.
- Revisiones de firmware y hardware, así como variantes celulares regionales, pueden cambiar el conjunto de funciones y los comandos soportados.
- Algunas capacidades dependen de una correcta instalación y colocación del dispositivo para una recepción GNSS y celular adecuada.
- Consulte la documentación del fabricante para obtener los detalles más actuales sobre bandas soportadas, conjuntos de comandos y opciones de configuración.

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el GF200LS convierte reportes periódicos y basados en eventos en visibilidad operativa. Plaspy ofrece la interfaz para seguimiento en vivo, revisión de rutas históricas y alertas, de modo que las organizaciones puedan monitorear activos distribuidos con menor carga de mantenimiento mientras mantienen la visibilidad sobre eventos de manipulación y extracción.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer guidance please verify details on the official CanTrack site https://www.cantrackgps.com/ because device features and implementation details can change over time.
