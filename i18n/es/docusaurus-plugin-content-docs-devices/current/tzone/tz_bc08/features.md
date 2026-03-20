---
slug: /tzone/tz_bc08/features
id: tz_bc08-features
sidebar_label: Features
title: TZone - TZ-BC08 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del TZone TZ-BC08 y cómo su iBeacon Bluetooth funciona con Plaspy
keywords:
  - TZone TZ-BC08
  - características TZ BC08
  - rastreador beacon TZone
  - TZ-BC08 iBeacon
  - rastreador Bluetooth TZone
  - compatibilidad TZ-BC08 con Plaspy
  - funciones TZ-BC08 para Plaspy
  - rastreador compacto TZone
  - seguimiento de proximidad beacon
  - duración batería TZ-BC08
---

# TZone - TZ-BC08: Características

Esta página ofrece un resumen público de las características del TZone TZ-BC08 y explica cómo puede integrarse con Plaspy. Se concentra en capacidades accesibles para el usuario y en detalles prácticos relevantes para usuarios e integradores de Plaspy.

La disponibilidad exacta de funciones y el comportamiento en tiempo de ejecución pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para configuración específica del dispositivo y los detalles técnicos más recientes, consulte la documentación del fabricante y las notas de la versión del firmware.

## Resumen de capacidades

El TZ-BC08 es un rastreador compacto y liviano que combina un formato pequeño con emisión Bluetooth iBeacon para permitir monitoreo de proximidad y detección de presencia. A continuación se listan las capacidades prácticas más relevantes a considerar al evaluar el dispositivo para uso con Plaspy.

- Diseño compacto y discreto, aproximadamente 65 x 50 x 10 mm y alrededor de 15 gramos, fácil de colocar en objetos personales.
- Utiliza el protocolo iBeacon (compatible con iPhone) sobre Bluetooth 4.0 para transmisiones de identificador y detección por proximidad.
- Intervalo de emisión y potencia transmitida configurables para equilibrar la rapidez de detección y la duración de la batería.
- Compatible con una amplia gama de dispositivos móviles con iOS 7.0 o superior y Android 4.3 o superior para interacciones locales.
- Tiempo de funcionamiento nominal largo, aproximadamente 1 a 1.5 años con una pila tipo CR2450 bajo uso típico.
- Protección mediante contraseña para la conexión, lo que ayuda a limitar accesos no autorizados a la configuración del dispositivo.

## Características principales del TZone - TZ-BC08

- Soporte del protocolo iBeacon para identificadores estandarizados y emisiones de proximidad.
- Radio Bluetooth 4.0 de baja energía para transmisión eficiente y mayor autonomía.
- Intervalo de emisión ajustable entre 0.1 y 3 segundos para afinar la frecuencia de actualizaciones.
- Potencia de transmisión ajustable en el rango declarado, permitiendo compensar alcance y consumo de batería.
- Distancia de transmisión en campo abierto reportada en torno a 50 a 90 metros según potencia y entorno.
- Alimentación con batería CR2450 de 3V para funcionamiento prolongado sin mantenimiento frecuente.
- Seguridad básica de conexión mediante protección por contraseña para acceso a la configuración.

## Cómo funcionan estas funciones con Plaspy

Plaspy puede recibir los mensajes del dispositivo y mostrar información de presencia e identificadores junto con otros datos de activos. Dependiendo de cómo se despliegue y configure el TZ-BC08, las emisiones e identificadores del dispositivo pueden hacerse visibles en Plaspy para monitoreo y uso operativo.

- Plaspy detecta automáticamente muchos protocolos de rastreadores y acepta datos del dispositivo cuando está configurado para el servidor de Plaspy en d.plaspy.com.
- Los dispositivos pueden configurarse para reportar a Plaspy mediante UDP o TCP en el puerto común de Plaspy si el firmware del dispositivo admite el envío a servidor.
- Los identificadores de beacon y las marcas de tiempo que se reportan a Plaspy pueden usarse para mostrar presencia, actividad reciente y agrupación de elementos etiquetados.
- El intervalo de emisión y la potencia transmitida ajustables le permiten controlar con qué frecuencia las actualizaciones de presencia llegan a Plaspy y el radio efectivo de detección.
- La protección por contraseña en el dispositivo ayuda a controlar quién puede modificar la configuración que afecta el comportamiento del rastreador con Plaspy.
- Plaspy puede combinar la presencia de beacons con otras fuentes de datos para mejorar la conciencia situacional y los flujos operativos.

## Casos de uso típicos

- Rastreo de corto alcance y detección de presencia para pertenencias personales o activos pequeños.
- Monitoreo de proximidad en interiores, útil para detección de presencia o de entrada mediante beacons Bluetooth.
- Etiquetado temporal de herramientas o equipos para conocimiento de ubicación dentro de una instalación.
- Capa de seguimiento complementaria para activos que ya usan Plaspy para gestión de flotas o activos más amplios.
- Escenarios donde la larga duración de batería y el factor de forma reducido son requisitos primordiales.

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen del firmware del dispositivo y pueden cambiar con actualizaciones de firmware o con distintas revisiones de hardware.
- El comportamiento de emisión y el tiempo de funcionamiento variarán según el intervalo de emisión elegido, la potencia de transmisión y las condiciones ambientales reales.
- Regulaciones regionales y el desempeño local del Bluetooth pueden afectar la distancia efectiva de transmisión y el comportamiento.
- Factores de instalación, como la ubicación del dispositivo y los materiales circundantes, influyen en el alcance de detección y la fiabilidad.
- Verifique siempre las opciones de configuración y los ajustes de seguridad del dispositivo frente a la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Integrar el TZ-BC08 con Plaspy permite consolidar información basada en beacons de proximidad junto con otros datos de seguimiento en una sola plataforma. Las capacidades de detección e ingestión de dispositivos de Plaspy facilitan la inclusión de pequeños rastreadores de baja energía en flujos de monitoreo y operativos más amplios sin necesidad de crear lógica de ingestión personalizada.

Si desea conocer más sobre cómo Plaspy puede trabajar con dispositivos TZone y otros rastreadores visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, detalles de firmware e instrucciones de instalación, verifique la información más reciente del fabricante en http://www.tzonedigital.com/ .
