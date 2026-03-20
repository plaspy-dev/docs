---
slug: /queclink/gl100m/protocol
id: gl100m-protocol
sidebar_label: Protocol
title: QuecLink - GL100M Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador GPS QuecLink GL100M y cómo se comunica con Plaspy para un seguimiento confiable
keywords:
  - QuecLink GL100M
  - protocolo GL100M
  - protocolo GPS QuecLink GL100M
  - protocolo de rastreo QuecLink GL100M
  - protocolo rastreador GPS QuecLink
  - protocolo GL100M @Track
  - compatibilidad GL100M con Plaspy
  - rastreo vehicular GL100M
  - rastreo de activos GL100M
  - protocolo de comunicación GL100M
---

# QuecLink - Protocolo GL100M

Esta página describe el contexto público del protocolo para integrar el rastreador GPS QuecLink GL100M con la plataforma Plaspy. Se enfoca en cómo el dispositivo reporta posición y estado a un endpoint de backend y qué esperar al configurar el GL100M para comunicarse con Plaspy. El contenido está dirigido a usuarios técnicos e integradores que requieren una visión clara y no sensible del comportamiento del protocolo y los requisitos de conexión.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página explica el flujo general de comunicación y consideraciones prácticas de compatibilidad en lugar de detalles de paquetes a bajo nivel.

## Resumen del protocolo

El GL100M incorpora un protocolo @Track que permite el reporte sobre redes GPRS/GSM y también puede interactuar vía SMS para comandos y alertas. En términos generales, el protocolo del dispositivo define cómo el rastreador se identifica, reporta posición y eventos de sensores, y entrega telemetría periódica o por eventos a un servidor backend como Plaspy.

- Provee identificación del dispositivo para que el servidor asocie los reportes entrantes con el activo o la cuenta correcta
- Codifica posición GPS, marca de tiempo y eventos de estado para que el backend muestre ubicación y alertas
- Soporta el reporte de eventos del sensor de movimiento y otras alertas a bordo para un manejo eficiente de eventos
- Funciona sobre conexiones de datos móviles para enviar reportes regulares de posición y notificaciones de emergencia
- Permite configuración remota y entrega de comandos vía red o SMS según la configuración del dispositivo

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint compartido para todos los rastreadores soportados e incluye lógica de detección para identificar el protocolo usado por un reporte entrante. En la práctica, esto significa que muchos dispositivos, incluido el GL100M, pueden apuntarse al endpoint de Plaspy y serán reconocidos automáticamente sin selección manual de protocolo en la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y los dispositivos pueden usarlo como host de reporte
- La IP del servidor Plaspy es 54.85.159.138 y los dispositivos pueden configurarse para reportar directamente a esa dirección
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y configuración del equipo
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado se conecta
- Usualmente usted no necesita elegir un protocolo dentro de Plaspy si el rastreador está enviando reportes al endpoint de Plaspy

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el GL100M llega a Plaspy a través de la red móvil y qué opciones de transporte se usan comúnmente. El rastreador puede usar datos GPRS para abrir un socket hacia el backend, y las elecciones de configuración determinan si se emplea UDP o TCP para el reporte.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 como destino de reporte
- El puerto usado para todas las conexiones de dispositivos a Plaspy es el 8888, lo que simplifica la configuración entre distintos modelos de rastreadores
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888; el transporte correcto depende del firmware del equipo y del comportamiento de la red del operador
- Datos GPRS/GSM son el transporte principal para reportes en vivo, mientras que SMS puede usarse como respaldo o para entrega de comandos si está soportado
- La confiabilidad de la red y las restricciones del operador pueden afectar la frecuencia de reporte y si es preferible UDP o TCP

## Notas sobre compatibilidad del protocolo

- El GL100M incluye un protocolo @Track embebido, pero el comportamiento del protocolo puede variar según la versión de firmware
- Revisiones de hardware o variantes regionales del modelo pueden cambiar qué funciones del protocolo están disponibles
- Algunas funciones como reporte de eventos o comandos remotos pueden requerir firmware específico o banderas de configuración
- La selección de transporte entre UDP y TCP puede afectar la semántica de entrega y debe coincidir con la configuración del dispositivo
- Siempre valide la configuración de transporte y la dirección del servidor cuando aprovisione un dispositivo para que reporte a Plaspy
- La documentación del fabricante es la fuente autorizada para conjuntos de comandos y comportamientos específicos de firmware

## Por qué importa comprender el protocolo

Entender cómo se comunica el GL100M ayuda a asegurar una configuración confiable, reportes predecibles y una resolución de problemas más rápida cuando el rastreador se usa con Plaspy. Conocer claramente el host de reporte, el transporte y la semántica de eventos reduce el tiempo de integración y contribuye a la fiabilidad a largo plazo.

- Asegura que el dispositivo esté apuntando al endpoint y puerto correctos de Plaspy para la detección automática
- Ayuda a diagnosticar problemas de conectividad relacionados con UDP frente a TCP o restricciones de la red móvil
- Orienta la configuración de intervalos de reporte y umbrales de eventos para optimizar la vida útil de la batería
- Clarifica qué eventos y alertas el rastreador entregará al backend para mapeo y notificaciones
- Ayuda a verificar que el firmware del dispositivo soporte las funciones requeridas antes de un despliegue a gran escala

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL100M con Plaspy ofrece a las organizaciones una forma directa de consolidar datos de ubicación y eventos en un solo backend sin configuraciones de puerto por dispositivo. El endpoint compartido de Plaspy y la detección automática de protocolo reducen los pasos de configuración necesarios por equipo y simplifican la incorporación de flotas o activos.

Plaspy proporciona un backend adaptable para recibir reportes del GL100M y convertirlos en datos de rastreo y alertas útiles. Para conocer más sobre Plaspy y cómo funciona con dispositivos como el GL100M visite https://www.plaspy.com. Para la documentación de protocolo específica del dispositivo, notas de firmware y detalles de implementación consulte al fabricante en https://www.queclink.com/ para verificar el comportamiento actual y las funciones soportadas.
