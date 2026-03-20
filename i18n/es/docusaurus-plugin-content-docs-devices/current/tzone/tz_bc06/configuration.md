---
slug: /tzone/tz_bc06/configuration
id: tz_bc06-configuration
sidebar_label: Configuration
title: TZone - TZ-BC06 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el TZone TZ-BC06 para usarlo con Plaspy mediante ajustes de servidor públicos, comandos SMS y guía práctica de instalación
keywords:
  - Configuración TZone TZ-BC06
  - Instalación TZone TZ-BC06
  - TZone TZ-BC06 Plaspy
  - Configuración de servidor TZ-BC06
  - Configuración de software de seguimiento TZ-BC06
  - Comandos SMS para rastreador GPS
  - Configuración servidor de rastreo
  - Configuración de servidor Plaspy
  - Configuración de rastreador iBeacon
  - Configuración de seguimiento vehicular
---

# TZone - TZ-BC06 Configuración

Esta página describe el contexto público de configuración para usar el rastreador TZone TZ-BC06 con la plataforma Plaspy. Explica los ajustes compartidos de servidor que Plaspy requiere, describe el flujo de configuración habitual y presenta los comandos SMS públicos usados para apuntar el dispositivo a Plaspy. Use esta guía para preparar el dispositivo para la conectividad y verificar el envío de datos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. El TZ-BC06 puede configurarse mediante comandos SMS como los que se muestran a continuación para establecer el APN, el intervalo de reporte y la dirección del servidor GPRS de Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el TZ-BC06 para enviar datos de ubicación y estado a Plaspy de forma fiable. En los dispositivos que aceptan comandos SMS de configuración, el proceso normalmente establece parámetros de acceso a la red, comportamiento de reporte y el servidor de destino para que Plaspy pueda recibir e interpretar los datos del rastreador.

- Configure los parámetros de red del rastreador, como el APN del operador, para que pueda establecer conectividad GPRS
- Establezca el intervalo de reporte del dispositivo para que Plaspy reciba actualizaciones de ubicación oportunas
- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos se entreguen a la plataforma
- Active el modo de comunicación necesario para reportes por GPRS
- Valide que el dispositivo aparezca y reporte correctamente en Plaspy después de la configuración

## Ajustes del servidor de Plaspy

Al configurar este rastreador para Plaspy, utilice los siguientes ajustes públicos de servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un TZ-BC06 cargado y encendido, listo para la configuración
- Acceso a una tarjeta SIM válida con datos habilitados y el APN correcto para el operador móvil
- Capacidad para enviar SMS al rastreador para configuración si usa comandos SMS
- Acceso a las instrucciones o herramientas oficiales del fabricante para el TZ-BC06
- Una cuenta en Plaspy o los datos de incorporación para validar que el dispositivo aparece en la plataforma tras la configuración

## Cómo se conecta este rastreador a Plaspy

El TZ-BC06 se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar los datos del dispositivo. La configuración vincula el dispositivo al servidor de Plaspy y garantiza que se entreguen informes periódicos o por eventos.

- El rastreador se apunta al endpoint de Plaspy usando el dominio del servidor o la IP y el puerto
- Los datos del dispositivo se envían por GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede seleccionarse como UDP o TCP según el requerimiento del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma
- Tras una configuración exitosa, el dispositivo debe aparecer y reportar en Plaspy según el intervalo de reporte establecido

## Flujo habitual de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el TZ-BC06 (por ejemplo la interfaz de comandos SMS que muestra la documentación del dispositivo).
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto 8888 como el puerto de destino usado por Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte durante la configuración.
5. Aplique o guarde la configuración y envíe los comandos de activación necesarios (por ejemplo habilitar el modo GPRS).
6. Reinicie el dispositivo si el fabricante lo requiere para aplicar los cambios de red.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma con actualizaciones regulares.

## Ejemplos de comandos de configuración

El TZ-BC06 puede configurarse vía SMS con los siguientes comandos públicos. Estos comandos se presentan en el orden en que normalmente se usan. Los ejemplos emplean la contraseña del dispositivo 000000 según el conjunto de comandos públicos.

- Configure el APN del operador. Reemplace {{apn}} con el APN de su operador. Los campos opcionales {{apnu}} y {{apnp}} representan el nombre de usuario y la contraseña del APN si su operador los requiere.
```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

- Establezca el intervalo de actualización a 60 segundos. El segundo parámetro fija el intervalo en segundos y el tercer parámetro puede usarse para validez o modo según la documentación del dispositivo.
```text
*000000,018,60,999#
```

- Configure el servidor GPRS con la IP y el puerto de Plaspy. Este comando apunta el dispositivo a Plaspy usando la IP pública del servidor y el puerto.
```text
*000000,015,0,54.85.159.138,8888#
```

- Active el modo GPRS para que el dispositivo use el reporte por datos al servidor configurado.
```text
*000000,016,1#
```

Notas sobre marcadores y valores
- {{apn}} es la cadena APN de su operador móvil. Reemplace con el APN requerido para acceso a datos.
- {{apnu}} es el usuario del APN si su operador lo exige. Déjelo en blanco si no es necesario.
- {{apnp}} es la contraseña del APN si su operador la requiere. Déjelo en blanco si no es necesario.
- Los comandos de ejemplo incluyen la contraseña del dispositivo 000000 según el conjunto público. Si su dispositivo usa otra contraseña, reemplace 000000 por la contraseña correcta.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos SMS o los parámetros disponibles. Verifique la sintaxis con la documentación del fabricante del TZ-BC06.
- La configuración por SMS es un método común para este modelo; asegúrese de enviar los SMS desde un número que el dispositivo acepte si está habilitado el bloqueo por número.
- Elija UDP o TCP según la fiabilidad de su red y el comportamiento del operador; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos; apunte el rastreador a ese puerto al configurar el servidor.
- Siempre confirme las credenciales del APN y la activación de GPRS con su operador móvil antes de iniciar la resolución de problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el TZ-BC06 ofrece una ruta directa para recibir y monitorear informes de ubicación y estado en un endpoint de servidor compartido y consistente. Con los comandos SMS públicos anteriores puede apuntar rápidamente el rastreador a Plaspy y validar el comportamiento de reporte para supervisión operativa y visibilidad.

Learn more about Plaspy and how it handles multi device connectivity at https://www.plaspy.com. For device specific setup details firmware change notes and manufacturer guidance verify the latest information at the TZone website http://www.tzonedigital.com/
