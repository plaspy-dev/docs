---
slug: /zilogic/rtu/features
id: rtu-features
sidebar_label: Features
title: Zilogic - RTU Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del RTU de Zilogic y su integración con Plaspy para telemetría remota
keywords:
  - Zilogic RTU
  - características RTU Zilogic
  - rastreador GPS RTU
  - funciones RTU Plaspy
  - Zilogic BlackKite RTU
  - monitoreo M2M RTU
  - rastreador HTTP MQTT
  - expansión IO RTU
  - soporte ModBus RTU
  - buffer de datos RTU
---

# Zilogic - Características del RTU

Esta página ofrece un resumen público de las funciones del RTU de Zilogic y explica cómo sus capacidades documentadas se relacionan con el uso en la plataforma de gestión de dispositivos y flotas Plaspy. Resume las funciones prácticas que usted puede esperar al integrar el RTU en Plaspy, basándose en la descripción del fabricante y en los patrones de despliegue más comunes.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, los módulos opcionales y las decisiones de instalación. Cuando el RTU ofrece interfaces opcionales o modos configurables, esas opciones determinan las funciones específicas visibles en Plaspy y la forma en que se reportan los datos y eventos.

## Resumen de características

El RTU de Zilogic es una unidad de telemetría remota orientada a la nube y diseñada para aplicaciones M2M. Soporta protocolos HTTP y MQTT para integración con la nube, ofrece opciones de expansión de IO y cuenta con almacenamiento en búfer local y funciones de autenticación que ayudan a mantener un reporte confiable y acceso seguro.

- Preparado para la nube con soporte HTTP y MQTT para enviar telemetría y recibir comandos.
- Expansión IO opcional vía ModBus para conectar sensores de campo y controladores adicionales.
- Intervalo de transmisión configurable con frecuencias de reporte desde 30 segundos.
- Memoria FLASH interna capaz de almacenar hasta 24 horas de datos durante cortes en la conexión celular.
- Alertas SMS configurables por el dispositivo para cambios de estado de IO y notificación a operadores.
- Soporte GPS opcional para reporte de ubicación cuando está instalado el módulo GPS.

## Características principales del Zilogic RTU

- Soporte de protocolos HTTP y MQTT para integración directa con plataformas en la nube.
- Interfaz ModBus opcional para expansión de IO y conexión de dispositivos seriales de campo.
- Intervalo de reporte configurable desde 30 segundos en adelante para balancear inmediatez y consumo de datos.
- Almacenamiento en FLASH interno para retener hasta 24 horas de datos durante interrupciones en GPRS.
- Autenticación en dos niveles para acceso remoto y gestión segura del dispositivo.
- Capacidad GPS opcional para rastreo de activos o vehículos.
- Entradas digitales y analógicas para monitoreo de sensores y salidas digitales para control remoto.
- LEDs de estado y una interfaz serial que facilitan la instalación y resolución de problemas.

## Cómo funcionan estas características con Plaspy

Cuando el RTU está conectado a Plaspy, sus protocolos en la nube y la configuración de reporte permiten que Plaspy reciba la telemetría del dispositivo, presente eventos y almacene datos históricos para uso operativo. Plaspy detecta automáticamente los protocolos compatibles del rastreador y mapea los datos entrantes en vistas de dispositivos y eventos para su monitoreo.

- Los intervalos de reporte se traducen en la frecuencia de actualizaciones visibles en los paneles y mapas de Plaspy.
- Los datos en búfer almacenados durante cortes celulares se suben cuando se restablece la conectividad, preservando la continuidad de la telemetría registrada.
- Los cambios de IO y las alertas generadas por el dispositivo pueden aparecer como eventos o notificaciones en Plaspy cuando el equipo reporta esos estados.
- La telemetría de sensores conectados opcionalmente vía ModBus o de dispositivos seriales está disponible en Plaspy si el RTU está configurado para reenviar esos datos.
- Los reportes de posición GPS opcionales aparecen en los mapas de Plaspy para mantener la conciencia de ubicación cuando el módulo GPS está instalado.

## Casos de uso típicos

- Monitoreo remoto de equipos de campo y redes de sensores con reporte centralizado en la nube.
- Recolección M2M de telemetría para estado de activos, métricas operativas y registro de eventos.
- Control remoto sencillo de dispositivos periféricos mediante salidas digitales reportadas a través del RTU.
- Rastreo de ubicación de activos o vehículos cuando está presente el módulo GPS opcional.
- Mantener la continuidad de datos mediante el almacenamiento en búfer interno durante interrupciones de conectividad celular.
- Integrar las IO de sitios remotos en sistemas de monitoreo empresariales mediante expansión ModBus.

## Notas sobre disponibilidad de funciones

- Algunas capacidades, como la expansión IO vía ModBus o el GPS, son opcionales y dependen de la variante de hardware específica y de la configuración al ordenar.
- La versión de firmware afecta las características de protocolo soportadas, los formatos de mensaje y las opciones configurables como intervalos de reporte y comportamiento de alertas.
- Las decisiones de instalación y el cableado determinan qué entradas y salidas están disponibles y cómo funcionan en el despliegue.
- El comportamiento de las alertas por SMS depende del soporte del módem celular y de la disponibilidad del servicio SMS en la región.
- Confirme siempre la revisión exacta de hardware y la versión de firmware para conocer límites y comportamientos específicos del dispositivo.

## Por qué usar Plaspy con estas características

Usar Plaspy con el RTU de Zilogic ofrece una visión estandarizada de la telemetría, eventos y estado de los dispositivos a través de los despliegues. El manejo de dispositivos y las visualizaciones de Plaspy facilitan la correlación de estados de IO, telemetría en búfer y posiciones GPS opcionales en paneles operativos e informes históricos que apoyan las operaciones de campo y la toma de decisiones.

Para obtener más información sobre cómo Plaspy puede trabajar con el RTU de Zilogic y otros rastreadores, visite https://www.plaspy.com. Para descripciones de funciones específicas del dispositivo, notas de firmware y opciones de hardware más detalladas, consulte al fabricante en https://zilogic.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
