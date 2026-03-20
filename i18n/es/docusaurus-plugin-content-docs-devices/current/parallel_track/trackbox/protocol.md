---
slug: /parallel_track/trackbox/protocol
id: trackbox-protocol
sidebar_label: Protocol
title: Parallel track - Trackbox Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Parallel Track Trackbox y su comunicación con Plaspy para rastreo GPS confiable
keywords:
  - protocolo Parallel Track Trackbox
  - rastreador GPS Trackbox
  - Parallel Track Trackbox en Plaspy
  - protocolo de comunicación Trackbox
  - protocolo de rastreo Trackbox
  - integración de rastreador GPS con Plaspy
  - rastreo de vehículos Trackbox
  - rastreo de activos Trackbox
  - envío de datos Trackbox
  - compatibilidad de firmware Trackbox
---

# Parallel Track - Protocolo Trackbox

Esta página explica el contexto público del protocolo para usar el Parallel Track Trackbox con Plaspy. Se centra en cómo el Trackbox informa posición y estado a un servicio web y en cómo Plaspy interpreta esa comunicación, sin exponer detalles de implementación sensibles.

Plaspy utiliza parámetros de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo del Trackbox puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que las descripciones aquí son generales y buscan ayudar en la configuración y resolución de problemas.

## Resumen del protocolo

El Trackbox envía información de ubicación y estado a un servicio remoto configurado. Esa comunicación se rige por el protocolo de reporte del dispositivo, que define cómo el rastreador se identifica y entrega datos de posición útiles a un servidor como Plaspy.

- Permite que el Trackbox entregue actualizaciones periódicas de ubicación y reportes bajo demanda a un servidor remoto.
- Transporta identidad y telemetría para que Plaspy pueda asociar los mensajes a un dispositivo concreto y mostrar datos de ubicación utilizables.
- Puede emplear métodos de transporte web estándar compatibles con el dispositivo para facilitar la integración con servicios web.
- Permite que Plaspy consuma datos georreferenciados y con marca de tiempo para visualización y reportes históricos.
- Puede coexistir con vías alternativas de reporte, como SMS, cuando el hardware o la configuración lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para recibir datos de muchos modelos de rastreadores y detectar automáticamente el protocolo del dispositivo cuando los paquetes llegan a la plataforma. Esto reduce la necesidad de seleccionar manualmente el protocolo cuando el dispositivo está configurado correctamente para reportar a Plaspy.

- Plaspy ofrece un único endpoint compartido para reportes de dispositivos con el fin de simplificar la configuración.
- Cuando el Trackbox reporta al endpoint de Plaspy, la plataforma compara los datos entrantes con los protocolos soportados y los procesa automáticamente.
- En la mayoría de los casos no necesita seleccionar un protocolo manualmente dentro de Plaspy si el Trackbox está configurado para reportar al endpoint de Plaspy.
- La detección automática depende del formato del mensaje entrante y de los datos de identidad del dispositivo que el Trackbox incluye en sus reportes.
- Si hay problemas de detección, la documentación del proveedor y los detalles de firmware pueden ayudar a resolver una mala configuración en el dispositivo.

## Contexto de transporte y conexión

El Trackbox puede enviar datos por la red celular a una dirección de servidor configurada. Para compatibilidad con Plaspy, los dispositivos pueden apuntar al dominio o a la IP pública de Plaspy y usar el puerto que la plataforma expone para la comunicación de dispositivos.

- Plaspy acepta conexiones de rastreadores en el dominio d.plaspy.com y en la IP 54.85.159.138.
- Todos los dispositivos de Plaspy usan el mismo valor de puerto para reportes, lo que simplifica la configuración entre modelos.
- El Trackbox puede configurarse para usar transporte UDP o TCP para enviar sus reportes, según el soporte del dispositivo y la configuración.
- Los dispositivos deben configurarse para reportar al servidor Plaspy en el puerto compartido para que los datos entrantes se enruten a la plataforma.
- La selección del transporte (UDP vs TCP) puede afectar características de entrega como la fiabilidad y la latencia según las condiciones de la red.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar los campos exactos o la cadencia con la que el Trackbox envía datos; verifique el nivel de firmware al diagnosticar problemas de compatibilidad.
- Diferentes revisiones de hardware o lotes de producción pueden presentar ligeras variaciones en el reporte que afecten el parseo en el servidor.
- Las opciones de configuración del fabricante (por ejemplo intervalo de reporte, selección de transporte o modos de formato de datos) determinan el comportamiento del dispositivo en la red.
- El Trackbox puede soportar tanto reportes por SMS como envíos directos por POST; elija la vía adecuada para su despliegue y confirme que Plaspy soporte esa vía.
- Confirme siempre que la dirección de servidor y el transporte configurados coincidan con la configuración de Plaspy para asegurar la detección automática y la ingestión correcta de datos.
- En caso de duda, consulte la documentación de Parallel Track para notas específicas de firmware antes de cambiar ajustes del dispositivo.

## Por qué es importante comprender el protocolo

Conocer cómo se comunica el Trackbox ayuda a garantizar un rastreo confiable, agilizar la resolución de problemas y mantener una operación más fluida a largo plazo con Plaspy. Entender el contexto de reporte reduce el tiempo de configuración y facilita interpretar el comportamiento del dispositivo.

- Asegura que el dispositivo esté apuntado al endpoint y transporte correctos de Plaspy para que los reportes lleguen de forma fiable.
- Ayuda a identificar desajustes de configuración como transporte incorrecto, dirección de servidor o intervalo de reporte inapropiado.
- Facilita la depuración de reportes intermitentes al distinguir problemas de red de configuraciones del dispositivo o diferencias de firmware.
- Apoya la planificación de necesidades de integración como los intervalos de actualización de mapas y la retención de datos históricos en Plaspy.
- Hace más sencilla la colaboración con el fabricante cuando se requiere aclaración sobre comportamientos específicos de firmware.

## Por qué usar Plaspy con este protocolo

Usar el Trackbox con Plaspy permite a las organizaciones consolidar los reportes de ubicación de este modelo en una única plataforma para visibilidad, monitoreo y supervisión operativa. La detección automática de protocolos y la configuración de conexión compartida de Plaspy reducen la complejidad para que flotas y administradores de activos se concentren en la operación en lugar de en los detalles de integración por dispositivo.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at http://www.paralleltrack.co.uk.
