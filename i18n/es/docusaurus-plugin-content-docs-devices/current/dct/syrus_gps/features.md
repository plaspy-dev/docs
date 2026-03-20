---
slug: /dct/syrus_gps/features
id: syrus_gps-features
sidebar_label: Features
title: DCT - Syrus GPS Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del rastreador DCT Syrus GPS y su integración con Plaspy para seguimiento fiable de vehículos y activos
keywords:
  - DCT Syrus GPS
  - características Syrus GPS
  - rastreador GPS DCT
  - Syrus GPS Plaspy
  - seguimiento de vehículos
  - seguimiento de activos
  - detección de choque por acelerómetro
  - respaldo satelital Iridium
  - memoria de almacenamiento y reenvío
  - resistente al agua IP65
---

# DCT - Syrus GPS: Características

Esta página resume el conjunto público de funciones del rastreador DCT Syrus GPS y explica cómo esas capacidades se aprovechan con Plaspy para obtener visibilidad de flotas y activos. Se enfoca en las funciones que importan a los usuarios y en el valor práctico, más que en detalles de implementación, para que los equipos comprendan lo que el dispositivo ofrece al integrarlo con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, los accesorios elegidos, el método de instalación y la configuración del fabricante. Para comandos específicos del dispositivo, notas de firmware o requisitos de accesorios, consulte la documentación y las notas de la versión del fabricante.

## Resumen de funcionalidades

El Syrus GPS está diseñado como un rastreador IoT de alto rendimiento que prioriza la transferencia de datos rápida y fiable y el reporte robusto de eventos. Combina el seguimiento de ubicación con detección de movimiento y eventos relacionados con la seguridad, opciones de respaldo por satélite y un empaque resistente adecuado para instalaciones expuestas en vehículos y activos.

- Transferencia de datos de alta velocidad para reportes de ubicación y eventos oportunos a plataformas backend  
- Acelerómetro digital integrado de 3 ejes que detecta movimiento, impactos y condiciones de choque  
- Capacidad de comunicación satelital de respaldo mediante accesorio SATCOM IRIDIUM para cobertura remota  
- Amplia memoria de almacenamiento y reenvío que retiene largos historiales de eventos cuando no hay conectividad  
- Carcasa robusta y resistente al agua con certificación IP65, apta para vehículos y activos móviles  
- Detección de manipulación para reportar accesos probables a la caja o interferencias del dispositivo

## Funciones principales del DCT - Syrus GPS

- Acelerómetro interno digital de 3 ejes ±16G con registro de eventos y bitácora de condiciones de choque  
- Detección de movimiento e impactos para métricas de conductor, alertas de remolque y eventos configurables relacionados  
- Transferencia de datos optimizada para comunicaciones IoT y M2M  
- Compatibilidad con satélites IRIDIUM cuando se utiliza el accesorio SATCOM opcional para reportes remotos  
- Amplio buffer de almacenamiento y reenvío capaz de guardar hasta 30,000 eventos mientras está sin conexión  
- Geocercas inteligentes con soporte definido por el usuario para zonas circulares y poligonales  
- Detección de manipulación para señalar una posible apertura de la carcasa o interferencia  
- Modos de bajo consumo energético para conservar batería cuando el activo está inactivo

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere los reportes del rastreador y expone eventos del dispositivo, ubicaciones e información de estado para monitoreo y flujos operativos. El conjunto de funciones del Syrus GPS se mapea a las capacidades de visibilidad y alertas de Plaspy para que los equipos puedan actuar sobre eventos de movimiento, seguridad y conectividad.

- Las actualizaciones de ubicación y los reportes de alta velocidad aparecen en Plaspy como eventos de posición para seguimiento en tiempo real y reproducción histórica  
- Los eventos del acelerómetro, como bitácoras de choque, inicio de movimiento y detecciones de impacto, se muestran como eventos discretos que usted puede buscar y filtrar en Plaspy  
- Los buffers de almacenamiento y reenvío sincronizan los eventos históricos con Plaspy una vez que se restablece la conectividad, preservando la continuidad de los eventos en la plataforma  
- Las entradas y salidas de geocercas definidas en el dispositivo o en Plaspy se exponen para alertas y reportes basados en reglas  
- Los eventos de manipulación y las conmutaciones por accesorio hacia satélite pueden usarse para activar notificaciones o escalar la supervisión dentro de Plaspy  
- Plaspy detecta automáticamente los protocolos de rastreador compatibles y asocia los reportes del dispositivo con su cuenta y los registros de activos

## Casos de uso típicos

- Seguimiento de ubicación de flotas con reportes de eventos mejorados para seguridad e investigación de incidentes  
- Monitoreo de activos remotos donde el respaldo satelital mediante accesorio IRIDIUM permite alcance periódico fuera de la cobertura celular  
- Análisis del comportamiento y desempeño del conductor usando eventos de movimiento e impacto derivados del acelerómetro  
- Detección de remolque y movimiento no autorizado para vehículos y equipos estacionados  
- Operaciones que requieren registro resiliente de datos con almacenamiento y reenvío durante largos periodos sin conexión  
- Instalaciones en entornos exigentes donde se requiere protección IP65 y reporte de manipulación

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen de la versión de firmware y pueden añadirse, mejorarse o cambiar en actualizaciones del dispositivo  
- Accesorios opcionales, como un módulo SATCOM, son necesarios para habilitar la funcionalidad de respaldo satelital IRIDIUM  
- Las revisiones de hardware y las variantes regionales pueden afectar las interfaces disponibles y las redes certificadas  
- El cableado de instalación, la configuración de accesorios y la ubicación de montaje pueden influir en sensores como la detección de manipulación y el comportamiento del acelerómetro  
- Verifique los límites de cantidad y configuración de geocercas si depende de un número específico de zonas circulares o poligonales

## Por qué usar Plaspy con estas funciones

Usar el DCT Syrus GPS con Plaspy ofrece a las organizaciones una vista consolidada de ubicación, movimiento y datos de eventos a lo largo de vehículos y activos. Plaspy captura y normaliza los reportes del dispositivo para que los equipos puedan monitorear incidentes, reproducir actividad histórica y crear reglas en torno a movimiento, manipulación, geocercas y conmutación por satélite sin gestionar protocolos de dispositivo de bajo nivel.

Learn more about how Plaspy can display Syrus GPS data and improve operational oversight at https://www.plaspy.com. Device features, firmware behavior, and accessory requirements can change over time, so please verify the latest technical details and compatibility information at the manufacturer site https://www.digitalcomtech.com/.
