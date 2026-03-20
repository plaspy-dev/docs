---
slug: /megastek/mt400/configuration
id: mt400-configuration
sidebar_label: Configuration
title: Megastek - MT400 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Megastek MT400 para Plaspy con ajustes de servidor, comandos SMS y guía práctica para enviar telemetría y localización confiables
keywords:
  - configuración Megastek MT400
  - configuración MT400 Plaspy
  - configuración servidor Megastek MT400
  - configuración rastreador GPS MT400
  - comandos SMS Megastek MT400
  - configuración GPRS MT400
  - configuración dispositivo Plaspy
  - configuración rastreador vestible GPS
  - integración plataforma MT400
  - guía configuración Megastek
---

# Megastek - Configuración MT400

Esta página describe el contexto público de configuración para usar el Megastek MT400 con Plaspy. Explica los ajustes de servidor compartidos por Plaspy, los pasos típicos de preparación y los comandos SMS y el flujo práctico que se usan para apuntar un MT400 a la plataforma Plaspy. Las indicaciones se basan en la descripción pública del producto MT400 e incorporan los comandos SMS de configuración disponibles públicamente cuando aplican.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MT400 soporta opciones de configuración por SMS y GPRS descritas a continuación; adapte las instrucciones según el firmware de su dispositivo y el método de gestión que provea Megastek.

## Resumen de la configuración

El objetivo de la configuración es preparar el MT400 para que se comunique de forma confiable con Plaspy y así la ubicación y la telemetría médica lleguen a la plataforma para monitoreo y alertas. Normalmente esto implica establecer la identidad del dispositivo, el APN para datos, los intervalos de reporte y el servidor GPRS para que el reloj envíe sus mensajes a Plaspy.

- Configure el ID del dispositivo y el IMEI para que el equipo sea identificable en Plaspy.
- Establezca el APN del operador y, si aplica, el usuario y la contraseña del APN para datos GPRS.
- Configure el servidor GPRS para apuntar a Plaspy y fije el intervalo de actualización/reportes.
- Active el modo de datos GPRS para que el dispositivo envíe activamente telemetría y ubicación.
- Verifique la conectividad y confirme que el dispositivo aparece en Plaspy con actualizaciones en tiempo real.

## Ajustes del servidor Plaspy

Utilice estos ajustes públicos de servidor Plaspy al configurar el MT400. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP o TCP soportados en el dispositivo; elija el transporte que el equipo requiera
- Protocol detection: Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo informe

## Requisitos habituales antes de la configuración

- Un MT400 cargado y funcional con el IMEI correcto a la mano.
- Una SIM activa con plan de datos y capacidad SMS si va a configurar el equipo por SMS.
- Acceso al método de configuración del fabricante o software correspondiente y cualquier credencial de instalador o contraseña por defecto que sea necesaria.
- Conocimiento del APN del operador y de cualquier usuario o contraseña APN necesarios para datos móviles.
- Un teléfono o herramienta de gestión capaz de enviar los comandos SMS de configuración si utiliza la configuración por SMS.
- Confirmación de la contraseña por defecto del dispositivo si se requiere para comandos SMS (el ejemplo público que se muestra abajo usa 000000).

## Cómo se conecta este rastreador a Plaspy

El Megastek MT400 se configura para enviar ubicación y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir los mensajes de seguimiento y mostrarlos a los usuarios.

- El dispositivo usa datos GPRS para conectarse al endpoint configurado de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del equipo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Una vez que el reporte está activo, Plaspy recibe la posición, el estado y cualquier telemetría soportada para monitoreo en vivo e informes históricos.
- Plaspy muestra la visibilidad del dispositivo, reportes de eventos y alertas basadas en los mensajes entrantes del MT400.

## Flujo de configuración común

1. Acceda al método oficial de configuración Megastek para el MT400 (comandos SMS, Megastek device manager o herramienta del proveedor) según la documentación del fabricante.
2. Establezca el ID del dispositivo o registre la identidad usando el IMEI para que sea identificable cuando reporte.
3. Ingrese el servidor Plaspy en el dispositivo usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
4. Configure el puerto 8888 para el servidor y seleccione UDP o TCP si el dispositivo requiere especificar el transporte.
5. Configure el APN del operador y el usuario/contraseña APN si son necesarios para la conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si requiere reinicio para aplicar los cambios.
7. Valide que el dispositivo reporta a Plaspy y aparece en la plataforma con actualizaciones en vivo.

## Comandos de configuración de ejemplo

El MT400 soporta configuración por SMS. Los comandos de ejemplo que siguen están adaptados del contenido público de configuración del fabricante. La contraseña de ejemplo en estos comandos es 000000 (es el valor por defecto en el ejemplo público). Reemplace los marcadores por sus valores reales. Mantenga el orden de los comandos al realizar la configuración inicial.

- Notas sobre los marcadores:
  - {{IMEI}} — reemplace con el IMEI del dispositivo (use el IMEI de 15 dígitos; algunas herramientas requieren los últimos 15 dígitos).
  - [apn] — la cadena APN del operador requerida por su SIM.
  - [apnu] y [apnp] — usuario APN y contraseña APN opcionales si el operador los requiere.

1) Establecer el ID del dispositivo (reemplazar {{IMEI}} por el IMEI del dispositivo, últimos 15 dígitos si aplica)
```
M000000,22,{{IMEI}}
```

2) Establecer el APN del operador (incluya usuario y contraseña APN solo si son necesarios)
```
M000000,23,[apn]
```
Si su operador requiere usuario y contraseña APN:
```
M000000,23,[apn],[apnu],[apnp]
```

3) Establecer el intervalo de actualización a 60 segundos
```
M000000,25,60
```

4) Configurar el servidor GPRS a Plaspy usando la IP pública del servidor y el puerto proporcionado por Plaspy
```
M000000,24,56 54.85.159.138,8888
```
Nota: El dispositivo puede aceptar el nombre de dominio d.plaspy.com en lugar de la IP dependiendo del firmware de Megastek. Plaspy soporta tanto dominio como IP, pero la sintaxis exacta depende del firmware del equipo.

5) Habilitar modo GPRS
```
M000000,21,2
```

Importante: En estos comandos el prefijo M000000 indica el comando SMS con la contraseña del dispositivo 000000. Si la contraseña de su dispositivo se ha cambiado desde el valor de fábrica, sustituya 000000 por la contraseña configurada.

## Observaciones sobre la configuración

- La configuración por SMS está soportada en los comandos de ejemplo públicos; use el método oficial de Megastek si dispone de una herramienta de software o aprovisionamiento.
- Las versiones de firmware y las herramientas del dispositivo pueden cambiar la sintaxis de los comandos y los parámetros disponibles; siempre verifique con la documentación de Megastek para su revisión de firmware.
- Elija UDP o TCP según la opción del dispositivo; Plaspy acepta ambos y detectará automáticamente el protocolo en el primer contacto.
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, lo cual simplifica la configuración de servidor en despliegues mixtos.
- Verifique IMEI, contraseña del dispositivo y ajustes APN antes de habilitar GPRS para que el equipo pueda autenticarse y conectarse correctamente.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Megastek MT400 centraliza la ubicación y la telemetría médica en una sola plataforma de monitoreo, permitiendo que cuidadores y equipos operativos visualicen posición, eventos ECG y alertas en tiempo real. Los ajustes de servidor compartidos y la detección automática de protocolos simplifican despliegues con múltiples dispositivos y reducen la complejidad de configuración por equipo.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device-specific configuration methods, firmware behavior, and manufacturer details at Megastek https://www.megastek.com/. Device setup procedures and firmware commands can change over time, so confirm current instructions with the official manufacturer documentation before large scale deployment.
