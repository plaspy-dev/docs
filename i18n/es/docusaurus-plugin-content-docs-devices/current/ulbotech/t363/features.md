---
slug: /ulbotech/t363/features
id: t363-features
sidebar_label: Features
title: Ulbotech - T363 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Ulbotech T363 y cómo su WiFi OBDII GNSS y sensores se integran con Plaspy
keywords:
  - funciones Ulbotech T363
  - rastreador GPS Ulbotech T363
  - funciones OBDII T363
  - punto de acceso WiFi T363
  - T363 GPS y GLONASS
  - inmovilizador T363
  - comportamiento del conductor T363
  - rastreador compatible con Plaspy
  - capacidades del rastreador Ulbotech
  - seguimiento de flotas T363
---

# Ulbotech - T363: Funciones

Esta página ofrece un resumen público de las funciones del Ulbotech T363 y cómo sus capacidades se relacionan con el uso en Plaspy. Se describen las funcionalidades principales orientadas al usuario que son relevantes para la supervisión de flotas y vehículos a través de Plaspy, explicando su valor práctico sin exponer configuraciones sensibles.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la forma en que se instale la unidad. Cuando la implementación precisa sea importante para su despliegue, revise la documentación del fabricante y las notas de firmware antes de tomar decisiones de integración definitivas.

## Resumen de capacidades

El Ulbotech T363 combina conectividad, posicionamiento, diagnóstico vehicular y detección de movimiento pensado para seguimiento de vehículos y supervisión de flotas. Estas funciones ayudan a mantener visibilidad sobre los vehículos, ofrecen información diagnóstica y permiten el análisis del comportamiento del conductor cuando el dispositivo se integra con una plataforma telemática como Plaspy.

- Módulo celular y WiFi integrados que pueden proporcionar internet a bordo y resiliencia en la conectividad
- Funcionalidad de punto de acceso y puente WiFi para ampliar la conectividad local y reducir el uso celular cuando procede
- Posicionamiento GNSS con soporte de GPS y GLONASS para fijar la ubicación de forma fiable
- Diagnóstico OBDII y SAE J1939 para recopilar parámetros del vehículo y monitorizar códigos de falla (DTC)
- Acelerómetro 3D para detección de movimiento y análisis básico de comportamiento de conducción
- Salida para inmovilizador que permite corte remoto del motor como ayuda antirrobo o de recuperación

## Funciones principales del Ulbotech - T363

- Módulo celular y WiFi integrado que habilita la función de punto de acceso para varios dispositivos
- Modo de puente WiFi para conectarse a redes inalámbricas cercanas y ahorrar datos móviles
- Receptor GNSS con soporte multiconstelación para posicionamiento confiable
- Antena de alta sensibilidad y funciones de GNSS asistido que mejoran el tiempo de fijación en instalaciones exigentes
- Compatibilidad con OBDII y SAE J1939 para reportar parámetros del vehículo y eventos DTC
- Monitorización en tiempo real de señales comunes del vehículo como velocidad y métricas del motor según lo reporta el bus del vehículo
- Acelerómetro 3D para detección de movimiento y generación de eventos relacionados con patrones de conducción brusca
- Salida dedicada para inmovilizador o corte de motor para flujos de trabajo de seguridad y recuperación

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere telemetría y eventos desde rastreadores compatibles para ofrecer visibilidad centralizada de ubicación, diagnóstico y eventos. El T363 puede reportar posicionamiento, diagnósticos del vehículo y eventos de movimiento a Plaspy para que administradores y operadores puedan supervisar activos desde un único panel.

- Ubicación y recorridos históricos aparecen en los mapas de Plaspy, permitiendo revisar rutas y supervisión geoespacial
- Los parámetros OBDII y SAE J1939 reportados por el dispositivo se muestran en Plaspy como puntos de telemetría para vigilar el estado del motor y eventos DTC
- Los eventos de movimiento y del acelerómetro pueden generar alertas y emplearse en informes de comportamiento del conductor dentro de Plaspy
- El estado del inmovilizador o los eventos de corte de motor pueden registrarse como eventos de seguridad en Plaspy
- Plaspy detecta automáticamente muchos protocolos de rastreadores y acepta los reportes al servidor de la plataforma, lo que simplifica la configuración y reduce la selección manual de protocolos
- Opciones de conectividad como puente WiFi o uso de punto de acceso pueden mejorar la disponibilidad de datos y ayudar a mantener reportes consistentes a Plaspy en zonas con cobertura celular variable

## Casos de uso típicos

- Gestión de flotas con ubicación continua de vehículos y historial de rutas
- Monitoreo de salud del vehículo basado en OBDII y detección temprana de códigos de falla
- Programas de monitoreo y entrenamiento de conductores usando eventos de acelerómetro
- Flotas de alquiler y aseguradoras donde la telemetría y el control remoto de inmovilizador añaden seguridad
- Flujos de trabajo de asistencia en carretera respaldados por diagnósticos en vivo y compartición de ubicación
- Conectividad para pasajeros u operadores a bordo mediante punto de acceso WiFi cuando sea necesario

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones depende de la versión de firmware y puede cambiar con actualizaciones de Ulbotech
- Diferentes revisiones de hardware o variantes regionales pueden alterar el comportamiento celular y WiFi o las bandas soportadas
- La disponibilidad de datos OBDII y SAE J1939 depende de la marca, modelo y la información expuesta en el bus del vehículo
- El método de instalación puede afectar el rendimiento GNSS; instalaciones ocultas pueden necesitar ajustes de antena para obtener la mejor recepción
- Verifique qué reglas de comportamiento de conducción y umbrales del acelerómetro están habilitados por defecto en el firmware del dispositivo
- Confirme restricciones regulatorias o del operador local que puedan afectar las funciones de punto de acceso o puente

## Por qué usar Plaspy con estas funciones

Usar el Ulbotech T363 junto con Plaspy ofrece a las organizaciones una forma unificada de recopilar datos de ubicación, diagnóstico y movimiento para la toma de decisiones operativas. Plaspy agrega los reportes del dispositivo en mapas visuales, alertas y registros históricos para que los equipos puedan rastrear vehículos, responder a eventos diagnósticos y analizar patrones de conducción sin gestionar múltiples soluciones puntuales.

Para saber más sobre cómo Plaspy puede trabajar con rastreadores compatibles, visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo y comportamiento de firmware consulte la documentación de Ulbotech en http://www.ulbotech.com/ ya que las funciones e implementaciones pueden cambiar con el tiempo.
