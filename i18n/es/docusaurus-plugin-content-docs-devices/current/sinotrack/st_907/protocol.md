---
slug: /sinotrack/st_907/protocol
id: st_907-protocol
sidebar_label: Protocol
title: SinoTrack - ST-907 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo SinoTrack ST-907 y guía para configurar el rastreador con Plaspy
keywords:
  - protocolo SinoTrack ST-907
  - protocolo GPS SinoTrack ST-907
  - compatibilidad ST-907 Plaspy
  - protocolo SinoTrack
  - configuración rastreador ST-907
  - comunicación rastreador GPS
  - informe GPRS SMS ST-907
  - dispositivos compatibles Plaspy
  - protocolo rastreo vehicular
  - rastreo de flotas SinoTrack
---

# SinoTrack - Protocolo ST-907

Esta página ofrece un resumen público del protocolo para usar el rastreador SinoTrack ST-907 con Plaspy. Explica el contexto general de comunicación, cómo el dispositivo reporta posición y alarmas, y qué revisar al configurar el equipo para que informe a Plaspy. El objetivo es cubrir información pública y no sensible para que instaladores y administradores de flotas comprendan cómo se comunica el ST-907 con una plataforma de terceros.

El ST-907 envía posición y alarmas por SMS y GPRS, y permite configurar APN, IP y puerto del servidor vía SMS. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Al preparar un despliegue, confirme siempre los detalles específicos del equipo con la documentación oficial del fabricante.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del ST-907 define cómo el rastreador se identifica, reporta datos GPS y de eventos, y acepta configuración remota cuando está permitido. Para integrar con un servidor de terceros como Plaspy, el papel clave del protocolo es entregar telemetría y mensajes de eventos utilizables por la plataforma a través del canal de datos celulares o SMS.

- Permite que el rastreador envíe ubicación, velocidad y eventos de alarma a un servidor externo para su procesamiento y visualización.
- Autoriza la configuración remota del IP y puerto del servidor, además del APN, mediante SMS para que el dispositivo apunte a la plataforma elegida.
- Provee reportes de eventos como exceso de velocidad, geocerca y acciones de inmovilizador por relay que las plataformas pueden interpretar como alarmas.
- Usa la transmisión de datos celulares por GPRS como transporte principal y SMS como canal de respaldo o para configuración.
- Incluye IMEI o un identificador de dispositivo para que la plataforma receptora asocie los mensajes entrantes con el activo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint de ingestión compartido y detecta automáticamente el protocolo del rastreador en función de las conexiones entrantes y los identificadores reportados. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el ST-907 está configurado correctamente para reportar a la plataforma.

- Plaspy acepta conexiones en el dominio público d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos de rastreadores.
- El puerto de Plaspy para reportes de dispositivos es el 8888 y el equipo puede configurarse para usar UDP o TCP en ese puerto.
- Cuando el ST-907 apunta al endpoint de Plaspy con la configuración correcta de APN y servidor, Plaspy detecta el protocolo de forma automática.
- La configuración típica suele requerir únicamente apuntar el rastreador a Plaspy, sin necesidad de seleccionar el protocolo en la interfaz de la plataforma.

## Transporte y contexto de conexión

El ST-907 puede usar GPRS o SMS según la configuración y la disponibilidad. Para rastreo en tiempo real, el dispositivo comúnmente usa GPRS para enviar reportes a un servidor configurado; el SMS es útil para la configuración inicial y como respaldo para alertas críticas.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- El equipo puede usar transporte UDP o TCP para comunicarse con Plaspy en el puerto 8888 según la configuración del dispositivo y las condiciones de red.
- Plaspy utiliza el mismo puerto para todos los rastreadores soportados, lo que reduce la complejidad de la configuración por dispositivo.
- El reporte por GPRS es el método principal para telemetría en tiempo real, mientras que SMS puede emplearse para inicialización y notificaciones de emergencia.
- Verifique los ajustes de APN, usuario y contraseña en la SIM para que el rastreador se registre en la red del operador y alcance a Plaspy.

## Notas sobre compatibilidad del protocolo

- La compatibilidad del ST-907 con Plaspy depende de configurar el rastreador para enviar datos a la IP o dominio del servidor de Plaspy y al puerto correcto.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la temporización de mensajes, los eventos disponibles o el formato de los comandos de configuración.
- Es posible que los servidores por defecto del fabricante o plataformas gratuitas vengan habilitados; cambie la IP y el puerto del servidor por SMS para apuntar el ST-907 a Plaspy.
- La elección del transporte (TCP vs UDP) puede ser seleccionable en el dispositivo y afectar el comportamiento en distintos entornos de red.
- Los comandos de configuración vía SMS se usan comúnmente para establecer APN y parámetros de servidor en el ST-907 antes del reporte por GPRS.
- Valide siempre el comportamiento del dispositivo después de la configuración y confirme que el rastreador sea visible en Plaspy antes de realizar el despliegue completo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a lograr una configuración exitosa, reportes previsibles y entrega fiable de alarmas al usar el ST-907 con Plaspy. Tener claro el contexto del protocolo reduce tiempos de diagnóstico y mejora la confiabilidad operativa a largo plazo.

- Facilita identificar si los problemas de conexión se deben al APN, la selección del transporte o la dirección del servidor.
- Permite seguir pasos de inicialización correctos, como comandos SMS para configurar APN e IP y puerto del servidor para reportes a Plaspy.
- Ayuda a interpretar el comportamiento de las alarmas y asegurar que eventos como geocerca y exceso de velocidad se reenvíen según lo esperado.
- Apoya la selección del tipo de transporte y del plan de SIM adecuados para cobertura y confiabilidad de datos.
- Reduce demoras en el despliegue al clarificar qué comportamientos son del dispositivo y cuáles de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack ST-907 con Plaspy ofrece un camino sencillo hacia visibilidad en tiempo real, alertas y monitoreo operativo de vehículos. El reporte por GPRS y la configuración por SMS del ST-907 facilitan apuntar los dispositivos a un endpoint compartido de Plaspy y comenzar a recibir datos de ubicación y alarmas sin cambiar puertos por equipo.

Para conocer más sobre Plaspy y cómo la plataforma gestiona la ingestión de rastreadores y la administración de dispositivos visite https://www.plaspy.com. Para los comandos de protocolo específicos más actuales, notas de firmware y la sintaxis de inicialización por SMS consulte la documentación del fabricante en https://www.sinotrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
