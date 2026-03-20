---
slug: /itriangle/ts101_basic/protocol
id: ts101_basic-protocol
sidebar_label: Protocol
title: iTriangle - TS101 BASIC Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del iTriangle TS101 BASIC y cómo se comunica con Plaspy para rastreo fiable de flotas
keywords:
  - protocolo iTriangle TS101 BASIC
  - protocolo GPS iTriangle TS101 BASIC
  - protocolo iTriangle TS101 BASIC Plaspy
  - protocolo de comunicación TS101 BASIC
  - protocolo de rastreo TS101 BASIC
  - protocolo de rastreador GPS iTriangle
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreo GPS para flotas
  - protocolo de rastreador de vehículo iTriangle
  - protocolo de telemetría GPS
---

# iTriangle - TS101 BASIC Protocol

Esta página describe, a alto nivel, el contexto del protocolo público para usar el rastreador iTriangle TS101 BASIC con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, el papel que juega su protocolo de reporte en la entrega confiable de telemetría y qué verificar al integrar el equipo en una implementación de Plaspy. El objetivo es ofrecer información de protocolo clara y no sensible que ayude a instaladores y administradores a planear la conectividad y las pruebas de validación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del TS101 BASIC puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página mantiene descripciones generales e invita a validar contra la documentación del fabricante y las notas de firmware del dispositivo.

## Resumen del protocolo

El TS101 BASIC emplea un protocolo de reporte para entregar posiciones GNSS, señales de movimiento y eventos, estados de E/S y registros breves de telemetría a un servidor backend para su ingestión. El protocolo define cómo el rastreador se identifica, si agrupa o transmite continuamente los registros de posición, y cómo informa eventos clave como cambios de encendido, alertas de manipulación y sincronización de puntos almacenados tras una pérdida de conexión.

- Permite que el rastreador reporte posición GNSS y telemetría con marca temporal a Plaspy para seguimiento en tiempo real y reproducción histórica.
- Transporta banderas de evento y telemetría básica de E/S como encendido, entradas digitales y eventos de movimiento activados por acelerómetro utilizados por las reglas de Plaspy.
- Soporta reproducción desde almacenamiento interno para que los registros guardados se transmitan a Plaspy cuando se restaura la conectividad.
- Autoriza flujos de control remoto para configuración o firmware cuando el dispositivo y el sistema de aprovisionamiento lo permiten.
- Provee reportes periódicos y compactos adecuados para enlaces de datos celulares 2G y despliegues en vehículos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de dispositivos en un único endpoint y puerto compartidos y aplica detección automática de protocolo para identificar el formato entrante. En la mayoría de las integraciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy con los parámetros de conexión correctos.

- El dominio del servidor Plaspy es d.plaspy.com y se puede usar como host en la configuración del rastreador.
- La IP del servidor Plaspy es 54.85.159.138, una alternativa para apuntar al endpoint de Plaspy.
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y empieza a reportar.
- Si el dispositivo está correctamente configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, normalmente no se requiere seleccionar el protocolo manualmente.

## Transporte y contexto de conexión

El modo de conexión y el transporte (UDP frente a TCP) dependen del soporte del firmware del dispositivo y del aprovisionamiento. La familia TS101 BASIC está diseñada para operar sobre datos celulares y puede configurarse para usar transportes comunes hacia el colector de Plaspy. Mantenga la selección de transporte consistente con la configuración del dispositivo y las expectativas de fiabilidad de red para su flota.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica reglas de firewall y de red en despliegues.
- Elija TCP si necesita un transporte orientado a conexión; elija UDP cuando la reducción de overhead o las restricciones del dispositivo favorezcan la entrega por datagramas.
- Valide la APN y la configuración de la red de datos celulares para que el rastreador alcance el endpoint de Plaspy de forma fiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden alterar la cadencia de mensajes, los campos disponibles o elementos opcionales de telemetría; verifique las notas de firmware al solucionar problemas.
- Revisión de hardware o variantes regionales pueden afectar bandas celulares soportadas u opciones de transporte y, por ende, influir en las características útiles del protocolo.
- La elección entre UDP y TCP al configurar el dispositivo afecta las características de entrega pero no cambia los tipos de datos de alto nivel que se reportan a Plaspy.
- El comportamiento del almacenamiento onboard (cuántos puntos se guardan y cuándo se suben) es una característica del dispositivo; confirme límites y comportamiento de recuperación en la documentación de iTriangle.
- Valide que la configuración de DNS o IP del dispositivo use d.plaspy.com o 54.85.159.138 y que el puerto esté en 8888 para garantizar conectividad con Plaspy.
- Siempre compare el comportamiento observado con la documentación oficial del fabricante para detalles de protocolo específicos de firmware.

## Por qué es importante entender el protocolo

Conocer cómo el TS101 BASIC se comunica con Plaspy facilita instalaciones correctas, acelera la resolución de problemas y asegura operación fiable a largo plazo. Incluso cuando Plaspy detecta el protocolo automáticamente, a los instaladores y administradores les beneficia entender las opciones de transporte, el reporte de eventos y el comportamiento del almacenamiento.

- Asegura que los dispositivos estén configurados para reportar al endpoint y puerto correctos de Plaspy para que los datos lleguen de manera consistente.
- Ayuda a diagnosticar problemas comunes de conectividad como APN mal configurada, host/IP incorrecto o puertos bloqueados.
- Aclara expectativas sobre cómo se reproducen los puntos almacenados tras cortes y cómo las banderas de evento se mapean a alertas en la plataforma.
- Orienta en la elección adecuada entre UDP y TCP según condiciones de red y requisitos de recuperación.
- Facilita la planificación de actualizaciones de firmware y aprovisionamiento de configuración sin interrumpir el reporte a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TS101 BASIC con Plaspy ofrece a los equipos operativos un camino sencillo para ingerir posición, movimiento y telemetría básica de E/S desde un rastreador vehicular compacto. El GNSS multi-constelación del dispositivo, su almacenamiento interno y sus E/S prácticas complementan la visualización en tiempo real de Plaspy, la reproducción histórica y las capacidades de alerta para apoyar la monitorización de flotas, flujos anti-robo y verificación logística.

Si desea conocer más sobre la integración de dispositivos como el TS101 BASIC con la plataforma Plaspy, visite https://www.plaspy.com para explorar características y opciones de despliegue. Para detalles específicos del protocolo del dispositivo, comportamiento de firmware y notas de implementación del fabricante, verifique la información en el sitio oficial de iTriangle https://www.itriangle.net/ ya que el comportamiento puede cambiar entre revisiones de firmware y hardware.
