---
slug: /ev/ev_100/protocol
id: ev_100-protocol
sidebar_label: Protocol
title: EV - EV-100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador EV EV-100 y su compatibilidad con Plaspy. Guía de conexión y notas de compatibilidad.
keywords:
  - protocolo EV EV-100
  - rastreador GPS EV-100
  - comunicaciones EV EV-100
  - protocolo de seguimiento EV-100
  - rastreador EV Plaspy
  - compatibilidad EV-100 Plaspy
  - GPS vehicular EV-100
  - GPS para motocicleta EV-100
  - gestión de flotas EV-100
  - guía del protocolo EV-100
---

# EV - EV-100 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador EV EV-100 con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, cómo Plaspy recibe los reportes y qué ajustes de conexión se usan habitualmente para que integradores y administradores puedan planear despliegues y tareas de resolución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en detalles generales, no sensibles, útiles para la configuración y verificación.

## Visión general del protocolo

El EV-100 utiliza un protocolo de reporte que permite al rastreador identificarse, transmitir ubicación y datos de sensores, y enviar alarmas o actualizaciones de estado a un servidor remoto. El protocolo define los mensajes que envía el equipo y cómo el servidor los interpreta para que los datos de rastreo sean utilizables en Plaspy.

- Permite reportes periódicos y por eventos desde el rastreador hacia un receptor remoto.
- Comunica estado del vehículo y alarmas como pérdida de alimentación, batería baja y eventos de movimiento junto con las coordenadas GPS.
- Permite que el dispositivo almacene datos localmente y los reenvíe cuando hay conexión GPRS disponible para evitar pérdida de información.
- Admite comandos remotos y mecanismos de configuración implementados por el fabricante, expuestos vía SMS o por red según las capacidades del equipo.
- Funciona en conjunto con la capa de transporte para entregar los reportes a Plaspy de forma fiable para su procesamiento y visualización.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para recibir reportes de muchos modelos de rastreadores y determinar automáticamente el protocolo en uso cuando un dispositivo correctamente configurado comienza a reportar. En la mayoría de los casos no es necesaria la selección manual del protocolo dentro de Plaspy si el equipo está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un endpoint compartido que acepta reportes de rastreadores e inspecciona las conexiones entrantes para identificar el tipo de equipo.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para configuración directa.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo cual simplifica la configuración de equipos y las reglas de red.
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma compara el formato del reporte con protocolos conocidos y procesa los datos en consecuencia.
- Normalmente solo necesita configurar el dispositivo para que reporte al dominio o IP de Plaspy; la plataforma se encarga de la detección automática.

## Contexto de transporte y conexión

La elección del transporte afecta cómo el EV-100 envía datos a Plaspy, pero no cambia que la plataforma centraliza la recepción en el mismo puerto. Comprender el contexto de transporte ayuda con las reglas de firewall y la configuración inicial de los equipos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración en sitio.
- El dominio del servidor Plaspy d.plaspy.com y la IP 54.85.159.138 son endpoints válidos a los que pueden apuntar los dispositivos para reportar.
- El puerto es 8888 y se usa de forma consistente entre los dispositivos soportados por Plaspy para simplificar despliegues y la configuración de red.
- Elija UDP para reportes periódicos ligeros cuando esté soportado, o TCP cuando requiera fiabilidad en la sesión y esto sea compatible con el dispositivo y la red.
- Asegúrese de que la salida GPRS o datos móviles esté permitida en la SIM y que la configuración APN sea la correcta para que el EV-100 pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar intervalos de reporte, alarmas disponibles o campos opcionales en los mensajes salientes; siempre verifique notas específicas del firmware.
- Revisión de hardware o variantes regionales del EV-100 pueden exponer diferentes opciones de configuración o valores por defecto de transporte.
- Algunas funciones como actualización de firmware OTA, buffering en memoria local y reportes activados por acelerómetro pueden ser opcionales o variar según la versión.
- La elección entre UDP y TCP en el dispositivo debe corresponder a la capacidad del equipo y al nivel de fiabilidad deseado para su despliegue.
- Los comandos remotos del fabricante y controles vía SMS pueden coexistir con el reporte por GPRS y afectar el comportamiento del dispositivo cuando se gestiona de forma remota.
- Valide la configuración del equipo confirmando que esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y que exista conectividad en la red móvil.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de reporte del EV-100 facilita despliegues más fluidos, una resolución de problemas más rápida y una operación fiable a largo plazo cuando se integra con Plaspy. Conocer los límites y comportamientos del protocolo reduce conjeturas durante la configuración y permite un rendimiento predecible.

- Ayuda a asegurar la configuración correcta del equipo para que los reportes lleguen a Plaspy sin necesidad de seleccionar el protocolo manualmente.
- Facilita el diagnóstico de problemas de conectividad al revisar transporte, endpoint y ajustes de puerto.
- Apoya la planificación de capacidad al comprender la frecuencia típica de reportes y el comportamiento por eventos.
- Ayuda en la gestión de firmware y en las expectativas cuando las funciones difieren entre versiones de firmware o revisiones de hardware.
- Mejora la postura de seguridad y cumplimiento al garantizar que los dispositivos usen los endpoints y puertos esperados para reportar.

## Por qué usar Plaspy con este protocolo

Usar el EV EV-100 con Plaspy ofrece una forma centralizada y práctica de convertir los reportes del dispositivo en información accionable de ubicación y estado para seguimiento de flotas y motocicletas. El diseño robusto del EV-100, su amplio rango de voltaje, antenas internas y funciones de detección de movimiento complementan la capacidad de Plaspy para ingerir y presentar telemetría de vehículos para monitoreo, alertas y análisis operativo.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el EV-100, visite https://www.plaspy.com. Para detalles específicos más actuales de protocolo, notas de firmware e información de hardware siempre consulte el sitio del fabricante en http://www.eviewltd.com/ ya que la implementación y el comportamiento del firmware pueden cambiar con el tiempo.
