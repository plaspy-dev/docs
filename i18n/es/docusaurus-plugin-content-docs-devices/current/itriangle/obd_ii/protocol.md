---
slug: /itriangle/obd_ii/protocol
id: obd_ii-protocol
sidebar_label: Protocol
title: iTriangle - OBD II Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador iTriangle OBD II y su comunicación con Plaspy para integración y telemetía
keywords:
  - protocolo iTriangle OBD II
  - protocolo GPS iTriangle OBD II
  - protocolo de comunicación iTriangle OBD II
  - protocolo de rastreo iTriangle OBD II
  - protocolo del rastreador GPS iTriangle
  - compatibilidad de dispositivos Plaspy
  - protocolo de telemetría OBD II
  - rastreo y diagnóstico vehicular
  - protocolo GPS para gestión de flotas
  - rastreo OBD II CAN bus
---

# iTriangle - Protocolo OBD II

Esta página describe el contexto público del protocolo para usar el rastreador iTriangle OBD II con Plaspy. Resume cómo el dispositivo envía telemetría, fijaciones GNSS y diagnósticos del vehículo a la nube, proporcionando información útil para la integración, la planificación del despliegue y la resolución de problemas, sin exponer detalles de implementación privados o sensibles.

El OBD II es un rastreador GNSS celular plug and play de grado profesional con antenas internas, acceso al bus CAN y capacidad de actualización OTA. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Por ello, esta página se centra en el contexto general del protocolo público y en notas prácticas de integración.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo por el cual el iTriangle OBD II envía fijaciones GNSS, telemetría OBD II/CAN, información del acelerómetro y eventos a un punto final en la nube para que plataformas como Plaspy puedan ingerir, mostrar y actuar sobre los datos. El protocolo permite que el dispositivo se identifique, reporte datos periódicos y basados en eventos, y reciba configuraciones remotas o actualizaciones de firmware cuando están soportadas.

- Permite la entrega de posiciones GNSS y recorridos históricos a Plaspy para mapas en tiempo real e informes.
- Transporta telemetría y diagnóstico del vehículo, como datos OBD II y CAN, necesarios para mantenimiento y análisis.
- Transmite señales de eventos como alertas por manipulación, pérdida de alimentación y eventos de aceleración que habilitan alertas y flujos de trabajo.
- Soporta configuración remota y actualizaciones OTA/FOTA mediante canales de control proporcionados por el fabricante.
- Proporciona los campos de identificación y estado que Plaspy utiliza para asociar un dispositivo con una cuenta de cliente y un registro de vehículo.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único punto final compartido y detecta automáticamente el protocolo del rastreador para los dispositivos compatibles, incluido el iTriangle OBD II. En despliegues habituales, el dispositivo se configura para reportar a Plaspy y no es necesario seleccionar manualmente el protocolo dentro de la plataforma Plaspy.

- Plaspy escucha en un solo puerto utilizado por todos los dispositivos compatibles y determina automáticamente el protocolo del rastreador al recibir conexiones.
- Si el iTriangle OBD II está configurado para reportar al punto final de Plaspy, Plaspy identificará el dispositivo por su identificador reportado y procesará la telemetría en consecuencia.
- Generalmente, los usuarios no necesitan elegir un protocolo en Plaspy si el dispositivo apunta correctamente al punto final de Plaspy.
- Una configuración adecuada en el lado del rastreador (dirección del servidor, modo de transporte e intervalos de reporte) asegura la detección automática y la ingestión correcta.
- Revise la documentación del dispositivo y del firmware si un equipo no aparece detectado automáticamente.

## Transporte y contexto de conexión

El iTriangle OBD II soporta transportes IP comunes y canales de configuración remota; las opciones exactas dependen del firmware y del soporte celular regional. Para la integración con Plaspy, los dispositivos pueden apuntar al servidor de Plaspy usando los detalles de conexión compartidos y ya sea UDP o TCP según la configuración del equipo.

- Plaspy server domain is d.plaspy.com and the known public server IP is 54.85.159.138.
- Plaspy uses port 8888 for device connections and all devices in Plaspy use the same port.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el modo de transporte elegido.
- Apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es el método común para dirigir los reportes hacia Plaspy.
- El OBD II también soporta canales de configuración remota como SMS y Bluetooth para aprovisionamiento de fábrica y ajustes en campo cuando aplica.

## Notas sobre compatibilidad del protocolo

- Las diferencias en versiones de firmware pueden alterar el timing de los mensajes, los campos soportados y los diagnósticos disponibles; siempre anote la versión de firmware al validar el comportamiento.
- Las revisiones de hardware o las variantes regionales del OBD II pueden exponer distintos conjuntos de PID OBD II o canales CAN.
- La selección del transporte (UDP versus TCP) afecta las garantías de entrega; elija el transporte compatible con la compilación de firmware específica y el entorno de red.
- Las opciones de configuración del fabricante pueden habilitar o deshabilitar ciertos flujos de telemetría o reducir la frecuencia de reporte para gestión de energía.
- Plaspy maneja automáticamente la detección del protocolo, pero validar que el dispositivo está correctamente configurado hacia el punto final de Plaspy es un paso crítico inicial.
- Para información de compatibilidad más precisa, consulte la documentación de iTriangle para la revisión de firmware del dispositivo en uso.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el rastreador ayuda a asegurar una configuración confiable, facilita la resolución de problemas y permite un comportamiento operativo predecible cuando el dispositivo se utiliza con Plaspy. Tener una visión clara del contexto público del protocolo reduce la fricción en el despliegue y establece expectativas precisas sobre la telemetría disponible.

- Acelera el aprovisionamiento inicial al confirmar la dirección del servidor, el modo de transporte y los intervalos de reporte correctos.
- Ayuda a diagnosticar datos faltantes o telemetría parcial revisando las capacidades del firmware y los flujos habilitados.
- Apoya la planificación a escala de flota al comprender la frecuencia de mensajes, el reporte de eventos y el volumen potencial de datos.
- Orienta las estrategias de actualización de firmware y la configuración en campo para habilitar funciones como OTA/FOTA y diagnóstico remoto.
- Permite a los equipos de operaciones alinear las capacidades del dispositivo con los paneles, alertas e informes de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el iTriangle OBD II con Plaspy ofrece una vía directa para capturar ubicación en tiempo real, diagnósticos OBD II y telemetría basada en eventos para gestión de flotas, operaciones de renta y monitoreo de vehículos. El factor de forma plug and play del dispositivo, sus antenas internas y el acceso a CAN lo hacen práctico para despliegues rápidos, mientras que Plaspy se encarga de la ingestión, el mapeo, las alertas y los informes.

Las configuraciones de conexión compartidas de Plaspy simplifican la integración: apunte el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP según lo soporte el equipo, y Plaspy detectará automáticamente el protocolo del rastreador y comenzará a procesar los datos. Para saber más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y orientación de implementación, consulte la documentación oficial de iTriangle en https://www.itriangle.net/.
