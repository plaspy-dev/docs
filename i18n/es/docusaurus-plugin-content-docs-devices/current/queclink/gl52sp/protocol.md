---
slug: /queclink/gl52sp/protocol
id: gl52sp-protocol
sidebar_label: Protocol
title: QuecLink - GL52SP Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo del QuecLink GL52SP y cómo se comunica con Plaspy para rastreo de activos y GNSS
keywords:
  - QuecLink GL52SP protocolo
  - protocolo GPS QuecLink GL52SP
  - protocolo de comunicación QuecLink GL52SP
  - protocolo tracker Sigfox GL52SP
  - compatibilidad GL52SP Plaspy
  - protocolo rastreador de activos QuecLink
  - protocolo GNSS tracker Sigfox
  - protocolo de rastreo GL52SP
  - protocolo de dispositivo Plaspy
  - integración QuecLink GL52SP
---

# QuecLink - Protocolo GL52SP

Esta página documenta el contexto público del protocolo para usar el QuecLink GL52SP con Plaspy. Describe a alto nivel cómo se comunica el equipo, qué papel tiene el protocolo de reporte del tracker para enviar información GNSS y de estado, y cómo Plaspy recibe e interpreta esos informes para casos de uso de rastreo de activos. El objetivo es ofrecer orientación útil de integración sin exponer detalles sensibles de implementación.

Plaspy utiliza una configuración de conexión compartida entre dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el equipo apunta al endpoint de Plaspy. El comportamiento exacto del protocolo en el GL52SP puede variar según firmware, revisión de hardware, ajustes regionales de Sigfox y la implementación del fabricante, por lo que este documento se enfoca en las consideraciones públicas y prácticas necesarias para una comunicación y configuración exitosas.

## Visión general del protocolo

El GL52SP es un mini rastreador de activos en modo standby basado en Sigfox con soporte GNSS. En términos de integración, el protocolo de comunicación del dispositivo gobierna cómo se identifica, cómo reporta posición y estado, y cómo genera informes por movimiento o por activación. Plaspy acepta esos informes entrantes y los transforma en telemetría utilizable para monitoreo y alertas.

- El protocolo permite que el GL52SP entregue coordenadas GNSS, estado de batería y movimiento, además de informes programados a un servidor remoto.
- El funcionamiento sobre la red Sigfox implica que el tamaño y la frecuencia de los mensajes están optimizados para bajo consumo de datos y larga vida de batería.
- El equipo utiliza un conjunto de comandos por la interfaz aérea para control y reporte, apoyándose en GNSS para el posicionamiento.
- Variantes del protocolo y ajustes regionales afectan la frecuencia y la fiabilidad de entrega de mensajes en las distintas regiones de Sigfox.
- Plaspy traduce los informes entrantes en telemetría de la plataforma una vez que los datos llegan al endpoint compartido de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los informes de dispositivos en un único endpoint compartido y determina automáticamente qué protocolo de tracker está en uso. Cuando el GL52SP se configura para reportar a Plaspy, por lo general usted no necesita seleccionar un protocolo manualmente dentro de la plataforma; Plaspy detecta y analiza los mensajes soportados a medida que llegan.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- El puerto compartido de reporte usado por Plaspy es 8888 y es el mismo para todos los dispositivos soportados
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y la red
- Si el GL52SP apunta correctamente al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del tracker y procesará los informes entrantes

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el dispositivo alcanza el endpoint de Plaspy y qué opciones de transporte son comúnmente disponibles. Para el GL52SP, Sigfox es el medio de transmisión aérea del propio dispositivo, mientras que los puntos de integración y flujos desde gateways pueden reenviar los datos a Plaspy usando transportes IP estándar.

- El GL52SP reporta principalmente a través de la red Sigfox; socios de integración o gateways de backend reenvían los datos a Plaspy
- Plaspy acepta informes de dispositivos en d.plaspy.com o en la dirección IP 54.85.159.138
- La plataforma Plaspy utiliza el puerto 8888 para conexiones entrantes de dispositivos y todos los equipos usan este mismo puerto
- Los dispositivos o gateways pueden usar UDP o TCP en el puerto 8888 al reenviar datos a Plaspy dependiendo de la configuración
- Asegúrese de que cualquier reenvío de red o servicio de gateway esté configurado para apuntar al endpoint y puerto de Plaspy para permitir la detección automática del protocolo

## Notas sobre compatibilidad del protocolo

- El comportamiento del GL52SP puede variar entre versiones de firmware y lotes de hardware; verifique las notas de la versión del firmware del dispositivo al solucionar problemas
- Las variantes regionales de Sigfox y la configuración RF afectan la temporización y disponibilidad de los mensajes; confirme que la región RC del dispositivo coincide con la región de despliegue
- Algunas funcionalidades del GL52SP, como detección de movimiento, reportes al activarse y reportes con temporización programada, pueden ser configurables y afectar el flujo de datos y la duración de la batería
- Si un gateway o integrador reenvía uplinks Sigfox a Plaspy, asegúrese de que el reenvío preserve la información que Plaspy necesita para identificar el dispositivo
- La elección de transporte entre UDP y TCP al reenviar a Plaspy puede afectar las características de entrega; pruebe ambas opciones en su entorno si es posible
- Consulte siempre la documentación del fabricante sobre los conjuntos de comandos y las funciones soportadas antes de depender de comportamientos específicos

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GL52SP ayuda a asegurar una configuración confiable, una ingestión de telemetría precisa y una resolución eficiente de problemas en despliegues de monitoreo de activos con Plaspy. Saber cómo reporta el equipo y qué espera la plataforma reduce el tiempo de puesta en marcha y mejora la disponibilidad operativa.

- Informa sobre cómo configurar los intervalos de reporte y los modos de ahorro de energía para que coincidan con los requisitos de rastreo
- Ayuda a diagnosticar informes perdidos o retrasados verificando el reenvío desde gateways y la accesibilidad al endpoint de Plaspy
- Aclara cómo el firmware y la configuración regional impactan el contenido del mensaje y el éxito de la entrega
- Permite planificar la vida de la batería alineando la frecuencia de reporte y el comportamiento de activación por movimiento con las necesidades operativas
- Facilita la colaboración con integradores o proveedores de backend Sigfox para asegurar un reenvío correcto hacia Plaspy

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL52SP con Plaspy ofrece a las organizaciones una forma sencilla de convertir uplinks de bajo volumen en Sigfox y reportes GNSS en información accionable para el rastreo de activos. La detección automática de protocolo de Plaspy y el puerto de reporte compartido simplifican la incorporación, de modo que los dispositivos pueden comenzar a reportar con mínima configuración manual cuando apuntan al endpoint de Plaspy.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique las especificaciones más recientes del GL52SP con el fabricante en https://www.queclink.com/ antes de finalizar planes de despliegue.
