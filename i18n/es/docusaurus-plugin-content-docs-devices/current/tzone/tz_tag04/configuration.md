---
slug: /tzone/tz_tag04/configuration
id: tz_tag04-configuration
sidebar_label: Configuration
title: TZone - TZ-Tag04 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TZone TZ-Tag04 con Plaspy, incluyendo ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - configuración TZone TZ-Tag04
  - instalación TZ-Tag04
  - TZone TZ-Tag04 Plaspy
  - guía configuración TZ-Tag04
  - ajustes servidor TZ-Tag04
  - configuración rastreador GPS TZone
  - configuración APN TZ-Tag04
  - comandos SMS TZ-Tag04
  - configuración rastreador Plaspy
  - configuración plataforma seguimiento TZ-Tag04
---

# TZone - TZ-Tag04 Configuración

Esta página describe el contexto público de configuración para usar el rastreador TZone TZ-Tag04 con Plaspy. Se enfoca en los ajustes prácticos de servidor y del dispositivo necesarios para que el TZ-Tag04 informe correctamente a Plaspy, y recopila los comandos SMS públicos y el flujo de trabajo comúnmente empleados para este modelo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TZ-Tag04 puede configurarse mediante comandos SMS para establecer el APN, el intervalo de reporte y los parámetros del servidor GPRS para comunicarse con Plaspy.

## Resumen de la configuración

El objetivo de configurar un TZ-Tag04 para Plaspy es preparar el dispositivo para que transmita de manera fiable la ubicación y los datos ambientales a la plataforma Plaspy y sea detectable en su cuenta. A continuación se detallan los propósitos prácticos del proceso de configuración:

- Establecer el APN de datos móviles y las credenciales opcionales para que el rastreador se conecte a la red celular.
- Configurar el intervalo de reporte y los parámetros de transmisión para controlar la frecuencia de envío de actualizaciones.
- Apuntar el dispositivo al endpoint y puerto del servidor Plaspy para que la plataforma reciba la telemetría.
- Activar el reporte por GPRS y confirmar la selección del protocolo de transporte si el rastreador lo requiere.
- Validar la conectividad en la plataforma Plaspy para que el dispositivo sea visible y reporte correctamente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma intentará detectar el protocolo que emplea el rastreador.

## Requisitos típicos antes de la configuración

- Un TZ-Tag04 con batería cargada y ubicado en un lugar accesible para la instalación.
- Una tarjeta SIM instalada que tenga datos móviles y SMS habilitados para el envío de comandos de configuración y reportes GPRS.
- Acceso al método de configuración del fabricante para este modelo, comúnmente mediante comandos SMS o herramientas del proveedor.
- El APN del operador, y si aplica, el nombre de usuario y la contraseña del APN proporcionados por su operador móvil.
- Un dispositivo para enviar y recibir SMS (un teléfono móvil que pueda enviar SMS al rastreador).
- Acceso a Plaspy para verificar que el dispositivo aparezca y reporte después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TZ-Tag04 se configura para enviar datos de ubicación y sensores al endpoint y puerto compartido de Plaspy, de modo que la plataforma pueda mostrar información de seguimiento y ambiental. Comportamientos típicos una vez configurado:

- El rastreador abre una conexión GPRS usando el APN configurado y transmite la telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Las posiciones y lecturas ambientales (por ejemplo temperatura y humedad donde estén soportadas) se envían según el intervalo de actualización configurado.
- Plaspy recibe los datos del dispositivo y detecta automáticamente el protocolo para interpretar los mensajes.
- El equipo puede enviar latidos (heartbeats) y actualizaciones regulares de posición conforme al intervalo establecido.
- Los eventos y alertas de batería baja se envían a Plaspy cuando son generados por el firmware del dispositivo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software para el TZ-Tag04, típicamente el conjunto de comandos SMS documentado por TZone.
2. Configure el APN del dispositivo usando el APN del operador y las credenciales opcionales para habilitar GPRS.
3. Ingrese d.plaspy.com o 54.85.159.138 en los ajustes de servidor GPRS del dispositivo.
4. Establezca el puerto 8888 en la configuración de servidor del dispositivo y elija UDP o TCP si el rastreador requiere selección de transporte.
5. Guarde o aplique la configuración y active el modo GPRS en el dispositivo.
6. Reinicie el dispositivo si el fabricante o el firmware lo requieren para aplicar los ajustes de red.
7. Valide que el dispositivo informe a Plaspy comprobando el estado en su cuenta Plaspy y confirmando la llegada de telemetría.

## Comandos de configuración de ejemplo

Para configurar el TZ-Tag04 por SMS, envíe los siguientes comandos en el orden que se indica. Estos comandos son ejemplos públicos usados para configurar el APN, el intervalo de reporte, el servidor Plaspy y activar el modo GPRS.

- Establecer el APN del operador (reemplazar [apn] con el APN de su operador; incluya [apnu] y [apnp] si su operador requiere usuario y contraseña)
```text
*000000,011,[apn],[apnu],[apnp]#
```
Nota: Si no se requiere usuario ni contraseña para el APN, omita la porción ,[apnu],[apnp]:
```text
*000000,011,[apn]#
```

- Fijar el intervalo de actualización a 60 segundos
```text
*000000,018,60,999#
```

- Establecer el servidor GPRS a Plaspy usando la IP del servidor y el puerto
```text
*000000,015,0,54.85.159.138,8888#
```
También puede usar el dominio de Plaspy en lugar de la IP cuando el dispositivo soporta nombres de dominio:
```text
*000000,015,0,d.plaspy.com,8888#
```

- Activar el modo GPRS
```text
*000000,016,1#
```

Notas sobre los comandos anteriores:
- La secuencia generalmente comienza con el APN, luego el intervalo, el servidor y finalmente la activación para que el dispositivo se conecte correctamente.
- La cadena 000000 en estos ejemplos suele ser la contraseña por defecto del dispositivo usada en comandos SMS; verifique el manual del dispositivo porque la contraseña puede variar.
- Los marcadores [apn], [apnu] y [apnp] deben reemplazarse por los valores de su operador móvil. Mantenga los marcadores si prepara plantillas.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; siempre contraste con la documentación del fabricante antes de desplegar en gran escala.
- Algunos instaladores prefieren usar el nombre de dominio d.plaspy.com; los dispositivos que no soportan DNS deben usar 54.85.159.138.
- Elija UDP o TCP según lo requiera el dispositivo; Plaspy soporta ambos y detectará el protocolo automáticamente.
- La configuración por SMS es habitual para este modelo, pero también pueden existir herramientas del proveedor o una interfaz de configuración por PC según el distribuidor.
- Verifique con su operador celular los detalles del APN, SMS y del plan de datos antes de configurar una flota de dispositivos.

## Por qué usar Plaspy con esta configuración

Configurar el TZone TZ-Tag04 para que reporte a Plaspy ofrece visibilidad centralizada de la telemetría de ubicación y ambiental, lo que permite a las organizaciones monitorear activos, responder a eventos y mantener supervisión operativa. Usar los ajustes de servidor compartidos de Plaspy y los comandos SMS mostrados aquí simplifica el aprovisionamiento de dispositivos y acelera la puesta en marcha de los rastreadores.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details on the manufacturer site http://www.tzonedigital.com/ since firmware behavior and configuration methods may change over time.
