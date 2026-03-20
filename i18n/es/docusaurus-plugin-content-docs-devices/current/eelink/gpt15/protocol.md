---
slug: /eelink/gpt15/protocol
id: gpt15-protocol
sidebar_label: Protocol
title: EElink - GPT15 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del EElink GPT15 y cómo se comunica con Plaspy para seguimiento y alertas en tiempo real
keywords:
  - protocolo EElink GPT15
  - protocolo GPS EElink GPT15
  - compatibilidad GPT15 Plaspy
  - protocolo de rastreo EElink
  - protocolo de rastreador GPS Plaspy
  - rastreador de equipaje GPT15
  - comunicación EElink GPT15
  - seguimiento de activos GPT15
  - compatibilidad de dispositivos Plaspy
  - guía de protocolo de rastreadores
---

# EElink - Protocolo GPT15

Esta página describe el contexto público del protocolo para usar el rastreador EElink GPT15 con Plaspy. Explica, en términos no sensibles y agnósticos a la implementación, cómo el dispositivo se comunica con la plataforma Plaspy para que administradores e integradores sepan qué configurar y verificar para garantizar la entrega fiable de datos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento se enfoca en el contexto de conexión y reporte más que en detalles internos de firmware o formatos de paquetes propietarios.

## Visión general del protocolo

A alto nivel, el protocolo de reporte del GPT15 es el método de comunicación del dispositivo que transmite ubicación, datos de sensores y estado a un servidor remoto como Plaspy. El protocolo asegura que el rastreador se identifique, informe posicionamiento por capas y eventos de sensores, y permita que el servidor genere telemetría, alertas e historial útiles para los usuarios finales.

- Envía actualizaciones de ubicación desde GPS, Wi‑Fi y estaciones base LBS a un backend para mapeo e historial.
- Transmite eventos de estado del dispositivo como manipulación o batería baja para que la plataforma pueda activar alertas.
- Permite que el servidor asocie mensajes entrantes con un identificador de equipo específico para un enrutamiento correcto.
- Soporta intervalos regulares de telemetría y reportes basados en eventos para que Plaspy gestione visibilidad y alertas en tiempo real.
- Habilita opciones de configuración remota expuestas por el dispositivo mediante la app o SMS, con ajustes que influyen en cómo se envían los reportes.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador utilizado por un dispositivo entrante. Cuando un GPT15 apunta al endpoint de Plaspy y usa un transporte soportado, Plaspy identificará el tipo de dispositivo y comenzará a procesar su telemetría sin que el usuario tenga que seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy usa el mismo endpoint de servidor para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para sistemas que requieren ingresar una dirección IP.
- Todos los dispositivos en Plaspy utilizan el mismo puerto, lo que simplifica la configuración entre modelos.
- Normalmente no es necesario elegir un protocolo en Plaspy si el dispositivo reporta al endpoint correcto con el transporte y el identificador de dispositivo adecuados.
- Si un dispositivo no aparece, confirme que el rastreador esté configurado para reportar al endpoint de Plaspy y revise los ajustes de conectividad en el dispositivo.

## Transporte y conexión

Las opciones de conexión y transporte determinan cómo el rastreador llega a Plaspy, pero no cambian el rol público del protocolo. Las unidades GPT15 pueden configurarse para usar UDP o TCP para enviar reportes según el firmware y la configuración, y pueden apuntar al dominio de Plaspy o a su dirección IP pública.

- Los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888, según el soporte y las preferencias de configuración.
- Plaspy escucha en el puerto 8888 para los reportes de los dispositivos y todos los dispositivos en Plaspy usan ese mismo puerto.
- Los rastreadores pueden apuntar al servidor Plaspy en d.plaspy.com o a la IP pública 54.85.159.138 si se requiere una entrada por IP.
- Elija UDP para reportes de eventos con menor sobrecarga cuando el rastreador lo soporte, o TCP si el firmware del dispositivo recomienda entrega con sesión confiable.
- Verifique que los cortafuegos de red y los ajustes APN del operador permitan tráfico saliente hacia el endpoint de Plaspy en el transporte y puerto configurados.

## Notas de compatibilidad del protocolo

- Diferencias de firmware entre lotes de producción GPT15 pueden afectar los reportes disponibles y los comandos de configuración remota.
- Revisiones de hardware o SKUs específicos por región pueden mostrar distinto comportamiento de bandas de radio o detalles de reporte de sensores.
- Variaciones del fabricante en APN por defecto o ajustes de servidor remoto implican que debe confirmar que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La selección de transporte influye en la fiabilidad y en el consumo de batería; valide rápidamente el comportamiento de UDP frente a TCP para su despliegue.
- Plaspy detecta automáticamente el protocolo del rastreador, pero se requieren el identificador de dispositivo correcto y la dirección de reporte adecuados para una detección exitosa.
- Siempre valide el comportamiento del dispositivo en un despliegue de prueba antes de un despliegue a gran escala para asegurar la telemetría y el alertado esperados.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GPT15 a nivel práctico ayuda a administradores e integradores a reducir el tiempo de configuración, agilizar la resolución de problemas y mantener la confiabilidad a largo plazo de los servicios de rastreo en Plaspy.

- Configuración más rápida al saber qué campos del dispositivo ajustar para que reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Resolución de problemas más eficiente cuando faltan reportes, porque podrá confirmar el transporte (UDP o TCP) y la alineación de puertos.
- Mejores decisiones sobre batería y reportes al entender cómo los intervalos de telemetría y la elección de transporte afectan la vida útil del dispositivo.
- Expectativas claras sobre alertas y comportamiento de geocercas al saber qué tipos de eventos de sensor enviará el dispositivo a Plaspy.
- Despliegues y actualizaciones de firmware más fluidos al considerar las variaciones del protocolo según la revisión del dispositivo.

## Por qué usar Plaspy con este protocolo

El GPT15 es un rastreador compacto orientado a viajes que funciona bien con Plaspy para visibilidad de equipaje y activos pequeños. Usar Plaspy con la telemetría del GPT15 ofrece mapas centralizados, historial y distribución de alertas para que propietarios y responsables reciban información accionable sobre ubicación, eventos de manipulación y estado de batería sin gestionar una infraestructura de backend propia.

Plaspy facilita el despliegue al utilizar un único puerto de escucha para todos los dispositivos y detección automática de protocolo, permitiendo a los equipos centrarse en la operación en lugar de en detalles de servidor específicos por dispositivo. Para conocer más sobre cómo Plaspy maneja integraciones de dispositivos y explorar las funciones de la plataforma, visite https://www.plaspy.com. Para el comportamiento más actual del firmware y los detalles específicos del protocolo siempre verifique la implementación del dispositivo con el fabricante en https://www.eelink.com.cn/ que puede actualizar el comportamiento del protocolo con el tiempo.
