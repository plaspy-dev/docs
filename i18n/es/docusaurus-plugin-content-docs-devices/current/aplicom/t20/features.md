---
slug: /aplicom/t20/features
id: t20-features
sidebar_label: Features
title: Aplicom - T20 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Aplicom T20 y cómo su conectividad LTE‑M doble CAN e I/O industrial se integra con Plaspy para telemática de flotas
keywords:
  - Aplicom T20
  - Características Aplicom T20
  - Rastreador GPS Aplicom T20
  - Pasarela telemática T20
  - Rastreador Aplicom LTE M
  - Bus CAN T20
  - Entradas y salidas periféricas T20
  - Gestión OTA T20
  - Rastreador compatible con Plaspy
  - Rastreo de flotas T20
---

# Aplicom - Características del T20

Esta página describe el contexto funcional público para el uso del Aplicom T20 con Plaspy. Resume las capacidades del rastreador relevantes para el seguimiento de vehículos y activos móviles, la captura de telemetría y la gestión remota de dispositivos cuando el T20 se integra con Plaspy para supervisión en tiempo real y control operativo.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para detalles técnicos específicos del dispositivo, notas de firmware y los periféricos compatibles más recientes, consulte la documentación y las notas de versión del fabricante.

## Resumen de funciones

El Aplicom T20 es una pasarela telemática compacta diseñada para ofrecer seguimiento fiable de vehículos y equipos móviles, y reenviar telemetría a plataformas en la nube como Plaspy. Está orientado a conectividad IoT eficiente, procesamiento en el borde del dispositivo, soporte de periféricos industriales y gestión de dispositivos a escala de flota.

- Conectividad celular LTE‑M optimizada para comunicaciones IoT y soporte a largo plazo de red, adecuada para seguimiento continuo.
- Interfaces duales de bus CAN para leer diagnósticos de vehículos y máquinas y proporcionar telemetría avanzada a sistemas en la nube.
- Múltiples puertos de I/O industrial para periféricos como lectores iButton, teclados, lectores RFID y sensores de temperatura para capturar entradas por eventos.
- SDK de Aplicom y procesamiento en el borde para filtrar o agregar telemetría antes de enviarla a Plaspy, reduciendo volumen de datos y costos en la nube.
- Gestión OTA (over the air) mediante Aplicom Silver Cloud para configuración remota, actualizaciones de firmware y despliegue de aplicaciones de borde personalizadas.
- Factor de forma compacto para instalación en vehículos, remolques y equipos móviles.

## Características principales del Aplicom T20

- Enlace celular LTE‑M optimizado para comunicaciones telemáticas IoT de bajo consumo.
- Puertos duales de bus CAN para capturar diagnósticos de vehículos y máquinas directamente desde las redes CAN.
- Soporte de I/O industrial para periféricos como lectores iButton, teclados, lectores RFID y sensores de temperatura.
- SDK de Aplicom para desarrollar aplicaciones de borde personalizadas y preprocesar telemetría en el dispositivo.
- Gestión OTA mediante Silver Cloud para configuración remota y despliegue de firmware.
- Filtrado y agregación en el borde para reducir el uso de datos celulares y enviar solo los eventos relevantes.
- Carcasa compacta y robusta, adecuada para instalaciones en vehículos y activos móviles.

## Cómo funcionan estas funciones con Plaspy

Cuando se integra con Plaspy, el T20 reenvía telemetría de ubicación procesada y datos de eventos para que operadores de flotas e integradores puedan monitorear activos en tiempo real y actuar sobre eventos diagnósticos o de periféricos. La lógica de borde en el dispositivo permite controlar el volumen y la temporización de los eventos enviados a Plaspy.

- Actualizaciones de ubicación y telemetría en tiempo real aparecen en los mapas y paneles de Plaspy para supervisión en vivo y análisis de rutas.
- La telemetría del bus CAN y los eventos diagnósticos pueden reportarse a Plaspy para visibilidad del estado del vehículo e informes operativos cuando esas señales estén disponibles en la red del vehículo.
- Los eventos de periféricos como iButton, RFID, teclados y sensores de temperatura se entregan como eventos discretos a Plaspy para control de accesos, monitoreo de carga y alertas de condiciones.
- La configuración OTA y las actualizaciones de firmware se gestionan en el lado del dispositivo y se coordinan con los flujos de trabajo de Plaspy para el mantenimiento a escala de flota.
- El preprocesamiento en el borde reduce datos innecesarios, de modo que Plaspy recibe flujos de eventos concisos para alertas, informes y análisis históricos.
- Los flujos anti‑robo o de inmovilización implementados por integradores que dependen de CAN del vehículo o I/O externos pueden reflejarse en Plaspy como eventos monitoreados o acciones accionables cuando son configurados por el instalador.

## Casos de uso típicos

- Seguimiento de flotas en tiempo real y monitoreo de rutas para vehículos ligeros y pesados con telemetría integrada.
- Diagnóstico y monitoreo de disponibilidad de maquinaria pesada y equipos de construcción mediante datos CAN.
- Protección de carga en remolques y logística sensible a la temperatura con entradas de RFID y sensores de temperatura.
- Flujos de trabajo anti‑robo e inmovilización implementados por integradores vinculados a entradas periféricas y señales CAN.
- Proyectos de IoT industrial que requieren filtrado en el borde, gestión OTA y agregación multisensor.
- Despliegues a largo plazo que se benefician de las optimizaciones de red LTE‑M para telemetría de bajo consumo.

## Notas sobre disponibilidad de funciones

- El soporte de funciones depende de la versión de firmware y de la revisión de hardware específica del T20; las capacidades pueden cambiar entre versiones.
- La disponibilidad de señales CAN particulares y parámetros diagnósticos depende de la implementación del CAN del vehículo o máquina y puede requerir configuración personalizada.
- La compatibilidad de periféricos depende del cableado del conector, el soporte en firmware y los controladores o la configuración requerida vía el SDK de Aplicom.
- El soporte regional de bandas celulares y la disponibilidad de LTE‑M varían según el mercado y el operador móvil.
- Confirme las listas de funciones y los periféricos compatibles actuales con la documentación de producto y las notas de versión de Aplicom.

## Por qué usar Plaspy con estas funciones

Usar el Aplicom T20 con Plaspy ofrece a las organizaciones una vía práctica para lograr visibilidad centralizada y supervisión operativa de vehículos y equipos móviles. La combinación de conectividad CAN dual, I/O industrial y procesamiento en el dispositivo permite capturar eficientemente diagnósticos y eventos de periféricos, al tiempo que minimiza la transferencia de datos innecesaria a la nube.

Para obtener más información sobre Plaspy y cómo puede integrarse con dispositivos como el Aplicom T20 visite https://www.plaspy.com. Para los detalles de compatibilidad, notas de firmware y las funciones específicas del dispositivo más recientes, consulte al fabricante en https://www.aplicom.com/.
