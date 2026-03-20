---
slug: /galileosky/10/configuration
id: 10-configuration
sidebar_label: Configuration
title: GalileoSky - 10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GalileoSky 10 y su compatibilidad con Plaspy, con ajustes de servidor y flujo de instalación
keywords:
  - configuración GalileoSky 10
  - instalación GalileoSky 10
  - configuración servidor GalileoSky 10
  - GalileoSky 10 con Plaspy
  - configuración rastreador Plaspy
  - guía configuración rastreador GPS
  - configuración seguimiento de vehículos
  - configuración terminal GPS GLONASS
  - configuración seguimiento CAN bus
  - ajustes servidor seguimiento de flotas
---

# GalileoSky - 10 Configuración

Esta página documenta el contexto público de configuración para usar el terminal GalileoSky 10 con Plaspy. Resume los pasos prácticos y los ajustes de servidor compartidos necesarios para enviar datos de ubicación y sensores desde el dispositivo a la plataforma Plaspy. La información aquí sirve como referencia técnica para instaladores e integradores que preparan el GalileoSky 10 para su visibilidad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la revisión de firmware, las opciones de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para entender el flujo común y los valores de servidor de Plaspy que deberá ingresar en la utilidad de configuración de GalileoSky o en la herramienta de gestión del dispositivo.

## Resumen de la configuración

Esta configuración prepara el GalileoSky 10 para comunicarse con Plaspy mediante el endpoint y el puerto compartidos de la plataforma. El proceso se centra en dirigir la telemetría y los datos CAN o de sensores del equipo al servidor correcto de Plaspy y en validar que el dispositivo aparezca en su proyecto o cuenta de Plaspy.

- Ingrese el endpoint y el puerto del servidor Plaspy en la interfaz de configuración del GalileoSky.
- Seleccione el protocolo de transporte si el dispositivo requiere elegir entre UDP y TCP.
- Guarde y aplique los ajustes para habilitar el envío de datos desde el rastreador hacia Plaspy.
- Verifique que el rastreador esté reportando ubicación y datos de sensores o CAN en Plaspy.
- Confirme la visibilidad del dispositivo y el correcto registro de eventos dentro de la plataforma Plaspy.

## Ajustes del servidor Plaspy

Utilice los siguientes valores de Plaspy al configurar el GalileoSky 10 para que reporte a la plataforma:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP — the device may be configured using either protocol on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos previos antes de la configuración

- Asegúrese de que el GalileoSky 10 tenga una fuente de alimentación estable y esté instalado según las indicaciones del fabricante.
- Tenga acceso a la herramienta oficial de configuración de GalileoSky o a la interfaz web/console proporcionada por el proveedor.
- Confirme la versión de firmware del dispositivo y revise las notas de la versión del proveedor que puedan afectar el comportamiento de la configuración.
- Prepare acceso a su cuenta o proyecto en Plaspy para verificar la conectividad y visibilidad del dispositivo después de la configuración.
- Reúna los identificadores relevantes del dispositivo, como IMEI o número de serie, para poder emparejar el rastreador en Plaspy una vez que comience a reportar.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GalileoSky 10 envía su telemetría y los datos de sensores o del bus CAN al endpoint y puerto compartidos de Plaspy para que la plataforma procese y muestre la actividad del dispositivo. Esto permite la supervisión centralizada y el manejo de eventos dentro de Plaspy.

- El rastreador se configura para reportar a d.plaspy.com o a la IP equivalente 54.85.159.138 en el puerto 8888.
- Los datos se envían por el protocolo de transporte seleccionado, UDP o TCP, según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador e interpreta los datos entrantes para su procesamiento en la plataforma.
- Las entradas de sensores y los parámetros del bus CAN se reenvían a Plaspy como parte del flujo de telemetría del dispositivo.
- Una vez que el dispositivo transmite al endpoint de Plaspy, queda visible para posicionamiento, monitoreo de eventos y supervisión operativa.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración de GalileoSky proporcionado por el fabricante.
2. Localice los ajustes de servidor o de reporte en la interfaz de configuración del dispositivo.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor.
4. Configure el puerto 8888 para el reporte saliente a Plaspy.
5. Elija UDP o TCP si el dispositivo solicita seleccionar el transporte.
6. Aplique o guarde la configuración y siga las indicaciones del proveedor para confirmar los cambios.
7. Reinicie el dispositivo si el fabricante lo requiere para activar los nuevos ajustes.
8. Valide que el dispositivo reporte a Plaspy y que aparezca en su proyecto o cuenta de Plaspy.

## Ejemplos de comandos de configuración

El método de configuración y la sintaxis de comandos del GalileoSky 10 pueden variar según el firmware y las herramientas del fabricante. Como los comandos exactos son específicos del fabricante y no se proporcionan aquí, consulte la guía de configuración de GalileoSky o use la utilidad oficial para ingresar los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138) y el puerto 8888. Si su herramienta soporta comandos por línea de comandos o estilo SMS, siga los ejemplos del fabricante y sustituya los valores del servidor y puerto de Plaspy arriba indicados.

## Notas de configuración

- Las diferencias de firmware o revisiones de hardware pueden cambiar la forma de ingresar los ajustes; confirme siempre los pasos exactos con la documentación del GalileoSky para el modelo 10.
- Elija UDP o TCP según las necesidades de la instalación y las características de la red; Plaspy soporta ambos y detectará automáticamente el protocolo entrante.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración entre distintos modelos de rastreadores.
- Al configurar el reporte del bus CAN y de sensores, valide que el mapeo de telemetría en el dispositivo coincida con lo que espera ver en Plaspy.
- Mantenga un registro de identificadores del equipo, como el IMEI, para facilitar la localización y verificación del rastreador una vez que comience a reportar.

## Por qué usar Plaspy con esta configuración

Configurar el GalileoSky 10 para reportar a Plaspy proporciona a los equipos acceso centralizado a la posición de los vehículos, datos de sensores y reporte de eventos en una única plataforma. Para organizaciones que requieren visibilidad operativa y monitoreo remoto, dirigir la telemetría del dispositivo y los parámetros CAN a Plaspy permite un seguimiento, diagnóstico y gestión eficientes de la flota.

To learn more about Plaspy and how it can present data from the GalileoSky 10, visit https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer details at the GalileoSky website https://galileosky.com/ as vendor procedures and firmware can change over time.
