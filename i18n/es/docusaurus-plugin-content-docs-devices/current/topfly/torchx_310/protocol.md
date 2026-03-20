---
slug: /topfly/torchx_310/protocol
id: torchx_310-protocol
sidebar_label: Protocol
title: TopFly - TorchX 310 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar TopFly TorchX 310 con Plaspy para telemetría y rastreo vehicular confiable
keywords:
  - protocolo TopFly TorchX 310
  - protocolo GPS TorchX 310
  - compatibilidad rastreador GPS TopFly
  - rastreador GPS compatible Plaspy
  - protocolo rastreador OBD II
  - protocolo telemetría CAN
  - protocolo seguimiento vehicular
  - rastreador gestión de flotas
  - comunicación TorchX 310
  - protocolo TopFly Plaspy
---

# TopFly - Protocolo TorchX 310

Esta página ofrece el contexto público del protocolo para integrar el rastreador GPS TopFly TorchX 310 con Plaspy. Explica, en términos generales, cómo el equipo reporta posición GNSS, telemetría basada en CAN y datos de accesorios BLE a Plaspy, ayudando a gerentes de flota e integradores a comprender el flujo de comunicación sin exponer detalles propietarios de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker al ingerir telemetría. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto de conexión y reporte, no en los detalles internos del firmware ni en formatos de paquetes propietarios.

## Visión general del protocolo

El TorchX 310 comunica datos del vehículo y de sensores a una plataforma de rastreo remota usando transportes de red estándar y el firmware provisto por el fabricante. En el contexto de Plaspy, el protocolo permite que el equipo se identifique, entregue ubicación y telemetría derivada del CAN, y reenvíe datos almacenados cuando se restablece la conectividad.

- Permite reportes GNSS en tiempo real y telemetría del vehículo como VIN, odómetro, nivel de combustible y DTCs desde el bus OBD II CAN.
- Permite incluir el estado de accesorios y sensores emparejados vía BLE 5.0, ampliando la telemetría más allá del bus del vehículo.
- Soporta el almacenamiento en búfer de puntos offline para que la ubicación y eventos guardados se reenvíen al servidor tras la restauración de la red.
- Transmite telemetría usando transportes de red estándar hacia un endpoint de Plaspy para que la plataforma pueda mapear, reportar y generar alertas sobre el estado del vehículo.
- Proporciona metadatos contextuales suficientes para que Plaspy asocie los mensajes con el registro de dispositivo y vehículo correspondientes.

## Cómo Plaspy detecta el protocolo

Plaspy ingiere el tráfico de dispositivos dirigido a un endpoint compartido y determina automáticamente el protocolo de tracker apropiado según la conexión entrante. Cuando un TorchX 310 está configurado para reportar a Plaspy, por lo general usted no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el equipo apunte al endpoint de Plaspy.

- Plaspy usa un único endpoint de servidor para reportes de dispositivos en d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 para usuarios que prefieren un destino numérico.
- Todos los dispositivos en Plaspy usan el mismo puerto de reporte, lo que simplifica la configuración a escala de flota.
- Plaspy detecta automáticamente el protocolo del tracker cuando los datos llegan al endpoint y puerto compartidos.
- Si el dispositivo está correctamente configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto designado, la selección manual del protocolo en Plaspy suele ser innecesaria.

## Transporte y contexto de conexión

La selección del transporte es un detalle de configuración del dispositivo que controla cómo el TorchX 310 alcanza el endpoint de Plaspy. El tracker soporta transportes de red estándar y puede configurarse para usar UDP o TCP según el firmware del equipo y la preferencia del operador.

- El TorchX 310 puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y configuración del dispositivo.
- Plaspy acepta reportes de dispositivos en el puerto compartido 8888 para todos los trackers soportados.
- Los dispositivos pueden apuntar al nombre DNS d.plaspy.com o a la dirección numérica 54.85.159.138 cuando el uso de DNS está restringido.
- Usar el mismo puerto en todos los equipos reduce la complejidad de firewall y aprovisionamiento en despliegues de flota.
- La confiabilidad del transporte y el comportamiento de reenvío dependen del firmware del dispositivo y del tipo de transporte elegido.

## Notas sobre compatibilidad del protocolo

- El TorchX 310 se describe como compatible con Plaspy desde fábrica, pero las variantes de firmware y regionales de hardware pueden modificar su comportamiento.
- Diferentes versiones de firmware pueden añadir o eliminar campos de telemetría específicos, intervalos de reporte u opciones de cifrado.
- Las revisiones de hardware o variantes celulares regionales pueden cambiar los transportes soportados o las alternativas de red.
- La elección del transporte TCP frente a UDP puede afectar las garantías de entrega y debe seleccionarse según las necesidades operativas.
- Valide la configuración del dispositivo y los destinos de reporte con la documentación oficial del fabricante antes de despliegues a gran escala.
- Confirme con el proveedor cualquier ajuste opcional de cifrado o autenticación para asegurar que el equipo esté configurado para enviar datos a Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del tracker ayuda a asegurar una configuración exitosa, comportamiento predecible y operación fiable a largo plazo al integrar unidades TorchX 310 con Plaspy. Conocer el contexto de conexión y qué reporta el equipo agiliza la resolución de problemas y la configuración.

- Ayuda a confirmar que los dispositivos apuntan al endpoint y puerto correctos de Plaspy durante el aprovisionamiento.
- Facilita la interpretación del comportamiento online y offline de los equipos al revisar reportes y registros en Plaspy.
- Asiste en la elección entre UDP o TCP según las condiciones de red y la confiabilidad deseada de los mensajes.
- Mejora los flujos de trabajo de troubleshooting cuando los campos de telemetría varían entre firmware o revisiones de hardware.
- Apoya la validación del emparejamiento de accesorios BLE, la disponibilidad de telemetría CAN y la entrega de datos en búfer.

## Por qué usar Plaspy con este protocolo

Usar el TorchX 310 con Plaspy ofrece a los operadores de flota un rastreador OBD II plug and play compacto, capaz de entregar telemetría derivada del CAN, integración con sensores BLE y reportes GNSS en búfer en una única plataforma de gestión. Plaspy ingiere ubicación, VIN y telemetría diagnóstica para presentar mapas en vivo, reportes y alertas que mejoran la visibilidad de la flota, el monitoreo del comportamiento del conductor y los flujos de trabajo anti robo.

Para conocer más sobre Plaspy y cómo gestiona el reporte de dispositivos y la telemetría de flota, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware e información sobre revisiones de hardware verifique la documentación actual en el sitio del fabricante https://www.topflytech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

