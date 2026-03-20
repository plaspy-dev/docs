---
slug: /queclink/sc350mg/features
id: sc350mg-features
sidebar_label: Features
title: QuecLink - SC350MG Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GNSS QuecLink SC350MG para e-bikes y su integración con Plaspy para monitoreo y seguridad
keywords:
  - QuecLink SC350MG
  - Características SC350MG
  - Rastreador GPS QuecLink SC350MG
  - Rastreador para e-bikes
  - Rastreador GNSS para e-bikes
  - Rastreador LTE Cat M1 NB2
  - Lector de datos ECU BMS
  - Desbloqueo por BLE para bicicletas
  - Rastreador con detección de vibraciones
  - Rastreador compatible con Plaspy
---

# QuecLink - SC350MG: Características

Esta página ofrece una descripción pública de las funciones del QuecLink SC350MG y de cómo sus capacidades se integran con Plaspy para monitoreo y gestión. Se centra en información práctica y no sensible sobre el dispositivo y en el tipo de visibilidad y valor operativo que puede esperar al usar el SC350MG con la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. La información en esta página refleja la descripción del modelo y las configuraciones más comunes, pero usted debe verificar los detalles específicos del dispositivo con el fabricante y la documentación de su implementación.

## Resumen de funciones

El QuecLink SC350MG es un rastreador GNSS compacto y resistente al agua diseñado para e-bikes. Combina conectividad celular, acceso a datos del controlador del vehículo y sensores locales para respaldar flujos de trabajo de seguridad y gestión de flotas. Cuando se integra con Plaspy, el dispositivo puede informar ubicación, eventos de movimiento y datos seleccionados del vehículo para permitir monitoreo remoto y supervisión operativa.

- Diseño compacto y resistente al agua para montaje discreto en e-bikes
- Conectividad celular LTE Cat M1 y NB2 con conmutación a 2G para amplia cobertura
- Amplio rango de entrada de CC compatible con muchos sistemas eléctricos de e-bikes
- Capacidad para leer datos de ECU y BMS mediante interfaces CAN y UART para obtener inteligencia del vehículo
- Soporte BLE que posibilita flujos de desbloqueo local e interacciones con dispositivos emparejados
- Detección de movimiento mediante sensor de vibración y acelerómetro de 3 ejes

## Funciones principales del QuecLink - SC350MG

- Rastreo de ubicación GNSS diseñado para posicionamiento y seguimiento de movimiento en e-bikes
- Comunicación celular LTE Cat M1 NB2 con conmutación a 2G cuando esté disponible
- Resistencia al agua pensada para uso exterior y exposición habitual en bicicletas
- Amplio rango de voltaje de entrada CC (8 a 60 V) para adaptarse a sistemas de energía comunes en e-bikes
- Puertos CAN y UART para recopilar datos de ECU y BMS desde controladores de vehículo y sistemas de baterías
- Bluetooth Low Energy integrado para funciones basadas en proximidad, como el desbloqueo
- Detección de vibraciones para indicación básica de intento de robo o manipulación
- Sensor de aceleración de 3 ejes para detección de movimiento y monitoreo de actividad

## Cómo funcionan estas funciones con Plaspy

Plaspy actúa como capa de plataforma que recibe telemetría y eventos desde rastreadores compatibles como el SC350MG y muestra esa información para monitoreo y análisis. Plaspy detecta automáticamente protocolos comunes de rastreadores y acepta conexiones de dispositivos para que el SC350MG pueda enviar datos de ubicación y sensores al sistema sin necesidad de seleccionar manualmente el protocolo.

- Las actualizaciones de ubicación del SC350MG se muestran en los mapas de Plaspy para seguimiento en tiempo real y análisis histórico
- Los eventos de movimiento y vibración pueden convertirse en alertas o eventos en la línea de tiempo para indicar actividad o posible manipulación
- Las lecturas de ECU y BMS remitidas por el dispositivo pueden aparecer como campos de telemetría o puntos de datos personalizados en Plaspy para obtener información operativa
- Eventos relacionados con BLE, como intentos de desbloqueo, pueden registrarse para proporcionar una auditoría cuando se integran en flujos de acceso a la bicicleta
- La información de estado del dispositivo y su conectividad está disponible en Plaspy para ayudar a supervisar la salud del equipo y la disponibilidad de red

## Casos de uso típicos

- Gestores de flotas que rastrean una flota mixta de e-bikes para conocer ubicación, uso y rutas
- Operadores de sistemas de bicicletas compartidas o de alquiler que monitorean actividad y eventos de acceso
- Propietarios y operadores que usan detección de vibraciones y movimiento para monitoreo antirrobo
- Monitoreo remoto del estado de batería y ECU reportado desde la bicicleta para planificación de mantenimiento
- Habilitación de desbloqueo por proximidad y control de acceso de usuarios mediante integración BLE
- Instalaciones discretas para preservar la estética de la bicicleta mientras se añade monitoreo conectado

## Notas sobre disponibilidad de funciones

- Algunas funciones, como la disponibilidad de datos de ECU y BMS, dependen del controlador específico de la e-bike y de si las señales CAN o UART necesarias están expuestas
- La versión de firmware y las variantes regionales de hardware pueden alterar qué campos de telemetría y eventos son compatibles en una unidad SC350MG determinada
- El método de instalación y el cableado afectan qué rangos de alimentación e interfaces están accesibles durante la operación
- El comportamiento de BLE y los flujos de desbloqueo requieren una aplicación cliente emparejada o una integración que gestione la autenticación y el acceso
- Consulte siempre las notas de la versión del firmware y la documentación del fabricante para conocer las funciones soportadas más recientes

## Por qué usar Plaspy con estas funciones

Usar el QuecLink SC350MG con Plaspy permite a las organizaciones consolidar ubicación, movimiento y datos del vehículo de e-bikes en una única plataforma de monitoreo y gestión. La combinación de rastreo GNSS, sensores de movimiento y datos de ECU/BMS facilita una mejor seguridad, planificación de mantenimiento más efectiva y mayor visibilidad operativa para flotas de bicicletas o propietarios individuales.

Para obtener más información sobre cómo Plaspy puede trabajar con el QuecLink SC350MG y otros rastreadores visite https://www.plaspy.com. Para las listas de funciones específicas del dispositivo, comportamiento del firmware y detalles de implementación del fabricante, verifique la información en el sitio de QuecLink https://www.queclink.com/ ya que las capacidades del producto y el comportamiento del firmware pueden cambiar con el tiempo.
