---
slug: /tzone/tz_bc01/features
id: tz_bc01-features
sidebar_label: Features
title: TZone - TZ-BC01 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del beacon TZone TZ-BC01 y su integración con Plaspy para seguimiento de proximidad y activos
keywords:
  - TZone TZ-BC01
  - características TZ-BC01
  - rastreador iBeacon TZone
  - beacon Bluetooth 4.0
  - autonomía TZ-BC01
  - intervalo de transmisión TZ-BC01
  - rastreador TZone Plaspy
  - seguimiento de proximidad TZ-BC01
  - rastreador de activos TZone
  - distancia de transmisión TZ-BC01
---

# TZone - TZ-BC01: Características

Esta página ofrece un resumen público de las funciones del TZone TZ-BC01 y explica cómo se presentan y utilizan dentro de Plaspy. El enfoque está en la funcionalidad visible para el usuario y el valor práctico, más que en detalles de implementación a bajo nivel, y está pensado para ayudar a responsables de flotas y activos a entender qué esperar al usar el TZ-BC01 con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. La información que sigue se basa en la descripción del dispositivo por parte del fabricante y destaca las capacidades conocidas del TZ-BC01; consulte la documentación del fabricante para detalles específicos y actualizados.

## Resumen de funciones

El TZone TZ-BC01 es un beacon compacto alimentado por batería que utiliza el protocolo iPhone iBeacon y la tecnología Bluetooth 4.0 para ofrecer detección de proximidad y visibilidad de ubicación de activos y objetos personales. Su tamaño reducido y su larga autonomía lo hacen adecuado para etiquetado discreto en escenarios donde son útiles actualizaciones periódicas de presencia.

- Carcasa compacta y liviana para una fijación discreta y fácil despliegue
- Soporta el protocolo iPhone iBeacon sobre Bluetooth 4.0 para detección por proximidad
- Larga autonomía con pila CR2450, hasta 12 meses en uso típico
- Intervalo de transmisión ajustable con un valor por defecto de 500 ms para equilibrar sensibilidad y consumo
- Potencia de transmisión configurable para ajustar alcance y consumo energético
- Protección por contraseña para limitar acceso y cambios de configuración

## Funciones principales del TZone - TZ-BC01

- Dimensiones reducidas y bajo peso, apto para fijar a objetos pequeños
- Soporte del protocolo iPhone iBeacon para detección de proximidad mediante beacon
- Radio Bluetooth 4.0 para amplia compatibilidad con dispositivos móviles
- Compatible con iOS 7.0 y superiores y Android 4.3 y superiores
- Alimentación con pila tipo CR2450, hasta 12 meses de funcionamiento en condiciones normales
- Intervalo de emisión ajustable (por defecto 500 ms) para controlar la frecuencia de actualización
- Potencia de transmisión ajustable entre los niveles reportados por el fabricante para afinar el alcance
- Alcance aproximado de transmisión de 50 a 80 metros en campo abierto
- Protección por contraseña para control básico de acceso a la configuración del dispositivo

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, las características de beacon y batería del TZ-BC01 se traducen en eventos de presencia regulares y ventajas operativas para el seguimiento y la supervisión. Plaspy detecta automáticamente protocolos de trackers compatibles y procesa los datos del dispositivo para mostrarlos junto con otros objetos rastreados.

- Plaspy muestra la presencia derivada del beacon y la actividad reciente para que usted vea cuándo se detectó por última vez un objeto etiquetado
- La larga autonomía reduce las operaciones de mantenimiento visibles en Plaspy y permite despliegues sin supervisión durante más tiempo
- El intervalo de emisión y la potencia ajustables le permiten afinar con qué frecuencia el dispositivo informa su presencia según las necesidades de monitoreo visibles en Plaspy
- Plaspy puede aceptar conexiones de dispositivos al dominio central d.plaspy.com y los dispositivos pueden configurarse para usar UDP o TCP en el puerto estándar de Plaspy si se requiere reenvío de red o configuración de gateway
- Los dispositivos protegidos con contraseña aparecerán como entradas seguras donde los cambios de configuración quedan limitados a operadores autorizados

## Casos de uso típicos

- Etiquetado de pequeños activos y equipos donde se requiere reporte de presencia discreto y duradero
- Seguimiento de objetos personales como bolsas, llaves o artículos de mano que se benefician de alertas basadas en proximidad
- Etiquetado en inventario y retail para facilitar la localización dentro de áreas definidas
- Detección de ubicación de corto alcance en instalaciones donde está disponible la detección de beacons Bluetooth
- Monitoreo periódico de presencia cuando la baja necesidad de mantenimiento de la batería es importante

## Notas sobre disponibilidad de funciones

- La versión de firmware y la configuración del fabricante pueden modificar cómo se exponen o comportan las funciones
- Revisiones de hardware o variantes regionales pueden afectar la potencia de transmisión, el comportamiento de emisión o los ajustes disponibles
- El método de instalación y la ubicación (interiores, espacios cerrados) influirán en la distancia de transmisión efectiva
- Algunas configuraciones del dispositivo, como el intervalo de emisión y la potencia de transmisión, requieren herramientas de configuración compatibles y pueden estar protegidas por contraseña
- Confirme siempre qué funciones están presentes en su unidad específica consultando el material oficial del fabricante

## Por qué usar Plaspy con estas funciones

El uso del TZ-BC01 con Plaspy ayuda a las organizaciones a combinar datos de presencia discretos basados en beacons con una visión más amplia de sus activos y flotas. Plaspy agrega eventos de dispositivos para que los equipos operativos puedan ver la actividad reciente, gestionar el inventario de dispositivos e incluir los objetos etiquetados con beacon en informes de ubicación junto a otros activos rastreados.

Para obtener más información sobre Plaspy y cómo integrar beacons y dispositivos rastreadores, visite https://www.plaspy.com. Para los detalles más recientes y oficiales sobre las características del TZ-BC01, el comportamiento del firmware y las especificaciones del fabricante, consulte la documentación oficial de TZone en http://www.tzonedigital.com/ ya que las capacidades e implementaciones del dispositivo pueden cambiar con el tiempo.
