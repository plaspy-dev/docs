---
slug: /arknav/r_9w/protocol
id: r_9w-protocol
sidebar_label: Protocol
title: ArkNav - R-9W Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo sobre cómo el ArkNav R-9W se comunica con Plaspy para seguimiento de flotas confiable
keywords:
  - Protocolo ArkNav R-9W
  - Protocolo GPS ArkNav R-9W
  - Compatibilidad ArkNav R-9W Plaspy
  - Protocolo rastreador GPS ArkNav
  - Protocolo de seguimiento R-9W
  - Protocolo de rastreo vehicular Plaspy
  - Gestión de flotas ArkNav R-9W
  - Telemetría GPS R-9W
  - Telemetría FTP ACK R-9W
  - Protocolo rastreador GPS resistente al agua
---

# ArkNav - Protocolo R-9W

Esta página explica, en términos generales y no sensibles, cómo se comunica el rastreador ArkNav R-9W con Plaspy. Está dirigida a gestores de flota y equipos técnicos que necesitan saber qué configurar y qué esperar al integrar el R-9W en Plaspy para rastreo en tiempo real y captura de telemetría.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que aquí se describe el funcionamiento típico del R-9W y se recomienda verificar la documentación del fabricante.

## Visión general del protocolo

El R-9W utiliza un protocolo de reporte para enviar posiciones GPS, telemetría y eventos de estado a un servidor remoto para su ingestión en Plaspy. El protocolo regula cómo el equipo se identifica, cómo reporta telemetría (por ejemplo GPS y lecturas analógicas) y cómo interactúa con los ACK del servidor y las funciones de gestión de firmware.

- Permite el envío de posiciones y telemetría del R-9W a un endpoint central para que Plaspy las ingiera.
- Transporta la identidad del dispositivo y la información de eventos para que Plaspy pueda asociar los mensajes entrantes con el vehículo y la fuente correspondiente.
- Incluye transferencia FTP y un mecanismo de ACK personalizado para entrega confiable y intercambio remoto de datos según la implementación del fabricante.
- Permite actualizaciones de firmware y de configuración por aire (OTA) iniciadas por el fabricante o por flujos de gestión remota.
- Facilita el reporte de eventos como movimiento, pérdida de alimentación externa y entradas digitales/analógicas que Plaspy usa en alertas y paneles.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint público común y detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado comienza a reportar al servicio. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el equipo está apuntando al endpoint de Plaspy y usa los ajustes de transporte compatibles.

- El dominio de servidor de Plaspy para reporte de dispositivos es d.plaspy.com, que resuelve al endpoint público de Plaspy.
- La IP de referencia del servidor Plaspy es 54.85.159.138 para despliegues que prefieren direccionamiento numérico.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador según el tráfico entrante y la identificación del equipo.
- La configuración correcta del dispositivo para apuntar el R-9W al endpoint de Plaspy es por lo general el requisito principal para la detección automática del protocolo.
- Si un rastreador utiliza variantes de transporte o funcionalidades, Plaspy identificará la variante activa cuando el dispositivo se conecte y empiece a reportar.

## Contexto de transporte y conexión

El R-9W puede configurarse para usar transporte TCP o UDP estándar para enviar datos a un servidor remoto. Para la integración con Plaspy, el contexto de conexión es consistente entre dispositivos y se centra en asegurar que el rastreador reporte al endpoint y puerto correctos de Plaspy.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las preferencias de configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados con el fin de simplificar la configuración y las reglas de firewall.
- La elección del transporte puede afectar las características de entrega de la telemetría y los flujos de control FTP según la red y la configuración del dispositivo.
- Verifique que el firewall de red y la configuración del operador permitan conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar entre versiones de firmware del R-9W; una actualización de firmware puede cambiar los campos de telemetría disponibles y el comportamiento.
- Las revisiones de hardware y las interfaces opcionales, como I BUTTON o entradas analógicas, pueden modificar lo que el dispositivo reporta y qué valores recibe Plaspy.
- La selección de transporte entre UDP y TCP se configura en el equipo y puede influir en la retransmisión y la semántica de entrega.
- La transferencia FTP y los mecanismos de ACK son características del fabricante que el R-9W expone para fiabilidad de datos y gestión remota.
- Valide la configuración del dispositivo y la versión de firmware con la documentación del fabricante antes de un despliegue a gran escala.
- Cuando tenga dudas, pruebe un dispositivo con Plaspy para confirmar el reporte de eventos esperado y el comportamiento de comandos remotos.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el R-9W ayuda a asegurar una configuración correcta, facilita la resolución de problemas y garantiza un funcionamiento predecible a largo plazo cuando se usa con Plaspy. Saber qué reporta el equipo y cómo se conecta reduce la fricción en la integración y favorece el monitoreo confiable de la flota.

- Ayuda a confirmar que el dispositivo está apuntando a d.plaspy.com o a 54.85.159.138 y usando el puerto 8888 para lograr conectividad.
- Facilita la interpretación de la telemetría entrante y la correlación de entradas de sensores, como detección de movimiento o pérdida de alimentación externa, con eventos en Plaspy.
- Simplifica la localización de problemas cuando los mensajes no aparecen en Plaspy, acotando la investigación a transporte, firmware o configuración.
- Apoya la toma de decisiones sobre TCP frente a UDP según la confiabilidad de la red y los requisitos de entrega esperados.
- Recomienda verificar firmware y disponibilidad de funciones al planificar actualizaciones OTA y cambios masivos de configuración.

## Por qué usar Plaspy con este protocolo

Usar el ArkNav R-9W con Plaspy brinda a las organizaciones una vía práctica para obtener visibilidad de ubicación en tiempo real, captura de telemetría y alertas basadas en eventos para flotas que operan en entornos exigentes. Plaspy ingiere posición, movimiento, estado de alimentación y entradas analógicas para que los equipos monitoreen el estado operativo, respondan a eventos de robo o manipulación y analicen la telemetría histórica para mantenimiento y eficiencia de combustible.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el ArkNav R-9W visite https://www.plaspy.com. Por favor confirme los detalles específicos del protocolo, el comportamiento del firmware y las notas de implementación con el fabricante en https://www.arknavgps.com.tw/ ya que las funciones del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
