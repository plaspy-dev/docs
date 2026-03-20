---
slug: /gosafe/gtu100/protocol
id: gtu100-protocol
sidebar_label: Protocol
title: Gosafe - GTU100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para compatibilidad y comunicación del Gosafe GTU100 con Plaspy
keywords:
  - protocolo Gosafe GTU100
  - protocolo GPS Gosafe GTU100
  - compatibilidad GTU100 Plaspy
  - protocolo de comunicaciones Gosafe GTU100
  - protocolo de rastreo GTU100
  - protocolo del rastreador Gosafe
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador GPS vehicular
  - rastreo de flotas GTU100
  - integración GEM GICUS
---

# Gosafe - Protocolo GTU100

Esta página describe el contexto público del protocolo para usar el rastreador Gosafe GTU100 con Plaspy. Se centra en cómo el dispositivo se comunica con los puntos de ingestión de Plaspy, qué papel desempeña el protocolo de reporte del rastreador para entregar telemetría utilizable y qué aspectos prácticos conviene considerar al integrar el GTU100 en una implementación de Plaspy.

Plaspy emplea ajustes de conexión compartidos a nivel de plataforma para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este está configurado para reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página evita detalles internos y se concentra en información pública, segura y útil para la configuración y resolución de problemas.

## Resumen del protocolo

El GTU100 transmite telemetría y eventos del vehículo a un servidor. El protocolo define cómo el rastreador se identifica, reporta ubicación y datos de sensores, y participa en sesiones continuas que permiten a Plaspy recibir, mostrar y actuar sobre la telemetría.

- Permite que el rastreador envíe ubicación, movimiento y telemetría de sensores a un servidor remoto para su procesamiento.
- Incluye información de identidad y estado del dispositivo para que Plaspy pueda asociar los mensajes con el activo y el registro de flota correctos.
- Soporta el reporte de eventos como encendido, detección de choque y entradas de sensores externos para que Plaspy genere alertas e informes históricos.
- Funciona sobre transportes celulares estándar, por lo que los mensajes llegan a Plaspy tanto desde redes LTE como desde redes de reserva.
- Se integra con el gestor de eventos y las funciones de gestión remota del GTU100 para soportar actualizaciones OTA y flujos de configuración sin exponer formatos internos de mensajes.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones entrantes de dispositivos en un único endpoint compartido y determinar automáticamente el protocolo cuando un rastreador correctamente configurado reporta. En la mayoría de las implementaciones, no es necesario que el usuario seleccione manualmente un protocolo dentro de Plaspy si el GTU100 apunta al endpoint de Plaspy usando el transporte y credenciales correctos.

- Plaspy escucha en un único puerto de plataforma para tráfico de dispositivos que es compartido entre los rastreadores soportados.
- Cuando el GTU100 reporta al endpoint de Plaspy, la plataforma identifica el dispositivo y asocia los mensajes con la cuenta correspondiente automáticamente.
- En despliegues típicos, se configura el rastreador para enviar datos al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy detecta el protocolo del rastreador de forma automática, por lo que en la mayoría de los casos no es necesario seleccionar el protocolo manualmente.
- Una configuración correcta del dispositivo y firmware actualizado en el GTU100 aumentan la probabilidad de una detección automática sin fricciones.

## Contexto de transporte y conexión

El GTU100 soporta múltiples transportes celulares y puede configurarse para usar UDP o TCP para la entrega de datos. Al integrar con Plaspy, utilice los ajustes de conexión de la plataforma descritos aquí para que el dispositivo alcance el endpoint de ingestión de Plaspy de manera confiable.

- El GTU100 puede configurarse para enviar datos vía UDP o TCP al puerto 8888, dependiendo del operador y la configuración del dispositivo.
- Plaspy acepta tráfico de dispositivos en el puerto 8888 y ese mismo puerto se usa para todos los dispositivos en la plataforma.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 si las políticas de red requieren una dirección IP.
- Algunas implementaciones también emplean SMS como ruta secundaria o de respaldo para comandos específicos y diagnóstico, además de TCP y UDP.
- Consideraciones a nivel de red como la configuración de APN, reglas de firewall y el comportamiento NAT del operador pueden afectar si UDP o TCP resulta más confiable en una instalación determinada.

## Notas sobre compatibilidad del protocolo

- Las diferencias en la versión de firmware pueden cambiar el tiempo de envío de mensajes, los umbrales de eventos o qué campos se reportan. Confirme siempre la revisión de firmware del GTU100 al validar el comportamiento.
- Las revisiones de hardware y variantes regionales pueden presentar diferencias en bandas soportadas, rendimiento GNSS o E/S disponibles que influyan en la telemetría que el dispositivo puede enviar.
- Funciones del fabricante como el Gosafe Event Manager (GEM) y el gestor de dispositivos GICUS pueden afectar cómo se preprocesan los eventos antes de transmitirse a Plaspy.
- La elección del transporte es importante. Algunos operadores o despliegues funcionan mejor con TCP mientras que otros prefieren UDP por menor sobrecarga; pruebe ambos cuando sea posible.
- Se recomienda validar la configuración contra la guía oficial del dispositivo para asegurarse de que el rastreador apunta a Plaspy correctamente y usa el transporte esperado.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración de la plataforma, pero sigue siendo necesario tener los ajustes correctos en el dispositivo.

## Por qué es importante comprender el protocolo

Conocer cómo se comunica el GTU100 con Plaspy ayuda a garantizar un despliegue exitoso, telemetría confiable y una resolución de problemas más rápida cuando algo se desvía del comportamiento esperado.

- Permite confirmar que el dispositivo apunta al endpoint y transporte correctos de Plaspy para que los datos fluyan hacia la plataforma.
- Facilita una resolución de problemas focalizada cuando la telemetría falta o es intermitente, aislando causas de red, transporte o firmware.
- Apoya decisiones de configuración como TCP frente a UDP según el comportamiento del operador, las necesidades de latencia y los requisitos de fiabilidad de mensajes.
- Facilita la coordinación con el fabricante para actualizaciones de firmware, configuración de eventos o funciones gestionadas como GEM y GICUS.
- Mejora la confiabilidad a largo plazo al resaltar la importancia de mantener el firmware y la configuración del dispositivo alineados con las expectativas de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el GTU100 con Plaspy integra la ubicación del vehículo, la telemetría de sensores y el reporte de eventos en una plataforma unificada de gestión de flotas. La precisión multi GNSS del GTU100, su conectividad resistente LTE Cat 1 con respaldo 2G/3G y su procesamiento de eventos a bordo lo hacen adecuado para flotas que requieren rastreo constante, detección de choques y datos de sensores integrados.

Plaspy simplifica la integración al aceptar conexiones de dispositivos en un solo puerto compartido y detectar automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar a la plataforma. Para obtener más información sobre Plaspy y su funcionamiento con rastreadores de grado flota como el GTU100, visite https://www.plaspy.com. Tenga en cuenta que el comportamiento del protocolo, las capacidades del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que es importante verificar la información más reciente sobre el protocolo y el firmware del dispositivo en el sitio del fabricante https://gosafesystem.com/.
