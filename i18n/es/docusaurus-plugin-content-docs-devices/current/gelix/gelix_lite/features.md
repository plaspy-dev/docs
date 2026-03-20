---
slug: /gelix/gelix_lite/features
id: gelix_lite-features
sidebar_label: Features
title: Gelix - Gelix Lite Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Gelix Lite y su uso con Plaspy
keywords:
  - Funciones Gelix Lite
  - Rastreador GPS Gelix Lite
  - Características rastreador Gelix
  - Compatibilidad Gelix Lite Plaspy
  - Dispositivo telemático GPS Gelix
  - Informes GPRS y SMS
  - Actualización remota firmware Gelix
  - Contador de pulsos entrada digital
  - Sensores interfaz serie
  - Rastreo de vehículos con Plaspy
---

# Gelix - Funciones de Gelix Lite

Esta página resume, a nivel público, las capacidades del dispositivo telemático Gelix Lite y cómo puede integrarse con Plaspy. Se centra en las capacidades prácticas que el equipo expone y en de qué manera esas capacidades se aprovechan en Plaspy para seguimiento de ubicación, visibilidad de eventos y gestión remota básica. El contenido está pensado para clientes, integradores y evaluadores técnicos que buscan una visión concisa de lo que Gelix Lite puede aportar en implementaciones de flotas o seguimiento de activos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación, el modelo regional y la implementación de funciones por parte del fabricante. Por ello, esta página ofrece contexto a nivel de funciones y no detalles internos del dispositivo; los usuarios deben verificar las especificaciones concretas con la documentación más reciente del fabricante.

## Descripción general de funciones

Gelix Lite es un controlador telemático con capacidad GNSS que soporta GPS y GLONASS, diseñado para rastrear objetos en movimiento y transmitir datos a través de redes celulares. Ofrece opciones de reporte configurables y soporta múltiples servidores destinatarios, lo que lo hace adecuado para integrarse en plataformas en la nube como Plaspy. Entre sus capacidades prácticas destacan opciones flexibles de reporte y la posibilidad de conectar sensores externos y contadores de pulsos para capturar una mayor variedad de señales operativas.

- Reporte de posición basado en GNSS usando satélites GPS y GLONASS
- Transmisión de datos por redes celulares mediante GPRS IP y SMS como respaldo
- Formato de datos y registro de eventos configurable para definir qué y cuándo se informa
- Soporte para dos servidores receptores que permiten definir endpoints primario y secundario
- Funciones de gestión remota incluyendo comandos de modo operativo y posibilidad de actualización de firmware remota
- Opciones de integración para dispositivos externos como sensores de pulso, contactos secos y sensores por interfaz serie

## Funciones principales de Gelix - Gelix Lite

- Soporte dual GNSS para localización por satélite
- Transmisión de datos por GPRS IP y opción de reporte por SMS para conectividad flexible
- Formatos de reporte configurables y generación de mensajes por eventos
- Soporte para dos servidores receptores para redundancia o flujos de reporte separados
- Soporte de comandos remotos para cambiar el modo de operación desde un servidor central
- Capacidad de actualización remota de firmware (OTA) para aplicar mejoras y correcciones
- Modo de conteo en entradas digitales pensado para sensores de pulso y medición de consumo
- Recolección de datos por interfaz serie para adaptadores y sensores externos

## Cómo funcionan estas funciones con Plaspy

Gelix Lite es compatible con Plaspy y puede integrarse para que sus datos de posición y eventos sean visibles dentro de la plataforma. Plaspy puede recibir los reportes del dispositivo y mostrarlos junto con otros datos telemáticos de la flota, permitiendo a los operadores correlacionar ubicación, eventos de entradas y lecturas de sensores en un único lugar.

- Ploteo de ubicación en tiempo real e histórico en los mapas de Plaspy cuando el dispositivo envía reportes GNSS
- Registro de eventos y entradas en Plaspy para conteos de pulsos y cambios en contactos secos reportados por el equipo
- Reenvío de datos de sensores serie a campos en Plaspy cuando el dispositivo está configurado para incluir esa información en los reportes
- Uso de los dos endpoints del dispositivo para configurar reportes primarios a Plaspy y un servidor secundario de respaldo si se desea
- Visibilidad de cambios de firmware y modo operativo cuando el dispositivo informa su estado; es posible coordinar comandos remotos y actualizaciones cuando la implementación e integración lo permiten

## Casos de uso típicos

- Seguimiento de ubicación y visibilidad de rutas de vehículos de flota para operaciones logísticas
- Monitorización de contadores de uso o medidores basados en pulsos en equipos y activos
- Integración de sensores remotos, como sensores de nivel o adaptadores serie, para recolección telemétrica
- Configuraciones de reporte redundante usando el soporte de doble servidor para mejorar la fiabilidad de datos
- Visibilidad centralizada del modo operativo y del estado de actualizaciones de dispositivos en una flota mixta dentro de Plaspy

## Notas sobre disponibilidad de funciones

- Las funciones y el contenido exacto de los mensajes pueden depender de la versión de firmware y de las características implementadas por el fabricante
- Las revisiones de hardware y los módulos accesorios opcionales pueden afectar qué sensores externos e interfaces están disponibles
- Las decisiones de instalación, como el cableado y la selección de sensores, influyen en las entradas y en la capacidad de conteo de pulsos
- El soporte celular regional y la disponibilidad de operadores afectarán la fiabilidad de GPRS y SMS
- Para comandos precisos, cadenas de configuración y procedimientos de actualización de firmware, consulte la documentación del fabricante

## Por qué usar Plaspy con estas funciones

El uso conjunto de Gelix Lite y Plaspy ofrece a las organizaciones una forma unificada de visualizar datos de posición GNSS, conteo de pulsos y telemetría de sensores externos junto con el resto de activos. Plaspy consolida los reportes de los dispositivos en paneles, mapas y flujos de eventos para que los equipos operativos puedan monitorear movimiento, consumos basados en conteos y valores reportados desde una única interfaz. Cuando Gelix Lite dispone de comandos remotos y capacidad de actualización, Plaspy puede ayudar a coordinar estas actividades como parte de una gestión centralizada de dispositivos.

To learn more about Plaspy and how it can work with Gelix devices visit https://www.plaspy.com. Device features, firmware behavior, and manufacturer implementation can change over time, so please verify the latest Gelix Lite specifications and firmware notes on the official Gelix site http://www.gelix.com/.
