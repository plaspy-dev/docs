---
slug: /sinotrack/st_903/protocol
id: st_903-protocol
sidebar_label: Protocol
title: SinoTrack - ST-903 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo SinoTrack ST-903 para integrarlo con servidores Plaspy y notas de compatibilidad
keywords:
  - Protocolo SinoTrack ST-903
  - Protocolo GPS SinoTrack ST-903
  - Protocolo de rastreo ST-903
  - Compatibilidad ST-903 Plaspy
  - Protocolo de rastreador GPS SinoTrack
  - Configuración GPRS SMS ST-903
  - Integración SinoTrack ST-903
  - Compatibilidad de dispositivos Plaspy
  - Guía de protocolo de rastreador GPS
  - Rastreo de pequeños activos ST-903
---

# SinoTrack - Protocolo ST-903

Esta página describe el contexto del protocolo público para usar el SinoTrack ST-903 con Plaspy. Se enfoca en cómo el dispositivo puede configurarse para reportar ubicación y estados a los servidores de Plaspy y qué esperar de esa comunicación en términos generales y no sensibles. El ST-903 es un rastreador GPS ultra compacto pensado para seguimiento discreto de personas y pequeños activos, y se puede apuntar a un servidor de terceros mediante configuración por SMS.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste comienza a reportar a la plataforma. El comportamiento exacto de los mensajes y la cadencia de reportes pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que el comportamiento que usted observe puede diferir según el firmware y los ajustes SMS en el ST-903.

## Visión general del protocolo

El protocolo de reporte del rastreador es el conjunto de reglas que el ST-903 usa para enviar posición, estado y datos de alarma a un servidor, de modo que Plaspy pueda recibir y presentar telemetría útil. En el caso del ST-903, esto normalmente implica que el dispositivo envía actualizaciones de ubicación y eventos a través de un enlace de datos celular al endpoint de Plaspy configurado mediante comandos SMS.

- Permite que el ST-903 transmita coordenadas GPS y telemetría básica a un servidor remoto para su ingestión por Plaspy.
- Incluye identidad del dispositivo e información de estado para que Plaspy pueda atribuir mensajes a la unidad correcta y registrar historial.
- Entrega notificaciones de alarmas y eventos, como alertas de geovalla o movimiento, que Plaspy puede presentar como notificaciones.
- Soporta configuración y fallback vía SMS, de modo que el dispositivo pueda redirigirse a Plaspy sin cambios de firmware.
- Determina la frecuencia de actualizaciones y el contenido del payload, lo que afecta la duración de la batería y la granularidad del rastreo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de muchos modelos de rastreadores en un endpoint de reporte común y determina el protocolo del dispositivo a partir de las características de la conexión y los mensajes entrantes. Dado que Plaspy detecta el protocolo automáticamente, la mayoría de usuarios no necesitan seleccionar un protocolo manualmente en la plataforma cuando el ST-903 está configurado para reportar a Plaspy.

- Plaspy escucha en un endpoint compartido los reportes de dispositivos y reconoce automáticamente el flujo de mensajes del ST-903.
- El dominio del servidor aceptado para reportes es d.plaspy.com y también puede alcanzarse por IP en 54.85.159.138.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y el onboarding.
- Si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy, por lo general no será necesaria la selección manual del protocolo en la plataforma.
- La detección automática permite que Plaspy coincida los datos entrantes con tipos de dispositivos conocidos y aplique el manejo adecuado para registro y visualización.

## Transporte y configuración de conexión

El transporte de conexión y la configuración del endpoint determinan cómo el ST-903 alcanza a Plaspy. El ST-903 soporta reportes por datos celulares y puede ser apuntado al endpoint de la red de Plaspy mediante comandos SMS y ajustes de APN.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, dependiendo del soporte del dispositivo y de la configuración del usuario.
- Plaspy acepta reportes dirigidos a d.plaspy.com y el mismo endpoint puede indicarse por IP en 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, que es 8888, reduciendo las diferencias de configuración entre modelos.
- La elección de transporte (UDP vs TCP) puede afectar el comportamiento de entrega y debe coincidir con la configuración que usted establezca por SMS en el ST-903.
- Asegúrese de que el APN y la dirección del servidor estén correctamente configurados en el dispositivo para que el reporte GPRS llegue al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware y los lotes de hardware del ST-903 pueden cambiar qué mensajes se envían o qué funciones están disponibles, por lo que el firmware influye en el comportamiento exacto.
- Los comandos SMS de configuración del fabricante son la forma habitual de apuntar el ST-903 a Plaspy; los ejemplos en la documentación del dispositivo incluyen comandos para establecer IP del servidor y APN.
- Seleccionar UDP o TCP en el dispositivo debe coincidir con la capacidad del equipo y el comportamiento de entrega deseado; Plaspy acepta ambos en el puerto 8888.
- Algunas funciones del ST-903, como enlaces SMS a Google Maps, control por SMS o comportamientos de fallback, pueden ser características del proveedor fuera del alcance de Plaspy y variar según el firmware.
- Valide la compatibilidad del dispositivo y la sintaxis de los comandos contra la documentación oficial de SinoTrack para su versión de firmware antes de despliegues a gran escala.
- Factores de red como la disponibilidad de bandas GSM y una SIM compatible con GPRS afectan la conectividad y son independientes del análisis del protocolo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a administradores e integradores a configurar el ST-903 para reportes confiables a Plaspy y a resolver problemas de conectividad, manejo de eventos y consumo de batería.

- Asegura que la dirección del servidor y el APN estén configurados correctamente para que los mensajes lleguen a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a elegir el modo de transporte apropiado (UDP vs TCP) y los intervalos de reporte para equilibrar visibilidad en tiempo real y duración de batería.
- Aclara qué eventos y alarmas transmitirá el dispositivo para que Plaspy pueda configurarse y mostrar alertas significativas.
- Facilita el diagnóstico de reportes intermitentes verificando ajustes SMS, capacidad de datos de la SIM y comportamiento del firmware.
- Favorece un historial y reproducción de rutas predecibles confirmando con qué frecuencia y bajo qué condiciones el ST-903 registra y envía posiciones.

## Por qué usar Plaspy con este protocolo

Combinar el ST-903 con Plaspy ofrece a casos de uso de rastreo de pequeños activos y personas un endpoint de servidor sencillo y un manejo unificado de datos de posición y alarmas. Los ajustes de servidor configurables por SMS del ST-903 facilitan redirigir los reportes del dispositivo a Plaspy sin modificar hardware, y la detección automática de protocolos de Plaspy reduce pasos de configuración en la plataforma.

Si desea conocer más sobre cómo Plaspy maneja los reportes de dispositivos y las funcionalidades disponibles para visibilidad, monitoreo y alertas, visite https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware y la sintaxis de configuración por SMS más actual, consulte al fabricante en https://www.sinotrackgps.com/ ya que el soporte del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
