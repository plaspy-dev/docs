---
slug: /totemtech/at09/protocol
id: at09-protocol
sidebar_label: Protocol
title: Totemtech - AT09 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Totemtech AT09 y cómo el dispositivo se comunica con Plaspy para rastreo confiable de vehículos y activos
keywords:
  - protocolo Totemtech AT09
  - protocolo GPS Totemtech AT09
  - protocolo de comunicación Totemtech AT09
  - protocolo de rastreo Totemtech AT09
  - compatibilidad Totemtech AT09 con Plaspy
  - protocolo de rastreador GPS Totemtech
  - protocolo de rastreo de flotas AT09
  - protocolo de rastreador Plaspy
  - rastreo de vehículos AT09
  - compatibilidad rastreador GPS con Plaspy
---

# Totemtech - Protocolo AT09

Esta página describe el contexto público del protocolo para usar el rastreador GPS Totemtech AT09 con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué papel desempeña el protocolo de reporte en la entrega de telemetría y cómo Plaspy recibe e interpreta esos informes. El AT09 es un rastreador con muchas funciones: monitor de presión de neumáticos, soporte para sensores de combustible y temperatura, múltiples puertos serie, reporte a dos servidores, monitoreo por acelerómetro y capacidad de actualización OTA; todas estas capacidades se exponen a un servidor mediante el protocolo de reporte del dispositivo.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llega tráfico al punto de conexión de Plaspy. Los dispositivos Totemtech AT09 pueden configurarse para reportar por UDP o TCP al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es recomendable consultar al fabricante para detalles específicos del firmware.

## Resumen del protocolo

El protocolo de reporte del AT09 es el mecanismo que usa el dispositivo para transmitir posición, telemetría de sensores y eventos de estado a un servidor remoto como Plaspy. El protocolo define cómo se identifica el rastreador, cómo se codifican los valores de los sensores y cómo se envían los reportes periódicos o por eventos. En Plaspy, el protocolo actúa como puente entre los informes crudos del dispositivo y los datos utilizables para flotas o activos.

- Permite la entrega de posición GPS, estado de movimiento mediante el acelerómetro de 3 ejes y valores de sensores como presión de neumáticos, nivel de combustible y temperatura.
- Transporta la identificación del equipo y metadatos de estado para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Soporta telemetría periódica y mensajes basados en eventos para alarmas, SOS, eventos de alimentación y detección de movimiento.
- Acepta entradas externas como lecturas de sensores de combustible y datos de dispositivos serie reenviados por el rastreador.
- Funciona con la característica de reporte a dos servidores del dispositivo, de modo que el AT09 pueda transmitir a Plaspy junto con un endpoint secundario si está configurado.
- Permite actualizaciones y cambios de configuración por aire cuando el firmware del dispositivo lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y determina automáticamente el protocolo del rastreador a partir del flujo de datos recibido. Dado que Plaspy usa una dirección y puerto consistentes para todos los dispositivos, la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo en la plataforma cuando su dispositivo está correctamente configurado para reportar a Plaspy.

- Plaspy escucha en el puerto 8888 para todos los dispositivos y protocolos compatibles.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138.
- Se aceptan tanto reportes por UDP como por TCP, según las capacidades del dispositivo y las preferencias de configuración.
- Cuando el AT09 está configurado para reportar al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo y asigna la telemetría entrante al registro del dispositivo.
- La selección manual de protocolo dentro de Plaspy generalmente no es necesaria si el rastreador reporta correctamente al endpoint compartido.

## Transporte y contexto de conexión

El Totemtech AT09 admite opciones flexibles de transporte para enviar datos a servidores remotos. La selección del transporte y la configuración de red del dispositivo determinan si el rastreador usa UDP o TCP y cómo alcanza el endpoint de Plaspy. Esta sección resume el contexto de conexión sin entrar en los formatos de paquete específicos del dispositivo.

- El AT09 puede configurarse para usar UDP o TCP en el puerto 8888, dependiendo del firmware y la configuración del usuario.
- Los dispositivos pueden apuntar al nombre de dominio d.plaspy.com o a la IP del servidor 54.85.159.138 como endpoint de Plaspy.
- Plaspy emplea el mismo puerto 8888 para todos los dispositivos para simplificar la configuración y el enrutamiento en la plataforma.
- La elección del transporte puede afectar el comportamiento de entrega ante pérdida ocasional de paquetes y para cargas útiles grandes o frecuentes.
- Muchas instalaciones usan TCP para entrega fiable y UDP cuando se prioriza menor latencia o una pila más simple.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el comportamiento de los mensajes y los campos soportados, así que confirme la versión de firmware del AT09 al validar compatibilidad.
- Las revisiones de hardware o módulos I/O opcionales pueden exponer sensores o puertos adicionales que requieren configuración del lado del dispositivo para reportar valores.
- El reporte a dos servidores puede ser útil para redundancia, pero verifique el orden de los destinos y las diferencias en cargas útiles al usar múltiples endpoints.
- La selección del transporte UDP versus TCP debe coincidir con la configuración del dispositivo y las restricciones de red como NAT o reglas de firewall.
- Pueden ser necesarios comandos de configuración del fabricante o ajustes vía SMS para habilitar el reporte a un endpoint remoto como Plaspy.
- Siempre valide qué canales de sensores e interfaces serie están habilitados por defecto y cuáles requieren activación explícita.

## Por qué es importante comprender el protocolo

Entender de manera práctica el protocolo de comunicación del AT09 facilita la configuración inicial, la solución de problemas y garantizar la entrega fiable de telemetría a Plaspy. Saber qué envía el dispositivo y cuándo lo hace permite diagnosticar con más rapidez problemas de conectividad, mapear canales de sensores y aplicar configuraciones sensatas.

- Configuración más rápida confirmando que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y usa el transporte previsto.
- Solución de problemas más ágil cuando GPS, acelerómetro o valores de sensores no aparecen en Plaspy como se espera.
- Mejor mapeo de campos de telemetría como presión de neumáticos, sensores de combustible y canales de temperatura a activos y paneles en Plaspy.
- Decisiones informadas sobre transporte y comportamiento de reintentos según las condiciones de red de la instalación.
- Coordinación más sencilla con el soporte de Totemtech cuando se requieren comportamientos específicos de firmware o actualizaciones OTA.

## Por qué usar Plaspy con este protocolo

Usar el Totemtech AT09 con Plaspy ofrece una forma práctica de centralizar la ubicación y la telemetría de sensores para monitoreo de flotas o activos. El AT09 expone múltiples tipos de telemetría que Plaspy ingiere y presenta como datos estructurados, lo que permite visibilidad del estado del vehículo, niveles de combustible, presión de neumáticos, condiciones de temperatura y trazas históricas para obtener información operativa.

Plaspy simplifica la integración aceptando reportes en un único puerto y detectando automáticamente el protocolo del rastreador, eliminando la necesidad de seleccionar manualmente un protocolo cuando el dispositivo está correctamente apuntado al endpoint de Plaspy. Para obtener más información sobre Plaspy y cómo puede trabajar con dispositivos Totemtech visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente del protocolo AT09 y del firmware en el sitio oficial de Totemtech http://www.totemtek.com/
