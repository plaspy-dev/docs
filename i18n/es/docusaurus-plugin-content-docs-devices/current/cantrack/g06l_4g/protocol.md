---
slug: /cantrack/g06l_4g/protocol
id: g06l_4g-protocol
sidebar_label: Protocol
title: CanTrack - G06L-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CanTrack G06L 4G y cómo se comunica con Plaspy para gestión de flotas
keywords:
  - Protocolo CanTrack G06L 4G
  - Protocolo GPS CanTrack G06L-4G
  - Protocolo de comunicación G06L 4G
  - Protocolo de rastreo G06L
  - Compatibilidad CanTrack Plaspy
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreador GPS vehicular
  - Protocolo de rastreador LTE
  - Protocolo de seguimiento de flotas
  - Compatibilidad telemetría G06L
---

# CanTrack - Protocolo G06L-4G

Esta página ofrece una visión pública y de alto nivel del contexto del protocolo de comunicación para usar el rastreador CanTrack G06L 4G con Plaspy. Explica cómo el dispositivo informa ubicaciones y eventos a la plataforma Plaspy, y qué aspectos del protocolo del rastreador son más relevantes al configurar dispositivos para un reporte fiable. El G06L es un rastreador vehicular LTE Cat 1 con respaldo GSM, GNSS de alta sensibilidad, almacenamiento local, batería de respaldo y múltiples entradas de eventos, lo que lo hace adecuado para despliegues integrados con Plaspy.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, revisión de hardware e implementación del fabricante; por eso esta página se centra en el contexto público no sensible del protocolo y en notas prácticas de compatibilidad en lugar de entrar en detalles internos del dispositivo.

## Resumen del protocolo

El protocolo del rastreador regula cómo el G06L empaqueta y envía datos de posición, eventos y telemetría desde el dispositivo hacia un servidor remoto como Plaspy. En la práctica, el protocolo permite la identificación del dispositivo, los intervalos de reporte, las notificaciones de eventos y la transferencia de datos almacenados cuando se recupera la conectividad.

- Define cómo el rastreador reporta posiciones GNSS, eventos con marca de tiempo y telemetría básica a un servidor remoto.
- Transporta notificaciones de eventos como estado de encendido, alarmas por movimiento, disparos de SOS y alertas por corte de energía hacia el backend.
- Permite la transferencia de registros almacenados localmente cuando se restaura la conectividad, de modo que las rutas e incidentes históricos queden completos.
- Admite múltiples opciones de transporte y distintos intervalos de reporte para equilibrar la puntualidad y el uso de datos.
- Funciona en conjunto con mecanismos de configuración del dispositivo como actualizaciones OTA y configuración local por USB para gestionar el comportamiento en campo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint compartido y detecta automáticamente el protocolo de los rastreadores compatibles. Para la mayoría de los usuarios, esto significa que si el G06L está configurado para reportar al endpoint de Plaspy, no es necesaria la selección manual del protocolo dentro de Plaspy.

- Plaspy acepta conexiones de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos y las reglas de firewall.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Cuando un dispositivo correctamente configurado se conecta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo de rastreador que utiliza ese dispositivo.
- Generalmente, los usuarios solo deben asegurarse de que el dispositivo reporte al endpoint correcto de Plaspy y use el transporte y puerto compatibles.

## Transporte y contexto de conexión

El G06L admite conectividad de datos celulares y puede configurarse para usar UDP o TCP para enviar reportes a un servidor backend. Para despliegues con Plaspy, los ajustes clave de transporte y dirección están estandarizados para que los dispositivos puedan apuntarse al endpoint correcto sin variar el puerto por unidad.

- Los dispositivos pueden apuntarse a d.plaspy.com o directamente a 54.85.159.138 según la configuración de red o la preferencia DNS.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes de seguimiento y eventos.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que reduce la complejidad en despliegues grandes.
- La selección del transporte puede afectar características de entrega como reintentos y latencia, según las condiciones de la red.
- Verifique que el APN del operador y la configuración de la SIM en el dispositivo sean correctos para que el rastreador pueda establecer el transporte elegido sobre la red celular.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden introducir variaciones del protocolo, campos adicionales o nuevos tipos de eventos; siempre anote la versión de firmware al validar el comportamiento.
- Las revisiones de hardware o los conjuntos de características opcionales pueden cambiar las entradas y alarmas disponibles que el dispositivo reporta a Plaspy.
- La selección del modo de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo para una entrega fiable a Plaspy en el puerto 8888.
- Las opciones de configuración locales, como los intervalos de reporte, el comportamiento del almacenamiento en búfer y los umbrales de alarma, afectan la frecuencia y cantidad de datos que el dispositivo envía.
- Las actualizaciones OTA de firmware y la configuración por USB son vías comunes para ajustar el comportamiento del protocolo; confirme qué métodos están habilitados en sus unidades.
- Valide la compatibilidad y la disponibilidad de funciones frente a la documentación del fabricante para la combinación específica de hardware y firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación que utiliza el G06L ayuda a asegurar una instalación exitosa, una recolección de datos precisa y una resolución de problemas eficiente al integrar con Plaspy. Saber qué se espera que reporte el dispositivo y cómo se conecta reduce errores de configuración y mejora la fiabilidad operativa.

- Ayuda a confirmar que los dispositivos están apuntando al endpoint correcto de Plaspy y usando UDP o TCP en el puerto 8888.
- Facilita la resolución de problemas cuando los reportes no aparecen en Plaspy, al acotar las causas a transporte, SIM, APN o diferencias de firmware.
- Orienta la configuración de intervalos de reporte y tamaños de búfer para equilibrar la puntualidad y los costos de datos en despliegues de flota.
- Permite una mejor interpretación de tipos de eventos como encendido, SOS y alertas por corte de energía tal como los entrega el dispositivo.
- Apoya la planificación de flujos de gestión remota, como actualizaciones OTA o cambios de configuración masiva.

## Por qué usar Plaspy con este protocolo

Utilizar el CanTrack G06L-4G con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real de vehículos, notificaciones basadas en eventos y reconstrucción histórica de rutas para la gestión de flotas y activos. La combinación de conectividad LTE con respaldo GSM, almacenamiento local y alertas con batería de respaldo ayuda a mantener la continuidad del reporte para que Plaspy pueda presentar ubicaciones y alarmas precisas a despachadores y operadores de flota.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos como el CanTrack G06L-4G, visite https://www.plaspy.com. Por favor, verifique los últimos detalles específicos del protocolo, el comportamiento del firmware y las notas de implementación del fabricante directamente con CanTrack en https://www.cantrackgps.com/ ya que el soporte de protocolo y las funciones del firmware pueden cambiar con el tiempo.
