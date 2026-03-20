---
slug: /jointech/jt701/protocol
id: jt701-protocol
sidebar_label: Protocol
title: Jointech - JT701 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador Jointech JT701 con Plaspy, con contexto de conexión y orientación de compatibilidad
keywords:
  - protocolo Jointech JT701
  - protocolo GPS Jointech JT701
  - compatibilidad JT701 Plaspy
  - protocolo de comunicación JT701
  - protocolo de rastreador Jointech
  - protocolo de seguimiento JT701
  - rastreador GPS Jointech Plaspy
  - seguimiento de activos JT701
  - guía de protocolo de rastreador GPS
  - rastreo vehicular JT701
---

# Jointech - Protocolo JT701

Esta página resume el contexto público del protocolo para usar el cerradero inteligente de rastreo Jointech JT701 con la plataforma Plaspy. Se enfoca en cómo el dispositivo reporta ubicación, estado y eventos de seguridad a Plaspy a nivel de conexión, de modo que integradores y gestores de flota comprendan el flujo de datos hacia la plataforma sin entrar en detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía telemetría al endpoint de Plaspy. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del equipo y la documentación del fabricante siguen siendo relevantes para casos particulares y funciones específicas de firmware.

## Descripción general del protocolo

El protocolo de reporte del JT701 es el mecanismo que el dispositivo usa para identificarse ante Plaspy y transmitir GPS, estado y telemetría de eventos a través del enlace celular. A grandes rasgos, el protocolo permite que el rastreador entregue posiciones y eventos relacionados con la seguridad que Plaspy consume para seguimiento en vivo, alertas e historial.

- Permite que el JT701 envíe coordenadas GPS, eventos con sello temporal y estado del dispositivo a Plaspy para visualización e informes.
- Transmite alertas de manipulación y desbloqueo no autorizado, además de registros de acceso que se mapean en alertas e historiales en Plaspy.
- Proporciona identidad y estado de salud del equipo para que Plaspy pueda asociar los datos entrantes con el registro de activo correcto.
- Habilita reportes periódicos y basados en eventos, de modo que Plaspy reciba tanto telemetría rutinaria como alarmas inmediatas.
- Opera sobre transporte IP estándar para alcanzar el endpoint de ingestión de Plaspy y quedar disponible para procesamiento automatizado.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo de rastreador cuando llega la telemetría. En la mayoría de las implementaciones del JT701, el integrador no necesita seleccionar un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un puerto estandarizado único para todos los dispositivos soportados, lo que simplifica la configuración y el onboarding.
- Cuando un JT701 reporta al endpoint de Plaspy, la plataforma inspecciona los identificadores disponibles y los patrones de mensajes para emparejarlos con la rutina de manejo adecuada.
- Normalmente los usuarios configuran el JT701 para reportar a d.plaspy.com o a la dirección de servidor Plaspy equivalente y no necesitan especificar manualmente un protocolo en la plataforma.
- La detección automática reduce la fricción de configuración y ayuda a que los nuevos dispositivos aparezcan en Plaspy sin pasos adicionales de selección de protocolo.
- Si un dispositivo presenta un comportamiento de firmware no estándar, validar los ajustes según la documentación del fabricante puede resolver problemas de detección.

## Transporte y contexto de conexión

El JT701 se comunica mediante la red celular y puede configurarse para usar transporte UDP o TCP para enviar telemetría a Plaspy, según el soporte del dispositivo y las opciones de configuración. Para la conectividad, los dispositivos deben apuntar al servidor y puerto de Plaspy que se usan para la ingestión de dispositivos.

- El dominio público de servidor de Plaspy para reporte de dispositivos es d.plaspy.com para configuración basada en DNS.
- La IP pública de Plaspy es 54.85.159.138 y puede usarse en entornos donde se requiera una IP directa.
- El puerto de ingestión de Plaspy utilizado por todos los dispositivos es 8888 y es el mismo en toda la plataforma para simplificar el aprovisionamiento.
- El JT701 puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo de su firmware y método de aprovisionamiento.
- Use el método de transporte soportado por el dispositivo y permitido por el operador de la red móvil para asegurar un enlace ascendente confiable.

## Notas sobre compatibilidad

- Las versiones de firmware pueden introducir diferencias en el tiempo de envío de mensajes, en los campos incluidos o en tipos de eventos opcionales que afectan cómo un JT701 se comunica con Plaspy.
- Las revisiones de hardware o variantes regionales pueden modificar los modos de transporte soportados o los conjuntos de funciones que influyen en la compatibilidad.
- Parámetros de configuración del fabricante, como APN, intervalos de reporte y umbrales de alarma, afectarán la telemetría que Plaspy recibe.
- La elección entre UDP y TCP modifica las características de entrega y debe coincidir con las capacidades del firmware del JT701 y las condiciones de la red del operador.
- La detección automática de Plaspy cubre los modos de reporte típicos del JT701, pero se recomienda verificar la configuración del equipo al incorporarlo.
- Confirme el comportamiento de eventos relacionados con la seguridad, como manipulación y registro de desbloqueo, consultando las notas vigentes del fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del JT701 ayuda a los equipos a configurar los dispositivos correctamente, diagnosticar brechas de conectividad o de reporte y garantizar la seguridad y la confiabilidad de la telemetría de la flota dentro de Plaspy. Tener expectativas claras sobre lo que el dispositivo reportará y cómo se conecta reduce el tiempo de incorporación y la carga de soporte.

- Configuración más rápida al alinear desde el inicio los parámetros de reporte del JT701 con los ajustes de conexión de Plaspy.
- Resolución de problemas más efectiva cuando la conectividad o la ausencia de eventos se rastrean hasta incompatibilidades de transporte o de configuración.
- Mejor afinación de alertas al saber qué eventos reporta el dispositivo de forma nativa y cuáles requieren configuración de firmware.
- Planificación de mantenimiento más precisa en función del comportamiento de reporte de salud del dispositivo y nivel de batería que expone el protocolo.
- Mayor confianza operativa cuando eventos de seguridad como alertas por manipulación y registros de acceso llegan de forma consistente.

## Por qué usar Plaspy con este protocolo

Combinar el JT701 con Plaspy ofrece a las organizaciones una forma ágil de integrar telemetría de control de acceso seguro junto con reporte de ubicación y eventos. Plaspy ingiere el flujo de datos del JT701 y lo presenta en tiempo real para mapeo, flujos de trabajo de alertas e historial apto para auditoría, de modo que los equipos operativos puedan monitorear la custodia, detectar accesos no autorizados y responder con rapidez.

Plaspy usa un modelo de puerto único y endpoint compartido para simplificar el aprovisionamiento de dispositivos mientras detecta automáticamente el protocolo del rastreador una vez que el JT701 reporta a la plataforma. Para conocer más sobre Plaspy y las capacidades generales de la plataforma visite https://www.plaspy.com. Para obtener los detalles de protocolo y firmware más actuales y específicos del dispositivo, verifique la información con el fabricante en https://www.jointcontrols.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
