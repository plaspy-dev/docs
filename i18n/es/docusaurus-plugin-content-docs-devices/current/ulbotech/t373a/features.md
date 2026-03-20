---
slug: /ulbotech/t373a/features
id: t373a-features
sidebar_label: Features
title: Ulbotech - T373A Features
sidebar_class_name: menu_item_tracker
description: Resumen de las funciones públicas del rastreador OBD-II Ulbotech T373A plug and play y su integración con Plaspy
keywords:
  - Ulbotech T373A
  - características T373A
  - rastreador GPS Ulbotech T373A
  - rastreador OBD II
  - rastreador GPS OBD2
  - telemetría vehicular
  - rastreador para gestión de flotas
  - rastreador compatible con Plaspy
  - rastreador con inmovilizador del motor
  - telemática de comportamiento del conductor
---

# Ulbotech - Características del T373A

Esta página describe el contexto público de características para el uso del rastreador Ulbotech T373A con Plaspy. Se enfoca en las capacidades prácticas, qué datos transmite el dispositivo a Plaspy y cómo se suelen emplear esas señales en flotas y en flujos de trabajo de monitoreo vehicular. El objetivo es ayudarle, como administrador de flota, integrador u operador, a entender qué esperar del T373A cuando esté conectado a la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión del firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para parámetros técnicos específicos del dispositivo, notas de versión de firmware u opciones avanzadas de configuración, consulte la documentación oficial de Ulbotech y las notas de firmware del dispositivo, además de la guía de despliegue de Plaspy.

## Resumen de características

El T373A es un rastreador OBD-II plug-and-play diseñado para instalaciones rápidas, seguimiento en tiempo real y reporte de telemetría vehicular. Orientado a operaciones de flota, alquiler, seguros y asistencia en carretera, el dispositivo expone parámetros clave del vehículo y eventos de movimiento, y facilita el despliegue mediante configuración de red automática y actualizaciones FOTA.

- Instalación rápida en puerto OBD-II sin cableado complejo para un despliegue ágil
- Posicionamiento en tiempo real por GPS/GLONASS y arranque asistido por localización para seguimiento consistente
- Reporte completo de datos OBD-II, incluyendo parámetros del motor y relacionados con combustible
- Salida digital integrada para funciones de inmovilizador (corte de motor)
- Soporte Bluetooth 2.0 para emparejar periféricos externos y ampliar la telemetría
- Acelerómetro integrado para detección de eventos de movimiento y comportamiento del conductor

## Características principales del Ulbotech T373A

- Factor de forma OBD-II plug-and-play para instalación inmediata en puertos OBD-II estándar
- Receptor GNSS (familia u‑blox) que proporciona posicionamiento GPS y GLONASS para seguimiento en vivo
- Conectividad celular multibanda para reporte de datos fiable sobre redes móviles
- Soporte completo de datos OBD-II y CANBUS, incluyendo RPM, velocidad, temperatura del refrigerante, nivel de combustible y consumo
- Salida digital integrada para control de inmovilizador (corte de motor)
- Interfaz Bluetooth 2.0 para periféricos y accesorios compatibles
- Acelerómetro de 3 ejes para detección de movimiento y análisis del comportamiento del conductor
- Capacidad de actualización de firmware por FOTA y detección automática de APN/zona horaria para mantenimiento a escala de flota

## Cómo funcionan estas funciones con Plaspy

Cuando el T373A está conectado a Plaspy, el dispositivo transmite posición y telemetría vehicular a la plataforma Plaspy, donde los datos se normalizan y se presentan para monitoreo, alertas e informes. Plaspy ingiere parámetros OBD-II, eventos del acelerómetro, códigos de diagnóstico y posiciones GPS, de modo que esas señales pueden utilizarse en mapas en vivo, reglas de eventos y reportes programados.

- Visibilidad en tiempo real de la ubicación y el movimiento del vehículo en los mapas en vivo de Plaspy
- Parámetros OBD-II y códigos de falla (DTC) integrados en la telemetría del vehículo y en los informes de mantenimiento
- Datos de nivel de combustible y consumo disponibles para monitoreo de combustible e informes operativos
- Estado de inmovilizador remoto y acciones de corte de motor visibles y controlables mediante políticas de Plaspy cuando están habilitadas
- Eventos de comportamiento del conductor derivados del acelerómetro, mostrados como alertas y en la puntuación del conductor
- Datos de periféricos Bluetooth accesibles por Plaspy cuando están emparejados y son compatibles con el firmware del dispositivo

## Casos de uso típicos

- Gestión de flotas y supervisión de rutas con ubicación en vivo, historial de viajes y telemetría del vehículo
- Flujos antirobo usando salida de corte de motor, detección de movimiento y alertas de Plaspy para respuesta rápida
- Telemática para seguros y alquiler con puntuación de conductores, reporte de DTC y análisis por uso
- Asistencia en carretera y despacho con localización inmediata del vehículo y diagnósticos básicos
- Programas de monitoreo de combustible y eficiencia operativa mediante datos OBD-II de combustible y consumo
- Programas de capacitación al conductor usando eventos de conducción brusca y comportamiento registrados por el acelerómetro

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones puede depender de la versión del firmware del dispositivo y de la revisión de hardware que envíe el fabricante.
- Algunos parámetros OBD-II reportados dependen de la marca y modelo del vehículo y del protocolo OBD que ese vehículo soporte.
- El soporte para periféricos Bluetooth y el rango de accesorios compatibles puede variar según el firmware y puede requerir procedimientos de emparejamiento específicos.
- Las funciones de inmovilizador remoto y corte de motor pueden requerir cableado adicional, configuración o cumplimiento normativo local según la región.
- Las variantes regionales de conectividad celular y el soporte por parte de los operadores afectan el rendimiento de la conectividad y deben verificarse antes de un despliegue a gran escala.

## Por qué usar Plaspy con estas funciones

Usar el T373A con Plaspy integra la telemetría OBD-II y la ubicación GNSS en una sola plataforma donde los datos se normalizan, visualizan y hacen accionables. Plaspy transforma las señales crudas del dispositivo en información operativa útil, como disparadores de mantenimiento, tendencias de consumo de combustible, puntuación de conductores y flujos antirobo, permitiendo una supervisión más efectiva de la flota y una respuesta más rápida ante incidentes.

Para obtener más información sobre Plaspy y cómo puede usarse con rastreadores compatibles como el Ulbotech T373A visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar los detalles técnicos y la documentación más reciente con Ulbotech en http://www.ulbotech.com/ antes de tomar decisiones de despliegue.
