---
slug: /teltonika/fmm650/protocol
id: fmm650-protocol
sidebar_label: Protocol
title: Teltonika - FMM650 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo Teltonika FMM650 para comunicación con Plaspy, con ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo Teltonika FMM650
  - Protocolo GPS Teltonika FMM650
  - Protocolo de comunicación FMM650
  - Protocolo de rastreo FMM650
  - Protocolo Teltonika Plaspy
  - Compatibilidad de dispositivos Plaspy
  - Guía de protocolo para rastreadores GPS
  - Protocolo de telemática vehicular
  - Telemetría CAN J1939
  - Integración de tacógrafo
---

# Teltonika - Protocolo FMM650

Esta página resume el contexto público del protocolo para usar el rastreador Teltonika FMM650 con Plaspy. Está enfocada en cómo el dispositivo se comunica con Plaspy a nivel de conexión y protocolo, sin exponer detalles sensibles de implementación. Utilice esta información para comprender el papel del protocolo de reporte del rastreador al integrar dispositivos FMM650 en un despliegue Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta al endpoint de Plaspy. El comportamiento concreto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página ofrece una guía práctica de compatibilidad y conexión, no un reemplazo de la documentación del fabricante.

## Visión general del protocolo

El protocolo de reporte del FMM650 define cómo el rastreador se identifica ante un servidor, entrega posiciones GNSS, telemetría del vehículo y mensajes de estado, y permite que un servidor interprete esos mensajes para rastreo y gestión de flotas. Con Plaspy, el protocolo suministra los puntos de datos necesarios para mostrar posición en vivo, telemetría CAN/J1939, estado del tacógrafo y otros eventos del dispositivo.

- Permite que el rastreador envíe actualizaciones de posición periódicas y basadas en eventos, además de estado del dispositivo a Plaspy.
- Transporta telemetría del vehículo, como datos CAN o J1939, y flujos de sensores seriales para ingestión por Plaspy.
- Proporciona identificación y datos de estado para que Plaspy asocie los reportes con el activo y la configuración correctos.
- Soporta opciones de configuración y reporte que pueden activarse o desactivarse mediante las herramientas de Teltonika o ajustes del equipo.
- Facilita continuidad de telemetría durante pérdida de energía usando la batería de respaldo del dispositivo para antirobo y visibilidad post incidente.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador según el flujo de datos entrante y la identificación del dispositivo. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el FMM650 está configurado para reportar al endpoint de Plaspy.

- El dominio público del servidor de Plaspy para conexiones de dispositivos es d.plaspy.com.
- La dirección IP pública de Plaspy es 54.85.159.138 y el servicio escucha en el puerto 8888.
- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 usando el mismo puerto de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no se requiere seleccionar un puerto por dispositivo.
- Si el FMM650 está correctamente configurado para apuntar al endpoint de Plaspy, la selección de protocolo en la interfaz de Plaspy normalmente no es necesaria.

## Transporte y contexto de conexión

La capa de transporte determina cómo el FMM650 abre y mantiene la conexión con Plaspy, pero no cambia el propósito público del protocolo. El FMM650 soporta diferentes modos de transporte según la configuración del equipo y las condiciones de red, y Plaspy acepta los modos de transporte comunes usados por dispositivos Teltonika.

- El dispositivo puede configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888.
- Los equipos pueden apuntar al endpoint de Plaspy por dominio d.plaspy.com o por la dirección IP 54.85.159.138.
- El puerto 8888 es el puerto uniforme usado por Plaspy para todos los dispositivos y transportes soportados.
- Seleccione UDP o TCP en el dispositivo según la confiabilidad de la red y la guía de configuración de Teltonika.
- Utilice las herramientas de configuración recomendadas por el fabricante para definir el transporte de reporte y el endpoint del FMM650.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios menores o mayores en el contenido de los mensajes y en las funciones disponibles; siempre revise las notas de la versión de firmware al solucionar problemas.
- Las variantes de hardware y las versiones regionales del producto pueden diferir en modos de conectividad o bandas de radio soportadas, lo que puede afectar la elección del transporte.
- Las herramientas de configuración del fabricante y los módulos accesorios pueden añadir o cambiar la telemetría serial y CAN disponible para el rastreador.
- La selección de transporte (UDP vs TCP) puede afectar las garantías de entrega y debe elegirse según la confiabilidad de la red y el comportamiento de reporte deseado.
- Valide la configuración del equipo con la documentación oficial de Teltonika cuando habilite funciones avanzadas como flujos de tacógrafo o integraciones seriales personalizadas.
- En caso de duda, confirme el comportamiento actual contra el sitio del fabricante y las notas de lanzamiento antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Conocer cómo el FMM650 se comunica con Plaspy ayuda a asegurar una configuración fluida, una interpretación correcta de los datos y una operación confiable a largo plazo. Entender de forma práctica el contexto de conexión y el protocolo reduce errores de configuración y acelera la resolución de problemas cuando un dispositivo no reporta como se espera.

- Asegura que los dispositivos apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy pueda recibir los reportes.
- Ayuda a elegir el modo de transporte apropiado (UDP o TCP) según las condiciones de su red.
- Facilita el diagnóstico de problemas de conectividad que sean de transporte o endpoint y no de capa de aplicación.
- Aclara qué campos de telemetría Plaspy recibirá y cómo se mapean en el panel y los informes.
- Reduce el tiempo de resolución cuando cambios de firmware o configuración alteran el comportamiento de reporte del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM650 con Plaspy ofrece una vía práctica para ingerir posiciones GNSS de alta precisión, telemetría CAN y J1939, datos de tacógrafo y flujos de sensores seriales en una plataforma centralizada de gestión de flotas. La detección automática de protocolo de Plaspy y los ajustes de conexión compartidos facilitan la integración de dispositivos FMM650: configure el equipo para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte que prefiera, y Plaspy se encargará del resto.

Aprenda más sobre Plaspy y cómo puede soportar despliegues con FMM650 en https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente y las notas de firmware en el sitio del fabricante https://www.teltonika-gps.com/ antes de realizar despliegues a gran escala o críticos.
