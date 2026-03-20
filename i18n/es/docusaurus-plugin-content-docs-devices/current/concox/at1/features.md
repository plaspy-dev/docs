---
slug: /concox/at1/features
id: at1-features
sidebar_label: Features
title: Concox - AT1 Features
sidebar_class_name: menu_item_tracker
description: Resumen de características del rastreador Concox AT1 y su compatibilidad con Plaspy para supervisión de activos y flotas
keywords:
  - Concox AT1
  - características Concox AT1
  - funciones rastreador GPS Concox AT1
  - capacidades AT1
  - funciones AT1
  - compatibilidad AT1 Plaspy
  - rastreador para activos resistentes
  - rastreador GPS con montaje magnético
  - rastreador GPS de larga batería
  - dispositivo para seguimiento de contenedores
---

# Concox - Características del AT1

Esta página describe el contexto funcional público para usar el rastreador Concox AT1 con Plaspy. Incluye las capacidades prácticas del AT1, cómo se integran esas capacidades en los flujos de trabajo de Plaspy y el valor operativo habitual que puede esperar al incorporar este modelo en despliegues de telemática en la nube y seguimiento de activos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el tipo de instalación. La configuración del fabricante, las actualizaciones de firmware y la normativa local pueden afectar ciertas funciones, por lo que considere lo siguiente como un panorama funcional y no una especificación definitiva del dispositivo.

## Resumen de características

El Concox AT1 es un rastreador GNSS compacto y redeplegable diseñado para el seguimiento de activos resistentes en exteriores y la supervisión de flotas. Combina amplia autonomía de batería, una carcasa robusta y sensores integrados para ofrecer actualizaciones de posición fiables, notificaciones de eventos y entrega de datos con buffering cuando la conectividad es intermitente.

- Posicionamiento GNSS preciso con fallback a LBS para mantener la ubicación en zonas de recepción marginal.
- Carcasa resistente con clasificación IP67 y montaje magnético fuerte para una fijación sencilla en contenedores, remolques y activos exteriores.
- Autonomía prolongada gracias a una batería recargable de 6,000 mAh, adecuada para despliegues largos y con poco mantenimiento.
- Detección de eventos a bordo, incluyendo sensores de luz y movimiento para alertas por manipulación o movimiento.
- Micrófono impermeable con monitoreo remoto de voz y grabación de audio local para aportar contexto situacional.
- Buffer local de datos para almacenar posiciones y audio cuando la conectividad se interrumpe y enviarlos a la nube una vez restablecida.

## Características principales del Concox - AT1

- Posicionamiento GNSS con fallback LBS para informes de ubicación resilientes en áreas de cobertura mixta.
- Carcasa IP67 y montaje magnético para uso en exteriores y en contenedores sin instalaciones complejas.
- Batería recargable de 6,000 mAh que proporciona operación extendida y modos de ahorro de energía configurables.
- Sensores integrados, incluidos sensor de luz y acelerómetro, para detección de manipulación y eventos de movimiento.
- Micrófono impermeable con capacidad de monitoreo remoto y grabación de voz a bordo.
- Almacenamiento local en buffer (32+32 Mb) para conservar telemetría y audio hasta que exista conexión.
- Soporte celular cuatribanda para cubrir 2G donde esté disponible.
- Modos de reporte configurables para equilibrar la frecuencia de seguimiento y la duración de la batería.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere ubicaciones, eventos y telemetría buffered desde el AT1 para que los operadores puedan ver posiciones en tiempo real, recibir alertas y analizar recorridos históricos desde una sola plataforma. Plaspy detecta automáticamente los protocolos compatibles y muestra eventos y telemetría del dispositivo en paneles, informes y herramientas de alerta.

- Las posiciones GNSS y LBS en vivo aparecen en los mapas de Plaspy para ofrecer visibilidad continua de los activos.
- Los eventos por manipulación, movimiento y otros disparadores de sensores se envían como alertas a Plaspy para una respuesta operativa inmediata.
- El buffering local asegura que las posiciones y los audios grabados se suban a Plaspy una vez que la conectividad se restablece, preservando la continuidad de los registros.
- Las funciones de audio, como el monitoreo remoto de voz y las grabaciones almacenadas, pueden asociarse a las líneas de tiempo de eventos en Plaspy para aportar contexto situacional.
- La configuración del modo de reporte en el dispositivo influye en la frecuencia de actualización y en el consumo de batería, aspecto que Plaspy puede reflejar en los flujos de monitoreo e informes.

## Casos de uso típicos

- Seguimiento de remolques, pallets y activos sin propulsión durante el tránsito con un esfuerzo mínimo de instalación.
- Supervisión del exterior de carga y contenedores donde se requiere protección IP67 y montaje magnético.
- Flujos de trabajo antirobo y detección de manipulación usando sensores de luz y movimiento para disparar alertas.
- Monitoreo de personas en situación de cuidado o vulnerables con funciones de audio, siempre bajo el consentimiento y las normas aplicables.
- Despliegues temporales o estacionales donde se necesita un rastreo redeplegable y de larga autonomía.
- Inventarios de activos a largo plazo y auditorías de ubicación para logística y gestión de equipos.

## Notas sobre disponibilidad de funciones

- La funcionalidad puede variar según la versión de firmware y la revisión de hardware; los comportamientos específicos descritos aquí siguen la descripción del dispositivo pero pueden actualizarse por el fabricante.
- La disponibilidad de redes celulares regionales y el soporte de 2G pueden afectar la conectividad y el comportamiento de reporte en algunos países.
- La grabación de audio y las funciones de monitoreo remoto están sujetas a leyes locales y requisitos de privacidad; asegúrese de que los despliegues cumplan con la normativa aplicable y las políticas de consentimiento.
- Algunas funciones de gestión remota, como actualizaciones de firmware por aire, pueden no estar especificadas para una unidad concreta; verifique las capacidades de actualización remota con el fabricante.
- La calidad de la instalación y la ubicación influyen en la recepción GNSS, el rendimiento de los sensores y la fiabilidad del montaje magnético.

## Por qué usar Plaspy con estas funciones

Usar el Concox AT1 con Plaspy ofrece un camino directo hacia la visibilidad operativa y la supervisión basada en eventos para activos y flotas. La forma robusta y la larga vida de batería del AT1 reducen la carga de instalación y mantenimiento, mientras que los sensores integrados y el buffering local ayudan a mantener telemetría útil aun cuando la conectividad es intermitente. Plaspy consolida ubicación, eventos y contexto de audio en paneles y alertas que soportan flujos antirobo, supervisión de flotas y análisis histórico.

Learn more about Plaspy and how device compatibility can support your tracking workflows at https://www.plaspy.com. For the latest device specifications, firmware behavior and manufacturer implementation details, verify the current information on the Concox official site https://www.iconcox.com/ as features and firmware may change over time.
