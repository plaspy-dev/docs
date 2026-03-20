---
slug: /astra_telematics/at111/protocol
id: at111-protocol
sidebar_label: Protocol
title: Astra Telematics - AT111 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo AT111 de Astra Telematics y su integración con Plaspy, con contexto de conexión y detalles de detección
keywords:
  - Protocolo Astra Telematics AT111
  - Astra Telematics AT111 GPS
  - Integración AT111 Plaspy
  - Protocolo de rastreo AT111
  - Protocolo de rastreador Astra Telematics
  - Compatibilidad AT111 rastreador GPS
  - Protocolo de dispositivo Plaspy
  - Rastreo vehicular AT111
  - Telemática de flotas AT111
  - Protocolo de comunicación AT111
---

# Astra Telematics - Protocolo AT111

Esta página describe el contexto público del protocolo para usar el rastreador GPS Astra Telematics AT111 con Plaspy. Se centra en cómo el dispositivo comunica información con la plataforma Plaspy en términos generales y no sensibles, para que integradores e instaladores comprendan las expectativas de conexión y reporte sin exponer detalles propietarios.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la implementación del fabricante, por lo que el rendimiento en campo puede diferir de la documentación o notas de versión del fabricante.

## Resumen del protocolo

El AT111 utiliza un protocolo de reporte para enviar posiciones GNSS, valores de sensores y telemetría del vehículo a un servidor remoto para su ingestión en software de gestión de flotas. En ese rol, el protocolo define cómo se identifica el rastreador, cuándo y qué telemetría se envía, y cómo se manejan comandos remotos o acuses de recibo desde el servidor.

- Permite que el AT111 envíe soluciones GNSS, entradas digitales y analógicas, y datos del bus del vehículo a Plaspy para mapeo y análisis.
- Transporta información de identificación y estado del dispositivo para que Plaspy pueda correlacionar mensajes entrantes con un rastreador registrado.
- Señala condiciones de evento como cambios de ignición, alarmas o activaciones de geocercas para su uso en alertas y reglas.
- Soporta transporte sobre protocolos IP comunes para que la telemetría pueda enviarse de forma fiable desde redes celulares al servidor.
- Permite reportes periódicos y basados en eventos para equilibrar consumo de energía, uso de datos y oportunidad de la información.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint público y compartido y en un puerto para conexiones entrantes de rastreadores, y detecta automáticamente el protocolo de reporte cuando un AT111 correctamente configurado se conecta. En la mayoría de los casos, los instaladores no necesitan seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- Plaspy acepta conexiones de rastreadores en el dominio d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que una única configuración de puerto saliente es suficiente.
- Cuando un AT111 apunta al endpoint de Plaspy con el transporte y credenciales correctas, Plaspy detectará el protocolo automáticamente y comenzará a ingerir telemetría.
- Los pasos típicos de configuración consisten en programar el APN y la dirección del servidor en el dispositivo, asegurar conectividad celular y verificar que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138.
- La selección manual de protocolo dentro de la plataforma suele ser innecesaria salvo en configuraciones personalizadas o no estándar del dispositivo.

## Transporte y contexto de conexión

El AT111 puede configurarse para usar transportes IP comunes al enviar telemetría a Plaspy. Según el firmware y las opciones de configuración, el equipo puede usar UDP o TCP hacia el endpoint de Plaspy; los instaladores deben elegir el transporte que mejor se adapte a sus requisitos de red y fiabilidad.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del instalador.
- El rastreador puede reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138; ambos apuntan al endpoint de ingestión de Plaspy.
- Dado que Plaspy usa el mismo puerto para todos los equipos, el número de puerto es coherente en instalaciones con AT111 y con otros rastreadores compatibles.
- Las políticas de los operadores celulares, reglas de firewall y NAT pueden afectar la conectividad; verifique que el tráfico saliente del dispositivo hacia el puerto 8888 esté permitido en la red de instalación.
- Asegúrese de que los ajustes de APN y SIM sean correctos y de que el dispositivo disponga de un plan de datos adecuado para la cadencia de reportes prevista.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar comandos disponibles, intervalos de reporte o campos opcionales en los mensajes; verifique la versión de firmware al resolver problemas.
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas celulares soportadas y las funciones de E/S disponibles; confirme la variante exacta del AT111 para su región.
- Algunas funciones requieren opciones específicas de firmware o perfiles de configuración de Astra Telematics para exponer mapeos de CANBus o manejo de entradas personalizadas.
- La selección del transporte (UDP vs TCP) puede influir en el comportamiento de entrega en condiciones móviles adversas; elija el transporte según las necesidades de fiabilidad y uso de datos.
- Las guías de configuración y las notas de lanzamiento del fabricante son la referencia autorizada para listas de comandos y sintaxis de configuración según el firmware.
- Valide cualquier personalización o integración de terceros contra la documentación oficial de Astra Telematics antes de desplegar a gran escala.

## Por qué es importante comprender el protocolo

Tener una comprensión general del protocolo de reporte del AT111 y de cómo interactúa con Plaspy ayuda a garantizar una instalación fluida, una ingestión precisa de telemetría y una operación confiable a largo plazo de los sistemas de flota.

- Configuración más rápida al saber qué dirección de servidor, transporte y ajustes de APN programar en el dispositivo.
- Resolución de problemas más ágil cuando los mensajes no llegan por temas de transporte, APN o firewall.
- Mejor planificación de energía y datos alineando intervalos de reporte y disparadores de eventos con las necesidades operativas.
- Expectativas claras sobre qué telemetría y datos del bus del vehículo puede proporcionar el dispositivo a Plaspy.
- Decisiones informadas sobre actualizaciones de firmware y cuándo revisar las notas de versión de Astra Telematics por cambios de comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el AT111 con Plaspy ofrece a las organizaciones una vía práctica para integrar un rastreador robusto y con antena externa en una plataforma telemática centralizada. La flexibilidad de recepción GNSS del AT111, sus amplias E/S y las interfaces CANBus lo hacen adecuado para seguimiento de flotas, monitoreo de activos y aplicaciones antirrobo donde se requiere posición y telemetría vehicular confiables.

El endpoint de ingestión compartido de Plaspy simplifica la provisión de dispositivos porque todos los equipos compatibles reportan al mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a d.plaspy.com o 54.85.159.138 en el puerto 8888. Para conocer más sobre el funcionamiento de Plaspy y evaluar las funciones de la plataforma visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la documentación específica del dispositivo y la información de firmware actuales en el sitio de Astra Telematics https://astratelematics.com/.
