---
slug: /ulbotech/t361/features
id: t361-features
sidebar_label: Features
title: Ulbotech - T361 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador OBD-II Ulbotech T361 y su integración con Plaspy para telemetría de flotas y antirobo
keywords:
  - Ulbotech T361
  - funciones Ulbotech T361
  - rastreador OBD II T361
  - rastreador GPS T361
  - características rastreador Ulbotech
  - rastreador compatible con Plaspy
  - rastreador diagnóstico vehicular
  - telemática de flotas T361
  - inmovilizador T361
  - rastreador OBD II para flotas
---

# Ulbotech - T361: Características

Esta página describe el contexto público de funciones para el uso del rastreador GPS Ulbotech T361 con la plataforma Plaspy. Se centra en las capacidades visibles para el usuario, cómo el equipo aporta posición y telemetría del vehículo a Plaspy, y el valor práctico que estas funciones ofrecen para la supervisión de flotas y los flujos de trabajo antirobo.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según el firmware del dispositivo, la revisión de hardware, el método de instalación y las decisiones de implementación del fabricante. Consulte la documentación de Ulbotech para detalles técnicos específicos del equipo y considere pruebas de despliegue para confirmar las capacidades presentes en sus unidades.

## Resumen de funciones

El Ulbotech T361 es un rastreador plug-and-play OBD-II diseñado para aportar ubicación del vehículo y telemetría a nivel de ECU a plataformas telemáticas como Plaspy. Combina posicionamiento GNSS, conectividad celular, acceso directo a diagnósticos del vehículo y sensores integrados para ofrecer seguimiento en vivo, detección de eventos y gestión remota sin necesidad de cableado permanente.

- Instalación plug-and-play OBD-II para despliegues rápidos en vehículos y flotas de alquiler.
- Reporte de ubicación GNSS en tiempo real para seguimiento en vivo y reproducción de historial en Plaspy.
- Acceso directo a diagnósticos de motor y CAN/J1939 para exponer telemetría proveniente de la ECU.
- Acelerómetro integrado y salida digital para corte de motor que habilitan detección de eventos del conductor y acciones antirobo.
- Actualizaciones de firmware remotas y configuración automática de red para simplificar el mantenimiento de la flota.

## Funciones principales del Ulbotech - T361

- Interfaz OBD-II con soporte para protocolos vehiculares comunes y acceso CANBUS SAE J1939 para datos de ECU.
- Módem celular GSM/GPRS cuatribanda para amplia compatibilidad de red y reportes continuos.
- GNSS u-blox 6M con A-GPS para alta sensibilidad en posicionamiento y fijaciones consistentes.
- Salida digital integrada para corte de motor que permite flujos de trabajo de inmovilizador y control remoto del motor.
- Acelerómetro de 3 ejes integrado para detectar eventos de conducción como frenadas bruscas o aceleraciones rápidas.
- Capacidad de actualización remota de firmware (FOTA) para aplicar mejoras por aire.
- Almacenamiento local a bordo para retener registros durante pérdidas temporales de conectividad.
- Puerto Micro USB de configuración e indicadores LED para configuración inicial y diagnóstico.

## Cómo estas funciones se integran con Plaspy

Plaspy ingiere las transmisiones del T361 y presenta datos de ubicación, diagnóstico y eventos en paneles y reportes unificados. La plataforma normaliza la telemetría entrante para que usted pueda actuar sobre fijaciones GPS, parámetros de la ECU y eventos de sensores sin manejar manualmente protocolos.

- Las actualizaciones continuas de ubicación se muestran en los mapas de Plaspy con reproducción de historial y seguimiento de posición en vivo.
- Los PIDs de diagnóstico del motor y CAN/J1939 reportados por el dispositivo quedan disponibles en Plaspy para monitoreo de estado y evaluación mediante reglas.
- Los eventos del acelerómetro se exponen como eventos de comportamiento del conductor para alertas y reportes.
- El estado de encendido y la salida de corte de motor pueden usarse en flujos antirobo y respuestas a incidentes activados desde Plaspy.
- Los dispositivos reportan a Plaspy usando transportes estándar mientras la plataforma detecta automáticamente el protocolo del rastreador e integra la telemetría en las vistas de flota existentes.
- Las actualizaciones remotas de firmware y los flujos de aprovisionamiento pueden coordinarse mediante las herramientas de gestión de dispositivos de Plaspy para mantener la flota actualizada.

## Casos de uso típicos

- Gestión de flotas que combina ubicación GPS y telemetría de ECU para planificación de utilización y mantenimiento.
- Flujos antirobo y recuperación que aprovechan la detección de desconexión del dispositivo y el control remoto de inmovilizador.
- Monitoreo y puntuación de comportamiento del conductor basados en eventos detectados por el acelerómetro y telemetría del vehículo.
- Despliegues en vehículos de alquiler y flotas compartidas que requieren incorporación rápida OBD-II y visibilidad de diagnósticos.
- Reportes programados y alertas por fallas del motor, ralentí prolongado u excepciones operativas detectadas desde datos de la ECU.

## Notas sobre disponibilidad de funciones

- El nivel de firmware puede afectar qué PIDs de diagnóstico y eventos quedan expuestos; verifique la versión de firmware del dispositivo para las funciones requeridas.
- Revisiones de hardware y variantes regionales pueden cambiar las interfaces soportadas o las bandas RF; consulte la etiqueta de la unidad y la documentación del proveedor.
- El tipo de instalación importa: el plug-and-play OBD-II mantiene la integridad del cableado del vehículo pero puede limitar el acceso a algunas señales dependiendo del modelo del vehículo y la implementación del OBD.
- Parte de la telemetría avanzada depende de que la ECU del vehículo exponga los PIDs o parámetros J1939 correspondientes.
- La documentación del fabricante es la fuente autorizada para pines, requisitos eléctricos y especificaciones ambientales.

## Por qué usar Plaspy con estas funciones

Usar el Ulbotech T361 con Plaspy ofrece a las organizaciones una forma práctica de combinar ubicación del vehículo, datos de la ECU y eventos de sensores en una sola vista operativa. La ingestión de dispositivos y el procesamiento de eventos de Plaspy facilitan convertir la telemetría del T361 en alertas, reportes y flujos de trabajo que mejoran la visibilidad de la flota, la seguridad y la capacidad de respuesta operativa.

Aprenda más sobre cómo Plaspy soporta rastreadores como el Ulbotech T361 en https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar las especificaciones y notas de implementación más recientes en el sitio del fabricante http://www.ulbotech.com/ antes de planear un despliegue.
