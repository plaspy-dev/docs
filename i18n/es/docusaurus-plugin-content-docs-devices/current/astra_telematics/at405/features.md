---
slug: /astra_telematics/at405/features
id: at405-features
sidebar_label: Features
title: Astra Telematics - AT405 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Astra Telematics AT405 y su integración con Plaspy para rastreo y telemetría de flotas
keywords:
  - funciones Astra Telematics AT405
  - rastreador GPS AT405
  - compatibilidad AT405 Plaspy
  - rastreo vehicular Astra Telematics
  - integración sensores BLE AT405
  - telemetría CANBus AT405
  - conectividad LTE Cat 1 AT405
  - rastreador IP65 AT405
  - bajo consumo AT405
  - control inmovilizador AT405
---

# Astra Telematics - Funciones del AT405

Esta página ofrece un resumen público de las funciones del Astra Telematics AT405 y de cómo sus capacidades se aprovechan con Plaspy para el seguimiento de flotas, proyectos de vehículos conectados y servicios de movilidad compartida. El enfoque está en las funciones visibles para el usuario y el valor operativo cuando el AT405 está integrado con Plaspy para monitoreo en tiempo real, visibilidad de eventos e informes históricos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Cuando procede, esta página indica consideraciones prácticas e invita a confirmar detalles específicos del dispositivo en la documentación de Astra Telematics.

## Visión general de funciones

El AT405 es una unidad telemática compacta diseñada para vehículos, pensada para flotas de scooters, motos y vehículos ligeros. Combina conectividad celular, GNSS multiconstelación, BLE, interfaces vehiculares y una pequeña batería de respaldo para ofrecer localización continua y telemetría apta para la integración con Plaspy.

- Posicionamiento GNSS en tiempo real usando múltiples constelaciones de satélites para mayor fiabilidad de la ubicación.
- Enlace celular LTE Cat 1 para el envío continuo de ubicación y telemetría a Plaspy.
- Integración vehicular mediante CANBus más entradas y salidas digitales para monitoreo de estado y control de actuadores.
- Soporte BLE para integrar sensores y balizas de corto alcance y ampliar la telemetría o habilitar flujos basados en proximidad.
- Carcasa IP65 y amplio rango de tensión de entrada para soportar motos, scooters y vehículos ligeros.
- Diseño de bajo consumo con batería de respaldo de 510 mAh para mantener el rastreo durante cortes de alimentación.

## Funciones principales del Astra Telematics - AT405

- Soporte GNSS multiconstelación incluyendo GPS, Galileo, GLONASS y BeiDou para posicionamiento robusto.
- Conectividad celular LTE Cat 1 para reportes en vivo y visibilidad remota.
- Interfaz CANBus para telemetría vehicular cuando los mensajes del vehículo están disponibles.
- Dos entradas digitales y dos salidas digitales para detección de encendido y control de actuadores como inmovilización.
- Bluetooth Low Energy para integración con sensores y balizas de corto alcance.
- Batería interna de respaldo de 510 mAh para operación limitada durante cortes de energía.
- Carcasa con grado de protección IP65 y opciones de conectores automotrices para instalaciones en flotas.
- Interfaces adicionales como 1-Wire, RS232 y componentes de grado vehicular para mayor flexibilidad de integración.

## Cómo funcionan estas funciones con Plaspy

Cuando está conectado, el AT405 envía ubicación, estado y telemetría a Plaspy, donde los equipos pueden monitorear vehículos en tiempo real, revisar trayectos históricos y activar alertas según eventos. Plaspy detecta automáticamente protocolos compatibles del rastreador y visualiza los datos clave para uso operativo.

- La ubicación en tiempo real y el historial de posiciones aparecen en los mapas de Plaspy para seguimiento en vivo y revisión de rutas.
- Estados del vehículo y actualizaciones de eventos procedentes de entradas digitales y CANBus pueden mostrarse como alertas o indicadores en paneles de control.
- Los datos de sensores BLE y la telemetría de corto alcance pueden asociarse a unidades en Plaspy para enriquecer el contexto de cada vehículo.
- Las salidas digitales pueden usarse para implementar inmovilización remota u otros flujos de actuadores y su estado resultante es visible en Plaspy.
- Los intervalos de reporte y las opciones de payload pueden personalizarse para que Plaspy reciba la mezcla de telemetría necesaria para monitoreo y análisis.

## Casos de uso típicos

- Flotas de moto sharing y scooters que requieren hardware compacto con protección IP65 para despliegues urbanos.
- Gestión de flotas de motocicletas y vehículos ligeros usando telemetría CANBus para obtener información operativa.
- Flujos de trabajo anti robo e inmovilización que combinan detección de movimiento y control remoto de salidas.
- Procesos de check-in y check-out en movilidad compartida aprovechando proximidad BLE y balizas.
- Instalaciones posventa donde el amplio rango de voltaje y los conectores automotrices simplifican la integración.
- Operaciones de última milla y comercio ligero que necesitan rastreadores compactos con modos de bajo consumo.

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen del firmware instalado y de la revisión de hardware de cada unidad; las capacidades pueden cambiar con actualizaciones de firmware.
- La visibilidad en CANBus depende del vehículo y de los mensajes que el vehículo expone en su red.
- Las integraciones BLE requieren sensores compatibles y emparejamiento o aprovisionamiento local para que los datos de sensores estén disponibles en el dispositivo y en Plaspy.
- La duración de la batería de respaldo está influenciada por la frecuencia de reportes, la configuración de energía y el sistema eléctrico del vehículo utilizado en la instalación.
- El soporte de bandas celulares regionales varía según la variante del producto; consulte la hoja de especificaciones del producto para cobertura de bandas por región.

## Por qué usar Plaspy con estas funciones

Usar el AT405 con Plaspy ofrece a los operadores una vía práctica para combinar ubicación en tiempo real, telemetría vehicular y datos de sensores de corto alcance en una sola plataforma de monitoreo. Las interfaces de grado automotriz y el formato compacto del AT405 lo hacen especialmente útil para flotas de scooters y motocicletas, donde el espacio, la durabilidad y la flexibilidad de alimentación son fundamentales.

Learn more about how Plaspy can visualize and act on AT405 data by visiting https://www.plaspy.com. For the latest device specifications, firmware behavior and manufacturer details verify current information on the Astra Telematics website https://astratelematics.com/.
