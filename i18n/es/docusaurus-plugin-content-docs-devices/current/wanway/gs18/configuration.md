---
slug: /wanway/gs18/configuration
id: gs18-configuration
sidebar_label: Configuration
title: WanWay - GS18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el WanWay GS18 y reportar a Plaspy con servidores compartidos y comandos SMS
keywords:
  - configuración WanWay GS18
  - configuración WanWay GS18 Plaspy
  - configuración servidor GS18
  - configuración rastreador GPS WanWay
  - configuración rastreador Plaspy
  - configuración de seguimiento GS18
  - configuración GPRS WanWay GS18
  - configuración SMS GS18
  - seguimiento de flotas WanWay GS18
  - configuración rastreador GPS GS18
---

# WanWay - GS18 Configuración

Esta página describe el contexto público de configuración para usar el rastreador WanWay GS18 con Plaspy. Se centra en los pasos prácticos y los ajustes del servidor necesarios para que el GS18 pueda reenviar datos de ubicación y estado a la plataforma Plaspy. Cuando estén disponibles, se incluyen los comandos SMS del manual del dispositivo para ayudarle a aplicar la configuración de forma directa.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere los comandos de esta página como orientación pública general y verifique cualquier diferencia específica del dispositivo en la documentación oficial de WanWay.

## Resumen de configuración

El proceso de configuración prepara al GS18 para comunicarse de forma fiable con Plaspy configurando las credenciales de red, el servidor de reporte y los intervalos de envío. En los dispositivos GS18, el flujo público de configuración suele usar comandos SMS y el modo GPRS integrado del equipo para enviar datos a Plaspy.

- Configure el APN del operador para que el rastreador pueda usar datos móviles para el reporte por GPRS.
- Apunte el dispositivo al endpoint del servidor de Plaspy usando los ajustes de servidor compartidos.
- Establezca un intervalo de reporte para que el dispositivo envíe actualizaciones regulares de ubicación a Plaspy.
- Active el modo de reporte GPRS y verifique la conectividad con comandos de comprobación.
- Confirme que el dispositivo aparece en Plaspy después de la configuración para que el rastreo y la visibilidad de eventos queden activos.

## Ajustes del servidor Plaspy

Use estos ajustes de servidor de Plaspy al configurar el GS18. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

## Requisitos previos habituales

- Un GS18 con batería cargada o conectado a alimentación durante la configuración inicial.
- Una tarjeta SIM activa con un plan de datos y la información APN correcta del operador.
- Capacidad para enviar comandos SMS desde un número de teléfono autorizado por el rastreador para configuración.
- Acceso al manual del usuario del WanWay GS18 o a las instrucciones del proveedor para detalles específicos del modelo.
- Confirmación de cobertura de red en la zona donde operará el dispositivo para que el reporte por GPRS funcione.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GS18 envía sus mensajes de ubicación y estado al endpoint y puerto compartidos del servidor Plaspy. Plaspy recibe esos mensajes y asigna automáticamente el protocolo detectado para que los datos de ubicación aparezcan en la plataforma sin selección de protocolo por dispositivo.

- El GS18 se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede elegir transporte UDP o TCP en el dispositivo si el firmware o las herramientas del proveedor lo requieren.
- El rastreador envía informes periódicos según el intervalo TIMER configurado.
- Plaspy recibe los datos y los asocia al registro de dispositivo correspondiente mediante su detección de protocolo.
- Se pueden enviar comandos de verificación al rastreador para confirmar parámetros y estado de funcionamiento.

## Flujo de configuración habitual

1. Consulte el método oficial de configuración del WanWay GS18 o el software del fabricante y revise el formato de comandos SMS en la documentación.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Ajuste el puerto del dispositivo a 8888 según lo requiere Plaspy.
4. Seleccione UDP o TCP en el rastreador si el equipo solicita elegir el transporte.
5. Configure el APN del operador para datos GPRS usando el comando SMS o la herramienta del fabricante.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador o el firmware requieren un reinicio.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma en unos pocos intervalos de reporte.

## Ejemplos de comandos de configuración

El GS18 soporta configuración vía SMS. Los siguientes comandos son ejemplos públicos extraídos de la documentación del WanWay GS18. Envíe cada comando como SMS desde un teléfono autorizado al rastreador. Conserve los marcadores de posición al rellenar los datos del APN de su operador.

1. Configure el APN de su operador
```
APN,[apn]# 
```
Si su operador requiere usuario y contraseña, use la forma extendida
```
APN,[apn],[apnu],[apnp]#
```
- Explicación de los marcadores de posición
  - [apn] es el nombre del APN del operador
  - [apnu] es el usuario del APN si el operador lo solicita
  - [apnp] es la contraseña del APN si el operador la solicita

2. Configure el servidor GPRS hacia Plaspy
```
SERVER,1,d.plaspy.com,8888,0#
```
- Este comando apunta el GS18 al dominio del servidor Plaspy en el puerto 8888
- Si prefiere usar la IP del servidor en lugar del dominio, reemplace d.plaspy.com por 54.85.159.138

3. Establezca el intervalo de actualización
```
TIMER,60,60#
```
- El ejemplo fija intervalos de reporte; ajuste los valores según su política de seguimiento

4. Cambie al modo de reporte GPRS
```
GPRSON,1#
```
- Activa el reporte por GPRS para que el dispositivo envíe datos al SERVER configurado

Comandos de verificación

- Ver la configuración actual
```
PARAM#
```

- Ver el estado del rastreador
```
STATUS#
```

Use estos comandos de verificación después de aplicar los ajustes para confirmar que el rastreador aceptó los parámetros y está operando en el modo previsto.

## Notas de configuración

- La documentación del GS18 indica que la configuración por SMS está soportada; también puede usar herramientas del proveedor si están disponibles para aprovisionamiento masivo o remoto.
- Las variaciones de firmware pueden cambiar la sintaxis de los comandos o las opciones disponibles; siempre confirme los comandos con el manual del dispositivo correspondiente a su revisión de firmware.
- Elija UDP o TCP según sus preferencias de integración o requisitos del firmware. Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Verifique que las credenciales APN sean correctas para la SIM en el dispositivo. Los ajustes APN faltantes o incorrectos son la causa más común de fallas en las conexiones GPRS.
- Tras guardar los ajustes, puede ser necesario reiniciar el dispositivo para que los cambios surtan efecto. Supervise el dispositivo con PARAM# y STATUS# para verificar su funcionamiento.

## Por qué usar Plaspy con esta configuración

Configurar el WanWay GS18 para que reporte a Plaspy ofrece una vía sencilla para incorporar los datos de ubicación y operación del GS18 en un entorno único de gestión y monitoreo de flotas. Usar los ajustes de servidor compartidos de Plaspy reduce la complejidad por dispositivo y permite que Plaspy gestione la detección de protocolos, de modo que los equipos aparezcan en la plataforma con mínima intervención manual.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and manufacturer guidance always verify information on the WanWay website https://www.wanwaytech.net/.
