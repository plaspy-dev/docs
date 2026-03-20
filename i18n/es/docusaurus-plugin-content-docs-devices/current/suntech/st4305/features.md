---
slug: /suntech/st4305/features
id: st4305-features
sidebar_label: Features
title: Suntech - ST4305 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Suntech ST4305 y su integración con Plaspy para gestión de flotas y seguridad
keywords:
  - características Suntech ST4305
  - rastreador GPS Suntech ST4305
  - compatibilidad ST4305 Plaspy
  - variante ST4305R RS232
  - ST4305RE antena externa
  - características rastreador GPS vehicular
  - seguimiento de flotas Suntech
  - análisis de patrones de conducción ST4305
  - reconstrucción de accidentes ST4305
  - detección de interferencias Suntech
---

# Suntech - ST4305 - Características

Esta página ofrece un resumen público de las capacidades de la serie Suntech ST4305 y explica cómo funciona el dispositivo cuando se integra con Plaspy. Está dirigida a gestores de flotas, integradores y arquitectos de sistemas para ayudarles a comprender las capacidades prácticas del rastreador y cómo Plaspy aprovecha esa información para rastreo en tiempo real, telemetría e informes de eventos.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, la variante regional, el cableado de instalación y la configuración del fabricante. Cuando procede, esta página señala diferencias entre variantes y opciones de configuración, y recomienda consultar la documentación del fabricante para detalles específicos y actualizados del dispositivo.

## Resumen de funciones

La serie ST4305 es una familia de rastreadores cableados para vehículos, diseñada para ofrecer cobertura celular resistente e integración al nivel de vehículo. Ofrece conectividad multi red celular, posicionamiento GNSS integrado, un arnés de 14 pines para integración directa con el vehículo y variantes que añaden opciones seriales y de antena según las necesidades de instalación.

- Conectividad celular multi red con soporte LTE Cat M1, NB-IoT y 2G para amplia cobertura y transporte de datos de bajo costo.
- Receptor GNSS integrado para reportes de posición continuos y reproducción histórica de rutas en Plaspy.
- Tres variantes de instalación ST4305, ST4305R y ST4305RE para adaptarse a distintos requerimientos de cableado y telemetría.
- Arnés cableado de 14 pines con múltiples entradas y salidas para integrar encendido, puertas, alarmas y sistemas terceros de inmovilizador.
- Funciones telemáticas avanzadas como Análisis de Patrones de Conducción y Reconstrucción de Accidentes para revisión de seguridad e incidentes.
- Batería de respaldo y detección opcional de interferencias para mejorar la recuperación y la monitorización anti robo.

## Características principales del Suntech ST4305

- Radios celulares multi red compatibles con LTE Cat M1, NB-IoT y con conmutación a 2G cuando procede.
- Receptor GNSS integrado para reportes de posición en tiempo real y seguimiento histórico.
- Opciones de variantes: ST4305 con E/S básicas, ST4305R con puerto RS232 y ST4305RE con RS232 y provisionamiento para antena GNSS externa.
- Conector cableado de 14 pines con entradas y salidas configurables para alarmas, detección de encendido e integración de accesorios.
- Análisis de Patrones de Conducción (DPA) y Reconstrucción de Accidentes (CR) para telemetría basada en eventos de seguridad.
- Detección virtual de encendido mediante combinación de voltaje y entradas de movimiento para identificar estados de vehículo encendido o apagado.
- Batería de respaldo que mantiene telemetría y reportes de ubicación durante cortes de energía.
- Soporte de servidor de mantenimiento y posibilidad de descargar firmware y archivos de configuración para la gestión de dispositivos.

## Cómo funcionan estas funciones con Plaspy

Cuando se conecta a Plaspy, la serie ST4305 reporta posición, estado e información de eventos que Plaspy ingiere y presenta en mapas en vivo, alertas e informes históricos. Plaspy detecta automáticamente protocolos compatibles de los rastreadores y muestra los eventos del dispositivo junto a la ubicación y la telemetría del vehículo.

- La ubicación GNSS en tiempo real y los datos de movimiento aparecen en Plaspy para seguimiento en vivo y reproducción de rutas.
- Los estados de encendido y movimiento derivados de la detección virtual de encendido permiten a Plaspy diferenciar periodos de conducción e inactividad y activar informes asociados al encendido.
- Los eventos de Análisis de Patrones de Conducción y Reconstrucción de Accidentes llegan a Plaspy como registros de incidentes para revisión de seguridad y flujos de trabajo automatizados.
- Los eventos de geocercas y las alertas de seguridad reportadas por el dispositivo se muestran en Plaspy para enforcement de rutas y notificaciones de incumplimiento.
- La detección de interferencias y el estado de la batería de respaldo se reportan a Plaspy para apoyar acciones de monitoreo anti robo y recuperación.
- La telemetría serial de las variantes ST4305R y ST4305RE puede alimentar flujos de datos diagnósticos o de terceros en Plaspy cuando el integrador lo configura.

## Casos de uso típicos

- Gestión de flotas con localización continua de vehículos, reproducción de rutas e informes operativos configurables.
- Recuperación de vehículos y monitorización anti robo mediante alertas de interferencias, reportes de batería de respaldo y eventos de seguridad.
- Análisis de seguridad e incidentes usando datos de Análisis de Patrones de Conducción y Reconstrucción de Accidentes para revisiones post incidente.
- Flujos de trabajo de diagnóstico y mantenimiento usando telemetría RS232 de las variantes R y RE.
- Integración de alarmas e inmovilizadores mediante entradas y salidas del dispositivo para control remoto y disuasión.
- Monitoreo a largo plazo de flotas mixtas donde el soporte celular multi red ayuda a mantener conectividad.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones varían entre las variantes ST4305, ST4305R y ST4305RE; confirme que el modelo elegido incluye las opciones de E/S y serial requeridas.
- El nivel de firmware y la configuración del fabricante afectan qué eventos y tipos de telemetría están habilitados por defecto y cómo se reportan.
- El cableado de instalación y las conexiones del arnés determinan las entradas, salidas disponibles y el comportamiento de la detección virtual de encendido.
- Las bandas celulares regionales y la disponibilidad de redes influyen en qué modos celulares son utilizables en cada mercado.
- Revise la hoja de datos de Suntech y los archivos de firmware para conocer las capacidades exactas de su unidad y las actualizaciones de firmware disponibles.

## Por qué usar Plaspy con estas funciones

Usar la serie Suntech ST4305 con Plaspy ofrece a las organizaciones una combinación práctica de hardware de calidad vehicular y una plataforma pensada para visibilidad y supervisión operativa. La familia de dispositivos aporta la telemetría, detección de eventos y opciones de conectividad necesarias para rastreo, análisis de seguridad y flujos de trabajo de seguridad, mientras que Plaspy consolida esos datos en mapas en vivo, alertas e informes históricos utilizados por los equipos de operaciones de flota.

Conozca más sobre Plaspy y cómo soporta dispositivos como el ST4305 en el sitio de Plaspy https://www.plaspy.com. Para detalles específicos del dispositivo, comportamiento del firmware y orientación del fabricante, verifique las características y la documentación en el sitio oficial de Suntech http://www.suntechint.com/.
