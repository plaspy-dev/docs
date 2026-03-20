---
slug: /winrich/gt02a/configuration
id: gt02a-configuration
sidebar_label: Configuration
title: Winrich - GT02A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Winrich GT02A con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración Winrich GT02A
  - Configuración GT02A
  - Configuración rastreador GPS Winrich
  - Configuración GT02A Plaspy
  - Configuración rastreador Plaspy
  - Comandos SMS Winrich
  - Configuración servidor GT02A
  - Rastreo vehicular GT02A
  - Configuración GPRS GT02A
  - Configuración plataforma GPS Winrich
---

# Winrich - Configuración GT02A

Esta página describe el contexto público de configuración para usar el rastreador Winrich GT02A con la plataforma Plaspy. Explica los ajustes compartidos del servidor Plaspy a los que pueden apuntar los dispositivos GT02A e incluye comandos SMS públicos y prácticos que instaladores y técnicos usan para dejar un GT02A listo para operar con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que considere los comandos y el flujo descritos aquí como una guía pública práctica basada en la documentación del GT02A y los ejemplos de configuración por SMS del fabricante.

## Resumen de la configuración

El proceso de configuración prepara al GT02A para comunicarse de forma fiable con Plaspy, verifica la conectividad y habilita el seguimiento en tiempo real y las alertas en la plataforma. Una configuración típica instala el APN, apunta el dispositivo a los ajustes del servidor Plaspy, define intervalos de reporte y confirma el estado del equipo.

- Configure el APN del operador y, si aplica, las credenciales para que el dispositivo abra la conexión GPRS.
- Apunte el GT02A al servidor Plaspy usando el dominio o la IP pública y el puerto compartido por Plaspy.
- Seleccione el transporte (UDP o TCP) si el equipo lo requiere y aplique los ajustes.
- Verifique que el dispositivo esté reportando a Plaspy y ajuste el intervalo de reportes según sus necesidades de monitoreo.
- Use los comandos de verificación por SMS para comprobar los ajustes y el estado del dispositivo tras la configuración.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Una unidad GT02A con alimentación y acceso al método de configuración por SMS que utilice el instalador.  
- Una tarjeta SIM activa con plan de datos y el APN correcto para el operador móvil.  
- Acceso a la documentación del instalador o técnico sobre los comandos SMS del GT02A o a la herramienta de configuración del fabricante.  
- Una fuente de alimentación estable durante la configuración para evitar interrupciones al guardar ajustes.  
- Conocimientos básicos sobre el tipo de transporte preferido (UDP o TCP) si el dispositivo requiere elegir uno.  
- Acceso a un teléfono capaz de enviar los SMS al dispositivo o a la herramienta del proveedor que encapsula esos comandos.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GT02A abre una conexión GPRS hacia el endpoint de Plaspy y envía actualizaciones de ubicación y estado para que Plaspy muestre posiciones en tiempo real, rutas históricas y alertas de eventos. El SMS permanece disponible como canal de reserva para eventos críticos y configuración remota en entornos donde GPRS sea intermitente o no esté disponible.

- El dispositivo se configura para reportar al endpoint y puerto compartido de Plaspy.  
- Las cargas de posición y estado utilizan GPRS (TCP) como canal de datos principal hacia Plaspy.  
- SMS puede usarse para enviar comandos de configuración y alertas críticas a un número de monitoreo.  
- Plaspy detecta el protocolo entrante automáticamente y asocia el flujo de datos del dispositivo con la cuenta en la plataforma.  
- Los reportes desde el dispositivo permiten visibilidad en mapa, notificaciones de eventos y monitoreo operativo en Plaspy.

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante o a la documentación del GT02A, normalmente mediante comandos SMS o la herramienta del proveedor.  
2. Configure el APN del operador usando el comando SMS del GT02A con los valores de su operador.  
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en la opción de servidor del dispositivo.  
4. Ajuste el puerto a 8888 para las comunicaciones con el servidor.  
5. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte para la conexión GPRS.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.  
7. Valide que el dispositivo está reportando a Plaspy comprobando el estado con los comandos SMS de verificación y confirmando la visibilidad en la plataforma.

## Ejemplos de comandos de configuración

El GT02A puede configurarse enviando comandos SMS al equipo. Los siguientes comandos son ejemplos públicos extraídos de la documentación de configuración del GT02A. Preserve los marcadores de posición y reemplácelos con los datos de su operador al enviar los mensajes.

- Restauración de fábrica (paso inicial opcional)
```text
940#
```
- Establecer la zona horaria a UTC 0
```text
801#W0#
```
- Configurar el APN del operador (solo APN)
```text
802#[apn]#
```
- Configurar APN con usuario y contraseña si es necesario
```text
802#[apn]#[apnu]#[apnp]#
```
  - [apn] es la cadena APN del operador requerida para datos móviles.  
  - [apnu] es el nombre de usuario del APN si su operador lo solicita.  
  - [apnp] es la contraseña del APN si su operador la solicita.

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
803#54.85.159.138#8888#
```
  - Dependiendo del firmware y la guía del fabricante, el dispositivo también puede aceptar el dominio d.plaspy.com en lugar de la IP.

- Establecer el intervalo de actualización de ubicación a 60 segundos
```text
730#60#
```

- Verificar la configuración actual del dispositivo
```text
886#
```

- Consultar el estado del dispositivo
```text
902#
```

Envíe cada SMS al número telefónico del dispositivo desde su teléfono de configuración. Mantenga los comandos en el mismo orden cuando siga un flujo de configuración recomendado y espere un breve intervalo después de aplicar los ajustes de servidor y APN para que el dispositivo pueda establecer la sesión GPRS.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; siempre consulte la documentación del GT02A para su unidad específica.  
- El GT02A admite configuración por SMS como se muestra arriba; SMS es útil para instalaciones remotas o cuando aún no hay datos disponibles.  
- Elija TCP o UDP según la preferencia del instalador y las condiciones de la red; Plaspy acepta dispositivos que usen cualquiera de los dos transportes en el puerto compartido.  
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectar.  
- Confirme las credenciales del APN con el operador móvil antes de enviar los comandos APN para evitar fallas de conexión.

## Por qué usar Plaspy con esta configuración

Usar el Winrich GT02A con Plaspy permite un seguimiento en tiempo real y monitoreo de eventos sencillo para pequeñas flotas y despliegues vehiculares. La capacidad del GT02A para reportar vía GPRS (TCP) y aceptar comandos por SMS lo convierte en una opción flexible para instalaciones que necesitan posicionamiento confiable, configuración remota simple y un canal de reserva por SMS.

Learn more about Plaspy and how it ingests device feeds at https://www.plaspy.com. Manufacturer specifications, firmware behavior, and device configuration methods can change over time so verify the latest GT02A setup details on the Winrich website http://www.winrichgroup.com/en/ before large scale deployments.
