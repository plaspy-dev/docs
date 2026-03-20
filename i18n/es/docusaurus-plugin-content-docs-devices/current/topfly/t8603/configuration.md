---
slug: /topfly/t8603/configuration
id: t8603-configuration
sidebar_label: Configuration
title: TopFly - T8603 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopFly T8603 con ajustes de servidor Plaspy, comandos SMS y pasos de integración
keywords:
  - Configuración TopFly T8603
  - Instalación TopFly T8603
  - TopFly T8603 Plaspy
  - Configuración rastreador GPS TopFly
  - Configuración servidor T8603
  - Configuración APN T8603
  - Configuración dispositivo Plaspy
  - Configuración seguimiento vehicular
  - Comandos SMS rastreador GPS
  - Configuración GPRS T8603
---

# TopFly - T8603 Configuración

Esta página recopila la información pública de configuración para usar el rastreador TopFly T8603 con Plaspy. Resume los ajustes prácticos de servidor y los comandos SMS más comunes que se utilizan para apuntar el dispositivo a Plaspy, basándose en la documentación pública del fabricante y en ejemplos de configuración.

Plaspy emplea ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o herramientas del proveedor, por lo que considere los comandos y el flujo aquí como un punto de partida práctico y verifique los detalles con el firmware de su dispositivo y la documentación oficial de TopFly.

## Visión general de la configuración

El objetivo de esta configuración es preparar el T8603 para que se comunique de manera fiable con Plaspy y el dispositivo aparezca y reporte correctamente en la plataforma. Los pasos a continuación se centran en la configuración de red, el endpoint del servidor, el intervalo de reporte y un flujo básico de validación.

- Configure el APN y los parámetros GPRS del dispositivo para que pueda usar datos móviles para el reporte.
- Apunte el rastreador al endpoint del servidor de Plaspy para que la ubicación y los eventos lleguen a la plataforma.
- Ajuste un intervalo de reporte apropiado para que las actualizaciones sean lo suficientemente frecuentes según su caso de uso.
- Valide los ajustes de transporte, por ejemplo eligiendo UDP o TCP si el dispositivo lo requiere.
- Confirme que el rastreador se registre y envíe datos a Plaspy para su monitoreo y visualización en la plataforma.

## Ajustes del servidor Plaspy

- Use el dominio del servidor d.plaspy.com al configurar la dirección del servidor en el rastreador.
- La IP del servidor 54.85.159.138 es el endpoint numérico que puede utilizarse en lugar del dominio.
- El puerto 8888 es el puerto en escucha de Plaspy y se usa para todos los dispositivos compatibles.
- El transporte puede ser UDP o TCP en el puerto 8888 según las opciones de configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que reporten al endpoint compartido serán interpretados por la plataforma.

## Requisitos típicos antes de la configuración

- Energice el dispositivo y asegúrese de que esté en un estado listo para la configuración.
- Tenga instalada una tarjeta SIM activa con datos móviles o capacidad SMS según lo requiera su flujo de trabajo.
- Conozca los datos APN del operador móvil para la conectividad de datos; mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} disponibles si utiliza configuración por SMS.
- Acceso al método oficial de configuración del fabricante, como comandos SMS o herramientas del proveedor.
- Una cuenta en Plaspy o acceso a la plataforma para confirmar que el dispositivo aparece y envía datos una vez configurado.
- Un medio para recibir y confirmar las respuestas SMS del rastreador si usa configuración basada en SMS.

## Cómo se conecta este rastreador a Plaspy

El T8603 puede configurarse para enviar reportes de ubicación y eventos a Plaspy estableciendo el rastreador hacia el endpoint compartido y el puerto de Plaspy. Una vez que el dispositivo transmite al servidor y puerto indicados, Plaspy detectará automáticamente el protocolo y procesará los datos entrantes para su visualización y alertas.

- El rastreador envía actualizaciones periódicas de posición al endpoint de Plaspy.
- Los eventos como alertas de geocerca, vibración, exceso de velocidad y alarmas se envían a Plaspy cuando se disparan y estén configurados en el dispositivo.
- Se emplean datos GPRS o SMS para la entrega de la configuración y la transmisión de telemetría, dependiendo de la configuración del dispositivo.
- El dispositivo se apunta a d.plaspy.com o a 54.85.159.138 usando el puerto 8888 para que Plaspy reciba el flujo de datos.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y realiza la detección automática del protocolo para parsear los mensajes entrantes.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TopFly para el T8603, normalmente comandos SMS o el software de configuración del proveedor.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP numérica 54.85.159.138 según lo acepte el dispositivo.
3. Configure el puerto 8888 para el servidor del dispositivo; es el mismo puerto que usa Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el tipo de transporte para reportar a Plaspy.
5. Establezca el APN y los valores de usuario y contraseña del APN si son necesarios para que el dispositivo use datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporte a Plaspy verificando la conectividad del equipo y los mensajes entrantes en la plataforma Plaspy.

## Comandos de ejemplo para configuración

Para configurar el rastreador, envíe los siguientes comandos como mensajes SMS. El ejemplo utiliza la contraseña del dispositivo 0000, que es la predeterminada en los comandos mostrados. Envíe cada comando como un SMS al número del dispositivo.

- Ajustar la zona horaria a UTC 0:
```
GMT,0000,0#
```

- Configurar el APN del operador (reemplace los marcadores con los valores de su operador):
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explicación de marcadores:
- {{apn}} es el nombre del punto de acceso (APN) de su operador móvil.
- {{apnu}} es el usuario del APN si se requiere; deje en blanco o use 0 si no es necesario.
- {{apnp}} es la contraseña del APN si se requiere; deje en blanco o use 0 si no es necesaria.

- Configurar el servidor GPRS a Plaspy usando la IP numérica y el puerto 8888:
```
IP,0000,54.85.159.138 8888#
```
Alternativamente, puede usar el dominio d.plaspy.com en un dispositivo que acepte nombres de dominio en lugar de IP numéricas.

- Establecer el intervalo de actualización a 60 segundos:
```
TIMER,0000,60:60:0:0#
```
Este comando TIMER configura el intervalo de reporte periódico; ajuste el valor según lo requiera su caso de uso.

## Notas de configuración

- La configuración por SMS se muestra en los comandos de ejemplo y es comúnmente soportada para la configuración básica en campo del T8603.
- Las revisiones de firmware y hardware pueden modificar la sintaxis de los comandos o los parámetros requeridos; verifique siempre el formato de comando para el firmware de su dispositivo.
- Cuando un dispositivo ofrece tanto UDP como TCP, elija el transporte compatible con su red y confirme la conectividad; Plaspy acepta cualquiera de los dos transportes en el puerto 8888.
- Los marcadores de APN {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por los valores de su operador móvil o dejarse como marcadores según las instrucciones del operador.
- Plaspy utiliza un puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos.

## Por qué usar Plaspy con esta configuración

Usar el TopFly T8603 con Plaspy ofrece una forma práctica de obtener reportes eficientes y ricos en eventos en una sola plataforma. El bajo consumo GPRS del T8603 y su interfaz estándar de comandos SMS facilitan la configuración para un reporte fiable; apuntar el dispositivo a Plaspy brinda a las organizaciones visibilidad sobre la ubicación de activos, alarmas y eventos de movimiento.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior at https://www.topflytech.com/ since manufacturer setup details and firmware behavior can change over time.
