---
slug: /ruptela/trace5/protocol
id: trace5-protocol
sidebar_label: Protocol
title: Ruptela - Trace5 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo de comunicación Ruptela Trace5 y cómo se conecta con Plaspy para seguimiento de flotas confiable
keywords:
  - Protocolo Ruptela Trace5
  - Protocolo GPS Ruptela Trace5
  - Protocolo de comunicación Ruptela Trace5
  - Compatibilidad Trace5 con Plaspy
  - Protocolo localizador vehicular Ruptela
  - Protocolo de seguimiento de flotas Trace5
  - Protocolo de dispositivo Plaspy
  - Rastreador Trace5 4G GNSS
  - Integración de seguimiento Ruptela
  - Guía del protocolo Trace5
---

# Ruptela - Protocolo Trace5

Esta página describe el contexto público del protocolo para usar el rastreador Ruptela Trace5 con Plaspy. Resume en términos generales cómo se comunica el Trace5, qué puntos de conexión ofrece Plaspy para el reporte de dispositivos y qué debe considerar al integrar el equipo para el seguimiento de flotas y la supervisión operativa. El contenido se centra en información pública y no sensible para ayudar en la planificación de la implementación y la resolución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones de seguridad disponibles pueden variar según el firmware, la revisión de hardware y la implementación del fabricante; por tanto, el comportamiento real de una unidad Trace5 concreta puede diferir ligeramente de este resumen general.

## Resumen del protocolo

El Trace5 utiliza su protocolo de comunicación para enviar posición GNSS, datos de movimiento y estado del equipo a un servidor remoto. El protocolo define cómo el rastreador se identifica, cómo empaqueta la telemetría y cómo transmite mensajes a un backend como Plaspy para que la posición, los estados de E/S y la información diagnóstica puedan emplearse en flujos de trabajo de la flota.

- Permite que el Trace5 envíe reportes de ubicación y estado periódicos y basados en eventos a un endpoint remoto
- Incluye información de identidad del dispositivo para que Plaspy pueda asociar mensajes a un rastreador concreto
- Transmite telemetría y datos diagnósticos que Plaspy utiliza para ubicación, alertas y reproducción histórica
- Puede incluir canales cifrados según el firmware y la variante del dispositivo para mayor seguridad de datos
- Funciona sobre transporte IP estándar, por lo que la conectividad celular y el enrutamiento de red determinan la alcanzabilidad

## Cómo detecta Plaspy el protocolo

Plaspy recibe los mensajes de los dispositivos en un endpoint y puerto compartidos y utiliza detección automática de protocolo para reconocer el tipo de rastreador cuando un equipo configurado informa. En la mayoría de las implementaciones, los usuarios finales no necesitan seleccionar el protocolo manualmente dentro de Plaspy, siempre que el rastreador esté configurado para reportar al endpoint de Plaspy.

- Plaspy server domain is d.plaspy.com and is available for device reporting
- Plaspy server IP is 54.85.159.138 which can be used as an alternative endpoint
- The platform listens on port 8888 for incoming tracker connections
- Plaspy automatically detects the tracker protocol when a device connects and reports
- All devices in Plaspy use the same port for reporting which simplifies tracker configuration

## Transporte y contexto de conexión

Los dispositivos Trace5 soportan transporte IP estándar sobre redes celulares y pueden configurarse para reportar a Plaspy usando UDP o TCP según las capacidades del equipo y la configuración del usuario. Los parámetros de conexión son un detalle práctico al apuntar el dispositivo a Plaspy por primera vez y durante la resolución de problemas.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy
- Los equipos pueden dirigirse al dominio d.plaspy.com o a la dirección IP 54.85.159.138
- El puerto de escucha de Plaspy es 8888 y es el mismo para todos los dispositivos soportados
- La elección entre UDP y TCP afecta la semántica de entrega y puede estar restringida por el firmware o las condiciones de la red
- Cuando está disponible y activada, la compatibilidad con TLS proporciona transporte cifrado para las variantes de dispositivo compatibles

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar formatos de mensaje, campos disponibles u opciones de seguridad; verifique el comportamiento respecto a la versión de firmware instalada
- Las revisiones de hardware o las variantes regionales del Trace5 pueden exponer diferentes opciones de transporte o configuración
- Algunas variantes del Trace5 soportan TLS v1.2 para comunicación cifrada mientras que otras no; consulte el modelo y firmware específicos
- La selección de transporte entre UDP y TCP suele poder configurarse en el dispositivo y puede afectar la entrega y la latencia
- Herramientas del fabricante como device center o installation assistant son útiles para validar los ajustes de reporte antes del despliegue
- Confirme que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para la integración con Plaspy

## Por qué es importante comprender el protocolo

Tener una comprensión práctica del protocolo de comunicación del Trace5 ayuda a garantizar una configuración fluida, un flujo de datos fiable y una resolución de problemas más rápida al integrar con Plaspy. Conocer las opciones de transporte, dónde debe reportar el dispositivo y el papel del firmware y los ajustes de seguridad reduce el tiempo de integración y mejora la fiabilidad operativa.

- Garantiza que el dispositivo esté configurado con el endpoint y puerto correctos para el reporte a Plaspy
- Ayuda a interpretar por qué los mensajes no llegan cuando difieren las configuraciones de red o transporte
- Facilita la selección de ajustes de seguridad apropiados cuando el dispositivo soporta TLS
- Soporta la validación de compatibilidad de firmware y disponibilidad de funciones durante los despliegues
- Mejora la colaboración con el soporte del fabricante al usar una terminología consistente

## Por qué usar Plaspy con este protocolo

Usar el Ruptela Trace5 con Plaspy ofrece a las organizaciones visibilidad centralizada de ubicaciones, estado y historial de eventos de los vehículos, aprovechando la detección automática de protocolos y los ajustes de conexión unificados de Plaspy. Las características del hardware Trace5, como el buen desempeño GNSS, conectividad 4G y carcasa IP67 resistente, lo hacen apto para usos exigentes en flotas, mientras que Plaspy proporciona el backend para ingerir, normalizar y presentar esos datos para uso operativo.

Para más detalles sobre las capacidades de Plaspy y cómo soporta la integración de dispositivos, visite https://www.plaspy.com. Para la documentación específica más reciente del protocolo, notas de firmware y variantes de modelos, verifique la información actual en el sitio del fabricante https://ruptela.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
