---
slug: /topfly/knightx_300/features
id: knightx_300-features
sidebar_label: Features
title: TopFly - KnightX 300 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del TopFly KnightX 300 y su integración con Plaspy para monitoreo de activos y cadena de frío
keywords:
  - TopFly KnightX 300
  - características KnightX 300
  - rastreador GPS TopFly
  - KnightX 300 Plaspy
  - seguimiento cadena de frío
  - rastreador de activos BLE
  - rastreador recargable
  - GNSS multiconstelación
  - rastreador LTE Cat M1
  - registro en búfer
---

# TopFly - Características del KnightX 300

Esta página ofrece un resumen público de las funciones del TopFly KnightX 300 y de cómo el dispositivo se integra con Plaspy para seguimiento, captura de telemetría y visibilidad de sensores. Describe las capacidades del rastreador que interesan a gerentes de flota, equipos logísticos y operadores que usan Plaspy para supervisar activos y condiciones ambientales.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Por eso esta página se centra en funciones prácticas y públicas y en cómo se usan comúnmente con Plaspy, en lugar de detalles de configuración específicos o privados del dispositivo.

## Resumen de funciones

El KnightX 300 es un rastreador compacto y recargable diseñado para instalaciones no permanentes y visibilidad continua. Combina posicionamiento GNSS multiconstelación, comunicaciones celulares de bajo consumo, soporte BLE para sensores, sensores de temperatura internos y opcionales externos, y registro en búfer para mantener trazas cuando la cobertura es intermitente.

- Actualizaciones de ubicación en tiempo real para visibilidad persistente de activos y recuperación.
- Telemetría ambiental que incluye temperatura interna y entradas de sonda externa opcional y sensores BLE para monitoreo de cadena de frío.
- Batería recargable de larga duración y intervalos de reporte configurables para equilibrar tasa de actualización y autonomía.
- Soporte BLE 5.1 para emparejar sensores inalámbricos y llaveros, ampliando el monitoreo sin cableado.
- Registro en búfer para almacenar datos cuando está sin conexión y reenviar los registros cuando vuelve la cobertura.

## Características principales del TopFly - KnightX 300

- Soporte GNSS multiconstelación para posicionamiento preciso con GPS, GLONASS, BeiDou, Galileo y QZSS.
- LTE Cat M1 con NB-IoT y retorno a GSM para amplia cobertura y conectividad de área amplia de bajo consumo.
- Radios BLE 5.1 para emparejamiento de sensores inalámbricos e integración de llaveros.
- Sensor de temperatura interno y compatibilidad con sonda externa para usos en cadena de frío.
- Registro en búfer y almacenamiento offline para preservar ubicación y telemetría durante brechas de cobertura.
- Batería recargable de 6400 mAh con carga USB-C para despliegues portátiles y no permanentes.
- Carcasa con clasificación IP67 para uso exterior protegido en entornos expuestos.
- Soporte FOTA para actualizaciones de firmware cuando el fabricante las proporciona.

## Cómo funcionan estas funciones con Plaspy

Al implementarse con Plaspy, el KnightX 300 centraliza flujos de ubicación y datos de sensores en un único entorno de monitoreo, de modo que los equipos pueden ver rastros de posición, alertas y datos ambientales junto con sus otros activos. Plaspy acepta transportes de dispositivo comunes y puede detectar automáticamente el protocolo del rastreador para su ingestión.

- El seguimiento en tiempo real y los reportes frecuentes aparecen en los mapas y paneles de Plaspy para visibilidad operativa.
- La telemetría ambiental y las lecturas de sensores BLE se ingresan en los paneles de Plaspy para vistas de cadena de frío y cumplimiento.
- Los eventos de botón de pánico y de llavero emparejado generan alertas y pueden integrarse en los flujos de notificación de Plaspy.
- Los registros en búfer se reenvían a Plaspy cuando regresa la conectividad, preservando las trazas históricas y la continuidad de eventos.
- El dispositivo puede configurarse para enviar datos a puntos finales de Plaspy por TCP o UDP y Plaspy detectará y procesará el protocolo del rastreador.

## Casos de uso típicos

- Fijación temporal a equipos sin alimentación, contenedores o remolques para rastreo de ubicación sin instalación permanente.
- Monitoreo de cadena de frío donde se deben registrar y revisar datos de sonda interna y externa.
- Protección de paquetes y equipos desatendidos usando eventos de botón de pánico y alertas de llavero BLE para mitigar robos.
- Telemetría distribuida con sensores BLE de temperatura y humedad emparejados a un rastreador portátil.
- Operaciones de flota que requieren picos de actualizaciones de alta frecuencia por periodos cortos y gran autonomía en espera el resto del tiempo.

## Notas sobre disponibilidad de funciones

- Diferencias en firmware y revisiones de hardware pueden cambiar funciones disponibles, como perfiles BLE soportados o la frecuencia de reporte.
- Los intervalos de reporte y la autonomía de la batería dependen de las opciones de configuración, las condiciones de red y la frecuencia de sondeo de sensores.
- Las variantes regionales del dispositivo pueden diferir en soporte de bandas celulares y requisitos de certificación.
- Accesorios opcionales como sondas de temperatura externas o sensores BLE específicos se venden por separado y requieren firmware compatible.
- Consulte las notas de lanzamiento del fabricante para los cronogramas FOTA más recientes y adiciones de funciones.

## Por qué usar Plaspy con estas funciones

Usar el KnightX 300 con Plaspy centraliza la ubicación y la telemetría ambiental en una plataforma diseñada para gestión de flotas y supervisión logística. Plaspy ayuda a convertir los flujos del dispositivo en visualizaciones de mapa, alertas y trazas históricas que facilitan la recuperación de activos, el cumplimiento de la cadena de frío y las operaciones rutinarias.

Learn more about deploying Plaspy with compatible trackers at https://www.plaspy.com. For the most current device specific feature details firmware behavior and manufacturer guidance verify information on the official TopFly website https://www.topflytech.com/
