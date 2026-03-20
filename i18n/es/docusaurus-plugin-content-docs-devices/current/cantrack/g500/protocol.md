---
slug: /cantrack/g500/protocol
id: g500-protocol
sidebar_label: Protocol
title: CanTrack - G500 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo CanTrack G500 y cómo se comunica con Plaspy mediante conexión compartida y detección automática
keywords:
  - Protocolo CanTrack G500
  - Protocolo GPS CanTrack G500
  - Protocolo CanTrack G500 para Plaspy
  - Protocolo de comunicación CanTrack G500
  - Protocolo de rastreo CanTrack G500
  - Protocolo de rastreador GPS CanTrack
  - Compatibilidad Plaspy CanTrack
  - Protocolo rastreador G500
  - Rastreo vehicular G500
  - Seguimiento de flotas CanTrack
---

# CanTrack - Protocolo G500

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack G500 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a un nivel general, qué papel tiene el protocolo de reporte en el intercambio de datos y qué debe considerarse al apuntar un G500 al endpoint de Plaspy. El contenido está dirigido a usuarios técnicos, integradores y administradores de flotas que necesitan una visión clara y no sensible sobre consideraciones de conectividad y protocolo.

El CanTrack G500 es un dispositivo moderno GSM/GPRS y GPS que ofrece ubicación en tiempo real, alarmas y funciones de monitoreo remoto. Plaspy utiliza configuraciones de conexión compartidas entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la conducta del equipo puede diferir entre unidades o versiones de firmware.

## Resumen del protocolo

A alto nivel, el protocolo del rastreador es el conjunto de reglas que el G500 usa para reportar ubicación, estado y eventos de alarma a un servidor remoto. Para la integración con Plaspy, el protocolo permite que el dispositivo se identifique, entregue datos periódicos y basados en eventos, y soporte funciones de monitoreo remoto que la plataforma puede presentar a los usuarios.

- Permite actualizaciones periódicas de ubicación y notificaciones de eventos como movimiento o alarmas.
- Incluye campos de identificación y estado para que Plaspy pueda asociar los mensajes con el dispositivo correcto.
- Traduce eventos de sensores y alarmas del dispositivo a un formato que Plaspy puede almacenar y mostrar.
- Soporta la capa de transporte (TCP o UDP) usada para enviar mensajes al endpoint de Plaspy.
- Determina la frecuencia de reporte del dispositivo y las condiciones que disparan transmisiones.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar mensajes de muchos rastreadores compatibles y determinar automáticamente el protocolo del dispositivo cuando este reporta al endpoint de Plaspy. En la mayoría de los casos, un G500 configurado correctamente solo necesita apuntar a las configuraciones de conexión de Plaspy y la plataforma detectará su formato de reporte.

- Plaspy recibe conexiones entrantes en su endpoint compartido y compara los mensajes entrantes con patrones de dispositivos conocidos.
- El usuario normalmente no necesita seleccionar manualmente un protocolo dentro de Plaspy si el equipo está configurado para reportar al endpoint de Plaspy.
- La detección automática reduce los pasos de configuración para flotas con modelos mixtos que reportan al mismo endpoint.
- La detección funciona con dispositivos que informan su identidad y carga en los formatos comunes definidos por el fabricante que usa el G500.
- Si un dispositivo no reporta como se espera, revisar la configuración del equipo y la versión de firmware suele ser el siguiente paso.

## Contexto de transporte y conexión

Los detalles de conexión y transporte determinan cómo el G500 alcanza a Plaspy, pero no cambian el papel general del protocolo. Plaspy expone un endpoint compartido que los dispositivos pueden apuntar; el G500 puede configurarse para usar UDP o TCP según el soporte del dispositivo y las opciones seleccionadas.

- Los dispositivos pueden configurarse para apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- El puerto de conexión que usa Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El G500 puede enviar datos por UDP o TCP en el puerto 8888 según su configuración y capacidades de firmware.
- Usar el nombre de dominio d.plaspy.com permite que el enrutamiento de red y DNS manejen posibles cambios de IP en el lado de Plaspy.
- Asegúrese de que el APN del dispositivo, la dirección del servidor, el tipo de transporte y el intervalo de reporte estén configurados según las instrucciones del fabricante para alcanzar Plaspy de forma confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar cómo o cuándo el G500 envía mensajes particulares; siempre verifique la versión de firmware del equipo al diagnosticar comportamiento.
- Las revisiones de hardware o variantes regionales del G500 pueden tener ajustes predeterminados o transportes compatibles distintos.
- Los comandos de configuración del fabricante y los APN por defecto pueden variar entre lotes y deben validarse antes de desplegar a gran escala.
- La elección del transporte (UDP frente a TCP) puede afectar la semántica de entrega y la visibilidad en entornos de red.
- Apuntar el dispositivo al endpoint y puerto correctos de Plaspy es necesario pero no siempre suficiente; confirme que los campos de identidad del dispositivo estén presentes y coincidan con los valores esperados.
- En caso de duda, valide la compatibilidad con la documentación y los registros de cambios más recientes del fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración confiable, una resolución de problemas eficiente y una operación predecible a largo plazo al usar el CanTrack G500 con Plaspy. Tener una visión clara de cómo se intercambian los mensajes reduce el tiempo dedicado a diagnosticar fallas de reporte y aumenta la confianza en el monitoreo de la flota.

- Resolución de problemas más rápida cuando los dispositivos no aparecen en Plaspy o reportan de forma inesperada.
- Mejores decisiones de configuración para intervalos de reporte, alarmas y tipo de transporte.
- Mejor planificación de actualizaciones de firmware y despliegues de dispositivos en una flota mixta.
- Interpretación más precisa del estado del dispositivo y de las alarmas dentro de la plataforma Plaspy.
- Ayuda a los administradores a decidir cuándo consultar recursos del fabricante sobre comportamientos específicos del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G500 con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real, alarmas y monitoreo operativo para vehículos, activos y otros objetivos rastreados. La detección automática de protocolos de Plaspy y su endpoint de conexión compartido simplifican la integración para flotas que emplean una mezcla de dispositivos y modelos.

Si usted desea aprender más sobre cómo Plaspy funciona con rastreadores GPS y dispositivos de flota, visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos del dispositivo, notas de firmware e instrucciones de configuración más actuales, verifique la información con el fabricante en https://www.cantrackgps.com/.
