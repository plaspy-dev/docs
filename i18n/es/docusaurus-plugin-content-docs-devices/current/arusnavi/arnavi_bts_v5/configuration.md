---
slug: /arusnavi/arnavi_bts_v5/configuration
id: arnavi_bts_v5-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi BTS v.5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar Arusnavi Arnavi BTS v.5 en Plaspy y los ajustes de servidor necesarios
keywords:
  - Configuración Arusnavi Arnavi BTS v.5
  - Instalación Arnavi BTS v.5
  - Arusnavi BTS v.5 Plaspy
  - Configuración sensor BLE Arusnavi
  - Configuración beacon BTS v.5
  - Configuración sensor BLE cadena de frío
  - Configuración UUID MAJOR MINOR beacon Arnavi
  - Sensor de temperatura BTS v.5 Plaspy
  - Configuración sensores BLE de flota
  - Configuración gateway BLE vehicular
---

# Arusnavi - Configuración Arnavi BTS v.5

Esta página documenta el contexto público de configuración para utilizar el sensor BLE Arusnavi Arnavi BTS v.5 con Plaspy. Explica cómo se integra el BTS v.5 con Plaspy cuando el dispositivo está al alcance de un gateway BLE compatible con Plaspy o emparejado con un gateway vehicular que reenvía los anuncios BLE y la telemetría a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker en la telemetría entrante. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que utilice esta guía como un punto de partida práctico y verifique los procedimientos específicos del equipo con la documentación de Arusnavi.

## Resumen de la configuración

Este proceso prepara el Arnavi BTS v.5 para que un gateway compatible con Plaspy lo descubra y lo integre en la plataforma, de modo que la temperatura, la identidad de la baliza y los eventos de estado aparezcan junto con los datos GPS y la telemetría de la flota.

- Configure los parámetros de publicidad e identidad del BTS v.5 para que un gateway pueda reconocer cada tag.
- Asegúrese de contar con un gateway BLE compatible con Plaspy o un gateway vehicular correctamente aprovisionado para reenviar la telemetría BLE.
- Configure el reenvío del gateway hacia el endpoint del servidor Plaspy para que los datos se entreguen a la plataforma.
- Valide que los campos de temperatura, estado de contacto y iBeacon estén mapeados al activo o vehículo correcto en Plaspy.
- Verifique los intervalos de reporte y la potencia de radio para equilibrar la vida útil de la batería y la capacidad de respuesta.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar su gateway BLE compatible con Plaspy o un tracker con capacidad de gateway. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo de tracker en las conexiones entrantes.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

## Requisitos típicos antes de comenzar

- Batería CR2477 cargada o nueva instalada en el Arnavi BTS v.5 y el dispositivo encendido.
- Un gateway BLE compatible con Plaspy o un gateway vehicular que recoja beacons BLE y pueda reenviar telemetría a Plaspy.
- Acceso a la app móvil configuradora de Arusnavi para iOS o Android, para ajustar UUID de la baliza, MAJOR, MINOR, intervalo y potencia de radio.
- Conectividad de red desde el gateway hacia internet para que pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Acceso a su cuenta Plaspy donde se asociarán los activos o vehículos con las balizas BTS v.5.
- Conocimientos básicos de los ajustes de servidor necesarios para apuntar el gateway hacia Plaspy.

## Cómo se conecta este tracker a Plaspy

El Arnavi BTS v.5 emite paquetes de publicidad BLE y telemetría de sensores (temperatura, estado de contacto, identidad de la baliza). Un gateway compatible con Plaspy escanea y recoge esos paquetes BLE, y luego reenvía la telemetría parseada al endpoint del servidor Plaspy usando el puerto compartido. Una vez entregados, Plaspy asocia la telemetría con el vehículo o activo correspondiente.

- El BTS v.5 emite anuncios BLE que contienen UUID, MAJOR, MINOR y datos de sensores que el gateway recibe.
- Un gateway compatible con Plaspy reenvía los datos recogidos a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Plaspy detecta automáticamente el protocolo entrante e ingiere la telemetría en la plataforma.
- La identidad de la baliza y los eventos de sensor se mapean a un registro de activo o vehículo para monitoreo en tiempo real y alertas.
- El intervalo de reporte y la potencia de radio determinan la frecuencia con la que el gateway recibe actualizaciones y afectan la vida útil de la batería.

## Flujo de trabajo de configuración común

1. Acceda a la app móvil oficial de Arusnavi o a la herramienta de configuración del proveedor del gateway para preparar el BTS v.5 y el gateway.
2. En la configuración de reenvío del gateway, ingrese d.plaspy.com o 54.85.159.138 como endpoint del servidor.
3. Establezca el puerto de destino en 8888 para coincidir con el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el gateway requiere selección de transporte.
5. Aplique o guarde la configuración en el gateway y en el BTS v.5 al ajustar los parámetros de la baliza.
6. Reinicie el gateway o el BTS v.5 si las instrucciones del proveedor exigen un reinicio para aplicar los ajustes.
7. Valide que el gateway reenvíe la telemetría BLE recibida y que los reportes del BTS v.5 aparezcan en Plaspy.

## Comandos de configuración de ejemplo

El Arnavi BTS v.5 se configura principalmente mediante la app móvil configuradora de Arusnavi y las herramientas de configuración del gateway BLE. Los comandos exactos y las rutas de menú varían según el firmware del gateway y la versión de la app de Arusnavi. Por esta razón no existen cadenas de comando universales públicas para todos los entornos. Al trabajar con un gateway o una herramienta del proveedor, utilice las siguientes acciones en lugar de comandos de terminal:

- Abra la app móvil de Arusnavi para establecer UUID, MAJOR, MINOR, intervalo de reporte y potencia de radio del BTS v.5.
- En la interfaz del gateway, configure el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888.
- Elija el transporte UDP o TCP según las opciones del gateway y las recomendaciones de red.
- Guarde o aplique los ajustes y siga las instrucciones del proveedor para reiniciar el gateway o el servicio si es necesario.

Si el proveedor del gateway publica comandos específicos por línea de comandos o SMS para establecer endpoints de reenvío, siga su documentación y utilice d.plaspy.com o 54.85.159.138 con el puerto 8888. Siempre preserve los marcadores de posición que el proveedor proporcione y consulte las guías del proveedor para la sintaxis exacta.

## Notas de configuración

- El comportamiento de firmware y de los gateways de los proveedores puede variar según la revisión de hardware y la versión de software; confirme los pasos exactos con Arusnavi y el proveedor de su gateway.
- Elija UDP o TCP según las recomendaciones del gateway y la confiabilidad de la red; Plaspy acepta ambos transportes en el puerto 8888.
- Ubique los gateways BLE para proporcionar una cobertura de radio confiable en las ubicaciones esperadas de los dispositivos; el alcance y la colocación del BLE afectan la frecuencia de detección.
- Ajuste el intervalo de reporte y la potencia de radio en el BTS v.5 para equilibrar la vida útil de la batería con las necesidades de telemetría, por ejemplo en cadena de frío o alertas en tiempo real.
- Mapee los valores UUID MAJOR MINOR de las balizas en Plaspy de forma consistente para que los activos y compartimentos se identifiquen correctamente.

## Por qué usar Plaspy con esta configuración

Usar el Arnavi BTS v.5 con Plaspy amplía el monitoreo de flota y activos al agregar temperatura, estado de contacto e identidad de baliza a la telemetría de ubicación y vehículo. Esta combinación es útil para logística de cadena de frío, monitoreo anti-manipulación e identificación de activos, donde sensores pequeños proporcionan datos ambientales y de estado críticos que deben ser visibles junto con el rastreo vehicular en una sola plataforma.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes and manufacturer instructions, verify details on the Arusnavi website at https://www.arusnavi.ru. Device specific setup steps and firmware behavior can change over time so confirm the current guidance with the manufacturer.
