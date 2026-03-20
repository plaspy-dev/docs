---
slug: /box/box_tracker/features
id: box_tracker-features
sidebar_label: Features
title: Box - Box Tracker Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del Box Tracker y su integración con Plaspy para seguimiento y registro de eventos
keywords:
  - Características Box Tracker
  - Rastreador GPS Box Tracker
  - Compatibilidad Box Tracker Plaspy
  - Rastreador vehicular Box
  - Dispositivo GPS Box
  - Seguimiento vehicular Box Tracker
  - Rastreador GSM GPRS Box
  - Entradas digitales Box Tracker
  - Gestión de flotas Box Tracker
  - Integrador tercero rastreador
---

# Box - Características del Box Tracker

Esta página ofrece una visión pública del Box Tracker y del contexto de funciones relevante para su uso con Plaspy. Está dirigida a explicar las capacidades del rastreador que importan a integradores de sistemas y a operadores de flotas al conectar el Box Tracker a Plaspy para monitoreo de ubicación, visibilidad de eventos y registro histórico.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación, variantes regionales y las opciones de implementación del fabricante. Confirme siempre los detalles específicos del dispositivo con el fabricante y revise el comportamiento de la unidad instalada al planear la integración con Plaspy.

## Resumen de características

El Box Tracker es un dispositivo de seguimiento vehicular compacto pensado para integradores de terceros. Su enfoque está en el registro fiable de posiciones GPS, conectividad GSM resistente y un factor de forma reducido que facilita instalaciones discretas e integración en sistemas telemáticos existentes.

- Registro preciso de posiciones GPS con adquisición rápida de satélites para asegurar la exactitud de la ubicación inicial
- Conectividad GSM cuatribanda y soporte para reporte por GPRS y GSM
- Soporte de comunicación por TCP y UDP para envío a plataformas externas
- Memoria interna y batería de respaldo para preservar datos de rastreo durante pérdidas temporales de conectividad
- Dos entradas digitales y una entrada analógica para capturar eventos básicos de señales externas
- Carcasa plástica compacta con antenas GPS y GSM integradas para instalaciones sencillas

## Funciones principales del Box Tracker

- Registro de posiciones GPS optimizado para fijación rápida de satélites y consistencia en la ubicación inicial
- Soporte cuatribanda GSM que permite compatibilidad con amplias redes celulares
- Modo de reporte por GPRS y GSM para transmisión de datos a través de la red celular
- Soporte de comunicaciones TCP y UDP para integrarse con servidores de terceros
- Memoria no volátil interna para almacenar datos de ubicación cuando no hay enlace en tiempo real
- Batería de respaldo para mantener el rastreo y la captura de datos durante interrupciones de energía
- Dos entradas digitales y una entrada analógica para captura de eventos o señales de sensores externos
- Antenas GPS y GSM integradas dentro de una carcasa plástica resistente

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, las capacidades del Box Tracker se hacen visibles y manejables desde una plataforma única para conciencia de ubicación y supervisión operativa. Plaspy detecta automáticamente muchos protocolos de rastreadores y ofrece una vista consistente de la actividad y el historial del dispositivo.

- Visibilidad de posiciones en tiempo real e historial dentro de Plaspy basada en los registros GPS del rastreador
- Los datos almacenados en la memoria interna pueden subirse a Plaspy cuando se restablece la conexión celular
- Los eventos de entradas digitales y analógicas se representan en Plaspy como eventos del dispositivo o cambios de estado para monitoreo operativo
- Plaspy detecta automáticamente protocolos compatibles y acepta reportes del dispositivo; los dispositivos suelen reportar al servidor d.plaspy.com y la plataforma soporta reporte por TCP o UDP
- La instalación compacta y la adquisición de satélites fiable mejoran la cobertura en vehículos que operan en espacios reducidos o parcialmente cerrados, haciendo el historial de ubicaciones en Plaspy más completo

## Casos de uso típicos

- Seguimiento de flotas y análisis del historial de rutas para flotas pequeñas y medianas
- Instalaciones de track and trace donde la precisión de la ubicación inicial y el hardware compacto son importantes
- Recuperación de vehículos y reportes de localización para servicios de recuperación de terceros
- Proyectos de integración por parte de integradores que necesitan un rastreador de pequeño tamaño con soporte básico de E/S
- Instalaciones temporales o discretas donde un dispositivo compacto con batería interna de respaldo resulta útil
- Entornos con conectividad celular intermitente donde la memoria interna preserva los datos de viaje

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y software pueden cambiar el comportamiento de las funciones; algunas capacidades dependen del firmware instalado en fábrica o de actualizaciones posteriores
- Las revisiones de hardware o variantes regionales pueden modificar las bandas celulares soportadas o la presencia de entradas específicas
- El método de instalación y el cableado afectan las señales disponibles para entradas digitales y analógicas; confirme qué está cableado en el momento de la instalación
- La retención de memoria interna y la duración de la batería dependen de la configuración del dispositivo y la antigüedad de la unidad instalada
- La documentación del fabricante es la fuente autorizada para detalles eléctricos y de configuración específicos

## Por qué usar Plaspy con estas funciones

Usar el Box Tracker con Plaspy integra los datos del rastreador en un entorno centralizado de gestión de flotas donde el historial de posiciones, la visibilidad de eventos desde entradas digitales y la recuperación de datos almacenados son accesibles junto con otros dispositivos. Para integradores de sistemas y operadores, Plaspy reduce el esfuerzo de manejo de protocolos al detectar dispositivos compatibles y mostrar un estado y un historial consistentes en un solo lugar.

Para saber más sobre cómo Plaspy puede trabajar con el Box Tracker visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y detalles del fabricante, verifique la información actual en el sitio de Box Telematics en http://www.boxtelematics.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
