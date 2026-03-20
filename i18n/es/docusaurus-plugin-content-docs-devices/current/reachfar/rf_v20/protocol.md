---
slug: /reachfar/rf_v20/protocol
id: rf_v20-protocol
sidebar_label: Protocol
title: Reachfar - RF-V20 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del Reachfar RF V20 y cómo se conecta a Plaspy para rastreo GPS confiable
keywords:
  - protocolo Reachfar RF V20
  - protocolo GPS RF V20
  - compatibilidad rastreador Reachfar
  - seguimiento Reachfar RF V20
  - protocolo de comunicación RF V20
  - compatibilidad Plaspy
  - integración de dispositivos Plaspy
  - rastreo vehicular RF V20
  - configuración rastreador RF V20
  - rastreador GPRS TCP IP
---

# Reachfar - Protocolo RF-V20

Esta página resume el contexto público del protocolo para utilizar el rastreador Reachfar RF-V20 con Plaspy. Está dirigida a usuarios técnicos e integradores y explica, en términos generales, cómo se comunica el dispositivo con la plataforma Plaspy y qué revisar al configurar el equipo para reportes remotos y monitoreo.

El RF-V20 es un rastreador GPS cuatribanda versátil con funciones como alarmas antirrobo, sensores magnéticos y de vibración, batería de larga duración y múltiples opciones de reporte (web, móvil y SMS). Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Verifique siempre el comportamiento específico del dispositivo en la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El RF-V20 utiliza el transporte de datos móviles estándar para enviar información de ubicación, estado y alarmas a un endpoint de servidor. El firmware empaqueta telemetría y eventos y los transmite por el enlace celular, de modo que un servidor como Plaspy pueda ingerir y mostrar los datos para seguimiento y alertas.

- El protocolo define cómo el rastreador formatea y envía datos de ubicación, hora y eventos a un servidor remoto.
- Permite que el rastreador se identifique ante el servidor para asociar los datos con el dispositivo correcto en Plaspy.
- El transporte y la dirección del servidor funcionan junto con el protocolo para entregar actualizaciones de posición, alarmas e informes de estado.
- Los mensajes de protocolo informan a la plataforma sobre alarmas como vibración, manipulación magnética, batería baja y cambio de SIM.
- El comportamiento del protocolo visible para el usuario puede variar con actualizaciones de firmware o ajustes opcionales en el dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint compartido y utiliza detección automática para identificar el protocolo de reporte del rastreador. En la mayoría de los casos, un RF-V20 correctamente configurado que apunte al endpoint de Plaspy será reconocido sin que el usuario tenga que seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Si el RF-V20 está configurado para reportar al endpoint de Plaspy, la plataforma podrá asociar los mensajes entrantes con el registro del dispositivo.
- Por lo general, usted no necesita elegir un protocolo en Plaspy cuando el dispositivo envía datos al endpoint configurado.
- La identificación adecuada del dispositivo y una conexión celular estable son los factores más importantes para la detección automática.

## Transporte y contexto de conexión

El RF-V20 puede usar transporte TCP o UDP estándar sobre el canal de datos celular GPRS para enviar telemetría a un servidor. Para Plaspy, configure el dispositivo para que reporte al dominio o IP del servidor Plaspy en el puerto compartido que utiliza la plataforma.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según la compatibilidad y la configuración del equipo.
- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos.
- Elija el transporte (UDP o TCP) según la configuración del dispositivo y la confiabilidad de la red; la plataforma soporta ambos.
- Asegúrese de que el APN y los ajustes GPRS del dispositivo estén correctos para que el RF-V20 pueda establecer una conexión de datos saliente.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del fabricante pueden alterar la frecuencia de mensajes, el contenido de campos u opciones que afectan el parseo y la visualización.
- Las revisiones de hardware o variantes del RF-V20 pueden exponer diferentes configuraciones de sensores o entradas opcionales.
- Algunas versiones de firmware para instaladores o distribuidores añaden comandos personalizados u opciones de reporte distintas al firmware de venta al público.
- La elección de transporte entre UDP y TCP afecta la semántica de entrega pero no el rol general del protocolo.
- Valide la compatibilidad comprobando que el dispositivo envíe datos a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que Plaspy reconozca el dispositivo.
- En caso de duda, consulte la documentación de Reachfar sobre el comportamiento específico del firmware antes de tomar decisiones de integración.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del RF-V20 facilita la puesta en marcha, reduce el tiempo de resolución de problemas y mejora la confiabilidad a largo plazo cuando el dispositivo se usa con Plaspy.

- Saber qué transporte y qué ajustes de servidor utiliza el dispositivo ayuda a confirmar que puede alcanzar el endpoint de Plaspy.
- Reconocer cómo el equipo reporta alarmas y estados permite mapear correctamente los eventos en los paneles y alertas de Plaspy.
- Conocer las variaciones dependientes del firmware prepara a los integradores para diferencias en contenido y frecuencia de los mensajes.
- Entender los campos de identificación y los intervalos de reporte ayuda a depurar dispositivos que no aparecen en la plataforma.
- Tener expectativas claras sobre el protocolo facilita la coordinación con el proveedor o fabricante cuando surjan comportamientos inusuales.

## Por qué usar Plaspy con este protocolo

Usar el Reachfar RF-V20 con Plaspy ofrece a las organizaciones una manera sencilla de recibir datos de ubicación, alarmas y estado del rastreador a través de un endpoint gestionado. Plaspy está diseñado para ingerir reportes estándar de rastreadores, detectar protocolos automáticamente y presentar telemetría y alertas para que los equipos puedan monitorear activos y responder ante eventos.

Para obtener más información sobre Plaspy y cómo la plataforma funciona con dispositivos como el RF-V20, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware y guía de implementación más actualizada, verifique la información en el sitio del fabricante https://www.reachfargps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
