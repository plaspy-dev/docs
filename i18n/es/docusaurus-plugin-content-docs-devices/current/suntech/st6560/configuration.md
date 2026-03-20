---
slug: /suntech/st6560/configuration
id: st6560-configuration
sidebar_label: Configuration
title: Suntech - ST6560 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST6560 con ajustes de servidor Plaspy y comandos SMS para conectar el rastreador
keywords:
  - Configuración Suntech ST6560
  - Instalación Suntech ST6560
  - ST6560 Plaspy
  - Configuración rastreador GPS OBD II
  - Configuración GPS Suntech
  - Ajustes de servidor ST6560
  - Configuración SMS rastreador Suntech
  - Configuración rastreador Plaspy
  - Configuración telemática vehicular
  - Rastreo de flotas ST6560
---

# Suntech - Configuración del ST6560

Esta página documenta el contexto público de configuración para usar el rastreador Suntech ST6560 con la plataforma Plaspy. Se enfoca en los ajustes prácticos del servidor, las condiciones previas que debe verificar y ejemplos públicos de comandos SMS para apuntar el ST6560 a Plaspy. Use este documento como referencia técnica para la instalación y verificación; está centrado en el endpoint del servidor Plaspy y en el flujo de configuración por SMS descrito en la documentación del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El ST6560 admite configuración por SMS según la guía pública y también puede ofrecer herramientas de proveedor o interfaces web; confirme el método exacto con la documentación de Suntech y el firmware de su unidad antes del despliegue final.

## Resumen de la configuración

El objetivo de configurar el ST6560 para Plaspy es apuntar el dispositivo al servidor de Plaspy, asegurar el APN y la conectividad correctos, definir un intervalo de reporte adecuado y validar que el rastreador aparezca en Plaspy. Para este modelo, el fabricante facilita plantillas de comandos SMS que establecen el APN del operador, el servidor GPRS y los intervalos de reporte.

- Configure el APN del operador y el servidor GPRS hacia el endpoint de Plaspy para que los datos de telemática se envíen a Plaspy.
- Establezca el intervalo de actualización del dispositivo para que la ubicación y la telemetría lleguen con la cadencia deseada.
- Verifique la identidad del dispositivo y su reporte mediante un comando de estado o consulta.
- Confirme la selección del transporte (UDP o TCP) si el equipo requiere elegir.
- Valide que el dispositivo sea visible en Plaspy tras aplicar los ajustes para garantizar que los datos fluyen correctamente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un ST6560 encendido y funcionando, instalado según las indicaciones de Suntech (enchufe OBD II o instalación recomendada por el proveedor).
- Una tarjeta SIM con plan de datos activo y capacidad de SMS si va a usar comandos SMS para la configuración.
- Información correcta del APN, usuario APN y contraseña APN proporcionada por su operador celular cuando sea necesario.
- Acceso al IMEI del dispositivo para poder derivar el ID del dispositivo usado en las plantillas SMS.
- Acceso al método oficial de configuración de Suntech o a las herramientas correspondientes para su revisión de firmware y hardware.
- Un vehículo de prueba, local o remoto, para validar el reporte en vivo a Plaspy después de aplicar la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ST6560 envía ubicación, diagnósticos y telemetría al endpoint y puerto compartidos de Plaspy para que Plaspy procese y muestre los datos del vehículo. El dispositivo está configurado para enviar paquetes al mismo puerto de Plaspy que usan todos los dispositivos compatibles, y Plaspy detectará el protocolo del rastreador de forma automática.

- El ST6560 envía ubicación y telemetría del vehículo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte se elige como UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos.
- Las actualizaciones regulares de posición y telemetría aparecen en los paneles de Plaspy para monitorización en tiempo real y revisión histórica.
- Los reportes de eventos como encendido, geocercas o alertas de fallas se entregan a Plaspy una vez que el dispositivo está registrado y reportando.
- Se pueden usar comandos de verificación o presets de estado para confirmar los ajustes del dispositivo antes de la validación final en Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Suntech para su ST6560 (comandos SMS, herramienta web del proveedor o app del fabricante) según lo documentado para su versión de firmware.
2. Identifique el IMEI del dispositivo y calcule el ID del dispositivo requerido por las plantillas SMS (ver Ejemplos de comandos de configuración).
3. Ingrese el servidor Plaspy por dominio o IP: d.plaspy.com o 54.85.159.138.
4. Configure el puerto 8888 como puerto de destino (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
5. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
6. Aplique o guarde la configuración en el equipo y reinicie la unidad si la guía del fabricante indica reinicio.
7. Valide que el ST6560 reporte a Plaspy revisando la actividad del dispositivo en Plaspy y empleando los comandos SMS de verificación disponibles.

## Ejemplos de comandos de configuración

El fabricante facilita plantillas de comandos SMS para el ST6560. El ID del dispositivo usado en estas plantillas son seis dígitos extraídos del IMEI según se describe a continuación. Mantenga los marcadores de posición tal como aparecen y reemplácelos por sus valores antes de enviar los SMS.

Guía para el ID del dispositivo
- El ID del dispositivo en las plantillas SMS son los últimos seis dígitos del IMEI excluyendo el dígito de verificación final. Por ejemplo, si el IMEI es 123456789012345, el ID usado en los comandos será 901234.

1) Configurar APN del operador y servidor GPRS
- Explicación de la plantilla: configura los campos de APN, usuario y contraseña de APN opcionales, y luego apunta a la IP y puerto del servidor Plaspy. El comando incluye una bandera que indica si se proporciona usuario o contraseña de APN (1 si se proporcionan, 0 si no).

Example template (replace placeholders before sending):
```
SA200NTW;[device_id];02;[auth_flag];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- [device_id] = seis dígitos derivados del IMEI como se explicó arriba.
- [auth_flag] = 1 si [apnu] o [apnp] están presentes; en caso contrario 0.
- [apn] = APN proporcionado por su operador móvil.
- [apnu] = usuario APN si el operador lo requiere (puede quedar en blanco).
- [apnp] = contraseña APN si el operador la requiere (puede quedar en blanco).

Example filled with the sample device id 901234 and no APN auth:
```
SA200NTW;901234;02;0;internet;; ;54.85.159.138;8888;;;;
```
(Ajuste el valor del APN e incluya usuario y contraseña APN cuando sea necesario.)

2) Establecer intervalo de reporte a 60 segundos
```
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```
- Esto configura los parámetros de reporte del dispositivo; reemplace [device_id] por su ID.

3) Verificar o consultar ajustes (preset query)
```
SA200CMD;[device_id];02;PresetA
```
- Use este comando para solicitar o confirmar presets desde el dispositivo.

Notas sobre el envío
- Envíe estos comandos como mensajes SMS desde un número autorizado si el dispositivo está configurado para aceptar configuración por SMS.
- Si su firmware o la herramienta del proveedor usa una sintaxis diferente, prefiera el método oficial Suntech provisto para su revisión de dispositivo.

## Notas de configuración

- La guía pública del ST6560 incluye comandos basados en SMS; según su firmware también puede disponer de herramientas del proveedor o una interfaz web. Use el método que coincida con su versión de firmware.
- La elección entre TCP y UDP puede afectar las características de entrega; Plaspy acepta ambos, pero seleccione el transporte que mejor se ajuste a su despliegue y al comportamiento del operador.
- La autenticación APN es opcional en la plantilla; ajuste la bandera auth a 1 cuando proporcione usuario o contraseña APN.
- Pueden existir pequeñas diferencias en la sintaxis de los comandos SMS y en los presets disponibles entre versiones de firmware y variantes regionales; confirme siempre con la documentación de Suntech correspondiente a su dispositivo.
- Verifique cuidadosamente el ID derivado del IMEI antes de enviar comandos para evitar configurar el equipo equivocado.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST6560 con Plaspy proporciona una solución compacta basada en OBD II que integra diagnósticos a nivel de motor y reporte de posición en una única plataforma. Configurar el ST6560 para enviar datos al endpoint compartido de Plaspy permite visibilidad en tiempo real, reproducción histórica y alertas para operaciones de flota donde la telemetría del motor y la precisión de la ubicación son importantes.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify current details with the manufacturer at http://www.suntechint.com/
