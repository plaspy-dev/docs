---
slug: /ruptela/smart5/features
id: smart5-features
sidebar_label: Features
title: Ruptela - Smart5 Features
sidebar_class_name: menu_item_tracker
description: Resumen de las funciones del rastreador Ruptela Smart5 y su integración con Plaspy para seguimiento diagnóstico y seguridad de flotas
keywords:
  - funciones Ruptela Smart5
  - rastreador GPS Ruptela Smart5
  - compatibilidad Smart5 Plaspy
  - capacidades Ruptela Smart5
  - Smart5 CANbus OBD
  - Smart5 Bluetooth LE
  - seguimiento de flotas Smart5
  - antirrobo Smart5
  - telemetría Smart5
  - diagnóstico vehicular Smart5
---

# Ruptela - Características del Smart5

Esta página presenta el contexto público de funcionalidades al usar el rastreador Ruptela Smart5 con Plaspy. Resume las capacidades prácticas del modelo y explica cómo se emplean habitualmente dentro de Plaspy para mapas en vivo, paneles de telemetría, alertas y supervisión de la flota.

La disponibilidad y el comportamiento concretos de las funciones pueden variar según la versión del firmware, la revisión de hardware, el cableado de instalación y la implementación del fabricante. Para información específica y actualizada del dispositivo consulte la documentación oficial y las notas de versión de Ruptela.

## Resumen de funciones

El Smart5 es un rastreador vehicular compacto y resistente diseñado para reportes de ubicación fiables y telemetría del vehículo. Su combinación de conectividad celular, GNSS multiconstelación, soporte CANbus y OBD, Bluetooth LE y opciones de I/O lo hace útil para operaciones de flotas mixtas, diagnóstico y procesos de seguridad cuando se integra con Plaspy.

- Seguimiento de ubicación GNSS en tiempo real mediante un receptor u blox multiconstelación para mejorar la precisión y el tiempo hasta la primera fijación.
- Conectividad celular con LTE moderno y retroceso a redes heredadas para amplia cobertura y reporte continuo.
- Lectura de datos CANbus y OBD, incluido soporte CustomCAN, para exponer información del motor y diagnósticos en Plaspy.
- Bluetooth LE 5.0 para conectar sensores y accesorios inalámbricos y combinar ubicación con telemetría auxiliar.
- Dos formatos de carcasa para mayor flexibilidad en la instalación: versión delgada con IP54 y robusta con IP68 para entornos exigentes.
- Funciones orientadas a la seguridad como detección de bloqueo de señal y alertas por corte de alimentación para alimentar flujos antirrobo en Plaspy.

## Funciones principales del Ruptela Smart5

- Módem celular LTE Cat 1 con fallback a 2G para mantener la conectividad en distintas condiciones de cobertura.
- Soporte de interfaces CANbus y OBD, incluido CustomCAN para diagnóstico vehicular y extracción de datos.
- Compatibilidad con Bluetooth LE 5.0 para integrar sensores y dispositivos accesorios inalámbricos.
- Módulo GNSS multiconstelación de u blox para posicionamiento GPS, GLONASS y Galileo.
- Carcasas compactas y resistentes con opciones IP54 e IP68 según las necesidades de instalación.
- Memoria local integrada de 8 MB para almacenar registros cuando hay pérdida temporal de conectividad.
- Monitorización de seguridad que incluye detección de interferencias y alertas por interrupción de energía.
- Modos de bajo consumo y batería de respaldo interna para mantener reportes mínimos y resiliencia.

## Cómo funcionan estas funciones con Plaspy

Al desplegar Smart5 con Plaspy, el dispositivo transmite ubicación y telemetría que Plaspy ingiere y presenta como datos de posición, eventos y diagnóstico para supervisión e informes. Plaspy utiliza las fijaciones GNSS entrantes, los tramas CAN y OBD, las lecturas de sensores Bluetooth y los eventos de seguridad para generar vistas accionables para los equipos operativos.

- Posiciones en mapa en vivo y recorridos históricos para visibilidad de flota y análisis de rutas en Plaspy.
- Visibilidad de diagnósticos y códigos de falla a partir de datos CANbus y OBD mostrados en reportes y paneles.
- Información sobre combustible y consumo derivada de entradas CAN o analógicas presentada en los informes de telemetría de Plaspy.
- Datos de sensores Bluetooth, como temperatura o estado de puertas, disponibles junto a la ubicación para monitoreo de carga.
- Eventos de seguridad, incluidas detección de interferencias y cortes de energía, registrados como alertas para respuesta rápida en Plaspy.
- El almacenamiento local garantiza que los registros capturados durante gaps de conectividad se suban a Plaspy una vez que se restablece la conexión.

## Casos de uso habituales

- Monitorización antirrobo y flujos de respuesta rápida usando alertas de seguridad y salidas configurables.
- Supervisión de flotas mixtas donde la telemetría CANbus y OBD ofrece diagnóstico en diferentes tipos de vehículos.
- Control de combustible y análisis de consumo mediante entradas CAN y analógicas para reducir costos.
- Seguimiento de carga sensible a temperatura combinando telemetría de sensores Bluetooth con ubicación GPS.
- Mantenimiento preventivo y supervisión de fallas usando datos diagnósticos de las redes del vehículo.
- Gestión de flotas de alquiler y obra donde el hardware resistente y el buffering local aseguran continuidad operativa.

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones depende del firmware del dispositivo y de la revisión de hardware que Ruptela haya suministrado en la unidad.
- Algunas funciones de telemetría requieren el cableado correcto del vehículo o conexiones CAN/OBD y pueden variar según el modelo del vehículo.
- El soporte de sensores Bluetooth depende de accesorios compatibles y del comportamiento de su firmware.
- Las bandas celulares regionales y la certificación pueden afectar el rendimiento en red y deben verificarse para su ubicación.
- Plaspy detecta automáticamente muchos protocolos de rastreadores para simplificar la configuración, pero confirme los ajustes del dispositivo y el firmware con la documentación de Ruptela.

## Por qué usar Plaspy con estas funciones

Usar el Ruptela Smart5 con Plaspy ofrece a las organizaciones una solución combinada de visibilidad de ubicación, diagnóstico vehicular y supervisión operativa. Smart5 aporta fijaciones de posición, telemetría CANbus y OBD, lecturas de sensores Bluetooth y eventos de seguridad, mientras que Plaspy agrega esas entradas en mapas, alertas e informes que ayudan a gestionar flotas, mejorar la disponibilidad y optimizar los procesos de mantenimiento.

Para saber más sobre cómo Plaspy trabaja con rastreadores compatibles visite https://www.plaspy.com. Para especificaciones específicas del dispositivo, notas de firmware y guías de instalación más recientes, confirme los detalles en el sitio del fabricante https://ruptela.com/ ya que las funciones y el comportamiento pueden cambiar con el tiempo.
