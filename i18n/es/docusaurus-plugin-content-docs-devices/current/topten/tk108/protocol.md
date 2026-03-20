---
slug: /topten/tk108/protocol
id: tk108-protocol
sidebar_label: Protocol
title: TopTen - TK108 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador TopTen TK108 con Plaspy y guía de compatibilidad
keywords:
  - Protocolo TopTen TK108
  - TopTen TK108 GPS
  - Protocolo de comunicación TK108
  - Compatibilidad TK108 Plaspy
  - Protocolo del rastreador TopTen
  - Protocolo de seguimiento TK108
  - Protocolo GPS para vehículos
  - Compatibilidad rastreador GPS Plaspy
  - Rastreo de flotas TK108
  - Guía del protocolo TopTen TK108
---

# TopTen - Protocolo TK108

Esta página ofrece un panorama público del protocolo para integrar el rastreador GPS de vehículo TopTen TK108 con Plaspy. Explica, en términos prácticos y generales, cómo el TK108 informa posición, alertas y telemetría a Plaspy, sin exponer detalles internos de firmware ni parsers privados. El objetivo es que gerentes de flotas, integradores y usuarios técnicos comprendan cómo se comunica el dispositivo con Plaspy de forma útil y aplicable.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se configura para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo de reporte del TK108 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que algunas funciones del equipo, como el control por SMS de armado/desarmado, alertas de encendido/apagado del motor, señal SOS, entrada analógica de combustible y registro offline, pueden comportarse de forma diferente entre unidades.

## Resumen del protocolo

El protocolo de comunicación del TK108 es el mecanismo mediante el cual el rastreador envía ubicación, estado y alertas a un servidor remoto y recibe, cuando lo permite el dispositivo, comandos de configuración o control. Para la integración con Plaspy, el protocolo permite que el rastreador se identifique ante el servidor, transmita datos GPS y telemetría, y envíe notificaciones de eventos que Plaspy utiliza para monitoreo y alertas.

- Transmite posiciones GPS y marcas de tiempo a un endpoint de reporte para que las ubicaciones aparezcan en Plaspy
- Envía notificaciones de eventos como encendido/apagado del motor, alertas de pérdida de alimentación y alarmas SOS que se mapean a tipos de evento en Plaspy
- Permite la entrega de telemetría auxiliar como monitoreo analógico de combustible y estados básicos de sensores
- Soporta almacenamiento y posterior subida de waypoints offline desde el registrador de datos del TK108 cuando vuelve la conectividad
- Transporta información de identidad del dispositivo para que Plaspy asocie los mensajes entrantes con el registro correcto del rastreador

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido y determina automáticamente el protocolo del rastreador para el tráfico entrante. Cuando un TK108 se configura para reportar al endpoint de Plaspy, la plataforma asociará los mensajes de ese dispositivo con el registro correspondiente sin que sea necesaria una selección manual del protocolo.

- Plaspy acepta tráfico de rastreadores enviado a d.plaspy.com o a la dirección de servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto para mantener una configuración consistente entre modelos de rastreadores
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario elegir un protocolo dentro de la plataforma cuando el dispositivo apunta al endpoint de Plaspy
- Es importante que el TK108 tenga configurada correctamente la ID del dispositivo y los parámetros de reporte para que Plaspy pueda relacionar los datos entrantes con el rastreador adecuado

## Transporte y contexto de conexión

La capa de transporte y el endpoint del servidor son los detalles principales de conexión necesarios para entregar los reportes del TK108 a Plaspy. Dependiendo de la configuración del rastreador, el TK108 puede enviar mensajes por UDP o TCP al listener de Plaspy en el puerto compartido.

- El equipo puede configurarse para enviar datos mediante UDP o TCP en el puerto 8888
- El rastreador puede apuntar al servidor de Plaspy por nombre de dominio d.plaspy.com o por la dirección IP 54.85.159.138
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados para simplificar la configuración
- La elección entre UDP y TCP puede afectar las garantías de entrega y el comportamiento de reintento según el firmware del rastreador
- Asegúrese de que el APN, la opción de fallback por SMS y el registro en la red estén correctamente configurados en el TK108 para que disponga de conectividad celular y pueda alcanzar el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Funciones del TK108 como armado/desarmado por SMS, control por llamada, alarma SOS y entrada analógica de combustible pueden depender de la versión de firmware y la revisión de hardware
- Diferentes lotes de TK108 o versiones de firmware pueden implementar campos de reporte o nombres de eventos con pequeñas variaciones
- La selección de transporte entre UDP y TCP debe coincidir con lo que el firmware del dispositivo soporta y con la configuración aplicada en la unidad
- El comportamiento del registro offline del datalogger del TK108 puede variar en capacidad y tiempos de subida según el firmware
- Verifique las cadenas de identidad del dispositivo y los intervalos de reporte para asegurar que Plaspy asocie los datos correctamente
- Para comandos o comportamientos específicos del equipo, confirme los detalles con la documentación del fabricante

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TK108 ayuda a asegurar una configuración exitosa, reportes confiables y una resolución de problemas más clara al integrar con Plaspy. Saber cómo el rastreador informa posición y eventos facilita validar la operación correcta y diagnosticar problemas relacionados con conectividad, configuración o firmware.

- Garantiza la configuración correcta del dispositivo para que los reportes lleguen a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Ayuda a correlacionar los eventos esperados del dispositivo, como encendido/apagado del motor y SOS, con el manejo de eventos de Plaspy
- Facilita la resolución de problemas de conectividad verificando la selección UDP o TCP y los ajustes APN
- Permite planificar el comportamiento de registro offline y la posterior subida de datos desde el datalogger del TK108
- Reduce el tiempo de configuración al confirmar que el rastreador está apuntando al puerto y endpoint compartidos de Plaspy

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el TopTen TK108 ofrece una forma práctica de consolidar reportes de ubicación, eventos y telemetría para flotas de vehículos. Plaspy consume el feed de reporte del TK108 y convierte las actualizaciones de posición, alertas de energía y motor, señales SOS y datos de monitoreo de combustible en información accionable para operaciones, seguridad y mantenimiento. Esta combinación resulta útil para organizaciones que necesitan visibilidad continua, alertas oportunas y registros históricos de movimientos.

Si desea aprender más sobre cómo Plaspy funciona con rastreadores de vehículos como el TopTen TK108 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; confirme la información más reciente específica del dispositivo con el fabricante en http://www.t10.cn.
