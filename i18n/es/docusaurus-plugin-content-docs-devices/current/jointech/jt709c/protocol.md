---
slug: /jointech/jt709c/protocol
id: jt709c-protocol
sidebar_label: Protocol
title: Jointech - JT709C Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Jointech JT709C y cómo comunica telemetría y eventos a Plaspy para seguimiento de activos
keywords:
  - protocolo Jointech JT709C
  - protocolo GPS JT709C
  - protocolo rastreador GPS Jointech
  - compatibilidad JT709C Plaspy
  - protocolo de comunicación JT709C
  - protocolo de rastreo JT709C
  - rastreo de sello electrónico
  - protocolo rastreador con BLE
  - protocolo de seguimiento de activos
  - protocolo de seguimiento de flotas
---

# Jointech - Protocolo JT709C

Esta página resume el contexto público del protocolo para usar el Jointech JT709C con Plaspy. Se centra en cómo el dispositivo transmite telemetría útil y eventos de acceso a un endpoint de gestión de flotas, más que en detalles privados del fabricante. El objetivo es ayudar a operadores e integradores a comprender el papel del protocolo de reporte del JT709C al integrar dispositivos en Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza contexto público, no sensible, y consideraciones prácticas de compatibilidad.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de mensajes y convenciones de transporte que usa el JT709C para entregar ubicación, estado y eventos a Plaspy. En términos generales, el protocolo permite que el rastreador se identifique ante la plataforma, transmita registros de posición y eventos, y que el servidor interprete esos registros como telemetría utilizable y eventos de auditoría.

- Transmitir identidad del dispositivo y telemetría con marca de tiempo para que Plaspy asocie los registros al activo correcto.
- Reportar actualizaciones de ubicación e historial de movimiento para visibilidad en tiempo real en mapas y paneles.
- Enviar eventos de acceso y desbloqueo desde el JT709C para que Plaspy construya una historia de desbloqueos auditable.
- Comunicar indicadores de estado como batería y condiciones de manipulación que Plaspy presenta como alertas.
- Permitir que el dispositivo establezca una sesión de transporte fiable con el endpoint de Plaspy para reportes continuos.

## Detección del protocolo por parte de Plaspy

Plaspy escucha en un único endpoint y puerto compartido para los reportes entrantes de rastreadores y aplica detección automática para determinar el protocolo del dispositivo. Cuando un JT709C está configurado para reportar a Plaspy, la plataforma normalmente reconoce el tipo de dispositivo a partir de los mensajes entrantes, por lo que rara vez es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Configure el JT709C para reportar al servidor de Plaspy en d.plaspy.com o a la IP equivalente 54.85.159.138.
- Use el puerto 8888 como puerto de reporte; Plaspy emplea el mismo puerto para todos los dispositivos compatibles.
- Los dispositivos pueden enviar por UDP o TCP según la configuración local y las capacidades del equipo.
- Una vez que comienzan los reportes, Plaspy inspecciona los mensajes entrantes y asocia automáticamente la fuente con un protocolo y registro de dispositivo compatibles.
- En la mayoría de las implementaciones, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente apuntado al endpoint de Plaspy.

## Transporte y contexto de conexión

El contexto de transporte abarca cómo el JT709C entrega sus mensajes a Plaspy. El dispositivo puede usar UDP o TCP en el puerto 8888 dependiendo de la configuración del modelo y la red. Apuntar el dispositivo al dominio de Plaspy o a la IP pública es una forma habitual de garantizar la alcanzabilidad del servidor.

- Señale el servidor de reporte del JT709C a d.plaspy.com o alternativamente a 54.85.159.138.
- Use el puerto 8888 para reportes; todos los dispositivos en Plaspy usan este mismo puerto para la telemetría entrante.
- El JT709C puede configurarse para usar UDP o TCP en el puerto 8888, según la configuración del equipo y los requerimientos de la red.
- Confirme que los firewalls locales y los proveedores de datos móviles permitan conexiones salientes al endpoint de Plaspy en el puerto 8888.
- Verifique el registro de red del dispositivo y que el rastreador tenga cobertura GNSS y celular fiable para reportes consistentes.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos de evento disponibles y las banderas opcionales; siempre anote la versión de firmware al validar el comportamiento.
- Las revisiones de hardware y los conjuntos de funciones opcionales (por ejemplo capacidad de desbloqueo por BLE) pueden afectar qué eventos se generan localmente y se envían al servidor.
- La elección del transporte (UDP frente a TCP) puede alterar la semántica de entrega y debe seleccionarse según la fiabilidad de la red y el soporte del dispositivo.
- El desbloqueo por BLE y la autorización local son funciones del lado del dispositivo; su presencia influye en los eventos que el dispositivo produce, pero no en el mecanismo de transporte externo.
- Plaspy detecta automáticamente los protocolos entrantes, pero es buena práctica confirmar que el dispositivo esté correctamente apuntado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Valide siempre la compatibilidad y los comportamientos específicos del dispositivo contra la documentación del fabricante para el modelo y firmware exactos.

## Por qué es importante entender el protocolo

Comprender claramente el protocolo de comunicación del JT709C ayuda a asegurar una configuración fluida, facilita la resolución de problemas y garantiza una operación confiable a largo plazo dentro de Plaspy. Saber qué reporta el dispositivo y cómo llega al servidor reduce el tiempo de diagnóstico y mejora la fiabilidad operativa.

- Confirme las configuraciones de transporte y servidor para que la telemetría y los eventos de desbloqueo lleguen sin necesidad de seleccionar el protocolo manualmente.
- Diagnostique datos faltantes o temporizaciones de eventos inesperadas verificando la versión de firmware y la configuración de reportes del equipo.
- Relacione eventos del dispositivo como registros de desbloqueo y notificaciones de manipulación con los tipos de eventos de Plaspy para alertas precisas y trazabilidad.
- Planee actualizaciones de firmware y eventos del ciclo de vida del hardware que puedan cambiar el contenido de los mensajes o la configuración requerida.
- Coordine con el soporte de Jointech cuando el comportamiento del dispositivo no coincida con los patrones de reporte documentados.

## Por qué usar Plaspy con este protocolo

Usar el JT709C con Plaspy ofrece visibilidad consolidada de ubicaciones y eventos de acceso en una sola plataforma de gestión de flotas. Para logística, supervisión aduanera, transporte de valores y sellado de almacenes, la combinación de trazabilidad del JT709C y los paneles de Plaspy ayuda a los equipos operativos a vigilar la seguridad de los activos y responder rápidamente a excepciones.

El modelo de endpoint compartido de Plaspy simplifica la incorporación de dispositivos: apunte los JT709C a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP, y Plaspy detectará automáticamente el protocolo del rastreador e iniciará la ingestión de telemetría y eventos de desbloqueo. Para más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y orientación de implementación consulte los recursos oficiales de Jointech en https://www.jointcontrols.com/. El soporte de protocolos y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la documentación más reciente del fabricante.
