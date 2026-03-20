---
slug: /reachfar/rf_v30/protocol
id: rf_v30-protocol
sidebar_label: Protocol
title: Reachfar - RF-V30 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Reachfar RF V30 para compatibilidad con Plaspy
keywords:
  - protocolo reachfar rf v30
  - protocolo gps reachfar rf v30
  - comunicación reachfar rf v30
  - protocolo de rastreo reachfar rf v30
  - compatibilidad tracker reachfar plaspy
  - rastreador gps rf v30
  - protocolo de dispositivo plaspy
  - protocolo para rastreadores de mascotas
  - gprs tcp ip rastreador
  - compatibilidad rastreador gps
---

# Reachfar - Protocolo RF-V30

Esta página ofrece una visión general pública del protocolo para usar el rastreador Reachfar RF-V30 con la plataforma Plaspy. Se centra en el contexto de comunicación observable y en los ajustes de conexión relevantes al integrar el RF-V30 para seguimiento en tiempo real, alertas de geocerca e historial de rutas dentro de Plaspy. El contenido pretende ayudar a propietarios e integradores a entender cómo se comunica el dispositivo con Plaspy sin revelar detalles privados de implementación.

El RF-V30 es un rastreador GPS compacto, compatible con Plaspy, diseñado para la protección de mascotas y el seguimiento en tiempo real confiable. Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Use esta página como guía sobre el contexto de conexión y consideraciones de compatibilidad, y consulte la documentación de Reachfar para comandos específicos de firmware y actualizaciones.

## Resumen del protocolo

El RF-V30 reporta ubicación y telemetría mediante datos celulares usando GPRS y opciones estándar de transporte TCP/IP que soporta el dispositivo. En la práctica, el rastreador envía posiciones, estado de batería y eventos a un endpoint de Plaspy para que la plataforma pueda ubicar en el mapa, generar alertas y almacenar el historial de rutas. Esta sección explica el papel general del protocolo de comunicación en ese flujo.

- Permite al dispositivo transmitir posiciones GNSS y asistidas por WiFi a Plaspy para visualización en tiempo real y almacenamiento histórico.
- Transporta telemetría como estado de batería, eventos de geocerca y alertas de movimiento para que Plaspy procese las notificaciones.
- Proporciona la capa de direccionamiento y transporte que apunta el equipo al endpoint público de Plaspy para ingestión.
- Permite a Plaspy correlacionar la identidad del dispositivo con los datos reportados, de modo que las posiciones se asignen a la cuenta y al registro de dispositivo correctos.
- Soporta modos de reporte continuos y periódicos para equilibrar la frecuencia de actualizaciones y la duración de la batería.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartidos para los informes entrantes y reconoce automáticamente el protocolo del rastreador según lo que el dispositivo envía a ese endpoint. En la mayoría de los casos, el propietario o integrador no necesita seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar correctamente al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP pública del servidor para reportes de dispositivos es 54.85.159.138.
- El puerto que usa Plaspy para conexiones de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy en el puerto compartido.
- Asegúrese de que el rastreador esté configurado para reportar a d.plaspy.com o a 54.85.159.138 y que la APN y la configuración de la SIM permitan datos GPRS salientes.
- Si un dispositivo apunta correctamente al endpoint de Plaspy y utiliza un transporte soportado, normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

## Transporte y contexto de conexión

Los ajustes de conexión forman parte del contexto público de integración. El RF-V30 puede usar GPRS sobre TCP/IP para reportes en vivo, y Plaspy acepta informes en un único puerto común independientemente del tipo de dispositivo. Los puntos siguientes resumen el contexto de transporte y direccionamiento que debe configurar en el dispositivo o mediante las herramientas del fabricante.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de la red.
- Apunte el rastreador a d.plaspy.com o directamente a la IP del servidor de Plaspy 54.85.159.138 como endpoint de reporte.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 con el puerto 8888 usado para reportes de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y centraliza la ingestión.
- Verifique la configuración de APN, el cupo de datos de la SIM y la cobertura de red para asegurar que el RF-V30 pueda establecer el transporte elegido hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- La revisión de firmware puede afectar el contenido de los mensajes y el comportamiento de reporte; consulte las notas de la versión de Reachfar para cambios específicos de firmware.
- Revisiones de hardware o variantes regionales del RF-V30 pueden incorporar módulos GNSS o de radio distintos que alteren el rendimiento de posicionamiento.
- La elección del transporte (UDP vs TCP) es una configuración del dispositivo; seleccione el modo que soporte su firmware y que sea adecuado para su entorno de red.
- Las herramientas de aprovisionamiento o las configuraciones por defecto del fabricante pueden cambiar el formato o la frecuencia de los reportes; confirme los valores predeterminados del dispositivo antes de un despliegue masivo.
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para garantizar la ingestión por parte de Plaspy.
- Pruebe una unidad antes de un despliegue amplio para validar que Plaspy reciba la telemetría y las actualizaciones de ubicación esperadas.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación y del contexto de conexión del RF-V30 facilita la configuración, la resolución de problemas y el mantenimiento de un seguimiento confiable de mascotas y pequeños activos en Plaspy. Saber cómo apunta el dispositivo a Plaspy y qué verificar cuando los reportes no aparecen reduce el tiempo de inactividad y acelera la recuperación.

- Confirma que el reporte del dispositivo está dirigido al endpoint y puerto correctos de Plaspy para evitar desvíos.
- Ayuda a diagnosticar problemas comunes como APN mal configurada, límites de datos de la SIM o desajuste de transporte entre UDP y TCP.
- Informa decisiones sobre el intervalo de reporte y modos de espera para balancear frecuencia de actualizaciones y vida de batería.
- Aclara cómo los reportes de geocerca y eventos se traducen en alertas dentro de Plaspy para que las notificaciones funcionen como se espera.
- Apoya la planificación ordenada de actualizaciones de firmware al reconocer que el comportamiento puede cambiar entre versiones.

## Por qué usar Plaspy con este protocolo

Usar el RF-V30 con Plaspy brinda una solución enfocada en la visibilidad de mascotas, alertas basadas en ubicación e historial de rutas. La combinación de GPS y posicionamiento asistido por WiFi contribuye a mejorar la cobertura tanto en espacios abiertos como en entornos urbanos, mientras que el transporte GPRS TCP/IP entrega actualizaciones en vivo al mapa y al sistema de notificaciones de Plaspy. Para propietarios y despliegues a pequeña escala, esta configuración ofrece un camino accesible hacia el monitoreo continuo y las herramientas de recuperación.

Si desea saber más sobre Plaspy y cómo se integra con dispositivos como el Reachfar RF-V30, visite https://www.plaspy.com. Verifique los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y la documentación del fabricante en https://www.reachfargps.com/ ya que el soporte de protocolo y los detalles de implementación pueden cambiar con el tiempo.
