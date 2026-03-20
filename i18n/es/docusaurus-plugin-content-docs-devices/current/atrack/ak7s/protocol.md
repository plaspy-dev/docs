---
slug: /atrack/ak7s/protocol
id: ak7s-protocol
sidebar_label: Protocol
title: ATrack - AK7S Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador ATrack AK7S con Plaspy, incluye ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo ATrack AK7S
  - Protocolo GPS AK7S
  - ATrack AK7S Plaspy
  - Comunicación del rastreador GPS AK7S
  - Protocolo de rastreo AK7S
  - Compatibilidad de protocolo ATrack
  - Integración del rastreador AK7S
  - Protocolo de dispositivo Plaspy
  - Rastreo de flotas AK7S
  - Conectividad AK7S 3G
---

# ATrack - Protocolo AK7S

Esta página ofrece contexto sobre el protocolo público para usar el dispositivo telemático ATrack AK7S con Plaspy. Resume cómo el rastreador comunica con el endpoint de Plaspy, qué comportamientos de reporte son esperables en términos generales y qué ajustes de conexión acepta Plaspy para dispositivos AK7S. El contenido se enfoca en detalles de comunicación de alto nivel y consideraciones de compatibilidad, no en aspectos internos de firmware.

El AK7S es un rastreador GPS con capacidad 3G que soporta posicionamiento GPS y GLONASS, comunicaciones en redes UMTS HSPA CDMA y interfaces locales como RS232 y 1-Wire. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que valide los detalles específicos del equipo con la documentación de ATrack cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del AK7S define cómo el dispositivo envía información de ubicación, estado y eventos a un servidor remoto para que una plataforma como Plaspy pueda mostrar y procesar los datos del vehículo. A nivel público, el protocolo proporciona identificación y telemetría para que Plaspy pueda asociar los mensajes entrantes a un dispositivo concreto y generar registros de ubicación y eventos utilizables.

- Permite que el AK7S informe posición, hora y señales de evento a un endpoint remoto para monitoreo y registro.
- Transporta información de identidad del dispositivo para que Plaspy empareje los mensajes con el registro correcto del rastreador.
- Transmite indicadores de estado y eventos que pueden mapearse a alertas y entradas del motor de reglas de Plaspy.
- Soporta operación sobre las redes celulares que el dispositivo tenga configuradas, con el transporte elegido en la configuración.
- Proporciona la telemetría cruda que Plaspy convierte en datos estándar de ubicación y estado para los flujos de trabajo de flotas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes de los dispositivos en un endpoint público compartido e identifica automáticamente el protocolo del dispositivo según las características de la conexión y del mensaje entrante. En la mayoría de los casos, cuando un AK7S está configurado para reportar a Plaspy, no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy escucha en un endpoint compartido en d.plaspy.com y en la IP pública 54.85.159.138 para recibir datos de dispositivos.
- La plataforma usa un puerto único para todos los dispositivos soportados, de modo que la configuración es consistente entre modelos de rastreadores.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar al endpoint de Plaspy.
- Cuando un dispositivo está correctamente configurado para reportar al servidor de Plaspy, por lo general usted no necesita especificar el protocolo en la plataforma.
- Si no se reciben mensajes, las comprobaciones básicas incluyen confirmar que el dispositivo está apuntando al endpoint de Plaspy y que usan los ajustes de transporte correctos.

## Contexto de transporte y conexión

El AK7S puede configurarse para usar UDP o TCP dependiendo del soporte del dispositivo y de los requisitos del despliegue. Plaspy acepta conexiones de dispositivos AK7S en el mismo puerto estándar que usa para todos los equipos en la plataforma.

- El dispositivo puede configurarse para enviar datos vía UDP al puerto 8888 hacia Plaspy.
- Alternativamente, el dispositivo puede configurarse para enviar datos vía TCP al puerto 8888 hacia Plaspy.
- El dominio del servidor público de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Seleccione el modo de transporte que coincida con el firmware del dispositivo y las condiciones de la red, y apunte el equipo al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes y los campos disponibles; siempre verifique el nivel de firmware del AK7S al solucionar problemas de compatibilidad.
- Las revisiones de hardware u opcionales accesorios pueden modificar las entradas disponibles o las señales de evento que el dispositivo puede reportar.
- La elección entre UDP y TCP afecta las características de entrega pero no cambia el propósito general del protocolo.
- Los menús de configuración del fabricante y los conjuntos de comandos pueden diferir entre versiones de firmware; consulte las guías de ATrack para comandos de configuración en el dispositivo.
- La detección automática de protocolo de Plaspy reduce la configuración manual, pero es necesario que el dispositivo tenga correctamente configurado el endpoint y el transporte.
- Valide integraciones avanzadas como periféricos RS232 o sensores 1-Wire contra la documentación de Plaspy y de ATrack.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AK7S ayuda a asegurar una incorporación confiable, un reporte de ubicación preciso y una resolución eficiente de problemas en operaciones de flota. Saber los ajustes de transporte esperados y el rol general de los mensajes reduce el tiempo de configuración y favorece la estabilidad a largo plazo.

- Asegura que el dispositivo apunte al endpoint y transporte correctos de Plaspy para que los mensajes lleguen a la plataforma.
- Facilita el mapeo de eventos del dispositivo y banderas de estado a alertas y acciones automatizadas en Plaspy.
- Ayuda a diagnosticar problemas de conectividad confirmando la selección de UDP o TCP y la configuración del endpoint.
- Apoya la planificación de actualizaciones de firmware y cambios de hardware que puedan afectar el comportamiento de reporte.
- Aumenta la confianza al integrar entradas del AK7S como acelerómetro o datos de sensores externos en los flujos de trabajo de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el AK7S con Plaspy ofrece a las organizaciones una vía clara para convertir la telemetría del dispositivo en información accionable para la gestión de flotas. Los ajustes de conexión compartidos de Plaspy y la detección automática de protocolo reducen los pasos administrativos necesarios para empezar a recibir reportes, mientras que la plataforma ofrece visibilidad, alertas y registros históricos de ubicación que ayudan a gestionar activos y operaciones.

Para saber más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos y firmware del dispositivo, confirme la información actual con el fabricante en https://www.atrack.com.tw/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
