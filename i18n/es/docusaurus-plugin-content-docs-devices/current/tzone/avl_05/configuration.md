---
slug: /tzone/avl_05/configuration
id: avl_05-configuration
sidebar_label: Configuration
title: TZone - AVL-05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el TZone AVL-05 con Plaspy, incluyendo ajustes de servidor, comandos SMS y pasos de instalación
keywords:
  - Configuración TZone AVL-05
  - Configuración AVL-05 Plaspy
  - Configuración servidor TZone
  - Configuración rastreador GPS AVL-05
  - Configuración dispositivo Plaspy
  - Comandos SMS AVL-05
  - Configuración plataforma rastreo vehicular
  - Guía integración rastreador GPS
  - Seguimiento de flotas AVL-05
  - Pasos configuración TZone
---

# TZone - AVL-05 Configuración

Esta página describe el contexto público de configuración para usar el rastreador vehicular GPS TZone AVL-05 con Plaspy. Resume los ajustes de servidor prácticos, el flujo de instalación más común y los comandos SMS públicos que el fabricante proporciona para apuntar el dispositivo hacia Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; por eso, utilice la documentación del fabricante junto con esta guía al aplicar parámetros en su equipo.

## Resumen de configuración

El objetivo de estas configuraciones es preparar un AVL-05 para que envíe de forma confiable datos de ubicación y estado a Plaspy, permitiendo seguimiento en vivo y monitoreo de eventos. Para el AVL-05 el fabricante proporciona un conjunto de comandos SMS que se usan habitualmente para configurar el APN, el intervalo de reporte, el servidor GPRS y para activar el reporte por GPRS.

- Configure el APN de la red del dispositivo para que use datos móviles y pueda conectarse a Plaspy.
- Establezca un intervalo de actualización adecuado para que el dispositivo reporte con la frecuencia deseada.
- Apunte la configuración GPRS del dispositivo al endpoint compartido de Plaspy para que los mensajes lleguen a la plataforma.
- Active el reporte por GPRS para que el rastreador envíe datos a través de la red móvil.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy para monitoreo y alertas.

## Ajustes del servidor Plaspy

- El dominio de servidor d.plaspy.com debe aceptarse como el endpoint DNS para la configuración del dispositivo.
- La IP del servidor 54.85.159.138 es la dirección numérica que puede usar en lugar del dominio.
- El puerto 8888 es el puerto en el que Plaspy escucha conexiones de dispositivos.
- El transporte puede ser UDP o TCP; configure el dispositivo usando el transporte que requiera el rastreador o su instalación.
- Plaspy detecta automáticamente el protocolo del rastreador, y todos los dispositivos en Plaspy usan el mismo puerto para conexiones entrantes.

## Requisitos previos habituales

- Un dispositivo AVL-05 instalado y con alimentación según las instrucciones del fabricante.
- Una tarjeta SIM activa con datos habilitados y crédito suficiente en SMS si va a usar comandos por SMS.
- Acceso al número telefónico del dispositivo para poder enviar los comandos SMS de configuración.
- El método o herramienta de configuración oficial del fabricante, como comandos SMS o software del proveedor.
- Una cuenta en Plaspy y el flujo de registro de dispositivos listo para añadir o identificar el rastreador una vez que empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

El AVL-05 puede configurarse para enviar datos GPRS al endpoint y puerto del servidor Plaspy para que la plataforma reciba los mensajes de ubicación y estado para su procesamiento. Una vez configurado, Plaspy detecta automáticamente el protocolo del equipo y asocia los datos entrantes con la cuenta correspondiente para visualización y reportes.

- El rastreador envía datos GPRS al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138.
- Los datos se transmiten por el puerto 8888 usando UDP o TCP según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo y parsea los mensajes entrantes del AVL-05.
- Los eventos reportados y las actualizaciones de posición quedan visibles en Plaspy para monitoreo, reproducción y alertas.
- Asegúrese de que el APN y el modo GPRS del dispositivo estén habilitados para que el rastreador pueda establecer conexión con el servidor Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante, como comandos SMS o software del proveedor, según lo suministrado por TZone.
2. Configure el APN del dispositivo con los datos de su operador móvil para permitir el uso de datos celulares.
3. Introduzca el servidor de Plaspy como d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del equipo.
4. Ajuste el puerto del servidor a 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración en el dispositivo o enviando los comandos SMS correspondientes.
6. Reinicie el dispositivo si el fabricante lo recomienda para aplicar cambios de red y servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo y la llegada de datos en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El fabricante del AVL-05 provee comandos SMS para configurar el rastreador. Envíe estos comandos como mensajes SMS al número del dispositivo en el orden indicado al realizar una configuración inicial.

1. Establecer el APN del operador
```text
*000000,011,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
- Reemplace {{apn}} por el APN de su operador móvil.
- Opcionalmente incluya {{apnu}} y {{apnp}} si su SIM requiere un nombre de usuario y contraseña para el APN. El comando puede enviarse solo con APN o con APN más usuario y contraseña.

2. Ajustar el intervalo de actualización a 60 segundos
```text
*000000,018,60,999#
```
- Este ejemplo fija el intervalo de reporte. Modifique el primer valor numérico si desea otra frecuencia de envío según la guía del fabricante.

3. Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
*000000,015,0,54.85.159.138,8888#
```
- Este comando indica al dispositivo que reporte al servidor Plaspy en la IP 54.85.159.138 y puerto 8888. Puede usar el dominio d.plaspy.com en lugar de la IP si lo prefiere y el firmware lo soporta.

4. Activar el modo GPRS
```text
*000000,016,1#
```
- Esto habilita el reporte por GPRS en el dispositivo para que envíe datos a través de la conexión de datos móviles.

Notas sobre estos comandos:
- El token inicial *000000 en estos ejemplos es el prefijo de comando usado por el fabricante; confirme si su dispositivo utiliza una contraseña o formato de comando diferente antes de enviar.
- Mantenga el orden de configuración: primero APN, luego servidor y finalmente activación de GPRS para asegurar una conectividad inicial fiable.
- Estos comandos son ejemplos públicos proporcionados por el fabricante y deben usarse como parte del flujo de configuración documentado por el fabricante.

## Notas de configuración

- Las revisiones de firmware y hardware pueden usar formatos de comando o orden de parámetros ligeramente distintos. Confirme la sintaxis exacta en la documentación del fabricante.
- Elija UDP o TCP según los requisitos de la instalación y el comportamiento de la red; UDP suele ser más liviano, mientras que TCP garantiza la entrega a costa de mayor sobrecarga.
- La configuración por SMS es comúnmente soportada en el AVL-05; verifique que el número de teléfono del equipo sea correcto y que haya crédito disponible para SMS.
- Después de aplicar los ajustes, espere un breve período para que el dispositivo se registre en la red móvil antes de validar la conectividad en Plaspy.
- Mantenga siempre una copia de la lista original de comandos del fabricante y cualquier nota específica del equipo para mantenimiento futuro.

## Por qué usar Plaspy con esta configuración

Configurar el TZone AVL-05 para reportar a Plaspy ofrece a las organizaciones visibilidad centralizada de ubicaciones de vehículos, reportes de eventos y monitoreo operativo sin necesitar endpoints de servidor específicos por dispositivo. Usar el servidor y puerto compartidos de Plaspy simplifica las implementaciones porque la plataforma detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante.

Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and command syntax always verify details on the official manufacturer website http://www.tzonedigital.com/.
