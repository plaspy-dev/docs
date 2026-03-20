---
slug: /ev/ev_206m/protocol
id: ev_206m-protocol
sidebar_label: Protocol
title: EV - EV-206M Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para el rastreador GPS para mascotas EV-206M y su comunicación con Plaspy
keywords:
  - protocolo EV EV-206M
  - protocolo GPS EV-206M
  - compatibilidad EV-206M Plaspy
  - protocolo de comunicación EV-206M
  - protocolo de rastreo EV-206M
  - protocolo de dispositivo Plaspy
  - protocolo rastreador GPS para mascotas
  - integración rastreador GPS Plaspy
  - resumen protocolo rastreador EV
  - telemetría rastreo de mascotas
---

# EV - EV-206M Protocolo

Esta página resume el contexto del protocolo público para usar el rastreador GPS para mascotas EV-206M con Plaspy. Explica, en términos generales, cómo el dispositivo reporta ubicación, actividad y eventos de presencia en el hogar a Plaspy, y qué esperar al configurar el dispositivo para enviar datos a la plataforma. Este documento ofrece orientación a nivel de protocolo y no sustituye el manual técnico del fabricante.

El EV-206M es un rastreador 4G ultra ligero que utiliza GPS, Wi‑Fi, detección de balizas Bluetooth y enlace celular para posición y telemetría. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el dispositivo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; consulte al fabricante para detalles específicos de firmware.

## Visión general del protocolo

El protocolo de comunicación del EV-206M define cómo el dispositivo se identifica, cómo reporta fijaciones de GPS, telemetría de actividad y eventos relacionados con presencia en el hogar, y cómo esos mensajes se entregan a Plaspy. El propósito del protocolo es transformar lecturas de sensores y posiciones en mensajes estructurados aptos para la ingestión en una plataforma de seguimiento en la nube.

- Permite al rastreador enviar fijaciones de ubicación, actividad de movimiento y detecciones de balizas o Wi‑Fi a Plaspy para mapeo y alertas.
- Transmite identidad del dispositivo y estado básico para que Plaspy asocie los mensajes con el activo y la línea de tiempo correctos.
- Proporciona telemetría útil para notificaciones de geocerca, avisos de inactividad y el historial de la línea de tiempo sin exponer detalles internos del firmware.
- Soporta actualizaciones periódicas en vivo para seguimiento al aire libre y mensajes por eventos para notificaciones de presencia en el hogar y de batería.
- Funciona sobre transporte de red estándar para que el rastreador pueda entregar mensajes a Plaspy desde redes celulares o conectividad local.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes de dispositivos en un endpoint de red compartido y detecta automáticamente el protocolo del rastreador, lo que elimina la necesidad de que los usuarios seleccionen manualmente un protocolo dentro de Plaspy en la mayoría de los casos. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para que la detección automática funcione.

- Plaspy usa un endpoint de servidor compartido, por lo que los dispositivos compatibles reportan al mismo host y puerto.
- Cuando un EV-206M está configurado para enviar datos al endpoint de Plaspy, la plataforma identificará automáticamente el protocolo entrante y extraerá campos útiles como posición y actividad.
- Generalmente no es necesario seleccionar una opción de protocolo en Plaspy si el dispositivo está configurado correctamente para reportar al endpoint.
- La detección automática simplifica la incorporación de flotas mixtas y modelos de dispositivos variados, incluyendo rastreadores para mascotas y otros dispositivos IoT.
- Si surgen problemas de ingestión, verificar la configuración de red del dispositivo y la versión de firmware es un primer paso práctico antes de contactar soporte.

## Transporte y contexto de conexión

El EV-206M envía sus mensajes por datos celulares al endpoint de ingestión de Plaspy. La selección del transporte puede ser UDP o TCP según la capacidad y configuración del dispositivo, y se usa el mismo puerto para todos los dispositivos en Plaspy a fin de simplificar la configuración y el enrutamiento.

- El dominio del servidor Plaspy es d.plaspy.com para configuración basada en DNS.
- La IP del servidor Plaspy es 54.85.159.138 para configuración directa por IP si es necesario.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- Use el nombre DNS d.plaspy.com cuando sea posible para permitir que la plataforma gestione cambios de IP en la infraestructura.

## Notas sobre compatibilidad del protocolo

- El EV-206M figura como compatible con Plaspy, pero el comportamiento del protocolo puede variar entre actualizaciones de firmware y revisiones de hardware.
- Variaciones por parte del fabricante en el contenido de los mensajes, la cadencia o campos opcionales pueden afectar cómo Plaspy interpreta cierta telemetría.
- La elección del transporte entre UDP y TCP puede influir en la entrega bajo diferentes condiciones de red; seleccione el transporte que soporte el dispositivo y la red del operador.
- Si un dispositivo no alcanza Plaspy, confirme que la configuración del servidor use d.plaspy.com o 54.85.159.138 y el puerto 8888, y que el dispositivo tenga permitido usar el transporte seleccionado.
- Valide siempre la versión de firmware del EV-206M y los procedimientos de configuración con la documentación del fabricante para obtener instrucciones específicas y actualizadas.
- Para anomalías en la red o en el parseo, proporcionar marcas de tiempo, identificadores de dispositivo y ejemplos de mensajes al equipo de soporte puede acelerar la resolución sin exponer detalles privados de implementación.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del EV-206M ayuda a asegurar una incorporación fiable, telemetría precisa en Plaspy y una resolución eficiente cuando los mensajes se retrasan o faltan. Tener un conocimiento práctico del contexto del protocolo facilita verificar la configuración del dispositivo y comunicarse con proveedores o equipos de soporte.

- Garantiza que el dispositivo esté configurado para reportar al endpoint correcto de Plaspy y con los ajustes de transporte adecuados.
- Ayuda a identificar si la falta de datos es causada por la red, el dispositivo o una mala configuración.
- Favorece un comportamiento predecible de geocercas, alertas por presencia en el hogar y notificaciones basadas en actividad en Plaspy.
- Informa decisiones sobre habilitar seguimiento frecuente en vivo versus modos de ahorro de energía según el comportamiento de uplink esperado.
- Reduce el tiempo de iteración durante el despliegue alineando las configuraciones del dispositivo con las expectativas de conexión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el EV-206M con Plaspy ofrece a propietarios y organizaciones acceso centralizado a ubicación, actividad y eventos de presencia en el hogar dentro de una plataforma diseñada para seguimiento en vivo, alertas e historial en la línea de tiempo. Los modos múltiples de posicionamiento y el bajo peso del dispositivo lo hacen adecuado para monitoreo de animales de compañía, mientras que Plaspy proporciona la ingestión en la nube y la visualización necesarias para convertir telemetría cruda en información operativa útil.

Para aprender más sobre Plaspy y cómo la plataforma funciona con dispositivos como el EV-206M visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, información de firmware y orientación de implementación más actual, consulte al fabricante en http://www.eviewltd.com/ ya que el comportamiento del dispositivo y el soporte del protocolo pueden cambiar con el tiempo.
