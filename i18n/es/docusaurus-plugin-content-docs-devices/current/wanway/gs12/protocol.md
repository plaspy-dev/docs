---
slug: /wanway/gs12/protocol
id: gs12-protocol
sidebar_label: Protocol
title: WanWay - GS12 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo WanWay GS12 para compatibilidad de rastreo con Plaspy
keywords:
  - Protocolo WanWay GS12
  - Protocolo GPS WanWay GS12
  - Protocolo de comunicación WanWay GS12
  - Protocolo de rastreo WanWay GS12
  - Compatibilidad WanWay GS12 Plaspy
  - Protocolo de rastreador WanWay
  - Protocolo rastreador GPS GS12
  - Rastreo vehicular WanWay GS12
  - Compatibilidad de rastreadores Plaspy
  - Gestión de flotas WanWay GS12
---

# WanWay - Protocolo GS12

Esta página describe el contexto público del protocolo para usar el rastreador WanWay GS12 con Plaspy. Resume cómo el GS12 comunica ubicación, telemetría y eventos a Plaspy sin exponer detalles privados de implementación. El objetivo es ayudar a instaladores, operadores de flotas e integradores a comprender la relación de comunicación entre el GS12 y Plaspy, preservando la documentación oficial del fabricante para los detalles específicos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo en el GS12 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en el transporte público y el contexto del protocolo necesario para una integración confiable, en lugar de los detalles internos del dispositivo.

## Visión general del protocolo

El GS12 usa su enlace celular y la posición GNSS a bordo para reportar localización y telemetría de eventos del vehículo, de modo que Plaspy pueda ofrecer mapas, alertas e informes. En esta descripción pública explicamos el papel que juega el protocolo del rastreador para habilitar esas capacidades y cómo encaja en una implementación con Plaspy.

- Transmite fijaciones GNSS y telemetría con marcas de tiempo para que Plaspy ubique el dispositivo en el mapa y construya trayectorias históricas.
- Envía mensajes de evento para estado de ACC, alarma por desmontaje, exceso de velocidad, actualizaciones de kilometraje y eventos de control remoto que Plaspy consume para alertas y automatizaciones.
- Proporciona un flujo de datos transportable sobre la red celular hacia el servidor de Plaspy para que los servicios de la plataforma puedan parsear y presentar el estado del dispositivo.
- Identifica el dispositivo al backend para que Plaspy asocie los mensajes entrantes con el activo y la configuración correctos.
- Permite el envío de comandos y controles remotos desde Plaspy al rastreador cuando el dispositivo y el firmware soportan esas operaciones.

## Cómo detecta Plaspy el protocolo

Plaspy opera un único endpoint y puerto compartidos para el reporte de dispositivos y detecta automáticamente el protocolo del rastreador cuando el GS12 está correctamente apuntado a la plataforma. Por lo general, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy siempre que el rastreador reporte al endpoint de Plaspy usando las opciones de configuración estándar del dispositivo.

- Plaspy escucha en un endpoint de red compartido para que los mensajes entrantes de muchos modelos de rastreadores, incluido el GS12, lleguen al mismo destino.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante y el flujo de mensajes, simplificando la incorporación de la mayoría de los dispositivos.
- En configuraciones habituales, solo es necesario configurar el dispositivo para que reporte al endpoint de Plaspy y la plataforma se encarga del resto.
- Si un dispositivo no aparece en Plaspy, los instaladores deben confirmar la configuración de reporte del equipo y revisar la guía del fabricante sobre cómo el dispositivo envía su primer mensaje.
- Para mayor claridad operativa, documente el IMEI o el identificador único del dispositivo para que los equipos de soporte puedan correlacionar el tráfico con un rastreador físico durante la resolución de problemas.

## Contexto de transporte y conexión

El GS12 reenvía su telemetría a través de la red celular a Plaspy usando un transporte estándar TCP o UDP según la configuración del dispositivo y el soporte de firmware. Plaspy publica un único endpoint de servidor y puerto para el reporte de dispositivos con el fin de mantener consistente la configuración entre modelos.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy para reporte de dispositivos es 54.85.159.138.
- El puerto de escucha de Plaspy para dispositivos es 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- El GS12 puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y la preferencia del instalador.
- Apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 dirige los mensajes al endpoint de ingestión de Plaspy.
- Use el modo de transporte recomendado por la documentación del dispositivo o por su operador móvil para obtener la mejor confiabilidad y baja latencia.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el timing de mensajes, los eventos soportados o la preferencia de transporte, por lo que registre la versión de firmware del dispositivo al validar compatibilidad.
- Las revisiones de hardware o variantes regionales del GS12 pueden mostrar funciones o esquemas de cableado diferentes que afecten el reporte de telemetría.
- Los intervalos de reporte predeterminados y los umbrales de eventos configurados por el fabricante pueden variar e influir en cómo aparecen los datos en Plaspy.
- Seleccionar UDP frente a TCP puede afectar las características de entrega; siga la guía del fabricante para el reconocimiento de comandos y el comportamiento de retransmisión.
- Siempre valide la configuración del dispositivo con la documentación más reciente de WanWay y pruebe un dispositivo de extremo a extremo antes de un despliegue masivo.
- Si depende de funciones de control remoto como corte de motor, confirme que la función esté habilitada y soportada por el firmware del dispositivo y por su instalación.

## Por qué es importante entender el protocolo

Saber cómo el GS12 se comunica con Plaspy reduce la fricción en la configuración, acelera la resolución de problemas y mejora la confiabilidad a largo plazo para las operaciones de flota. Comprender claramente el contexto de transporte y mensaje ayuda tanto a integradores como al personal de operaciones a mantener un reporte consistente y a responder rápidamente a los eventos del dispositivo.

- Asegura la configuración correcta del dispositivo para que los mensajes lleguen a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a diagnosticar telemetría ausente verificando el modo de transporte, la dirección del servidor y los intervalos de reporte.
- Facilita confirmar que tipos de evento como ACC, alarma por desmontaje o exceso de velocidad están incluidos en los informes entrantes.
- Reduce el tiempo de incorporación aprovechando la detección automática de Plaspy en lugar de la selección manual del protocolo.
- Apoya la planificación de actualizaciones de firmware y despliegues de hardware con una visión clara de qué comportamientos dependen del dispositivo y cuáles son responsabilidad de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el GS12 con Plaspy brinda a equipos de flota y operadores de servicio una forma directa de capturar flujos de ubicación, eventos y telemetría que son relevantes para seguridad, operaciones e informes. El GS12 aporta GNSS y señales del vehículo, mientras que Plaspy centraliza la ingestión, alertas e informes para que los equipos puedan actuar sobre los datos.

Para obtener más información sobre cómo Plaspy admite rastreadores como el GS12 y revisar opciones de despliegue, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y guías de instalación más recientes, consulte al fabricante en https://www.wanwaytech.net/ ya que el comportamiento del dispositivo y las capacidades de firmware pueden cambiar con el tiempo.
