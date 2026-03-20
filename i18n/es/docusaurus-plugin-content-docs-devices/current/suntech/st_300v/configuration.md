---
slug: /suntech/st_300v/configuration
id: st_300v-configuration
sidebar_label: Configuration
title: Suntech - ST 300V Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del Suntech ST 300V para funcionar con Plaspy, con ajustes de servidor, comandos SMS y notas de instalación
keywords:
  - Configuración Suntech ST 300V
  - Configuración de servidor Suntech ST 300V
  - Instalación Suntech ST 300V
  - ST 300V Plaspy
  - Configuración de rastreador GPS Suntech
  - Configuración de rastreador de vehículo
  - Configuración de rastreo para flotas
  - Guía de configuración Suntech
  - Configuración de rastreador en Plaspy
  - Configuración de plataforma GPS
---

# Suntech - Configuración del ST 300V

Esta página describe el contexto público de configuración para utilizar el rastreador Suntech ST 300V con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor, ejemplos de comandos SMS y el flujo de trabajo necesario para apuntar un dispositivo ST 300V a Plaspy, de modo que reporte posición y estado a su cuenta en Plaspy. Cuando es útil, los comandos SMS proporcionados por el fabricante se presentan en una versión depurada.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST 300V admite métodos de configuración por SMS y GPRS; los ejemplos a continuación muestran los comandos SMS más comunes y el registro del endpoint del servidor de Plaspy que permiten que el dispositivo sea visible en la plataforma.

## Resumen de la configuración

El objetivo de este proceso es preparar el ST 300V para que se comunique de forma fiable con Plaspy y validar que el dispositivo es visible en la plataforma. Para el ST 300V, eso normalmente implica calcular el ID del dispositivo a partir del IMEI, enviar los comandos SMS de configuración adecuados o usar la herramienta del fabricante, y confirmar que la telemetría llega a Plaspy.

- Calcule el ID del dispositivo a partir del IMEI del rastreador y úselo en comandos SMS o en la herramienta.
- Configure los ajustes GPRS del servidor del dispositivo para apuntar a Plaspy (servidor y puerto).
- Defina los intervalos de reporte y cualquier opción de transporte que requiera el dispositivo.
- Valide que el dispositivo se registre y envíe datos a Plaspy para que aparezca en la plataforma.
- Use el comando de verificación proporcionado para revisar la configuración del dispositivo tras la provisión.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP — el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo correcto.

## Requisitos típicos antes de la configuración

- Tener a la mano el IMEI del dispositivo para poder derivar el ID que usan los comandos Suntech
- Una tarjeta SIM operativa con datos habilitados y los ajustes APN correctos del operador móvil
- Acceso al dispositivo para configuración por SMS o acceso a la herramienta de configuración del fabricante
- Conexiones de alimentación y antena verificadas para que el dispositivo pueda registrarse en la red
- Credenciales o nombre de usuario y contraseña del APN si su operador las requiere (se mantienen marcadores de posición abajo)
- Acceso a su cuenta Plaspy para confirmar que el rastreador aparece después de la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el ST 300V envía datos de ubicación y de estado del dispositivo a Plaspy a través del canal de datos GPRS o mediante el método que soporte el equipo. El paso crítico es apuntar el rastreador al endpoint y puerto compartidos de Plaspy para que la plataforma pueda recibir e interpretar la telemetría.

- El rastreador se configura para reportar al endpoint y puerto de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El transporte puede ser UDP o TCP según la selección realizada durante la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse, por lo que no es necesario seleccionar el protocolo por dispositivo en la plataforma.
- Los intervalos de reporte controlan la frecuencia con la que el dispositivo envía actualizaciones a Plaspy.
- Una vez que el dispositivo envía datos al endpoint de Plaspy, aparece en la plataforma y puede ser monitoreado.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Suntech para el ST 300V — ya sea comandos SMS o el software/herramienta del proveedor descrito en la documentación de Suntech.
2. Derive el ID de dispositivo de Plaspy a partir del IMEI (ver sección de comandos). Use ese ID en los comandos SMS o en la herramienta.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor.
4. Configure el puerto a 8888 en la configuración de red del dispositivo.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte durante la configuración.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el fabricante lo solicita.
7. Valide que el dispositivo esté reportando a Plaspy y que las actualizaciones de posición sean visibles en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El ST 300V admite configuración por SMS. El fabricante proporciona comandos en esta forma; a continuación se presentan depurados para uso directo. El ID del dispositivo usado por los comandos Suntech son los 9 dígitos formados por las posiciones 6 a 14 del IMEI (es decir, los 9 dígitos centrales del IMEI de 15 dígitos, excluyendo el dígito final). Ejemplo: si el IMEI es 12345 678901234 5 entonces el ID del dispositivo es 678901234.

- Comando de reset (opcional para reinicio inicial)
```text
ST300CMD;[device_id];02;Reset
```
Marque este comando como opcional o úselo solo cuando sea necesario un reinicio de fábrica.

- Establecer APN del operador y servidor GPRS
Notas: El cuarto campo es 1 si se proporciona nombre de usuario o contraseña del APN, de lo contrario use 0. Conserve los marcadores [apn], [apnu] y [apnp] exactamente y reemplácelos por el APN, usuario y contraseña del operador según corresponda.
```text
ST300NTW;[device_id];02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;
```
Si no tiene usuario ni contraseña para su APN, ponga el cuarto campo en 0 y deje vacíos los campos de usuario y contraseña.

- Establecer intervalo de reporte a 60 segundos
```text
ST300RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

- Comprobar la configuración actual
```text
ST300CMD;[device_id];02;PresetA
```

Use un teléfono capaz de enviar SMS para remitir estos comandos al dispositivo o adáptelos para la herramienta de configuración del proveedor. Reemplace [device_id] por el ID de nueve dígitos derivado del IMEI y sustitutya los marcadores APN por los valores correctos del operador.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis o el comportamiento de los comandos; confirme la sintaxis con la documentación del Suntech ST 300V correspondiente a su firmware.
- El dispositivo admite tanto la configuración por SMS como por GPRS/servidor; use SMS cuando sea necesario el aprovisionamiento remoto o la herramienta del proveedor cuando esté disponible.
- Elija UDP o TCP según las necesidades de fiabilidad de su red; Plaspy acepta conexiones en ambos transportes y detectará el protocolo automáticamente.
- Asegúrese de introducir correctamente el APN y cualquier credencial del operador; el comando ST300NTW incluye los marcadores [apn], [apnu] y [apnp] para estos valores.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador cuando este se conecte.

## Por qué usar Plaspy con esta configuración

Configurar el Suntech ST 300V para reportar a Plaspy ofrece visibilidad centralizada y monitoreo de vehículos para operaciones de flota. El uso del endpoint compartido de Plaspy simplifica el aprovisionamiento de dispositivos porque se emplea un servidor y puerto consistentes entre los rastreadores compatibles, y la detección automática de protocolos de Plaspy reduce la necesidad de configurar el protocolo por dispositivo en la plataforma.

Learn more about Plaspy and how it supports GPS trackers like the Suntech ST 300V at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and detailed installation instructions, verify the official Suntech documentation at http://www.suntechint.com/ as manufacturer specifications and setup methods can change over time.
