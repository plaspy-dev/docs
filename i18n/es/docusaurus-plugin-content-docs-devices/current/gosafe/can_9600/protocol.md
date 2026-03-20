---
slug: /gosafe/can_9600/protocol
id: can_9600-protocol
sidebar_label: Protocol
title: Gosafe - CAN-9600 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Gosafe CAN-9600 y cómo comunica sus datos con la plataforma Plaspy
keywords:
  - Protocolo Gosafe CAN-9600
  - Protocolo GPS Gosafe CAN 9600
  - Datos FMS CAN 9600
  - Protocolo rastreador GPS Gosafe
  - Integración CAN 9600 RS232
  - Compatibilidad Gosafe J1939 J1708
  - Comunicación de dispositivos Plaspy
  - Protocolo seguimiento GPS Plaspy
  - Datos CAN bus para rastreo de vehículos
  - Compatibilidad CAN-9600 con seguimiento de flotas
---

# Gosafe - Protocolo CAN-9600

Esta página describe el contexto público del protocolo para el uso del rastreador Gosafe CAN-9600 con la plataforma de flotas Plaspy. Se centra en cómo el CAN-9600 lee datos FMS del bus CAN del vehículo y los presenta vía una interfaz serial para que un dispositivo GPS los consuma y los reenvíe a Plaspy. El objetivo es explicar el papel de comunicación del CAN-9600 en términos seguros y no sensibles para facilitar la integración y la solución de problemas.

Plaspy emplea una configuración de conexión compartida para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos reportan correctamente a la plataforma. Los dispositivos configurados para reportar a Plaspy deben apuntar al endpoint d.plaspy.com o a la dirección IP 54.85.159.138 en el puerto 8888. El comportamiento del CAN-9600 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre debe validar los detalles específicos del dispositivo con la documentación del fabricante.

## Resumen del protocolo

El CAN-9600 está diseñado para capturar información FMS de los buses CAN de vehículos y exponer esos datos en una salida serial RS232 para que un rastreador GPS compatible pueda enviarlos a un servidor. En una implementación con Plaspy, el rastreador conectado al CAN-9600 retransmite los campos FMS a Plaspy, donde los datos se procesan para visualización, generación de reportes y alertas.

- El protocolo del rastreador define cómo se presentan los valores FMS al dispositivo GPS conectado y cómo se etiquetan para la ingestión por el servidor.
- El CAN-9600 lee formatos CAN estándar, incluyendo SAE J1939 y SAE J1708, y expone los campos relevantes en la salida serial.
- La salida serial RS232 permite emparejar el CAN-9600 con una variedad de rastreadores GPS que aceptan entrada telemática externa.
- El envío de datos hacia Plaspy se realiza por el rastreador GPS que recibe la información serial del CAN-9600 y la reenvía al endpoint de Plaspy.
- El rol del protocolo es principalmente hacer que los datos del bus del vehículo sean utilizables por el dispositivo de rastreo y por la plataforma Plaspy aguas abajo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes de dispositivos en un único endpoint y puerto compartido y usa detección automática para identificar el protocolo del rastreador cuando los equipos envían datos. La mayoría de los usuarios no necesita seleccionar manualmente un protocolo dentro de Plaspy si su dispositivo está configurado para reportar correctamente al endpoint de Plaspy.

- Los dispositivos deben estar apuntando a d.plaspy.com o a la IP 54.85.159.138.
- Plaspy escucha en el puerto 8888 y soporta dispositivos que usan TCP o UDP para reportar en ese puerto.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para las conexiones entrantes, lo que simplifica la configuración de los equipos.
- Cuando un rastreador configurado correctamente envía datos al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y comienza a procesar los campos entrantes.
- La identificación correcta depende de que el rastreador envíe telemetría y campos de identificación reconocibles al endpoint compartido.

## Transporte y contexto de conexión

Las opciones de conexión, como UDP frente a TCP, y el objetivo DNS o IP del dispositivo afectan la forma en que el rastreador reenvía los datos del CAN-9600 hacia Plaspy. El CAN-9600 proporciona salida serial a un dispositivo de rastreo, y ese dispositivo es el encargado del transporte de red hacia Plaspy.

- El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados con el fin de ofrecer un objetivo de red consistente.
- El CAN-9600 expone datos FMS en RS232, que deben conectarse a un rastreador compatible o a un adaptador serial.
- Verifique la configuración de transporte de red del rastreador (UDP o TCP) y el host de reporte para asegurar que los datos lleguen a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el CAN-9600 o en los rastreadores GPS conectados pueden cambiar los campos disponibles y el formato serial.
- Las revisiones de hardware y las distintas variantes del fabricante pueden provocar pequeñas variaciones en qué campos FMS se exponen por RS232.
- La integración depende del rastreador que lea la salida RS232; la compatibilidad está influenciada por el firmware y la configuración de dicho rastreador.
- La selección del transporte es importante: asegúrese de que el rastreador conectado esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando el transporte esperado.
- Confirme siempre el cableado serial, la velocidad de baudios y los parámetros del puerto serial según la documentación oficial de Gosafe para el CAN-9600.
- Valide la compatibilidad con pruebas en vivo y revise las notas de versión del fabricante sobre cambios de firmware que puedan afectar el comportamiento del protocolo.

## Por qué es importante entender el protocolo

Comprender de forma práctica el comportamiento de comunicación del CAN-9600 ayuda a garantizar una configuración precisa, una recolección de datos confiable y una resolución de problemas más eficiente al integrarlo con Plaspy. Saber qué campos FMS están disponibles y cómo se presentan en la salida serial reduce el tiempo de integración y mejora la calidad de los datos en la plataforma Plaspy.

- Ayuda a confirmar que el rastreador conectado lee los valores FMS esperados desde la salida RS232 del CAN-9600.
- Agiliza la resolución de problemas al acotar los fallos a transporte, conexión serial o diferencias de firmware.
- Permite mapear correctamente las métricas del vehículo en los paneles y reportes de Plaspy.
- Mejora la confiabilidad a largo plazo al señalar cuándo actualizaciones de firmware o cambios de hardware requieren ajustes de configuración.
- Facilita despliegues escalables al reducir la configuración por dispositivo cuando se confía en la detección automática de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Gosafe CAN-9600 junto con Plaspy permite a las flotas capturar datos FMS del vehículo e incorporar la telemetría operativa en una única plataforma de monitoreo. Para operadores de camiones y autobuses, integrar métricas del bus CAN como datos del motor, consumo de combustible y otros indicadores de salud del vehículo en Plaspy aporta visibilidad accionable para planificación de mantenimiento, coaching de conductores y flujos de trabajo de cumplimiento.

Si desea saber más sobre cómo Plaspy maneja conexiones de dispositivos y telemetría, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información de protocolo específica más reciente con el fabricante en https://gosafesystem.com/.
