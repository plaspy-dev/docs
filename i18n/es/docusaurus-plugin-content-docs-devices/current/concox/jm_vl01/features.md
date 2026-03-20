---
slug: /concox/jm_vl01/features
id: jm_vl01-features
sidebar_label: Features
title: Concox - JM-VL01 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del Concox JM-VL01 y cómo su geolocalización, alertas, detección de ignición y sensores opcionales se integran con Plaspy
keywords:
  - Concox JM-VL01
  - Concox JM-VL01 características
  - rastreador GPS JM-VL01
  - JM-VL01 Plaspy
  - Concox funciones de rastreador GPS
  - seguimiento de flotas JM-VL01
  - detección de ignición JM-VL01
  - JM-VL01 geocerca
  - corte remoto JM-VL01
  - sensores RS485 JM-VL01
---

# Concox - JM-VL01: Funciones

Esta página describe públicamente las capacidades del rastreador Concox JM-VL01 cuando se utiliza con Plaspy. Resume las funcionalidades que Plaspy puede mostrar para monitoreo operativo, alertas y supervisión remota, sin entrar en detalles privados o configuraciones sensibles.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, las opciones de instalación y la implementación del fabricante. Use esta guía para comprender las capacidades típicas y cómo se mapean en Plaspy, y consulte la documentación del fabricante para obtener detalles técnicos actualizados.

## Resumen de funciones

El Concox JM-VL01 es un rastreador 4G compacto orientado a uso en campo que ofrece actualizaciones de ubicación, alertas por eventos y entradas para sensores opcionales, adecuado para monitoreo de flotas. Combina conectividad celular en múltiples generaciones con entradas enfocadas en vehículos para ayudar a mantener visibilidad y responder a incidentes.

- Seguimiento de ubicación GPS en tiempo real para conocer la posición del vehículo.
- Alertas de geocerca para notificar entradas y salidas de zonas definidas.
- Alertas por eventos como comportamiento de conducción, vibración anómala, exceso de velocidad y pérdida de alimentación.
- Detección de ignición para informar el estado ACC y el estado operativo del vehículo.
- Capacidad de corte remoto para inmovilizar el vehículo cuando hay un relé instalado.
- Soporte opcional de sensores RS485 para monitorear nivel de combustible y temperatura de carga.

## Funciones principales del Concox - JM-VL01

- Compatibilidad con múltiples generaciones celulares, incluyendo LTE, UMTS y GSM para transmisión de datos.
- Rastreo por GPS para posiciones en vivo y datos históricos de rutas.
- Alertas configurables de geocerca para monitoreo perimetral y notificaciones automáticas.
- Alertas por eventos que incluyen detección de conducción peligrosa, vibración anormal, exceso de velocidad y desconexión de la alimentación.
- Detección del estado de ignición (ACC) para registrar si el vehículo está encendido o apagado.
- Función de corte remoto para inmovilizar el vehículo cuando el hardware de relé está instalado y configurado.
- Interfaces opcionales RS485 para sensores de nivel de combustible y temperatura cuando están instalados.
- Botón de pánico o SOS para notificaciones de emergencia discretas desde la cabina.

## Cómo funcionan estas funciones con Plaspy

Cuando un dispositivo JM-VL01 está registrado y reporta a Plaspy, la telemetría y los eventos compatibles se traducen en objetos y alertas dentro de la plataforma que ayudan a mantener la conciencia situacional de la flota. Plaspy muestra la ubicación, el estado y los registros de eventos en la interfaz y puede configurarse para notificar a su equipo cuando ocurren condiciones relevantes.

- Las actualizaciones de ubicación aparecen en los mapas de Plaspy y en los historiales de viajes para análisis de rutas.
- Los eventos de geocerca se presentan como alertas de entrada y salida que pueden desencadenar notificaciones o flujos de trabajo.
- Las alertas de comportamiento de conducción y vibración se muestran como eventos, lo que facilita su revisión y seguimiento en Plaspy.
- El estado de ignición se muestra en los resúmenes del vehículo, ayudando en la planificación operativa y la gestión de combustible.
- Cuando el corte remoto está habilitado y el dispositivo está configurado, Plaspy puede mostrar controles de inmovilización o indicadores de estado a usuarios autorizados.
- Los datos de sensores opcionales RS485, como combustible y temperatura, pueden reportarse a Plaspy cuando la unidad y la instalación soportan esas entradas.

## Casos de uso típicos

- Seguimiento en tiempo real de la flota y supervisión de rutas para vehículos de reparto y servicio.
- Monitoreo de entradas y salidas de sitios mediante geocercas para cumplimiento de rutas y programación.
- Vigilancia del comportamiento del conductor para identificar conductas de riesgo y mejorar la seguridad.
- Respuesta rápida en caso de robo o uso no autorizado mediante detección de ignición y corte remoto.
- Detección de cambios en consumo de combustible y control de temperatura de la carga cuando se instalan sensores RS485.
- Alertas de emergencia para conductores que usan el botón de pánico integrado.

## Notas sobre la disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware; algunas alertas o entradas pueden requerir firmware específico.
- Las revisiones de hardware y los accesorios opcionales determinan si existe soporte para sensores RS485 o corte por relé.
- Se requiere una instalación y cableado correctos para que la detección de ignición, el corte remoto y los sensores externos funcionen.
- Las variantes regionales del producto y el soporte de bandas celulares pueden afectar el rendimiento y la disponibilidad de la red.
- Confirme siempre las capacidades precisas de una unidad específica y su firmware consultando la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el Concox JM-VL01 con Plaspy ofrece una vía sencilla para convertir la telemetría del dispositivo en información operativa útil. Plaspy consolida datos de ubicación, alertas y entradas de sensores en una vista centralizada para que usted pueda supervisar el estado de la flota, investigar eventos y coordinar respuestas sin gestionar directamente la salida cruda del dispositivo.

Aprenda más sobre cómo Plaspy soporta visibilidad de flotas y alertas en https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y orientación del fabricante sobre el JM-VL01, verifique la información en el sitio de Concox https://www.iconcox.com/ ya que las funciones y el comportamiento pueden cambiar con el tiempo.
