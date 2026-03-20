---
slug: /cantrack/gt06_v2/protocol
id: gt06_v2-protocol
sidebar_label: Protocol
title: CanTrack - GT06 v2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público CanTrack GT06 v2 para integración con Plaspy y configuraciones comunes de conexión para reportes GPS fiables
keywords:
  - Protocolo CanTrack GT06 v2
  - Protocolo GPS CanTrack GT06 v2
  - Protocolo de rastreo CanTrack GT06 v2
  - Comunicación GT06 v2
  - Compatibilidad GT06 v2
  - Protocolo CanTrack Plaspy
  - Compatibilidad rastreador GPS Plaspy
  - Rastreo de vehículos GT06 v2
  - Gestión de flotas CanTrack
  - Rastreo GPRS GT06 v2
---

# CanTrack - Protocolo GT06 v2

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack GT06 v2 con Plaspy. Resume cómo el dispositivo suele reportar ubicación e información de estado a través de redes GSM GPRS y de qué manera Plaspy consume esos reportes para monitoreo en tiempo real, alarmas e historial de ubicaciones. El GT06 v2 es un rastreador vehicular compacto que puede enviar posición por GPRS y alertas por SMS; esta documentación se centra en el contexto de comunicación público más que en detalles internos del firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a la plataforma. Los dispositivos configurados para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888 llegarán al endpoint de Plaspy. El comportamiento en tiempo de ejecución de una unidad GT06 v2 concreta puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento del protocolo debe validarse con la documentación oficial de CanTrack para detalles específicos de firmware.

## Resumen del protocolo

El protocolo de comunicación GT06 v2 es el conjunto de reglas y secuencias de mensajes que permiten al rastreador enviar posición GPS, estado y alarmas desde el dispositivo hasta un endpoint en internet como Plaspy. En la práctica, el protocolo permite al dispositivo identificarse, reportar telemetría y enviar mensajes basados en eventos para que los servicios de ubicación y las alertas puedan ser procesados por sistemas de gestión de flotas o activos.

- Permite que el rastreador reporte coordenadas GPS, hora y estado básico a un servidor remoto para seguimiento en tiempo real.
- Transmite notificaciones de alarmas y eventos como exceso de velocidad, SOS, estado ACC y pérdida de alimentación hacia la plataforma backend.
- Proporciona datos de identificación para que Plaspy pueda asociar los reportes entrantes con una instalación de dispositivo específica.
- Admite reportes periódicos y basados en eventos para equilibrar la precisión de la ubicación y el uso de datos.
- Habilita comandos remotos o configuración cuando el dispositivo y el operador de red lo permiten.
- Sirve como base para el manejo de alarmas, geovallas y reproducción histórica en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y aplica detección automática para determinar el protocolo entrante del rastreador. Cuando un GT06 v2 está configurado para reportar a Plaspy, por lo general no es necesario seleccionar el protocolo manualmente dentro de la plataforma; Plaspy reconoce el formato y asocia el dispositivo automáticamente.

- Plaspy escucha reportes de dispositivos en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, que es el puerto 8888, lo que simplifica la configuración.
- Los dispositivos pueden estar configurados para usar UDP o TCP para enviar reportes a Plaspy, según la configuración del rastreador y el comportamiento de la red.
- Cuando llega un reporte con el formato correcto, Plaspy aplica rutinas de detección integradas, por lo que normalmente no se requiere seleccionar el protocolo manualmente.
- Una identificación adecuada del dispositivo y una configuración correcta en el rastreador aseguran que los reportes se atribuyan correctamente en Plaspy.

## Transporte y contexto de conexión

El GT06 v2 puede transmitir datos de ubicación a través de la red GSM GPRS y puede configurarse para enviar esos datos a un servidor en internet. En el contexto de Plaspy, los detalles de transporte se mantienen intencionalmente consistentes entre los dispositivos compatibles para agilizar la configuración.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para alcanzar Plaspy.
- Plaspy puede direccionarse por nombre de host d.plaspy.com o por la IP del servidor 54.85.159.138 al configurar los parámetros GPRS del rastreador.
- Plaspy usa el mismo puerto para todos los dispositivos, reduciendo errores de configuración y simplificando el despliegue.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega; seleccione el transporte que soporte el firmware específico del GT06 v2 y las condiciones de la red.
- Verifique que la APN y las credenciales GPRS en el dispositivo estén correctas para que el rastreador pueda establecer una sesión de datos y enviar reportes al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades GT06 v2 pueden cambiar los tipos de mensajes disponibles, los intervalos de reporte y los comandos remotos soportados.
- Las revisiones de hardware o funciones opcionales (por ejemplo llamada bidireccional o salidas para cortar motor) pueden afectar qué señales se reportan o son controlables de forma remota.
- Los valores predeterminados de fábrica del fabricante pueden usar el reporte por SMS; cambiar a reporte por GPRS requiere actualizar la configuración del dispositivo para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La selección del transporte es importante: algunas instalaciones prefieren UDP por menor sobrecarga, mientras que otras usan TCP para entrega más fiable cuando está disponible.
- Valide siempre los detalles de identificación del dispositivo para que Plaspy pueda relacionar los reportes entrantes con el activo correcto.
- Consulte las notas de versión del firmware de CanTrack al solucionar diferencias de comportamiento entre dispositivos.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GT06 v2 ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y lograr un funcionamiento predecible en Plaspy. Estar al tanto de las opciones de transporte, la variación de firmware y el comportamiento de los reportes mejora el éxito del despliegue y el monitoreo operativo.

- Permite una configuración más rápida al confirmar que el rastreador apunta al endpoint y puerto correctos de Plaspy.
- Facilita la resolución de problemas por reportes faltantes o retrasados al revisar transporte, APN y comportamiento del firmware del dispositivo.
- Ayuda a tomar decisiones informadas sobre intervalos de reporte y disparadores de eventos para equilibrar uso de datos y precisión de posición.
- Contribuye a interpretar alarmas y campos de estado del dispositivo al verificar cableado de sensores y configuración.
- Mejora la confiabilidad a largo plazo alineando versiones de firmware y revisiones de hardware con el comportamiento esperado en la plataforma.

## Por qué usar Plaspy con este protocolo

Usar un CanTrack GT06 v2 con Plaspy ofrece a las organizaciones un camino sencillo hacia visibilidad vehicular en tiempo real, notificaciones de eventos y seguimiento histórico centralizado. Plaspy recibe y normaliza los reportes entrantes para que los gestores de flota puedan ver ubicaciones, recibir alarmas y generar informes sin gestionar endpoints de servidor personalizados para cada modelo de dispositivo.

To learn more about how Plaspy handles device connections and fleet features, visit https://www.plaspy.com. For the most current device specific protocol details, firmware changes, and manufacturer guidance, verify information with CanTrack at https://www.cantrackgps.com/ as device behavior and protocol support can change over time.
