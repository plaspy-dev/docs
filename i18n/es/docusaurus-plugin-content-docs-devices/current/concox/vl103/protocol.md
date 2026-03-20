---
slug: /concox/vl103/protocol
id: vl103-protocol
sidebar_label: Protocol
title: Concox - VL103 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para conectar el rastreador Concox VL103 a Plaspy con ajustes de conexión compartidos y detalles de detección
keywords:
  - Protocolo Concox VL103
  - Protocolo GPS Concox VL103
  - Comunicación Concox VL103
  - Protocolo de rastreo VL103
  - Compatibilidad Concox VL103 Plaspy
  - Rastreo de flotas VL103
  - Rastreador GPS Concox VL103
  - Integración dispositivo VL103
  - Monitoreo remoto VL103
  - Protocolo de dispositivo Plaspy
---

# Concox - Protocolo VL103

Esta página ofrece el contexto público del protocolo para usar el rastreador Concox VL103 con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué puntos de conexión expone Plaspy públicamente y qué verificar al configurar el rastreador para notificar ubicación, estado y alertas a Plaspy. La orientación aquí está pensada para administradores de flotas e integradores que necesitan comprender el papel de la comunicación sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo cuando un dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que funciones físicas del dispositivo como GPS, BDS, posicionamiento LBS, control del zumbador y disponibilidad de escucha remota pueden afectar qué datos se envían y cómo se muestran en Plaspy.

## Visión general del protocolo

El VL103 se comunica con plataformas backend usando su protocolo de reporte. Ese protocolo es el conjunto de reglas que el rastreador emplea para identificarse, enviar actualizaciones periódicas de ubicación y notificar alertas como exceso de velocidad, eventos de geocerca, batería baja, alertas por vibración y otras telemetrías que el dispositivo soporte.

- El protocolo define cómo el rastreador se identifica ante el servidor para que los mensajes recibidos se asocien con el activo correcto.
- La telemetría, como posiciones por GPS, BDS y LBS, además de banderas de estado básicas, se entregan mediante el mecanismo de reporte soportado por el dispositivo.
- Las alertas generadas por funciones a bordo, como el zumbador externo, advertencias audibles o batería baja, se transmiten como eventos.
- El protocolo permite activar o reconocer funciones remotas cuando están soportadas, sujeto a las limitaciones del fabricante y del firmware.
- Un formato de reporte estandarizado permite a Plaspy interpretar los mensajes entrantes y presentar la información de ubicación y eventos en la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones en un endpoint compartido y determina automáticamente el protocolo del dispositivo a partir del flujo de datos entrante. En la mayoría de los casos no necesita seleccionar un protocolo manualmente dentro de Plaspy cuando el dispositivo está configurado para reportar al servidor de Plaspy.

- Plaspy expone un único dominio público de servidor para reportes de dispositivos en d.plaspy.com.
- La IP del servidor Plaspy está listada públicamente como 54.85.159.138 para entornos que prefieren direccionamiento numérico.
- Plaspy escucha en un solo puerto para todos los dispositivos soportados, lo que simplifica la configuración y el despliegue.
- Cuando un rastreador reporta al endpoint de Plaspy, la plataforma detecta el protocolo de forma automática y asocia el dispositivo con el parser y el manejo adecuados.
- La configuración correcta del dispositivo (dirección del servidor y transporte) suele ser todo lo que se requiere para que Plaspy detecte el protocolo del rastreador.

## Transporte y contexto de conexión

Las decisiones de conexión y transporte determinan cómo el VL103 envía datos a Plaspy. El dispositivo puede configurarse para usar UDP o TCP según el firmware y las preferencias locales. Saber la dirección y el puerto a los que apuntar el rastreador es un paso clave para que el dispositivo comience a reportar.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP numérica 54.85.159.138.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos y ese puerto se usa de forma uniforme entre los dispositivos soportados.
- El VL103 puede soportar transporte UDP o TCP hacia el endpoint de Plaspy; elija el transporte que su firmware y su red soporten.
- Usar la dirección de servidor y el transporte correctos normalmente hace que el dispositivo comience a reportar a Plaspy, donde se puede realizar la detección automática del protocolo.
- Confirme que el operador y las reglas de firewall permiten tráfico saliente UDP o TCP hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de los mensajes, los campos disponibles o funciones opcionales; siempre revise las notas de firmware del dispositivo al evaluar compatibilidad.
- Las revisiones de hardware o variantes regionales pueden afectar qué sistemas de posicionamiento están activos, como GPS, BDS o datos LBS complementarios.
- Las opciones de configuración del lado del fabricante determinan si ciertos eventos, como la escucha remota o el control del zumbador, se reportan y cómo se señalan.
- La selección de transporte (UDP versus TCP) puede variar según el firmware del dispositivo y los requisitos de estabilidad de su despliegue.
- La detección automática por parte de la plataforma facilita la integración, pero usted debe verificar las primeras conexiones y muestras de reporte antes de un despliegue masivo.
- En caso de duda, valide el comportamiento en un solo dispositivo y consulte la documentación del fabricante sobre diferencias específicas del firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del rastreador ayuda a garantizar una configuración confiable y operación a largo plazo con Plaspy. Incluso cuando Plaspy detecta automáticamente el protocolo, conocer el rol del protocolo y los puntos comunes de variación reduce el tiempo de puesta en marcha y agiliza la resolución de problemas.

- Aclara qué datos enviará el rastreador y cómo esos datos se mapean a campos visibles en Plaspy.
- Le ayuda a elegir el transporte y la configuración de red correcta para reportes estables.
- Orienta los pasos de solución de problemas cuando los dispositivos no aparecen o envían valores inesperados.
- Informa decisiones sobre actualizaciones de firmware y cómo podrían cambiar el comportamiento reportado.
- Reduce sorpresas de integración al desplegar múltiples revisiones de hardware o variantes regionales.

## Por qué usar Plaspy con este protocolo

Usar el Concox VL103 con Plaspy ofrece a los operadores de flota una ruta práctica para reunir datos de ubicación, estado y alertas desde rastreadores pequeños de uso industrial y comercial. El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy reducen la complejidad de configuración inicial para que usted pueda concentrarse en la puesta en marcha operativa, como geocercas, alertas e intervalos de reporte.

Para obtener más información sobre la integración de dispositivos como el VL103 y revisar las capacidades de la plataforma visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del dispositivo pueden cambiar con actualizaciones de firmware y del fabricante, así que por favor verifique los detalles de protocolo y firmware específicos más recientes en el sitio del fabricante https://www.iconcox.com/.
