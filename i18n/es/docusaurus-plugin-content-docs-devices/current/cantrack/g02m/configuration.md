---
slug: /cantrack/g02m/configuration
id: g02m-configuration
sidebar_label: Configuration
title: CanTrack - G02M Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CanTrack G02M con Plaspy, ajustes de servidor y pasos prácticos de instalación
keywords:
  - Configuración CanTrack G02M
  - Configuración G02M
  - CanTrack G02M con Plaspy
  - Configuración rastreador GPS CanTrack
  - Configuración servidor G02M
  - Configuración rastreador de vehículo
  - Configuración GPRS G02M
  - Ajustes APN CanTrack
  - Configuración software seguimiento G02M
  - Configuración rastreador Plaspy
---

# CanTrack - Configuración G02M

Esta página describe el contexto de configuración pública para usar el CanTrack G02M con Plaspy. Se centra en los ajustes prácticos del servidor y en los pasos generales necesarios para apuntar un rastreador G02M a Plaspy, de modo que el dispositivo pueda enviar datos de ubicación para seguimiento en tiempo real y visibilidad de eventos en la plataforma.

Plaspy utiliza un endpoint de servidor compartido y ajustes de transporte comunes entre los dispositivos soportados, detectando automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos para configurar el G02M en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que esta página ofrece orientación práctica y le recomienda verificar los comandos específicos del dispositivo en la documentación de CanTrack.

## Resumen de la configuración

El objetivo de la configuración es preparar el G02M para que envíe de forma fiable datos GPS y de estado a Plaspy a través de Internet. En la práctica esto suele implicar ajustar los parámetros de red del dispositivo, verificar la SIM y el APN cuando se usa GPRS, y registrar el endpoint y el transporte correctos de Plaspy para que la plataforma pueda aceptar e interpretar los mensajes entrantes.

- Apuntar el G02M al endpoint de Plaspy para que las cargas GPRS vayan al destino correcto
- Establecer el transporte y el puerto usados por Plaspy para que el dispositivo pueda abrir un socket hacia la plataforma
- Confirmar APN, SIM y alimentación para que el rastreador tenga datos móviles disponibles para las cargas GPRS
- Verificar la conectividad y supervisar los primeros reportes de posición en Plaspy
- Mantener a mano las referencias de configuración del fabricante, ya que los comandos SMS o las opciones pueden diferir

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el G02M. Plaspy emplea el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que seleccione UDP o TCP en el dispositivo si lo requiere

## Requisitos previos típicos

- Un rastreador G02M encendido y accesible con suficiente carga de batería o conectado al soporte de alimentación
- Una SIM activa con datos móviles habilitados y el APN correcto configurado para cargas GPRS
- Acceso al método oficial de configuración CanTrack, como el conjunto de comandos SMS o la herramienta de configuración del proveedor
- Un smartphone o PC para enviar comandos SMS o ejecutar el software de configuración del fabricante
- Una cuenta o acceso a la plataforma Plaspy para confirmar que el dispositivo aparece y reporta después de la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para cargas GPRS, el G02M transmite paquetes GPS y mensajes de estado a través de la red móvil al endpoint del servidor Plaspy en el puerto compartido. Plaspy recibe la conexión entrante, determina automáticamente el protocolo del rastreador y muestra los datos del dispositivo en la plataforma para monitoreo en tiempo real y alertas.

- El dispositivo envía paquetes GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Puede elegir UDP o TCP en el G02M si el dispositivo requiere selección explícita de transporte
- Plaspy asocia las conexiones entrantes con el protocolo del rastreador automáticamente
- Una vez que se recibe el primer paquete válido, el dispositivo debería aparecer en Plaspy para seguimiento y reportes
- Las cargas periódicas y las alarmas de eventos se reenviarán a Plaspy para el monitoreo operativo

## Flujo de configuración habitual

1. Acceda al método oficial de configuración CanTrack, como el conjunto de comandos SMS o el software de configuración del fabricante.
2. Introduzca el endpoint de Plaspy estableciendo el servidor en d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
3. Configure el puerto de comunicación en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP si el G02M solicita elegir el transporte durante la configuración.
5. Configure el APN del dispositivo y verifique que la SIM tenga datos móviles para que las cargas GPRS se envíen correctamente.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporte a Plaspy observando el primer paquete de ubicación en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El G02M admite métodos de configuración por SMS y por software proporcionados por CanTrack. Los comandos SMS exactos y las acciones en la herramienta dependen del firmware y del conjunto de herramientas del proveedor, por lo que el conjunto de comandos puede variar. Si utiliza comandos SMS o una utilidad de configuración de CanTrack, siga la guía del fabricante para establecer los siguientes valores:

- Dominio del servidor o IP a d.plaspy.com o 54.85.159.138
- Puerto a 8888
- Transporte a UDP o TCP si es necesario
- Ajustes APN según su operador móvil

Dado que los comandos del fabricante varían según el firmware, consulte el manual del CanTrack G02M para la sintaxis exacta de los comandos o la interfaz de la herramienta de configuración. Si dispone de una lista de comandos del fabricante, aplíquelos en el orden recomendado por CanTrack y verifique el comportamiento de reinicio del dispositivo si la herramienta lo requiere.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos SMS o las opciones en la interfaz; consulte siempre el manual del dispositivo correspondiente a su firmware.
- Si su método de configuración ofrece tanto UDP como TCP, elija el que recomiende su instalación o las condiciones de red; Plaspy aceptará cualquiera en el puerto 8888.
- Los marcadores de APN, usuario y contraseña son específicos del proveedor; proporcione los valores del APN de su operador móvil cuando el dispositivo lo solicite.
- La configuración por SMS es común en dispositivos CanTrack, pero la redacción exacta y los parámetros pueden variar según el firmware.
- Mantenga un flujo de trabajo de prueba para validar la conectividad antes de desplegar a gran escala.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G02M con Plaspy ofrece a las organizaciones una forma sencilla de recopilar datos de ubicación en tiempo real y operar geocercas, alertas y reproducción histórica desde una única plataforma. Los ajustes de servidor compartidos de Plaspy y la detección automática del protocolo minimizan la complejidad de configuración por dispositivo y ayudan a que los equipos aparezcan en la plataforma rápidamente.

Para conocer más sobre Plaspy y ver las funcionalidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos específicos más actuales del dispositivo, notas de firmware y manuales detallados del G02M consulte el sitio de CanTrack en https://www.cantrackgps.com/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
