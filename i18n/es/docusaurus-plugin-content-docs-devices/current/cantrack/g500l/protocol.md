---
slug: /cantrack/g500l/protocol
id: g500l-protocol
sidebar_label: Protocol
title: CanTrack - G500L Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el CanTrack G500L con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo CanTrack G500L
  - Protocolo GPS CanTrack G500L
  - Protocolo CanTrack G500L Plaspy
  - Protocolo rastreador OBD G500L
  - Protocolo OBD GPS CanTrack
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreo de vehículos
  - Protocolo de telemetría OBD
  - Rastreo de flotas G500L
  - Protocolo de comunicación G500L
---

# CanTrack - Protocolo G500L

Esta página ofrece una visión pública del protocolo para usar el CanTrack G500L con la plataforma Plaspy. Se centra en el contexto de comunicación práctico y no sensible que usted necesita para comprender cómo el G500L informa ubicación y telemetría OBD a Plaspy, sin exponer detalles internos de firmware o implementaciones privadas.

El G500L es un rastreador OBD II plug and play con posicionamiento híbrido y conectividad industrial 4G. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Las indicaciones aquí aclaran cómo el dispositivo suele comunicarse con Plaspy y qué verificar al desplegar unidades G500L a escala.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el G500L empaqueta la posición GNSS, el estado celular, los parámetros OBD II y las alertas de eventos para enviarlos a un servidor remoto. Para la integración con Plaspy, el propósito del protocolo se limita a identificar el dispositivo, entregar telemetría oportuna y permitir que la plataforma muestre datos de ubicación, diagnóstico y eventos.

- Transporta información GNSS y de posicionamiento híbrido para uso en mapas y geocercas.
- Transmite telemetría OBD II como consumo de combustible, temperatura, estado de encendido y códigos de diagnóstico para obtener información de flota.
- Envía señales de evento como alertas de manipulación, pérdida de alimentación y marcadores de viaje para soportar notificaciones y automatizaciones.
- Identifica el dispositivo al servidor para que Plaspy pueda asociar los mensajes entrantes con el registro de activo correcto.
- Habilita latidos periódicos y actualizaciones de estado para que Plaspy pueda monitorear la salud y conectividad del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy determina automáticamente el protocolo del rastreador a partir de las conexiones entrantes a su endpoint compartido, por lo que la mayoría de los usuarios no necesitan seleccionar un protocolo dentro de la plataforma cuando el dispositivo está correctamente apuntado a Plaspy. La configuración adecuada del dispositivo hacia el servidor de Plaspy asegura que la plataforma pueda ingerir e interpretar los informes del G500L.

- Plaspy utiliza un único endpoint público para el reporte de dispositivos y detección automática de protocolo.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la selección manual de protocolo en la plataforma suele ser innecesaria.
- Los dispositivos configurados para reportar al endpoint de Plaspy se asociarán con la cuenta y el activo correctos una vez que lleguen los mensajes.
- Si un dispositivo no aparece en Plaspy, verifique la configuración de servidor y transporte en el dispositivo y confirme que el firmware admite el reporte al endpoint compartido.

## Transporte y contexto de conexión

Los ajustes de conexión y transporte determinan cómo el G500L envía sus tramas de protocolo a Plaspy. El dispositivo puede configurarse para usar UDP o TCP según el firmware del modelo y las preferencias de despliegue. Todos los dispositivos que soporta Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según soporte y configuración del equipo.
- Plaspy acepta reportes de dispositivos en el puerto 8888 y usa el mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la dirección 54.85.159.138.
- Usar el nombre de dominio facilita la gestión ante cambios de IP, mientras que la IP es útil cuando DNS está restringido.
- Confirme que el APN y los ajustes de conectividad celular del dispositivo son correctos para que el rastreador pueda establecer sesiones salientes hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el dispositivo formatea y programa la telemetría; siempre verifique la versión de firmware al validar el comportamiento.
- Las revisiones de hardware y las SKU regionales pueden alterar las bandas de red soportadas y la lógica de conmutación para el reporte.
- Los menús de configuración del fabricante pueden ofrecer opciones de selección de transporte; asegúrese de que TCP o UDP y el puerto de Plaspy estén configurados de forma consistente entre las unidades.
- La disponibilidad de ciertos parámetros OBD II depende del fabricante, modelo y PIDs soportados por el vehículo, no solo del rastreador.
- Confirme si un dispositivo usa direccionamiento por dominio o IP en su despliegue y documente la elección para futuras actualizaciones.
- Valide compatibilidad y disponibilidad de funciones frente a la documentación del fabricante antes de implementaciones a gran escala.

## Por qué es importante entender el protocolo

Comprender el papel práctico del protocolo de comunicación ayuda a garantizar reportes confiables, acelerar la resolución de problemas y predecir el comportamiento de la flota cuando los dispositivos informan a Plaspy. Distinguir lo que es responsabilidad de la plataforma y lo que corresponde al dispositivo reduce la mala configuración y facilita despliegues más fluidos.

- Acelera la puesta en marcha al aclarar qué campos del dispositivo deben configurarse para comunicarse con Plaspy.
- Facilita el diagnóstico de problemas de conectividad al enfocar las verificaciones en transporte, DNS, APN y firmware.
- Orienta las expectativas sobre la cadencia de telemetría y qué parámetros OBD II son más probables de estar disponibles.
- Apoya la planificación de actualizaciones de firmware y revisiones de hardware que puedan cambiar el comportamiento de reporte.
- Permite reglas operativas más precisas en Plaspy al emparejar tipos de eventos entrantes con alertas y automatizaciones.

## Por qué usar Plaspy con este protocolo

Usar el G500L con Plaspy ofrece una combinación práctica para organizaciones que necesitan despliegue rápido, telemetría a nivel OBD y ubicación en tiempo real confiable. El factor de forma OBD II plug and play reduce el tiempo de instalación, mientras que el posicionamiento híbrido y la conectividad industrial 4G mantienen la telemetría fluyendo hacia Plaspy para mapas, diagnósticos y flujos de trabajo basados en eventos.

Plaspy centraliza la telemetría del G500L para que los gestores de flota puedan ver ubicaciones en vivo, monitorear combustible y DTCs, y recibir alertas de manipulación sin tener que gestionar parsers de protocolo o puertos por dispositivo. Para conocer más sobre Plaspy y cómo soporta integraciones de dispositivos visite https://www.plaspy.com. Para detalles más recientes del protocolo del dispositivo, notas de firmware y documentación específica del fabricante verifique la información actual en https://www.cantrackgps.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
