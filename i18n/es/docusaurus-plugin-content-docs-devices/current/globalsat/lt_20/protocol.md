---
slug: /globalsat/lt_20/protocol
id: lt_20-protocol
sidebar_label: Protocol
title: GlobalSat - LT-20 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto del protocolo público para usar el rastreador GlobalSat LT-20 con Plaspy, ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo GlobalSat LT-20
  - Compatibilidad LT-20 Plaspy
  - Protocolo GPS GlobalSat
  - Protocolo de rastreo LT-20
  - Protocolo LoRa para rastreadores GPS
  - Rastreo de activos LT-20
  - Comunicación GlobalSat LT-20
  - Rastreo vehicular GlobalSat
  - Compatibilidad de firmware LT-20
  - Integración de rastreadores Plaspy
---

# GlobalSat - Protocolo LT-20

Esta página explica el contexto público del protocolo para integrar el rastreador GlobalSat LT-20 con Plaspy. Describe, a alto nivel, cómo se comunica el dispositivo, qué ajustes de conexión de Plaspy son relevantes y qué aspectos considerar al integrar la familia LT-20 para el rastreo de activos y ganado.

El LT-20P es un rastreador GPS solar con conectividad LoRa, diseñado para seguimiento prolongado en exteriores de ganado y equipo agrícola. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de mensajes y convenciones que utiliza el LT-20 para enviar ubicación, movimiento y estado de batería, de modo que una plataforma como Plaspy pueda recibir e interpretar esa información. En el caso del LT-20P, esto implica generalmente transmisiones LoRa hacia una pasarela de red y luego entrega por IP a un endpoint donde Plaspy recibe los datos.

- El protocolo identifica el dispositivo y entrega telemetría esencial como ubicación GPS, eventos de movimiento detectados por el acelerómetro y alertas de bajo consumo.
- Envía mensajes periódicos de estado o latidos para que el servidor pueda monitorear la disponibilidad del equipo.
- La telemetría es codificada por el proveedor del dispositivo y reenviada por la infraestructura de red a Plaspy para su decodificación y mapeo al estado del dispositivo.
- El protocolo soporta alarmas y reporte de eventos para que movimientos, manipulación indebida o condiciones de batería puedan generar visibilidad inmediata.
- La selección regional de frecuencias LoRa afecta el comportamiento radio, pero el protocolo de reporte gobierna qué datos se envían y cómo el servidor debe interpretarlos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y utiliza esa información para identificar qué protocolo de rastreador está en uso. En la mayoría de los casos, un dispositivo LT-20 correctamente configurado solo necesita reportar al endpoint de Plaspy y la plataforma se encargará de la detección del protocolo automáticamente, por lo que normalmente no es necesario seleccionar el protocolo manualmente en la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador

## Contexto de transporte y conexión

El contexto de conexión describe cómo los mensajes llegan a Plaspy después de salir por radio del LT-20. Según la implementación y la configuración, los uplinks del dispositivo viajan a través de la infraestructura de red LoRa hacia una pasarela que luego reenvía los reportes por TCP o UDP a Plaspy en un endpoint y puerto fijos.

- El LT-20P transmite por LoRa y está ajustado regionalmente para US 915 MHz, AS 923 MHz o EU 868 MHz; la entrega IP desde la pasarela al servidor usa transporte estándar de internet.
- Los dispositivos o pasarelas pueden apuntar a d.plaspy.com o 54.85.159.138 para la entrega a Plaspy.
- El puerto usado por Plaspy es 8888 y ese mismo puerto se emplea para todos los dispositivos soportados.
- Dependiendo de la configuración del dispositivo o de la pasarela, se puede usar UDP o TCP para enviar datos a Plaspy en el puerto 8888.
- Confirme con su operador de red LoRa o con la pasarela que pueden reenviar las cargas útiles de los dispositivos al endpoint configurado de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos o el comportamiento de eventos; confirme la versión de firmware del LT-20 al validar compatibilidad.
- Revisiones de hardware y distintos submodelos dentro de la familia LT-20 pueden alterar sensores disponibles o intervalos de reporte.
- Las configuraciones regionales de radio para US 915, AS 923 y EU 868 afectan el comportamiento en la capa física pero no necesariamente cambian el reporte en la capa de aplicación.
- Algunas implementaciones usan un servidor de red LoRa o una pasarela que traduce la carga útil y modifica cómo aparecen los datos ante Plaspy; verifique la entrega de extremo a extremo.
- La selección de transporte entre UDP y TCP puede estar limitada por pasarelas u operadores de red; asegúrese de que el transporte elegido sea compatible y esté correctamente configurado.
- Siempre valide el comportamiento del protocolo con la documentación más reciente del fabricante para los conjuntos de comandos específicos del dispositivo y notas de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del LT-20 ayuda a asegurar una configuración confiable, telemetría precisa y una resolución de problemas más rápida al integrar con Plaspy. Tener claridad sobre cómo los datos se desplazan desde el dispositivo hasta la plataforma reduce tiempos de puesta en marcha y mejora la confiabilidad operativa.

- Ajustes correctos de transporte y endpoint evitan pérdida de datos y aseguran que el dispositivo sea visible en Plaspy.
- Conocer la frecuencia de reporte y los desencadenantes de eventos ayuda a optimizar la vida útil de la batería y el uso de la red en rastreadores solares.
- Estar al tanto de variaciones de firmware y hardware orienta las expectativas sobre campos de telemetría y alarmas disponibles.
- Comprender el papel de pasarelas y servidores de red facilita identificar dónde revisar si los datos no llegan a Plaspy.
- El conocimiento del protocolo facilita mapear los datos del dispositivo a los campos de Plaspy para reportes y alertas.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con la familia GlobalSat LT-20 ofrece un camino sencillo hacia una visibilidad centralizada de ganado, maquinaria y activos remotos. El endpoint de servidor de Plaspy acepta reportes de dispositivos configurados para reenviar uplinks y la detección automática de protocolos de la plataforma reduce pasos de configuración manual cuando el dispositivo está correctamente apuntado a Plaspy.

Si usted está evaluando el despliegue del LT-20 para rastreo de flotas o uso agrícola, Plaspy puede consolidar telemetría y eventos en paneles, alertas e informes que apoyan la supervisión operativa y la respuesta. Para obtener más información sobre Plaspy, visite https://www.plaspy.com. Para detalles actuales específicos del protocolo del dispositivo, notas de firmware y revisiones de hardware, verifique la información con GlobalSat en https://www.globalsat.com.tw/.
