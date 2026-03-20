---
slug: /suntech/st4345lb/configuration
id: st4345lb-configuration
sidebar_label: Configuration
title: Suntech - ST4345LB Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Suntech ST4345LB con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración Suntech ST4345LB
  - Instalación Suntech ST4345LB
  - ST4345LB en Plaspy
  - Configuración rastreador GPS Suntech
  - Ajustes de servidor ST4345LB
  - Guía de instalación rastreador Suntech
  - Configuración seguimiento de flotas
  - Comandos SMS rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración de dispositivo Plaspy
---

# Suntech - Configuración del ST4345LB

Esta página documenta el contexto público de configuración para utilizar el rastreador GPS Suntech ST4345LB con Plaspy. Reúne los ajustes de servidor de Plaspy a los que debe apuntar el dispositivo, explica el flujo general de configuración e incluye los comandos SMS públicos que usa este modelo para ajustar la red y los parámetros de reporte. Use esta guía para preparar el rastreador para la integración con Plaspy y validar la conectividad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan. Los pasos de configuración del fabricante para el ST4345LB pueden variar según el firmware, la revisión de hardware, el método del instalador y las herramientas del proveedor. La configuración pública del ST4345LB mostrada aquí incluye un patrón de configuración por SMS y un ID de dispositivo derivado del IMEI según la guía pública oficial.

## Resumen de la configuración

Este proceso prepara el ST4345LB para enviar datos de ubicación, sensores y eventos a Plaspy, de modo que el dispositivo aparezca en su cuenta y transmita telemetría de forma fiable. Las acciones públicas más habituales incluyen ajustar el APN de la SIM y el endpoint del servidor, seleccionar un intervalo de reporte y verificar que el dispositivo informe correctamente a Plaspy.

- Configure el APN y los parámetros GPRS para que el dispositivo tenga acceso a datos móviles.
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy para que la telemetría se enrute correctamente.
- Establezca un intervalo de reporte periódico que controle la frecuencia de subida de ubicaciones y eventos.
- Verifique la identificación del dispositivo usando el ID derivado del IMEI requerido por los comandos SMS del ST4345LB.
- Confirme que el dispositivo reporte satisfactoriamente a Plaspy y aparezca en la plataforma.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que el endpoint arriba indicado es el destino público de Plaspy para dispositivos ST4345LB.

## Requisitos habituales antes de la configuración

- Una tarjeta SIM válida con plan de datos y los valores APN correctos para su operador móvil.
- El rastreador con alimentación y accesible para configuración, o un instalador que pueda enviar comandos SMS al dispositivo.
- El número IMEI del dispositivo para poder derivar el ID de dispositivo requerido por los comandos SMS del ST4345LB.
- Acceso al método de configuración del fabricante para este modelo, ya sea mediante SMS o software del proveedor.
- Conocimientos básicos sobre si el dispositivo debe usar transporte UDP o TCP al enviar datos a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El ST4345LB se configura para reportar al endpoint compartido y puerto de Plaspy, de modo que Plaspy ingiere telemetría y eventos para el seguimiento en tiempo real, alertas e informes históricos. Una vez configurado con el APN y los ajustes de servidor correctos, el dispositivo iniciará conexiones y enviará actualizaciones periódicas al endpoint de Plaspy.

- El rastreador envía actualizaciones periódicas de ubicación al servidor Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La selección de transporte puede ser UDP o TCP según el firmware del rastreador o la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al puerto compartido.
- Los datos de sensores BLE, eventos y análisis en el dispositivo se reenvían como parte de la telemetría cuando están habilitados y son compatibles.
- La visibilidad en Plaspy permite monitoreo en tiempo real, alertas e informes de posiciones históricas.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Suntech para el ST4345LB, normalmente los comandos SMS documentados o la herramienta de configuración del proveedor.
2. Determine el ID de dispositivo a partir del IMEI y prepare sus credenciales APN para la SIM que vaya a usar.
3. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 según el formato de comando que utilice.
4. Establezca el puerto en 8888 y elija UDP o TCP si el rastreador requiere la selección explícita del transporte.
5. Envíe el comando de configuración del APN y servidor y luego el comando de intervalo de reporte según sea necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si el flujo del fabricante lo recomienda.
7. Valide que el dispositivo reporte a Plaspy y aparezca como activo en la plataforma.

## Comandos de configuración de ejemplo

El ST4345LB ofrece un patrón de configuración público basado en SMS. El dispositivo requiere un ID de dispositivo derivado del IMEI. El ID de dispositivo son los seis dígitos inmediatamente antes del último dígito del IMEI. Por ejemplo, dado un IMEI 123456789012345 el ID de dispositivo es 901234 (los seis dígitos antes del dígito final 5).

Notas importantes sobre los marcadores
- {{apn}} es el nombre APN del operador móvil.
- {{apnu}} es el nombre de usuario del APN si lo requiere el operador.
- {{apnp}} es la contraseña del APN si lo requiere el operador.
- Reemplace [deviceID] con el ID de seis dígitos derivado del IMEI como se explicó arriba.
- La bandera de autenticación net en el comando APN debe ser 1 cuando suministre {{apnu}} o {{apnp}} y 0 cuando no se use usuario o contraseña de APN.

1. Configure el APN del operador y el servidor GPRS de Plaspy
```text
SA200NTW;[deviceID];02;[authFlag];{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- Reemplace [deviceID] con el ID de dispositivo de seis dígitos.
- Reemplace [authFlag] con 1 si proporciona usuario o contraseña APN, de lo contrario 0.
- Este comando apunta el dispositivo a la IP del servidor Plaspy 54.85.159.138 y al puerto 8888. Alternativamente puede enviar d.plaspy.com en formatos de comando que acepten nombres de dominio.

2. Establezca el intervalo de actualización a 60 segundos
```text
SA200RPT;[deviceID];02;60;60;60;3;0;0;0;0;0
```
- Este ejemplo público establece varios campos de intervalo de reporte a 60 segundos tal como aparece en la guía original del fabricante.

3. Verifique los ajustes preestablecidos del dispositivo
```text
SA200CMD;[deviceID];02;PresetA
```
- Use este comando para solicitar los valores actuales de configuración preestablecidos al dispositivo.

Conserve el orden anterior al seguir la guía pública del fabricante. Si su herramienta de instalación acepta nombres de dominio en lugar de direcciones IP, puede usar d.plaspy.com donde corresponda. Todos los dispositivos en Plaspy usan el puerto 8888, así que asegúrese de que el parámetro de puerto esté configurado correctamente.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comando o el orden de los parámetros; confirme siempre la sintaxis exacta para el firmware de su dispositivo.
- El ST4345LB soporta configuración por SMS como se muestra en la guía pública, pero también pueden existir software del proveedor o herramientas de gestión remota para aprovisionamiento masivo.
- Elija UDP o TCP según la preferencia del instalador y la confiabilidad de la red; Plaspy admite ambos y detecta automáticamente el protocolo del rastreador.
- Verifique las credenciales APN con su operador móvil antes de configurar el dispositivo para evitar problemas de conectividad.
- Tras aplicar la configuración, puede ser necesario reiniciar el dispositivo para que los cambios surtan efecto y para que establezca una nueva sesión con el servidor Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el ST4345LB con Plaspy ofrece a los equipos operativos visibilidad centralizada de la posición del vehículo, datos de sensores y análisis de eventos. Apuntar el rastreador al endpoint compartido de Plaspy simplifica la ingesta de telemetría y habilita monitoreo en tiempo real, alertas e informes en flotas mixtas y activos distribuidos.

Learn more about Plaspy at https://www.plaspy.com and verify device specific setup details and the latest command syntax on the official Suntech site http://www.suntechint.com/. Manufacturer configuration methods, firmware behavior and parameter formats can change over time so confirm the most current information on the manufacturer website.
