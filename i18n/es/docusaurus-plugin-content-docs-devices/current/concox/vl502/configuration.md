---
slug: /concox/vl502/configuration
id: vl502-configuration
sidebar_label: Configuration
title: Concox - VL502 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Concox VL502 para enviar datos a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración Concox VL502
  - instalación Concox VL502
  - configuración servidor VL502
  - configuración VL502 Plaspy
  - configuración rastreador GPS Concox
  - instalación OBDII Concox
  - configuración SMS VL502
  - seguimiento de flotas VL502
  - configuración de rastreador Plaspy
  - telemática vehicular VL502
---

# Concox - Configuración del VL502

Esta página documenta el contexto público de configuración para usar el rastreador vehicular OBDII GNSS Concox VL502 con Plaspy. Reúne los ajustes de servidor prácticos y los comandos SMS del fabricante que se usan comúnmente para apuntar el dispositivo a Plaspy, de modo que los datos de flota y telemetría puedan recibirse y procesarse.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VL502 admite configuración vía SMS y reporte por GPRS; los ejemplos a continuación muestran cómo configurar el dispositivo para que reporte a Plaspy usando el conjunto público de comandos.

## Resumen de la configuración

Configurar el VL502 para Plaspy prepara el dispositivo para enviar de forma fiable posiciones GNSS y telemetría OBDII a un punto central de Plaspy. El objetivo es asegurar que el rastreador tenga parámetros de red correctos, intervalos de reporte y destino de servidor adecuados para que Plaspy pueda ingerir y mostrar datos en tiempo real e históricos para operaciones de flota.

- Definir valores de red y APN para que el rastreador establezca una sesión de datos GPRS o LTE.
- Configurar el endpoint de servidor y el puerto para que el dispositivo reporte a Plaspy.
- Definir el intervalo de reporte y el modo GPRS para controlar la frecuencia de actualizaciones y el uso de datos.
- Validar la configuración con comandos de verificación del dispositivo y confirmar la visibilidad en Plaspy.
- Guardar y reiniciar el dispositivo cuando sea necesario para activar los cambios.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores son los endpoints públicos de Plaspy usados para recibir datos de dispositivos soportados, incluido el VL502. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del equipo cuando se conecte.

## Requisitos típicos antes de la configuración

- Un VL502 con alimentación instalado en el puerto OBDII del vehículo y listo para configurarse.
- Una tarjeta SIM activa con plan de datos y el APN correcto del operador móvil.
- Capacidad para enviar comandos SMS al número del dispositivo para la configuración vía SMS.
- Acceso a la documentación del fabricante o a las herramientas del instalador para referencias de firmware y comandos.
- Herramientas básicas para verificar el reporte del dispositivo, como acceso a una cuenta Plaspy y visibilidad de la red móvil del equipo.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el VL502 envía posición GNSS y telemetría OBDII a través de la red de datos móviles al endpoint compartido y al puerto de Plaspy. Plaspy entonces parsea el protocolo entrante del dispositivo y mapea los datos en la plataforma para seguimiento en vivo, alertas e informes.

- El dispositivo se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte de datos puede usar UDP o TCP según la selección del dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y comienza a ingerir la telemetría.
- Ubicación, parámetros OBDII y actualizaciones de eventos se reenvían a Plaspy para visibilidad y análisis.
- Intervalos de actualización regulares aseguran actualizaciones casi en tiempo real de posición y estado en la plataforma Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el VL502, como comandos SMS o una herramienta de instalador.
2. Confirme que el dispositivo tiene una SIM funcional y establezca el APN del operador usando el formato de comando del fabricante.
3. Ingrese la dirección del servidor de Plaspy enviando d.plaspy.com o 54.85.159.138 como la configuración SERVER.
4. Establezca el puerto 8888 para la entrada del servidor.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para el comando SERVER.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con posiciones o telemetría recientes.

## Comandos de configuración de ejemplo

El VL502 acepta comandos de configuración vía SMS. Los siguientes comandos públicos se presentan en el orden recomendado para la configuración inicial. Envíe estos comandos como mensajes SMS al número del dispositivo.

1. Reset de fábrica opcional
```text
FACTORY#
```
Etiquete este comando como opcional o solo para la configuración inicial. Úselo únicamente cuando pretenda restaurar los valores de fábrica.

2. Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

3. Configurar el APN del operador
```text
APN,{{apn}}# 
```
Si su APN requiere nombre de usuario o contraseña incluya los campos opcionales según lo soportado por el dispositivo:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Nota: {{apn}} es la cadena APN del operador móvil, {{apnu}} es el usuario del APN si es requerido, y {{apnp}} es la contraseña del APN si es requerida. Mantenga estos marcadores y reemplácelos con los valores de su operador.

4. Configurar el servidor GPRS usando el dominio de Plaspy
```text
SERVER,1,d.plaspy.com,8888,0#
```

O configurar el servidor GPRS usando la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```
Ambas formas son aceptadas. Use la forma con dominio cuando prefiera DNS y la forma con IP cuando no haya disponibilidad de DNS.

5. Establecer el intervalo de actualización cada 60 segundos
```text
TIMER,60#
```
O establecer ambos timers de GPS y ACC
```text
TIMER,60,60#
```

6. Habilitar modo GPRS
```text
GPRSON,1#
```

7. Verificar los parámetros GPRS actuales
```text
GPRSSET#
```
Envíe este comando de verificación para recuperar los parámetros actualmente aplicados en el dispositivo.

Estos comandos reflejan el conjunto de comandos SMS públicos para configurar el VL502 y que se comunique con Plaspy. Mantenga el orden para la configuración inicial cuando corresponda.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos o agregar parámetros adicionales. Revise las notas de firmware del VL502 antes de un despliegue masivo.
- La configuración vía SMS y los parámetros GPRS se usan comúnmente para el aprovisionamiento inicial en este modelo.
- Seleccione la sintaxis SERVER por dominio o por IP según sus necesidades de red y la fiabilidad del DNS.
- El dispositivo soporta transportes UDP o TCP; seleccione el que mejor se adapte a su operador y requisitos de firewall.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador al conectarse.

## Por qué usar Plaspy con esta configuración

Configurar el VL502 para reportar a Plaspy ofrece una vía sencilla para capturar posiciones GNSS y telemetría OBDII en una sola plataforma. Para operadores de flota y programas de telemática, esta combinación proporciona visibilidad centralizada, alertas e informes sobre ubicación, diagnóstico del vehículo y comportamiento del conductor sin necesidad de integraciones complejas.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods and the latest firmware behavior on the manufacturer site https://www.iconcox.com/ to ensure your setup matches current product documentation.
