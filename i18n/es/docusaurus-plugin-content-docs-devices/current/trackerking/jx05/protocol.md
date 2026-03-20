---
slug: /trackerking/jx05/protocol
id: jx05-protocol
sidebar_label: Protocol
title: TrackerKing - JX05 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para TrackerKing JX05 y compatibilidad con Plaspy, GT06, JT808 y Tianqin
keywords:
  - Protocolo TrackerKing JX05
  - Protocolo GPS TrackerKing JX05
  - Protocolo TrackerKing JX05 para Plaspy
  - Protocolo de comunicación TrackerKing JX05
  - Protocolo de rastreo TrackerKing JX05
  - JX05 GT06 JT808 Tianqin
  - Compatibilidad JX05 Plaspy
  - Protocolo de rastreador de activos TrackerKing
  - Protocolo GPS JX05
  - Protocolo de dispositivo Plaspy
---

# TrackerKing - Protocolo JX05

Esta página describe el contexto público del protocolo para usar el TrackerKing JX05 con Plaspy. Se enfoca en el comportamiento de comunicación relevante para integración y monitoreo, más que en detalles internos de firmware o propiedad del fabricante. El objetivo es ayudar a usuarios técnicos e integradores a comprender cómo el rastreador envía datos a Plaspy y qué revisar durante la configuración y solución de problemas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto de los mensajes y las funciones disponibles pueden variar según el firmware del JX05, la revisión de hardware y la configuración del fabricante; cuando sea necesario, confirme el comportamiento específico del equipo con TrackerKing. El JX05 normalmente reporta usando el protocolo GT06 por defecto y puede configurarse para usar mapeos JT808 o Tianqin cuando esas opciones están disponibles.

## Resumen del protocolo

El protocolo de comunicación del JX05 es el conjunto de convenciones de mensajes que el rastreador usa para identificarse, reportar posiciones GNSS y reenviar alarmas y estados a un servidor. En el JX05, la selección del protocolo determina cómo se codifican e interpretan eventos como movimiento, vibración, geocerca y batería baja por un backend como Plaspy.

- Permite al JX05 transmitir actualizaciones periódicas de ubicación y eventos de alarma inmediatos a un servidor remoto para monitoreo centralizado.
- Hace posible que el dispositivo se identifique y entregue identificadores y campos de estado que Plaspy usa para asociar la telemetría con un activo.
- Provee un mapeo para tipos de eventos como movimiento, vibración, entrada y salida de geocerca, exceso de velocidad y batería baja, de modo que las alertas sean accionables en Plaspy.
- Soporta mapeos de mensajes alternativos cuando están disponibles las opciones JT808 o Tianqin para adaptarse a requisitos del integrador.
- Permite que Plaspy ingiera la telemetría en paneles y reglas de alerta una vez que los mensajes llegan al endpoint compartido de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador basándose en el tráfico entrante y los identificadores del dispositivo. En la mayoría de despliegues, si el JX05 está configurado para reportar al endpoint de Plaspy, no se requiere selección de protocolo manual dentro de la plataforma.

- Plaspy acepta tráfico de dispositivos en d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- La plataforma soporta modos de reporte tanto UDP como TCP en el puerto 8888, permitiendo a los dispositivos usar el transporte que soporten.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, las unidades JX05 pueden apuntar a la dirección compartida sin cambiar el puerto por dispositivo.
- La detección automática simplifica la configuración para integradores que configuran el JX05 para reportar usando GT06 o los mapeos JT808 o Tianqin disponibles.
- Si un dispositivo no está reportando correctamente, verificar el endpoint objetivo y el transporte es el primer paso en la solución de problemas.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el JX05 abre las comunicaciones y qué endpoints configurar al integrar con Plaspy. El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 dependiendo de la opción de firmware y la preferencia del integrador.

- Los dispositivos JX05 pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- Las opciones de transporte soportadas incluyen UDP y TCP en el puerto 8888; elija el modo que coincida con la configuración del dispositivo y el entorno de red.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración de firewalls y enrutamiento.
- Para activos con conectividad celular, confirme que la SIM y la red permiten conexiones salientes al endpoint y puerto de Plaspy.
- La confiabilidad de la red y la latencia de paquetes pueden afectar la entrega; revise los ajustes de energía del dispositivo y los intervalos de reporte para equilibrar la duración de la batería y las necesidades de tiempo real.

## Notas sobre compatibilidad de protocolo

- El JX05 comúnmente usa el protocolo GT06 por defecto; los mapeos JT808 o Tianqin pueden ser seleccionables según el firmware y el aprovisionamiento del dispositivo.
- Las revisiones de firmware pueden cambiar campos de mensaje, alarmas disponibles y comportamiento; verifique la versión de firmware si observa diferencias inesperadas.
- Revisión de hardware o variantes regionales pueden afectar los transportes soportados o características opcionales como la sensibilidad de detección de vibración.
- Seleccionar UDP frente a TCP afecta la semántica de entrega y puede estar limitado por la red móvil o el proveedor de SIM.
- Al integrar con un backend personalizado además de Plaspy, asegúrese de que el mapeo seleccionado coincida con las expectativas del servidor.
- Siempre valide la compatibilidad con la documentación del fabricante y confirme los valores predeterminados actuales antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del JX05 ayuda a asegurar una configuración confiable, un mapeo de eventos preciso y una solución de problemas eficiente cuando el rastreador se utiliza con Plaspy. Conocer cómo reporta el dispositivo y qué campos envía reduce el tiempo de integración y mejora la visibilidad operativa.

- Acelera la configuración inicial al garantizar que el dispositivo apunte al endpoint y transporte correctos de Plaspy.
- Reduce falsas alarmas al alinear umbrales de alarma del dispositivo y el mapeo de eventos con las reglas de alerta de Plaspy.
- Ayuda a diagnosticar problemas de conectividad al verificar transporte, endpoint y comportamiento de la red SIM.
- Permite decisiones informadas sobre intervalos de reporte y modos de ahorro de energía para optimizar vida útil de batería y fidelidad del seguimiento.
- Aclara qué mapeos de mensajes están en uso cuando se seleccionan opciones JT808 o Tianqin en lugar de GT06.

## Por qué usar Plaspy con este protocolo

Usar el JX05 con Plaspy ofrece una forma práctica de centralizar telemetría de ubicación y alarmas para activos desatendidos. Plaspy ingiere los mensajes del rastreador y los expone en paneles, informes y flujos de trabajo de alerta para que los equipos operativos puedan monitorear remolques, contenedores y equipos sin sondeos manuales.

Plaspy acepta tráfico de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador, lo que agiliza el despliegue y reduce la carga de configuración. Para obtener más información sobre Plaspy y cómo puede trabajar con dispositivos como el TrackerKing JX05, visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, información de firmware y orientación del fabricante, revise los recursos oficiales de TrackerKing en https://trackerking.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
