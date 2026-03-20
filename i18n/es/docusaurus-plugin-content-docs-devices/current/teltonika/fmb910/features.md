---
slug: /teltonika/fmb910/features
id: fmb910-features
sidebar_label: Features
title: Teltonika - FMB910 Features
sidebar_class_name: menu_item_tracker
description: Funciones del Teltonika FMB910 y su integración con Plaspy para rastreo 2G, detección de choques, sensores BLE y control I/O
keywords:
  - características Teltonika FMB910
  - rastreador GPS Teltonika FMB910
  - compatibilidad FMB910 Plaspy
  - detección de choques FMB910
  - sensores BLE FMB910
  - inmovilizador I O FMB910
  - rastreador vehicular 2G
  - seguimiento de flotas FMB910
  - telemetría eco driving FMB910
  - resumen Teltonika FMB910
---

# Teltonika - Características del FMB910

Esta página ofrece una visión pública de las capacidades del Teltonika FMB910 y de cómo se presentan cuando el dispositivo se usa con Plaspy. Se concentra en información práctica y no sensible sobre rastreo en tiempo real, flujos de eventos y datos de sensores que Plaspy puede ingerir para apoyar la supervisión de flotas, flujos básicos de control remoto y visibilidad de incidentes.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación, la variante regional y la implementación del fabricante en funciones concretas. Use este contenido como guía de compatibilidad y capacidades, y consulte la documentación oficial de Teltonika para obtener detalles específicos y actualizados del dispositivo.

## Resumen de funciones

El FMB910 es un rastreador vehicular 2G compacto pensado para despliegues de flotas sensibles al costo donde la red 2G sigue disponible. Ofrece reportes de posición sencillos y flujos de eventos que se integran con plataformas telemáticas como Plaspy para proporcionar conciencia de ubicación, alertas y flujos básicos de control remoto.

- Rastreo GPS en tiempo real fiable y reportes de posiciones históricas para visibilidad del vehículo.
- Acelerómetro de 3 ejes configurable usado para detección de choques y eventos de movimiento.
- Entradas y salidas (I/O) para monitoreo de ignición y flujos de control remoto como bloqueo de motor.
- Soporte Bluetooth Low Energy para emparejar sensores externos y balizas que amplían la monitorización.
- Telemetría de conducción ecológica (eco driving) para apoyar análisis de comportamiento del conductor y optimización operativa.
- Diseño compacto y 2G pensado para instalaciones de bajo costo donde la red esté disponible.

## Funciones principales del Teltonika - FMB910

- Reporte de posición GPS en tiempo real y historial de movimiento adecuado para monitoreo de flotas.
- Acelerómetro integrado de 3 ejes con detección de choques configurable y generación de eventos.
- Soporte para Bluetooth Low Energy que permite reportar sensores externos y balizas sobre el estado ambiental o de activos.
- Entradas y salidas digitales, incluyendo entrada de ignición y control de bloqueo de motor para flujos antirobo.
- Telemetría de eco driving y métricas básicas de conducta de manejo para informar reportes y programas de seguridad.
- Gestión remota de firmware y configuración vía Teltonika FOTA WEB según lo provee el fabricante.
- Factor de forma compacto para montaje vehicular y soporte de red 2G para despliegues económicos.

## Cómo funcionan estas funciones con Plaspy

Cuando el FMB910 está conectado a Plaspy, el dispositivo envía datos de ubicación, eventos y sensores que Plaspy ingiere en mapas, alertas y reportes históricos. Plaspy detecta automáticamente protocolos comunes de rastreadores y puede exponer los flujos de datos del FMB910 para monitoreo y operaciones.

- Vistas en mapa en vivo e historial de ubicación basadas en los reportes GPS del FMB910.
- Alertas de incidentes y datos para investigación derivados del acelerómetro y la detección de choques.
- Visibilidad del estado de ignición y bloqueo de motor para soportar monitoreo antirobo y procedimientos de inmovilización configurados.
- Lecturas de sensores BLE y detección de balizas enviadas a Plaspy para monitorización ambiental o de activos.
- Métricas de eco driving y telemetría agregada presentadas en reportes para ayudar a reducir consumo y mejorar la seguridad.

## Casos de uso típicos

- Rastreo de flotas con restricciones de presupuesto para flotas pequeñas y medianas que requieren visibilidad básica en tiempo real.
- Monitoreo antirobo y recuperación de vehículos robados usando reportes de ubicación y bloqueo por I/O cuando está configurado.
- Gestión de incidentes y reconstrucción de choques mediante detección por acelerómetro y líneas de tiempo de eventos.
- Monitorización ambiental o del estado de la carga mediante emparejamiento de sensores BLE y balizas para detección de manipulación o condiciones de carga.
- Programas telemáticos que incluyen análisis de conducción ecológica y reportes de desempeño del conductor.

## Notas sobre disponibilidad de funciones

- El comportamiento de las funciones depende de la versión de firmware y la configuración del fabricante. Verifique las capacidades de firmware antes del despliegue.
- Revisiones de hardware y variantes regionales pueden cambiar bandas soportadas, accesorios o empaques. Consulte los detalles de la unidad específica que planea desplegar.
- Funciones de control remoto como bloqueo de motor o inmovilización requieren cableado e instalación correctos en el vehículo y pueden estar restringidas por regulaciones locales.
- El soporte de sensores Bluetooth depende de los sensores utilizados y de cómo el dispositivo reporta esos sensores a la plataforma.
- El FMB910 ha sido referenciado con notas sobre ciclo de vida del producto en el sitio del fabricante. Confirme los modelos recomendados y el estado de soporte para proyectos a largo plazo.

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMB910 con Plaspy ofrece a las organizaciones una forma ligera y económica de capturar ubicación del vehículo, telemetría básica y datos de eventos en una sola plataforma. Plaspy agrega flujos de posición, acelerómetro, I/O y sensores BLE en paneles, alertas y reglas automatizadas para que los equipos operativos puedan monitorear flotas, responder a incidentes y ejecutar flujos antirobo o de inmovilización donde estén configurados.

Learn more about Plaspy and how it works with compact trackers like the FMB910 at https://www.plaspy.com. For the latest device specific feature details firmware behaviour and manufacturer guidance verify current information on the Teltonika product site https://www.teltonika-gps.com/.
