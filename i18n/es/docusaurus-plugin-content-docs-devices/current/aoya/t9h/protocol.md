---
slug: /aoya/t9h/protocol
id: t9h-protocol
sidebar_label: Protocol
title: AoYa - T9H Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS AoYa T9H y cómo se comunica con Plaspy para seguimiento e integración confiables
keywords:
  - protocolo AoYa T9H
  - protocolo GPS AoYa T9H
  - protocolo de comunicación AoYa T9H
  - protocolo de rastreo AoYa T9H
  - compatibilidad AoYa T9H con Plaspy
  - rastreador GPS AoYa T9H
  - batería T9H 6000mAh
  - rastreo vehicular AoYa
  - resumen protocolo rastreador GPS
  - rastreo de flotas AoYa T9H
---

# AoYa - Protocolo T9H

Esta página describe, en términos públicos y no sensibles, el contexto del protocolo para usar el rastreador GPS AoYa T9H con Plaspy. El objetivo es explicar cómo el dispositivo se comunica con Plaspy para que integradores, administradores y usuarios técnicos comprendan la relación de conexión e informe entre el rastreador y la plataforma.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello las notas aquí buscan explicar los aspectos prácticos de la comunicación más que los detalles internos de firmware.

## Descripción general del protocolo

El protocolo del T9H regula cómo se envían la ubicación, el estado y la telemetría desde el dispositivo hacia un servidor remoto. En términos públicos, el protocolo define la secuencia de reportes, los tipos de información incluidos en cada mensaje y la capa de transporte usada para entregar esos reportes a Plaspy.

- Permite reportes periódicos y por evento para que Plaspy muestre posiciones en tiempo real e históricas.
- Incluye identificación del dispositivo e información de estado para que la plataforma asocie los datos entrantes con el registro correcto.
- Transporta telemetría básica como nivel de batería, intensidad de señal y estado de movimiento para monitoreo y alertas.
- Usa GPRS con soporte TCP/IP para enviar reportes desde el dispositivo al endpoint remoto a través de redes celulares.
- Funciona con el subsistema GPS del T9H, que ofrece precisión típica inferior a 5 metros y compatibilidad GNSS para coordenadas fiables.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y está diseñado para identificar automáticamente el protocolo del rastreador a partir del dispositivo que informa. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar a Plaspy.

- Los dispositivos deben configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Plaspy escucha en el puerto 8888 y la plataforma utiliza el mismo puerto para todos los dispositivos compatibles.
- El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 según las capacidades del equipo y los ajustes.
- Cuando un rastreador informa al endpoint de Plaspy, la plataforma mapeará automáticamente los datos entrantes a un tipo de dispositivo conocido.
- Una identificación correcta y un comportamiento de informe adecuado en el equipo facilitan la detección y evitan la necesidad de seleccionar el protocolo manualmente.

## Transporte y contexto de conexión

El contexto de conexión es clave para asegurar una ruta estable desde el rastreador hasta los servidores de Plaspy. El T9H soporta GPRS celular con TCP/IP y puede configurarse para usar UDP o TCP según sus necesidades de despliegue y el firmware del dispositivo.

- Puntos de configuración típicos son el APN de la SIM y la dirección del servidor establecida a d.plaspy.com o 54.85.159.138.
- Plaspy acepta conexiones UDP y TCP en el puerto 8888, por lo que debe elegir el transporte que soporte su firmware T9H.
- Todos los dispositivos administrados por Plaspy usan el mismo puerto 8888, lo que simplifica la planificación de firewall y red.
- Asegúrese de que el plan de datos de la SIM y la configuración del APN sean correctos para que el dispositivo pueda iniciar una sesión de datos GPRS y alcanzar el endpoint de Plaspy.
- En redes seguras, permita el tráfico saliente desde el dispositivo hacia el dominio o la IP de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de los reportes o qué campos opcionales se incluyen en los mensajes; consulte las notas de la versión de firmware cuando sea posible.
- Revisión de hardware o variantes de fabricación pueden introducir diferencias sutiles en sensores disponibles u opciones de reporte.
- La elección entre UDP y TCP afecta las características de entrega, pero ambos son soportados por Plaspy en el puerto 8888.
- Los valores por defecto de configuración del fabricante pueden requerir actualización para apuntar el dispositivo a d.plaspy.com o a la IP del servidor Plaspy.
- Valide la compatibilidad según la documentación del fabricante para la versión específica de firmware instalada en su dispositivo.
- Los modos de ahorro de batería y los intervalos de reporte controlados por firmware modificarán el comportamiento observado en Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una integración confiable, agiliza la resolución de problemas y hace que el comportamiento del dispositivo en Plaspy sea más predecible. Conocer qué envía el dispositivo y cómo se conecta reduce problemas de configuración y mejora la confiabilidad a largo plazo.

- Facilita el diagnóstico cuando un dispositivo no aparece en Plaspy tras la configuración inicial.
- Orienta la correcta configuración del APN y la dirección del servidor para que el T9H alcance d.plaspy.com o 54.85.159.138.
- Aclara la cadencia esperada de reportes y qué campos de telemetría deberían ser visibles en Plaspy.
- Apoya la decisión de usar UDP frente a TCP según la fiabilidad de la red y el comportamiento esperado de los mensajes.
- Permite una planificación informada para actualizaciones de firmware y pruebas de aceptación durante el despliegue de dispositivos.

## Por qué usar Plaspy con este protocolo

Usar el AoYa T9H con Plaspy ofrece un camino sencillo para centralizar ubicación, estado y alertas en seguimiento personal, de activos o de flotas livianas. La forma compacta del T9H y su larga duración de batería lo hacen adecuado para diversas tareas de rastreo, y la detección automática de protocolos y el manejo unificado de puertos de Plaspy simplifican el despliegue en múltiples dispositivos.

Si desea obtener más información sobre cómo Plaspy funciona con rastreadores como el AoYa T9H visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique los detalles específicos del protocolo y las notas de firmware en el sitio del fabricante en http://www.aoyagps.com/ antes de finalizar la configuración.
