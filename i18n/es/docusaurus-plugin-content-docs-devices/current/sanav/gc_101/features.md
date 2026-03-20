---
slug: /sanav/gc_101/features
id: gc_101-features
sidebar_label: Features
title: Sanav - GC-101 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS Sanav GC-101 y su integración con Plaspy para seguimiento de flotas y seguridad
keywords:
  - funciones Sanav GC-101
  - funciones rastreador GPS Sanav GC-101
  - funciones y capacidades GC-101
  - compatibilidad GC-101 Plaspy
  - rastreador GPRS
  - rastreador GSM cuatribanda
  - dispositivo seguimiento de flotas
  - rastreador con batería de respaldo
  - rastreador con botón de pánico
---

# Sanav - Características del GC-101

Esta página resume el contexto público de funciones para usar el rastreador GPS Sanav GC-101 con Plaspy. Se enfoca en las capacidades prácticas que afectan al usuario y explica cómo los datos y comportamientos del dispositivo se reflejan en las funciones de monitoreo e informes dentro de la plataforma Plaspy. Los detalles técnicos necesarios para la puesta en marcha del equipo deben consultarse en la documentación oficial de Sanav.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la configuración del fabricante. Cuando es posible, esta página se limita a las características descritas por el fabricante, como el envío de sentencias RMC sobre GPRS, la conectividad GSM cuatribanda, memoria interna y batería de respaldo, soporte TCP y UDP, reportes basados en tiempo y distancia, modo de reposo y entradas predefinidas como botones de pánico.

## Resumen de funciones

El GC-101 es un rastreador compacto que usa GPRS para reportes continuos de posición a un servidor designado. Está orientado a casos de uso de flota y seguridad donde es importante el envío periódico confiable y el almacenamiento temporal durante cortes.

- Envía sentencias RMC que contienen latitud, longitud, velocidad y hora a un servidor web asignado para ubicación y telemetría básica.
- Conectividad GSM cuatribanda para cobertura regional amplia y capacidad de roaming.
- Soporta modos de comunicación TCP y UDP para enviar reportes de posición a un servidor.
- Memoria interna y batería de respaldo que preservan datos durante cortes de energía o interrupciones de red.
- Reporte de ubicación configurable por tiempo y por distancia para equilibrar frecuencia de envíos y uso de comunicaciones.
- Modo de reposo para reducir el consumo cuando el dispositivo está inactivo.

## Características principales del Sanav GC-101

- Envío por GPRS de sentencias RMC con posición, velocidad y marca de tiempo.
- GSM cuatribanda para conectividad celular de amplio alcance.
- Soporte de comunicación TCP y UDP para integrar con distintos servidores.
- Memoria interna para almacenamiento temporal cuando la conectividad se interrumpe.
- Batería de respaldo para mantener operación y proteger datos en buffer ante problemas de energía.
- Reportes de posición basados en tiempo y distancia para ajustar intervalos de rastreo.
- Modo de reposo para ahorrar energía entre eventos de reporte.
- Entradas predefinidas, por ejemplo soporte para botón de pánico, para señalización de eventos.

## Cómo funcionan estas funciones con Plaspy

Plaspy puede ingerir los reportes de posición y la telemetría básica que envía el GC-101, mostrando esa información en paneles y vistas de mapa para supervisión operativa. La plataforma de Plaspy está diseñada para aceptar envíos estándar de rastreadores y hacer visibles esos eventos a los usuarios para monitoreo y análisis.

- Plaspy recibe los reportes del dispositivo y muestra latitud y longitud en mapas, junto con la velocidad y la marca de tiempo reportadas.
- Las configuraciones de reporte por tiempo y distancia en el equipo se traducen en cadencias de envío que usted verá como actualizaciones regulares o intermitentes en Plaspy.
- La memoria interna y la batería de respaldo ayudan a que los datos de posición lleguen después de un corte; cuando esto ocurre Plaspy presenta esos puntos históricos restaurados al llegar.
- Los eventos provocados por entradas o por el botón de pánico que informe el dispositivo pueden aparecer en Plaspy como alertas o registros de evento, según cómo se mapeen las entradas.
- Plaspy detecta automáticamente protocolos comunes de rastreadores para simplificar el manejo en servidor de los reportes entrantes.

## Casos de uso típicos

- Seguimiento de ubicación de vehículos de flota y supervisión de rutas en operaciones logísticas.
- Monitoreo de activos donde se requieren reportes periódicos y almacenamiento temporal durante cortes.
- Seguimiento para seguridad personal o bienes, aprovechando alertas generadas por entradas como botones de pánico.
- Control de vehículos de alquiler con reportes por tiempo y distancia para optimizar el uso de datos.
- Despliegues remotos o en zonas de cobertura intermitente donde la memoria interna guarda reportes hasta que la conectividad vuelva.

## Notas sobre disponibilidad de funciones

- El firmware y la configuración determinan qué modos de reporte y comportamientos de entradas están disponibles en cada unidad.
- Revisiones de hardware o variantes regionales pueden alterar el soporte de bandas celulares o la disposición de antenas.
- El tipo de instalación y el cableado definen el acceso a entradas predefinidas y el comportamiento ante cortes de energía.
- La capacidad de la memoria interna y la duración de la batería de respaldo varían; verifique estos datos en el dispositivo o la versión de firmware específica.
- Consulte siempre el manual del equipo y las notas del fabricante para instrucciones exactas de configuración y limitaciones de funciones.

## Por qué usar Plaspy con estas funciones

Usar el GC-101 con Plaspy centraliza la ubicación originada por el dispositivo y la telemetría básica en un entorno de monitoreo unificado, lo que permite a los equipos rastrear movimientos, revisar posiciones históricas y visualizar señales de eventos como entradas de pánico. La plataforma de Plaspy es útil para organizaciones que necesitan visibilidad consolidada sobre una flota mixta de dispositivos y que se benefician de funcionalidades como mapeo, registro de eventos e informes.

Para obtener más información sobre cómo Plaspy puede presentar y gestionar los datos de rastreadores como el Sanav GC-101 visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo; verifique los detalles más recientes y las instrucciones oficiales con el fabricante en http://es.sanav.com/
