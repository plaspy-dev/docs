---
slug: /intellitrack/intellitrac_p1/protocol
id: intellitrac_p1-protocol
sidebar_label: Protocol
title: Intellitrack - Intellitrac P1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para el Intellitrac P1 y cómo se comunica con la plataforma Plaspy
keywords:
  - protocolo Intellitrack Intellitrac P1
  - protocolo GPS Intellitrack
  - protocolo de seguimiento Intellitrac P1
  - comunicación Intellitrac P1
  - compatibilidad Intellitrack Plaspy
  - rastreador GPS Intellitrac P1
  - protocolo rastreador personal GPS
  - integración de dispositivos Plaspy
  - guía de protocolo para rastreadores GPS
  - protocolo para seguimiento de activos y personas
---

# Intellitrack - Protocolo Intellitrac P1

Esta página explica el contexto público del protocolo para usar el rastreador personal Intellitrac P1 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos amplios y no sensibles, para que usted sepa qué configurar y qué esperar al conectar un Intellitrac P1 para rastreo y monitoreo.

El Intellitrac P1 es un rastreador personal compacto y resistente al agua, con batería interna de respaldo y sensores integrados de movimiento y altitud. Plaspy emplea una configuración de conexión compartida para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí presentada sirve como guía general de integración y no como especificación detallada de firmware.

## Visión general del protocolo

El protocolo de comunicación del Intellitrac P1 define cómo el dispositivo informa posición, movimiento, lecturas de sensores y estado del equipo a un servidor remoto como Plaspy. En la práctica, el protocolo permite al rastreador identificarse, enviar actualizaciones periódicas o por eventos, y aportar la telemetría necesaria para el monitoreo y las alertas.

- Proporciona identificación del dispositivo e información de sesión para que Plaspy relacione los informes con el rastreador correcto
- Envía actualizaciones de ubicación y marcas de tiempo aptas para uso en mapas y reproducción histórica en Plaspy
- Incluye datos de sensores, como movimiento y altitud, que sirven para detectar actividad y contexto
- Transmite indicadores de estado del dispositivo, incluyendo batería y conectividad, para monitorización operativa
- Soporta informes regulares y mensajes por eventos para optimizar consumo de energía y datos

## Detección del protocolo por Plaspy

Plaspy acepta conexiones entrantes en un punto común y determina automáticamente qué protocolo de rastreador se está usando en función del tráfico recibido. En la mayoría de los casos, un Intellitrac P1 configurado correctamente comenzará a reportar al endpoint de Plaspy y no requerirá selección manual de protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- La plataforma escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Los dispositivos configurados para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 llegarán a Plaspy
- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades y ajustes
- Debido a la detección automática del protocolo por parte de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente cuando el rastreador apunta correctamente al endpoint de Plaspy

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el Intellitrac P1 alcanza Plaspy a través de la red móvil y qué opciones de transporte se usan comúnmente. El rastreador soporta el envío de datos sobre redes IP móviles estándar y puede configurarse para usar UDP o TCP según el balance deseado entre latencia y fiabilidad.

- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como dirección del servidor
- Plaspy escucha en el puerto 8888 y utiliza ese mismo puerto para todos los dispositivos compatibles
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración y el soporte de firmware
- UDP puede reducir la sobrecarga y la latencia, mientras que TCP ofrece garantías adicionales de entrega cuando se requieren
- Es necesario configurar correctamente el APN y la SIM en el dispositivo para garantizar la entrega fiable al endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles o las funciones opcionales; consulte siempre las notas de la versión del firmware
- Las revisiones de hardware o las variantes regionales pueden modificar los sensores disponibles o el comportamiento de radio y afectar los datos reportados
- La elección de transporte entre UDP y TCP puede influir en la entrega y debe seleccionarse según las condiciones de red y las prioridades operativas
- Los ajustes del fabricante, como intervalos de reporte predeterminados o modos de ahorro de energía, pueden variar entre lotes
- Valide la compatibilidad para cualquier flota a escala probando un dispositivo de muestra antes del despliegue masivo
- Consulte la documentación oficial del fabricante para pasos de configuración y limitaciones específicas del dispositivo

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Intellitrac P1 ayuda a asegurar una configuración precisa, reportes fiables y una resolución de problemas más rápida al integrarlo con Plaspy. Saber qué transporte, endpoint de servidor y comportamiento de mensajes esperar reduce el tiempo dedicado a diagnosticar problemas de conectividad y datos.

- Confirma que la dirección del servidor y el puerto están configurados correctamente para que los datos lleguen a Plaspy
- Ayuda a elegir UDP o TCP según las necesidades de latencia y fiabilidad de la red
- Facilita la resolución cuando faltan informes al revisar la red, la SIM y el estado del dispositivo
- Garantiza que Plaspy capture e interprete correctamente datos de sensores como movimiento y altitud
- Permite planificar la duración de batería y los intervalos de reporte según el comportamiento real del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el Intellitrac P1 con Plaspy ofrece un camino directo para convertir los datos GPS y de sensores en información de ubicación accionable. Para organizaciones que rastrean personas o activos portátiles valiosos, Plaspy recibe los informes del dispositivo, detecta automáticamente el protocolo y presenta posición y estado para monitoreo, alertas y análisis histórico.

Plaspy está diseñado para aceptar reportes en un endpoint compartido, de modo que dispositivos como el Intellitrac P1 pueden integrarse sin configuraciones de puerto por dispositivo. Para conocer más sobre cómo Plaspy gestiona integraciones de dispositivos y explorar las capacidades de la plataforma, visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del dispositivo pueden cambiar con actualizaciones de firmware y del fabricante, por lo que le recomendamos verificar los detalles actuales del protocolo y las notas de firmware en el sitio del fabricante en https://www.systech-iot.com/.
