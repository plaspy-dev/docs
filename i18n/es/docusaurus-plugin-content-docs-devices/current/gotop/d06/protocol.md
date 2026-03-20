---
slug: /gotop/d06/protocol
id: d06-protocol
sidebar_label: Protocol
title: GOTOP - D06 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP D06 y cómo se comunica con Plaspy para seguimiento confiable en tiempo real
keywords:
  - protocolo GOTOP D06
  - protocolo GPS GOTOP D06
  - protocolo GOTOP D06 para Plaspy
  - protocolo de comunicación GOTOP D06
  - protocolo de rastreo GOTOP D06
  - rastreador GOTOP D06 4G
  - rastreador GPS GOTOP D06
  - protocolo de dispositivo Plaspy
  - protocolo de seguimiento de vehículos
  - rastreador para gestión de flotas
---

# GOTOP - Protocolo D06

Esta página ofrece contexto público sobre el protocolo usado por el rastreador GPS GOTOP D06 cuando se integra con Plaspy. Le explica a grandes rasgos cómo se comunica el equipo, qué papel juega el protocolo de reporte en la entrega de datos y cómo Plaspy recibe y utiliza la información de ubicación y estado del equipo. El D06 es un rastreador con capacidad 4G y retroceso a 2G, almacenamiento interno para reportes fuera de línea, soporte opcional de micrófono, múltiples alarmas, botón SOS, control remoto de relé, protección IP65 y soporte para configuración de dos IPs de servidor.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Plaspy escucha en un único puerto para conexiones de dispositivos y detectará el protocolo automáticamente cuando el D06 esté configurado para reportar al endpoint de Plaspy. Para comandos específicos del equipo, comportamiento del firmware y notas de implementación más recientes, consulte la documentación del fabricante.

## Resumen del protocolo

El protocolo de rastreo D06 define cómo el dispositivo codifica y envía actualizaciones de posición, reportes de estado y alarmas a un endpoint remoto. En la práctica, este protocolo permite al rastreador identificarse ante el servidor, entregar datos GPS y telemetría útiles, y solicitar o recibir comandos remotos cuando están soportados. Plaspy recibe esos mensajes y los mapea al modelo de datos de la plataforma para que la ubicación, el movimiento y los eventos de alarma estén disponibles para monitoreo e informes.

- Permite al rastreador enviar información de posición y tiempo a un servidor remoto para seguimiento en tiempo real y histórico.
- Permite que el dispositivo reporte eventos de estado como alarmas, variaciones de energía y entradas de sensores relevantes para la gestión de flotas.
- Proporciona un mecanismo para que el rastreador se identifique y Plaspy pueda asociar los datos con el registro de dispositivo correcto.
- Soporta almacenamiento offline y posterior subida de datos cuando se recupera la conectividad, mejorando la fiabilidad en redes intermitentes.
- Transmite telemetría opcional como nivel de batería, intensidad de señal u otros sensores según la configuración del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para recibir reportes de muchos modelos de rastreadores sin requerir que el usuario seleccione el protocolo manualmente. Cuando un equipo está configurado para reportar al endpoint de Plaspy, la plataforma inspecciona las conexiones entrantes y detecta automáticamente el protocolo del rastreador para que los datos se puedan parsear y procesar.

- Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta al endpoint de Plaspy.
- Usted normalmente no necesita elegir un protocolo dentro de Plaspy si el equipo está correctamente apuntado al endpoint de Plaspy.
- Plaspy soporta comportamientos comunes de los rastreadores, como reportes periódicos de posición, mensajes de alarma y retransmisión de datos tras periodos offline.
- La configuración correcta del dispositivo en el lado del rastreador es el requisito principal para una detección automática y una ingesta de datos exitosa.
- Si el dispositivo permite configurar dos IPs de servidor, asegúrese de que una de las entradas apunte a Plaspy para que los reportes lleguen a la plataforma.

## Transporte y contexto de conexión

El GOTOP D06 puede configurarse para enviar datos usando transportes celulares comunes y soporta direccionamiento flexible a servidores. Para la integración con Plaspy, utilice las siguientes configuraciones compartidas de conexión para que el D06 entregue reportes a la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para direccionamiento directo.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y el tipo de transporte elegido.
- Configure el D06 para reportar a d.plaspy.com o a 54.85.159.138 y confirme que el tipo de transporte coincida con la configuración del dispositivo.
- Usar la opción de dos IPs de servidor del rastreador puede proporcionar redundancia, pero asegúrese de que uno de los servidores apunte a Plaspy para la recolección de datos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el rastreador formatea los reportes o qué campos incluye. Valide contra las notas de la versión de firmware vigente.
- Las versiones de hardware o los diferentes proveedores de módulos pueden introducir variaciones menores en el comportamiento, incluso bajo el mismo nombre de modelo.
- La selección del transporte es importante: elija UDP o TCP de acuerdo con la configuración del dispositivo y las condiciones de red.
- Características del fabricante como entrada de micrófono, control de relé o alarmas adicionales pueden requerir una configuración separada y no son universales al protocolo.
- La configuración de dos IPs de servidor en el rastreador debe incluir a Plaspy como uno de los endpoints para asegurar la entrega fiable.
- Confirme siempre los detalles de compatibilidad con la documentación del fabricante para el modelo y firmware exactos que esté utilizando.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación entre el D06 y Plaspy facilita la configuración inicial, la resolución de problemas y el mantenimiento de un flujo de datos confiable para operaciones de flota. Saber cómo reporta el dispositivo y qué información incluye reduce el tiempo de puesta en marcha y ayuda a interpretar el comportamiento del equipo cuando ocurren eventos o alarmas.

- Asegura que el rastreador esté apuntando al servidor y transporte correctos para que Plaspy reciba los datos.
- Ayuda a diagnosticar problemas de conectividad al distinguir entre fallos de red, transporte o configuración del equipo.
- Facilita el mapeo de la telemetría específica del dispositivo a los campos de la plataforma para monitoreo y alertas precisos.
- Permite planificar el comportamiento de almacenamiento offline y la recuperación esperada de datos tras pérdida de señal.
- Aumenta la confianza al desplegar múltiples unidades con distintas revisiones de firmware o hardware.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP D06 con Plaspy ofrece una forma práctica de centralizar datos de ubicación, alarmas y estado operativo de vehículos y activos. Plaspy recibe los reportes del rastreador y los presenta dentro de una plataforma unificada que soporta mapeo, manejo de eventos y supervisión de flota sin que usted deba gestionar el parseo del protocolo o una configuración de servidor compleja.

Si desea conocer más sobre Plaspy y cómo la plataforma trabaja con rastreadores GPS como el GOTOP D06, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware e instrucciones de implementación más actuales, consulte la documentación oficial del fabricante GOTOP en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
