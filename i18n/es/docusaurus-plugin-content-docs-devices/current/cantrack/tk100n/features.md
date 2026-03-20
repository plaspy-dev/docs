---
slug: /cantrack/tk100n/features
id: tk100n-features
sidebar_label: Features
title: CanTrack - TK100N Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador CanTrack TK100N y su integración con Plaspy para gestión de flotas y antirrobo
keywords:
  - CanTrack TK100N
  - Características TK100N
  - rastreador GPS CanTrack
  - protocolo GT06N
  - rastreador vehicular 2G
  - seguimiento en tiempo real
  - detección ACC
  - alerta SOS
  - control remoto de relé
  - rastreador compatible con Plaspy
---

# CanTrack - TK100N: Características

Esta página presenta un resumen funcional del uso del rastreador CanTrack TK100N con Plaspy. Se centra en las capacidades prácticas, cómo esas capacidades se integran en Plaspy para monitoreo y control, y los escenarios operativos típicos en los que se utiliza el equipo. El objetivo es ayudar a gerentes de flota, equipos de seguridad e integradores a comprender qué esperar al emparejar este modelo con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Use esta página como visión general funcional y consulte la documentación del fabricante y del instalador para detalles específicos y actualizados del dispositivo.

## Visión general de las funciones

El TK100N es un rastreador vehicular cableado 2G diseñado para despliegues profesionales y con compatibilidad inmediata con Plaspy. Ofrece reportes de posición confiables, detección de eventos y capacidades de control remoto útiles para supervisión de flotas y flujos de trabajo antirrobo.

- Reporte de ubicación en tiempo real mediante GPRS con reporte TCP/IP y fallback por SMS para telemetría resiliente.
- Compatibilidad con el protocolo GT06N para integración rápida en Plaspy y análisis estandarizado de mensajes.
- Detección de encendido o ACC para segmentar viajes y respaldar informes operativos de arranques y paradas.
- Señales de pánico SOS y alarmas, incluyendo vibración y apagado de energía, que se registran como eventos en Plaspy.
- Control remoto de relé para soportar inmovilizadores o corte de motor cuando la instalación y la normativa local lo permitan.
- Factor de forma compacto cableado y amplio rango de voltaje de operación adecuado para autos, motocicletas y e-bikes.

## Características principales del CanTrack - TK100N

- Compatibilidad con protocolo GT06N para ingestión directa de mensajes por parte de Plaspy.
- Rastreo en tiempo real por GPRS TCP/IP con fallback por SMS para mantener los reportes cuando los datos son limitados.
- Detección ACC para informar el estado de encendido, útil en la segmentación de viajes y visibilidad de ralentí.
- Entrada de pánico SOS e informes de alarma para notificaciones rápidas dentro de Plaspy.
- Control remoto de relé para flujos de trabajo de corte o recuperación tipo inmovilizador.
- Receptor GNSS MTK de alta sensibilidad con precisión típica en torno a 10 metros para posicionamiento confiable.
- Amplio rango de voltaje operativo que soporta distintos sistemas eléctricos vehiculares.
- Diseño compacto y discreto pensado para instalación en autos, motocicletas y e-bikes.

## Cómo funcionan estas funciones con Plaspy

Al usar el TK100N con Plaspy, el rastreador envía flujos de ubicación y mensajes de evento que Plaspy parsea y muestra en la plataforma. Plaspy detecta automáticamente protocolos compatibles y mapea los datos de posición y alarma a vistas del panel y reglas de alerta para visibilidad operativa.

- Actualizaciones de posición en vivo e historial de movimientos aparecen en el mapa de Plaspy y en la línea de tiempo del dispositivo.
- Los eventos de ACC o encendido se representan en los informes de viaje y pueden usarse para generar métricas de tiempo de marcha y ralentí.
- Eventos de alarma como SOS, vibración y corte de alimentación se encaminan a canales de alerta y registros de incidentes.
- Comandos remotos para control del relé pueden emitirse desde Plaspy o reenviarse a través de un servidor configurado para permitir intervención centralizada.
- Las rutas de fallback por SMS y la monitorización por voz ofrecen control y verificación redundante cuando la conectividad de datos es limitada.

## Casos de uso típicos

- Monitoreo de operaciones de flota con ubicación en vivo y segmentación de viajes para despacho y supervisión de rutas.
- Protección antirrobo que combina alertas SOS, notificaciones por vibración y apagado con control remoto de relé para recuperación.
- Protección de activos en motocicletas y e-bikes usando un rastreador compacto y de bajo consumo diseñado para dos ruedas.
- Cumplimiento operativo y conducta de conductores donde los eventos de encendido y el historial de movimiento ayudan a verificar actividad.
- Logística basada en telemetría para supervisión de inventario, optimización de rutas y prevención de pérdidas.
- Gestión de vehículos de alquiler o compartidos que se beneficia de comprobaciones remotas de estado y opciones de inmovilización.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y las opciones de configuración del fabricante pueden cambiar las funciones disponibles y la sintaxis de comandos.
- Revisiones de hardware o variantes regionales pueden modificar las bandas celulares soportadas o las interfaces incluidas.
- Las decisiones de instalación, como la ubicación del cableado e integración con sistemas del vehículo, afectan qué sensores e entradas son utilizables.
- El fallback por SMS y las funciones de voz o escucha pueden estar sujetas a regulaciones regionales y a la disponibilidad de los operadores.
- Verifique siempre qué funciones están habilitadas en una unidad específica y cómo se activan consultando la documentación oficial.

## Por qué usar Plaspy con estas funciones

Combinar el TK100N con Plaspy ofrece una mezcla práctica de funciones de rastreadores probadas en campo y una plataforma diseñada para visibilidad de flotas y supervisión operativa. Plaspy procesa mensajes GT06N para mapear de forma fiable ubicación y eventos, permitiendo a los equipos monitorear activos centralizadamente, responder a alarmas y ejecutar acciones remotas cuando procede.

Learn more about Plaspy and how it supports trackers like the TK100N on the main website https://www.plaspy.com. For the latest device specific feature details firmware behavior and manufacturer guidance verify current documentation at the official CanTrack site https://www.cantrackgps.com/
