---
slug: /gotop/tk_100/protocol
id: tk_100-protocol
sidebar_label: Protocol
title: GOTOP - TK-100 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo GOTOP TK-100 y su comunicación con Plaspy para rastreo de mascotas e integración de dispositivos
keywords:
  - protocolo GOTOP TK-100
  - GOTOP TK-100 GPS
  - compatibilidad GOTOP TK-100 Plaspy
  - comunicación GOTOP TK-100
  - protocolo rastreador GPS mascotas
  - integración rastreador GOTOP
  - guía protocolo rastreador GPS
  - integración dispositivo Plaspy
  - protocolo seguimiento TK-100
  - documentación protocolo GOTOP
---

# GOTOP - Protocolo TK-100

Esta página ofrece un contexto público sobre el protocolo utilizado por el rastreador GOTOP TK-100 cuando se integra con Plaspy. Explica cómo el TK-100, un rastreador GPS para mascotas que soporta reportes por SMS y GPRS y funciones como geocercas, alertas de batería baja, alarmas por vibración y movimiento y diseño resistente al agua, se comunica con una plataforma remota de rastreo. El objetivo es brindar información clara y no sensible sobre las expectativas de comunicación y conexión al integrar el dispositivo con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que esta página se centra en contexto público y práctico en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de comportamientos de comunicación que el dispositivo utiliza para identificarse, reportar ubicación y estado, y recibir configuración. Para un TK-100 usado con Plaspy, el rol del protocolo es trasladar de forma fiable la telemetría útil desde el dispositivo a través de la red móvil hacia la plataforma Plaspy para que los propietarios puedan monitorear mascotas y recibir alertas.

- Proveer información de identidad del dispositivo para que el servidor remoto pueda asociar los reportes a una unidad TK-100 específica.
- Reportar coordenadas de ubicación y estados asociados como movimiento, batería baja y eventos de geocerca.
- Transportar notificaciones de alarma y estado que permitan alertas oportunas para la protección de la mascota.
- Soportar reportes por datos celulares mediante GPRS para que el dispositivo alcance Plaspy por redes IP además de las opciones por SMS.
- Permitir configuración remota cuando el firmware y la configuración del fabricante admiten actualizaciones OTA o tramas de comando.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de rastreadores en un endpoint compartido y detecta automáticamente el protocolo del dispositivo, por lo que por lo general usted no necesita seleccionar manualmente el protocolo dentro de Plaspy. La condición principal para la detección automática e integración es que el dispositivo esté correctamente configurado para apuntar a Plaspy.

- El endpoint del servidor de Plaspy es d.plaspy.com, que resuelve al backend de la plataforma.
- La dirección IP del servidor Plaspy es 54.85.159.138 para los casos en que se use una dirección numérica.
- El puerto en escucha de Plaspy es 8888, que se utiliza para los reportes de los rastreadores.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de la red.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint.
- Si el dispositivo está configurado correctamente para reportar a d.plaspy.com o a la IP y puerto indicados, normalmente no será necesaria la selección manual del protocolo en Plaspy.

## Transporte y contexto de conexión

El TK-100 suele usar la red celular para enviar telemetría por IP usando GPRS. Al integrar con Plaspy, el enfoque de conexión se centra en cómo el rastreador alcanza el endpoint de Plaspy y qué opciones de transporte están disponibles.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Configure el TK-100 para apuntar a d.plaspy.com o directamente a 54.85.159.138 si la configuración del dispositivo lo requiere.
- El puerto 8888 se utiliza de forma consistente en todos los dispositivos soportados por Plaspy para simplificar la configuración y la detección.
- Dado que el TK-100 soporta reportes por SMS, confirme si pretende usar SMS para comandos o GPRS para reportes continuos al servidor al planear la integración.
- Asegúrese de que el APN y los ajustes celulares del TK-100 sean correctos para que las sesiones GPRS puedan establecerse hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el TK-100 estructura los reportes y qué campos incluye; siempre anote la versión de firmware al resolver problemas.
- Las revisiones de hardware y las variantes regionales pueden afectar los transportes disponibles o los modos de reporte predeterminados como SMS frente a GPRS.
- Las opciones de configuración del fabricante suelen controlar si el dispositivo usa TCP o UDP; verifique la configuración antes de intentar la integración.
- Los dispositivos configurados solo para SMS no enviarán reportes por IP a Plaspy hasta que se cambien para usar reportes por datos GPRS.
- Los operadores de red y los ajustes del APN pueden afectar la capacidad del rastreador para alcanzar d.plaspy.com mediante GPRS.
- Valide la compatibilidad consultando la documentación oficial del fabricante y las notas de versión para comportamientos específicos del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración exitosa, una resolución de problemas efectiva y una operación estable a largo plazo al usar un TK-100 con Plaspy. Conocer qué envía el dispositivo y cómo la plataforma lo recibe reduce la incertidumbre durante la integración.

- Garantiza que se apliquen en el dispositivo los ajustes correctos de servidor y transporte para un reporte confiable.
- Ayuda a diagnosticar problemas de conectividad como mala configuración del APN o puertos bloqueados por el operador.
- Aclara cómo se entregan las alarmas y los mensajes de estado para que el comportamiento de alertas y geocercas funcione según lo esperado.
- Permite decidir entre UDP y TCP en función de la confiabilidad de la red y las capacidades del equipo.
- Facilita la coordinación con el soporte del fabricante al proporcionar detalles claros del entorno y la versión de firmware.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP TK-100 con Plaspy ofrece una forma práctica de centralizar la ubicación, las alarmas y el historial de una mascota en una sola plataforma. Para organizaciones o propietarios que necesitan visibilidad continua y alertas oportunas, Plaspy puede recibir los reportes del TK-100 y presentarlos junto con otros activos rastreados, simplificando el monitoreo y la respuesta.

Learn more about Plaspy at https://www.plaspy.com and review the latest device specific protocol and firmware information on the manufacturer site https://www.gotop.cc/. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verifying current information with the official manufacturer documentation is recommended.
