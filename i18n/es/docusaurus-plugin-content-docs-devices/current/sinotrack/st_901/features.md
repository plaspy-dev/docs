---
slug: /sinotrack/st_901/features
id: st_901-features
sidebar_label: Features
title: SinoTrack - ST-901 Features
sidebar_class_name: menu_item_tracker
description: Resumen práctico de las funciones del SinoTrack ST-901 y su integración con Plaspy para rastreo y bloqueo de vehículos
keywords:
  - SinoTrack ST-901
  - funciones ST-901
  - rastreador GPS SinoTrack
  - compatibilidad ST-901 con Plaspy
  - rastreador GPS para motocicleta
  - rastreador vehicular impermeable
  - rastreador con inmovilizador remoto
  - alertas geocerca y exceso de velocidad
  - detección de encendido ACC
  - rastreador SMS GPRS
---

# SinoTrack - ST-901 Características

Esta página describe el contexto público de las funciones disponibles al usar el rastreador SinoTrack ST-901 con Plaspy. Se centra en las capacidades que le interesan al usuario al integrar el ST-901 en una flota o en un esquema de seguridad vehicular supervisado desde Plaspy, incluyendo posicionamiento, alarmas y soporte para inmovilizador remoto.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la forma de instalación y la implementación del fabricante. Para los pasos de activación del dispositivo, requisitos regionales como el registro de IMEI y el conjunto de comandos más reciente, consulte la documentación del fabricante o la etiqueta del equipo cuando corresponda.

## Visión general de funciones

El ST-901 es un rastreador cableado, compacto e impermeable, diseñado para motocicletas, scooters, autos y camionetas ligeras. Ofrece reporte de posición y alarmas básicas del vehículo, con una instalación eléctrica sencilla y soporte opcional de relay para inmovilización remota. Al configurarlo para enviar datos a un servidor de terceros, el dispositivo puede reenviar mensajes de ubicación y eventos a Plaspy para su monitoreo centralizado.

- Reporte de posición GPS en tiempo real mediante datos móviles o SMS para notificaciones redundantes.
- Alarmas de geocerca y exceso de velocidad para alertar sobre salidas de zonas y eventos por velocidad.
- Detección de encendido ACC y alarma por corte de alimentación principal, con batería interna de respaldo para notificaciones al apagarse.
- Instalación cableada de 4 pines y soporte para relay externo que permite cortar el motor de forma remota como respuesta antirrobo.
- Carcasa compacta e impermeable adecuada para montaje discreto en vehículos de dos y cuatro ruedas.

## Funciones principales del SinoTrack - ST-901

- Reporte de posición GPS con modos de reporte GPRS y SMS para conectividad flexible.
- Generación de alertas por geocerca al entrar o salir de áreas definidas.
- Alertas por exceso de velocidad configurables en el dispositivo.
- Detección de encendido ACC que informa los estados de encendido y apagado.
- Batería interna de respaldo que dispara una alarma cuando se pierde la alimentación principal del vehículo.
- Interfaz cableada de 4 pines con soporte para relay externo que permite control del inmovilizador remoto.
- Carcasa compacta e impermeable orientada a motocicletas, scooters, autos y camionetas ligeras.

## Cómo funcionan estas funciones con Plaspy

Cuando el ST-901 está configurado para enviar datos a los servidores de Plaspy, los mensajes de posición y de alarma llegan a Plaspy y se muestran junto con la telemetría de la flota para su monitoreo y respuesta. La configuración para enviar datos a Plaspy suele realizarse mediante comandos SMS del dispositivo para establecer la dirección del servidor y el APN según la guía del fabricante.

- Las actualizaciones de ubicación y las coordenadas GPS aparecen en Plaspy para seguimiento en tiempo real y reproducción histórica.
- Los eventos de geocerca y exceso de velocidad generan alertas que pueden dirigirse a operadores para su investigación.
- El estado de encendido y las alarmas por pérdida de alimentación principal son visibles en Plaspy para respaldar los flujos operativos.
- Los eventos de inmovilizador remoto activados vía control de relay pueden registrarse como acciones del dispositivo o como alarmas en Plaspy.
- Las alertas por SMS siguen disponibles como canal secundario de notificación cuando la conectividad de datos es limitada.

## Casos de uso típicos

- Monitoreo de flotas en tiempo real para vehículos comerciales ligeros que requieren instalación discreta.
- Flujos antirrobo que combinan activación de inmovilizador remoto con reporte de ubicación.
- Seguridad para motocicletas y scooters donde se necesita un rastreador pequeño e impermeable.
- Respuesta ante incidentes usando geocercas y alertas de exceso de velocidad para detectar movimientos no autorizados.
- Notificación de respaldo vía SMS con enlaces de ubicación cuando la conectividad GPRS no está disponible.

## Notas sobre disponibilidad de funciones

- Las revisiones de firmware y hardware pueden modificar los conjuntos de comandos disponibles y el comportamiento de las alarmas; verifique la versión instalada en cada unidad.
- Las variantes regionales pueden diferir en las bandas celulares y en el comportamiento de los SMS; confirme el modelo específico para su mercado.
- El tipo de instalación y la calidad del cableado influyen en la fiabilidad de la detección ACC y de la alarma por pérdida de alimentación principal.
- Algunas acciones, como la conexión del inmovilizador remoto, requieren instalación profesional y el cumplimiento de la normativa local.
- Revise la documentación del fabricante y las reglas de registro de IMEI antes de desplegar dispositivos a gran escala.

## Por qué usar Plaspy con estas funciones

Usar Plaspy junto con el ST-901 permite centralizar los reportes de posición, las alarmas y los eventos del inmovilizador en una única plataforma de gestión de flotas. Plaspy puede recopilar los mensajes del rastreador y presentarlos junto con otros activos para monitoreo consolidado, generación de alertas y supervisión operativa. Esto ayuda a los equipos a mantener conciencia situacional, responder a incidentes de seguridad y conservar un historial de ubicaciones y alarmas.

Aprenda más sobre cómo Plaspy puede trabajar con rastreadores vehiculares como el SinoTrack ST-901 visitando https://www.plaspy.com. Para detalles específicos de funciones del dispositivo, notas de firmware y comandos del fabricante consulte el sitio oficial de SinoTrack en https://www.sinotrackgps.com/ ya que las funcionalidades y el comportamiento del firmware pueden cambiar con el tiempo.
