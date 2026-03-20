---
slug: /sinotrack/st_902a/configuration
id: st_902a-configuration
sidebar_label: Configuration
title: SinoTrack - ST-902A Configuration
sidebar_class_name: menu_item_tracker
description: Configure el SinoTrack ST-902A para usar con Plaspy mediante comandos SMS y ajustes de servidor compartido para despliegues OBD rápidos
keywords:
  - Configuración SinoTrack ST-902A
  - Guía de configuración ST-902A
  - Configuración rastreador GPS SinoTrack
  - Configuración servidor ST-902A
  - Configuración SMS ST-902A
  - Configuración de rastreador Plaspy
  - Configuración rastreador compatible con Plaspy
  - Configuración GPS OBD II
  - Configuración GPRS ST-902A
  - Configuración plataforma de rastreo de vehículos
---

# SinoTrack - ST-902A Configuration

Esta página describe el contexto público de configuración para usar el rastreador SinoTrack ST-902A con Plaspy. Reúne los pasos y comandos públicos que puede usar para apuntar un ST-902A al servidor de Plaspy, de modo que el dispositivo reporte posición, movimiento y eventos de alarma para seguimiento en tiempo real, alertas e historial.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST-902A admite reporte por GPRS y configuración por SMS, por lo que puede usar comandos SMS para establecer el APN, la dirección del servidor, el transporte y los intervalos de reporte para conectar el dispositivo a Plaspy.

## Resumen de configuración

El objetivo de la configuración es preparar el ST-902A para comunicarse de forma fiable con Plaspy, validar la conectividad desde el vehículo y habilitar la visibilidad del dispositivo en la plataforma. En los ST-902A esto suele implicar usar SMS para establecer el APN, el endpoint del servidor, los intervalos de reporte y el modo GPRS para que los paquetes lleguen a Plaspy.

- Apunte el rastreador al endpoint del servidor de Plaspy para que la telemetría llegue a su cuenta.
- Configure los ajustes APN del operador móvil para que el rastreador pueda iniciar sesiones de datos GPRS.
- Defina los intervalos de reporte y el modo operativo para que el dispositivo envíe actualizaciones regulares.
- Valide la configuración con una consulta de ajustes y confirme que el dispositivo aparece en Plaspy.
- Opcionalmente, restaure los valores de fábrica antes de despliegues masivos para asegurar una base conocida.

## Ajustes del servidor Plaspy

Al configurar el ST-902A para Plaspy, utilice los siguientes ajustes públicos de servidor. Plaspy usa un único puerto compartido para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de comenzar

- Un ST-902A alimentado y conectado al puerto OBD II del vehículo o alimentado para configuración.
- Una tarjeta SIM activa con datos habilitados y el APN correcto para el operador móvil.
- Capacidad para enviar SMS desde un número autorizado por el dispositivo para aceptar comandos de configuración.
- Acceso al conjunto de comandos SMS del fabricante o a la herramienta oficial de configuración de SinoTrack.
- Un lugar donde confirmar la aparición del dispositivo en Plaspy después de la configuración, por ejemplo una cuenta con registro de dispositivos preparado.

## Cómo se conecta este rastreador a Plaspy

El ST-902A se configura para reportar al endpoint y puerto compartido de Plaspy mediante GPRS. Una vez definidos el APN y los parámetros del servidor, el rastreador abre la conexión de datos y envía los paquetes de telemetría al endpoint de Plaspy, donde la plataforma ingiere la posición y los eventos.

- El dispositivo envía la ubicación GPS y la telemetría de alarmas al servidor Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy acepta conexiones por UDP o TCP y detectará automáticamente el protocolo del ST-902A.
- Los intervalos de reporte controlan la frecuencia con la que el ST-902A envía actualizaciones al endpoint de Plaspy.
- Eventos como golpes, exceso de velocidad o batería baja se envían como mensajes al mismo servidor de Plaspy y aparecen en la plataforma.
- El SMS está disponible como canal de configuración y como método de respaldo separado del reporte por GPRS.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante, como comandos SMS de SinoTrack o herramientas del proveedor, para preparar el dispositivo para cambios de servidor.
2. Ingrese el servidor de Plaspy mediante el dominio d.plaspy.com o la IP 54.85.159.138 según soporte del comando.
3. Establezca el puerto del servidor en 8888; recuerde que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y guarde ese ajuste.
5. Configure el APN para la SIM instalada para que el dispositivo pueda establecer una sesión de datos GPRS.
6. Aplique o guarde la configuración y cambie el dispositivo a modo GPRS si es necesario.
7. Reinicie el dispositivo si el rastreador lo requiere para aplicar los ajustes.
8. Valide la conectividad enviando una consulta de configuración y confirmando que el dispositivo reporta a Plaspy en su cuenta.

## Comandos de ejemplo para configuración

El ST-902A admite configuración por SMS. A continuación están los comandos SMS públicos documentados para este modelo según la guía del fabricante. Preserve los marcadores de posición tal como aparecen. Envíe cada comando como un mensaje de texto desde un número autorizado al rastreador.

- Paso opcional inicial para restaurar valores de fábrica al preparar un dispositivo para redeploy:
```text
RESET
```

- Ajustar la zona horaria a UTC 0 (comando de ejemplo del fabricante):
```text
8960000E00
```

- Configurar el APN del operador. Reemplace los marcadores de posición con los valores del operador:
```text
8030000 [apn] [apnu] [apnp]
```
Explicación de los marcadores:
- [apn] es el nombre del APN proporcionado por el operador móvil.
- [apnu] es el nombre de usuario del APN si es requerido, de lo contrario dejar en blanco.
- [apnp] es la contraseña del APN si es requerida, de lo contrario dejar en blanco.

- Configurar el servidor GPRS para apuntar el rastreador a Plaspy por IP y puerto:
```text
8040000 54.85.159.138 8888
```
Este comando establece que el dispositivo reporte al IP y puerto de Plaspy. También puede usar el dominio d.plaspy.com si el dispositivo soporta entradas por dominio; Plaspy acepta conexiones por dominio o IP.

- Establecer intervalo de reporte cuando el dispositivo está encendido (ejemplo 60 segundos):
```text
8050000 60
```

- Establecer intervalo de reporte cuando el dispositivo está apagado o en estado de ignición apagada (ejemplo 60 segundos):
```text
8090000 60
```

- Cambiar el dispositivo a modo GPRS para que use reporte por datos:
```text
7100000
```

- Verificar la configuración actual del dispositivo con el comando de consulta RCONF:
```text
RCONF
```
RCONF devuelve los ajustes actuales, incluyendo el ID usado para registrar el dispositivo con plataformas de rastreo.

Siga el orden de comandos según corresponda. Use RESET como paso inicial opcional únicamente cuando prepare dispositivos para una configuración limpia o para resolución de problemas.

## Notas de configuración

- La configuración por SMS es compatible y se usa con frecuencia en dispositivos ST-902A; asegúrese de que el número remitente esté autorizado por el rastreador.
- Algunos dispositivos aceptan nombres de dominio como d.plaspy.com; otros requieren la IP del servidor. Los comandos de ejemplo usan la IP pública de Plaspy 54.85.159.138 y el puerto 8888.
- Plaspy acepta tanto UDP como TCP en el puerto 8888 y realiza detección automática de protocolo, pero elija el transporte que requieran sus herramientas de flota y confirme que el firmware del dispositivo lo soporta.
- Los intervalos de reporte y el comportamiento pueden variar según la versión de firmware; confirme la sintaxis exacta de los comandos para su firmware antes de desplegar en masa.
- Mantenga la documentación del fabricante a mano para cualquier limitación específica del dispositivo, formatos de comandos SMS y notas de firmware.

## Por qué usar Plaspy con esta configuración

Configurar el SinoTrack ST-902A para reportar a Plaspy ofrece a gerentes de flota y operadores una forma rápida y de baja fricción para obtener visibilidad de vehículos usando un conector OBD y configuración vía SMS. Los comandos SMS y el reporte por GPRS del ST-902A facilitan establecer el APN y los ajustes de servidor en sitio para que los dispositivos comiencen a enviar datos de posición, alarma y movimiento a Plaspy para supervisión y análisis histórico.

Learn more about Plaspy and how it handles device ingestion, alerts, and history at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer details always verify setup and command syntax with the official SinoTrack documentation at https://www.sinotrackgps.com/ before deploying at scale.
