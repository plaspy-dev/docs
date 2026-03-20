---
slug: /reachfar/rf_v11/protocol
id: rf_v11-protocol
sidebar_label: Protocol
title: Reachfar - RF-V11 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del rastreador Reachfar RF V11 que explican la comunicación con Plaspy para reportes y eventos de alarma
keywords:
  - Protocolo Reachfar RF V11
  - Protocolo GPS Reachfar RF V11
  - Compatibilidad Reachfar RF V11 Plaspy
  - Protocolo rastreador GPS Reachfar
  - Protocolo de seguimiento RF V11
  - Protocolo de dispositivo Reachfar Plaspy
  - Reporte de alarmas RF V11
  - Protocolo rastreador GPS para activos pequeños
  - Protocolo antirrobo inalámbrico
  - Compatibilidad de dispositivos Plaspy
---

# Reachfar - Protocolo RF-V11

Esta página describe el contexto público del protocolo para utilizar el rastreador Reachfar RF-V11 con Plaspy. Resume cómo el RF-V11 envía ubicación y eventos de alarma, cómo Plaspy recibe esos reportes y qué considerar durante la configuración y resolución de problemas, sin exponer detalles privados o sensibles de implementación.

Plaspy emplea un punto de conexión y puerto compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en el contexto general de comunicación y notas prácticas de compatibilidad.

## Resumen del protocolo

El RF-V11 es un rastreador GPS compacto, alimentado por batería, con funciones antirrobo que reporta posición y eventos de sensores para monitoreo centralizado. Su comportamiento de reporte está pensado para entregar coordenadas GPS y notificaciones de alarma a servicios centrales como Plaspy, y además admite alertas locales por SMS y llamadas.

- Entrega reportes de ubicación y eventos de alarma que pueden reenviarse a una plataforma de monitoreo central para mapeo e historial.
- Reporta eventos desde múltiples sensores, incluyendo contacto magnético, detección de vibración o golpes y monitoreo de sonido.
- Soporta comandos remotos por SMS para configuración y consultas de batería que complementan el reporte al servidor.
- Puede activar alertas SMS inmediatas y llamadas automáticas a números configurados además del reporte al servidor.
- Permite funciones de escucha remota y monitoreo que se pueden usar junto con las notificaciones del servidor.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos e incluye detección automática de protocolo, por lo que usted normalmente no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está correctamente apuntado al endpoint de Plaspy. La dirección correcta del servidor y la configuración del transporte son requisitos comunes para una detección automática exitosa.

- Plaspy usa un único endpoint y puerto para conexiones entrantes de dispositivos y detecta automáticamente el protocolo del rastreador.
- Cuando el RF-V11 está configurado para reportar al endpoint de Plaspy, Plaspy intentará interpretar los reportes entrantes sin selección manual de protocolo.
- Usted normalmente solo debe asegurarse de que el dispositivo esté configurado para enviar reportes al servidor Plaspy y que exista conectividad de red.
- Si el dispositivo no se detecta, las comprobaciones habituales incluyen verificar la dirección del servidor configurada, el modo de transporte y la red SIM del RF-V11.

## Transporte y contexto de conexión

La configuración de conexión para el RF-V11 puede realizarse mediante transporte por paquetes o SMS, según la configuración del dispositivo y las redes disponibles. Para la integración con Plaspy, el contexto principal es el endpoint del servidor y el modo de transporte que el dispositivo utiliza para llegar a ese endpoint.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para dispositivos que usan direccionamiento IP directo.
- El puerto que usa Plaspy para la comunicación con dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, dependiendo del soporte del equipo y las opciones de configuración.
- Los dispositivos que no pueden usar datos por paquete pueden seguir usando reportes por SMS para alertas y comandos remotos; esos flujos por SMS están separados del endpoint de paquetes de Plaspy.
- Asegúrese de que el RF-V11 tenga conectividad GSM fiable y que la configuración APN y el plan de la SIM permitan datos o SMS según sea necesario.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre unidades RF-V11 pueden cambiar comandos disponibles, umbrales de eventos e intervalos de reporte; verifique las notas de firmware al solucionar problemas.
- Revisiones de hardware o variantes regionales pueden alterar los sensores soportados o los comportamientos por defecto en el reporte de alarmas.
- La elección de UDP frente a TCP para el transporte de paquetes puede afectar la semántica de entrega y debe coincidir con la configuración del RF-V11 y las condiciones de red.
- Las funciones de SMS y llamadas automáticas se implementan a nivel del dispositivo y complementan el reporte al servidor, pero pueden no ser visibles en Plaspy a menos que el dispositivo reenvíe los eventos al servidor.
- Siempre valide que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 para permitir la detección automática e ingestión por parte de Plaspy.
- Confirme las guías de configuración y las notas de versión suministradas por el fabricante para ajustes específicos del dispositivo antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el RF-V11 se comunica con Plaspy ayuda a garantizar reportes fiables, una resolución de problemas más rápida y un manejo predecible de alarmas para la protección de activos pequeños y el monitoreo perimetral.

- La selección correcta del transporte y la dirección del servidor reduce reportes perdidos y acelera la detección en Plaspy.
- Saber si un dispositivo usa SMS, TCP o UDP ayuda a alinear expectativas sobre la latencia y la fiabilidad de los reportes.
- Estar al tanto de diferencias de firmware y hardware facilita diagnosticar comportamientos inconsistentes entre unidades.
- Entender los tipos de eventos de alarma y cómo se reenvían a Plaspy ayuda a mapear los eventos del dispositivo en alertas y flujos operativos.
- Una configuración adecuada contribuye a preservar la vida de la batería mientras se mantiene la frecuencia de monitoreo requerida.

## Por qué usar Plaspy con este protocolo

Usar el Reachfar RF-V11 con Plaspy centraliza el reporte de ubicación, la consolidación de alarmas y la telemetría básica, de modo que la seguridad de activos pequeños pueda gestionarse junto con flotas más grandes e inventarios de equipo. Para instaladores y operadores que requieren protección antirrobo discreta, alimentada por batería, con visibilidad centralizada, el RF-V11 ofrece un hardware compacto y opciones de sensores que alimentan a Plaspy para mapeo, historial de eventos y notificaciones.

Para conocer más sobre Plaspy y cómo puede recibir y presentar reportes del RF-V11, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la documentación específica del RF-V11 y las notas de firmware más recientes en el sitio del fabricante https://www.reachfargps.com/ antes del despliegue.
