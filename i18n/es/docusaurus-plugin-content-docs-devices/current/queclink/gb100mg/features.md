---
slug: /queclink/gb100mg/features
id: gb100mg-features
sidebar_label: Features
title: QuecLink - GB100MG Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador GPS QuecLink GB100MG y su integración con Plaspy para telemática de flotas y seguros
keywords:
  - características QuecLink GB100MG
  - rastreador GPS QuecLink GB100MG
  - compatibilidad GB100MG Plaspy
  - telemetría de choque GB100MG
  - BLE 4.2 GB100MG
  - LTE Cat M1 NB1 GB100MG
  - rastreador vehicular GB100MG
  - rastreador UBI GB100MG
  - telemática de flotas GB100MG
  - reemplazo QuecLink GB130MG
---

# QuecLink - GB100MG — Características

Esta página ofrece un resumen público de las capacidades del QuecLink GB100MG y cómo se mapean con Plaspy para telemática de flotas, seguros basados en uso (UBI) y monitoreo operativo. Se describen las funciones relevantes para usuarios de Plaspy y sus aplicaciones prácticas, sin entrar en detalles privados ni en configuraciones exclusivas del fabricante.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Cuando aplica, esta página destaca los puntos principales comunicados por Queclink y le recomendamos a los integradores que verifiquen el comportamiento actual con la documentación oficial y las notas de firmware de Queclink.

## Resumen de características

El GB100MG es un rastreador compacto pensado para montaje en el compartimento del motor, orientado a UBI y telemática de flotas. Se enfoca en conectividad celular fiable, telemetría de choque de alta resolución, soporte BLE para accesorios y una carcasa resistente IP67 para instalaciones bajo el cofre.

- Seguimiento GPS en tiempo real y reportes de posición adecuados para supervisión de flotas y telemática de seguros
- Telemetría de choque y comportamiento de conducción de alta resolución gracias a un acelerómetro integrado de muestreo elevado
- Conectividad celular global LTE Cat M1 y NB1 con respaldo 2G para amplia cobertura y reportes resilientes
- Soporte BLE 4.2 para ampliar la telemetría con accesorios y sensores inalámbricos compatibles
- Gran búfer de mensajes en el dispositivo y múltiples disparadores de reporte para capturar datos aun cuando la conectividad celular sea intermitente

## Características principales del QuecLink - GB100MG

- Carcasa compacta con clasificación IP67 diseñada para instalación en el compartimento del motor, protegiendo contra humedad y polvo
- Conectividad LTE Cat M1 y NB1 con retroceso a EGPRS 2G para cobertura extendida
- BLE 4.2 integrado que permite emparejar accesorios y sensores inalámbricos para telemetría adicional
- Acelerómetro de 6 ejes de alta resolución con capacidad de muestreo elevado para captura detallada de eventos de choque
- Almacenamiento en el dispositivo de hasta 10,000 mensajes para preservar telemetría durante pérdidas temporales de conexión
- Múltiples modos de reporte, incluidos informes programados y basados en disparadores para flujos de trabajo por tiempo, distancia y kilometraje
- Reporte mediante TCP, UDP o SMS para adaptarse a diferentes condiciones de red y métodos de ingestión de la plataforma

## Cómo funcionan estas características con Plaspy

Plaspy ingiere ubicación y telemetría de rastreadores compatibles como el GB100MG y presenta esos datos en paneles, alertas e informes para apoyar operaciones, seguridad y procesos de siniestros. Plaspy detecta automáticamente protocolos soportados y acepta reportes de dispositivos por los métodos de transporte habituales, lo que facilita la incorporación.

- Actualizaciones de ubicación en tiempo real y recorridos históricos visibles en los paneles de Plaspy para monitoreo de flotas
- Telemetría de choque y trazas de acelerómetro de alta frecuencia usadas para generar registros de eventos y revisión de incidentes
- Manejo de mensajes bufferizados para que Plaspy reciba reportes retrasados y complete huecos una vez que la conectividad se restablece
- Entradas de accesorios BLE disponibles en los flujos de telemetría que pueden mostrarse como sensores adicionales dentro de Plaspy
- Disparadores de reporte flexibles en el dispositivo que se traducen en reglas y alertas en Plaspy para encendido, movimiento y otros estados monitoreados

## Casos de uso típicos

- Programas de seguros basados en uso (UBI) que requieren comportamiento del conductor, kilometraje y telemetría de choques para scoring
- Gestión de flotas con seguimiento en vivo, supervisión de rutas y análisis histórico de trayectos
- Reconstrucción de accidentes y soporte a siniestros usando trazas de acelerómetro de alta fidelidad
- Flujos de trabajo antirobo y detección de remolque que se basan en movimiento con ignición apagada y alertas bufferizadas
- Programas de seguridad de flota y coaching de conductores que monitorean eventos bruscos y patrones de conducción
- Extensión de sensores para monitoreo de carga o condiciones ambientales mediante accesorios BLE

## Notas sobre disponibilidad de características

- La versión de firmware y la revisión de hardware pueden cambiar las funciones disponibles y el comportamiento de muestreo; confirme con las notas de versión del firmware del dispositivo
- La ubicación de instalación y las prácticas de cableado afectan algunas señales y la detección de eventos cuando se monta bajo el cofre versus otras ubicaciones
- Algunas capacidades, como el comportamiento de accesorios BLE y la retención máxima del búfer, dependen de la configuración del fabricante y variantes regionales
- El GB100MG fue anunciado en una fase de descontinuación en 2022 y Queclink recomienda el GB130MG como alternativa actual para nuevos despliegues
- Siempre verifique la documentación del fabricante para certificaciones, soporte de bandas regionales y limitaciones del dispositivo antes del despliegue

## Por qué usar Plaspy con estas características

Combinar el GB100MG con Plaspy proporciona un camino práctico hacia la visibilidad operativa, combinando telemetría robusta en el dispositivo con paneles, reglas e informes en la nube. Organizaciones que ejecutan pilotos UBI, flotas mixtas o procesos de siniestros pueden usar Plaspy para traducir eventos del dispositivo en alertas, registros históricos e informes de gestión sin necesidad de un trabajo extenso de ingestión personalizado.

Para saber más sobre Plaspy y cómo soporta dispositivos como el GB100MG, visite https://www.plaspy.com. Para detalles específicos más recientes sobre características del dispositivo, comportamiento de firmware y orientación del fabricante, verifique la información actual en el sitio oficial de Queclink https://www.queclink.com/ ya que las funciones e implementaciones pueden cambiar con el tiempo.
