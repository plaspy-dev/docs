---
slug: /topfly/solarx_130/configuration
id: solarx_130-configuration
sidebar_label: Configuration
title: TopFly - SolarX 130 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar TopFly SolarX 130 para Plaspy con ajustes públicos de servidor, comandos SMS y guía práctica de instalación
keywords:
  - Configuración TopFly SolarX 130
  - Instalación TopFly SolarX 130
  - Configuración SolarX 130 Plaspy
  - Configuración de servidor SolarX 130
  - Configuración rastreador GPS SolarX 130
  - Configuración rastreador TopFly
  - Ajustes de servidor Plaspy
  - Configuración SMS rastreador GPS
  - Rastreo de activos SolarX 130
  - Configuración rastreador de remolque
---

# TopFly - SolarX 130 Configuración

Esta página describe el contexto público de configuración para usar el TopFly SolarX 130 con la plataforma Plaspy. Se enfoca en los ajustes de servidor públicos y en el flujo de configuración común necesario para apuntar el dispositivo a Plaspy, de modo que la ubicación, las alarmas y la telemetría de sensores sean visibles en su cuenta Plaspy.

Plaspy utiliza configuraciones de servidor compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, esta página incluye los comandos SMS públicos del SolarX 130 y muestra cómo se corresponden con los ajustes del servidor de Plaspy.

## Resumen de la configuración

El objetivo de esta configuración es preparar el SolarX 130 para que se comunique de forma fiable con Plaspy usando el endpoint y el puerto compartidos de la plataforma. Para el SolarX 130 el fabricante ofrece un flujo de configuración por SMS que establece la zona horaria, el APN, el servidor y el intervalo de reporte.

- Apuntar el equipo al endpoint y puerto de Plaspy para que la telemetría llegue a la plataforma.
- Configurar el APN y los parámetros GPRS para habilitar la subida de datos por celular y los comandos por SMS cuando sean necesarios.
- Ajustar el intervalo de reporte según sus requisitos de visibilidad y autonomía de batería.
- Verificar que el dispositivo se registre y comience a enviar posiciones y eventos a Plaspy.
- Asegurarse de que la contraseña del dispositivo y los marcadores de posición como los valores del APN estén rellenados con los datos de su operador SIM.

## Ajustes del servidor Plaspy

Utilice estos ajustes públicos de Plaspy al configurar el SolarX 130:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming connections

Nota: Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles.

## Requisitos típicos antes de la configuración

- Un SolarX 130 con batería cargada y acceso físico al equipo para la configuración inicial o control por SMS.
- Una SIM celular activa con datos habilitados y los detalles de APN correctos para su operador.
- Capacidad para enviar comandos SMS al número del dispositivo si va a usar la configuración por SMS como se muestra más abajo.
- La contraseña del dispositivo para la configuración (los comandos de ejemplo públicos usan la contraseña por defecto 0000).
- Acceso a la documentación o herramientas oficiales de TopFly si se requiere una utilidad del proveedor o pasos específicos de firmware.
- Conocimientos básicos sobre si su instalación debe usar UDP o TCP para la selección del transporte.

## Cómo se conecta este rastreador a Plaspy

El SolarX 130 envía ubicación, alarmas y telemetría de sensores al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar y procesar los datos del dispositivo. El equipo puede configurarse para subir puntos almacenados en búfer cuando vuelve la conectividad y para reportar eventos como movimiento o extracción.

- El rastreador se configura para reportar a Plaspy usando el endpoint y puerto especificados arriba.
- Las actualizaciones de ubicación y la telemetría se transmiten por datos celulares usando el APN y la configuración GPRS establecidos.
- Los eventos de movimiento, extracción y de sensores se reenvían a Plaspy conforme el dispositivo los detecta.
- Los datos almacenados mientras el equipo estuvo sin conexión se cargan al servidor de Plaspy una vez que se restablece la red.
- Plaspy proporciona visibilidad y procesamiento de eventos una vez que el dispositivo informa correctamente al endpoint compartido.

## Flujo de configuración común

1. Acceda al método oficial de configuración de TopFly para el SolarX 130, normalmente comandos SMS o la herramienta del proveedor, según el firmware del equipo.
2. Introduzca el endpoint del servidor de Plaspy usando la IP 54.85.159.138 o el dominio d.plaspy.com cuando el firmware lo soporte.
3. Ajuste el puerto a 8888, ya que Plaspy usa ese mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir un protocolo de transporte.
5. Aplique o guarde la configuración en el dispositivo usando el método del fabricante (para SMS, envíe los comandos SMS necesarios).
6. Reinicie el equipo si las instrucciones del fabricante indican un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo se reporta a Plaspy comprobando el estado en línea y la posición inicial en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El SolarX 130 ofrece comandos SMS públicos para las configuraciones más comunes. El ejemplo del fabricante utiliza la contraseña del dispositivo 0000 en las cadenas de comando. Mantenga el orden mostrado al aplicar estos comandos durante la configuración inicial.

1. Establecer la zona horaria a UTC 0

```
GMT,0000,0#
```

2. Configurar el APN del operador (aparecen marcadores de posición)

```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```

- {{apn}} es el nombre del APN de su operador.
- {{apnu}} es el usuario del APN si su operador lo requiere; si no, dejar vacío.
- {{apnp}} es la contraseña del APN si su operador la requiere; si no, dejar vacío.

3. Configurar el servidor GPRS con la IP y puerto de Plaspy

```
IP,0000,54.85.159.138 8888#
```

- Este ejemplo usa la IP y el puerto del servidor Plaspy tal como se indican en los ajustes públicos de Plaspy.
- Si el firmware de su equipo admite nombres de dominio en el comando de servidor, puede sustituir d.plaspy.com por la IP según la guía del fabricante.

4. Ajustar el intervalo de reporte a 60 segundos

```
TIMER,0000,60:60:0:0#
```

- El formato y los campos del comando TIMER siguen la documentación pública del dispositivo. Ajuste los valores numéricos para cambiar los intervalos según lo que el equipo soporte.

Notas importantes sobre los comandos
- Los comandos de ejemplo usan la contraseña por defecto del dispositivo 0000. Reemplace esto con la contraseña real si ya fue cambiada.
- Mantenga el orden de los comandos mostrado al realizar una configuración base: zona horaria, APN, servidor y luego intervalo de reporte.
- Si TopFly ofrece un canal alternativo de configuración (USB, app del proveedor o herramienta en la nube), utilice esa herramienta siguiendo la guía del fabricante.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique los comandos con la documentación del TopFly SolarX 130 correspondiente a su versión de firmware.
- Este modelo admite configuración por SMS como se muestra en los comandos de ejemplo; algunos proveedores también ofrecen utilidades para PC o móviles que aplican las mismas configuraciones.
- Elija UDP o TCP según su red y sus preferencias operativas; Plaspy aceptará cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo del dispositivo automáticamente.
- Siempre reemplace los marcadores de APN con los valores correctos de su operador SIM para habilitar los datos GPRS y las subidas al servidor.
- Tras aplicar los ajustes, confirme que el dispositivo es visible en Plaspy para verificar conectividad y enrutamiento correcto al servidor.

## Por qué usar Plaspy con esta configuración

Usar el SolarX 130 con Plaspy proporciona visibilidad continua de ubicación, reporte de eventos y carga de datos en búfer para despliegues con conectividad intermitente. El proceso de configuración público aquí mostrado se centra en lograr que el equipo reporte de manera fiable a Plaspy para que usted pueda monitorear activos, recibir alarmas e integrar la telemetría en sus flujos operativos.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific setup details, firmware behavior and the latest manufacturer instructions at https://www.topflytech.com/ to ensure your installation uses the correct commands and procedures.
