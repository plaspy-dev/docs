---
slug: /careu/ez2/features
id: ez2-features
sidebar_label: Features
title: CAREU - EZ2 Features
sidebar_class_name: menu_item_tracker
description: Descripción pública de las funciones del rastreador GPS CAREU EZ2 y su integración con Plaspy para control de flotas y telemetría
keywords:
  - funciones CAREU EZ2
  - rastreador GPS CAREU EZ2
  - compatibilidad EZ2 Plaspy
  - telemetría vehicular
  - integración CAN OBD II
  - inmovilización remota
  - geocercas y notificaciones
  - hardware para seguimiento de flotas
  - registro de datos a bordo
  - accesorios RS-232 y 1-Wire
---

# CAREU - EZ2 - Funciones

Esta página ofrece una visión pública de las funciones del rastreador GPS CAREU EZ2 y de cómo sus capacidades se integran con Plaspy para la gestión y supervisión de flotas. Resume las prestaciones prácticas que aporta el EZ2 cuando se incorpora a Plaspy, incluyendo seguimiento en tiempo real, telemetría CAN/OBD II, controles antivaho y soporte para accesorios.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión del hardware, el método de instalación y la selección del modelo regional. Las decisiones del fabricante y los accesorios opcionales pueden influir en las funciones visibles en su despliegue con Plaspy, por lo que la información below debe considerarse contexto general orientado al usuario y no una referencia técnica exhaustiva.

## Resumen de funciones

El CAREU EZ2 es un rastreador compacto para vehículos diseñado para enviar datos de ubicación y estado del vehículo a Plaspy, ofreciendo visibilidad operativa y opciones de control. Combina conectividad celular, telemetría CAN/OBD II, control antivuelco y puertos para accesorios que proporcionan a los operadores de flota un conjunto útil de herramientas de monitoreo y gestión.

- Seguimiento GPS en tiempo real y transmisión continua de telemetría a Plaspy para visibilidad instantánea del vehículo.
- Lectura de datos CAN/OBD II para mostrar odómetro, RPM, nivel de combustible y temperatura del motor en los paneles de Plaspy.
- Inmovilización remota para ayudar a prevenir el movimiento no autorizado como parte de flujos de trabajo gestionados por Plaspy.
- Geocercas avanzadas con zonas configurables y notificaciones por exceso de velocidad para apoyar reglas operativas.
- Gran capacidad de registro a bordo para conservar datos durante interrupciones de conectividad y cargarlos a Plaspy cuando se restablece la conexión.
- Soporte para accesorios RS-232 y 1-Wire opcional para identificación de conductor y entradas adicionales de sensores.

## Características principales del CAREU - EZ2

- Conectividad 4G LTE Cat 1 con retroceso a 2G y opciones de módulo regional o global para amplia cobertura con distintos operadores.
- Integración U1Lite+ CAN/OBD II para leer telemetría del vehículo como nivel de combustible, odómetro, RPM y temperatura del motor.
- Inmovilizador remoto para control antivuelco y gestión a través de los flujos de trabajo de Plaspy.
- Geocercas avanzadas con soporte para múltiples perímetros y alertas configurables por límite de velocidad.
- Gran capacidad de registro de datos a bordo, adecuada para almacenar registros prolongados mientras está desconectado.
- Puerto RS-232 para accesorios como lectores RFID o de códigos de barras y puerto 1-Wire opcional para i-Button o sensores de temperatura.
- Capacidad de configuración remota y actualizaciones de firmware FOTA para facilitar la gestión y mantenimiento a escala de flota.
- Alarmas por pérdida de alimentación y manipulación para apoyar detección de robo y sabotaje.

## Cómo funcionan estas funciones con Plaspy

Al conectarse a Plaspy, el EZ2 suministra información de ubicación y estado del vehículo que Plaspy presenta mediante mapas, alertas e informes. Plaspy puede consumir la telemetría del EZ2 para generar información operativa, flujos de trabajo basados en eventos y análisis históricos para los equipos de la flota.

- La ubicación en vivo y la telemetría se muestran en los paneles de Plaspy para supervisión en tiempo real y decisiones de despacho.
- Métricas CAN/OBD II como odómetro, RPM y temperatura del motor están disponibles para informes y análisis de tendencias dentro de Plaspy.
- La telemetría relacionada con combustible posibilita informes de consumo y alertas cuando hay datos CAN disponibles.
- Los eventos de geocerca y las infracciones de límite de velocidad generan notificaciones y pueden utilizarse para automatizar flujos de trabajo en Plaspy.
- Los comandos de inmovilización remota enviados desde Plaspy pueden emplearse como parte de procedimientos de recuperación y antirobo.
- Los eventos de accesorios conectados por RS-232 o 1-Wire (por ejemplo lecturas de identificación de conductor) pueden reportarse a Plaspy para asociar conductores o activos.

## Casos de uso típicos

- Seguimiento de flotas en tiempo real para operaciones de logística y reparto, mejorando enrutamiento y visibilidad del despachador.
- Gestión antivuelco usando inmovilización remota y alertas por manipulación o pérdida de alimentación para respuesta rápida.
- Programas de monitoreo de combustible y eficiencia operativa que combinan telemetría CAN/OBD II con trazas GPS.
- Flujos de trabajo de identificación de conductor y activo mediante accesorios RS-232 o 1-Wire para registro de turnos y verificación de entregas.
- Control de sitios basado en geocercas para hacer cumplir límites operativos y políticas de velocidad.
- Registro offline para cumplimiento regulatorio y cargue posterior a Plaspy cuando se restablece la conectividad.
- Mantenimiento remoto de dispositivos y actualizaciones de firmware para simplificar despliegues a gran escala.

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones puede variar según la versión de firmware y la revisión del hardware; algunos campos de telemetría o comportamientos dependen del firmware instalado.
- Las variantes del módulo celular regional o global pueden afectar las bandas de red compatibles en un mercado concreto.
- Los accesorios opcionales y puertos como RS-232 o 1-Wire deben estar presentes y configurados para que los eventos de accesorios se reporten a la plataforma.
- Las prácticas de instalación y cableado pueden influir en qué señales CAN/OBD II están disponibles para lectura por el EZ2.
- Plaspy detecta automáticamente los protocolos soportados por el rastreador durante la configuración, lo que facilita la incorporación del dispositivo.
- Considere siempre consultar al fabricante del dispositivo para obtener la información más actualizada sobre configuración específica del equipo y compatibilidad de accesorios.

## Por qué usar Plaspy con estas funciones

Combinar el CAREU EZ2 con Plaspy ofrece a las organizaciones una vía práctica para unificar ubicación de vehículos, telemetría CAN/OBD II y controles antivuelco en un único entorno de gestión de flotas. El EZ2 suministra los datos brutos de ubicación y estado del vehículo, mientras que Plaspy proporciona paneles, alertas e informes necesarios para supervisión operativa, despacho y análisis de flotas.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores compatibles como el CAREU EZ2, visite https://www.plaspy.com. Las características del dispositivo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo; por favor verifique los detalles más recientes específicos del dispositivo con el fabricante en https://www.systech-iot.com/
