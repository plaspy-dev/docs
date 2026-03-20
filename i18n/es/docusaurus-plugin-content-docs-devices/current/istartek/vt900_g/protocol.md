---
slug: /istartek/vt900_g/protocol
id: vt900_g-protocol
sidebar_label: Protocol
title: iStartek - VT900-G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador iStartek VT900 G con Plaspy, incluyendo transporte y compatibilidad
keywords:
  - protocolo iStartek VT900 G
  - rastreador GPS VT900 G
  - compatibilidad iStartek Plaspy
  - protocolo de comunicación VT900 G
  - protocolo de rastreo VT900 G
  - guía protocolo rastreador GPS
  - rastreo de vehículos VT900 G
  - rastreo de flotas Plaspy
  - integración telemetría VT900 G
  - compatibilidad protocolo VT900 G
---

# iStartek - Protocolo VT900-G

Esta página describe el contexto público del protocolo para usar el rastreador GPS iStartek VT900-G con Plaspy. Explica, a alto nivel, cómo el dispositivo reporta ubicación, telemetría y eventos a Plaspy y qué papel juega el protocolo de comunicación en la implementación y el monitoreo cotidianos.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se reporta al endpoint de Plaspy. El comportamiento preciso del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la documentación del fabricante y las notas de versión siguen siendo las fuentes autorizadas para detalles específicos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación define cómo el VT900-G codifica y envía posiciones GNSS, telemetría de sensores y notificaciones de eventos para que Plaspy pueda ingerir y presentar datos útiles. El protocolo se encarga de identificar el equipo, entregar posiciones y diagnósticos, y permitir que el rastreador almacene en búfer o retransmita datos después de interrupciones de conectividad.

- Permite que el rastreador reporte ubicación GNSS, marcas de tiempo y telemetría de movimiento a Plaspy para seguimiento en tiempo real e historial.
- Transmite tipos de eventos como encendido, puertas, alarmas y umbrales de sensores para que Plaspy pueda evaluar alertas y reglas.
- Transporta datos diagnósticos y datos derivados de OBD/CANBUS para incorporar información de salud del vehículo y consumo en los reportes.
- Soporta el almacenamiento offline en el dispositivo para que los registros en cola se suban a Plaspy tras una caída de red.
- Provee los identificadores que Plaspy necesita para asociar los mensajes entrantes con el registro de dispositivo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint unificado y detecta automáticamente el protocolo del rastreador para conexiones entrantes, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy. La configuración correcta del dispositivo para reportar al servidor de Plaspy es el paso clave para la detección automática y la incorporación exitosa.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP conocida del servidor es 54.85.159.138.
- El puerto compartido de reporte usado por Plaspy es 8888 y Plaspy emplea el mismo puerto para todos los dispositivos compatibles.
- Cuando un VT900-G está configurado para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy analizará la conexión entrante y la asociará automáticamente con un protocolo compatible.
- Dado que Plaspy detecta el protocolo automáticamente, normalmente solo es necesario asegurarse de que el dispositivo apunte al endpoint de Plaspy y use el transporte correcto.
- Si encuentra problemas durante la incorporación, confirmar que el dispositivo está enviando a d.plaspy.com en el puerto 8888 es un primer paso útil de diagnóstico.

## Transporte y contexto de la conexión

El VT900-G puede usar datos celulares para conectarse a Plaspy y puede configurarse para usar UDP o TCP según el soporte del dispositivo y la configuración. Comprender el transporte y los detalles del endpoint ayuda a garantizar la entrega confiable de registros de posición y eventos a Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar al servidor de Plaspy.
- El endpoint de reporte de Plaspy puede especificarse como d.plaspy.com o la IP del servidor 54.85.159.138 según la preferencia de despliegue.
- El enfoque de puerto único de Plaspy significa que todos los rastreadores compatibles reportan por el puerto 8888, lo que simplifica la configuración de firewall y de red.
- Las condiciones de red y las políticas del operador pueden influir en si UDP o TCP es más adecuado; seleccione el transporte que soporte el dispositivo y que sea compatible con la red móvil.
- Para despliegues celulares, confirme que los ajustes de APN y cualquier autenticación requerida estén correctos para que el VT900-G pueda abrir conexiones salientes hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden agregar, modificar o desaprobar tipos de mensajes y campos de telemetría; verifique las notas de versión del firmware al solucionar problemas o implementar nuevas funciones.
- Las revisiones de hardware y los periféricos opcionales (OBD/CANBUS, RFID, sensores de combustible) influyen en la telemetría disponible en los mensajes del dispositivo.
- Los menús de configuración del fabricante o los comandos por SMS/serie pueden cambiar cómo el dispositivo apunta a un endpoint de reporte; confirme siempre que el equipo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La elección de UDP frente a TCP dependerá del firmware del equipo y del entorno de red; asegúrese de que el transporte seleccionado sea soportado por el rastreador.
- La detección automática de protocolos de Plaspy reduce la configuración manual, pero identificadores precisos del dispositivo y firmware actualizado mejoran la fiabilidad de la detección.
- Al integrar flotas grandes, valide primero una muestra pequeña de dispositivos para confirmar que el transporte, el intervalo de reporte y el comportamiento de eventos satisfacen las necesidades operativas.

## Por qué es importante comprender el protocolo

Conocer los fundamentos del protocolo del dispositivo ayuda en la configuración, el diagnóstico y la fiabilidad a largo plazo al integrar rastreadores VT900-G con Plaspy. Entender cómo se comunica el equipo permite resolver más rápido las brechas de reporte y obtener un comportamiento de telemetría más predecible.

- Acelera la configuración inicial al aclarar qué endpoint y puerto debe usar el dispositivo.
- Ayuda a identificar por qué pueden faltar registros después de cortes, al comprender a nivel conceptual el almacenamiento en búfer y la retransmisión.
- Mejora la resolución de problemas de reglas y alertas cuando sabe qué telemetría debe enviar el dispositivo.
- Informa la elección del transporte (UDP vs TCP) según condiciones de red y capacidades del dispositivo.
- Apoya la planificación de actualizaciones de firmware, opciones de periféricos y despliegues de funciones en toda la flota.

## Por qué usar Plaspy con este protocolo

Usar el VT900-G con Plaspy ofrece a gerentes de flota y equipos de seguridad una vía práctica para combinar GNSS de calidad vehicular y conectividad celular con un backend único y unificado. Plaspy ingiere ubicación, diagnósticos CANBUS y eventos de sensores para proporcionar monitoreo en vivo, geocercas y reportes históricos que apoyan la supervisión operativa y los flujos de trabajo de seguridad.

El endpoint unificado de reporte de Plaspy en d.plaspy.com (54.85.159.138) en el puerto 8888, junto con la detección automática de protocolos, simplifica la incorporación de dispositivos y la gestión continua de la flota. Para saber más sobre Plaspy y cómo puede funcionar con el VT900-G, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente y las actualizaciones de firmware del VT900-G en el sitio del fabricante https://istartek.com/.
