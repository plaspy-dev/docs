---
slug: /concox/wetrack140/configuration
id: wetrack140-configuration
sidebar_label: Configuration
title: Concox - WeTrack140 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox WeTrack140 con Plaspy; incluye ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - Configuración Concox WeTrack140
  - Configuración WeTrack140 Plaspy
  - Configuración rastreador GPS Concox
  - Configuración servidor WeTrack140
  - Comandos SMS WeTrack140
  - Configuración dispositivo Plaspy
  - Configuración rastreo vehicular
  - Configuración AIS140
  - Configuración GPRS rastreador
  - Configuración gestor de flotas rastreador
---

# Concox - Configuración del WeTrack140

Esta página documenta el contexto público de configuración para usar el Concox WeTrack140 con Plaspy. Resume los ajustes de servidor de Plaspy que debe aplicar, explica los pasos típicos para preparar el rastreador y recopila los comandos SMS de fabricante que se usan comúnmente para apuntar el dispositivo a Plaspy. Use esta guía para realizar acciones prácticas de configuración y validar la conectividad antes de añadir el equipo a su flota en Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. La configuración del WeTrack140 que se muestra a continuación se basa en los comandos públicos del dispositivo y en los ajustes que Plaspy requiere para que el rastreador reporte de forma fiable.

## Resumen de configuración

El objetivo de esta configuración es preparar el WeTrack140 para que se comunique con la plataforma Plaspy y envíe ubicación en tiempo real, telemetría y reportes de eventos. La configuración pública suele usar comandos SMS para establecer el APN y los datos del servidor GPRS, seleccionar el transporte (UDP o TCP) en el puerto 8888 y habilitar el reporte por GPRS.

- Configure el APN del equipo y el servidor GPRS para que el rastreador pueda abrir una sesión de datos hacia Plaspy.
- Seleccione UDP o TCP según requiera el dispositivo y establezca el endpoint del servidor en Plaspy.
- Verifique el intervalo de reporte y active GPRS para que el dispositivo transmita las actualizaciones de posición a Plaspy.
- Valide la conectividad y confirme que el equipo aparece en Plaspy con actualizaciones de ubicación en vivo.
- Use el comando de verificación GPRSSET para leer los parámetros de red y servidor actuales.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos

Estos valores deben aplicarse en el equipo (o mediante las herramientas del fabricante) para que el WeTrack140 reporte a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP.

## Requisitos previos típicos

- Una unidad WeTrack140 alimentada e instalada según la guía del fabricante.
- Una tarjeta SIM con datos y servicio SMS activos configurada en el rastreador.
- Acceso para enviar comandos SMS al equipo o acceso a la herramienta de configuración del proveedor descrita por Concox.
- Los datos APN del operador de la SIM para establecer la conectividad GPRS (host APN y opcionalmente usuario y contraseña).
- Familiaridad con la sintaxis de comandos SMS del dispositivo o acceso a la documentación del proveedor para su versión de firmware.
- Una cuenta en Plaspy y la posibilidad de validar la presencia del dispositivo en la plataforma después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el WeTrack140 utiliza la conexión GPRS del dispositivo para abrir un socket hacia Plaspy y enviar datos GNSS y telemétricos. Plaspy ingiere esos mensajes en el endpoint compartido y los asocia a los registros de dispositivo para monitorización en tiempo real y reproducción histórica.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138.
- Todo el tráfico del dispositivo se dirige al puerto 8888, que Plaspy utiliza para los dispositivos soportados.
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy detecta el protocolo automáticamente.
- Posición, velocidad, distancia y entradas de estado se transmiten por GPRS al servicio de Plaspy.
- Plaspy recibe eventos y telemetría, habilitando paneles, alertas y monitorización de flotas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración SMS de Concox o al software del proveedor para el WeTrack140.
2. Configure el APN del dispositivo con los valores del operador de su SIM.
3. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS.
4. Establezca el puerto 8888 y seleccione UDP o TCP si el equipo requiere elegir el transporte.
5. Habilite el reporte GPRS y configure el intervalo de actualización deseado para los reportes de posición.
6. Aplique o guarde la configuración y reinicie el equipo si el proveedor lo recomienda.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la interfaz de Plaspy con datos en vivo.

## Ejemplos de comandos de configuración

El WeTrack140 puede configurarse enviando comandos SMS al dispositivo. Los siguientes son comandos públicos comúnmente usados para preparar el rastreador para Plaspy. Mantenga el orden cuando sea necesario y sustituya los marcadores por los valores correspondientes.

- Reinicio opcional a configuración de fábrica (usar solo si es necesario)
```
FACTORY#
```

- Establecer zona horaria a UTC 0 (ejemplo)
```
GMT,E,0#
```

- Configurar el APN del operador (reemplace los marcadores por los valores de su SIM)
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: [apn] es el host APN. Si su APN requiere usuario y contraseña, proporcione [apnu] y [apnp] respectivamente. El formato anterior mantiene opcionales los campos de usuario y contraseña.

- Configurar el servidor GPRS a Plaspy usando el dominio Plaspy (el transporte UDP o TCP depende de la selección del dispositivo)
```
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS a Plaspy usando la IP de Plaspy
```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el temporizador para enviar actualizaciones cada 60 segundos (dos variantes comunes)
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Habilitar modo GPRS
```
GPRSON,1#
```

- Verificar la configuración GPRS y del servidor actual
```
GPRSSET#
```

Envíe cada comando SMS al número del dispositivo según las instrucciones de Concox. La sintaxis debe coincidir con la del firmware; consulte la documentación del proveedor si algún comando es rechazado.

## Notas de configuración

- La configuración por SMS está soportada por los comandos públicos del WeTrack140 mostrados arriba; también pueden existir herramientas del proveedor para configuraciones masivas.
- El dispositivo acepta tanto d.plaspy.com como 54.85.159.138 como servidor y debe usar el puerto 8888; Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- Elija UDP o TCP según la preferencia del instalador o los requisitos del firmware; Plaspy detectará el protocolo automáticamente.
- Las versiones de firmware o las revisiones de hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; confirme los comandos con la documentación de su dispositivo.
- Al usar comandos que cambian el servidor por IP o dominio, permita que el dispositivo reinicie las sesiones de red antes de validar la conectividad.

## Por qué usar Plaspy con esta configuración

Configurar el WeTrack140 para reportar a Plaspy brinda a los operadores de flota un flujo unificado de datos de ubicación y telemetría para visibilidad en tiempo real, alertas y análisis histórico. La combinación de las capacidades del hardware WeTrack140 y la ingestión de GNSS e entradas de estado por parte de Plaspy facilita la supervisión operativa, la respuesta a incidentes y el análisis para flotas que requieren seguimiento confiable y cumplimiento AIS140.

Learn more about Plaspy and how it can support your fleet deployment at https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and installation guidance verify details on the manufacturer site https://www.iconcox.com/ as device behavior and setup methods can change over time.
