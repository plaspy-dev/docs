---
slug: /queclink/gv501lg/protocol
id: gv501lg-protocol
sidebar_label: Protocol
title: QuecLink - GV501LG Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del QuecLink GV501LG para integración con Plaspy con ajustes de conexión y guía de compatibilidad
keywords:
  - protocolo QuecLink GV501LG
  - protocolo GPS QuecLink GV501LG
  - QuecLink GV501LG Plaspy
  - protocolo GV501LG
  - rastreador GPS GV501LG
  - compatibilidad protocolo QuecLink
  - protocolo OBDII GPS
  - protocolo telemática vehicular
  - protocolo rastreo de flotas
  - protocolo de dispositivo Plaspy
---

# QuecLink - Protocolo GV501LG

Esta página describe el contexto público del protocolo para usar el rastreador OBD‑II QuecLink GV501LG con Plaspy. Explica de forma clara cómo se comunica el equipo, qué parámetros de conexión espera Plaspy y qué comportamientos de reporte del dispositivo son relevantes al integrar el GV501LG en flotas y sistemas de telemática. La guía está pensada para información pública útil en la configuración y resolución de problemas con Plaspy.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando la unidad está configurada para reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware, variantes regionales y la implementación del fabricante; por eso los detalles a continuación describen el contexto de conexión e integración más que formatos internos de paquetes propietarios.

## Visión general del protocolo

El protocolo del GV501LG regula cómo el rastreador entrega posiciones GNSS, lecturas del bus del vehículo, eventos de sensores e información diagnóstica a un punto final en la nube como Plaspy. A grandes rasgos, el protocolo permite que el dispositivo se identifique, transmita telemetría oportuna y notifique eventos relevantes para operaciones de flota y seguridad.

- Transporta actualizaciones de ubicación y datos de fix GNSS que Plaspy utiliza para seguimiento en tiempo real y el historial de rutas.
- Envía lecturas OBD y CAN como VIN, odómetro y códigos de diagnóstico para que Plaspy ingiera información de mantenimiento y estado del vehículo.
- Informa notificaciones de eventos como detección de choque, conducción brusca y alarmas de remolque que disparan alertas y flujos de trabajo en Plaspy.
- Permite reportes periódicos y mensajes programados para geocercas, monitoreo de combustible y métricas de comportamiento de conducción.
- Complementa la telemática con el estado de radio de corto alcance y hotspots para que Plaspy refleje la disponibilidad de BLE y Wi‑Fi en el estado del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint compartido y utiliza el contexto de la conexión para identificar automáticamente el protocolo del dispositivo. Cuando un GV501LG apunta al endpoint de Plaspy y está configurado para reportar, la plataforma detectará el protocolo del rastreador sin que el usuario tenga que seleccionar manualmente el protocolo en la mayoría de los despliegues comunes.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 para configuraciones donde se prefiera una dirección IP directa.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para la ingestión de telemetría.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y las redes del operador.
- Si el GV501LG está correctamente apuntado al endpoint de Plaspy, la plataforma detecta el protocolo del rastreador e inicia la ingestión de telemetría utilizable.
- Normalmente los usuarios no necesitan elegir un protocolo dentro de Plaspy cuando el dispositivo reporta a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Transporte y contexto de conexión

El transporte de conexión y la dirección del servidor son clave para garantizar que el GV501LG alcance Plaspy. El rastreador soporta transportes telemáticos comunes y puede dirigirse al endpoint compartido de Plaspy usando tanto el nombre de dominio como la IP. La selección correcta del transporte y la accesibilidad de la red son fundamentales para una integración estable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware regional y el comportamiento del operador.
- El equipo puede apuntar al endpoint de Plaspy por nombre en d.plaspy.com o por la dirección IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de cortafuegos y redes.
- Al elegir TCP frente a UDP, tenga en cuenta la fiabilidad de la red y las particularidades del operador; seleccione el transporte que soporte el firmware del dispositivo y su flujo de aprovisionamiento.
- Asegúrese de que el APN y los detalles del operador permitan conexiones salientes al endpoint de Plaspy y que cualquier firewall a bordo del vehículo permita el transporte requerido al puerto 8888.

## Notas de compatibilidad del protocolo

- El comportamiento del GV501LG puede variar entre versiones de firmware y variantes de hardware regionales; la periodicidad de mensajes y los campos opcionales pueden cambiar.
- Las opciones de transporte como TCP, UDP o fallback por SMS dependen del firmware del dispositivo y de las elecciones de aprovisionamiento; confirme qué transportes están habilitados antes del despliegue.
- Los menús de configuración del fabricante o las herramientas de aprovisionamiento pueden usar convenciones de nombres distintas para dirección del servidor y transporte; verifique que la entrada final del servidor coincida con d.plaspy.com o la IP 54.85.159.138 y el puerto 8888.
- Algunas integraciones requieren habilitar lecturas específicas de PID CAN en el dispositivo para exponer VIN, odómetro o códigos DTC; el firmware y el soporte del bus del vehículo determinan los campos disponibles.
- Valide la compatibilidad contra la documentación oficial del fabricante y las notas de la versión para confirmar el soporte del variante GV501LG que planea desplegar.
- Pruebe una muestra pequeña de dispositivos en su red antes de un despliegue masivo para detectar comportamientos específicos de firmware o del operador que afecten el flujo de telemetría.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GV501LG con Plaspy ayuda a asegurar una configuración fiable, una resolución de problemas efectiva y un comportamiento predecible a largo plazo para programas de flota y seguridad. Conocer el rol del protocolo reduce la ambigüedad en la integración y mejora la respuesta ante problemas de conectividad o discrepancias en los datos.

- Ayuda a verificar que los dispositivos apuntan al endpoint correcto de Plaspy y usan el transporte soportado.
- Permite una resolución de problemas más rápida cuando faltan o se retrasan actualizaciones de ubicación, lecturas CAN o notificaciones de eventos.
- Informa decisiones sobre actualizaciones de firmware, selección de dispositivos regionales y plantillas de aprovisionamiento para un reporte consistente.
- Facilita la configuración de políticas de red y reglas de cortafuegos para permitir tráfico saliente a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Aumenta la confianza operativa al mapear campos de telemetría del vehículo a los reportes y reglas de alerta en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GV501LG con Plaspy ofrece a las organizaciones una opción telemática práctica y lista para usar que combina posicionamiento GNSS preciso, datos a nivel OBD y reporte de eventos de seguridad en un flujo de trabajo en la nube. Para flotas, programas de seguros y organizaciones de mantenimiento, el GV501LG provee la telemetría y diagnóstico que Plaspy ingiere para generar alertas, reportes e información operativa.

Si desea conocer más sobre Plaspy y cómo la plataforma ingiere la telemetría de los dispositivos, visite https://www.plaspy.com. Verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la guía del fabricante en el sitio de QuecLink en https://www.queclink.com/ ya que el soporte del protocolo y los detalles de implementación pueden cambiar con el tiempo y variar según el firmware y el modelo regional.
