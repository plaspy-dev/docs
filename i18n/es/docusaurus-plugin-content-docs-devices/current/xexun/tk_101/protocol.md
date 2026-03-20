---
slug: /xexun/tk_101/protocol
id: tk_101-protocol
sidebar_label: Protocol
title: Xexun - TK-101 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público para integrar el rastreador Xexun TK-101 con Plaspy
keywords:
  - xexun tk 101 protocolo
  - xexun tk 101 gps protocolo
  - tk 101 protocolo de rastreo
  - comunicación rastreador xexun
  - compatibilidad rastreador plaspy
  - guía integración plaspy
  - protocolo rastreador gps
  - rastreo vehicular tk 101
  - rastreador gestión de flotas
  - visión general protocolo tk 101
---

# Xexun - Protocolo TK-101

Esta página describe el contexto público del protocolo para utilizar el rastreador GPS Xexun TK-101 con la plataforma Plaspy. Explica cómo el dispositivo informa su ubicación y estado a un servidor remoto mediante conectividad GSM GPRS, y cómo Plaspy interpreta esas comunicaciones a nivel general. El TK-101 admite reporte en tiempo real, envío por SMS o GPRS, reportes automáticos, alertas por geocerca, monitoreo SOS, alertas de velocidad y notificaciones de batería baja, todas relevantes para la integración.

Plaspy utiliza un endpoint y puerto compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en el contexto público y no en formatos propietarios o detalles internos del dispositivo.

## Resumen del protocolo

El protocolo usado por el TK-101 permite que el rastreador envíe información de posición, movimiento y alertas desde el dispositivo hacia un servidor remoto para su procesamiento y visualización. En términos generales, el protocolo define cómo se identifica el equipo, cómo se inician y programan los reportes, y qué tipos de eventos deben transmitirse para monitoreo y alertas.

- Proporciona identificación del dispositivo y datos de sesión para que la plataforma asocie los reportes con un rastreador específico
- Envía actualizaciones periódicas de posición y mensajes por eventos como SOS, ruptura de geocerca, movimiento y batería baja
- Permite el uso de GPRS como vía principal de datos, con SMS como opción de configuración o respaldo
- Soporta reporte de la última ubicación conocida cuando no hay fijación GPS, para mantener continuidad en el seguimiento
- Incluye metadatos útiles para monitoreo, como velocidad, marcas de tiempo e indicadores básicos de estado

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones en un único endpoint y puerto compartidos y contiene lógica para reconocer el protocolo de cada reporte entrante. Cuando un TK-101 esté configurado para reportar al endpoint de Plaspy, la plataforma relacionará los mensajes entrantes con el manejador compatible sin necesidad de seleccionar el protocolo manualmente en la mayoría de los casos.

- Plaspy escucha reportes de dispositivo en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 y Plaspy aceptará el transporte seleccionado
- Cuando un dispositivo reporta de forma consistente al endpoint de Plaspy, la plataforma detecta automáticamente el patrón del protocolo y asocia los datos con el equipo correcto
- Usted normalmente no necesitará seleccionar un protocolo dentro de Plaspy si el rastreador está correctamente apuntando al servidor de Plaspy

## Transporte y contexto de conexión

El TK-101 puede usar GPRS para enviar datos a un servidor remoto, y la capa de transporte elegida en el equipo afecta la entrega de mensajes. Plaspy soporta ambas opciones comunes de transporte en el puerto estándar para que la configuración del dispositivo sea sencilla.

- Los equipos pueden configurarse para enviar reportes a d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- El dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración del rastreador y las capacidades del firmware
- Plaspy acepta conexiones en el mismo puerto para todos los dispositivos soportados, lo que reduce la complejidad de la configuración
- La elección entre UDP y TCP se realiza en el nivel de configuración del dispositivo y debe seguir la documentación del equipo para garantizar reportes fiables
- La calidad de la red y el comportamiento GPRS del operador pueden influir en la entrega de mensajes y en la lógica de reintentos

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar intervalos de reporte, campos disponibles y funciones opcionales; siempre registre la versión de firmware al validar el comportamiento
- Diferentes revisiones de hardware o lotes de producción pueden alterar modos de transporte soportados o características opcionales
- Los comandos de configuración del fabricante y las opciones por SMS pueden influir en si el dispositivo usa GPRS o SMS para reportar
- La selección de transporte entre UDP y TCP debe seguir la documentación del dispositivo y el balance deseado entre fiabilidad y latencia
- Confirme que el equipo esté configurado para reportar al endpoint y puerto de Plaspy para que la detección automática tenga éxito
- Valide el comportamiento de geocercas, SOS y alertas de batería baja después de la configuración para asegurar que el rastreador transmita los eventos esperados

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK-101 ayuda a garantizar una configuración fluida, reportes precisos y operación predecible una vez que el dispositivo esté conectado a Plaspy. Conocer el comportamiento general del protocolo acelera la resolución de problemas y contribuye a mantener un seguimiento confiable en despliegues en producción.

- Permite verificar que el dispositivo apunte correctamente al endpoint de Plaspy y utilice el transporte esperado
- Ayuda a diagnosticar reportes faltantes o conectividad intermitente enfocándose primero en transporte y configuración
- Aclara qué eventos enviará el rastreador para que las alertas y automatizaciones en Plaspy se configuren adecuadamente
- Facilita la planificación ante actualizaciones de firmware y reconoce cuándo el comportamiento puede cambiar tras una actualización
- Mejora la fiabilidad operativa alineando intervalos de reporte y gestión de batería con las necesidades de monitoreo

## Por qué usar Plaspy con este protocolo

Utilizar el Xexun TK-101 con Plaspy brinda a las organizaciones un camino sencillo para incorporar datos del dispositivo a una plataforma de seguimiento gestionada. El TK-101 ofrece las funciones básicas de rastreo que muchos despliegues requieren, y Plaspy acepta reportes en un endpoint compartido, por lo que la incorporación suele ser rápida una vez que se actualizan los ajustes del equipo para apuntar a la plataforma.

Plaspy escucha en el dominio d.plaspy.com y en 54.85.159.138 en el puerto 8888 usando un puerto compartido para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Para conocer más sobre cómo Plaspy trabaja con una amplia gama de modelos de rastreadores y revisar opciones de despliegue, visite https://www.plaspy.com. Para los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware e instrucciones de configuración del fabricante, verifique la información en https://www.xexun.com/ ya que el comportamiento del proveedor puede cambiar con el tiempo.
