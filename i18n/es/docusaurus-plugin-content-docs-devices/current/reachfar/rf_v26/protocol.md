---
slug: /reachfar/rf_v26/protocol
id: rf_v26-protocol
sidebar_label: Protocol
title: Reachfar - RF-V26+ Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GPS Reachfar RF-V26+ para integrar ubicación y telemetría con Plaspy
keywords:
  - Protocolo Reachfar RF-V26+
  - Protocolo GPS Reachfar RF-V26+
  - Protocolo RF-V26+ Plaspy
  - Protocolo GPS animal Reachfar
  - Protocolo de seguimiento RF V26
  - Compatibilidad tracker Reachfar Plaspy
  - Comunicación GPS RF V26
  - Protocolo seguimiento ganado Reachfar
  - Rastreadores compatibles Plaspy
  - Protocolo dispositivo RF V26
---

# Reachfar - Protocolo RF-V26+

Esta página documenta el contexto público del protocolo para usar el rastreador GPS animal Reachfar RF-V26+ con Plaspy. Describe, en términos generales y no sensibles, cómo se comunica el dispositivo y explica el papel del protocolo de reporte para entregar datos de ubicación y telemetría a Plaspy. El RF-V26+ es un rastreador compacto para animales, pensado para uso en ganado, con carcasa resistente e impermeable y carga asistida por panel solar; esta guía asume que el dispositivo está reportando ubicación y telemetría estándar a un punto remoto.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto y los campos enviados por un RF-V26+ pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que considere esta página como contexto de protocolo y no como una especificación a nivel de firmware. Plaspy acepta tráfico de dispositivos en el endpoint público d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto 8888, y los equipos pueden configurarse para enviar datos por UDP o TCP a ese mismo puerto.

## Visión general del protocolo

El protocolo de reporte es el mecanismo mediante el cual el RF-V26+ envía información de posición, hora y estado desde el dispositivo hasta un servicio backend como Plaspy. En la práctica, el protocolo define cómo se identifica el dispositivo, con qué frecuencia informa y qué campos de telemetría incluye cada reporte. Para la integración con Plaspy los aspectos importantes son la identificación fiable, muestras de ubicación con marca de tiempo consistentes y telemetría básica como nivel de batería o estado de carga cuando estén disponibles.

- Permite al RF-V26+ transmitir datos de ubicación y estado a Plaspy para su mapeo y telemetría.
- Transporta la información de identidad del dispositivo para que Plaspy pueda asociar los reportes entrantes con la unidad correcta.
- Proporciona muestras de posición con marca de tiempo que se usan para el rastreo en vivo y los recorridos históricos.
- Transmite indicadores de estado como nivel de batería o estado de carga cuando el firmware provee esa telemetría.
- Soporta el comportamiento de la capa de transporte que determina si los datos se envían por UDP o TCP según la configuración del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores y determinar automáticamente el protocolo usado por un dispositivo entrante cuando este apunta al endpoint de Plaspy. Esta detección automática significa que normalmente los usuarios no necesitan seleccionar un protocolo en Plaspy si el dispositivo está configurado para enviar sus uplinks a la dirección y puerto correctos de Plaspy.

- Plaspy recibe uplinks de dispositivos en el endpoint compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos y usa ese mismo puerto para todos los modelos.
- Cuando el RF-V26+ está configurado para reportar a ese endpoint y puerto, Plaspy intenta la detección de protocolo automáticamente.
- La identidad del dispositivo y la consistencia en los reportes ayudan a Plaspy a vincular los mensajes entrantes con un registro de activo.
- Normalmente, usted solo necesita asegurarse de que el RF-V26+ reporte al endpoint de Plaspy y que el tráfico de salida desde el dispositivo esté permitido en la red.

## Transporte y contexto de conexión

El transporte y el contexto de conexión abarcan cómo el RF-V26+ llega hasta Plaspy más que el formato interno de los paquetes. El RF-V26+ puede configurarse para usar UDP o TCP para enviar uplinks, según el firmware del dispositivo y las necesidades del despliegue. Para integrar con Plaspy, apunte el dispositivo al endpoint público y puerto de Plaspy y seleccione el transporte compatible con el rastreador y su red.

- Los dispositivos pueden configurarse para reportar al nombre DNS d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy acepta conexiones tanto por UDP como por TCP en el puerto 8888 según lo que soporte el dispositivo.
- Todos los dispositivos que usan Plaspy emplean el mismo puerto 8888, por lo que los pasos de configuración son consistentes entre modelos.
- Las políticas de red y los cortafuegos deben permitir conexiones salientes hacia el endpoint de Plaspy en el transporte elegido.
- Seleccionar UDP o TCP puede afectar el comportamiento de entrega, pero no cambia el hecho de alto nivel de que los datos se envían al servidor de Plaspy para la detección automática del protocolo.

## Notas de compatibilidad del protocolo

- La compatibilidad puede variar según la versión de firmware del RF-V26+ y según las revisiones de hardware que el fabricante haya lanzado.
- Algunas unidades pueden presentar campos de telemetría o intervalos de reporte distintos en función de la configuración de fábrica o de ajustes del cliente.
- La elección de transporte UDP frente a TCP debe alinearse con las capacidades del firmware del RF-V26+ y con el entorno de red del despliegue.
- Son necesarios pasos de configuración del fabricante, como ajustar la dirección del servidor y el transporte, para garantizar que el dispositivo reporte a Plaspy.
- Dado que los listados de productos y el firmware evolucionan, valide la configuración y compatibilidad del equipo contra la documentación del fabricante.
- El RF-V26+ fue diseñado para proporcionar datos de posición y estado adecuados para la integración con Plaspy, pero los detalles de implementación pueden variar entre lotes.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a configurar correctamente el equipo, solucionar reportes intermitentes y mantener un rastreo fiable a largo plazo. Saber qué se espera que envíe el rastreador y cómo lo recibe Plaspy reduce el tiempo dedicado a diagnosticar problemas de conectividad o configuración y mejora la disponibilidad operativa del monitoreo animal.

- Garantiza la configuración correcta del dispositivo para que los reportes lleguen a d.plaspy.com en el puerto 8888.
- Ayuda a diagnosticar si la falta de datos se debe a transporte, red o ajustes de firmware.
- Aclara qué telemetría puede esperar Plaspy de una unidad RF-V26+ para alertas e informes.
- Orienta la toma de decisiones sobre la selección de transporte y las reglas de firewall de la red para una entrega confiable.
- Facilita la planificación de actualizaciones de firmware o la sustitución de unidades cuando cambios de funcionalidad afectan la integración.

## Por qué usar Plaspy con este protocolo

Emparejar los rastreadores RF-V26+ con Plaspy ofrece a los gestores de ganado y a las operaciones una vía sencilla para convertir los reportes GPS en el animal en vistas de mapa en vivo, recorridos históricos y registros de telemetría para gestión y supervisión. La detección automática de protocolos de Plaspy y su endpoint unificado reducen la complejidad de configuración y permiten que los equipos se concentren en la colocación de los dispositivos y las políticas operativas en lugar de en la selección del protocolo.

Para obtener más información sobre Plaspy y cómo gestiona el reporte de dispositivos y la telemetría de flotas, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware e instrucciones del fabricante del RF-V26+, verifique la información más reciente en el sitio oficial de Reachfar https://www.reachfargps.com/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que se recomienda confirmar la documentación más reciente.
