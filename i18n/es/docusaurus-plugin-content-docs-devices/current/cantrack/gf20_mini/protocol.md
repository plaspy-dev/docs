---
slug: /cantrack/gf20_mini/protocol
id: gf20_mini-protocol
sidebar_label: Protocol
title: CanTrack - GF20-Mini Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del CanTrack GF20 Mini y cómo se comunica con Plaspy para seguimiento fiable de activos y alertas
keywords:
  - Protocolo CanTrack GF20 Mini
  - Protocolo GPS CanTrack GF20 Mini
  - Protocolo de rastreo GF20 Mini
  - Compatibilidad GF20 Mini Plaspy
  - Resumen protocolo GPS CanTrack
  - Protocolo de comunicación GF20 Mini
  - Integración de dispositivo Plaspy
  - Guía de protocolo para rastreadores de activos
  - Rastreador vehicular GF20 Mini
  - Protocolo rastreador GPS magnético
---

# CanTrack - Protocolo GF20-Mini

Esta página ofrece un resumen público del protocolo para usar el CanTrack GF20‑Mini con la plataforma Plaspy. Se centra en el contexto general de comunicación, cómo el dispositivo informa ubicación y eventos, y qué esperar al integrar el GF20‑Mini en un flujo de trabajo de monitoreo de flotas o activos con Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo, los comandos disponibles y la temporización de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página ofrece contexto práctico y no sensible, y recomienda verificar con la documentación del fabricante.

## Resumen del protocolo

El protocolo del rastreador define cómo el GF20‑Mini transmite información de ubicación, estado y eventos a un servidor remoto como Plaspy. Para los usuarios de Plaspy, los aspectos más relevantes son cómo se identifica el equipo, cómo se informan posiciones y alertas, y cómo opera el dispositivo cuando la conectividad celular es intermitente.

- Permite reportes periódicos y por eventos desde el GF20‑Mini hacia un endpoint remoto para monitorización en tiempo real.
- Incluye mensajes de estado como nivel de batería, alarma por vibración, disparadores de geocerca y sincronización de posiciones almacenadas tras cortes de red.
- Facilita que Plaspy reciba telemetría útil sin que usted deba manejar formatos de paquete de bajo nivel o ajustes de parseo.
- Soporta almacenamiento de respaldo de posiciones en el dispositivo para preservar datos históricos durante fallos GSM y enviarlos cuando se restablece la conexión.
- Permite canales opcionales como SMS o reportes a la plataforma que pueden usarse junto con el reporte a servidor para alertas y configuración remota.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint y puerto compartidos, y determina automáticamente el protocolo del rastreador basándose en el patrón de datos entrante. En la mayoría de los casos, un GF20‑Mini configurado para reportar a Plaspy será detectado y procesado sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy acepta reportes de dispositivos en el dominio público d.plaspy.com y en la dirección IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el alta de equipos.
- La detección automática del protocolo por parte de Plaspy suele evitar que usted tenga que escoger un protocolo manualmente en la plataforma.
- La configuración correcta del dispositivo para apuntar sus reportes al endpoint de Plaspy es el requisito típico para habilitar la detección automática.
- Si un dispositivo no aparece, revisar la dirección de red, la selección de transporte y los ajustes de reporte del firmware es el primer paso recomendado.

## Transporte y contexto de conexión

El GF20‑Mini puede reportar a un endpoint remoto usando protocolos de transporte comunes según el soporte y la configuración del dispositivo. Al configurar el GF20‑Mini para Plaspy, apunte el equipo al endpoint de Plaspy y utilice el transporte compatible con el firmware del dispositivo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración elegida.
- Plaspy escucha conexiones de dispositivos en el puerto 8888 y el mismo puerto se reutiliza para todos los dispositivos soportados.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 cuando DNS no esté disponible.
- Use el modo de transporte (UDP o TCP) que el firmware del GF20‑Mini soporte y que sea coherente con su entorno de red.
- Asegúrese de que la salida de datos celulares esté permitida para el transporte elegido y que la APN o los ajustes de la SIM sean correctos para una entrega fiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar formatos de reporte, frecuencia de mensajes y funciones disponibles; verifique la versión de firmware al solucionar problemas.
- Revisiones de hardware o modelos variantes pueden modificar las entradas disponibles o funciones opcionales como audio remoto o soporte de sensores adicionales.
- Algunos flujos de instalación dependen de configuración por SMS o reportes a la plataforma; confirme qué canales de configuración soporta la unidad GF20‑Mini específica.
- La elección del transporte influye en confiabilidad y latencia; UDP puede ser más liviano mientras que TCP ofrece entrega asegurada para ciertos eventos.
- Ajustes del fabricante o firmware específico por región pueden generar diferencias de comportamiento; valide con la documentación oficial para despliegues en sitio.
- Siempre confirme el comportamiento del dispositivo durante una prueba de staging antes de un despliegue masivo en Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a administradores e integradores a configurar correctamente los dispositivos, diagnosticar problemas y asegurar un flujo de datos coherente hacia Plaspy para uso operacional. Incluso sin entrar en detalles de bajo nivel, un conocimiento práctico de los modos de reporte, transporte y variaciones de firmware agiliza la incorporación y reduce riesgos.

- Ayuda a confirmar que el GF20‑Mini está apuntando al endpoint y modo de transporte correctos para que los datos aparezcan en la plataforma.
- Facilita la resolución de problemas de conectividad como reportes faltantes, eventos retrasados o telemetría incompleta tras cortes GSM.
- Orienta sobre decisiones de intervalos de reporte y gestión de energía para equilibrar la duración de la batería y la puntualidad del rastreo.
- Aclara las expectativas respecto a qué eventos y tipos de telemetría el dispositivo reenviará a Plaspy.
- Apoya la planificación de despliegues escalonados cuando existen variaciones de firmware o hardware en la flota.

## Por qué usar Plaspy con este protocolo

Usar el GF20‑Mini con Plaspy ofrece una vía práctica para consolidar ubicación, alertas de geocerca y notificaciones de eventos para monitoreo de activos y vehículos. El factor de forma del GF20‑Mini y sus funciones a bordo, como montaje magnético, alarmas por vibración y memoria interna, lo hacen adecuado para despliegues discretos donde se requiere visibilidad centralizada.

Plaspy simplifica la incorporación de dispositivos al exponer un único endpoint y puerto para todos los rastreadores soportados y al detectar automáticamente el protocolo entrante. Para más información sobre Plaspy y cómo centralizar los reportes y eventos del GF20‑Mini visite https://www.plaspy.com. Para detalles más actuales sobre protocolo y firmware del dispositivo, verifique la información del fabricante en https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
