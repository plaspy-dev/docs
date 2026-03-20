---
slug: /gelix/gelix_1/features
id: gelix_1-features
sidebar_label: Features
title: Gelix - Gelix 1 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del registrador GPS Gelix 1 y su integración con Plaspy para recuperos en depósito y descargas manuales
keywords:
  - Gelix funciones Gelix 1
  - Rastreador GPS Gelix 1
  - registrador de datos Gelix
  - compatibilidad Gelix Plaspy
  - rastreador GPS pasivo
  - registrador de datos de vehículo
  - recuperación de datos Bluetooth
  - recuperación de datos IrDA
  - seguimiento de flotas Gelix
  - subida de datos en depósito
---

# Gelix - Funciones de Gelix 1

Esta página ofrece una visión pública y no sensible de las funciones del registrador GPS Gelix 1 y explica cómo se aprovechan dichas funciones con Plaspy. Describe las capacidades prácticas del Gelix 1 como registrador pasivo de datos de navegación y eventos, y las principales vías para recuperar y procesar la información cuando se utiliza con Plaspy.

La disponibilidad exacta de las funciones puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Utilice esta página como guía general sobre capacidades y patrones operativos y consulte la documentación oficial de Gelix para los detalles específicos más recientes del dispositivo.

## Panorama de funciones

El Gelix 1 es un registrador GPS para monitoreo pasivo diseñado para capturar datos de navegación y eventos durante el movimiento del vehículo o en respuesta a eventos externos. Está pensado para registrar información para su posterior recuperación en lugar de ofrecer seguimiento en tiempo real continuo, por lo que resulta útil cuando se prefieren cargas por lotes y recolección en depósito.

- Registro pasivo de datos GPS con historial de navegación y eventos para recuperación posterior
- Descarga automática de datos cuando el vehículo regresa a un depósito o garaje con un punto de acceso radio local como Bluetooth o RF
- Opciones flexibles de recuperación manual mediante conexión por cable, IrDA o Bluetooth con un PDA
- Posibilidad de retirar la unidad para conectarla directamente a un PC y efectuar descargas y análisis detallados

## Funciones principales del Gelix 1

- Registro pasivo de posiciones e información de eventos mientras el vehículo está en funcionamiento
- Registro activado por movimiento o por eventos externos detectados por el dispositivo
- Recuperación por lotes automática a través de puntos de acceso radio en depósito, incluyendo Bluetooth o RF
- Descarga manual de datos mediante enlace por cable, IrDA o Bluetooth usando un PDA u otro equipo similar
- Diseño con unidad extraíble que permite conexión a PC para importación manual y revisión profunda
- Pensado para escenarios donde se prefiere la recolección periódica o basada en depósito
- Compatible con Plaspy para ingestión y revisión histórica de los registros recopilados

## Cómo funcionan estas funciones con Plaspy

Los registros grabados por el Gelix 1 pueden importarse a Plaspy para almacenamiento centralizado y revisión histórica. Al operar como registrador pasivo, las cargas suelen llegar en lotes en lugar de un flujo continuo, y Plaspy organiza esos datos entrantes en historiales de vehículo y líneas de tiempo de eventos.

- Las cargas por lotes desde puntos de acceso en depósito se procesan en Plaspy como trayectos históricos y eventos
- Las importaciones manuales desde descargas en PC o PDA se pueden añadir al registro del vehículo en Plaspy para su análisis
- Plaspy reconoce entradas compatibles del rastreador e integra los datos de navegación y eventos en las líneas de tiempo del vehículo
- Los eventos registrados pasan a formar parte del historial de cada vehículo para su posterior revisión e informes
- Los datos recuperados del dispositivo pueden utilizarse en Plaspy para generar resúmenes de rutas e informes operativos

## Casos de uso típicos

- Operadores de flotas que recopilan registros de rutas y eventos cuando los vehículos regresan a base
- Organizaciones que prefieren la recopilación periódica de datos en lugar del seguimiento continuo en vivo
- Situaciones donde puntos de acceso radio locales permiten descarga automática en el depósito
- Operaciones de campo que usan descargas desde PDA o PC para transferencia manual y análisis
- Proyectos de investigación y optimización operativa que analizan datos de navegación registrados

## Notas sobre disponibilidad de funciones

- El conjunto de funciones y su comportamiento dependen de la versión de firmware y la revisión de hardware del Gelix 1
- La descarga automática en depósito requiere un punto de acceso radio instalado y una infraestructura compatible
- Las interfaces de recuperación como IrDA, enlace por cable y Bluetooth dependen de la configuración del dispositivo y las opciones de conectores
- Variantes regionales o revisiones del fabricante pueden cambiar los métodos de recuperación soportados y el manejo de eventos
- Verifique siempre la documentación del serial del dispositivo y las notas de versión de firmware para conocer el comportamiento preciso

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el Gelix 1 centraliza los datos de navegación y eventos registrados, lo que permite a las organizaciones revisar la actividad histórica, elaborar informes operativos y mantener un archivo de trayectos y sucesos. La ingestión de cargas por lotes y de importaciones manuales en Plaspy facilita correlacionar las descargas desde depósito y las importaciones desde PC con las identidades y líneas de tiempo de los vehículos, ofreciendo un único lugar consistente para revisar los registros recopilados.

Para saber más sobre cómo Plaspy puede trabajar con el Gelix 1, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre funciones específicas del dispositivo, comportamiento de firmware y documentación del fabricante, verifique la información en el sitio web de Gelix http://www.gelix.com/ ya que las capacidades e implementaciones del dispositivo pueden cambiar con el tiempo.
