---
slug: /megastek/mt90n/protocol
id: mt90n-protocol
sidebar_label: Protocol
title: Megastek - MT90N Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el rastreador GPS Megastek MT90N con Plaspy usando ajustes de conexión compartidos
keywords:
  - Protocolo Megastek MT90N
  - Rastreador GPS MT90N
  - Protocolo Megastek Plaspy
  - Protocolo de comunicación MT90N
  - Protocolo de rastreo MT90N
  - Megastek GPS Plaspy
  - Protocolo rastreador GPS personal
  - Protocolo rastreador NB IoT
  - Compatibilidad MT90N
  - Integración rastreador GPS Plaspy
---

# Megastek - Protocolo MT90N

Esta página describe el contexto público del protocolo para usar el rastreador Megastek MT90N con Plaspy. Se centra en cómo el dispositivo comunica posición y telemetría a Plaspy en términos generales y no sensibles, para que integradores y administradores comprendan el papel del protocolo de reporte cuando el MT90N está conectado a Plaspy para seguimiento en tiempo real, alertas y reproducción histórica.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo de reporte cuando el dispositivo está configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que aquí se ofrece una guía general y segura sobre transporte y compatibilidad en lugar de detalles ligados a un firmware específico.

## Resumen del protocolo

El MT90N reporta posición y telemetría a un servidor remoto usando conectividad celular NB IoT, fuentes de posicionamiento asistido y transporte por TCP o UDP. El protocolo implementado en el dispositivo determina cómo se enmarcan los mensajes, qué tipos de eventos se reportan y qué campos de telemetría están disponibles; Plaspy ingiere esos mensajes y los convierte en datos de seguimiento y eventos utilizables.

- Permite que el dispositivo se identifique y envíe fijaciones de ubicación y actualizaciones de estado a Plaspy.
- Transporta notificaciones de eventos como pulsaciones de SOS, alertas de batería baja y transiciones de geocerca.
- Lleva telemetría útil para la visualización en tiempo real y la reconstrucción de recorridos históricos.
- Funciona sobre transportes de paquetes estándar, por lo que el dispositivo puede usar TCP o UDP según la configuración.
- Permite a Plaspy mapear los mensajes entrantes a registros de seguimiento sin que el usuario tenga que seleccionar manualmente el protocolo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes entrantes en un endpoint común y detecta automáticamente el protocolo de tracker usado por el MT90N cuando el dispositivo envía datos al servidor de Plaspy. En la mayoría de implementaciones, el usuario configura el dispositivo para reportar al endpoint de Plaspy y la plataforma selecciona el parser y el mapeo adecuados de forma automática.

- Plaspy utiliza un endpoint de servidor compartido para recoger reportes y realiza identificación automática del protocolo.
- Los dispositivos configurados para enviar a d.plaspy.com o a la IP del servidor Plaspy serán ingeridos por la plataforma.
- En general, los usuarios no necesitan seleccionar un protocolo manualmente dentro de Plaspy cuando el dispositivo apunta correctamente al endpoint.
- Plaspy soporta el mismo puerto de escucha para todos los dispositivos compatibles, lo que simplifica la configuración y el despliegue.
- Una configuración correcta del dispositivo y la coincidencia del APN o ajustes de red en la SIM son necesarios para que los reportes lleguen correctamente.

## Transporte y contexto de conexión

El MT90N puede reportar mediante transportes de paquetes comunes y puede configurarse para usar UDP o TCP para enviar mensajes a Plaspy. Muchos instaladores apuntan el dispositivo al dominio de Plaspy o a la IP del servidor y eligen el transporte que mejor se adapte a sus necesidades de conectividad y fiabilidad.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com como dominio del servidor Plaspy.
- La IP del servidor Plaspy 54.85.159.138 es una dirección alternativa que los dispositivos pueden usar para reportes.
- El puerto de escucha de Plaspy para todos los dispositivos compatibles es 8888.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de la red.
- Elegir TCP puede mejorar las garantías de entrega en enlaces inestables, mientras que UDP puede reducir la sobrecarga en redes con recursos limitados.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de mensaje, IDs de eventos y la telemetría disponible, así que verifique la versión de firmware del dispositivo al validar su comportamiento.
- Variantes de hardware o regionales pueden implementar conjuntos de reporte o servicios auxiliares distintos, como asistencia GNSS o escaneo de Wi‑Fi.
- La selección del transporte influye en la fiabilidad y compatibilidad con la red; algunos operadores o redes NB IoT pueden preferir transportes específicos.
- Los comandos de configuración del fabricante y el manejo del APN pueden afectar si el dispositivo logra alcanzar el endpoint de Plaspy.
- Confirme qué eventos envía el dispositivo por defecto y cuáles requieren configuración, por ejemplo el comportamiento del SOS y los intervalos de reporte.
- Siempre valide la compatibilidad con la documentación oficial del fabricante para obtener detalles específicos del equipo MT90N en su posesión.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del tracker ayuda a los administradores a configurar correctamente los dispositivos, resolver problemas de entrega o parseo y garantizar una operación fiable a largo plazo con Plaspy. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer las opciones de transporte y las diferencias de firmware acelera el diagnóstico y reduce el tiempo de despliegue.

- Garantiza la configuración correcta del dispositivo para que los reportes lleguen a d.plaspy.com o a la IP y puerto del servidor Plaspy.
- Ayuda a interpretar qué campos de telemetría y eventos estarán visibles en Plaspy para alertas y análisis históricos.
- Orienta la elección de transporte y los intervalos de reporte para equilibrar la duración de la batería y la frescura de los datos.
- Reduce el tiempo de resolución cuando un dispositivo parece estar desconectado, al acotar las causas probables a red, APN o variantes de firmware.
- Facilita la escalabilidad segura al documentar el comportamiento esperado del dispositivo según firmware y variantes regionales.

## Por qué usar Plaspy con este protocolo

Usar el Megastek MT90N con Plaspy ofrece a las organizaciones un rastreador compacto compatible con NB IoT que aporta posición, alertas SOS y telemetría a una única plataforma de monitoreo. La combinación del GNSS u‑blox, asistencia por Wi‑Fi y LBS en el MT90N junto con la ingestión de Plaspy permite casos de uso prácticos como seguridad personal, recuperación de mascotas y monitoreo de activos a corto plazo, con reportes y alertas de geocerca configurables.

Para saber más sobre cómo Plaspy procesa los datos entrantes de trackers y revisar opciones de despliegue, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guías de configuración del fabricante, verifique la información vigente en el sitio de Megastek en https://www.megastek.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
