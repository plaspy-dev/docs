---
slug: /wanway/gs10/configuration
id: gs10-configuration
sidebar_label: Configuration
title: WanWay - GS10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del WanWay GS10 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración WanWay GS10
  - Instalación WanWay GS10
  - WanWay GS10 Plaspy
  - Configuración servidor GS10
  - Configuración rastreador WanWay GS10
  - Configuración SMS GS10
  - Seguimiento vehicular GS10
  - Configuración GPRS GS10
  - Configuración rastreador WanWay
  - Configuración plataforma GS10
---

# WanWay - Configuración GS10

Esta página describe el contexto público de configuración para usar el WanWay GS10 con Plaspy. Se centra en los ajustes de servidor y en los comandos que permiten al GS10 enviar ubicación y estado a la plataforma Plaspy, y explica los pasos prácticos necesarios para dejar el dispositivo visible en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos que realice en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El WanWay GS10 admite configuración por datos móviles (GPRS) y por SMS; los comandos SMS de ejemplo que encontrará a continuación son los comandos públicos usados comúnmente para apuntar el dispositivo a Plaspy y verificar la conectividad.

## Resumen de configuración

Configurar el GS10 para Plaspy significa preparar el rastreador para abrir una sesión GPRS hacia Plaspy y reportar posición y estado al endpoint y puerto compartidos del servidor. Si está disponible, el GS10 puede configurarse mediante comandos SMS o con las herramientas de WanWay; los comandos SMS públicos están incluidos en esta guía.

- Establecer el APN del operador para que el dispositivo use datos móviles y alcance Plaspy.
- Apuntar el dispositivo al endpoint del servidor de Plaspy para que los reportes lleguen a la plataforma correcta.
- Configurar los intervalos de reporte para que las actualizaciones de ubicación aparezcan en Plaspy con la frecuencia esperada.
- Poner el rastreador en modo GPRS para que envíe datos a través de la red móvil.
- Validar la configuración con comprobaciones PARAM y STATUS para confirmar que el rastreador está reportando.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported by the device; configure one of these transports if required
- Plaspy behavior: Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos previos habituales

- Un GS10 con alimentación instalado o temporalmente alimentado para la configuración.
- Una SIM móvil válida con datos habilitados y el APN correcto del operador.
- Capacidad para enviar SMS al número del dispositivo o acceso al software de configuración de WanWay según el flujo de trabajo del instalador.
- El rastreador debe ser accesible en la red móvil y poder establecer una conexión GPRS hacia d.plaspy.com.
- Acceso al manual del WanWay GS10 o a las herramientas del proveedor para procedimientos específicos del modelo.

## Cómo se conecta este rastreador a Plaspy

El GS10 se configura para reportar ubicación y estado del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que los vehículos sean visibles en la plataforma Plaspy. Una vez aplicados el APN y los ajustes del servidor, y con GPRS activo, el rastreador abrirá una conexión a d.plaspy.com:8888 y transmitirá actualizaciones.

- El rastreador usa datos móviles (GPRS/4G) para alcanzar el endpoint de Plaspy.
- Los reportes se envían a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Puede elegir UDP o TCP si el dispositivo solicita la selección de transporte; Plaspy aceptará la conexión y detectará el protocolo automáticamente.
- Los intervalos de reporte determinan la frecuencia con la que el GS10 envía actualizaciones de posición a Plaspy.
- Los comandos PARAM y STATUS pueden usarse para verificar la configuración y el estado en tiempo de ejecución.

## Flujo de configuración habitual

1. Acceda al método o software de configuración oficial del WanWay GS10 según la documentación del fabricante.
2. Configure el APN del operador para la SIM usada en el dispositivo (use el comando SMS de APN o la herramienta del proveedor).
3. Introduzca el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888.
5. Si el GS10 requiere seleccionar el transporte, elija UDP o TCP según su instalación; Plaspy detectará el protocolo automáticamente.
6. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo o active/desactive GPRS para que los cambios entren en vigor.
7. Verifique que el dispositivo reporte a Plaspy usando los comandos de verificación del dispositivo o confirmando la visibilidad en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El WanWay GS10 admite configuración por SMS. Envíe estos comandos como mensajes de texto al número del dispositivo en el orden indicado cuando corresponda. Conserve los marcadores de posición [apn], [apnu] y [apnp] y sustitúyalos por su APN, usuario y contraseña del operador si el proveedor los requiere.

1. Configure el APN del operador
```sms
APN,[apn]{{,[apnu],[apnp]}}#
```
- Reemplace [apn] por el APN de su operador. Si el APN requiere usuario y contraseña, incluya [apnu] y [apnp] como se muestra. La variante con usuario y contraseña es opcional según los requerimientos del operador.

2. Configure el servidor GPRS apuntando a Plaspy
```sms
SERVER,1,d.plaspy.com,8888,0#
```
- Este comando establece el servidor primario en d.plaspy.com con puerto 8888. El parámetro final indica el tipo de conexión o la prioridad según el firmware del dispositivo.

3. Ajuste el intervalo de reportes
```sms
TIMER,60,60#
```
- El ejemplo establece los valores de temporización de reporte del rastreador. Ajuste los números al intervalo deseado según su instalación y firmware.

4. Active el modo GPRS
```sms
GPRSON,1#
```
- Habilita el modo de datos GPRS para que el rastreador pueda enviar reportes al servidor.

5. Verifique la configuración actual
```sms
PARAM#
```

6. Consulte el estado del rastreador
```sms
STATUS#
```

Nota: Envíe los comandos exactamente como lo requiera el firmware del GS10. Mantenga el orden al aplicar APN y ajustes de servidor, y confirme cada cambio con PARAM# según sea necesario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o el orden de los parámetros; verifique siempre con el manual del dispositivo.
- El GS10 admite configuración por SMS como se muestra, pero los instaladores pueden preferir las herramientas de WanWay cuando estén disponibles.
- Elija UDP o TCP según la preferencia del instalador o los requisitos del sitio; Plaspy aceptará conexiones en el puerto 8888 y detectará automáticamente el protocolo utilizado.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración del servidor.
- Si los comandos incluyen marcadores de posición como [apn], [apnu] o [apnp], sustitúyalos por los valores específicos del operador; no deje marcadores de posición en dispositivos en producción.

## Por qué usar Plaspy con esta configuración

Usar el WanWay GS10 con Plaspy ofrece a las organizaciones una forma directa de integrar la telemetría de sus vehículos en una plataforma única para visibilidad, monitoreo y supervisión operativa. El flujo público de configuración —configurar el APN, apuntar el servidor a d.plaspy.com o 54.85.159.138 en el puerto 8888, habilitar GPRS y validar con PARAM o STATUS— le permite establecer comunicación fiable con Plaspy con rapidez.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details, firmware notes, and manufacturer guidance at the WanWay website https://www.wanwaytech.net/. Manufacturer specifications and setup methods can change over time so it is advisable to confirm current instructions on the official manufacturer site.
