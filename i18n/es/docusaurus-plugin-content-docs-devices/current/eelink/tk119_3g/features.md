---
slug: /eelink/tk119_3g/features
id: tk119_3g-features
sidebar_label: Features
title: EElink - TK119‑3G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador EElink TK119‑3G y su integración con Plaspy para rastreo alertas y telemetría
keywords:
  - EElink TK119‑3G
  - características TK119 3G EElink
  - rastreador GPS TK119‑3G
  - funciones TK119‑3G para Plaspy
  - GPS LBS AGPS rastreador
  - rastreador vehicular ACC relé RS232
  - alertas choque vibración exceso de velocidad
  - inmovilizador remoto relé
  - seguimiento de flotas compatible con Plaspy
  - pérdida de energía batería de respaldo
---

# EElink - TK119‑3G Características

Esta página ofrece un resumen público de las capacidades del EElink TK119‑3G y de cómo se aprovechan en la plataforma Plaspy. Se centra en información práctica y no sensible sobre posicionamiento, entradas y alarmas que Plaspy puede procesar para seguimiento en tiempo real, alertas e informes.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la forma en que la unidad esté instalada y configurada. Para detalles a nivel de dispositivo, como cableado, opciones de firmware y especificaciones más recientes, consulte la documentación oficial y el material del producto de EElink.

## Resumen de funcionalidades

El TK119‑3G es un rastreador vehicular compacto diseñado para entregar datos de posición y eventos a Plaspy, aportando visibilidad sobre flotas y activos. Combina posicionamiento celular con asistencia AGPS, entradas para vehículos y un conjunto de alarmas de seguridad que facilitan la supervisión, respuestas antirrobo y flujos de trabajo ante incidentes.

- Posicionamiento GPS en tiempo real con respaldo LBS y asistencia AGPS para mejorar tiempos de fijación y continuidad.
- Detección de ACC (encendido) para informar eventos motor encendido/apagado y soportar registros de uso del conductor.
- Alarmas de seguridad incluyendo choque/caída, vibración y exceso de velocidad con comportamiento configurable de corte de alimentación.
- Salida de relé opcional para inmovilizador remoto o corte de combustible/energía para apoyar acciones antirrobo.
- Puerto de expansión RS232 para conectar periféricos y dispositivos de telemetría de terceros como sensores de combustible.
- Batería de respaldo y alarmas por pérdida de alimentación para mantener visibilidad ante manipulación o cuando se retira la alimentación externa.

## Funciones principales del EElink - TK119‑3G

- Soporte dual celular para redes WCDMA y GSM que asegura compatibilidad con una amplia gama de operadores.
- GPS más posicionamiento por estación base LBS con asistencia AGPS para fijaciones más rápidas y fiables.
- Detección ACC (encendido) para capturar el estado on/off y eventos telemétricos asociados.
- Alarma de choque/caída, alarma por vibración y alarma por exceso de velocidad con capacidad de reporte.
- Salida de relé opcional para corte remoto de energía o combustible y flujos de inmovilización.
- Interfaz de expansión RS232 para integración con periféricos y telemetría de terceros.
- Batería interna de respaldo y reportes de alarma por pérdida de alimentación o batería baja.
- Factor de forma compacto para instalación discreta en vehículos o activos.

## Cómo funcionan estas funciones con Plaspy

Cuando el TK119‑3G está conectado a Plaspy, el dispositivo envía mensajes de ubicación y eventos a través de redes celulares, y Plaspy los procesa para su visualización, generación de alertas e informes históricos. Plaspy reconoce automáticamente protocolos comunes de rastreadores e incorpora la telemetría del dispositivo para uso operativo.

- Las actualizaciones de posición en tiempo real y el respaldo por LBS aparecen en los mapas y vistas de seguimiento de Plaspy para mantener visibilidad continua.
- Los eventos de encendido ACC se traducen en registros de motor on/off y pueden utilizarse para generar informes y resúmenes de uso.
- Los eventos de choque, vibración y exceso de velocidad generan alertas y quedan registrados en Plaspy para revisión y respuesta ante incidentes.
- Las acciones de control de relé y los flujos de inmovilización pueden coordinarse desde Plaspy cuando el dispositivo admite control remoto.
- Los datos de periféricos conectados por RS232 pueden reenviarse a Plaspy como campos telemétricos adicionales para su supervisión.
- Los dispositivos compatibles con Plaspy pueden configurarse para reportar al endpoint de la plataforma (d.plaspy.com) usando UDP o TCP en el puerto 8888, y Plaspy detectará automáticamente el protocolo del dispositivo durante la configuración.

## Casos de uso habituales

- Flujos antirrobo y recuperación de vehículos usando el relé opcional para inmovilizar unidades.
- Seguridad del conductor y respuesta ante incidentes con alertas de choque/caída y vibración para acción rápida.
- Monitoreo de combustible y telemetría mediante sensores conectados por RS232 para consumo y diagnóstico.
- Despacho en tiempo real y seguimiento de rutas para operaciones de flota y asignación de conductores.
- Detección de manipulación y pérdida de energía para mantener visibilidad cuando se desconectan los dispositivos.
- Rastreo discreto de vehículos pequeños o activos de alto valor que requieren instalación compacta.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware; algunas alarmas o comportamientos pueden ser configurables o añadidos mediante actualizaciones de firmware.
- Las revisiones de hardware y las variantes regionales pueden afectar las interfaces disponibles o el soporte de bandas celulares.
- El tipo de instalación y el cableado determinan la disponibilidad de la detección ACC y el control de relé; se requiere una instalación correcta para estas funciones.
- La integración RS232 depende de dispositivos periféricos compatibles y de la configuración adecuada tanto en el rastreador como en Plaspy.
- Revise siempre las notas de la versión de firmware del dispositivo y la documentación técnica de EElink para conocer el comportamiento y las opciones de configuración más recientes.

## Por qué usar Plaspy con estas funcionalidades

Combinar el TK119‑3G con Plaspy ofrece a los operadores visibilidad práctica sobre la ubicación, el estado del vehículo y los eventos incidentales a través de una plataforma telemática gestionada. Plaspy convierte los mensajes crudos de posición y alarma del dispositivo en paneles, alertas e informes históricos que respaldan el despacho, el cumplimiento y los flujos de trabajo de respuesta rápida.

Para conocer más sobre cómo el TK119‑3G puede funcionar en su despliegue y explorar las funciones de Plaspy para rastreo y alertas, visite https://www.plaspy.com. Para las especificaciones del dispositivo, la guía de instalación y la información de firmware más actual, verifique los detalles con el fabricante en https://www.eelink.com.cn/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
