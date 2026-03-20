---
slug: /ulbotech/s101/configuration
id: s101-configuration
sidebar_label: Configuration
title: Ulbotech - S101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el adaptador Ulbotech S101 OBD II BLE con el servidor Plaspy y apps compatibles
keywords:
  - Configuración Ulbotech S101
  - Configuración S101 Plaspy
  - Ulbotech OBD II BLE
  - Telemetría OBD S101
  - Configuración rastreador Plaspy
  - Guía de instalación S101
  - Telemetría vehicular Plaspy
  - Configuración adaptador OBD II
  - Configuración telemetría flotas
  - Adaptador Bluetooth S101
---

# Ulbotech - Configuración del S101

Esta página explica el contexto público de configuración para usar el adaptador Ulbotech S101 OBD II BLE con Plaspy. Se centra en lo que usted necesita saber para reenviar la telemetría OBD-II del S101 a través de un dispositivo o gateway compatible con Plaspy, de modo que los datos y diagnósticos de motor aparezcan junto con el seguimiento GPS en Plaspy. El S101 es un adaptador BLE OBD-II que empareja con teléfonos, tablets o gateways con BLE y software compatible con Plaspy para aportar datos de motor y sensores a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware del S101, la revisión de hardware, el método de instalación y las herramientas de configuración que use su app o gateway. Esta guía describe el endpoint público de Plaspy y el flujo práctico para hacer visible la telemetría del S101 en Plaspy, recomendando además verificar cualquier paso específico del dispositivo con la documentación oficial de Ulbotech.

## Resumen de configuración

Este proceso prepara el S101 y el dispositivo o app reenviante para que los datos OBD-II lleguen a Plaspy y se correlacionen con los datos de ubicación y seguimiento. El objetivo es garantizar que la conexión BLE sea estable, que la aplicación de reenvío apunte al endpoint de Plaspy y que la plataforma reciba e interprete la telemetría automáticamente.

- Asegúrese de que el S101 esté instalado físicamente en el puerto OBD-II del vehículo y emparejado con un teléfono, tablet o gateway compatible con Plaspy.
- Configure el dispositivo reenviante o la app compatible con Plaspy para usar el endpoint y puerto del servidor Plaspy, de modo que la telemetría llegue a su cuenta.
- Valide la conectividad confirmando que valores de telemetría en vivo aparezcan en los paneles de Plaspy y que los parámetros OBD se estén registrando.
- Guarde y aplique los ajustes en el dispositivo reenviante y reinicie las conexiones según se requiera para garantizar un flujo estable.
- Use los reportes y alertas de Plaspy para verificar que eventos impulsados por OBD, como códigos de falla o umbrales de temperatura, se procesen correctamente.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Estos son los detalles del endpoint compartido de Plaspy usados para reenviar telemetría. Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador entrante.

## Requisitos previos habituales

- Un puerto OBD-II del vehículo con alimentación y el adaptador S101 conectado
- Un teléfono, tablet o gateway con BLE que ejecute una app compatible con Plaspy o software de reenvío
- Acceso al método de configuración oficial de Ulbotech o a la app compatible para el emparejamiento y ajustes del dispositivo
- Conectividad de red desde el dispositivo reenviante hacia d.plaspy.com o 54.85.159.138 en el puerto 8888
- Credenciales o acceso de cuenta a su instancia Plaspy según lo requiera la app de reenvío
- Un plan básico de verificación para confirmar que los PID de telemetría y diagnóstico aparecen correctamente en Plaspy

## Cómo se conecta este rastreador a Plaspy

El S101 transmite PIDs estándar OBD-II por Bluetooth 4.0 BLE a un dispositivo emparejado que ejecute una aplicación o gateway compatible con Plaspy. Ese dispositivo actúa como reenviante en red, enviando la telemetría a Plaspy al endpoint y puerto compartidos para que la plataforma pueda combinar la telemetría con el seguimiento GPS y generar reportes.

- El S101 entrega datos OBD-II (RPM, temperatura de refrigerante, correcciones de combustible, velocidad, etc.) vía BLE al dispositivo emparejado
- El dispositivo emparejado o gateway reenvía la telemetría a d.plaspy.com (o 54.85.159.138) en el puerto 8888
- El reenvío puede usar UDP o TCP en el puerto 8888 según la configuración de la app o del gateway
- Plaspy detecta automáticamente el protocolo entrante y procesa la telemetría para paneles y alertas
- Una vez validados los reportes, Plaspy combina la telemetría OBD con los datos GPS del dispositivo emparejado o de un rastreador GPS Plaspy separado

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Ulbotech o a la app compatible con Plaspy que utilice para gestionar el emparejamiento y los ajustes de reenvío del S101.
2. Empareje el S101 con el dispositivo con BLE y confirme lecturas locales de PIDs OBD en la app.
3. En los ajustes de la app de reenvío o del gateway introduzca la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138.
4. Establezca el puerto de destino en 8888 en la configuración de reenvío.
5. Elija UDP o TCP como transporte si la app o el gateway lo requiere.
6. Aplique o guarde la configuración en la app de reenvío o gateway y reinicie la conexión Bluetooth con el S101 si se le solicita.
7. Valide que el dispositivo informe telemetría a Plaspy comprobando valores en vivo y diagnósticos en su interfaz Plaspy.

## Ejemplo de comandos de configuración

El S101 usa Bluetooth para conectividad y no expone comandos directos de configuración de servidor en el propio adaptador. La configuración del endpoint y puerto suele realizarse en la app o gateway compatible con Plaspy. La sintaxis exacta y los pasos varían según el software y el firmware del fabricante, por lo que debe seguir la documentación de la app o del gateway al ingresar:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Si su gateway de reenvío requiere configuración por línea de comandos o por texto, consulte la sintaxis pública de comandos de ese gateway y sustituya los valores de Plaspy indicados arriba. Dado que el S101 es un adaptador BLE OBD-II, no existen comandos TCP o UDP a nivel de dispositivo que enviar directamente al S101.

## Notas de configuración

- El S101 es un adaptador BLE; la configuración de servidor y puerto se aplica en el dispositivo reenviante o en la app compatible con Plaspy, no en el adaptador.
- Las revisiones de firmware, las versiones de la app o el firmware del gateway pueden cambiar los nombres de menú y los flujos de configuración; verifique siempre las instrucciones más recientes.
- Si la app de reenvío ofrece UDP y TCP, elija el transporte que mejor se adapte a sus condiciones de red y a la recomendación de la app; Plaspy detectará el protocolo en el puerto 8888.
- Confirme que el dispositivo emparejado tenga acceso estable a Internet para que la telemetría pueda llegar a d.plaspy.com o a 54.85.159.138 sin interrupciones.
- Mantenga el S101 emparejado y verifique periódicamente la consistencia de los PIDs OBD para asegurar la calidad de la telemetría en los reportes de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Ulbotech S101 con Plaspy ofrece una visión más completa del vehículo al combinar datos de posición GPS con telemetría OBD-II y diagnósticos en tiempo real. Para flotas y operadores que necesitan parámetros de motor, análisis de combustible y códigos de falla bajo demanda junto con el seguimiento de ubicación, el S101 facilita una solución de bajo costo y bajo consumo para transmitir esos datos vía un dispositivo con BLE hacia los paneles y alertas de Plaspy.

Para obtener más información sobre Plaspy y cómo integra telemetría y seguimiento, visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware e instrucciones del fabricante del S101, verifique la información actual en el sitio oficial de Ulbotech http://www.ulbotech.com/.
