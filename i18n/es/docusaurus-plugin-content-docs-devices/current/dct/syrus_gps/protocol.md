---
slug: /dct/syrus_gps/protocol
id: syrus_gps-protocol
sidebar_label: Protocol
title: DCT - Syrus GPS Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo DCT Syrus GPS con Plaspy, explicando ajustes de conexión y contexto de integración
keywords:
  - protocolo DCT Syrus GPS
  - comunicación DCT Syrus GPS
  - compatibilidad Syrus GPS Plaspy
  - protocolo de rastreo Syrus GPS
  - rastreo vehicular Syrus GPS
  - telemetría Syrus GPS
  - guía de protocolo de rastreador GPS
  - protocolo de rastreador DCT
  - comunicación IoT Syrus GPS
  - rastreo de flotas Syrus GPS
---

# DCT - Protocolo Syrus GPS

Esta página explica el contexto público del protocolo para usar el rastreador DCT Syrus GPS con Plaspy. Describe cómo el dispositivo suele comunicarse con la plataforma Plaspy y detalla los ajustes de conexión y consideraciones prácticas relevantes para la integración, el monitoreo y la resolución de problemas. El contenido se centra en el comportamiento general del protocolo y en los roles de comunicación del dispositivo sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que funciones específicas del dispositivo como conmutación a satélite, eventos del acelerómetro o configuración por aire pueden diferir entre unidades.

## Descripción general del protocolo

El protocolo de comunicación de Syrus GPS define cómo el rastreador informa ubicaciones, eventos del acelerómetro, datos del bus del vehículo y mensajes de estado a un servidor remoto. En el contexto de Plaspy, la función del protocolo es entregar telemetría y eventos estructurados que Plaspy puede interpretar para seguimiento en tiempo real, alertas e informes históricos.

- Permite reportes de ubicación periódicos y basados en eventos desde el dispositivo hacia la plataforma en la nube.
- Transmite eventos de acelerómetro y movimiento útiles para la detección de choques, alertas de remolque y métricas de comportamiento del conductor.
- Lleva datos del bus del vehículo y del ECU cuando se usa con interfaces CAN u OBD para diagnóstico y monitoreo de rendimiento.
- Soporta almacenamiento y reenvío (store and forward) para que el rastreador guarde eventos durante pérdida de red y los suba cuando se restaure la conectividad.
- Funciona con accesorios satelitales opcionales para reportes en zonas remotas cuando no hay cobertura celular.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo correcto del rastreador en función del patrón de datos y del comportamiento del dispositivo. Cuando el Syrus GPS apunta al endpoint de Plaspy y está configurado para reportar, usted normalmente no necesita seleccionar un protocolo manualmente dentro de Plaspy.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 and can be used as an alternative reporting address.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- With correct endpoint and transport settings, Plaspy automatically detects the tracker protocol for incoming connections.

## Transporte y contexto de conexión

La selección del transporte y la configuración del endpoint determinan cómo el Syrus GPS llega a los servidores de Plaspy. Los dispositivos que soportan UDP y TCP pueden configurarse con el transporte más adecuado según las condiciones de la red y las necesidades de la aplicación, siempre apuntando al endpoint de Plaspy.

- Devices may point to d.plaspy.com or 54.85.159.138 as the reporting destination.
- The device may be configured using UDP or TCP on port 8888 to send telemetry and events.
- Plaspy uses the same port for all supported devices which simplifies device configuration.
- Transport choice can affect reliability and latency depending on the network environment and device firmware.
- Some device configuration and OTA management tools provided by the manufacturer can change the reporting endpoint and transport settings.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden modificar la cadencia de mensajes, los eventos soportados y los campos incluidos; verifique el nivel de firmware al diagnosticar problemas.
- Las revisiones de hardware y accesorios opcionales, como un módulo SATCOM para Iridium, influirán en las rutas de comunicación disponibles.
- La selección de transporte TCP versus UDP puede requerir ajustes por la fiabilidad de la red o las restricciones de firewall en el sitio de despliegue.
- Es posible que se necesiten herramientas y gateways del fabricante para configurar el host de reporte y activar ciertas funciones.
- Siempre valide el comportamiento del dispositivo con pruebas reales al incorporar flotas en Plaspy.
- Consulte la documentación del fabricante para la compatibilidad de accesorios como módulos satelitales y sensores externos.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el Syrus GPS ayuda a asegurar una configuración confiable, una interpretación precisa de la telemetría y una resolución más rápida de problemas de conectividad o datos cuando el dispositivo se usa con Plaspy. Tener una comprensión práctica del protocolo y del contexto de transporte reduce el tiempo de integración y mejora la visibilidad operativa.

- Permite confirmar el host de reporte y los ajustes de transporte correctos para que los dispositivos lleguen confiablemente a Plaspy.
- Facilita la interpretación de eventos de acelerómetro, disparadores de geocerca y datos del ECU en los paneles de la plataforma.
- Ayuda a diagnosticar el comportamiento de almacenamiento y reenvío tras cortes de red o ciclos de energía.
- Apoya la planificación del uso de accesorios como módulos satelitales para cobertura remota.
- Reduce la fricción en la incorporación de grandes flotas al anticipar variaciones de firmware o hardware.

## Por qué usar Plaspy con este protocolo

Usar el DCT Syrus GPS con Plaspy ofrece a las organizaciones una forma eficiente de recopilar datos de ubicación y eventos desde un rastreador de alto rendimiento. Las prestaciones del Syrus GPS, como el acelerómetro de 3 ejes, el amplio buffer de almacenamiento y reenvío, la compatibilidad CAN/OBD, la detección de manipulación y la copia de seguridad satelital opcional, encajan bien con casos de uso de monitoreo de flotas, desempeño del conductor y rastreo de activos remotos que Plaspy está diseñado para soportar.

Plaspy simplifica la conectividad de dispositivos al exponer un único endpoint y puerto de reporte, y al detectar automáticamente el protocolo del rastreador cuando los dispositivos están configurados para reportar a la plataforma. Para conocer más sobre Plaspy y cómo maneja la conectividad de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware e información de accesorios consulte la documentación del fabricante en https://www.digitalcomtech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
