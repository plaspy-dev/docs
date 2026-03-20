---
slug: /bofan/b5/features
id: b5-features
sidebar_label: Features
title: Bofan - B5 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS Bofan B5 y cómo su seguimiento en tiempo real y telemetría se integran con Plaspy
keywords:
  - Bofan B5
  - funciones Bofan B5
  - rastreador GPS Bofan B5
  - funciones B5 para Plaspy
  - rastreador GPS Bofan
  - rastreador vehicular B5
  - seguimiento de flotas B5
  - telemetría Bofan B5
  - funciones inmovilizador B5
  - geocerca Bofan
---

# Bofan - B5 — Características

Esta página ofrece una visión general pública y no sensible del rastreador vehicular GPS Bofan B5 y de cómo funcionan sus características cuando se usan con Plaspy. Describe las capacidades principales del B5, el valor que aportan en flotas y seguridad, y la forma en que Plaspy presenta la ubicación y los eventos reportados por el dispositivo.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la configuración del fabricante. Use esta página como guía general sobre capacidades prácticas y patrones de integración; consulte la documentación del fabricante para detalles específicos y actualizados del dispositivo.

## Resumen de funciones

El B5 es un rastreador compacto para vehículos diseñado para monitoreo continuo de flotas, protección antirrobo y envío de telemetría operativa a Plaspy. Está orientado a ofrecer posicionamiento GNSS fiable, detección de eventos y modos de transmisión configurables para equilibrar conectividad y costos celulares.

- Reportes de ubicación GNSS en tiempo real para seguimiento en vivo y reproducción histórica en Plaspy.
- Geocercas configurables y alertas por eventos para notificar entradas, salidas o condiciones excepcionales.
- Control remoto del motor mediante una salida digital para soportar flujos de trabajo de inmovilización.
- Acelerómetro integrado para detección de movimiento, remolque y choques que genera alertas oportunas.
- Almacenamiento local en memoria flash para registrar viajes sin conexión y subirlos automáticamente cuando la conectividad se restablece.
- Modos de ahorro de datos GPRS y opciones de reporte configurables para reducir el uso celular sin perder telemetría clave.

## Características principales de Bofan - B5

- Compatible con Plaspy desde el primer uso para centralizar seguimiento y gestión de alarmas.
- Posicionamiento GNSS continuo con antenas internas de alta ganancia para recepción consistente.
- Detección de geocerca y eventos tipo exceso de velocidad mapeados a alertas configurables.
- Acelerómetro integrado para eventos de movimiento, remolque y colisión.
- Control remoto del motor a través de una salida digital para acciones de inmovilización.
- Cuatro entradas digitales y una salida digital para capturar ignición y señales externas.
- Buffer de eventos en la memoria flash interna para carga posterior cuando el dispositivo recupera conectividad.
- Modos inteligentes de ahorro de datos GPRS y comandos GPRS configurables para gestionar el consumo celular.

## Cómo se integran estas funciones con Plaspy

Plaspy recibe los mensajes de ubicación y eventos del B5 para que los gestores de flota puedan supervisar activos en tiempo real, recibir alarmas y generar informes históricos. La plataforma muestra la posición, las marcas temporales de eventos y el estado de las entradas y salidas configuradas en una sola vista para la supervisión operativa.

- Actualizaciones de posición en tiempo real y el historial de recorrido reproducible aparecen en los mapas de Plaspy.
- Alertas por geocerca, remolque, choque, bloqueo de señal (jamming), desconexión y otros escenarios se traducen en alarmas y flujos de trabajo en Plaspy.
- El estado de las entradas digitales y los indicadores de tiempo de funcionamiento del motor reportados por el dispositivo se usan para informes de utilización y mantenimiento.
- Comandos remotos enviados desde Plaspy pueden ajustar la configuración y, donde esté instalado, activar la salida de control del motor del dispositivo.
- Los registros de viajes almacenados en la memoria flash del dispositivo se cargan a Plaspy cuando se restablece la conectividad, completando lagunas en el historial.

## Casos de uso típicos

- Antirrobo en flotas e inmovilización remota, donde el control del motor y las alertas por manipulación reducen el tiempo de recuperación.
- Informes de utilización de conductor y vehículo mediante detección de ignición y análisis de tiempo de motor.
- Respuesta a emergencias y seguridad de ocupantes mediante SOS con un solo toque y alertas basadas en eventos.
- Protección de activos con notificaciones por desconexión, bloqueo de señal, remolque y detección de choques para alertar a los equipos operativos.
- Cumplimiento de rutas y eficiencia operacional mediante geocercas y monitoreo basado en eventos.
- Operación temporal sin cobertura con registro local para vehículos que circulan en áreas de baja cobertura.

## Notas sobre disponibilidad de funciones

- La versión de firmware influye en las funciones disponibles y en el comportamiento de las alertas; los fabricantes pueden añadir o ajustar funciones con el tiempo.
- Las revisiones de hardware y las variantes regionales pueden cambiar las bandas soportadas, las interfaces o los sensores incluidos.
- Las opciones de instalación y el cableado determinan qué entradas y salidas digitales quedan disponibles para detección de ignición e inmovilización.
- Algunas funciones, como monitoreo de voz remoto o comportamiento del botón SOS, pueden requerir configuración adicional o accesorios.
- Confirme siempre el conjunto de funciones específico y el comportamiento del firmware con la documentación del fabricante antes del despliegue.

## Por qué usar Plaspy con estas funciones

Combinar el Bofan B5 con Plaspy brinda a los equipos de flota una visión unificada de ubicaciones, eventos y estado del dispositivo que favorece una respuesta más rápida a incidentes y una visión operativa más clara. La plataforma de Plaspy está diseñada para exponer las alertas del dispositivo, las trayectorias históricas y el estado de entradas/salidas que reporta el B5, permitiendo flujos de trabajo coordinados para antirrobo, planificación de mantenimiento y supervisión de conductores.

Para saber más sobre Plaspy y cómo se integra con rastreadores compatibles, visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, notas de firmware e instrucciones del fabricante, verifique los detalles con Bofan en https://www.bofancloud.com/ ya que las funciones y el comportamiento pueden cambiar con el tiempo.
