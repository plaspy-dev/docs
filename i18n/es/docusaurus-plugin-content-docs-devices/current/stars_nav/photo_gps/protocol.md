---
slug: /stars_nav/photo_gps/protocol
id: photo_gps-protocol
sidebar_label: Protocol
title: Stars Nav - Photo GPS Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Stars Nav Photo GPS con Plaspy y compatibilidad del servidor
keywords:
  - Stars Nav Photo GPS
  - Protocolo Stars Nav
  - Protocolo Photo GPS
  - Compatibilidad Stars Nav Plaspy
  - Protocolo rastreador GPS
  - Rastreador con geotagging de fotos
  - Dispositivo registro GPS
  - Integración protocolo de dispositivo
  - Comunicación GPS
  - Protocolo de rastreo
---

# Stars Nav - Protocolo Photo GPS

Esta página describe el contexto público del protocolo para usar el dispositivo Stars Nav Photo GPS con la plataforma Plaspy. Se enfoca en cómo el equipo puede entregar datos de ubicación y metadatos útiles a Plaspy, y qué esperar de la capa de comunicación al integrar este modelo. La información está destinada a integradores de sistemas, administradores y usuarios técnicos que necesiten una visión clara de la relación de comunicación entre el Photo GPS y Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se configura para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones de reporte disponibles pueden variar según la versión del firmware, la revisión de hardware y la implementación del fabricante. En este caso, el Photo GPS es principalmente un registrador de almacenamiento extraíble que escribe archivos de texto, pero los escenarios de integración y las capacidades de reporte dependen de la unidad y el firmware específico.

## Visión general del protocolo

El protocolo que gobierna la comunicación entre un rastreador GPS y una plataforma de seguimiento define cómo se empaquetan y entregan la ubicación, el tiempo y el estado. Para el Stars Nav Photo GPS, el contexto público se centra en cómo los datos GPS registrados se vuelven utilizables en Plaspy, ya sea mediante reporte directo o mediante la transferencia de archivos de registro a un flujo de trabajo que importe los datos a la plataforma.

- Proporciona un método para que el dispositivo entregue información de ubicación y marca de tiempo a un sistema backend como Plaspy.
- Permite que el rastreador se identifique y entregue metadatos que Plaspy pueda asociar a un registro de dispositivo.
- Facilita la entrega de posición, velocidad, altitud y fecha/hora en un formato que Plaspy pueda parsear o importar.
- Soporta tanto escenarios de reporte en vivo como flujos de trabajo offline basados en archivos de registro exportados.
- Define las expectativas sobre los endpoints de conexión y el comportamiento de transporte cuando el dispositivo puede reportar a un servidor de red.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos para conexiones entrantes de rastreadores y determina automáticamente el manejador de protocolo correcto para los dispositivos soportados. En la mayoría de los casos, cuando un dispositivo se configura para reportar al endpoint de Plaspy, no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP correspondiente del servidor Plaspy es 54.85.159.138.
- Plaspy usa el puerto 8888 para conexiones de rastreadores; todos los dispositivos usan este mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos soportados que reportan al endpoint.
- Normalmente, los usuarios solo necesitan apuntar el dispositivo al endpoint de Plaspy y elegir el tipo de transporte apropiado si el equipo lo requiere.

## Transporte y contexto de conexión

Los ajustes de transporte y conexión describen cómo el dispositivo alcanza Plaspy y qué opciones de red puede usar. Para dispositivos que soportan reporte directo en red, el Photo GPS puede configurarse para usar transportes comunes y los valores de endpoint de Plaspy que se indican a continuación son los ajustes canónicos a utilizar.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y las opciones de configuración del equipo.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888 para mantener consistencia entre modelos.
- Seleccione UDP para un reporte ligero y sin conexión, o TCP cuando el dispositivo soporte una sesión persistente, si el firmware lo requiere.
- Verifique la opción de transporte soportada por su unidad Photo GPS antes de cambiar los ajustes de red.

## Notas sobre compatibilidad del protocolo

- El Photo GPS se describe principalmente como un registrador de almacenamiento extraíble que escribe archivos de registro en formato TEXT en una tarjeta micro SD; el comportamiento de reporte en red puede variar según la unidad y el firmware.
- Las revisiones de firmware y las variantes de hardware pueden cambiar las funciones de reporte disponibles y los transportes soportados.
- Puede ser necesario utilizar utilidades o configuraciones proporcionadas por el fabricante para habilitar el reporte en red si la unidad lo soporta.
- El uso de TCP frente a UDP puede afectar las garantías de entrega; confirme qué transporte soporta su dispositivo y si Plaspy debe esperar conexiones con estado.
- Siempre valide la compatibilidad y la configuración recomendada contra la documentación oficial de Stars Nav para su modelo y versión de firmware exactos.
- Si un dispositivo no reporta de forma nativa a un servidor, los flujos de trabajo de importación que usan los archivos de texto del dispositivo siguen siendo una vía de integración válida.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el Photo GPS ayuda a asegurar una conexión confiable con Plaspy, reduce el tiempo de configuración y aclara el mejor camino para la ingestión de datos, ya sea mediante reporte en vivo o importación de archivos.

- Ayuda a seleccionar el transporte y los ajustes de endpoint correctos para que el dispositivo llegue a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Simplifica la resolución de problemas al acotar si los problemas son de red, transporte, firmware o configuración.
- Orienta la decisión entre usar reporte en vivo o un pipeline de importación según las capacidades del dispositivo.
- Facilita mapear los campos TEXT registrados como longitud, latitud, altitud, hora, velocidad y rumbo a las estructuras de datos de Plaspy.
- Reduce retrasos en la integración al alinear expectativas con las características documentadas por el fabricante para cada versión de firmware.

## Por qué usar Plaspy con este protocolo

Integrar los datos del Stars Nav Photo GPS con Plaspy brinda a las organizaciones una vista unificada de la información de ubicación, ya llegue vía reporte en vivo o mediante importación posterior. La detección automática de protocolo de Plaspy y su modelo de endpoint consistente reducen la complejidad de configuración y facilitan poner nuevos dispositivos en línea.

Si desea explorar las opciones de integración con Plaspy o confirmar cómo puede configurarse el Photo GPS para reporte directo, conozca más sobre Plaspy en https://www.plaspy.com. Para las notas de protocolo específicas del dispositivo, actualizaciones de firmware e instrucciones de configuración más recientes, verifique la información con el fabricante en http://www.starsnav.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
