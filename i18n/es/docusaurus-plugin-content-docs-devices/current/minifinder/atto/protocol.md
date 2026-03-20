---
slug: /minifinder/atto/protocol
id: atto-protocol
sidebar_label: Protocol
title: MiniFinder - ATTO Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar MiniFinder ATTO con servidores Plaspy y ajustes de conexión compartidos
keywords:
  - Protocolo MiniFinder ATTO
  - Protocolo GPS MiniFinder ATTO
  - Protocolo de comunicación MiniFinder ATTO
  - Protocolo de seguimiento MiniFinder ATTO
  - Rastreador MiniFinder Plaspy
  - Protocolo rastreador GPS ATTO
  - Protocolo rastreador para mascotas
  - Compatibilidad de dispositivos Plaspy
  - Integración MiniFinder
  - Guía del protocolo de rastreadores GPS
---

# MiniFinder - ATTO — Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador MiniFinder ATTO con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, los ajustes de conexión compartidos que Plaspy espera y los puntos prácticos a considerar al configurar o solucionar problemas del rastreador para su uso en la plataforma.

El MiniFinder ATTO es un rastreador GPS compacto orientado a mascotas y animales, conocido por su larga autonomía, su diseño ligero y características como modo de sueño inteligente, seguimiento en tiempo real, alertas de geocerca y resistencia al agua. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo que utiliza el ATTO regula cómo el rastreador se identifica, informa ubicación y estado, y recibe configuraciones o comandos cuando aplica. Para la integración con Plaspy, el contexto público importante es cómo el dispositivo entrega telemetría utilizable al endpoint de Plaspy para que la plataforma pueda procesar ubicación, movimiento y alertas.

- Envía actualizaciones de ubicación y estado para que Plaspy muestre posiciones en tiempo real e históricas.
- Permite comunicar la identidad del dispositivo y metadatos básicos para que Plaspy asocie los reportes con el activo correcto.
- Soporta reportes periódicos y mensajes impulsados por eventos (por ejemplo, activaciones o eventos de geocerca) que Plaspy utiliza para alertas y monitoreo.
- Puede entregarse preconfigurado a un sistema de rastreo, lo que simplifica la configuración inicial con Plaspy.
- Dependiendo de las funciones públicas del fabricante, puede exponer opciones de configuración vía SMS o comandos remotos.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores diferentes y para identificar automáticamente el protocolo entrante cuando un dispositivo reporta al endpoint compartido de Plaspy. En la mayoría de los casos, un dispositivo ATTO correctamente configurado que envía datos a Plaspy no requerirá selección manual del protocolo dentro de la plataforma.

- Plaspy recibe el tráfico de dispositivos en el endpoint compartido d.plaspy.com y la IP pública 54.85.159.138.
- Todos los dispositivos usan el mismo puerto de red en Plaspy, lo que simplifica la configuración y el ruteo en el lado del dispositivo.
- Cuando un dispositivo ATTO envía datos al endpoint de Plaspy, la plataforma examina la sesión entrante y selecciona automáticamente el manejo apropiado para ese rastreador.
- Usted por lo general solo necesita asegurarse de que el dispositivo apunte a Plaspy y que la configuración de transporte (UDP o TCP) coincida con las capacidades del equipo.
- Si un rastreador fue preconfigurado para Plaspy, los pasos estándar de puesta en marcha suelen ser mínimos y se centran en la SIM, la alimentación y el montaje.

## Transporte y contexto de conexión

Plaspy soporta ambos transportes comunes que los rastreadores pueden usar para enviar sus reportes. El contexto práctico de conexión para un ATTO destinado a reportar a Plaspy es por tanto sencillo: apunte el dispositivo al endpoint de Plaspy y use el transporte que el dispositivo soporte.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- El dominio del servidor Plaspy d.plaspy.com y la dirección 54.85.159.138 son endpoints válidos a los que los dispositivos pueden apuntar.
- Plaspy escucha en el puerto 8888 para reportes de rastreadores; este es el mismo puerto usado para todos los dispositivos soportados por Plaspy.
- La selección de UDP o TCP en el dispositivo debe seguir las opciones documentadas para el ATTO y las condiciones de red donde operará el dispositivo.
- Asegúrese de que la SIM del dispositivo y la red móvil tengan conectividad de datos y que las restricciones del proveedor permitan conexiones salientes al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden introducir cambios en el protocolo u opciones adicionales; confirme la compatibilidad de firmware antes de un despliegue masivo.
- Las revisiones de hardware entre lotes de dispositivos pueden afectar los transportes disponibles o el comportamiento; consulte la documentación de la unidad específica.
- Las opciones de configuración proporcionadas por el fabricante, como preconfiguración o comandos SMS, pueden alterar la forma en que un dispositivo se configura para Plaspy.
- La selección del transporte (UDP versus TCP) debe reflejar tanto la capacidad del dispositivo como las necesidades de fiabilidad en campo.
- Valide que la frecuencia de telemetría del rastreador y sus modos de suspensión cumplan con sus requisitos de monitoreo y autonomía de batería.
- En caso de duda, consulte la documentación de MiniFinder o el soporte del fabricante para orientación específica por modelo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el ATTO ayuda a garantizar una configuración fluida, un flujo de datos fiable y un comportamiento de batería y alertas predecible cuando se usa con Plaspy. Tener claridad sobre el protocolo también acelera la resolución de problemas e informa decisiones sobre intervalos de reporte, estrategia de sueño y transporte.

- Optimiza la configuración inicial para que los dispositivos reporten a Plaspy sin reintentos innecesarios ni errores de configuración.
- Ayuda a ajustar intervalos de reporte y modos de suspensión para equilibrar la precisión de ubicación y la duración de la batería.
- Orienta los pasos de resolución cuando los dispositivos no son visibles en Plaspy o faltan alertas.
- Facilita la planificación ante actualizaciones de firmware o reemplazos en campo al resaltar consideraciones de compatibilidad.
- Apoya la planificación de integraciones de geocercas, alertas y otros comportamientos que dependen de telemetría oportuna.

## Por qué usar Plaspy con este protocolo

Usar el MiniFinder ATTO con Plaspy ofrece a organizaciones y propietarios de mascotas una vía directa hacia visibilidad en tiempo real, alertas configurables y seguimiento histórico. La forma compacta del ATTO, su larga autonomía y sus funciones orientadas a mascotas lo hacen adecuado para rastreo animal, mientras que la detección automática de protocolos de Plaspy y el enfoque de endpoint compartido reducen la carga de configuración.

Para saber más sobre Plaspy y cómo gestiona las conexiones y reportes de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento de firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente sobre el protocolo específico del dispositivo y notas de firmware en el sitio del fabricante https://minifinder.se/.
