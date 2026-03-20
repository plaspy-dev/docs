---
slug: /astra_telematics/at240/protocol
id: at240-protocol
sidebar_label: Protocol
title: Astra Telematics - AT240 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el tracker Astra Telematics AT240 con Plaspy para rastreo GPS y comunicación de dispositivos
keywords:
  - Protocolo Astra Telematics AT240
  - Protocolo GPS AT240
  - Compatibilidad AT240 Plaspy
  - Protocolo de rastreo Astra Telematics
  - Protocolo de comunicación AT240
  - Gestión de flotas AT240
  - Integración CANBus AT240
  - Bluetooth Low Energy AT240
  - Protocolo de dispositivo Plaspy
  - Compatibilidad de rastreadores Plaspy
---

# Astra Telematics - Protocolo AT240

Esta página resume el contexto público del protocolo para usar el tracker Astra Telematics AT240 con Plaspy. Se enfoca en cómo el dispositivo se comunica a alto nivel con los servidores de Plaspy y en qué consideraciones de integración debe tener en cuenta al configurar el envío de reportes hacia la plataforma.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo apunta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientaciones generales y no instrucciones específicas por firmware.

## Resumen del protocolo

El AT240 transmite telemetría, posición y estado básico del dispositivo a un servidor remoto usando su enlace celular integrado. El protocolo define cómo el tracker formatea y envía esos mensajes, cómo el servidor identifica el dispositivo y cómo responde el servidor cuando corresponde.

- Permite reportes periódicos y basados en eventos para que la ubicación y la telemetría con sello de tiempo lleguen a Plaspy.
- Proporciona un identificador de dispositivo para que Plaspy asocie los informes entrantes con el registro de activo correcto.
- Transporta información operativa como estado del fix GPS, eventos de movimiento e indicadores de salud del dispositivo en forma de mensajes transmisibles.
- Soporta tanto reportes continuos como modos de ahorro de energía según la configuración del equipo y el comportamiento del firmware.
- Permite configuración remota y envío de comandos cuando el fabricante expone esas capacidades y el transporte lo admite.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones de dispositivos en su endpoint y puerto compartidos y realiza detección automática de protocolo para el tráfico entrante. En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública es 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, el puerto 8888, lo que simplifica la configuración.
- Los dispositivos pueden configurarse para usar UDP o TCP para reportar a Plaspy en el puerto 8888, según el soporte y las preferencias del equipo.
- Cuando el AT240 apunta al endpoint de Plaspy y está reportando activamente, Plaspy detectará automáticamente el protocolo del rastreador.
- El trabajo típico de puesta a punto consiste en asegurar que el APN y la dirección/transporte de reporte estén correctos en el tracker y confirmar que el firmware esté configurado para enviar telemetría.

## Transporte y contexto de conexión

El AT240 soporta transportes celulares comunes y puede configurarse para reportar a Plaspy usando la opción de transporte que mejor se adapte al despliegue. Entender el comportamiento del transporte ayuda a garantizar la entrega confiable de datos GPS y telemática.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para conectarse a Plaspy.
- Plaspy acepta tráfico dirigido a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, la configuración suele limitarse a establecer el host y el transporte correctos en el tracker.
- Elija UDP o TCP en el equipo según la fiabilidad de la red, el soporte del operador y las recomendaciones del fabricante para el firmware.
- Verifique que el APN y los ajustes celulares del dispositivo permitan conexiones salientes al endpoint de Plaspy y que cualquier firewall de red permita el transporte seleccionado.

## Notas de compatibilidad del protocolo

- Las versiones de firmware y los conjuntos de funciones pueden cambiar la frecuencia de reporte, los eventos emitidos y los comandos de configuración compatibles.
- Revisiones de hardware u opciones adicionales como CANBus o BLE pueden afectar los campos de telemetría disponibles y los tipos de eventos.
- La elección del transporte (TCP vs UDP) puede influir en las garantías de entrega y en cómo el dispositivo reconoce comandos remotos.
- Las opciones de fabricante para modos de suspensión, buffer interno de memoria y los intervalos de reporte por movimiento impactan en cuán en tiempo real llega la información a Plaspy.
- Valide la compatibilidad y los ajustes recomendados consultando la documentación de Astra Telematics cuando planifique despliegues a gran escala.
- Cuando sea posible, pruebe un número reducido de unidades en su entorno de red objetivo para confirmar el comportamiento antes de un despliegue amplio.

## Por qué es importante comprender el protocolo

Tener claro cómo se comunica el AT240 facilita la configuración, reduce el tiempo de resolución de problemas y mejora la confiabilidad a largo plazo del dispositivo dentro de Plaspy.

- Asegura ajustes correctos de host y transporte para que los datos lleguen a Plaspy sin interrupciones.
- Ayuda a interpretar el comportamiento del equipo durante el alta, como reportes retrasados, cargas en buffer o telemetría faltante.
- Orienta sobre la selección de transporte, los intervalos de reporte y la configuración de ahorro de energía para adecuarse a las necesidades operativas.
- Permite una comunicación más eficaz con el soporte de Astra Telematics cuando diferencias de firmware o funciones afecten la integración.
- Facilita la planificación de actualizaciones de firmware y la validación de cambios que puedan modificar los campos reportados o el comportamiento de eventos.

## Por qué usar Plaspy con este protocolo

Usar el Astra Telematics AT240 con Plaspy ofrece una forma práctica de centralizar telemetría GPS, CANBus y datos básicos relacionados con BLE en una sola plataforma para monitoreo y operaciones de flota. La detección automática de protocolo de Plaspy y los ajustes de conexión compartidos reducen la carga de configuración inicial para que los dispositivos comiencen a reportar con menos pasos manuales.

Si desea saber más sobre Plaspy y cómo maneja el reporte de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guía de implementación consulte directamente a Astra Telematics en https://astratelematics.com/ .
