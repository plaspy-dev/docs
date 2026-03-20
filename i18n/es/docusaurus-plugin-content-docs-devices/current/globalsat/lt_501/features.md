---
slug: /globalsat/lt_501/features
id: lt_501-features
sidebar_label: Features
title: GlobalSat - LT-501 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GlobalSat LT-501 y cómo funciona con Plaspy
keywords:
  - funciones GlobalSat LT-501
  - rastreador GPS GlobalSat LT-501
  - capacidades LoRa LT-501
  - LT-501 compatible con Helium
  - rastreo interior exterior LT-501
  - detección de movimiento LT-501
  - posicionamiento interior BLE LT-501
  - funciones de geovallas LT-501
  - larga duración de batería LT-501
  - compatibilidad LT-501 Plaspy
---

# GlobalSat - LT-501 — Funciones

Esta página describe el contexto público de funciones para el uso del rastreador GlobalSat LT-501 con Plaspy. Resume las capacidades prácticas del LT-501 para el rastreo de activos, la localización en interiores y exteriores, y cómo esa información puede presentarse en Plaspy, sin exponer secretos de configuración del dispositivo ni detalles de implementación privados.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Use esta página como una vista funcional y consulte la documentación oficial del fabricante para la configuración específica del dispositivo y los detalles técnicos más recientes.

## Resumen de características

La serie GlobalSat LT-501R es un rastreador compacto LoRa con GPS diseñado para monitoreo de objetos y activos en interiores y exteriores. Está pensado para despliegues de larga duración con énfasis en bajo consumo, conectividad LoRaWAN y detección básica de movimiento y proximidad.

- Conectividad LoRaWAN para transmisión de datos de largo alcance y bajo consumo, incluida compatibilidad con redes Helium
- GPS para posicionamiento en exteriores, con la posibilidad de activar o desactivar el GPS según sea necesario
- Soporte BLE para posicionamiento en interiores y detección de proximidad mediante balizas
- Acelerómetro integrado de 3 ejes para detección de movimiento e informes basados en actividad
- Funciones de geovallas para definir límites virtuales y detectar eventos de entrada o salida

## Características principales del GlobalSat - LT-501

- Soporte LoRaWAN Clase A y Clase C para comportamientos flexibles de enlace ascendente y descendente
- Compatibilidad con despliegues en la red Helium para conectividad LoRaWAN distribuida
- Informes de ubicación basados en GPS para exteriores con intervalos de reporte configurables
- Radio BLE para flujos de trabajo de posicionamiento interior mediante detección de balizas
- Acelerómetro de 3 ejes integrado para detectar movimiento y generar reportes basados en actividad
- Capacidad de geovallas para desencadenar eventos basados en límites
- Conector micro USB para carga y transferencia de datos básica

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y procesa datos de ubicación y eventos de rastreadores compatibles como el LT-501 y presenta esa información para uso operativo. Plaspy detecta automáticamente muchos protocolos de rastreadores y consolida la telemetría entrante para que los equipos puedan supervisar activos sin gestionar los detalles de protocolo de bajo nivel.

- Los puntos de ubicación reportados por el LT-501 aparecen en los mapas de Plaspy para ver rutas y posiciones
- Los eventos de movimiento del acelerómetro pueden representarse en Plaspy como actividad o cambios de estado
- Los eventos de entrada y salida de geovallas reportados por el dispositivo pueden generar notificaciones o integrarse en flujos de trabajo basados en reglas
- Las detecciones de proximidad basadas en BLE y la presencia de balizas pueden mostrarse como indicadores de ubicación interior complementarios cuando el dispositivo suministra esos datos
- Plaspy acepta datos de rastreadores a través de transportes de red estándar y realiza la detección de protocolos para simplificar la integración

## Casos de uso típicos

- Rastreo de activos a largo plazo para equipos y contenedores en entornos mixtos interior/exterior
- Localización de activos en almacenes o instalaciones usando balizas BLE para mejorar la awareness en interiores
- Monitorización preventiva de activos que se mueven raramente, usando detección de movimiento para revelar desplazamientos inesperados
- Despliegues distribuidos en Helium u otras redes LoRaWAN donde se requiere conectividad de largo alcance y bajo consumo
- Supervisión mediante geovallas para áreas de preparación de inventario o patios de almacenamiento

## Notas sobre disponibilidad de funciones

- Las versiones de firmware pueden afectar qué funciones están disponibles o cómo se comportan; verifique las notas de la versión del firmware para más detalles
- Las revisiones de hardware o variantes regionales pueden cambiar ajustes de radio, bandas LoRaWAN soportadas o componentes incluidos
- Algunas funciones, como el posicionamiento interior por BLE, dependen del despliegue y configuración de balizas y no solo del rastreador
- El comportamiento de geovallas y los intervalos de reporte suelen ser configurables pero dependen del firmware del dispositivo y las herramientas de gestión
- La documentación del fabricante es la fuente autorizada para pines, especificaciones de energía y guías de seguridad

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el GlobalSat LT-501 permite a las organizaciones centralizar datos de ubicación y eventos de rastreadores LoRa en una única vista operativa. La plataforma de Plaspy está diseñada para mostrar el historial de posiciones, eventos de movimiento y actividad de geovallas junto con otros activos, de modo que los equipos puedan supervisar el estado, investigar movimientos y configurar alertas sin gestionar múltiples paneles de distintos proveedores.

Si desea saber más sobre cómo Plaspy puede integrarse con dispositivos como el GlobalSat LT-501, visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, notas de firmware y detalles del fabricante sobre la serie LT-501, verifique la información en el sitio web de GlobalSat https://www.globalsat.com.tw/.
