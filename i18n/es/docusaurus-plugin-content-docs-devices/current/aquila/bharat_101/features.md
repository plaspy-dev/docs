---
slug: /aquila/bharat_101/features
id: bharat_101-features
sidebar_label: Features
title: Aquila - BHARAT 101 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Aquila BHARAT 101 y su integración con Plaspy
keywords:
  - Aquila BHARAT 101
  - funciones BHARAT 101
  - rastreador Aquila AIS140
  - rastreador GPS BHARAT 101
  - rastreador vehicular Aquila
  - rastreo vehicular AIS140
  - compatibilidad BHARAT 101 Plaspy
  - capacidades Aquila BHARAT 101
  - BHARAT 101 resistente IP67
  - acelerómetro giroscopio BHARAT 101
---

# Aquila - Funciones del BHARAT 101

Esta página ofrece un resumen público de las funciones del rastreador Aquila BHARAT 101 y explica cómo se utilizan con Plaspy en operaciones de gestión y monitoreo de flotas. El objetivo es describir las capacidades prácticas del equipo y su compatibilidad con Plaspy sin entrar en detalles sensibles de implementación.

La disponibilidad y el comportamiento exacto de las funciones en un equipo instalado pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la configuración del fabricante. Para instrucciones específicas del dispositivo, opciones de configuración o notas de firmware, consulte la documentación del fabricante.

## Resumen de características

El BHARAT 101 es una caja negra rastreadora certificada AIS140 diseñada para seguimiento vehicular robusto y conforme a normativa. Integra posicionamiento por satélite, almacenamiento local de datos, detección de movimiento y múltiples interfaces E/S en una carcasa IP67 resistente, adecuada para instalaciones exigentes.

- Certificación AIS140 e ICAT para cumplimiento regulatorio y despliegues telemáticos confiables
- Posicionamiento en tiempo real por GPS y Glonass para actualizaciones continuas de ubicación
- Almacenamiento interno en estado sólido para hasta 40,000 registros de rastreo que permiten registro offline
- Múltiples opciones de E/S: 4 entradas digitales, 2 salidas digitales, 2 entradas analógicas y un puerto serial RS232
- Detección de movimiento incorporada con acelerómetro de 3 ejes y giroscopio de 3 ejes para registrar movimiento y orientación

## Características principales del Aquila - BHARAT 101

- Sistema de rastreo y monitoreo vehicular certificado AIS140 para entornos regulados
- Informes de posición basados en GPS y Glonass para visibilidad de la ubicación en tiempo real
- Almacenamiento en estado sólido con capacidad para 40,000 registros para conservar historial durante cortes de conectividad
- 4 entradas digitales para detección de eventos y 2 salidas digitales para control o señales básicas
- 2 entradas analógicas para supervisar señales analógicas cuando apliquen
- Puerto serial RS232 para integración con periféricos o sistemas vehiculares compatibles
- Acelerómetro de 3 ejes y giroscopio de 3 ejes que proporcionan detección de movimiento y orientación
- Carcasa ABS resistente IP67 diseñada para instalaciones ocultas o discretas con antenas internas

## Cómo se integran estas funciones con Plaspy

Plaspy recibe y normaliza los reportes de dispositivos compatibles como el BHARAT 101 para que los datos de ubicación, eventos y movimiento sean visibles en la plataforma. Plaspy puede detectar automáticamente el protocolo del rastreador y aceptar tráfico de dispositivos configurados para reportar a los endpoints de Plaspy, lo que facilita el alta de equipos.

- Los reportes en tiempo real de GPS y Glonass se muestran como posiciones en vivo en los mapas de Plaspy y en las líneas de tiempo de reproducción
- El almacenamiento interno permite cargas diferidas y la reconciliación de registros históricos en Plaspy una vez restablecida la conectividad
- Los eventos de entradas digitales y analógicas pueden visualizarse como eventos discretos o indicadores de estado en los paneles e informes de Plaspy
- Los datos del sensor de movimiento (acelerómetro y giroscopio) pueden utilizarse para disparar eventos relacionados con movimiento o visualizarse dentro de los registros de viaje y actividad
- Los datos conectados por RS232 y los cambios de estado del dispositivo, cuando son reenviados por el rastreador, aparecen en Plaspy como registros de evento según la configuración del dispositivo
- Plaspy acepta conexiones de dispositivos mediante transporte de red estándar y detectará automáticamente el protocolo del rastreador para simplificar la configuración de equipos BHARAT 101

## Casos de uso típicos

- Rastreo de flotas para operaciones logísticas y de reparto en entornos regulados
- Monitoreo de taxis y vehículos de pasajeros donde se requiere cumplimiento AIS140
- Supervisión de vehículos que operan en entornos hostiles gracias a la carcasa IP67
- Monitoreo basado en eventos usando entradas digitales para reportar puertas, ignición o sensores personalizados
- Análisis de movimiento y comportamiento con datos de acelerómetro y giroscopio para segmentación de viajes o revisión de incidentes
- Instalaciones ocultas donde se prefiera un diseño compacto con antenas internas

## Notas sobre disponibilidad de funciones

- Algunas funciones y comportamientos dependen de la versión de firmware del equipo y pueden añadirse o modificarse por el fabricante con el tiempo
- Revisiones de hardware y variantes regionales pueden afectar el mapeo de E/S y la compatibilidad con accesorios
- Ciertas integraciones u opciones de telemetría requieren configuración específica en el dispositivo y pueden variar según la práctica del instalador
- El fabricante menciona provisión IRNSS, pero la disponibilidad regional y la activación pueden depender del soporte local y del firmware
- Para detalles técnicos definitivos y específicos del modelo, consulte la documentación del fabricante del equipo que vaya a desplegar

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el Aquila BHARAT 101 facilita centralizar los datos de un rastreador certificado y resistente en una plataforma de monitoreo e informes. Plaspy ayuda a convertir posición en tiempo real, historial almacenado, eventos de entrada y detección de movimiento en información operativa útil para supervisión de flotas, reportes de cumplimiento y revisión de incidentes.

To learn more about Plaspy and how it supports trackers like the Aquila BHARAT 101 visit https://www.plaspy.com. For the most current device specific feature details and manufacturer guidance verify information with Aquila at https://www.itriangle.in/ as firmware and implementation details can change over time.
