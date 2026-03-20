---
slug: /cantrack/gt02/protocol
id: gt02-protocol
sidebar_label: Protocol
title: CanTrack - GT02 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador GPS CanTrack GT02 con Plaspy y permitir seguimiento de vehículos en tiempo real
keywords:
  - Protocolo CanTrack GT02
  - CanTrack GT02 GPS
  - Rastreo CanTrack GT02
  - Compatibilidad CanTrack GT02
  - Comunicación CanTrack GT02
  - CanTrack GT02 GPRS
  - Rastreador CanTrack Plaspy
  - Rastreo vehicular GT02
  - Protocolo rastreador GPS Plaspy
  - Seguimiento de flotas CanTrack GT02
---

# CanTrack - Protocolo GT02

Esta página documenta el contexto público del protocolo para usar el rastreador CanTrack GT02 con Plaspy. Explica cómo el GT02 suele reportar ubicación y estado usando GSM GPRS y GPS, y cómo esos reportes se interpretan en un endpoint de servidor para seguimiento y monitoreo vehicular en tiempo real.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto de los mensajes puede variar según la versión de firmware del GT02, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público, no sensible, y en consideraciones prácticas de integración.

## Resumen del protocolo

El protocolo de comunicación define cómo el GT02 envía telemetría e información de eventos a un servidor remoto y cómo esos datos se representan para mapeo y notificaciones. En términos generales, el protocolo permite que el dispositivo se identifique, envíe actualizaciones de posición y estado, y transmita alarmas o eventos de configuración para que Plaspy presente datos de rastreo útiles.

- Envía actualizaciones periódicas de ubicación y reportes impulsados por eventos como exceso de velocidad o pérdida de alimentación
- Transmite identidad del equipo y marcas de tiempo para que Plaspy asocie los mensajes con el activo correcto
- Admite tanto reportes en tiempo real vía GPRS a un servidor de internet como reportes por SMS como mecanismo de respaldo
- Habilita funciones de monitoreo remoto como rastreo en vivo y entrega de alertas cuando Plaspy recibe y decodifica los reportes
- Permite que el GT02 envíe indicadores diagnósticos y de estado que ayudan a distinguir reportes normales de condiciones de alarma

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y selecciona automáticamente el manejador de protocolo apropiado para los dispositivos que reportan. Cuando un GT02 está configurado para apuntar al endpoint de Plaspy, usted normalmente no tendrá que seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy acepta reportes entrantes en un endpoint de servidor compartido y utiliza la identificación del dispositivo presente en los reportes para enrutar los mensajes
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el registro y la incorporación de equipos
- Plaspy detecta automáticamente el protocolo del rastreador cuando los mensajes llegan al endpoint común
- Si un dispositivo está configurado para enviar al endpoint de Plaspy debería reconocerse sin selección manual del protocolo
- La configuración correcta del dispositivo en el lado del rastreador es el requisito más habitual para una detección exitosa

## Transporte y contexto de conexión

El GT02 puede transmitir datos vía GPRS a un servidor en internet usando UDP o TCP según la configuración del equipo y las capacidades del firmware. Plaspy ofrece un endpoint público y un puerto donde los dispositivos correctamente configurados pueden entregar reportes.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host
- Plaspy server IP is 54.85.159.138 which can be used as an alternative to the domain
- The port is 8888 and the device may be configured using UDP or TCP on port 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica los ajustes en el equipo
- Elija UDP o TCP en el GT02 según el firmware del rastreador y el entorno de red

## Notas de compatibilidad del protocolo

- El comportamiento del protocolo GT02 puede variar entre versiones de firmware, por lo que el intervalo de mensajes y los campos disponibles pueden diferir
- Revisiones de hardware o variantes de cableado opcional pueden afectar los sensores disponibles y los tipos de eventos que el dispositivo reporta
- Algunas funciones del GT02, como reportes por SMS y monitoreo de voz, usan vías de transporte diferentes a GPRS y pueden requerir configuración adicional
- Seleccionar UDP o TCP en el dispositivo puede cambiar las características de entrega pero no altera el propósito general de los reportes
- Valide que el host y el puerto de reporte del dispositivo estén ajustados al endpoint de Plaspy para habilitar la detección automática
- Confirme siempre los detalles de compatibilidad según la documentación del fabricante para la unidad GT02 y la versión de firmware específica

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GT02 ayuda a asegurar la entrega confiable de datos, el mapeo preciso y la recepción oportuna de alertas cuando el dispositivo se usa con Plaspy. Entender el comportamiento de los reportes reduce el tiempo de configuración y facilita la resolución de problemas cuando los mensajes no aparecen como se espera.

- Garantiza que el rastreador esté configurado para reportar a d.plaspy.com o a la IP del servidor de Plaspy y al puerto correcto
- Ayuda a diagnosticar por qué un dispositivo podría no aparecer en Plaspy debido a una mala configuración del transporte o de la dirección del servidor
- Permite a los operadores ajustar los tipos de alarma y los intervalos de reporte esperados con las alertas y paneles de Plaspy
- Facilita la planificación del uso de datos y la conectividad al elegir entre modos de reporte UDP y TCP
- Simplifica la resolución de problemas en campo al enfocarse en puntos comunes de falla como el registro en la red y el host de reporte

## Por qué usar Plaspy con este protocolo

Usar el CanTrack GT02 con Plaspy centraliza la ubicación de vehículos, el manejo de alarmas y el historial de rastreo en una sola plataforma. El enfoque de endpoint compartido de Plaspy reduce la complejidad de configuración por dispositivo y la detección automática de protocolos ayuda a que los equipos comiencen a reportar con mínima intervención manual dentro de la plataforma.

Si desea explorar cómo funciona Plaspy con rastreadores como el GT02, conozca más en https://www.plaspy.com. Para variantes específicas del protocolo del dispositivo, notas de firmware y los detalles técnicos más recientes del fabricante, verifique la información actual en https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
