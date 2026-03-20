---
slug: /aquila/ts101_basic/protocol
id: ts101_basic-protocol
sidebar_label: Protocol
title: Aquila - TS101-Basic Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Aquila TS101-Basic y su comunicación con Plaspy para rastreo GPS confiable
keywords:
  - protocolo Aquila TS101-Basic
  - protocolo GPS Aquila TS101-Basic
  - protocolo de rastreo Aquila TS101-Basic
  - protocolo del rastreador Aquila GPS
  - compatibilidad TS101-Basic Plaspy
  - protocolo de dispositivo Plaspy
  - rastreo vehicular Aquila TS101-Basic
  - protocolo para gestión de flotas
  - compatibilidad de rastreo Aquila
  - integración rastreador GPS Plaspy
---

# Aquila - Protocolo TS101-Basic

Esta página describe el contexto público del protocolo para usar el rastreador Aquila TS101-Basic con Plaspy. Resume cómo se comunica el dispositivo a alto nivel, qué esperar al apuntar el rastreador hacia Plaspy y qué ajustes de conexión se emplean para el reporte. El contenido es intencionalmente no sensible y está pensado para ayudar en la configuración, la verificación de compatibilidad y la resolución básica de problemas.

El TS101-Basic es un rastreador vehicular compacto con protección contra manipulación, carcasa IP65, antenas internas y almacenamiento offline para hasta 10,000 registros. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Confirme el comportamiento específico del dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo es el método de reporte del dispositivo que permite al TS101-Basic identificarse ante un servidor y entregar datos de posición, estado y eventos para su uso en Plaspy. A alto nivel, el protocolo regula cómo el rastreador empaqueta y envía telemetría y cómo se manejan los acuses de recibo del servidor y los intercambios de comandos.

- Permite que el rastreador informe ubicación, hora y estados a un servidor remoto para monitoreo en tiempo real.
- Transporta la identidad del dispositivo y la información de sesión para que Plaspy asocie los datos entrantes con un activo registrado.
- Soporta reporte en búfer, de modo que los registros almacenados en el TS101-Basic se transmitan cuando se restablezca la conectividad.
- Transmite información de eventos y manipulación útil para alertas de seguridad y operaciones de flota.
- Funciona sobre transportes de red estándar, permitiendo integrar el rastreador con Plaspy sin ruteos de red específicos por dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de rastreadores en un único endpoint compartido e inspecciona los datos entrantes para determinar el manejo correcto. En la mayoría de los casos usted no necesita elegir manualmente un protocolo dentro de Plaspy siempre que el rastreador esté configurado para reportar al endpoint de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a la plataforma.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de red en el servidor.
- Si el TS101-Basic está configurado para enviar datos al endpoint de Plaspy, la plataforma identificará el tipo de rastreador y procesará los mensajes entrantes.
- Normalmente usted solo necesita establecer la dirección de reporte y el tipo de transporte en el propio dispositivo para una integración básica.

## Contexto de transporte y conexión

Los ajustes de conexión determinan cómo el TS101-Basic alcanza el servidor de Plaspy y qué transporte se utiliza para el reporte. Estos son datos públicos de conexión de Plaspy que puede configurar en el dispositivo o validar con herramientas de red.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte de red del equipo y los ajustes elegidos
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas
- Apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el transporte configurado es la forma estándar de enviar reportes a Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el timing de mensajes, los campos disponibles y las funciones opcionales; verifique la versión de firmware del rastreador al validar compatibilidad.
- Las revisiones de hardware o variantes del TS101-Basic pueden introducir diferencias en los transportes soportados o en el reporte de eventos.
- Las opciones de configuración del lado del fabricante pueden cambiar los valores por defecto de servidor y puerto; asegúrese de que el dispositivo esté apuntando al endpoint de Plaspy.
- La selección de transporte entre UDP y TCP afecta las garantías de entrega y debe coincidir con las capacidades del dispositivo y el entorno de red.
- El comportamiento de almacenamiento en búfer y la retransmisión de registros offline dependen de los ajustes de almacenamiento del dispositivo y de la lógica del firmware.
- Confirme siempre el comportamiento frente a la documentación oficial del fabricante para el lote y firmware exactos del dispositivo.

## Por qué es importante comprender el protocolo

Entender el comportamiento básico del protocolo ayuda a garantizar una configuración fiable, una resolución de problemas eficaz y una operación predecible a largo plazo al usar el TS101-Basic con Plaspy. Tener claridad sobre cómo fluyen los datos entre el dispositivo y el servidor reduce el tiempo de integración y mejora la visibilidad de la flota.

- Acelera la configuración inicial al centrar los ajustes en la dirección del servidor y el transporte requeridos por Plaspy.
- Ayuda a diagnosticar problemas de conectividad comprobando si el dispositivo llega a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Aclara qué esperar respecto a cuándo se subirán los registros almacenados tras cortes o pérdida de energía.
- Orienta la decisión de usar UDP o TCP según las condiciones de red y las necesidades de entrega.
- Facilita las conversaciones con soporte al separar el comportamiento a nivel de dispositivo del procesamiento que Plaspy realiza automáticamente.

## Por qué usar Plaspy con este protocolo

Usar el Aquila TS101-Basic con Plaspy ofrece a las organizaciones una vía práctica para obtener visibilidad vehicular, detección de manipulaciones y acceso a registros históricos para la gestión de flota y activos. Las características del TS101-Basic, como la carcasa IP65, el interruptor de manipulación y las antenas internas, lo hacen adecuado para muchas instalaciones, y Plaspy procesa los datos reportados para ofrecer mapas, alertas y funciones de reporte que respaldan la supervisión operativa.

Si desea aprender más sobre cómo Plaspy trabaja con dispositivos como el TS101-Basic visite https://www.plaspy.com. Para la información más actualizada sobre el protocolo específico del dispositivo, notas de firmware y guías de instalación, consulte el sitio del fabricante en https://www.itriangle.in/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
