---
slug: /suntech/st4945b/protocol
id: st4945b-protocol
sidebar_label: Protocol
title: Suntech - ST4945B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Suntech ST4945B y su comunicación con Plaspy para seguimiento fiable de activos
keywords:
  - Protocolo Suntech ST4945B
  - Protocolo GPS Suntech ST4945B
  - Compatibilidad Suntech ST4945B Plaspy
  - Protocolo rastreador GPS Suntech
  - Protocolo de dispositivo Plaspy
  - Comunicación rastreador GPS
  - Rastreador de activos LTE Cat M1
  - Protocolo NB IoT para rastreadores
  - Protocolo de rastreo vehicular
  - Integración de rastreadores con Plaspy
---

# Suntech - Protocolo ST4945B

Esta página describe el contexto público del protocolo para usar el rastreador Suntech ST4945B con Plaspy. Se enfoca en cómo el dispositivo envía telemetría y posiciones GNSS a la plataforma Plaspy a un nivel general, sin exponer detalles sensibles de implementación. El ST4945B es un rastreador robusto LTE Cat M1 / NB‑IoT con retroceso EGPRS, diseñado para larga duración de batería, protección IP67, detección de interferencias y soporte BLE opcional; se entrega compatible con Plaspy para facilitar la integración.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éstos reportan correctamente al endpoint de Plaspy. El comportamiento típico puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; así, aunque Plaspy acepta flujos de datos del ST4945B por TCP o UDP, la cadencia de los paquetes, los campos disponibles y el comportamiento de las funciones pueden diferir entre versiones de firmware y variantes de hardware.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo que utiliza el ST4945B para entregar posiciones GNSS, eventos de movimiento y estado del equipo a Plaspy. A nivel público este protocolo define cómo el dispositivo se identifica, cómo formatea la telemetría para ingestión y cómo se entregan los mensajes de estado y eventos para que Plaspy pueda ofrecer paneles, alertas e historial.

- Permite que el dispositivo envíe actualizaciones periódicas y por evento de posición GNSS a Plaspy para seguimiento en tiempo real y reproducción histórica.
- Transporta telemetría como detección de movimiento, nivel de batería, alertas de interferencia y estado de entradas digitales para que Plaspy genere notificaciones y reglas.
- Incluye elementos de identificación y estado que permiten a Plaspy asociar los datos entrantes con el registro de dispositivo correcto.
- Soporta tanto flujos continuos como patrones de reporte intermitentes para conservar batería y, al mismo tiempo, asegurar alertas oportunas.
- Funciona sobre transportes comunes para que el rastreador pueda alcanzar el endpoint de Plaspy desde redes celulares, incluyendo LTE Cat M1, NB‑IoT y retroceso 2G.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar datos de muchos modelos de rastreadores y detectar automáticamente el protocolo presentado por un dispositivo que reporta. Cuando el ST4945B está configurado para reportar al endpoint de Plaspy, la plataforma clasificará el flujo entrante y mapeará la telemetría al modelo de dispositivo sin requerir la selección manual de protocolo en la mayoría de los casos.

- Plaspy recibe los reportes de los dispositivos en su endpoint unificado y determina automáticamente las reglas de parseo correctas.
- Usted apunta los dispositivos al servidor de Plaspy y, normalmente, no necesita elegir un protocolo dentro de Plaspy si el dispositivo reporta correctamente.
- El ST4945B es compatible con Plaspy desde el primer momento y transmite telemetría que Plaspy puede ingerir para paneles y alertas.
- La detección automática reduce los pasos de configuración en despliegues típicos, sin dejar de acomodar variantes en el comportamiento de reporte.
- Si un dispositivo usa ajustes no estándar o firmware personalizado, la validación con la documentación del fabricante puede ayudar a asegurar una detección correcta.

## Transporte y contexto de conexión

El transporte de conexión y la dirección del servidor forman parte de la configuración práctica para que el ST4945B reporte a Plaspy. El dispositivo puede usar UDP o TCP dependiendo de su configuración de red y capacidades de firmware, y puede apuntarse al endpoint público de Plaspy por nombre o dirección IP.

- El dominio del servidor Plaspy para reportes es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados para simplificar la configuración y reducir errores.
- El ST4945B puede conectarse vía LTE Cat M1, NB‑IoT o EGPRS 2G de respaldo para alcanzar Plaspy.
- La elección entre TCP o UDP puede verse influenciada por la fiabilidad de la red, las opciones por defecto del firmware y las consideraciones de consumo de energía en el rastreador.

## Notas sobre compatibilidad del protocolo

- Las diferencias entre versiones de firmware pueden modificar qué campos de telemetría están disponibles, el tiempo entre mensajes y el comportamiento de los eventos.
- Revisiones de hardware u módulos opcionales como BLE pueden añadir u omitir entradas/sensores reportados.
- La selección del transporte (TCP frente a UDP) puede afectar la fiabilidad y el consumo de batería según el despliegue y la red del operador.
- Los menús de configuración del fabricante y los servidores de aprovisionamiento pueden establecer parámetros de reporte por defecto que deberían apuntarse al endpoint de Plaspy.
- Plaspy detecta el protocolo del rastreador de forma automática, pero firmware personalizado o configuraciones de puerto no estándar pueden requerir validaciones adicionales.
- Siempre contraste el comportamiento del dispositivo con las notas de la versión del fabricante correspondientes al firmware instalado en la unidad.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del ST4945B ayuda a asegurar una instalación exitosa, un comportamiento predecible del equipo y un diagnóstico eficiente cuando se trabaja con Plaspy. Saber qué reporta el dispositivo, cómo se conecta y qué transporte utiliza le da control sobre la energía, el uso de datos y la fiabilidad de los eventos.

- Facilita el aprovisionamiento correcto del dispositivo para que los reportes lleguen a Plaspy sin selección manual de protocolo.
- Ayuda a ajustar los intervalos de reporte y los disparadores de eventos para equilibrar la vida útil de la batería y la capacidad de respuesta.
- Simplifica el diagnóstico de problemas de conectividad o mapeo de datos cuando la telemetría no aparece como se espera en Plaspy.
- Apoya la planificación para escala aclarando los volúmenes de datos esperados y el comportamiento de transporte en implementaciones de flota.
- Permite a los operadores verificar que alarmas críticas, como detección de interferencias y batería baja, se están reenviando a Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el Suntech ST4945B con Plaspy brinda a las organizaciones una solución sólida para visibilidad a largo plazo de activos, detección de manipulación y monitoreo remoto. Los modos de bajo consumo del ST4945B, su batería de respaldo y su carcasa resistente lo hacen adecuado para contenedores, remolques y despliegues remotos, mientras que Plaspy ingiere la telemetría del dispositivo para ofrecer mapas en vivo, reproducción histórica y alertas basadas en reglas.

Para conocer más sobre Plaspy y cómo trabaja con dispositivos como el ST4945B visite https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo en el sitio del fabricante http://www.suntechint.com/ antes de finalizar planes de despliegue.
