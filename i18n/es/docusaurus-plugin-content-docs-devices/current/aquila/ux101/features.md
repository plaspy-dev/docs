---
slug: /aquila/ux101/features
id: ux101-features
sidebar_label: Features
title: Aquila - UX101 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del rastreador GPS Aquila UX101 y su integración con Plaspy para rastreo y gestión de flotas
keywords:
  - Aquila UX101
  - características Aquila UX101
  - rastreador GPS Aquila UX101
  - capacidades Aquila UX101
  - seguimiento de flotas UX101
  - rastreador GPS Aquila Plaspy
  - rastreador de vehículo UX101
  - rastreadores compatibles con Plaspy
  - funciones del rastreador Aquila
  - registro de datos UX101
---

# Aquila - Características del UX101

Esta página ofrece información pública sobre las capacidades del rastreador Aquila UX101 y explica cómo esas funciones pueden utilizarse con Plaspy. Está orientada a gestores de flota y evaluadores técnicos que necesitan entender qué datos puede reportar el UX101 y cómo se presentan en una implementación de Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Cuando corresponde, esta página indica las capacidades descritas por el fabricante y recomienda verificar el firmware y la documentación actuales para obtener detalles definitivos.

## Resumen de características

El UX101 es un rastreador compacto para vehículos diseñado para monitoreo de flotas y activos, con caja resistente IP67 y opciones que facilitan instalaciones ocultas. Su combinación de entradas, salidas y funciones a bordo lo hace adecuado para flujos de trabajo comunes de rastreo y para integraciones con plataformas servidoras como Plaspy.

- Carcasa robusta IP67 que protege en entornos exigentes y permite instalaciones ocultas
- Conector tipo ECU automotriz para una instalación segura y conexiones estables al vehículo
- Antenas GPS y GSM internas adecuadas para instalaciones discretas o empotradas
- Múltiples interfaces serie y USB para integración con electrónica del vehículo y accesorios de terceros
- Entradas/salidas a bordo y acelerómetro para detección de movimiento y monitoreo básico de eventos

## Características principales del Aquila UX101

- Caja compacta con clasificación IP67 para uso duradero en campo
- Conector tipo ECU automotriz que mejora la estabilidad mecánica y facilita la instalación
- Antenas GPS y GSM internas para señal confiable en ubicaciones ocultas
- Opciones de conectividad configurables incluyendo 1 RS232 + 1 CAN o 2 puertos RS232, además de 1 puerto USB Tipo
- 2 entradas analógicas, 5 entradas digitales y 3 salidas digitales para conectar sensores externos y eventos
- Acelerómetro como sensor de movimiento para detección y lógica de activación
- Batería interna de respaldo reportada en 700 mAh y hasta 8 horas de seguimiento según especificaciones del fabricante
- Arquitectura de almacenamiento y reenvío con almacenamiento a bordo para almacenar datos durante pérdidas temporales de red

## Cómo funcionan estas funciones con Plaspy

Plaspy puede recibir y mostrar la telemetría y los eventos del UX101 para que los operadores tengan visibilidad continua de la ubicación y el estado del vehículo. Plaspy detecta automáticamente muchos protocolos de rastreadores y puede aceptar reportes de dispositivos configurados para enviar datos al punto de ingreso de Plaspy.

- Ubicación, hora, velocidad, distancia y estado de ignición reportados por el dispositivo son visibles en Plaspy para seguimiento en tiempo real y reproducción histórica
- Los eventos de entradas digitales y analógicas pueden mostrarse como señales de estado discretas o alertas en los paneles y listas de eventos de Plaspy
- Las alertas por movimiento y por desconexión de la alimentación principal se mapean a funciones de visibilidad que ayudan a detectar manipulación y movimientos no autorizados
- El almacenamiento a bordo y el buffering de reenvío ayudan a preservar la integridad de los datos en Plaspy cuando el vehículo pierde conectividad temporalmente
- Plaspy admite las configuraciones de transporte más comunes y detectará implementaciones de protocolo compatibles del UX101 para el envío de datos a la plataforma

## Casos de uso típicos

- Seguimiento de flotas comerciales para visibilidad de rutas programadas y monitoreo de odometría
- Supervisión logística y de entregas donde la instalación oculta y la señal fiable son importantes
- Monitoreo de activos que requiere carcasa resistente y respaldo de batería temporal para interrupciones cortas de energía
- Rastreo de seguridad que se beneficia de la detección de movimiento y alertas por desconexión de la alimentación
- Escenarios de integración donde conexiones serie o USB reenvían datos de subsistemas del vehículo al flujo de trabajo de rastreo

## Notas sobre disponibilidad de funciones

- Las versiones de firmware del fabricante pueden habilitar o deshabilitar funciones específicas y afectar nombres de parámetros o comportamientos
- Las revisiones de hardware y las variantes regionales pueden modificar las interfaces disponibles o las certificaciones
- Las decisiones de instalación, como el cableado y montaje, pueden afectar las lecturas de sensores y la detección de ignición
- Funciones como comunicación por voz, disponibilidad de SDK y capacidad exacta de almacenamiento son suministradas por el proveedor y deben validarse con la documentación actual del dispositivo
- Para la integración con la plataforma, Plaspy detecta automáticamente muchos protocolos de dispositivo, pero los detalles finales de configuración deben coordinarse con su integrador o instalador

## Por qué usar Plaspy con estas características

Usar el Aquila UX101 con Plaspy ofrece un camino práctico para convertir las señales brutas del rastreador en información operativa. Plaspy recopila datos de ubicación y estado, muestra historiales de vehículos y resalta eventos de entrada para que los supervisores de flota puedan monitorear desplazamientos, reaccionar ante alertas y mantener supervisión sobre una flota con dispositivos variados.

Para conocer más sobre cómo Plaspy trabaja con rastreadores compatibles y revisar opciones de integración, visite https://www.plaspy.com. Para detalles específicos del dispositivo, incluyendo comportamiento de firmware y revisiones de hardware, verifique la información con el fabricante en https://www.itriangle.in/
