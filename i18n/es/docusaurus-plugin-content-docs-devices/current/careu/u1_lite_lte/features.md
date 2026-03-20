---
slug: /careu/u1_lite_lte/features
id: u1_lite_lte-features
sidebar_label: Features
title: CAREU - U1 Lite+ LTE Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador CAREU U1 Lite+ LTE y su compatibilidad con Plaspy para gestión de flotas
keywords:
  - CAREU U1 Lite+ LTE
  - funciones U1 Lite+
  - rastreador GPS CAREU
  - telemática vehicular
  - diagnósticos OBD II CAN
  - monitoreo de combustible
  - telemática de video
  - seguimiento de flotas Plaspy
  - configuración remota FOTA
  - inmovilizador antirrobo
---

# CAREU - Funciones del U1 Lite+ LTE

Esta página presenta el contexto público de funciones para el uso del rastreador CAREU U1 Lite+ LTE con Plaspy. Resume las capacidades del dispositivo que son relevantes para los usuarios de Plaspy y explica cómo esas capacidades aportan valor operativo en la supervisión de flotas, diagnóstico, telemática de video y flujos de trabajo antirobo cuando el equipo está conectado a la plataforma Plaspy.

La disponibilidad exacta de las funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para la configuración específica del dispositivo, variantes regionales y los detalles técnicos más recientes, consulte la documentación del fabricante y las notas de la versión.

## Descripción general de funciones

El U1 Lite+ LTE es una unidad telemática compacta para vehículos diseñada para ofrecer seguimiento de posición, telemetría del motor, monitoreo de combustible y soporte de telemática de video, minimizando el esfuerzo de integración. Se anuncia como compatible con Plaspy desde su salida de fábrica e incluye funciones orientadas a despliegues en vehículos comerciales, camiones pesados y flotas refrigeradas.

- Rastreo GNSS en tiempo real usando GPS, GLONASS y QZSS para mantener conciencia continua de la posición.
- Interpretación integrada de OBD II y CAN para telemetría del motor, incluyendo odómetro, RPM, temperatura del motor y nivel de combustible.
- Monitoreo avanzado de combustible con soporte para sensores ultrasónicos y sensores externos para generar informes y análisis de consumo.
- Preparado para telemática de video en modelos Cat.4, con hotspot Wi‑Fi interno opcional para conectar cámaras y transmitir video.
- Conectividad celular multi‑red con LTE Cat 4 o Cat 1 y retroceso a 3G/2G para maximizar cobertura y continuidad.

## Funciones principales del CAREU - U1 Lite+ LTE

- Recepción GNSS compatible con GPS, GLONASS y QZSS para fijaciones de posición fiables.
- Intérprete OBD II y CAN compatible con protocolos J1939 y J1708 para datos del motor y del vehículo.
- Soporte de monitoreo de combustible que incluye sensores ultrasónicos y externos para reportes precisos del nivel de combustible.
- Compatibilidad celular multi‑red con LTE Cat 4 o Cat 1 más retrocesos a 3G y 2G para amplia cobertura.
- Hotspot Wi‑Fi interno opcional en variantes Cat.4 para soportar telemática de video e interacción con cámaras.
- Acelerómetro de 3 ejes integrado para detección de impactos y eventos bruscos según la documentación del producto.
- Soporte de configuración remota y actualización de firmware FOTA para simplificar la gestión masiva de dispositivos.
- Funciones antirobo como inmovilización remota del motor y detección de bloqueo de señal GSM dentro del conjunto de características del dispositivo.

## Cómo funcionan estas funciones con Plaspy

Al conectarse a Plaspy, el U1 Lite+ transmite posición, diagnósticos y datos de sensores a la plataforma para que los operadores puedan supervisar vehículos en tiempo real y ejecutar políticas automatizadas. Plaspy interpreta la telemetría estandarizada que reporta el dispositivo y la muestra en tableros, reglas de geocercas e informes para apoyar decisiones operativas.

- Ubicación en tiempo real e historial de movimiento mostrados en los mapas de Plaspy e informes de viaje.
- Telemetría del motor desde OBD II y CAN —como odómetro, RPM, temperatura del motor y nivel de combustible reportado— visible en los paneles de Plaspy.
- Datos de monitoreo de combustible procedentes de sensores ultrasónicos y externos integrados en informes de combustible y análisis de consumo.
- Eventos de geocerca y alertas configurables por llegadas, salidas e infracciones gestionados por el motor de reglas de Plaspy.
- Acciones de inmovilización remota y alertas antirobo disponibles para respuesta operativa dentro de los flujos de trabajo de Plaspy.
- Conectividad preparada para video indicada en los detalles del dispositivo cuando los modelos Cat.4 soportan integración de cámaras y rutas de carga de video mediante flujos compatibles.

## Casos de uso típicos

- Flujos de trabajo de prevención y recuperación de robos usando inmovilización remota y detección de bloqueo de señal.
- Revisión de incidentes y monitoreo de seguridad asistidos por video en vehículos equipados con dash cams en modelos Cat.4.
- Gestión de combustible y análisis de consumo para flotas que utilizan entradas de combustible por ultrasónicos y vía CAN.
- Transporte refrigerado y control de cadena de frío donde se usan entradas 1‑Wire o sensores externos para ambientes de control de temperatura.
- Diagnóstico y planificación de mantenimiento para camiones pesados usando flujos de telemetría OBD II y CAN.
- Despliegues de flotas mixtas donde Plaspy centraliza datos de vehículos con conectividad y conjuntos de sensores variados.

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen del modelo; las variantes Cat.4 incluyen el hotspot Wi‑Fi interno opcional mientras que otras variantes pueden no contar con él.
- La versión de firmware y la configuración del fabricante pueden habilitar o limitar elementos de telemetría concretos y funciones de gestión remota.
- Las revisiones de hardware y las variantes regionales de conectividad celular pueden afectar las bandas soportadas y los retrocesos de red; consulte al fabricante para detalles regionales.
- El tipo de instalación influye en las interfaces y la telemetría disponible; las unidades conectadas por OBD II expondrán datos distintos a las instalaciones cableadas.
- Periféricos opcionales como dispositivos Bluetooth o módulos de sensores externos pueden ser compatibles según las opciones de dispositivo y el firmware.

## Por qué usar Plaspy con estas funciones

Usar el CAREU U1 Lite+ LTE con Plaspy permite a los operadores centralizar ubicación, telemetría del motor y datos de sensores en un único entorno de gestión de flotas. Plaspy convierte las fuentes de datos del dispositivo en información accionable a través de paneles, alertas, geocercas e informes automáticos para que los equipos de flota mejoren la supervisión operativa, gestionen combustible y mantenimiento, y respondan con rapidez a eventos de seguridad.

Aprenda más sobre cómo Plaspy puede trabajar con dispositivos como el CAREU U1 Lite+ LTE visitando https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, notas de firmware y orientación del fabricante, verifique los detalles en el sitio oficial del fabricante https://www.systech-iot.com/
