---
slug: /oigo_telematics/ar_2cx/protocol
id: ar_2cx-protocol
sidebar_label: Protocol
title: Oigo Telematics - AR-2CX Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el Oigo Telematics AR-2CX con Plaspy, con detalles de transporte e integración
keywords:
  - protocolo Oigo Telematics AR-2CX
  - protocolo GPS AR-2CX
  - protocolo de rastreo AR-2CX
  - protocolo Oigo Telematics Plaspy
  - protocolo serie AR
  - rastreo vehicular AR-2CX
  - reporte de eventos AR-2CX
  - compatibilidad rastreo de flotas
  - comunicación rastreador GPS
  - protocolo de dispositivo Plaspy
---

# Oigo Telematics - Protocolo AR-2CX

Esta página presenta una visión pública y no sensible del contexto de comunicación del rastreador AR-2CX cuando se utiliza con Plaspy. Explica cómo el equipo reporta, de forma general, la ubicación y eventos a Plaspy y qué debe considerarse al configurar el rastreador para que funcione con la plataforma.

El AR-2CX forma parte de la serie AR de Oigo Telematics, diseñada para gestión de flotas y recuperación de vehículos robados, con opciones de reporte de eventos flexibles e instalación discreta. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el AR-2CX formatea y transmite información de posición, estado y eventos a un servidor remoto como Plaspy. Esta sección se enfoca en los aspectos públicos de esa comunicación: cómo apuntar el dispositivo a Plaspy, qué opciones de transporte se esperan y qué factores operativos suelen afectar la integración.

- El protocolo permite que el rastreador informe la ubicación GPS, marcas de tiempo y telemetría que Plaspy utiliza para mapas y análisis.
- Los reportes de eventos y alertas, como exceso de velocidad, frenadas bruscas y uso no autorizado, se envían como parte de los informes del equipo para que Plaspy genere notificaciones e historial.
- Cada informe incluye un identificador de dispositivo o número de serie para que Plaspy asocie los datos entrantes con una unidad AR-2CX específica.
- Los intervalos de reporte, la notificación basada en movimiento y los disparadores de evento suelen configurarse en el equipo y determinan la frecuencia de envío de datos a Plaspy.
- El protocolo permite tanto actualizaciones periódicas de posición como mensajes ad hoc por eventos, de modo que los sistemas puedan conciliar estado e historial de cada activo.

## Cómo detecta Plaspy el protocolo

Plaspy ofrece un único endpoint compartido al que pueden reportar todos los dispositivos soportados. Cuando un AR-2CX se configura para enviar datos a Plaspy, la plataforma hace coincidir el tráfico entrante con un protocolo compatible y, en la mayoría de los casos, asocia el dispositivo con una cuenta de Plaspy automáticamente.

- El endpoint del servidor Plaspy es d.plaspy.com y la IP pública equivalente es 54.85.159.138.
- El puerto de escucha que usa Plaspy es 8888 y Plaspy emplea el mismo puerto para todos los dispositivos soportados.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888, según lo permita el firmware y la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega tráfico al endpoint compartido; en general no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el equipo está correctamente configurado.
- La identificación correcta del dispositivo en los informes (ID único o serie) es esencial para que Plaspy empareje un rastreador con una cuenta y comience a procesar datos de ubicación y eventos.

## Transporte y contexto de conexión

La elección del transporte y los ajustes de conexión determinan cómo los mensajes del AR-2CX llegan a Plaspy. La configuración del equipo debe apuntar al endpoint de Plaspy y usar un transporte compatible con el firmware y la instalación.

- El AR-2CX puede configurarse para usar UDP o TCP en el puerto 8888; seleccione el transporte que soporte su firmware y que funcione en su entorno de red.
- Los equipos pueden apuntar al nombre de host d.plaspy.com o directamente a 54.85.159.138 cuando restricciones de DNS o enrutamiento exijan una dirección IP.
- El enfoque de puerto único de Plaspy simplifica la configuración: todos los dispositivos reportan al puerto 8888 independientemente del modelo.
- Las redes celulares, NAT y los firewalls del operador pueden afectar la entrega; comprobar que el equipo puede alcanzar d.plaspy.com o la IP del servidor en el puerto 8888 es un paso útil para resolver problemas.
- Al cambiar el modo de transporte, valide que el firmware del AR-2CX y cualquier equipo de red intermedio permitan el paso del protocolo seleccionado.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades AR-2CX pueden alterar los mensajes exactos y los tipos de evento disponibles; verifique las notas de la versión del firmware cuando sea posible.
- Revisión de hardware o accesorios opcionales pueden influir en qué eventos o campos de telemetría se reportan.
- Los menús de configuración o herramientas de aprovisionamiento del fabricante pueden ofrecer opciones que modifiquen el comportamiento de reporte o la selección de transporte.
- La elección de transporte (UDP vs TCP) depende del soporte del dispositivo y de los requisitos de fiabilidad de la red; escoja la opción que se ajuste a sus restricciones de despliegue.
- La instalación discreta y la colocación de la antena pueden afectar el rendimiento GPS y el disparo de eventos; esto impacta los datos que Plaspy recibe.
- Valide la compatibilidad con la documentación más reciente de Oigo Telematics para detalles específicos del modelo antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración inicial sin contratiempos y operaciones confiables con Plaspy. Incluso con detección automática y endpoints compartidos, el conocimiento práctico de cómo reporta el rastreador y qué envía resulta valioso para la resolución de problemas y la configuración.

- Ayuda a definir los ajustes correctos del equipo para transporte, intervalos de reporte y filtros de eventos.
- Conocer los eventos que puede generar el AR-2CX hace más eficaz la configuración de alertas en Plaspy.
- Entender los campos de identificación en los informes reduce fricciones al incorporar dispositivos y emparejarlos con cuentas.
- Estar al tanto de diferencias de firmware y hardware evita comportamientos inesperados durante actualizaciones o cambios de modelo.
- Simplifica la resolución de problemas cuando los mensajes no llegan o aparecen malformados en el endpoint de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el AR-2CX con Plaspy ofrece una forma centralizada de monitorear vehículos, recibir alertas de eventos y conservar datos históricos de ubicación para la gestión de flotas y procesos de recuperación. El soporte del AR-2CX para reporte de eventos y su instalación discreta complementan las capacidades de procesamiento centralizado y alertas de Plaspy para proporcionar visibilidad operativa.

Para obtener más información sobre la integración de rastreadores como el AR-2CX con Plaspy visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y guías de instalación más actuales consulte al fabricante en https://www.oigotelematics.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con la información oficial del fabricante.
