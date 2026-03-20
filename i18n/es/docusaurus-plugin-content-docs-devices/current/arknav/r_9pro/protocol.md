---
slug: /arknav/r_9pro/protocol
id: r_9pro-protocol
sidebar_label: Protocol
title: ArkNav - R-9PRO Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para compatibilidad del ArkNav R-9PRO con seguimiento y telemetría en Plaspy
keywords:
 - Protocolo ArkNav R-9PRO
 - Protocolo GPS ArkNav R-9PRO
 - Protocolo de comunicación ArkNav R-9PRO
 - Protocolo de rastreo ArkNav R-9PRO
 - Rastreador GPS ArkNav Plaspy
 - Compatibilidad de dispositivos Plaspy
 - Protocolo de seguimiento vehicular
 - Protocolo para gestor de flotas
 - Protocolo de telemetría R-9PRO
 - Integración ArkNav Plaspy
---

# ArkNav - Protocolo R-9PRO

Esta página describe el contexto público del protocolo para usar el rastreador ArkNav R-9PRO con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión son públicos y qué consideraciones son relevantes al integrar el R-9PRO para seguimiento de flotas, telemetría y flujos anti robo.

El R-9PRO es un rastreador vehicular resistente que utiliza posicionamiento GNSS y transmisión de datos por GPRS, además de soportar actualizaciones OTA y una amplia gama de opciones de entradas y salidas. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo está configurado para enviar datos al endpoint de Plaspy. El comportamiento concreto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la compatibilidad final depende del firmware y la configuración del dispositivo entregado.

## Descripción general del protocolo

El protocolo de comunicación del R-9PRO define cómo el dispositivo envía posición, estados de sensores y alertas a un servidor remoto, y cómo la plataforma de gestión inicia comandos remotos y tareas de administración. Para el uso con Plaspy, este protocolo aporta la información necesaria para mostrar ubicación en tiempo real, telemetría y eventos en paneles y reportes sin exponer detalles internos privados del proveedor.

- Permite que el R-9PRO reporte posición GNSS y telemetría del vehículo a un servidor remoto de flotas.
- Facilita la identificación del equipo y de los sensores configurados para que Plaspy pueda asignar los datos entrantes a los registros del dispositivo.
- Transporta notificaciones de eventos como estado de ignición, alarmas, alertas de pánico y lecturas de sensores analógicos para generar alertas oportunas.
- Soporta flujos de mantenimiento y configuración remotos, como actualizaciones OTA y cambios de parámetros cuando el dispositivo lo permite.
- Provee los datos que Plaspy procesa para funciones como geocercas, historial y análisis telemático.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador a partir del flujo de datos cuando el dispositivo está correctamente configurado para reportar a ese endpoint. Esta detección automática evita que la mayoría de usuarios necesiten elegir un protocolo manualmente dentro de Plaspy si el dispositivo envía a la dirección y puerto correctos.

- Plaspy escucha en un puerto compartido para los informes de dispositivos y utiliza la conexión entrante para identificar el equipo y su protocolo.
- Cuando un R-9PRO envía reportes al endpoint de Plaspy, la plataforma empata el dispositivo por sus identificadores y aplica el análisis y el mapeo adecuados.
- En muchos casos el equipo solo necesita estar configurado para enviar datos al endpoint de Plaspy y no se requiere seleccionar el protocolo manualmente.
- Si un dispositivo puede usar múltiples modos de transporte, asegúrese de que el transporte activo esté configurado para usar el endpoint de Plaspy para que la detección sea exitosa.
- La detección automática reduce pasos de configuración, pero es recomendable verificar los identificadores del dispositivo y los ajustes de reporte durante las primeras implementaciones.

## Contexto de transporte y conexión

El R-9PRO puede configurarse para enviar su telemetría mediante UDP o TCP dependiendo del firmware y de la configuración del usuario. Para reportar a Plaspy, los dispositivos deben apuntar al endpoint público de Plaspy y al puerto correspondiente para que los datos entrantes lleguen al servicio de ingestión de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para conexiones de dispositivos y todos los equipos soportados por Plaspy usan ese mismo puerto.
- El R-9PRO puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del hardware y las opciones de configuración.
- Confirme que el APN de red y los ajustes GPRS del dispositivo estén correctos para asegurar reportes fiables a través de redes móviles.

## Notas sobre compatibilidad del protocolo

- Cambios de firmware pueden alterar la frecuencia de mensajes, los campos disponibles y funciones opcionales; siempre verifique la versión de firmware al validar compatibilidad.
- Revisiones de hardware y variantes opcionales, como modelos impermeables, pueden presentar diferencias en E/S o en el cableado de sensores que afecten la telemetría.
- La elección del transporte importa: algunos dispositivos se comportan de forma diferente en UDP versus TCP respecto a reenvíos y manejo de sesión.
- Las opciones de configuración del fabricante, como intervalos de reporte y sensores habilitados, influyen en lo que Plaspy recibe y muestra.
- Verifique que el dispositivo esté configurado para enviar datos al endpoint de Plaspy y que se hayan considerado las restricciones de los operadores sobre GPRS 2G.
- Para un comportamiento específico y detallado del dispositivo consulte la documentación de producto y las notas de lanzamiento de ArkNav.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el R-9PRO ayuda a garantizar un flujo de datos fiable hacia Plaspy, agiliza la resolución de problemas y posibilita un comportamiento predecible en alertas y acciones remotas. Entender el contexto del protocolo es útil para integradores de sistemas, administradores de flota y equipos de soporte durante la implementación y operación.

- Ayuda a diagnosticar por qué un equipo no aparece en Plaspy revisando transporte, endpoint e identificadores del dispositivo.
- Orienta la configuración correcta de intervalos de reporte y mapeo de sensores para que Plaspy reciba telemetría útil.
- Informa la decisión entre usar UDP o TCP según la confiabilidad de la red y el comportamiento del operador.
- Facilita la planificación de actualizaciones OTA y cambios de parámetros sin interrumpir funciones críticas de rastreo.
- Reduce la prueba y error al alinear los ajustes del equipo con las expectativas de reporte de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el ArkNav R-9PRO con Plaspy brinda a los operadores de flota visibilidad centralizada de la ubicación del vehículo, eventos de E/S y telemetría de sensores. Las características de hardware del R-9PRO, como E/S extensas, batería de respaldo interna y capacidad OTA, combinadas con los paneles, alertas y reportes de Plaspy, ofrecen supervisión operativa práctica para flotas, flujos anti robo y mantenimiento basado en telemetría.

Si desea conocer más sobre cómo Plaspy puede trabajar con dispositivos ArkNav y ver las funcionalidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos del dispositivo, notas de firmware y variantes de hardware, verifique la documentación oficial de ArkNav en https://www.arknavgps.com.tw/ porque el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
