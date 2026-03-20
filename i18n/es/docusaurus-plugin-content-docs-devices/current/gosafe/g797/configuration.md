---
slug: /gosafe/g797/configuration
id: g797-configuration
sidebar_label: Configuration
title: Gosafe - G797 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador OBD2 Gosafe G797 a Plaspy usando ajustes de servidor compartidos y detección automática del protocolo
keywords:
  - configuración Gosafe G797
  - instalación Gosafe G797
  - configuración de servidor Gosafe G797
  - configuración G797 Plaspy
  - configuración del rastreador G797
  - instalación rastreador OBD2 Gosafe
  - configuración plataforma G797 GPS
  - configuración seguimiento flotas G797
  - configuración telemetría G797
  - configuración de dispositivo Plaspy
---

# Gosafe - G797 Configuración

Esta página ofrece el contexto público de configuración para usar el rastreador OBD2 Gosafe G797 con Plaspy. Incluye los ajustes de servidor compartidos que Plaspy requiere, el flujo práctico para apuntar un G797 al endpoint de Plaspy y consideraciones generales para validar la conectividad y la visibilidad en la plataforma. Está pensada para ingenieros de flota, integradores e instaladores que apliquen los ajustes disponibles públicamente para la integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía junto con la documentación y las herramientas de aprovisionamiento del fabricante del G797 cuando estén disponibles para completar la integración.

## Visión general de la configuración

Este proceso prepara al G797 para enviar posición GNSS, datos diagnósticos OBD y telemetría de eventos a Plaspy, de modo que el dispositivo sea visible y útil en flujos de trabajo telemáticos de flota o para aseguradoras.

- Apunte el G797 al endpoint del servidor Plaspy para que los datos registrados se envíen al host de ingestión correcto.
- Seleccione el método de transporte que soporte el dispositivo (UDP o TCP) en el puerto compartido de Plaspy.
- Valide la conectividad desde el dispositivo hacia Plaspy y confirme que la plataforma recibe los reportes.
- Asegúrese de que el dispositivo tenga una conexión de datos móviles activa y la APN o el aprovisionamiento de la SIM que correspondan.
- Guarde y aplique los ajustes, luego verifique la posición en vivo, la telemetría OBD y los reportes de eventos en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta

Todos los dispositivos en Plaspy usan el mismo puerto, y la plataforma detecta el protocolo del equipo de forma automática, por lo que no necesita asignar protocolos a puertos distintos.

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBDII del vehículo para instalar el dispositivo G797 plug-and-play o un cable de extensión aprobado.
- Una tarjeta SIM activa con servicio de datos aprovisionado para el dispositivo si va a reportar por la red celular (GPRS/EDGE o variantes opcionales UMTS/LTE).
- Acceso al método o software de configuración del fabricante para el G797, como la herramienta de aprovisionamiento USB suministrada o la utilidad de configuración remota.
- Una cuenta de Plaspy o la información de aprovisionamiento requerida proporcionada por su administrador de Plaspy para validar que el dispositivo aparece en la plataforma.
- Confirmación de la alimentación y estado de batería del dispositivo y haber completado cualquier requisito previo del fabricante antes de la configuración de red.

## Cómo se conecta este rastreador a Plaspy

El G797 envía ubicación GNSS, telemetría OBD y eventos de sensores a Plaspy mediante canales de reporte estándar, permitiendo a los administradores de flota monitorear vehículos y reconstruir eventos.

- Los reportes de posición GNSS se transmiten a través del enlace de datos móviles al endpoint del servidor Plaspy.
- Los valores diagnósticos OBD y CAN, como VIN, fuentes de odómetro y PIDs, se entregan a Plaspy para identificación y análisis.
- Los datos del acelerómetro y de eventos (por ejemplo, notificación inicial de siniestro o detección de eventos bruscos) se reportan al mismo endpoint de Plaspy utilizando el transporte configurado.
- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Plaspy ingiere el flujo entrante y detecta automáticamente el protocolo del rastreador para presentar seguimiento en vivo, telemetría y feeds de eventos.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante para el G797 (aprovisionamiento USB, GICUS o la utilidad de configuración del proveedor).
2. Introduzca d.plaspy.com como dominio del servidor principal o use 54.85.159.138 como IP del servidor si su herramienta de aprovisionamiento requiere una IP.
3. Configure el puerto del servidor en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP como transporte si el dispositivo solicita elegir uno.
5. Configure la APN y los parámetros de la SIM según su operador móvil y guarde esos ajustes en el dispositivo.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el G797 reporta a Plaspy comprobando la conectividad del dispositivo y los mensajes entrantes en la plataforma Plaspy o mediante las herramientas administrativas de Plaspy.

## Ejemplo de comandos de configuración

Los comandos y la sintaxis exacta para configurar el G797 dependen de la herramienta de aprovisionamiento del fabricante y del firmware. Cuando use GICUS, el aprovisionamiento por USB o la interfaz de configuración del proveedor, siga el formato de comandos de la herramienta para establecer servidor, puerto y campos de transporte. Como los comandos varían según el firmware y el software del proveedor, revise la guía de aprovisionamiento del G797 o la ayuda de la utilidad de configuración para la sintaxis exacta.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y la disponibilidad de funciones; confirme siempre la versión de firmware del dispositivo antes de aplicar los pasos de configuración.
- Elija UDP o TCP según las condiciones de red y la recomendación del proveedor; algunos operadores prefieren UDP por menor sobrecarga y otros usan TCP por entrega más fiable.
- Plaspy usa el puerto 8888 para todos los dispositivos y detecta los protocolos automáticamente, por lo que no es necesario crear puertos por dispositivo.
- Si su variante del G797 soporta SMS u otros reportes de reserva, use la documentación del fabricante para configurar los parámetros de SMS por separado de los ajustes TCP/UDP.
- Para dispositivos con variantes UMTS o LTE opcionales, asegúrese de aplicar la APN y el aprovisionamiento de SIM correctos para la red objetivo.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G797 con Plaspy ofrece una solución telemática compacta basada en OBDII que transmite ubicación GNSS, diagnósticos del vehículo y eventos de sensores a una plataforma unificada. Esta combinación ayuda a las organizaciones a mantener visibilidad en tiempo real de la flota, mejorar la respuesta ante incidentes mediante la reconstrucción de eventos e integrar la telemetría derivada del vehículo en flujos de trabajo de mantenimiento y análisis.

Learn more about Plaspy and platform features at https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer details for the G797, verify current guidance on the official Gosafe website https://gosafesystem.com/ and consult the device documentation before deployment.
