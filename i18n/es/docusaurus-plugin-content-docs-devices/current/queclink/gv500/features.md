---
slug: /queclink/gv500/features
id: gv500-features
sidebar_label: Features
title: QuecLink - GV500 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador OBDII QuecLink GV500 y su integración con Plaspy para monitoreo vehicular
keywords:
  - QuecLink GV500
  - QuecLink GV500 características
  - GV500 rastreador GPS
  - GV500 rastreador OBDII
  - GV500 seguimiento de vehículos
  - GV500 acelerómetro
  - GV500 u blox GPS
  - QuecLink GV500 Plaspy
  - GV500 rastreador GPRS
  - rastreador de vehículos OBDII
---

# QuecLink - Características del GV500

Esta página ofrece un resumen público de las funcionalidades del QuecLink GV500 y explica cómo sus capacidades se integran con Plaspy. Se centra en detalles prácticos y no sensibles sobre el dispositivo, los tipos de datos que puede generar y las maneras en que esos datos pueden utilizarse dentro de la plataforma Plaspy para el monitoreo vehicular y la supervisión operativa.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la configuración del fabricante. Use esta página como una guía general y consulte la documentación oficial de QuecLink para obtener información actualizada y específica del equipo.

## Resumen de funcionalidades

El QuecLink GV500 es un rastreador en factor de forma OBDII diseñado para una instalación sencilla y monitoreo continuo del vehículo mediante GPRS. Su combinación de interfaz vehicular, posicionamiento GNSS y soporte de protocolos integrados lo hace apropiado para el seguimiento de flotas y vehículos particulares cuando se conecta a un backend como Plaspy.

- Conectividad OBDII para instalación plug and play y acceso a datos a bordo del vehículo
- Informes de posición en tiempo real y periódicos sobre redes GPRS para ubicación y seguimiento
- Soporte GSM GPRS cuatribanda para cobertura celular en amplias regiones
- Acelerómetro integrado de 3 ejes para detección de movimiento y funciones de ahorro de energía
- Protocolo @Track embebido que soporta alertas de emergencia, eventos de geocerca, avisos de batería baja y reportes programados de posición
- Batería interna y amplio rango de voltaje operativo para diferentes tipos de vehículos y para mantener el servicio durante transiciones de alimentación

## Características principales del QuecLink GV500

- Interfaz en el puerto OBDII con lector interno que permite acceder a campos de datos expuestos por la computadora del vehículo
- Receptor GNSS de alta sensibilidad para posicionamiento rápido y preciso, implementado con un chipset u blox según el fabricante
- Radio GSM GPRS cuatribanda compatible con las bandas 850, 900, 1800 y 1900 MHz
- Acelerómetro interno de 3 ejes que habilita la detección de movimiento y contribuye a algoritmos de ahorro de energía
- Batería de respaldo interna y una ventana de voltaje operativo amplia para soportar diferentes sistemas eléctricos vehiculares
- Protocolo @Track completo embebido con soporte para reportes de eventos como alertas de emergencia, cruces de geocerca, alertas de batería baja y posiciones GPS programadas
- Antenas internas de GSM y GPS para una forma de instalación compacta
- Certificaciones de industria incluidas FCC, CE y E Mark según lo declarado por el fabricante

## Cómo funcionan estas funciones con Plaspy

Cuando un GV500 está conectado a Plaspy, sus reportes de posición y eventos pueden supervisarse junto con otros dispositivos para ofrecer visibilidad consolidada y conocimiento operativo. Plaspy detecta automáticamente los protocolos de rastreadores compatibles y puede aceptar reportes de dispositivos para flujos de trabajo de rastreo y alertas.

- Las actualizaciones de ubicación y los reportes de posición programados aparecen en Plaspy para seguimiento en vivo y reproducción histórica
- Los datos del vehículo obtenidos vía OBDII pueden enviarse a Plaspy para su visualización y telemetría básica, sujeto a los parámetros específicos que exponga la unidad del vehículo
- La detección de movimiento y los eventos basados en el acelerómetro se traducen en indicadores de actividad e inactividad dentro de las herramientas de monitoreo de Plaspy
- Los reportes de eventos del protocolo @Track, como alertas de emergencia, cruces de geocerca y notificaciones de batería baja, pueden incorporarse a las reglas de alertas y notificaciones de Plaspy
- Los dispositivos pueden apuntar a servidores de Plaspy, por ejemplo d.plaspy.com, y Plaspy intentará identificar y procesar el protocolo del dispositivo automáticamente

## Casos de uso típicos

- Rastreo de ubicación de flotas y visibilidad de rutas con reportes programados y ad hoc
- Despliegue rápido basado en OBDII para vehículos de alquiler o de uso compartido donde se requiere una instalación no intrusiva
- Prevención de robo y detección de movimiento mediante alertas del acelerómetro y reportes de actividad
- Monitoreo remoto del estado del vehículo y diagnósticos sencillos expuestos por la interfaz OBD
- Reportes periódicos para análisis de uso de activos y movimientos históricos
- Despliegues mixtos de vehículos que se benefician de la amplia tolerancia de voltaje y la batería interna de respaldo

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y las revisiones de hardware pueden habilitar o restringir campos OBDII específicos y tipos de reportes de eventos; verifique el firmware de la unidad para conocer el comportamiento exacto
- Algunos parámetros OBDII dependen del fabricante y modelo del vehículo y de los datos que la ECU del vehículo exponga a través de la interfaz OBDII
- Las configuraciones regionales y los ajustes de los operadores pueden afectar la conectividad GPRS y deben validarse durante el despliegue
- Algunas funciones, como umbrales de eventos o intervalos de reporte específicos, pueden ser configurables y variar según el firmware o la versión regional
- Para comandos específicos del dispositivo, ejemplos de configuración y la matriz de funciones más reciente, consulte la documentación oficial de QuecLink

## Por qué usar Plaspy con estas funciones

Usar el QuecLink GV500 con Plaspy combina un rastreador OBDII compacto con una plataforma diseñada para ofrecer visibilidad consolidada de dispositivos y gestión de alertas. Plaspy recopila reportes de posición y eventos para que los operadores puedan monitorear ubicaciones de vehículos, recibir alertas oportunas y revisar la actividad histórica desde una única interfaz.

Para obtener más información sobre cómo Plaspy puede integrarse con rastreadores vehiculares como el QuecLink GV500 visite https://www.plaspy.com. Para conocer las capacidades específicas del dispositivo, notas de firmware y orientación del fabricante, verifique los detalles con QuecLink en https://www.queclink.com/ ya que los conjuntos de funciones y el comportamiento del firmware pueden cambiar con el tiempo.
