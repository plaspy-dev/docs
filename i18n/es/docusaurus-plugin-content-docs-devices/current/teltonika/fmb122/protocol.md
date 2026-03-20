---
slug: /teltonika/fmb122/protocol
id: fmb122-protocol
sidebar_label: Protocol
title: Teltonika - FMB122 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para conectar Teltonika FMB122 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Teltonika FMB122
  - Protocolo FMB122
  - Protocolo GPS Teltonika
  - Compatibilidad FMB122 Plaspy
  - Protocolo rastreador GPS
  - Seguimiento vehicular FMB122
  - Seguimiento sensores BLE
  - 1-Wire RFID iButton
  - Rastreador GPS doble SIM
  - GPS gestión de flotas
---

# Teltonika - Protocolo FMB122

Esta página ofrece el contexto público del protocolo para usar el rastreador Teltonika FMB122 con Plaspy. Se centra en las consideraciones de comunicación y conexión que permiten al compacto FMB122 2G enviar posiciones GNSS, datos de sensores BLE y telemetría 1-Wire a la plataforma Plaspy para gestión de flotas y flujos de trabajo anti robo.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo del FMB122 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página explica el contexto general de comunicación en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El protocolo del FMB122 permite que el equipo se identifique ante un servidor, reporte posiciones GNSS y transmita entradas de sensores como BLE y 1-Wire para que Plaspy interprete y presente la telemetría. Plaspy procesa estos reportes para ofrecer seguimiento en tiempo real, alertas y registros sin requerir selección manual del protocolo por dispositivo.

- Permite que el rastreador envíe actualizaciones periódicas y por evento a Plaspy para visibilidad en tiempo real.
- Transporta datos auxiliares de sensores BLE y accesorios 1-Wire para que Plaspy muestre telemetría y genere alertas.
- Incluye información de identificación del dispositivo que permite asociar mensajes entrantes con un registro conocido en Plaspy.
- Facilita que la plataforma convierta reportes crudos en eventos operativos como violaciones de geocerca, cambios de ignición y alarmas de sensores.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de dispositivos en un único endpoint y puerto compartido y usa detección automática para determinar el manejo adecuado de los rastreadores compatibles. En la mayoría de los casos, un FMB122 correctamente configurado que reporte al endpoint de Plaspy será procesado sin necesidad de seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy escucha en un solo puerto compartido para todos los dispositivos, lo que simplifica la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante y el contexto de la carga útil.
- Normalmente solo deberá apuntar el dispositivo a la dirección de Plaspy y elegir TCP o UDP según lo permita el hardware.
- Cuando el dispositivo esté configurado para reportar al endpoint de Plaspy, se asociará automáticamente con el registro de dispositivo correcto.

## Contexto de transporte y conexión

Las opciones de conexión influyen en cómo el FMB122 alcanza Plaspy, pero no cambian la intención pública del protocolo. El dispositivo puede configurarse para usar UDP o TCP en el mismo puerto de Plaspy según capacidades y herramientas de aprovisionamiento. Plaspy acepta conexiones usando los siguientes ajustes públicos para el tráfico entrante de los rastreadores.

- El nombre de dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com para que los equipos puedan usar un nombre DNS al aprovisionar.
- La dirección IP del servidor Plaspy es 54.85.159.138, que puede emplearse cuando no exista disponibilidad de DNS.
- El puerto de Plaspy para conexiones de rastreadores es 8888, y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- El FMB122 puede configurarse para usar UDP o TCP en el puerto 8888 según firmware y opciones de aprovisionamiento.
- Elegir TCP o UDP se configura en el dispositivo y no requiere un endpoint distinto en Plaspy.

## Notas de compatibilidad del protocolo

- El FMB122 es públicamente compatible con Plaspy, pero el comportamiento exacto de los mensajes puede variar entre versiones de firmware.
- Revisiones de hardware u opciones auxiliares como antenas GNSS externas o adaptadores CAN pueden afectar los canales de telemetría disponibles.
- La operación con doble SIM mejora la resiliencia celular pero no modifica el endpoint de reporte ni la selección del puerto en Plaspy.
- El comportamiento de sensores BLE y 1-Wire depende de los accesorios instalados y las funciones de firmware habilitadas en el dispositivo.
- La selección de transporte entre TCP y UDP debe coincidir con la configuración del equipo y con las políticas de la red intermedia.
- Siempre valide el comportamiento del dispositivo tras el aprovisionamiento confirmando que reporta al endpoint de Plaspy y aparece en la plataforma.

## Por qué es importante entender el protocolo

Conocer el contexto público del protocolo facilita una configuración exitosa, agiliza la resolución de problemas y garantiza una operación predecible a largo plazo al usar el FMB122 con Plaspy. Entender cómo se conecta el dispositivo y qué datos puede entregar reduce fricciones de integración y mejora la fiabilidad.

- Reduce tiempos de configuración al aclarar cómo ajustar el dispositivo para reportar a Plaspy.
- Ayuda a aislar problemas de conectividad confirmando DNS, IP, transporte y puerto.
- Aclara qué tipos de telemetría esperar en Plaspy desde sensores BLE y 1-Wire.
- Facilita la planificación de mantenimiento al señalar que cambios de firmware y hardware pueden alterar el comportamiento.
- Aumenta la confianza operativa al verificar el uso correcto de doble SIM y opciones de antena externa.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB122 con Plaspy ofrece a flotas y administradores de activos una vía sencilla para capturar ubicación, identificación de conductor y telemetría ambiental. La resiliencia de doble SIM del FMB122, su soporte para sensores BLE y entradas 1-Wire lo hacen útil para casos de uso mixtos como registros de conductores, alertas anti robo y monitoreo de temperatura, mientras Plaspy se encarga de la ingestión, el mapeo y las alertas.

Para saber más sobre Plaspy y cómo soporta la conectividad de dispositivos y la telemática de flotas visite https://www.plaspy.com. Para detalles específicos más recientes sobre protocolos del dispositivo, notas de firmware y orientación del fabricante verifique la información actual en el sitio oficial de Teltonika en https://www.teltonika-gps.com/.
