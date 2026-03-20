---
slug: /teltonika/fmc640/features
id: fmc640-features
sidebar_label: Features
title: Teltonika - FMC640 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Teltonika FMC640 y cómo sus capacidades trabajan con Plaspy
keywords:
  - Características Teltonika FMC640
  - Rastreador GPS FMC640
  - Teltonika FMC640 Plaspy
  - Capacidades FMC640
  - Funciones rastreador GPS Teltonika
  - Seguimiento de flotas FMC640
  - Funciones telemáticas FMC640
  - Seguimiento de vehículos Teltonika FMC640
  - Funciones GPS FMC640
  - Funciones de monitoreo FMC640
---

# Teltonika - FMC640: Funciones

Esta página ofrece un resumen público y orientado a funciones del Teltonika FMC640 y explica cómo sus capacidades se integran con Plaspy. Está pensada para ayudar a gerentes de flotas, integradores y usuarios técnicos a comprender las funciones prácticas que este rastreador aporta cuando reporta a Plaspy y de qué forma esas funciones mejoran la visibilidad de ubicación y el monitoreo operativo.

La disponibilidad y el comportamiento exacto de cada función pueden variar según la versión de firmware, la revisión del hardware, los periféricos instalados y la implementación específica del fabricante. Para la configuración del dispositivo, el historial de cambios de firmware y las especificaciones técnicas completas, consulte la documentación oficial y las notas de lanzamiento de Teltonika.

## Resumen de funciones

El FMC640 es un rastreador GPS profesional orientado a conectividad continua, telemática vehicular y soporte flexible de periféricos. Combina posicionamiento GNSS con comunicaciones celulares y permite integrar datos del vehículo y sensores auxiliares para ofrecer telemática práctica en operaciones de flota.

- Conectividad celular confiable con LTE Cat 1 y conmutación a 3G y 2G para cobertura amplia y continuidad
- Posicionamiento GNSS y soporte Bluetooth para ubicación precisa y comunicación con periféricos locales
- Captura de datos vehiculares, incluido FMS CAN, datos CAN de combustible y datos en vivo del tacógrafo para telemática de flota
- Redundancia con Dual SIM y soporte para múltiples dispositivos externos vía interfaces seriales para instalaciones flexibles
- Modos de ahorro de energía y comportamiento de sueño configurable para equilibrar tiempo de actividad y consumo energético

## Funciones principales del Teltonika - FMC640

- Soporte multigeneración de redes móviles, incluido LTE Cat 1 con conmutación a UMTS y GSM para resiliencia de red
- Posicionamiento GNSS combinado con Bluetooth para ubicación y comunicaciones de corto alcance con dispositivos
- Soporte de telemática vehicular, incluyendo FMS CAN J1939 y fuel CAN J1708 para recopilación de datos del motor y combustible
- Integración con tacógrafo, con lectura de datos en vivo y capacidad de descarga remota de archivos del tacógrafo
- Soporte para dispositivos RS232 y RS485 de terceros para integrar hardware externo
- Dual SIM para redundancia de conexión y flexibilidad con operadores regionales
- Detección de movimiento y eventos basados en acelerómetro para seguimiento de viajes y actividad
- Funciones avanzadas de detección y escenarios como conducción ecológica, detección de exceso de velocidad, detección de interferencias (jamming), geocercas, detección de trayectos y seguimiento del odómetro

## Cómo funcionan estas funciones con Plaspy

Cuando un FMC640 está conectado a Plaspy, su telemetría y eventos quedan disponibles para monitoreo y flujos operativos. Plaspy detecta automáticamente protocolos comunes de rastreadores y presenta los datos de ubicación y eventos en la plataforma para visibilidad y alertas.

- Posicionamiento en tiempo real e histórico mostrado en los mapas de Plaspy usando los datos GNSS enviados por el dispositivo
- Parámetros telemáticos del vehículo provenientes de CAN y del tacógrafo pueden recibirse y almacenarse como puntos de datos del vehículo o parámetros personalizados
- Eventos de movimiento, disparos de geocercas, exceso de velocidad y escenarios de conducción ecológica pueden registrarse como eventos y servir para generar notificaciones o informes en Plaspy
- Entradas de periféricos y sensores, como sondas de temperatura o dispositivos seriales de terceros, pueden reenviarse a Plaspy cuando se configuran en el rastreador
- Dual SIM y la conmutación entre redes contribuyen a un reporte continuo, de modo que Plaspy mantiene la continuidad de ubicación ante cambios de cobertura

## Casos de uso típicos

- Logística internacional y transporte de larga distancia donde la cobertura multired y la integración con tacógrafos son esenciales
- Operaciones de transporte refrigerado que combinan ubicación con monitoreo de temperatura y sensores periféricos
- Flotas de construcción y maquinaria pesada que requieren telemática vehicular y detección de movimiento
- Agricultura y operaciones de campo que necesitan posicionamiento fiable y conectividad con dispositivos periféricos
- Vehículos de seguridad y emergencias que demandan conectividad persistente e informes de eventos
- Programas de monitoreo de combustible y eficiencia de flota que aprovechan datos CAN de combustible y escenarios de conducción eficiente

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen de la versión de firmware y pueden requerir una versión o configuración específica para activarse
- Revisiones de hardware y variantes regionales pueden afectar las bandas celulares y la compatibilidad de periféricos
- Ciertas funciones requieren sensores adicionales o cableado, como sensores de combustible externos o periféricos seriales
- Las herramientas y utilidades del fabricante como FOTA Web y Teltonika Configurator se usan para actualizaciones de firmware y configuraciones avanzadas
- Confirme siempre las funciones habilitadas y los accesorios necesarios durante la adquisición e instalación

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMC640 junto con Plaspy ofrece una forma práctica de convertir la telemetría del dispositivo en información operativa. Plaspy consolida posición, datos del vehículo y eventos en una vista única para que su equipo de flota pueda monitorear la ubicación de los activos, priorizar alertas críticas y generar informes que apoyen la eficiencia y el cumplimiento normativo.

Para saber más sobre Plaspy y cómo se integra con rastreadores como el FMC640 visite https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware y guías de implementación más detalladas consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
