---
slug: /nvs/signal_s_2117/protocol
id: signal_s_2117-protocol
sidebar_label: Protocol
title: NVS - SIGNAL S-2117 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador NVS SIGNAL S-2117 y su integración con Plaspy
keywords:
  - protocolo NVS SIGNAL S-2117
  - protocolo GPS NVS SIGNAL S-2117
  - compatibilidad SIGNAL S-2117 Plaspy
  - protocolo de comunicación de rastreadores GPS
  - protocolo de rastreo vehicular NVS
  - integración de dispositivos Plaspy
  - resumen del protocolo de rastreadores GNSS
  - protocolo de rastreo SIGNAL S-2117
  - monitoreo de flotas con rastreador NVS
  - integración de protocolo abierto
---

# NVS - SIGNAL S-2117 - Protocolo

Esta página resume el contexto público del protocolo para usar el rastreador NVS SIGNAL S-2117 con Plaspy. Explica cómo el intercambio de información abierto del dispositivo facilita su adaptación a plataformas de terceros y qué esperar al conectar la unidad a Plaspy para el envío de posiciones, eventos de alarma y telemetría básica. La descripción se basa en las características del producto SIGNAL S-2117, incluyendo sus capacidades GNSS y su enfoque de protocolo abierto.

Plaspy acepta conexiones en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar a Plaspy. Para Plaspy esto implica que los dispositivos pueden apuntarse a d.plaspy.com o a 54.85.159.138 en el puerto 8888. El SIGNAL S-2117 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración y soporte del dispositivo. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene verificar detalles específicos del dispositivo cuando sea necesario.

## Resumen del protocolo

El SIGNAL S-2117 utiliza un enfoque de intercambio de información abierto que le permite integrarse con plataformas de terceros como Plaspy. En la práctica, el protocolo del dispositivo define cómo el rastreador se identifica, cómo envía posiciones GNSS y estados, y cómo se reportan alarmas o eventos de monitoreo para que Plaspy pueda ingerir y presentar los datos.

- Proporciona identificación y reportes que permiten a las plataformas de servidor asociar mensajes con un dispositivo y una flota específicos
- Transmite datos de posicionamiento GNSS desde receptores GPS GLONASS GALILEO y SBAS para ubicación y sellado temporal
- Incluye eventos básicos de monitoreo y alarma que soportan la seguridad del vehículo y flujos operativos
- Usa un modelo de intercambio abierto para que los integradores puedan reenviar el tráfico del dispositivo a servicios externos como Plaspy
- Permite transporte sobre sockets de red comunes para que los datos de posicionamiento lleguen al endpoint de Plaspy para su procesamiento

## Cómo Plaspy detecta el protocolo

Plaspy opera un endpoint y puerto compartidos para el tráfico entrante de rastreadores y determina automáticamente el protocolo del dispositivo una vez que llegan los mensajes. Cuando un SIGNAL S-2117 está configurado para reportar a Plaspy, normalmente no se requiere una selección manual de protocolo dentro de la plataforma.

- Plaspy escucha en un único puerto para todos los dispositivos compatibles, lo que simplifica la configuración
- Los dispositivos deben reportar a d.plaspy.com o a 54.85.159.138 para que los mensajes lleguen al intake de Plaspy
- Plaspy detecta automáticamente el protocolo utilizado por un flujo entrante después de que el dispositivo empiece a reportar
- Los pasos típicos de configuración se limitan a apuntar el rastreador a la dirección de Plaspy y seleccionar UDP o TCP según lo soporte el equipo
- Por lo general, el usuario no necesita elegir un protocolo dentro de Plaspy siempre que el dispositivo esté correctamente configurado para enviar al endpoint de Plaspy

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el SIGNAL S-2117 llega al servidor de Plaspy y qué opciones de transporte están disponibles. El rastreador soporta transportes de red estándar y puede dirigirse al servidor de Plaspy por nombre de host o IP, dejando la selección de transporte a la configuración del dispositivo y a las condiciones de la red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requisitos de la red
- Plaspy acepta conexiones en d.plaspy.com y en la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la complejidad de configuración al desplegar múltiples modelos de rastreadores
- Elegir UDP puede ser útil para reportes de menor sobrecarga donde la pérdida ocasional de paquetes sea aceptable
- Elegir TCP puede mejorar la fiabilidad de entrega cuando los dispositivos y las redes soportan conexiones persistentes

## Notas de compatibilidad del protocolo

- Las implementaciones del protocolo abierto pueden diferir entre versiones de firmware, por ello confirme la versión de firmware del rastreador al validar compatibilidad
- Las revisiones de hardware u opciones modulares pueden añadir o cambiar campos de mensaje o tipos de evento
- Los menús de configuración del fabricante pueden exponer la selección de transporte UDP o TCP, lo que afecta cómo debe apuntarse el dispositivo a Plaspy
- Diferencias en la frecuencia de reporte por defecto o los disparadores de eventos pueden requerir ajustes para alinearse con las necesidades operativas
- Siempre pruebe un dispositivo en un entorno controlado antes de un despliegue a gran escala para confirmar el comportamiento esperado con Plaspy
- En caso de dudas consulte los recursos oficiales del fabricante para detalles específicos de implementación del dispositivo

## Por qué es importante conocer el protocolo

Entender el protocolo del dispositivo y cómo se comunica el SIGNAL S-2117 ayuda a asegurar una conexión fiable, reportes de ubicación precisos y un manejo predecible de eventos una vez que el rastreador esté conectado a Plaspy. Este conocimiento facilita la resolución de problemas y contribuye a operaciones más estables.

- Asegura la correcta identificación del dispositivo para que los datos se asignen al activo adecuado en Plaspy
- Ayuda a diagnosticar problemas de conectividad relacionados con la elección de transporte o la accesibilidad de la red
- Permite ajustar intervalos de reporte y umbrales de eventos para cumplir requisitos operativos
- Reduce el tiempo de despliegue al aclarar qué opciones de configuración deben establecerse en el rastreador
- Previene sorpresas por cambios de firmware al señalar dónde puede variar el comportamiento entre versiones

## Por qué usar Plaspy con este protocolo

Usar el SIGNAL S-2117 con Plaspy ofrece a las organizaciones una vía práctica para recopilar datos de ubicación y monitoreo basados en GNSS desde un dispositivo de protocolo abierto y unificarlos dentro de un flujo de trabajo de monitoreo de flota. El enfoque de endpoint compartido de Plaspy simplifica la configuración y ayuda a que los equipos pongan en reporte los rastreadores rápidamente sin asignaciones de puerto por dispositivo.

To learn more about Plaspy and how it can integrate with the NVS SIGNAL S-2117, visit https://www.plaspy.com. For the most current device protocol documentation firmware notes and implementation specifics consult the manufacturer at https://www.nvs-ts.ru/ to verify details that may change over time.
