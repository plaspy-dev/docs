---
slug: /gosafe/g610/configuration
id: g610-configuration
sidebar_label: Configuration
title: Gosafe - G610 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Gosafe G610 y conectarlo a Plaspy con pasos prácticos y valores del servidor
keywords:
  - configuración Gosafe G610
  - instalación Gosafe G610
  - Gosafe G610 Plaspy
  - rastreador GPS Gosafe G610
  - configuración de servidor Gosafe G610
  - configuración de rastreo Gosafe G610
  - configuración rastreador GPS Plaspy
  - rastreo de flotas Gosafe G610
  - integración Gosafe G610
  - configuración telemática Gosafe G610
---

# Gosafe - Configuración del G610

Esta página describe el contexto de configuración pública para usar el rastreador Gosafe G610 con la plataforma Plaspy. Reúne los ajustes prácticos del lado de la plataforma y el flujo de trabajo necesario para apuntar un G610 a Plaspy y validar la conectividad. Utilice esta guía junto con las instrucciones del fabricante para los pasos específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguir la documentación del G610 o la herramienta de configuración mientras aplica los valores de servidor de Plaspy que se describen a continuación.

## Visión general de la configuración

Este proceso prepara el G610 para informar de forma fiable posiciones, eventos y telemetría a Plaspy, de modo que el dispositivo quede visible y sea manejable en la plataforma. El enfoque está en ingresar el endpoint de servidor correcto, asegurarse de que la selección de transporte coincida con el dispositivo y validar que el rastreador informe datos con éxito a Plaspy.

- Configure el endpoint del servidor del equipo para que envíe datos a Plaspy
- Seleccione el método de transporte requerido por el dispositivo (UDP o TCP) y utilice el puerto 8888
- Confirme la conectividad celular y cualquier detalle de APN o SIM necesario con el instalador
- Aplique y guarde los ajustes, luego reinicie el equipo si la herramienta o el firmware lo requiere
- Valide una sesión inicial de reporte para que el rastreador aparezca en Plaspy

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are both supported by Plaspy
- Plaspy automatically detects the tracker protocol and the same port is used for all devices supported by Plaspy

## Requisitos típicos antes de la configuración

- Un G610 alimentado y funcionando con acceso a la interfaz de configuración del dispositivo o a la herramienta del fabricante
- Una tarjeta SIM con datos activa y válida si se utilizará reporte por red celular
- Acceso del instalador a los métodos de configuración del G610, como el software del fabricante, la interfaz micro USB o comandos SMS (según la documentación del equipo)
- Conocimiento de cualquier ajuste APN requerido por el proveedor móvil para la SIM en uso
- Acceso administrativo a Plaspy (cuenta y aprovisionamiento) para que el dispositivo pueda asociarse y validarse en la plataforma
- Conectividad estable en la ubicación de instalación para permitir fijaciones de posición iniciales y el reporte

## Cómo se conecta este rastreador a Plaspy

El G610 envía fijaciones GNSS, notificaciones de eventos y telemetría al endpoint y puerto compartidos de Plaspy. Una vez configurado para reportar a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888 usando UDP o TCP, Plaspy ingiere los datos del dispositivo y los asocia a su cuenta.

- Informes periódicos de posición GNSS y mensajes de estado se reenvían a Plaspy
- Los informes de eventos como cambios de ignición, entradas y registros de choque se entregan a la plataforma
- La telemetría de sensores BLE y auxiliares se transmite según la configuración y queda visible en Plaspy
- El rastreador debe apuntarse al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- Plaspy usa detección automática de protocolo para reconocer el protocolo del rastreador después de que el dispositivo se conecte

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Gosafe o al software del fabricante (herramienta web del fabricante, herramienta USB o comandos SMS documentados).
2. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o como 54.85.159.138 en el campo servidor/host.
3. Configure el puerto del dispositivo en 8888 (Plaspy utiliza el mismo puerto para todos los equipos).
4. Elija el transporte UDP o TCP si la configuración del G610 requiere seleccionar un transporte.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
6. Reinicie el equipo si el firmware o la herramienta exige un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo informe a Plaspy comprobando el estado del equipo en la plataforma Plaspy y confirmando que se reciben mensajes entrantes.

## Ejemplos de comandos de configuración

El G610 admite múltiples métodos de configuración y herramientas del fabricante. Los comandos exactos y la sintaxis varían según la versión de firmware y la interfaz de configuración de Gosafe. Las herramientas típicas del fabricante le pedirán que establezca el host del servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, y que elija UDP o TCP si es necesario.

Si utiliza SMS o una configuración tipo línea de comandos provista por el fabricante, siga la documentación de Gosafe para el formato exacto del comando. Los comandos de texto precisos dependen del firmware del dispositivo y se proporcionan en el manual técnico del G610 o en la utilidad de configuración de Gosafe.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; siempre verifique los comandos contra el manual del G610 para su revisión de equipo.
- Si el equipo admite UDP y TCP, elija el transporte según la instalación y las necesidades de fiabilidad de la red; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Pueden estar disponibles métodos de configuración por SMS o por software; utilice el enfoque recomendado por el instalador o la herramienta del proveedor.
- Asegúrese de que los ajustes de APN y SIM estén correctos en el G610 para que el dispositivo pueda establecer una sesión IP y alcanzar d.plaspy.com o 54.85.159.138.
- Use FOTA con precaución para la gestión de firmware de flotas y siga las indicaciones de Gosafe para evitar actualizaciones incompatibles durante un despliegue.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G610 con Plaspy ofrece una vía fiable para ubicación en tiempo real, reporte de eventos y agregación de telemetría en flotas. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo simplifican la integración, de modo que los instaladores e integradores pueden concentrarse en el despliegue, la validación y el monitoreo operativo en lugar de la configuración de servidor por dispositivo.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device-specific setup details, firmware notes, and manufacturer commands consult the official Gosafe documentation at https://gosafesystem.com/ to verify current configuration methods and behavior.
