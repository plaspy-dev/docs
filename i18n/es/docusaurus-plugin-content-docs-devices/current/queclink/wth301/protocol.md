---
slug: /queclink/wth301/protocol
id: wth301-protocol
sidebar_label: Protocol
title: QuecLink - WTH301 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para el sensor ambiental QuecLink WTH301 BLE y su integración con el rastreo en tiempo real de Plaspy
keywords:
  - Protocolo QuecLink WTH301
  - Sensor BLE QuecLink WTH301
  - Compatibilidad WTH301 Plaspy
  - Protocolo de seguimiento WTH301
  - Protocolo de comunicación WTH301
  - Sensor cadena de frío WTH301
  - Integración BLE QuecLink
  - Monitoreo de flotas WTH301
  - Telemetría ambiental WTH301
  - QuecLink WTH301 Plaspy
---

# QuecLink - Protocolo WTH301

Esta página ofrece una visión general pública del nivel de protocolo para usar el sensor ambiental QuecLink WTH301 con Plaspy. Se centra en cómo el WTH301 participa en una implementación de Plaspy cuando se empareja con rastreadores GPS o gateways compatibles con BLE, y explica el contexto de comunicación que permite que las lecturas de temperatura y humedad aparezcan junto con los datos de ubicación y del vehículo dentro de Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos están configurados correctamente para apuntar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles para el WTH301 pueden variar según la versión de firmware, la revisión de hardware y la implementación del gateway o del rastreador BLE que reenvía las transmisiones del sensor a Plaspy.

## Resumen del protocolo

El WTH301 es un sensor Bluetooth Low Energy que transmite lecturas de temperatura y humedad para ser capturadas por un rastreador o gateway con capacidad BLE. El dispositivo actúa como nodo sensor; depende de un rastreador o gateway emparejado para reenviar la telemetría ambiental a Plaspy, donde se correlaciona con las señales GPS y del vehículo.

- El sensor emite anuncios BLE o actualizaciones de características que contienen los valores de temperatura y humedad en intervalos configurables.
- Un gateway BLE compatible con Plaspy o un rastreador GPS con BLE recibe los datos del sensor y los reenvía a Plaspy con identidad del dispositivo y contexto de ubicación.
- El rol del protocolo es garantizar que las lecturas ambientales se capturen de forma oportuna y precisa, y que queden asociadas con la telemetría del vehículo para monitoreo en tiempo real y reproducción histórica.
- La información de identificación y emparejamiento desde el gateway o el rastreador se usa para mapear las lecturas del WTH301 al activo o registro de vehículo correcto en Plaspy.
- Las marcas de tiempo, los intervalos de muestreo y los metadatos básicos del dispositivo reemisor permiten que Plaspy presente los datos del sensor junto con la otra telemetría de la flota.

## Detección del protocolo por parte de Plaspy

Plaspy recibe informes de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador utilizado por el dispositivo reemisor. En la mayoría de las implementaciones, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el rastreador o gateway está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha conexiones entrantes en el endpoint público d.plaspy.com y en la dirección de servidor 54.85.159.138 en el puerto de Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos y modelos compatibles para simplificar la configuración y el despliegue.
- Cuando un gateway BLE o un rastreador con BLE reenvía datos del WTH301 a Plaspy, la plataforma inspecciona el informe entrante y asigna la telemetría del sensor al activo correcto sin que, en la mayoría de los casos, sea necesaria la selección de protocolo por parte del usuario.
- Si un dispositivo no está reportando como se espera, verifique que el rastreador o gateway esté configurado para apuntar al endpoint de Plaspy y que esté usando las opciones de transporte soportadas.

## Contexto de transporte y conexión

El WTH301 se comunica localmente por BLE y depende de un dispositivo reemisor para enviar datos a Plaspy a través de IP. Las decisiones de transporte y conexión que importan para la integración las determina el gateway BLE o el rastreador que retransmite las lecturas del sensor.

- El dispositivo reemisor puede enviar datos a Plaspy por UDP o TCP en el puerto 8888 según las capacidades y la configuración del rastreador.
- Los dispositivos que reportan a Plaspy pueden configurarse para usar el nombre de host d.plaspy.com o la IP del servidor 54.85.159.138 como destino de la telemetría.
- Todos los dispositivos en Plaspy comparten el mismo puerto de red para reducir la complejidad de configuración entre distintos modelos y despliegues.
- Elija UDP o TCP en el puerto 8888 de acuerdo con la documentación del rastreador o gateway y los requisitos de su red.
- Tenga en cuenta la calidad del enlace BLE y la ubicación del gateway, ya que el alcance y la interferencia del BLE afectan la fiabilidad con la que el WTH301 alcanza al dispositivo reemisor.

## Notas de compatibilidad del protocolo

- El comportamiento BLE y los intervalos de transmisión del WTH301 pueden verse influenciados por la versión de firmware y los ajustes del propio sensor.
- La compatibilidad depende del gateway BLE o del rastreador con BLE utilizado para reenviar los datos; no todos los gateways exponen el mapeo a los campos de Plaspy de forma idéntica.
- Las revisiones de hardware del WTH301 o del rastreador reemisor pueden introducir pequeñas diferencias en los campos o metadatos reportados.
- La selección del transporte entre UDP y TCP es una configuración por dispositivo y debe coincidir con las capacidades del reemisor y las políticas de red.
- Confirme que el rastreador o gateway reemisor esté configurado para reportar a d.plaspy.com o a 54.85.159.138 y que use el puerto de Plaspy al integrar el sensor.
- Valide siempre el comportamiento en un despliegue de prueba antes de una implementación masiva y consulte la documentación del fabricante para detalles específicos del dispositivo.

## Por qué es importante entender el protocolo

Comprender el contexto de comunicación y el comportamiento del protocolo ayuda a garantizar un despliegue confiable, un mapeo de datos preciso y una resolución eficiente de problemas cuando el WTH301 se usa con Plaspy. Tener expectativas claras sobre el flujo de datos desde el sensor hasta la plataforma reduce el tiempo de integración y mejora los resultados operativos.

- Permite verificar que el emparejamiento BLE y la recepción por el gateway funcionen antes de diagnosticar problemas de reporte en la nube.
- Facilita la elección correcta entre UDP o TCP en el puerto 8888 según las restricciones de red y el soporte del rastreador.
- Ayuda a correlacionar los intervalos de lectura del sensor con las expectativas de vida útil de la batería y la planificación de mantenimiento.
- Mejora la investigación de incidentes al aclarar si las lecturas faltantes se deben a problemas de enlace BLE, al reenvío del gateway o al procesamiento en la nube.
- Orienta decisiones sobre la ubicación del gateway y la selección de hardware de flota para un monitoreo confiable de la cadena de frío.

## Por qué usar Plaspy con este protocolo

Emparejar el WTH301 con Plaspy a través de un gateway BLE compatible o un rastreador GPS con BLE amplía el monitoreo de flotas con telemetría ambiental precisa y con contexto de ubicación. Esta combinación es particularmente útil para remolques refrigerados, contenedores y monitoreo a nivel de activo donde la temperatura y la humedad son críticas para el cumplimiento y la toma de decisiones operativas.

Plaspy simplifica el reporte de dispositivos usando un endpoint y puerto compartidos, y detecta automáticamente el protocolo del rastreador cuando los dispositivos están configurados para reportar a la plataforma. Para saber más sobre Plaspy y cómo admite la integración de sensores BLE visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, notas de firmware y guías de implementación consulte la documentación del fabricante QuecLink en https://www.queclink.com/ que es la fuente autorizada para revisiones de hardware y comportamiento de firmware.
