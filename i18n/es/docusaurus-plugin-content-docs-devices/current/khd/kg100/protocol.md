---
slug: /khd/kg100/protocol
id: kg100-protocol
sidebar_label: Protocol
title: KHD - KG100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador KHD KG100 y cómo se comunica con Plaspy usando ajustes compartidos
keywords:
  - protocolo KHD KG100
  - protocolo GPS KHD KG100
  - comunicación KHD KG100
  - protocolo de rastreo KHD KG100
  - compatibilidad KG100 con Plaspy
  - protocolo rastreador KHD
  - protocolo rastreador GPS vehicular
  - integración rastreador GPRS GPS
  - seguimiento de flotas KG100
  - documentación protocolo rastreador
---

# KHD - Protocolo KG100

Esta página presenta el contexto público del protocolo para usar el rastreador KHD KG100 con Plaspy. Se centra en cómo el dispositivo se comunica con el backend en términos generales y no sensibles, para que administradores de flota e integradores puedan comprender el papel del protocolo de reporte del rastreador en una implementación con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el soporte de comandos pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto del protocolo más que comandos específicos de firmware.

## Descripción general del protocolo

El protocolo de reporte del KG100 es el conjunto de mensajes y comportamientos que permiten al rastreador identificarse, reportar posición y estado, y recibir comandos remotos opcionales a través de un backend de red. En Plaspy, este protocolo convierte las posiciones GNSS y la telemetría del dispositivo en datos de ubicación y eventos útiles para monitoreo y análisis.

- Permite al KG100 transmitir ubicación, movimiento y actualizaciones de estado a un servidor backend
- Incluye información identificadora para que el backend asocie los mensajes con un dispositivo concreto
- Transmite estados de eventos y alarmas, como cruces de geocerca y cambios en entradas, para su procesamiento posterior
- Soporta transporte sobre redes móviles permitiendo la integración con servidores y plataformas remotas
- Sirve de base para flujos de control y configuración remotos cuando el dispositivo y el fabricante lo permiten

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de rastreadores en un endpoint compartido y detecta automáticamente el protocolo, por lo que por lo general no es necesario seleccionar un protocolo dentro de la plataforma. La configuración correcta del dispositivo para reportar a Plaspy es el requisito principal para que la detección automática funcione de forma fiable.

- El dominio del servidor Plaspy es d.plaspy.com, al que pueden apuntar los dispositivos para reportar
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse como endpoint alternativo
- La plataforma escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador cuando los mensajes llegan al endpoint compartido
- En configuraciones típicas, el dispositivo envía datos al endpoint de Plaspy y no se requiere selección manual de protocolo

## Transporte y contexto de conexión

La selección de transporte y conexión determina cómo el KG100 envía los mensajes del protocolo al backend. Los puntos siguientes describen las opciones comunes de transporte y las alternativas de nombre de host disponibles al integrar un KG100 con Plaspy.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias
- Se puede apuntar el dispositivo al dominio d.plaspy.com o a la IP 54.85.159.138
- El puerto 8888 es el puerto de escucha compartido que usa Plaspy para todos los dispositivos soportados
- Normalmente se utiliza GPRS o datos GSM para transmitir los mensajes del protocolo desde el rastreador al backend
- El SMS puede estar disponible en el dispositivo como respaldo o para aprovisionamiento, pero es independiente del canal principal de reportes por GPRS

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los tipos de mensajes y los campos que el KG100 envía o acepta
- Las variantes de hardware y las versiones regionales pueden modificar funciones disponibles o valores por defecto de transporte
- La elección entre UDP y TCP puede afectar el comportamiento de entrega y debe coincidir con la configuración del dispositivo
- Los comandos de configuración del fabricante y los servidores de reporte predeterminados pueden variar según el distribuidor o minorista
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para compatibilidad con Plaspy
- Valide siempre el comportamiento del dispositivo tras actualizaciones de firmware o cambios en la configuración de transporte

## Por qué es importante entender el protocolo

Comprender claramente el protocolo de comunicación del KG100 ayuda a garantizar una configuración exitosa, reportes previsibles y fiabilidad a largo plazo cuando el rastreador se usa con Plaspy. Entender el protocolo reduce errores de configuración y facilita la resolución de problemas cuando los datos de ubicación o eventos no aparecen como se espera.

- Ayuda a verificar que los dispositivos reportan al endpoint y puerto correctos de Plaspy
- Orienta los pasos de solución cuando los reportes llegan con retraso, faltan o se atribuyen mal
- Aclara qué funciones del dispositivo puede consumir Plaspy y cuáles requieren soporte de firmware
- Informa la selección del transporte para que el comportamiento de entrega coincida con los requisitos operativos
- Facilita la planificación de actualizaciones de firmware y el mantenimiento de la flota de dispositivos

## Por qué usar Plaspy con este protocolo

Usar el KHD KG100 con Plaspy ofrece a las organizaciones una forma práctica de convertir los reportes del rastreador en visibilidad de flota, alertas y reproducción histórica. El endpoint compartido y la detección automática de protocolos de Plaspy simplifican la incorporación, por lo que los dispositivos que pueden apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 normalmente se integran con mínima configuración desde la plataforma.

Para obtener más información sobre despliegues con Plaspy visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente del dispositivo con el fabricante en http://www.khd.hk.
