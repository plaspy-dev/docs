---
slug: /eelink/gpt45/protocol
id: gpt45-protocol
sidebar_label: Protocol
title: EElink - GPT45 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador EElink GPT45 con Plaspy y obtener seguimiento fiable de vehículos y activos
keywords:
  - protocolo EElink GPT45
  - protocolo GPS EElink GPT45
  - EElink GPT45 Plaspy
  - protocolo de seguimiento GPT45
  - compatibilidad protocolo EELINK
  - comunicación rastreador GPS
  - rastreo de vehículos GPT45
  - rastreo de activos GPT45
  - protocolo de dispositivo Plaspy
  - rastreador para gestión de flotas
---

# EElink - Protocolo GPT45

Esta página describe el contexto público del protocolo para usar el rastreador GPS EElink GPT45 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, y explica qué aspectos del protocolo resultan relevantes al integrar la telemetría, los eventos y los datos de sensores del GPT45 en los flujos de trabajo de Plaspy.

Plaspy utiliza configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece contexto práctico más que especificaciones a nivel de firmware.

## Resumen del protocolo

El GPT45 emplea el protocolo de comunicación de EElink para transmitir posiciones GNSS, ubicaciones por método alternativo, telemetría de sensores y notificaciones de eventos hacia plataformas backend como Plaspy. El propósito del protocolo es posibilitar el reporte confiable de posición y estado del dispositivo para que Plaspy pueda ofrecer seguimiento en tiempo real, alertas y análisis histórico.

- Permite que el rastreador se identifique y entregue actualizaciones periódicas de ubicación al backend sin requerir sondeos manuales.
- Transporta mensajes basados en eventos, como colisión, vibración, caída y alarmas de velocidad, para acciones inmediatas en Plaspy.
- Lleva telemetría de múltiples sensores, incluida temperatura, humedad y presión barométrica, de modo que los datos ambientales estén disponibles para reglas y reportes de la plataforma.
- Soporta métodos de ubicación alternativos como Wi Fi y LBS para que Plaspy reciba actualizaciones cuando GNSS no esté disponible.
- Habilita opcionalmente el reenvío de datos de gateway Bluetooth para casos de uso basados en proximidad y balizas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido de la plataforma y determina automáticamente el protocolo del rastreador, por lo que usted normalmente no necesita seleccionar manualmente un protocolo dentro de Plaspy. La configuración correcta del dispositivo para que reporte al endpoint de Plaspy es el requisito principal para que la detección automática funcione.

- Plaspy escucha en un único puerto conocido para conexiones de dispositivos y usa ese endpoint para aceptar reportes de rastreadores compatibles.
- Cuando el dispositivo comienza a reportar a la plataforma, Plaspy detecta automáticamente el protocolo, lo que reduce pasos de configuración manual.
- Si el GPT45 está configurado para reportar al endpoint de Plaspy, generalmente no se requiere ninguna selección de protocolo adicional en la plataforma.
- Todos los dispositivos en Plaspy usan el mismo puerto para reporte, lo que simplifica la configuración e incorporación de equipos.
- Es esencial que el dispositivo esté autorizado para comunicarse por el transporte elegido y que el enrutamiento de red hacia el endpoint de Plaspy esté abierto para garantizar la detección automática.

## Contexto de transporte y conexión

El GPT45 puede configurarse para usar UDP o TCP al enviar datos a Plaspy, según la configuración del dispositivo y las opciones que soporte el fabricante. Plaspy provee un único endpoint de servidor al que los dispositivos pueden reportar; la elección del transporte afecta las características de entrega pero no el concepto general de integración con la plataforma.

- Los dispositivos pueden configurarse para reportar al dominio del servidor Plaspy d.plaspy.com.
- También pueden apuntar directamente a la IP del servidor Plaspy 54.85.159.138 si no se desea o no está disponible la resolución DNS.
- El puerto de comunicación usado por la plataforma es 8888 y el GPT45 puede configurarse para usar UDP o TCP en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que hace consistente la configuración a nivel de flota.
- Seleccione UDP para menor sobrecarga o TCP para entrega orientada a conexión según el soporte del dispositivo y los requisitos de confiabilidad de la red.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos soportados u opciones de telemetría; siempre verifique las notas de la versión del firmware para GPT45.
- Revisiones de hardware o lotes de producción pueden introducir diferencias sutiles; consulte la etiqueta del dispositivo y la guía del fabricante al diagnosticar problemas.
- La selección del transporte (UDP versus TCP) es una opción de configuración en el dispositivo y puede afectar el comportamiento observado por el servidor.
- Los comandos de configuración del fabricante y los métodos de configuración remota pueden variar según la región o el firmware, por lo que conviene consultar las instrucciones oficiales de EElink para los nombres de parámetros en el equipo.
- Plaspy detecta el protocolo automáticamente, pero los dispositivos deben estar correctamente configurados para reportar al endpoint de Plaspy para que la detección tenga éxito.
- Para conjuntos de comandos específicos del dispositivo o detalles de mensajes dependientes de firmware, consulte la documentación del fabricante antes de realizar cambios operativos.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una integración fluida con Plaspy, agiliza la resolución de problemas y respalda la operación confiable a largo plazo de los dispositivos GPT45 en la plataforma. Saber de qué se encarga el protocolo permite a los administradores relacionar el comportamiento del equipo con las funciones de la plataforma y diagnosticar incidencias con mayor rapidez.

- Configurar correctamente el transporte y el endpoint del dispositivo evita mensajes perdidos y brechas en el reporte.
- Reconocer cómo se entregan los mensajes de evento mejora la afinación de alertas y la configuración de reglas en Plaspy.
- Estar al tanto de comportamientos dependientes de firmware ayuda al actualizar dispositivos o al solucionar regresiones tras una actualización.
- Conocer qué campos de telemetría puede reportar el dispositivo permite crear paneles y análisis históricos precisos.
- Entender las compensaciones entre transportes orienta la configuración de red en sitios con conectividad limitada.

## Por qué usar Plaspy con este protocolo

Usar el GPT45 con Plaspy entrega ubicación en tiempo real, notificaciones de eventos y telemetría multisensor en una plataforma unificada para monitoreo de flota y activos. La combinación de las capacidades del hardware GPT45 y la detección automática de protocolos y el enfoque de endpoint único de Plaspy simplifica la incorporación de dispositivos y ayuda a que los equipos se concentren en casos de uso operativos en vez de en la mecánica de conectividad.

Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos como el GPT45 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la información actual y específica del dispositivo en el sitio del fabricante https://www.eelink.com.cn/.
