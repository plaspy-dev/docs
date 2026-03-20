---
slug: /dct/syrus_3g_bt/protocol
id: syrus_3g_bt-protocol
sidebar_label: Protocol
title: DCT - Syrus 3G+ BT Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador DCT Syrus 3G+ BT con Plaspy, con guía de conexión y compatibilidad
keywords:
  - protocolo DCT Syrus 3G+ BT
  - protocolo GPS Syrus 3G+ BT
  - protocolo de comunicación DCT Syrus
  - protocolo de rastreador Bluetooth Syrus
  - Syrus 3G+ rastreador Plaspy
  - integración DCT Syrus Plaspy
  - protocolo de seguimiento Syrus 3G+ BT
  - protocolo de gateway para rastreadores GPS
  - integración API REST Pegasus Gateway
  - seguimiento de flotas Syrus Plaspy
---

# DCT - Protocolo Syrus 3G+ BT

Esta página describe el contexto público del protocolo para usar el rastreador DCT Syrus 3G+ BT con la plataforma Plaspy. Explica, en términos no sensibles, cómo suele comunicarse el dispositivo con Plaspy y resalta las consideraciones de conectividad e integración relevantes al desplegar el Syrus 3G+ BT como gateway de rastreo GPS para flotas o telemetría industrial.

El Syrus 3G+ BT es un gateway telemático robusto con soporte Bluetooth 4.1, múltiples puertos para accesorios y respaldo satelital Iridium opcional. Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Cuando resulta útil, las integraciones pueden aprovechar las APIs REST de Pegasus Gateway para agregación del lado de la nube mientras Plaspy recibe el flujo de telemetría para rastreo e informes.

## Resumen del protocolo

El protocolo de comunicación del Syrus 3G+ BT define cómo el dispositivo se identifica, reporta ubicación y datos de sensores, y intercambia mensajes de estado o configuración con puntos finales en la nube. Para los usuarios de Plaspy, el protocolo es el puente que convierte la telemetría de etiquetas Bluetooth, sensores del vehículo y puertos de accesorios en eventos accionables visibles en la plataforma.

- Permite que el dispositivo anuncie su identidad y estado operativo a un punto final en la nube para que Plaspy asocie las transmisiones entrantes con el activo correcto.
- Transporta ubicación, telemetría de sensores y diagnósticos básicos desde el dispositivo hacia la nube en un formato que el backend puede procesar.
- Soporta opciones en el propio dispositivo como la selección de transporte y los intervalos de reporte que influyen en la frecuencia con la que Plaspy recibe actualizaciones.
- Funciona junto con las APIs REST de Pegasus Gateway cuando el fabricante proporciona puntos finales API para simplificar la abstracción de hardware y la integración en la nube.
- Permite incluir en el flujo de telemetría consumido por Plaspy los datos de accesorios y sensores BLE del Syrus 3G+ BT.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar telemetría de muchos modelos de rastreadores y detectar automáticamente el protocolo cuando un dispositivo reporta al punto común de Plaspy. En la mayoría de los despliegues no es necesario seleccionar manualmente el protocolo dentro de Plaspy, siempre que el dispositivo esté configurado para reportar a los ajustes de conexión de Plaspy.

- Plaspy acepta telemetría entrante en el endpoint compartido d.plaspy.com y en la dirección IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que simplifica la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos correctamente configurados que reportan al endpoint de Plaspy.
- Normalmente usted solo debe asegurarse de que el Syrus 3G+ BT esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La selección de transporte entre UDP y TCP es una opción de configuración del dispositivo y Plaspy está preparado para recibir reportes por cualquiera de los dos transportes cuando se use el puerto 8888.

## Contexto de transporte y conexión

El contexto de conexión abarca el transporte de red y la información de dirección necesaria para que el Syrus 3G+ BT envíe telemetría a Plaspy. Los dispositivos pueden configurarse para usar distintos transportes según el firmware y las restricciones del despliegue, y Plaspy soporta las opciones estándar que suelen ofrecer los gateways telemáticos.

- El Syrus 3G+ BT puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y las decisiones de configuración.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 como destino de la telemetría.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que ayuda a estandarizar la configuración a nivel de flota.
- La elección del transporte puede afectar latencia, confiabilidad y comportamiento de red y debe seleccionarse de acuerdo con las necesidades del despliegue y las capacidades del firmware del dispositivo.
- Al configurar el Syrus 3G+ BT, verifique los ajustes de transporte y destino en las herramientas de gestión del dispositivo o vía las APIs REST de Pegasus Gateway si aplica.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos disponibles o los valores por defecto de transporte; revise siempre las notas de la versión de firmware para cambios relevantes al protocolo.
- Las revisiones de hardware y las opciones de accesorios, como el módulo satelital Iridium, pueden modificar las rutas de reporte disponibles o generar flujos de telemetría adicionales.
- El fabricante puede ofrecer múltiples modos de integración, incluyendo telemetría directa y APIs REST de Pegasus Gateway; confirme cuál es el modo que utiliza su despliegue.
- La selección de transporte entre UDP y TCP afecta el comportamiento de red y debe alinearse con las expectativas del endpoint Plaspy en el puerto 8888.
- Plaspy detecta automáticamente los protocolos para dispositivos correctamente configurados, pero es necesario que la configuración de destino y transporte sea correcta para que la detección tenga éxito.
- Valide la compatibilidad y los pasos de configuración con la documentación oficial de DCT para el Syrus 3G+ BT y la guía de integración de Pegasus Gateway.

## Por qué es importante comprender el protocolo

Conocer la forma en que el Syrus 3G+ BT se comunica ayuda a asegurar una configuración fiable, comportamiento predecible y una resolución de problemas eficiente al integrar el dispositivo con Plaspy. Tener claridad sobre el transporte, la cadencia de reporte y qué datos de sensores se incluyen reduce la fricción del despliegue y mejora los resultados operativos a largo plazo.

- Ayuda a diagnosticar por qué un dispositivo podría no aparecer en Plaspy, por ejemplo destino incorrecto, desajuste de transporte o diferencias de firmware.
- Orienta la elección de transporte e intervalos de reporte para equilibrar batería, ancho de banda y frecuencia de actualizaciones.
- Informa las decisiones sobre el uso de accesorios y sensores BLE para que los campos de telemetría necesarios estén disponibles en Plaspy.
- Apoya la planificación de contingencias como respaldo satelital o rutas de red alternativas cuando la conectividad es intermitente.
- Reduce el tiempo de integración al saber qué opciones de configuración en el dispositivo y en la nube son críticas para la comunicación exitosa.

## Por qué usar Plaspy con este protocolo

Usar el Syrus 3G+ BT con Plaspy combina un gateway telemático resistente con una plataforma en la nube que estandariza la telemetría entrante y la presenta para rastreo, alertas e informes. El soporte Bluetooth del dispositivo, sus puertos para accesorios y el respaldo satelital opcional lo hacen apropiado para escenarios de red mixtos donde la continuidad y la telemetría rica son importantes para operaciones de flota e industriales.

Si desea conocer más sobre cómo Plaspy recibe y procesa la telemetría de dispositivos o explorar las funciones de la plataforma que complementan al Syrus 3G+ BT, visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y compatibilidad de accesorios, consulte la información en el sitio del fabricante https://www.digitalcomtech.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con revisiones de firmware y hardware.
