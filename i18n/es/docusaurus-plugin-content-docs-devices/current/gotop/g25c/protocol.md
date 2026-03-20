---
slug: /gotop/g25c/protocol
id: g25c-protocol
sidebar_label: Protocol
title: GOTOP - G25C Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador GOTOP G25C con Plaspy, incluyendo configuración de conexión y compatibilidad
keywords:
  - protocolo GOTOP G25C
  - protocolo GPS GOTOP G25C
  - protocolo GOTOP G25C para Plaspy
  - protocolo de comunicación GOTOP G25C
  - protocolo de rastreo GOTOP G25C
  - integración de rastreador GPS GOTOP
  - compatibilidad de dispositivos Plaspy
  - integración de protocolo rastreador GPS
  - rastreo de flotas GOTOP G25C
  - protocolo de rastreador IoT
---

# GOTOP - Protocolo G25C

Esta página ofrece un panorama público y no sensible sobre el contexto del protocolo de comunicación para usar el rastreador GOTOP G25C con la plataforma Plaspy. Explica cómo el dispositivo se comunica con el endpoint público de Plaspy y qué debe considerarse al configurar y validar el reporte de los equipos para lograr un rastreo confiable.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía se enfoca en orientaciones prácticas y públicas, no en detalles internos del dispositivo.

## Resumen del protocolo

El protocolo del dispositivo define cómo el GOTOP G25C informa posición, estado y alarmas a un servidor remoto, y cómo se intercambian comandos o configuraciones remotas cuando están soportados. Para la integración con Plaspy, la función pública del protocolo es entregar datos de ubicación y telemetría utilizables a la plataforma, además de permitir la identificación del tipo de equipo y su estado operativo básico.

- Permite al G25C enviar actualizaciones periódicas de posición y mensajes por eventos a un endpoint remoto.
- Incluye campos o marcadores que permiten a un servidor como Plaspy reconocer la identidad del dispositivo y asociar los datos entrantes a una cuenta.
- Transporta telemetría e información de alarma como movimiento, geocerca, batería baja y otras banderas de estado que Plaspy usa para notificaciones.
- Soporta transporte sobre sockets de red estándar para que el rastreador reporte al endpoint público de Plaspy.
- Permite configuración remota por SMS o comandos de red cuando el dispositivo y el fabricante lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint público e identifica las conexiones entrantes de rastreadores para que la plataforma pueda parsear y normalizar datos sin necesidad de seleccionar manualmente el protocolo en la mayoría de los casos. Cuando un GOTOP G25C se configura para reportar a Plaspy, el servicio intentará identificar el protocolo automáticamente y mapear los datos recibidos a los registros de dispositivos en Plaspy.

- Plaspy utiliza un endpoint de servidor compartido y un solo puerto para todos los dispositivos compatibles.
- Los equipos deben apuntar al endpoint de Plaspy para habilitar la detección automática del protocolo.
- Cuando el rastreador informa al endpoint de Plaspy, por lo general usted no necesita elegir un protocolo dentro de Plaspy manualmente.
- La configuración correcta del dispositivo para informar a la dirección y puerto del servidor es el requisito habitual para la detección automática.
- Si surgen problemas de detección, revisar la configuración de reporte del dispositivo y las notas de firmware es el primer paso de solución.

## Transporte y contexto de conexión

El GOTOP G25C puede usar transporte IP estándar para enviar mensajes a través de redes celulares. Para la compatibilidad con Plaspy, los detalles importantes de conexión son la dirección de destino y el protocolo de transporte que emplea el rastreador. Plaspy acepta reportes de dispositivos en un único puerto consistente y soporta modos de transporte comunes en rastreadores IoT.

- El dominio del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto de servidor que usa Plaspy para recepción de dispositivos es 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita su firmware y configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el equipo.
- Apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es el patrón estándar de conexión para reporte.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar el comportamiento de los mensajes y los campos disponibles; verifique la versión de firmware al momento de resolver problemas.
- Revisiones de hardware pueden alterar funciones disponibles como transportes soportados, modos de energía o sensores de alarma.
- Las opciones de configuración del fabricante pueden permitir reporte por UDP o TCP; elija el transporte que coincida con la capacidad del firmware del equipo.
- Algunas funciones indicadas por el fabricante pueden requerir ajustes de firmware específicos o configuración adicional por SMS o mediante una herramienta de configuración.
- Siempre valide cualquier supuesto sobre intervalos de reporte, disparadores de alarma o comandos remotos contra la documentación vigente del fabricante.
- Si la detección automática no tiene éxito, confirme que el equipo apunta correctamente al endpoint de Plaspy y que la conectividad de red está disponible.

## Por qué es importante comprender el protocolo

Conocer cómo se comunica el G25C ayuda a garantizar un rastreo confiable, acelerar la resolución de problemas y obtener un comportamiento predecible en Plaspy. Entender el transporte, el comportamiento de reporte y cómo la plataforma recibe los datos reduce el tiempo de puesta en marcha y mejora la disponibilidad operativa.

- Confirma que el rastreador está apuntando al endpoint y puerto correctos de Plaspy para la detección automática.
- Ayuda a diagnosticar por qué un dispositivo podría no aparecer en Plaspy o por qué faltan campos de datos.
- Orienta la decisión entre UDP o TCP según el soporte del equipo y la fiabilidad de la red.
- Contribuye a planificar la vida útil de la batería y los intervalos de reporte al comprender el comportamiento esperado.
- Facilita la integración consistente de alarmas y cambios de estado en las notificaciones y flujos de trabajo de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G25C con Plaspy proporciona a las organizaciones un camino directo para centralizar la telemetría de los dispositivos en una única plataforma de gestión de flotas y activos. Plaspy normaliza los datos entrantes de los rastreadores compatibles, facilitando la visualización de ubicaciones en tiempo real, el monitoreo de alarmas y la integración de datos de rastreo en procesos operativos.

El enfoque de endpoint único de Plaspy simplifica el aprovisionamiento de dispositivos porque todos reportan al mismo puerto y dominio, y la plataforma detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado. Para obtener más información sobre Plaspy y cómo maneja integraciones de dispositivos, visite https://www.plaspy.com. Para comportamientos específicos de firmware y detalles de implementación del equipo más actuales, verifique la información en el sitio del fabricante https://www.gotop.cc/.
