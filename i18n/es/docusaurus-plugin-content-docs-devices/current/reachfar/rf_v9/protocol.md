---
slug: /reachfar/rf_v9/protocol
id: rf_v9-protocol
sidebar_label: Protocol
title: Reachfar - RF-V9 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del tracker Reachfar RF-V9 y cómo se comunica con Plaspy para seguimiento en tiempo real
keywords:
  - Protocolo Reachfar RF V9
  - Protocolo GPS Reachfar RF V9
  - Protocolo de rastreo RF V9
  - Compatibilidad RF V9 con Plaspy
  - Protocolo tracker Reachfar
  - Protocolo de rastreador GPS Plaspy
  - Rastreo de vehículos RF V9
  - Rastreo de activos RF V9
  - Rastreo en tiempo real RF V9
  - Integración de tracker Plaspy
---

# Reachfar - Protocolo RF-V9

Esta página resume el contexto público del protocolo para usar el tracker Reachfar RF-V9 con Plaspy. Explica de forma general cómo el dispositivo se comunica con los servidores de Plaspy, qué función tiene el protocolo de reporte para entregar posición y telemetría, y qué debe verificarse al integrar hardware RF-V9 en un flujo de monitoreo con Plaspy.

Plaspy utiliza ajustes compartidos de conexión para los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y los tipos de mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en detalles públicos seguros sobre conectividad y compatibilidad en lugar de en internals de firmware.

## Descripción general del protocolo

El protocolo de reporte del RF-V9 es el conjunto de mensajes y comportamientos que el tracker usa para identificarse y enviar datos de GPS, estado, alarmas y telemetría a un servidor. En la práctica, el protocolo permite al dispositivo establecer conectividad a nivel de transporte, enviar posiciones, reportar eventos como vibración o batería baja y soportar funciones de la plataforma como reproducción de trazas y alertas de geocercas.

- Permite que el RF-V9 envíe periódicamente ubicaciones y estados que Plaspy puede mostrar en mapas en vivo
- Comunica eventos de alarma y sensores para que las notificaciones y alertas de la plataforma se disparen en tiempo real
- Incluye información identificadora que permite al servidor asociar los mensajes entrantes con el registro de dispositivo correcto
- Transporta telemetría esencial como estado de batería e indicadores de movimiento para supervisión operativa
- Facilita la interoperabilidad con plataformas de monitoreo cuando el dispositivo está configurado para reportar al endpoint de la plataforma

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y usa ese tráfico entrante para determinar automáticamente el protocolo del tracker. Para la mayoría de usuarios, si el RF-V9 está configurado para reportar al endpoint de Plaspy, no se requiere seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy escucha datos entrantes de dispositivos en el host compartido d.plaspy.com y en la IP de servidor 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de servidor, lo que simplifica la configuración del equipo
- Plaspy inspecciona las conexiones entrantes de dispositivos correctamente configurados y las mapea automáticamente a un manejador de protocolo compatible
- La configuración típica no requiere seleccionar un protocolo en la interfaz de Plaspy cuando el tracker reporta al endpoint de la plataforma
- Si un dispositivo no es detectado, verifique la configuración de reporte del equipo, la elección de transporte y la documentación del fabricante

## Contexto de transporte y conexión

El contexto de transporte abarca cómo el RF-V9 envía datos a Plaspy y qué ajustes de red deben configurarse en el dispositivo. El RF-V9 puede configurarse para usar UDP o TCP según el soporte del equipo y la configuración aplicada durante el despliegue.

- El dispositivo RF-V9 puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones de instalación
- Los dispositivos pueden apuntar al nombre de host de Plaspy d.plaspy.com o a la IP de servidor 54.85.159.138 para el reporte
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para estandarizar el tráfico entrante
- Elija UDP o TCP según la capacidad del dispositivo y las consideraciones de confiabilidad de la red en su entorno
- Asegúrese de que la conectividad de datos GSM y la configuración del APN en el RF-V9 sean correctas para que el dispositivo pueda alcanzar el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo entre mensajes, las alarmas disponibles y campos opcionales; confirme el comportamiento del firmware antes de un despliegue a gran escala
- Las revisiones de hardware pueden introducir pequeñas variaciones en las funciones soportadas o en el comportamiento de sensores que afectan el contenido de los reportes
- Las herramientas y menús de configuración del fabricante pueden usar nombres o valores por defecto diferentes para servidor, puerto y transporte
- Seleccionar UDP frente a TCP en el dispositivo puede afectar las características de entrega y la forma en que la red maneja los mensajes
- Verifique siempre que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 y que esté usando el puerto 8888
- Revise la configuración de identidad del dispositivo para que Plaspy pueda asociar los reportes entrantes con el registro de activo correspondiente
- En caso de dudas, valide el comportamiento específico contra la documentación y las notas de la versión de Reachfar para el RF-V9

## Por qué es importante comprender el protocolo

Conocer los fundamentos de cómo se comunica el RF-V9 ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y garantizar una operación predecible a largo plazo en Plaspy. Tener claridad sobre el transporte y el comportamiento del protocolo reduce el tiempo de inactividad y facilita la resolución cuando los dispositivos no aparecen en la plataforma.

- Ayuda a confirmar la configuración correcta del dispositivo para reportar a d.plaspy.com y 54.85.159.138 en el puerto 8888
- Facilita el diagnóstico de problemas comunes como APN incorrecto, selección errónea de transporte o identidad de dispositivo desajustada
- Sirve para planificar actualizaciones de firmware o cambios de hardware que puedan alterar mensajes o tiempos de reporte
- Mejora la coordinación entre técnicos de campo y administradores de plataforma durante la instalación y la recuperación
- Garantiza que las alarmas, la reproducción de trazas y la telemetría estén disponibles y sean interpretadas correctamente por Plaspy

## Por qué usar Plaspy con este protocolo

Usar el RF-V9 con Plaspy brinda a organizaciones y usuarios particulares una vía directa para el rastreo en tiempo real, monitoreo de alarmas y supervisión básica de flotas. La forma compacta del RF-V9, sus alarmas por sensor y funciones de voz, combinadas con el endpoint unificado de ingestión de Plaspy, lo convierten en una opción práctica para operaciones que requieren visibilidad sin una integración compleja.

Para saber más sobre cómo Plaspy maneja las integraciones de dispositivos y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más actuales específicos del protocolo del dispositivo, notas de firmware e instrucciones del fabricante para el RF-V9, confirme la información con el fabricante en https://www.reachfargps.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
