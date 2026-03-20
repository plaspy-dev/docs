---
slug: /reachfar/rf_v36/protocol
id: rf_v36-protocol
sidebar_label: Protocol
title: Reachfar - RF-V36 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Reachfar RF-V36 para wearables, compatibilidad con Plaspy, ajustes de conexión y transporte
keywords:
  - protocolo Reachfar RF-V36
  - protocolo GPS Reachfar RF-V36
  - protocolo de comunicación Reachfar RF-V36
  - compatibilidad RF-V36 Plaspy
  - protocolo de dispositivo Plaspy
  - protocolo de rastreador GPS wearable
  - protocolo de rastreador GPS para adultos mayores
  - protocolo de rastreo RF-V36
  - protocolo GPS Reachfar
  - protocolo de telemetría RF-V36
---

# Reachfar - Protocolo RF-V36

Esta página describe el contexto público del protocolo para usar el rastreador wearable Reachfar RF-V36 con Plaspy. Explica, a alto nivel, cómo el dispositivo se comunica con Plaspy y qué comportamientos de reporte del rastreador son más relevantes al integrar el RF‑V36 en un flujo de monitoreo en tiempo real. El RF‑V36 es un rastreador tipo reloj para cuidado de adultos mayores que reporta ubicación, telemetría de salud, alertas SOS y eventos de movimiento; esta guía aclara cómo esos datos llegan a Plaspy sin entrar en detalles de implementación sensibles.

Plaspy utiliza un conjunto compartido de ajustes de conexión para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este se dirige al endpoint de Plaspy. El comportamiento exacto del dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que, aunque Plaspy acepta reportes usando la configuración común de endpoint y puerto, la puesta a punto final y la resolución de problemas pueden requerir verificar el firmware del dispositivo y la documentación del fabricante.

## Descripción general del protocolo

A grandes rasgos, el protocolo de comunicación del RF‑V36 es el mecanismo de reporte que permite al wearable identificarse, enviar posición y telemetría, y notificar a los cuidadores a través de Plaspy. El propósito del protocolo es convertir los sensores y eventos del reloj en mensajes de red que un servidor pueda recibir, interpretar y presentar como datos útiles de ubicación y salud.

- Transmite información de posición proveniente de GPS, LBS asistido y fuentes Wi‑Fi de interior para que Plaspy muestre ubicaciones actuales e históricas.
- Envía telemetría de salud, por ejemplo frecuencia cardíaca y lecturas de presión arterial, para monitoreo remoto y análisis de tendencias.
- Reporta notificaciones de eventos como activaciones SOS, solicitudes de sesión de audio bidireccional, alertas de movimiento del sensor G y entradas o salidas de geocercas.
- Proporciona identidad del dispositivo y metadatos de estado para que Plaspy pueda correlacionar los datos entrantes con el rastreador y el propietario correctos.
- Permite configurar intervalos de reporte y cargas impulsadas por eventos para que el dispositivo equilibre oportunidad de los datos y duración de batería.

## Cómo Plaspy detecta el protocolo

Plaspy detecta el protocolo del rastreador de forma automática cuando el RF‑V36 está configurado para reportar al endpoint de Plaspy. Dado que todos los dispositivos que usa Plaspy comparten el mismo puerto de red, la plataforma examina las conexiones entrantes para determinar qué protocolo compatible está utilizando el dispositivo y enruta los mensajes a los manejadores apropiados sin que usted tenga que seleccionar manualmente un protocolo dentro de Plaspy.

- Configure el dispositivo para apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 y use el puerto compartido 8888 para los reportes.
- Plaspy acepta tanto UDP como TCP en el puerto 8888 y detectará el protocolo del rastreador a partir de los patrones de conexión y del payload entrante.
- En la mayoría de los casos, un RF‑V36 correctamente configurado se registrará y comenzará a reportar sin necesidad de seleccionar el protocolo manualmente en Plaspy.
- La detección automática reduce los pasos de configuración para integradores y permite que Plaspy soporte múltiples tipos de dispositivos en el mismo endpoint.
- Si un dispositivo no comunica como se espera, confirme los ajustes de red y el firmware del RF‑V36 y que el equipo realmente esté configurado para reportar al endpoint de Plaspy.

## Contexto de transporte y conexión

El contexto de transporte describe cómo el RF‑V36 envía sus mensajes a Plaspy a través de redes móviles. El dispositivo puede estar configurado para usar UDP o TCP según su firmware y opciones de configuración, pero Plaspy ofrece un destino único y consistente para que los dispositivos puedan apuntar a la plataforma con ajustes de conexión conocidos.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y el comportamiento del operador móvil.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138; ambos pueden usarse como destino de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica el aprovisionamiento y la configuración de flotas.
- Los pasos típicos del dispositivo incluyen establecer el APN y parámetros de la SIM, y luego configurar el host del servidor (d.plaspy.com o 54.85.159.138) y el puerto 8888.
- La elección del transporte puede afectar características de entrega como latencia y reintentos, por lo que debe seleccionar UDP o TCP según la capacidad del equipo y las condiciones de la red.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato o la periodicidad de los reportes del RF‑V36; confirme la versión de firmware al probar compatibilidad.
- Revisiones de hardware o variantes regionales del RF‑V36 pueden exponer distintas funciones o campos de telemetría que alteren lo que Plaspy recibe.
- Las opciones de configuración del fabricante pueden permitir seleccionar UDP o TCP; asegúrese de que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los dispositivos fuera de producción pueden seguir siendo funcionales en campo, pero la disponibilidad de actualizaciones de firmware o soporte del proveedor puede ser limitada.
- Plaspy detecta automáticamente el protocolo del rastreador, pero la detección exitosa depende de que el dispositivo realmente transmita al endpoint de Plaspy.
- Valide la compatibilidad con la documentación oficial de Reachfar y las notas de lanzamiento del firmware específico del RF‑V36.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del RF‑V36 ayuda a integradores y cuidadores a lograr una configuración confiable, reportes consistentes y resolución eficaz de problemas al usar Plaspy. Conocer el alcance del protocolo y el contexto de transporte reduce el tiempo de puesta en marcha y aclara qué comportamientos del dispositivo son esperables o configurables.

- Garantiza la correcta configuración de servidor, host y transporte para que el dispositivo alcance Plaspy de forma fiable.
- Facilita la identificación de problemas por reportes de ubicación, telemetría o eventos SOS ausentes o retrasados al acotar la falla a red, firmware o configuración.
- Ayuda a configurar intervalos de reporte y umbrales de eventos para equilibrar duración de batería y frecuencia de actualización en casos de uso wearables.
- Aclara cómo distintas fuentes de sensor como GPS, Wi‑Fi, LBS asistido y el sensor G contribuyen a la precisión de ubicación.
- Permite planear consideraciones del ciclo de vida del dispositivo, como actualizaciones de firmware y escenarios de fin de producción.

## Por qué usar Plaspy con este protocolo

Usar el Reachfar RF‑V36 con Plaspy ofrece a cuidadores y equipos de monitoreo una plataforma unificada para ubicación en tiempo real, telemetría de salud y notificaciones de eventos. El panel centralizado de Plaspy y los flujos de notificación facilitan combinar las funciones SOS y de audio bidireccional del RF‑V36 con feeds de ubicación continua y tendencias de telemetría para mejorar la conciencia situacional y acelerar las respuestas.

Plaspy acepta reportes de dispositivos en un único puerto compartido y detecta automáticamente el protocolo del rastreador, lo que simplifica el despliegue en flotas de wearables personales y otros rastreadores compatibles. Para saber más sobre Plaspy y cómo funciona con dispositivos como el RF‑V36 visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de Reachfar https://www.reachfargps.com/ ya que el soporte de protocolos y el comportamiento del firmware pueden cambiar con el tiempo.
