---
slug: /eelink/gpt60/protocol
id: gpt60-protocol
sidebar_label: Protocol
title: EElink - GPT60 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador EElink GPT60 y su compatibilidad con Plaspy, con notas prácticas de integración
keywords:
  - eelink gpt60 protocolo
  - eelink gpt60 protocolo gps
  - eelink gpt60 protocolo de comunicación
  - eelink gpt60 protocolo de rastreo
  - eelink gpt60 plaspy
  - eelink protocolo rastreador gps
  - compatibilidad de dispositivos plaspy
  - plaspy protocolo de rastreador
  - protocolo rastreador gps personal
  - integración rastreador gps plaspy
---

# EElink - Protocolo GPT60

Esta página describe el contexto público del protocolo para usar el rastreador EElink GPT60 con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, el papel del protocolo del rastreador para entregar ubicación y eventos, y qué revisar al configurar el equipo para que reporte a Plaspy. El objetivo es proporcionar información pública y no sensible para que administradores e integradores puedan prepararse para el despliegue.

Plaspy usa configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo en el GPT60 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conjuntos de comandos específicos del dispositivo y notas de firmware consulte la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación regula cómo el GPT60 intercambia telemetría, estado y eventos con un servidor como Plaspy. Para el GPT60 esto incluye ubicación basada en GNSS con respaldo por Wi‑Fi y LBS, informes de eventos como SOS y detección de caídas, y capacidades de configuración remota cuando el firmware y la implementación soportan EELINK 2.1.

- Permite el envío periódico y por evento de ubicación y estado a Plaspy para mapeo e historial.
- Transporta la identidad del dispositivo y su estado operativo para que Plaspy asocie los mensajes con el activo y perfil correctos.
- Entrega alertas y eventos como SOS, caída o notificaciones por vibración para manejo inmediato en Plaspy.
- Soporta configuración remota y actualización de parámetros desde sistemas backend cuando se implementa EELINK 2.1.
- Proporciona la telemetría necesaria para geocercas, alertas e inicio de sesiones de voz bidireccional mediante flujos de trabajo de plataforma de mayor nivel.

## Cómo Plaspy detecta el protocolo

Plaspy recibe telemetría de muchos modelos de rastreadores y utiliza un endpoint y puerto compartidos para aceptar reportes. Cuando un GPT60 está configurado para reportar al endpoint de Plaspy, la plataforma inspecciona la conexión entrante y el contexto del mensaje para identificar el protocolo y enrutar los datos a los manejadores adecuados. En la mayoría de los casos no es necesario seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- The common Plaspy port for device connections is 8888 and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint.
- If the GPT60 is properly pointed at d.plaspy.com or 54.85.159.138 and configured to use the supported transport, detection and data flow to Plaspy will begin without manual protocol selection.
- Confirm device reporting settings and APN or cellular configuration are correct on the device side to ensure messages reach Plaspy.

## Transporte y contexto de conexión

Las opciones de transporte afectan cómo el GPT60 envía datos a Plaspy. Dependiendo del firmware y la configuración del dispositivo, el GPT60 puede soportar tanto UDP como TCP. Plaspy acepta el tráfico de dispositivos en el mismo puerto para todos los modelos soportados, lo que simplifica la configuración del endpoint.

- El GPT60 puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita la versión del dispositivo y la configuración.
- Los dispositivos pueden apuntar al dominio de servidor de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y utiliza el mismo puerto en todos los equipos para simplificar la puesta en marcha.
- Usar el tipo de transporte correcto y la dirección del servidor en el dispositivo es esencial para que la telemetría y los eventos lleguen a Plaspy de forma confiable.
- Los ajustes de red como el APN y el registro celular afectan la entrega; verifique estos parámetros cuando los dispositivos no reporten.

## Notas de compatibilidad del protocolo

- La descripción del GPT60 indica soporte para EELINK 2.1 para configuración remota y telemetría; confirme esto en las notas de la versión de su firmware.
- Las versiones de firmware pueden cambiar la cadencia de mensajes, los tipos de eventos soportados y los comandos de configuración; siempre revise el build de firmware instalado.
- Revisiones de hardware o variantes regionales de firmware pueden modificar funciones disponibles como voz bidireccional o soporte para sensores Bluetooth.
- La preferencia de transporte entre UDP y TCP puede seleccionarse en la configuración del dispositivo; elija el transporte compatible con su red y su política organizacional.
- Es posible que los ajustes de servidor por defecto del fabricante necesiten actualizarse para apuntar el GPT60 a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Al integrar a gran escala, valide primero con un número reducido de dispositivos para confirmar el comportamiento antes del despliegue masivo.

## Por qué es importante conocer el protocolo

Comprender cómo se comunica el GPT60 ayuda a garantizar una configuración confiable, agilizar la resolución de problemas y lograr una operación predecible a largo plazo con Plaspy. Conocer las capacidades de alto nivel del protocolo facilita alinear la configuración del dispositivo, la red y los flujos de trabajo de Plaspy para alertas, geocercas y telemetría.

- Le ayuda a verificar el reporte correcto del dispositivo y la orientación al servidor para que los datos aparezcan en los paneles de Plaspy.
- Agiliza la resolución de problemas cuando faltan mensajes, guiando las comprobaciones de transporte, dirección del servidor y comportamiento del firmware.
- Sirve para planificar la vida útil de la batería y los intervalos de reporte al alinear el modo de telemetría del dispositivo con las necesidades de la plataforma.
- Mejora el manejo de eventos confirmando qué alertas puede generar y entregar el equipo a Plaspy.
- Facilita la coordinación entre la configuración en campo y los flujos de trabajo gestionados centralmente para geocercas, notificaciones y voz.

## Por qué usar Plaspy con este protocolo

Usar el GPT60 con Plaspy brinda a las organizaciones visibilidad continua sobre personas y activos portátiles, con énfasis en seguridad personal y alertas basadas en eventos. Plaspy recolecta la telemetría entregada por el GPT60 para que los equipos puedan mapear movimiento, responder a SOS y caídas, y combinar la telemetría con otras fuentes de datos para supervisión operativa.

Plaspy accepts device reports at d.plaspy.com and 54.85.159.138 on port 8888 using either UDP or TCP where the device supports it. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so properly configured GPT60 units typically do not require manual protocol selection inside the platform. Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device protocol and firmware details with the manufacturer at https://www.eelink.com.cn/. Protocol support, firmware behavior, and manufacturer implementation can change over time so checking the official manufacturer documentation ensures the most current and accurate device information.
