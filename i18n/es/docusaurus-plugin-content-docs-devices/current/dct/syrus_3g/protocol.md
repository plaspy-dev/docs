---
slug: /dct/syrus_3g/protocol
id: syrus_3g-protocol
sidebar_label: Protocol
title: DCT - Syrus 3G+ Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del DCT Syrus 3G+ sobre cómo se comunica con Plaspy y qué verificar para una integración fiable
keywords:
  - protocolo DCT Syrus 3G+
  - protocolo GPS DCT Syrus 3G+
  - compatibilidad Syrus 3G+ Plaspy
  - protocolo de rastreo Syrus 3G+
  - protocolo de comunicación Syrus 3G+
  - protocolo de dispositivos Plaspy
  - dispositivos GPS Plaspy
  - rastreo de flotas Syrus 3G+
  - integración IoT Syrus
  - Pegasus Gateway Syrus
---

# DCT - Protocolo del Syrus 3G+

Esta página describe el contexto público del protocolo para usar el rastreador DCT Syrus 3G+ con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales y no sensibles, de modo que responsables de flotas, integradores y desarrolladores puedan comprender consideraciones de conexión y compatibilidad sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página debe considerarse una visión operativa: consulte la documentación del fabricante para detalles específicos de firmware.

## Visión general del protocolo

El protocolo de comunicación es el conjunto de reglas y las opciones de transporte que el Syrus 3G+ utiliza para enviar datos de posición, telemetría y eventos a un endpoint en la nube como Plaspy. En la práctica, esto significa que el rastreador empaqueta la telemetría proveniente de su receptor GNSS, sensores y contadores, y envía esos mensajes por una conexión de red que Plaspy recibe y mapea como telemetría utilizable.

- Permite identificar el dispositivo y reportar periódicamente la posición GPS y valores de sensores auxiliares a Plaspy
- Transmite mensajes impulsados por eventos, como cambios de ignición, contadores y alertas configuradas para monitoreo de rutas
- Proporciona una representación transportable de la telemetría que Plaspy transforma en mapas en tiempo real, alertas e informes
- Funciona junto con el Syrus Pegasus Gateway y la compatibilidad con API REST para simplificar la integración y la ingestión de datos
- Permite coordinar flujos de configuración remota y gestión de dispositivos a través de capas de API y gateway

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y aplica detección automática de protocolo para ingerir los datos del dispositivo sin obligar al usuario a elegir manualmente un protocolo en la mayoría de los casos. Si el Syrus 3G+ está configurado para reportar al endpoint de Plaspy, la plataforma intentará reconocer el tráfico del dispositivo y procesar la telemetría en consecuencia.

- Plaspy escucha en un endpoint de servidor común para que los dispositivos reporten al mismo destino
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor de Plaspy es 54.85.159.138
- Plaspy usa el puerto 8888 para comunicaciones de dispositivos y todos los dispositivos soportados por Plaspy emplean este mismo puerto
- Normalmente no es necesario seleccionar un protocolo dentro de Plaspy cuando el rastreador está configurado para reportar al endpoint de Plaspy
- La detección automática reduce la configuración manual y, al mismo tiempo, permite manejar comportamientos específicos del dispositivo basados en el tráfico reportado

## Contexto de transporte y conexión

El contexto de conexión describe cómo el Syrus 3G+ abre un canal de red para alcanzar Plaspy y qué dirección y puerto debe apuntar. El dispositivo puede configurarse para usar UDP o TCP según la instalación y el firmware, y puede reportar al dominio de Plaspy o a la dirección IP para sus envíos.

- Los dispositivos pueden configurarse para usar UDP o TCP según el firmware y las elecciones de instalación
- Plaspy acepta reportes de dispositivos en el puerto 8888 tanto para transporte UDP como TCP
- Los dispositivos pueden apuntar a d.plaspy.com o a la IP 54.85.159.138 al reportar
- Plaspy emplea el mismo puerto 8888 en todos los dispositivos soportados para simplificar despliegues
- Confirme la selección del transporte y las reglas de firewall de red para permitir tráfico saliente UDP o TCP hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el timing de mensajes, los transportes soportados y campos de telemetría opcionales, por lo que siempre registre la versión de firmware al validar compatibilidad
- Revisiones de hardware o variantes de modelo pueden exponer distintos puertos auxiliares y contadores que cambien el contenido del payload visto por Plaspy
- Las opciones de configuración del fabricante pueden permitir reportes vía gateway REST, Pegasus Gateway o reporte directo por socket; confirme qué método está activo en cada despliegue
- La elección de transporte entre UDP y TCP puede afectar la semántica de entrega y debe seleccionarse según la fiabilidad de la red y los requerimientos de instalación
- Al integrar múltiples dispositivos, apunte cada unidad al endpoint de Plaspy en d.plaspy.com o en 54.85.159.138 y use el puerto 8888 para asegurar una ingestión consistente
- Valide el comportamiento del dispositivo con la hoja de datos del Syrus 3G+ y las notas de la versión del fabricante para matices específicos de cada dispositivo

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación y el contexto de conexión ayuda a garantizar una integración estable y confiable entre el Syrus 3G+ y Plaspy, y reduce el tiempo dedicado a solucionar problemas de cableado, configuración o red. La claridad sobre el protocolo facilita que los equipos mapeen las salidas del dispositivo al modelo de datos de Plaspy y mantengan una telemetría de flota consistente en el tiempo.

- Acelera la puesta en marcha inicial al alinear la configuración de reporte del dispositivo con los endpoints y transportes soportados por Plaspy
- Reduce el tiempo de soporte al aclarar si los problemas son de red, transporte o firmware
- Mejora la calidad de los datos al permitir el mapeo correcto de entradas de sensores y contadores en los paneles de Plaspy
- Ayuda a planificar actualizaciones de firmware y revisiones de hardware que podrían cambiar la telemetría o el comportamiento de transporte
- Asiste en el diseño de reglas de firewall y red para permitir tráfico saliente UDP o TCP a d.plaspy.com en el puerto 8888

## Por qué usar Plaspy con este protocolo

Usar el DCT Syrus 3G+ junto con Plaspy ofrece a las organizaciones visibilidad en tiempo real de vehículos y activos, aprovechando la telemetría multipuerto y las funciones de bajo consumo del dispositivo para despliegues a largo plazo. Plaspy ingiere la telemetría del Syrus para que las flotas puedan usar mapas en vivo, alertas, reproducción histórica y reglas de automatización que mejoran operaciones, seguridad y mantenimiento.

Si desea conocer más sobre las funcionalidades de Plaspy, despliegues y compatibilidad de dispositivos visite https://www.plaspy.com. Para detalles específicos de protocolo de dispositivo, comportamiento de firmware y documentación del fabricante, verifique la información más reciente en el sitio oficial de DCT https://www.digitalcomtech.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
