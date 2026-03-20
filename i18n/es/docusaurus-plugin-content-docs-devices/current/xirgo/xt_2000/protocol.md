---
slug: /xirgo/xt_2000/protocol
id: xt_2000-protocol
sidebar_label: Protocol
title: Xirgo - XT-2000 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para el rastreador OBD II Xirgo XT-2000 y su comunicación con Plaspy
keywords:
  - protocolo Xirgo XT-2000
  - Xirgo XT-2000 GPS
  - compatibilidad XT-2000 Plaspy
  - rastreador XT-2000 OBD II
  - protocolo de rastreo Xirgo
  - rastreo de vehículos Plaspy
  - gestión de flotas XT-2000
  - protocolo de rastreador GPS
  - telemática XT-2000
  - telemática OBD II
---

# Xirgo - Protocolo XT-2000

Esta página describe el contexto público del protocolo para usar el módem OBD II Xirgo XT-2000 con Plaspy. Explica a alto nivel cómo el equipo se comunica con Plaspy, qué ajustes de conexión utiliza la plataforma públicamente y qué comportamientos de reporte del rastreador son relevantes al integrar el XT-2000 en un flujo de monitoreo de flotas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a la plataforma. El comportamiento exacto del protocolo del XT-2000 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en contexto general no sensible y en notas prácticas de compatibilidad, no en detalles internos de firmware.

## Resumen del protocolo

El XT-2000 utiliza reportes telemáticos sobre redes celulares para entregar ubicación GNSS más parámetros del vehículo leídos desde la interfaz OBD II. El dispositivo reporta posición, eventos de movimiento y datos de diagnóstico del vehículo para que un backend como Plaspy pueda transformar esos reportes en información sobre ubicación, estado y fallas.

- Permite que el XT-2000 envíe ubicación GNSS y parámetros OBD II a un servidor remoto para monitoreo
- Transporta identidad del equipo e información de sesión para que Plaspy asocie los reportes con el registro vehicular correcto
- Entrega actualizaciones de eventos como encendido, velocidad y movimientos detectados por el acelerómetro para visibilidad en tiempo real
- Soporta modos de transporte comúnmente usados por equipos telemáticos para que el rastreador alcance el endpoint de Plaspy sobre la red celular
- Permite a la plataforma ingerir códigos de diagnóstico y telemetría del vehículo expuestos por el puerto OBD

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartidos y determina automáticamente el protocolo correcto de los rastreadores para las conexiones entrantes. Si el XT-2000 está configurado para reportar al endpoint de Plaspy, la plataforma normalmente identificará el protocolo del dispositivo sin necesidad de seleccionar manualmente el protocolo en la mayoría de los escenarios de alta.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 y Plaspy acepta ambos transportes
- Cuando el XT-2000 reporta al endpoint de Plaspy, la plataforma utiliza la conexión entrante para localizar y registrar el dispositivo
- En general, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888

## Contexto de transporte y conexión

La configuración de conexión del XT-2000 depende de sus ajustes de red y del conjunto de funciones del firmware. El dispositivo está diseñado para operar sobre enlaces celulares y soporta opciones de transporte comunes; comprender este contexto de conexión ayuda a asegurar un flujo de datos fiable hacia Plaspy.

- El XT-2000 puede usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 para conectividad
- Todos los dispositivos en Plaspy reportan al mismo puerto, lo que simplifica el enrutamiento del backend y el onboarding
- El XT-2000 soporta operación alimentada desde OBD a través de su conector J1962 y envía los reportes por la interfaz celular
- La familia de módems también soporta transferencias auxiliares y transportes para actualización de firmware, pero esos procedimientos están separados del reporte núcleo hacia el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la temporización de mensajes, el contenido y campos opcionales; confirme la versión de firmware al validar compatibilidad
- Las revisiones de hardware o variantes regionales del XT-2000 pueden habilitar o deshabilitar parámetros OBD específicos o sensores
- Algunas funciones reportadas por el equipo, como DTCs o VIN, dependen del soporte OBD del vehículo y del protocolo OBD II seleccionado
- La preferencia de transporte entre UDP y TCP puede afectar el comportamiento de entrega; elija el transporte consistente con la configuración del dispositivo y el entorno de red
- Los ajustes del operador de red, APN y la disponibilidad celular pueden influir en la alcanzabilidad del equipo hacia d.plaspy.com o 54.85.159.138
- Siempre valide la configuración del servidor en el equipo para que apunte al endpoint de Plaspy en el puerto 8888

## Por qué importa entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del XT-2000 ayuda en el onboarding, en la resolución de problemas de conectividad y en garantizar la confiabilidad a largo plazo cuando el dispositivo reporta a Plaspy. Saber qué datos puede enviar el rastreador y cómo llega a la plataforma reduce el tiempo de configuración y evita sorpresas operativas.

- Ayuda a confirmar que el dispositivo está enviando los parámetros GNSS y OBD II esperados a Plaspy
- Facilita el diagnóstico de problemas de conectividad relacionados con TCP versus UDP o direcciones de servidor mal configuradas
- Aclara qué señales del vehículo y códigos de diagnóstico estarán disponibles en la plataforma para reportes y alertas
- Orienta la planificación de mantenimiento de firmware para validar nuevas versiones que cambien el formato de reporte
- Apoya una mejor planificación de integración para reglas de flota, geocercas y monitoreo de comportamiento de conductores que dependen de telemetría consistente

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT-2000 con Plaspy ofrece a los operadores de flota una forma simplificada de recopilar ubicación, velocidad y diagnósticos del vehículo desde un módem conectado por OBD II. El modelo de endpoint compartido y la detección automática de protocolos de Plaspy reducen la complejidad de configuración, mientras la plataforma ingiere los reportes del equipo para ofrecer mapas, eventos y diagnósticos en una sola vista.

Si desea saber más sobre cómo funciona Plaspy con dispositivos como el XT-2000, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información específica más reciente del protocolo y firmware con el fabricante en https://xirgo.com/.
