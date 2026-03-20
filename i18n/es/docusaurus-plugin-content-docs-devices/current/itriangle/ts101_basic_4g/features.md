---
slug: /itriangle/ts101_basic_4g/features
id: ts101_basic_4g-features
sidebar_label: Features
title: iTriangle - TS101 Basic 4G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del iTriangle TS101 Basic 4G y su integración con Plaspy para seguimiento de flotas y telemetría
keywords:
  - iTriangle TS101 Basic 4G características
  - iTriangle TS101 Basic 4G rastreador GPS
  - compatibilidad TS101 Basic 4G con Plaspy
  - características rastreador GPS iTriangle
  - capacidades TS101 Basic 4G
  - funciones TS101 Basic 4G
  - rastreo de vehículos TS101
  - gestión de flotas TS101 Basic
  - telemetría TS101 4G
  - rastreadores compatibles con Plaspy
---

# iTriangle - TS101 Basic 4G — Características

Esta página ofrece un resumen público de las funciones del iTriangle TS101 Basic 4G y explica cómo sus capacidades se usan con Plaspy para telemática de vehículos, monitoreo de activos y supervisión de flotas. El enfoque está en las funcionalidades orientadas al usuario y el valor práctico cuando el equipo se integra con los paneles y flujos de trabajo de la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el cableado de instalación y la implementación del fabricante. Las descripciones que siguen reflejan las capacidades señaladas por el fabricante y cómo suelen mapearse en Plaspy, pero usted debe confirmar los detalles con la documentación oficial de iTriangle para su variante de dispositivo.

## Resumen de funciones

El TS101 Basic 4G es un rastreador vehicular compacto diseñado para flotas mixtas. Combina conectividad LTE Cat 1 con recepción multi GNSS y almacenamiento local para ofrecer flujos continuos de posición y telemetría. Sus tolerancias de alimentación y el soporte inalámbrico de corto alcance permiten instalación en diversos vehículos manteniendo visibilidad durante eventos transitorios de energía.

- Posicionamiento GNSS en tiempo real usando GPS, GLONASS y BeiDou para mayor fiabilidad de la fijación en entornos difíciles.
- Conectividad celular LTE Cat 1 para envío continuo de telemetría y ubicaciones a Plaspy.
- Amplio rango de entrada de 9–90 V CC más una batería interna de respaldo para preservar el rastreo ante pérdida de alimentación principal.
- Almacenamiento a bordo que cachea registros de seguimiento cuando no hay cobertura y los sube cuando vuelve la conectividad.
- Soporte BLE 5.0 para sensores de corto alcance y aprovisionamiento local.
- Entradas y salidas configurables y opciones RS485 y CAN para integrar señales del vehículo y sensores externos.

## Funciones principales del iTriangle - TS101 Basic 4G

- Receptor multi GNSS compatible con GPS, GLONASS y BeiDou para mayor visibilidad satelital.
- Módem celular LTE Cat 1 para transporte confiable de datos hacia plataformas en la nube como Plaspy.
- Amplio rango de tensión de entrada 9–90 V CC para adaptarse a distintos sistemas eléctricos vehiculares.
- Batería interna de respaldo para mantener el rastreo básico cuando se desconecta la alimentación principal.
- BLE 5.0 para conexión de accesorios y tareas de configuración local.
- Almacenamiento persistente a bordo (aprox. 16 MB) para registro offline de posiciones.
- E/S digitales y analógicas configurables con expansión opcional RS485 y CAN para entradas de telemetría del vehículo.
- Soporte para actualizaciones de firmware OTA/FOTA y múltiples canales de configuración para gestión remota.

## Cómo funcionan estas funciones con Plaspy

Al conectarse a Plaspy, el TS101 Basic 4G transmite ubicación y telemetría para que los gestores de flota puedan supervisar posición, estado y eventos de los vehículos casi en tiempo real. Plaspy recibe las fijaciones GNSS y las señales reportadas por el dispositivo, las asocia con el registro del vehículo y conserva los registros offline que el equipo sube cuando se restablece la conectividad.

- Visualización en tiempo real de ubicación y trayectorias en Plaspy mediante las fijaciones GNSS reportadas por el dispositivo.
- Campos de telemetría como estado de encendido, lecturas de sensores analógicos y entradas digitales se reflejan como eventos de dispositivo o puntos de telemetría en la interfaz de Plaspy.
- Los registros offline almacenados en el equipo se cargan automáticamente y se reconcilian en el historial cuando retorna la cobertura, preservando la continuidad en Plaspy.
- Accesorios conectados por BLE y sensores de corto alcance se pueden correlacionar con el historial de ubicaciones para enriquecer los reportes en Plaspy.
- Actualizaciones remotas de firmware y configuración ayudan a mantener un comportamiento uniforme en toda la flota cuando se gestionan a través de canales remotos compatibles.

## Casos de uso típicos

- Seguimiento de ubicación de la flota para monitoreo de rutas y despacho en flotas mixtas eléctricas y convencionales.
- Flujos anti robo que usan salidas digitales para controlar relés inmovilizadores junto con alertas y monitoreo de estado en Plaspy.
- Recolección de telemetría de combustible y vehículo mediante entradas analógicas, 1-Wire o CAN opcional para análisis de consumo y detección de anomalías.
- Monitoreo de carga y activos complementado con sensores BLE para control de condiciones en corto alcance.
- Rastreo resiliente offline para activos que pasan por zonas sin cobertura, con sincronización automática a Plaspy al recuperar conectividad.
- Gestión remota escalable de dispositivos y mantenimiento de firmware para despliegues de flota.

## Notas sobre disponibilidad de funciones

- Funciones específicas como las interfaces CAN o RS485 opcionales pueden depender de la variante de hardware adquirida o de accesorios.
- El comportamiento funcional y los campos de telemetría disponibles pueden cambiar entre revisiones de firmware; el nivel de firmware determina qué funciones están expuestas.
- El cableado de instalación y las decisiones de integración vehicular definen qué E/S y entradas de sensores están activas en un despliegue concreto.
- El soporte de bandas celulares y las certificaciones regionales varían según las variantes del dispositivo; confirme las bandas soportadas para su mercado con el fabricante.
- Para especificaciones técnicas completas y actualizadas consulte la documentación oficial de iTriangle y las notas de versión.

## Por qué usar Plaspy con estas funciones

Usar el TS101 Basic 4G con Plaspy ofrece a las organizaciones una forma sencilla de centralizar la posición, el estado y los eventos de los vehículos en una única vista operativa. Plaspy captura posiciones GNSS, eventos de E/S y registros offline del dispositivo, lo que permite reconstrucción de líneas de tiempo, alertas y generación de reportes en flotas mixtas sin integraciones a medida.

Para conocer más sobre Plaspy y cómo soporta dispositivos como el TS101 Basic 4G visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware e información sobre variantes, verifique las especificaciones en el sitio del fabricante https://www.itriangle.net/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
