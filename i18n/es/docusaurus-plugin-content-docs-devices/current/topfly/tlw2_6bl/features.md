---
slug: /topfly/tlw2_6bl/features
id: tlw2_6bl-features
sidebar_label: Features
title: TopFly - TLW2-6BL Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador TopFly TLW2-6BL y su integración con Plaspy para gestión de flotas
keywords:
  - TopFly TLW2-6BL
  - funciones TopFly TLW2-6BL
  - rastreador GPS TopFly
  - TLW2-6BL Plaspy
  - características rastreador GPS TLW2-6BL
  - rastreador GPS para vehículo
  - dispositivo de rastreo para flotas
  - rastreador con sensor BLE
  - rastreador GPS 4G LTE
  - GNSS alta precisión
---

# TopFly - TLW2-6BL: Características

Esta página describe el contexto público de funcionalidades al usar el rastreador TopFly TLW2-6BL con Plaspy. Resume las capacidades prácticas que puede esperar al integrar este rastreador vehicular alimentado por cable con conectividad 4G LTE en Plaspy, incluyendo su posicionamiento GNSS, opciones de I/O, soporte BLE para sensores, comportamiento de almacenamiento en buffer y cómo se representan estas funciones dentro de la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento en su despliegue pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para límites específicos del dispositivo, bandas regionales soportadas o comportamientos controlados por firmware, consulte la documentación oficial del fabricante además de la guía de configuración de Plaspy.

## Resumen de funciones

El TLW2-6BL es un rastreador para vehículos y activos alimentados, diseñado para flotas profesionales, logística y cadena de frío. Ofrece conectividad celular resiliente, posicionamiento GNSS preciso, entradas y salidas configurables para vehículos, almacenamiento en dispositivo para sobrevivir a cortes de cobertura y soporte BLE 5.0 para sensores externos. En conjunto, estas capacidades permiten seguimiento en tiempo real, ingestión de telemetría en Plaspy y flujos anti‑robo sin necesidad de integraciones personalizadas complejas.

- Conectividad celular resistente con CAT‑M1 y CAT‑NB2 y retroceso a 2G para amplia cobertura de red.
- GNSS de alta precisión con múltiples constelaciones para posicionamiento exacto y tiempo rápido hasta el primer fix.
- I/O para vehículo configurable, incluyendo detección de ignición, entradas digitales y una entrada analógica configurable para telemetría.
- Almacenamiento local en el dispositivo de hasta 49,000 puntos para preservar el historial de rutas durante interrupciones de conectividad.
- Soporte BLE 5.0 para sensores TOPFLYtech y de terceros, ampliando la telemetría a temperatura, humedad y monitoreo de puertas.

## Funciones principales del TopFly - TLW2-6BL

- Compatibilidad lista para usar con Plaspy para una integración directa en los paneles de flota.
- Conectividad celular multimodo usando CAT‑M1 y CAT‑NB2 con retroceso a 2G para conmutación por fallo.
- GNSS de alta precisión compatible con múltiples constelaciones para fiabilidad posicional de nivel submetro a metro.
- Informes rápidos con actualizaciones de posición tan frecuentes como cada 3 segundos y reportes programados configurables.
- Buffer de almacenamiento local de hasta 49,000 puntos para registro offline y posterior subida.
- Entradas y salidas de nivel vehicular incluyendo detección de ignición, dos entradas digitales, una salida digital y una entrada configurable digital/analógica.
- Acelerómetro de 6 ejes integrado para detectar patrones de movimiento relevantes en remolque, choques y comportamiento de conducción.
- Radio BLE 5.0 para emparejar sensores de temperatura, humedad y estado de puertas usados en monitoreo de cadena de frío y logística.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere la telemetría del TLW2-6BL y muestra la posición, el estado de sensores y eventos dentro del panel de Plaspy. Plaspy detecta automáticamente el protocolo del rastreador y acepta los transportes telemáticos estándar soportados por el dispositivo. Esto facilita ver la ubicación en vivo, alarmas y reproducción histórica sin trabajo profundo de protocolo.

- Las actualizaciones de posición de alta frecuencia se muestran en tiempo real para una visualización y reproducción de rutas precisa.
- Los cambios de estado de ignición y entradas se mapean a eventos de inicio y fin de viaje y pueden usarse para análisis de sesiones de conducción.
- Los puntos almacenados en buffer se suben a Plaspy cuando se restablece la conectividad para mantener la reconstrucción continua de rutas.
- La entrada analógica configurable y los datos de sensores BLE pueden presentarse como canales de telemetría para combustible, temperatura u otras sondas.
- El control remoto de salidas y las alarmas reportadas por el dispositivo aparecen en Plaspy como eventos accionables para operaciones antirrobo o de gestión de flota.
- El TLW2-6BL puede configurarse para reportar a los servidores de Plaspy y usa transportes comunes como TCP o UDP hacia el endpoint de ingest de Plaspy d.plaspy.com en el puerto 8888.

## Casos de uso típicos

- Operaciones de flota que requieren actualizaciones de ubicación de alta frecuencia para optimización de rutas y supervisión de conductores.
- Flujos de trabajo de seguridad y antirrobo de vehículos usando detección de ignición, alertas por manipulación y control remoto de salidas.
- Monitoreo de cadena de frío donde sensores BLE de temperatura y humedad reportan la telemetría ambiental durante el tránsito.
- Seguimiento de activos potentes que requieren historial de ubicación en buffer durante cobertura intermitente.
- Verificación logística y de entregas donde los puntos en buffer y la alta frecuencia de reporte permiten una reconstrucción fiable de rutas.
- Análisis de comportamiento de conducción usando eventos basados en el acelerómetro para detección de frenadas bruscas, aceleraciones o curvas pronunciadas.

## Notas sobre disponibilidad de funciones

- La versión de firmware y la configuración del dispositivo determinan los intervalos exactos de reporte, umbrales de alarma y campos de telemetría disponibles.
- Las revisiones de hardware y las variantes regionales del modelo pueden afectar las bandas celulares soportadas y la compatibilidad con sensores externos.
- El soporte para sensores BLE puede depender tanto del firmware del dispositivo como de los perfiles BLE específicos que usen los accesorios de terceros.
- El cableado de instalación y el entorno eléctrico del vehículo pueden influir en la detección de ignición y en las lecturas de sensores analógicos.
- Para despliegues críticos o sensibles, verifique los comportamientos de control remoto y la configuración de alarmas en pruebas controladas antes de una implementación masiva.

## Por qué usar Plaspy con estas funciones

Usar el TopFly TLW2-6BL con Plaspy ofrece a gerentes de flota e integradores una vía práctica para combinar conectividad resiliente, GNSS preciso e I/O vehicular en una vista operacional única. Plaspy convierte la telemetría del dispositivo, el historial de ubicaciones en buffer y las lecturas de sensores BLE en información accionable para seguimiento, seguridad y cumplimiento.

Para conocer más sobre cómo Plaspy funciona con dispositivos compatibles y revisar las capacidades de la plataforma visite https://www.plaspy.com. Para la información más reciente y detallada específica del dispositivo, incluidas notas de firmware, variantes regionales e instrucciones de instalación, por favor verifique los detalles con el fabricante en https://www.topflytech.com/ .
