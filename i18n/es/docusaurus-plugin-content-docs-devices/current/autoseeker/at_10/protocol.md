---
slug: /autoseeker/at_10/protocol
id: at_10-protocol
sidebar_label: Protocol
title: Autoseeker - AT-10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el GPS Autoseeker AT-10 con la configuración del servidor Plaspy
keywords:
  - protocolo Autoseeker AT 10
  - rastreador GPS Autoseeker
  - comunicación AT 10
  - compatibilidad Autoseeker Plaspy
  - protocolo rastreador GPS
  - protocolo seguimiento vehicular
  - rastreador gestión de flotas
  - seguimiento en tiempo real Autoseeker
  - protocolo de reporte del rastreador
  - integración de dispositivos Plaspy
---

# Autoseeker - Protocolo AT-10

Esta página describe el contexto público del protocolo para usar el rastreador GPS Autoseeker AT-10 con Plaspy. Está dirigida a administradores de flotas, integradores y usuarios técnicos para entender cómo el AT-10 se comunica con una plataforma de rastreo remota y qué considerar al apuntar este dispositivo a Plaspy para seguimiento en vivo y notificaciones de alarma.

El Autoseeker AT-10 es un rastreador con 4G LTE pensado para monitoreo vehicular en tiempo real, historial de viajes, datos de kilometraje y diversos reportes de alarma como SOS, geovallas, estado de ACC y pérdida de alimentación. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto puede variar según la versión de firmware, revisión de hardware e implementación del fabricante, por lo que esta página se enfoca en el contexto público y práctico del protocolo más que en detalles internos del equipo.

## Resumen del protocolo

El protocolo de comunicación del AT-10 regula cómo el dispositivo informa ubicación, estados y alarmas a un servidor remoto, y cómo se intercambian comandos o acuses de recibo cuando están soportados. En términos prácticos, el protocolo permite que el rastreador entregue telemetría y eventos útiles a Plaspy para que el historial de ubicaciones, las alertas y el monitoreo operativo funcionen de forma fiable.

- Permite reportes periódicos y basados en eventos para visibilidad en tiempo real de la flota
- Transmite estados y entradas de alarma como alertas SOS, estado del interruptor ACC y pérdida de alimentación externa
- Incluye resúmenes de viaje y kilometraje que Plaspy usa para historial de rutas e informes
- Admite funciones remotas opcionales reportadas por el dispositivo, por ejemplo corte de combustible o alertas de remolque
- Provee identificadores y telemetría que Plaspy utiliza para asociar mensajes con un activo rastreado

## Detección del protocolo por Plaspy

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y identifica automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. En la mayoría de los casos no será necesario seleccionar manualmente un protocolo dentro de Plaspy si el AT-10 está correctamente configurado para enviar datos a la plataforma.

- Plaspy escucha en el dominio público d.plaspy.com para reportes entrantes de dispositivos
- La IP pública del servidor Plaspy para reportes de dispositivos es 54.85.159.138
- El servicio usa un único puerto para todos los dispositivos, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan mensajes al endpoint compartido
- Normalmente solo debe configurar el dispositivo para apuntar a d.plaspy.com o a la IP del servidor y confirmar los ajustes de transporte

## Transporte y contexto de conexión

Los dispositivos AT-10 pueden configurarse para usar UDP o TCP según la versión de hardware y las opciones de firmware que provea el fabricante. Para una integración exitosa debe configurar el dispositivo para enviar sus reportes al endpoint de Plaspy usando el transporte y host correctos, de modo que la plataforma pueda recibir y procesar la telemetría.

- El equipo puede usar UDP o TCP en el puerto 8888 según soporte y configuración del dispositivo
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Plaspy utiliza el mismo puerto para todos los modelos soportados, lo que facilita la implementación
- Consideraciones de red como restricciones del operador, configuración de APN y reglas de firewall pueden afectar la conectividad
- Verifique que el intervalo de reporte y las opciones de reporte por evento del dispositivo coincidan con las necesidades operativas para optimizar vida de batería y uso de datos

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar temporizaciones de mensajes y el reporte de funciones opcionales, por lo que siempre anote la versión de firmware durante la validación
- Cambios en la revisión de hardware, antena o módulo de radio pueden alterar el comportamiento de red aun cuando el protocolo de alto nivel sea similar
- Los menús de configuración del fabricante pueden exponer la selección de transporte entre UDP y TCP, lo que afecta cómo debe configurarse el dispositivo para alcanzar Plaspy
- Funciones opcionales como corte remoto, comportamiento SOS o detección de remolque pueden depender de accesorios o firmware regional
- Plaspy detecta el protocolo automáticamente, pero la configuración correcta de host y transporte en el dispositivo es necesaria para que la detección funcione
- Valide la compatibilidad contra la documentación del fabricante cuando habilite comandos avanzados o alarmas opcionales

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AT-10 ayuda a asegurar un registro fiable del dispositivo, agilizar la resolución de problemas y mantener una calidad de datos consistente en Plaspy. Conocer el contexto de conexión y las variaciones comunes reduce el tiempo de puesta en marcha y contribuye a un seguimiento de flota estable a lo largo del tiempo.

- Una configuración correcta de transporte y host garantiza que los dispositivos lleguen de forma confiable al endpoint de Plaspy
- Estar al tanto de diferencias de firmware y hardware facilita la resolución de eventos faltantes o reportes inconsistentes
- Entender los patrones de reporte de alarmas le permite afinar notificaciones y umbrales de monitoreo en Plaspy
- Saber qué funciones opcionales soporta su versión del dispositivo ayuda a alinear expectativas sobre control remoto y funciones de seguridad
- La configuración de red y APN impacta directamente en el tiempo de actividad del dispositivo y en la entrega de mensajes

## Ventajas de usar Plaspy con este protocolo

Utilizar el Autoseeker AT-10 con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real, historial de rutas y gestión de alarmas para flotas vehiculares. El enfoque del AT-10 en historial de viajes, reporte de kilometraje y múltiples alarmas de seguridad se complementa con la ingesta y el procesamiento unificado de telemetría de Plaspy, de modo que las organizaciones pueden monitorear activos, responder a alertas y analizar patrones de uso.

Si desea saber más sobre cómo Plaspy maneja conexiones de dispositivos y funciones de gestión de flotas, visite https://www.plaspy.com. Para detalles más actuales y específicos por dispositivo, notas de firmware e información de accesorios del Autoseeker AT-10, consulte la documentación del fabricante en https://autoseekergps.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
