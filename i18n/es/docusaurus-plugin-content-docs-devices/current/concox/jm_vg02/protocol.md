---
slug: /concox/jm_vg02/protocol
id: jm_vg02-protocol
sidebar_label: Protocol
title: Concox - JM-VG02 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Concox JM-VG02 y su comunicación con Plaspy para integración y reporte de dispositivos
keywords:
  - protocolo Concox JM-VG02
  - protocolo GPS Concox JM-VG02
  - compatibilidad JM-VG02 Plaspy
  - protocolo de rastreo JM-VG02
  - protocolo rastreador OBD II Concox
  - protocolo de rastreo de vehículos Plaspy
  - guía de protocolo de dispositivos Plaspy
  - protocolo de comunicación JM-VG02
  - reporte de comportamiento de conductor Concox
  - protocolo GPS asistido INS
---

# Concox - JM-VG02 Protocolo

Esta página describe el contexto público del protocolo para la serie de rastreadores Concox JM-VG02 y cómo se comunica con la plataforma Plaspy. Su objetivo es explicar el papel del protocolo de comunicación del dispositivo para conectar un rastreador OBD II a Plaspy sin exponer detalles privados de implementación. Utilice esta página para comprender el comportamiento general y las configuraciones de conexión relevantes para la integración del dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto general de comunicación y en consideraciones prácticas de compatibilidad más que en formatos de paquete a bajo nivel. El JM-VG02U incluye GPS asistido por INS, acelerómetro y giroscopio, y reporte de conducta de conducción, todo lo cual se entrega a Plaspy a través del protocolo de reporte del dispositivo.

## Resumen del protocolo

El protocolo del dispositivo es el conjunto de reglas que el JM-VG02 utiliza para identificarse, enviar datos de ubicación y sensores, y notificar eventos a un servidor remoto. Para rastreadores OBD II como el JM-VG02U, el protocolo determina cómo se empaquetan y transmiten a Plaspy la información GPS, las lecturas de sensores inerciales, las alertas de comportamiento de conducción, el kilometraje y las notificaciones de estado, de modo que la plataforma pueda mostrar y actuar sobre esos datos.

- Permite reportes de posición periódicos y basados en eventos desde el JM-VG02 hacia Plaspy
- Transporta datos de sensores y del vehículo como soluciones GPS asistidas por INS, eventos de acelerómetro y giroscopio, y alertas de conducción
- Permite que el rastreador incluya información identificadora para que Plaspy asocie los mensajes con un registro de dispositivo
- Transmite información de estado como energía, conectividad y condiciones de alerta para apoyar la supervisión de flotas
- Proporciona los datos estructurados que Plaspy utiliza para mostrar kilometraje, eventos de seguridad y análisis telemático

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador a partir del patrón de datos entrantes y los identificadores del equipo. En la mayoría de las implantaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de la plataforma.

- Plaspy escucha en un endpoint de servidor compartido y detecta automáticamente el protocolo del rastreador a partir de los reportes entrantes
- Todos los dispositivos en Plaspy usan el mismo puerto y un endpoint común de recepción para simplificar la configuración
- Los dispositivos deben configurarse para reportar al dominio o IP del servidor Plaspy para detección y registro automáticos
- La configuración típica consiste en apuntar el rastreador al servidor Plaspy y permitir que la plataforma identifique el modelo por sus cargas útiles e IDs reportados
- Cuando el JM-VG02 está correctamente apuntado a Plaspy, la plataforma asociará los mensajes a su cuenta sin selección manual de protocolo

## Transporte y contexto de conexión

El JM-VG02 puede enviar sus reportes por UDP o TCP dependiendo de la configuración del dispositivo y de las capacidades del firmware. Para la integración con Plaspy, los detalles prácticos clave son el endpoint del servidor y el puerto que el dispositivo debe usar para enviar los reportes.

- Plaspy server domain is d.plaspy.com for device reporting
- The Plaspy server IP is 54.85.159.138 and may be used in device configuration where DNS is not available
- The port used by Plaspy for device connections is 8888
- The device may be configured using UDP or TCP on port 8888 depending on tracker support and your preference
- All devices in Plaspy use the same port which simplifies device setup across a mixed fleet

## Consideraciones de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué campos aparecen en los reportes y cómo se codifican ciertos eventos; verifique las notas de firmware cuando sea posible
- Las revisiones de hardware entre unidades JM-VG02 pueden introducir diferencias en el reporte de sensores y en las métricas disponibles
- Las opciones de configuración por parte del fabricante pueden activar o desactivar alertas específicas como fatiga de conducción o reporte de eventos bruscos
- La selección de transporte (UDP vs TCP) influye en el comportamiento de conectividad y puede afectar retransmisiones o reconocimientos a nivel de red
- Apuntar el dispositivo a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888 es la forma habitual de asegurar que los reportes lleguen a la plataforma Plaspy
- Valide el comportamiento del dispositivo contra la documentación de Concox para su firmware JM-VG02U específico y confirme los campos de reporte compatibles

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación le ayuda a configurar correctamente el JM-VG02, confirmar que los datos esperados se entregan a Plaspy y resolver problemas de conectividad o reporte de manera efectiva. Conocer el contexto de transporte y mensajes reduce el tiempo de incorporación y favorece una operación confiable a largo plazo.

- Asegura que el dispositivo esté configurado para reportar al endpoint y puerto correctos de Plaspy
- Ayuda a interpretar la telemetría como soluciones GPS asistidas por INS, alertas de comportamiento de conducción y cálculos de kilometraje
- Facilita la resolución de problemas cuando no se reciben mensajes o cuando eventos esperados no aparecen en Plaspy
- Apoya la toma de decisiones entre UDP y TCP según la confiabilidad de la red y el comportamiento del operador móvil
- Reduce la incertidumbre al coordinar con soporte del fabricante o al actualizar el firmware del dispositivo

## Por qué usar Plaspy con este protocolo

Usar la serie Concox JM-VG02 con Plaspy ofrece a las organizaciones una forma práctica de centralizar ubicación de vehículos, alertas de comportamiento de conducción y reporte de kilometraje. Plaspy ingiere los reportes del rastreador y los presenta para apoyar operaciones de flota, monitoreo de seguridad y planificación de mantenimiento. El GPS asistido por INS y los sensores de movimiento multieje del JM-VG02U proporcionan datos de eventos más ricos que Plaspy puede aprovechar en flujos de trabajo de seguridad y operaciones.

Si desea obtener más información sobre la integración de dispositivos como el JM-VG02 con Plaspy, visite https://www.plaspy.com para explorar las capacidades de la plataforma y las opciones de incorporación. Para detalles específicos de protocolo, comportamiento de firmware y notas de implementación más recientes, consulte la documentación oficial de Concox en https://www.iconcox.com/ ya que la orientación del fabricante puede cambiar con el tiempo.
