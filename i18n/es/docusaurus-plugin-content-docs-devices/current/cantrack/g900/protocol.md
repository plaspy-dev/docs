---
slug: /cantrack/g900/protocol
id: g900-protocol
sidebar_label: Protocol
title: CanTrack - G900 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del CanTrack G900 y cómo se comunica con Plaspy para un rastreo GPS confiable
keywords:
  - CanTrack G900
  - Protocolo CanTrack G900
  - Protocolo GPS G900
  - Protocolo CanTrack
  - Rastreo G900
  - Rastreador GPS G900
  - Compatibilidad Plaspy
  - Rastreo de vehículos G900
  - Comunicación G900
  - Gestión de flotas G900
---

# CanTrack - Protocolo G900

Esta página ofrece una visión pública del protocolo para usar el rastreador CanTrack G900 con la plataforma Plaspy. Describe el contexto de comunicación que permite al G900 reportar ubicación, alarmas y estado a Plaspy sin exponer detalles privados de implementación. El contenido está dirigido a administradores e integradores que necesitan comprender cómo se conecta y comporta el dispositivo a un nivel general.

El CanTrack G900 es compatible con Plaspy y admite rastreo en tiempo real, alarma por exceso de velocidad, alarma por corte de energía y una carcasa con grado de protección IP65. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión del firmware, la revisión de hardware y la implementación del fabricante; por eso los detalles específicos del dispositivo deben validarse ante las notas oficiales de firmware de CanTrack cuando sea necesario.

## Descripción general del protocolo

El protocolo de reporte del G900 regula cómo el rastreador envía telemetría y mensajes de eventos a un servidor remoto para que Plaspy pueda mostrar información de ubicación y estado. En términos generales, el protocolo permite que el dispositivo se identifique, transmita posiciones GPS y eventos de estado, y entregue alertas que la plataforma pueda interpretar y exponer a los usuarios.

- Identifica el dispositivo ante el servidor para que Plaspy asocie los mensajes con el activo y la cuenta correctos.
- Transmite ubicación GPS, marca de tiempo y estados básicos de sensores o alarmas para uso en rastreo y notificaciones.
- Envía notificaciones de eventos como exceso de velocidad y corte de energía para que la plataforma pueda activar reglas y avisos.
- Proporciona reportes periódicos o mensajes de latido (heartbeat) para monitorizar la presencia y conectividad del dispositivo.
- Permite configuración remota cuando el dispositivo y el firmware del fabricante soportan flujos de comandos desde el servidor.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador utilizado por cada dispositivo. Cuando un G900 está apuntado a Plaspy con los ajustes de conexión correctos, la plataforma reconocerá los mensajes del equipo sin requerir la selección manual de protocolo en la mayoría de los casos.

- Plaspy escucha en el dominio compartido d.plaspy.com y en la dirección pública 54.85.159.138 para los reportes de dispositivos.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto de red, lo que simplifica la configuración para instaladores y administradores de flota.
- Plaspy detectará el protocolo del rastreador automáticamente cuando el G900 esté configurado para reportar al endpoint de Plaspy.
- Generalmente usted no necesitará seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para enviar datos a la plataforma.
- Si un equipo utiliza un transporte no estándar o un comportamiento de firmware personalizado, verificar la configuración del dispositivo con la documentación del fabricante ayuda a resolver problemas de detección.

## Transporte y contexto de conexión

El G900 puede configurarse para usar transporte UDP o TCP según el firmware del dispositivo y la preferencia del instalador. Para la integración con Plaspy, ambos transportes son aceptados en el puerto de la plataforma, por lo que el equipo puede configurarse conforme a lo que soporte el rastreador y el entorno de red.

- Los dispositivos pueden apuntar a d.plaspy.com o a la dirección numérica 54.85.159.138.
- Plaspy acepta reportes de dispositivos en el puerto 8888 y ese mismo puerto se utiliza para todos los dispositivos compatibles en la plataforma.
- El G900 puede permitir seleccionar UDP o TCP como protocolo de transporte; elija el transporte que coincida con las capacidades del dispositivo y las necesidades de fiabilidad de la red.
- Firewalls de red y la configuración APN del operador deben permitir conexiones salientes al servidor de Plaspy en el puerto 8888 para que los reportes funcionen.
- Al probar conectividad, confirme que el dispositivo esté apuntando al endpoint de Plaspy y usando el tipo de transporte configurado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los mensajes y campos que el G900 envía; verifique la versión de firmware del G900 al solucionar compatibilidad del protocolo.
- Las revisiones de hardware y las funciones opcionales del rastreador pueden afectar qué telemetría o alarmas se reportan.
- Los comandos de configuración del fabricante y los valores por defecto de transporte pueden variar según la región o el firmware suministrado por el distribuidor.
- Elegir UDP o TCP puede influir en las características de entrega; UDP es más ligero mientras que TCP incorpora confirmación de entrega.
- Confirme siempre que el dispositivo esté configurado para reportar al host y puerto de Plaspy como parte de la puesta en marcha inicial.
- Consulte la documentación del fabricante para opciones específicas del dispositivo que influyan en los intervalos de reporte y la generación de eventos.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el G900 ayuda a garantizar un rastreo confiable, alertas precisas e integración fluida con Plaspy. Conocer el contexto de conexión y protocolo reduce el tiempo de configuración, agiliza la resolución de problemas y respalda la fiabilidad a largo plazo para la gestión de flotas y activos.

- Ayuda a validar la configuración del dispositivo para que la telemetría aparezca correctamente en los paneles de Plaspy.
- Reduce el tiempo de diagnóstico de problemas de conectividad relacionados con transporte o DNS frente a desajustes de protocolo.
- Permite decisiones informadas sobre intervalos de reporte, umbrales de evento y selección de transporte.
- Facilita a los administradores coordinar actualizaciones de firmware y cambios de configuración con resultados previsibles.
- Aumenta la confianza al integrar múltiples modelos de rastreadores en una única implementación de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G900 con Plaspy brinda a las organizaciones visibilidad centralizada de los movimientos de vehículos y activos, además de acceso a eventos de alarma y estado que apoyan flujos de trabajo de seguridad y vigilancia. La combinación de las características del hardware G900 y la detección automática de protocolos de Plaspy facilita poner los dispositivos en línea y comenzar a monitorear activos.

Plaspy simplifica la incorporación de dispositivos al usar el mismo puerto para todos los rastreadores soportados y al reconocer automáticamente el protocolo de reporte cuando el G900 está apuntado al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888. Para obtener más información sobre Plaspy y cómo soporta el rastreo de flotas y activos, visite https://www.plaspy.com. Para la documentación más reciente específica del dispositivo, notas de firmware y detalles de implementación, por favor verifique la información con el fabricante en https://www.cantrackgps.com/.
