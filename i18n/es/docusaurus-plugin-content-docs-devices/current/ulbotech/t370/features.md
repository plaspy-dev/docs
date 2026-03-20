---
slug: /ulbotech/t370/features
id: t370-features
sidebar_label: Features
title: Ulbotech - T370 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del rastreador Ulbotech T370 y su compatibilidad con Plaspy para seguimiento, telemetría, inmovilizador y gestión de flotas
keywords:
  - Características Ulbotech T370
  - Rastreador GPS Ulbotech T370
  - Características T370
  - Compatibilidad T370 con Plaspy
  - Capacidades Ulbotech T370
  - Rastreador OBD T370
  - Rastreador compatible con Plaspy
  - Seguimiento de vehículos T370
  - Inmovilizador T370
  - Soporte FOTA T370
---

# Ulbotech - Funciones del T370

Esta página describe el contexto público de funcionalidades para el uso del Ulbotech T370 con Plaspy. Se centra en las capacidades prácticas del T370, los tipos de telemetría y eventos que el dispositivo suministra, y cómo esos elementos se presentan y utilizan dentro de Plaspy para monitoreo, alertas e informes.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, la variante regional del módem, el tipo de instalación y la implementación específica en el vehículo. Para detalles técnicos concretos y las especificaciones más recientes, consulte la documentación del fabricante enlazada al final de esta página.

## Resumen de funciones

El Ulbotech T370 es un rastreador en formato OBD diseñado para una implementación plug-and-play en vehículos y para integración telemática con Plaspy. Está pensado para ofrecer fijaciones de ubicación, detección de movimiento y parámetros del vehículo obtenidos por OBD que Plaspy puede ingerir para monitoreo en tiempo real, generación de informes y automatizaciones.

- Instalación OBD plug-and-play para despliegues rápidos en flotas.
- Posicionamiento GNSS de alto rendimiento mediante receptor u‑blox MAX‑7 para obtener fijaciones fiables y reportes de ubicación precisos.
- Conectividad celular con variantes de módem Telit xE910 que brindan amplia cobertura en redes móviles.
- Acelerómetro interno de 3 ejes para detectar eventos de movimiento y comportamientos del conductor.
- Salida digital de inmovilizador integrada para soportar flujos de trabajo de inmovilización remota cuando se usa con Plaspy.
- Módem con capacidad FOTA para mantenimiento remoto de firmware y actualizaciones.

## Funciones principales del Ulbotech T370

- Compatibilidad con Plaspy para integración inmediata de ubicación y telemetría en paneles, alertas e informes.
- Interfaz en el puerto OBD para alimentación y parámetros del vehículo cuando el automóvil lo soporte.
- Receptor u‑blox MAX‑7 para adquisición rápida de satélites y mejor rendimiento de posicionamiento.
- Módem celular de la familia Telit xE910 disponible en variantes que soportan bandas GSM, WCDMA y LTE comunes.
- Acelerómetro interno de 3 ejes para detección de eventos como choques o conducción brusca.
- Salida digital de inmovilizador interna para cortes de motor o flujos de inmovilización seguros.
- Soporte FOTA para actualizaciones remotas de firmware a través del módem y canales de actualización compatibles.
- Factor de forma compacto en OBD con antenas internas y batería de respaldo integrada para interrupciones cortas de alimentación.

## Cómo funcionan estas funciones con Plaspy

Cuando el T370 se conecta a Plaspy, sus fijaciones de ubicación, eventos de movimiento y parámetros OBD disponibles se procesan dentro de las funciones de monitoreo y automatización de Plaspy. Plaspy utiliza la telemetría entrante para rellenar el estado del dispositivo, el historial de rutas, los eventos y los disparadores de reglas, de modo que usted pueda actuar desde una única plataforma.

- Actualizaciones de ubicación en tiempo real y reproducción histórica de rutas mostradas en los mapas y líneas de tiempo de Plaspy.
- Eventos del acelerómetro y alertas de movimiento traducidos en indicadores de comportamiento del conductor o en sucesos para scoring e informes.
- Parámetros del vehículo obtenidos por OBD (cuando estén disponibles) presentados en los paneles de telemetría de Plaspy y utilizados en informes personalizados.
- Alertas de geocercas y eventos de zonas alimentados en las reglas de Plaspy para notificaciones y acciones automatizadas.
- Control remoto del inmovilizador integrado en flujos de trabajo de Plaspy cuando la salida del dispositivo y los procedimientos operativos lo permiten.

## Casos de uso habituales

- Operaciones de flota y despacho para visibilidad de rutas y optimización del uso de vehículos.
- Monitoreo antirrobo y flujos de inmovilización vinculados a alertas y aprobación del operador.
- Telemática para seguros y perfilado de conductores usando datos del acelerómetro y parámetros OBD.
- Flotas de alquiler y movilidad compartida que requieren instalación OBD rápida y no invasiva y supervisión centralizada.
- Asistencia en carretera y recuperación de vehículos con localización y reporte de estado precisos.

## Notas sobre disponibilidad de funciones

- La disponibilidad de datos procedentes del OBD depende de la marca, modelo del vehículo y de qué parámetros expone el vehículo a través de la interfaz OBD.
- Las capacidades del módem celular dependen de la variante Telit xE910 instalada y del soporte de redes en la región.
- Algunas funciones, como el control del inmovilizador y FOTA, requieren configuración correcta, flujos habilitados en Plaspy y cumplimiento de procedimientos operativos locales.
- La versión de firmware y la revisión de hardware afectan el comportamiento exacto y los comandos soportados; los fabricantes pueden cambiar conjuntos de funciones entre versiones.
- La calidad de la instalación y el cableado de diagnóstico del vehículo pueden influir en qué valores de telemetría están disponibles para el dispositivo.

## Por qué usar Plaspy con estas funciones

Usar el Ulbotech T370 con Plaspy ofrece a las organizaciones una forma rápida de añadir visibilidad del vehículo, monitoreo de eventos y flujos de trabajo basados en telemetría sin necesidad de instalaciones extensas. Plaspy consolida la ubicación del dispositivo, los eventos del acelerómetro y los parámetros OBD disponibles en paneles, alertas e informes que apoyan la supervisión operativa, la respuesta a incidentes y el análisis.

Para obtener más información sobre cómo Plaspy puede trabajar con el T370 y otros rastreadores compatibles, visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, notas de firmware y especificaciones oficiales consulte la documentación de Ulbotech en http://www.ulbotech.com/ ya que las funciones, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo.
