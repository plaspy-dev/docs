---
slug: /riti/690_idu_401/protocol
id: 690_idu_401-protocol
sidebar_label: Protocol
title: Riti - 690 (IDU-401) Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Riti 690 IDU-401 y su comunicación con Plaspy para telemetría GPS y envío de imágenes
keywords:
  - Protocolo Riti 690
  - Protocolo GPS Riti IDU 401
  - Compatibilidad Riti 690 Plaspy
  - Comunicación Locator 690
  - Protocolo de rastreo vehicular Riti
  - Evidencia en imágenes de rastreador GPS
  - Protocolo de rastreador Plaspy
  - Gestión de flotas Riti 690
  - Telemetría Riti 690
  - Captura de imágenes por eventos
---

# Riti - 690 (IDU-401) Protocolo

Esta página presenta el contexto público del protocolo para usar el Riti Locator 690 (IDU-401) con Plaspy. Explica cómo el equipo comunica telemetría GPS, sube imágenes generadas por eventos y reporta información a la nube de Plaspy, sin exponer detalles privados de implementación. El contenido se centra en el papel del protocolo en una integración confiable y en consideraciones prácticas de configuración para administradores de flota e integradores.

Plaspy utiliza un punto de conexión y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto público general y los puntos de integración en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El protocolo del rastreador para el Locator 690 regula cómo la unidad se identifica ante la nube, reporta telemetría GPS y eventos, y entrega imágenes de eventos capturadas por la IA integrada en el dispositivo. El objetivo del protocolo es hacer que los datos de ubicación y evidencia sean utilizables por Plaspy para visualización, alertas y revisión forense, a la vez que conserva capacidades del equipo como capturas desencadenadas por IO y el almacenamiento local en búfer.

- Permite al dispositivo reportar posición, velocidad, rumbo y metadatos de eventos a Plaspy para seguimiento en tiempo real y reproducción histórica.
- Transporta señales de eventos y marcas de tiempo que permiten a Plaspy indexar imágenes pre evento, durante el evento y post evento junto con las trayectorias GPS.
- Facilita solicitudes de recuperación de imágenes en vivo desde la plataforma y las apps móviles para que los responsables puedan ver imágenes situacionales.
- Soporta mensajes de configuración y disparos remotos cuando el dispositivo y el firmware exponen esas funciones de gestión.
- Opera junto con el almacenamiento local en búfer para asegurar el comportamiento de reenvío al conectarse cuando la conectividad celular se interrumpe.

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint unificado que acepta conexiones entrantes de rastreadores y usa ese único punto de contacto para determinar el tratamiento adecuado para cada dispositivo. Cuando un Locator 690 se apunta al endpoint y puerto de Plaspy, la plataforma asociará los reportes entrantes con comportamientos conocidos y encaminará la telemetría e imágenes automáticamente.

- Apunte su dispositivo al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para reportar telemetría e imágenes.
- Use el puerto 8888 para comunicaciones, ya que todos los dispositivos en Plaspy comparten el mismo puerto para el reporte.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint compartido, por lo que normalmente no es necesario seleccionar el protocolo de forma manual en la plataforma.
- Asegúrese de que el equipo esté configurado para usar el transporte y el formato de reporte que soporte el firmware, de modo que la plataforma pueda reconocer sus mensajes.
- Si un dispositivo utiliza funciones de gestión remota, esos mensajes se procesarán según el conjunto de funciones expuesto por el firmware del equipo.

## Contexto de transporte y conexión

La selección del transporte y la dirección del servidor son parte importante para la conectividad fiable del dispositivo. El Locator 690 admite enlace celular para telemetría y subidas de imágenes, y puede configurarse para usar UDP o TCP en el puerto de la plataforma según las condiciones de red y las capacidades del firmware.

- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las decisiones de configuración local.
- Puede apuntar el rastreador al dominio d.plaspy.com o a la IP 54.85.159.138 según requiera su despliegue.
- Todos los dispositivos Plaspy usan el mismo puerto 8888 para reporte, lo que simplifica la configuración de firewall y del carrier en redes de flota.
- Elija el transporte que coincida con su carrier y necesidades de fiabilidad; TCP ofrece entrega orientada a conexión mientras UDP puede ser útil por menor overhead cuando el firmware soporta retransmisiones.
- Verifique que cualquier NAT intermedio o carrier grade NAT permita conexiones salientes al endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- El Locator 690 es compatible con Plaspy y soporta las funciones del equipo que entregan telemetría e imágenes de eventos a la plataforma.
- Las revisiones de firmware pueden cambiar las funciones disponibles, el temporizado de mensajes y campos opcionales, por lo que el comportamiento puede diferir entre unidades o versiones de firmware.
- Revisiones de hardware y accesorios opcionales que aporten sensores o entradas adicionales pueden modificar las cargas de evento y los disparadores que el rastreador envía.
- La elección de transporte TCP versus UDP puede afectar las garantías de entrega y cómo el dispositivo reenvía datos almacenados en búfer cuando se restablece la conectividad.
- Confirme siempre que los parámetros de configuración del equipo, como el dominio o IP del servidor de Plaspy y el puerto 8888, estén correctamente establecidos en las unidades desplegadas.
- Para comandos de gestión remota y configuración avanzada, consulte la documentación del fabricante para entender los ajustes remotos soportados y sus limitaciones.
- Valide la compatibilidad y la disponibilidad de funciones con la documentación oficial de Riti para el hardware y firmware específico en uso.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del dispositivo ayuda a asegurar una configuración ágil, un flujo de datos confiable y una resolución de problemas efectiva al usar el Locator 690 con Plaspy. Tener claridad sobre cómo el rastreador reporta telemetría e imágenes reduce el tiempo de integración y mejora la fiabilidad operativa para administradores de flota e integradores.

- Verifica que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que los datos lleguen a Plaspy.
- Ayuda a diagnosticar problemas de conectividad relacionados con el transporte, restricciones del carrier o reglas de firewall que bloqueen el puerto 8888.
- Permite reconstrucciones de incidentes más rápidas al asegurar que las imágenes de eventos se indexen correctamente con las trayectorias GPS y las marcas de tiempo.
- Respaldan decisiones sobre la configuración de disparadores IO, comportamiento de buffering y retención de imágenes para ajustarse a las necesidades operativas.
- Orienta la planificación de actualizaciones de firmware al identificar qué versiones soportan las funciones requeridas por sus flujos de trabajo.

## Por qué usar Plaspy con este protocolo

Usar el Locator 690 con Plaspy ofrece a las organizaciones una forma práctica de combinar telemetría y evidencia en imágenes indexadas para acelerar la respuesta a incidentes y obtener una visión operacional más completa. La IA integrada en el dispositivo, los disparadores configurables por IO y el almacenamiento local en búfer mejoran la capacidad de Plaspy para presentar imágenes vinculadas a eventos junto con las trayectorias GPS, de modo que los equipos puedan actuar con evidencia de alta fidelidad.

Plaspy simplifica la conectividad del dispositivo al usar un único puerto de reporte y detección automática de protocolo, permitiendo que las flotas se concentren en la operación en lugar de en la configuración del protocolo. Para conocer más sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para detalles de protocolo específicos por dispositivo y firmware, verifique la información con el fabricante en https://www.riti.com.tw/ ya que el comportamiento del firmware y la implementación del equipo pueden cambiar con el tiempo.
