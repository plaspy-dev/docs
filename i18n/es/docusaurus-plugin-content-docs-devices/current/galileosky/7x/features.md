---
slug: /galileosky/7x/features
id: 7x-features
sidebar_label: Features
title: GalileoSky - 7x Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del terminal GalileoSky 7x GPS GLONASS y cómo sus capacidades se integran con Plaspy
keywords:
  - funciones GalileoSky 7x
  - funciones rastreador GPS GalileoSky 7x
  - capacidades GalileoSky 7x
  - capacidades GalileoSky 7x
  - GalileoSky 7x Plaspy
  - rastreador GPS GalileoSky 7x
  - terminal GPS programable
  - datos bus CAN vehículo
  - seguimiento de flotas GalileoSky
  - seguimiento de activos 7x
---

# GalileoSky - Características del 7x

Esta página ofrece una visión general pública de las capacidades del GalileoSky 7x y de cómo el dispositivo puede utilizarse con Plaspy para seguimiento, monitoreo y control remoto. Resume las funcionalidades prácticas relevantes para usuarios de Plaspy y explica cómo se traducen esas capacidades en visibilidad y flujos operativos dentro de la plataforma Plaspy.

La disponibilidad exacta de funciones en una unidad concreta puede variar según la versión de firmware, la revisión de hardware, los detalles de la instalación y la implementación del fabricante. Por ello, esta página se centra en las capacidades generales declaradas públicamente y recomienda verificar con la documentación del fabricante y el firmware específico instalado en sus equipos.

## Resumen de funciones

El GalileoSky 7x es un terminal GPS/GLONASS programable pensado para una integración flexible en soluciones de rastreo de vehículos y activos. Permite la activación remota de dispositivos externos, la lectura de datos del bus del vehículo y está diseñado para mantener el registro y la transferencia de datos incluso durante actualizaciones de firmware.

- Posicionamiento GPS y GLONASS programable para reportes continuos de ubicación
- Activación remota de relés, sensores, LEDs, parlantes, zumbadores y otros periféricos externos
- Recepción simultánea de datos desde dos buses CAN para visibilidad de parámetros del vehículo
- Capacidad para continuar grabando trayectos y enviando datos al servidor durante actualizaciones de firmware
- Programabilidad flexible para adaptar entradas y salidas a las necesidades de la instalación

## Características principales del GalileoSky - 7x

- Posicionamiento con GPS y GLONASS para datos de ubicación confiables
- Lógica programable en el terminal para controlar salidas y reaccionar a eventos
- Control remoto de relés y periféricos externos como indicadores y alarmas
- Soporte de entradas para diversos sensores y dispositivos mediante interfaces configurables
- Lectura dual de bus CAN para recopilar diagnósticos y parámetros operativos del vehículo
- Registro persistente de trayectos y reenvío de datos mientras se aplican actualizaciones de firmware
- Diseñado para integrarse en plataformas de gestión de flotas y activos

## Cómo interactúan estas funciones con Plaspy

Plaspy ingiere los datos de ubicación y los datos de dispositivo reportados por rastreadores compatibles y los presenta en un entorno unificado de monitoreo y gestión. Al usar el GalileoSky 7x, las funciones descritas permiten visibilidad operativa y control remoto directamente desde la plataforma Plaspy.

- Los datos de ubicación y de trayectos del 7x se muestran en Plaspy para monitoreo en tiempo real y reproducción histórica
- Las capacidades de activación remota pueden vincularse a controles o comandos accionables dentro de los flujos de trabajo de Plaspy
- Los datos del bus CAN que reciba el 7x pueden reenviarse a Plaspy para supervisión de parámetros del vehículo y generación de eventos cuando esté soportado
- El 7x sigue reenviando trayectos durante actualizaciones de firmware, lo que ayuda a Plaspy a mantener visibilidad continua durante tareas de mantenimiento
- Plaspy detecta automáticamente los protocolos de rastreador compatibles y acepta conexiones al dominio del servidor Plaspy para el reporte de dispositivos

## Casos de uso habituales

- Rastreo de ubicación de flotas con posibilidad de activar indicadores o alarmas de forma remota
- Monitoreo de activos cuando se requieren activaciones remotas o indicaciones de estado en periféricos
- Diagnóstico y supervisión operativa de vehículos mediante la ingestión de parámetros desde el bus CAN a una plataforma central
- Seguimiento continuo durante la gestión remota de firmware para evitar brechas de datos durante actualizaciones
- Instalaciones personalizadas que necesiten lógica programable para entradas y salidas especializadas
- Integraciones donde se requiere un terminal configurable para adaptarse a cableado y sensores variados de vehículos

## Notas sobre disponibilidad de funciones

- La presencia de una función depende de la versión de firmware; versiones más nuevas o antiguas pueden habilitar o limitar ciertas capacidades
- Revisión de hardware y variantes regionales pueden modificar las interfaces disponibles o el soporte de periféricos
- Las decisiones de instalación y el cableado determinan qué entradas y salidas son realmente utilizables en una instalación concreta
- Puede requerirse configuración y aprovisionamiento por parte del fabricante para habilitar el parseo de CAN o los comandos de salida remota
- Siempre consulte la documentación oficial de GalileoSky y las notas de la versión para el comportamiento específico del dispositivo

## Por qué usar Plaspy con estas funciones

Usar el GalileoSky 7x con Plaspy ofrece una forma consolidada de convertir las capacidades del dispositivo en información operativa. Plaspy centraliza el rastreo de ubicación, muestra los datos de parámetros del vehículo reportados por el dispositivo y ayuda a los operadores a actuar sobre las capacidades de activación remota de periféricos y alertas. La combinación de lógica programable en el terminal, visibilidad del bus CAN y el reenvío continuo de datos durante actualizaciones de firmware facilita la supervisión de flotas y reduce interrupciones en el rastreo durante el mantenimiento del dispositivo.

Para obtener más información sobre cómo Plaspy puede trabajar con dispositivos como el GalileoSky 7x, visite https://www.plaspy.com. Para la información más actualizada y detallada sobre funciones del dispositivo, comportamiento del firmware y detalles de implementación, verifique las especificaciones en el sitio del fabricante https://galileosky.com/
