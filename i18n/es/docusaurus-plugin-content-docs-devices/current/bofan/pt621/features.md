---
slug: /bofan/pt621/features
id: pt621-features
sidebar_label: Features
title: Bofan - PT621 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS Bofan PT621 y su integración con Plaspy para seguimiento de flotas
keywords:
  - Bofan PT621
  - funciones Bofan PT621
  - rastreador GPS PT621
  - PT621 con Plaspy
  - rastreador GPS Bofan
  - rastreador GPS vehicular
  - seguimiento de flotas PT621
  - soporte de cámara PT621
  - inmovilizador remoto PT621
  - identificación de conductor PT621
---

# Bofan - Características del PT621

Esta página presenta el contexto público de funcionalidades para usar el rastreador Bofan PT621 con Plaspy. Se centra en las capacidades prácticas que usted podrá ver dentro de Plaspy cuando el PT621 está integrado, y en cómo esas capacidades apoyan la visibilidad de la flota, la notificación de eventos y la supervisión operativa.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, los accesorios instalados, variantes regionales y la configuración aplicada durante la instalación. Para parámetros específicos del equipo, esquemas de cableado o el comportamiento de la última versión de firmware, consulte la documentación del fabricante y las notas de la versión.

## Resumen de funciones

El PT621 es un rastreador GPS 4G orientado a vehículos, diseñado para entregar actualizaciones continuas de posición, alertas y telemetría de periféricos a plataformas de gestión de flotas como Plaspy. Combina el reporte de ubicación con entradas y salidas configurables, soporte para cámaras y identificación de conductor para generar eventos útiles para los operadores de flota.

- Reporte de ubicación en tiempo real a través de redes celulares, con SMS como respaldo para alertas críticas
- Soporte de eventos y alarmas incluyendo SOS, geo-cercas, exceso de velocidad, estado ACC, corte de antena y alertas de combustible/temperatura
- Compatibilidad con periféricos externos como hasta cuatro cámaras y un lector RFID para identificación de conductor
- Corte remoto del motor mediante relé externo y entradas/salidas digitales flexibles para integraciones a medida
- Capacidad de voz bidireccional y salidas locales de mensajes/aviso sonoro para comunicación y recordatorios con el conductor

## Funciones principales del Bofan - PT621

- Reporte de ubicación 4G/GPRS con fallback por SMS para notificaciones críticas
- Seguimiento de posición GPS y registro histórico de ubicaciones
- Soporte para hasta cuatro cámaras externas y captura de fotos disparadas por eventos
- Corte remoto del motor vía relé externo para control de inmovilización
- Interfaz RFID externa para identificación de conductor y asociar conductores con viajes
- Suite de alarmas completa incluyendo SOS, geo-cercas, exceso de velocidad, alertas de combustible y temperatura, ACC encendido/apagado y detección de corte de antena
- Múltiples entradas y salidas digitales además de micrófono y altavoz para voz bidireccional
- Entradas de sensores para combustible, temperatura, estado de puertas, avisador sonoro y salida de mensajes LED

## Cómo funcionan estas funciones con Plaspy

Cuando un PT621 está conectado a Plaspy, las actualizaciones de posición del dispositivo, las alarmas y los eventos de periféricos son ingeridos por la plataforma y presentados como marcadores en el mapa, notificaciones de eventos y registros históricos. Plaspy detecta automáticamente los protocolos comunes de rastreadores compatibles y consolida los datos entrantes para ofrecer visibilidad e informes.

- Rutas y trazas en vivo y en histórico visibles en los mapas de Plaspy para revisión de recorridos y despacho
- Notificaciones de alarmas y eventos (ruptura de geo-cerca, SOS, alertas de velocidad, corte de antena) mostradas en el feed de alertas de Plaspy
- Imágenes disparadas por cámaras externas pueden vincularse a eventos en Plaspy cuando la plataforma soporta esa funcionalidad, facilitando la documentación de incidentes
- Eventos de identificación de conductor por lecturas RFID mostrados en los registros de viaje y en la asignación de conductores dentro de Plaspy
- Entradas y salidas, además de lecturas de sensores de combustible y temperatura, presentadas como puntos de telemetría y disponibles en informes para análisis operativo

## Casos de uso típicos

- Gestión de flota y despacho con ubicación en tiempo real y reproducción histórica de rutas
- Responsabilidad del conductor y atribución de viajes mediante identificación RFID
- Flujos de trabajo antirrobo usando inmovilización remota y alertas por corte de antena combinadas con reportes SOS
- Monitoreo de cadena de frío o transportes sensibles a temperatura con visibilidad de alarmas de temperatura
- Captura automatizada de evidencia con fotos vinculadas a eventos desde cámaras externas
- Monitoreo de combustible y detección de discrepancias usando entradas de sensor compatibles

## Notas sobre disponibilidad de funciones

- Algunas funciones requieren accesorios específicos de hardware como cámaras externas, etiquetas/lectores RFID o un relé para el corte del motor
- Las versiones de firmware y las variantes regionales de hardware pueden afectar las bandas soportadas, el comportamiento de las alarmas y la compatibilidad con periféricos
- El tipo de instalación y las prácticas de cableado influyen en qué entradas y salidas quedan disponibles y cómo reportan los sensores
- Las opciones de configuración del fabricante y las integraciones FMS determinan qué eventos se reportan y cómo aparecen en Plaspy
- Confirme siempre el conjunto exacto de funciones de su unidad revisando la hoja técnica del producto y las notas de firmware del fabricante

## Por qué usar Plaspy con estas funciones

Usar el PT621 con Plaspy integra la telemetría a nivel de dispositivo en una única consola operativa donde ubicación, alarmas y telemetría de periféricos se combinan para monitoreo, alertas e informes. Esta integración ayuda a los operadores de flota a reducir tiempos de respuesta, documentar incidentes y mantener supervisión continua sobre vehículos y conductores.

Para saber más sobre cómo Plaspy presenta los datos de los dispositivos y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, requisitos de accesorios y comportamiento del firmware del PT621, verifique los detalles en el sitio del fabricante https://www.bofancloud.com/ ya que las funciones e implementaciones pueden cambiar con el tiempo.
