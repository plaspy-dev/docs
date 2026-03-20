---
slug: /autofon/dialog_maiak/protocol
id: dialog_maiak-protocol
sidebar_label: Protocol
title: AutoFon - Диалог-Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar AutoFon Диалог-Маяк con Plaspy en reportes GPRS y SMS y entrega resiliente de telemetría
keywords:
  - AutoFon Диалог-Маяк protocolo
  - Protocolo GPS AutoFon Диалог-Маяк
  - Compatibilidad AutoFon Диалог-Маяк con Plaspy
  - Protocolo de rastreador GPS AutoFon
  - Protocolo de rastreo Диалог-Маяк
  - Protocolo de comunicación Диалог-Маяк
  - Rastreador GPS AutoFon con Plaspy
  - Protocolo de rastreador Dialog Beacon
  - Protocolo de rastreador Dialog Maiak
  - Rastreo de vehículos AutoFon Диалог-Маяк
---

# AutoFon - Диалог-Маяк: Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador AutoFon Диалог-Маяк con Plaspy. Explica cómo el dispositivo reporta posición y telemetría a Plaspy por GPRS o SMS, qué papel juega el protocolo de comunicación para entregar datos útiles y cuáles son los ajustes de conexión que Plaspy espera para la ingestión y enrutamiento.

Plaspy utiliza configuraciones de conexión compartidas entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo para el Диалог-Маяк puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público de integración y no en detalles internos de firmware.

## Visión general del protocolo

El protocolo de comunicación del Диалог-Маяк define cómo el rastreador envía identificación, ubicación, estado y eventos para que Plaspy pueda ingerir y presentar la telemetría de manera fiable. Para este modelo, el reporte por GPRS es el canal principal en vivo y el SMS se utiliza como respaldo resistente en entornos sin cobertura de datos continua.

- El protocolo transmite información de identidad y sesión que permite a Plaspy asociar los reportes entrantes con el registro de dispositivo correcto.
- Se incluyen campos de telemetría para coordenadas, batería, eventos del acelerómetro y entradas de alarma para que Plaspy genere mapas, alertas y reproducción histórica.
- Se reportan eventos como pulsaciones SOS, alertas por impacto o inclinación y confirmaciones de control remoto para activar flujos de trabajo en Plaspy.
- La caja negra del dispositivo almacena mensajes no enviados y reintenta la entrega, garantizando continuidad cuando la cobertura GPRS es intermitente.
- El reporte por SMS puede servir como canal secundario para ubicación y alertas cuando GPRS no está disponible.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes en un endpoint de ingestión compartido y determina automáticamente el protocolo del dispositivo a partir del contexto de conexión y del contenido del mensaje. En la mayoría de los casos, un Диалог-Маяк configurado para reportar al endpoint de Plaspy será identificado sin que el usuario tenga que seleccionar el protocolo en la plataforma.

- Plaspy escucha en un único puerto compartido para el tráfico de dispositivos y aplica detección automática de protocolos.
- Los dispositivos apuntados al endpoint de Plaspy normalmente no requieren selección manual de protocolo en la plataforma si están configurados correctamente.
- Los campos de identidad y telemetría entrantes permiten a Plaspy enlazar los reportes con el perfil de dispositivo correcto y aplicar reglas de parseo específicas.
- La detección automática simplifica la incorporación de flotas con fabricantes y modelos mezclados.
- Si un dispositivo no logra registrarse o reportar, lo primero es verificar la configuración del equipo y el estado del firmware antes de cambiar parámetros a nivel de plataforma.

## Contexto de transporte y conexión

Las opciones de conexión para el Диалог-Маяк están diseñadas para reportes fiables y con conmutación por error. El rastreador normalmente reporta por GPRS a un servidor de monitoreo configurado o envía SMS como ruta alternativa. Plaspy publica un único endpoint de ingestión y un puerto utilizados por todos los rastreadores compatibles.

- El dominio del servidor Plaspy es d.plaspy.com para configuración basada en DNS.
- La IP del servidor Plaspy es 54.85.159.138 para direccionamiento directo cuando no se usa DNS.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para la ingestión de telemetría.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y decisiones de configuración local.
- GPRS es el transporte principal para telemetría en vivo mientras que SMS se utiliza para alertas o cuando no hay conectividad de datos.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes y la cadencia de reporte; siempre valide el comportamiento tras actualizaciones de firmware.
- Revisión de hardware puede alterar sensores disponibles o el mapeo de entradas, lo que afecta los campos de telemetría reportados.
- Las herramientas de configuración del fabricante o los ajustes por defecto pueden seleccionar UDP o TCP; asegúrese de que el dispositivo apunte a d.plaspy.com o a la IP indicada y al puerto 8888.
- El buffering en la caja negra y la lógica de reintentos mejora la resiliencia, pero puede variar según firmware o configuración, afectando cuándo Plaspy recibe registros retrasados.
- El formato de SMS y el comportamiento de conmutación por error lo define el fabricante y debe verificarse para sus escenarios de despliegue.
- Confirme cualquier APN o configuración de la SIM con su operador móvil y la documentación del dispositivo para una entrega GPRS fiable.
- Verifique siempre los nombres de eventos esperados y las claves de telemetría contra los perfiles de dispositivo de Plaspy durante la puesta en marcha.

## Por qué es importante entender el protocolo

Comprender cómo el Диалог-Маяк se comunica con Plaspy ayuda a una puesta en marcha fiable, a un diagnóstico eficiente y a un funcionamiento predecible a largo plazo. Conocer el papel del transporte, el buffering y el reporte de eventos reduce el tiempo de incorporación y evita problemas comunes de integración.

- Asegura que el dispositivo esté configurado para apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando el transporte preferido.
- Ayuda a interpretar correctamente datos atrasados o agrupados cuando ocurre buffering o reintentos en la caja negra.
- Facilita el diagnóstico de eventos faltantes revisando la elección de transporte (UDP versus TCP), los ajustes APN y el estado de la SIM.
- Apoya la planificación de la cadencia de telemetría frente a los compromisos de duración de batería en despliegues.
- Permite mapear correctamente entradas de acelerómetro y alarmas a reglas y alertas en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon Диалог-Маяк con Plaspy combina el hardware discreto y de bajo consumo y el buffering robusto del rastreador con un endpoint de ingestión único y escalable que simplifica la gestión de flotas. La detección automática de Plaspy y la estrategia de puerto unificado reducen la complejidad de configuración en flotas mixtas, sin perder los beneficios de conmutación por error del Диалог-Маяк como paquetes GPRS almacenados y respaldo por SMS.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el Диалог-Маяк y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para definiciones de protocolo más recientes y específicas del dispositivo, comportamiento de firmware y guías de configuración, verifique los detalles con el fabricante en https://www.autofon.ru/.
