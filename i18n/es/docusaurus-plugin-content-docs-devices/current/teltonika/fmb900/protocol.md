---
slug: /teltonika/fmb900/protocol
id: fmb900-protocol
sidebar_label: Protocol
title: Teltonika - FMB900 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Teltonika FMB900 con Plaspy, incluyendo ajustes de conexión transporte y notas de compatibilidad
keywords:
  - Protocolo Teltonika FMB900
  - Protocolo GPS Teltonika FMB900
  - Compatibilidad FMB900 Plaspy
  - Protocolo de comunicación FMB900
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreador GPS Teltonika
  - Protocolo de seguimiento FMB900
  - Seguimiento de vehículo FMB900
  - Telemetría BLE FMB900
  - Gestión de flotas FMB900
---

# Teltonika - FMB900 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMB900 con Plaspy. Explica, en términos generales, cómo el dispositivo comunica posición y telemetría con Plaspy, qué puntos de conexión y opciones de transporte se emplean y qué esperar al integrar el FMB900 en una implementación de Plaspy. El contenido está orientado a información no sensible y de uso público para facilitar la configuración y la verificación de compatibilidad.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; considere esta guía como una visión práctica en lugar de un manual específico de firmware.

## Resumen del protocolo

El FMB900 utiliza un enfoque estándar de reporte por parte de rastreadores para enviar datos de ubicación y telemetría a un servidor remoto. El contexto público del protocolo para este modelo se centra en el envío fiable de posición GNSS, telemetría por BLE y estados básicos de entradas y salidas, de modo que la información sea utilizable en plataformas de gestión de flotas como Plaspy.

- El protocolo permite que el dispositivo se identifique y envíe actualizaciones de posición y telemetría al endpoint de Plaspy.
- Los reportes suelen incluir coordenadas GNSS, velocidad, marca de tiempo, estados básicos de E/S y valores de sensores BLE cuando están disponibles.
- El canal de comunicación entre el dispositivo y el servidor se establece sobre transportes de red estándar para que los mensajes lleguen a Plaspy para su análisis y visualización.
- Los detalles del protocolo definen cómo se empaquetan los puntos de datos y qué campos de telemetría están presentes, lo que afecta el mapeo de datos en Plaspy.
- La gestión remota del dispositivo y las actualizaciones de firmware son responsabilidad del fabricante, mientras que la telemetría fluye hacia Plaspy para monitorización y análisis.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador para los dispositivos que reportan correctamente. En la mayoría de los casos, usted no necesita seleccionar un protocolo dentro de Plaspy; con que el dispositivo esté configurado para enviar datos a la dirección de Plaspy es suficiente para la detección automática.

- Plaspy escucha en el mismo puerto para todos los rastreadores soportados, lo que simplifica la configuración del dispositivo.
- Cuando un equipo reporta al endpoint de Plaspy, la plataforma examina los datos entrantes y determina el protocolo para su procesamiento.
- Normalmente usted configura el FMB900 para que reporte a la dirección del servidor Plaspy y la plataforma se encarga de identificar el protocolo automáticamente.
- No se requiere ninguna selección manual de protocolo en Plaspy si el rastreador apunta al host y al puerto correctos.
- Verifique que los ajustes de reporte estén aplicados en el equipo para permitir que ocurra la detección automática.

## Transporte y contexto de conexión

La configuración de conexión para el FMB900 se realiza mediante transportes IP estándar. El dispositivo puede configurarse para reportar a Plaspy mediante UDP o TCP, dependiendo del soporte del equipo y de la configuración elegida. Plaspy ofrece un único host y puerto que el FMB900 puede usar para enviar telemetría y datos de ubicación.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- El puerto en escucha de Plaspy para los reportes de dispositivos es 8888 y todos los equipos usan el mismo puerto para simplificar el aprovisionamiento.
- El FMB900 puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del dispositivo y los requisitos de red.
- Elija UDP para reportes ligeros cuando las condiciones de red y las tolerancias a pérdida de paquetes sean aceptables, o TCP para un enfoque orientado a conexión cuando esté disponible.
- Asegúrese de que el APN y los ajustes GPRS en el rastreador sean correctos para que el dispositivo pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- El FMB900 es compatible con Plaspy cuando se configura para reportar al endpoint de Plaspy, aunque la disponibilidad de funciones puede variar según las versiones de firmware.
- Las actualizaciones de firmware o revisiones de hardware pueden cambiar el conjunto de campos de telemetría o el manejo de sensores BLE; verifique el comportamiento después de actualizaciones.
- La selección de transporte entre UDP y TCP puede afectar las garantías de entrega y debe corresponder con sus necesidades operativas y la configuración del rastreador.
- Las herramientas de configuración del fabricante, como Teltonika Configurator, y los mecanismos FOTA influyen en el comportamiento del equipo pero no modifican el destino público de los reportes.
- La telemetría BLE procedente de EYE Sensor y EYE Beacon es transmitida por el dispositivo dentro del reporte del rastreador y puede aparecer de forma distinta según el firmware y el mapeo en Plaspy.
- Valide siempre funcionalidades críticas, como el control de inmovilizador y el reporte de sensores BLE, en una prueba controlada antes del despliegue completo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que los dispositivos estén configurados correctamente, que los datos lleguen como se espera y que cualquier anomalía pueda diagnosticarse con rapidez. Un buen conocimiento del protocolo reduce el tiempo de puesta en marcha y mejora la fiabilidad operativa al usar el FMB900 con Plaspy.

- Le permite confirmar que el rastreador apunta al host y puerto correctos de Plaspy y que está usando el transporte deseado.
- Saber qué campos de telemetría esperar acelera el mapeo de esos datos en las pantallas y alertas de Plaspy.
- Conocer las diferencias entre versiones de firmware y hardware evita sorpresas tras actualizaciones o reemplazos remotos.
- El contexto del protocolo facilita la resolución de problemas cuando falta telemetría o cuando los datos de sensores BLE no aparecen.
- Le orienta en la decisión entre UDP y TCP según sus necesidades de rendimiento y confiabilidad.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB900 con Plaspy ofrece a las organizaciones una vía directa para obtener ubicación en tiempo real, telemetría básica y entradas de sensores habilitados por BLE para la supervisión de flotas y activos. El factor de forma compacto del FMB900 y su soporte BLE lo hacen práctico para aplicaciones donde el tamaño y el costo son determinantes, mientras que Plaspy recibe y procesa los reportes del equipo para su visualización, alertas e informes.

Para empezar, configure el FMB900 para que reporte a Plaspy en d.plaspy.com o en 54.85.159.138 usando el puerto 8888 y elija UDP o TCP según sus necesidades de red. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el equipo esté configurado correctamente. Conozca más sobre Plaspy en https://www.plaspy.com y verifique los últimos detalles de protocolo y firmware del dispositivo con el fabricante en https://www.teltonika-gps.com/ para asegurarse de estar trabajando siempre con la información más actual.
