---
slug: /aoya/t6/protocol
id: t6-protocol
sidebar_label: Protocol
title: AoYa - T6 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para conectar el rastreador AoYa T6 con la plataforma Plaspy
keywords:
  - protocolo AoYa T6
  - protocolo GPS AoYa T6
  - protocolo de rastreo AoYa T6
  - comunicación AoYa T6
  - compatibilidad AoYa T6
  - protocolo rastreador AoYa
  - protocolo de dispositivo Plaspy
  - rastreo vehicular AoYa T6
  - protocolo rastreador GPS Plaspy
  - compatibilidad rastreador GPS T6
---

# AoYa - Protocolo T6

Esta página describe el contexto público del protocolo para usar el rastreador GPS AoYa T6 con la plataforma de gestión de flotas Plaspy. Explica de forma general cómo se comunica el dispositivo, el papel del protocolo de reporte en la integración con Plaspy y qué ajustes de conexión se utilizan para enviar datos a los servidores de Plaspy. El AoYa T6 es un rastreador compacto para automóviles que admite fuentes de ubicación GPS, AGPS y LBS, e incluye las funciones de telemetría habituales en dispositivos para vehículos pequeños.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la revisión de firmware, lote de hardware e implementación del fabricante, por lo que esta página se centra en el contexto público y práctico de conexión en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de mensajes y convenciones que utiliza el T6 para informar ubicación, estado del equipo y alertas a un servidor remoto. En el caso del AoYa T6, esto incluye actualizaciones de posición derivadas de GPS, AGPS y ubicación por red, además de telemetría básica que un sistema de flotas como Plaspy puede mostrar a los usuarios.

- Transporta reportes de posición y marcas de tiempo que permiten a Plaspy mapear la ubicación del vehículo en tiempo real.
- Envía mensajes periódicos de estado o latidos para que la plataforma pueda monitorear la disponibilidad del equipo.
- Entrega datos por eventos, como alertas de movimiento, señales de manipulación o pérdida de energía, que ayudan al monitoreo operativo.
- Proporciona datos de identificación para que Plaspy pueda asociar los reportes entrantes con la unidad correcta.
- Usa el módem y la pila de red del dispositivo para transportar mensajes a través de las redes celulares compatibles con el rastreador.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el manejo apropiado para cada dispositivo. Cuando el AoYa T6 está apuntando al endpoint de Plaspy, el servicio mapea los datos entrantes con el registro del equipo correspondiente sin que en la mayoría de los casos sea necesaria una selección de protocolo manual.

- Plaspy acepta reportes en el dominio público d.plaspy.com y en la IP del servidor 54.85.159.138 en un puerto compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que un solo endpoint puede manejar múltiples modelos de rastreadores.
- Plaspy detecta automáticamente el protocolo del rastreador en función de los datos entrantes y la identificación del dispositivo.
- Por lo general, usted solo debe configurar el rastreador para que reporte al endpoint de Plaspy; Plaspy se encarga de la coincidencia del protocolo.
- Si los reportes del dispositivo incluyen identificadores del fabricante o IMEI, Plaspy los utiliza para vincular los datos con la cuenta correcta.

## Transporte y contexto de conexión

El transporte y la direccionamiento son una parte sencilla pero importante de la integración. El AoYa T6 puede configurarse para usar UDP o TCP para reportar, según la configuración del dispositivo y el entorno de red. Al apuntar el equipo a Plaspy, use el endpoint y puerto compartidos de Plaspy.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El servicio de Plaspy escucha en el puerto 8888 y el T6 puede usar UDP o TCP en ese mismo puerto.
- Todos los dispositivos soportados por Plaspy usan el puerto 8888, lo que simplifica la configuración y las reglas de firewall.
- Elija UDP o TCP según la configuración del equipo y las necesidades de confiabilidad; ambos transportes son soportados por el endpoint de Plaspy.
- Asegúrese de que el rastreador tenga conectividad celular y una SIM activa para alcanzar el dominio o la dirección del servidor Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos soportados o funciones opcionales; siempre verifique las notas del firmware del dispositivo.
- Revisiones de hardware o distintos lotes de producción pueden afectar los sensores disponibles o el comportamiento de gestión de energía.
- El dispositivo puede soportar múltiples modos de transporte; seleccionar UDP o TCP puede influir en las garantías de entrega y en la sobrecarga de la red.
- Ajustes del fabricante como intervalos de reporte, uso de AGPS y fallback a LBS pueden afectar la cadencia y precisión de los informes de ubicación.
- Valide la compatibilidad confirmando que el dispositivo está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Para comandos avanzados o funciones de configuración remota, consulte la documentación oficial de AoYa correspondiente a la versión de firmware del T6.

## Por qué es importante entender el protocolo

Comprender cómo el T6 se comunica con un servidor facilita la configuración, la resolución de problemas y el mantenimiento de un rastreo confiable a lo largo del tiempo. Tener expectativas claras sobre transporte, identificación y comportamiento de reporte hace más sencillo diagnosticar problemas de conectividad y asegurar la calidad de los datos en Plaspy.

- Configuración más rápida al apuntar el rastreador al endpoint y puerto correctos de Plaspy.
- Resolución de problemas más eficiente al saber si el dispositivo usa UDP o TCP para reportar.
- Mejoras en la gestión de batería y energía al ajustar intervalos de reporte con conocimiento del comportamiento del protocolo.
- Datos de mejor calidad gracias a entender cómo el dispositivo emplea GPS, AGPS y LBS para obtener fijaciones de posición.
- Coordinación más fácil con operadores o equipos de red cuando los problemas de conexión requieren comprobaciones a nivel de red.

## Por qué usar Plaspy con este protocolo

Usar el AoYa T6 con Plaspy ofrece una forma directa de obtener visibilidad de vehículos y monitoreo centralizado. El diseño compacto del T6 y su soporte para GPS, AGPS y LBS lo hacen una opción práctica en muchos escenarios de rastreo automotriz, mientras que Plaspy se encarga de la detección del protocolo y agrega los reportes para que usted pueda enfocarse en la operación en lugar del parseo a bajo nivel.

Si desea conocer más sobre las capacidades de Plaspy y cómo Plaspy puede ingerir y presentar datos del AoYa T6, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y guía de implementación, consulte el sitio del fabricante en http://www.aoyagps.com/ ya que el comportamiento y las funciones soportadas pueden cambiar con el tiempo.
