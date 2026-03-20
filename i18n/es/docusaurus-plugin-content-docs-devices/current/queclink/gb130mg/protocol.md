---
slug: /queclink/gb130mg/protocol
id: gb130mg-protocol
sidebar_label: Protocol
title: QuecLink - GB130MG Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el QuecLink GB130MG con los servidores de Plaspy y expectativas de conexión
keywords:
  - protocolo QuecLink GB130MG
  - protocolo GPS GB130MG
  - protocolo rastreador GPS QuecLink
  - compatibilidad GB130MG con Plaspy
  - protocolo de rastreo QuecLink
  - rastreo vehicular GB130MG
  - protocolo telemático GB130MG
  - protocolo de dispositivo Plaspy
  - GPS para flotas GB130MG
  - telemática UBI GB130MG
---

# QuecLink - Protocolo GB130MG

Esta página explica el contexto público del protocolo para usar el rastreador QuecLink GB130MG con la plataforma Plaspy. Describe de forma general cómo el dispositivo reporta ubicación, movimiento y telemetría de accesorios a Plaspy, y cómo esa comunicación encaja en un despliegue típico de flota o UBI. El objetivo es ayudar a integradores técnicos y equipos de operaciones a comprender las expectativas de conexión sin exponer detalles internos del dispositivo.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en orientaciones públicas, prácticas y seguras para una integración y solución de problemas exitosas.

## Descripción general del protocolo

El protocolo de comunicación del GB130MG regula cómo el rastreador se identifica, establece una sesión de transporte y entrega posiciones GNSS, eventos de movimiento y telemetría de accesorios a un servidor backend. En la práctica, el protocolo permite que el dispositivo proporcione datos de ubicación y acelerómetro de alta fidelidad tal como se documenta, manteniendo las opciones de reporte y la semántica de eventos propias del fabricante.

- Permite que el rastreador reporte posiciones GNSS, marcas de tiempo y telemetría del dispositivo a un servicio backend.
- Transmite datos de movimiento y eventos desde el acelerómetro de 6 ejes para detección de choques e informes de incidentes.
- Transporta la telemetría de accesorios BLE para que las lecturas de sensores puedan correlacionarse con ubicación y tiempo.
- Comunica la identidad y el estado del dispositivo que el backend usa para mapeo, alertas e informes históricos.
- Admite modos e intervalos de reporte configurables que afectan el consumo de energía y la granularidad de los datos.

## Detección del protocolo por Plaspy

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y usa los datos recibidos para reconocer el dispositivo y su comportamiento de reporte. Cuando un GB130MG está configurado para reportar a Plaspy, la plataforma detectará automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Configure el dispositivo para que reporte a la dirección del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 y acepta conexiones de rastreadores en ese puerto.
- La plataforma detecta automáticamente el protocolo del rastreador a partir del tráfico reportado y la identidad del dispositivo cuando un equipo correctamente configurado se conecta.
- En la mayoría de los despliegues, el usuario solo apunta el rastreador al endpoint de Plaspy y no se requiere ninguna selección adicional de protocolo en la plataforma.
- Si un dispositivo no aparece, verifique la dirección de reporte del equipo, la selección de transporte y la configuración de firmware consultando la documentación del fabricante.

## Transporte y contexto de conexión

La selección de transporte y la configuración de red determinan cómo el GB130MG se comunica con Plaspy, pero no cambian el propósito general del protocolo. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo, el entorno del operador y las preferencias del despliegue.

- Los dispositivos GB130MG pueden configurarse para usar transporte UDP o TCP al reportar a Plaspy en el puerto 8888.
- Los equipos pueden apuntar al dominio d.plaspy.com o a la dirección directa del servidor 54.85.159.138.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración de firewall y NAT en despliegues a gran escala.
- Elija el transporte que mejor se adapte a la fiabilidad de su red y a las necesidades de ordenamiento de datos; consulte la documentación del operador y del dispositivo para las recomendaciones.
- Asegúrese de que las reglas de red y firewall permitan conexiones salientes al endpoint de Plaspy en el puerto 8888 para TCP y UDP según sea necesario.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, campos opcionales y la telemetría disponible. Siempre valide contra las notas de la versión del firmware.
- Revisión de hardware o SKUs regionales pueden modificar el comportamiento radio, las conexiones BLE o los modos de transporte soportados.
- La selección de transporte (UDP vs TCP) puede afectar las características de entrega de mensajes y debería probarse en el entorno de red objetivo.
- La integración de accesorios BLE requiere emparejamiento y puede implicar pasos de configuración adicionales que no controla Plaspy.
- El APN del operador y la provisión de la SIM afectan la forma en que el dispositivo accede a Internet; confirme la configuración del operador durante el despliegue.
- Valide cualquier integración que dependa del tiempo de eventos del acelerómetro o de la captura pre evento según la documentación del fabricante para garantizar precisión forense.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una ingesta de datos confiable, una interpretación correcta de eventos y una resolución de problemas más eficiente durante el despliegue y la operación. Saber cómo y qué reporta el dispositivo facilita la configuración, la interpretación de la telemetría en Plaspy y el diagnóstico de problemas de conectividad.

- Ayuda a verificar la configuración del dispositivo para que reporte a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888.
- Facilita la resolución de problemas de transporte cuando la elección entre TCP o UDP afecta la entrega.
- Aclara cómo aparecerán en la plataforma los datos de sensores como GNSS y eventos del acelerómetro.
- Mejora la planificación de despliegues al señalar factores de firmware y hardware que pueden influir en el comportamiento.
- Reduce el tiempo de resolución al centrar el diagnóstico en transporte, dirección del servidor y versión de firmware.

## Por qué usar Plaspy con este protocolo

Usar el GB130MG con Plaspy ofrece una vía práctica para ingerir datos GNSS, de acelerómetro y sensores BLE de alta fidelidad a escala. Para flotas y aseguradoras, combinar el diseño robusto y la detección de movimiento de alta frecuencia del GB130MG con la detección automática de protocolo e ingestión de Plaspy simplifica los despliegues masivos y las operaciones continuas, permitiendo mapas en tiempo real, alertas y análisis.

El modelo de endpoint compartido y la detección automática de protocolo de Plaspy reducen la configuración por dispositivo durante los despliegues, y el soporte de la misma puerta de enlace para múltiples dispositivos hace que la provisión de red sea consistente para flotas grandes. Para más información sobre Plaspy y cómo soporta la integración de dispositivos visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, comportamiento de firmware y guía del fabricante, verifique la información en el sitio oficial de QuecLink https://www.queclink.com/
