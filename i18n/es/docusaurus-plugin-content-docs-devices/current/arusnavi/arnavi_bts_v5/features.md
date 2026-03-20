---
slug: /arusnavi/arnavi_bts_v5/features
id: arnavi_bts_v5-features
sidebar_label: Features
title: Arusnavi - Arnavi BTS v.5 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del sensor BLE Arusnavi Arnavi BTS v.5 y su integración con Plaspy para telemetría de flotas
keywords:
  - Arusnavi Arnavi BTS v.5
  - Funciones Arnavi BTS v.5
  - Funciones GPS Arnavi BTS v.5
  - sensor de temperatura BLE
  - etiqueta iBeacon
  - monitoreo cadena de frío
  - BLE compatible con Plaspy
  - detección de puertas con sensor de contacto
  - baliza de identificación de activos
  - batería CR2477 reemplazable
---

# Arusnavi - Características de Arnavi BTS v.5

Esta página ofrece un resumen público y no sensible del conjunto de funciones del Arusnavi Arnavi BTS v.5 y de cómo este dispositivo puede integrarse con Plaspy. El enfoque está en las capacidades prácticas orientadas al usuario y en las formas habituales en que la telemetría del BTS v.5 se enruta hacia Plaspy cuando el equipo es detectado por una pasarela BLE compatible con Plaspy o emparejado con gateways GPS y rastreadores Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. El contenido a continuación se basa en información pública del dispositivo y describe capacidades e patrones de integración típicos; confirme siempre los detalles específicos del dispositivo y el comportamiento del firmware más reciente con la documentación del fabricante.

## Resumen de características

El Arnavi BTS v.5 es un sensor BLE compacto y etiqueta iBeacon diseñado para proporcionar lecturas de temperatura, detección de estado por contacto y una identidad de baliza para etiquetado de activos. Cuando se usa con una pasarela BLE compatible con Plaspy o junto con dispositivos GPS de Plaspy, el BTS v.5 aporta telemetría ambiental y de estado que complementa los datos de ubicación en flujos de trabajo de monitoreo de flotas y activos.

- Publicidad BLE y identidad iBeacon con UUID, MAJOR y MINOR configurables para identificación de activos
- Medición de temperatura con opciones de reporte frecuente adecuadas para monitoreo de cadena de frío
- Sensor de contacto o magnético para detección de apertura/cierre de puertas y conciencia básica de manipulación
- Intervalo de transmisión y potencia de radio configurables para equilibrar rapidez de respuesta y duración de batería
- Batería reemplazable CR2477 para despliegues prolongados en vehículos y contenedores

## Características principales de Arusnavi - Arnavi BTS v.5

- Publicidad Bluetooth Low Energy e identidad compatible con iBeacon
- Sensor de temperatura con cadencia de reporte configurable
- Entrada de estado por contacto o circuito para detección de puertas y manipulación
- Potencia de transmisión de radio configurable para ajustar alcance y consumo de batería
- Batería reemplazable CR2477 para mayor vida útil en campo
- Factor de forma compacto y montable, adecuado para vehículos y contenedores
- Soporte de configurador móvil para iOS y Android para cambiar parámetros de la baliza e intervalos

## Cómo funcionan estas funciones con Plaspy

Cuando un Arnavi BTS v.5 está dentro del alcance de una pasarela BLE compatible con Plaspy o de una gateway vehicular que recoge balizas BLE, sus paquetes de advertising y la telemetría de sensores pueden reenviarse a Plaspy. Plaspy asocia la telemetría BLE entrante con el registro de activo o vehículo correspondiente, de modo que las lecturas de temperatura, la identidad y los eventos de contacto aparecen junto con los datos GPS y demás información de la flota.

- Lecturas de temperatura reenviadas a Plaspy para monitoreo en tiempo real, umbrales y gráficos históricos
- Valores de identidad de la baliza mapeados a registros de activos o compartimentos para etiquetado por proximidad
- Eventos de estado de contacto mostrados como alertas o eventos discretos para detección de manipulación y control de puertas
- Ajustes de reporte reflejados en Plaspy como cambios en la frecuencia de actualización de las corrientes de telemetría
- Telemetría histórica retenida en Plaspy para informes de cumplimiento y análisis posterior a incidentes

## Casos de uso típicos

- Monitoreo de cadena de frío dentro de camiones y contenedores refrigerados
- Telemetría de refrigeradores de vehículo para cumplimiento y alertas por excursiones de temperatura
- Detección de manipulación y apertura/cierre de puertas para flujos de trabajo de seguridad de activos
- Identificación de activos como pallets, compartimentos o equipos mediante valores de identidad iBeacon
- Rastreo ligero por proximidad y verificaciones de inventario en depósitos y bodegas

## Notas sobre disponibilidad de características

- Las revisiones de firmware y hardware pueden cambiar configuraciones disponibles, métricas reportadas y estimaciones de autonomía
- El método de instalación y la ubicación afectan el alcance de radio y la frecuencia con la que una pasarela detecta el dispositivo
- Variantes regionales o modelos certificados pueden tener distinta potencia de transmisión o marcados regulatorios
- Las apps de configurador móvil y las herramientas del fabricante controlan UUID, MAJOR, MINOR y los intervalos de reporte de la baliza
- Para conocer las limitaciones y capacidades más actuales, consulte la documentación oficial del fabricante

## Por qué usar Plaspy con estas características

Usar el Arnavi BTS v.5 con Plaspy aporta telemetría ambiental y de estado a los datos de ubicación basados en flota, permitiendo una visión operativa más completa para casos de cadena de frío, anti-robo y gestión de activos. Plaspy puede consolidar lecturas de temperatura, eventos de contacto e identidades de balizas junto con las señales GPS para que los operadores vean telemetría y ubicación en una sola plataforma.

To learn more about how Plaspy can incorporate BLE sensor data into fleet monitoring and reporting visit https://www.plaspy.com. For the latest Arnavi BTS v.5 technical specifications, firmware notes, and manufacturer guidance verify details on the official Arusnavi website https://www.arusnavi.ru.
