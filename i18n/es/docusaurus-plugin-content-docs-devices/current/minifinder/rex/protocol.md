---
slug: /minifinder/rex/protocol
id: rex-protocol
sidebar_label: Protocol
title: MiniFinder - Rex Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el rastreador MiniFinder Rex con Plaspy, incluyendo conexión y compatibilidad
keywords:
  - Protocolo MiniFinder Rex
  - Protocolo GPS MiniFinder Rex
  - Compatibilidad MiniFinder Rex Plaspy
  - Comunicación MiniFinder Rex
  - Protocolo de rastreo MiniFinder Rex
  - Protocolo rastreador canino Rex
  - Protocolo rastreador GPS MiniFinder
  - Rastreadores compatibles con Plaspy
  - Comunicación de rastreadores GPS
  - Telemetría para rastreo canino
---

# MiniFinder - Protocolo Rex

Esta página describe el contexto público del protocolo para usar el rastreador GPS MiniFinder Rex con la plataforma Plaspy. Se centra en los detalles de comunicación y conexión que importan al integrar Rex en los flujos de trabajo de Plaspy, y explica de manera general y no sensible cómo el dispositivo reporta ubicación y estado al endpoint de ingestión de Plaspy.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto de los mensajes y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación práctica a nivel de plataforma y recomienda validar con la documentación del fabricante.

## Resumen del protocolo

El rastreador Rex envía telemetría, ubicación y datos de estado a un servidor remoto para que Plaspy pueda mostrar posiciones en tiempo real y generar alertas. El protocolo del dispositivo define cómo se identifica el rastreador, cómo envía actualizaciones periódicas o por eventos y qué elementos de los mensajes Plaspy puede extraer para mapas, alertas e historial.

- Proporciona información de identificación y sesión para que Plaspy asocie los datos entrantes a un dispositivo Rex específico.
- Transmite posición GPS/GLONASS, eventos de movimiento, estado de batería y señal, y el estado del dispositivo que Plaspy usa para mapas y alertas.
- Soporta informes periódicos y mensajes basados en eventos para movimiento, geocercas o alertas de seguridad relevantes para perros de trabajo.
- Permite comandos remotos y configuración cuando el fabricante y el firmware del dispositivo habilitan control remoto o actualización de parámetros.
- Actúa de puente entre los sensores en el dispositivo (G-sensor, detección de ladridos, monitor de batería) y las funciones de telemetría e informes de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint compartido y determina automáticamente qué protocolo de rastreador soportado se está usando. Cuando Rex se configura para reportar al endpoint de Plaspy, la plataforma empareja los datos entrantes con la integración correcta sin requerir, en la mayoría de los casos, una selección manual del protocolo.

- El servidor público de ingestión de Plaspy es accesible en el dominio d.plaspy.com y en la IP 54.85.159.138.
- La plataforma escucha en el puerto 8888 para informes de dispositivos y usa ese mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden comunicarse por UDP o TCP apuntando al endpoint de Plaspy; Plaspy aceptará cualquiera de los dos transportes en el puerto compartido.
- En configuraciones típicas, usted apunta el dispositivo a d.plaspy.com (o a la IP) y al puerto 8888; Plaspy detecta y maneja el protocolo del rastreador automáticamente.
- Dado que la detección es automática, la mayoría de los clientes de Plaspy no necesitan seleccionar manualmente un protocolo en la plataforma cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

La elección de transporte y la conexión afectan la entrega de mensajes y el consumo de batería; los dispositivos Rex pueden soportar múltiples modos de transporte según firmware y configuración. Esta sección describe el contexto de conexión que importa al enviar datos Rex a Plaspy.

- El dispositivo Rex puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las condiciones de red.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza el mismo número de puerto (8888) para todos los rastreadores soportados para simplificar la configuración de dispositivos y el enrutamiento en la plataforma.
- Las condiciones de red, el comportamiento NAT del operador y las opciones de transporte celular (LTE‑M o GSM cuando el dispositivo las soporte) influyen en la fiabilidad y la latencia.
- Si firewalls locales o del operador bloquean tráfico saliente, asegúrese de que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Rex está listado como compatible con Plaspy, pero las funciones disponibles a través del protocolo pueden variar según la versión de firmware y la revisión de hardware.
- Las variaciones por parte del fabricante en disponibilidad de comandos o campos de telemetría pueden afectar lo que Plaspy recibe; confirme siempre qué funciones están habilitadas en su dispositivo y firmware.
- Algunas implementaciones de Rex pueden requerir configuración a nivel de dispositivo o ajustes de suscripción por parte del fabricante para permitir el reporte a plataformas de terceros.
- La selección del transporte (UDP frente a TCP) puede configurarse en el dispositivo y puede cambiar el comportamiento respecto a retransmisiones y latencia; elija el modo que mejor se adapte a su caso de uso y red.
- Valide la configuración del dispositivo para que reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888; un endpoint o puerto incorrecto es una causa común de falta de conectividad.
- Para despliegues críticos, pruebe el comportamiento del dispositivo en campo para confirmar que la telemetría y alertas esperadas llegan a Plaspy en condiciones reales.

## Por qué es importante entender el protocolo

Comprender de forma práctica cómo Rex se comunica con Plaspy ayuda a asegurar una configuración exitosa, un comportamiento predecible en campo y una resolución de problemas más rápida cuando surgen incidencias. Saber qué partes son manejadas por el dispositivo, la red y la plataforma reduce errores de configuración y mejora la fiabilidad.

- Acelera la configuración inicial al confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy.
- Ayuda a diagnosticar problemas de conectividad aislando transporte, red o configuración de endpoint.
- Aclara qué campos de telemetría esperar en Plaspy según el firmware del dispositivo y los sensores habilitados.
- Reduce sorpresas durante actualizaciones de firmware o revisiones de hardware al anticipar posibles cambios de comportamiento.
- Permite planear compensaciones entre duración de batería y frecuencia de reporte según transporte y cadencia de mensajes.

## Por qué usar Plaspy con este protocolo

Usar el MiniFinder Rex con Plaspy permite a manejadores y equipos integrar datos de rastreo específicos para animales dentro de un entorno más amplio de telemetría y operaciones. El diseño robusto de Rex, su larga autonomía y sus funciones orientadas a caza generan los datos de ubicación y eventos que Plaspy ingiere para mapeo en vivo, alertas por geocerca y reproducción histórica. Combinados, el dispositivo y la plataforma apoyan la consciencia situacional y la coordinación en trabajo de campo, operaciones de búsqueda y cacerías gestionadas por equipos.

Si desea saber más sobre cómo Plaspy procesa los datos entrantes de rastreadores y las capacidades de la plataforma, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la documentación de protocolo específica y la información de firmware más recientes con el fabricante en https://minifinder.se/.
