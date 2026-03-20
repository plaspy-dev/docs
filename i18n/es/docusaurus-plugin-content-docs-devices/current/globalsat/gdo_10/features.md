---
slug: /globalsat/gdo_10/features
id: gdo_10-features
sidebar_label: Features
title: GlobalSat - GDO-10 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las capacidades del oscilador GNSS disciplinado GlobalSat GDO-10 y su integración con Plaspy para supervisión de sincronización
keywords:
  - características GlobalSat GDO-10
  - características GPS GDO-10
  - capacidades GlobalSat GDO-10
  - oscilador de tiempo GDO-10
  - GDO-10 1PPS 10MHz
  - oscilador de tiempo GlobalSat Plaspy
  - oscilador GNSS disciplinado GDO-10
  - referencia temporal GNSS GDO-10
  - GDO-10 compatible con Plaspy
  - equipo de sincronización de laboratorio GDO-10
---

# GlobalSat - Características del GDO-10

Esta página describe el contexto público de uso del GlobalSat GDO-10 con Plaspy. Se focaliza en las capacidades del equipo que importan para flujos de trabajo de supervisión y telemetría: el GDO-10 es un oscilador disciplinado por GNSS con OCXO que ofrece una salida 1PPS de alta precisión, una onda cuadrada de 10 MHz en fase bloqueada y soporte GNSS integrado para GPS, GLONASS y Galileo. La unidad incluye alimentación +5 V para antena activa y está pensada para integrarse en arquitecturas de sincronización y telemetría que alimentan plataformas de monitoreo centralizadas como Plaspy.

La disponibilidad exacta de funciones y su comportamiento puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. La integración y el conjunto de campos de telemetría visibles en Plaspy dependen de cómo se conecte el GDO-10 a una pasarela de telemetría o interfaz de monitoreo que exponga el estado y las métricas de salud de sincronización a la plataforma.

## Resumen de funciones

El GDO-10 aporta salidas de sincronización de calidad de laboratorio y disciplining por GNSS a un entorno de telemetría gestionado. Cuando se combina con una pasarela de monitoreo o un adaptador I/O que exponga sus señales de estado, Plaspy puede mostrar el estado de sincronización y las condiciones de alarma junto con otros activos supervisados.

- Salida 1PPS de alta precisión para sincronización de segundos y verificación de marcas temporales.
- Onda cuadrada de 10 MHz en fase bloqueada como referencia de frecuencia para sistemas de prueba y medida.
- Soporte GNSS para GPS, GLONASS y Galileo que proporciona disciplining para precisión temporal a largo plazo.
- Alimentación integrada +5 V para antena activa que simplifica la instalación de la antena y garantiza adquisición de señal fiable.
- Diseñado para despliegues de laboratorio, telecomunicaciones e infraestructura donde se requiere sincronía estable.
- Compatible con Plaspy para ingestión de telemetría y monitoreo centralizado de la salud de sincronización.

## Características principales del GlobalSat - GDO-10

- Núcleo OCXO que aporta alta estabilidad de frecuencia a corto plazo y comportamiento de holdover predecible.
- Disciplining GNSS usando GPS, GLONASS y Galileo para mantener precisión temporal a largo plazo.
- Salida 1PPS de alta precisión para alineación de segundos y timestamping.
- Salida de onda cuadrada 10 MHz en fase bloqueada vinculada a la referencia 1PPS para aplicaciones en dominio de frecuencia.
- Alimentación integrada +5 V para antenas GNSS activas.
- Interfaces eléctricas sencillas pensadas para integración con instrumentos y pasarelas de monitoreo.
- Factor de forma y rendimiento orientados a bancos de laboratorio, sitios de telecomunicaciones y hubs de sincronización de infraestructura.

## Cómo interactúan estas características con Plaspy

Cuando el GDO-10 forma parte de una ruta de telemetría que reporta su estado, Plaspy puede mostrar la calidad de sincronización y los indicadores de salud relacionados como parte de un panel de monitoreo integral. Plaspy está diseñado para detectar automáticamente protocolos de dispositivos compatibles cuando aplica, lo que permite a los operadores visualizar el estado temporal junto con otros activos.

- Visibilidad del estado de lock GNSS y del estado de sincronización cuando la pasarela de monitoreo expone esas señales.
- Indicadores en tiempo real de la calidad del lock 1PPS y de la estabilidad temporal presentados en los dashboards de Plaspy.
- Monitoreo de la presencia o salud de la referencia 10 MHz a través de la interfaz de telemetría utilizada para conectar la unidad con Plaspy.
- Informes combinados para correlacionar la salud de la sincronización con otros equipos monitorizados y la telemetría del sitio.
- Integración de alarmas y notificaciones en Plaspy cuando una pasarela soportada reporta condiciones de sincronización fuera de tolerancia.

## Casos de uso típicos

- Sincronización de estaciones base 5G donde se requieren referencias 1PPS y 10 MHz fiables.
- Sincronización y temporización en estaciones terrenas para satélites LEO para coordinar enlaces ascendentes y descendentes.
- Bancos de prueba de laboratorio y configuraciones de calibración que necesitan una referencia disciplinada de frecuencia y tiempo.
- Sistemas de prueba en líneas de producción que dependen de temporización reproducible para la automatización de medidas.
- Distribución de tiempo en infraestructuras a gran escala y monitoreo de sincronización entre sitios.
- Dashboards centralizados de telemetría que incluyen la salud de equipos de sincronización junto con el seguimiento de activos.

## Notas sobre disponibilidad de funciones

- La presentación de funciones en Plaspy depende de la pasarela de telemetría o la interfaz utilizada para exponer las señales del GDO-10 a la plataforma.
- Actualizaciones de firmware o revisiones de hardware por parte del fabricante pueden modificar los campos de telemetría disponibles o el comportamiento.
- Variantes regionales o de instalación pueden afectar el rendimiento GNSS, la selección de antena o los requisitos de alimentación.
- El GDO-10 es un equipo de temporización y no un rastreador vehicular, por lo que la telemetría esperada difiere de la de los rastreadores de flotas.
- Consulte la documentación del fabricante para conocer las señales del conector y las recomendaciones de instalación exactas antes de integrar el equipo.

## Por qué usar Plaspy con estas características

Integrar el GDO-10 con Plaspy proporciona una vista centralizada de la salud de sincronización y la calidad de sincronía en sitios distribuidos. Plaspy permite a los equipos de operaciones correlacionar el rendimiento temporal con otros sistemas monitorizados, configurar alertas sobre el estado de lock y registrar métricas de temporización disciplinada en informes y procesos de incidentes. Esto mejora la supervisión operativa para equipos responsables de infraestructura de telecomunicaciones, estaciones terrenas satelitales, laboratorios de prueba y otros entornos que dependen de tiempo GNSS preciso.

Para conocer más sobre cómo Plaspy puede gestionar endpoints de temporización y telemetría en su despliegue visite https://www.plaspy.com. Para las especificaciones de dispositivo, notas de firmware y guía de instalación más recientes verifique los detalles actuales con el fabricante en https://www.globalsat.com.tw/
