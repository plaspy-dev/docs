---
slug: /totemtech/at07_4g/protocol
id: at07_4g-protocol
sidebar_label: Protocol
title: Totemtech - AT07-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Totemtech AT07-4G y cómo comunica posición y telemetría en tiempo real con Plaspy
keywords:
  - Protocolo Totemtech AT07-4G
  - Protocolo GPS Totemtech AT07-4G
  - Totemtech AT07-4G Plaspy
  - Protocolo de rastreo AT07-4G
  - Compatibilidad telemetría AT07-4G
  - Comunicación rastreador Totemtech
  - Compatibilidad rastreador GPS Plaspy
  - Rastreo vehicular Totemtech
  - Protocolo gestión de flotas
  - Telemetría periférica AT07-4G
---

# Totemtech - Protocolo AT07-4G

Esta página explica el contexto público del protocolo para usar el rastreador Totemtech AT07-4G con la plataforma Plaspy. Se centra en cómo el dispositivo informa ubicación y telemetría a Plaspy y en el papel que juega el protocolo de comunicación para lograr un seguimiento fiable en gestión de flotas y activos. El contenido tiene un enfoque informativo y público, no pretende ser una especificación de firmware.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se configura para reportar al punto de enlace de Plaspy. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento real puede diferir entre instalaciones.

## Visión general del protocolo

El protocolo del AT07-4G regula cómo se transmiten a Plaspy las posiciones GNSS, los eventos de E/S, la telemetría de sensores y los mensajes de alarma. En la práctica, el protocolo permite la identificación, el registro temporal y la entrega de registros que Plaspy convierte en historial de ubicaciones, posiciones en vivo y alertas de eventos.

- Ofrece una estructura para que el dispositivo envíe fijaciones de posición y datos de movimiento a Plaspy para mapeo e historial.
- Transmite estados digitales y analógicos como puertas, encendido, SOS, alimentación externa y alertas de vibración para que Plaspy pueda generar notificaciones.
- Entrega telemetría de sensores desde RS232, 1-wire y entradas analógicas para que Plaspy muestre niveles de combustible, temperatura y otras métricas.
- Soporta almacenamiento en búfer y reproducción para que los registros almacenados se entreguen a Plaspy tras la restauración de la red.
- Permite que el dispositivo se identifique y asocie los registros con un vehículo o activo monitorizado en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un punto de acceso común y detecta automáticamente el protocolo del rastreador en función de los datos que envía el dispositivo. Esto significa que usted normalmente no necesita seleccionar un protocolo manualmente en Plaspy una vez que el equipo esté correctamente configurado para reportar al punto de enlace de Plaspy.

- Plaspy acepta reportes en un endpoint y puerto compartidos, de modo que los dispositivos puedan apuntar al mismo host para ingestión.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta y envía datos de reporte.
- En la mayoría de configuraciones, el usuario configura el dispositivo para reportar al servidor de Plaspy y no se requiere selección manual del protocolo.
- La configuración correcta del dispositivo y un enlace celular operativo son los requisitos habituales para la detección automática.

## Transporte y contexto de conexión

El AT07-4G puede configurarse para enviar datos a Plaspy usando opciones de transporte estándar compatibles con la mayoría de los dispositivos de rastreo. Plaspy dispone de un único endpoint público para el reporte de dispositivos y estos pueden enviarse por UDP o TCP según la configuración del rastreador y el entorno de red.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o a la IP pública 54.85.159.138.
- Plaspy recibe tráfico de dispositivos en el puerto 8888 y el AT07-4G puede configurarse para UDP o TCP en ese mismo puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, por lo que una estrategia de puerto único simplifica la configuración de la flota.
- La selección de transporte (UDP frente a TCP) depende de las opciones de firmware del dispositivo y de los requisitos de fiabilidad del despliegue.
- Asegúrese de que el envío de datos salientes desde el dispositivo esté permitido por cualquier firewall intermedio o por la configuración APN del operador para que los reportes lleguen a Plaspy.

## Notas de compatibilidad del protocolo

- El AT07-4G es compatible con Plaspy para seguimiento en tiempo real e informe de telemetría cuando se configura para reportar al endpoint de Plaspy.
- Las revisiones de firmware y las opciones de configuración pueden cambiar el intervalo de mensajes, el transporte soportado o los campos de telemetría disponibles.
- Diferentes variantes de hardware y configuraciones de bandas celulares pueden incluir pequeñas diferencias de protocolo o comportamiento entre lotes de producción.
- Algunas funciones periféricas, como sensores de combustible por RS232, sensores 1-wire de temperatura o entradas analógicas específicas, requieren configuración del dispositivo que coincida con el mapeo en servidor.
- El dispositivo puede transmitir a múltiples servidores simultáneamente en muchas configuraciones; confirme los ajustes de destino de reporte si utiliza endpoints paralelos.
- Valide la compatibilidad de funciones avanzadas como salidas de control remoto o sensores especializados consultando la documentación del fabricante.

## Por qué es importante comprender el protocolo

Conocer cómo se comunica el rastreador ayuda a asegurar una configuración inicial fluida, una resolución de problemas eficaz y un comportamiento predecible en despliegues en producción. Entender el contexto público del protocolo facilita la correcta configuración del equipo, la selección del transporte y el mapeo de E/S en los paneles y alertas de Plaspy.

- Asegura el mapeo preciso de las entradas y canales de sensores del dispositivo a los campos de telemetría de Plaspy.
- Ayuda a diagnosticar problemas de conectividad como endpoint incorrecto, puertos bloqueados o selección de transporte inadecuada.
- Aclara cómo se entregan los registros almacenados tras una pérdida de red y qué esperar en los trazos históricos.
- Facilita la planificación de actualizaciones de firmware y cómo estas pueden cambiar el comportamiento de reporte o la telemetría disponible.
- Mejora la configuración de reglas de eventos al coincidir los tipos de alarma reportados por el dispositivo con las alertas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Totemtech AT07-4G con Plaspy ofrece a las organizaciones una vía práctica para obtener ubicación de vehículos en tiempo real, monitoreo de eventos y telemetría de sensores en una sola plataforma. La combinación de fijaciones GNSS rápidas, interfaces de periféricos y almacenamiento local en búfer del AT07-4G con la ingestión de Plaspy permite visibilidad continua, generación de alertas y reportes operativos para flotas y activos.

Si desea saber más sobre Plaspy y cómo puede integrarse con dispositivos Totemtech visite https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente del fabricante en http://www.totemtek.com/ antes de desplegar.
