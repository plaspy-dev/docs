---
slug: /suntech/st4945s/protocol
id: st4945s-protocol
sidebar_label: Protocol
title: Suntech - ST4945(S) Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Suntech ST4945S con Plaspy, incluyendo contexto de conexión y pautas de compatibilidad
keywords:
  - Protocolo Suntech ST4945S
  - Protocolo GPS ST4945
  - Comunicación Suntech ST4945
  - Protocolo de rastreo ST4945
  - Compatibilidad tracker Suntech Plaspy
  - Telemetría ST4945 Plaspy
  - Protocolo dispositivo GPS Suntech
  - Rastreo vehicular Suntech ST4945S
  - Rastreador de activos ST4945 Plaspy
  - Notas de conectividad ST4945S
---

# Suntech - Protocolo ST4945(S)

Esta página describe el contexto público del protocolo para utilizar el rastreador Suntech ST4945(S) con Plaspy. Resume cómo el dispositivo reporta ubicación y telemetría a Plaspy, qué configuraciones de conexión se usan habitualmente y qué aspectos considerar al integrar el equipo en flotas y flujos de monitoreo de activos. No se reproducen aquí formatos propietarios de paquetes ni detalles internos de firmware.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el despliegue y la resolución de problemas deben tener en cuenta esos factores al trabajar con unidades ST4945 o ST4945S.

## Resumen del protocolo

El ST4945(S) comunica telemetría, posición y eventos a un servidor remoto usando el protocolo de reporte implementado por Suntech. Ese protocolo identifica el dispositivo ante el servidor, entrega la posición GNSS y los datos de sensores, y reenvía entradas digitales y condiciones de evento para que Plaspy muestre información utilizable en paneles y alertas.

- Permite el envío de ubicación y eventos desde el rastreador hacia Plaspy para monitoreo en tiempo real.
- Transmite la identidad y el estado del dispositivo para que Plaspy asocie los datos con el activo correcto.
- Envía telemetría como nivel de batería, eventos de movimiento y estado de entradas para alertas y automatizaciones.
- Soporta flujos de comando y control remotos cuando el firmware y la implementación permiten acciones iniciadas por el servidor.
- Funciona sobre enlaces celulares compatibles con el dispositivo, incluyendo LTE Cat M1, NB-IoT y retroceso a 2G para mantener cobertura.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador usado por una conexión. Cuando un ST4945(S) correctamente configurado reporta a Plaspy, la plataforma mapea los mensajes entrantes al registro de dispositivo correcto sin requerir selección manual de protocolo en la mayoría de los casos.

- Plaspy escucha en un puerto único usado por todos los dispositivos soportados, lo que simplifica la configuración y la incorporación.
- Los dispositivos deben apuntar al endpoint del servidor Plaspy para que la detección automática pueda ocurrir.
- Cuando un ST4945(S) reporta a Plaspy, normalmente se reconoce por su identidad de dispositivo y el patrón de mensajes, más que por un cambio manual de protocolo.
- Los usuarios por lo general no necesitan elegir un protocolo dentro de Plaspy si el rastreador está configurado para enviar datos al endpoint de Plaspy.
- Para direccionamiento de red, Plaspy está disponible como d.plaspy.com y en su IP pública 54.85.159.138 en el puerto compartido.

## Transporte y contexto de conexión

El ST4945(S) puede configurarse para usar distintas opciones de transporte según los ajustes de firmware y la capacidad de la red. El contexto de conexión determina cómo el rastreador alcanza el endpoint de ingestión de Plaspy, pero no cambia que Plaspy espera que todos los dispositivos usen el mismo puerto del servidor para reportar.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de despliegue.
- Plaspy acepta conexiones en el dominio d.plaspy.com y directamente en 54.85.159.138 usando el puerto compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del dispositivo y del APN.
- Elija TCP cuando se requieran sesiones persistentes y confirmación de entrega; use UDP cuando se prefiera un reporte más ligero y el dispositivo lo soporte.
- Confirme los ajustes de red del dispositivo y el APN para que el rastreador pueda alcanzar el endpoint de Plaspy mediante el transporte seleccionado.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción o lanzamientos OTA pueden cambiar la forma en que el dispositivo reporta y qué modos de transporte están disponibles.
- Revisiones de hardware u opciones como Bluetooth o E/S adicionales pueden afectar los campos de telemetría enviados al servidor.
- Los ejemplos de configuración y la documentación oficial del fabricante son la fuente autorizada para comportamientos específicos de firmware.
- La selección de transporte entre UDP y TCP puede influir en la entrega y el comportamiento de reconexión en escenarios de baja cobertura.
- Siempre valide un dispositivo de muestra reportando a Plaspy antes de un despliegue masivo para confirmar que los campos y eventos esperados llegan correctamente.
- Si se usan servidores opcionales de mantenimiento u OTA, coordine la configuración para que el reporte a Plaspy no se vea interrumpido.

## Por qué entender el protocolo es importante

Comprender cómo el ST4945(S) se comunica con Plaspy facilita la configuración, la resolución de problemas y el mantenimiento a largo plazo. Tener claro el contexto de conexión y los modos de fallo comunes reduce el tiempo de resolución y mejora la fiabilidad operativa de los activos rastreados.

- Permite configurar correctamente el APN y el servidor para que los dispositivos alcancen Plaspy con fiabilidad.
- Ayuda a interpretar la telemetría y la sincronía de eventos al diagnosticar reportes perdidos o comportamientos inesperados.
- Orienta la elección de transporte entre UDP y TCP según necesidades de cobertura y fiabilidad.
- Informa decisiones sobre actualizaciones de firmware y uso de servidores de mantenimiento durante despliegues a gran escala.
- Apoya la planificación de estrategias de energía y reporte de eventos para equilibrar la autonomía y la frecuencia de reporte.

## Por qué usar Plaspy con este protocolo

Usar el ST4945(S) con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad consistente de vehículos y activos portátiles. La combinación de modos de bajo consumo, amplio soporte celular y telemetría de movimiento y entradas permite que el dispositivo reporte eventos significativos y datos de ubicación a Plaspy para mapeo, alertas e integración en flujos operativos.

Para más información sobre Plaspy y cómo la plataforma ingiere y presenta datos de rastreadores, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo y deben verificarse con el fabricante en http://www.suntechint.com/.
