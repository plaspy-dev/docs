---
slug: /aoya/a206/protocol
id: a206-protocol
sidebar_label: Protocol
title: AoYa - A206 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general del protocolo público y compatibilidad con Plaspy para el rastreador AoYa A206, con orientación de conexión e integración
keywords:
  - Protocolo AoYa A206
  - Protocolo GPS AoYa A206
  - Protocolo de comunicación AoYa A206
  - Protocolo de rastreo AoYa A206
  - Compatibilidad AoYa A206
  - AoYa A206 Plaspy
  - Protocolo GPS AoYa
  - Protocolo del rastreador A206
  - Protocolo de rastreo vehicular
  - Protocolo de rastreador GPS
---

# AoYa - A206 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador GPS AoYa A206 con Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel, qué puntos de integración son relevantes para la plataforma Plaspy y consideraciones prácticas para la configuración y validación. El A206 es un rastreador para automóviles con posicionamiento GPS y AGPS, receptor UBLOX para fijaciones fiables y una batería Li-ion de larga duración, adecuado para monitoreo de flotas o vehículos particulares.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El endpoint de servidor de Plaspy es d.plaspy.com con dirección IP 54.85.159.138 y usa el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo para el A206 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda revisar la documentación del fabricante cuando se requieran detalles precisos del protocolo.

## Resumen del protocolo

A alto nivel, el protocolo de comunicación del rastreador define cómo el AoYa A206 reporta posición, tiempo y estado básico del dispositivo a un servidor remoto como Plaspy. El protocolo regula cómo el dispositivo se identifica, cómo se empaqueta la telemetría y cómo el servidor puede reconocer o responder cuando corresponde. Para la integración con Plaspy, este protocolo permite reportes de ubicación confiables y visibilidad del estado sin necesidad de que el usuario realice un análisis manual de los mensajes.

- Permite que el A206 transmita datos de ubicación derivados del GPS y AGPS a un endpoint remoto para seguimiento y almacenamiento histórico
- Transporta identificadores del dispositivo y campos de estado básicos que permiten a Plaspy asignar mensajes entrantes a un rastreador específico
- Conduce telemetría periódica o por evento —como ubicación, estado de batería y conectividad— en un formato que Plaspy puede procesar
- Soporta los métodos de transporte y direccionamiento necesarios para alcanzar Plaspy en el endpoint compartido de la plataforma
- Sirve como base para pruebas de compatibilidad y resolución de problemas entre el firmware del dispositivo y la plataforma Plaspy

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador según las características de la conexión y la carga útil entrante. Dado que Plaspy usa un puerto común para todos los dispositivos, la mayoría de los usuarios no necesita seleccionar un protocolo manualmente en Plaspy cuando el dispositivo está correctamente configurado para informar a Plaspy.

- Plaspy escucha en el puerto 8888 el tráfico de dispositivos y utiliza d.plaspy.com o 54.85.159.138 como dirección de reporte
- Las conexiones entrantes pueden llegar por UDP o TCP según la configuración del dispositivo y las condiciones de red
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma empareja el mensaje con un perfil de dispositivo conocido y aplica el tratamiento correspondiente
- La detección automática reduce la necesidad de seleccionar manualmente el protocolo dentro de Plaspy para dispositivos configurados correctamente
- Usted debe asegurarse de que el A206 esté configurado para reportar a la dirección y puerto de Plaspy para permitir que ocurra la detección automática

## Transporte y contexto de conexión

Los ajustes de transporte y conexión son clave para lograr que el A206 se comunique con Plaspy. El dispositivo puede configurarse para enviar su telemetría por UDP o TCP al servidor de Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y facilita apuntar el dispositivo al endpoint correcto.

- El A206 puede configurarse para usar UDP o TCP en el puerto 8888 para comunicarse con Plaspy
- Plaspy acepta tráfico de dispositivos en d.plaspy.com y en su IP pública 54.85.159.138
- Usar el puerto compartido 8888 entre dispositivos reduce la variación de configuración al desplegar flotas
- Elementos de la red como firewalls o restricciones del operador móvil pueden afectar si UDP o TCP es más adecuado
- Verifique que el APN y el plan de datos del dispositivo permitan conexiones salientes al endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del A206 pueden cambiar el timing de los mensajes, los campos disponibles o las preferencias de transporte; documente la versión de firmware al solucionar problemas
- Revisiones de hardware o variantes regionales pueden implementar funciones del protocolo de manera distinta; revise la etiqueta del dispositivo y las notas del fabricante
- La elección entre UDP y TCP puede afectar la fiabilidad de los mensajes y las respuestas del servidor según el comportamiento de la red móvil
- Los comandos de servidor del fabricante o los mecanismos de configuración remota pueden ser opcionales o variar según el firmware y deben validarse por separado
- Verifique siempre que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para garantizar la conectividad con Plaspy
- En caso de duda, compare el comportamiento con la documentación oficial del fabricante para el A206

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del A206 ayuda a asegurar una configuración inicial fluida, acelerar la resolución de problemas y obtener una operación a largo plazo más predecible cuando se integra con Plaspy. Aunque Plaspy automatiza muchos aspectos del manejo de protocolos, conocer cómo el dispositivo reporta datos y qué puede variar entre versiones de firmware o hardware ayuda al personal técnico a resolver incidencias y optimizar despliegues.

- Acelera la configuración inicial al confirmar la dirección del servidor, el transporte y el comportamiento de reporte correctos
- Ayuda a identificar si las fallas de conectividad se deben a configuraciones de red, elección de transporte o diferencias de firmware
- Orienta la decisión de usar UDP o TCP en entornos con rendimiento móvil variable
- Mejora la respuesta ante incidentes al aclarar qué campos de telemetría esperar del dispositivo
- Reduce el tiempo de integración al desplegar múltiples dispositivos con revisiones de firmware mixtas

## Por qué usar Plaspy con este protocolo

Usar el AoYa A206 con Plaspy ofrece a las organizaciones una forma directa de recopilar ubicación y estado básico del dispositivo desde un rastreador automotriz compacto. La detección automática de protocolos de Plaspy y el enfoque de puerto unificado simplifican los despliegues a escala de flota, de modo que los dispositivos puedan reportar a un único endpoint sin cambios de puerto por dispositivo. Para gerentes de flota y equipos de seguridad, combinar las características del A206 con las herramientas de la plataforma Plaspy proporciona visibilidad práctica e información operativa.

Para obtener más información sobre Plaspy y cómo soporta la conectividad de dispositivos a escala, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la información más reciente del protocolo específico del dispositivo y las notas de firmware con el fabricante en http://www.aoyagps.com/.
