---
slug: /globalsat/gtr_388nb/features
id: gtr_388nb-features
sidebar_label: Features
title: GlobalSat - GTR-388NB Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del GlobalSat GTR-388NB y su integración con Plaspy para rastreo de vehículos y micromovilidad
keywords:
  - Características GlobalSat GTR-388NB
  - Rastreador GPS GTR-388NB
  - Compatibilidad GTR-388NB Plaspy
  - Rastreador GPS NB-IoT
  - Rastreador eBike
  - Rastreador GPS para motocicleta
  - Rastreador GPS impermeable
  - Rastreador telemático para vehículos
  - Rastreador con entrada ACC y relé
  - Rastreador con telemetría analógica
---

# GlobalSat - GTR-388NB: Características

Esta página ofrece un panorama público de las funciones del GlobalSat GTR-388NB y cómo opera cuando se integra con la plataforma Plaspy. Se enfoca en capacidades prácticas, entradas de telemetría comunes y las formas en que Plaspy presenta los datos del dispositivo para gestión de flotas, prevención de robos y soluciones de micromovilidad compartida.

La disponibilidad exacta de funciones puede variar según la versión de firmware de fábrica, la revisión de hardware, el método de instalación y las variantes regionales del dispositivo. Para especificaciones concretas del equipo, comportamiento del firmware y guías de instalación, consulte la documentación del fabricante y las notas de lanzamiento de GlobalSat.

## Resumen de funciones

El GTR-388NB es un rastreador NB‑IoT compacto y resistente diseñado para eBikes, motocicletas, scooters y vehículos ligeros. Prioriza la protección contra el agua, el bajo consumo con batería interna de respaldo y un cableado sencillo para instalaciones rápidas. Cuando se combina con Plaspy, el dispositivo ofrece reportes continuos de posición y telemetría útiles para seguimiento, registros de viaje y alertas basadas en eventos.

- Carcasa compacta e impermeable y diseño liviano para montaje discreto en motocicletas y vehículos de micromovilidad compartida.
- Conectividad NB‑IoT con transporte UDP para informes eficientes en ancho de banda reducido y cobertura amplia.
- GNSS integrado con soporte AGPS para mejorar el tiempo hasta la primera fijación y mantener actualizaciones de ubicación fiables.
- Sensor de movimiento G interno y entrada de emergencia dedicada para detectar desplazamientos y activar alertas.
- Múltiples opciones de E/S incluyendo entrada ACC de encendido, entrada analógica 0–28 V y salida digital de disparo negativo para control de relé.
- Batería interna recargable de respaldo y gestión de energía optimizada para soportar largos periodos en espera y continuidad de la telemetría.

## Funciones principales del GlobalSat - GTR-388NB

- Conectividad NB‑IoT en bandas compatibles con transporte de datos UDP para telemetría y actualizaciones de posición.
- Receptor GNSS integrado con soporte AGPS y antena cerámica integrada para fijaciones de posición.
- Carcasa resistente con clasificación IPX7 adecuada para uso exterior en vehículos y flotas de micromovilidad compartida.
- Sensor de movimiento G interno para detección de movimiento y alerta por manipulación.
- Entrada dedicada ACC para informar estados de viaje y de motor.
- Entrada analógica compatible con telemetría 0–28 V, útil para sensores basados en voltaje.
- Salida digital por disparo negativo utilizable para inmovilizadores por relé o control de accesorios.
- Batería interna recargable de 820 mAh y gestión de energía diseñada para operación de bajo consumo.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe los paquetes de telemetría y ubicación del GTR-388NB y los convierte en posiciones en tiempo real en el mapa, recorridos históricos y registros de eventos que los operadores pueden monitorear. Plaspy detecta automáticamente protocolos comunes de rastreadores e ingiere reportes UDP para que los datos del dispositivo sean utilizables en el panel y en las API de Plaspy.

- Actualizaciones de ubicación en vivo y reproducción histórica que muestran coordenadas GNSS y marcas de tiempo para supervisión de flotas.
- Eventos de movimiento y manipulación derivados del sensor G interno que aparecen como alertas y pueden activar notificaciones.
- Cambios en el estado de encendido y ACC registrados como inicio y fin de viaje para seguimiento de kilómetros y uso.
- Lecturas analógicas 0–28 V mostradas como valores de telemetría en Plaspy y aprovechables para monitoreo basado en voltaje cuando se configuran.
- El control de salida por relé puede representarse en Plaspy como una acción de control remoto cuando se usa el accesorio y cableado adecuados.
- Activaciones de la entrada de emergencia encaminadas a notificaciones de Plaspy para que los operadores reciban y respondan a señales urgentes.

## Casos de uso típicos

- Rastreo en tiempo real para flotas de vehículos ligeros, motocicletas y eBikes que requieren rastreadores compactos e impermeables.
- Flujos de trabajo anti robo que combinan detección de movimiento, entrada de emergencia y control remoto por relé para inmovilización.
- Operaciones de micromovilidad compartida donde el montaje discreto, bajo consumo y desempeño fiable en exteriores son prioritarios.
- Registro de viajes e informes basados en encendido para análisis operativos y planificación de mantenimiento.
- Monitoreo de telemetría basada en voltaje, como reporte de voltaje de batería integrado en los paneles de Plaspy.
- Seguimiento de activos en entornos exteriores donde la protección IPX7 y el diseño robusto son necesarios.

## Notas sobre disponibilidad de funciones

- El comportamiento de las funciones depende de la versión de firmware del dispositivo y de la configuración del fabricante; las capacidades pueden variar según la revisión de hardware.
- Accesorios opcionales como módulos de relé, cables de alimentación OBDII o botones de emergencia externos modifican las opciones de instalación y las funciones disponibles.
- El soporte de bandas NB‑IoT regionales y la disponibilidad de operadores pueden afectar la conectividad y deben verificarse para su área de despliegue.
- El cableado de instalación y la integración con el vehículo influyen en la telemetría disponible para que Plaspy la muestre, por ejemplo entradas ACC o sensores analógicos.
- Consulte la documentación de GlobalSat para obtener las especificaciones técnicas más recientes, listas de accesorios y clasificaciones ambientales.

## Por qué usar Plaspy con estas funciones

Usar el GTR-388NB con Plaspy permite a los operadores transformar de forma concisa los paquetes NB‑IoT de posición y telemetría en información operativa. Plaspy presenta ubicación, movimiento, estado de encendido y telemetría analógica en una única interfaz, de modo que los equipos pueden monitorear el estado del vehículo, recibir notificaciones de eventos y revisar viajes históricos para análisis e informes. El diseño del dispositivo y las opciones de accesorios lo hacen práctico para micromovilidad, flotas de motocicletas y telemática de vehículos ligeros donde el tamaño compacto e impermeabilidad son importantes.

Learn more about Plaspy and how it can consolidate GTR-388NB telemetry into live tracking, alerts and API driven integrations at https://www.plaspy.com. For the most current device specific details, firmware notes and accessory compatibility verify information with the manufacturer at https://www.globalsat.com.tw/ as device features and firmware behavior can change over time.
