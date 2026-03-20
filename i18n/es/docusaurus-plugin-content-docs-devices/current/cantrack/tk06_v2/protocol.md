---
slug: /cantrack/tk06_v2/protocol
id: tk06_v2-protocol
sidebar_label: Protocol
title: CanTrack - TK06 v2 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo CanTrack TK06 v2 y su contexto de comunicación para uso con Plaspy
keywords:
  - Protocolo CanTrack TK06 v2
  - Protocolo GPS CanTrack TK06 v2
  - Protocolo de rastreo CanTrack TK06 v2
  - Comunicación CanTrack TK06 v2
  - Rastreador CanTrack Plaspy
  - Rastreo GPRS TK06 v2
  - Rastreador GPS vehicular TK06 v2
  - Rastreo de flotas CanTrack TK06 v2
  - Compatibilidad de dispositivos Plaspy
  - Guía de protocolo rastreador GPS
---

# CanTrack - Protocolo TK06 v2

Esta página ofrece contexto público sobre el protocolo para usar el rastreador CanTrack TK06 v2 con la plataforma de gestión de flotas Plaspy. Se centra en cómo el dispositivo suele comunicarse vía GSM/GPRS y GPS y cómo esa comunicación se conecta con los ajustes públicos de Plaspy, sin exponer implementaciones privadas o sensibles.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el TK06 v2 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto de comunicación general y consideraciones prácticas para integración y resolución de problemas.

## Resumen del protocolo

El TK06 v2 integra GPS y comunicaciones GSM/GPRS para recopilar ubicación y estado, y entregar esa información a destinatarios autorizados o a un servidor en internet. En el contexto de Plaspy, el rastreador envía datos de posición, estado y alarmas a través de la red móvil para que Plaspy los ingiera y muestre en la interfaz de seguimiento y gestión de flotas.

- Emite reportes de posición periódicos o por eventos que Plaspy puede recibir para mapas e historial.
- Transmite alertas y señales de estado, como exceso de velocidad o alarmas de alimentación, para que Plaspy muestre eventos accionables.
- Utiliza datos GPRS para enviar reportes a un endpoint en internet y habilitar seguimiento en tiempo real cuando está configurado.
- Puede recurrir al envío por SMS para actualizaciones de ubicación o comandos cuando GPRS no está disponible.
- Soporta funciones útiles para flotas y seguridad vehicular, como inmovilización remota, monitoreo de voz y control de relés, según la configuración del equipo.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores e identificar automáticamente el protocolo usado por un informe entrante. Cuando un TK06 v2 se configura para reportar a Plaspy, la plataforma empata el patrón de datos entrante con las reglas de manejo correspondientes, por lo que generalmente no necesita seleccionar un protocolo manualmente.

- Plaspy expone un único endpoint y puerto compartido para el reporte de dispositivos, lo que simplifica la configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP de servidor 54.85.159.138 para alcanzar la plataforma.
- Plaspy utiliza el puerto 8888 para conexiones de dispositivos; el mismo puerto se emplea para todos los dispositivos soportados.
- El servicio acepta transporte UDP y TCP en el puerto 8888, según la capacidad y configuración del equipo.
- La detección automática implica que, por lo general, con los ajustes correctos en el rastreador Plaspy comenzará a ingerir datos sin pasos adicionales.

## Contexto de transporte y conexión

El contexto de conexión abarca el transporte de red y direccionamiento que usa el TK06 v2 para entregar datos a un servidor en internet como Plaspy. El rastreador puede usar el canal GPRS del operador móvil para abrir una conexión y transmitir los datos de rastreo al endpoint configurado.

- El equipo puede configurarse para usar transporte UDP o TCP, según el firmware y las opciones de configuración.
- Plaspy escucha en el puerto 8888 y todos los dispositivos reportan a ese mismo puerto para una configuración más sencilla.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP de servidor equivalente 54.85.159.138.
- Cuando GPRS está disponible, el rastreador envía los datos al servidor configurado para seguimiento en tiempo real y entrega de eventos.
- Si GPRS no está disponible, el equipo puede utilizar SMS para alertas o consultas de ubicación según lo permita el dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de mensajes, las funciones disponibles y los campos opcionales; verifique detalles de firmware al hacer troubleshooting.
- Las revisiones de hardware o variantes regionales del TK06 v2 pueden soportar subconjuntos de funciones distintos, incluyendo batería de respaldo opcional o cableado de relé.
- La configuración del fabricante determina si el equipo usa TCP o UDP por defecto; confirme el transporte configurado en su unidad.
- Algunas funciones, como monitoreo de voz o control remoto de relés, pueden requerir configuración adicional o cableado de accesorios.
- Siempre valide que el dispositivo esté apuntando a los ajustes de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888) y que el plan SIM del operador permita datos GPRS.
- Consulte las notas de lanzamiento del fabricante al comparar comportamientos entre unidades o tras actualizaciones de firmware.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK06 v2 ayuda a garantizar una incorporación fiable, un historial de ubicación preciso y una resolución más rápida de problemas cuando los dispositivos no se comportan como se espera en Plaspy. Conocer el transporte, los modos de reporte y la disponibilidad de funciones reduce el tiempo de configuración y favorece la continuidad operativa.

- Asegura que en el dispositivo se apliquen correctamente servidor y transporte para la entrega inmediata de datos a Plaspy.
- Permite identificar si la falta de reportes se debe a red, configuración o diferencias de firmware.
- Ayuda a planificar el direccionamiento de alarmas y eventos para que Plaspy muestre las alertas operativas relevantes.
- Facilita validar que el fallback por SMS y el reporte por GPRS funcionan según lo requerido para su caso de uso.
- Aumenta la confianza al desplegar múltiples unidades en flotas con firmware o revisiones mixtas.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el CanTrack TK06 v2 ofrece una forma práctica de consolidar datos GPS y de estado desde un rastreador vehicular compacto en una vista única de gestión de flotas. El manejo por parte de Plaspy de reportes estándar vía GPRS o SMS permite a las organizaciones monitorear ubicación, alarmas y estado operativo aprovechando ajustes de conexión compartidos para una configuración más sencilla.

Si desea saber más sobre cómo Plaspy gestiona la conectividad de dispositivos y la telemetría de flotas, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolo específico del dispositivo, notas de firmware y orientación del fabricante para el TK06 v2, confirme la información en el sitio oficial de CanTrack https://www.cantrackgps.com/ ya que el comportamiento del protocolo y las funciones de firmware pueden cambiar con el tiempo.
