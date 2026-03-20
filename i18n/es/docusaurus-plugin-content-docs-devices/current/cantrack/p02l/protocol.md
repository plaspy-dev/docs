---
slug: /cantrack/p02l/protocol
id: p02l-protocol
sidebar_label: Protocol
title: CanTrack - P02L Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar CanTrack P02L con Plaspy, configuración de servidor y guía de compatibilidad
keywords:
  - protocolo CanTrack P02L
  - protocolo GPS CanTrack P02L
  - protocolo de comunicación CanTrack P02L
  - protocolo de rastreo CanTrack P02L
  - compatibilidad CanTrack P02L Plaspy
  - protocolo rastreador GPS CanTrack
  - integración P02L Plaspy
  - guía protocolo P02L
  - rastreador intercomunicador CanTrack P02L
  - documentación protocolo P02L
---

# CanTrack - Protocolo P02L

Esta página ofrece contexto público del protocolo para usar el rastreador CanTrack P02L Smart Walkie‑Talkie con Plaspy. Resume cómo el dispositivo reporta ubicación, estado y eventos de alarma a Plaspy y explica el papel práctico del protocolo de comunicación sin exponer detalles internos del dispositivo. El P02L combina conectividad LTE, posicionamiento multi‑constelación, funciones SOS y detección de caídas, intercomunicación de voz y gestión OTA; estas funciones se envían como telemetría y eventos a la plataforma Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste comienza a reportar a la plataforma. Plaspy escucha en un único endpoint común — d.plaspy.com (54.85.159.138) — usando el puerto 8888, y los dispositivos pueden configurarse para usar UDP o TCP en ese puerto. El comportamiento exacto del protocolo y los campos reportados pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe consultarse la documentación y notas de firmware específicas del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del P02L define cómo el rastreador se identifica, transmite posiciones, envía alarmas como SOS o detección de caídas y reporta telemetría como batería y datos de movimiento a un servidor remoto. En despliegues con Plaspy, el protocolo permite que el P02L entregue datos significativos y accionables para monitoreo y alertas, mientras la plataforma se encarga del análisis y la presentación.

- Permite la identificación del dispositivo y la continuidad de sesión para que Plaspy asocie los datos entrantes con la unidad correcta.
- Transporta las posiciones y la información sobre la fuente de localización para generar mapas y recorridos históricos.
- Envía notificaciones de eventos y alarmas como SOS, detección de caídas y pulsaciones del botón de pánico para alertas inmediatas.
- Transmite telemetría que incluye estado de batería, sensores de movimiento y estado de accesorios para que los equipos operativos monitoreen la salud del dispositivo.
- Soporta flujos de gestión del dispositivo mediante las capacidades OTA y gestión por SMS implementadas por el fabricante.

## Cómo detecta Plaspy el protocolo

Plaspy recibe las conexiones de dispositivos en un único endpoint y puerto compartidos y aplica lógica de detección automática para identificar el protocolo del rastreador. Cuando un P02L correctamente configurado reporta al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo de forma manual en la plataforma.

- Plaspy acepta conexiones dirigidas a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- Los dispositivos pueden configurarse para enviar datos por UDP o TCP al puerto 8888; Plaspy escucha en ese mismo puerto para todos los dispositivos soportados.
- Cuando llegan datos, Plaspy identifica el dispositivo por su identidad reportada y el patrón del protocolo, y enruta la telemetría a la cuenta y registro de dispositivo correctos.
- Usualmente usted solo debe asegurarse de que el APN y la dirección del servidor del dispositivo apunten al endpoint de Plaspy y que el dispositivo esté permitido por cualquier firewall de red.
- Si un dispositivo no aparece, revisar APN, dirección del servidor, tipo de transporte y versión de firmware es el primer paso habitual de diagnóstico.

## Transporte y contexto de conexión

El modelo de conexión de Plaspy es intencionalmente simple para facilitar la configuración: un solo endpoint de servidor y un único puerto para todos los dispositivos. El P02L soporta el envío de telemetría a través del canal de datos móviles y puede apuntarse a Plaspy configurando la dirección y el puerto del servidor en el dispositivo.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y la configuración elegida.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138; cualquiera de las dos direcciones puede usarse en la configuración del dispositivo.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reporte y detección.
- Consideraciones de red como NAT del operador, reglas de firewall y configuración del APN pueden afectar la conectividad y deben validarse durante la puesta en marcha.
- Confirmar que el dispositivo está enviando datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es un paso común de resolución de problemas.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos de telemetría disponibles y el comportamiento de los eventos; siempre revise las notas de la versión al actualizar el firmware.
- Revisiones de hardware o variantes regionales del P02L pueden introducir diferencias sutiles en el protocolo que afecten el parseo o las funciones disponibles.
- La elección del transporte (UDP frente a TCP) puede alterar cómo se observan las retransmisiones o el comportamiento de sesión en la red; configure el transporte que soporte el firmware de su dispositivo.
- Los comandos por SMS y las actualizaciones OTA son mecanismos de gestión separados y pueden no usar el mismo canal de reporte que la telemetría en tiempo real.
- Valide la configuración del APN y del operador para la conectividad celular y asegúrese de que la dirección del servidor esté apuntando al endpoint de Plaspy para permitir la detección automática.
- Siempre coteje la guía de conexión de Plaspy con la documentación del fabricante para confirmar las configuraciones específicas del dispositivo.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del P02L ayuda a asegurar un alta confiabilidad en el onboarding de dispositivos, un diagnóstico eficaz y operaciones predecibles cuando los dispositivos reportan a Plaspy. Saber qué envía el rastreador y cómo la plataforma lo recibe reduce el tiempo de configuración y mejora la confiabilidad a largo plazo.

- Acelera la configuración inicial al aclarar qué dirección de servidor y transporte debe configurar en el dispositivo.
- Ayuda a diagnosticar problemas de conectividad y mapeo de datos cuando la telemetría o las alarmas no aparecen en Plaspy.
- Permite tomar decisiones informadas sobre la gestión de energía y los intervalos de reporte según el comportamiento del dispositivo y las expectativas de la plataforma.
- Asegura el manejo correcto de eventos prioritarios como SOS y detección de caídas para que las alertas lleguen a los operadores de forma oportuna.
- Orienta en la elección y validación de actualizaciones de firmware cuando se introducen nuevos campos o comportamientos en el protocolo.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack P02L con Plaspy permite a organizaciones y familias combinar posicionamiento multi‑constelación preciso, SOS y detección de caídas y funciones de intercomunicación de voz con monitoreo centralizado y alertas. La plataforma de Plaspy ingiere la telemetría del P02L para que despachadores, cuidadores y equipos operativos puedan ver la ubicación en vivo, generar informes y gestionar notificaciones desde un único lugar, sin perder las funciones nativas de seguridad y voz del dispositivo.

Si desea obtener más información sobre cómo Plaspy trabaja con dispositivos como el P02L, visite https://www.plaspy.com. Para detalles específicos y actualizados sobre protocolo, comportamiento de firmware y guías del fabricante, verifique la información en el sitio oficial de CanTrack https://www.cantrackgps.com/ ya que el soporte de protocolo y los detalles de implementación pueden cambiar con el tiempo.
