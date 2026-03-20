---
slug: /astra_telematics/at500/protocol
id: at500-protocol
sidebar_label: Protocol
title: Astra Telematics - AT500 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo para integrar el rastreador Astra Telematics AT500 con Plaspy
keywords:
  - Protocolo Astra Telematics AT500
  - Compatibilidad AT500 GPS con Plaspy
  - Protocolo de comunicación AT500
  - Protocolo de rastreador de activos Astra Telematics
  - Protocolo AT500 LTE M NB IoT
  - Integración de protocolo de dispositivo Plaspy
  - Rastreo GPS AT500 con Plaspy
  - Conectividad rastreador de activos AT500
  - Protocolo de telemetría Astra Telematics AT500
  - Configuración BLE AT500 en Plaspy
---

# Astra Telematics - Protocolo AT500

Esta página ofrece una visión general pública del contexto de comunicación para usar el rastreador de activos AT500 Mini de Astra Telematics con Plaspy. Explica cómo el dispositivo informa posición y telemetría a Plaspy y qué papel desempeña el protocolo del rastreador para entregar datos útiles a los flujos de trabajo de gestión de flotas y activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El AT500 puede enviar datos a través de redes celulares (LTE‑M, NB‑IoT o con conmutación a 2G) y apuntar a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza la detección del protocolo en el servidor. El tiempo exacto de los mensajes, los campos y el comportamiento pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El AT500 se comunica con Plaspy usando su protocolo de reporte para enviar correcciones GNSS, eventos de movimiento y telemetría de salud del dispositivo a través del enlace celular. El protocolo define cómo el rastreador se identifica, codifica la posición y los datos de sensores, y controla los ciclos de activación y reposo que influyen en la vida útil de la batería y la puntualidad de los reportes.

- Proporciona el mecanismo para que el AT500 identifique el dispositivo y entregue posición GNSS y telemetría a Plaspy.
- Transporta eventos de movimiento y estado desde el acelerómetro y el subsistema de gestión de energía para alimentar alertas y ciclos de activación.
- Permite a Plaspy recibir estado de batería y salud del dispositivo para que los operadores puedan monitorear condición y planificar mantenimiento.
- Soporta flujos de trabajo de actualización OTA y configuración vía BLE o comandos over‑the‑air cuando estén disponibles mediante las herramientas y el aprovisionamiento del fabricante.
- Permite modelos de despliegue mixtos donde rastreadores compactos de activos conviven con rastreadores de vehículos en el mismo entorno Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint y puerto compartidos el tráfico entrante de dispositivos y detecta automáticamente el protocolo del rastreador cuando el AT500 está apuntando a la plataforma. En la mayoría de los casos, los usuarios no necesitan elegir manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy acepta reportes de dispositivos en d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto 8888.
- Todos los dispositivos usan el mismo puerto en Plaspy, por lo que una dirección de salida consistente facilita el aprovisionamiento.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP según la configuración del AT500 y el soporte de la red celular.
- La detección automática reduce la necesidad de seleccionar el protocolo manualmente cuando los dispositivos están programados correctamente.
- Si un dispositivo no aparece, las verificaciones típicas incluyen confirmar APN y ajustes del servidor de salida, el tipo de transporte y la compatibilidad del firmware.

## Transporte y contexto de conexión

El AT500 puede usar UDP o TCP para enviar mensajes a Plaspy en función de la configuración del dispositivo y el comportamiento de la red celular. Apuntar el dispositivo al endpoint de Plaspy y usar el puerto 8888 para los reportes salientes es el requisito central de conexión para la integración con la plataforma.

- Los dispositivos pueden reportar al hostname d.plaspy.com o a la IP del servidor 54.85.159.138.
- El puerto estándar de reporte para todos los dispositivos Plaspy es 8888.
- La selección de transporte (UDP frente a TCP) depende del firmware del AT500 y de las opciones de aprovisionamiento elegidas.
- Las opciones de conectividad celular en el AT500 incluyen LTE‑M, NB‑IoT y conmutación a 2G, lo cual afecta cómo y cuándo se entregan los paquetes.
- BLE está disponible para configuración local y diagnóstico, pero la telemetría se reenvía a Plaspy a través del enlace celular.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar intervalos de reporte, campos de telemetría disponibles y valores predeterminados de transporte; confirme siempre el comportamiento del firmware durante el despliegue.
- Las variantes de hardware y las variantes regionales de red celular pueden alterar las bandas soportadas y las opciones de conectividad que afectan la confiabilidad del reporte.
- El aprovisionamiento del fabricante y los perfiles e‑SIM pueden influir en la facilidad con la que los dispositivos se conectan a los endpoints de Plaspy en diferentes mercados.
- La elección entre UDP y TCP puede cambiar las características de entrega; seleccione el transporte que se ajuste a su cobertura y necesidades de confiabilidad.
- Plaspy detecta automáticamente el protocolo, pero se requieren los ajustes correctos de servidor externo y APN en el AT500 para una detección exitosa.
- Valide el comportamiento del dispositivo frente a la documentación más reciente del fabricante al planificar despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del AT500 y el contexto de conexión ayuda a asegurar reportes confiables, un uso eficiente de la batería y una resolución de problemas más sencilla cuando los dispositivos se integran con Plaspy. Conocer cómo el dispositivo se activa, reporta y comunica su estado reduce el tiempo de integración y aumenta la confianza operacional.

- Ayuda a diagnosticar por qué un dispositivo no aparece en Plaspy o por qué los reportes llegan con retraso.
- Orienta las decisiones de configuración que equilibran frecuencia de reporte y duración de batería del AT500.
- Informa sobre la selección de transporte y el aprovisionamiento APN para mejorar cobertura y desempeño.
- Apoya la planificación de actualizaciones de firmware y las diferencias entre variantes del fabricante en grandes flotas.
- Facilita la colaboración efectiva entre técnicos de campo, integradores y el soporte de Plaspy al resolver problemas de conectividad.

## Por qué usar Plaspy con este protocolo

Usar el AT500 con Plaspy ofrece visibilidad compacta de activos junto con telemetría de vehículos y equipos en una sola plataforma. El diseño de bajo consumo del AT500, su soporte multinetwork celular, la comisionación por BLE y el e‑SIM interno lo convierten en una opción práctica para despliegues densos de activos donde la colocación discreta y la larga duración de batería son prioridades.

Si desea saber más sobre cómo Plaspy puede integrar rastreadores AT500 en sus flujos de trabajo de seguimiento y gestión de flotas visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente específica del dispositivo en el sitio del fabricante https://astratelematics.com/ antes de implementaciones a gran escala.
