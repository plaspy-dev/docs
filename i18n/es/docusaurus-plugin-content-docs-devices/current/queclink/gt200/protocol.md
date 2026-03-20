---
slug: /queclink/gt200/protocol
id: gt200-protocol
sidebar_label: Protocol
title: QuecLink - GT200 Protocol
sidebar_class_name: menu_item_tracker
description: Guía del protocolo del rastreador QuecLink GT200 y cómo se comunica con Plaspy mediante detección automática y ajustes compartidos
keywords:
  - Protocolo QuecLink GT200
  - Protocolo GPS QuecLink GT200
  - Protocolo GT200 @Track
  - Compatibilidad QuecLink GT200 Plaspy
  - Protocolo de comunicación GT200
  - Protocolo rastreador GPS QuecLink
  - Protocolo de seguimiento GT200
  - Rastreador infantil QuecLink
  - Reporte de ubicación GT200
  - Integración de dispositivos Plaspy
---

# QuecLink - Protocolo GT200

Esta página describe el contexto público del protocolo para usar el teléfono de seguridad GPS QuecLink GT200 con Plaspy. Resume cómo el GT200 informa posiciones y eventos, explica la función de la capacidad de reporte embebida @Track y detalla cómo Plaspy recibe esos reportes sin exponer implementaciones privadas o datos sensibles.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste apunta al endpoint de Plaspy. El comportamiento del GT200 puede variar según la versión de firmware, la revisión de hardware o la configuración del fabricante, por lo que el formato exacto de los mensajes puede diferir entre unidades y con el tiempo.

## Resumen del protocolo

El GT200 implementa un protocolo de reportes embebido que permite al dispositivo identificarse y enviar actualizaciones de ubicación y estado a un servidor remoto. Para la integración con Plaspy, esto significa que el rastreador puede enviar posiciones programadas, alertas e informes de estado que Plaspy interpreta para seguimiento y monitoreo.

- El protocolo transporta reportes de posición GPS para que Plaspy pueda ubicar y marcar con tiempo los movimientos del dispositivo.
- Incluye informes de eventos como alertas de emergencia, activación de geocercas, batería baja y detección de caída.
- El GT200 admite reportes por cell ID y envíos periódicos programados para ayudar a localizar el equipo cuando el GPS es limitado.
- La identidad del dispositivo y la información básica de estado forman parte de la carga reportada, lo que permite a Plaspy correlacionar mensajes con el registro adecuado.
- Las funciones de reporte embebidas @Track simplifican la integración al agrupar en firmware las funciones de seguridad y reporte más comunes.

## Detección del protocolo por parte de Plaspy

Plaspy recibe conexiones entrantes en un único endpoint compartido e identifica automáticamente el protocolo que usa cada rastreador. Cuando un GT200 (o cualquier dispositivo compatible) se configura para enviar datos a Plaspy, la plataforma enlaza los reportes entrantes con su registro de dispositivos y aplica la interpretación correcta según el tipo de rastreador.

- Apunte el GT200 al endpoint del servidor de Plaspy y será aceptado por el listener compartido.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente qué protocolo está usando cada equipo.
- En configuraciones típicas, usted no necesita seleccionar el protocolo dentro de Plaspy si el dispositivo reporta al endpoint configurado.
- Una identificación adecuada del dispositivo en la primera conexión ayuda a Plaspy a asignar los reportes entrantes al perfil correcto y aplicar los mapeos de eventos esperados.
- Si un rastreador utiliza el comportamiento de reporte embebido @Track del GT200, Plaspy interpretará correctamente reportes comunes como SOS, geocerca y batería baja.

## Transporte y contexto de conexión

La conexión a Plaspy puede configurarse usando UDP o TCP según la capacidad del equipo y el comportamiento deseado. El GT200 puede enviarse configurado para reportar al endpoint de Plaspy usando el puerto compartido, y los administradores pueden apuntar el dispositivo al dominio de Plaspy o a la IP pública según se requiera para el enrutamiento de red.

- El dominio del servidor Plaspy es d.plaspy.com y la IP pública es 54.85.159.138 para configuración directa.
- El puerto que usa Plaspy para reportes de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El GT200 puede configurarse para usar UDP o TCP en el puerto 8888 según la versión de firmware y las opciones de configuración.
- Elegir UDP puede reducir la sobrecarga para reportes cortos y frecuentes; TCP ofrece fiabilidad de conexión en redes que lo soporten.
- NAT del operador, ajustes de APN y restricciones de la red local pueden influir en cuál transporte funciona mejor en una implementación.

## Notas sobre compatibilidad del protocolo

- El GT200 es compatible con Plaspy si se configura para reportar al endpoint de Plaspy y usar el transporte y puerto admitidos.
- Las revisiones de firmware pueden modificar qué reportes están disponibles, el formato de ciertos campos y el orden de elementos opcionales.
- Revisión de hardware o variantes regionales del dispositivo pueden cambiar funciones disponibles como el reporte del acelerómetro o el comportamiento de botones de marcado.
- La selección del transporte (UDP versus TCP) debe coincidir con la configuración del dispositivo y el entorno de red usado por la SIM del equipo.
- Siempre valide la configuración del dispositivo con la guía más reciente del fabricante para asegurar que los tipos de evento y los intervalos de reporte funcionen como espera.
- Al desplegar muchos equipos, pruebe primero con un grupo reducido para confirmar ajustes como APN, transporte y dirección del servidor antes de un despliegue masivo.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del GT200 facilita la configuración correcta, la resolución práctica de problemas y el mantenimiento de un seguimiento confiable a lo largo del tiempo. Saber qué reporta el dispositivo y cómo entrega esos datos a Plaspy reduce errores de configuración y agiliza la respuesta a incidentes.

- Asegura que la dirección del servidor y el transporte estén configurados correctamente para que los dispositivos lleguen consistentemente a Plaspy.
- Ayuda a interpretar eventos entrantes como SOS, cruces de geocerca, batería baja y alertas de caída dentro de Plaspy.
- Facilita la resolución de problemas cuando los dispositivos no aparecen en Plaspy revisando la red, el APN y los ajustes de transporte.
- Orienta decisiones sobre intervalos de reporte y gestión de energía para balancear la vida de batería y la frecuencia de actualizaciones.
- Hace más seguro planificar actualizaciones de firmware al señalar qué funciones o tipos de reporte podrían cambiar con nuevas versiones.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GT200 con Plaspy ofrece una visión operativa de ubicaciones y eventos de seguridad del dispositivo, aprovechando la detección automática de protocolo y el manejo centralizado de reportes entrantes. Organizaciones que gestionan dispositivos de seguridad infantil o flotas pequeñas obtienen visibilidad del historial de posiciones, alertas y estado del dispositivo sin tener que configurar manualmente parsers de protocolo.

Plaspy acepta conexiones en d.plaspy.com o 54.85.159.138 en el puerto 8888 y usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración. Si desea saber más sobre cómo Plaspy se integra con dispositivos como el GT200, visite el sitio de Plaspy en https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y las últimas indicaciones del fabricante, verifique la información vigente en el sitio oficial de QuecLink en https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
