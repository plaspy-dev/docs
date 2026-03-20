---
slug: /queclink/gv300can/features
id: gv300can-features
sidebar_label: Features
title: QuecLink - GV300CAN Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del rastreador QuecLink GV300CAN y su integración con Plaspy para gestión de flotas y telemetría
keywords:
  - Características QuecLink GV300CAN
  - Rastreador GPS QuecLink GV300CAN
  - Compatibilidad GV300CAN Plaspy
  - Rastreador GPS para vehículos
  - Dispositivo de seguimiento de flotas
  - Rastreador CANBus
  - Seguimiento cadena de frío
  - Control remoto inmovilizador
  - Rastreador GNSS u-blox
  - Capacidades QuecLink GV300CAN
---

# QuecLink - Características del GV300CAN

Esta página ofrece una descripción pública de las funciones del QuecLink GV300CAN y de cómo se aprovechan en la plataforma Plaspy. Resume las capacidades del equipo relevantes para el monitoreo de ubicación, telemetría vehicular, alarmas y los flujos de trabajo habituales en gestión de flotas cuando el dispositivo envía datos a Plaspy.

La disponibilidad y el comportamiento exacto de cada función pueden variar según la versión de firmware, la revisión de hardware, la instalación y cómo QuecLink haya implementado determinadas funciones en una unidad concreta. Al planificar despliegues, los usuarios deben tener en cuenta estos factores y consultar la documentación del fabricante para detalles específicos del modelo.

## Resumen de características

El GV300CAN es un rastreador de calidad vehicular pensado para la gestión de flotas y el monitoreo del transporte. Integra posicionamiento GNSS, comunicación celular, conexión al bus del vehículo y entradas/salidas configurables para soportar seguimiento continuo, reportes de eventos e integración con plataformas de backend como Plaspy.

- Posicionamiento GNSS en tiempo real con un receptor u‑blox All in One para actualizaciones periódicas de localización.
- Múltiples métodos de transmisión incluidos TCP, UDP y SMS para enviar telemetría a Plaspy según la necesidad.
- Soporte para CANBus y J1708 para exponer información de motor y diagnósticos junto con los datos de posición.
- Alarmas y reportes configurables como geocerca, remolque, estacionamiento y detección de choque para una notificación oportuna de incidentes.
- Soporte para sensores analógicos y 1 wire para monitoreo de temperatura y combustible, útil en cadenas de frío y gestión de combustible.

## Características principales del QuecLink - GV300CAN

- Receptor GNSS u‑blox con alta sensibilidad y rendimiento para reportes de ubicación precisos.
- Conectividad GSM GPRS cuatribanda con opciones de transporte TCP, UDP y SMS y compatibilidad con el protocolo QuecLink @Track.
- Soporte para CANBus y J1708 para capturar telemetría del vehículo e integrarla en los paneles de flota.
- Acelerómetro integrado y detección de choques para alertas basadas en eventos y registro de incidentes.
- Entradas y salidas expandibles incluyendo entradas analógicas, entradas digitales y salidas digitales para sensores y control remoto.
- Compatibilidad con sensores de temperatura 1 wire y detección configurable de nivel de combustible para monitorizar cadena de frío y consumo.
- Capacidades de control remoto sobre salidas digitales que permiten habilitar flujos como inmovilizador o antirrobo cuando se usan comandos.
- Funciones de gestión remota que incluyen actualizaciones de firmware y configuración vía interfaces de servicio estándar.

## Cómo funcionan estas funciones con Plaspy

Al emparejar el GV300CAN con Plaspy, sus datos de ubicación, telemetría y eventos se ingieren en la plataforma para visualización, alertas e informes. Plaspy recibe actualizaciones programadas y basadas en eventos desde el dispositivo y las pone a disposición en mapas en vivo, reproducción histórica y flujos de trabajo automatizados.

- Actualizaciones de posición en vivo y trazados históricos mostrados en los mapas de Plaspy para análisis de rutas en tiempo real y retrospectivo.
- Telemetría del bus del vehículo desde CANBus y J1708 enviada a Plaspy para visibilidad del estado del motor, velocidad y datos diagnósticos.
- Datos de sensores como temperatura y nivel de combustible reportados a Plaspy para monitoreo de condiciones de cadena de frío y uso de combustible.
- Reportes de eventos y alarmas por geocerca, remolque, choque y batería baja que se canalizan hacia Plaspy para activar notificaciones y procedimientos automatizados.
- Plaspy puede enviar comandos al dispositivo para controlar salidas digitales donde esté soportado, habilitando inmovilizadores remotos o secuencias de control.

## Casos de uso típicos

- Gestión de flotas y visibilidad de rutas para operaciones de vehículos comerciales.
- Logística de cadena de frío con monitoreo de temperatura y telemetría programada para envíos perecederos.
- Flujos anti robo y recuperación usando geocercas, detección de remolque y control remoto de salidas.
- Monitoreo de combustible y seguimiento del consumo combinando entradas analógicas y telemetría del bus del vehículo.
- Captura de incidentes y reconstrucción posterior mediante acelerómetro y registros de eventos en los paneles de Plaspy.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware y la revisión de hardware, por lo que las capacidades disponibles pueden diferir entre unidades.
- Diferencias regionales de redes y soporte de bandas celulares pueden afectar las opciones de conectividad y deben verificarse para los mercados objetivo.
- Algunos sensores e integraciones, como sensores de temperatura 1 wire o señales CAN específicas, requieren instalación y configuración correctas para reportar a Plaspy.
- QuecLink anunció la eliminación de 2G que afecta a algunas variantes; verifique la compatibilidad de red y las rutas de actualización al planificar despliegues a largo plazo.
- Siempre confirme el comportamiento del dispositivo y los comandos soportados en la documentación del fabricante para la versión de firmware instalada.

## Por qué usar Plaspy con estas funciones

Usar el GV300CAN con Plaspy proporciona a las organizaciones una plataforma unificada para combinar datos de posición GNSS, telemetría del bus del vehículo y entradas de sensores en vistas operativas consolidadas. Plaspy pone la telemetría a disposición para seguimiento en vivo, alertas e informes, de modo que los equipos puedan monitorear la salud del vehículo, condiciones de cadena de frío y eventos de seguridad desde un solo lugar.

Para obtener más información sobre cómo Plaspy puede trabajar con rastreadores como el QuecLink GV300CAN visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y documentación del fabricante, por favor verifique la información en el sitio de QuecLink https://www.queclink.com/ ya que las funciones e implementaciones pueden cambiar con el tiempo.
