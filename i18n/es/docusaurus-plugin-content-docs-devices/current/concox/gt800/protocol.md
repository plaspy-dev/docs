---
slug: /concox/gt800/protocol
id: gt800-protocol
sidebar_label: Protocol
title: Concox - GT800 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Concox GT800 con Plaspy, incluye ajustes de conexión y notas de compatibilidad
keywords:
  - protocolo Concox GT800
  - protocolo GPS Concox GT800
  - protocolo GT800
  - protocolo de rastreo Concox GT800
  - compatibilidad Concox GT800 Plaspy
  - protocolo de comunicación GT800
  - protocolo rastreador vehicular Concox
  - protocolo rastreador GPS GT800
  - integración Concox GT800
  - protocolo rastreador GT800 Plaspy
---

# Concox - Protocolo GT800

Esta página describe el contexto público del protocolo para usar el rastreador vehicular Concox GT800 con Plaspy. Explica, a alto nivel, cómo el dispositivo se comunica con Plaspy, qué papel tiene el protocolo de reporte para un seguimiento confiable y qué verificar al configurar los equipos para que informen al servidor de Plaspy. El GT800 incluye reporte de posición GPS y AGPS, detección de estado de puertas, comunicación bidireccional y función SOS, todas dependientes del protocolo de comunicaciones para llegar a una plataforma backend.

Plaspy utiliza ajustes de conexión compartidos y detección automática de protocolo entre los dispositivos compatibles, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página se enfoca en información pública y no sensible sobre cómo el GT800 puede funcionar con Plaspy y qué puntos revisar durante la puesta en marcha y la validación.

## Visión general del protocolo

El protocolo del GT800 es el conjunto de reglas y formatos de mensajes que permiten al dispositivo reportar posición, estado y alarmas a un servicio backend como Plaspy, así como aceptar comandos remotos cuando están soportados. El protocolo regula cómo el dispositivo establece la conexión, se identifica y formatea la información que Plaspy utiliza para geolocalización, alertas e informes.

- Permite al GT800 transmitir datos de ubicación derivados de GPS y AGPS a Plaspy para visibilidad en tiempo real.
- Transporta información de estado y sensores, como eventos de puerta abierta o cerrada y alertas SOS hacia el servidor.
- Proporciona un canal para comunicación bidireccional cuando está disponible, permitiendo comandos remotos y acuses de recibo a través del mismo flujo de reporte.
- Incluye identificación del dispositivo que ayuda a Plaspy a vincular mensajes de reporte con una instancia específica del rastreador.
- Sirve como base para alarmas, latidos (heartbeats) y reportes periódicos necesarios para la monitorización y alertamiento de flotas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de dispositivos en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador usado por un equipo entrante. Cuando el GT800 está configurado para reportar al endpoint de Plaspy, por lo general usted no necesita seleccionar manualmente un protocolo dentro de Plaspy para que la conexión inicial sea reconocida.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto de escucha que usa Plaspy para dispositivos es 8888 y es el mismo para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos correctamente configurados que reportan al endpoint de Plaspy.
- Usted normalmente solo necesita asegurarse de que el GT800 apunte al endpoint de Plaspy y utilice el transporte y puerto correctos.
- Para funciones avanzadas o comportamientos específicos de firmware, consulte la documentación del dispositivo y realice un registro de prueba para confirmar el reporte.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el GT800 establece sesiones a nivel de transporte para enviar mensajes del protocolo. El GT800 puede configurarse para usar distintas opciones de transporte según el hardware y el firmware, y esa selección afecta cómo se entregan los datos a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del equipo.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo número de puerto, lo que simplifica la configuración en servidor y las reglas de firewall.
- La elección del transporte puede afectar garantías de entrega de mensajes y el comportamiento para comandos bidireccionales y acuses de recibo.
- Confirme que la configuración de transporte del GT800 coincide con la política de su red y la configuración elegida para reportes confiables.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de los mensajes, los campos disponibles u opciones que aparecen en los reportes del dispositivo.
- Las revisiones de hardware y modelos específicos por región pueden implementar variantes del protocolo o funciones opcionales de manera distinta.
- Las opciones de configuración del fabricante en el GT800 pueden habilitar o deshabilitar ciertos reportes, como el estado de puertas o la transmisión SOS.
- La selección entre TCP y UDP puede influir en cómo el dispositivo reintenta o confirma la entrega de datos a Plaspy.
- Siempre valide que el GT800 esté configurado para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888 cuando lo integre con Plaspy.
- Verifique la disponibilidad de funciones como comandos bidireccionales y el comportamiento de AGPS contra la documentación de Concox para su modelo y firmware exactos.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicaciones usado por el GT800 ayuda a garantizar una configuración fluida, un flujo de datos preciso y una resolución más eficaz de problemas cuando los dispositivos reportan a Plaspy. Tener claridad sobre el comportamiento de los reportes y las opciones de transporte reduce el tiempo de integración y mejora la fiabilidad operativa.

- Acelera la configuración inicial al alinear el endpoint y el transporte del dispositivo con los ajustes de Plaspy.
- Ayuda a diagnosticar problemas de conectividad como host, puerto o desajuste de transporte.
- Orienta sobre qué funciones del dispositivo generarán eventos y alertas en el servidor.
- Facilita decisiones informadas respecto a actualizaciones de firmware y selección de hardware para despliegues de flota.
- Mejora la planificación de seguridad y red al identificar puertos abiertos necesarios y hosts permitidos.

## Por qué usar Plaspy con este protocolo

Usar el Concox GT800 con Plaspy ofrece a las organizaciones una forma directa de centralizar datos de ubicación, estado y alarmas de vehículos en una única plataforma de monitoreo e informes. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolo reducen la cantidad de selección manual de protocolos requerida durante la incorporación, permitiendo a los equipos centrarse en la configuración operativa y las alertas.

Si desea saber más sobre cómo Plaspy maneja el reporte de dispositivos y la gestión de flotas, visite https://www.plaspy.com. Para definiciones de protocolo específicas del dispositivo, notas de firmware y orientación del fabricante más actual, verifique los detalles en el sitio de Concox https://www.iconcox.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
