---
slug: /galileosky/7x/protocol
id: 7x-protocol
sidebar_label: Protocol
title: GalileoSky - 7x Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GalileoSky 7x y cómo se comunica con Plaspy para seguimiento de flotas y activos
keywords:
  - protocolo GalileoSky 7x
  - protocolo GPS GalileoSky 7x
  - protocolo de comunicación GalileoSky 7x
  - protocolo de rastreo GalileoSky 7x
  - GalileoSky 7x Plaspy
  - rastreo de flotas GalileoSky 7x
  - protocolo de dispositivo Plaspy
  - protocolo de rastreador GPS Plaspy
  - telemática vehicular GalileoSky
  - seguimiento de activos 7x
---

# GalileoSky - Protocolo 7x

Esta página resume el contexto público del protocolo para usar el rastreador GalileoSky 7x con Plaspy. Se concentra en cómo el dispositivo se comunica con un servidor Plaspy, qué papel desempeña el protocolo de reporte del rastreador en esa comunicación y puntos prácticos a considerar al configurar los equipos para mantener una conectividad confiable. El contenido busca ofrecer una visión útil de integración y no reproduce firmware del fabricante ni detalles privados del protocolo.

El GalileoSky 7x es un terminal GPS/GLONASS programable con amplios controles de E/S, doble entrada CAN bus y la capacidad de seguir registrando y transmitiendo datos durante actualizaciones de firmware. Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento puede diferir entre unidades o versiones de firmware.

## Visión general del protocolo

A un alto nivel, el protocolo del rastreador es el conjunto de reglas y tipos de mensajes que el 7x usa para informar posición, telemetría y estado a un servidor remoto, y para recibir instrucciones de control o configuración remotas. Cuando se combina con Plaspy, el protocolo posibilita la entrega fiable de datos GPS y del vehículo, la identificación del dispositivo y el soporte para acciones remotas que el hardware 7x expone.

- Transporta información de posición y hora desde el 7x al servidor de Plaspy para que se puedan trazar ubicaciones y rutas.
- Transmite telemetría y datos del bus CAN que permiten a los sistemas de monitoreo interpretar el estado del vehículo y las lecturas de sensores.
- Envía identificadores y estado del dispositivo para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Soporta comandos de control remoto y activación de salidas gestionadas por el hardware 7x, como relés, LEDs, zumbadores y otras E/S.
- Permite que el dispositivo continúe registrando y reenviando datos de seguimiento incluso durante actualizaciones de firmware.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido e identifica automáticamente el protocolo del rastreador usado por las conexiones entrantes. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint y puerto de Plaspy.

- Plaspy escucha en un único endpoint de servidor consistente para todos los rastreadores soportados, lo que simplifica la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador para las conexiones entrantes, por lo que la selección de protocolo en la plataforma suele ser innecesaria.
- Una identificación correcta del dispositivo depende de que el 7x envíe los identificadores esperados y datos coherentes con su firmware.
- Si un dispositivo no aparece en Plaspy, confirme que está configurado para reportar al endpoint de Plaspy y que la configuración de red coincide con las capacidades del equipo.
- En dispositivos con variantes de firmware, la detección puede verse influida por los conjuntos de mensajes que el firmware transmite.

## Transporte y contexto de conexión

La capa de transporte determina cómo el 7x envía sus mensajes a Plaspy, pero no cambia el rol a mayor nivel del protocolo del rastreador. El 7x puede configurarse para usar UDP o TCP, y todos los dispositivos soportados por Plaspy comparten el mismo puerto para el tráfico entrante.

- El 7x puede configurarse para enviar mensajes por UDP o TCP según las opciones del equipo y el entorno de red.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y usa ese mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden apuntar al servidor Plaspy usando el dominio d.plaspy.com o la IP pública 54.85.159.138 para reporte directo.
- Elegir UDP o TCP puede afectar las garantías de entrega y el comportamiento de conexión con estado, pero el propósito del protocolo permanece igual.
- Asegúrese de que los cortafuegos o la traducción de direcciones de red permitan tráfico saliente del dispositivo hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué tipos de mensajes o campos opcionales incluye una unidad 7x; revise las notas de versión del firmware al resolver problemas.
- Las revisiones de hardware y periféricos opcionales (por ejemplo cableado CAN adicional o módulos de E/S) pueden alterar la telemetría disponible para Plaspy.
- Las herramientas de configuración del fabricante y los ajustes por defecto pueden variar según la región; confirme que el host de reporte y el protocolo de transporte apunten al endpoint de Plaspy.
- Seleccionar UDP o TCP en el 7x puede ser necesario para adaptarse a las condiciones de su red y el soporte del firmware del equipo.
- Si depende de datos del bus CAN, valide qué PIDs o señales expone la integración de su vehículo y la versión de firmware en uso.
- Siempre valide la compatibilidad consultando la documentación oficial de GalileoSky para la revisión de firmware específica que esté utilizando.

## Por qué es importante entender el protocolo

Comprender cómo funciona el protocolo de comunicación del 7x con Plaspy ayuda a asegurar una configuración correcta, agilizar la resolución de problemas y mantener la calidad de los datos para el uso operativo.

- Configuración inicial más rápida al saber a dónde apuntar el dispositivo y qué transporte seleccionar al configurar el 7x.
- Análisis de causa raíz más ágil en problemas de conectividad cuando puede confirmar que el dispositivo está reportando a d.plaspy.com o a 54.85.159.138 y usando el puerto 8888.
- Mejores expectativas sobre qué telemetría y señales CAN estarán disponibles según el firmware y la variante de hardware.
- Decisiones informadas sobre la configuración de red, como elegir UDP o TCP y las reglas de firewall.
- Gestión más sencilla de funciones de control remoto y activación de salidas cuando comprende la relación entre los comandos del dispositivo y el soporte de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el GalileoSky 7x con Plaspy ofrece a las organizaciones una forma práctica de centralizar datos de vehículos y activos, combinar telemetría GPS y CAN bus, y aprovechar el control remoto de E/S que ofrece el hardware 7x. La detección automática de protocolo de Plaspy y su enfoque de endpoint consistente reducen la complejidad de configuración y le permiten centrarse en los flujos operativos en lugar de repetir configuraciones por dispositivo.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el GalileoSky 7x visite https://www.plaspy.com. Para detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y orientación de implementación verifique la información con el fabricante en https://galileosky.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación del fabricante para confirmar las capacidades actuales del dispositivo.
