---
slug: /gotop/l16/protocol
id: l16-protocol
sidebar_label: Protocol
title: GOTOP - L16 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS wearable GOTOP L16 y su comunicación con Plaspy para seguimiento y alertas en tiempo real
keywords:
  - protocolo GOTOP L16
  - protocolo GPS GOTOP L16
  - protocolo de comunicación GOTOP L16
  - protocolo de rastreo GOTOP L16
  - GOTOP L16 Plaspy
  - protocolo rastreador GPS GOTOP
  - protocolo GPS portátil
  - protocolo rastreador a servidor
  - protocolo rastreo para gestión de flotas
  - protocolo reloj GPS
---

# GOTOP - Protocolo L16

Esta página describe el contexto público del protocolo para usar el reloj GPS inteligente GOTOP L16 con Plaspy. Se enfoca en los detalles de comunicación y del nivel de conexión que influyen en cómo el dispositivo reporta ubicación, telemetría y eventos a la plataforma Plaspy, sin exponer implementaciones privadas del fabricante.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al punto de enlace de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página cubre el contexto práctico y no sensible para la integración del L16 con Plaspy.

## Resumen del protocolo

El L16 transmite datos de medición y eventos desde el wearable hacia un servidor remoto usando sus radios celulares y locales integradas. El protocolo define cómo el reloj se identifica, cómo se empaqueta la telemetría de posición y salud para su envío, y qué eventos (por ejemplo, SOS o llamadas bidireccionales) se reenvían al servidor para su procesamiento y generación de alertas.

- El protocolo permite la identificación del dispositivo y el reporte de sesiones para que Plaspy asocie los datos entrantes con el registro correcto del L16.
- La telemetría, como posiciones GNSS, fijaciones asistidas por BLE y métricas de salud, se entrega en mensajes periódicos o impulsados por eventos.
- Las alarmas SOS y los eventos de llamadas bidireccionales se transmiten para que Plaspy genere alertas y notificaciones para cuidadores y equipos de monitoreo.
- El comportamiento del protocolo puede incluir reportes de latido (heartbeat), intervalos de posición y flags de evento que influyen en el almacenamiento y la reproducción en el servidor.
- El protocolo de comunicación garantiza la entrega fiable de datos sobre transporte IP a Plaspy para paneles en tiempo real y registros históricos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos entrantes en un único endpoint y puerto compartidos y aplica detección automática de protocolo para identificar el formato del rastreador. En la mayoría de los casos, no es necesario que usted seleccione manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy con las opciones de conexión correctas.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy escucha en el puerto 8888 para el tráfico de rastreadores.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido y enruta los mensajes en consecuencia.
- Si un dispositivo está correctamente configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, normalmente no es necesaria la selección manual del protocolo en la plataforma.
- La detección automática simplifica la incorporación de dispositivos en una amplia variedad de modelos y reduce los pasos de configuración manual.

## Transporte y contexto de conexión

Las opciones de conexión afectan la forma en que el L16 entrega mensajes a Plaspy. El dispositivo admite reportes basados en IP y puede usar UDP o TCP según la configuración del dispositivo y las condiciones de la red. Comprender el contexto de transporte ayuda con reglas de firewall, aprovisionamiento de SIM y resolución de problemas con operadores.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Plaspy acepta reportes de dispositivos dirigidos a d.plaspy.com o directamente a 54.85.159.138 en el puerto compartido.
- Todos los dispositivos compatibles con Plaspy usan el mismo número de puerto, lo que simplifica la configuración del lado servidor para integradores y operadores.
- Elija el transporte (UDP o TCP) según la capacidad del equipo y las necesidades de confiabilidad; el L16 puede configurarse conforme a las instrucciones del fabricante.
- Las configuraciones de red y del operador, como APN, activación de SIM y reglas de firewall salientes, deben permitir conexiones al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del L16 pueden cambiar la frecuencia de mensajes, los campos de telemetría incluidos o los nombres de eventos; confirme el comportamiento esperado para su versión de firmware.
- Las revisiones de hardware y funciones opcionales como BLE o eSIM pueden afectar qué tipos de telemetría están disponibles para Plaspy.
- La selección de transporte entre UDP y TCP puede estar limitada por las redes de los operadores o por valores predeterminados del firmware del dispositivo.
- Algunas funciones, como la geolocalización asistida por BLE o campos específicos de telemetría de salud, pueden requerir activación en la configuración del dispositivo o en flujos de configuración complementarios.
- Valide que el host y puerto de reporte del dispositivo estén configurados a d.plaspy.com o 54.85.159.138 y al puerto 8888 para asegurar una entrega fiable.
- Consulte siempre las notas de lanzamiento del fabricante al actualizar el firmware para confirmar la compatibilidad continua con Plaspy.

## Por qué es importante entender el protocolo

Comprender claramente el protocolo de comunicación del dispositivo reduce la fricción en la integración y mejora la confiabilidad operativa cuando el L16 se usa con Plaspy. Saber qué esperar del protocolo ayuda en la configuración, la resolución de problemas y el mantenimiento a largo plazo.

- Asegura que la dirección del servidor y el puerto estén configurados correctamente para que los datos lleguen a Plaspy sin ser bloqueados por políticas de red.
- Facilita la interpretación de la telemetría entrante y el timing de eventos al investigar brechas o alertas inesperadas.
- Permite decisiones informadas sobre selección de transporte y compensaciones de vida útil de batería según intervalos de reporte.
- Apoya la resolución de problemas coordinada con operadores, proveedores de hardware y el equipo de soporte de Plaspy.
- Proporciona contexto para la planificación de actualizaciones de firmware y la habilitación de funciones para mantener reportes estables.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP L16 con Plaspy integra la localización del wearable, la telemetría de salud y las funciones de emergencia en una sola solución de monitoreo. Plaspy recoge posiciones, eventos SOS, métricas de salud y actividad de llamadas del L16 y pone esos datos a disposición para visibilidad en tiempo real, alertas y reproducción histórica para apoyar a cuidadores, equipos de monitoreo y personal operativo.

Plaspy simplifica la incorporación de dispositivos compartiendo un puerto y endpoint comunes y detectando automáticamente el protocolo del rastreador cuando el L16 reporta a d.plaspy.com o 54.85.159.138 en el puerto 8888. Para conocer más sobre cómo Plaspy trabaja con wearables como el L16 visite https://www.plaspy.com. Verifique los detalles del protocolo del dispositivo, el comportamiento del firmware y otras especificaciones del fabricante en el sitio oficial de GOTOP https://www.gotop.cc/ ya que el soporte del protocolo y la implementación del dispositivo pueden cambiar con el tiempo.
