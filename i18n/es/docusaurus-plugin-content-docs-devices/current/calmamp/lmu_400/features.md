---
slug: /calmamp/lmu_400/features
id: lmu_400-features
sidebar_label: Features
title: CalmAmp - LMU-400 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del tracker CalmAmp LMU-400 y su integración con Plaspy para rastreo vehicular y gestión de flotas
keywords:
  - Funciones CalmAmp LMU 400
  - Tracker GPS CalmAmp LMU 400
  - Compatibilidad LMU 400 Plaspy
  - rastreo vehicular CalmAmp
  - recuperación de vehículos robados LMU 400
  - batería de respaldo LMU 400
  - generador de eventos PEG
  - actualizaciones PULS por aire
  - instalación LMU 400
  - antenas internas LMU 400
---

# CalmAmp - Características del LMU-400

Esta página ofrece un resumen público de las capacidades del CalmAmp LMU-400 y explica cómo se reflejan y utilizan esas funciones dentro de Plaspy. Reúne las capacidades del equipo que resultan prácticas y visibles para los usuarios de Plaspy, evitando detalles de bajo nivel o implementaciones propietarias.

La disponibilidad exacta de funciones en una unidad LMU-400 concreta puede variar según la versión de firmware, la revisión de hardware, las opciones de fábrica, las decisiones de instalación y las prácticas de configuración del fabricante. Para detalles actualizados y específicos del dispositivo, consulte la documentación de CalmAmp y el sitio del fabricante.

## Visión general de funciones

El LMU-400 es un rastreador vehicular compacto pensado para instalaciones flexibles en vehículos de 12 o 24 voltios, y para casos de uso que requieren alimentación de respaldo interna y desempeño GPS fiable. El dispositivo está diseñado para cubrir requisitos comunes de rastreo automotriz y ofrece opciones de detección de movimiento y lógica de eventos a bordo.

- Formato compacto, ideal para instalación discreta en autos y vehículos comerciales ligeros
- Batería interna de respaldo que permite seguir informando la posición cuando se pierde la alimentación principal
- Rendimiento GPS fiable con antenas internas GPS y celular para facilitar la instalación
- Modos de sueño de ultra bajo consumo para extender la vida útil de la batería y gestionar el consumo en periodos inactivos
- Acelerómetro opcional de 3 ejes para detección por movimiento y zumbador integrado y relé de interrupción del arranque para control y recuperación del vehículo
- Motor de eventos programable a bordo y capacidades de gestión remota para reglas personalizadas y actualizaciones

## Funciones principales del CalmAmp - LMU-400

- Tamaño reducido, diseñado para su instalación en sistemas de 12 V y 24 V
- Batería de respaldo interna que preserva el último estado conocido y permite operación limitada durante pérdida de energía
- Modos de sueño de ultra bajo consumo para reducir la corriente cuando el vehículo está inactivo
- Antenas internas celular y GPS para evitar la necesidad de antenas externas cableadas
- Acelerómetro de 3 ejes opcional para detección de movimiento cuando está habilitado
- Zumbador integrado para soportar alertas audibles en soluciones instaladas
- Relé de interrupción del arranque para permitir flujos de trabajo de inmovilización remota cuando está instalado
- Soporte para PEG (generador de eventos programable) y el sistema de gestión PULS para reglas en el dispositivo y aprovisionamiento remoto

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe telemetría e informes de eventos desde unidades LMU-400 compatibles y presenta el estado del dispositivo, el historial de ubicaciones y las excepciones en la plataforma. Plaspy está diseñado para detectar el protocolo del dispositivo de forma automática y aceptar conexiones usando las opciones de transporte comunes configuradas en el servidor Plaspy, lo que facilita la incorporación rápida de rastreadores compatibles como el LMU-400.

- Actualizaciones de ubicación en tiempo real e historial de ubicaciones mostrados en los mapas y líneas de tiempo de Plaspy
- Visibilidad de eventos y excepciones impulsada por las reglas PEG del dispositivo, reportadas a Plaspy para alertas y filtrado
- Pérdida de alimentación y estado de la batería de respaldo reflejados como indicadores de estado cuando el tracker reporta esos eventos
- Eventos de movimiento derivadas del acelerómetro opcional mostrados como estados de movimiento o detenido en Plaspy
- Cambios en el estado de relés y entradas reportados por el dispositivo pueden representarse como eventos o campos de estado dentro de Plaspy
- La configuración remota y las actualizaciones de firmware son compatibles a través de los sistemas de gestión de CalmAmp y pueden coordinarse con los reportes de Plaspy para reflejar el comportamiento actualizado

## Casos de uso típicos

- Recuperación de vehículos robados y respuesta rápida usando la última posición conocida y alertas de eventos
- Monitoreo para financiamiento vehicular que apoya flujos de trabajo de recuperación y gestión de riesgo
- Alquiler de autos y operaciones de flota que requieren rastreadores compactos con batería de respaldo interna
- Seguimiento de flota rutinario y supervisión operativa para autos y vehículos comerciales ligeros
- Monitorización basada en excepciones donde las reglas PEG detectan condiciones específicas para seguimiento
- Aprovisionamiento remoto y mantenimiento a escala usando las funciones de gestión de CalmAmp

## Notas sobre disponibilidad de funciones

- Algunas funciones son opcionales según la configuración o la revisión de hardware del LMU-400, como el acelerómetro o las funciones de relé
- Las versiones de firmware afectan el comportamiento exacto de la gestión de energía, la generación de alertas y las reglas PEG soportadas
- Las variantes celulares regionales y la compatibilidad de redes pueden diferir por país u operador y deben verificarse antes del despliegue
- El cableado y las prácticas de instalación profesional pueden influir en qué funciones están disponibles para Plaspy, como el cableado de interrupción del arranque o el uso del zumbador
- El aprovisionamiento por aire y las actualizaciones de firmware las provee CalmAmp y pueden requerir coordinación con las políticas de gestión de dispositivos

## Por qué usar Plaspy con estas funciones

Usar el CalmAmp LMU-400 con Plaspy ofrece una combinación práctica de hardware compacto y una plataforma diseñada para hacer visible la telemetría y los eventos del dispositivo en un mismo lugar. Plaspy consolida reportes de ubicación, alertas de eventos y estado del dispositivo para que gerentes de flota y operadores puedan monitorear activos, revisar actividad histórica y responder a excepciones basadas en los datos del rastreador.

Plaspy también simplifica la incorporación de dispositivos compatibles al detectar protocolos automáticamente y aceptar conexiones estándar de dispositivos, permitiendo a las organizaciones enfocarse en los flujos operativos en lugar de en el manejo de protocolos de bajo nivel. Para más detalles sobre Plaspy y cómo funciona con dispositivos como el LMU-400 visite https://www.plaspy.com. Verifique el conjunto de funciones más reciente, el comportamiento del firmware y los detalles de implementación del fabricante en el sitio de CalmAmp http://www.calamp.com/ para obtener la información más actual y autorizada.
