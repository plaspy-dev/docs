---
slug: /tzone/tz_avl19/features
id: tz_avl19-features
sidebar_label: Features
title: TZone - TZ-AVL19 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador GPS TZone TZ-AVL19 y su integración con Plaspy para rastreo de vehículos
keywords:
  - TZone TZ-AVL19
  - funciones TZ-AVL19
  - rastreador GPS TZone
  - funciones GPS TZ-AVL19
  - TZ-AVL19 Plaspy
  - rastreo de vehículos TZ-AVL19
  - gestión de flotas TZone
  - alarmas TZ-AVL19
  - telemetría TZ-AVL19
  - capacidades del rastreador TZone
---

# TZone - TZ-AVL19: Características

Esta página ofrece información pública sobre las funcionalidades del rastreador GPS TZone TZ-AVL19 y explica cómo se aprovechan esas capacidades con Plaspy para el rastreo de vehículos y la supervisión de flotas. Está pensada para ayudar a gestores de flota, integradores y usuarios técnicos a comprender qué puede hacer el dispositivo cuando se integra con la plataforma Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, accesorios opcionales, opciones de instalación y la implementación del fabricante. Confirme siempre las funciones específicas de una unidad con el firmware del dispositivo y la documentación oficial del fabricante antes de desplegar en producción.

## Resumen de funciones

El TZ-AVL19 es un rastreador para vehículos diseñado para el reporte de posición, alarmas de eventos, monitoreo remoto del estado del vehículo y conexiones opcionales a accesorios multimedia. Su combinación de modos de rastreo, alarmas y capacidades de E/S lo hace adecuado para la supervisión de flotas y la seguridad vehicular.

- Ubicación en tiempo real y seguimiento continuo para mantener la trazabilidad de la unidad
- Múltiples tipos de alarma como exceso de velocidad, bajo voltaje, geo-cercas, vibración, estacionamiento y SOS para notificaciones de eventos
- Monitoreo remoto de estados como puertas y motor, además de corte de motor controlado para gestión de seguridad
- Comunicación por GPRS con TCP o UDP y fallback por SMS para transmitir posiciones y eventos
- Soporte opcional de almacenamiento en el dispositivo y conexión a accesorios externos como grabación en tarjeta SD, lectores RFID, cámaras y impresoras
- Modo de ahorro de energía que reduce la actividad cuando no se detecta movimiento del vehículo

## Funciones principales del TZone - TZ-AVL19

- Modos de reporte de ubicación: punto único y seguimiento continuo para flexibilidad en el rastreo
- Conjunto de alarmas que incluye exceso de velocidad, bajo voltaje, geo-cerca, vibración, estacionamiento y alerta SOS
- Detección de encendido/apagado del motor y capacidades de control remoto, incluido el corte gradual del motor
- Transmisión de datos por GPRS usando TCP o UDP y comunicación por SMS para notificaciones
- Acelerómetro 3D para detección de movimiento y vibraciones
- Grabación opcional en tarjeta SD y compatibilidad con accesorios externos como lector RFID, cámaras e impresoras
- Cálculo de kilometraje y almacenamiento flash a bordo para retener datos de eventos
- Detección de nivel de combustible u aceite y entradas para sensores de temperatura opcionales según lo soporte el fabricante

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere datos de posición y eventos de rastreadores compatibles y muestra esa información mediante mapas, reportes y alertas para que los equipos puedan monitorear vehículos en casi tiempo real. Cuando un dispositivo TZ-AVL19 está conectado a Plaspy, la plataforma hace visibles los eventos reportados por el equipo junto con los datos de rastreo estándar.

- La ubicación del dispositivo y el seguimiento continuo se muestran en los mapas de Plaspy para monitoreo en vivo y reproducción histórica
- Los eventos de alarma reportados por el rastreador aparecen como sucesos en Plaspy, permitiendo filtrar y responder a alertas de exceso de velocidad, geo-cercas, vibración, estacionamiento y SOS
- Los estados del motor y los eventos de control de puertas se muestran para supervisión operativa y seguimiento del estado del vehículo
- Eventos opcionales de medios y accesorios, como sesiones grabadas en SD o entradas de sensores externos, pueden asociarse con el dispositivo en Plaspy cuando el equipo reporta esos datos
- Plaspy detecta automáticamente protocolos comunes de rastreadores para simplificar la incorporación de dispositivos y reducir la complejidad de configuración

## Casos de uso típicos

- Monitoreo de ubicación de flotas con rastreo en tiempo real e historial de viajes para verificación de rutas
- Seguridad y respuesta a incidentes utilizando alarmas de exceso de velocidad, SOS y vibración para señalar eventos potenciales
- Monitoreo remoto del estado del vehículo, incluyendo detección de encendido/apagado y apertura/cierre de puertas para controles de seguridad y operativos
- Supervisión de combustible y kilometraje usando el cálculo de distancia integrado y detección de nivel de combustible cuando esté disponible
- Control de acceso de activos o conductores combinado con integraciones externas como RFID o iButton
- Registro multimedia o documentación a bordo mediante cámaras opcionales y funciones de grabación en tarjeta SD

## Notas sobre disponibilidad de funciones

- Algunas funciones como grabación en tarjeta SD, cámara externa, impresora, RFID, sensores de temperatura e iButton son opcionales y dependen de la variante de hardware o la configuración de accesorios
- El comportamiento funcional puede cambiar con actualizaciones de firmware; las capacidades y la lógica de alarmas pueden diferir entre versiones de firmware
- Las decisiones de instalación y cableado influyen en qué entradas y salidas están disponibles para reporte y control
- Las variantes regionales o del mercado del modelo pueden incluir diferentes conjuntos de funciones u opciones de fábrica
- Consulte la documentación oficial de TZone para diagramas de cableado exactos, compatibilidad de accesorios y notas de versión de firmware

## Por qué usar Plaspy con estas funciones

Emparejar el TZ-AVL19 con Plaspy ofrece a las organizaciones una forma directa de colectar, visualizar y actuar sobre los datos del rastreador. Plaspy agrega ubicación, alarmas y estado del dispositivo en una vista operacional única para que despachadores y gerentes puedan monitorear flotas, priorizar respuestas a eventos y generar reportes para cumplimiento y análisis.

To learn more about Plaspy and how it can work with devices like the TZ-AVL19 visit https://www.plaspy.com. For the most up to date device specifications, firmware behavior, and manufacturer details verify current information on the official TZone website http://www.tzonedigital.com/.
