---
slug: /ulbotech/s101/features
id: s101-features
sidebar_label: Features
title: Ulbotech - S101 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del adaptador OBD II BLE Ulbotech S101 y su integración con Plaspy para telemetría vehicular
keywords:
  - Ulbotech S101
  - características Ulbotech S101
  - adaptador OBD II S101
  - adaptador BLE S101
  - telemetría OBD II
  - rastreador compatible con Plaspy
  - diagnóstico vehicular Plaspy
  - monitoreo de combustible S101
  - adaptador ELM327 BLE
  - telemetría vehicular para Plaspy
---

# Ulbotech - S101: Funciones

Esta página ofrece un resumen público de las funciones del adaptador OBD II BLE Ulbotech S101 y cómo se utiliza con Plaspy. Describe las capacidades prácticas, qué telemetría puede enviar el adaptador a Plaspy cuando se empareja con un smartphone, tablet o PC con BLE, y cómo esos datos complementan el rastreo GPS dentro de la plataforma Plaspy.

La disponibilidad exacta de funciones en una unidad S101 puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante en ese dispositivo concreto. Clientes e integradores deben considerar esta página como un resumen general y consultar la documentación del fabricante para el comportamiento específico del equipo.

## Resumen de funciones

El Ulbotech S101 es un adaptador OBD II compacto basado en ELM327 que transmite PIDs OBD estándar por Bluetooth 4.0 BLE a las apps compatibles con Plaspy. No es un rastreador GPS independiente, sino que está pensado para ampliar el rastreo en Plaspy con diagnósticos del motor, telemetría relacionada con el combustible y parámetros de mayor densidad para informes y detección de eventos más completos.

- Reenvía telemetría de motor y sensores OBD II a Plaspy a través de un dispositivo conectado por BLE para enriquecer las vistas de rastreo GPS
- Expone PIDs comunes como RPM del motor, temperatura del refrigerante, ajustes de combustible, MAF, posición del acelerador y velocidad del vehículo
- Soporta una amplia cobertura de protocolos OBD II para compatibilidad con muchos vehículos
- Diseñado para bajo consumo de energía para poder permanecer conectado permanentemente al puerto OBD del vehículo
- Factor de forma compacto y soporte multiplataforma para Android, Windows y dispositivos legacy que ejecuten apps compatibles con Plaspy

## Funciones principales del Ulbotech - S101

- Adaptador OBD II basado en ELM327 que interpreta PIDs de diagnóstico estándar
- Enlace Bluetooth 4.0 BLE para telemetría en vivo hacia smartphones, tablets o PCs
- Soporte amplio de protocolos OBD II incluyendo J1850 PWM VPW ISO 9141 2 ISO 14230 KWP2000 e ISO 15765 4 CAN
- Expone RPM del motor, temperatura del refrigerante, ajustes de combustible, MAF, posición del acelerador y velocidad del vehículo para diagnóstico y análisis de combustible
- Consumo típico bajo adecuado para uso continuo conectado
- Lectura y borrado de códigos MIL Check Engine bajo demanda cuando la app conectada lo soporta
- Perfil de enchufe OBD II ultracompacto para mínima intrusión en el espacio del conductor

## Cómo funcionan estas funciones con Plaspy

Cuando el S101 está conectado al puerto OBD II del vehículo transmite telemetría OBD estándar por BLE a una app compatible con Plaspy que se ejecute en un dispositivo cercano. Plaspy combina esa telemetría con la ubicación GPS del dispositivo o de un rastreador GPS Plaspy para presentar el estado y los diagnósticos del vehículo junto con la información de ubicación.

- La telemetría en vivo aparece en Plaspy como parámetros adicionales del vehículo junto a los datos de posición para ofrecer mayor conciencia situacional
- Los códigos de diagnóstico pueden mostrarse en las interfaces de Plaspy y usarse para activar flujos de trabajo de mantenimiento cuando la app soporta lectura y borrado de códigos
- Los PIDs relacionados con combustible alimentan los informes de Plaspy para monitoreo de combustible y análisis de eficiencia
- Las alertas basadas en eventos en Plaspy pueden incorporar disparadores OBD como alta temperatura del refrigerante o códigos de falla junto con geocercas y eventos de movimiento
- Es posible obtener gráficos de parámetros en vivo más densos porque el S101 está optimizado para actualizaciones más rápidas sobre BLE

## Casos de uso típicos

- Ampliar el rastreo de posición GPS con diagnósticos del motor para priorizar el mantenimiento de flotas
- Lectura y borrado de códigos in situ para técnicos que utilizan herramientas conectadas a Plaspy
- Monitoreo de combustible y coaching de conductores usando ajustes de combustible y PIDs relacionados en informes de Plaspy
- Gráficos de datos en tiempo real para mecánicos y afinadores que requieren flujos de telemetría más densos
- Investigación de robos e incidentes correlacionando actividad del motor con ubicación GPS
- Apoyar operaciones de servicio con alertas basadas en telemetría y programación de mantenimiento

## Notas sobre disponibilidad de funciones

- El conjunto de funciones puede diferir según la versión de firmware del S101 y actualizaciones del fabricante, por lo que las capacidades pueden cambiar con el tiempo
- Revisiones de hardware y variantes regionales pueden afectar los protocolos OBD II soportados y la cobertura de telemetría
- Algunas funciones, como el borrado de códigos de falla, dependen de la implementación de la app y del soporte del vehículo
- El contexto de la instalación, como el cableado del vehículo y el acceso al puerto OBD II, puede afectar el comportamiento del dispositivo conectado
- Verifique siempre qué PIDs y funciones de diagnóstico son compatibles en un vehículo específico antes de usarlos en operaciones críticas

## Por qué usar Plaspy con estas funciones

Emparejar el Ulbotech S101 con Plaspy resulta útil para organizaciones y técnicos que necesitan combinar la ubicación con datos de salud del vehículo. El S101 suministra telemetría OBD II estándar que Plaspy puede mostrar como parámetros en vivo, gráficos históricos y disparadores de eventos para ayudar a gestionar mantenimiento, analizar consumo de combustible y responder de forma más efectiva a condiciones de falla.

Para obtener más información sobre Plaspy y cómo puede integrarse con telemetría vehicular como la del S101 visite https://www.plaspy.com. Para detalles de funciones específicas del dispositivo, notas de firmware y orientación del fabricante consulte la documentación oficial de Ulbotech en http://www.ulbotech.com/ ya que las funciones y la implementación pueden cambiar con el tiempo.
