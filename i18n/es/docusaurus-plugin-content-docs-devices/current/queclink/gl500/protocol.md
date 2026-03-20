---
slug: /queclink/gl500/protocol
id: gl500-protocol
sidebar_label: Protocol
title: QuecLink - GL500 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del QuecLink GL500 y cómo se comunica con Plaspy mediante ajustes de conexión compartidos
keywords:
  - Protocolo QuecLink GL500
  - Protocolo GPS QuecLink GL500
  - Protocolo de comunicación QuecLink GL500
  - Protocolo de rastreo QuecLink GL500
  - QuecLink GL500 Plaspy
  - Protocolo rastreador GPS GL500
  - Protocolo rastreador de activos QuecLink
  - Integración protocolo GL500
  - Documentación protocolo QuecLink
  - Protocolo rastreador GPS Plaspy
---

# QuecLink - GL500 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador GPS QuecLink GL500 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión se usan y qué aspectos del protocolo del rastreador son relevantes al integrar rastreadores de activos fijos como el GL500 con un servidor backend.

El GL500 es un rastreador de activos fijos de larga duración que funciona con dos baterías CR123A reemplazables por el usuario y un módulo GPS interno u‑blox. Incluye un acelerómetro de 3 ejes para alertas de movimiento, conectividad GSM GPRS cuatribanda, antenas internas y una opción de protocolo integrado @Track. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del dispositivo define cómo el GL500 informa posición, alertas de movimiento, estado y otra telemetría a un servicio backend como Plaspy. Este contexto público del protocolo ayuda a los integradores a saber qué endpoint de red y transporte configurar en el rastreador y qué esperar, en términos generales, del dispositivo.

- Permite que el GL500 informe posición GPS y estado del dispositivo a un servidor remoto para su seguimiento y monitoreo.
- Permite que el rastreador se identifique y entregue alertas de movimiento generadas por el acelerómetro interno de 3 ejes.
- Soporta modos de bajo consumo y de reporte que son importantes para los casos de uso de larga duración del GL500.
- Proporciona un medio agnóstico al transporte para que la telemetría llegue a Plaspy, donde la plataforma analiza y procesa los reportes.
- Funciona con las opciones de comunicación integradas del GL500, como GPRS y reporte por SMS opcional cuando está configurado.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los rastreadores en un endpoint y puerto compartidos y aplica detección automática para identificar el protocolo del dispositivo. En la mayoría de los despliegues, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el GL500 esté configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y puede usarse como destino para el reporte del rastreador.
- La IP del servidor Plaspy es 54.85.159.138 y se facilita para entornos que requieren un endpoint basado en IP.
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido.
- Si el GL500 está configurado para reportar correctamente al endpoint de Plaspy, por lo general no es necesario seleccionar el protocolo manualmente en Plaspy.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el GL500 entrega los reportes a Plaspy. La familia GL500 soporta opciones de transporte comunes y puede configurarse para apuntar al endpoint de Plaspy por nombre de host o por IP según las necesidades del despliegue.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y las reglas de firewall.
- Elija UDP o TCP en el rastreador según las características de la red y las opciones de firmware disponibles.
- Verifique que el APN y los ajustes de conectividad GPRS en el GL500 estén correctos para que pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la temporización de los mensajes, campos opcionales o los disparadores de reporte; confirme siempre los detalles del firmware para la unidad GL500 en uso.
- Las revisiones de hardware y las funciones opcionales, como el micrófono interno o distintas configuraciones de batería, pueden afectar el comportamiento por encima de la capa de protocolo.
- Variantes de protocolo por parte del fabricante u opciones de perfil (por ejemplo intervalos de reporte o definiciones de alarma) pueden diferir entre compilaciones de firmware regionales.
- La elección del transporte entre UDP y TCP puede afectar la semántica de entrega; seleccione la opción de transporte que sea compatible y recomendada para su despliegue.
- La detección automática de Plaspy cubre las variantes de protocolo más comunes, pero se recomienda validar con un reporte de ejemplo durante la puesta en servicio.
- Siempre contraste los pasos de configuración con la documentación más reciente de QuecLink para instrucciones específicas del dispositivo.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación y el contexto de conexión del GL500 ayuda a garantizar reportes fiables, un uso correcto de la batería y una resolución de problemas más rápida al integrar dispositivos con Plaspy. Tener un entendimiento práctico reduce el tiempo de configuración y mejora la fiabilidad operativa.

- Asegura que el dispositivo apunte al endpoint correcto de Plaspy para que los reportes lleguen de forma consistente.
- Ayuda a elegir el modo de transporte y los intervalos de reporte apropiados para equilibrar la vida de la batería y las necesidades de telemetría.
- Facilita el diagnóstico de problemas de conectividad al confirmar los ajustes de APN y los detalles de destino.
- Hace que la interpretación de alertas de movimiento y telemetría sea más predecible cuando se conocen las diferencias de firmware.
- Apoya la planificación de ciclos de mantenimiento y actualizaciones de firmware al entender el impacto del protocolo en el comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL500 con Plaspy ofrece una vía sencilla para obtener visibilidad y alertas a largo plazo de activos fijos. La larga duración de batería del GL500 y su detección de movimiento encajan bien en casos de uso donde importan las actualizaciones de ubicación esporádicas y las alertas por manipulación. Los ajustes de conexión compartidos de Plaspy y su detección automática de protocolo reducen la fricción de configuración y permiten que los equipos se concentren en el uso operativo en lugar de en el ajuste del protocolo.

Si desea obtener más información sobre cómo Plaspy gestiona la conectividad de dispositivos y los datos de flota, visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, notas de firmware y guía de instalación más actualizados, verifique la información del GL500 en el sitio del fabricante en https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
