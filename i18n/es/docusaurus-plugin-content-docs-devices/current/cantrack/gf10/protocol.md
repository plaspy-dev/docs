---
slug: /cantrack/gf10/protocol
id: gf10-protocol
sidebar_label: Protocol
title: CanTrack - GF10 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador CanTrack GF10 y cómo comunica con Plaspy para integración y reportes confiables
keywords:
  - protocolo CanTrack GF10
  - protocolo GPS CanTrack GF10
  - compatibilidad GF10 con Plaspy
  - protocolo de comunicación GF10
  - protocolo de rastreo GF10
  - integración dispositivo CanTrack GF10
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular GF10
  - rastreo en tiempo real GF10
  - guía protocolo GF10
---

# CanTrack - Protocolo GF10

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack GF10 Finger Tracker con Plaspy. Explica cómo se comunica el dispositivo en términos generales, qué opciones de transporte acepta Plaspy y qué esperar durante la integración, sin exponer detalles sensibles sobre parsers o formatos propietarios.

El CanTrack GF10 es un rastreador GPS compacto que soporta reportes por GPS, LBS y AGPS, y ofrece funciones como geo-cercas, alertas de batería baja, detección de manipulación por vibración, modos de ahorro de energía y almacenamiento local de datos. Plaspy usa ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del GF10 es el método de reporte del dispositivo que permite enviar información de ubicación, estado y alarmas a una plataforma remota como Plaspy. Esta sección explica el papel de ese canal de comunicación sin detallar formatos de paquete propietarios ni implementaciones de parsers.

- Permite al GF10 enviar datos de posición derivados de GPS, LBS y AGPS a Plaspy para visibilidad en tiempo real.
- Transmite información de estado del dispositivo, como nivel de batería, alertas de movimiento o vibración y indicadores de almacenamiento en memoria.
- Envía eventos de geo-cerca y alarmas por batería baja para que aparezcan en las notificaciones de Plaspy.
- Soporta modos de transmisión continuos y de ahorro de energía para equilibrar frecuencia de reporte y duración de batería.
- Conserva datos almacenados localmente cuando no hay enlace GSM y reenvía los reportes guardados cuando se restablece la conectividad.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para recibir reportes de rastreadores en un único endpoint compartido y determinar automáticamente el protocolo correcto. Usted normalmente no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy detecta el protocolo automáticamente cuando un dispositivo configurado correctamente envía datos a la plataforma.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos.
- Si el GF10 apunta al endpoint de Plaspy y emplea uno de los transportes soportados, Plaspy asociará los datos entrantes con un protocolo soportado y los procesará.
- La selección manual de protocolo dentro de Plaspy suele ser innecesaria si el dispositivo envía al endpoint y puerto compartidos.
- Para una detección fiable, asegúrese de que el GF10 esté configurado para reportar el ID del dispositivo y el estado según las instrucciones del fabricante.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el GF10 se comunica con Plaspy y las convenciones de dirección y puerto a usar al configurar el rastreador. Plaspy acepta el GF10 a través de transportes IP comunes soportados por el dispositivo, y usar el endpoint correcto facilita la integración.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para usuarios que prefieran configurar por nombre de host o por dirección numérica.
- El puerto es 8888 y los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Configure el dispositivo con UDP o TCP en el puerto 8888; elija el transporte que el firmware del GF10 soporte y que mejor se adapte a su entorno de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la complejidad al desplegar múltiples modelos de rastreadores.
- Verifique que el dispositivo apunte a d.plaspy.com o 54.85.159.138 y que los firewalls de su red permitan tráfico saliente en el puerto 8888 para el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción del GF10 pueden modificar comandos disponibles y el comportamiento de reporte; revise siempre las notas de la versión del firmware.
- Las revisiones de hardware o variantes regionales pueden cambiar los transportes soportados o la configuración de reporte por defecto del GF10.
- La configuración del fabricante vía SMS o servidor de configuración es la fuente autorizada para los ajustes del dispositivo que afectan el comportamiento del protocolo.
- Elegir TCP frente a UDP puede modificar las características de entrega; confirme cuál transporte maneja mejor la versión de firmware instalada.
- La detección automática de Plaspy contempla los estilos de reporte comunes del GF10, pero personalizaciones inusuales del fabricante pueden requerir verificación.
- Valide el comportamiento esperado enviando reportes de prueba al endpoint de Plaspy y revisando los mensajes recibidos en los registros de la plataforma.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GF10 ayuda a asegurar una configuración precisa, agilizar la resolución de problemas y garantizar una operación confiable a largo plazo con Plaspy. Incluso un conocimiento básico del modelo de reporte reduce tiempos de integración y sorpresas operativas.

- Le ayuda a configurar el dispositivo para que reporte a d.plaspy.com o 54.85.159.138 usando el transporte soportado.
- Facilita confirmar que el dispositivo está enviando los identificadores necesarios para que Plaspy detecte y procese automáticamente los reportes.
- Mejora la resolución de problemas cuando las actualizaciones de posición, alarmas o reportes almacenados no aparecen en Plaspy como se espera.
- Ayuda a planificar la duración de la batería ajustando los intervalos de reporte y los modos de ahorro de energía a sus necesidades operativas.
- Recomienda validar el comportamiento después de actualizaciones de firmware o al desplegar unidades GF10 de distintas series de producción.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack GF10 con Plaspy brinda a las organizaciones visibilidad concisa de ubicación, estado de batería, alertas de manipulación y reproducción histórica cuando el dispositivo entrega reportes almacenados. El tamaño reducido y el conjunto de funciones del GF10 lo hacen adecuado para rastreo discreto de activos, monitoreo de objetos personales y supervisión de vehículos o equipos, y Plaspy está diseñado para aceptar y presentar esa información usando los ajustes de conexión compartidos de Plaspy.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolos específicos del dispositivo, comportamientos de firmware e instrucciones de configuración consulte al fabricante en https://www.cantrackgps.com/ ya que el soporte de protocolo y las implementaciones de firmware pueden cambiar con el tiempo.
