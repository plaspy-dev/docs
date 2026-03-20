---
slug: /condor/tp_810/configuration
id: tp_810-configuration
sidebar_label: Configuration
title: Condor - TP-810 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Condor TP-810 con ajustes de servidor Plaspy y comandos SMS para puesta en marcha y monitoreo GPS personal fiable
keywords:
  - Configuración Condor TP-810
  - Instalación Condor TP-810
  - Configuración TP-810 Plaspy
  - Configuración rastreador GPS Condor
  - Configuración rastreador GPS personal
  - Configuración servidor Plaspy
  - Configuración SMS rastreador
  - Configuración botón de pánico TP-810
  - Configuración rastreador GPS vestible
  - Compatibilidad Condor TP-810 con Plaspy
---

# Condor - Configuración TP-810

Esta página describe el contexto público de configuración necesario para usar el Condor TP-810 con Plaspy. Incluye los ajustes compartidos del servidor Plaspy, los pasos típicos de preparación y los comandos SMS públicos que aparecen en la documentación del dispositivo, para que pueda configurar el rastreador y reportar a Plaspy para monitoreo personal y alertas de pánico.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. La documentación del TP-810 incluye ejemplos de configuración por SMS; esta guía conserva esos comandos públicos y explica cómo aplicarlos para compatibilidad con Plaspy.

## Resumen de la configuración

Este proceso prepara el TP-810 para comunicarse con Plaspy configurando el acceso de red, el servidor de reporte y el comportamiento básico de reporte. El objetivo es asegurar que el rastreador pueda alcanzar Plaspy y enviar ubicaciones y eventos de pánico de forma confiable.

- Configure el APN y el modo GPRS para que el dispositivo pueda enviar datos a Plaspy.
- Apunte el rastreador a los ajustes del servidor Plaspy para que los paquetes de ubicación lleguen correctamente.
- Defina un identificador corto y la zona horaria para que el dispositivo se muestre correctamente en la plataforma.
- Habilite actualizaciones periódicas de posición y el flujo de trabajo de pánico para que las alertas aparezcan en Plaspy.
- Verifique que el dispositivo informe correctamente a Plaspy después de guardar la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte compatible: UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden reportar usando formatos soportados sin selección manual de protocolo

## Requisitos típicos antes de la configuración

- Un equipo TP-810 con batería cargada y una tarjeta SIM activa que tenga datos GPRS y capacidad de SMS según la documentación del dispositivo.  
- El IMEI del dispositivo disponible para identificación y cualquier identificador derivado del IMEI.  
- Datos del APN, nombre de usuario y contraseña del operador móvil para la conectividad de datos.  
- Acceso al método oficial de configuración de Condor, como comandos SMS o herramientas de configuración del proveedor.  
- Una cuenta en Plaspy y acceso a la plataforma para confirmar que el rastreador aparece tras la configuración.  
- Familiaridad básica con el envío de comandos SMS al rastreador o el uso de la utilidad de configuración del fabricante.

## Cómo se conecta este rastreador a Plaspy

El TP-810 puede configurarse para enviar datos de posición y eventos por GPRS al endpoint y puerto compartidos de Plaspy. Una vez configurado, las actualizaciones de posición y los eventos de pánico se reenvían a Plaspy, donde administradores y cuidadores pueden verlos y gestionarlos.

- El rastreador envía paquetes de ubicación al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- Plaspy detecta el protocolo del rastreador automáticamente e ingiere los mensajes reportados sin seleccionar el protocolo por dispositivo.  
- Los eventos del botón de pánico se transmiten a Plaspy y pueden desencadenar notificaciones y flujos de respuesta en la plataforma.  
- Los eventos de llamada de emergencia del dispositivo pueden registrarse en Plaspy como parte del historial de incidentes.  
- Los intervalos regulares de reporte permiten que Plaspy muestre la ubicación en vivo y el movimiento histórico para monitoreo y respuesta.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Condor para el TP-810, normalmente comandos basados en SMS o la herramienta de configuración del proveedor.  
2. Ingrese la dirección del servidor Plaspy especificando el dominio d.plaspy.com o la IP 54.85.159.138 según lo que soporte el dispositivo.  
3. Establezca el puerto del servidor en 8888 en la configuración del equipo.  
4. Elija UDP o TCP como transporte si el rastreador solicita selección de transporte durante la configuración.  
5. Guarde o aplique la configuración en el dispositivo y, si es necesario, reinicie el rastreador para activar los ajustes de red.  
6. Valide que el equipo informe a Plaspy comprobando el estado del dispositivo y la posición en vivo en su cuenta de Plaspy o usando el comando de verificación del dispositivo.  
7. Si el reporte falla, confirme los parámetros del APN, la asignación de datos de la SIM y que el firmware soporta la sintaxis de comandos utilizada.

## Comandos de configuración de ejemplo

La documentación del TP-810 ofrece una secuencia de configuración basada en SMS. La contraseña por defecto usada en estos ejemplos es 0000. Reemplace los marcadores y valores según se indica antes de enviar cada SMS.

- Configurar APN  
  Use este comando para establecer el APN del operador. Reemplace [apn] por el APN de su operador. Si su operador requiere usuario y contraseña, incluya [apnu] y [apnp] donde el dispositivo lo soporte.
  ```
  APN,0000,[apn]
  ```
  Opcional con usuario y contraseña:
  ```
  APN,0000,[apn],[apnu],[apnp]
  ```

- Establecer un identificador de 5 dígitos (alias)  
  Use los últimos 5 dígitos del IMEI del dispositivo como identificador. Reemplace 12345 con los últimos cinco dígitos reales del IMEI.
  ```
  ALIAS,0000,12345#
  ```
  Nota: Las instrucciones públicas del modelo indican usar los últimos cinco dígitos del IMEI. Sustituya el valor de ejemplo por los dígitos específicos de su equipo.

- Establecer la zona horaria a UTC 0
  ```
  GMT,0000,-0#
  ```

- Configurar el servidor GPRS a Plaspy (el ejemplo público usa la IP y el puerto de Plaspy)  
  Este comando configura el rastreador para reportar a la dirección IP del servidor Plaspy en el puerto 8888 usando el transporte indicado en el comando.
  ```
  SERVIDOR,0000,54.85.159.138,8888,U,A#
  ```
  Nota: Si su dispositivo acepta un nombre de dominio, d.plaspy.com se puede usar en lugar de la IP cuando el firmware del rastreador lo soporte.

- Establecer el intervalo de actualización a 1 minuto  
  ```
  INTERVALO,0000,M,6#
  ```

- Activar el modo GPRS
  ```
  GPRS,0000,A#
  ```

- Comprobar los ajustes de conexión actuales (verificación)
  ```
  CONEXION,0000#
  ```

Mantenga el orden de los comandos al inicializar el dispositivo para asegurar que los parámetros de conectividad y reporte se apliquen antes de habilitar los intervalos de reporte. La contraseña SMS por defecto 0000 aparece en cada ejemplo; si usted ha cambiado la contraseña del equipo, reemplace 0000 por la contraseña actual.

## Notas sobre la configuración

- La sintaxis de comandos SMS y los parámetros disponibles pueden variar según la revisión de firmware y las herramientas del proveedor, por lo que verifique los comandos con la documentación vigente del Condor TP-810.  
- Algunos rastreadores aceptan nombres de dominio y otros requieren una dirección IP en el comando de servidor. El ejemplo público usa la IP 54.85.159.138, pero d.plaspy.com también es el dominio canónico de Plaspy.  
- La elección entre TCP y UDP afecta el comportamiento del transporte; seleccione el que sea compatible con su red y dispositivo. Plaspy escucha en el puerto 8888 para ambos transportes.  
- APN, usuario y contraseña del APN son específicos del operador; conserve los marcadores [apn], [apnu] y [apnp] y reemplácelos por los valores de su operador.  
- La configuración por SMS es útil para despliegues en campo, pero confirme que el dispositivo tenga acceso suficiente a datos y SMS antes de depender del reporte por GPRS.

## Por qué usar Plaspy con esta configuración

Usar el Condor TP-810 con Plaspy ofrece una solución orientada a la seguridad personal donde la ubicación en vivo, las alertas de pánico y el registro sencillo de incidentes son fundamentales. Los ajustes compartidos del servidor Plaspy y la detección automática de protocolo simplifican la integración, permitiendo a los equipos desplegar rastreadores personales de forma rápida y ver eventos y ubicaciones de manera centralizada.

Learn more about Plaspy and supported device workflows at https://www.plaspy.com. Please verify the latest device specific setup details, firmware behavior, and command syntax on the manufacturer website https://condorskyseeker.com/ as manufacturer specifications and setup methods can change over time.
