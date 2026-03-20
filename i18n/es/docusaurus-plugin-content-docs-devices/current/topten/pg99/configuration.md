---
slug: /topten/pg99/configuration
id: pg99-configuration
sidebar_label: Configuration
title: TopTen - PG99 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador TopTen PG99 con Plaspy usando ajustes de servidor compartido
keywords:
  - Configuración TopTen PG99
  - Instalación TopTen PG99
  - Configuración PG99 Plaspy
  - Guía instalación tracker PG99
  - Configuración rastreador TopTen
  - rastreo vehicular PG99
  - rastreo de activos PG99
  - configuración servidor PG99
  - configuración tracker Plaspy
  - comandos SMS PG99
---

# TopTen - Configuración del PG99

Esta página documenta el contexto público de configuración para usar el rastreador GPS TopTen PG99 con Plaspy. Explica los ajustes de servidor compartido que requiere Plaspy, los comandos SMS públicos más utilizados para dispositivos TopTen y el flujo práctico para preparar el equipo y que pueda reportar a Plaspy. Considere esto como una referencia técnica que complementa la documentación oficial del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PG99 puede configurarse mediante comandos SMS según la documentación pública del fabricante; esta página aclara cómo esos comandos públicos se relacionan con los ajustes del servidor de Plaspy y qué verificar antes de integrar el dispositivo.

## Resumen de la configuración

El objetivo de la configuración es dejar al PG99 listo para comunicarse de forma fiable con Plaspy y que aparezca en su cuenta. Esto implica ajustar el APN y el endpoint del servidor, asegurar que el identificador que usa Plaspy coincida con el del dispositivo y validar que el rastreador envíe datos correctamente.

- Configure el APN y los ajustes GPRS del dispositivo para que el PG99 pueda alcanzar el endpoint de Plaspy.
- Registre el identificador correcto del rastreador (el PG99 utiliza los últimos 14 dígitos del IMEI como ID del tracker en la respuesta PAR).
- Use los comandos SMS públicos que facilita el fabricante para aplicar servidor y APN cuando sea necesario.
- Valide la conectividad y el envío de reportes para que el dispositivo sea visible en Plaspy y envíe actualizaciones periódicas.
- Pruebe y supervise el reporte de eventos como movimiento o alertas después de la configuración.

## Ajustes del servidor de Plaspy

Al configurar cualquier rastreador para Plaspy, use exactamente los siguientes ajustes públicos de servidor:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP (device may be configured to use either transport)
- Plaspy automatically detects the tracker protocol so you do not need to specify a protocol in Plaspy for each device

Plaspy usa el mismo puerto para todos los dispositivos soportados y la detección de protocolos se realiza en la plataforma.

## Requisitos antes de la configuración

- Un PG99 con batería cargada y acceso a su IMEI (el IMEI es necesario para mapear el rastreador en Plaspy).
- Una tarjeta SIM operativa con datos y/o capacidad SMS y un APN que coincida con el operador móvil.
- Acceso a un teléfono o a una pasarela SMS capaz de enviar mensajes de configuración si va a usar SMS para configurar.
- La documentación oficial de configuración TopTen o el software del fabricante correspondiente a su revisión de firmware.
- Un plan básico para probar la conectividad y el envío de reportes al endpoint de Plaspy.
- Opcional: un entorno de pruebas local o una consola para verificar conexiones entrantes si realiza diagnósticos de red.

## Cómo se conecta este rastreador a Plaspy

El modelo público de configuración del PG99 usa el envío estándar de datos a un endpoint y puerto del servidor de Plaspy para que la plataforma reciba posiciones y eventos. El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy usando el transporte seleccionado durante la configuración del dispositivo.

- El PG99 se configura para enviar datos a d.plaspy.com (54.85.159.138) en el puerto 8888.
- Puede seleccionar UDP o TCP como transporte en el dispositivo; Plaspy acepta ambos.
- Plaspy reconoce automáticamente el protocolo del rastreador, por lo que la plataforma analiza los mensajes entrantes sin necesidad de ajustes por dispositivo.
- El identificador que usa Plaspy corresponde a los últimos 14 dígitos del IMEI tal como devuelve el comando PAR.
- Tras la configuración, el PG99 enviará reportes periódicos y mensajes basados en eventos al endpoint de Plaspy para visibilidad y monitoreo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software para el PG99 (SMS, app del fabricante o herramienta del proveedor) que corresponda a su dispositivo y firmware.
2. Ingrese la dirección del servidor de Plaspy especificando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor.
3. Establezca el puerto del servidor en 8888.
4. Si la interfaz del dispositivo lo requiere, seleccione UDP o TCP como transporte.
5. Configure el APN del dispositivo y cualquier usuario o contraseña de APN necesarios para la SIM (use los valores que indique su operador).
6. Aplique o guarde la configuración y reinicie el equipo si es necesario para que los cambios se apliquen.
7. Valide que el dispositivo reporte a Plaspy (verifique en Plaspy que el rastreador aparezca bajo el ID derivado del IMEI).

Si usa configuración vía SMS, envíe los comandos en el orden que recomiende el fabricante.

## Ejemplos de comandos de configuración

Los siguientes comandos provienen de las instrucciones públicas de configuración del TopTen PG99. Son comandos SMS enviados desde un número autorizado al dispositivo. Preserve los marcadores de posición cuando los reemplace con sus datos reales de APN.

- Reinicio opcional a configuración de fábrica (si necesita partir de valores por defecto):
```text
111111CLR
```
Etiqueta: Reinicio opcional para restaurar configuración de fábrica cuando sea necesario.

- Configure APN y servidor GPRS para apuntar el rastreador a Plaspy. Reemplace los marcadores {{apn}}, {{apnu}} y {{apnp}} con el APN, usuario y contraseña de su operador:
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Notas:
- IPN está establecido en la IP del servidor Plaspy 54.85.159.138 (puede usar el dominio d.plaspy.com si su dispositivo acepta dominio en lugar de IP).
- COM establece el puerto del servidor a 8888, que es el puerto compartido de Plaspy.
- APN:{{apn}},{{apnu}},{{apnp}} son marcadores de posición — reemplácelos con el APN, usuario y contraseña del operador.
- RPT, SLP, RUN son parámetros específicos del dispositivo en la secuencia pública de comandos; manténgalos según lo indique el fabricante si aplica.

- Verificar o consultar los ajustes WWW/GPRS actuales:
```text
111111WWW:
```
Este comando solicita al rastreador que responda con su configuración WWW actual para que pueda confirmar la IP, el puerto y las entradas de APN.

Tenga en cuenta también: el rastreador usa los últimos 14 dígitos del IMEI (el valor devuelto por el comando PAR) como identificador de tracker para Plaspy. Asegúrese de registrar el IMEI y el ID correspondiente al registrar o localizar el dispositivo en la plataforma.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; siempre verifique los comandos con la versión de firmware documentada por TopTen.
- El PG99 ofrece configuración vía SMS en la documentación pública; si lo prefiere, utilice el software o las herramientas del fabricante si están disponibles y son compatibles con su firmware.
- Elija UDP o TCP según sus necesidades de despliegue; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Lleve un registro preciso del IMEI del equipo y confirme el mapeo del ID del rastreador (últimos 14 dígitos del IMEI) para que el dispositivo sea identificable en Plaspy.
- Después de la configuración, realice una verificación de extremo a extremo: solicite una posición o espere un reporte programado para confirmar que el dispositivo aparece en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el PG99 con Plaspy le ofrece una forma sencilla de centralizar la visibilidad de los equipos, el reporte de eventos y el monitoreo operativo básico. Al apuntar el PG99 al endpoint y puerto compartidos de Plaspy, dispositivos de distintos despliegues reportan a una única plataforma que detecta el protocolo automáticamente y parsea los datos entrantes.

To learn more about Plaspy and the platform features, visit https://www.plaspy.com. Please verify the latest device-specific setup details, firmware behavior, and official commands with the manufacturer at http://www.t10.cn since manufacturer specifications and setup methods can change over time.
