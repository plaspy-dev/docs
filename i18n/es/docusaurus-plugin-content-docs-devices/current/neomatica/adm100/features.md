---
slug: /neomatica/adm100/features
id: adm100-features
sidebar_label: Features
title: Neomatica - ADM100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Neomatica ADM100 y su integración con Plaspy para gestión de flotas y telemetría
keywords:
  - Neomatica ADM100
  - funciones ADM100
  - rastreador GPS ADM100
  - ADM100 Plaspy
  - rastreador Neomatica
  - rastreo vehicular
  - seguimiento de flotas
  - rastreador GNSS
  - rastreador GPRS
  - rastreador RS-485
---

# Neomatica - Funciones del ADM100

Esta página presenta un resumen público de las capacidades del rastreador GPS Neomatica ADM100 cuando se usa con Plaspy. Se destacan las funcionalidades prácticas que el equipo reporta y cómo se aprovechan habitualmente dentro de Plaspy para seguimiento en tiempo real, visibilidad de eventos y análisis de rutas históricas.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, las opciones de instalación y la implementación del fabricante. Para configuración específica del dispositivo, actualizaciones de firmware y detalles técnicos más recientes consulte la documentación de Neomatica y el manual del ADM100.

## Visión general de funciones

El ADM100 es un rastreador vehicular compacto compatible con Plaspy diseñado para reportes de posición fiables, monitoreo de entradas flexibles y despliegues a gran escala. Combina recepción GNSS con reporte por GSM y almacenamiento de rutas en el propio equipo, de modo que las unidades siguen registrando información útil aunque la cobertura de red sea intermitente.

- Posicionamiento GNSS en tiempo real (GPS/GLONASS) para ubicación continua, velocidad y rumbo.
- Almacenamiento de rutas no volátil de hasta 16 000 puntos para subir y reproducir posteriormente.
- Reporte por GSM GPRS integrado para telemetría continua y actualizaciones de firmware remotas.
- Entradas flexibles, incluyendo analógicas y de pulso, para capturar eventos de sensores y conteo de pulsos.
- Interfaz RS-485 para conectar equipos de telemetría adicionales o módulos externos.
- Diseño compacto y rango amplio de tensión de entrada, apto para varios tipos de vehículos y despliegues masivos.

## Características principales del Neomatica - ADM100

- Receptor GNSS de alta sensibilidad compatible con GPS y GLONASS para obtenciones fiables en zonas de recepción compleja.
- Conectividad GPRS con soporte para actualización remota de firmware y direccionamiento por nombre de dominio.
- Memoria de rutas no volátil que almacena hasta 16 000 puntos para preservar trayectos durante pérdidas de red.
- Dos entradas analógicas y dos entradas de pulso para integración con sensores externos y conteo por pulso.
- Entradas discretas aptas para monitoreo de ignición o alarmas y registro de eventos.
- Interfaz RS-485 para integrar equipos adicionales o módulos de telemetría.
- Varios canales de configuración, incluyendo USB, SMS y GPRS, para flujos de despliegue flexibles.
- Amplio rango de tensión de operación para adaptarse a los sistemas eléctricos vehiculares estándar.

## Cómo funcionan estas funciones con Plaspy

Cuando el ADM100 reporta a Plaspy, los datos de posición, eventos y entradas quedan disponibles en la plataforma para monitoreo, alertas e informes. Plaspy recibe la telemetría del equipo y la presenta en mapas en vivo, reportes de recorridos y reproducción histórica para que usted pueda actuar sobre la información de ubicación y eventos.

- Actualizaciones en vivo de posición, velocidad y rumbo mostradas en los mapas de Plaspy para visibilidad en tiempo real de la flota.
- Subida y reproducción del historial de rutas almacenado en la memoria del dispositivo hacia Plaspy para auditoría y análisis.
- Eventos de entradas analógicas y de pulso mapeados a campos de datos de Plaspy o a sensores personalizados para monitoreo de combustible o sensores.
- Eventos de entradas discretas (por ejemplo estados de ignición o alarmas) registrados como eventos y registros para alertas e investigación.
- Dispositivos conectados por RS-485 e entradas de telemetría pueden exponerse en Plaspy como canales adicionales cuando se configuran.
- La capacidad de actualización remota de firmware facilita mantener las unidades desplegadas alineadas con las expectativas del backend mediante los flujos de trabajo de Plaspy.

## Casos de uso típicos

- Operaciones de flota que usan ubicación en vivo y rutas históricas para despacho y optimización de recorridos.
- Monitoreo antirrobo y detección de movimientos no autorizados con registro de eventos de entradas discretas.
- Telemetría y control de combustible mediante entradas de pulso y analógicas para capturar eventos basados en sensores.
- Seguimiento de maquinaria especial y equipos móviles donde la tolerancia amplia de tensión y la recepción GNSS robusta son beneficiosas.
- Despliegues en zonas con cobertura intermitente donde el almacenamiento de rutas en el equipo preserva los datos hasta su subida.
- Escenarios de implementación masiva que se benefician de la configuración remota y la gestión de firmware por GPRS.

## Notas sobre disponibilidad de funciones

- La presencia de una función y su comportamiento exacto dependen de la versión de firmware instalada y pueden cambiar con actualizaciones.
- Las revisiones de hardware o variantes regionales pueden modificar las interfaces disponibles o las bandas soportadas.
- Algunas entradas o interfaces requieren instalación y configuración adecuadas para reportar los valores esperados a Plaspy.
- La funcionalidad RS-485 y los módulos de telemetría conectados pueden necesitar configuración adicional y mapeo tanto en el equipo como en Plaspy.
- Verifique siempre detalles como protocolos soportados y pasos de configuración contra la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el ADM100 con Plaspy ofrece a las organizaciones una forma consistente de centralizar ubicación, eventos de entrada e historial de rutas desde terminales vehiculares compactos. Plaspy transforma la telemetría del ADM100 en información operativa: mapas en vivo, reproducción de recorridos y registros de eventos que apoyan flujos de trabajo de despacho, recuperación y cumplimiento sin requerir visitas constantes al sitio.

Learn more about how Plaspy supports deployed trackers and fleet monitoring at https://www.plaspy.com. For the most current device features, firmware behavior and manufacturer implementation details verify the ADM100 documentation at https://neomatica.com/
