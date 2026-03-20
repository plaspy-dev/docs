---
slug: /autofon/dx_mayak_81/protocol
id: dx_mayak_81-protocol
sidebar_label: Protocol
title: AutoFon - DX Mayak 8.1 Protocol
sidebar_class_name: menu_item_tracker
description: Panorama público del protocolo del AutoFon DX Mayak 8.1 y su comunicación con los servidores de Plaspy
keywords:
  - Protocolo AutoFon DX Mayak 8.1
  - Protocolo GPS AutoFon
  - Compatibilidad DX Mayak 8.1 Plaspy
  - Protocolo de rastreo DX Mayak 8.1
  - Protocolo de rastreador AutoFon
  - Protocolo de rastreador GPS Plaspy
  - Rastreo de vehículos AutoFon
  - Rastreo de activos DX Mayak
  - Protocolo de rastreador GLONASS GPS
  - Protocolo de seguimiento GPRS
---

# AutoFon - Protocolo DX Mayak 8.1

Esta página describe, en términos públicos, el contexto del protocolo para usar el AutoFon DX Mayak 8.1 con la plataforma de gestión de flotas Plaspy. Se centra en cómo el dispositivo envía ubicación, telemetría y alarmas a un servidor de monitoreo y qué papel juega el protocolo de comunicación del rastreador en la operación diaria con Plaspy.

El DX Mayak 8.1 es un rastreador compacto alimentado por batería que utiliza GLONASS y GPS para la localización, soporta seguimiento en intervalos de bajo consumo y alertas dirigidas por eventos como movimiento, choque y SOS. Plaspy emplea configuraciones de conexión compartidas para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo de comunicación del rastreador define cómo el DX Mayak 8.1 empaqueta y envía actualizaciones de posición, telemetría y notificaciones de eventos a un servidor de monitoreo para que Plaspy pueda recibir y mostrar esa información. Esta página ofrece un contexto público seguro sobre el rol del protocolo sin exponer los detalles internos del dispositivo.

- Transporta datos de ubicación y metadatos GNSS para que Plaspy ubique el dispositivo en mapas y calcule desplazamientos.
- Transmite telemetría como nivel de batería, temperatura, conteo de satélites y intensidad de señal GSM para monitorizar la salud del equipo.
- Entrega notificaciones de eventos por movimiento, inclinación, choque y SOS para que las alertas estén disponibles en los flujos de trabajo de Plaspy.
- Soporta retransmisión en cola de mensajes almacenados para que los periodos sin conexión no pierdan eventos de forma permanente.
- Usa el enlace celular del equipo como canal principal de reporte, con SMS como canal secundario o de respaldo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado envía datos. En la mayoría de las implementaciones usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el DX Mayak 8.1 está configurado para reportar al endpoint de Plaspy.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- El puerto es 8888, que es el puerto común que Plaspy utiliza para el reporte de dispositivos.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del rastreador.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en una flota.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a enviar reportes al endpoint de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el DX Mayak 8.1 llega a Plaspy a través de la red celular y cómo la plataforma acepta esos reportes. El dispositivo normalmente usa GPRS para el reporte y puede recurrir a SMS para ciertos comandos de control o redundancia, dependiendo de la configuración del fabricante.

- El reporte principal se realiza por GPRS al endpoint de Plaspy usando UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a 54.85.159.138 cuando el enrutamiento de la red requiere una dirección IP.
- SMS está disponible como canal secundario para control y mensajes de emergencia, pero no es el canal primario de telemetría en tiempo real hacia Plaspy.
- El rastreador soporta modos de sueño prolongado y ciclos de baja actividad, por lo que las ventanas de conexión son breves y eficientes en energía.
- La retransmisión de mensajes almacenados se utiliza para entregar paquetes en cola a Plaspy cuando se restablece la conectividad.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los tiempos y los campos de telemetría opcionales; siempre anote la versión de firmware del dispositivo al validar su comportamiento.
- Las revisiones de hardware y las variantes regionales del módem pueden afectar los modos de transporte o las funciones GNSS disponibles.
- Las condiciones de la red del operador y la provisión del perfil de la SIM influyen en la fiabilidad del reporte por GPRS y deben validarse en la región de despliegue.
- Algunas funciones, como detección de presencia del propietario vía BLE y localización de corto alcance, son reportadas por el dispositivo pero dependen del comportamiento del smartphone emparejado.
- La elección de transporte TCP versus UDP puede configurarse en el equipo; confirme que el dispositivo esté configurado para usar el puerto 8888 y el transporte esperado para su instalación.
- La documentación del fabricante es la fuente autorizada para detalles de paquetes específicos de firmware y opciones de comandos.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el DX Mayak 8.1 ayuda a asegurar una configuración fluida con Plaspy y mejora la resolución de problemas cuando faltan datos o no aparecen eventos como se espera. Conocer el comportamiento del protocolo también es útil para planificar la vida útil de la batería y el manejo de periodos sin conexión en despliegues a largo plazo.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y que usa el puerto y transporte requeridos.
- Ayuda a interpretar valores de telemetría y la sincronización de eventos al revisar la salud del equipo en Plaspy.
- Facilita el diagnóstico de brechas de comunicación causadas por cobertura, batería o problemas de configuración.
- Apoya decisiones sobre intervalos de reporte para equilibrar la duración de la batería y la frecuencia de actualización en Plaspy.
- Facilita las pruebas coordinadas entre instaladores y el soporte de Plaspy al validar un nuevo despliegue de flota.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon DX Mayak 8.1 con Plaspy brinda a las organizaciones rastreo discreto y de larga duración, combinado con una plataforma de servidor que acepta y reconoce automáticamente los reportes entrantes. El rastreador ofrece telemetría predecible y alertas por eventos que encajan con flujos de monitoreo comunes como detección de robo, alertas de geocercas e informes operativos.

Plaspy recibe los reportes del DX Mayak 8.1 y presenta ubicación, telemetría, notificaciones de eventos e indicadores de salud del dispositivo en mapas, paneles y flujos de notificación para que los equipos puedan actuar sobre la información en tiempo real. Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos visite https://www.plaspy.com. Para los detalles más actuales del protocolo del dispositivo, notas de firmware y guía específica del fabricante, verifique la información en el sitio de AutoFon https://www.autofon.ru/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
