---
slug: /glonasssoft/umka302/features
id: umka302-features
sidebar_label: Features
title: GLONASSsoft - UMKa302 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador UMKa302 y cómo se integra con Plaspy para monitoreo de flotas
keywords:
  - características GLONASSsoft UMKa302
  - rastreador GPS UMKa302
  - compatibilidad UMKa302 Plaspy
  - capacidades UMK 302
  - funciones de rastreador GLONASSsoft
  - rastreo vehicular UMKa302
  - UMKa302 bus CAN BLE
  - gestión de flotas UMKa302
  - registro de caja negra UMKa302
  - entradas y salidas UMKa302
---

# GLONASSsoft - Características del UMKa302

Esta página ofrece una visión pública de las funciones del rastreador GPS GLONASSsoft UMKa302 y explica cómo sus capacidades se integran con Plaspy para el monitoreo de flotas, la recolección de telemetría y la visibilidad de eventos. Está pensada para describir funciones orientadas al usuario y el valor práctico al emplear el UMKa302 con Plaspy, más que para ofrecer instrucciones de instalación paso a paso.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la forma en que la unidad sea instalada o configurada por el fabricante o el instalador. Para comandos específicos del dispositivo, límites y detalles técnicos más actualizados consulte la documentación de GLONASSsoft.

## Visión general de funciones

El UMKa302 es un rastreador profesional para vehículos diseñado para aportar posición GNSS junto con telemetría del vehículo y sensores para operaciones de flota y flujos de trabajo antirrobo. Combina interfaces a bordo, soporte para sensores inalámbricos y registro persistente para mantener el flujo de posición y eventos hacia Plaspy incluso cuando la conectividad es intermitente.

- Informes de posición GNSS en tiempo real para visibilidad de rutas y recorridos históricos.
- Integración con bus CAN (J1939 y filtrado personalizado) para exponer parámetros del vehículo sin sensores adicionales.
- Soporte BLE para hasta ocho sensores inalámbricos que capturan telemetría de combustible y parámetros ambientales.
- Conectividad celular con doble SIM y robusto almacenamiento tipo caja negra para entrega de datos resiliente.
- Múltiples canales de entradas y salidas incluyendo entradas analógicas/digitales y de pulso, además de salidas de colector abierto para captura de eventos y acciones remotas.

## Funciones principales del GLONASSsoft UMKa302

- Seguimiento GNSS con soporte multi-constelación para obtener fijaciones de posición fiables.
- Soporte de bus CAN incluyendo J1939 y opciones de filtro personalizadas para entregar telemetría del vehículo.
- Soporte de sensores BLE para hasta ocho sensores inalámbricos que miden combustible y auxiliares.
- Módem celular con doble SIM para mejorar la disponibilidad y conmutación automática.
- Registro interno tipo caja negra y soporte microSD para almacenamiento persistente sin conexión.
- Conjunto amplio de E/S: entradas analógicas/digitales, entradas por pulso y salidas de colector abierto para detección de eventos y control.
- Opciones de interfaz vehicular incluyendo RS-232, RS-485 y 1-Wire para integración con dispositivos de terceros.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y normaliza la telemetría del UMKa302 para que su equipo pueda monitorear activos, analizar datos históricos y configurar alertas desde una única plataforma. Plaspy detecta automáticamente el protocolo del rastreador e ingiere la posición GNSS y los flujos de telemetría soportados, permitiendo visibilidad operativa sin necesidad de parsers personalizados por parte del usuario.

- Las ubicaciones en vivo y las actualizaciones de ruta aparecen en los mapas de Plaspy para despacho y supervisión.
- Parámetros derivados del CAN y lecturas de sensores BLE se adjuntan a las líneas de tiempo del dispositivo para diagnóstico e informes.
- Los registros de la caja negra y los archivos en microSD se sincronizan con Plaspy cuando el equipo recupera conectividad, preservando la continuidad de los datos.
- Los eventos de E/S y los cambios de estado en las salidas están disponibles como eventos en Plaspy para alertas y automatizaciones.
- Plaspy detecta conexiones entrantes del dispositivo y admite los reportes estándar del rastreador, de modo que la configuración es sencilla para unidades compatibles.

## Casos de uso típicos

- Operaciones de flota que requieren consolidar seguimiento GNSS y telemetría del vehículo para planificación de rutas y análisis de utilización.
- Monitoreo antirrobo donde las actualizaciones continuas de ubicación y los registros de eventos facilitan la recuperación y la investigación de incidentes.
- Programas de control de combustible que combinan datos de combustible por CAN y sensores BLE para obtener información sobre consumo y detectar anomalías.
- Diagnóstico de vehículos comerciales y mantenimiento preventivo usando parámetros del CAN sin necesidad de hardware adicional.
- Despliegues de flota mixta en los que el registro resiliente sin conexión y la doble SIM reducen los vacíos en la recolección de datos.

## Notas sobre disponibilidad de funciones

- La versión de firmware y la revisión de hardware pueden habilitar o limitar ciertos campos de telemetría y comportamientos de protocolo.
- Algunas interfaces y funciones opcionales, como doble CAN o capacidad de voz, pueden corresponder a variantes de modelo o requerir opciones de hardware específicas.
- La compatibilidad con sensores BLE depende del tipo de sensor y del protocolo; verifique la guía del fabricante para modelos de sensores soportados.
- El cableado de instalación y la arquitectura del vehículo afectan las señales CAN y la funcionalidad de E/S disponibles; los instaladores deben validar el cableado y los filtros antes del despliegue.
- Consulte la documentación del fabricante para límites exactos de almacenamiento, comandos soportados y variantes específicas por país.

## Por qué usar Plaspy con estas funciones

Usar el UMKa302 con Plaspy ofrece una combinación práctica de telemetría a nivel vehicular y seguimiento resiliente que ayuda a las organizaciones a mantener supervisión operativa. Plaspy aporta paneles unificados, informes históricos y alertas basadas en eventos que convierten los parámetros derivados del CAN, las lecturas de sensores BLE y las E/S del dispositivo en información accionable para equipos de despacho, mantenimiento y seguridad.

Para conocer más sobre el uso de Plaspy con rastreadores compatibles, visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, notas de firmware y orientación del fabricante, confirme la información con GLONASSsoft en https://glonasssoft.ru/.
