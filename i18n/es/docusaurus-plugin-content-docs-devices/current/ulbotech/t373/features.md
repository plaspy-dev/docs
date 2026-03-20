---
slug: /ulbotech/t373/features
id: t373-features
sidebar_label: Features
title: Ulbotech - T373 Features
sidebar_class_name: menu_item_tracker
description: Funciones clave y capacidades prácticas del rastreador Ulbotech T373 y su integración con Plaspy para monitoreo
keywords:
  - Ulbotech T373
  - características Ulbotech T373
  - rastreador GPS Ulbotech T373
  - capacidades OBDII T373
  - T373 GPS GLONASS
  - T373 punto de acceso WIFI
  - comportamiento de conductor T373
  - rastreadores compatibles Plaspy
  - seguimiento de flotas T373
  - funciones Ulbotech T373
---

# Ulbotech - T373: Características

Esta página resume las capacidades públicas reportadas del rastreador GPS Ulbotech T373 cuando se utiliza con Plaspy. Describe las funcionalidades prácticas del dispositivo y explica cómo pueden aprovecharse dentro de Plaspy para la localización, el monitoreo de datos del vehículo y la supervisión operativa.

La disponibilidad exacta de funciones y su comportamiento puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. La información que sigue se basa en la descripción pública disponible para este modelo y se presenta como un panorama útil y no sensible, más que como una especificación técnica completa.

## Resumen de funciones

El Ulbotech T373 ofrece una combinación de posicionamiento, acceso a datos del vehículo, conectividad y monitoreo de comportamiento de conducción que resulta útil para la supervisión de flotas y activos. Al integrarlo con Plaspy, estas capacidades permiten rastreo de ubicación, visibilidad de estado y decisiones operativas basadas en datos.

- Posicionamiento GNSS integrado con soporte para GPS y GLONASS para reportes de ubicación confiables.
- Conectividad celular y WIFI integrada, incluyendo capacidad de punto de acceso y funciones de puente WIFI para compartir Internet local o proporcionar acceso alternativo.
- Acceso a diagnósticos a bordo OBDII y SAE J1939 para telemetría del vehículo como velocidad y parámetros del motor.
- Detección de movimiento basada en aceleración 3D y análisis de comportamiento de conducción para detección básica de eventos y monitoreo del conductor.
- Salida de inmovilizador para corte remoto del motor o control antirobo cuando la instalación lo permite.

## Funciones principales del Ulbotech - T373

- Posicionamiento GPS y GLONASS mediante un módulo GNSS interno para obtener fijaciones de ubicación consistentes.
- Compatibilidad con AssistNow AGPS y antena de alta ganancia para mejorar el tiempo de obtención de posición y la fiabilidad de la señal.
- Funciones integradas 4G LTE y WIFI que permiten al equipo actuar como punto de acceso WIFI local para múltiples dispositivos.
- Puenteo WIFI para aprovechar redes inalámbricas cercanas como ruta alternativa de datos y reducir el uso de datos celulares.
- Interfaz vehicular OBDII y SAE J1939 para lectura de información del vehículo en tiempo real y códigos de diagnóstico.
- Detección basada en acelerómetro 3D para detección de movimiento y clasificación básica del comportamiento de conducción.
- Salida para corte del motor mediante inmovilizador para flujos de trabajo de antirobo o inmovilización remota cuando está cableada y configurada.

## Cómo funcionan estas funciones con Plaspy

Plaspy puede recibir y mostrar los datos que el T373 soporte para ofrecer a los operadores una vista unificada de la ubicación y el estado del vehículo. El rastreador puede configurarse para reportar a Plaspy, y la plataforma mostrará la telemetría y los eventos disponibles para monitoreo y revisión histórica.

- Plaspy detecta automáticamente el protocolo del rastreador e ingiere las ubicaciones y telemetría enviadas por el T373.
- Las actualizaciones de posición desde GPS y GLONASS aparecen en Plaspy como puntos de ubicación en vivo y recorridos históricos.
- Los parámetros del vehículo disponibles vía OBDII se mapean a atributos del dispositivo en Plaspy, de modo que la velocidad y los datos del motor pueden monitorearse cuando se transmiten.
- Los eventos de movimiento y los disparadores básicos de comportamiento de conducción basados en el acelerómetro del dispositivo pueden mostrarse como eventos o utilizarse para generar alertas.
- El estado de conectividad, como la disponibilidad celular o WIFI, puede reflejarse en los indicadores de estado del dispositivo en Plaspy.
- El dispositivo puede configurarse para comunicarse con Plaspy mediante UDP o TCP en el puerto de la plataforma; Plaspy acepta las conexiones del rastreador y gestiona los datos entrantes de forma automática.

## Casos de uso típicos

- Rastreo de ubicación de flotas y historial de rutas para operaciones de reparto, servicio o trabajo de campo.
- Monitoreo en tiempo real de la salud del vehículo y parámetros del motor mediante alimentación OBDII.
- Monitoreo del comportamiento del conductor y detección de eventos para capacitación en seguridad y análisis de eficiencia de combustible.
- Medidas antirobo y flujos de trabajo de inmovilización remota mediante la salida de inmovilizador.
- Compartir Internet temporalmente dentro de un vehículo a través del punto de acceso WIFI del dispositivo para dispositivos conectados.
- Reducir el consumo de datos celulares usando el puenteo WIFI para aprovechar redes disponibles.

## Notas sobre disponibilidad de funciones

- El firmware del fabricante y las revisiones de hardware pueden cambiar qué funciones están disponibles o cómo se comportan; consulte las notas de versión específicas del dispositivo.
- La disponibilidad de datos OBDII y SAE J1939 depende del soporte del vehículo y de los parámetros OBD que exponga la ECU del vehículo.
- La capacidad del punto de acceso WIFI, el comportamiento del puenteo y los límites de hotspot pueden variar según el firmware y las regulaciones celulares regionales.
- Ciertas funciones requieren instalación y cableado correctos; algunas salidas como el control del inmovilizador solo están disponibles cuando son instaladas por un técnico calificado.
- Plaspy muestra y almacena los datos que el dispositivo transmite; las funciones que no envíe el rastreador no aparecerán en la plataforma.

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el Ulbotech T373 ayuda a las organizaciones a centralizar la información de ubicación y del vehículo en una sola plataforma de monitoreo. La ingesta agnóstica de dispositivos y la detección automática de protocolos de Plaspy facilitan recibir actualizaciones de posición, parámetros OBDII y eventos de movimiento desde rastreadores compatibles y presentarlos como información accionable para los operadores.

Si desea saber más sobre cómo Plaspy puede trabajar con el Ulbotech T373 y otros rastreadores compatibles, visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, información de firmware y especificaciones oficiales del fabricante, verifique la información en el sitio web de Ulbotech en http://www.ulbotech.com/.
