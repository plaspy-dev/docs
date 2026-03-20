---
slug: /autoseeker/at_19/protocol
id: at_19-protocol
sidebar_label: Protocol
title: Autoseeker - AT-19 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Autoseeker AT-19 y cómo se comunica con Plaspy para seguimiento de flotas y telemetría
keywords:
  - Protocolo Autoseeker AT-19
  - Protocolo GPS Autoseeker AT-19
  - Protocolo de rastreo AT-19
  - Compatibilidad Autoseeker Plaspy
  - Rastreo de flotas AT-19
  - Comunicación rastreador GPS AT-19
  - Protocolo rastreador Autoseeker
  - Rastreo de vehículos AT-19
  - Protocolo de telemetría AT-19
  - Integración GPS Autoseeker con Plaspy
---

# Autoseeker - Protocolo AT-19

Esta página ofrece una visión pública y no sensible del contexto de comunicación para usar el rastreador Autoseeker AT-19 con la plataforma Plaspy. Se centra en cómo el dispositivo informa posición GPS y telemetría a Plaspy y en qué debe considerar al configurar los equipos para garantizar reportes fiables e integración adecuada.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según versiones de firmware, revisiones de hardware e implementación del fabricante; por eso esta página explica el rol del protocolo de reporte sin exponer detalles de paquetes propietarios o nivel de firmware.

## Visión general del protocolo

El AT-19 utiliza un protocolo de reporte del dispositivo transportado sobre GSM GPRS para entregar posición GNSS y telemetría del vehículo a un servidor. En la práctica, el protocolo permite que el rastreador se identifique ante un servidor, transmita eventos de ubicación y estado, y reciba comandos soportados cuando estén disponibles.

- Habilita actualizaciones de posición en tiempo real para mapas e historial de rutas en Plaspy.
- Transmite telemetría del vehículo como velocidad, estado de encendido y eventos de alarma para las alertas de la plataforma.
- Envía notificaciones de eventos como entradas o salidas de geocercas y disparos de SOS que Plaspy puede mostrar a los usuarios.
- Proporciona un canal para comandos remotos soportados cuando el firmware y el cableado del dispositivo permiten el control de actuadores.
- Actúa como puente entre el rastreador físico y los paneles de Plaspy y sus sistemas de alertas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría de los dispositivos en un único endpoint y puerto compartido y utiliza esos datos entrantes para determinar automáticamente el protocolo del rastreador. En implementaciones típicas, el dispositivo solo necesita estar configurado para reportar al endpoint de Plaspy para ser reconocido.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, que es 8888, lo que simplifica la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.
- Si un dispositivo está correctamente configurado para enviar reportes al endpoint de Plaspy, Plaspy identificará el formato de reporte y asociará el dispositivo con la lógica de procesamiento adecuada.
- Usted debe confirmar que la dirección de reporte y los ajustes de transporte del dispositivo apunten al endpoint de Plaspy para asegurar la detección automática.

## Transporte y contexto de conexión

El AT-19 soporta transporte GSM GPRS y puede configurarse para enviar datos mediante TCP o UDP según el firmware y ajustes del equipo. Comprender la configuración de transporte y dirección es importante para la puesta en marcha inicial y la resolución de problemas de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Los equipos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 al especificar el servidor de reporte.
- Plaspy escucha en el puerto 8888 para todas las conexiones de dispositivos soportados, por lo que el mismo puerto se usa entre modelos.
- La selección del transporte (TCP frente a UDP) depende del soporte del dispositivo y del comportamiento deseado en cuanto a reintentos y semántica de entrega.
- Asegúrese de que la configuración de red móvil y el APN estén correctos para que el rastreador pueda establecer sesiones GPRS hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el rastreador formatea o secuencia los campos reportados; revise siempre las notas de lanzamiento del firmware para detectar diferencias.
- Las revisiones de hardware y accesorios opcionales (por ejemplo monitoreo de voz o cableado de inmovilizador) pueden afectar la telemetría y el soporte de comandos disponibles.
- Algunas unidades AT-19 soportan SMS como método de reporte de respaldo; confirme con el equipo que el reporte por GPRS está activo para la integración con Plaspy.
- La elección del transporte importa: asegúrese de que el modo TCP o UDP seleccionado en el dispositivo coincida con el comportamiento de reporte y las condiciones de red previstas.
- Las guías de configuración del fabricante a veces listan múltiples formatos de dirección de servidor; utilice d.plaspy.com o 54.85.159.138 con el puerto 8888 para Plaspy.
- Valide los detalles de compatibilidad contra la documentación oficial de Autoseeker cuando planifique despliegues a gran escala o integraciones personalizadas.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el AT-19 y qué información transmite el protocolo ayuda a asegurar una configuración fiable del dispositivo, agiliza la resolución de problemas y garantiza un comportamiento predecible en Plaspy. Incluso sin analizar estructuras de paquetes propietarias, entender el transporte, la dirección y los tipos de eventos reduce errores de configuración.

- Mejora la puesta en marcha inicial al confirmar que se usa la dirección de servidor y el transporte correctos.
- Agiliza la resolución de problemas cuando los dispositivos no aparecen en Plaspy o faltan eventos.
- Ayuda a decidir si funciones opcionales como monitoreo de voz remoto o comandos de inmovilizador están disponibles según su firmware y cableado.
- Contribuye a la planificación de la cobertura de red y métodos de contingencia como el reporte por SMS.
- Apoya el mantenimiento a largo plazo al rastrear cambios de firmware que puedan afectar los campos reportados o el comportamiento de eventos.

## Por qué usar Plaspy con este protocolo

Usar el AT-19 con Plaspy ofrece a los administradores de flota y propietarios de vehículos una vía práctica para obtener ubicación en tiempo real, historial de rutas y alertas de eventos. El factor de forma compacto del dispositivo y las entradas de telemetría lo hacen adecuado para supervisión de flotas, medidas antirrobo y seguimiento de entregas cuando se combina con las funciones de monitoreo y alertas de Plaspy.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el AT-19 visite https://www.plaspy.com. Para detalles específicos más recientes sobre protocolo del dispositivo, comportamiento del firmware e información de implementación, verifique la documentación del fabricante en https://autoseekergps.com/. Tenga en cuenta que el soporte del protocolo y las funciones de firmware pueden cambiar con el tiempo, por lo que debe confirmar las especificaciones del dispositivo con Autoseeker antes de un despliegue a gran escala.
