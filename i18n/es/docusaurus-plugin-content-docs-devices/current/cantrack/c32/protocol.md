---
slug: /cantrack/c32/protocol
id: c32-protocol
sidebar_label: Protocol
title: CanTrack - C32 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador CanTrack C32 con Plaspy y lograr seguimiento fiable de vehículos y e-bikes
keywords:
  - Protocolo CanTrack C32
  - GPS CanTrack C32
  - CanTrack C32 Plaspy
  - Compatibilidad rastreador C32
  - Protocolo de comunicación C32
  - Compatibilidad GT06 CanTrack
  - Compatibilidad GPS Plaspy
  - Rastreo vehicular CanTrack C32
  - GPS e-bike C32
  - Rastreador GPS moto C32
---

# CanTrack - Protocolo C32

Esta página ofrece un contexto público del protocolo para usar el rastreador CanTrack C32 con la plataforma Plaspy. Explica cómo el dispositivo se comunica de forma general con un servidor Plaspy y qué aspectos del reporte y la conectividad del equipo son relevantes para una integración exitosa, sin revelar detalles de implementación sensibles.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del C32 y las variantes del protocolo pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto de comunicación público y en consideraciones operativas de alto nivel.

## Resumen del protocolo

El protocolo de comunicación del C32 define cómo el rastreador se identifica, informa posición y estado, y acepta comandos remotos opcionales. Para usted, que integra dispositivos C32 con Plaspy, lo importante es que el equipo pueda entregar datos de ubicación, estado y eventos a un endpoint alcanzable de Plaspy y que soporte la familia de protocolos comúnmente usada por dispositivos CanTrack.

- El protocolo permite al equipo reportar ubicación en tiempo real y datos telemétricos a un servidor remoto.
- Los campos de identificación en los reportes permiten a Plaspy asociar mensajes entrantes con un dispositivo registrado.
- Los mensajes de estado y eventos transmiten alarmas, estado de ignición, voltaje externo y otra telemetría que Plaspy puede almacenar y mostrar.
- Soporte para actualizaciones remotas por OTA y variantes de protocolo como GT06 son detalles de implementación que suele exponer el fabricante.
- El protocolo determina si el rastreador envía reportes periódicos, actualizaciones impulsadas por eventos o ambas.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para recibir mensajes de muchos modelos de rastreadores usando un endpoint unificado y para determinar automáticamente el protocolo empleado por una conexión entrante. En la mayoría de los casos, basta con configurar el dispositivo para que reporte al endpoint de Plaspy y no se requiere seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en un solo puerto compartido para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Si usted configura el C32 para enviar datos al endpoint de Plaspy, la plataforma intentará emparejar los datos entrantes con un protocolo conocido.
- Normalmente no es necesario elegir un protocolo dentro de Plaspy cuando el dispositivo reporta correctamente al endpoint.
- Una identificación de dispositivo adecuada y el reporte de un ID único facilitan la detección automática y el onboarding.
- Si la detección automática falla, revisar la configuración del dispositivo y la documentación del fabricante suele resolver los problemas más comunes.

## Transporte y contexto de conexión

El rastreador C32 puede configurarse para enviar sus reportes por UDP o TCP, según la capacidad y configuración del dispositivo. Para la integración con Plaspy, los equipos deben apuntar a la dirección y puerto del servidor Plaspy para que los mensajes lleguen a la plataforma de forma confiable.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y preferencia del usuario.
- Asegúrese de que el enrutamiento de red y las reglas de firewall permitan conexiones salientes desde los equipos hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Se reporta que el C32 es compatible con Plaspy, pero el comportamiento puede variar por compilación de firmware y revisión de hardware.
- Los dispositivos CanTrack suelen ofrecer familias de protocolo como GT06, que pueden ser seleccionables o estar presentes por defecto según el firmware.
- La elección de transporte TCP versus UDP puede afectar las características de entrega y debe seleccionarse según la red y las capacidades del rastreador.
- Las actualizaciones OTA del fabricante pueden cambiar el comportamiento del protocolo o los campos de los mensajes; valide después de cada actualización de firmware.
- Revisiones de hardware o funciones opcionales como corte de motor o sensores externos pueden añadir o quitar campos de telemetría.
- Confirme siempre ajustes del equipo como intervalo de reporte, activación de alarmas y dirección del servidor al incorporar dispositivos.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el C32 a nivel de protocolo ayuda a asegurar una configuración fluida, un flujo de datos confiable y una resolución de problemas eficiente cuando usa Plaspy. Saber qué mensajes envía el dispositivo y cómo se conecta reduce la incertidumbre durante la puesta en marcha y al diagnosticar problemas de conectividad o datos.

- Ayuda a verificar que el equipo esté enviando las identificaciones y los mensajes de posición esperados a Plaspy.
- Permite decidir de forma informada entre TCP y UDP y comprender cómo eso afecta la entrega y retransmisión de mensajes.
- Facilita el diagnóstico cuando los reportes no aparecen en Plaspy, al acotar las causas posibles a configuración, transporte o firmware.
- Hace más sencillo confirmar que funciones como OTA, control de inmovilizador o telemetría de sensores estén disponibles y correctamente configuradas.
- Recomienda validaciones rutinarias después de actualizaciones de firmware o cambios de hardware para mantener un comportamiento consistente.

## Por qué usar Plaspy con este protocolo

Usar dispositivos CanTrack C32 con Plaspy ofrece una opción práctica para centralizar el monitoreo de vehículos, motocicletas o e-bikes. La detección automática de protocolos de Plaspy y el endpoint de conexión unificado simplifican el onboarding, de modo que flotas y usuarios individuales puedan enfocarse en la visibilidad operativa en lugar de gestionar protocolos a bajo nivel.

Plaspy soporta la recepción de reportes de dispositivos en d.plaspy.com y 54.85.159.138 en el puerto 8888 usando UDP o TCP, y la plataforma detecta automáticamente los protocolos de los rastreadores cuando los equipos están correctamente configurados para reportar a ese endpoint. Para saber más sobre Plaspy y cómo puede respaldar su flota CanTrack visite https://www.plaspy.com. Para los documentos de protocolo específicos del dispositivo, notas de firmware y detalles de hardware más actualizados consulte el sitio del fabricante https://www.cantrackgps.com/ ya que el soporte de protocolos y el comportamiento del firmware pueden cambiar con el tiempo.
