---
slug: /gotop/vt_380/features
id: vt_380-features
sidebar_label: Features
title: GOTOP - VT-380 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador GOTOP VT-380 y cómo su seguimiento, alarmas, registros y E/S vehicular funcionan con Plaspy
keywords:
  - GOTOP VT-380
  - funciones GOTOP VT-380
  - rastreador GPS GOTOP VT-380
  - compatibilidad VT-380 Plaspy
  - gestión de flotas VT-380
  - alarmas VT-380
  - capacidades de registro VT-380
  - rastreo de vehículos VT-380
  - telemetría VT-380
  - funciones del rastreador GOTOP
---

# GOTOP - VT-380: Funciones

Esta página ofrece una visión general pública de las capacidades del GOTOP VT-380 y explica cómo se integran con Plaspy para proporcionar visibilidad centralizada de la flota y monitoreo operativo. Está pensada para ayudarle a usted, como operador de flota, administrador de alquileres o integrador de seguridad vehicular, a comprender qué datos puede enviar el dispositivo a Plaspy y de qué manera esos datos respaldan el seguimiento, las alertas y el análisis histórico.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el cableado de instalación y la implementación regional del fabricante. El contenido que sigue refleja el conjunto de funciones descrito por el fabricante y las formas prácticas en que se usan con Plaspy; para detalles específicos y actualizados consulte siempre la documentación oficial del fabricante.

## Resumen de funciones

El VT-380 es un rastreador vehicular profesional diseñado para seguimiento en tiempo real y registro fiable en modo desconectado. Combina posicionamiento GNSS de alta sensibilidad, comunicaciones GSM cuatribanda, almacenamiento flash interno y E/S vehicular para soportar flujos de trabajo de localización, alertas y control remoto que se integran con Plaspy.

- Posicionamiento GNSS fiable para obtener fijaciones de ubicación consistentes, adecuado para seguimiento de flotas e historial de rutas.
- Comunicaciones GSM cuatribanda con GPRS y SMS para actualizaciones en vivo y mensajería de respaldo.
- Amplio búfer de registro en memoria flash que conserva hasta 180,000 puntos de ruta para subida posterior.
- Reporte completo de alarmas y eventos, incluyendo SOS, geocercas, movimiento, exceso de velocidad, corte de alimentación y notificaciones de zonas sin GPS.
- E/S vehicular para telemetría y control, con entradas analógicas para señales de combustible y salida de corte de motor con relé incluido.

## Características principales del GOTOP - VT-380

- Receptor GNSS SiRF‑Star III de alta sensibilidad para fijaciones de posición fiables y precisión práctica en posicionamiento.
- Módem GSM cuatribanda que soporta SMS y comunicaciones GPRS con opciones de transporte TCP y UDP.
- Memoria flash interna para registro a largo plazo y subida automática de waypoints almacenados una vez que se restablece la conectividad.
- Conjunto completo de alarmas que cubre pánico SOS, entrada y salida de geocercas, alertas por movimiento y exceso de velocidad, detección de corte de alimentación y eventos por zonas sin cobertura GPS.
- Salida de corte de motor y relé incluido para flujos de trabajo de inmovilización remota.
- Múltiples entradas y salidas vehiculares, incluidas entradas analógicas para combustible u otros sensores analógicos y varias entradas digitales para señales de eventos.
- Batería de respaldo y modo de bajo consumo sensible al movimiento para mantener el registro durante pérdidas temporales de alimentación.
- Indicadores de estado para GPS y GSM que facilitan la verificación de instalación y la resolución de problemas.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, la telemetría, los eventos y los registros almacenados del VT-380 alimentan paneles y reportes centralizados para que los equipos puedan monitorear vehículos casi en tiempo real y revisar actividad histórica.

- Las actualizaciones de posición en tiempo real y la telemetría llegan a Plaspy para seguimiento en el mapa y visibilidad del estado.
- Los eventos de alarma como SOS, violaciones de geocerca, corte de alimentación y alertas por movimiento se entregan a Plaspy para activar notificaciones y flujos de trabajo de incidentes.
- Los waypoints registrados en el dispositivo se suben tras la reconexión y aparecen en Plaspy para reproducción de rutas e informes de cumplimiento.
- Datos de entradas analógicas, como señales de nivel de combustible, pueden transmitirse a Plaspy para informes de tendencias y análisis de consumo cuando están configurados.
- Los eventos de corte de motor y de relé pueden reflejarse en los registros de eventos de Plaspy para rastrear acciones de inmovilización y el estado relacionado del dispositivo.
- Plaspy puede correlacionar la ubicación y los datos de eventos del VT-380 con fuentes de sensores externas cuando las soluciones combinan datos gatewayed de sensores con la telemetría del dispositivo.

## Casos de uso típicos

- Gestión de flotas y optimización de despacho con seguimiento en vivo y reproducción histórica de rutas.
- Monitoreo antirrobo e inmovilización remota para respuesta rápida ante usos no autorizados.
- Monitoreo de combustible y análisis de consumo usando telemetría de entradas analógicas e informes en Plaspy.
- Supervisión de flotas de alquiler con historial de eventos por vehículo y alertas configurables.
- Monitoreo remoto de activos que operan en zonas de baja cobertura aprovechando el gran búfer de registro interno.
- Flujos de trabajo de seguridad e investigación de incidentes con registros de alarmas, notificaciones de zonas sin GPS y trazas históricas.

## Notas sobre disponibilidad de funciones

- La presencia y el comportamiento de funciones pueden variar según la versión de firmware y la revisión de hardware; algunas funciones pueden requerir firmware específico o accesorios opcionales.
- El cableado de instalación e integración vehicular afecta qué entradas y salidas están disponibles y cómo se reportan los eventos.
- Las variantes regionales y las configuraciones de operadores pueden influir en el comportamiento GSM y los intervalos de reporte.
- Funciones opcionales como entrada de micrófono externa o correlación con sensores gatewayed pueden requerir hardware adicional o trabajo de integración.
- Confirme siempre las funciones soportadas, los esquemas de conexión y las notas de firmware con la documentación oficial del fabricante.

## Por qué usar Plaspy con estas funciones

Combinar el VT-380 con Plaspy ofrece un camino práctico desde la telemetría a nivel de dispositivo hasta la inteligencia operativa centralizada. Plaspy recopila datos de ubicación en vivo, transmite eventos de alarma y procesa registros históricos subidos para que los equipos puedan gestionar flotas, responder a incidentes y analizar el comportamiento de los vehículos desde una única plataforma. Las capacidades de búfer y alarma del dispositivo reducen las brechas de datos y garantizan que los eventos importantes se registren incluso durante interrupciones temporales de conectividad.

Para obtener más información sobre cómo Plaspy puede usar los datos del VT-380 en paneles, alertas e informes visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y orientación del fabricante verifique detalles con GOTOP en https://www.gotop.cc/ ya que las funciones del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
