---
slug: /sinotrack/st_909l/protocol
id: st_909l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-909L Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SinoTrack ST-909L y su comunicación con Plaspy para seguimiento y alertas de flotas
keywords:
  - protocolo SinoTrack ST-909L
  - protocolo GPS ST-909L
  - protocolo SinoTrack
  - rastreador GPS ST 909L
  - compatibilidad rastreador GPS Plaspy
  - integración rastreador Plaspy
  - seguimiento vehicular SinoTrack
  - rastreo de flotas ST-909L
  - servidor APN configurable por SMS
  - seguimiento en tiempo real Plaspy
---

# SinoTrack - Protocolo ST-909L

Esta página explica el contexto público del protocolo para usar el SinoTrack ST-909L con Plaspy. Se centra en los aspectos de comunicación que importan al apuntar un ST-909L a Plaspy para seguimiento en tiempo real de vehículos, alertas y telemetría centralizada de flotas. El ST-909L es un rastreador GPS 4G compacto integrado en una carcasa de cargador para coche de aluminio y permite configurar por SMS la dirección del servidor y el APN para el reporte a terceros.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y los informes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda validar y configurar el equipo antes de un despliegue masivo.

## Resumen del protocolo

El protocolo de comunicación del ST-909L regula cómo el rastreador se identifica, envía actualizaciones de posición y estado, y reporta eventos de alarma a un servidor remoto como Plaspy. La vista pública del protocolo se enfoca en los tipos de información transmitida y en los pasos de configuración necesarios para enrutar esos mensajes a un servidor de terceros.

- Permite que el rastreador transmita ubicación, velocidad y telemetría de estado a un servidor remoto para mapeo y registro.
- Transmite información de alarmas y eventos como violaciones de geocerca, exceso de velocidad y detección de impactos para notificación inmediata.
- Permite apuntar el dispositivo a una dirección de servidor y APN personalizada mediante comandos SMS para integrarlo con terceros.
- Soporta métodos de reporte de respaldo, como reportes por enlace SMS cuando no hay conectividad de datos.
- Proporciona identificación del dispositivo y registros con marca de tiempo para que Plaspy pueda asociar los informes con el activo y la línea de tiempo correctos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador utilizado por cada dispositivo. Cuando el ST-909L está configurado para reportar al endpoint de Plaspy, por lo general usted no necesita seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en el dominio del servidor compartido d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el alta de equipos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy, facilitando la puesta en marcha para la mayoría de usuarios.
- Si el ST-909L se ha configurado por SMS correctamente para apuntar a Plaspy, los reportes y alarmas deberían aparecer en su cuenta de Plaspy sin que usted tenga que seleccionar el protocolo manualmente.
- Para resolver problemas, confirme que el dispositivo esté configurado con la dirección de servidor correcta y que el APN y la SIM funcionen en la red celular.

## Transporte y contexto de conexión

Las opciones de conexión para el ST-909L forman parte del contexto público de comunicación y afectan cómo la telemetría llega a Plaspy. El dispositivo puede configurarse para usar UDP o TCP según las capacidades del equipo y la configuración por SMS.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para apuntado directo.
- El puerto es 8888 y el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita la configuración masiva y el ajuste por SMS.
- Los dispositivos pueden configurarse por SMS para apuntar tanto al nombre de dominio como a la IP numérica dependiendo de la preferencia del usuario o del soporte del equipo.
- Asegúrese de que la SIM y la configuración APN permitan datos GPRS para que los mensajes se entreguen al endpoint de Plaspy de forma confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción pueden cambiar los informes disponibles, el soporte de comandos o los comportamientos por defecto; siempre confirme la versión de firmware del dispositivo.
- Revisión de hardware o variantes regionales pueden afectar las bandas celulares compatibles y, por tanto, la conectividad con la red y el APN elegidos.
- La selección de transporte (UDP frente a TCP) es una opción de configuración del dispositivo y repercute en la forma en que el rastreador se comunica con el endpoint de Plaspy.
- Los comandos de configuración por SMS son el método típico para establecer la IP del servidor y el APN, pero la sintaxis puede variar según firmware y región.
- Valide la compatibilidad con un solo equipo antes de un despliegue masivo para confirmar que los reportes, alarmas y la reproducción de historial aparezcan en Plaspy según lo esperado.
- Consulte la documentación de SinoTrack para limitaciones específicas del modelo o requisitos regulatorios regionales que puedan afectar el despliegue.

## Por qué es importante entender el protocolo

Comprender el comportamiento básico de comunicación del ST-909L ayuda a garantizar una integración confiable con Plaspy y facilita la resolución de problemas y la validación durante el despliegue.

- Confirma la selección correcta de APN y SIM para que el dispositivo pueda alcanzar Plaspy para reportes en tiempo real.
- Ayuda a verificar que las alarmas, como geocerca y exceso de velocidad, se entreguen e interpreten correctamente en Plaspy.
- Facilita el diagnóstico de problemas de conectividad comprobando si el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Orienta la decisión sobre el transporte entre UDP y TCP según las condiciones de la red y el soporte del equipo.
- Reduce el tiempo de despliegue al asegurarse de que los comandos SMS de configuración se apliquen correctamente para enrutar la telemetría a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el ST-909L junto con Plaspy ofrece un camino directo para centralizar la telemetría de vehículos, las alertas y los historiales de rutas. La posibilidad de configurar por SMS el servidor y el APN del ST-909L facilita redirigir los reportes desde la plataforma del fabricante hacia Plaspy, habilitando ubicación en tiempo real, alertas de geocerca, notificaciones de exceso de velocidad y gestión consolidada de la flota bajo una sola cuenta.

Para saber más sobre Plaspy y cómo soporta rastreadores de terceros como el SinoTrack ST-909L visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar la información específica del dispositivo y la sintaxis de los comandos SMS en el sitio oficial de SinoTrack https://www.sinotrackgps.com/.
