---
slug: /astra_telematics/at240/configuration
id: at240-configuration
sidebar_label: Configuration
title: Astra Telematics - AT240 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Astra Telematics AT240 para reportar a Plaspy con parámetros públicos de servidor y comandos SMS
keywords:
  - Configuración Astra Telematics AT240
  - Configuración AT240 para Plaspy
  - Configuración de servidor AT240
  - Configuración rastreador GPS Astra Telematics
  - Comandos SMS configuración AT240
  - Ajustes servidor Plaspy
  - rastreo vehicular AT240
  - rastreo de flotas AT240
  - Configuración GPRS AT240
  - Integración rastreador con Plaspy
---

# Astra Telematics - Configuración del AT240

Esta página describe el contexto público de configuración para usar el Astra Telematics AT240 con la plataforma Plaspy. Se centra en los ajustes compartidos del servidor Plaspy y en los pasos prácticos que normalmente se emplean para apuntar un rastreador AT240 a Plaspy para telemetría y reporte de ubicación. Cuando existen comandos públicos del fabricante se incluyen como ejemplos para facilitar el proceso de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el AT240 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere los comandos y el flujo de trabajo que se muestran aquí como orientación pública práctica y no como sustituto de la documentación oficial de Astra Telematics.

## Resumen de la configuración

Esta configuración prepara el AT240 para enviar datos de ubicación y eventos a Plaspy configurando los parámetros de red del dispositivo y el endpoint del servidor. El objetivo es que el dispositivo aparezca en la plataforma Plaspy y que la conectividad GPRS sea confiable usando el APN del operador y el endpoint de Plaspy.

- Configurar las credenciales APN necesarias para que el dispositivo establezca datos GPRS.
- Establecer el endpoint del servidor Plaspy para que el rastreador reenvíe la telemetría a Plaspy.
- Seleccionar el protocolo de transporte (UDP o TCP) si el dispositivo lo requiere.
- Aplicar y guardar los ajustes, luego reiniciar o rebootear el rastreador si es necesario.
- Validar la conectividad confirmando que el dispositivo aparece en Plaspy y reporta datos.

## Ajustes del servidor Plaspy

Use los siguientes parámetros públicos de Plaspy al configurar el AT240:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará el protocolo que usa el rastreador de forma automática.

## Requisitos habituales antes de la configuración

- Un AT240 encendido y funcionando con acceso al dispositivo vía SMS o mediante la herramienta de configuración oficial de Astra Telematics.
- Una tarjeta SIM activa con plan de datos válido y los ajustes APN correctos del operador.
- Capacidad para enviar comandos SMS al dispositivo si utiliza aprovisionamiento por SMS.
- Documentación del fabricante o acceso del instalador para confirmar comandos específicos del firmware y comportamientos.
- Una cuenta de Plaspy y conocimiento de cómo agregar dispositivos a su espacio de trabajo en Plaspy para validar la visibilidad.
- Conocimientos básicos para elegir UDP o TCP según la preferencia del instalador o la guía del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El AT240 se configura para reportar posición y datos del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez que el APN y los parámetros del servidor están establecidos, el dispositivo usa GPRS para abrir una conexión con Plaspy y transmitir telemetría, de modo que la unidad quede visible en la plataforma.

- El rastreador utiliza el APN configurado para obtener conectividad de datos GPRS.
- Se apunta al endpoint de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- El dispositivo envía datos al puerto 8888 de Plaspy usando el transporte seleccionado UDP o TCP.
- Plaspy detecta automáticamente el protocolo del dispositivo y parsea la telemetría para su visualización.
- El reporte exitoso habilita el seguimiento en tiempo real y el registro de eventos dentro de Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Astra Telematics para el AT240, ya sea mediante comandos SMS o la herramienta del proveedor recomendada por el fabricante.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138 según lo requiera el método de configuración.
3. Establezca el puerto del servidor a 8888 en la configuración del dispositivo.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo exige una selección explícita.
5. Configure el APN del operador y, si aplica, el nombre de usuario y la contraseña del APN necesarios para los datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del equipo requiere un reboot para aplicar los cambios.
7. Valide que el AT240 reporte a Plaspy verificando el estado del dispositivo y la llegada de telemetría en su cuenta de Plaspy.

## Comandos de configuración de ejemplo

El AT240 soporta configuración vía SMS. A continuación se muestran los comandos SMS públicos que aparecen en la guía del fabricante. Conserve los placeholders tal como están.

- Establecer el APN del operador. Reemplace {{apn}} por la cadena APN de su operador.
```
$APAD,{{apn}}
```

- Opcionalmente establecer el nombre de usuario del APN. Reemplace {{apnu}} por el usuario APN si su operador lo requiere.
```
$APUN,{{apnu}}
```

- Opcionalmente establecer la contraseña del APN. Reemplace {{apnp}} por la contraseña APN si su operador lo requiere.
```
$APPW,{{apnp}}
```

- Establecer el servidor GPRS a la IP del servidor Plaspy. También puede usar el dominio d.plaspy.com en herramientas del proveedor si está soportado, pero el ejemplo de comando SMS público usa la IP de Plaspy.
```
$IPAD,54.85.159.138
```

- Establecer el puerto del servidor a 8888 para Plaspy.
```
$PORT,8888
```

Notas sobre los comandos anteriores:
- Envíe estos comandos SMS al número del dispositivo desde un teléfono autorizado según las instrucciones de Astra Telematics.
- Los comandos de usuario y contraseña del APN son opcionales y solo necesarios si su operador móvil los requiere.
- El orden mostrado es el recomendado para asegurar que los parámetros de red se establezcan antes de apuntar el dispositivo a Plaspy.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los SMS o los comandos disponibles; confirme siempre con la documentación de Astra Telematics para su revisión de firmware.
- Algunas herramientas del proveedor aceptan el dominio d.plaspy.com directamente; los comandos SMS suelen utilizar la IP del servidor 54.85.159.138 como se muestra arriba.
- Elija UDP o TCP según la guía de instalación; Plaspy acepta ambos y detecta el protocolo automáticamente.
- El aprovisionamiento por SMS está soportado por los comandos públicos mostrados, aunque algunos instaladores prefieren el software de configuración del proveedor para aprovisionamientos masivos o remotos.
- Conserve un registro de los placeholders {{apn}}, {{apnu}} y {{apnp}} y reemplace cada uno por los valores específicos del operador para cada SIM.

## Por qué usar Plaspy con esta configuración

Usar el AT240 con Plaspy ofrece un camino sencillo hacia la visibilidad de la flota y el monitoreo de dispositivos aprovechando el endpoint compartido de Plaspy y la detección automática de protocolos. Una vez que el dispositivo esté apuntando a Plaspy y el APN esté configurado, las organizaciones pueden confiar en la plataforma para reporte de ubicación, visibilidad de eventos y supervisión operativa de múltiples equipos usando los mismos ajustes de servidor.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance consult the official Astra Telematics documentation at https://astratelematics.com/ as manufacturer specifications and setup methods may change over time.
