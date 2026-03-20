---
slug: /gnxis/4_wire/protocol
id: 4_wire-protocol
sidebar_label: Protocol
title: Gnxis - 4-wire Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para el rastreador GPS Gnxis 4-wire y su compatibilidad con Plaspy, con guías de conexión y transporte
keywords:
  - Protocolo Gnxis 4-wire
  - Protocolo GPS Gnxis 4-wire
  - Protocolo de rastreo Gnxis 4-wire
  - Protocolo de rastreador GPS Gnxis
  - Compatibilidad 4-wire con Plaspy
  - Rastreo vehicular Gnxis 4-wire
  - Gestión de flotas Gnxis 4-wire
  - Comunicación del rastreador Gnxis
  - Protocolo de dispositivo Plaspy
  - Rastreador LTE Gnxis 4-wire
---

# Gnxis - Protocolo 4-wire

Esta página ofrece un resumen público del contexto del protocolo para usar el rastreador GPS Gnxis 4-wire con Plaspy. Se enfoca en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales y no sensibles, para que responsables de flotas e integradores comprendan las expectativas de conexión y el comportamiento a nivel alto.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta guía entrega contexto general en lugar de detalles a nivel de firmware.

## Visión general del protocolo

El protocolo de comunicación define cómo la unidad Gnxis 4-wire envía información de ubicación, estado y alertas a un servidor remoto, y cómo recibe comandos remotos opcionales. Para integrarse con Plaspy, el protocolo debe permitir que el rastreador se identifique y entregue posiciones con sello de tiempo y datos de eventos básicos a través de un transporte compatible.

- Permite informes periódicos y por evento para seguimiento en tiempo real.
- Incluye identificación básica del dispositivo para que Plaspy pueda asociar los reportes con el activo correcto.
- Transmite alertas de seguridad y estado, como encendido, movimiento y pérdida de alimentación.
- Soporta comandos de configuración y control remoto cuando el firmware del equipo los expone.
- Proporciona la carga útil que Plaspy mapea a la ubicación del vehículo, indicadores de estado y vistas de alertas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo que usa el equipo. En instalaciones normales, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 and all devices in Plaspy use the same port.
- Plaspy puede aceptar reportes de un dispositivo y emparejar su formato con un protocolo soportado de forma automática.
- Cuando una unidad Gnxis 4-wire está configurada para enviar reportes al endpoint de Plaspy, la plataforma detectará el patrón de reporte y clasificará el dispositivo en consecuencia.
- Si la detección automática no es exitosa, revisar la configuración de reporte del equipo y la guía del fabricante suele resolver desajustes de configuración.

## Transporte y contexto de conexión

El rastreador Gnxis 4-wire puede usar transportes celulares estándar para enviar datos a un servidor backend. Para la compatibilidad con Plaspy, los detalles relevantes de conexión son la dirección del servidor y el modo de transporte configurado en el equipo.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, según el soporte y configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o 54.85.159.138 como endpoint de Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración.
- Elija UDP para reportes con menor sobrecarga o TCP para entrega orientada a conexión si el firmware ofrece ambas opciones.
- Asegúrese de que el APN y los ajustes GPRS del dispositivo sean correctos para que el rastreador pueda alcanzar el endpoint de Plaspy por redes LTE, GSM o GPRS.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, eventos soportados y características opcionales; verifique la versión de firmware del equipo al evaluar compatibilidad.
- Las revisiones de hardware o variantes de conectores, como 4-wire frente a 8-wire, pueden afectar las entradas disponibles y el cableado de alertas, pero no cambian el requisito de reporte a nivel alto.
- Los menús de configuración del fabricante pueden ofrecer transportes UDP y TCP; seleccione el transporte que coincida con sus necesidades de red y confiabilidad.
- Algunas funciones, como corte de combustible o inmovilización remota, son opcionales y pueden requerir firmware o hardware específicos del fabricante.
- Siempre valide que el equipo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la integración con Plaspy.
- En caso de duda, consulte la documentación oficial de Gnxis para instrucciones específicas por modelo y el cableado correcto en instalaciones 4-wire.

## Por qué es importante comprender el protocolo

Comprender con claridad el protocolo de comunicación del rastreador facilita una configuración fluida, un flujo de datos confiable hacia Plaspy y una resolución más rápida de incidentes cuando faltan reportes o ocurren eventos inesperados.

- Confirma que el dispositivo está enviando los identificadores esperados para que Plaspy asocie los datos con el activo correcto.
- Ayuda a elegir el transporte y los ajustes de red adecuados para maximizar la fiabilidad y la vida útil de la batería.
- Facilita el diagnóstico de reportes de ubicación faltantes, telemetría ruidosa o banderas de evento desajustadas.
- Apoya la planificación de actualizaciones de firmware y la evaluación de si una unidad soporta las funciones que usted necesita.
- Mejora los resultados de integración al combinar unidades Gnxis 4-wire con sensores adicionales o cableado de alimentación en vehículos.

## Por qué usar Plaspy con este protocolo

Usar el rastreador Gnxis 4-wire junto con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación de vehículos y eventos de seguridad básicos. Plaspy mapea los reportes del rastreador a ubicaciones en vivo, indicadores de estado y reproducción histórica para que los equipos operativos puedan monitorear flotas y responder a alertas de manera eficiente.

Si despliega dispositivos Gnxis 4-wire a gran escala, Plaspy simplifica la gestión de endpoints al usar un solo puerto y detección automática de protocolo, reduciendo los pasos de configuración por dispositivo y aun así soportando reportes por UDP o TCP según requiera el rastreador. To learn more about Plaspy and how it works with a wide range of trackers visit https://www.plaspy.com. Please verify the latest device specific protocol details and firmware behavior with the Gnxis manufacturer official website as implementations can change over time.
