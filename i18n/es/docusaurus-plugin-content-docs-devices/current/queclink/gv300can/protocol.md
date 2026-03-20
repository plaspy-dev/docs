---
slug: /queclink/gv300can/protocol
id: gv300can-protocol
sidebar_label: Protocol
title: QuecLink - GV300CAN Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo QuecLink GV300CAN y cómo comunica telemetría y posición con Plaspy
keywords:
  - Protocolo QuecLink GV300CAN
  - Protocolo GPS QuecLink GV300CAN
  - Compatibilidad GV300CAN Plaspy
  - Protocolo de comunicación GV300CAN
  - Protocolo rastreador vehicular QuecLink
  - Telemetría CANBus GV300CAN
  - Integración rastreador Plaspy
  - Rastreo de flotas GV300CAN
  - Monitoreo cadena de frío GV300CAN
  - Protocolo rastreador GPS QuecLink
---

# QuecLink - Protocolo GV300CAN

Esta página ofrece contexto público sobre el protocolo para usar el rastreador QuecLink GV300CAN con Plaspy. Describe cómo el dispositivo se comunica con Plaspy en términos generales, el papel que juega el protocolo en el envío de posiciones GNSS, telemetría CANBus y eventos de sensores, y qué considerar durante la integración y resolución de problemas. El objetivo es explicar el comportamiento de comunicación a un nivel general sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El GV300CAN ofrece opciones de transporte TCP, UDP y SMS y usa el protocolo propietario @Track de Queclink; estas opciones determinan en la práctica cómo el equipo reporta a Plaspy.

## Visión general del protocolo

El protocolo implementado en el GV300CAN define cómo el rastreador formatea y transmite posición, tramas CANBus, entradas digitales y analógicas, y eventos de alarma a un endpoint backend como Plaspy. En términos operativos, el protocolo permite identificación, reportes periódicos o por evento, y la recepción de comandos remotos cuando el transporte admite sesiones bidireccionales.

- Transmite posición GNSS y metadatos de solución para que Plaspy ubique el dispositivo en el mapa en tiempo real y calcule métricas de movimiento.
- Codifica telemetría CANBus y J1708 para que parámetros del motor, velocidad y datos diagnósticos se expongan dentro de Plaspy.
- Informa eventos de alarma e entradas como geocerca, detección de choque y batería baja para activar alertas y flujos de trabajo.
- Soporta distintos transportes, incluyendo TCP, UDP y SMS, de modo que el reporte se ajuste a la disponibilidad de red y a los requisitos de despliegue.
- Permite comandos remotos y control de salidas cuando la comunicación bidireccional está activa, habilitando flujos como bloqueo remoto o control de salidas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y usa ese tráfico para identificar el protocolo del rastreador automáticamente. En la mayoría de los casos, un GV300CAN configurado para reportar a Plaspy será reconocido sin que sea necesario seleccionar el protocolo manualmente, lo que simplifica la configuración para integradores de flotas e instaladores.

- Plaspy escucha en un único endpoint público para reportes de dispositivos en d.plaspy.com y en la dirección IP 54.85.159.138.
- La plataforma acepta conexiones de dispositivos en el puerto 8888 para todos los dispositivos soportados, por lo que se usa un único puerto entre tipos de equipos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Debido a la detección automática del protocolo, usted normalmente no necesita escoger un protocolo dentro de la plataforma si el dispositivo está correctamente dirigido al endpoint de Plaspy.
- Si el dispositivo también soporta reporte por SMS, ese transporte puede servir como respaldo cuando sea compatible con el despliegue y el operador móvil.

## Contexto de transporte y conexión

La configuración de conexión determina si el rastreador opera en modo orientado a sesión o en reportes sin conexión, lo cual afecta la latencia, la capacidad de respuesta a comandos y el estado de sesión. El GV300CAN soporta múltiples transportes, así que elija el que mejor se adapte a la cobertura y necesidades operativas.

- El GV300CAN puede configurarse para usar UDP o TCP para reportes directos a Plaspy en el puerto 8888.
- Los dispositivos pueden apuntarse al dominio d.plaspy.com o directamente a la IP 54.85.159.138 para el envío de datos.
- Todos los dispositivos que reportan a Plaspy comparten el puerto 8888, lo que simplifica la configuración de cortafuegos y redes.
- El reporte por TCP admite sesiones persistentes para intercambio de comandos; UDP está disponible para telemetría ligera y sin estado.
- SMS sigue siendo una opción en el GV300CAN como método alternativo de reporte y respaldo según el soporte de firmware y del operador.

## Notas de compatibilidad del protocolo

- Las versiones de firmware del fabricante pueden cambiar el conjunto de mensajes, campos y opciones de transporte; valide contra la documentación actual de Queclink para comportamientos específicos por firmware.
- Las revisiones de hardware y las variantes regionales pueden diferir en interfaces disponibles, como soporte CAN o J1708; confirme que la variante instalada cumple con sus necesidades de integración.
- La selección del transporte influye en la capacidad de respuesta a comandos y en el comportamiento de sesión; pruebe configuraciones TCP y UDP cuando sea posible.
- Plaspy detecta el protocolo automáticamente, pero es necesario que el dispositivo esté correctamente configurado apuntando al endpoint de Plaspy para que la detección tenga éxito.
- El comportamiento de reportes por SMS y el soporte de comandos pueden variar según el operador y el firmware, por lo que conviene probar los flujos SMS si van a ser críticos.
- Verifique siempre la compatibilidad de los campos de telemetría específicos que necesite, como mapeos de señales CAN o conversiones de sensores analógicos, antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GV300CAN ayuda a garantizar una instalación fiable, a mapear correctamente los datos dentro de Plaspy y a acelerar la resolución de problemas cuando los dispositivos actúan de forma inesperada. Comprender las capacidades del protocolo también guía decisiones sobre transporte, gestión de firmware y qué campos de telemetría estarán disponibles en reportes y alertas.

- Reduce errores de configuración al ajustar transporte y endpoint del dispositivo a los requisitos de Plaspy.
- Facilita mapear canales CANBus y sensores a los campos correctos en Plaspy para informes precisos.
- Mejora la resolución de problemas al aclarar si un problema es de red, transporte, firmware o configuración.
- Ayuda a planificar actualizaciones de firmware y despliegues de hardware al destacar la dependencia de cambios del fabricante.
- Permite diseñar mejor las alertas y automatizaciones al saber qué eventos y entradas transmitirá el rastreador.

## Por qué usar Plaspy con este protocolo

Usar el GV300CAN con Plaspy ofrece a las organizaciones una vía práctica para capturar posiciones GNSS, telemetría vehicular CAN, datos de sensores y alertas de eventos en una sola plataforma de gestión de flotas. La combinación de interfaces de calidad vehicular y la ingestión centralizada de Plaspy facilita la creación de alertas basadas en ubicación, reportes telemáticos y flujos de control remoto como inmovilización o conmutación de salidas.

Si desea obtener más información sobre cómo Plaspy maneja la conectividad de dispositivos, los reportes y los flujos de trabajo para flotas visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y revisiones de hardware consulte la documentación oficial de Queclink en https://www.queclink.com/ ya que el comportamiento del fabricante y el soporte del protocolo pueden evolucionar con el tiempo.
