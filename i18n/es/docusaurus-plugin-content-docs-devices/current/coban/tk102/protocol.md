---
slug: /coban/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: Coban - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Coban TK102 para compatibilidad y conexión con Plaspy
keywords:
  - protocolo Coban TK102
  - protocolo GPS Coban TK102
  - protocolo de rastreo Coban TK102
  - comunicación Coban TK102
  - protocolo tracker Coban
  - compatibilidad TK102 Plaspy
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular Coban TK102
  - protocolo GPRS GPS TK102
  - guía de protocolo Coban
---

# Coban - Protocolo TK102

Esta página resume el contexto público del protocolo para usar el rastreador GPS Coban TK102 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión se utilizan y qué verificar al integrar o solucionar problemas del equipo. El objetivo es describir el contexto del protocolo visible públicamente sin revelar detalles privados de implementación.

El Coban TK102 es un rastreador basado en GSM, GPRS y GPS con funciones comunes como reportes por SMS, reportes por GPRS, geocercas, alertas SOS y alarmas por movimiento y exceso de velocidad. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo que usa el TK102 define cómo el dispositivo informa posición y estado a un servidor remoto y cómo se puede configurar de forma remota. En Plaspy el protocolo se trata como el mecanismo por el cual el dispositivo envía posición, hora e información de alertas a la plataforma para que los datos de ubicación y eventos estén disponibles para los usuarios.

- El protocolo permite que el rastreador reporte posiciones GPS y estado básico a un endpoint remoto para su procesamiento.
- Provee la señalización que el dispositivo usa para identificarse, de modo que Plaspy pueda asociar los reportes con el activo correcto.
- El protocolo del rastreador transporta alertas como SOS, movimiento, exceso de velocidad y batería baja para que la plataforma genere notificaciones.
- Las opciones de configuración en el dispositivo permiten cambiar modos de transporte y establecer un servidor de reportes para que el rastreador apunte a Plaspy.
- Plaspy recibe los reportes entrantes y pone los datos a disposición para mapas, alertas y registros sin que el usuario necesite conocer los detalles internos del protocolo.
- Debido a las diferencias de firmware, el conjunto exacto de campos en los reportes y los intervalos pueden variar entre unidades.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido para conexiones entrantes de rastreadores y utiliza detección automática de protocolo para asociar los datos con el parser y el registro de dispositivo correctos. Este enfoque reduce los pasos de configuración para los usuarios cuando un dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy usa el puerto 8888 para conexiones de dispositivos y todos los equipos en Plaspy utilizan ese mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar manualmente un protocolo en la plataforma.
- Cuando un TK102 está configurado para reportar al endpoint de Plaspy, la plataforma empata los datos entrantes con el registro del dispositivo según los identificadores que el equipo incluye.
- En general, los usuarios solo deben asegurarse de que el rastreador esté configurado para reportar a la dirección de Plaspy y de seleccionar el tipo de transporte correcto para su unidad.

## Transporte y contexto de conexión

El transporte de conexión afecta la forma en que el TK102 entrega datos a Plaspy, pero no cambia el requisito de que los reportes lleguen al endpoint compartido de Plaspy. Dependiendo de la configuración del equipo y del firmware, el rastreador puede soportar distintos transportes de red que deben configurarse en el dispositivo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como dirección de reporte para Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor en el lado del rastreador.
- Elegir UDP o TCP en el equipo puede afectar el comportamiento de entrega, como la confiabilidad y el estado de conexión, según el firmware del rastreador.
- Asegúrese de que el perfil de datos móviles y el APN estén configurados correctamente en el TK102 para que los reportes por GPRS funcionen como se espera.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades TK102 pueden cambiar los campos reportados y los comandos soportados.
- Revisiones de hardware y variantes clonadas en el mercado pueden implementar el protocolo de manera distinta a las especificaciones del fabricante original.
- Muchos firmwares ofrecen una opción para cambiar entre TCP y UDP, por lo que debe elegir el transporte que coincida con la configuración de su unidad.
- Confirme que el dispositivo esté configurado para enviar reportes a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para la integración con Plaspy.
- Valores por defecto del fabricante, como el número de centro de monitoreo o la frecuencia de reportes, pueden necesitar ajustes para alinearse con las expectativas de Plaspy.
- Valide la compatibilidad y las capacidades del dispositivo contra la documentación oficial del fabricante antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador y el contexto de conexión ayuda a garantizar una integración confiable con Plaspy y acelera la resolución de problemas cuando los reportes no llegan como se espera.

- Aclara qué transporte y qué dirección de servidor deben configurarse en el TK102 para que los datos lleguen a Plaspy.
- Ayuda a identificar si la falta de datos se debe al APN, a la selección de transporte o a la configuración del dispositivo y no a la plataforma.
- Conocer las alertas que soporta el rastreador permite mapear correctamente las alertas y configurar notificaciones en Plaspy.
- La conciencia sobre las variaciones de firmware y hardware reduce el tiempo dedicado a diagnosticar comportamientos inesperados del dispositivo.
- Informa decisiones sobre el consumo de batería y la frecuencia de reportes para equilibrar la frescura de los datos con la autonomía.

## Por qué usar Plaspy con este protocolo

Usar el Coban TK102 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar ubicación, alertas e historial de dispositivos que reportan por GPRS y GPS. La detección automática de protocolo y los ajustes de conexión compartidos de Plaspy facilitan la puesta en marcha y reducen errores de configuración cuando los dispositivos se dirigen al endpoint de Plaspy.

Para conocer más sobre cómo Plaspy funciona con una amplia gama de rastreadores y revisar las funcionalidades de la plataforma visite https://www.plaspy.com. Para detalles específicos más recientes sobre protocolos de dispositivos, notas de firmware y guías de implementación, verifique la información en el sitio del fabricante https://www.coban.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
