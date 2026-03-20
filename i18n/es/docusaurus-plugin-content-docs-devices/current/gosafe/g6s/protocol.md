---
slug: /gosafe/g6s/protocol
id: g6s-protocol
sidebar_label: Protocol
title: Gosafe - G6S Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el rastreador Gosafe G6S con Plaspy, con contexto de conexión y notas de compatibilidad
keywords:
  - Protocolo Gosafe G6S
  - Protocolo GPS Gosafe G6S
  - Gosafe G6S Plaspy
  - Protocolo rastreador G6S
  - Protocolo de rastreo de vehículos Gosafe
  - Compatibilidad Gosafe G6S
  - Protocolo de comunicación G6S
  - Compatibilidad de dispositivos Plaspy
  - Firmware FOTA Gosafe
  - Rastreo de flotas G6S
---

# Gosafe - Protocolo G6S

Esta página describe el contexto público del protocolo para usar el rastreador Gosafe G6S con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica en términos generales, cómo Plaspy acepta los reportes del dispositivo y qué papel juega el protocolo de comunicación para una integración exitosa sin exponer detalles privados de implementación.

El Gosafe G6S es un rastreador GSM GPRS cuatribanda diseñado para gestión de flotas, telemática e integraciones empresariales. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que aspectos como la cadencia de telemetría, el reporte de alarmas o los procedimientos de FOTA pueden diferir entre distintas versiones.

## Resumen del protocolo

El protocolo utilizado por el G6S permite que el rastreador reporte ubicación, estado y eventos de alarma a un servidor remoto, y reciba comandos de gestión cuando están soportados. En el contexto de Plaspy, el protocolo es la capa que empaqueta la telemetría y la información de identidad para que la plataforma pueda ingerir, normalizar y mostrar datos útiles para monitoreo y operación.

- Transmite telemetría periódica y por eventos para que Plaspy pueda mapear ubicación y estado
- Proporciona identificación del dispositivo e información de sesión para vincular los reportes con el activo correcto
- Transporta alarmas y eventos de geocerca que alimentan alertas y notificaciones en Plaspy
- Soporta ganchos de gestión remota usados por mantenimiento por aire y FOTA
- Permite que la plataforma correlacione señales del dispositivo con flujos de trabajo de vehículo y flota

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente cuando el dispositivo está configurado correctamente. Esa detección automática permite que un amplio conjunto de rastreadores reporte al mismo endpoint de Plaspy con configuración mínima en la plataforma.

- Plaspy escucha en el mismo puerto para todos los dispositivos soportados para simplificar la configuración
- Los dispositivos deben configurarse para enviar reportes a d.plaspy.com o a la IP del servidor Plaspy
- Plaspy detecta automáticamente el protocolo del rastreador a partir del tráfico entrante
- En la mayoría de los casos los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo apunta al endpoint de Plaspy
- Una identidad de dispositivo correcta y reportes estables hacen que la detección y el mapeo de protocolos sean confiables

## Transporte y contexto de conexión

El transporte de la conexión y los ajustes de destino suelen configurarse en el dispositivo o mediante una consola de gestión de dispositivos. El G6S puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida, y puede apuntar al dominio de Plaspy o a la IP del servidor Plaspy.

- Los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- El puerto que usa Plaspy para reportes de rastreadores es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- La selección de transporte puede afectar el comportamiento de entrega para ciertos tipos de eventos y debe coincidir con las capacidades del dispositivo
- Asegúrese de que la configuración de GPRS o datos móviles salientes permita conexiones al endpoint de Plaspy configurado

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes y las funciones disponibles, incluyendo procedimientos OTA y comportamiento de alarmas
- Distintas revisiones de hardware o variantes regionales pueden implementar opciones de protocolo de forma diferente
- Las interfaces de configuración del fabricante pueden exponer opciones de transporte y reporte que afectan la compatibilidad
- Elegir UDP o TCP puede impactar la confiabilidad y debe coincidir con la configuración del dispositivo
- Valide los ajustes de destino de los reportes del dispositivo para que el rastreador apunte a d.plaspy.com o a la IP del servidor Plaspy según sea necesario
- Al usar funciones avanzadas como FOTA o geocercas a nivel de hardware, confirme que el firmware del dispositivo soporte los comandos remotos necesarios

## Por qué es importante entender el protocolo

Comprender cómo el G6S se comunica con Plaspy ayuda en la configuración inicial, en la resolución de problemas de conectividad y en el mantenimiento de operaciones de flota confiables. Incluso sin inspeccionar paquetes de bajo nivel, conocer el transporte, el destino y los comportamientos comunes del firmware acelera la resolución de problemas de reporte o configuración.

- Simplifica la configuración inicial del dispositivo para que los reportes lleguen a Plaspy de forma confiable
- Ayuda a diagnosticar problemas de conectividad relacionados con transporte o direccionamiento del servidor
- Orienta la decisión entre UDP y TCP según la red y el comportamiento del dispositivo
- Permite verificar la telemetría y los eventos de alarma esperados durante el despliegue
- Facilita coordinar actualizaciones de firmware y la orientación del fabricante con las necesidades de la plataforma

## Por qué usar Plaspy con este protocolo

Usar el Gosafe G6S con Plaspy ofrece a las organizaciones una forma práctica de centralizar la recolección de ubicación de vehículos, estado y datos de alarma en una sola plataforma de gestión de flotas. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos reduce la carga de configuración de la plataforma, permitiendo a integradores y gestores de flotas enfocarse en la operación en lugar de en la configuración por dispositivo del servidor.

To learn more about Plaspy and how it handles device connectivity and fleet telemetry visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer guidance on the official Gosafe website at https://gosafesystem.com/ since protocol support and device implementation can change over time.
