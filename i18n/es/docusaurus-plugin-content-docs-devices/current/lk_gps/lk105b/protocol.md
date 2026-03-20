---
slug: /lk_gps/lk105b/protocol
id: lk105b-protocol
sidebar_label: Protocol
title: LK-GPS - LK105B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo LK-GPS LK105B para compatibilidad con Plaspy, conexión y detección para rastreo fiable de mascotas
keywords:
  - protocolo LK GPS LK105B
  - protocolo de rastreador GPS LK105B
  - protocolo LK GPS Plaspy
  - compatibilidad LK105B Plaspy
  - protocolo de rastreo LK GPS
  - protocolo GPS para mascotas
  - comunicación de rastreador GPS
  - rastreo en tiempo real LK105B
  - configuración LK GPS
  - resolución de problemas LK105B
---

# LK-GPS - Protocolo LK105B

Esta página explica el contexto público del protocolo para usar el rastreador mini para mascotas LK-GPS LK105B con Plaspy. Resume cómo el dispositivo comunica en términos generales, cómo Plaspy recibe los reportes del rastreador y qué debe considerarse al configurar el equipo para lograr una entrega confiable de posiciones y alertas. La información está pensada para ayudar a usuarios técnicos y administradores de flotas o activos a entender puntos de integración sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre todos los dispositivos compatibles y detecta automáticamente el protocolo cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo LK105B puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en los aspectos públicos comunes y en consideraciones prácticas de compatibilidad.

## Descripción general del protocolo

El protocolo de comunicación del LK105B define cómo el rastreador envía su ubicación, eventos de movimiento y alertas a un servidor como Plaspy. El protocolo permite que el rastreador se identifique, transmita información de ubicación y estado útil, y soporte funciones que permiten el rastreo en tiempo real y la reproducción histórica en la plataforma.

- Permite reportes periódicos y basados en eventos para que Plaspy muestre la posición en tiempo real y el historial.
- Transporta identificadores del dispositivo y campos de estado que permiten asociar los datos con el equipo correcto.
- Entrega notificaciones de alerta y SOS que pueden mostrarse a usuarios y operadores en Plaspy.
- Opera sobre sockets IP estándar para que el rastreador pueda enviar reportes a un endpoint público de Plaspy.
- Funciona con gestión de energía y detección de movimiento para equilibrar la frecuencia de reportes y la duración de la batería.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint compartido y determina automáticamente qué protocolo soportado está presente. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el rastreador esté configurado para reportar al endpoint y puerto correctos de Plaspy.

- Los dispositivos deben configurarse para enviar reportes a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Plaspy escucha reportes entrantes en el puerto 8888 y utiliza ese mismo puerto para todos los dispositivos soportados.
- Los rastreadores que soportan TCP o UDP pueden configurarse para usar cualquiera de estos transportes para alcanzar el endpoint de Plaspy.
- Cuando un LK105B correctamente configurado reporta al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del dispositivo y procesará los datos entrantes.
- Normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma si la configuración de reporte del dispositivo es correcta.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo se establece el enlace físico entre el LK105B y los servidores de Plaspy. El rastreador puede usar métodos comunes de transporte IP y tanto el dominio como la IP de Plaspy pueden usarse para dirigir los reportes.

- El LK105B puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las preferencias de configuración.
- Los rastreadores pueden señalar al dominio d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138 al configurar el endpoint de reporte.
- Plaspy usa el mismo puerto de escucha 8888 para todos los dispositivos compatibles para simplificar la configuración.
- Elija UDP para reportes ligeros y con menor sobrecarga, o TCP cuando se prefiera entrega fiable y estado de conexión y el dispositivo lo soporte.
- Verifique ajustes de red como el APN y reglas de firewall de salida para que el rastreador pueda alcanzar el endpoint de Plaspy desde la red celular.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo entre mensajes, el contenido de campos y las funciones soportadas. Confirme siempre el firmware del rastreador al resolver problemas.
- Revisiones de hardware o variantes OEM del LK105B pueden diferir en los transportes soportados o en valores de configuración por defecto.
- Algunas funciones, como notificaciones SOS, monitoreo de voz y reposo por detección de movimiento, pueden implementarse de forma distinta según la versión de firmware.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega y debe coincidir con las capacidades del dispositivo y las necesidades operativas.
- Valide que el rastreador esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 antes de asumir compatibilidad.
- Para comportamientos concretos o funciones avanzadas, consulte la documentación del fabricante para comandos y opciones de configuración específicas del dispositivo.
- Pruebe un equipo en un entorno controlado antes de desplegar grandes cantidades para confirmar el comportamiento con su operador celular y con Plaspy.

## Por qué es importante comprender el protocolo

Conocer el protocolo de comunicación del rastreador ayuda a garantizar una integración sólida con Plaspy, acelera la resolución de problemas y mejora la confiabilidad operativa. Entender cómo el dispositivo reporta y cómo la plataforma procesa esos datos reduce tiempos de configuración y evita errores comunes.

- Asegura la correcta configuración del endpoint y del transporte para que los mensajes lleguen a Plaspy.
- Facilita el diagnóstico de por qué las actualizaciones de posición o las alertas podrían retrasarse o perderse, revisando firmware y ajustes de transporte.
- Ayuda a configurar intervalos de reporte y funciones de gestión de energía para equilibrar duración de batería y frescura de ubicación.
- Permite validar el comportamiento de SOS y alertas para que mensajes urgentes lleguen a Plaspy y a los usuarios.
- Mejora las expectativas sobre la reproducción histórica y el nivel de detalle de las rutas registradas.

## Por qué usar Plaspy con este protocolo

Usar el LK-GPS LK105B con Plaspy permite a organizaciones y dueños de mascotas centralizar ubicación, alertas y rutas históricas en una sola plataforma diseñada para monitoreo y supervisión operativa. La detección automática de protocolos de Plaspy y los ajustes de conexión compartidos reducen la fricción para poner los dispositivos en línea y reportando a un servidor gestionado.

Si desea conocer más sobre cómo Plaspy funciona con dispositivos como el LK105B, visite el sitio de Plaspy en https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware e información de hardware, verifique la documentación actual en el sitio del fabricante https://www.lk-gps.com ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
