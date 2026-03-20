---
slug: /skypatrol/sp3801/configuration
id: sp3801-configuration
sidebar_label: Configuration
title: SkyPatrol - SP3801 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el SkyPatrol SP3801 a Plaspy con ajustes de servidor y flujo de trabajo prácticos
keywords:
  - Configuración SkyPatrol SP3801
  - Configuración SP3801
  - Configuración servidor SP3801
  - Configuración rastreador GPS SP3801
  - Rastreador SkyPatrol Plaspy
  - Seguimiento de flotas SP3801
  - Instalación OBDII SkyPatrol
  - Configuración rastreador Plaspy
  - Rastreo de vehículos SP3801
  - Guía configuración rastreador GPS
---

# SkyPatrol - Configuración del SP3801

Esta página describe el contexto de configuración pública para usar el SkyPatrol SP3801 con Plaspy. Se centra en los ajustes prácticos del servidor y en el flujo de trabajo general que usted seguirá para apuntar un dispositivo SP3801 a Plaspy, de modo que pueda reportar ubicación y estado a la plataforma. Use esto como referencia técnica de los parámetros compartidos requeridos por Plaspy y como punto de partida para la configuración específica del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. El SkyPatrol SP3801 es un rastreador vehicular ultra compacto con un cable de conexión rápida OBDII opcional para instalaciones rápidas; siga el método de configuración del fabricante y luego aplique los ajustes de servidor compartidos de Plaspy que se describen a continuación.

## Resumen de la configuración

El objetivo de esta configuración es preparar el SP3801 para que se comunique de forma confiable con Plaspy y aparezca en su cuenta. Esto incluye apuntar el rastreador al servidor de Plaspy, elegir el transporte adecuado, guardar la configuración y validar la conectividad.

- Apunte el SP3801 al endpoint y puerto del servidor de Plaspy para que la telemetría llegue a la plataforma.
- Seleccione el transporte del dispositivo (UDP o TCP) si la configuración del SP3801 requiere elegir uno.
- Guarde y aplique los ajustes usando las herramientas o procedimientos de configuración de SkyPatrol.
- Verifique que el dispositivo esté en línea y enviando datos para que sea visible en Plaspy.
- Use el cable de conexión rápida OBDII opcional si está disponible para simplificar la alimentación e instalación.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos al configurar el SkyPatrol SP3801 para Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos que reporten a este endpoint

Estos valores son los ajustes compartidos del endpoint de Plaspy utilizados por todos los dispositivos compatibles con Plaspy.

## Requisitos típicos antes de la configuración

- Acceso físico al SP3801 y a los accesorios de instalación necesarios, como el cable de conexión rápida OBDII opcional.
- Una fuente de alimentación estable o conexión al vehículo para energizar el dispositivo durante la configuración.
- Acceso al método o software de configuración de SkyPatrol recomendado por el fabricante.
- Tener a mano los ajustes del servidor Plaspy (d.plaspy.com y puerto 8888) para ingresarlos en la interfaz del dispositivo.
- Capacidad para reiniciar el rastreador después de aplicar la configuración, si el dispositivo requiere un reinicio para activar los nuevos ajustes.
- Un método para validar que el rastreador está reportando, por ejemplo revisando el estado del dispositivo en Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el SP3801 envía su ubicación y el estado del dispositivo al endpoint compartido del servidor de Plaspy, de modo que el dispositivo sea visible en la vista de flota de Plaspy. El rastreador usa el transporte seleccionado y el puerto estandarizado de Plaspy para entregar la telemetría.

- El rastreador se configura para reportar al dominio compartido de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Todos los dispositivos reportan al mismo puerto de Plaspy, que es el puerto 8888.
- Puede elegir transporte UDP o TCP si la configuración del dispositivo exige seleccionar uno.
- Plaspy detecta e interpreta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido.
- Una vez que informa, Plaspy ofrece visibilidad, registros de eventos y actualizaciones de ubicación para el monitoreo operativo.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de SkyPatrol para el SP3801 (herramienta del fabricante, aplicación móvil o interfaz SMS según lo provea SkyPatrol).
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 en el campo correspondiente.
3. Configure el puerto del servidor en 8888 en la configuración del dispositivo.
4. Seleccione UDP o TCP si el SP3801 le exige elegir un transporte.
5. Aplique o guarde la configuración según las instrucciones de SkyPatrol.
6. Reinicie el dispositivo si el equipo o el firmware lo requieren para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy verificando el estado del equipo y los mensajes recientes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los comandos y procedimientos de configuración del SP3801 los proporciona SkyPatrol y pueden variar según el firmware y la herramienta del proveedor. No se incluyen comandos específicos públicos del SP3801 aquí. Use la interfaz de configuración de SkyPatrol para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, y seleccione UDP o TCP si fuera necesario. Si su herramienta de instalación suministra cadenas de comandos o plantillas SMS, siga la sintaxis del fabricante y confirme el reporte en Plaspy.

## Notas sobre la configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar los pasos exactos de configuración o la sintaxis de comandos compatibles; siempre consulte las notas de la versión del firmware.
- Si debe elegir entre UDP y TCP, seleccione el transporte que mejor se ajuste a sus requisitos de instalación; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Las prácticas de los instaladores varían según el mercado y el proveedor; utilice las herramientas recomendadas por SkyPatrol para el SP3801 siempre que sea posible.
- Guarde y documente la configuración aplicada a cada dispositivo para futuras tareas de soporte y auditoría.
- Consulte la documentación de SkyPatrol para comportamientos específicos del dispositivo como modos de suspensión, gestión de energía o reportes diagnósticos.

## Por qué usar Plaspy con esta configuración

Configurar el SkyPatrol SP3801 para reportar a Plaspy proporciona a las organizaciones visibilidad consistente de las ubicaciones de los vehículos y del estado operativo mediante un único endpoint compartido. La forma compacta del SP3801 y su cable OBDII de conexión rápida opcional lo convierten en una opción práctica para instalaciones discretas o de montaje rápido, mientras que Plaspy centraliza la telemetría y el reporte de eventos de múltiples dispositivos.

Learn more about Plaspy and how it supports fleet visibility by visiting https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer guidance, verify details on the SkyPatrol website https://www.skypatrol.com/.
