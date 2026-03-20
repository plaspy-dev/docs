---
slug: /xirgo/xt_2400/protocol
id: xt_2400-protocol
sidebar_label: Protocol
title: Xirgo - XT-2400 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo y compatibilidad con Plaspy para el rastreador GPS Xirgo XT-2400
keywords:
  - Xirgo XT-2400
  - protocolo XT-2400
  - rastreador GPS XT-2400
  - protocolo Xirgo
  - protocolo GPS Xirgo
  - compatibilidad XT-2400 con Plaspy
  - protocolo de seguimiento vehicular
  - protocolo rastreador OBDII
  - rastreador para gestión de flotas
  - protocolo de comunicación de rastreador
---

# Xirgo - Protocolo XT-2400

Esta página ofrece una visión pública y no sensible sobre el contexto de comunicación al usar el Xirgo XT-2400 con Plaspy. Se centra en cómo el dispositivo envía datos de vehículo y ubicación a la plataforma Plaspy y qué aspectos tener en cuenta al configurar los equipos para transmitir telemetría y diagnósticos en soluciones de monitoreo de flotas y vehículos.

Plaspy utiliza ajustes de conexión compartidos para los rastreadores compatibles y detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página describe el contexto general de comunicación y notas prácticas de compatibilidad, en lugar de detalles de implementación a bajo nivel.

## Visión general del protocolo

El protocolo de comunicación del XT-2400 define cómo el equipo transmite posición, parámetros OBDII, estado del vehículo y datos de sensores a un servidor remoto. A grandes rasgos, el protocolo permite la identificación, reportes periódicos o por evento, y la entrega de campos útiles como velocidad, VIN, estado de encendido, ubicación, eventos del acelerómetro y códigos de falla diagnóstica.

- Permite que el XT-2400 se identifique y relacione los reportes con un registro de vehículo o dispositivo.
- Transporta la ubicación GPS y la hora a Plaspy para que las posiciones puedan mapearse y analizarse.
- Incluye campos derivados de OBDII como VIN, estado de encendido, códigos de falla y parámetros del vehículo.
- Transmite eventos de acelerómetro y de movimiento para análisis de conducción y detección de incidentes.
- Soporta intervalos de reporte configurables y disparadores por evento mediante las funcionalidades scriptables del dispositivo.
- Permite a Plaspy recibir la telemetría necesaria para seguimiento, alertas y diagnósticos sin requerir cambios a nivel de dispositivo en la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y analiza los reportes para identificar el protocolo del dispositivo. En la mayoría de los casos, un equipo configurado para reportar a Plaspy será reconocido automáticamente y no será necesaria la selección manual del protocolo en la plataforma.

- Plaspy usa un puerto compartido para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Cuando el XT-2400 se configura para apuntar al endpoint de Plaspy, la plataforma identifica el formato de los reportes y mapea los campos entrantes.
- Normalmente usted no necesita elegir un protocolo específico dentro de Plaspy si el dispositivo está correctamente configurado para reportar a la dirección de Plaspy.
- Una identificación correcta del equipo permite a Plaspy encauzar VIN, DTCs, velocidad, ubicación y eventos del acelerómetro hacia la cuenta y los paneles adecuados.
- Si la detección automática no ocurre, revise la configuración del servidor en el dispositivo y confirme que el rastreador apunte al endpoint de Plaspy y use el tipo de transporte correcto.

## Transporte y contexto de conexión

El XT-2400 soporta conectividad de datos celulares y puede configurarse para entregar reportes sobre protocolos de transporte comunes. Plaspy expone un endpoint y puerto compartidos que los dispositivos pueden usar para comunicarse con la plataforma.

- Los dispositivos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138.
- El XT-2400 puede usar UDP o TCP para reportar, según la configuración del dispositivo y las capacidades del firmware.
- Plaspy escucha en el puerto 8888 y todos los equipos en Plaspy usan el mismo puerto para reportes.
- Elija UDP o TCP en el dispositivo según la confiabilidad de la red y la documentación de firmware proporcionada por el fabricante.
- Confirme APN y conectividad celular de forma independiente antes de diagnosticar comportamientos de protocolo de más alto nivel.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los campos disponibles, el comportamiento de reporte por defecto y los modos de transporte soportados; confirme siempre la versión de firmware instalada.
- Las revisiones de hardware y los scripts de configuración en el XT-2400 pueden habilitar o desactivar las funciones de reporte OBDII y sensores.
- Las configuraciones y el aprovisionamiento del lado del fabricante pueden modificar cómo se presentan identificadores como el VIN o el número de serie del dispositivo en los reportes.
- La selección de transporte entre UDP y TCP afecta la semántica de entrega y debe coincidir con la configuración del dispositivo hacia el puerto de escucha de Plaspy.
- La detección automática de Plaspy facilita la integración, pero validar que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 es un paso de solución de problemas habitual.
- Para campos específicos de aplicación o scripting personalizado en el XT-2400, consulte la documentación oficial de Xirgo para confirmar los reportes disponibles.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del XT-2400 ayuda a garantizar un flujo de datos confiable hacia Plaspy, acelera la resolución de problemas y aclara qué telemetría puede obtenerse del dispositivo.

- Reduce el tiempo de integración al clarificar qué campos del dispositivo se mapean a puntos de datos de Plaspy como ubicación, velocidad, VIN y códigos DTC.
- Facilita el diagnóstico de problemas de conectividad al verificar transporte, endpoint y configuración APN antes de inspeccionar el comportamiento del protocolo a un nivel superior.
- Orienta las decisiones sobre firmware y configuración al habilitar o deshabilitar reportes OBDII, eventos de acelerómetro o funciones scriptables.
- Mejora la confiabilidad operativa al alinear los intervalos de reporte y los disparadores de eventos del dispositivo con las necesidades de monitoreo de la flota.
- Apoya decisiones informadas al desplegar actualizaciones de firmware o revisiones de hardware en una flota de vehículos.

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT-2400 con Plaspy integra el contexto vehicular a nivel OBDII con la posición GPS y eventos de sensores para soportar seguimiento de flotas, análisis de comportamiento del conductor y diagnóstico del vehículo. El GPS integrado, el acelerómetro y la interfaz OBDII del XT-2400 lo hacen adecuado para aplicaciones en vehículos ligeros y de pasajeros donde importan tanto la ubicación como la salud del vehículo.

Si desea saber más sobre cómo Plaspy gestiona la conectividad de dispositivos y los protocolos, visite https://www.plaspy.com. Para detalles técnicos más actuales sobre el comportamiento del protocolo XT-2400, el firmware y la implementación específica del dispositivo, consulte la documentación oficial de Xirgo en https://xirgo.com/ ya que el soporte del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
