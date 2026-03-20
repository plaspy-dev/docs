---
slug: /reachfar/rf_v24/protocol
id: rf_v24-protocol
sidebar_label: Protocol
title: Reachfar - RF-V24 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador Reachfar RF V24 y su compatibilidad con Plaspy
keywords:
  - protocolo Reachfar RF V24
  - protocolo GPS Reachfar RF V24
  - protocolo de rastreo RF V24
  - compatibilidad rastreador Reachfar Plaspy
  - integración RF V24 Plaspy
  - protocolo rastreador GPS Reachfar
  - protocolo de comunicación RF V24
  - protocolo rastreador de activos Reachfar
  - rastreador GPS solar RF V24
  - rastreadores compatibles con Plaspy
---

# Reachfar - Protocolo RF-V24

Esta página documenta el contexto público del protocolo para usar el rastreador Reachfar RF-V24 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, cuáles son los ajustes de conexión usados públicamente y qué aspectos del comportamiento del protocolo son importantes al integrar el RF-V24 en un flujo de trabajo de monitoreo de flotas o activos en Plaspy.

El RF-V24 es un rastreador 4G con panel solar diseñado para despliegues exteriores de larga duración y operación de bajo mantenimiento. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conjuntos de comandos específicos del dispositivo, notas de firmware y configuración paso a paso, consulte la documentación del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de reglas que permite al RF-V24 enviar información de ubicación, telemetría y eventos a Plaspy para que la plataforma muestre posiciones en tiempo real, alarmas e historial. A nivel público, el protocolo abarca cómo el rastreador se identifica ante el servidor, cómo reporta eventos de GPS y sensores, y cómo indica alarmas como SOS y manipulación.

- Permite que el RF-V24 transmita reportes de ubicación y eventos de sensores a Plaspy para su visualización y notificación.
- Transporta información de identidad y sesión para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Comunica alarmas impulsadas por eventos, como SOS, vibración, alertas por manipulación y cambios de estado para actuación inmediata.
- Proporciona el marco de telemetría que usa Plaspy para almacenar trayectos históricos, eventos de geocerca y condiciones de activación.
- Funciona conjuntamente con los ajustes de transporte para que la entrega en red a Plaspy sea fiable a través de redes celulares y despliegues remotos.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes entrantes en un único endpoint compartido y determina automáticamente el protocolo del dispositivo a partir de la conexión entrante y el patrón de mensajes. Cuando un RF-V24 está configurado para reportar al endpoint de Plaspy, por lo general usted no necesita seleccionar manualmente un protocolo dentro de Plaspy para comenzar el monitoreo básico.

- Plaspy escucha en el endpoint público d.plaspy.com y en la IP del servidor 54.85.159.138 para los reportes de dispositivos.
- La plataforma usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador a partir del tráfico entrante.
- La configuración adecuada del dispositivo para apuntar al endpoint de Plaspy suele ser suficiente para que ocurra la detección automática.
- Si un dispositivo no aparece en línea, verifique los ajustes de reporte del dispositivo, el APN y el tipo de transporte según la documentación del fabricante.
- Para dispositivos con múltiples variantes de firmware, el patrón de mensajes puede cambiar y afectar la detección automática hasta que el dispositivo esté configurado de forma consistente.

## Contexto de transporte y conexión

Los ajustes de conexión determinan cómo el RF-V24 alcanza Plaspy a través de la red celular. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del instalador. Estas opciones de transporte afectan las características de entrega pero no alteran el papel general del protocolo.

- Los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888 para enviar telemetría y eventos.
- Plaspy acepta reportes dirigidos a d.plaspy.com o directamente a 54.85.159.138 en el puerto compartido.
- El puerto usado por todos los dispositivos en Plaspy es 8888, lo que simplifica la configuración entre modelos.
- TCP proporciona entrega orientada a conexión mientras que UDP es sin conexión; elija el transporte soportado por el firmware del RF-V24 y su plan de red.
- Verifique APN, plan de datos de la SIM y cobertura de señal para asegurar una entrega fiable de mensajes al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del fabricante pueden alterar el tiempo de mensajes, los campos disponibles o los formatos de eventos, lo que afecta cómo aparecen los datos en Plaspy.
- Las revisiones de hardware pueden introducir cambios menores en el comportamiento de los sensores o nuevos tipos de eventos; confirme la revisión exacta del modelo si es necesario.
- Algunos despliegues pueden preferir TCP sobre UDP o viceversa; asegúrese de que el RF-V24 esté configurado para usar el transporte elegido de forma consistente.
- Las restricciones del operador de red y los ajustes de APN pueden afectar la conectividad del dispositivo y deben validarse durante la instalación.
- Siempre valide la identidad y los reportes del dispositivo comprobando los mensajes entrantes iniciales en Plaspy después de la configuración.
- Para funciones avanzadas de comandos o configuración remota, consulte la documentación oficial de Reachfar sobre el comportamiento específico del firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a los instaladores y operadores a configurar correctamente los dispositivos, interpretar los datos entrantes y solucionar problemas rápidamente cuando un rastreador no reporta como se espera. También favorece la confiabilidad a largo plazo al aclarar cómo se presentan los eventos y la telemetría en Plaspy.

- Agiliza la puesta en marcha inicial del dispositivo y reduce el tiempo hasta la primera localización.
- Facilita mapear eventos del dispositivo como SOS, manipulación y alarmas de sensores a alertas de la plataforma.
- Permite una resolución más rápida de problemas cuando la telemetría falta o está malformada.
- Orienta la elección del transporte y la configuración del APN para una entrega más confiable.
- Apoya la gestión del cambio cuando actualizaciones de firmware alteran el comportamiento de mensajes o soporte de eventos.

## Por qué usar Plaspy con este protocolo

Usar el RF-V24 con Plaspy ofrece a las organizaciones visibilidad persistente de activos y vehículos remotos con mantenimiento mínimo gracias a la carga solar y la larga autonomía en espera. Plaspy muestra ubicación en tiempo real, trayectos históricos, alertas de geocercas y notificaciones de eventos como SOS y manipulación para que los equipos operativos puedan responder con rapidez y mantener supervisión sobre flotas y activos dispersos.

Para obtener más información sobre Plaspy y cómo la plataforma maneja la integración y el reporte de rastreadores, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información más reciente específica del dispositivo en el sitio del fabricante https://www.reachfargps.com/ antes de finalizar la instalación o configuración.
