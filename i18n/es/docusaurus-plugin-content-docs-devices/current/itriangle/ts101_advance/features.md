---
slug: /itriangle/ts101_advance/features
id: ts101_advance-features
sidebar_label: Features
title: iTriangle - TS101 Advance Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador GPS iTriangle TS101 Advance y su integración con Plaspy para telemetría de flotas y antirrobo
keywords:
  - iTriangle TS101 Advance
  - Características TS101 Advance
  - localizador GPS iTriangle
  - TS101 Advance Plaspy
  - seguimiento de vehículos
  - rastreador GPS para flotas
  - rastreador antirrobo
  - GNSS multiconstelación
  - acelerómetro giroscopio
  - gestión de flotas Plaspy
---

# iTriangle - Características del TS101 Advance

Esta página describe el contexto público de funcionalidades para usar el rastreador GPS iTriangle TS101 Advance con Plaspy. Resume las capacidades del dispositivo que resultan relevantes para los usuarios de Plaspy, explica cómo suelen reflejarse esas capacidades en un flujo de trabajo de gestión de flotas y destaca el valor práctico para la supervisión de vehículos, la seguridad y la operación.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Cuando los detalles sean críticos para el despliegue, la configuración o el cumplimiento normativo, revise la documentación del dispositivo de iTriangle y verifique el firmware y la revisión de hardware instalados antes de confiar en una capacidad específica.

## Visión general de funciones

El TS101 Advance es una unidad telemática robusta diseñada para proporcionar telemetría continua de posición y eventos en flotas de vehículos y despliegues antirrobo. Combina posicionamiento GNSS multiconstelación, conectividad celular, sensores de movimiento integrados y entradas y salidas flexibles para ofrecer ubicación en tiempo real, reporte de eventos e puntos de integración con accesorios y sistemas del vehículo.

- GNSS multiconstelación para mayor fiabilidad de la posición en entornos urbanos y complejos.
- Conectividad celular 2G con soporte TCP/IP y SMS para reporte en vivo y comandos remotos.
- Sensores de movimiento integrados, incluyendo acelerómetro y giroscopio, para capturar eventos de conducción y movimientos bruscos.
- I/O completo y puerto RS232 para integrar accesorios como sensores externos y control de relés.
- Batería interna de respaldo y detección de manipulación para soportar resiliencia y flujos antirrobo.
- Opciones de gestión remota mediante SMS, USB, Bluetooth y actualizaciones OTA/FOTA para facilitar el mantenimiento.

## Funciones principales del iTriangle - TS101 Advance

- Soporte GNSS multiconstelación (GPS, GLONASS, Galileo, BeiDou) para fijaciones de posición estables.
- Conectividad celular 2G con reporte TCP/IP y gestión por SMS.
- Acelerómetro y giroscopio integrados para detección de movimiento, registro de eventos severos y análisis de comportamiento de conducción.
- Entradas analógicas y digitales, salidas digitales y puerto RS232 para integración con sensores externos y relés.
- Batería interna de respaldo para mantener el seguimiento y las alertas cuando se corta la alimentación principal.
- Alertas por manipulación y detección de encendido para apoyar la seguridad y los reportes basados en el estado de ignición.
- Carcasa robusta con protección IP65 y amplio rango de temperatura de operación para entornos exteriores y vehículos exigentes.
- Soporte Bluetooth para configuración local y conexión con sensores BLE; OTA/FOTA para actualizaciones remotas de firmware.

## Cómo funcionan estas funciones con Plaspy

Al conectarse a Plaspy, el TS101 Advance transmite información de ubicación, eventos y estado de I/O para que los equipos operativos puedan monitorear activos, responder a alertas y analizar actividad histórica. Plaspy puede usar la telemetría y las señales de evento del dispositivo para poblar mapas, generar informes y activar alertas basadas en reglas que apoyan flujos de trabajo de gestión de flotas y antirrobo.

- Vistas de ubicación en tiempo real e históricas en Plaspy para seguimiento en vivo y análisis de rutas.
- Los datos de movimiento y eventos severos se integran en los reportes de comportamiento de conductores e incidentes dentro de Plaspy.
- Los cambios en entradas digitales y analógicas (por ejemplo encendido o disparos de sensores externos) alimentan reglas y notificaciones.
- Las alertas por manipulación y batería de respaldo pueden activar flujos antirrobo o notificaciones de escalamiento.
- Diagnóstico remoto y estado del dispositivo visibles en Plaspy ayudan a los administradores a planificar mantenimiento y actualizaciones de firmware, complementando las capacidades OTA del dispositivo.

## Casos de uso típicos

- Seguimiento y despacho de flotas con ubicación en vivo de vehículos y reproducción histórica de rutas.
- Monitoreo antirrobo y workflows de inmovilización remota soportados por alertas de manipulación y control de relés.
- Análisis de comportamiento de conductores y registro de eventos severos para programas de seguridad y capacitación.
- Monitoreo de combustible e integración de sensores externos usando canales de entrada analógica.
- Instalaciones duraderas en vehículos para transporte pesado o actividades al aire libre que requieren protección ambiental.
- Diagnóstico y configuración remotos para reducir visitas de servicio en campo.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y las revisiones de hardware pueden cambiar las funciones y el comportamiento disponible; confirme el firmware instalado para conocer las capacidades precisas.
- Las variantes celulares regionales y la cobertura 2G pueden afectar la conectividad y las bandas soportadas en mercados específicos.
- Algunas funciones requieren una instalación y cableado adecuados (por ejemplo integración de I/O y control de relés) para exponer la telemetría esperada a Plaspy.
- Bluetooth, USB y métodos de configuración por SMS pueden usarse para la configuración inicial o diagnóstico, pero los detalles de implementación varían según el firmware del dispositivo.
- La documentación del fabricante y las notas de versión son la fuente autorizada para especificaciones técnicas detalladas y registros de cambios.

## Por qué usar Plaspy con estas funciones

Usar el TS101 Advance con Plaspy ofrece a las organizaciones una combinación práctica de hardware robusto y una plataforma diseñada para visibilidad, gestión de eventos y supervisión operativa. Plaspy convierte las transmisiones en tiempo real del dispositivo, los eventos de movimiento y las señales de I/O en registros buscables, alertas y paneles que ayudan a las flotas a reducir tiempos de inactividad, responder con rapidez a incidentes de seguridad y mejorar la eficiencia operativa.

Learn more about how Plaspy works with devices like the TS101 Advance at https://www.plaspy.com and verify the latest device specific details, firmware notes, and hardware revisions on the manufacturer site https://www.itriangle.net/. Device features, firmware behavior, and manufacturer implementation can change over time so always confirm critical details with the official documentation.
