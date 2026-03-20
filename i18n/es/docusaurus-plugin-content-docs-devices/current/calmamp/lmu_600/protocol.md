---
slug: /calmamp/lmu_600/protocol
id: lmu_600-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-600 Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo del rastreador CalmAmp LMU-600 y su comunicación con Plaspy para seguimiento vehicular fiable
keywords:
  - protocolo CalmAmp LMU 600
  - protocolo GPS CalmAmp LMU 600
  - comunicación CalmAmp LMU 600
  - rastreo CalmAmp LMU 600
  - CalmAmp LMU 600 Plaspy
  - protocolo rastreador de vehículo CalmAmp
  - integración LMU 600
  - telemetría LMU 600
  - compatibilidad CalAmp PEG PULS
  - protocolo de rastreo vehicular Plaspy
---

# CalmAmp - LMU-600: Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador CalmAmp LMU-600 con Plaspy. Explica, en términos generales, cómo se comunica el LMU-600, qué opciones de transporte son las más habituales y cómo Plaspy gestiona ese tráfico en despliegues típicos de seguimiento vehicular. El objetivo es ayudar a integradores y administradores a comprender el papel del protocolo de reporte sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y los tipos de mensajes disponibles pueden variar según la versión de firmware del LMU-600, la revisión de hardware y la configuración del fabricante. La familia LMU-600 soporta mensajería mejorada por SMS y sobre IP, y puede administrarse por aire con características CalAmp PULS y PEG, lo cual puede afectar el formato de los mensajes o los momentos en que se envían.

## Resumen del protocolo

El protocolo del dispositivo LMU-600 define cómo el rastreador informa posición, estados de E/S, alertas e información diagnóstica a un servidor remoto para que plataformas de flota como Plaspy puedan presentar telemetría útil. A alto nivel, las responsabilidades del protocolo son entregar de manera confiable la identidad del dispositivo, marcas de tiempo, ubicación y datos de eventos en un formato que el servidor pueda interpretar y mostrar.

- Permite que el dispositivo se identifique y envíe actualizaciones de ubicación y notificaciones de eventos a un receptor backend.
- Transporta telemetría de posición GPS, estados de entradas y salidas, y estado del dispositivo como el nivel de batería de respaldo.
- Soporta reportes impulsados por eventos mediante reglas en el dispositivo, como alertas programables PEG.
- Permite que el equipo reciba configuración por aire y actualizaciones de firmware vía sistemas CalAmp como PULS cuando están disponibles.
- Ofrece una capa de reporte independiente del transporte para que los mensajes puedan enviarse por IP o por canales alternativos como SMS cuando se soporte.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones y mensajes entrantes en un endpoint común y determina automáticamente qué protocolo de rastreador se está utilizando. Cuando un LMU-600 está configurado para reportar a Plaspy, la plataforma detecta y procesa los datos del dispositivo, por lo que normalmente no es necesario seleccionar manualmente el protocolo dentro de Plaspy si el equipo está bien configurado.

- Plaspy acepta reportes de dispositivos en el endpoint compartido d.plaspy.com (y la IP de servidor correspondiente 54.85.159.138).
- Todos los dispositivos de Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los mensajes llegan al endpoint compartido.
- En la mayoría de los casos no es necesario elegir un protocolo de forma manual dentro de Plaspy si el dispositivo apunta correctamente a Plaspy.
- La identificación adecuada del dispositivo y la entrega exitosa dependen de configuraciones correctas de reporte y selección de transporte en el equipo.

## Transporte y contexto de conexión

La elección de conexión determina cómo un LMU-600 envía datos a Plaspy. El LMU-600 admite varias opciones de transporte y puede configurarse para usar mensajería basada en IP a través de la red celular. Entender los transportes y endpoints permitidos ayuda a garantizar que el dispositivo alcance a Plaspy de forma fiable.

- El LMU-600 puede configurarse para usar UDP o TCP en el puerto 8888, según lo permita el dispositivo y la configuración elegida.
- Los equipos pueden apuntar al nombre de host d.plaspy.com o directamente a la IP de servidor 54.85.159.138 cuando sea necesario.
- Plaspy escucha en el puerto 8888 para los reportes de rastreadores; ese mismo puerto se usa en todos los dispositivos soportados por Plaspy.
- La selección de transporte (UDP vs TCP) afecta las características de entrega de mensajes, pero no impide que Plaspy detecte el protocolo entrante.
- La configuración de la red y del APN en el dispositivo debe permitir conexiones salientes al endpoint de Plaspy para un reporte confiable.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del LMU-600 pueden cambiar la cadencia de mensajes, los campos disponibles y las funcionalidades soportadas; confirme siempre la versión de firmware para chequear compatibilidad.
- Revisiones de hardware o la configuración de fábrica pueden alterar qué transportes están disponibles o cómo se comportan las reglas PEG en una unidad específica.
- Funcionalidades CalAmp como PEG y PULS influyen en el comportamiento de reporte y pueden requerir coordinación al integrar con una plataforma backend.
- La selección de UDP o TCP en el equipo puede estar limitada por el operador o la red local; elija el transporte que se ajuste a sus necesidades de confiabilidad y latencia.
- Apuntar el dispositivo a d.plaspy.com o a la IP explícita 54.85.159.138 son opciones válidas; use DNS cuando esté disponible y IP estática cuando un despliegue lo requiera.
- Valide la compatibilidad contra la documentación actual del fabricante y cualquier nota específica del despliegue antes de implementar a gran escala.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del LMU-600 mejora la configuración inicial, la resolución de problemas y la confiabilidad a largo plazo cuando el dispositivo se usa con Plaspy. Aunque Plaspy se encarga de la detección y el parseo, saber cómo el equipo envía datos ayuda a identificar más rápido problemas de configuración o de red.

- Ayuda a garantizar que los ajustes de reporte del equipo apunten al endpoint y puerto correctos de Plaspy.
- Facilita la interpretación del comportamiento del dispositivo cuando faltan o se retrasan eventos o telemetría.
- Permite tomar decisiones informadas sobre el uso de UDP o TCP según las restricciones del despliegue.
- Colabora en la coordinación del comportamiento de las reglas PEG y las actualizaciones impulsadas por PULS con las expectativas de la plataforma.
- Reduce el tiempo invertido en problemas comunes de integración durante la instalación y la ampliación de la flota.

## Ventajas de usar Plaspy con este protocolo

Usar el CalmAmp LMU-600 con Plaspy ofrece una vía directa para obtener visibilidad de vehículos, monitoreo de eventos y reportes operativos. El diseño compacto del LMU-600, sus antenas internas y su flexibilidad de E/S lo hacen apto para muchos casos de uso automotrices, mientras que el endpoint compartido y la detección automática de protocolo de Plaspy simplifican la integración para flotas y proveedores de servicio.

Si desea conocer más sobre cómo Plaspy soporta la conectividad de dispositivos y la gestión de flotas, visite https://www.plaspy.com. Para obtener detalles de protocolo específicos del dispositivo, cambios de firmware y orientación del fabricante consulte la documentación de CalAmp en http://www.calamp.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden evolucionar con el tiempo.
