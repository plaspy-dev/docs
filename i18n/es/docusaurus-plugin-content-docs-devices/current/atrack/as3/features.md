---
slug: /atrack/as3/features
id: as3-features
sidebar_label: Features
title: ATrack - AS3 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS ATrack AS3 y su integración con Plaspy para monitoreo de vehículos y activos
keywords:
  - Funciones ATrack AS3
  - Rastreador GPS ATrack AS3
  - Compatibilidad AS3 con Plaspy
  - Rastreador de vehículos AS3
  - Capacidades de seguimiento AS3
  - Seguimiento de activos ATrack
  - GPS GLONASS AS3
  - Rastreador AS3 IP67
  - Sensor G AS3
  - Rastreadores compatibles con Plaspy
---

# ATrack - Funciones del AS3

Esta página ofrece un panorama público y enfocado en funciones del ATrack AS3 y cómo sus capacidades se aprovechan en la plataforma Plaspy. Resume las funcionalidades prácticas relevantes para el monitoreo de flotas y activos, y explica qué puede esperar cuando el AS3 se integra con Plaspy para visibilidad de ubicación y supervisión operativa.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Use esta página como guía práctica y consulte la documentación del dispositivo para detalles técnicos definitivos y específicos del modelo.

## Resumen de funciones

El ATrack AS3 es un rastreador GPS compacto pensado para vehículos y remolques que requieren conexión periódica a la alimentación pero pueden desconectarse de forma intermitente. Combina seguimiento de ubicación con múltiples opciones de comunicación y un encapsulado resistente para garantizar reportes de posición confiables en entornos exigentes.

- Localización GPS en tiempo real adecuada para vehículos y remolques.
- Varios métodos de transporte de datos, incluidos SMS, TCP y UDP para integración flexible.
- Batería recargable de respaldo de gran capacidad para mantener reportes cuando se corta la alimentación principal.
- Caja con clasificación IP67 para protección contra polvo y resistencia a chorros de agua.
- Posicionamiento opcional con GPS y GLONASS y un sensor G de 3 ejes integrado para detección de movimiento e impacto.

## Funciones principales del ATrack AS3

- Seguimiento de ubicación GPS para mantener conciencia continua de la posición.
- Soporte para redes GPRS HSPA y CDMA en la comunicación de datos.
- Métodos de comunicación por SMS, TCP y UDP para adaptarse a distintos despliegues.
- Batería interna recargable de respaldo para extender la operación durante cortes de energía.
- Clasificación ambiental IP67 para instalaciones exteriores y expuestas.
- Motor opcional combinado GPS y GLONASS para mejorar la precisión de la posición.
- Sensor G de 3 ejes integrado para detectar eventos de movimiento e impactos.
- Capacidad de actualización FOTA del firmware mediante FTP para actualizaciones in situ.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe los datos del rastreador y muestra la información de ubicación y eventos en una única plataforma de monitoreo. Cuando el AS3 está configurado para reportar a Plaspy, sus actualizaciones de posición y señales de eventos forman parte de su vista operativa para enrutamiento, supervisión de activos y revisión histórica.

- Los dispositivos compatibles con Plaspy reportan al servidor de Plaspy (d.plaspy.com) y Plaspy detecta automáticamente el protocolo del rastreador.
- Las opciones de comunicación del AS3 (TCP o UDP) pueden usarse para enviar paquetes de ubicación a Plaspy; Plaspy soporta los reportes habituales basados en TCP y UDP.
- La operación con la batería de respaldo preserva la continuidad de los reportes de posición cuando se desconecta la alimentación del vehículo, ayudando a Plaspy a mantener historiales de seguimiento.
- Los eventos del sensor G reportados por el dispositivo aparecen en Plaspy como indicadores de movimiento o impacto que ayudan a señalar actividad inusual.
- El soporte FOTA y la configuración de registro en el AS3 facilitan el mantenimiento y contribuyen a asegurar un flujo de datos consistente hacia Plaspy después de actualizaciones de firmware.

## Casos de uso típicos

- Rastreo de vehículos de flota para monitoreo de rutas e historial de ubicaciones.
- Monitoreo de remolques y activos donde las conexiones de alimentación pueden ser intermitentes.
- Despliegues en entornos exteriores o exigentes donde se requiere protección IP67.
- Casos que requieren detección in situ de impactos o movimiento para mayor conocimiento de incidentes.
- Instalaciones que necesitan opciones de comunicación flexibles entre SMS y redes basadas en paquetes.
- Situaciones que demandan actualizaciones periódicas de firmware y personalización de registros para mantenimiento a largo plazo.

## Notas sobre disponibilidad de funciones

- Algunas funciones, como GPS más GLONASS o ciertas funcionalidades de firmware, pueden ser opcionales y depender de la configuración exacta del modelo y del nivel de firmware.
- El comportamiento del sensor G integrado y la lógica de control de eventos puede variar según la configuración del firmware y las opciones del fabricante.
- La calidad de la instalación y el cableado del vehículo afectan si la operación con batería de respaldo y el reporte continuo se comportan como se espera.
- El soporte regional de redes celulares (GPRS HSPA CDMA) depende de la variante de hardware y de la SIM o proveedor de servicio utilizado.

## Por qué usar Plaspy con estas funciones

Usar el ATrack AS3 con Plaspy ofrece a las organizaciones una forma práctica de combinar hardware de rastreo robusto orientado a vehículos con una plataforma centralizada de monitoreo. Plaspy recopila las actualizaciones de ubicación y las señales de eventos del AS3 para que los equipos puedan supervisar movimientos, revisar historiales y responder a incidentes desde una sola interfaz.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current and detailed device specifications, firmware notes, and manufacturer guidance, please verify feature details on the ATrack website https://www.atrack.com.tw/. Device features, firmware behavior, and manufacturer implementation can change over time, so always consult the official manufacturer documentation for the latest information.
