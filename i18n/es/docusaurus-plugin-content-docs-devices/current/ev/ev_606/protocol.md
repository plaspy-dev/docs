---
slug: /ev/ev_606/protocol
id: ev_606-protocol
sidebar_label: Protocol
title: EV - EV-606 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS EV EV-606 y cómo se comunica con Plaspy para reportar ubicación y alertas con fiabilidad
keywords:
  - protocolo EV EV-606
  - rastreador GPS EV-606
  - rastreador EV Plaspy
  - comunicación EV EV-606
  - protocolo de rastreo EV EV-606
  - protocolo GPS EV
  - seguimiento de activos EV
  - dispositivos compatibles Plaspy
  - rastreo en tiempo real EV-606
  - firmware EV-606
---

# EV - Protocolo EV-606

Esta página documenta el contexto público del protocolo para usar el rastreador EV EV-606 con Plaspy. Se centra en aspectos de comunicación de alto nivel que afectan la integración del equipo, los reportes y el comportamiento operativo sin exponer detalles privados del fabricante. El EV-606 es un rastreador versátil para personas y activos que utiliza GPS y CellLocate para posicionamiento incluso en entornos con cobertura limitada. Incluye características como un sensor 3D G para alarmas por movimiento y golpes, monitoreo de voz y comunicación bidireccional, registro local y batería recargable y reemplazable.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo apunta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página enfatiza el transporte y el contexto operativo general, y recomienda consultar con el fabricante para detalles específicos de firmware.

## Resumen del protocolo

El protocolo del rastreador regula cómo el EV-606 envía posición, estado y eventos a un servidor remoto y cómo el servidor puede enviar comandos o actualizaciones de configuración cuando están soportados. Para la integración con Plaspy, el protocolo permite la identificación del equipo, reportes periódicos y basados en eventos, y la transmisión de alarmas y telemetría que Plaspy presenta en la plataforma.

- Facilita la transmisión de ubicación, eventos de movimiento y señales de alarma desde el dispositivo hacia Plaspy.
- Transporta información de identidad del equipo para que Plaspy asocie los reportes con un activo registrado.
- Soporta reportes periódicos y subidas por eventos como SOS, geocerca o alarmas de movimiento.
- Permite reenvío de datos tras recuperación de áreas sin GPRS y entrega de ubicaciones registradas desde memoria flash interna.
- Puede integrarse con funciones del servidor como actualizaciones de firmware OTA cuando el fabricante y el dispositivo lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes y datos de los dispositivos usando un endpoint servidor uniforme e identifica automáticamente el protocolo del rastreador que envía los reportes. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo en Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy y utilice un transporte compatible.

- Plaspy escucha en un único puerto compartido para todos los dispositivos soportados y realiza la identificación del protocolo de forma automática.
- El endpoint estándar de Plaspy para reportes de dispositivos es d.plaspy.com y la plataforma también acepta conexiones al servidor IP 54.85.159.138.
- Los dispositivos registrados para enviar datos a Plaspy típicamente no requieren selección manual de protocolo dentro de la plataforma si reportan correctamente.
- Plaspy admite tanto reportes UDP como TCP cuando el firmware del rastreador soporta esos transportes.
- Una identidad de dispositivo correcta y una cadencia de reporte adecuada ayudan a Plaspy a vincular los mensajes entrantes con el registro del activo correspondiente.

## Transporte y contexto de conexión

Dado que distintas versiones de firmware y configuraciones del EV-606 pueden soportar diferentes transportes, el EV-606 puede configurarse para usar UDP o TCP al enviar reportes a Plaspy. El siguiente contexto de conexión explica cómo apuntar el dispositivo a Plaspy y las consideraciones comunes de transporte para una comunicación confiable.

- El EV-606 puede configurarse para reportar al endpoint d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados para simplificar la configuración y el alojamiento.
- Elija UDP cuando se requiera un reporte ligero y sin conexión y el firmware del equipo lo soporte.
- Elija TCP cuando el dispositivo y las condiciones de red necesiten entrega orientada a conexión y retransmisión.
- Cortafuegos de red y NAT de operadores móviles pueden afectar la conectividad, por lo que verifique que el tráfico saliente del dispositivo hacia el endpoint y puerto de Plaspy esté permitido.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento exacto de los reportes del EV-606; confirme la compatibilidad con la versión de firmware instalada.
- Las revisiones de hardware y conjuntos de funciones opcionales como voz o sensores adicionales pueden influir en qué campos de telemetría se reportan.
- Algunos despliegues del fabricante alteran los ajustes predeterminados del servidor; asegúrese de que el dispositivo esté configurado para enviar a d.plaspy.com o 54.85.159.138 en el puerto compartido.
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y las capacidades de la red local.
- Funciones como el reenvío de datos tras áreas sin GPRS y el registro local pueden afectar cuándo se transmiten datos históricos de posición.
- Verifique siempre el comportamiento en Plaspy con la orientación del fabricante para soporte de comandos específicos del equipo y capacidad de actualización OTA.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del EV-606 le ayuda a configurar los dispositivos correctamente, interpretar su comportamiento en Plaspy y diagnosticar problemas de conectividad o reporte sin necesidad de ingeniería inversa a bajo nivel. Conocer las expectativas de transporte y reporte reduce tiempos de inactividad y mejora la fiabilidad de los datos.

- Garantiza que el dispositivo apunte al endpoint correcto de Plaspy para que los reportes lleguen sin intervención manual.
- Ayuda a solucionar reportes faltantes comprobando el tipo de transporte, acceso a la red y comportamiento del firmware.
- Aclara las expectativas para subidas por eventos como SOS, geocerca y alarmas de movimiento.
- Orienta las decisiones de configuración sobre intervalos de reporte y gestión de energía para equilibrar la vida de la batería y la frescura de los datos.
- Facilita la validación de que los registros históricos y los reenvíos tras áreas sin cobertura están llegando según lo esperado.

## Por qué usar Plaspy con este protocolo

Usar dispositivos EV-606 con Plaspy ofrece una forma práctica de centralizar el seguimiento, las alarmas y la telemetría para la supervisión de personas y activos. Plaspy presenta la ubicación y los eventos del rastreador en una plataforma unificada, permitiendo a las organizaciones recibir actualizaciones en tiempo real, consultar registros históricos y recibir notificaciones de alarma para supervisión operativa.

Si está evaluando el EV-606 para usar con Plaspy, configure el dispositivo para que reporte al endpoint y transporte de Plaspy que se ajuste a sus necesidades de despliegue. Conozca más sobre Plaspy y las capacidades de la plataforma en https://www.plaspy.com. Para notas específicas más recientes del protocolo del dispositivo, comportamiento de firmware y detalles de implementación, verifique la información actual en el sitio del fabricante en http://www.eviewltd.com/ ya que los protocolos de dispositivos y las funciones de firmware pueden cambiar con el tiempo.
