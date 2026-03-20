---
slug: /sinotrack/st_915/protocol
id: st_915-protocol
sidebar_label: Protocol
title: SinoTrack - ST-915 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del SinoTrack ST 915 y cómo se comunica con Plaspy para rastreo y telemetría
keywords:
  - SinoTrack ST 915
  - protocolo ST 915
  - protocolo SinoTrack
  - protocolo GPS ST 915
  - ST 915 Plaspy
  - compatibilidad Plaspy
  - protocolo rastreador GPS
  - protocolo rastreo vehicular
  - rastreador de activos ST 915
  - comunicación GNSS GPRS
---

# SinoTrack - Protocolo ST-915

Esta página presenta el contexto público del protocolo para usar el rastreador SinoTrack ST-915 con Plaspy. Aquí se explica cómo el dispositivo reporta posiciones GNSS y telemetría a Plaspy, cómo se suele configurar la unidad para apuntar a los endpoints de Plaspy y qué papel juega el protocolo de comunicación del rastreador en una integración exitosa.

Plaspy emplea una configuración de conexión compartida entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo debidamente configurado envía reportes. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público disponible y en consideraciones prácticas de integración.

## Resumen del protocolo

El ST-915 comunica ubicación y telemetría básica mediante GSM GPRS hacia un servidor remoto. El dispositivo usa comandos SMS para la configuración del APN y del servidor, lo que permite que los integradores dirijan los reportes a Plaspy en lugar de, o además de, los servicios del proveedor. El protocolo define cómo el rastreador se identifica, cómo se empaquetan los mensajes de posición y estado, y cómo el servidor recibe datos útiles para mapas e informes.

- Permite que el rastreador envíe periódica o por eventos las posiciones GNSS y la telemetría a una plataforma backend.
- Incluye información de identificación para que Plaspy pueda asociar los mensajes entrantes con el registro de dispositivo correcto.
- Transporta telemetría esencial como coordenadas con sello temporal, estado de movimiento e indicadores básicos de salud del equipo.
- Proporciona la estructura que Plaspy necesita para ingerir, decodificar y presentar datos de ubicación e historial.
- Está influenciado por ajustes de firmware y opciones configurables vía SMS que controlan intervalos de reporte y destino del servidor.

## Detección del protocolo por parte de Plaspy

Plaspy recibe reportes de muchos modelos de rastreadores en un endpoint y puerto compartidos y detecta automáticamente el protocolo entrante, por lo que normalmente no es necesario seleccionar un protocolo manualmente. Cuando un SinoTrack ST-915 está configurado para enviar datos a Plaspy, el servidor reconoce los mensajes entrantes y los enruta al perfil del dispositivo correcto dentro de la plataforma.

- Plaspy escucha en un único puerto para todos los dispositivos, lo que simplifica la configuración para integradores y técnicos de campo.
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y apunta a un endpoint público.
- La dirección IP del servidor de Plaspy para reportes es 54.85.159.138, por lo que los dispositivos pueden apuntar tanto al dominio como a esta IP.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que llegan datos desde un dispositivo correctamente configurado.
- En configuraciones típicas, solo necesita apuntar el ST-915 a la dirección de Plaspy y los reportes deberían comenzar sin que usted seleccione un protocolo dentro de Plaspy.

## Transporte y contexto de conexión

Las opciones de transporte pueden afectar la fiabilidad y el comportamiento según las condiciones de la red y las capacidades del equipo. El ST-915 soporta reportes vía GPRS y normalmente se configura por SMS para apuntar a Plaspy. En la práctica, el dispositivo puede usar UDP o TCP al enviar datos a Plaspy, dependiendo de la configuración del rastreador y del soporte del firmware.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Plaspy acepta reportes de dispositivos en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 al configurar la dirección del servidor por SMS.
- La elección entre UDP y TCP normalmente se realiza en el equipo mediante configuración por SMS y puede influir en el comportamiento de retransmisión y entrega.
- Confirme que el modo de transporte elegido coincida con las opciones de firmware de su ST-915 y con el comportamiento esperado en su despliegue.

## Notas sobre compatibilidad del protocolo

- El ST-915 es compatible con Plaspy cuando se configura para reportar a los endpoints de Plaspy mediante las cadenas de servidor por SMS.
- Las revisiones de firmware pueden modificar el conjunto exacto de mensajes y su comportamiento; las comprobaciones de compatibilidad deben incluir la confirmación de la versión de firmware.
- Revisiones de hardware o builds de firmware opcionales del fabricante pueden alterar las funciones disponibles y las opciones de transporte.
- La selección de transporte entre UDP y TCP puede verse limitada por el firmware o por el comportamiento de la red del operador en su región.
- La configuración del servidor vía SMS debe usarse con cuidado para asegurar que el APN y los valores del servidor sean correctos para su SIM y red.
- Valide cualquier requisito de funciones avanzadas contra la documentación del fabricante antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el ST-915 ayuda a garantizar reportes confiables, un mapeo preciso en Plaspy y una resolución de problemas más rápida cuando surjan incidencias. Tener familiaridad con el protocolo y las opciones de transporte reduce el tiempo de integración y mejora la confianza operativa.

- Facilita confirmar que un dispositivo está correctamente apuntado a Plaspy y usando el transporte esperado.
- Ayuda a diagnosticar reportes perdidos, problemas de precisión GPS o identificación incorrecta de dispositivos en Plaspy.
- Contribuye a optimizar los intervalos de reporte para equilibrar la vida de batería y la frescura de los datos.
- Aclara qué revisar en el equipo cuando ocurran anomalías de red o telemetría.
- Fomenta verificaciones coordinadas de la versión de firmware, la cadena de servidor por SMS y la configuración SIM/APN durante la puesta en servicio.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el SinoTrack ST-915 ofrece un camino sencillo hacia el rastreo en tiempo real, la reproducción de historial y el reporte básico de telemetría para vehículos y activos. La larga autonomía en espera y el diseño robusto del ST-915 lo hacen idóneo para despliegues prolongados donde un enlace fiable a Plaspy es importante para la monitorización y las tareas de recuperación. Dado que el dispositivo puede ser apuntado a Plaspy mediante comandos SMS, la integración a menudo se completa sin hardware de aprovisionamiento especializado.

Si desea conocer más sobre la gestión de dispositivos, reportes y funciones de flota en Plaspy visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información más reciente y la documentación de firmware del fabricante en https://www.sinotrackgps.com/ antes del despliegue.
