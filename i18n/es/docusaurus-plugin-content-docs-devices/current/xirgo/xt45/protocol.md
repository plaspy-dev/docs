---
slug: /xirgo/xt45/protocol
id: xt45-protocol
sidebar_label: Protocol
title: Xirgo - XT45 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Xirgo XT45 y su compatibilidad con Plaspy para conexión y transporte
keywords:
  - Protocolo Xirgo XT45
  - Protocolo GPS Xirgo XT45
  - Compatibilidad XT45 Plaspy
  - Protocolo rastreador Xirgo
  - Protocolo de seguimiento XT45
  - Protocolo de comunicación XT45
  - Compatibilidad rastreador GPS Xirgo
  - Protocolo de dispositivo Plaspy
  - Rastreo de flotas XT45
  - Rastreador de activos XT45
---

# Xirgo - Protocolo XT45

Esta página presenta el contexto público del protocolo para integrar el rastreador Xirgo XT45 con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, cómo se gestionan la conexión y el transporte, y qué esperar al incorporar el XT45 en una implementación de Plaspy. El contenido se centra en información pública no sensible para ayudar a usuarios técnicos, integradores y gestores de flotas a comprender el papel del protocolo en la telemetría y el reporte de ubicación confiables.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos están configurados para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los intervalos de mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; considere esta página como una orientación del protocolo y no un reemplazo de la documentación oficial de Xirgo.

## Visión general del protocolo

El protocolo del rastreador es el conjunto de reglas que el XT45 usa para enviar ubicación, telemetría y eventos a un servidor remoto para que Plaspy pueda recibirlos y mostrarlos. En el caso del XT45, el protocolo permite que el dispositivo se identifique, transmita posiciones GPS y estados de entradas y salidas de supervisión, y entregue actualizaciones de eventos que impulsan geocercas, alertas y reproducción histórica en Plaspy.

- Transmite posiciones GPS y marcas de tiempo para que Plaspy muestre ubicaciones en tiempo real y trayectos históricos.
- Envía cambios de estado en entradas y salidas de supervisión, como encendido del motor o entradas digitales para alertas basadas en eventos.
- Proporciona telemetría diseñada para entornos con energía intermitente, de modo que ventanas cortas de reporte sigan produciendo datos útiles.
- Permite que el dispositivo se identifique y aporte metadatos necesarios para el mapeo y estado del equipo en Plaspy.
- Soporta señales de control remoto a través de salidas de supervisión cuando se integra con flujos de trabajo de Plaspy para inmovilización o acciones remotas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador utilizado por el dispositivo. En la mayoría de implementaciones no es necesario seleccionar un protocolo dentro de Plaspy si el XT45 apunta a la dirección de Plaspy y utiliza el transporte soportado. Una configuración adecuada en el dispositivo suele ser suficiente para que Plaspy clasifique e ingiera los mensajes entrantes.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 and can be used instead of the domain in device configuration.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen transport.
- Plaspy automatically detects the tracker protocol once the device reports to the Plaspy endpoint and begins sending telemetry.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el XT45 llega a Plaspy a través de la red celular y qué opciones de transporte se usan comúnmente. Entender las elecciones de transporte y endpoint ayuda a asegurar un flujo de datos confiable desde el activo hasta la nube y reduce el tiempo de resolución de problemas durante la configuración inicial.

- El dispositivo puede usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los equipos pueden configurarse para apuntar a d.plaspy.com o directamente a 54.85.159.138 como destino.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- Elija UDP para menor sobrecarga y actualizaciones ocasionales tipo "fire and forget" o TCP para entrega orientada a sesión cuando el dispositivo lo soporte.
- Las condiciones de red, el comportamiento NAT del operador y el firmware del dispositivo pueden influir en si UDP o TCP es la mejor opción para una instalación específica.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar el timing, el contenido de los mensajes o campos de telemetría opcionales; confirme siempre la versión de firmware en uso.
- Las revisiones de hardware pueden añadir o modificar el comportamiento de entradas y salidas de supervisión y los canales de telemetría disponibles.
- Ajustes del fabricante como el transporte predeterminado o el hostname del servidor pueden variar según el SKU o el firmware regional.
- Seleccionar UDP frente a TCP en el dispositivo puede afectar la fiabilidad de la entrega dependiendo de la red y las características del operador.
- Al integrar muchas unidades, verifique que cada dispositivo apunte correctamente a d.plaspy.com o 54.85.159.138 y esté configurado en el puerto 8888.
- Para flujos de control que dependen de salidas de supervisión, valide que la revisión de hardware específica exponga las salidas requeridas y que el firmware soporte la actuación remota.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el XT45 ayuda a asegurar una configuración exitosa, reportes confiables y una resolución de problemas práctica al usar Plaspy. Conocer los aspectos básicos de conexión y los factores que afectan el comportamiento reduce el tiempo de inactividad y mejora la calidad de los datos que alimentan los paneles y alertas.

- Reduce el tiempo hasta la primera posición al asegurar que el dispositivo apunta al endpoint y puerto correctos de Plaspy.
- Facilita el diagnóstico de actualizaciones intermitentes revisando la selección de transporte y el comportamiento del firmware.
- Mejora la fidelidad de las alertas al confirmar que las entradas de supervisión se reportan y mapean correctamente en Plaspy.
- Permite flujos de control remoto predecibles validando que el dispositivo soporte las salidas y los comandos necesarios.
- Favorece buenas prácticas de configuración a nivel de flota, ya que Plaspy usa un puerto y endpoint compartidos para todos los equipos.

## Por qué usar Plaspy con este protocolo

Usar el XT45 con Plaspy ofrece a las organizaciones reportes de posición y telemetría resilientes para activos en entornos exigentes. El enfoque del XT45 en operación con energía intermitente, su carcasa robusta y las entradas y salidas de supervisión lo hacen una opción práctica para remolques, equipos de construcción y maquinaria remota donde el seguimiento fiable y el reporte de eventos son críticos.

Plaspy convierte la telemetría del XT45 en herramientas accionables para operaciones y seguridad: mapeo en vivo, geocercas, alertas basadas en eventos y reproducción histórica ayudan a los equipos a mantener la conciencia situacional y responder más rápido. Para saber más sobre Plaspy y cómo soporta rastreadores como el XT45, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre el protocolo del dispositivo, comportamiento de firmware y documentación del fabricante, verifique la información en el sitio de Xirgo https://xirgo.com/ ya que la implementación del dispositivo y el firmware pueden cambiar con el tiempo.
