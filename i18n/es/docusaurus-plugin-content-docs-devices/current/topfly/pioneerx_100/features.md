---
slug: /topfly/pioneerx_100/features
id: pioneerx_100-features
sidebar_label: Features
title: TopFly - PioneerX 100 Features
sidebar_class_name: menu_item_tracker
description: Resumen de capacidades del rastreador TopFly PioneerX 100 y su integración con Plaspy para rastreo de flotas y telemetría
keywords:
  - TopFly PioneerX 100
  - características PioneerX 100
  - rastreador GPS TopFly
  - PioneerX 100 Plaspy
  - rastreador GPS 4G
  - rastreador BLE 4.2
  - dispositivo de rastreo de flotas
  - rastreador inmovilizador vehicular
  - caché de posiciones sin conexión
  - GNSS multiconstelación
---

# TopFly - PioneerX 100: Características

Esta página describe el contexto público de funcionalidades para el uso del rastreador TopFly PioneerX 100 con Plaspy. Resume las capacidades del dispositivo relevantes para administradores de flota e integradores, y explica cómo se presentan y funcionan esas capacidades cuando el rastreador está conectado a Plaspy para monitoreo en tiempo real, alertas e informes históricos.

La disponibilidad exacta de funciones y su comportamiento puede variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. Para pasos de configuración específicos del equipo, registros de cambios de firmware u opciones de hardware, consulte la documentación oficial del fabricante, ya que los detalles pueden cambiar con el tiempo.

## Resumen de características

El PioneerX 100 es un rastreador compacto y de instalación fija, diseñado para monitoreo continuo de flotas y activos. Su combinación de GNSS multiconstelación, conmutación celular, entradas y salidas configurables y soporte BLE para sensores lo hace adecuado para seguimiento en tiempo real, flujos anti-robo y monitoreo de condiciones cuando se integra con Plaspy.

- Posicionamiento GNSS multiconstelación para mayor precisión y obtención de fijaciones más rápidas que las unidades de una sola constelación.
- Conectividad celular 4G CAT-1 con retroceso a 2G para mantener cobertura en distintas regiones y redes.
- Entradas y salidas digitales y analógicas configurables para detección de encendido, control de relés y monitoreo de accesorios, útiles en configuraciones de inmovilizador y anti-robo.
- Soporte BLE 4.2 para emparejar sensores Bluetooth compatibles y monitorear condiciones ambientales o de carga.
- Amplia memoria local de posiciones para conservar datos históricos durante interrupciones de conectividad y reenviarlos cuando se restablezca la conexión.

## Funciones principales del TopFly - PioneerX 100

- Receptor GNSS de alta sensibilidad con recepción multiconstelación para fijaciones de posición confiables.
- Módem celular 4G CAT-1 con retroceso a 2G para amplia cobertura de red.
- Entradas y salidas digitales y analógicas configurables para detección de encendido y control de relés.
- Radio BLE 4.2 para emparejar sensores y accesorios compatibles.
- Caché local sin conexión para miles de puntos de ubicación que mantiene las rutas cuando no hay conexión.
- Batería de respaldo integrada para preservar mensajes críticos y el estado del dispositivo durante cortes de alimentación.
- Actualizaciones de firmware por aire (FOTA) y configuración por USB Type-C para gestión remota e instalación más sencilla.

## Cómo funcionan estas características con Plaspy

Cuando un PioneerX 100 está conectado a Plaspy, los mensajes y eventos del dispositivo se incorporan a los paneles e informes de Plaspy para que los operadores puedan ver el estado actual y la actividad histórica. Plaspy reconoce automáticamente protocolos comunes de rastreadores y asigna los datos reportados a vistas de ubicación, eventos y telemetría.

- Las actualizaciones de ubicación en vivo y la telemetría aparecen en los mapas de Plaspy y usted puede configurarlas con la frecuencia que permitan el dispositivo y la red.
- Los eventos de entradas digitales, como encendido, puertas o SOS, se muestran como eventos y pueden generar alertas en Plaspy.
- Las posiciones almacenadas en caché se suben a Plaspy después de que se restaura la conectividad, preservando las trayectorias históricas y permitiendo una reproducción confiable.
- Las lecturas de sensores BLE emparejados y las entradas analógicas reportadas por el dispositivo están disponibles en Plaspy para monitoreo de condiciones y generación de alertas.
- Los comandos remotos y flujos de control que soporta el rastreador, como la activación de relés mediante salidas digitales, pueden orquestarse desde Plaspy cuando el dispositivo y la instalación lo permiten.

## Casos de uso típicos

- Monitoreo de ubicación y rutas de flota con reportes frecuentes para conciencia operativa.
- Flujos anti-robo e inmovilización de vehículos usando detección de encendido y control de relés.
- Monitoreo de cadena de frío o condiciones de carga mediante emparejado de sensores BLE de temperatura y humedad.
- Rastreo remoto de activos en áreas con cobertura celular intermitente, aprovechando la caché del dispositivo para preservar las rutas.
- Integraciones OEM en vehículos que requieren factor de forma compacto, E/S configurable y amplio rango de voltaje de entrada.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware y la revisión de hardware; el soporte de sensores BLE, límites de caché y el comportamiento específico de E/S dependen del firmware incluido.
- El soporte de bandas celulares regionales y las variantes regulatorias afectan el rendimiento y la disponibilidad de conectividad en distintos mercados.
- Los accesorios opcionales y carcasas, como una caja IP67, pueden ofrecerse por separado y no necesariamente vienen incluidos con cada unidad.
- Algunas funciones, incluidas las de control remoto y ciertas integraciones de sensores, requieren una instalación y configuración correctas para operar según lo esperado.
- Verifique siempre las notas de la versión del fabricante para conocer cambios en sensores compatibles, protocolos u opciones de seguridad.

## Por qué usar Plaspy con estas funciones

Usar el PioneerX 100 con Plaspy brinda a las organizaciones visibilidad centralizada de ubicaciones, eventos y telemetría de vehículos y activos. Plaspy captura actualizaciones en vivo, gestiona subidas de datos sin conexión y presenta la información de sensores y eventos en paneles e informes que ayudan en despacho, respuesta de seguridad y cumplimiento.

Learn more about how Plaspy can present PioneerX 100 data and support operational workflows on the Plaspy website https://www.plaspy.com. For the most current device specifications, firmware details, and manufacturer variants please verify information with TopFly at https://www.topflytech.com/ as features and firmware behavior can change over time.
