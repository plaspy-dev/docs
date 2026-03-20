---
slug: /teltonika/fmu130/features
id: fmu130-features
sidebar_label: Features
title: Teltonika - FMU130 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del Teltonika FMU130 y su integración con Plaspy para monitoreo vehicular y gestión de flotas
keywords:
  - Teltonika FMU130
  - características FMU130
  - rastreador GPS Teltonika FMU130
  - compatibilidad FMU130 con Plaspy
  - seguimiento de flota FMU130
  - funciones FMU130
  - acelerómetro FMU130
  - modos de suspensión FMU130
  - monitorización de combustible FMU130
  - métodos de configuración FMU130
---

# Teltonika - FMU130 — Características

Esta página ofrece un resumen público de las características del Teltonika FMU130 y explica cómo se aprovechan cuando el equipo se integra con Plaspy. El enfoque está en las funcionalidades operativas, escenarios de eventos y formas prácticas en las que el rastreador contribuye a la visibilidad de ubicación y a las operaciones de flota dentro de Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, los accesorios instalados y la configuración aplicada en la instalación. Para detalles técnicos específicos del equipo y las notas de firmware más recientes consulte la documentación oficial de Teltonika.

## Resumen de características

El FMU130 es una unidad de seguimiento en tiempo real compacta diseñada para el monitoreo de vehículos y activos, con conectividad GNSS y 3G/GSM, antenas integradas, batería de respaldo y un conjunto flexible de entradas y salidas. Sus sensores integrados y los escenarios soportados permiten detectar eventos y monitorear el comportamiento del conductor o del vehículo, información que puede presentarse en plataformas de gestión de flotas como Plaspy.

- Reporte en tiempo real de posición GNSS combinado con conectividad celular para seguimiento continuo.
- Batería de respaldo integrada que mantiene el reporte y la detección de eventos durante interrupciones de alimentación.
- Entradas y salidas (E/S) configurables: digitales, analógicas, por impulso y entrada negativa, además de salidas digitales para control de dispositivos externos y monitoreo de estado.
- Acelerómetro integrado y un conjunto de escenarios basados en movimiento para eventos como detección de choque, remolque, ralentí excesivo y exceso de velocidad.
- Múltiples modos de ahorro de energía para equilibrar la frecuencia de reporte y la autonomía de batería según las necesidades de instalación.

## Funciones principales de Teltonika - FMU130

- Rastreo de ubicación GNSS combinado con conectividad 3G/GSM y antenas internas para instalaciones compactas.
- Batería de respaldo que permite operar cuando se pierde la alimentación externa.
- E/S configurables, incluyendo entradas digitales, entradas analógicas, entradas por impulso, entrada negativa y salidas digitales.
- Acelerómetro a bordo que soporta escenarios relacionados con movimiento como detección de choque y remolque.
- Motor de escenarios con escenarios integrados como Conducción Eficiente (Green Driving), detección de exceso de velocidad, contador de combustible por GNSS, detección de ralentí excesivo, inmovilizador, notificación de lectura iButton, detección de desconexión, geovalla automática y manual, escenarios de viaje (trip) y más.
- Múltiples modos de suspensión: GPS Sleep, Online Deep Sleep, Deep Sleep y Ultra Deep Sleep para optimizar el consumo energético.
- Métodos flexibles de configuración y actualización: FOTA Web, FOTA, Teltonika Configurator vía USB o Bluetooth, y la aplicación móvil FMBT; además soporta comandos SMS y GPRS para configuración, control de eventos, control de salidas digitales y depuración.
- Opciones de sincronización horaria vía GNSS, NITZ y NTP y soporte para recolección de datos de combustible y vehículo a través de LLS Analog, adaptador LV CAN (LV CAN200), ALL CAN300, CAN CONTROL y dongles OBDII cuando estén disponibles.

## Cómo funcionan estas características con Plaspy

Plaspy recibe posiciones y reportes de eventos de los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo para integrar los datos entrantes en los paneles de monitoreo. Cuando un FMU130 está conectado a Plaspy, su telemetría y los escenarios configurados se traducen en elementos y eventos visibles dentro de la plataforma.

- Las posiciones GNSS y los eventos de movimiento aparecen en los mapas de Plaspy y en los historiales de recorrido para supervisión de flota.
- Los estados de E/S y los eventos reportados por entradas digitales se muestran como entradas o indicadores de estado dentro de Plaspy para visibilidad remota.
- Las alertas basadas en escenarios, como exceso de velocidad, ralentí excesivo, detección de choque o remolque, se convierten en eventos o notificaciones que pueden utilizarse en reglas y flujos de reporte.
- La monitorización de combustible y los datos provenientes de CAN u OBDII están disponibles en Plaspy cuando el FMU130 se configura para reportar esas entradas, lo que permite visibilidad del consumo y del estado del vehículo.
- El comportamiento de la alimentación y los modos de suspensión influye en la cadencia de reportes y la disponibilidad dentro de Plaspy; deben configurarse según las necesidades operativas para equilibrar autonomía de batería y visibilidad en tiempo real.

## Casos de uso típicos

- Gestión de flotas y seguimiento en tiempo real de vehículos para operadores logísticos.
- Monitoreo de autos de renta y vehículos compartidos, incluyendo registro de viajes y detección de desconexión.
- Seguimiento de taxis y transporte público con detección de incidentes y de ralentí.
- Monitoreo preventivo para eventos de remolque o choque y respuesta en carretera.
- Control de nivel de combustible y datos del vehículo cuando se utilizan adaptadores CAN o dongles OBDII compatibles.
- Configuración remota de dispositivos y actualizaciones de firmware para mantener un comportamiento uniforme en la flota.

## Notas sobre disponibilidad de características

- La disponibilidad de funciones depende de la versión de firmware y de la revisión de hardware; no todos los escenarios o entradas estarán presentes en cada unidad.
- Algunas capacidades requieren periféricos opcionales, como adaptadores CAN o dongles OBDII, para proporcionar datos basados en CAN o RPM del motor.
- Los modos de suspensión y la cadencia de reporte deben configurarse para coincidir con las fuentes de alimentación de la instalación y los requisitos de reporte, garantizando visibilidad consistente.
- Las variantes celulares regionales y la compatibilidad con redes locales pueden afectar la conectividad y deben verificarse para la zona de despliegue.
- Confirme siempre el comportamiento exacto y los comandos soportados revisando la documentación oficial del fabricante para el dispositivo y la revisión de firmware correspondiente.

## Por qué usar Plaspy con estas funciones

Vincular el FMU130 con Plaspy ofrece una vista centralizada de la ubicación, los eventos de movimiento y los estados de E/S, lo que permite a los equipos operativos monitorear flotas, responder a incidentes y analizar el comportamiento del conductor o del vehículo. Plaspy presenta los escenarios reportados y los estados de E/S como eventos e indicadores que facilitan alertas, generación de informes y flujos operativos.

Para obtener más información sobre cómo usar Plaspy con dispositivos compatibles visite https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware y orientación del fabricante más actualizadas, verifique la información en https://www.teltonika-gps.com/ ya que las funciones y los detalles de implementación pueden cambiar con el tiempo.
