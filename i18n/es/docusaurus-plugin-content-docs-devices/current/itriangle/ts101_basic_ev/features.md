---
slug: /itriangle/ts101_basic_ev/features
id: ts101_basic_ev-features
sidebar_label: Features
title: iTriangle - TS101 Basic EV Features
sidebar_class_name: menu_item_tracker
description: Resumen práctico de funciones del iTriangle TS101 Basic EV y su integración con Plaspy para rastreo y telemetría vehicular
keywords:
  - iTriangle TS101 Basic EV
  - funciones TS101 Basic EV
  - rastreador GPS iTriangle
  - TS101 compatible con Plaspy
  - rastreo de flotas TS101
  - rastreador EV TS101
  - rastreo vehicular iTriangle
  - acelerómetro y detección de manipulación TS101
  - entradas I/O TS101
  - Bluetooth 3.0 TS101
---

# iTriangle - Características del TS101 Basic EV

Esta página ofrece un resumen público de las funciones al usar el iTriangle TS101 Basic EV con Plaspy. Se enfoca en las capacidades prácticas que interesan a gerentes de flota, integradores de vehículos eléctricos y operadores que planean incorporar la telemetría del dispositivo en Plaspy para seguimiento en vivo, registro de eventos y monitoreo básico de sensores.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, las características de la instalación y las decisiones del fabricante. Para detalles específicos y actualizados consulte la documentación oficial del fabricante y las notas de lanzamiento.

## Resumen de funcionalidades

El TS101 Basic EV es un rastreador GPS compacto y robusto pensado para vehículos eléctricos y flotas mixtas. Ofrece posicionamiento GNSS multi-constelación, almacenamiento local de eventos y telemetría básica de E/S y sensores con conectividad Bluetooth de corto alcance, lo que lo hace adecuado para integraciones sencillas con Plaspy y despliegues resistentes en campo.

- Recepción GNSS multi-constelación para mejorar el posicionamiento en distintas regiones
- Amplio rango de tensión y batería interna de respaldo para instalaciones en EV y flotas mixtas
- Carcasa con grado IP65 y formato compacto para montaje duradero en vehículos
- Bluetooth 3.0 y conectividad 2G GSM para configuración local y telemetría celular
- Acelerómetro integrado y detección de manipulación con registro local de eventos para preservar datos ante cortes

## Funciones principales del iTriangle - TS101 Basic EV

- Soporte GNSS multi-constelación incluyendo GPS, GLONASS, Galileo y BeiDou para fijaciones de ubicación más confiables
- Entrada de alimentación amplia de 9–90 V DC con batería interna de respaldo para mantener la captura de datos durante interrupciones de energía
- Carcasa robusta IP65 y dimensiones compactas aptas para instalaciones en vehículos de dos o tres ruedas y vehículos mayores
- Conectividad 2G GSM para reportar telemetría y datos de posición a plataformas backend
- Bluetooth 3.0 para puesta en marcha local y emparejamiento o configuración de sensores de corto alcance
- Acelerómetro integrado y detección de manipulación para reportes de movimiento y eventos anti-robo
- Almacenamiento local de eventos capaz de preservar varios miles de registros para cubrir brechas de conectividad
- Conjunto básico de E/S que incluye entradas analógicas y digitales y una salida digital para conectar sensores y actuadores externos

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el TS101 Basic EV transmite posiciones y telemetría de eventos a la plataforma Plaspy para que usted pueda supervisar los vehículos en tiempo real, revisar recorridos históricos y reaccionar ante alertas por movimiento o manipulación. Plaspy detecta automáticamente los protocolos compatibles del equipo y asigna la telemetría entrante a las vistas e informes de la plataforma.

- Las actualizaciones de ubicación en tiempo real aparecen en los mapas en vivo de Plaspy para seguimiento y reproducción de rutas
- Los eventos de movimiento y manipulación generados por el acelerómetro integrado se registran como alertas y entradas de evento en Plaspy
- El almacenamiento local de eventos garantiza que la telemetría registrada se sincronice con Plaspy tras pérdidas temporales de red
- Los estados de entradas analógicas y digitales pueden capturarse y mostrarse en los paneles de Plaspy como canales básicos de telemetría
- Las opciones de configuración local y Bluetooth facilitan la puesta en servicio y la configuración in situ para adaptar el comportamiento del dispositivo a los flujos de trabajo de Plaspy

## Casos de uso típicos

- Gestión centralizada de flotas para pequeños operadores comerciales y flotas de vehículos eléctricos que requieren telemetría de posición y eventos confiable
- Instalaciones de rastreadores compactos en vehículos de dos y tres ruedas donde el tamaño y la protección IP65 son determinantes
- Monitoreo anti-robo y de movimiento mediante acelerómetro y detección de manipulación integrado con las alertas de Plaspy
- Telemetría básica de sensores y monitoreo del estado del vehículo mediante entradas analógicas y digitales para supervisión operativa
- Integraciones OEM en EV que necesitan una unidad telemática pequeña con amplio rango de voltaje y conectividad Bluetooth local

## Notas sobre disponibilidad de funciones

- El conjunto de funciones puede cambiar entre versiones de firmware; algunos campos de telemetría o comportamientos pueden variar según la versión
- Revisiones de hardware y variantes regionales del dispositivo pueden afectar las bandas celulares, el comportamiento del Bluetooth o los conectores físicos
- La capacidad de almacenamiento local y la autonomía de la batería de respaldo dependen de la configuración y del tipo de eventos registrados
- La disponibilidad de conectividad celular 2G varía por país y operador móvil; verifique la cobertura regional al planear despliegues
- Confirme opciones avanzadas de configuración o comandos AT compatibles con la documentación del fabricante antes de implementaciones a gran escala

## Por qué usar Plaspy con estas funciones

Usar el TS101 Basic EV con Plaspy ofrece una vía práctica para añadir visibilidad de ubicación y telemetría básica a flotas y despliegues de vehículos eléctricos. La combinación de GNSS multi-constelación, detección de eventos a bordo, capacidad de E/S y almacenamiento local ayuda a las organizaciones a mantener visibilidad y reconciliar lagunas causadas por cortes temporales de red.

Para saber más sobre cómo Plaspy puede integrar telemetría de dispositivos y apoyar flujos operativos de flotas visite https://www.plaspy.com. Para obtener especificaciones de dispositivo, información de firmware y guías de instalación actuales y autorizadas consulte al fabricante en https://www.itriangle.net/.
