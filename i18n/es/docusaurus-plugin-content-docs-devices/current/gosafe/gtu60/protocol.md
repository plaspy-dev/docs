---
slug: /gosafe/gtu60/protocol
id: gtu60-protocol
sidebar_label: Protocol
title: Gosafe - GTU60 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar Gosafe GTU60 con Plaspy en rastreo y telemetría
keywords:
  - protocolo Gosafe GTU60
  - GPS Gosafe GTU60
  - compatibilidad GTU60 Plaspy
  - protocolo de comunicación GTU60
  - protocolo de rastreo GTU60
  - rastreador Gosafe para Plaspy
  - rastreo de flotas GTU60
  - recuperación de vehículos robados GTU60
  - rastreador LTE GTU60
  - telemetría GNSS GTU60
---

# Gosafe - Protocolo GTU60

Esta página presenta el contexto público del protocolo para usar el rastreador Gosafe GTU60 con Plaspy. Se centra en cómo se comunica el dispositivo con Plaspy en términos generales, qué esperar del comportamiento de reporte y qué parámetros de conexión emplea Plaspy para la ingesta. El objetivo es ayudar a integradores y gestores de flota a comprender cómo el GTU60 intercambia posición y telemetría con un servidor Plaspy sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo apunta al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información que sigue sirve como orientación pública y no como un conjunto de instrucciones específicas de firmware.

## Descripción general del protocolo

El GTU60 comunica la posición del vehículo, eventos de movimiento y el estado de entradas/salidas (I/O) a un servidor central usando su módem celular y receptor GNSS. El equipo reporta ubicación y telemetría para que Plaspy pueda mostrar seguimiento en tiempo real, alarmas y registros históricos. El protocolo de comunicación define el formato y las reglas a nivel de dispositivo para transferir esos datos del rastreador a Plaspy.

- Permite entregar posición GNSS, eventos de acelerómetro y telemetría simple de I/O a Plaspy para mapas y alertas
- Permite que el rastreador se identifique e incluya identificadores de dispositivo necesarios para asociar registros en Plaspy
- Soporta actualizaciones periódicas de posición y mensajes basados en eventos como cambios de ignición o eventos de choque
- Proporciona una capa de reporte independiente del transporte que puede funcionar sobre TCP o UDP para mayor flexibilidad de conectividad
- Hace posible que Plaspy interprete los datos entrantes en ubicación en vivo, alertas de geocercas, historial de viajes y paneles de telemetría

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto comunes y aplica detección interna para emparejar el flujo entrante con un tipo de rastreador conocido. Cuando el GTU60 está configurado para reportar a Plaspy, la plataforma escucha el dispositivo y asocia automáticamente los reportes con el parser y el registro de dispositivo correspondientes. Esto significa que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo en Plaspy cuando el equipo está correctamente apuntado al endpoint de Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP for device reporting is 54.85.159.138
- Plaspy uses port 8888 for device reporting and ingestion
- Devices may be configured to use either UDP or TCP when reporting to Plaspy on port 8888
- All devices in Plaspy use the same port and the platform automatically detects the tracker protocol
- In typical setups the device is configured to report to the Plaspy endpoint and no manual protocol selection is required inside Plaspy

## Contexto de transporte y conexión

El GTU60 puede enviar sus reportes a través de la red celular usando TCP o UDP, según su configuración y las necesidades de fiabilidad o latencia. Apuntar el dispositivo al endpoint de Plaspy es un paso clave para una integración exitosa. Esta sección describe el contexto público de conexión que debe esperar al integrar el GTU60 con Plaspy.

- Devices may point to the domain d.plaspy.com or to the numeric server address 54.85.159.138
- The reporting port used by Plaspy is 8888 and is shared across all supported devices
- The GTU60 supports reporting over TCP and may also be configured to use UDP where supported by the firmware
- Choose the transport based on device configuration and network requirements; Plaspy accepts both transports on the same port
- Keep the device configured to the Plaspy endpoint to allow automatic protocol detection and ingestion

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades GTU60 pueden cambiar la temporización de mensajes, los campos disponibles y el comportamiento opcional de telemetría
- Revisiones de hardware o SKUs por región pueden alterar las bandas celulares disponibles o la configuración de transporte por defecto
- Los valores por defecto de configuración del fabricante pueden usar TCP o UDP e incluir respaldo por SMS para redundancia según el despliegue
- La selección de transporte entre TCP y UDP puede afectar las garantías de entrega y debe ajustarse a sus necesidades operativas
- Valide que el dispositivo esté enviando reportes a d.plaspy.com o 54.85.159.138 en el puerto 8888 para permitir la ingesta en Plaspy
- Confirme cualquier integración opcional de sensores o accesorios de terceros con la documentación del fabricante para el cableado y comportamiento de reporte exacto
- En caso de duda, consulte los recursos más recientes del fabricante para instrucciones específicas por firmware

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GTU60 y el contexto de transporte ayuda a garantizar una incorporación confiable de dispositivos, telemetría precisa y una resolución eficiente de problemas cuando los equipos no reportan como se espera. Tener una visión clara del papel del protocolo reduce la incertidumbre durante la instalación y permite alinear la configuración del dispositivo con las expectativas de ingesta de Plaspy.

- Garantiza que los dispositivos apunten al endpoint y puerto correctos de Plaspy para la detección automática
- Ayuda a diagnosticar problemas de conectividad relacionados con la elección de transporte TCP versus UDP
- Aclara qué telemetría y eventos puede enviar el rastreador para configurar correctamente los paneles y alertas de Plaspy
- Facilita la planificación de actualizaciones de firmware y despliegues de hardware anticipando cambios en el comportamiento del protocolo
- Soporta el enrutamiento confiable de alarmas para flujos de trabajo de antirobo y respuesta a choques cuando el mapeo de eventos es conocido

## Por qué usar Plaspy con este protocolo

Usar el GTU60 con Plaspy ofrece una combinación práctica para organizaciones que necesitan rastreo vehicular económico pero capaz. El GTU60 aporta posición GNSS, datos de acelerómetro con detección de choque, detección de ignición y estado simple de I/O, y Plaspy convierte esas entradas en mapas en vivo, alertas, reportes de viajes y paneles operativos que apoyan la gestión de flotas, supervisión de alquileres y procesos de recuperación ante robos.

Plaspy acepta reportes GTU60 en un endpoint y puerto de ingesta compartidos, y la plataforma detecta automáticamente el protocolo del rastreador una vez que el dispositivo está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando TCP o UDP. Learn more about Plaspy and how it can support your fleet on https://www.plaspy.com. Please note that protocol support and firmware behavior can change over time and you should verify the latest device specific protocol and implementation details with the manufacturer at https://gosafesystem.com/.
