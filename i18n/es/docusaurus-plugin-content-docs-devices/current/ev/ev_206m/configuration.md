---
slug: /ev/ev_206m/configuration
id: ev_206m-configuration
sidebar_label: Configuration
title: EV - EV-206M Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EV-206M con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - configuración EV EV-206M
  - configuración EV-206M
  - configuración rastreador GPS EV
  - configuración dispositivo Plaspy
  - configuración servidor rastreador GPS
  - integración rastreador de mascotas Plaspy
  - configuración SMS EV-206M
  - configuración APN EV-206M
  - configuración seguimiento EV EV-206M
  - configuración servidor Plaspy
---

# EV - Configuración del EV-206M

Esta página documenta el contexto público de configuración para usar el rastreador GPS para mascotas EV EV-206M con Plaspy. Explica los ajustes de servidor compartidos de Plaspy que deberá aplicar al dispositivo, describe los pasos prácticos de preparación y muestra comandos SMS de ejemplo que se publican para este modelo. Use esta guía para orientar un EV-206M hacia Plaspy y validar la conectividad antes de agregar el dispositivo a una cuenta Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; siga la guía del proveedor EV o los procedimientos SMS proporcionados para este modelo mientras confía en los valores de endpoint comunes de Plaspy que se muestran más abajo.

## Resumen de la configuración

Preparar un EV-206M para Plaspy consiste principalmente en asegurar que el rastreador pueda alcanzar el endpoint de Plaspy y que las opciones necesarias en el dispositivo estén habilitadas. El flujo público de configuración para este modelo suele usar comandos SMS para ajustar la zona horaria, el APN y la información del servidor, y algunas compilaciones de proveedor requieren que el fabricante habilite la opción de cambiar servidor antes de poder actualizar esos ajustes.

- Configure el APN del dispositivo para que el rastreador tenga una conexión de datos móviles funcional.
- Ajuste la zona horaria del rastreador para que las marcas de tiempo sean correctas en Plaspy.
- Actualice la configuración del servidor del rastreador para apuntar a Plaspy y así entregar ubicación y telemetría.
- Valide la selección de transporte (UDP o TCP) si el dispositivo requiere elegir uno.
- Confirme que el dispositivo reporta correctamente a Plaspy y aparece en su cuenta.
- Si es necesario, coordine con el fabricante para habilitar la opción de cambio de servidor.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe establecer el puerto 8888 para este dispositivo también

## Requisitos típicos antes de la configuración

- Un EV-206M cargado con una tarjeta SIM activa y un plan de datos que soporte el envío de datos del dispositivo
- Capacidad para enviar comandos SMS al rastreador o acceso a la aplicación o herramienta de configuración del proveedor
- El APN y, si corresponde, el nombre de usuario y la contraseña del APN del operador celular
- Conocimiento de la contraseña predeterminada del rastreador para comandos SMS; la documentación pública para este modelo indica 123456 como contraseña predeterminada
- Acceso al soporte del proveedor para habilitar el cambio de servidor en unidades que restringen la configuración por defecto
- Una cuenta Plaspy preparada para recibir el dispositivo una vez que reporte correctamente

## Cómo se conecta este rastreador a Plaspy

El EV-206M envía posiciones y telemetría de actividad al endpoint del servidor Plaspy para que los datos aparezcan en los paneles, alertas y líneas de tiempo históricas de Plaspy. Para Plaspy, el dispositivo debe apuntar al host o IP del servidor compartido y al puerto común para que la plataforma pueda ingerir los mensajes y detectar automáticamente el protocolo correcto.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy
- Los mensajes se envían por UDP o TCP en el puerto 8888 según la configuración del dispositivo u operador
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere los datos de posición y eventos
- Una vez conectado, la ubicación, la actividad y los eventos de presencia en el hogar son visibles en Plaspy
- Validar el envío exitoso confirma que el rastreador está visible y enviando telemetría a Plaspy

## Flujo de configuración habitual

1. Acceda al método oficial de configuración EV para el EV-206M, como la app del proveedor, la interfaz de comandos SMS o el canal de soporte del proveedor para realizar la configuración.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 como valor de servidor.
3. Establezca el puerto en 8888, que es el puerto común de Plaspy usado por todos los dispositivos.
4. Elija el transporte UDP o TCP si el rastreador requiere seleccionar uno.
5. Aplique o guarde la configuración mediante el método del proveedor seleccionado o enviando los comandos SMS correspondientes.
6. Reinicie el dispositivo si el proveedor o la herramienta de configuración lo recomienda para aplicar los ajustes de servidor y red.
7. Valide que el EV-206M reporte a Plaspy revisando la presencia del dispositivo y la telemetría reciente en su cuenta Plaspy.

## Comandos de configuración de ejemplo

La documentación pública de EV para el EV-206M proporciona comandos tipo SMS usados para configurar varios ajustes. La contraseña SMS predeterminada publicada para estos comandos es 123456. Los comandos se muestran a continuación tal como se envían por SMS al dispositivo.

- Establecer la zona horaria a UTC 0
```text
123456L+00
```

- Configurar el APN del operador
  - Solo APN básico
```text
123456S1,{{apn}}
```
  - APN con usuario y contraseña como marcadores
```text
123456S1,{{apn}},{{apnu}},{{apnp}}
```
  - Explicación: mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por el APN, el usuario APN y la contraseña APN de su operador según sea necesario

- Establecer la IP y el puerto del servidor
  - El ejemplo público requiere que el fabricante habilite la opción de cambiar servidor en algunas unidades
```text
123456I1,54.85.159.138,8888
```
  - Nota: Este ejemplo usa la IP del servidor Plaspy y el puerto compartido 8888. Alternativamente, puede apuntar el dispositivo a d.plaspy.com si acepta un dominio en lugar de una IP, sujeto al soporte del proveedor.

Notas importantes sobre estos comandos
- La contraseña del dispositivo 123456 es la predeterminada documentada públicamente para el flujo de configuración por SMS del EV-206M; consulte al proveedor para los pasos para cambiar la contraseña.
- Algunas unidades EV requieren que el fabricante habilite el cambio de servidor antes de que los comandos de modificación de servidor tengan éxito. Contacte al soporte de EV si el comando es rechazado.
- Envíe cada comando como un SMS separado al rastreador y siga la guía del proveedor sobre mensajes de confirmación.

## Observaciones de configuración

- Diferencias de firmware y revisiones de hardware pueden cambiar la sintaxis exacta de los SMS o los comandos disponibles; siempre verifique los comandos con la documentación del dispositivo.
- El EV-206M soporta configuración vía SMS como se muestra, y las apps o herramientas del proveedor pueden ofrecer alternativas gráficas para APN y ajustes de servidor.
- Elija UDP o TCP según la fiabilidad del operador y la capacidad del dispositivo; Plaspy soporta ambos transportes en el puerto 8888 y detecta automáticamente el protocolo al conectarse.
- Si el dispositivo rechaza cambios de servidor, coordine con el fabricante para habilitar la opción de modificación de servidor antes de intentar apuntar el rastreador a Plaspy.
- Asegúrese de que los ajustes APN sean correctos y que la tarjeta SIM tenga datos habilitados para que el rastreador pueda establecer sesión y enviar mensajes uplink a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el EV-206M centraliza la ubicación de la mascota, la telemetría de actividad y los eventos de presencia en el hogar en una sola plataforma de monitoreo. Esta combinación permite a propietarios y operadores recibir actualizaciones casi en tiempo real, configurar alertas y revisar el historial de ubicaciones sin la necesidad de gestionar un servidor personalizado, ya que Plaspy expone un endpoint compartido y maneja la detección de protocolo para los dispositivos compatibles.

To learn more about Plaspy and how to integrate trackers like the EV-206M visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and manufacturer guidance verify current information at the EV official site http://www.eviewltd.com/ as vendor setup steps and firmware behavior can change over time.
