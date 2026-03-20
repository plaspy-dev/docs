---
slug: /concox/pg201/protocol
id: pg201-protocol
sidebar_label: Protocol
title: Concox - PG201 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Concox PG201 y cómo el rastreador transmite ubicación y alertas a Plaspy
keywords:
  - Protocolo Concox PG201
  - Protocolo GPS Concox PG201
  - Concox PG201 Plaspy
  - Protocolo de seguimiento PG201
  - Protocolo para rastreador GPS personal
  - Seguimiento de personal Concox
  - Compatibilidad de dispositivos Plaspy
  - Protocolo SOS pánico rastreador
  - Protocolo GNSS LBS rastreador
  - Protocolo de seguimiento de personal
---

# Concox - Protocolo PG201

Esta página describe el contexto público del protocolo del Concox PG201 cuando se utiliza con la plataforma Plaspy. Se centra en cómo el dispositivo informa la ubicación, el movimiento y las alertas a Plaspy y qué esperar de la configuración de comunicación. La información está dirigida a administradores e integradores que necesitan comprender cómo el rastreador se conecta con la nube sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que los modos y la frecuencia de reporte pueden diferir en la práctica.

## Visión general del protocolo

El protocolo de reporte del PG201 define cómo el dispositivo envía posiciones GNSS, asistencia por red celular (LBS) y eventos de alerta a un endpoint en la nube para su mapeo y monitoreo. En términos prácticos, el protocolo es el conjunto de mensajes y comportamientos que el rastreador usa para identificarse ante Plaspy, transmitir posición y estados, y notificar a la plataforma sobre SOS o eventos de geocerca.

- Permite que el PG201 transmita posiciones derivadas de GNSS y LBS y telemetría de movimiento a Plaspy para mapas en vivo e historial.
- Transporta señales de estado como alertas SOS, notificaciones de batería baja y eventos de movimiento que Plaspy puede mostrar como notificaciones.
- Habilita que el rastreador se identifique y asocie los reportes con una cuenta o registro de dispositivo en Plaspy sin selección manual del protocolo.
- Soporta modos de reporte programados, por intervalos y reportes instantáneos que equilibran la granularidad del rastreo y la duración de la batería.
- Actúa como puente entre los sensores del dispositivo y los flujos de trabajo de Plaspy para protección del personal y monitoreo ligero de flotas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint y puerto compartidos y aplica detección de protocolo para que la mayoría de los equipos puedan usarse sin configuración manual en la plataforma. Cuando un PG201 correctamente configurado apunta al endpoint de Plaspy, la plataforma reconocerá automáticamente el formato de reporte y procesará los datos de ubicación y alertas.

- Plaspy expone un endpoint servidor común para reportes utilizando el dominio d.plaspy.com.
- La dirección IP universal del servidor Plaspy es 54.85.159.138, accesible desde redes de operadores donde esté permitido.
- Plaspy escucha en el puerto 8888 y todos los dispositivos compatibles usan este mismo puerto para reportar.
- Los dispositivos pueden configurarse para reportar mediante UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Cuando un dispositivo reporta correctamente a d.plaspy.com o a la IP de Plaspy, la plataforma detecta el formato entrante y asigna la telemetría al registro del dispositivo.
- En la mayoría de los casos no es necesario seleccionar un protocolo dentro de Plaspy manualmente si el dispositivo está configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El contexto de transporte cubre cómo se apunta el PG201 hacia Plaspy y qué opciones de red puede utilizar. El dispositivo se comunica a través de redes celulares y puede configurarse para enviar su telemetría al servidor de Plaspy usando protocolos de transporte habituales.

- El dispositivo puede configurarse para enviar reportes al dominio d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Plaspy escucha en un único puerto 8888 para mensajes de dispositivos y todos los equipos compatibles usan este mismo puerto.
- Según hardware y firmware, el PG201 puede usar UDP o TCP en el puerto 8888 para el reporte.
- La elección del transporte puede afectar la fiabilidad y la latencia; seleccione el modo que soporte el dispositivo y sea apropiado para la red celular.
- Asegúrese de que la SIM del rastreador y el operador permitan tráfico saliente hacia el endpoint y el puerto del servidor Plaspy para evitar reportes bloqueados.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la sincronización de mensajes, los campos disponibles y el comportamiento de funciones; verifique la versión de firmware al validar compatibilidad.
- Las revisiones de hardware o variantes regionales del PG201 pueden presentar diferencias en los modos de reporte o en el comportamiento de los sensores.
- Las opciones de configuración del fabricante, como intervalos de reporte, comportamiento de SOS y parámetros de geocerca, influyen en lo que Plaspy recibe y cómo se generan las alertas.
- Elija el protocolo de transporte que soporte el firmware de su dispositivo al configurar el rastreador para reportar a Plaspy, ya sea UDP o TCP en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos y realiza detección automática de protocolo, lo que simplifica la puesta en marcha en la plataforma.
- Siempre valide los ajustes del dispositivo con la documentación oficial del fabricante para conocer el comportamiento más reciente.

## Por qué es importante entender el protocolo

Conocer los fundamentos de cómo se comunica el PG201 ayuda a asegurar una implementación exitosa, alertas confiables y una resolución de problemas más eficiente al integrar dispositivos con Plaspy. Un contexto claro del protocolo reduce errores de configuración y agiliza la recuperación cuando ocurren problemas de conectividad o de reporte.

- Confirmar transporte y ajustes de endpoint evita fallas comunes de conectividad durante la configuración.
- Comprender los modos de reporte ayuda a equilibrar la duración de batería y la granularidad del rastreo según las necesidades operativas.
- Reconocer cómo se transmiten alertas como SOS y notificaciones de geocerca facilita la planificación de la respuesta ante incidentes.
- Estar al tanto de diferencias de firmware y hardware reduce tiempo perdido en diagnósticos cuando los comportamientos no coinciden.
- Documentar correctamente la configuración del dispositivo y las restricciones del operador de la SIM favorece la fiabilidad a largo plazo.

## Por qué usar Plaspy con este protocolo

Usar el Concox PG201 con Plaspy ofrece a las organizaciones una solución práctica para la seguridad del personal y la supervisión operativa básica. El rastreador envía ubicaciones GNSS y LBS, telemetría de movimiento y alertas SOS a Plaspy para que los responsables puedan monitorear posiciones en vivo, recibir notificaciones oportunas y mantener registros de incidentes para seguimiento. Esta combinación es adecuada para equipos de saneamiento, protección de trabajadores aislados, cuadrillas de inspección y otros escenarios de personal donde se requiere un rastreo compacto y eficiente en consumo de energía.

Para obtener más información sobre Plaspy y los flujos de trabajo soportados visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información en la web de Concox https://www.iconcox.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante ayuda a asegurar una configuración y compatibilidad precisas.
