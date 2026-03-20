---
slug: /wp/m7/protocol
id: m7-protocol
sidebar_label: Protocol
title: WP - M7 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador GPS WP M7 y cómo se comunica con Plaspy para seguimiento fiable
keywords:
  - protocolo WP M7
  - protocolo GPS WP M7
  - comunicación WP M7
  - protocolo de seguimiento WP M7
  - compatibilidad WP M7 Plaspy
  - integración dispositivo WP M7
  - WP M7 GPRS UDP TCP
  - configuración rastreador WP M7
  - protocolo dispositivo Plaspy
  - seguimiento de vehículos WP M7
---

# WP - M7 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador GPS portátil WP M7 con Plaspy. Explica, en términos generales, cómo el dispositivo informa posición y estado y cómo Plaspy procesa esas comunicaciones sin exponer detalles privados de implementación. El WP M7 combina GPS y conectividad GSM GPRS con opciones de reporte por SMS, GPRS, UDP y TCP, además de funciones como alerta por manipulación, reporte por movimiento y larga autonomía en standby.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. La orientación que se presenta aquí se centra en el contexto de comunicación necesario para una integración exitosa en Plaspy, más que en los formatos de paquete a bajo nivel o comandos propietarios.

## Resumen del protocolo

El protocolo de reporte define cómo el WP M7 transmite posición, estado y alertas a un servidor remoto y cómo, opcionalmente, el servidor puede enviar comandos o configuración al dispositivo. En la práctica, esto significa que el equipo envía datos periódicamente o por eventos, y Plaspy interpreta esa información para generar actualizaciones de ubicación, movimiento y estado para monitoreo e informes.

- Permite que el WP M7 envíe posición GPS y actualizaciones de estado a un endpoint remoto para seguimiento y alertas
- Transporta notificaciones de eventos como alertas por manipulación, advertencias de batería baja y cambios de movimiento
- Soporta múltiples transportes para que el dispositivo pueda adaptarse a condiciones de red y preferencias del operador
- Permite a Plaspy recibir telemetría utilizable para mapeo, geocercas e informes sin requerir selección manual del protocolo
- Mantiene visible la identificación del equipo y la información básica de estado en la plataforma para gestionar los activos de forma confiable

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint compartido y utiliza el contexto de conexión y el comportamiento de los mensajes para identificar automáticamente las comunicaciones entrantes de los rastreadores. Cuando un WP M7 configurado correctamente reporta a Plaspy, la plataforma detecta el manejo adecuado para ese dispositivo sin que el usuario deba seleccionar manualmente el protocolo en la mayoría de los casos.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para reportes de dispositivos
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos compatibles para simplificar la configuración
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un dispositivo que informe al endpoint de Plaspy normalmente será procesado sin selección manual
- Los usuarios suelen configurar el rastreador para enviar reportes al dominio o IP de Plaspy y elegir el tipo de transporte compatible con el dispositivo
- Una identificación correcta del dispositivo en el primer contacto ayuda a Plaspy a asociar los reportes con el registro de activo correspondiente y aplicar el procesamiento relevante

## Transporte y contexto de conexión

El WP M7 soporta varias opciones de transporte para enviar datos. Al integrar con Plaspy, es importante configurar el equipo para utilizar uno de los transportes soportados y asegurarse de que el host y puerto de destino apunten al endpoint de Plaspy. La selección del transporte puede afectar la latencia, la fiabilidad y la manera en que el dispositivo se recupera de interrupciones de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino para el reporte
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica los ajustes en el equipo y el despliegue a escala de flota
- Use TCP si necesita entrega orientada a conexión y UDP cuando prefiera menor sobrecarga y latencia reducida, si el dispositivo lo soporta
- Asegúrese de que el APN y los ajustes de la red móvil permitan datos GPRS para que el dispositivo pueda alcanzar el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware entre lotes de producción pueden cambiar el comportamiento de mensajes y las funciones disponibles
- Revisiones de hardware pueden modificar los transportes soportados o las entradas de accesorios que afectan el reporte de telemetría
- Los comandos de configuración y los ajustes predeterminados del fabricante pueden diferir, por lo que confirme el destino y el transporte de reporte antes de desplegar
- Algunas funciones reportadas por el equipo, como seguimiento por llamada de voz u opciones de baliza radio, pueden ser opcionales y requerir activación
- Al usar fallback por SMS o modos de reporte dual valide cómo el rastreador elige entre SMS y GPRS para enviar datos
- Siempre verifique la compatibilidad con la documentación más reciente del fabricante para conjuntos de comandos específicos del modelo y notas de firmware

## Por qué es importante entender el protocolo

Comprender cómo el WP M7 se comunica con Plaspy reduce el tiempo de configuración, facilita la resolución de problemas y ayuda a garantizar una operación fiable a largo plazo para usos de seguimiento de flotas y activos.

- Acelera la configuración inicial asegurando que el dispositivo reporte al host y puerto correctos y use un transporte soportado
- Ayuda a diagnosticar problemas de conectividad cuando los equipos no aparecen en Plaspy o cuando los reportes dejan de llegar
- Aclara cómo se entregan a la plataforma los reportes de eventos como alertas por manipulación y notificaciones de batería baja
- Apoya la planificación de gestión de energía e intervalos de reporte para equilibrar vida de batería y frecuencia de actualización
- Informa decisiones sobre actualizaciones OTA y gestión de firmware cuando las actualizaciones del fabricante cambian el comportamiento de los mensajes

## Por qué usar Plaspy con este protocolo

Usar el WP M7 con Plaspy ofrece a las organizaciones una plataforma única y administrada para recoger datos de ubicación y eventos de rastreadores portátiles duraderos y de larga vida. La combinación de características del hardware M7, como la clasificación IP67, fijación magnética, batería de larga autonomía y opciones de reporte por múltiples transportes, lo hace adecuado para casos de uso de seguimiento de vehículos y activos donde la flexibilidad en el reporte y la entrega confiable son importantes.

Si desea saber más sobre cómo Plaspy maneja la conectividad de dispositivos y explorar opciones de integración, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique las especificaciones más recientes del dispositivo en el sitio del fabricante en http://www.wondeproud.com/ antes de un despliegue a gran escala.
