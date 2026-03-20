---
slug: /eelink/got10/features
id: got10-features
sidebar_label: Features
title: EElink - GOT10 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador OBD EElink GOT10 y su integración de diagnósticos CAN con Plaspy para monitoreo de flotas
keywords:
  - funciones EElink GOT10
  - funciones rastreador GPS EElink GOT10
  - GOT10 OBD rastreador Plaspy
  - EElink GOT10 CAN BUS
  - diagnósticos vehículo GOT10
  - rastreo flotas GOT10
  - rastreador OBD II EElink
  - diagnósticos motor GOT10
  - rastreo GPS GOT10 Plaspy
  - capacidades EElink GOT10
---

# EElink - Características del GOT10

Esta página presenta el contexto público de funciones para el uso del rastreador EElink GOT10 con Plaspy. Se centra en las capacidades prácticas que puede esperar cuando el GOT10 está integrado en Plaspy para monitoreo de flotas, diagnóstico y localización. El contenido está destinado a operadores, administradores de flotas y propietarios de vehículos que desean comprender cómo funciona el dispositivo a nivel de funciones en Plaspy, más que a detallar configuraciones o aspectos de implementación sensibles.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware del dispositivo, la revisión de hardware, la marca y modelo del vehículo y las decisiones del fabricante. El tipo de instalación y la exposición del bus CAN del vehículo también afectan qué campos de telemetría aparecen en Plaspy, por lo que verifique las capacidades disponibles en su vehículo y versión de firmware con la documentación del fabricante.

## Resumen de funciones

El GOT10 es un rastreador que se conecta en el puerto OBD y combina seguimiento GPS con diagnósticos del vehículo obtenidos del bus CAN. Está diseñado para simplificar la instalación y enviar telemetría y mensajes diagnósticos unificados a Plaspy, de modo que la ubicación y la información del motor puedan visualizarse en una sola plataforma.

- Instalación plug-and-play en OBD-II que reduce el tendido de cables y el esfuerzo de configuración en muchos vehículos
- Captura de datos del bus CAN y diagnósticos OBD-II para mostrar información del motor y códigos de fallo en Plaspy
- Reporte de ubicación mediante GPS del vehículo o datos de posición obtenidos del bus CAN cuando estén disponibles
- Telemetría en tiempo real, como velocidad y RPM, visible en los informes de Plaspy cuando el vehículo expone esos datos
- Factor de forma compacto, pensado para su instalación en vehículos y apto tanto para flotas como para uso privado

## Funciones principales del EElink - GOT10

- Conector OBD-II para una instalación sencilla en vehículos compatibles
- Lectura de datos del bus CAN para acceder a diagnósticos y telemetría del vehículo
- Entrega de códigos de falla OBD a la plataforma conectada
- Parámetros operativos en tiempo real como velocidad del vehículo y RPM cuando el bus CAN los suministra
- Capacidad de rastreo de ubicación cuando el vehículo o el bus CAN proporcionan información de posición
- Diseñado para uso en flotas con telemetría que favorece flujos de trabajo de monitoreo y mantenimiento
- Permite alertas remotas e informes consolidados en una plataforma de gestión integrada

## Cómo funcionan estas funciones con Plaspy

Cuando está conectado y configurado, el GOT10 reenvía telemetría y mensajes diagnósticos estandarizados a Plaspy para que los administradores de flota puedan ver la ubicación y el estado del vehículo en conjunto. Plaspy presenta los datos recibidos en paneles, vistas históricas e informes para supervisión operativa.

- Actualizaciones de posición en vivo e historial de ubicaciones disponibles en Plaspy cuando el vehículo proporciona datos de posición
- Códigos de fallo del motor y diagnósticos OBD mostrados como eventos o elementos reportables en Plaspy
- Campos de telemetría como velocidad y RPM reflejados en el monitoreo y la reproducción histórica de Plaspy cuando el bus CAN los expone
- Alertas y notificaciones en Plaspy basadas en códigos diagnósticos o umbrales de telemetría configurados
- Vista consolidada del vehículo que combina ubicación y diagnósticos para apoyar la planificación de mantenimiento y la respuesta ante incidentes

## Casos de uso típicos

- Monitoreo de flotas que combina rastreo de ubicación con diagnósticos del motor para una supervisión consolidada
- Programas de mantenimiento preventivo que usan códigos registrados y telemetría para programar servicios
- Monitoreo antirrobo y recuperación con actualizaciones de posición en tiempo real cuando están disponibles
- Análisis de combustible y eficiencia cuando las métricas de consumo están disponibles en el bus CAN del vehículo
- Evaluación del desempeño del conductor utilizando tendencias registradas de velocidad y parámetros del motor
- Respuesta rápida ante incidentes correlacionando la ubicación con alertas diagnósticas

## Notas sobre disponibilidad de funciones

- La presencia de funciones depende de la exposición del bus CAN del vehículo y de qué PIDs diagnósticos soporte el vehículo
- Las versiones de firmware y las revisiones de hardware del fabricante pueden habilitar o limitar ciertos campos de telemetría
- Implementaciones OBD regionales o específicas por vehículo pueden cambiar los datos a los que el GOT10 puede acceder
- El tipo de instalación y el uso del dispositivo en el vehículo afectan los diagnósticos y reportes disponibles
- Consulte siempre la documentación del fabricante del GOT10 para conocer las capacidades más recientes del dispositivo

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el EElink GOT10 ofrece a los operadores una vista única de la ubicación y el estado del vehículo, lo que ayuda a reducir tiempos de inactividad y facilita decisiones informadas de mantenimiento. Plaspy agrega la telemetría transmitida por el GOT10 para que los equipos puedan supervisar rutas, recibir alertas sobre códigos de falla y generar informes que incluyan tanto datos de rastreo como del motor.

Para saber más sobre Plaspy y cómo puede recibir telemetría de rastreadores compatibles como el GOT10, visite https://www.plaspy.com. Verifique siempre las funciones actuales del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de EElink https://www.eelink.com.cn/ ya que las capacidades pueden cambiar con el tiempo.
