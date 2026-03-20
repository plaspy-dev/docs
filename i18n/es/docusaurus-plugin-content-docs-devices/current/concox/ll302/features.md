---
slug: /concox/ll302/features
id: ll302-features
sidebar_label: Features
title: Concox - LL302 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Concox LL302 y su integración con Plaspy para rastreo de flotas y activos
keywords:
  - funciones Concox LL302
  - rastreador GPS Concox LL302
  - compatibilidad LL302 Plaspy
  - funciones rastreador de activos LL302
  - capacidades Concox LL302
  - funciones de rastreo GPS LL302
  - autonomía batería LL302
  - sensores LL302
  - montaje magnético LL302
  - LL302 multi GNSS
---

# Concox - Funciones del LL302

Esta página ofrece una visión pública de las capacidades del rastreador Concox LL302 y el contexto práctico para su uso con Plaspy. Resume las funcionalidades orientadas al usuario, el valor operativo típico y la forma en que la telemetría del dispositivo se muestra en Plaspy para monitoreo e informes.

La disponibilidad exacta de funciones y su comportamiento puede variar según la versión de firmware, la revisión de hardware, la variante regional (LL302‑E / LL302‑L), los periféricos opcionales y la forma de instalación. Para detalles específicos del dispositivo consulte la documentación oficial del fabricante y las notas de la versión.

## Resumen de características

El LL302 es un rastreador de activos compatible con Plaspy, con conectividad 4G LTE Cat 1, diseñado para despliegues prolongados y montaje seguro. Combina posicionamiento por múltiples fuentes, una batería duradera y un factor de forma pequeño y discreto para ofrecer datos fiables de ubicación y sensores en monitoreo de flotas y activos.

- Posicionamiento por múltiples fuentes: GNSS con asistencia de red y Wi‑Fi para mejorar la fiabilidad y la precisión de la ubicación.
- Gran autonomía gracias a una batería industrial de 6,000 mAh con modos de reporte configurables para seguimiento o ahorro de energía.
- Sensores integrados para detección de movimiento y manipulación, y sensores ambientales opcionales para supervisión de condiciones.
- Montaje magnético resistente y protección IPX5 adecuada para instalación exterior prolongada en activos metálicos.
- Variantes de hardware regionales y conmutación celular para ampliar la cobertura en despliegues globales.

## Características principales del Concox - LL302

- Conectividad celular primaria 4G LTE Cat 1 con fallback 2G GSM para reportes resilientes.
- Posicionamiento multi‑fuente: GPS y BDS con ubicación asistida por LBS y Wi‑Fi para mejorar la exactitud.
- Gran batería Li‑Polymer industrial de 6,000 mAh con modos configurables para seguimiento y mayor tiempo en espera.
- Acelerómetro para detección de vibración y movimiento que soporta alertas de manipulación y movimiento.
- Sensor de luz para detectar exposición por manipulación y soporte de sensor de efecto Hall para monitoreo de puertas o estados.
- Sensores opcionales de temperatura y humedad para telemetría ambiental cuando están instalados.
- Diseño de montaje magnético discreto y protección a chorros de agua IPX5 para instalaciones robustas.
- Características GNSS que permiten obtenciones rápidas de posición en muchos entornos.

## Cómo funcionan estas funciones con Plaspy

Cuando se implementa con Plaspy, el LL302 transmite ubicación y telemetría de sensores para que los operadores puedan supervisar activos y vehículos casi en tiempo real. Plaspy ingiere actualizaciones de posición y eventos, y le permite configurar alertas e informes para la supervisión operativa.

- Actualizaciones de ubicación en tiempo real y reproducción histórica de rutas basadas en las fijas GNSS enviadas por el dispositivo.
- Eventos de movimiento y manipulación provenientes del acelerómetro y del sensor de luz que se registran como alertas en los paneles de Plaspy.
- Cambios de puerta y estados detectados por el sensor de efecto Hall disponibles como eventos discretos para su monitoreo.
- Lecturas opcionales de temperatura y humedad que se registran y pueden usarse para supervisión de condiciones y alertas por umbral.
- Flujos configurables de geocercas, batería baja y alertas de movimiento que permiten notificaciones automáticas y respuesta operativa.
- Plaspy reconoce automáticamente los rastreadores compatibles y muestra la telemetría y el estado disponible sin requerir selección manual de protocolo.

## Casos de uso típicos

- Flotas de vehículos en alquiler que requieren instalación discreta, larga duración de batería y alertas de manipulación para reducir pérdidas.
- Monitoreo logístico y de transporte donde la ubicación en tiempo real y la detección ambiental opcional optimizan las operaciones.
- Rastreo de equipos de alto valor y remolques usando montaje magnético y fijaciones GNSS precisas.
- Cadena de frío y monitoreo de contenedores cuando se instalan sensores opcionales de temperatura y humedad.
- Gestión de activos a largo plazo para equipos distribuidos donde se busca minimizar los intervalos de mantenimiento.
- Monitoreo de patios o instalaciones para eventos de vibración y exposición en activos estacionados.

## Notas sobre disponibilidad de funciones

- La funcionalidad puede depender de la versión de firmware; características como modos de reporte y la cadencia de informe de sensores pueden variar entre versiones.
- Revisiones de hardware y variantes regionales (LL302‑E vs LL302‑L) afectan las bandas celulares soportadas y deben confirmarse para su área.
- Periféricos opcionales como sensores de temperatura y humedad pueden no estar presentes en todas las unidades y podrían requerir configuración específica.
- El método de instalación y la colocación de la antena influyen en el rendimiento GNSS y la precisión reportada.
- Consulte la documentación de Concox para diferencias regulatorias y regionales que puedan cambiar las funciones disponibles.

## Por qué usar Plaspy con estas funciones

Usar el Concox LL302 con Plaspy ofrece a las organizaciones una forma sencilla de transformar la telemetría del dispositivo en visibilidad operativa. La combinación de posicionamiento por múltiples fuentes, larga autonomía de batería y sensores integrados ayuda a reducir la carga de mantenimiento mientras conserva los datos necesarios para detectar manipulaciones, seguir movimientos y supervisar condiciones ambientales cuando sea necesario.

Learn more about Plaspy and how the platform can ingest and surface LL302 location and sensor data at https://www.plaspy.com. For the most current device specifications, firmware information, and manufacturer guidance please verify details with Concox at https://www.iconcox.com/. Device features, firmware behavior, and manufacturer implementation can change over time so always consult the official Concox resources for up‑to‑date information.
