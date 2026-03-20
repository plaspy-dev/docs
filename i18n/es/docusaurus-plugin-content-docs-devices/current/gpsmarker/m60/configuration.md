---
slug: /gpsmarker/m60/configuration
id: m60-configuration
sidebar_label: Configuration
title: GPSMarker - M60 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GPSMarker M60 para Plaspy con ajustes de servidor y pasos prácticos de instalación
keywords:
  - configuración GPSMarker M60
  - instalación GPSMarker M60
  - configuración M60 Plaspy
  - configuración rastreador GPS
  - configuración rastreo de vehículos
  - configuración servidor Plaspy
  - configuración rastreador GPRS
  - rastreador con sensor de temperatura
  - gestión de flotas M60
  - guía de configuración GPSMarker
---

# GPSMarker - M60 Configuración

Esta página presenta la guía pública de configuración para usar el GPSMarker M60 con la plataforma Plaspy. Resume los ajustes de servidor y el flujo práctico de configuración necesarios para apuntar un M60 a Plaspy, de modo que los dispositivos sean visibles y reporten ubicación y datos de sensores. La información se centra en las indicaciones públicas de configuración y en los valores de conexión compartidos de Plaspy que deberá aplicar en el equipo o mediante las herramientas del fabricante.

Plaspy utiliza ajustes de servidor comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El M60 es un rastreador versátil con larga duración de batería, sensor de temperatura integrado, rutas de configuración por SMS o GPRS opcionales y compatibilidad con servidores de flota gratuitos; use esta página para alinear esas capacidades con los requisitos de conexión de Plaspy.

## Resumen de la configuración

Configurar el M60 para Plaspy prepara el dispositivo para enviar su posición y cualquier información de sensores compatibles a la plataforma Plaspy, de modo que usted pueda monitorear el equipo en la vista de flota. El objetivo es establecer un único endpoint y puerto compartidos en el rastreador, garantizar la conectividad de red y confirmar que Plaspy acepte y reconozca el protocolo del dispositivo automáticamente.

- Apunte el rastreador al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma
- Asegúrese de que el dispositivo tenga un canal de datos activo y los ajustes APN necesarios para GPRS
- Seleccione el tipo de transporte que soporte el equipo y guarde la configuración de red
- Valide que el M60 reporte ubicación y datos del sensor de temperatura a Plaspy
- Confirme la visibilidad y la identificación correcta del dispositivo dentro de Plaspy

## Ajustes de servidor de Plaspy

Use los siguientes ajustes de servidor de Plaspy al configurar el GPSMarker M60. Plaspy requiere estos valores públicos para enrutar correctamente los datos del dispositivo.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Todos los dispositivos en Plaspy usan el mismo puerto, así que configure el puerto 8888 en el equipo sin importar el modelo.

## Requisitos típicos antes de la configuración

- Una unidad M60 con batería suficiente o alimentación externa para la configuración y las pruebas iniciales
- Acceso al método de configuración oficial de GPSMarker o a las herramientas que provea el fabricante
- Una SIM con datos móviles y los ajustes APN correctos si va a usar el canal GPRS
- Cobertura de red en el área donde operará el dispositivo para que pueda establecer sesión de datos
- Saber si va a configurar vía la herramienta web del fabricante, software de escritorio, comandos SMS u otro método del proveedor
- Acceso a su cuenta de Plaspy o al administrador de la plataforma para confirmar el registro y la visibilidad del dispositivo

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el M60 enviará sus paquetes de rastreo al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos entrantes por el transporte seleccionado y detecta automáticamente el protocolo del rastreador para que el dispositivo aparezca y se actualice en la plataforma.

- El rastreador envía ubicación y datos de sensores disponibles a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Puede configurar el M60 para usar transporte UDP o TCP según la interfaz de configuración del equipo
- Plaspy inspecciona los paquetes entrantes y detecta automáticamente el protocolo correcto del M60
- Una vez conectado, el dispositivo se vuelve visible en Plaspy para monitoreo e informes de eventos
- Lecturas de sensores, como la temperatura, pueden reenviarse a Plaspy si están habilitadas en el dispositivo

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del GPSMarker proporcionado para el M60.
2. Verifique que el dispositivo tenga conectividad de red y, si es necesario, introduzca los ajustes APN correctos para la tarjeta SIM.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como endpoint.
4. Establezca el puerto del servidor en 8888.
5. Seleccione UDP o TCP si el equipo requiere elegir el tipo de transporte.
6. Aplique o guarde la configuración en el dispositivo o dentro de la herramienta del fabricante.
7. Reinicie el equipo si el método de configuración lo solicita.
8. Valide que el M60 reporte a Plaspy y aparezca en la plataforma con las actualizaciones esperadas de ubicación y sensores.

## Ejemplos de comandos de configuración

Los comandos exactos y su sintaxis dependen del firmware del GPSMarker M60 y de la herramienta de configuración del fabricante que esté utilizando. Algunas unidades M60 admiten configuración mediante software, interfaz web o comandos SMS, mientras que otras prefieren la aplicación del proveedor. Dado que las herramientas del fabricante difieren según el firmware y la región, consulte la documentación de GPSMarker para los formatos de comando exactos.

Si dispone de un método de configuración que acepta servidor, puerto y valores de transporte, use estos valores exactos para Plaspy:
- Server: d.plaspy.com (or 54.85.159.138)
- Port: 8888
- Transport: UDP or TCP

Ejemplo de campos APN cuando use una herramienta del fabricante:
- APN: introduzca el APN de su operador móvil tal como lo proporciona su proveedor
- APN username: rellene si su operador lo requiere
- APN password: rellene si su operador lo requiere

Si encuentra comandos públicos por SMS o CLI en la documentación de GPSMarker, aplique los valores de servidor y puerto indicados arriba y conserve los marcadores de posición que exija el fabricante.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comando y las opciones de configuración disponibles; siempre revise las notas de firmware del dispositivo.
- Plaspy soporta tanto UDP como TCP y detecta automáticamente el protocolo del rastreador, aunque seleccionar el transporte preferido por el equipo puede facilitar la resolución de problemas.
- Los dispositivos que permitan configuración sin SMS o mediante GPRS pueden ofrecer múltiples vías de instalación; elija la que mejor se adapte a su despliegue y experiencia del instalador.
- Dado que todos los dispositivos de Plaspy usan el mismo puerto, uniformar el puerto 8888 reduce los errores de configuración en flotas mixtas.
- La documentación del fabricante es la fuente autorizada para comandos específicos del dispositivo, procedimientos de reset y ajustes avanzados.

## Por qué usar Plaspy con esta configuración

Usar el GPSMarker M60 con Plaspy ofrece una manera directa de integrar un rastreador de larga autonomía y su sensor de temperatura en una vista operativa de flota. Apuntar el M60 a Plaspy con el endpoint y puerto compartidos permite a las organizaciones consolidar los datos de rastreo, monitorear ubicaciones de dispositivos y recibir actualizaciones de sensores desde una sola plataforma que reconoce automáticamente el protocolo del dispositivo.

Learn more about Plaspy and how it can consolidate tracking for mixed fleets at https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions, verify the current information on the GPSMarker website https://gpsmarker.ru/. Device specific configuration methods and firmware behavior can change over time so checking the manufacturer resources will ensure the most accurate setup steps.
