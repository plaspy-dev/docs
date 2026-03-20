---
slug: /astra_telematics/at402/features
id: at402-features
sidebar_label: Features
title: Astra Telematics - AT402 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador GPS Astra Telematics AT402 y su integración con Plaspy para gestión de flotas y movilidad compartida
keywords:
  - Astra Telematics AT402
  - características AT402
  - rastreador GPS AT402
  - características rastreador Astra Telematics
  - compatibilidad AT402 con Plaspy
  - rastreo vehicular AT402
  - rastreador GPS para motos compartidas
  - AT402 CANBus BLE RS232
  - rastreador LTE M GPS
  - AT402 IP65 automotriz
---

# Astra Telematics - Características del AT402

Esta página ofrece una vista pública de las características del Astra Telematics AT402 y cómo sus capacidades se integran en la plataforma de gestión de flotas Plaspy. Se describen las funciones del dispositivo relevantes para el rastreo en tiempo real, la telemetría vehicular y las implementaciones de movilidad compartida cuando se utiliza con Plaspy, basadas en la descripción del fabricante y los detalles de compatibilidad con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la configuración regional de la red celular y los detalles de la instalación y el cableado del vehículo. Para límites técnicos específicos del equipo, notas de versión y pasos de configuración consulte la documentación oficial de Astra Telematics y las notas de firmware de su dispositivo.

## Resumen de características

El AT402 es un rastreador GPS compacto, preparado para uso automotriz, diseñado para ofrecer seguimiento continuo y telemetría de vehículos para flotas ligeras y casos de movilidad compartida. Combina conectividad LTE‑M como vía principal con conmutación a GSM/GPRS, GNSS integrado y un conjunto de interfaces vehiculares para enviar datos de ubicación y eventos a Plaspy para monitoreo, alertas y análisis.

- Conectividad celular LTE‑M como vía principal con conmutación a 2G GSM/GPRS para mantener los reportes donde LTE‑M no esté disponible.
- Soporte multi GNSS con antena GNSS interna para obtener fijaciones de posición fiables en entornos urbanos y en movimiento.
- Integración vehicular mediante CANBus, RS232, entradas y salidas digitales, y driver ID para exponer la ignición y parámetros del vehículo en Plaspy.
- Bluetooth Low Energy para emparejar sensores locales e interacciones de corto alcance útiles para compartir motos y flujos de trabajo basados en proximidad.
- Carcasa compacta IP65 de grado automotriz con antenas internas y conector automotriz para simplificar la instalación.
- Batería de respaldo interna y amplio rango de voltaje operativo para mejorar la resiliencia en escenarios de antirobo y uso compartido.

## Características principales del Astra Telematics - AT402

- Conectividad celular: LTE‑M como vía principal con conmutación a GSM/GPRS 2G para reportes continuos según las condiciones de cobertura.
- Multi GNSS: Soporte para constelaciones GNSS habituales y antena GNSS interna para reportes de posición.
- Interfaces vehiculares: CANBus, RS232 y soporte 1‑Wire para recopilar parámetros del bus del vehículo y datos de periféricos cuando estén disponibles.
- Entradas/salidas y soporte de conductor: Entradas y salidas digitales más capacidad de driver ID para capturar eventos de ignición y asociación de conductor.
- Bluetooth Low Energy: BLE local para emparejar sensores, balizas o habilitar interacciones de corto alcance.
- Hardware robusto e instalación: Clasificación IP65, antenas GNSS y GSM internas, conector automotriz para montaje en producción o posventa.
- Resiliencia de energía: Amplio rango de voltaje operativo y batería interna de respaldo de 510 mAh para mantener los reportes durante interrupciones de energía.
- Soporte de producto: Garantía del fabricante y actualizaciones de sistema durante la vida útil como parte del soporte de Astra Telematics, además de servicios opcionales de personalización.

## Cómo estas características funcionan con Plaspy

Plaspy recibe posiciones y telemetría de rastreadores compatibles para proporcionar visibilidad unificada, alertas e informes. El AT402 puede transmitir posiciones GNSS, parámetros del bus vehicular y eventos de entradas a Plaspy, donde se muestran, se correlacionan y se usan para activar reglas y flujos de trabajo operativos.

- Visibilidad en tiempo real de posición y movimiento dentro de Plaspy para rastreo de vehículos y monitoreo de rutas.
- Telemetría vehicular desde CANBus y RS232 mostrada como parámetros y eventos relacionados con combustible, velocidad y otros datos expuestos por el bus cuando el vehículo los proporciona.
- Eventos de entrada digital y driver ID mapeados a eventos de ignición y cambios de conductor para monitoreo operativo y antirobo.
- Información de sensores BLE y proximidad presentada en Plaspy cuando el dispositivo reporta datos de sensores emparejados.
- Plaspy detecta automáticamente los protocolos soportados por el rastreador y puede aceptar los reportes del dispositivo hacia la nube Plaspy; dispositivos Astra como el AT402 pueden configurarse para reportar al endpoint de Plaspy para monitoreo y análisis.

## Casos de uso típicos

- Rastreo en tiempo real de flotas ligeras que requieren reportes de posición y telemetría vehicular básica.
- Implementaciones de compartición de motos y micromovilidad donde dispositivos compactos IP65 con BLE soportan interacciones de usuario y verificaciones de corto alcance.
- Flujos de trabajo de monitoreo y recuperación antirobo usando supervisión de ignición, reportes de batería de respaldo y salidas configurables gestionadas mediante reglas en Plaspy.
- Monitoreo de salud del vehículo y consumo de combustible cuando los parámetros del CANBus se exponen y se reenvían a Plaspy para alertas y análisis.
- Despliegues posventa y de producción que se benefician de conectores automotrices y kits de integración para una instalación más rápida y a escala.

## Notas sobre disponibilidad de funciones

- Las actualizaciones de firmware y software pueden habilitar, modificar o desaprobar funciones; verifique el conjunto de funciones de su unidad respecto al firmware instalado.
- Las revisiones de hardware y las variantes regionales pueden cambiar el soporte de bandas celulares, tipos de conectores o compatibilidad con accesorios.
- Las capacidades de integración con el vehículo dependen del bus del vehículo y de los parámetros que este exponga a través de CANBus o RS232.
- El tipo de instalación y el cableado afectan señales disponibles como la detección de ignición y el comportamiento de las entradas y salidas digitales.
- Las personalizaciones del fabricante y kits de evaluación opcionales pueden modificar los mapeos de E/S por defecto o el comportamiento de reporte.

## Por qué usar Plaspy con estas funciones

Usar el AT402 con Plaspy reúne el rastreo a nivel de dispositivo y la telemetría vehicular en una plataforma diseñada para la supervisión operativa. Plaspy convierte posiciones GNSS, parámetros CANBus, eventos de entradas y datos de sensores BLE en paneles, alertas e informes que apoyan la optimización de flotas, la gestión de movilidad compartida y los flujos de trabajo antirobo.

Conozca más sobre cómo Plaspy puede trabajar con dispositivos Astra Telematics y otros rastreadores compatibles en https://www.plaspy.com. Los conjuntos de funciones de los dispositivos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información específica más reciente en el sitio web de Astra Telematics https://astratelematics.com/ antes de tomar decisiones de despliegue.
