---
slug: /appello/host/protocol
id: host-protocol
sidebar_label: Protocol
title: Appello - Host Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del Appello Host y conectividad con Plaspy
keywords:
  - Protocolo Appello Host
  - GPS Appello Host
  - Seguimiento Appello Host
  - Comunicación Appello Host
  - Compatibilidad Appello Host Plaspy
  - Protocolo tracker GPS Appello
  - Protocolo tracker GPS para mascotas
  - Conexión del tracker al servidor
  - Protocolo de dispositivo GPS Plaspy
  - Configuración Appello Host en Plaspy
---

# Appello - Protocolo Host

Esta página describe el contexto público del protocolo para usar el tracker Appello Host con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo y cómo Plaspy recibe e interpreta los reportes del tracker, empleando ajustes de conexión públicos y conceptos de protocolo de alto nivel en lugar de detalles internos del dispositivo.

El Appello Host forma parte de la familia Appello 4P, un rastreador GPS compacto para mascotas diseñado para larga duración de batería, uso exterior impermeable y carga inalámbrica mediante una base de energía. Plaspy usa configuraciones de conexión compartidas entre los dispositivos compatibles y detecta el protocolo del tracker de forma automática, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del tracker define cómo el Appello Host informa ubicación, estado y alertas a un servidor remoto para que plataformas como Plaspy puedan mostrar telemetría útil a los usuarios. El contexto público del protocolo se centra en la dirección de los mensajes, el método de conexión y los tipos de datos que se reportan con frecuencia, más que en los formatos de paquete a bajo nivel.

- Permite que el tracker se identifique y envíe actualizaciones periódicas de ubicación y cambios de estado.
- Transporta telemetría del dispositivo, como datos posicionales, alertas de movimiento, nivel de batería y estado de conectividad para su uso en Plaspy.
- Soporta acciones de ciclo de vida como registro, reportes periódicos y notificaciones de eventos que Plaspy consume.
- Proporciona los medios para que el dispositivo alcance el punto de conexión de Plaspy y así la plataforma pueda detectar y parsear los mensajes entrantes.
- Permite que la base de carga y la unidad GPS coordinen alertas cuando una mascota sale del rango de la base.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único punto de conexión y puerto compartido para todos los dispositivos compatibles y utiliza las características de la conexión y los mensajes entrantes para determinar el protocolo del tracker. En la mayoría de los casos, un Appello Host correctamente configurado reportará a Plaspy y no se requerirá seleccionar el protocolo manualmente en la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y los dispositivos pueden apuntar a él para reportes.
- La IP del servidor Plaspy es 54.85.159.138 y está disponible como objetivo alternativo para la configuración del dispositivo.
- El puerto usado por Plaspy es 8888 y es el puerto común para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del tracker cuando el tráfico llega correctamente al punto de conexión de Plaspy.
- Por lo general, los usuarios no necesitan elegir un protocolo en Plaspy si el dispositivo está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Transporte y contexto de conexión

El transporte de la conexión es una opción de configuración en muchos trackers y determina cómo el dispositivo abre y mantiene una sesión con Plaspy. Para la instalación y resolución de problemas es útil conocer los transportes aceptables y los puntos de destino que usa la plataforma.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las opciones elegidas.
- Los equipos pueden enviarse para reportar a d.plaspy.com o directamente a 54.85.159.138 como destino del servidor Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el enrutamiento del servidor y la detección automática.
- La selección del transporte puede afectar características de entrega como latencia y fiabilidad, pero no cambia el rol público del protocolo.
- Verifique la configuración en el software del tracker o la app del fabricante para asegurarse de que estén seleccionados el endpoint y el transporte correctos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de los mensajes, los campos disponibles y las características opcionales; revise la versión de firmware del dispositivo al validar compatibilidad.
- Las revisiones de hardware y las variantes de modelo pueden implementar funciones de forma distinta incluso bajo el mismo nombre de modelo.
- Las herramientas de configuración del fabricante a veces exponen campos de transporte y servidor; asegúrese de que apunten a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El dispositivo puede soportar tanto UDP como TCP, pero el comportamiento puede variar según el transporte seleccionado y el entorno de red.
- Plaspy detecta protocolos automáticamente, pero el dispositivo debe estar correctamente configurado para alcanzar el punto de conexión de Plaspy para que la detección tenga éxito.
- En caso de duda, consulte la documentación oficial del fabricante para confirmar firmware soportado y pasos de configuración.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del tracker ayuda a administradores e integradores a configurar los equipos correctamente, reduce el tiempo de puesta en marcha y facilita la resolución de problemas cuando surgen incidencias con los reportes o las alertas.

- Asegura que el tracker apunte al punto de conexión correcto de Plaspy para que los mensajes lleguen a la plataforma de forma fiable.
- Ayuda a interpretar el comportamiento del dispositivo cuando los reportes faltan o son intermitentes, teniendo en cuenta el transporte y las diferencias de firmware.
- Simplifica la configuración de opciones de transporte como UDP o TCP para que las características de entrega esperadas coincidan con las necesidades operativas.
- Mejora la confiabilidad a largo plazo al orientar las decisiones de actualización de firmware y las comprobaciones de compatibilidad antes de un despliegue masivo.
- Facilita al equipo de soporte correlacionar los registros del dispositivo con los registros entrantes del servidor al diagnosticar problemas.

## Por qué usar Plaspy con este protocolo

Usar el tracker Appello Host con Plaspy ofrece a organizaciones y dueños de mascotas visibilidad centralizada de la ubicación y las alertas del dispositivo. El enfoque de punto de conexión único de Plaspy y la detección automática de protocolos reducen la carga administrativa de integrar distintos trackers, al mismo tiempo que permiten un manejo y una gestión de alertas consistentes.

Para saber más sobre Plaspy y cómo puede aceptar reportes de trackers Appello Host, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware e instrucciones del fabricante consulte el sitio oficial de Appello en http://www.cnjeo.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con el fabricante.
