---
slug: /suntech/st_215/configuration
id: st_215-configuration
sidebar_label: Configuration
title: Suntech - ST 215 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Suntech ST 215 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración Suntech ST 215
  - Configuración ST 215
  - Configuración de servidor Suntech ST 215
  - Configuración ST 215 Plaspy
  - Configuración de rastreador GPS ST215
  - Configuración de rastreador de vehículo Plaspy
  - Configuración de plataforma GPS Suntech
  - Ajustes APN del rastreador SMS
  - Ajustes de servidor GPRS para rastreadores
  - Configuración de dispositivo de rastreo de flota
---

# Suntech - Configuración del ST 215

Esta página describe el contexto público de configuración para usar el rastreador Suntech ST 215 con la plataforma Plaspy. Reúne los ajustes de servidor de Plaspy y los patrones de configuración por SMS proporcionados públicamente por el fabricante, de modo que usted pueda preparar el dispositivo para reportar a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas de configuración del proveedor. El ST 215 admite GPRS, TCP, UDP y configuración por SMS; los comandos de ejemplo que aparecen más abajo reflejan las plantillas SMS públicas para este modelo.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el ST 215 para que envíe de forma fiable datos de ubicación y eventos a Plaspy usando el endpoint y puerto compartidos de la plataforma. Para los dispositivos ST 215, el fabricante proporciona plantillas de configuración por SMS que establecen el APN, el servidor GPRS y los intervalos de reporte; estas plantillas se usan frecuentemente en instalaciones de campo.

- Configure el APN y el servidor GPRS del dispositivo para que pueda abrir una conexión de datos hacia Plaspy.
- Asegúrese de que el dispositivo apunte al endpoint del servidor de Plaspy para que los reportes lleguen a la plataforma.
- Defina un intervalo de reporte adecuado para que las posiciones del vehículo aparezcan con la frecuencia esperada.
- Valide la configuración con el comando SMS de verificación y confirme que el dispositivo aparece en Plaspy.
- Utilice el IMEI del dispositivo para derivar el ID de dispositivo requerido por las plantillas SMS del fabricante.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Nota: Plaspy usa el mismo puerto para todos los dispositivos compatibles y depende de la detección automática de protocolo, por lo que solo necesita apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 usando el puerto 8888 y seleccionar UDP o TCP si el dispositivo solicita elegir un transporte.

## Requisitos típicos antes de la configuración

- Un dispositivo ST 215 en funcionamiento con IMEI válido y acceso al dispositivo para configurarlo.
- Una tarjeta SIM con servicio de datos móviles y los ajustes APN correctos para el operador.
- Usuario y contraseña del APN si su operador requiere autenticación (se mantienen los marcadores de posición a continuación).
- Capacidad para enviar comandos SMS al dispositivo para la configuración vía SMS, o disponer de la herramienta de configuración del fabricante si está disponible.
- El dispositivo debe estar encendido y con visibilidad GPS/GSM según lo requiera la prueba inicial.
- El número IMEI para calcular el ID de dispositivo usado en las plantillas SMS del fabricante.

## Cómo se conecta este rastreador a Plaspy

El ST 215 se configura para reportar posición y eventos a Plaspy apuntando su endpoint GPRS (TCP/UDP) al servidor de Plaspy y usando el puerto compartido. Una vez configurado, el dispositivo abrirá una conexión con Plaspy y comenzará a enviar reportes de ubicación y mensajes de estado según sus reglas de reporte.

- El dispositivo reporta al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- Elija el transporte UDP o TCP en el dispositivo si el ST 215 requiere una selección explícita.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que no es necesario seleccionar un protocolo en la plataforma.
- El ST 215 puede enviar actualizaciones basadas en tiempo, distancia o cambio de ángulo según sus reglas de reporte configuradas.
- Para validar una conexión exitosa, confirme que el dispositivo aparece y reporta en Plaspy después de la configuración.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Suntech para el ST 215 — comúnmente plantillas SMS o la herramienta del proveedor — y confirme que su firmware soporta los comandos SMS indicados aquí.
2. Identifique el IMEI del dispositivo y derive el ID de dispositivo requerido por las plantillas SMS de Suntech (ver ejemplo más abajo).
3. Ingrese d.plaspy.com o 54.85.159.138 como servidor en la configuración del dispositivo.
4. Configure el puerto en 8888 y seleccione UDP o TCP si el dispositivo le solicita elegir un transporte.
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos SMS necesarios si utiliza la configuración por SMS.
6. Reinicie el dispositivo si las instrucciones del fabricante especifican un reinicio tras la configuración.
7. Valide que el dispositivo reporta correctamente a Plaspy y que aparece en la plataforma con las actualizaciones de posición esperadas.

## Comandos de configuración de ejemplo

El fabricante del ST 215 proporciona comandos SMS para establecer parámetros de red y reporte. Use estas plantillas con el ID de dispositivo derivado del IMEI. El ID del dispositivo son seis dígitos del IMEI empezando en la posición 9 y terminando en la posición 14 (a menudo descrito como los seis dígitos antes del dígito de verificación del IMEI). Ejemplo: IMEI 123456789012345 -> ID de dispositivo 901234.

1) Establecer el APN del operador y el servidor GPRS
- Propósito: configurar el APN de red y apuntar el dispositivo a la IP y puerto de servidor de Plaspy.
- Nota: El cuarto campo en el comando es una bandera de autenticación APN. Use 1 si va a proporcionar usuario o contraseña del APN; use 0 si no.

Command template:
```
SA200NTW;<device_id>;02;<apn_auth_flag>;<apn>;<apn_user>;<apn_pass>;54.85.159.138;8888;;;;
```
Placeholders:
- <device_id> — ID de dispositivo de seis dígitos derivado del IMEI (dígitos 9 a 14).
- <apn_auth_flag> — 1 si existe usuario o contraseña del APN, de lo contrario 0.
- <apn> — reemplace con el APN de su operador (conserve el marcador {{apn}} si lo prefiere).
- <apn_user> — reemplace con el usuario del APN o use {{apnu}} como marcador.
- <apn_pass> — reemplace con la contraseña del APN o use {{apnp}} como marcador.

2) Establecer el intervalo de reporte a 60 segundos
- Propósito: configurar la cadencia periódica de reporte usada por el dispositivo.

Command template:
```
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```

3) Verificar o consultar la configuración actual preestablecida
- Propósito: solicitar la configuración PresetA para confirmar los ajustes.

Command template:
```
SA200CMD;<device_id>;02;PresetA
```

Mantenga los comandos en el orden anterior al realizar la configuración inicial: primero red y servidor, luego intervalo de reporte y por último verificación. Envíe los mensajes SMS desde un número autorizado según las instrucciones de Suntech para el ST 215.

## Notas de configuración

- La configuración por SMS es un método común para los ST 215, pero confirme el método soportado por su hardware y firmware antes de proceder.
- Algunas versiones de firmware pueden requerir formatos de comando ligeramente diferentes o parámetros adicionales; pruebe siempre primero en un solo dispositivo.
- Elija UDP o TCP en el dispositivo según sea necesario; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y realiza detección automática de protocolo en las conexiones entrantes.
- El cálculo correcto del <device_id> a partir del IMEI es esencial para que los comandos SMS del fabricante surtan efecto.
- Tenga a la mano las credenciales APN y use la bandera de autenticación APN (1 o 0) de forma apropiada al enviar el comando SA200NTW.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Suntech ST 215 ofrece a las organizaciones una vía sencilla para poner en línea dispositivos ST 215 con un endpoint y puerto de servidor compartidos y conocidos. Las opciones de reporte flexibles del ST 215, combinadas con la detección automática de protocolo de Plaspy, ayudan a reducir la complejidad de configuración y a que los dispositivos comiencen a reportar más rápido para el seguimiento de flotas y la visibilidad operativa.

To learn more about Plaspy and supported configuration practices visit https://www.plaspy.com. Please verify device-specific setup details, firmware behavior, and manufacturer instructions on the Suntech website at http://www.suntechint.com/ since manufacturer configuration methods and command formats can change over time.
