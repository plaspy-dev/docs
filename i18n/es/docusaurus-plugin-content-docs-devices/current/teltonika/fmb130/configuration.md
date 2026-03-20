---
slug: /teltonika/fmb130/configuration
id: fmb130-configuration
sidebar_label: Configuration
title: Teltonika - FMB130 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB130 y reportar a Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - configuración Teltonika FMB130
  - instalación FMB130 Teltonika
  - configuración FMB130 Plaspy
  - configuración rastreador GPS FMB130
  - configuración rastreador Teltonika
  - configuración rastreador GPS Plaspy
  - configuración rastreo de vehículos
  - configuración rastreador gestión de flotas
  - configuración Teltonika Configurator
  - configuración servidor FMB130
---

# Teltonika - Configuración del FMB130

Esta página ofrece contexto público de configuración para usar el Teltonika FMB130 con la plataforma de flotas Plaspy. Se centra en los ajustes públicos y compartidos de servidor que Plaspy requiere y en pasos prácticos que puede realizar con las herramientas del fabricante o comandos SMS para apuntar un dispositivo a Plaspy y habilitar el seguimiento en tiempo real y la ingesta de telemetría.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice. Esta página incluye un comando de ejemplo Teltonika setparam que demuestra cómo establecer marcadores de APN y el endpoint de Plaspy; úselo como referencia pública y verifique los detalles con la documentación de Teltonika y las notas de firmware de su dispositivo.

## Resumen de la configuración

El objetivo de la configuración es preparar el FMB130 para que envíe de forma fiable posiciones y telemetría a Plaspy y aparezca en su panel de flota. Esto incluye ajustar parámetros de conectividad, asignar el endpoint y puerto de Plaspy, y validar que el dispositivo reporta correctamente.

- Configure el APN y parámetros de red del dispositivo para que el rastreador tenga una conexión de datos funcional.
- Apunte el rastreador al dominio o IP del servidor Plaspy y establezca el puerto compartido que usa Plaspy.
- Elija el transporte (UDP o TCP) si el dispositivo requiere selección durante la configuración.
- Guarde y aplique la configuración, luego verifique que el dispositivo sea visible y esté reportando en Plaspy.
- Use herramientas del fabricante o comandos SMS cuando estén soportados para automatizar la configuración en despliegues masivos.

## Parámetros del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP as required by the device configuration
- Plaspy automáticamente detecta el protocolo del rastreador, por lo que todos los dispositivos usan el mismo puerto

## Requisitos habituales antes de la configuración

- Una unidad FMB130 alimentada e instalada o conectada a una fuente de alimentación de banco adecuada para la configuración inicial.
- Una tarjeta SIM celular válida provisionada para datos y con los ajustes APN correctos para su operador móvil.
- Acceso al método de configuración oficial de Teltonika que prefiera, como Teltonika Configurator, FOTA WEB o comandos SMS.
- Conocimiento de la versión de firmware del dispositivo y cualquier nota de la versión que afecte los IDs de parámetros o el comportamiento de configuración.
- Acceso a su cuenta Plaspy o a las instrucciones de incorporación para que usted pueda confirmar que el dispositivo es visible después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el FMB130 envía su posición y la telemetría disponible a Plaspy apuntando al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los mensajes y detecta automáticamente el protocolo del dispositivo para mostrar posiciones, datos CAN y telemetría de sensores en la plataforma.

- El dispositivo se configura para reportar al endpoint Plaspy d.plaspy.com (o la IP de Plaspy) en el puerto 8888.
- Los mensajes se transmiten sobre el transporte seleccionado, UDP o TCP, según la configuración del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo entrante, por lo que los dispositivos que llegan al mismo puerto se manejan de forma consistente.
- La telemetría enviada a Plaspy incluye posiciones GPS y cualquier parámetro adicional que el FMB130 suministre a la plataforma.
- Tras un reporte exitoso, el dispositivo se vuelve visible en Plaspy para monitoreo, alertas e informes históricos.

## Flujo de configuración habitual

1. Acceda al método o software de configuración oficial del fabricante, como Teltonika Configurator, Teltonika FOTA WEB o comandos SMS.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto en 8888 como el puerto compartido usado por Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección del transporte durante la configuración.
5. Configure el APN y las credenciales del operador usando marcadores como {{apn}}, {{apnu}} y {{apnp}} donde sea necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el dispositivo solicita un reinicio.
7. Valide que el dispositivo está reportando a Plaspy comprobando la lista de dispositivos o el feed de posiciones en vivo en su cuenta Plaspy.

## Ejemplo de comandos de configuración

El comando de ejemplo público de Teltonika para establecer parámetros principales puede usarse como SMS o mediante herramientas en muchos dispositivos Teltonika. Reemplace los marcadores de APN por los valores de su operador celular antes de enviarlo.

- Example Teltonika setparam command:
```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando:
- {{apn}} es la cadena APN de su operador móvil.
- {{apnu}} es el nombre de usuario del APN si su operador lo requiere; déjelo en blanco si no es necesario.
- {{apnp}} es la contraseña del APN si su operador la requiere; déjela en blanco si no es necesaria.
- 2004 configura el dominio del servidor a d.plaspy.com y 2005 establece el puerto en 8888.
- 2006 es un parámetro de dispositivo incluido en el ejemplo; consulte la documentación de parámetros de Teltonika para el mapeo exacto de los IDs numéricos a las opciones de configuración según su firmware.
- Este comando puede enviarse por SMS al dispositivo o aplicarse a través de Teltonika Configurator según la práctica de despliegue.

## Notas de configuración

- Los IDs de parámetros y la sintaxis exacta del comando pueden variar según la versión de firmware; confirme siempre los mapeos de parámetros para el firmware instalado.
- Teltonika Configurator y FOTA WEB ofrecen opciones de GUI y aprovisionamiento masivo que son más seguras para despliegues grandes que la edición individual por SMS.
- La configuración por SMS es soportada por muchas unidades Teltonika y se muestra aquí como ejemplo público, pero las herramientas remotas pueden ofrecer validación adicional antes de aplicar ajustes.
- Elija UDP o TCP según su entorno de red y las indicaciones del firmware de su dispositivo; Plaspy acepta ambos en el puerto 8888.
- Verifique siempre el reporte del dispositivo en Plaspy después de la configuración para confirmar conectividad y flujo correcto de telemetría.

## Por qué usar Plaspy con esta configuración

Usar el FMB130 con Plaspy ofrece a las organizaciones una vía práctica para consolidar la ubicación del vehículo, telemetría CAN y datos de sensores BLE en una sola plataforma de monitoreo. Los ajustes de servidor compartidos de Plaspy simplifican la incorporación de dispositivos porque se usa el mismo puerto para todos y Plaspy detecta automáticamente el protocolo del rastreador para agilizar el manejo de dispositivos.

To learn more about Plaspy and how to manage compatible devices visit https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and parameter mappings verify information on the manufacturer site https://www.teltonika-gps.com/
