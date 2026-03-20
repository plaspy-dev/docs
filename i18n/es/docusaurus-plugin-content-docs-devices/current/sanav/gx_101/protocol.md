---
slug: /sanav/gx_101/protocol
id: gx_101-protocol
sidebar_label: Protocol
title: Sanav - GX-101 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador Sanav GX-101 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo Sanav GX-101
  - Protocolo GPS Sanav GX-101
  - Sanav GX-101 Plaspy
  - Protocolo del rastreador GX-101
  - Comunicación rastreador Sanav
  - Rastreo de vehículos Plaspy
  - Compatibilidad GPS Plaspy
  - Protocolo comunicación GX-101
  - Rastreador vehicular Sanav
  - Integración de dispositivos Plaspy
---

# Sanav - Protocolo GX-101

Esta página describe el contexto público del protocolo para usar el rastreador Sanav GX-101 con Plaspy. Explica de forma general cómo se comunica el equipo, qué comportamiento de reporte esperar y qué ajustes de conexión usa Plaspy para la integración. El contenido se centra en información práctica y de compatibilidad pública, no en detalles internos de firmware.

El GX-101 es un rastreador robusto para vehículos que combina un módulo GSM Siemens con un receptor GPS GM-158 MTK-3301 y entradas/salidas expuestas para sensores y relés. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. En Plaspy, el endpoint público es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto utilizado por todos los dispositivos es 8888, y el equipo puede configurarse para usar UDP o TCP en ese puerto. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

A un nivel práctico, el protocolo de reporte del GX-101 es el mecanismo que el rastreador usa para enviar posición, estado e información de sensores a un servidor remoto como Plaspy. El protocolo permite que el dispositivo se identifique, reporte ubicaciones GPS y comunique estados de entradas/salidas y alarmas de forma que la plataforma pueda procesarlos y mostrarlos.

- Permite que el rastreador informe ubicación, hora y estado a Plaspy para mantener historial de posiciones y generar alertas.
- Incluye información de identidad del dispositivo para que Plaspy asocie los mensajes entrantes con el rastreador correcto.
- Transmite cambios en sensores e I/O como encendido, puertas o entradas auxiliares cuando el GX-101 dispone de ellos.
- Soporta envíos periódicos o basados en eventos según la configuración de tiempo y distancia.
- Funciona sobre redes móviles estándar hacia el endpoint d.plaspy.com o la IP 54.85.159.138.

## Detección del protocolo por parte de Plaspy

Plaspy está diseñada para aceptar conexiones de muchos modelos de rastreadores usando un único endpoint público y puerto. Cuando un rastreador correctamente configurado reporta a la dirección de Plaspy, la plataforma detecta el protocolo entrante y mapea los datos al modelo de dispositivo de Plaspy automáticamente, reduciendo pasos de configuración manual para la mayoría de los usuarios.

- El dominio del servidor Plaspy es d.plaspy.com y la IP es 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint.
- En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.
- La detección cubre patrones de reporte comunes en rastreadores vehiculares y asigna los campos a los paneles y alertas de Plaspy.

## Transporte y contexto de conexión

La elección del transporte y la configuración del dispositivo determinan cómo el GX-101 llega a Plaspy. El rastreador puede configurarse para usar UDP o TCP según las capacidades de firmware y las preferencias de configuración. La fiabilidad de la conexión, respaldo de batería y las condiciones de red locales influyen en qué transporte es más conveniente.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Los equipos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino de reporte.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la provisión.
- La selección del transporte normalmente se configura en el propio rastreador mediante SMS, herramientas de configuración o interfaces de provisión del fabricante.
- Factores de red como comportamiento del operador, NAT y calidad de señal pueden afectar la entrega de mensajes y deben considerarse al elegir UDP o TCP.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar tiempos de mensaje, campos opcionales o funciones soportadas; siempre verifique la versión de firmware del equipo.
- Variantes de hardware y versiones locales del GX-101 pueden ofrecer diferente cableado o comportamiento de entradas/salidas y sensores.
- La configuración del fabricante determina si el rastreador reporta por UDP o TCP y qué dirección de servidor está establecida.
- Algunas funciones como reporte de batería de respaldo o reproducción desde memoria interna pueden estar controladas por firmware y no estar estandarizadas entre revisiones.
- Confirme comandos de configuración o ajustes por SMS necesarios con la documentación oficial de Sanav antes de provisionar dispositivos.
- En caso de duda, pruebe un equipo de forma completa con su cuenta Plaspy antes de desplegar en masa.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GX-101 ayuda a asegurar una instalación confiable, agilizar la resolución de problemas y garantizar un funcionamiento predecible a largo plazo con Plaspy. Entender el protocolo y el comportamiento del transporte reduce el tiempo de integración y facilita la interpretación del comportamiento del equipo por parte del personal operativo.

- Permite verificar que el dispositivo apunte al endpoint y puerto correctos de Plaspy.
- Agiliza el diagnóstico de actualizaciones de posición faltantes o retrasadas al clarificar transporte e intervalos de reporte.
- Ayuda a mapear señales de I/O y sensores en Plaspy para que alertas y eventos funcionen como se espera.
- Facilita la planificación de actualizaciones de firmware y cómo estas pueden alterar el comportamiento de reporte.
- Ofrece un camino claro para validar los pasos de configuración del fabricante durante la instalación.

## Ventajas de usar Plaspy con este protocolo

Usar Plaspy con el Sanav GX-101 ofrece una forma conveniente de centralizar ubicación de vehículos, monitoreo de sensores y alertas en una sola plataforma. Las características de hardware del GX-101 como entradas/salidas expuestas, batería de respaldo y construcción resistente encajan bien con Plaspy para monitoreo de flotas, recuperación ante robo y supervisión operativa.

Plaspy simplifica la provisión de dispositivos al usar un puerto único y detección automática de protocolo, reduciendo la configuración manual para muchos rastreadores. Para obtener más información sobre Plaspy y cómo soporta la integración de dispositivos, visite https://www.plaspy.com. Por favor verifique los detalles más recientes del protocolo específico del dispositivo, notas de firmware e instrucciones del fabricante en el sitio oficial de Sanav en http://es.sanav.com/ ya que el soporte del protocolo y el comportamiento del equipo pueden cambiar con el tiempo.
