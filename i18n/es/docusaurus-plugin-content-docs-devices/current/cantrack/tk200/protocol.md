---
slug: /cantrack/tk200/protocol
id: tk200-protocol
sidebar_label: Protocol
title: CanTrack - TK200 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo TK200 de CanTrack y su compatibilidad con ajustes y conexión al servidor de Plaspy
keywords:
  - Protocolo CanTrack TK200
  - GPS CanTrack TK200
  - Protocolo TK200 Plaspy
  - Protocolo de comunicación TK200
  - Protocolo rastreador GPS CanTrack
  - Protocolo de seguimiento TK200
  - Rastreo vehicular TK200
  - Compatibilidad dispositivo Plaspy
  - Protocolo GPRS GPS TK200
  - Integración rastreador CanTrack
---

# CanTrack - Protocolo TK200

Esta página ofrece una descripción pública y no sensible del protocolo del rastreador GPS CanTrack TK200 para su uso con Plaspy. Explica cómo suele comunicarse el equipo por datos móviles y cómo esos mensajes se relacionan con la plataforma Plaspy, sin revelar detalles privados de parsers o implementaciones internas del fabricante.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto, los tipos de reportes disponibles y el manejo de comandos para el TK200 pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en el contexto de transporte y protocolo a alto nivel, útil para integración y solución de problemas.

## Visión general del protocolo

A grandes rasgos, el TK200 emplea datos celulares y GPS para generar reportes de ubicación y estado que pueden enviarse a un servidor remoto. El dispositivo soporta funciones estándar de rastreo como reportes periódicos de posición, alarmas y monitoreo remoto; esos reportes son los que Plaspy procesa para ofrecer ubicación, historial y alertas.

- El protocolo define cómo el equipo empaqueta la información de GPS, señal GSM y estados para su envío a un servidor.
- Los mensajes de reporte permiten que Plaspy asigne los datos entrantes a la ubicación del vehículo, alarmas y campos de telemetría.
- Los campos de identificación en los mensajes del rastreador permiten a Plaspy asociar una secuencia de reportes con un dispositivo específico.
- Las opciones de transporte determinan el comportamiento de entrega y la fiabilidad al reenviar datos a Plaspy.
- Los reportes de alarmas y eventos en el protocolo del rastreador habilitan notificaciones en tiempo real y flujos de trabajo de geocercas en Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador que envía datos a ese endpoint. En la mayoría de los casos, un TK200 configurado correctamente no requerirá selección manual del protocolo dentro de Plaspy; la plataforma asigna automáticamente el flujo del dispositivo al parser y registro de dispositivo apropiados.

- Plaspy acepta conexiones en d.plaspy.com y también en la IP pública 54.85.159.138.
- La plataforma utiliza el puerto 8888 para el tráfico entrante de rastreadores; el mismo puerto se emplea para todos los dispositivos soportados.
- Los equipos pueden configurarse para usar transporte UDP o TCP apuntando al endpoint de Plaspy en el puerto 8888.
- La detección automática elimina la necesidad de que los usuarios seleccionen un protocolo en muchas configuraciones típicas cuando el dispositivo está dirigido al endpoint de Plaspy.
- Si un dispositivo no aparece, una verificación inicial común es confirmar que el rastreador esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Contexto de transporte y conexión

Los ajustes de conexión y transporte determinan con qué fiabilidad llegan los mensajes del rastreador a Plaspy y qué comportamiento de red se debe esperar. El TK200 admite reportes sobre GSM GPRS y puede configurarse para enviar datos vía TCP o UDP; la elección de transporte depende de las condiciones de la red y de las características de entrega esperadas.

- El TK200 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todo el tráfico de dispositivos; todos los equipos usan este mismo puerto en Plaspy.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según las capacidades del equipo y las opciones de configuración.
- TCP ofrece entrega orientada a conexión mientras que UDP puede implicar menor sobrecarga; la configuración del rastreador determina cuál se usa.
- Verifique que el APN y los ajustes GPRS de la SIM sean correctos para que el TK200 establezca sesiones de datos y alcance el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el contenido de los mensajes, los tipos de reporte disponibles y el comportamiento de comandos; revise la versión de firmware del TK200 cuando diagnostique diferencias.
- Las revisiones de hardware o las variantes del modelo TK200 pueden implementar opciones de reporte o conjuntos de funciones ligeramente distintos.
- Las configuraciones por defecto del fabricante pueden hacer que el dispositivo envíe reportes por SMS o a otra dirección de servidor si no se apunta explícitamente al endpoint de Plaspy.
- La selección de transporte (UDP vs TCP) afecta la entrega y debe coincidir con la configuración del equipo y el entorno de red.
- Verifique que la identificación que envía el rastreador coincida con el valor esperado en el registro de dispositivo de Plaspy para asegurar que los reportes se asocien correctamente.
- Siempre valide la compatibilidad con la documentación más reciente del fabricante para notas específicas del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar un rastreo confiable, agilizar la resolución de problemas y mapear correctamente los datos del rastreador en Plaspy. Incluso el conocimiento a alto nivel sobre cómo y cuándo reporta el equipo mejora la configuración y la operación de flotas o despliegues personales.

- Confirma que el dispositivo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888 y usa un transporte adecuado.
- Ayuda a interpretar comportamientos del equipo como reportes periódicos, activaciones de alarma y eventos de monitoreo remoto.
- Orienta las decisiones de configuración de APN, transporte y dirección de servidor para que los datos lleguen consistentemente a Plaspy.
- Reduce el tiempo de diagnóstico al acotar los problemas a la red, al transporte o a diferencias de firmware en lugar de a la configuración de la plataforma.
- Favorece la planificación de fiabilidad a largo plazo al aclarar cómo las actualizaciones de firmware o las variantes de dispositivos pueden afectar los reportes.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack TK200 con Plaspy ofrece una forma directa de integrar ubicación GPS, alarmas y telemetría en una única plataforma de gestión de flotas o activos. Las organizaciones obtienen visibilidad en tiempo real, seguimiento histórico y alertas basadas en eventos, mientras confían en Plaspy para gestionar el endpoint común y la detección de protocolo para muchos tipos de dispositivos.

Si desea conocer más sobre cómo Plaspy trabaja con rastreadores como el TK200 y revisar opciones de despliegue, visite https://www.plaspy.com. Para obtener detalles protocolarios específicos del dispositivo y firmware, guías de configuración y especificaciones técnicas más actuales, consulte la documentación del fabricante en https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
