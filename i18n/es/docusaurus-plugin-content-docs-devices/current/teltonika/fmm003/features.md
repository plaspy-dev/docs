---
slug: /teltonika/fmm003/features
id: fmm003-features
sidebar_label: Features
title: Teltonika - FMM003 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Teltonika FMM003 y su integración con Plaspy para monitoreo de flotas
keywords:
  - Teltonika FMM003
  - Características Teltonika FMM003
  - Rastreador GPS Teltonika FMM003
  - Datos OBD FMM003
  - Rastreador FMM003 LTE Cat M1
  - Gestión de flotas FMM003
  - Compatibilidad FMM003 Plaspy
  - Rastreador OBD II Teltonika
  - Soporte GNSS FMM003
  - Funciones Teltonika FMM003
---

# Teltonika - FMM003: Características

Esta página ofrece una descripción pública y no sensible de las funciones del Teltonika FMM003 y de cómo se aprovechan con Plaspy para el monitoreo de flotas y la visibilidad operativa. Describe las capacidades del dispositivo que son relevantes para los usuarios de Plaspy y cómo deben interpretarse la telemetría y los eventos reportados dentro de la plataforma.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la marca y el modelo del vehículo, y el método de instalación. La información aquí se basa en la documentación del dispositivo y pretende servir como guía práctica; siempre verifique los conjuntos de funciones y el comportamiento actual con el fabricante y comprobando el firmware instalado en sus unidades.

## Resumen de funciones

El FMM003 es un rastreador plug‑and‑play OBD diseñado para uso en flotas, que combina opciones de conectividad celular con lectura de parámetros del vehículo y detecciones integradas de eventos. Está orientado a ofrecer ubicación, estado del vehículo y detección de eventos, facilitando la instalación a través del conector OBD‑II.

- Lectura de parámetros OEM desde OBD para reporte de odómetro y nivel de combustible, mejorando la exactitud del monitoreo de la flota
- Conectividad celular con LTE Cat M1 y NB‑IoT y retroceso a 2G para cobertura ampliada
- Soporte multi‑constelación GNSS para posicionamiento robusto en entornos variados
- Instalación compacta plug‑and‑play en el puerto OBD‑II para despliegues rápidos en vehículos compatibles
- Detecciones integradas de eventos como exceso de velocidad, remolque, desconexión, choque, ralentí excesivo y detección de interferencias
- Capacidad de almacenamiento local para buffering temporal cuando la conectividad celular no está disponible

## Características principales del Teltonika - FMM003

- Lectura de datos OEM via OBD incluyendo acceso directo a odómetro y nivel de combustible cuando el vehículo y el fabricante proporcionan esos parámetros
- Conectividad celular LTE Cat M1 y NB‑IoT con fallback a 2G para una mayor cobertura
- Soporte para múltiples sistemas GNSS que mejora la fiabilidad y precisión del posicionamiento
- Conexión plug‑and‑play mediante el puerto OBD‑II del vehículo para una instalación sencilla
- Memoria flash interna para almacenar temporalmente posiciones y eventos durante interrupciones de conectividad
- Detecciones integradas de eventos y conducción como exceso de velocidad, ralentí prolongado, desconexión/manipulación, remolque, detección de choque y detección de interferencias
- Soporte para configuración y actualizaciones de firmware mediante las herramientas de Teltonika y métodos FOTA, así como configuración móvil con la app del fabricante

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere los reportes del dispositivo y presenta la información de ubicación y eventos en una vista consolidada de la flota. La combinación de datos OBD y detecciones del FMM003 aporta telemetría más completa que Plaspy puede mostrar para uso operativo.

- Las posiciones GPS en tiempo real y el historial se muestran en Plaspy para visibilidad de rutas y localización
- Los valores de odómetro y nivel de combustible provenientes del OBD pueden registrarse y mostrarse en los paneles de telemetría del vehículo
- Los eventos detectados, como exceso de velocidad, remolque, desconexión, choque y ralentí excesivo, se reportan como eventos o alertas en Plaspy para su seguimiento operativo
- Los dispositivos pueden apuntarse a los servidores de Plaspy (por ejemplo el host del servidor de Plaspy) y Plaspy detecta automáticamente el protocolo del rastreador para aceptar los reportes entrantes
- El buffer local del dispositivo ayuda a garantizar que los registros de posición y OBD lleguen a Plaspy después de pérdidas temporales de cobertura

## Casos de uso típicos

- Rastrear la ubicación de vehículos y recoger datos de odómetro para programación de mantenimiento y control de kilometraje
- Monitorear tendencias de nivel de combustible y obtener visibilidad básica del combustible cuando lo permite el OBD del vehículo
- Detectar y alertar sobre eventos como desconexión, remolque, interferencias o choques para mejorar la seguridad y la respuesta
- Reducir el tiempo de instalación en flotas grandes mediante despliegue plug‑and‑play OBD‑II
- Mejorar la gestión de rutas y la supervisión operativa combinando GNSS y telemetría del vehículo
- Apoyar operaciones en áreas con cobertura celular variable usando NB‑IoT o LTE Cat M1 con opciones de fallback

## Notas sobre disponibilidad de funciones

- La disponibilidad de parámetros OBD depende de la marca, modelo y de la lista de parámetros OEM que el dispositivo soporte para ese fabricante
- Algunas detecciones y telemetrías dependen de capacidades específicas de firmware y pueden variar entre versiones de firmware o revisiones de hardware
- El comportamiento y la cobertura celular dependen del soporte local del operador para LTE Cat M1 y NB‑IoT en su región y de la configuración de la SIM del dispositivo
- El tipo de instalación y el acceso físico al puerto OBD‑II pueden afectar qué parámetros están disponibles y con qué fiabilidad el dispositivo reporta
- Confirme los modelos de vehículo y las listas de parámetros soportadas con la información oficial de vehículos soportados por Teltonika y mediante pruebas en los vehículos objetivo

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMM003 con Plaspy brinda a las organizaciones visibilidad unificada de la ubicación, el odómetro y ciertos parámetros del vehículo reportados por OBD. Plaspy recoge reportes de posición y eventos y los muestra junto con otros datos de la flota, permitiendo supervisión operativa, alertas e informes que facilitan la gestión de vehículos a escala.

Para obtener más información sobre Plaspy y cómo la plataforma ingiere y muestra datos de rastreadores, visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, detalles de firmware, listas de vehículos soportados y orientación del fabricante, verifique las funciones en el sitio oficial de Teltonika https://www.teltonika-gps.com/
