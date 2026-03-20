---
slug: /maxtrack/mxt_140/configuration
id: mxt_140-configuration
sidebar_label: Configuration
title: Maxtrack - MXT-140 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Maxtrack MXT-140 y apuntarlo a Plaspy para envío de posiciones y eventos
keywords:
  - Maxtrack MXT-140
  - configuración MXT-140
  - configuración de Maxtrack
  - configuración servidor MXT-140
  - MXT-140 para Plaspy
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - configuración rastreador Plaspy
  - gestión de flotas GPS
  - guía de configuración Maxtrack
---

# Maxtrack - Configuración MXT-140

Esta página explica la configuración pública necesaria para usar el rastreador Maxtrack MXT-140 con Plaspy. Describe los pasos de puesta en marcha disponibles públicamente y los ajustes de servidor que Plaspy requiere para que el dispositivo reporte correctamente a la plataforma. Cuando se necesiten acciones del fabricante, esta guía remite a los procedimientos documentados más comunes, como la configuración por SMS que se utiliza en este modelo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El MXT-140 puede configurarse por SMS según comandos públicos; en esta página se indica cómo aplicar esos comandos y validar la conectividad hacia el endpoint de Plaspy.

## Resumen de la configuración

El objetivo es dejar al MXT-140 listo para enviar su ubicación y mensajes de dispositivo al backend de Plaspy, de modo que el equipo aparezca y reporte correctamente en su cuenta. Normalmente se configura el MXT-140 mediante el canal de configuración del fabricante (en este modelo suele usarse un comando SMS público), y usted deberá definir el endpoint del servidor, el transporte y los valores de APN/red necesarios para GPRS.

- Apuntar el rastreador al endpoint compartido de Plaspy para que la plataforma reciba posiciones y eventos.
- Proveer al dispositivo los ajustes de APN o de red necesarios para abrir sesiones de datos GPRS si se requieren.
- Aplicar la dirección y el puerto del servidor para que el MXT-140 envíe la telemetría a Plaspy al endpoint correcto.
- Validar el identificador del dispositivo y confirmar que el equipo reporte en Plaspy tras la configuración.
- Utilizar el método de configuración documentado por el fabricante (SMS o herramienta) para aplicar el formato de comando público mostrado más abajo.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Alimentar el dispositivo según las instrucciones del fabricante para que acepte configuración y conexiones de red.
- Una tarjeta SIM activa con capacidad de datos o SMS y el APN adecuado para su operador móvil.
- El IMEI del dispositivo o identificador del rastreador (trackerID) para que Plaspy pueda identificar el equipo y sustituirlo en los marcadores del SMS.
- Acceso al método de configuración del fabricante o a la documentación del MXT-140 (comandos SMS o herramienta del proveedor).
- Una cuenta en Plaspy o el flujo de registro de dispositivos para confirmar que el equipo aparece una vez que empieza a reportar.
- Conocimientos básicos sobre los marcadores de APN como {{apn}}, {{apnu}} y {{apnp}} para reemplazarlos con los valores de su red.

## Cómo se conecta este rastreador a Plaspy

El MXT-140 se configura para enviar sus posiciones y mensajes de dispositivo al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda procesar y mostrar la telemetría. La configuración suele consistir en actualizar los campos de servidor y red; luego el dispositivo iniciará las sesiones de reporte.

- El rastreador se apunta al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888.
- El equipo usa datos GPRS para abrir la conexión y enviar los reportes de posición a Plaspy.
- Plaspy acepta conexiones por UDP o TCP y detecta el protocolo del dispositivo de forma automática.
- Tras la configuración, Plaspy recibirá la telemetría y el dispositivo será visible para su monitoreo.
- La validación administrativa en Plaspy confirma el IMEI o tracker ID y comienza a mostrar la ubicación y los eventos.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Maxtrack o al software documentado por el fabricante (para el MXT-140 esto suele incluir la configuración por SMS).
2. Prepare el identificador del dispositivo (trackerID) y confirme que el equipo esté alimentado con una SIM activa y los valores APN correctos.
3. Introduzca la dirección del servidor de Plaspy como d.plaspy.com o 54.85.159.138 en la herramienta del fabricante o en el comando SMS.
4. Establezca el puerto de destino en 8888 durante la configuración.
5. Elija UDP o TCP si el dispositivo solicita selección de transporte; Plaspy soporta ambos y detectará automáticamente el protocolo usado.
6. Aplique o guarde la configuración y, si es necesario, reinicie o desconecte y vuelva a conectar la alimentación para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando en su cuenta la aparición del IMEI o tracker ID y verificando la recepción de telemetría.

## Ejemplo de comandos de configuración

El MXT-140 puede configurarse enviando comandos públicos por SMS al dispositivo. El siguiente ejemplo SMS se muestra como modelo público. La contraseña por defecto del dispositivo en este ejemplo público es 0000. Reemplace los marcadores por sus valores reales antes de enviar.

- Envíe este SMS al número del rastreador (reemplace los marcadores antes de enviar):

```text
0000,{{trackerID}},2,0,{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888,,.
```

Notas sobre el comando:
- 0000 es la contraseña por defecto mostrada en el ejemplo público. Si su equipo usa otra contraseña, sustitúyala.
- {{trackerID}} debe reemplazarse por el IMEI del dispositivo o por el identificador configurado del rastreador.
- {{apn}}, {{apnu}} y {{apnp}} son marcadores para el APN del operador, el usuario del APN y la contraseña del APN. Reemplace con los valores correctos para la SIM instalada.
- El comando establece la IP del servidor en 54.85.159.138 y el puerto en 8888, que corresponden a Plaspy. No elimine estos valores salvo indicación de la documentación oficial de Maxtrack.
- Este formato es un ejemplo público de configuración por SMS; siga el procedimiento y la sintaxis exacta del fabricante según su versión de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar ligeramente la sintaxis de los comandos o los parámetros soportados; siempre contraste con la documentación oficial de Maxtrack para su versión del dispositivo.
- El ejemplo público del MXT-140 utiliza SMS para la configuración. Dependiendo del proveedor y del firmware, también pueden existir herramientas del fabricante o interfaces USB/programación.
- Plaspy acepta UDP y TCP en el puerto compartido 8888 y detecta automáticamente el protocolo del rastreador; seleccione el transporte que requiera su instalación si el equipo lo solicita.
- Si cambia la contraseña por defecto del dispositivo después de la configuración inicial, anótela y guárdela de forma segura para poder ejecutar comandos remotos o solicitar soporte en el futuro.
- Use con cuidado los marcadores de APN; valores de APN incorrectos impedirán que el dispositivo establezca sesiones de datos GPRS para enviar telemetría.

## Por qué usar Plaspy con esta configuración

Usar el MXT-140 con Plaspy ofrece una vía directa hacia la visibilidad de su flota y el monitoreo operativo. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy permite que la plataforma reciba datos de ubicación y eventos, de modo que los equipos puedan rastrear activos, revisar estados y responder a incidentes desde un sistema centralizado.

Para obtener más información sobre Plaspy y cómo procesa datos de rastreadores, visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, notas de firmware y detalles del fabricante, verifique la información en el sitio de Maxtrack https://maxtrack.com.br ya que las especificaciones y procedimientos pueden cambiar con el tiempo.
