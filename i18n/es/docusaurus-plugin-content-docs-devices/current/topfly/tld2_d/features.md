---
slug: /topfly/tld2_d/features
id: tld2_d-features
sidebar_label: Features
title: TopFly - TLD2-D Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador OBDII TopFly TLD2-D compatible con Plaspy
keywords:
  - TopFly TLD2-D características
  - TopFly TLD2 D rastreador GPS
  - rastreador OBDII TLD2-D
  - telemetría CAN BUS TLD2-D
  - sensores BLE TopFly
  - rastreador compatible con Plaspy
  - gestión de flotas TLD2-D
  - seguimiento de vehículos TopFly
  - rastreador LTE TLD2-D
  - eventos de conducción TLD2-D
---

# TopFly - TLD2-D: Características

Esta página ofrece un resumen público de las características del TopFly TLD2-D y cómo sus capacidades se integran con Plaspy para la supervisión de flotas y vehículos. Resume las funciones prácticas visibles para el usuario y las formas en que el dispositivo puede usarse en Plaspy sin exponer detalles de implementación de bajo nivel.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, la instalación en el vehículo y la implementación del fabricante. Para detalles técnicos específicos del dispositivo y las notas de firmware más recientes, consulte la documentación oficial de TopFly y las notas de la versión.

## Resumen de funciones

El TLD2-D es un rastreador OBDII plug and play diseñado para despliegues rápidos en flotas, autos de renta y vehículos corporativos. Su diseño se centra en ofrecer actualizaciones frecuentes de ubicación además de telemetría vehicular detallada y entradas de sensores accesorios que se integran en Plaspy para visibilidad operativa.

- Instalación OBDII plug and play para despliegues rápidos sin cableado permanente.
- Actualizaciones de posición GPS en tiempo real y alta frecuencia para mayor precisión de ubicación.
- Telemetría profunda vía CAN BUS que incluye VIN, odómetro, nivel de combustible, RPM y códigos de diagnóstico para análisis del vehículo.
- Soporte BLE 5.0 para sensores externos de temperatura, humedad y puertas que amplían el monitoreo.
- Sensores de movimiento integrados y zumbador para detección de eventos bruscos y alertas dentro del vehículo.
- Resiliencia celular con modos LTE de bajo consumo, cobertura de respaldo y múltiples opciones de transporte para entrega confiable de datos.

## Funciones principales del TopFly - TLD2-D

- Factor de forma OBDII plug and play para instalación no invasiva y despliegues rápidos en flotas.
- Rastreo de alta frecuencia con intervalos de reporte configurables hasta unos pocos segundos.
- Lectura de datos CAN BUS que proporciona VIN, odómetro, nivel de combustible, RPM y códigos de diagnóstico.
- Compatibilidad BLE 5.0 para emparejar sensores de temperatura, humedad y estado de puertas y complementar los datos del vehículo.
- Sensor interno de movimiento de 6 ejes para detección de aceleraciones bruscas, frenadas y giros pronunciados, y zumbador interno para alertas al conductor.
- Conectividad celular multimodo con respaldo y transportes flexibles como TCP, UDP, MQTT y SMS.
- Batería de respaldo integrada y detección de interferencias de red para apoyar acciones anti robo y alertas por desconexión.
- Funciones de gestión remota incluyendo FOTA y estados diagnósticos para mantenimiento y actualizaciones.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere el flujo de datos del TLD2-D para ofrecer mapeo en vivo, reportes históricos y alertas. La plataforma presenta ubicación del vehículo, telemetría CAN BUS e información de sensores emparejados en paneles unificados para que los administradores de flota puedan tomar acciones ante eventos y tendencias.

- La ubicación en tiempo real y la telemetría se muestran en los mapas de Plaspy y pueden vincularse a los registros de vehículos.
- Campos CAN BUS como VIN, odómetro y RPM están disponibles para reportes, filtros y flujos de trabajo de mantenimiento.
- Los eventos de conducción detectados por el sensor de movimiento se registran como eventos de comportamiento para revisión y capacitación.
- Las lecturas de sensores BLE de temperatura, humedad y estado de puertas aparecen junto con la información de ubicación para monitoreo de carga y acceso.
- Las alertas por desconexión, los eventos de batería de respaldo y los indicadores de interferencia de red se usan para activar notificaciones anti robo en Plaspy.

## Casos de uso típicos

- Incorporación rápida de unidades en flota, con dispositivos instalados sin necesidad de cableado permanente.
- Monitoreo rutinario de flota y planificación de mantenimiento utilizando datos de odómetro y códigos de diagnóstico.
- Programas de control de combustible y eficiencia operativa mediante datos CAN BUS de combustible y RPM.
- Programas de seguridad y capacitación de conductores basados en detección de eventos bruscos e incidentes registrados.
- Transporte sensible a la temperatura donde se emparejan sensores BLE de temperatura y humedad para registrar condiciones.
- Programas anti robo y recuperación que aprovechan alertas por desconexión y detección de interferencias.

## Notas sobre disponibilidad de funciones

- Las revisiones de firmware y software pueden habilitar o modificar campos de telemetría y el comportamiento de reporte.
- Las revisiones de hardware o variantes regionales pueden afectar las bandas celulares soportadas y la compatibilidad con accesorios.
- Algunos accesorios BLE son específicos del fabricante y el comportamiento de emparejamiento puede variar según el firmware.
- La disponibilidad de datos OBDII depende de la marca y modelo del vehículo y de los parámetros CAN soportados.
- Consulte la documentación de TopFly para las especificaciones de hardware y firmware más recientes.

## Por qué usar Plaspy con estas funciones

Usar el TLD2-D con Plaspy ofrece a las organizaciones una vía sencilla para combinar ubicación de alta frecuencia con diagnóstico vehicular y sensado ambiental. Plaspy centraliza la telemetría del dispositivo en una plataforma para soportar mapeo, alertas, análisis históricos y flujos de trabajo operativos que importan a administradores de flota, operadores de renta y equipos de seguridad.

Aprenda más sobre Plaspy y cómo la plataforma puede presentar datos del TLD2-D en paneles e informes en https://www.plaspy.com. Para los detalles más recientes por dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de TopFly https://www.topflytech.com/ .
