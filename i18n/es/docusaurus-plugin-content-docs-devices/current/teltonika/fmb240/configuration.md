---
slug: /teltonika/fmb240/configuration
id: fmb240-configuration
sidebar_label: Configuration
title: Teltonika - FMB240 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FMB240 con Plaspy, ajustes de servidor y comandos de ejemplo
keywords:
  - configuración Teltonika FMB240
  - configurar FMB240 Plaspy
  - configuración rastreador GPS Teltonika
  - configuración servidor FMB240
  - configuración software seguimiento FMB240
  - configuración rastreador flota Teltonika
  - integración telemetría CAN FMB240
  - configuración rastreador compatible Plaspy
  - configuración sensores Bluetooth FMB240
  - guía configuración dispositivo Teltonika
---

# Teltonika - FMB240 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FMB240 con Plaspy. Resume los ajustes de servidor prácticos, los pasos de preparación habituales y un comando de ejemplo comúnmente utilizado para apuntar un FMB240 hacia Plaspy. El FMB240 es un dispositivo compacto con clasificación IP67, lectura de bus CAN y soporte Bluetooth LE; esta guía explica cómo prepararlo para la integración con Plaspy usando parámetros de configuración públicos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando está disponible, incluimos el comando de estilo SMS más habitual para establecer parámetros de servidor y conservamos los marcadores como {{apn}} para que usted pueda sustituir los valores del operador según sea necesario.

## Resumen de configuración

Aplicar la configuración prepara al FMB240 para enviar ubicación y telemetría derivada de CAN a Plaspy para seguimiento y reportes en tiempo real. El objetivo es configurar el dispositivo para que use el endpoint y puerto compartidos de Plaspy, validar la conectividad en la red celular de la instalación y confirmar que el dispositivo aparezca en la plataforma Plaspy.

- Configurar el dispositivo para que reporte al endpoint y puerto compartidos de Plaspy para que la plataforma reciba la telemetría
- Asegurarse de que el dispositivo tenga conectividad celular y los valores APN correctos para configuración por datos o SMS
- Validar que el rastreador envíe posición GPS y datos de sensores CAN a Plaspy para visibilidad y reproducción histórica
- Usar el ejemplo público de comando proporcionado para establecer dominio y puerto del servidor, manteniendo los marcadores de APN
- Recordar que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Un FMB240 alimentado y operativo, instalado o accesible para la configuración
- Una tarjeta SIM activa con plan de datos y los datos APN correctos del operador móvil
- Acceso al método de configuración oficial de Teltonika, ya sea comandos SMS o la herramienta de configuración del fabricante
- Conocimiento de los valores APN requeridos por su proveedor para completar marcadores como {{apn}} {{apnu}} y {{apnp}}
- Un área de prueba con cobertura celular para las bandas que soporta el dispositivo
- Acceso administrativo a Plaspy para confirmar que el dispositivo aparece después de la configuración

## Cómo se conecta este rastreador a Plaspy

El FMB240 se configura para reportar la ubicación GPS del dispositivo y la telemetría de CAN y sensores disponibles al endpoint y puerto compartidos de Plaspy, de manera que la plataforma pueda ingerir y normalizar los datos. Plaspy utiliza un puerto único para todos los dispositivos soportados y detecta automáticamente el protocolo para enrutar los mensajes al manejador correcto.

- El rastreador envía paquetes periódicos de posición y telemetría a d.plaspy.com en el puerto 8888
- Las señales derivadas del bus CAN y las lecturas de sensores Bluetooth se transmiten junto con los datos de ubicación cuando estén disponibles
- Plaspy recibe el flujo entrante y normaliza los mensajes del protocolo para mostrar en el panel y generar reportes
- Los eventos o alarmas se envían a Plaspy donde se pueden aplicar reglas y alertas
- El rastreador puede usar UDP o TCP según la configuración y las condiciones de la red

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de Teltonika proporcionado por el fabricante o instalador
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138
3. Establezca el puerto del dispositivo en 8888, que es el puerto único que Plaspy utiliza para todos los dispositivos
4. Seleccione el modo de transporte UDP o TCP si el dispositivo requiere elegir transporte
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante o un comando SMS
6. Reinicie el dispositivo si la metodología de configuración o el firmware lo requieren
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con la telemetría esperada

## Comandos de configuración de ejemplo

El siguiente comando público de ejemplo se usa comúnmente para establecer parámetros básicos en dispositivos Teltonika. Conserva marcadores para los ajustes APN que usted deberá reemplazar por los valores de su operador. Este comando configura el dominio y puerto del servidor apuntando a Plaspy e incluye el parámetro de bandera de transporte usado por la sintaxis setparam de Teltonika.

- Comando de ejemplo estilo SMS

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre marcadores y parámetros
- {{apn}} es el Access Point Name de datos móviles para su operador celular
- {{apnu}} es el nombre de usuario del APN si lo exige el operador
- {{apnp}} es la contraseña del APN si lo exige el operador
- 2004 configura el dominio del servidor a d.plaspy.com, que es el dominio público de Plaspy
- 2005 configura el puerto del servidor a 8888, que Plaspy usa para todos los dispositivos soportados
- 2006 es un parámetro de selección de transporte en el esquema setparam de Teltonika; consulte la documentación de Teltonika para confirmar los valores numéricos para UDP o TCP si es necesario

Si prefiere usar la IP en vez del dominio, puede ingresar 54.85.159.138 como dirección del servidor en la herramienta de configuración del dispositivo o en el comando SMS siguiendo la sintaxis del fabricante.

## Notas de configuración

- Las versiones de firmware y hardware pueden usar IDs de parámetros o herramientas distintas; confirme siempre los nombres e IDs de parámetros con la documentación de Teltonika correspondiente a su versión de firmware
- El FMB240 admite la configuración mediante comandos estilo SMS como el mostrado arriba y también mediante el software del fabricante cuando esté disponible
- Elija UDP o TCP de acuerdo con la confiabilidad de la red y la preferencia del instalador; Plaspy soporta ambos y detectará el protocolo automáticamente
- Dado que Plaspy utiliza un único puerto para todos los dispositivos, verifique siempre que el puerto del dispositivo esté establecido en 8888 durante la configuración
- Confirme la disponibilidad del dispositivo y el soporte a largo plazo con el fabricante, ya que la página del producto puede indicar estado de Fin de Vida

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB240 con Plaspy ofrece una vía sencilla para ingerir la ubicación GPS y la telemetría derivada de CAN dentro de una única plataforma de gestión y monitoreo de flotas. El endpoint compartido de Plaspy y el puerto consistente simplifican el aprovisionamiento de dispositivos en despliegues grandes, y la detección automática de protocolos de Plaspy reduce las tareas de configuración por protocolo en cada dispositivo.

Learn more about how Plaspy can work with your Teltonika hardware by visiting the Plaspy website at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details always verify current information on the Teltonika official website https://www.teltonika-gps.com/
