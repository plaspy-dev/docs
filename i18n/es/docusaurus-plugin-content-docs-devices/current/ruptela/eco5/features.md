---
slug: /ruptela/eco5/features
id: eco5-features
sidebar_label: Features
title: Ruptela - Eco5 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Ruptela Eco5 y cómo se integra con Plaspy para visibilidad de flotas y carga
keywords:
  - Ruptela Eco5
  - características Eco5
  - rastreador GPS Ruptela Eco5
  - compatibilidad Eco5 Plaspy
  - seguimiento de flotas
  - monitoreo de carga
  - identificación de conductor
  - rastreador BLE 5.0
  - rastreador IP54 IP68
  - entradas de monitoreo de combustible
---

# Ruptela - Eco5 Características

Esta página ofrece un resumen público de las funciones del rastreador Ruptela Eco5 y explica cómo sus capacidades se integran con Plaspy para la gestión de flotas, el monitoreo de carga y la identificación de conductores. Está orientada a describir las funciones prácticas y no sensibles que puede esperar al desplegar el Eco5 con Plaspy, y a destacar la telemetría y la visibilidad operativa que el dispositivo puede aportar a sus paneles y flujos de trabajo en Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para detalles técnicos específicos del dispositivo, notas de firmware y las declaraciones de compatibilidad más recientes, consulte la documentación y las notas de lanzamiento de Ruptela.

## Resumen de funciones

El Eco5 es un rastreador compatible con Plaspy diseñado para ofrecer posicionamiento fiable, funcionamiento de bajo consumo y telemetría flexible para vehículos y activos. Combina un módulo GNSS de alta calidad con variantes celulares, soporte Bluetooth Low Energy y una gama de entradas y salidas para las necesidades habituales de telemetría en flotas.

- Posicionamiento GNSS de alta precisión para informes de ubicación confiables en Plaspy.
- Varias opciones celulares para adaptarse a requisitos de cobertura de red y longevidad.
- Carcasas robustas IP54 e IP68 adecuadas para distintos entornos de vehículo y carga.
- BLE 5.0 para conectar accesorios inalámbricos y sensores periféricos.
- Múltiples E/S digitales y analógicas más una interfaz 1-wire para identificación de conductor y conexión de sensores.
- Batería de respaldo integrada y detección de interferencias para continuidad y aviso anti-robo.

## Funciones principales de Ruptela - Eco5

- GNSS multi-constelación mediante un módulo u-blox premium para fijaciones de posición consistentes.
- Opciones de conectividad celular que incluyen 4G Cat-1 y 4G Cat-M1 con retroceso a 2G para soportar despliegues amplios.
- Bluetooth Low Energy 5.0 para conectar accesorios inalámbricos como sensores BLE y balizas.
- Múltiples entradas y salidas: entradas digitales, salidas digitales y entradas combo analógicas/digitales además de una interfaz 1-wire.
- Formas robustas disponibles en carcasas IP54 e IP68 para adaptarse a distintos entornos de instalación.
- Batería de respaldo integrada para mantener los reportes durante interrupciones de la alimentación principal.
- Detección de interferencias (jamming) que aporta indicadores de estado del dispositivo relevantes para la monitorización de seguridad.
- Corriente de reposo ultrabaja para soportar despliegues prolongados con el vehículo detenido y reducir el consumo de energía.

## Cómo funcionan estas funciones con Plaspy

Cuando el Eco5 envía telemetría a Plaspy, la ubicación, los eventos de E/S, los datos de periféricos BLE y el estado del dispositivo se mapean a las interfaces de Plaspy para que los administradores de flota puedan vigilar activos y responder a eventos en tiempo casi real. La integración con Plaspy permite que el dispositivo alimente mapas, informes y alertas que apoyan las decisiones operativas diarias.

- Flujos de ubicación en tiempo real y reproducción histórica de rutas visibles en los mapas de Plaspy.
- Eventos de entradas digitales y analógicas reflejados en los registros de eventos de Plaspy y usados en alertas basadas en reglas.
- Eventos de identificación por 1-wire vinculados a la asignación de conductor y a los informes de comportamiento en Plaspy.
- Lecturas de accesorios BLE (cuando se configuran y están disponibles) presentadas en Plaspy como telemetría adicional para monitoreo de carga o condiciones ambientales.
- Notificaciones de estado del dispositivo, como actividad de la batería de respaldo y detección de interferencias, mostradas en Plaspy para monitorización de seguridad y continuidad.

## Casos de uso típicos

- Seguimiento de flotas mixtas para vehículos ligeros y pesados en operaciones urbanas y regionales.
- Monitoreo antirobo con detección de interferencias y alertas de batería de respaldo para flujos de recuperación.
- Reportes de nivel de combustible y telemetría analógica para apoyar el análisis de consumo y la prevención de pérdidas.
- Identificación de conductor y atribución de jornada mediante la interfaz 1-wire para registros precisos de conductores.
- Monitoreo de condiciones de la carga con sensores BLE que aportan datos de temperatura o estado cuando aplica.
- Despliegues escalables que requieren hardware resistente y gestión remota de dispositivos.

## Notas sobre disponibilidad de funciones

- La presencia de funciones puede variar según la versión de firmware y la revisión de hardware del dispositivo; verifique los detalles de la variante Eco5 específica antes del despliegue.
- Las variantes regionales de bandas celulares y los códigos comerciales del producto afectan la cobertura de red y deben seleccionarse según el mercado objetivo.
- El soporte de periféricos BLE y los tipos específicos de sensores dependen de la compatibilidad de accesorios y de la configuración local.
- Las decisiones de instalación y el cableado influyen en qué entradas, salidas y funciones de respaldo estarán disponibles en la práctica.
- Para especificaciones técnicas autorizadas y comportamiento de firmware actualizado, consulte la documentación de producto de Ruptela.

## Por qué usar Plaspy con estas funciones

Usar el Ruptela Eco5 con Plaspy ofrece una combinación práctica de posicionamiento preciso, E/S flexible y conectividad moderna que ayuda a las organizaciones a mantener visibilidad y control operativo. Plaspy captura datos de ubicación y eventos del Eco5 para alimentar mapas en vivo, informes y alertas que respaldan operaciones de flota, monitorización de seguridad y flujos de trabajo basados en telemetría.

Conozca más sobre cómo Plaspy puede trabajar con rastreadores compatibles como el Eco5 en https://www.plaspy.com. Para las especificaciones de dispositivo más recientes, notas de firmware y orientación del fabricante, verifique los detalles con Ruptela en https://ruptela.com/ para asegurarse de que su despliegue coincida con la información de producto más actual.
