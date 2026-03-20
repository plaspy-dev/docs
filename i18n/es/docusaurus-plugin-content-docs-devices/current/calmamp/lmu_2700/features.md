---
slug: /calmamp/lmu_2700/features
id: lmu_2700-features
sidebar_label: Features
title: CalmAmp - LMU-2700 Features
sidebar_class_name: menu_item_tracker
description: Resumen de las funciones del rastreador CalmAmp LMU-2700 y su integración con Plaspy para ubicación de flotas y supervisión de conductores
keywords:
  - CalmAmp LMU-2700
  - Funciones LMU-2700
  - Rastreador GPS CalmAmp
  - dispositivo de rastreo de flota
  - monitoreo de conducta del conductor
  - PEG motor de eventos programable
  - gestión de dispositivos PULS
  - seguimiento de ubicación de vehículos
  - rastreador compatible con Plaspy
  - capacidades LMU-2700
---

# CalmAmp - Características del LMU-2700

Esta página describe el contexto público de funcionalidades para el uso del rastreador CalmAmp LMU-2700 con Plaspy. Resume las capacidades del dispositivo más relevantes para el rastreo de flotas y activos, y explica cómo suelen reflejarse esas capacidades en Plaspy para visualización y operación.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación específica del fabricante. Verifique siempre el comportamiento del equipo según la documentación oficial de CalmAmp y las notas de la versión del firmware del dispositivo.

## Resumen de funciones

El LMU-2700 es una unidad AVL compacta diseñada para ofrecer rastreo vehicular fiable y detección de eventos en flotas comerciales. A continuación se presentan las capacidades prácticas de las que los usuarios dependen con más frecuencia para las operaciones y la supervisión diaria.

- GPS de alta sensibilidad para reportes de ubicación consistentes en entornos difíciles, con opciones de antena interna o externa según las necesidades de instalación.
- Comunicaciones celulares en múltiples modos, incluyendo GSM GPRS, CDMA 1xRTT o HSPA, para ofrecer conectividad en distintos tipos de redes.
- Acelerómetro integrado de 3 ejes capaz de detectar eventos como frenadas bruscas, aceleraciones agresivas e impactos, útil para el análisis del comportamiento del conductor y la seguridad.
- Batería de reserva integrada que permite rastreo puntual o último reporte si se interrumpe la alimentación principal del vehículo.
- PEG, motor de eventos programable, para lógica de reglas a bordo y generación de excepciones personalizadas basadas en movimiento, tiempo, ubicación, entradas y condiciones geográficas.
- PULS, gestión de dispositivos por aire, para actualizar remotamente configuración, reglas PEG y firmware, y para supervisar el estado de las unidades en la flota.

## Funciones principales del CalmAmp - LMU-2700

- Posicionamiento GPS sensible con opciones de antena interna o externa.
- Soporte para varias tecnologías celulares para adaptarse a los requisitos de red regionales.
- Acelerómetro de 3 ejes para detección de eventos de conducción y colisiones.
- Batería de respaldo de 1,000 mAh para seguimiento temporal sin alimentación principal.
- Generador de eventos programable PEG para reglas y alertas personalizadas en el dispositivo.
- Gestión remota PULS para actualizaciones de configuración, distribución de firmware y monitoreo de estado.
- Factor de forma compacto, adecuado para una amplia variedad de instalaciones en vehículos.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere la telemetría y los datos de eventos del LMU-2700 para proporcionar visibilidad en tiempo real e histórica de las unidades en la plataforma. Plaspy detecta automáticamente los protocolos de rastreador compatibles, de modo que las unidades pueden comenzar a reportar sin seleccionar manualmente el protocolo.

- Trazas de ubicación en vivo e históricas disponibles para revisión de rutas y reproducción de viajes dentro de Plaspy.
- Los eventos del acelerómetro reportados por el LMU-2700 (por ejemplo frenadas bruscas o impactos) aparecen como eventos con marca de tiempo que se pueden revisar y exportar.
- Las excepciones generadas por PEG y las reglas personalizadas a bordo se traducen en registros de eventos y alertas que Plaspy presenta para la supervisión operativa.
- La información de batería de respaldo y el estado de salud del dispositivo reportados por la unidad pueden mostrarse en los resúmenes de estado del dispositivo para ayudar a identificar unidades que requieran atención.
- Plaspy muestra la conectividad y el estado de reporte del dispositivo para que los equipos puedan ver cuándo una unidad está fuera de línea o reporta con menor frecuencia.

## Casos de uso típicos

- Rastreo de ubicación de la flota y reproducción de rutas para operaciones logísticas y de reparto.
- Programas de monitoreo de conducta del conductor que utilizan eventos del acelerómetro para identificar conducción agresiva.
- Detección de impactos y análisis post incidente utilizando marcas de tiempo de colisiones o eventos severos registrados.
- Monitoreo remoto del estado del dispositivo y la salud de la flota para priorizar mantenimiento y resolución de problemas.
- Despliegues donde las opciones de antena flexibles y el tamaño reducido facilitan la instalación en distintos tipos de vehículos.
- Escenarios que requieren actualizaciones por aire de reglas y firmware para adaptar las políticas de la flota.

## Notas sobre la disponibilidad de funciones

- La disponibilidad de funciones depende de la versión de firmware y de la revisión de hardware del LMU-2700 instalado en cada vehículo.
- Algunas capacidades pueden requerir reglas PEG o configuración PULS que deben activarse o personalizarse después de la instalación.
- El soporte de portadoras celulares (GSM GPRS, CDMA 1xRTT, HSPA) puede variar según el modelo regional y la provisión del operador.
- La duración de la batería de respaldo está pensada para reportes de corta duración o último intento y puede variar según el estado del dispositivo y la frecuencia de envío de datos.
- Consulte siempre las notas de producto y la documentación de lanzamiento de CalmAmp para conocer el comportamiento y las opciones compatibles más recientes.

## Por qué usar Plaspy con estas funciones

Usar el LMU-2700 con Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación, los datos de eventos y el estado de los dispositivos en una flota mixta. La combinación de la inteligencia a bordo proporcionada por PEG y las herramientas de eventos e informes de Plaspy permite a los equipos operativos reducir el ruido mediante filtrado en el dispositivo, conservando a la vez registros detallados de incidentes disponibles en la plataforma.

Learn more about how Plaspy can help you manage LMU-2700 units and improve operational oversight at https://www.plaspy.com. Device features, firmware behavior, and implementation details can change over time, so please verify the latest device specifications and firmware notes on the manufacturer site http://www.calamp.com/ for current information.
