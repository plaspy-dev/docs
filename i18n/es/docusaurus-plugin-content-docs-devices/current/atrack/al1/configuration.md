---
slug: /atrack/al1/configuration
id: al1-configuration
sidebar_label: Configuration
title: ATrack - AL1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ATrack AL1 con ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - Configuración ATrack AL1
  - Instalación ATrack AL1
  - Configuración AL1 Plaspy
  - Configuración servidor AL1
  - Configuración rastreador GPS ATrack
  - Configuración software seguimiento AL1
  - Integración rastreador Plaspy
  - Configuración rastreador vehicular
  - Configuración GPRS AL1
  - Configuración seguimiento tiempo real
---

# ATrack - AL1 — Configuración

Esta página describe el contexto público de configuración para usar el rastreador ATrack AL1 con Plaspy. Se centra en los ajustes prácticos de servidor y en los comandos necesarios para apuntar el AL1 a Plaspy y validar la conexión con información pública. Use esta guía para preparar el dispositivo para la integración y comprender cómo Plaspy recibe los datos del rastreador.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y las herramientas del proveedor. Revise los comandos y el flujo de trabajo a continuación, y confirme los detalles específicos del dispositivo con la documentación de ATrack o la herramienta del instalador que utilice.

## Resumen de la configuración

Esta configuración prepara el AL1 para reportar ubicación y eventos a Plaspy mediante GPRS. El objetivo principal es configurar el AL1 para usar el endpoint de Plaspy, habilitar el comportamiento de reporte deseado y confirmar que el dispositivo sea visible en la plataforma Plaspy.

- Configurar el AL1 para que use el endpoint y puerto del servidor Plaspy para la transmisión de datos.
- Habilitar el reporte de eventos como ACC y los intervalos de seguimiento periódicos para asegurar actualizaciones oportunas.
- Ajustar el AL1 al formato de datos apropiado (modo binario como se muestra) para que Plaspy pueda parsear los paquetes entrantes.
- Validar la conectividad comprobando el estado del dispositivo y confirmando que aparezca en Plaspy.
- Aplicar y guardar los cambios con la herramienta del fabricante o mediante comandos SMS, y reiniciar el rastreador si es necesario.

## Configuración del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP may be used on port 8888 depending on device preference  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos previos

- Un ATrack AL1 instalado y con alimentación, con una tarjeta SIM funcional y conectividad GPRS habilitada.
- Acceso al método o software de configuración del fabricante que permita enviar comandos AT$ o acciones equivalentes.
- Credenciales APN válidas del operador móvil para permitir datos GPRS (usuario y contraseña del APN si son requeridos).
- Familiaridad básica con el envío de comandos de configuración por SMS, herramienta serial o la utilidad web/escritorio de ATrack según la cadena de herramientas del dispositivo.
- Una forma de ver las respuestas del dispositivo o consultas de estado para confirmar que los ajustes se aplicaron.

## Cómo se conecta este tracker a Plaspy

El AL1 se configura para enviar datos de GPS y eventos por GPRS al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda recibir y mostrar la información. Plaspy recibe los paquetes y detecta automáticamente el protocolo del rastreador para interpretar los mensajes del AL1.

- El rastreador envía reportes periódicos de ubicación según el intervalo de seguimiento configurado al endpoint de Plaspy.
- Mensajes basados en eventos, como encendido/apagado de ACC, se envían a Plaspy cuando se activan.
- El dispositivo usa el APN y las credenciales GPRS configuradas para establecer la sesión de datos antes de enviar paquetes.
- Plaspy escucha en el puerto 8888 y aceptará conexiones o datagramas vía UDP o TCP desde el dispositivo.
- Una vez que los datos llegan a Plaspy, la plataforma parsea automáticamente el protocolo y hace visible el rastreador en la plataforma.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el AL1 (comandos SMS, herramienta serial/USB o la utilidad de configuración de ATrack).
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes GPRS o de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido que Plaspy usa para todos los dispositivos.
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte para reporte por GPRS.
5. Configure el comportamiento de reporte, como el envío de eventos ACC y los intervalos de seguimiento según sus necesidades de monitoreo.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el dispositivo requiere un reinicio para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; use un comando de estado del dispositivo para confirmar la configuración si está disponible.

## Ejemplos de comandos de configuración

Los siguientes comandos públicos se toman de ejemplos de configuración del AL1 disponibles. Conserve el orden tal como se muestra al aplicar estos comandos. Los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por el APN, el usuario del APN y la contraseña del APN de su operador móvil.

- Set ACC (input) event reporting and actions
```bash
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set time based tracking interval to 60 seconds
```bash
AT$TRAC=1,60,,,,,2
```

- Set the device to binary data format required by the platform
```bash
AT$FORM=1,@P,0,""
```

- Configure GPRS server pointing to Plaspy
```bash
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```
Explanation: the AT$GPRS command includes APN, APN user, APN password, Plaspy server IP 54.85.159.138, port 8888, and additional device parameters. Replace {{apn}}, {{apnu}}, and {{apnp}} with your operator credentials.

- Check device status and configuration
```bash
AT$INFO=?
```

Note on placeholders: {{apn}} = mobile data APN, {{apnu}} = APN username, {{apnp}} = APN password. Keep these placeholders intact until replaced with your actual credentials.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; confirme siempre con la documentación vigente de ATrack.
- Puede elegir UDP o TCP como transporte en el puerto 8888; algunos entornos de red o versiones de firmware pueden preferir uno u otro.
- El AL1 soporta configuración por SMS, comandos GPRS o herramientas del fabricante según el firmware y el flujo de trabajo del instalador; use el método recomendado por ATrack para su equipo.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo entrante, por lo que la configuración del lado servidor es consistente entre modelos.
- Tras aplicar cambios, suele ser necesario reiniciar o apagar y encender el dispositivo para que los nuevos ajustes GPRS y de reporte surtan efecto.

## Por qué usar Plaspy con esta configuración

Usar el ATrack AL1 con Plaspy ofrece una vía directa para obtener visibilidad en tiempo real del vehículo, monitoreo de eventos y supervisión centralizada de flotas. Al apuntar el AL1 al servidor y puerto compartidos de Plaspy y habilitar eventos y intervalos de reporte, las organizaciones pueden consolidar datos de ubicación y estado en una sola plataforma para seguimiento, alertas y gestión operativa.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer setup details verify the latest information on the ATrack website https://www.atrack.com.tw/ which may be updated over time.
