---
slug: /supermate/k20/protocol
id: k20-protocol
sidebar_label: Protocol
title: Supermate - K20 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del Supermate K20 y su comunicación con Plaspy para rastreo e integración confiables
keywords:
  - protocolo Supermate K20
  - protocolo GPS Supermate K20
  - protocolo de comunicación Supermate K20
  - protocolo de rastreo Supermate K20
  - compatibilidad dispositivo Plaspy
  - protocolo rastreador Plaspy
  - integración rastreador GPS
  - protocolo seguimiento vehicular
  - seguimiento de activos Supermate K20
  - gestión de flotas Supermate K20
---

# Supermate - Protocolo K20

Esta página describe el contexto público del protocolo para usar el rastreador GPS Supermate K20 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel, qué ajustes de conexión se utilizan y qué debe considerarse al integrar el K20 en un flujo de monitoreo. El objetivo es ofrecer una guía clara y no sensible sobre el protocolo que ayude en la configuración y solución de problemas, remitiendo a los recursos del fabricante para detalles específicos de firmware.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar. El comportamiento exacto del protocolo en el K20 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene intencionalmente general, destacando los puntos de conexión y consideraciones prácticas de compatibilidad para la integración con Plaspy.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de reglas que el K20 usa para enviar datos de ubicación, estado y eventos a un servidor como Plaspy. Para efectos de integración, los elementos importantes son cómo el dispositivo se identifica, cómo establece una sesión de transporte y cómo programa o envía la telemetría para que la plataforma Plaspy pueda ingerir y usar los datos de forma confiable.

- Permite al K20 transmitir la posición GPS, eventos de movimiento y actualizaciones de estado a Plaspy
- Transporta información de identidad del dispositivo para que Plaspy asocie los reportes con el activo correcto
- Admite reportes periódicos y basados en eventos para equilibrar visibilidad en tiempo real y consumo de energía
- Proporciona un flujo de datos consistente que Plaspy mapea a ubicaciones, alertas e historial
- Permite que funciones del fabricante como geocercas y SOS se retransmitan a la plataforma

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones en un único endpoint y puerto compartidos y utiliza esa entrada para determinar automáticamente el protocolo del rastreador. Cuando un K20 apunta al endpoint de Plaspy con los ajustes de transporte correctos, la plataforma identificará el tipo de emisor y comenzará a procesar los mensajes entrantes sin que sea necesaria una selección manual del protocolo.

- Plaspy escucha en el dominio d.plaspy.com para los reportes de los dispositivos
- Plaspy es accesible mediante la IP del servidor 54.85.159.138 como dirección alternativa del host
- Todos los dispositivos dentro de Plaspy usan el mismo puerto, lo que simplifica el enrutamiento de dispositivos
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint
- Normalmente no se requiere seleccionar el protocolo manualmente en Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy

## Contexto de transporte y conexión

Transporte se refiere a la capa de red usada para entregar los reportes del K20 a Plaspy y es distinto del propio protocolo de reporte del rastreador. El K20 puede configurarse para usar UDP o TCP según la configuración del equipo y el entorno de red. Para la conectividad con Plaspy, use el host y puerto compartidos de Plaspy para que la detección automática y la ingestión funcionen correctamente.

- El K20 puede configurarse para usar UDP en el puerto 8888 para reportes ligeros
- El K20 también puede configurarse para usar TCP en el puerto 8888 cuando se prefiere una sesión persistente
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, por lo que la misma configuración de puerto aplica en todos los modelos
- Elija UDP o TCP según la fiabilidad de la red y las opciones de configuración que ofrezca el fabricante

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los comandos soportados y el comportamiento de los reportes; siempre anote la versión de firmware del rastreador al diagnosticar diferencias
- Las revisiones de hardware o las opciones de accesorios pueden afectar los sensores disponibles y el reporte de eventos
- Las páginas de configuración del fabricante o los comandos de configuración por SMS pueden variar según versiones y regiones
- La selección del transporte entre UDP y TCP puede influir en las garantías de entrega y en cómo Plaspy interpreta el estado de sesión
- Confirme el APN y la provisión de red del dispositivo antes de probar la conectividad con Plaspy
- Valide el formato de identidad del dispositivo y el reporte del IMEI en la documentación del fabricante para asegurar que Plaspy asocie correctamente el dispositivo
- En caso de duda consulte los recursos oficiales del fabricante para cualquier comportamiento específico de firmware

## Por qué es importante entender el protocolo

Conocer los conceptos básicos del protocolo de comunicación del K20 ayuda a garantizar una puesta en marcha fluida, a acelerar la resolución de problemas y a conseguir una operación predecible a largo plazo con Plaspy. Aunque Plaspy realiza la detección automática del protocolo, el conocimiento práctico sobre transporte y patrones de reporte reduce el tiempo de configuración y facilita la solución efectiva cuando los dispositivos no aparecen en línea.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy
- Permite identificar más rápido problemas relacionados con el transporte como puertos bloqueados o problemas de NAT
- Facilita la verificación de identidad del dispositivo y el mapeo del IMEI a activos en Plaspy
- Mejora la comprensión de las compensaciones entre consumo de energía y frecuencia de reporte en modos periódicos frente a tiempo real
- Simplifica la validación de comandos de configuración del fabricante que afectan el comportamiento de reporte

## Por qué usar Plaspy con este protocolo

Usar el Supermate K20 con Plaspy ofrece a las organizaciones una vía sencilla para capturar ubicación en vivo, alertas de eventos y movimientos históricos de activos y vehículos. La forma compacta del K20 y sus funciones en tiempo real encajan bien con la ingestión centralizada y el mapeo de Plaspy, permitiendo a los equipos monitorizar flotas, proteger equipos y responder a eventos SOS o de geocerca desde una única plataforma.

Si desea conocer más sobre cómo Plaspy maneja conexiones de dispositivos, reportes y visibilidad de flotas, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo. Verifique la información específica más reciente y las notas de firmware en el sitio del fabricante Supermate en http://www.gps-summit.com/ para asegurarse de contar con la guía actualizada.
