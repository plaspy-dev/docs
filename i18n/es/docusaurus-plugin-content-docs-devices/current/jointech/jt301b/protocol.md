---
slug: /jointech/jt301b/protocol
id: jt301b-protocol
sidebar_label: Protocol
title: Jointech - JT301B Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador GPS Jointech JT301B con el servidor Plaspy y su contexto de conexión
keywords:
  - Protocolo Jointech JT301B
  - Protocolo GPS JT301B
  - Jointech JT301B Plaspy
  - Protocolo de rastreo JT301B
  - Protocolo de comunicación JT301B
  - Protocolo rastreador de activos Jointech
  - Compatibilidad rastreador JT301B
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador GPS de activos
  - Protocolo rastreador logística
---

# Jointech - Protocolo JT301B

Esta página describe el contexto público del protocolo para usar el rastreador de activos GPS Jointech JT301B con la plataforma Plaspy. Resume cómo se comunica el rastreador en términos generales, qué ajustes de conexión utiliza Plaspy y qué aspectos debe revisar al desplegar el JT301B para monitoreo logístico y de la cadena de suministro.

El JT301B es un rastreador de activos compacto y recargable con posicionamiento multimodal y sensores ambientales. Plaspy emplea ajustes de conexión compartidos para dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Este documento se centra en el contexto público del protocolo, no en detalles internos del firmware.

## Resumen del protocolo

El protocolo de comunicación es el mecanismo que utiliza el JT301B para reportar ubicación, telemetría de sensores y alertas de eventos a un servidor remoto como Plaspy. En la práctica, el protocolo define cómo se identifica el equipo, con qué frecuencia reporta y qué campos de telemetría se envían para que Plaspy pueda mostrarlos, almacenarlos y generar alertas a partir de los datos recibidos.

- Permite que el JT301B transmita datos de posicionamiento multimodal, incluyendo GPS, BeiDou y LBS celular, hacia un backend.
- Transporta telemetría ambiental como temperatura y humedad para que Plaspy pueda supervisar carga refrigerada o mercadería sensible.
- Envía alertas orientadas a eventos como movimiento, manipulación, apertura de puertas y detección de desempaque para flujos de trabajo anti robo.
- Proporciona información de identidad y sesión para asociar los mensajes entrantes con el activo correcto en Plaspy.
- Regula la frecuencia de reporte y los desencadenantes de eventos que afectan la vida útil de la batería y el comportamiento operativo.
- Opera en conjunto con elecciones de capa de transporte como TCP o UDP para alcanzar el endpoint de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador a partir del tráfico entrante cuando el dispositivo está configurado correctamente para reportar a Plaspy. En general, los usuarios no necesitan seleccionar un protocolo manualmente dentro de Plaspy si el JT301B apunta a la dirección correcta y usa un transporte compatible.

- El dominio público del servidor de Plaspy para envío de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy para reportes es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos; todos los dispositivos soportados por Plaspy usan este mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión y el flujo de mensajes entrantes.
- Si el rastreador envía reportes correctamente formateados a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy ingerirá la telemetría y la asociará al registro de dispositivo correspondiente.
- Normalmente, la configuración adecuada del dispositivo para apuntar al endpoint de Plaspy es todo lo que se requiere para la detección.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el JT301B llega al servidor de Plaspy y qué opciones de transporte se usan comúnmente. El JT301B puede configurarse para usar UDP o TCP según el soporte del equipo y las necesidades del despliegue; ambos transportes son compatibles al reportar al endpoint de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 para reportes.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración en flotas mixtas.
- La elección del transporte puede afectar características de entrega, como fiabilidad y sobrecarga; seleccione el modo que mejor se ajuste al firmware del equipo y al entorno de red.
- Verifique que el APN celular y la conectividad saliente permitan tráfico hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- El JT301B se describe como compatible con Plaspy para rastreo de activos y reporte de telemetría.
- Las revisiones de firmware pueden cambiar los campos de reporte, la cadencia o los transportes soportados; verifique las notas de la versión de firmware al solucionar problemas.
- Las revisiones de hardware o variantes regionales pueden incluir sensores distintos o comportamientos de IMEI que afecten la forma en que el equipo reporta.
- La selección de transporte entre TCP y UDP es configurable en el dispositivo y puede estar limitada por el firmware o por las redes de los operadores.
- Los comandos de configuración del fabricante y los pasos de activación son específicos del proveedor; consulte la documentación oficial del fabricante para instrucciones precisas.
- Siempre valide la configuración de un dispositivo de muestra contra Plaspy enviando reportes de prueba al endpoint antes de un despliegue masivo.
- Los operadores de red y los firewalls deben permitir conexiones salientes a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el JT301B ayuda a los equipos de TI y operaciones a desplegar, solucionar y mantener un rastreo de activos confiable a lo largo del tiempo. Tener claridad sobre el comportamiento del protocolo reduce la fricción en la integración y favorece un monitoreo predecible en Plaspy.

- Ayuda a confirmar que el dispositivo reporta la telemetría requerida, como ubicación, temperatura y humedad.
- Simplifica la resolución de problemas cuando los dispositivos no aparecen en Plaspy al verificar transporte, endpoint y configuración del equipo.
- Contribuye a la optimización de batería al entender los intervalos de reporte y las características de reporte por eventos.
- Garantiza que los eventos de manipulación y alarmas se reciban y procesen al confirmar que el dispositivo puede alcanzar el endpoint de Plaspy.
- Apoya la gestión del cambio cuando actualizaciones de firmware o revisiones de hardware alteran el comportamiento de los reportes.

## Por qué usar Plaspy con este protocolo

Usar el JT301B con Plaspy ofrece a equipos de logística y flotas una forma práctica de combinar hardware compacto de rastreo de activos con una plataforma central para visibilidad y alertas. El posicionamiento multimodal y los sensores ambientales del JT301B se integran de manera natural con la capacidad de Plaspy para ingerir telemetría, mostrar ubicación en tiempo real y activar alertas configurables para transporte refrigerado, carga de alto valor y flotas de activos reutilizables.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para detalles actuales del protocolo y firmware específicos del dispositivo, verifique la información con el fabricante en https://www.jointcontrols.com/. El soporte del protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que se recomienda consultar los recursos oficiales del fabricante.
