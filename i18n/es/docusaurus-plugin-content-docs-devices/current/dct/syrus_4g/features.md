---
slug: /dct/syrus_4g/features
id: syrus_4g-features
sidebar_label: Features
title: DCT - Syrus 4G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del GPS DCT Syrus 4G y su integración con Plaspy para visibilidad de flotas
keywords:
  - funciones DCT Syrus 4G
  - rastreador GPS Syrus 4G
  - compatibilidad DCT Syrus 4G Plaspy
  - pasarela telemática Syrus 4G
  - seguimiento GNSS Syrus 4G
  - telemetría CAN Syrus 4G
  - sensores BLE Syrus 4G
  - computación en el borde Syrus 4G
  - respaldo satelital Syrus 4G
  - seguimiento de flotas con Plaspy
---

# DCT - Funciones del Syrus 4G

Esta página ofrece una visión pública y no sensible de las capacidades de la pasarela telemática DCT Syrus 4G y de cómo se utilizan con Plaspy. Describe las funciones principales orientadas al usuario que hacen al Syrus 4G adecuado para la gestión de flotas empresariales e IoT industrial, y explica cómo se integran esas funciones en Plaspy para obtener visibilidad consolidada de la flota.

La disponibilidad exacta de las funciones puede variar según la versión de firmware, la revisión de hardware, los accesorios instalados y la implementación del fabricante. Las descripciones que siguen se basan en las especificaciones públicas del Syrus 4G; para detalles técnicos específicos del equipo consulte la documentación oficial de DCT.

## Resumen de funciones

El Syrus 4G es una pasarela telemática de grado empresarial diseñada para implementaciones vehiculares e industriales a gran escala y resistentes. Combina posicionamiento GNSS multiconstelación, conectividad celular redundante, interfaces vehiculares completas, capacidad de cómputo en el borde y opciones de radio para mantener activos visibles y la telemetría fluida en entornos exigentes.

- Posicionamiento en tiempo real fiable con GNSS multiconstelación para actualizaciones de ubicación consistentes en distintas regiones
- Módems celulares duales con conectividad resiliente y respaldo satelital opcional para amplia cobertura
- Interfaces vehiculares completas, incluyendo CAN dual y puertos seriales, para telemetría y diagnóstico profundos
- Soporte Bluetooth BLE para integración de sensores locales y dispositivos del conductor
- Procesamiento local en el borde y almacenamiento a bordo para reducir uso de ancho de banda y permitir preprocesamiento de telemetría
- Gestión remota del dispositivo, actualizaciones OTA y SDKs para simplificar la integración y las operaciones

## Características principales del DCT - Syrus 4G

- GNSS multiconstelación para rastreo en tiempo real preciso en distintas áreas de cobertura
- Módems celulares duales con eSIM y soporte de eSIM de respaldo para conectividad móvil resiliente
- Accesorio satelital opcional para extender alcance en zonas sin servicio celular
- E/S vehicular que incluye doble CAN J1939 y J1708, además de interfaces seriales y Ethernet para integrar telemetría
- Soporte Bluetooth BLE 4.2 para sensores locales y dispositivos del conductor
- Cómputo en el borde y almacenamiento local para preprocesamiento y buffering de datos
- Elemento seguro y diseño resistente a manipulaciones para autenticación del dispositivo y telemetría confiable
- Gestión remota, OTA y SDKs para integración, configuración y gestión del ciclo de vida

## Cómo funcionan estas funciones con Plaspy

El Syrus 4G reenvía la telemetría procesada y los datos de posición a Plaspy, donde se muestran en paneles en vivo, reproducciones históricas e informes de telemetría. Plaspy está diseñado para ingerir datos estructurados de dispositivos y presentarlos para la toma de decisiones operativas; el Syrus 4G está pensado para preprocesar y enviar esos payloads de forma fiable.

- Las actualizaciones de ubicación y el estado en tiempo real aparecen en los paneles de Plaspy para la supervisión de flotas en vivo
- La telemetría y los códigos de diagnóstico derivados del CAN pueden mapearse en Plaspy para mantenimiento y análisis
- Las entradas de sensores BLE y los eventos locales del dispositivo se envían a Plaspy como telemetría estructurada cuando están configurados
- El preprocesamiento en el borde reduce el uso de ancho de banda en la nube al agregar o filtrar mensajes antes de enviarlos a Plaspy
- Plaspy puede aceptar reportes de dispositivos por TCP o UDP en el puerto 8888 y detecta automáticamente el protocolo del tracker para facilitar el onboarding
- El estado remoto del dispositivo y el progreso de OTA informado por el Syrus 4G pueden reflejarse en Plaspy para supervisión operacional

## Casos de uso típicos

- Rastreo de flotas en tiempo real y monitoreo de rutas para operaciones logísticas y de servicio en campo
- Diagnóstico remoto y flujos de trabajo de mantenimiento preventivo usando datos de motor y fallas extraídos del CAN
- Detección de robo y manipulaciones combinada con autenticación segura del dispositivo y rastreo en vivo
- Análisis de telemetría de combustible y motor para programas de eficiencia cuando se dispone de señales del bus vehicular
- Monitoreo de activos sensorados usando sensores BLE para temperatura u otros dispositivos relacionados con el conductor
- Despliegues industriales que requieren preprocesamiento en el borde y conectividad confiable hacia plataformas en la nube

## Notas sobre disponibilidad de funciones

- Algunas funciones requieren firmware específico, variantes de hardware o accesorios opcionales como el módulo satelital o módulos de radio concretos
- La disponibilidad de interfaces vehiculares y los nombres de señal dependen del cableado del vehículo y las decisiones de instalación del integrador
- El uso de Bluetooth, CAN, serial y Ethernet puede variar según el modelo regional y la configuración regulatoria
- Las funciones de gestión remota y OTA dependen de la disponibilidad del servicio Syrus Cloud o del soporte del fabricante y de las habilitaciones correspondientes
- Confirme siempre el conjunto exacto de funciones y las interfaces soportadas para su unidad y la revisión de firmware con el fabricante

## Por qué usar Plaspy con estas funciones

Combinar el Syrus 4G con Plaspy une una pasarela telemática robusta y de grado empresarial con una plataforma pensada para visibilidad centralizada de flotas y generación de informes de telemetría. La redundancia del gateway, sus amplias E/S y las capacidades de procesamiento en el borde contribuyen a que los eventos y la telemetría más relevantes lleguen a Plaspy de forma fiable, permitiendo a los operadores supervisar vehículos en tiempo real y utilizar datos de diagnóstico para la planificación de mantenimiento.

Para saber más sobre cómo Plaspy puede exponer la telemetría del Syrus 4G y mejorar la visibilidad operativa visite https://www.plaspy.com. Para las especificaciones de dispositivo, notas de firmware y opciones de accesorios más actuales y detalladas, verifique la información con DCT en https://www.digitalcomtech.com/ ya que las funciones del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
