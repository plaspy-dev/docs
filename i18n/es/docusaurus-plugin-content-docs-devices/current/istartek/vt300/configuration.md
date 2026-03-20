---
slug: /istartek/vt300/configuration
id: vt300-configuration
sidebar_label: Configuration
title: iStartek - VT300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía paso a paso para configurar iStartek VT300 y usarlo con el servidor Plaspy
keywords:
  - configuración iStartek VT300
  - configuración VT300
  - iStartek rastreador Plaspy
  - configuración servidor VT300
  - configuración rastreador GPS VT300
  - configuración rastreo vehicular
  - ajustes servidor rastreador
  - configuración plataforma GPS
  - configuración APN VT300
  - comandos SMS VT300
---

# iStartek - VT300 Configuración

Esta página documenta el contexto público de configuración para utilizar el rastreador iStartek VT300 con la plataforma Plaspy. Consolida los ajustes de servidor más relevantes y los pasos prácticos que se usan comúnmente para que el VT300 reporte a Plaspy, basándose en los comandos de configuración públicos del dispositivo y en las notas del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; cuando están disponibles, en esta página se incluyen los comandos SMS de configuración del VT300 que se suelen emplear en campo.

## Resumen de configuración

Configurar el VT300 para Plaspy prepara el equipo para transmitir de forma fiable datos de ubicación y eventos a un único endpoint y puerto de Plaspy utilizado por todos los dispositivos soportados. Las tareas prácticas que normalmente se realizan durante la configuración para asegurar que el rastreador sea visible y reporte correctamente en Plaspy incluyen:

- Definir parámetros de red del dispositivo como el APN para que el rastreador pueda acceder a datos móviles y subir información a Plaspy.
- Apuntar el dispositivo al servidor de Plaspy usando el dominio o la IP provistos y el puerto compartido de Plaspy.
- Seleccionar el transporte (UDP o TCP) si el dispositivo lo requiere y guardar la configuración.
- Configurar el intervalo de reporte (por ejemplo mediante un comando TIMER) para que el dispositivo envíe actualizaciones de posición.
- Verificar la configuración con una comprobación de estado en el dispositivo y confirmar que el rastreador aparece en Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del endpoint Plaspy al configurar el VT300:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port 8888 for incoming tracker connections

## Requisitos previos

- Una tarjeta SIM con datos habilitados y capacidad de SMS instalada en el VT300
- Acceso al método de configuración del VT300 compatible con su unidad, como comandos SMS o herramientas del fabricante
- Credenciales APN del operador móvil si se requiere un APN privado o usuario/contraseña
- Dispositivo encendido y accesible (conectado a la alimentación del vehículo o con batería interna) para recibir SMS y establecer GPRS
- Acceso al manual del VT300 o a la información de soporte del proveedor para comportamientos específicos de firmware

## Cómo se conecta este rastreador a Plaspy

El VT300 se configura para subir su posición y eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ofrecer visibilidad en tiempo real y rutas históricas. Plaspy acepta conexiones a través del puerto compartido estándar y detecta automáticamente el protocolo del rastreador para procesar los dispositivos sin necesidad de seleccionar protocolos manualmente en el servidor.

- El rastreador reporta ubicación y eventos a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP dependiendo de la configuración del dispositivo; elija el que su equipo soporte
- Plaspy detectará automáticamente el protocolo usado por el VT300 cuando el dispositivo se conecte
- El intervalo de reporte y las subidas en búfer se controlan en el dispositivo, por ejemplo mediante el comando TIMER
- El VT300 permite configurar servidores duales para redundancia; puede establecer un servidor primario y uno secundario si es necesario

## Flujo típico de configuración

1. Acceda al método oficial de configuración iStartek para su unidad VT300, normalmente mediante comandos SMS o la herramienta de instalación proporcionada por su proveedor.
2. Configure el APN de datos móviles usando el comando APN con las credenciales de su operador.
3. Establezca el servidor a d.plaspy.com o la IP alternativa 54.85.159.138 y el puerto 8888.
4. Seleccione UDP o TCP si el VT300 requiere elegir el transporte y su instalación prefiere uno.
5. Configure el intervalo de reporte (por ejemplo TIMER 60 para 60 segundos) y cualquier otro parámetro necesario para su despliegue.
6. Aplique o guarde la configuración y reinicie el dispositivo si éste requiere reboot para aplicar ajustes.
7. Valide que el dispositivo reporta a Plaspy verificando el estado en la plataforma Plaspy y usando el comando de verificación de parámetros del propio rastreador si está disponible.

## Ejemplos de comandos de configuración

El VT300 puede configurarse usando comandos SMS. A continuación se muestran los comandos públicos más usados, presentados en orden. Preserve los marcadores exactamente al enviar los comandos.

- Optional initial factory reset (use only when appropriate):
```
FACTORY#
```

- Set the time zone to UTC+0:
```
GMT,E,0#
```

- Set the operator APN (replace [apn], and optionally [apnu] and [apnp] if your operator requires username and password):
```
APN,[apn]{{? ,[apnu],[apnp]}}#
```
Explanation: Replace [apn] with your operator APN. If your operator requires an APN username and password, include [apnu] and [apnp] respectively. The device accepts APN,APN[,username,password] format.

- Set the GPRS server by domain (primary example pointing to Plaspy):
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP address (alternative):
```
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to 60 seconds:
```
TIMER,60#
```

- Check current parameter settings on the device:
```
PARAM#
```

Notes on these commands:
- The factory reset command FACTORY# should be used only when an initial reset is required.
- Keep the SERVER command format exactly as shown; the second field (0 or 1) selection may control whether IP or domain is used depending on firmware behavior.
- The APN command uses placeholders [apn], [apnu], and [apnp] which you must replace with the actual APN, username, and password provided by your mobile operator.

## Notas de configuración

- Las versiones de firmware del VT300 pueden interpretar los comandos SMS de forma ligeramente distinta; confirme la sintaxis de los comandos con el manual del dispositivo si un comando no es aceptado.
- La configuración vía SMS se usa habitualmente en instalaciones de campo donde no hay herramientas in situ; asegúrese de que el dispositivo pueda recibir SMS cuando esté alimentado.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy acepta ambos y detectará automáticamente el protocolo usado por el rastreador.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, por lo que utilice el puerto 8888 al apuntar el VT300 a Plaspy.
- La documentación del fabricante y las herramientas del proveedor pueden ofrecer opciones adicionales de configuración no cubiertas por los comandos SMS públicos mostrados aquí.

## Por qué usar Plaspy con esta configuración

Usar el VT300 con Plaspy brinda a los gestores de flota un camino sencillo para que los rastreadores reporten a una plataforma unificada. Con el endpoint compartido de Plaspy y la detección automática de protocolo, la incorporación de dispositivos se simplifica: una vez que el VT300 esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y se haya configurado el intervalo de reporte, los datos de ubicación y eventos estarán disponibles para supervisión operativa y análisis de rutas.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific configuration steps and firmware details with the manufacturer at https://istartek.com/ as setup methods and device behavior can change over time.
