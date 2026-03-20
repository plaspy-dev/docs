---
slug: /skypatrol/sp8703/configuration
id: sp8703-configuration
sidebar_label: Configuration
title: SkyPatrol - SP8703 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar SkyPatrol SP8703 con Plaspy, con ajustes de servidor y pasos prácticos para la integración
keywords:
  - Configuración SkyPatrol SP8703
  - Instalación SkyPatrol SP8703
  - Integración SP8703 con Plaspy
  - Configuración del rastreador GPS SP8703
  - Configuración rastreador personal Plaspy
  - Configuración de servidor SP8703
  - Configuración rastreador SkyPatrol
  - Configuración Wi Fi y celular SP8703
  - Dispositivos compatibles con Plaspy
  - Configuración SOS SP8703
---

# SkyPatrol - Configuración del SP8703

Esta página describe el contexto público de configuración para utilizar el SkyPatrol SP8703 con Plaspy. Resume los ajustes de servidor y los pasos prácticos necesarios para apuntar un SP8703 al endpoint de seguimiento de Plaspy, y explica qué verificar antes de proceder con la integración. Utilice esta guía para preparar el dispositivo y que pueda enviar datos de ubicación y alertas a Plaspy para su monitorización centralizada.

Plaspy aplica ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo una vez que se conecta a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione SkyPatrol. Cuando tenga dudas, confirme las opciones específicas en la documentación oficial de SkyPatrol.

## Resumen de la configuración

Configurar un SP8703 para Plaspy consiste principalmente en dirigir el dispositivo al servidor de Plaspy y asegurarse de que tenga una ruta de red operativa para enviar actualizaciones. Dado que el SP8703 soporta conexiones celulares y Wi Fi, el proceso se enfoca en preparar la red, configurar el endpoint del servidor y validar finalmente que el dispositivo sea visible en Plaspy.

- Configure los parámetros de red del dispositivo para que acceda a Internet vía su conexión celular o Wi Fi.
- Ingrese el endpoint y el puerto del servidor de Plaspy para que los mensajes de posición y eventos se reenvíen correctamente.
- Seleccione el protocolo de transporte que soporte el dispositivo y empareje esa opción con la configuración en Plaspy si es necesario.
- Aplique y guarde la configuración en el dispositivo y, si procede, realice un reinicio.
- Verifique que el dispositivo aparezca en Plaspy y que se reciban eventos de ubicación y SOS.

## Ajustes del servidor de Plaspy

Al configurar el SP8703 para trabajar con Plaspy, use los siguientes valores públicos exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on the device configuration option
- Plaspy automatically detects the tracker protocol once the device connects to the server

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles e intentará identificar el protocolo del rastreador automáticamente después de que el dispositivo empiece a comunicarse.

## Requisitos típicos antes de la configuración

- Un SP8703 con batería cargada y alimentación operativa para la configuración y las pruebas iniciales
- Una SIM activa con plan de datos configurada en el dispositivo si va a usar conectividad celular
- Acceso al método o software oficial de configuración de SkyPatrol para el SP8703
- Conectividad de red por celular o Wi Fi que permita tráfico saliente hacia servidores externos
- Conocimiento de los parámetros APN requeridos por el operador celular y la capacidad de ingresarlos en el dispositivo
- Acceso administrativo a Plaspy para verificar que el rastreador aparezca y reporte correctamente

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SP8703 envía actualizaciones de ubicación y notificaciones de eventos al endpoint del servidor de Plaspy para que los administradores puedan monitorear y responder a las alertas. La configuración asegura que el dispositivo reenvíe la telemetría al endpoint y puerto compartidos de Plaspy, donde la plataforma realiza la detección de protocolo e ingiere los datos entrantes.

- El dispositivo transmite mensajes de posición y eventos a d.plaspy.com
- Los mensajes se entregan a Plaspy en 54.85.159.138 en el puerto 8888
- El transporte puede seleccionarse como UDP o TCP en el dispositivo cuando el firmware lo requiera
- Plaspy detecta automáticamente el protocolo del rastreador tras la conexión inicial
- Plaspy consolida la telemetría recibida en vistas de mapa en tiempo real, alertas e historial para su monitoreo

## Flujo común de configuración

1. Acceda al método oficial de configuración del SkyPatrol SP8703 o al software provisto por el fabricante.
2. Localice los ajustes del servidor o endpoint de seguimiento en la herramienta de configuración.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138.
4. Establezca el puerto de destino en 8888.
5. Seleccione UDP o TCP como opción de transporte si el dispositivo solicita elegir el transporte.
6. Aplique o guarde la configuración en la interfaz del dispositivo.
7. Reinicie el dispositivo si el fabricante recomienda un reinicio después de la configuración.
8. Verifique que el SP8703 reporte a Plaspy comprobando la visibilidad del dispositivo y la telemetría reciente en la plataforma Plaspy.

## Ejemplos de comandos de configuración

No se proporcionó un conjunto público de comandos para el SP8703 en esta guía. Los comandos exactos de configuración y el método de envío varían según el firmware de SkyPatrol y las herramientas del fabricante. Consulte el software de configuración de SkyPatrol o el manual del dispositivo para la sintaxis precisa de los comandos y las interfaces disponibles.

Si dispone de una lista de comandos del fabricante o un conjunto de comandos SMS de SkyPatrol, asegúrese de que apunten el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que especifiquen UDP o TCP según se requiera. Utilice las instrucciones oficiales de SkyPatrol para aplicar esos comandos en el orden correcto.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar los nombres de los menús, las rutas de configuración y las opciones de transporte compatibles; confirme siempre con la documentación de SkyPatrol.
- Plaspy acepta tanto UDP como TCP en el puerto 8888, pero algunas versiones de firmware pueden favorecer un transporte por defecto; elija el transporte que el dispositivo soporte de forma fiable.
- Plaspy usa un puerto compartido para todos los dispositivos y detecta automáticamente el protocolo del dispositivo tras la primera conexión.
- Asegúrese de que la SIM del dispositivo tenga un plan de datos y los ajustes APN correctos antes de intentar conectar por celular.
- Para dispositivos configurados por Wi Fi, confirme que la red permite conexiones salientes hacia d.plaspy.com en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el SkyPatrol SP8703 ofrece a las organizaciones visibilidad centralizada de la seguridad personal y de la telemetría de activos portátiles. La combinación del SP8703 de conectividad dual celular y Wi Fi, botón SOS y detección de movimiento lo hace apropiado para escenarios donde las alertas oportunas y el bajo consumo de energía son importantes; Plaspy proporciona la plataforma para recibir, visualizar y actuar sobre esas actualizaciones.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer documentation, verify configuration details on the SkyPatrol site https://www.skypatrol.com/ .
