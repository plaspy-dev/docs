---
slug: /reachfar/rf_v23/protocol
id: rf_v23-protocol
sidebar_label: Protocol
title: Reachfar - RF-V23 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del tracker Reachfar RF-V23 y cómo se conecta a Plaspy mediante ajustes compartidos y detección automática
keywords:
  - protocolo Reachfar RF-V23
  - protocolo GPS Reachfar RF V23
  - Reachfar RF-V23 Plaspy
  - protocolo de comunicación RF-V23
  - protocolo de rastreo RF-V23
  - protocolo de rastreador Reachfar
  - protocolo de dispositivo Plaspy
  - rastreo vehicular RF-V23
  - rastreador de activos RF-V23
  - compatibilidad RF-V23
---

# Reachfar - Protocolo RF-V23

Esta página describe, a nivel público, el contexto del protocolo para usar el tracker Reachfar RF-V23 con la plataforma Plaspy. Explica cómo el dispositivo reporta ubicación y telemetría a Plaspy de forma general, el papel del protocolo de comunicación en la integración y los ajustes de conexión compartidos de Plaspy que se utilizan para el reporte. El contenido está dirigido a administradores e integradores y presenta información pública y no sensible para comprender cómo se comunica el RF-V23 con Plaspy.

El RF-V23 es un rastreador GPS resistente de larga duración con GNSS, posicionamiento por WiFi y conectividad celular multi-red. Plaspy soporta el RF-V23 mediante un endpoint de conexión compartido y detecta automáticamente el protocolo del tracker. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece una descripción práctica y pública y no un manual de firmware.

## Visión general del protocolo

En términos generales, el protocolo de reporte del tracker define cómo el RF-V23 envía posiciones, estado del dispositivo y telemetría a un servidor remoto para que Plaspy pueda mostrar mapas en vivo, alertas y datos históricos. El protocolo es el medio para envíos periódicos de posición, reportes por eventos (por ejemplo SOS o manipulación) y actualizaciones de estado que Plaspy usa para mantener el estado del dispositivo y los paneles.

- Transmite datos de ubicación GNSS, WiFi y LBS junto con telemetría básica del dispositivo, como batería y estado de entradas.
- Envía notificaciones de eventos para alarmas, SOS, manipulación y otros cambios de estado que generan alertas en Plaspy.
- Permite reportes periódicos y intervalos de subida configurables para equilibrar la rapidez de actualización y la duración de la batería.
- Permite que el dispositivo se identifique para que Plaspy asocie los reportes entrantes con el registro de activo correcto.
- Soporta subidas suplementarias para mejorar la cobertura en condiciones de red intermitente enviando posiciones adicionales cuando estén disponibles.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint y puerto compartidos y utiliza los datos entrantes para identificar automáticamente el protocolo del tracker. Para usuarios del RF-V23 esto significa que, por lo general, no es necesario seleccionar manualmente un protocolo dentro de Plaspy una vez que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP pública de Plaspy es 54.85.159.138 para configuración por IP directa.
- El puerto usado para reportes de dispositivos es 8888 y Plaspy utiliza este mismo puerto para los trackers soportados.
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo envía reportes al endpoint de Plaspy.
- En la mayoría de los casos, basta con configurar el dispositivo para que apunte al dominio o IP de Plaspy y use el tipo de transporte correcto.

## Transporte y contexto de conexión

El RF-V23 soporta los transportes celulares estándar y puede configurarse para usar UDP o TCP según el firmware y la configuración del equipo. Para una integración fiable con Plaspy, usted debe confirmar que el dispositivo está apuntando al endpoint de reporte de Plaspy y que la selección de transporte coincide con la configuración de la unidad.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto de reporte para Plaspy es 8888 y todos los dispositivos que envían datos a Plaspy usan este puerto.
- El RF-V23 puede configurarse para usar UDP o TCP en el puerto 8888 según las capacidades de la unidad y el firmware.
- Las configuraciones de red y APN del dispositivo deben permitir conexiones salientes al endpoint de Plaspy usando el transporte elegido.
- La elección del transporte puede afectar el comportamiento de entrega en cobertura celular deficiente y debe seleccionarse según las necesidades del despliegue.

## Notas de compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el formato de mensajes específicos y qué campos de telemetría están presentes.
- Las opciones de configuración del fabricante, como comandos por SMS, números de monitoreo o intervalos de subida, pueden influir en qué reportes se envían y cuándo.
- La selección del transporte de red (UDP vs TCP) puede variar por firmware y afectar cómo el dispositivo reintenta o confirma las subidas.
- La integración depende de que el dispositivo esté configurado para reportar a d.plaspy.com o a la IP y puerto de Plaspy (54.85.159.138:8888).
- Siempre valide la compatibilidad para un lote de dispositivos o una versión de firmware específica consultando la documentación del fabricante.
- En caso de duda, confirme el comportamiento del dispositivo usando un equipo de prueba controlado antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del RF-V23 ayuda a administradores e integradores a configurar correctamente los dispositivos, resolver problemas de reporte y mantener la confiabilidad a largo plazo cuando están conectados a Plaspy. Incluso un conocimiento de alto nivel del protocolo acelera la resolución de problemas de configuración, conectividad y envío de datos.

- Asegura ajustes correctos de servidor, IP y puerto para que los dispositivos lleguen a Plaspy de forma fiable.
- Ayuda a elegir el transporte y los intervalos de subida apropiados para equilibrar la rapidez de actualización y el consumo de batería.
- Facilita el diagnóstico cuando un dispositivo no aparece en Plaspy o faltan campos de telemetría.
- Apoya la planificación ante casos de borde de la red, como cobertura intermitente o roaming.
- Aumenta la confianza al validar nuevo firmware, revisiones de hardware o lotes de dispositivos antes del despliegue masivo.

## Por qué usar Plaspy con este protocolo

Emparejar el RF-V23 con Plaspy ofrece a las organizaciones una forma integrada de recopilar ubicación y telemetría de dispositivos para gestión de flotas, protección de activos y monitoreo remoto de equipos. Plaspy ingiere los reportes de posición y estado enviados a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y presenta los datos en paneles, mapas y flujos de alerta. Dado que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente los protocolos de los trackers, la configuración suele ser sencilla una vez que el RF-V23 está apuntando al endpoint de Plaspy.

Para más información sobre Plaspy y cómo gestionar dispositivos RF-V23 visite el sitio principal de Plaspy https://www.plaspy.com. Para detalles específicos de protocolo, comportamiento de firmware y comandos de configuración consulte la documentación oficial de Reachfar en https://www.reachfargps.com/ ya que las implementaciones del fabricante y el firmware pueden cambiar con el tiempo.
