---
slug: /tzone/tz_rd05/configuration
id: tz_rd05-configuration
sidebar_label: Configuration
title: TZone - TZ-RD05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para TZone TZ-RD05 y servidor Plaspy, incluye APN SMS y ajustes GPRS
keywords:
  - Configuración TZone TZ-RD05
  - Instalación TZone TZ-RD05
  - TZ-RD05 en Plaspy
  - Configuración Plaspy
  - Guía de configuración TZone
  - Comandos SMS TZ-RD05
  - Configuración APN
  - Configuración servidor GPRS
  - Ajustes servidor del rastreador
  - Configuración del dispositivo TZone
---

# TZone - Configuración del TZ-RD05

Esta página documenta el contexto público de configuración para usar el TZone TZ-RD05 con la plataforma Plaspy. Resume los pasos prácticos y los comandos públicos que normalmente se emplean para apuntar un dispositivo compatible a Plaspy, de modo que el equipo pueda reportar datos a la plataforma. Use esta guía junto con la documentación del fabricante para detalles completos del dispositivo.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando existan comandos públicos por SMS o GPRS se muestran a continuación; siempre verifique los detalles con la documentación de TZone para conocer el comportamiento más reciente.

## Resumen de la configuración

El objetivo de este proceso es preparar el TZ-RD05 para comunicarse de forma fiable con Plaspy y validar la conectividad para que el dispositivo sea visible en la plataforma. Los comandos suministrados por TZone permiten establecer el APN, el intervalo de reporte y el servidor GPRS para que el rastreador informe a Plaspy.

- Configure los parámetros de red del dispositivo para que pueda establecer conexiones de datos GPRS o enviar los reportes necesarios.
- Defina el APN del operador que utilizará el equipo para acceso a datos móviles.
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy para que la plataforma reciba la telemetría.
- Defina el intervalo de reporte para que la ubicación o los eventos lleguen a Plaspy con la cadencia esperada.
- Valide que el dispositivo esté en línea y reportando a Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de Plaspy al configurar el dispositivo o al emitir comandos para servidor GPRS:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede requerir seleccionar UDP o TCP)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy usa el mismo puerto para todos los dispositivos compatibles. Configure el TZ-RD05 para que reporte al endpoint de Plaspy usando el dominio o la dirección IP y el puerto 8888.

## Requisitos típicos antes de la configuración

- Acceso físico al TZ-RD05 y a las credenciales de instalador que sean necesarias.
- Una tarjeta SIM activa con plan de datos móviles y los parámetros APN correctos para el operador.
- Capacidad para enviar comandos SMS al dispositivo si utiliza configuración por SMS según lo proporcione el fabricante.
- Conocimiento del intervalo de reporte deseado y de cualquier contraseña de configuración del proveedor requerida para los comandos.
- Una cuenta o proyecto en Plaspy preparado para recibir y mostrar los datos del dispositivo (verifique los requisitos de registro de ID o IMEI con Plaspy).
- El dispositivo debe estar encendido y tener cobertura de red durante la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el dispositivo queda apuntando al endpoint compartido de Plaspy para que la plataforma ingiera los mensajes del equipo y los asocie a una cuenta.

- El rastreador se configura con los ajustes del servidor Plaspy (dominio o IP) y puerto 8888 para entregar los datos a Plaspy.
- El dispositivo usa su conectividad de datos móviles para abrir una sesión TCP o UDP hacia el servidor Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes.
- Los reportes enviados por el dispositivo se vuelven visibles en Plaspy para monitoreo y gestión de eventos.
- Validar la conectividad asegura que el dispositivo aparezca en línea y envíe actualizaciones conforme al intervalo configurado.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del TZ-RD05 proporcionado por TZone (comandos SMS del fabricante, herramienta web/serial o software del proveedor) según la documentación de TZone.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del servidor GPRS.
3. Configure el puerto en 8888 en la configuración del dispositivo.
4. Elija UDP o TCP si el equipo requiere selección explícita del transporte.
5. Establezca el APN del operador y cualquier usuario o contraseña APN requerida por la SIM utilizada.
6. Aplique o guarde la configuración y active el modo GPRS si el dispositivo lo solicita.
7. Reinicie o haga un ciclo de energía del equipo si el fabricante lo recomienda.
8. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo en Plaspy y confirmando que se reciben datos en el intervalo esperado.

## Comandos de ejemplo para configuración

El TZ-RD05 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos públicos aparecen en la documentación del fabricante. Preserve los marcadores de posición al enviar los comandos y reemplácelos por los valores de su operador.

1. Establecer el APN del operador
```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```
- Reemplace {{apn}} por el APN de su operador móvil.
- {{apnu}} es el usuario APN cuando el operador lo requiere; omítalo o déjelo en blanco si no se usa.
- {{apnp}} es la contraseña APN cuando el operador la requiere; omítala o déjela en blanco si no se usa.
- Algunas variantes de firmware aceptan la forma corta sin usuario ni contraseña:
```text
*000000,011,{{apn}}#
```

2. Ajustar el intervalo de actualización a 60 segundos
```text
*000000,018,60,999#
```
- Este ejemplo fija un intervalo de reporte de 60 segundos; modifique el primer parámetro numérico para cambiar el intervalo según la documentación del proveedor.

3. Configurar el servidor GPRS con la IP y puerto de Plaspy
```text
*000000,015,0,54.85.159.138,8888#
```
- El comando anterior apunta el dispositivo a Plaspy usando la IP pública y el puerto 8888.
- Si el equipo soporta un dominio en lugar de una IP, sustituya d.plaspy.com donde la sintaxis del proveedor lo permita.

4. Activar el modo GPRS
```text
*000000,016,1#
```
- Este comando habilita el modo de datos GPRS para que el dispositivo intente conectarse al servidor configurado.

Notas sobre estos comandos:
- Envíe cada comando como SMS separado al número del equipo.
- Mantenga el orden indicado: primero configure APN y servidor, luego active GPRS y el reporte.
- Los comandos y el formato de parámetros pueden variar según el firmware. Confirme la sintaxis exacta en la documentación de TZone.

## Observaciones de configuración

- Las diferencias de firmware pueden alterar la sintaxis exacta de los comandos SMS y los parámetros disponibles; verifique siempre las notas de la versión de firmware de TZone.
- El dispositivo soporta configuración vía SMS como se muestra en los comandos públicos; pueden existir métodos alternativos mediante serial, RS485 o LAN según la documentación de TZone.
- Elija transporte UDP o TCP de acuerdo con los requisitos de la red y el soporte del dispositivo; Plaspy detectará el protocolo automáticamente una vez que el equipo se conecte.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos; asegúrese de que las reglas de firewall permitan conexiones salientes del dispositivo hacia el puerto 8888 en d.plaspy.com o la IP 54.85.159.138.
- Guarde un registro de cualquier contraseña de proveedor usada en comandos SMS y considere asegurar el dispositivo después de la configuración.

## Por qué usar Plaspy con esta configuración

Configurar el TZ-RD05 para que reporte a Plaspy proporciona un endpoint de servidor consistente y una plataforma centralizada para recibir los datos del dispositivo. Para organizaciones que requieren visibilidad y supervisión operativa, dirigir los reportes al servidor Plaspy simplifica el monitoreo, el procesamiento de eventos y la integración con flotas o flujos de trabajo de activos.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Los métodos de configuración por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información más reciente sobre la configuración del TZ-RD05 y la sintaxis de los comandos en el sitio oficial de TZone http://www.tzonedigital.com/ antes del despliegue.
