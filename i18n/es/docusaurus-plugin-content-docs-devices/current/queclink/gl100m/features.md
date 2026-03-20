---
slug: /queclink/gl100m/features
id: gl100m-features
sidebar_label: Features
title: QuecLink - GL100M Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador GPS QuecLink GL100M y su integración con Plaspy para rastreo de vehículos y activos
keywords:
  - QuecLink GL100M
  - QuecLink GL100M características
  - Rastreador GPS GL100M
  - Rastreador GPS QuecLink
  - Características GL100M Plaspy
  - Rastreo de vehículos GL100M
  - Rastreador de activos GL100M
  - Rastreador para mascotas GL100M
  - Protocolo @Track GL100M
  - GL100M resistente al agua
---

# QuecLink - Características del GL100M

Esta página ofrece una visión pública de las características del QuecLink GL100M y de cómo sus capacidades se utilizan con Plaspy. Se centra en la funcionalidad visible para el usuario y en el comportamiento operativo relevante cuando el GL100M envía ubicaciones y eventos a la plataforma Plaspy. La compatibilidad con Plaspy ha sido verificada para este modelo y los ejemplos que siguen describen usos prácticos y la visibilidad dentro de Plaspy.

La disponibilidad exacta de funciones, el comportamiento y los nombres pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para parámetros específicos del equipo, opciones avanzadas de configuración y las notas de firmware más recientes, consulte la documentación de QuecLink y las notas de la versión antes de desplegar.

## Resumen de características

El GL100M es un rastreador GPS compacto y de alta sensibilidad diseñado para seguimiento de vehículos, mascotas y activos portátiles. Combina un tiempo rápido hasta la primera posición y comunicaciones celulares confiables para proporcionar informes periódicos de ubicación y alertas basadas en eventos a una plataforma backend como Plaspy. El dispositivo está pensado para usos con larga autonomía en espera y una resistencia básica en campo.

- Operación GSM cuatribanda para amplia cobertura celular y reportes GPRS
- Tiempo rápido hasta el primer fix (TTFF) y alta sensibilidad de recepción para fijaciones de posición fiables
- Carcasa resistente al agua apropiada para distintos entornos de instalación
- Sensor de movimiento 3D integrado para detectar movimiento y activar alertas
- Pantalla OLED blanca para una lectura local sencilla del estado
- Soporte para reporte por datos GPRS/GSM y mensajes SMS usando el protocolo integrado @Track

## Características principales del QuecLink GL100M

- Reporte de ubicación GPS con TTFF rápido y alta sensibilidad de recepción
- Compatibilidad cuatribanda GSM para conectividad celular en bandas comunes
- Protocolo @Track integrado para reportes estructurados a plataformas backend
- Soporte para envíos por canales de datos GPRS/GSM y mensajería SMS
- Sensor de movimiento 3D incorporado para detección de movimiento y eventos activados por movimiento
- Bajo consumo de energía y comportamiento de espera extendida para seguimiento a largo plazo
- Carcasa resistente al agua para instalaciones exteriores o expuestas
- Pantalla OLED blanca local (128x96) para estado e información básica

## Cómo funcionan estas características con Plaspy

Cuando se integra con Plaspy, el GL100M puede aportar visibilidad operacional continua al enviar actualizaciones de posición y notificaciones de eventos a un servidor Plaspy. Plaspy detecta automáticamente el protocolo del rastreador y puede aceptar los reportes del GL100M enviados por las opciones de transporte estándar que admite el dispositivo.

- Los informes periódicos de posición GPS aparecen en Plaspy como actualizaciones de ubicación para la unidad rastreada
- Los eventos del sensor de movimiento pueden mostrarse como indicaciones de movimiento o manipulación en los paneles de Plaspy
- Alertas de emergencia, cruces de geocerca y notificaciones de batería baja que reporte el equipo son visibles como eventos en Plaspy
- El GL100M utiliza el protocolo @Track integrado para mensajes estructurados que Plaspy puede interpretar
- Los dispositivos pueden configurarse para reportar al dominio del servidor Plaspy (por ejemplo d.plaspy.com) y Plaspy acepta dispositivos en los transportes comunes usados por todos los dispositivos Plaspy
- Plaspy muestra posiciones históricas y reportes programados para que los operadores revisen rutas y tiempos de actividad

## Casos de uso típicos

- Visibilidad de flotas para vehículos ligeros donde se requiere un rastreador compacto y resistente al agua
- Seguimiento de activos portátiles donde se necesita larga autonomía en espera y reportes periódicos
- Aplicaciones de seguimiento de mascotas que requieren un dispositivo GPS pequeño y sensible con alertas por movimiento
- Monitoreo remoto que depende de conmutación a SMS o reportes por GPRS hacia un servidor central
- Integraciones en las que integradores usan el protocolo @Track para alimentar plataformas y middleware personalizados

## Notas sobre disponibilidad de funciones

- El comportamiento de las funciones depende de la versión de firmware y la revisión de hardware; no todas las funciones estarán presentes en todas las unidades
- Algunos tipos de eventos y formatos de mensaje son configurables en el dispositivo y pueden variar según la región o la configuración del distribuidor
- El método de instalación y la colocación de la antena afectan la sensibilidad GPS y el TTFF en campo
- Las certificaciones del fabricante y el soporte de bandas de radio pueden variar según las unidades regionales o los envíos
- Para personalización avanzada del protocolo o de los mensajes, consulte la documentación del protocolo de QuecLink y las notas de la versión

## Por qué usar Plaspy con estas características

Usar el QuecLink GL100M con Plaspy brinda a las organizaciones una forma sencilla de recopilar datos de ubicación, eventos de movimiento y alertas estándar desde un rastreador compacto. Plaspy proporciona visibilidad centralizada, reproducción histórica y manejo de eventos para que los equipos puedan operacionalizar reportes periódicos, activadores por movimiento y notificaciones de emergencia de dispositivos como el GL100M.

Para saber más sobre cómo Plaspy puede recibir y gestionar reportes del GL100M, visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, detalles de firmware y documentación del protocolo, verifique la información con el fabricante en https://www.queclink.com/ .
