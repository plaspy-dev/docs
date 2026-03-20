---
slug: /autoseeker/at_15/configuration
id: at_15-configuration
sidebar_label: Configuration
title: Autoseeker - AT-15 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Autoseeker AT-15 a Plaspy con ajustes de servidor y flujo de instalación
keywords:
  - configuración Autoseeker AT-15
  - instalación Autoseeker AT-15
  - configuración AT-15 Plaspy
  - configuración rastreador GPS Autoseeker
  - configuración servidor AT-15
  - configuración rastreador Plaspy
  - seguimiento de vehículos AT-15
  - configuración plataforma GPS AT-15
  - configuración de seguimiento Autoseeker
  - integración de dispositivos Plaspy
---

# Autoseeker - Configuración del AT-15

Esta página documenta el contexto público de configuración para utilizar el rastreador Autoseeker AT-15 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, describe el flujo típico de instalación y explica qué debe verificar antes de integrar el AT-15 para que el dispositivo informe ubicación y eventos a la plataforma Plaspy.

Plaspy utiliza un endpoint y un puerto comunes para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos del lado del fabricante para el AT-15 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; siga esta página para los valores específicos de Plaspy y consulte la documentación de Autoseeker para instrucciones propias del dispositivo.

## Resumen de la configuración

Configurar un Autoseeker AT-15 para Plaspy consiste en apuntar el rastreador al endpoint de Plaspy, confirmar transporte y puerto, y validar que el dispositivo sea visible en la plataforma. El objetivo es asegurar reportes confiables y regulares de ubicación y eventos de geocerca para que el dispositivo pueda gestionarse y monitorizarse desde Plaspy.

- Apunte el AT-15 al endpoint de Plaspy para que la telemetría se enrute a su cuenta Plaspy.
- Elija el transporte compatible (UDP o TCP) si la herramienta de configuración del equipo lo requiere.
- Configure el puerto común de Plaspy para que los datos del dispositivo lleguen al puerto de escucha de la plataforma.
- Guarde y aplique la configuración en el rastreador y confirme que puede autenticarse o identificarse ante la plataforma.
- Verifique la conectividad observando que el dispositivo aparezca y reporte en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el AT-15. Estos valores son el endpoint compartido que Plaspy requiere:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol when data arrives

Estos valores son los principales que debe ingresar en la herramienta de configuración del fabricante o en los comandos SMS al preparar el AT-15 para Plaspy.

## Requisitos habituales antes de la instalación

- El AT-15 está encendido y operativo con batería suficiente o alimentación externa conectada.
- Acceso al método de configuración oficial de Autoseeker o al software para el AT-15.
- Una cuenta Plaspy o credenciales de acceso donde se registrará o visualizará el dispositivo.
- Conexión de datos funcional en el dispositivo para que pueda transmitir al endpoint del servidor Plaspy.
- Identificador del dispositivo o IMEI disponible para confirmar el dispositivo en Plaspy tras la configuración.
- Acceso administrativo para guardar ajustes en el rastreador y reiniciar el dispositivo si es necesario.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AT-15 envía su posición e información de estado a un endpoint compartido de Plaspy. Plaspy recibe los datos en el puerto único usado para todos los dispositivos soportados y enruta los mensajes a la cuenta correcta mediante detección automática del protocolo.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com en el puerto 8888.
- Los eventos de entrada y salida de geocerca se envían al mismo endpoint de Plaspy para su procesamiento.
- Mensajes de estado o latidos se transmiten para que Plaspy pueda monitorizar la salud del dispositivo.
- Los datos de identificación del dispositivo acompañan la telemetría para que Plaspy asocie los mensajes con su cuenta y registro de dispositivo.
- El transporte puede ser UDP o TCP según la configuración del equipo; Plaspy acepta ambos y detecta el protocolo automáticamente.

## Flujo de configuración recomendado

Siga estos pasos prácticos al preparar el Autoseeker AT-15 para Plaspy:

1. Acceda al método de configuración oficial del Autoseeker AT-15 o al software del proveedor del dispositivo.
2. En la configuración del rastreador, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto en 8888 para que la telemetría se reciba en el puerto de escucha de Plaspy.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o en la interfaz del equipo.
6. Reinicie el dispositivo si la herramienta de configuración o las instrucciones del proveedor indican que es necesario para aplicar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando la llegada de datos y la visibilidad del equipo en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El método de configuración del AT-15 puede variar según el firmware y las herramientas del proveedor. Dado que no se incluyeron comandos específicos en el contenido público de modelConfiguration para esta página, no se listan aquí cadenas de comandos o sintaxis SMS concretas. En la práctica, utilizará una de las siguientes opciones según su cadena de herramientas:

- La aplicación de configuración Autoseeker o la herramienta para PC para establecer dominio del servidor o IP y puerto.
- Comandos de configuración vía SMS si el dispositivo soporta configuración por SMS (consulte la documentación de Autoseeker para la sintaxis exacta).
- Interfaz web o serial cuando el proveedor la incluya.

Si dispone de un conjunto público de comandos Autoseeker AT-15 de su proveedor o de una nota de versión de firmware, inclúyalos aquí siguiendo el manual del dispositivo. Mantenga los marcadores de posición como {{apn}} o similares exactamente como los proporcione el fabricante al usar esos comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de configuración y las opciones disponibles; confirme la versión de firmware de su equipo antes de aplicar ajustes.
- La elección entre UDP y TCP depende de sus necesidades de confiabilidad y del soporte del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, por lo que solo necesita configurar ese puerto para los AT-15 que se conecten a Plaspy.
- Verifique el identificador del dispositivo (IMEI) y cualquier mapeo de cuenta para que el rastreador aparezca en la cuenta Plaspy correcta tras la primera conexión.
- Siempre contraste los pasos de configuración con la documentación de Autoseeker para asegurar que la sintaxis y los procedimientos coincidan con el firmware de su dispositivo.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Autoseeker AT-15 ofrece un camino sencillo hacia la visibilidad centralizada y la monitorización operativa. Al dirigir el AT-15 al endpoint compartido de Plaspy, las organizaciones pueden recopilar actualizaciones de ubicación, monitorizar eventos de geocerca y mantener la información de estado de los dispositivos en una sola plataforma para la gestión de flotas y la seguridad operativa.

To learn more about Plaspy and how it can manage devices like the Autoseeker AT-15 visit https://www.plaspy.com. For the latest device specific setup methods, firmware notes, and manufacturer details, verify current documentation at https://autoseekergps.com/ as device behavior and configuration steps can change over time.
