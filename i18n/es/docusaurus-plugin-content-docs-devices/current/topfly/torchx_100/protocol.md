---
slug: /topfly/torchx_100/protocol
id: torchx_100-protocol
sidebar_label: Protocol
title: TopFly - TorchX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del TopFly TorchX 100 y cómo se comunica con Plaspy para telemetría y rastreo de flotas
keywords:
  - protocolo TopFly TorchX 100
  - protocolo GPS TopFly TorchX 100
  - protocolo de rastreo TopFly
  - compatibilidad TorchX 100 con Plaspy
  - protocolo de rastreador GPS OBDII
  - protocolo de telemetría CAN BUS
  - protocolo de rastreo de flotas TopFly
  - protocolo de comunicación TorchX 100
  - rastreadores compatibles con Plaspy
  - protocolo ELD TopFly
---

# TopFly - Protocolo TorchX 100

Esta página describe el contexto público del protocolo para usar el TopFly TorchX 100 con Plaspy. Explica, a un nivel de protocolo útil para planificación de integración y resolución de problemas, cómo el dispositivo informa posición y telemetría del vehículo a la plataforma Plaspy sin revelar detalles internos de parsers o firmware. Utilice este documento para comprender los puntos de conexión y el papel que juega el protocolo del dispositivo en la entrega de datos utilizables a los paneles y flujos de trabajo de Plaspy.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo cuando los rastreadores apuntan al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para ejemplos de paquetes específicos del dispositivo, notas de firmware y la lista más reciente de comandos consulte la documentación oficial de TopFly y las notas de lanzamiento de firmware.

## Visión general del protocolo

El TorchX 100 utiliza sus interfaces celulares y CAN BUS integradas para enviar ubicación del vehículo, diagnósticos y registros de cumplimiento a un servidor remoto. El protocolo del dispositivo define cómo el rastreador se identifica, reporta la posición GNSS y transmite telemetría CAN BUS y registros ELD para que Plaspy pueda presentar datos de flota accionables.

- Transporta información de posición y tiempo GNSS para que Plaspy pueda trazar la ubicación del vehículo y rutas históricas.
- Transmite telemetría CAN BUS incluyendo VIN, odómetro real, nivel de combustible, estado de encendido y códigos de falla (DTC) para identificación de activos y flujos de mantenimiento.
- Entrega datos ELD y de horas de servicio para soportar reportes de cumplimiento dentro de Plaspy.
- Soporta reporte en búfer para que los puntos almacenados se entreguen cuando se restaure la conectividad, asegurando continuidad en los registros de Plaspy.
- Utiliza métodos de transporte estándar soportados por el dispositivo para alcanzar el endpoint de Plaspy, permitiendo ingesta y visualización centralizadas.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint y puerto compartidos para los reportes entrantes y aplica detección automática de protocolo para mapear los datos recibidos a los campos correctos del dispositivo. Cuando un TorchX 100 está configurado para reportar al endpoint de Plaspy, por lo general usted no necesita seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy recibe tráfico de dispositivos en el endpoint público d.plaspy.com y en la dirección del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y reduce errores de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el modelo de dispositivo y los campos de telemetría apropiados.
- La configuración correcta del dispositivo en el lado del rastreador es el requisito principal para que la detección automática funcione.
- Si un dispositivo ofrece múltiples opciones de transporte, asegúrese de que esté apuntando al servidor Plaspy para que la detección automática pueda ocurrir.

## Transporte y contexto de conexión

Los dispositivos TorchX 100 pueden usar diversos modos de transporte para enviar telemetría y diagnósticos a Plaspy. Para conectividad, el dispositivo puede configurarse para usar UDP o TCP en el puerto que Plaspy utiliza para todos los dispositivos compatibles. Estas elecciones de conexión afectan características de entrega como latencia y reenvío, pero no cambian los campos de telemetría de alto nivel disponibles en Plaspy.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y las preferencias del sitio.
- Los dispositivos pueden apuntarse a d.plaspy.com o a la IP del servidor 54.85.159.138 para entrega directa a Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica el aprovisionamiento a nivel de flota.
- La selección del transporte se realiza en la etapa de configuración del dispositivo y puede afectar garantías de entrega y consumo de batería.
- Verifique que la configuración de la red móvil y el APN sean correctos en el dispositivo para que pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden añadir o cambiar campos de telemetría y actualizar cómo se codifican ciertos valores de CAN BUS; valide la compatibilidad con su versión de firmware.
- Las revisiones de hardware y variantes regionales pueden alterar características disponibles como bandas LTE soportadas o interfaces auxiliares.
- Las opciones de configuración del lado del fabricante pueden habilitar o deshabilitar transportes como MQTT o SMS; confirme qué transportes están activos para la integración con Plaspy.
- La elección de transporte entre UDP y TCP puede alterar el comportamiento de retransmisión y confirmación, pero no los campos de telemetría de alto nivel disponibles en Plaspy.
- Para usos avanzados como cumplimiento ELD o mapeos CAN personalizados, confirme que el dispositivo proporcione las señales específicas requeridas por sus flujos de trabajo.
- Siempre coteje los identificadores reportados por el dispositivo, como VIN y número de serie, con su registro de activos para evitar errores de identificación.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del TorchX 100 le ayuda a configurar los dispositivos correctamente, asegurar la ingesta fiable de telemetría CAN BUS y datos ELD, y agilizar la resolución de problemas cuando los dispositivos no aparecen en Plaspy como se espera. Un buen entendimiento de las elecciones de protocolo y transporte mejora la confiabilidad a largo plazo y la visibilidad operativa.

- Valida que el dispositivo esté configurado para reportar al endpoint correcto de Plaspy para que la detección automática funcione.
- Ayuda a diagnosticar problemas de conectividad al aclarar si se está usando transporte TCP o UDP.
- Asegura que las funciones del firmware necesarias estén activas para capturar señales CAN BUS requeridas para odómetro, VIN, combustible y DTCs.
- Apoya la planificación para buffering offline y recuperación de datos para reducir puntos perdidos durante cortes de red.
- Mejora la coordinación entre técnicos de campo y administradores de flota al aprovisionar dispositivos OBDII.

## Por qué usar Plaspy con este protocolo

Usar el TorchX 100 con Plaspy ofrece a los operadores de flota una combinación de actualizaciones de ubicación frecuentes, telemetría CAN BUS profunda y soporte ELD que se presenta a través de los paneles y flujos de alertas de Plaspy. Plaspy ingiere los reportes del dispositivo entregados al endpoint compartido, detecta automáticamente el protocolo y mapea GNSS, CAN BUS y registros de cumplimiento en vistas de flota para despacho, mantenimiento y reportes regulatorios.

Obtenga más información sobre Plaspy y cómo maneja la conectividad de dispositivos, la detección automática de protocolos y los reportes a nivel de flota en https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, notas de firmware y orientación de implementación más actual, verifique la información más reciente en el sitio del fabricante https://www.topflytech.com/ ya que el comportamiento del dispositivo y las funciones soportadas pueden cambiar con el tiempo.
