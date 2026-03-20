---
slug: /telic/telic_solar/protocol
id: telic_solar-protocol
sidebar_label: Protocol
title: Telic - Telic Solar Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador Telic Solar con Plaspy y entender reportes y conectividad
keywords:
  - protocolo Telic Solar
  - protocolo GPS Telic Solar
  - Telic Solar Plaspy
  - protocolo rastreador GPS Telic
  - seguimiento Telic Solar
  - comunicación rastreador GPS
  - rastreo de activos Telic
  - rastreo de contenedores solar
  - seguimiento de flotas Plaspy
  - telemetría Bluetooth Telic
---

# Telic - Protocolo Telic Solar

Esta página describe el contexto público del protocolo para usar el rastreador Telic Solar con la plataforma Plaspy. Explica cómo el dispositivo envía ubicación, telemetría de sensores interiores y estado energético a Plaspy, y ofrece la información de conexión que usted debe conocer al preparar dispositivos para la integración.

Plaspy emplea ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que conviene revisar las notas de firmware y la documentación del fabricante para detalles específicos del modelo.

## Resumen del protocolo

El protocolo de comunicación Telic Solar permite al dispositivo reportar ubicación GNSS, estado de energía y telemetría de sensores interiores recibida a través de su antena direccional Bluetooth hacia un backend como Plaspy. El protocolo define cómo el rastreador se identifica ante el servidor, cómo se presentan los campos de telemetría y cómo se transmiten los reportes periódicos o por eventos para su ingestión por plataformas de flotas.

- Permite al rastreador enviar ubicaciones, marcas de tiempo y eventos de movimiento que Plaspy asocia con activos.
- Transporta datos de sensores interiores recibidos por Bluetooth para que Plaspy combine la telemetría ambiental con la ubicación.
- Transmite métricas de energía y del panel solar para que Plaspy refleje el estado de batería y disponibilidad.
- Soporta cadencias de reporte y disparadores por evento configurables en el equipo o en la aplicación Telic.
- Habilita la identificación del dispositivo e informes básicos de salud para que Plaspy pueda asociar los datos entrantes con el activo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint de red compartido y detecta automáticamente el protocolo del rastreador cuando recibe datos. En la mayoría de implementaciones, el dispositivo está configurado para reenviar telemetría al endpoint de Plaspy y no se requiere seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy utiliza un único endpoint de servidor para recibir reportes de dispositivos y realiza la detección automática del protocolo.
- Los dispositivos deben estar configurados para reportar a d.plaspy.com o a la IP del servidor Plaspy para que los datos entren a la plataforma.
- Debido a la detección automática, por lo general los usuarios no necesitan elegir una opción de protocolo dentro de Plaspy.
- La configuración correcta del dispositivo en la aplicación Telic o en el backend del fabricante es el paso clave para habilitar la detección automática.
- Si un dispositivo no aparece en Plaspy, revise primero la configuración de reporte del equipo, la selección del transporte y la compatibilidad de firmware como pasos iniciales de diagnóstico.

## Transporte y contexto de conexión

Los dispositivos Telic Solar suelen configurarse en fabricación o en campo para reportar telemetría al endpoint de Plaspy usando protocolos de transporte estándar. Dependiendo de la configuración del dispositivo y del firmware, el rastreador puede usar UDP o TCP para enviar reportes a Plaspy en el puerto de reporte compartido.

- El dispositivo puede estar configurado para usar UDP en el puerto 8888 o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar su host de reporte a d.plaspy.com o directamente a 54.85.159.138 para alcanzar Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y red para despliegues de flota.
- Elija UDP cuando se requiera bajo overhead y el firmware del dispositivo lo soporte; elija TCP cuando prefiera confirmación de entrega y semánticas de sesión.
- Asegúrese de que el acceso saliente desde las redes de los dispositivos hacia el endpoint de Plaspy esté permitido para el transporte y puerto seleccionados.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué campos de telemetría están disponibles y con qué frecuencia se emiten reportes.
- Las revisiones de hardware y sensores opcionales, como la telemetría interior por Bluetooth, pueden afectar los datos reportados y las opciones de configuración.
- La selección de transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo Telic y con cualquier reenvío en el backend configurado en la aplicación de seguimiento Telic.
- Las configuraciones del backend del fabricante o las personalizaciones en la aplicación Telic pueden modificar qué campos se reenvían a Plaspy.
- Valide la compatibilidad contra la hoja de datos (datasheet) del Telic Solar y las guías de configuración de Telic antes de un despliegue a gran escala.
- Pruebe un dispositivo representativo para confirmar que la ubicación, los datos de sensores Bluetooth y las métricas de energía aparezcan correctamente en Plaspy.

## Por qué es importante comprender el protocolo

Tener claro el protocolo de comunicación ayuda a asegurar reportes confiables, un mapeo correcto de datos en Plaspy y a acelerar la resolución de problemas cuando los dispositivos no se comportan como se espera. Conocer qué transporte, host de reporte y campos de telemetría están en uso reduce el tiempo de integración y mejora la confiabilidad operativa a largo plazo.

- Garantiza que los dispositivos apunten al endpoint correcto de Plaspy para que los datos lleguen a la plataforma.
- Ayuda a alinear la cadencia de reportes y los disparadores de evento con los requisitos operativos.
- Facilita el diagnóstico de problemas de conectividad relacionados con transporte, puertos o restricciones de red.
- Permite un mapeo preciso de lecturas de sensores Bluetooth y del estado energético en los paneles de Plaspy.
- Orienta la planificación de actualizaciones de firmware para preservar la telemetría y el comportamiento necesarios.

## Por qué usar Plaspy con este protocolo

Usar Telic Solar con Plaspy ofrece una solución compacta y resistente para el rastreo a largo plazo de contenedores, cajas intercambiables y vagones de carga. La combinación de gestión energética con panel solar del Telic Solar, su carcasa con clasificación IP69 y el soporte de sensores direccionales Bluetooth proporciona una solución de visibilidad de activos de bajo mantenimiento que alimenta ubicación y telemetría interior a Plaspy para monitoreo operativo y alertas.

La detección automática de protocolo de Plaspy y su endpoint de reporte compartido simplifican el despliegue en numerosos dispositivos y tipos de activo. Para obtener más información sobre la integración de dispositivos Telic Solar y revisar consideraciones de despliegue, visite el sitio web de Plaspy en https://www.plaspy.com. Para el comportamiento específico según firmware y detalles de implementación del dispositivo, verifique la información actual en el sitio del fabricante https://www.telic.de.
