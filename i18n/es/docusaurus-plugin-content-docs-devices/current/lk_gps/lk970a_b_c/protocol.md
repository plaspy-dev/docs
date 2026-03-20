---
slug: /lk_gps/lk970a_b_c/protocol
id: lk970a_b_c-protocol
sidebar_label: Protocol
title: LK-GPS - LK970A/B/C Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo LK970A/B/C para compatibilidad con Plaspy, conexión y detección de dispositivos
keywords:
  - LK GPS LK970A
  - LK GPS LK970B
  - LK GPS LK970C
  - protocolo LK970
  - compatibilidad LK970 Plaspy
  - protocolo de rastreo LK GPS
  - comunicación rastreador LK970
  - integración de dispositivos Plaspy
  - soporte rastreador GPS Plaspy
  - rastreo vehicular LK970
---

# LK-GPS - Protocolo LK970A/B/C

Esta página documenta el contexto público del protocolo para usar la familia de rastreadores LK-GPS LK970A/B/C con Plaspy. Se centra en cómo el equipo comunica información a Plaspy de manera general, cómo se usan las configuraciones de conexión y qué verificar al incorporar o solucionar problemas de un dispositivo. El contenido es intencionalmente de alto nivel y evita detalles privados de implementación, pero resulta útil para integradores y usuarios técnicos.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo envía datos a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la configuración del fabricante, por lo que aspectos como los intervalos de reporte, modos de suspensión y disponibilidad de entradas/salidas opcionales pueden diferir entre variantes o compilaciones de firmware.

## Descripción general del protocolo

El protocolo de comunicación del rastreador es el mecanismo mediante el cual el LK970A/B/C envía ubicaciones, estado y eventos a un punto final en la nube como Plaspy. A nivel público, el protocolo define cómo el dispositivo se identifica, transmite telemetría y notifica eventos útiles para seguimiento, alertas e historial.

- Permite que el rastreador envíe posiciones GPS periódicas y actualizaciones de estado del equipo al punto final en la nube.
- Transporta notificaciones de eventos como movimiento, manipulación, batería baja o disparadores de geocerca para que Plaspy las procese.
- Incluye un paso de identificación para que Plaspy pueda asociar los mensajes entrantes con el registro de dispositivo correcto.
- Soporta almacenamiento local y subida posterior para que los eventos recopilados durante lapsos sin cobertura se reenvíen cuando vuelva la conectividad.
- Funciona sobre capas de transporte estándar, de modo que el rastreador puede operar en diversos entornos de red y aun así alcanzar Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente qué protocolo está usando un dispositivo cuando éste reporta al punto final de Plaspy. En la mayoría de los casos, los dispositivos configurados para enviar telemetría a la conexión de Plaspy son reconocidos sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Los equipos deben estar configurados para reportar al servidor de Plaspy para habilitar la detección automática.
- Plaspy acepta conexiones entrantes de rastreadores en el mismo puerto compartido para todos los dispositivos soportados, lo que simplifica la configuración.
- Cuando una unidad LK970 correctamente configurada se conecta al punto final de Plaspy, la identificación del protocolo la maneja la plataforma, por lo que normalmente no es necesario seleccionar un protocolo manualmente.
- Si un dispositivo no parece comunicarse, verifique la configuración de reporte del equipo y confirme que apunta al punto final y al puerto de Plaspy.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el rastreador llega a Plaspy pero no exponen contenidos propietarios de los paquetes. La familia LK970 soporta el envío de datos sobre protocolos de transporte estándar hacia la nube, y Plaspy ofrece un punto final consistente para todos los dispositivos.

- Los dispositivos LK970 pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- El dominio del servidor de Plaspy para reportes es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos que se conectan a Plaspy usan el mismo puerto, 8888, lo que reduce la complejidad de configuración en flotas mixtas.
- Elija UDP o TCP según las capacidades del dispositivo, la confiabilidad de la red y las recomendaciones del fabricante para la variante de hardware o firmware específica.
- Verifique el APN y la configuración celular en el dispositivo para que pueda establecer sesiones de datos y alcanzar el punto final de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento del equipo y los campos de telemetría disponibles; confirme siempre la versión de firmware al diagnosticar diferencias.
- Las revisiones de hardware o las opciones de variante, como soporte adicional de E/S o sensores, pueden afectar qué funciones del protocolo están activas o expuestas.
- Las variantes regionales del fabricante o las diferencias en bandas LTE no necesariamente cambian el protocolo de reporte, pero pueden afectar la conectividad y deben validarse.
- La selección de transporte (UDP vs TCP) se configura en el dispositivo y puede influir en la semántica de entrega de telemetría y eventos.
- El comportamiento de almacenamiento local y recuperación en áreas sin cobertura suele depender del firmware; confirme el comportamiento esperado con la documentación del proveedor.
- Valide cualquier función avanzada como comandos remotos, FOTA o entradas de sensores especiales según la documentación oficial de LK GPS.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el LK970A/B/C con Plaspy mejora el éxito en la puesta en servicio, reduce el tiempo de resolución de problemas y ayuda a tomar decisiones informadas sobre consumo de energía y comportamiento de conectividad.

- Asegura la configuración correcta del dispositivo para que la telemetría llegue al punto final de Plaspy y se asocie al activo correspondiente.
- Facilita el diagnóstico de problemas de conectividad al confirmar transporte, APN y ajustes del punto final.
- Permite anticipar qué telemetría y alertas estarán disponibles según las variantes de firmware y hardware.
- Orienta sobre intervalos de reporte, optimización de batería y modos de suspensión para despliegues de larga duración.
- Ayuda a planificar la recuperación en áreas sin cobertura y el comportamiento de subida histórica durante brechas de cobertura.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con la familia LK970A/B/C ofrece una forma práctica de centralizar ubicación en tiempo real, alertas y trazas históricas para flotas y activos que requieren rastreo de larga duración y montaje discreto. Plaspy procesa la telemetría del rastreador para que los administradores de flota puedan ver ubicaciones en vivo, recibir notificaciones de eventos y revisar el historial sin una configuración manual compleja del protocolo cuando los dispositivos apuntan a la plataforma.

Para obtener más información sobre Plaspy y cómo maneja las conexiones de dispositivos y la gestión de flotas, visite https://www.plaspy.com. Para los detalles más actuales y específicos del protocolo por dispositivo, notas de firmware e información sobre variantes de hardware, consulte la documentación oficial del fabricante en https://www.lk-gps.com, ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
