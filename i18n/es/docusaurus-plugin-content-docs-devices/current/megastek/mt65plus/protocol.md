---
slug: /megastek/mt65plus/protocol
id: mt65plus-protocol
sidebar_label: Protocol
title: Megastek - MT65PLUS Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Megastek MT65PLUS y cómo el rastreador comunica datos a Plaspy para monitoreo en tiempo real
keywords:
  - Protocolo Megastek MT65PLUS
  - Protocolo GPS Megastek MT65PLUS
  - Compatibilidad MT65PLUS Plaspy
  - Protocolo de comunicación MT65PLUS
  - Protocolo de rastreo MT65PLUS
  - Protocolo de rastreador Plaspy
  - Rastreador GPS MT65PLUS
  - Protocolo GPS pulsera de tobillo
  - Protocolo GPS monitoreo personal
  - Protocolo rastreador resistente a manipulación
---

# Megastek - MT65PLUS Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador tipo pulsera de tobillo Megastek MT65PLUS con la plataforma Plaspy. Se centra en cómo el dispositivo transmite datos y eventos de alto nivel a Plaspy para monitoreo en tiempo real, sin exponer detalles privados de implementación. La información aquí está pensada para administradores, integradores y usuarios técnicos que necesiten comprender el papel del protocolo de reporte del MT65PLUS al conectarlo con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que aspectos como la frecuencia de telemetría, la señalización de manipulación y los sensores auxiliares dependen del firmware MT65PLUS desplegado en campo.

## Descripción general del protocolo

El protocolo de comunicación MT65PLUS define cómo la pulsera informa ubicación, estado, alarmas y telemetría a un servidor remoto. En términos generales, el protocolo transporta datos de identificación, posicionamiento, eventos y telemetría para que Plaspy pueda mostrar ubicación en vivo, registrar historiales y generar alertas para monitoreo supervisado.

- El protocolo entrega coordenadas GNSS y arreglos asistidos para que Plaspy actualice la posición en el mapa y reproduzca rutas.
- Los reportes de estado y eventos incluyen alarmas por manipulación, eventos SOS, estado de batería y notificaciones de encendido/apagado del dispositivo.
- Telemetría fisiológica, como frecuencia cardíaca, se envía como flujos de datos junto con la ubicación y los eventos.
- El protocolo incluye canales de identificación del dispositivo para que la plataforma asocie los mensajes entrantes con el registro de activo correcto.
- Señales para inicio de voz bidireccional y acuse de recibo de alarmas son transmitidas por el dispositivo y canalizadas hacia los flujos de eventos de Plaspy según lo soporte la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes de los dispositivos en un endpoint compartido y determina automáticamente el protocolo adecuado para parsear y procesar cada mensaje. En la mayoría de los despliegues, un MT65PLUS correctamente configurado comenzará a reportar y Plaspy identificará el tipo de dispositivo sin requerir selección manual del protocolo dentro de la plataforma.

- Plaspy escucha en un único puerto para todos los rastreadores soportados, por lo que el mismo puerto se usa para distintos tipos de dispositivos.
- El endpoint del servidor de Plaspy para reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto público de escucha de Plaspy es 8888 y los dispositivos pueden configurarse para reportar a ese puerto.
- Cuando un MT65PLUS envía reportes iniciales al endpoint de Plaspy, la plataforma asocia la transmisión entrante con un registro de activo y aplica el protocolo detectado.
- Típicamente no es necesaria la selección manual del protocolo en Plaspy si el dispositivo está apuntando al endpoint y puerto de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión para despliegues MT65PLUS están determinadas por el módem del dispositivo y la configuración de firmware. El equipo puede usar transporte UDP o TCP para reportar a Plaspy, y ambos transportes son compatibles en el endpoint público de Plaspy en el mismo puerto.

- Los dispositivos pueden configurarse para apuntar a d.plaspy.com o directamente a 54.85.159.138 al establecer la dirección del servidor.
- Plaspy utiliza el puerto 8888 para reporte de dispositivos y todos los equipos soportados por Plaspy usan este puerto.
- El MT65PLUS puede ajustarse para usar UDP o TCP en el puerto 8888 según el firmware desplegado y la preferencia del integrador.
- Elija UDP cuando requiera baja sobrecarga y TCP cuando la entrega ordenada y el estado de conexión sean preferibles y estén soportados por el dispositivo.
- Los operadores de red y los administradores de cortafuegos deben permitir tráfico saliente de los dispositivos al endpoint de Plaspy en el puerto 8888 para asegurar reportes confiables.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los campos de telemetría disponibles, los nombres de eventos y los intervalos de reporte; confirme la versión de firmware del equipo al validar su comportamiento.
- Revisión de hardware o variantes regionales pueden alterar radios soportados, preferencias de transporte o disponibilidad de sensores.
- Algunas funciones referenciadas por el dispositivo (por ejemplo voz bidireccional o arreglos asistidos por Wi Fi) pueden requerir configuración adicional en la plataforma o permisos especiales.
- La elección del transporte (UDP versus TCP) se controla desde la configuración del dispositivo; confirme que el firmware del módem soporte el modo de transporte deseado.
- Siempre verifique que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para el reporte a Plaspy.
- En caso de duda, consulte la documentación de Megastek para detalles específicos de firmware antes de realizar despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a asegurar una configuración correcta, monitoreo confiable y resolución de problemas más rápida al integrar dispositivos MT65PLUS con Plaspy. Esto orienta la configuración adecuada del reporte del equipo, el comportamiento esperado de eventos y cómo se mapea la telemetría en los paneles de Plaspy.

- Garantiza que los dispositivos apunten al endpoint y puerto de Plaspy para que los mensajes lleguen y sean parseados.
- Ayuda a los administradores a interpretar las señales de manipulación, SOS y frecuencia cardiaca y relacionarlas con el comportamiento del dispositivo.
- Facilita la resolución de fallas cuando los mensajes no llegan por problemas de transporte, APN o cortafuegos.
- Guía la planificación de actualizaciones de firmware al identificar cuándo cambios en el protocolo o en campos pueden afectar el monitoreo posterior.
- Reduce el tiempo de integración al clarificar qué señales espera la plataforma y cómo se usan en alertas y flujos de trabajo.

## Por qué usar Plaspy con este protocolo

Usar dispositivos MT65PLUS con Plaspy ofrece a las organizaciones una vía simplificada para monitorear ubicación, eventos de manipulación, alertas SOS y telemetría fisiológica desde una sola plataforma. La capacidad de Plaspy para detectar automáticamente el protocolo del rastreador e ingerir la telemetría del dispositivo simplifica el despliegue, permitiendo que los supervisores se concentren en la respuesta operativa en lugar del parseo a bajo nivel.

Si usted desea saber más sobre Plaspy y cómo gestiona el reporte de dispositivos, visite https://www.plaspy.com. Para detalles más recientes específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante para el MT65PLUS, verifique la información actual en el sitio de Megastek https://www.megastek.com/ ya que el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo.
