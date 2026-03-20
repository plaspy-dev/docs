---
slug: /xexun/tk_102_2/protocol
id: tk_102_2-protocol
sidebar_label: Protocol
title: Xexun - TK-102-2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Xexun TK-102-2 para integración con el servidor Plaspy y ajustes de conexión compartidos
keywords:
  - Protocolo Xexun TK-102-2
  - Protocolo GPS Xexun TK102-2
  - Protocolo de rastreo TK-102-2
  - Protocolo Xexun Plaspy
  - Compatibilidad TK102-2
  - Protocolo de tracker GPS
  - Rastreo de vehículos Xexun
  - Compatibilidad de trackers Plaspy
  - Comunicación TK-102-2
  - Documentación tracker Xexun
---

# Xexun - Protocolo TK-102-2

Esta página explica en términos públicos cómo se utiliza el rastreador GPS Xexun TK-102-2 con la plataforma Plaspy. Se centra en cómo se comunica el dispositivo a nivel general, qué función cumple el protocolo de reporte en la integración y qué ajustes de conexión compartidos utiliza Plaspy para recibir los datos. Los detalles técnicos se presentan de forma general para evitar exponer internals sensibles y, al mismo tiempo, aclarar lo que importa para una configuración y operación correctas.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página describe el contexto de compatibilidad y transporte más que comandos específicos de firmware. Entre los datos públicos de conexión de Plaspy usados por muchos trackers se incluyen el dominio del servidor d.plaspy.com, la IP del servidor 54.85.159.138 y el puerto 8888.

## Visión general del protocolo

El protocolo del rastreador define las reglas que el TK-102-2 usa para enviar ubicación, estado y alertas a un servidor remoto como Plaspy. En la práctica, permite que el dispositivo se identifique, reporte coordenadas GPS y estados de eventos, y gestione alertas que se corresponden con funciones de la plataforma como geocercas y notificaciones de exceso de velocidad.

- Permite la identificación del dispositivo y su asociación con una cuenta o tenant en Plaspy
- Transporta la ubicación GPS y la información de tiempo al endpoint de Plaspy
- Lleva señales de estado y alertas del dispositivo, como movimiento, exceso de velocidad y batería baja
- Admite modos de rastreo remoto y local; el TK-102-2 también ofrece almacenamiento local mediante tarjeta SD para registro sin conexión
- Permite a Plaspy presentar datos de seguimiento accionables sin requerir selección manual del protocolo

## Cómo detecta Plaspy el protocolo

Plaspy está configurado para recibir reportes entrantes en un endpoint y puerto compartidos y puede identificar de forma automática muchos protocolos comunes de rastreadores. Esto reduce los pasos de configuración: cuando el TK-102-2 apunta al endpoint de Plaspy y está transmitiendo o conectándose con sus ajustes estándar de reporte, Plaspy intentará identificar el protocolo y procesar los datos entrantes.

- Plaspy recibe datos de dispositivos en d.plaspy.com y en la IP de servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el enrutamiento
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma
- Por lo general, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy
- La detección depende de los datos que envíe el dispositivo; el firmware y el modo de reporte pueden afectar la facilidad con la que la plataforma identifica el protocolo

## Contexto de transporte y conexión

El contexto de transporte se refiere a cómo el TK-102-2 se conecta a Plaspy más que al formato interno de los paquetes. El TK-102-2 puede configurarse para comunicarse en la red de varias maneras, y Plaspy admite estos modos de transporte comunes en su puerto compartido.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según lo que soporte el equipo y la configuración del usuario
- El endpoint del servidor Plaspy puede referenciarse por el nombre de dominio d.plaspy.com o por la IP de servidor 54.85.159.138
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que facilita las reglas de firewall y enrutamiento
- Elija TCP si requiere entrega fiable y el firmware del equipo lo soporta; UDP puede usarse para reportes en tiempo real con menor sobrecarga
- Asegúrese de que el dispositivo esté configurado para enviar reportes al endpoint y puerto de Plaspy para que pueda producirse la detección automática

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la temporización de los mensajes, los campos disponibles y las funciones opcionales; confirme siempre la versión de firmware al validar compatibilidad
- Las revisiones de hardware y las opciones de configuración local (por ejemplo, reporte por SMS frente a reporte por IP) pueden alterar la forma en que el dispositivo se comunica con los servidores
- Algunas unidades TK-102-2 soportan rastreo local o registro en tarjeta SD; esos modos no reemplazan el reporte IP a Plaspy pero pueden complementarlo para grabación fuera de línea
- La selección de transporte entre TCP y UDP puede afectar la entrega y la detección; verifique cuál transport está configurado en su dispositivo
- Ajustes del fabricante como el reporte de IMEI y la dirección del servidor deben configurarse correctamente para que Plaspy asocie los datos entrantes con el dispositivo adecuado
- Valide la compatibilidad con la documentación oficial de Xexun y los manuales específicos del dispositivo antes de desplegar a gran escala

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK-102-2 ayuda a administradores e integradores a configurar los dispositivos correctamente, diagnosticar problemas de conexión y garantizar que las alertas y funciones de seguimiento funcionen como se espera en Plaspy. Tener una noción básica del papel del protocolo y las opciones de transporte reduce el tiempo de puesta en marcha y mejora la fiabilidad operativa.

- Garantiza que el dispositivo apunte al endpoint y puerto correctos de Plaspy para la detección automática
- Ayuda a elegir el modo de transporte apropiado según las condiciones de red y las necesidades de fiabilidad
- Facilita la resolución de problemas cuando las actualizaciones de ubicación o alertas no aparecen en Plaspy
- Aclara cómo las funciones locales como el registro en tarjeta SD interactúan con el rastreo basado en servidor
- Apoya la planificación de actualizaciones de firmware y la validación de nuevas revisiones de hardware

## Por qué usar Plaspy con este protocolo

Usar el Xexun TK-102-2 con Plaspy ofrece una forma práctica de combinar un rastreador GPS capaz con una plataforma que centraliza ubicación, alertas y supervisión de dispositivos. La detección automática de protocolos y los ajustes de conexión compartidos de Plaspy reducen la carga de configuración manual, mientras que las funciones de la plataforma convierten los reportes del dispositivo en monitorización y reportes accionables para vehículos, activos o personal.

Para saber más sobre Plaspy y cómo puede utilizarse con dispositivos como el TK-102-2 visite https://www.plaspy.com. Para los detalles más recientes sobre protocolo y firmware específicos del dispositivo, consulte la documentación del fabricante en https://www.xexun.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con las fuentes oficiales.
