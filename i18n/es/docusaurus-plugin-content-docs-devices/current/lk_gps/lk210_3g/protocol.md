---
slug: /lk_gps/lk210_3g/protocol
id: lk210_3g-protocol
sidebar_label: Protocol
title: LK-GPS - LK210-3G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el LK210-3G a Plaspy con notas de transporte y compatibilidad
keywords:
  - LK-GPS LK210-3G protocolo
  - LK-GPS rastreador GPS LK210-3G
  - protocolo LK210-3G Plaspy
  - protocolo de comunicación LK210-3G
  - protocolo de rastreo LK210-3G
  - compatibilidad de dispositivos Plaspy
  - integración rastreador GPS Plaspy
  - rastreo de vehículos LK-GPS
  - rastreo de flotas LK210-3G
  - guía de protocolo rastreador GPS
---

# LK-GPS - Protocolo LK210-3G

Esta página ofrece contexto público y no sensible sobre el protocolo para integrar el rastreador LK210-3G con la plataforma Plaspy. Explica a alto nivel cómo se comunica el equipo, los puntos de conexión que expone Plaspy y consideraciones prácticas de compatibilidad para despliegues en campo. El LK210-3G es un rastreador compacto y versátil con antenas GPS y GSM, sensor de vibración integrado, activación por choque y soporte de comandos SMS; aquí se describe de forma general cómo se transmiten esas capacidades a Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía se centra en transporte, detección y contexto operativo en lugar de detalles de implementación.

## Descripción general del protocolo

A grandes rasgos, el protocolo de comunicación del LK210-3G define cómo el dispositivo establece conexión con Plaspy, se identifica y envía telemetría como posición, alertas de vibración y estado de batería. El protocolo permite que el rastreador entregue el estado del equipo que Plaspy normaliza en mapas, alertas e informes históricos para flotas y escenarios de seguridad.

- Transporta actualizaciones de ubicación, marca de tiempo e información de estado desde el dispositivo hacia la plataforma.
- Transmite notificaciones de eventos como vibración o activación por choque y el estado de la batería para activar alertas.
- Permite que el dispositivo se identifique para que Plaspy asocie la telemetría con el registro del activo correspondiente.
- Soporta reportes periódicos y mensajes impulsados por eventos para equilibrar notificaciones oportunas con la conservación de batería.
- Funciona junto con el soporte de comandos SMS del equipo para configuración o consultas cuando la conectividad de datos es limitada.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en un endpoint público y puerto compartidos y determina automáticamente el protocolo adecuado cuando llegan los mensajes. En la mayoría de los despliegues usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en el endpoint central del servidor d.plaspy.com y en la IP pública 54.85.159.138.
- La plataforma utiliza el puerto 8888 para el reporte y procesamiento de dispositivos.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, por lo que la configuración del endpoint es consistente entre modelos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta al servidor, lo que simplifica la puesta en marcha.
- Si el dispositivo está correctamente apuntado al endpoint de Plaspy y usa un transporte soportado, por lo general no es necesario seleccionar el protocolo manualmente.

## Transporte y contexto de conexión

El transporte y el direccionamiento son los detalles principales de conexión que debe configurar en el LK210-3G. El rastreador puede estar configurado para reportar a Plaspy por UDP o TCP según las opciones de firmware y configuración del equipo. Esta sección se centra en cómo apuntar el dispositivo a Plaspy y en los transportes más usados.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según su firmware y las herramientas de configuración.
- Configure la dirección de reporte del dispositivo a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 cuando el dispositivo requiera una IP.
- Plaspy utiliza el mismo puerto 8888 en todos los dispositivos compatibles para simplificar la configuración individual y a nivel de flota.
- Elija UDP cuando el firmware del equipo recomiende un transporte más simple y con menor sobrecarga, o TCP cuando la implementación del dispositivo requiera entrega fiable.
- Confirme el modo de transporte soportado por su firmware antes de desplegar masivamente para garantizar reportes consistentes.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes, los campos disponibles y los transportes soportados; siempre confirme las notas de la versión del firmware para comportamientos específicos del dispositivo.
- Las revisiones de hardware o las variantes regionales del LK210-3G pueden alterar las bandas soportadas, los perfiles de energía o las configuraciones de reporte predeterminadas que afectan la conectividad.
- Las opciones de configuración del lado del fabricante, como transporte predeterminado o formatos de comandos SMS, pueden variar e influir en cómo debe apuntarse el dispositivo a Plaspy.
- La selección de transporte (UDP frente a TCP) es una elección de configuración del dispositivo y debe validarse para garantizar entrega fiable en su entorno de red.
- Entornos de red con NAT, firewalls o restricciones de operadores pueden requerir VPNs o configuraciones APN específicas; valide la conectividad en su región de despliegue.
- Siempre contraste el comportamiento del dispositivo con la documentación oficial de LK-GPS antes de aplicar cambios de configuración en producción.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que el LK210-3G reporte de forma fiable a Plaspy, soporte el comportamiento de alertas esperado y sea mantenible a lo largo del tiempo. Tener una visión práctica de cómo el equipo se conecta y qué reporta reduce el tiempo de configuración y mejora los resultados de resolución de problemas.

- Permite identificar más rápido desconfiguraciones como endpoint, transporte o puerto incorrectos.
- Ayuda a validar que tipos de eventos como vibración o alertas de alimentación se estén entregando e interpretando correctamente en Plaspy.
- Facilita la planificación de actualizaciones de firmware al clarificar qué cambios pueden afectar el reporte y la compatibilidad.
- Permite probar de forma coordinada el comportamiento del transporte en diferentes condiciones de red para prevenir pérdida de datos.
- Mejora la comunicación con el soporte de LK-GPS y los integradores al proporcionar diagnósticos claros y conscientes del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el LK210-3G con Plaspy brinda a las organizaciones visibilidad unificada sobre ubicación, alertas de manipulación y vibración, y estado de batería en vehículos y activos. La forma compacta con montaje magnético y los sensores antirobo del dispositivo complementan los paneles centralizados, reglas de alertas e informes de Plaspy para apoyar la gestión de flotas, seguridad y recuperación.

Plaspy acepta conexiones en d.plaspy.com (54.85.159.138) en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos compatibles. Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888, y Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el LK210-3G, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y variantes de hardware consulte al fabricante en https://www.lk-gps.com.
