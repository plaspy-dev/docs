---
slug: /atrack/ak1/protocol
id: ak1-protocol
sidebar_label: Protocol
title: ATrack - AK1 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el ATrack AK1 a Plaspy con endpoint compartido y detección automática
keywords:
  - protocolo ATrack AK1
  - protocolo GPS ATrack AK1
  - ATrack AK1 Plaspy
  - protocolo de rastreo AK1
  - protocolo rastreador vehicular ATrack
  - protocolo rastreador GPS Plaspy
  - rastreo de flotas AK1
  - comunicación AK1 GSM GPRS
  - integración control de eventos AK1
  - compatibilidad ATrack AK1
---

# ATrack - Protocolo AK1

Esta página ofrece contexto público sobre el protocolo para usar el rastreador ATrack AK1 con la plataforma Plaspy. Describe a alto nivel cómo el dispositivo se comunica, cómo esa comunicación llega a Plaspy y qué aspectos son relevantes para la configuración y la compatibilidad, sin exponer detalles internos de firmware ni análisis privados de los mensajes.

El AK1 es un rastreador GPS para vehículos que utiliza GPS y comunicación GSM GPRS, con lógica de eventos configurable, alimentación de respaldo y múltiples entradas. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para la conectividad, el endpoint público de Plaspy es d.plaspy.com y es accesible en 54.85.159.138 por el puerto 8888; los dispositivos pueden configurarse para usar UDP o TCP en ese puerto.

## Resumen del protocolo

El protocolo de comunicación del AK1 define cómo se empaquetan y envían desde el rastreador al servidor remoto la ubicación, el estado y la información de eventos. En términos generales, el protocolo permite identificación, reportes y señales de control remoto para que el rastreador y la plataforma intercambien telemetría útil mientras el equipo opera en campo.

- Transporta actualizaciones de posición y telemetría básica como fijaciones GPS, hora y banderas de estado hacia un servidor backend.
- Transmite disparadores de eventos definidos por el motor de control de eventos del AK1 para monitoreo remoto y alertas.
- Incluye métodos para que el rastreador envíe identificación del equipo, de modo que el servidor asocie los reportes con el activo correcto.
- Permite flujos ocasionales de control bidireccional o configuración remota cuando el dispositivo y la plataforma lo soportan.
- Funciona sobre datos móviles usando la conexión GSM GPRS del dispositivo y los ajustes de APN y transporte configurados.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesita seleccionar un protocolo manualmente. Cuando un AK1 está configurado para reportar a Plaspy, la plataforma mapea los datos entrantes a una rutina de procesamiento compatible y enruta la telemetría al sistema de rastreo de Plaspy.

- El dominio público de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos compatibles.
- Los dispositivos correctamente apuntados al endpoint de Plaspy normalmente son reconocidos automáticamente.
- Rara vez es necesario seleccionar manualmente el protocolo dentro de Plaspy cuando el equipo envía datos al endpoint compartido.
- Una identificación correcta desde el dispositivo, como su IMEI o un ID configurado, ayuda a Plaspy a asociar los reportes con la cuenta adecuada.

## Transporte y contexto de conexión

El transporte de la conexión determina cómo se entregan los mensajes del AK1 al servidor, pero no cambia por sí mismo las funciones principales del protocolo. El AK1 puede configurarse para usar UDP o TCP según las capacidades del firmware y las preferencias de instalación; cualquiera de los dos transportes puede usarse para alcanzar el servicio de Plaspy en el endpoint configurado.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del equipo.
- Los equipos pueden apuntar al dominio d.plaspy.com o al host numérico 54.85.159.138 para alcanzar Plaspy.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos que soporta, lo que simplifica el despliegue y las reglas de firewall.
- Elija UDP para menor sobrecarga y posible entrega más rápida, o TCP para entrega más fiable cuando el rastreador y la red lo soporten.
- Asegúrese de que el APN del dispositivo y el registro GSM estén funcionando para que el rastreador tenga conectividad de datos móviles hacia el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware del AK1 pueden modificar el tiempo de envío de mensajes, los campos disponibles o características opcionales; revise las notas de la versión del firmware al solucionar problemas.
- Revisiones de hardware u opciones de accesorios, como antenas externas y sensores, pueden añadir o cambiar el conjunto de entradas reportadas.
- Los menús de configuración del fabricante pueden ofrecer selección de transporte o intervalos de reporte configurables que afectan el comportamiento en el servidor.
- Verifique siempre que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el transporte elegido coincida con la configuración del equipo.
- Diferencias en el comportamiento regional de GSM o en la configuración del APN pueden afectar la conectividad y deben validarse durante la instalación.
- Consulte la documentación oficial de ATrack para notas específicas de firmware que puedan afectar la compatibilidad con plataformas de terceros.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del AK1 facilita una instalación correcta, agiliza la resolución de problemas y ayuda a mantener la telemetría fiable a lo largo del tiempo. Conocer el papel general del protocolo y el contexto de conexión reduce el tiempo de puesta en marcha y ayuda a aislar problemas relacionados con transporte, configuración o firmware.

- Acelera la puesta en servicio inicial al aclarar los ajustes necesarios de servidor, transporte e identificación.
- Simplifica la resolución de problemas cuando los dispositivos no aparecen en Plaspy, al acotar el problema a conectividad, transporte o configuración del equipo.
- Le ayuda a elegir el transporte y los intervalos de reporte adecuados para optimizar la vida de la batería y el uso de ancho de banda.
- Facilita la validación de que los disparadores de eventos y las asignaciones de entradas del AK1 aparecen como se espera en la plataforma.
- Reduce conjeturas al coordinar con el soporte del fabricante o con técnicos de campo durante los despliegues.

## Por qué usar Plaspy con este protocolo

Usar un AK1 con Plaspy ofrece una vía práctica para centralizar la ubicación de vehículos, el monitoreo de eventos y la telemetría básica de una flota. El motor de control de eventos del AK1, sus múltiples entradas y funciones de gestión de energía encajan bien con una plataforma que recibe y procesa informes de dispositivos automáticamente, permitiendo que las organizaciones se concentren en la operación y no en el parsing del protocolo.

Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos y las operaciones de flota, visite https://www.plaspy.com. Para obtener los detalles más recientes y autorizados sobre protocolos específicos de dispositivos y firmware, verifique la información con el fabricante en https://www.atrack.com.tw/.
