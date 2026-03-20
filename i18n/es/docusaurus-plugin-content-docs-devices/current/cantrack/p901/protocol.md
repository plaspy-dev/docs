---
slug: /cantrack/p901/protocol
id: p901-protocol
sidebar_label: Protocol
title: CanTrack - P901 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo CanTrack P901 para integración con Plaspy y guía de conexión
keywords:
  - Protocolo CanTrack P901
  - Protocolo GPS CanTrack P901
  - Protocolo de comunicación P901
  - Protocolo de rastreo P901
  - Protocolo CanTrack Plaspy
  - Compatibilidad dispositivo P901 Plaspy
  - Protocolo P901 LTE GPS
  - Protocolo rastreador tipo credencial
  - Protocolo SOS PTT P901
  - Integración CanTrack P901
---

# CanTrack - Protocolo P901

Esta página describe el contexto público del protocolo para usar el CanTrack P901 con Plaspy. Se centra en cómo el dispositivo reporta ubicación, eventos y telemetría al cloud de Plaspy y qué aspectos de la comunicación del rastreador son relevantes para una integración exitosa. El P901 es un rastreador ultradelgado en formato tarjeta de identificación que ofrece posicionamiento GNSS (GPS y Beidou), retroceso por LBS, alarmas SOS y funciones de voz integradas que se combinan con Plaspy para conciencia situacional en tiempo real.

Plaspy utiliza ajustes de conexión compartidos para los rastreadores compatibles y detecta automáticamente el protocolo cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página explica el contexto público y no sensible del protocolo sin exponer detalles internos. Para comandos específicos del dispositivo o formatos binarios consulte la documentación oficial de CanTrack.

## Visión general del protocolo

El P901 se comunica con plataformas backend como Plaspy usando su protocolo de reporte para enviar ubicación, estado e información de alertas. El rol público del protocolo es permitir que el dispositivo se identifique, transmita telemetría útil e indique estados de eventos para que Plaspy pueda mostrar ubicación y alertas en tiempo real.

- Transmite coordenadas GNSS y retroceso por LBS para que Plaspy coloque los dispositivos en mapas y registre recorridos.
- Envía notificaciones de eventos como SOS, batería baja y cambios de estado para activar alertas y flujos de trabajo en Plaspy.
- Proporciona campos de telemetría utilizados para el estado del dispositivo, nivel de batería y conectividad, que Plaspy presenta a los operadores.
- Permite disparadores de configuración remota e inicio de FOTA gestionados desde Plaspy o mediante flujos SMS coordinados con el fabricante.
- Soporta funciones de voz y PTT en el dispositivo cuya ubicación y contexto de evento se reportan a Plaspy para correlacionarse con las comunicaciones.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de dispositivos en un único endpoint y puerto compartido y aplica detección automática de protocolo para los rastreadores compatibles. Cuando un P901 u otro rastreador compatible está configurado para reportar a Plaspy, la plataforma identifica el protocolo del dispositivo y encamina los datos al pipeline de procesamiento correcto sin que el usuario tenga que seleccionar el protocolo manualmente.

- El dominio público del servidor de Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La dirección IP del servidor de Plaspy es 54.85.159.138 para configuración por IP directa cuando no se usa DNS.
- Plaspy escucha en el puerto 8888 para tráfico de dispositivos y utiliza este puerto para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo dentro de la plataforma si el dispositivo reporta correctamente.
- Los dispositivos configurados para enviar actualizaciones de posición y eventos al endpoint de Plaspy serán procesados y mostrados en la plataforma una vez que la conectividad de red y la configuración sean correctas.

## Transporte y contexto de conexión

El P901 puede reportar a plataformas cloud mediante datos celulares y admite opciones de transporte estándar comúnmente usadas por dispositivos de flotas. En implementaciones con Plaspy el contexto de conexión se simplifica usando el endpoint compartido de Plaspy y el mismo puerto entre dispositivos, lo que ayuda a centralizar la configuración y reduce la complejidad por dispositivo.

- Los dispositivos pueden configurarse para usar transporte UDP o TCP hacia Plaspy según el soporte del equipo y la configuración elegida.
- El endpoint común d.plaspy.com puede ser utilizado por los equipos para reporte basado en DNS.
- Para despliegues que requieran direccionamiento directo, la IP del servidor 54.85.159.138 está disponible como destino alternativo.
- Todos los dispositivos en Plaspy usan el mismo puerto, el puerto 8888, lo que simplifica el aprovisionamiento y las reglas de firewall.
- Elija UDP cuando prefiera menor overhead y reportes por datagrama simples, o TCP cuando el dispositivo o la red requieran un transporte conectado.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes y los campos disponibles; siempre verifique la revisión de firmware del P901 al evaluar compatibilidad.
- Revisiones de hardware o diferencias regionales de SKU pueden afectar las bandas GNSS disponibles, la capacidad de voz o el soporte de transporte.
- Opciones de configuración por parte del fabricante, como conjuntos de comandos SMS o requisitos de APN, pueden influir en que el dispositivo reporte correctamente a Plaspy.
- La selección de transporte (UDP vs TCP) debe coincidir con la configuración del equipo; un transporte incorrecto impide la entrega de datos a Plaspy.
- Funciones en el dispositivo como VoLTE y PTT grupal se gestionan localmente en la unidad; Plaspy consume el contexto posicional y de eventos en lugar de manejar los flujos de voz.
- Valide los pasos de integración con la documentación oficial de CanTrack y las notas de versión para confirmar el comportamiento del protocolo en su lote específico de P901.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del P901 y el contexto de conexión ayuda a garantizar reportes confiables, alertas precisas y facilita la resolución de problemas durante el despliegue y la operación continua con Plaspy. Tener claro cómo el dispositivo se comunica con la nube reduce el tiempo de puesta en marcha y permite a los equipos responder más rápido a problemas de conectividad o calidad de datos.

- Asegura que la configuración del dispositivo apunte al host y puerto correctos de Plaspy para que los datos se reciban de manera consistente.
- Facilita el diagnóstico de problemas de transporte confirmando si se está usando UDP o TCP y que el puerto 8888 sea accesible.
- Orienta la planificación de actualizaciones de firmware y funciones al aclarar qué campos y eventos enviará el dispositivo a Plaspy.
- Mejora el ajuste de alertas y el mapeo de flujos de trabajo al identificar cómo se representan en los datos entrantes los eventos SOS y otros.
- Ayuda a optimizar la batería y los intervalos de reporte al entender cómo la frecuencia de telemetría afecta la conectividad y el consumo energético.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el CanTrack P901 brinda a las organizaciones un dispositivo compacto capaz de reportes GNSS más LBS, alertas SOS y funciones de voz en el equipo, aprovechando al mismo tiempo el mapeo en tiempo real, el historial y las capacidades de alertas de Plaspy. La combinación es útil para equipos de seguridad, personal en eventos, protección de trabajadores solitarios y otros escenarios donde el factor de forma tipo wearable y la conciencia situacional inmediata son críticos.

Para empezar, configure su P901 para reportar al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 y asegúrese de que el dispositivo use el puerto 8888 con el modo de transporte que soporte la unidad. Plaspy detectará automáticamente el protocolo del rastreador y procesará los datos de ubicación y eventos entrantes para que usted pueda monitorear activos sin seleccionar un protocolo manualmente dentro de la plataforma.

Learn more about Plaspy and how it works with trackers like the P901 at https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration commands verify current information on the manufacturer site https://www.cantrackgps.com/.
