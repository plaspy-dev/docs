---
slug: /telic/picotrack_4g/protocol
id: picotrack_4g-protocol
sidebar_label: Protocol
title: Telic - Picotrack 4G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Telic Picotrack 4G y su compatibilidad con Plaspy, con ajustes de conexión e integración
keywords:
  - Protocolo Telic Picotrack 4G
  - Protocolo GPS Telic Picotrack 4G
  - Protocolo Telic Picotrack 4G para Plaspy
  - Protocolo de comunicación Telic Picotrack 4G
  - Protocolo de rastreo Telic Picotrack 4G
  - Telemetría Picotrack 4G
  - Compatibilidad de dispositivos Plaspy
  - Variante Telic PAIP UKSP
  - Protocolo de rastreador LTE M
  - Protocolo de rastreo de vehículos
---

# Telic - Protocolo Picotrack 4G

Esta página describe el contexto público del protocolo para usar el Telic Picotrack 4G con Plaspy. Explica cómo el rastreador se comunica con los endpoints de ingestión de Plaspy, las opciones de transporte más comunes y las consideraciones prácticas al integrar el dispositivo en una implementación de Plaspy. El contenido se centra en la información de conexión y protocolo que es segura para publicar y útil para la configuración y resolución de problemas.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del Picotrack 4G, la revisión de hardware y la implementación del fabricante, incluida la variante PAIP UKSP pensada para entornos gubernamentales. Debido a esas diferencias, el comportamiento en campo puede variar entre distintas compilaciones de firmware.

## Visión general del protocolo

El protocolo de comunicación del Picotrack 4G define cómo el dispositivo empaqueta y transmite telemetría, posición GNSS e información de estado a un servidor backend. En la práctica, el protocolo permite que el rastreador se identifique, reporte ubicación y datos de sensores, y envíe latidos periódicos o mensajes impulsados por eventos que Plaspy ingiere y muestra en su plataforma.

- Permite la identificación del dispositivo y el reporte de sesión para que Plaspy asocie mensajes a una unidad concreta.
- Transporta posiciones GNSS y telemetría que Plaspy convierte en ubicaciones en tiempo real y recorridos históricos.
- Soporta latidos periódicos y intervalos de reporte configurables para equilibrar la frecuencia de actualizaciones y la vida útil de la batería.
- Puede incluir variantes específicas del fabricante o la región, como la opción PAIP UKSP para despliegues regulados.
- Funciona sobre transporte IP estándar, por lo que el mismo endpoint de Plaspy puede atender a múltiples modelos de rastreadores.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes en un endpoint de ingestión compartido y determina automáticamente el protocolo del rastreador en función del patrón del tráfico entrante y los identificadores del dispositivo. En la mayoría de los casos, usted no necesita seleccionar un protocolo dentro de Plaspy si el Picotrack 4G está configurado para reportar al endpoint de Plaspy usando el host y transporte correctos.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for device reporting and all devices in Plaspy use the same port.
- Plaspy automáticamente detecta el protocolo del rastreador cuando un dispositivo correctamente configurado envía datos al endpoint.
- Los pasos típicos de configuración son apuntar el dispositivo al host de Plaspy y verificar que el equipo esté enviando telemetría por el transporte configurado.
- Cuando los dispositivos usan variantes específicas del fabricante como PAIP UKSP, Plaspy ingerirá los mensajes siempre que el dispositivo reporte al endpoint y transporte compartidos.

## Transporte y contexto de conexión

El Picotrack 4G puede usar transportes IP estándar para alcanzar Plaspy. El dispositivo puede configurarse para abrir una conexión al endpoint de Plaspy usando UDP o TCP, según el firmware y las opciones de configuración disponibles en la unidad. Comprender el transporte y la información de destino es importante para la configuración de redes y la resolución de problemas.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 para la ingestión en Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica las reglas de firewall y NAT.
- La elección entre UDP y TCP viene determinada por el firmware del dispositivo y el comportamiento deseado en cuanto a fiabilidad de entrega y consumo de batería.
- Confirme que el modo de transporte del dispositivo cumpla con las políticas del operador o la red que afecten a conexiones de larga duración.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden modificar la temporización de los mensajes, los campos incluidos en la telemetría o los modos de transporte soportados.
- Revisiones de hardware o variantes de SKU pueden habilitar u omitir funciones específicas, como entradas para sensores externos.
- Variantes del protocolo por parte del fabricante, como PAIP UKSP, pueden cambiar el contenido de los mensajes o el comportamiento de cumplimiento.
- La selección de transporte (UDP frente a TCP) puede impactar el consumo de batería y el comportamiento de la sesión en redes LTE M.
- Valide la compatibilidad revisando la configuración del dispositivo y confirmando que los mensajes llegan correctamente al endpoint de Plaspy.
- En caso de duda, consulte la interfaz de configuración del dispositivo y los registros de conexión de Plaspy para confirmar que el equipo está reportando correctamente.

## Por qué es importante entender el protocolo

Tener una visión clara del protocolo de comunicación del Picotrack 4G ayuda a garantizar despliegues confiables, autonomía de batería predecible y una resolución de problemas más eficiente cuando los dispositivos están en campo. También permite planear actualizaciones de firmware, decisiones de transporte y gestionar variaciones regulatorias que puedan aplicar.

- Acelera la configuración inicial al confirmar el host de destino y los ajustes de transporte correctos.
- Ayuda a diagnosticar problemas de conectividad relacionados con restricciones del operador o del firewall.
- Orienta el ajuste de intervalos de reporte y ciclos de sueño para optimizar la vida de la batería.
- Aclara cuándo las variantes del fabricante requieren configuraciones o pasos de cumplimiento distintos.
- Facilita la planificación informada para escalar flotas grandes y mantener la fiabilidad a largo plazo.

## Por qué usar Plaspy con este protocolo

Usar el Picotrack 4G con Plaspy ofrece a las organizaciones una manera de recopilar ubicación en tiempo real, actualizaciones de estado y telemetría histórica desde dispositivos LTE M robustos y de larga autonomía. El endpoint de ingestión compartido de Plaspy y la detección automática de protocolos reducen la complejidad de configuración, permitiendo que los despliegues se concentren en la ubicación de los dispositivos, la cadencia de reportes y los flujos operativos en lugar de la selección de protocolo por dispositivo.

Si desea más información sobre cómo Plaspy funciona con dispositivos como el Picotrack 4G, visite https://www.plaspy.com para detalles de la plataforma y opciones de despliegue. Verifique los detalles específicos del protocolo, el comportamiento del firmware y cualquier variante regulatoria con el fabricante en https://www.telic.de, ya que el soporte de protocolo y las implementaciones de firmware pueden cambiar con el tiempo.
