---
slug: /minifinder/watch/configuration
id: watch-configuration
sidebar_label: Configuration
title: MiniFinder - Watch Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el MiniFinder Watch y reportarlo a Plaspy usando servidor compartido y comandos SMS de ejemplo
keywords:
  - Configuración MiniFinder Watch
  - Instalación MiniFinder Watch
  - Integración MiniFinder Watch Plaspy
  - Configuración servidor MiniFinder Watch
  - Configuración software seguimiento MiniFinder Watch
  - Configuración plataforma GPS MiniFinder Watch
  - Configuración rastreador Plaspy
  - Instalación rastreador GPS wearable
  - Configuración rastreador seguridad personal
  - Comandos SMS MiniFinder Watch
---

# MiniFinder - Configuración del Watch

Esta página describe la información pública disponible para conectar el MiniFinder Watch a Plaspy. Explica los ajustes de servidor compartido de Plaspy a los que debe apuntar el Watch, ejemplos de comandos SMS proporcionados por el fabricante y los pasos prácticos para preparar el equipo para que envíe ubicación, SOS, detección de caídas y telemetría a una cuenta Plaspy.

Plaspy utiliza ajustes de servidor compartidos para dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía se centra en los valores públicos y el flujo necesario para integrar el Watch con Plaspy y referencia los comandos SMS de ejemplo proporcionados por el fabricante cuando están disponibles.

## Resumen de la configuración

El objetivo de este proceso es preparar el Watch para que se comunique de forma fiable con Plaspy y aparezca en su cuenta. La configuración normalmente incluye establecer la zona horaria del dispositivo, proporcionar los datos APN del operador para conectividad celular y apuntar el equipo a la dirección y puerto del servidor de Plaspy.

- Configure el APN del operador para que el Watch use datos GPRS o LTE para reportes.
- Ajuste la zona horaria y la configuración local para que las marcas temporales coincidan con los registros en Plaspy.
- Apunte el Watch al endpoint del servidor de Plaspy y al puerto unificado para que los datos lleguen a Plaspy.
- Valide la conectividad y confirme que el Watch es visible y reporta eventos en Plaspy.
- Use el método de configuración provisto por el fabricante, como comandos SMS o su herramienta oficial, para aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el Watch puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta

Estos valores de servidor son el objetivo central para el Watch, de modo que los mensajes de ubicación, SOS y telemetría se enruten hacia su entorno Plaspy.

## Requisitos típicos antes de la configuración

- Un MiniFinder Watch cargado y encendido con el firmware del fabricante adecuado para despliegue.
- Servicio celular activo en el Watch que permita conexiones de datos o GPRS; un APN válido proporcionado por el operador.
- Acceso al método de configuración del fabricante para el Watch, como comandos basados en SMS o el software oficial de MiniFinder.
- Una cuenta Plaspy y registro del dispositivo para confirmar que el equipo aparece en la plataforma después de la configuración.
- Confirmación básica de los identificadores del dispositivo (IMEI o ID de dispositivo) para vincular el Watch al registro en Plaspy.
- Opcional: conocimiento de los marcadores de posición necesarios como {{apn}}, {{apnu}} y {{apnp}} para credenciales del operador si su SIM lo solicita.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el MiniFinder Watch envía puntos de ubicación, alertas y telemetría al endpoint y puerto compartidos de Plaspy para que el dispositivo sea visible en los paneles y en los flujos de alertas de Plaspy. El Watch se configura para reportar a la dirección de servidor de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888 y Plaspy se encarga de la detección del protocolo.

- El dispositivo envía actualizaciones de posición y telemetría al endpoint y puerto de Plaspy.
- Los eventos SOS y de detección de caídas se transmiten a Plaspy para el enrutamiento de alertas.
- Telemetría de salud, como frecuencia cardíaca y SpO2, se envía a Plaspy cuando está habilitada y es compatible con el dispositivo.
- Plaspy recibe los mensajes entrantes del dispositivo en el puerto 8888 y determina automáticamente el protocolo correcto para parsear los datos.
- La visibilidad en Plaspy permite a cuidadores y administradores ver ubicación en tiempo real, historiales de eventos y alertas.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de MiniFinder para el Watch, por ejemplo los comandos SMS del fabricante o la herramienta de configuración.
2. Verifique que el dispositivo tenga una SIM activa con las credenciales APN correctas y confirme los valores de APN si se requieren.
3. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138.
4. Establezca el puerto del servidor en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
5. Elija UDP o TCP para el transporte si el Watch requiere una selección explícita.
6. Aplique o guarde los cambios de configuración en el Watch siguiendo el procedimiento del fabricante.
7. Reinicie el dispositivo si el firmware requiere reboot para que los ajustes de red surtan efecto.
8. Valide que el dispositivo reporte a Plaspy y que aparezca en su cuenta, confirmando que llegan mensajes de ubicación y eventos.

## Comandos de configuración de ejemplo

El fabricante provee comandos por SMS para la configuración básica. Enviados en el orden mostrado, estos ejemplos de SMS configuran la zona horaria, el APN y el servidor GPRS objetivo para Plaspy.

- Configure la zona horaria a UTC+0
```
tz+00
```

- Establezca el APN del operador. Reemplace el marcador {{apn}} con el APN de su operador. Si el operador requiere usuario y contraseña, incluya {{apnu}} y {{apnp}}; esos campos son opcionales y pueden omitirse si no son necesarios.
```
S1,{{apn}}{{,{{apnu}},{{apnp}}}}
```
Nota: El comando S1 puede aceptar los campos opcionales de usuario y contraseña. Mantenga los marcadores tal como se muestran si dispone de credenciales para incluir.

- Configure el servidor GPRS a la IP y puerto de Plaspy. Esto apunta el Watch a Plaspy en el puerto 8888. El dispositivo también puede aceptar la forma de dominio dependiendo del firmware y la herramienta del fabricante.
```
IP1,54.85.159.138,8888
```

El orden es importante para una configuración confiable: primero configure la zona horaria y el APN, luego establezca el servidor GPRS para que el dispositivo pueda establecer una sesión de datos y reportar a Plaspy. Si su dispositivo acepta la forma de dominio, puede sustituir d.plaspy.com donde la herramienta del Watch lo soporte.

## Notas de configuración

- Los comandos y el formato de parámetros pueden variar según la versión de firmware y la revisión de hardware; consulte el manual del Watch para la sintaxis específica del dispositivo.
- El Watch admite configuración vía SMS según los ejemplos anteriores; las herramientas del fabricante o el software de escritorio pueden ofrecer métodos alternativos.
- Elija UDP o TCP en función de la opción de transporte del dispositivo; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores exactos de su operador móvil.
- Si la configuración no surte efecto de inmediato, reinicie el Watch tras aplicar los ajustes y verifique nuevamente la conectividad.

## Por qué usar Plaspy con esta configuración

Configurar el MiniFinder Watch para reportar a Plaspy brinda visibilidad centralizada de ubicación, eventos SOS, alertas por caídas y telemetría de salud para cuidadores y equipos de monitoreo. Usar los ajustes de servidor compartido de Plaspy simplifica la integración de múltiples dispositivos, ya que Plaspy utiliza un único puerto y detección automática de protocolos para ingerir los mensajes de los rastreadores.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify details on the official MiniFinder site https://minifinder.se/ since setup procedures and firmware behavior can change over time.
