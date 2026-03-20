---
slug: /sentar/d32/protocol
id: d32-protocol
sidebar_label: Protocol
title: Sentar - D32 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el smartwatch Sentar D32 con Plaspy para rastreo y alertas confiables
keywords:
  - protocolo Sentar D32
  - protocolo smartwatch D32 GPS
  - compatibilidad Sentar D32 Plaspy
  - protocolo de comunicación Sentar D32
  - protocolo de rastreo Sentar D32
  - protocolo GPS wearable Sentar
  - protocolo rastreador Plaspy
  - compatibilidad protocolo rastreador GPS
  - protocolo reloj inteligente para seguimiento personal
  - protocolo de rastreo en tiempo real
---

# Sentar - D32 Protocol

Esta página describe el contexto público del protocolo para utilizar el smartwatch Sentar D32 con Plaspy. Se centra en cómo el D32, un reloj GPS 4G con Android, transmite datos de ubicación, telemetría y eventos a Plaspy para monitoreo en tiempo real, alertas SOS y verificación de incidentes. El D32 combina posicionamiento multimodal (GPS, AGPS, LBS, Wi‑Fi), voz y datos celulares, botón SOS y cámara para ofrecer conciencia situacional continua cuando se integra con una plataforma en la nube como Plaspy.

Plaspy usa ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta correctamente a la plataforma. El comportamiento exacto del protocolo y la disponibilidad de comandos pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece contexto público y no sensible sobre comunicación y compatibilidad en lugar de detalles internos del dispositivo.

## Resumen del protocolo

A nivel general, el protocolo del D32 define cómo el reloj se identifica, informa ubicación y estado, y comunica alertas basadas en eventos a un host de back-end como Plaspy. La función del protocolo es garantizar que Plaspy reciba datos coherentes y puntuales que reflejen las fuentes de ubicación GNSS y asistidas del wearable, la telemetría de energía y batería, eventos SOS y referencias a medios o llamadas.

- Permite que el D32 reporte datos GNSS y de ubicación asistida para su mapeo en Plaspy
- Transmite el estado del dispositivo y la telemetría como batería, estado de conectividad y eventos de sensores
- Envía alertas basadas en eventos, incluyendo pulsaciones del botón SOS y disparadores de geocerca
- Vincula referencias a medios e indicadores de llamadas con la línea temporal de incidentes sin exponer detalles internos sensibles
- Proporciona un flujo de reporte transportable para que Plaspy pueda correlacionar posiciones del wearable con otros activos

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de dispositivos en un endpoint y puerto compartidos y detectar automáticamente el protocolo correcto de los rastreadores que reportan a ese endpoint. En la mayoría de los casos, un D32 configurado correctamente para apuntar a los ajustes de conexión de Plaspy será identificado sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la dirección IP del servidor es 54.85.159.138
- El puerto usado por Plaspy es 8888 y todos los dispositivos en Plaspy utilizan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan al endpoint compartido
- Normalmente usted no necesita elegir un protocolo manualmente si el dispositivo está configurado para reportar a Plaspy
- La detección se basa en recibir reportes legítimos del dispositivo más que en publicar detalles internos del mismo

## Transporte y contexto de conexión

El D32 puede usar UDP o TCP como transporte según el firmware y la configuración del dispositivo, y puede apuntar a Plaspy usando el dominio o la dirección numérica del servidor. Esta sección cubre el contexto de conexión en lugar de los internals del protocolo para que los integradores entiendan cómo direccionar los dispositivos hacia Plaspy para el reporte.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888 para simplificar la configuración
- La selección de transporte (UDP o TCP) influye en las características de retransmisión y entrega, pero no en la descripción pública del protocolo aquí
- Verifique que los parámetros de configuración del dispositivo coincidan con el transporte y endpoint previstos antes de desplegar a gran escala

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes y campos opcionales, por lo que siempre verifique el comportamiento después de actualizaciones
- Las revisiones de hardware pueden alterar la disponibilidad de sensores o funciones de medios que afectan lo que el dispositivo reporta
- La configuración por parte del fabricante o compilaciones regionales de firmware pueden introducir diferencias menores en el protocolo
- La elección entre UDP y TCP puede afectar la fiabilidad de entrega y debe validarse en su entorno operativo
- Apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 es obligatorio para la ingestión en Plaspy
- Confirme parámetros del dispositivo como APN y la provisión celular para asegurar que el D32 pueda alcanzar Plaspy a través de la red móvil
- Valide el reporte de extremo a extremo en una prueba controlada antes de un despliegue amplio

## Por qué es importante entender el protocolo

Comprender cómo el D32 se comunica con Plaspy ayuda a garantizar una configuración confiable, acelera la resolución de problemas cuando faltan o están mal formateados los reportes, y respalda la estabilidad operativa a largo plazo para casos de uso de rastreo y seguridad.

- Acelera la configuración inicial al aclarar dónde y cómo debe reportar el dispositivo
- Ayuda a resolver problemas de conectividad entre el D32 y el endpoint de Plaspy
- Respaldan decisiones informadas sobre la selección de transporte y el comportamiento esperado de entrega
- Permite validar actualizaciones de firmware y su impacto en los campos reportados
- Mejora la respuesta ante incidentes cuando las referencias SOS y de medios aparecen en las líneas temporales de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Sentar D32 con Plaspy ofrece a las organizaciones una solución de rastreo y comunicación wearable que integra ubicación en tiempo real, alertas SOS y referencias a medios en un único flujo de monitoreo. La combinación de posicionamiento multimodal y capacidades celulares de voz/video hace que el D32 sea adecuado para rastreo de personal, seguridad de trabajadores solitarios, vigilancia de cuidado infantil y operaciones de campo a pie donde la visibilidad continua y la verificación rápida son importantes.

Para obtener más información sobre Plaspy y cómo puede ingerir datos de trackers wearables, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le pedimos verificar la información más reciente específica del dispositivo y del firmware en el sitio del fabricante http://www.sentarsmart.com/.
