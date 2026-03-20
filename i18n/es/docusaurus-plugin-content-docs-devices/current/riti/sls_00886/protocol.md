---
slug: /riti/sls_00886/protocol
id: sls_00886-protocol
sidebar_label: Protocol
title: Riti - SLS-00886 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas para integrar el rastreador GPS Riti SLS-00886 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Riti SLS-00886 protocolo
  - Riti SLS-00886 protocolo GPS
  - Riti SLS-00886 protocolo de comunicación
  - Riti SLS-00886 protocolo de rastreo
  - rastreador Riti Plaspy
  - compatibilidad SLS-00886 Plaspy
  - integración rastreador GPS Riti
  - protocolo de seguimiento de vehículos Riti
  - protocolo GPRS para rastreador GPS
  - protocolo de dispositivo Plaspy
---

# Riti - Protocolo SLS-00886

Esta página describe el contexto público del protocolo para usar el rastreador vehicular GPS Riti SLS-00886 con Plaspy. Se centra en cómo el dispositivo se comunica con un servicio backend y qué esperar al apuntar el SLS-00886 a Plaspy para el reporte de ubicación en tiempo real. La guía aquí es de alto nivel y basada en información pública; para integraciones o despliegues se recomienda revisar la documentación del fabricante y la configuración del equipo.

Plaspy acepta reportes de dispositivos compatibles usando ajustes de conexión compartidos y detecta automáticamente el protocolo del rastreador. El SLS-00886 puede enviar coordenadas GPS por GPRS a un servidor o, como alternativa, remitir posiciones vía SMS. El comportamiento exacto puede variar según la revisión de firmware, la versión de hardware y la implementación del fabricante, por lo que conviene verificar la configuración del dispositivo antes de la integración.

## Resumen del protocolo

El protocolo del SLS-00886 es el mecanismo que permite que las posiciones GPS, estados y alarmas viajen desde el rastreador hasta un servidor como Plaspy. En la práctica, esto significa que el equipo usa datos móviles para abrir una sesión de transporte hacia un endpoint de Plaspy y luego envía la posición y la telemetría en el formato definido por el dispositivo. El rastreador también admite reportes por SMS hacia números telefónicos como alternativa a las subidas por GPRS.

- Proporciona un método para que el SLS-00886 se identifique y entregue coordenadas GPS y telemetría a un servidor backend.
- Habilita el reporte de eventos por movimiento, estado de alimentación y otras notificaciones de seguridad del dispositivo.
- Permite operar sobre el canal de datos GPRS para reportes continuos o mediante SMS para alertas directas.
- Actúa como puente entre el hardware del dispositivo, por ejemplo el SiRF Star III GPS, y el backend de gestión de flotas que almacena y muestra los datos de ubicación.
- Soporta funciones prácticas como carga de historial y reportes periódicos de posición útiles para monitoreo de flotas y reconstrucción de rutas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes en un único endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador. Para la mayoría de usuarios esto evita tener que seleccionar manualmente un protocolo dentro de Plaspy, siempre que el rastreador esté configurado para reportar al endpoint de Plaspy. La detección automática facilita la incorporación de equipos como el Riti SLS-00886 que pueden reportar por GPRS.

- Plaspy usa un endpoint público único para el reporte de dispositivos y detecta automáticamente el protocolo.
- Normalmente solo es necesario configurar el dispositivo para que reporte al endpoint y puerto de Plaspy; la identificación del protocolo la maneja la plataforma.
- El reporte correcto depende de que el dispositivo esté apuntando al dominio o IP y al tipo de transporte adecuados.
- Si el rastreador está correctamente configurado hacia el endpoint de Plaspy, por lo general no es necesario seleccionar un protocolo de forma manual en la plataforma.
- La detección automática resulta útil al gestionar flotas mixtas con distintos modelos de rastreadores y niveles de firmware.

## Transporte y contexto de conexión

La conexión desde los dispositivos SLS-00886 a Plaspy se realiza a través de redes móviles y puede usar cualquiera de los métodos de transporte que admite el rastreador. Al configurar el equipo puede elegir el transporte de red y el endpoint al que se enviarán los reportes. Plaspy documenta un único endpoint y puerto que usan todos los dispositivos.

- Los equipos pueden configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos de rastreadores.
- La elección entre UDP y TCP depende de la capacidad del firmware del equipo y del balance deseado entre confiabilidad y latencia.
- Asegúrese de que el APN y los ajustes GPRS del dispositivo sean correctos para que pueda establecer una sesión hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el comportamiento de reporte y los tipos de mensajes disponibles en el SLS-00886.
- Revisiones de hardware o paquetes de funciones opcionales pueden introducir diferencias en los campos de telemetría soportados.
- Ajustes del lado del fabricante, como el modo de reporte por defecto o retrocesos a SMS, pueden afectar la interacción del dispositivo con los servidores.
- La elección de UDP o TCP como transporte puede influir en el comportamiento de entrega según las condiciones de la red y el soporte del dispositivo.
- Siempre valide la configuración del dispositivo confirmando que el rastreador apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Pruebe un dispositivo representativo de cada variante de firmware y hardware antes de desplegar en gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una integración fluida, reportes predecibles y una resolución más rápida de incidencias cuando un dispositivo no funciona como se espera. Con claridad sobre cómo reporta el rastreador, los equipos pueden diagnosticar problemas de conectividad, confirmar campos de telemetría y planificar actualizaciones de firmware o cambios de configuración sin incertidumbre.

- Ayuda a confirmar que el dispositivo está enviando los mensajes y campos esperados al backend.
- Reduce el tiempo de resolución de problemas de conectividad o calidad de datos al acotar el ámbito de la investigación.
- Facilita la planificación de la selección de transporte y el uso de datos al desplegar dispositivos en redes celulares.
- Asegura que las alarmas y reportes de eventos se capturen correctamente en la plataforma de gestión de flotas.
- Contribuye a validar que batería, ignición y otras telemetrías se reporten de forma consistente entre versiones de firmware.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Riti SLS-00886 ofrece una forma estandarizada de recolectar ubicación y telemetría de dispositivos que soportan reportes por GPRS. El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy simplifican la incorporación y reducen la carga de configuración para flotas con modelos mixtos. Eso hace de Plaspy una opción práctica para organizaciones que buscan visibilidad centralizada y supervisión operativa de sus vehículos rastreados.

Para saber más sobre Plaspy y cómo maneja el reporte de dispositivos y la visibilidad de flotas, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y recomendaciones de implementación más actuales, verifique la información en el sitio del fabricante https://www.riti.com.tw/. El soporte de protocolos y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación oficial de Riti.
