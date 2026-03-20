---
slug: /neomatica/adm333/features
id: adm333-features
sidebar_label: Features
title: Neomatica - ADM333 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS Neomatica ADM333 y su integración con Plaspy para seguimiento y telemetría en tiempo real
keywords:
  - funciones Neomatica ADM333
  - rastreador GPS Neomatica ADM333
  - rastreador ADM333 BLE
  - rastreador ADM333 GPRS
  - telemetría ADM333
  - compatibilidad ADM333 Plaspy
  - rastreador vehicular Neomatica ADM333
  - monitoreo de combustible ADM333
  - detección de interferencias ADM333
  - reseña Neomatica ADM333
---

# Neomatica - Características del ADM333

Esta página describe el contexto público de uso del rastreador Neomatica ADM333 con Plaspy. Resume las capacidades de la versión ADM333 v2 que son relevantes para implementaciones con Plaspy, explica cómo el equipo reporta ubicación y telemetría y qué funcionalidades prácticas puede esperar al integrar el rastreador en los flujos de monitoreo y gestión de flotas con Plaspy.

La disponibilidad exacta de funciones en una unidad concreta puede variar según la versión de firmware, la revisión de hardware, las opciones de instalación y la implementación del fabricante. Cuando corresponda, esta página se basa en el conjunto de características públicas de la ADM333 v2; para límites específicos del dispositivo, comportamiento del firmware o compatibilidad con periféricos consulte siempre la documentación oficial de Neomatica.

## Resumen de funciones

El ADM333 v2 es un rastreador GPS ultra compacto pensado para vehículos y activos estacionarios que requieren seguimiento en tiempo real fiable y un ecosistema de sensores flexible. Combina posicionamiento GNSS, enlace celular GPRS y soporte Bluetooth Low Energy en un paquete pequeño para ofrecer telemetría, alertas por eventos y almacenamiento temporal de datos para conexiones intermitentes.

- Factor de forma compacto y batería interna para operación autónoma por periodos cortos e instalaciones discretas.
- Reporte de ubicación GNSS con buffering de ruta a bordo para preservar trayectos durante cortes de conectividad.
- Enlace celular GPRS con un protocolo abierto que facilita la integración en plataformas telemáticas como Plaspy.
- Soporte para sensores Bluetooth Low Energy y interfaces cableadas como RS‑485 y 1‑wire para telemetría de temperatura y combustible.
- Detección de eventos que incluye alertas por interferencias, detección de movimiento e identificación de conductor, capaces de generar notificaciones en Plaspy.

## Funciones principales del Neomatica - ADM333

- Posicionamiento GNSS con receptor modernizado para actualizaciones de ubicación fiables.
- Conectividad celular GPRS con un protocolo abierto diseñado para servidores telemáticos de terceros.
- Soporte Bluetooth Low Energy 4.0 para sensores externos y balizas.
- Interfaces RS‑485 y 1‑wire para integración de sensores cableados y dispositivos estilo Modbus.
- Múltiples entradas analógicas, incluyendo detección de ignición para eventos de encendido/apagado del motor.
- Batería recargable integrada que provee varias horas de autonomía en caso de pérdida de alimentación.
- Almacenamiento a bordo de registros de ruta para preservar el historial cuando la cobertura celular es intermitente.
- Detección de interferencias (jamming) y acelerómetro triaxial para detección de movimiento y eventos.

## Cómo funcionan estas funciones con Plaspy

Plaspy procesa la telemetría y los reportes de ubicación del ADM333 para mostrar ubicaciones en tiempo real, rutas históricas y alertas basadas en eventos. El ADM333 v2 usa un protocolo abierto y enlace GPRS, por lo que puede configurarse para enviar paquetes directamente a un endpoint de Plaspy o a un servidor intermedio; Plaspy detecta automáticamente los protocolos de rastreadores soportados para simplificar la incorporación.

- Las actualizaciones de ubicación GNSS en tiempo real aparecen en Plaspy para seguimiento en vivo y visualización en mapa.
- Los registros de ruta bufferizados en el dispositivo se importan a Plaspy cuando se restablece la conectividad, preservando las trayectorias históricas.
- Las lecturas de sensores BLE, sondas 1‑wire y periféricos RS‑485 pueden reenviarse a Plaspy para paneles de telemetría y reportes.
- Los cambios de ignición y de entradas analógicas están disponibles como eventos en Plaspy para flujos de trabajo de flotas, como el registro de encendido y apagado del motor.
- Las alertas por movimiento, detección de interferencias e identificación de conductor pueden configurarse para activar notificaciones y respuestas automáticas dentro de Plaspy.

## Casos de uso típicos

- Gestión de flotas de vans y camiones ligeros donde se requieren instalaciones compactas y monitoreo de ignición.
- Flujos anti robo que utilizan detección de interferencias e integración con inmovilizadores remotos para reducir el uso no autorizado.
- Despliegues de monitoreo de combustible combinando sensores cableados o inalámbricos con telemetría RS‑485.
- Cadena de frío o monitoreo ambiental mediante sensores BLE o sondas 1‑wire de temperatura para remolques y activos estacionarios.
- Rastreo de activos en flotas mixtas que incluyen maquinaria agrícola y equipos auxiliares que necesitan seguimiento discreto y alertas por evento.

## Notas sobre disponibilidad de funciones

- La versión de firmware y las opciones de configuración determinan qué sensores y funciones están activos en una unidad ADM333 concreta.
- Las revisiones de hardware o variantes regionales pueden cambiar las interfaces disponibles o el soporte de bandas de radio.
- Algunas funciones de periféricos requieren cableado adicional, accesorios o módulos complementarios para operar tal como describe el fabricante.
- El comportamiento del dispositivo respecto a funciones como detección de interferencias, identificación de conductor y escaneo BLE puede ajustarse mediante herramientas de configuración del fabricante.
- Consulte siempre la documentación de Neomatica para obtener la información más actualizada sobre compatibilidad y recomendaciones de instalación.

## Por qué usar Plaspy con estas funciones

Usar el ADM333 con Plaspy proporciona a los operadores una forma predecible de recolectar ubicación y telemetría desde un rastreador compacto y compatible con sensores. La plataforma de Plaspy captura actualizaciones en tiempo real, almacena rutas bufferizadas y muestra alertas por eventos para que los equipos puedan monitorear activos, responder a incidentes y analizar datos operativos de flotas con dispositivos variados.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific feature details and firmware behavior with Neomatica at https://neomatica.com/.
