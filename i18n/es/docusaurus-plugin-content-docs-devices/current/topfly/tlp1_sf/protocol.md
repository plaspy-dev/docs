---
slug: /topfly/tlp1_sf/protocol
id: tlp1_sf-protocol
sidebar_label: Protocol
title: TopFly - TLP1-SF Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo TopFly TLP1-SF para integración con Plaspy, incluyendo conexión y opciones de transporte
keywords:
  - protocolo TopFly TLP1-SF
  - protocolo GPS TopFly TLP1-SF
  - protocolo TopFly TLP1-SF para Plaspy
  - protocolo de rastreo TopFly
  - compatibilidad TLP1-SF Plaspy
  - protocolo de rastreador de activos TopFly
  - protocolo rastreador GPS solar
  - rastreo vehicular TopFly
  - comunicación TLP1-SF
  - rastreador TopFly Plaspy
---

# TopFly - Protocolo TLP1-SF

Esta página describe el contexto público del protocolo para usar el tracker TopFly TLP1-SF con Plaspy. Explica en términos generales cómo se comunica el equipo, qué puntos de conexión ofrece Plaspy y qué opciones de transporte puede usar el tracker para reportar telemetría a la plataforma Plaspy.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando los dispositivos están configurados correctamente para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las opciones de transporte pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en información pública, no sensible, y en consideraciones prácticas de integración.

## Visión general del protocolo

El protocolo de comunicación regula cómo el TLP1-SF informa ubicación, estado y alertas a un servidor remoto, y cómo se intercambian comandos o acuses de recibo en caso de que el dispositivo los soporte. Para la integración con Plaspy, la función principal del protocolo es entregar telemetría identificable y oportuna que Plaspy pueda parsear y presentar para monitoreo de flotas y activos.

- Permite al tracker enviar fijaciones de posición, alertas de movimiento y datos de estado a un endpoint remoto para su procesamiento.
- Transporta información de identidad del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el activo o la cuenta correcta.
- Soporta tanto reporte en vivo como entrega en búfer para que los puntos almacenados se puedan subir cuando se restablezca la cobertura.
- Permite elegir el transporte adecuado para el entorno, como TCP o UDP, para ajustar fiabilidad de red y consumo energético.
- Provee la mensajería necesaria para que funciones como geocercas, alertas por movimiento y reportes de baja potencia sean accionables en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe la telemetría entrante en un único endpoint compartido y detecta automáticamente qué protocolo de dispositivo está usando un tracker cuando este reporta a ese endpoint. En la mayoría de los casos, usted no necesita seleccionar manualmente el protocolo dentro de Plaspy si el tracker está configurado para enviar datos al servidor de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888 y es el puerto común que Plaspy usa para todos los dispositivos soportados
- Plaspy detecta automáticamente el protocolo del tracker cuando llegan datos al endpoint compartido
- Normalmente usted solo necesita configurar el dispositivo para que reporte al endpoint de Plaspy y elegir el transporte adecuado (TCP o UDP)
- Si un dispositivo soporta múltiples modos de reporte, asegúrese de configurarlo con el transporte y el intervalo de reporte deseados para su despliegue

## Contexto de transporte y conexión

Las opciones de conexión y transporte determinan cómo el TLP1-SF entrega sus datos a Plaspy y pueden afectar la latencia, el consumo de batería y la fiabilidad. El tracker soporta varios transportes de red, pero para la integración con Plaspy las opciones esperadas son TCP o UDP dirigidas al endpoint de Plaspy.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Los dispositivos destinados a reportar a Plaspy pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas con modelos mixtos
- El TLP1-SF también soporta otros métodos de reporte a nivel de fabricante, como MQTT y SMS, pero Plaspy recibe la telemetría del tracker por TCP o UDP en el endpoint compartido
- La selección del transporte puede guiarse por factores como la fiabilidad de la red, reglas de firewall y perfiles de consumo energético

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte, los comandos soportados y los conjuntos de funciones; siempre confirme el comportamiento para un nivel de firmware específico
- Las revisiones de hardware o accesorios opcionales pueden alterar los transportes disponibles o las funciones de gestión de energía que afectan la cadencia de reporte
- Los valores por defecto del fabricante pueden apuntar los dispositivos a sus propios endpoints en la nube; asegúrese de que el dispositivo esté configurado para reportar al endpoint de Plaspy al integrarlo
- Elija TCP para una entrega más fiable en redes con pérdidas y UDP cuando se prefiera menor overhead y menor latencia, según lo soporte el dispositivo
- Las subidas en búfer desde el TLP1-SF permiten recuperar el historial de ubicación tras cortes, pero el tamaño y el comportamiento del búfer dependen del firmware
- Valide cualquier requisito de transporte o TLS contra la documentación oficial de TopFly antes del despliegue

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TLP1-SF ayuda a garantizar una configuración exitosa, reportes predecibles y una resolución de problemas eficaz cuando se usa con Plaspy. Entender el contexto del protocolo reduce la fricción en la integración y ayuda a los operadores a elegir configuraciones de dispositivo apropiadas para su caso de uso.

- Le ayuda a configurar el dispositivo para que reporte a d.plaspy.com o 54.85.159.138 usando el transporte y el puerto correctos
- Facilita la interpretación de patrones de telemetría y el diagnóstico de brechas en el reporte o comportamientos inesperados
- Orienta la selección de intervalos de reporte y perfiles de energía para equilibrar vida de batería y precisión del rastreo
- Aclara cómo se suben los puntos en búfer y qué esperar tras la restauración de conectividad
- Reduce el tiempo dedicado a prueba y error al alinear las configuraciones del dispositivo con las expectativas de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el TopFly TLP1-SF con Plaspy brinda a las organizaciones visibilidad continua de la ubicación, alertas de movimiento y reproducción histórica respaldada por una plataforma que acepta telemetría de dispositivos en un único endpoint compartido. El enfoque de Plaspy de un puerto común y detección automática de protocolo simplifica la incorporación de flotas mixtas y reduce la carga de configuración.

Para obtener más información sobre cómo Plaspy puede funcionar con sus dispositivos TopFly, visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware y guías de implementación actualizadas, verifique la información en el sitio del fabricante https://www.topflytech.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
