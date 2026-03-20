---
slug: /xirgo/xt_4500/protocol
id: xt_4500-protocol
sidebar_label: Protocol
title: Xirgo - XT-4500 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Xirgo XT-4500 con Plaspy, incluyendo ajustes de conexión y guía de compatibilidad
keywords:
  - Protocolo Xirgo XT-4500
  - Rastreador GPS Xirgo XT-4500
  - Compatibilidad XT-4500 Plaspy
  - Protocolo de comunicación XT-4500
  - Protocolo rastreador Xirgo
  - Rastreo vehicular XT-4500
  - Rastreador de activos XT-4500
  - Soporte de protocolo Plaspy
  - Integración de rastreador GPS
  - Rastreo remoto de activos
---

# Xirgo - Protocolo XT-4500

Esta página describe el contexto público del protocolo para usar el Xirgo XT-4500 con Plaspy. Resume cómo se comunica el dispositivo en términos generales, qué papel cumple el protocolo del rastreador en el reporte de ubicación y estado del equipo, y qué aspectos considerar al integrar un XT-4500 en un despliegue con Plaspy. El XT-4500 es un módem GPRS de ultra bajo consumo con GPS integrado y sensores opcionales, por lo que su comportamiento de reporte suele priorizar la gestión de batería y energía además de actualizaciones periódicas de ubicación.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en información pública no sensible sobre conexión y compatibilidad, y recomienda verificar los detalles contra la documentación oficial de Xirgo.

## Visión general del protocolo

El protocolo de comunicación del XT-4500 define cómo el rastreador se identifica, abre una sesión de reporte y transmite la ubicación, sensores y estado de batería a un backend. En el contexto de Plaspy, el protocolo permite al servidor recibir telemetría utilizable y asociar esos datos al registro de activo correcto sin que usted necesite seleccionar manualmente el protocolo.

- Permite reportes de ubicación periódicos o impulsados por eventos que incluyen fijaciones GPS y marcas de tiempo
- Transmite información de estado del dispositivo como nivel de batería, eventos de sueño o activación y disparos de sensores
- Permite al servidor identificar la identidad del dispositivo y mapear los datos entrantes al activo en Plaspy
- Soporta transiciones entre modos de bajo consumo y modos activos de reporte para preservar la vida de la batería
- Proporciona la base para configuración remota y envío de comandos cuando el fabricante y el firmware del dispositivo lo permiten

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto público para conexiones entrantes de rastreadores y usa ese endpoint compartido para identificar automáticamente el protocolo de reporte. En la mayoría de los casos, un XT-4500 configurado correctamente comenzará a enviar datos a Plaspy y la plataforma detectará el protocolo sin que usted tenga que elegirlo manualmente.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del dispositivo
- Los dispositivos pueden configurarse para reportar mediante UDP o TCP en el puerto 8888
- Cuando el dispositivo apunta al endpoint y puerto de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador
- Normalmente usted no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está correctamente apuntado al endpoint de Plaspy

## Contexto de transporte y conexión

Comprender los ajustes de transporte y conexión ayuda a asegurar un enlace fiable entre un XT-4500 y Plaspy. El XT-4500 puede configurarse para usar distintos modos de transporte según el soporte del dispositivo y las restricciones del despliegue, por lo que es importante alinear esas opciones con el endpoint de Plaspy.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que reduce la complejidad de configuración
- Elija el modo de transporte (UDP vs TCP) en función de la fiabilidad de la red y los compromisos de consumo de energía del despliegue
- Confirme que el APN y los ajustes celulares en el XT-4500 coinciden con los de su operador y permiten conexiones salientes al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el dispositivo reporta datos, los intervalos y los campos disponibles
- Las variantes de hardware o módulos de sensores opcionales pueden añadir o quitar elementos de telemetría
- La selección del transporte entre UDP y TCP puede afectar las garantías de entrega y el consumo de batería
- Las herramientas de configuración del fabricante y los ajustes por defecto varían; confirme que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Pruebe con firmware representativo y condiciones de batería reales para validar intervalos de reporte y comportamiento de activación
- Siempre contraste el comportamiento del equipo con la documentación de Xirgo y las notas de las versiones de firmware

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del XT-4500 ayuda a asegurar una configuración confiable, agiliza la resolución de problemas y permite comportamientos previsibles en campo. Saber qué reporta el dispositivo y cómo se conecta permite optimizar la vida de la batería, el uso de la red y las alertas.

- Confirma la identidad del dispositivo y su mapeo al registro de activo correcto en Plaspy
- Ayuda a diagnosticar por qué faltan o se retrasan reportes esperados revisando el transporte y los ajustes del endpoint
- Permite ajustar los intervalos de reporte y los modos de energía para que coincidan con las necesidades operativas
- Facilita la validación significativa al realizar actualizaciones de firmware o sustituciones de hardware
- Reduce el tiempo de despliegue al alinear la configuración del dispositivo con el endpoint y puerto de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT-4500 con Plaspy ofrece a las organizaciones una forma directa de recibir informes de ubicación y estado de activos desde un rastreador GPS de bajo consumo. El enfoque de endpoint compartido y la detección automática de protocolo de Plaspy reducen la complejidad de la puesta en marcha, de modo que los equipos pueden enfocarse en la visibilidad de activos, la gestión de batería y la monitorización operativa en lugar de en el mapeo manual de protocolos.

Para obtener más información sobre cómo funciona Plaspy con dispositivos como el XT-4500 visite https://www.plaspy.com. Para detalles específicos y actuales del protocolo del dispositivo, comportamiento de firmware y notas de implementación, por favor verifique la información directamente con el fabricante en https://xirgo.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
