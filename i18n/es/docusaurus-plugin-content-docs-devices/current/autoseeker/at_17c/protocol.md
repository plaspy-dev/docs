---
slug: /autoseeker/at_17c/protocol
id: at_17c-protocol
sidebar_label: Protocol
title: Autoseeker - AT-17C Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador Autoseeker AT-17C y su comunicación con Plaspy para ubicación y alertas confiables
keywords:
  - protocolo Autoseeker AT-17C
  - protocolo GPS Autoseeker AT-17C
  - protocolo de comunicación Autoseeker AT-17C
  - protocolo de rastreo Autoseeker AT-17C
  - protocolo GPS Autoseeker
  - compatibilidad AT-17C Plaspy
  - protocolo de rastreador Plaspy
  - protocolo de rastreador de activos
  - rastreador magnético AT-17C
  - protocolo de seguimiento de flotas
---

# Autoseeker - Protocolo AT-17C

Esta página describe el contexto público del protocolo para usar el Autoseeker AT-17C con Plaspy. Se centra en cómo el dispositivo informa ubicación y estado a Plaspy y en qué aspectos debe fijarse al configurar el rastreador para garantizar que la plataforma reciba los datos de forma fiable. El objetivo es ofrecer información útil, no sensible, que facilite la integración y la resolución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando la unidad reporta al endpoint de Plaspy. El AT-17C puede reportar por SMS o por GPRS a través de la red celular, y Plaspy acepta tráfico dirigido a d.plaspy.com o 54.85.159.138 en el puerto 8888. El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, y el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El AT-17C usa un protocolo de reporte que le permite identificarse ante un backend y entregar telemetría utilizable como posición, tiempo y eventos de alarma. Cuando está configurado para reportar por GPRS, el rastreador envía telemetría periódica a Plaspy; si se configura por SMS, puede enviar posiciones y responder a consultas. El propósito del protocolo es asegurar la entrega confiable de ubicación y estado, a la vez que preserva la batería en despliegues de larga duración.

- Permite al rastreador informar a Plaspy sobre ubicación, nivel de batería, alarmas por manipulación y señales básicas de sensores.
- Admite reporte continuo por GPRS TCP para telemetría permanente y reporte por SMS para comunicaciones de bajo ancho de banda o cuando la red de datos no esté disponible.
- Incluye identificadores y campos de estado que permiten a Plaspy asociar los mensajes entrantes con el registro de dispositivo correcto.
- Permite intervalos de reporte configurables y modos de seguimiento programados para equilibrar la frecuencia de actualizaciones y la duración de la batería.
- Entrega eventos de alarma como manipulación o remoción para que Plaspy genere alertas inmediatas en flujos de trabajo de seguridad.

## Detección del protocolo por parte de Plaspy

Plaspy escucha el tráfico entrante de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo cuando un dispositivo correctamente configurado reporta. En la mayoría de los casos no es necesario elegir manualmente un protocolo dentro de Plaspy si el AT-17C está apuntando al endpoint de ingestión de Plaspy y utiliza uno de los transportes soportados.

- Plaspy acepta conexiones de dispositivos enviadas a d.plaspy.com o directamente a 54.85.159.138 y escucha en el puerto 8888.
- Los dispositivos pueden usar TCP o UDP en el puerto 8888 cuando están configurados para reporte por GPRS y Plaspy procesará la telemetría entrante.
- Para reportes por SMS, el dispositivo envía mensajes de posición y estado que Plaspy ingiere y asigna al mismo registro de dispositivo.
- Dado que Plaspy usa un puerto común para todos los dispositivos compatibles, la plataforma prioriza la identificación automática del protocolo en lugar de exigir una selección manual.
- Identificadores de dispositivo correctos e intervalos de reporte consistentes ayudan a Plaspy a detectar y mantener el manejo apropiado del protocolo del AT-17C.

## Contexto de transporte y conexión

Las elecciones de conexión influyen en cómo el AT-17C entrega los reportes y cómo los recibe Plaspy. El dispositivo soporta reporte por GPRS sobre TCP y también puede recurrir al SMS para telemetría o consultas. Al configurar el rastreador, confirme si prefiere GPRS o SMS según su cobertura y requerimientos de batería.

- El AT-17C puede configurarse para usar UDP o TCP en el puerto 8888 para subir datos por GPRS a Plaspy.
- El endpoint público de ingestión de Plaspy es d.plaspy.com y la plataforma también acepta conexiones a 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de red y la ingestión en la plataforma.
- El reporte por SMS sigue siendo una opción viable para consultas puntuales, zonas con bajo ancho de banda o como método de respaldo.
- La selección del transporte puede afectar el consumo de batería y la fiabilidad del reporte según las condiciones de señal y la frecuencia de envío.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar tiempos de mensaje, campos o valores por defecto de reporte; verifique la versión de firmware al diagnosticar diferencias.
- Revisiones de hardware o variantes regionales pueden modificar las bandas soportadas o el modo de transporte predeterminado entre SMS y GPRS.
- En algunos despliegues es preferible usar SMS como transporte primario o de respaldo donde la cobertura GPRS o la configuración del APN sean poco fiables.
- Asegúrese de que el APN y la configuración celular del dispositivo coincidan con los requisitos de su SIM y operador para habilitar el reporte por GPRS a Plaspy.
- Como Plaspy detecta protocolos automáticamente, la mayoría de los problemas de compatibilidad proceden de la configuración del dispositivo o del comportamiento del firmware más que de la plataforma.
- Valide el comportamiento del dispositivo en una prueba controlada antes de un despliegue a gran escala para confirmar que los reportes aparecen en Plaspy como espera.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AT-17C ayuda a conseguir una instalación fluida, reportes confiables y una resolución más rápida cuando surgen problemas. Saber qué transporte usa el dispositivo, con qué frecuencia reporta y qué eventos envía le permite optimizar los despliegues en función de la vida útil de la batería y los requisitos operativos.

- Facilita la resolución de problemas por reportes faltantes o retrasados mediante la verificación de transporte y ajustes de endpoint.
- Mejora la planificación de la duración de batería al seleccionar intervalos y modos de reporte adecuados.
- Asegura el manejo fiable de alarmas incluyendo eventos de manipulación y remoción en la telemetría.
- Hace los despliegues más previsibles al probar comportamientos de firmware que afectan el reporte y la programación.
- Permite un mapeo preciso de dispositivos en Plaspy confirmando identificadores únicos y formatos de reporte consistentes.

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-17C con Plaspy ofrece una solución práctica para la visibilidad de activos a largo plazo, detección de manipulación y reportes programados. La combinación del AT-17C de larga autonomía en standby, montaje magnético robusto y la opción de reportar por GPRS TCP o SMS lo hace adecuado para el rastreo de remolques, contenedores, equipos y activos marinos. Plaspy consolida la telemetría entrante y los eventos de alarma para que los gestores de flota y los equipos de seguridad accedan a posiciones en vivo, historiales y alertas desde una única plataforma.

Learn more about how Plaspy integrates device telemetry and fleet workflows at https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify current device specific protocol documentation and firmware releases on the manufacturer site https://autoseekergps.com/.
