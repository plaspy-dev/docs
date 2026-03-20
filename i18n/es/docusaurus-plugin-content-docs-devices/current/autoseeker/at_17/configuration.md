---
slug: /autoseeker/at_17/configuration
id: at_17-configuration
sidebar_label: Configuration
title: Autoseeker - AT-17 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el Autoseeker AT-17 y conectarlo al servidor Plaspy
keywords:
  - Configuración Autoseeker AT-17
  - Configuración AT-17 para Plaspy
  - Configuración GPS Autoseeker
  - Configuración de servidor AT-17
  - Configuración de dispositivo Plaspy
  - Configuración de software de seguimiento AT-17
  - Guía de configuración de rastreador vehicular
  - Configuración de rastreador 2G
  - Configuración de rastreo de flotas
  - Guía de instalación AT-17
---

# Autoseeker - Configuración del AT-17

Esta página documenta el contexto público de configuración para usar el rastreador Autoseeker AT-17 con la plataforma Plaspy. Describe los valores prácticos del servidor y los pasos generales necesarios para dirigir el AT-17 hacia Plaspy para seguimiento en tiempo real y reproducción histórica, basándose en el diseño del AT-17 y los métodos de reporte que soporta.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al recibir los datos. Los pasos de configuración del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siga las indicaciones a continuación para los valores específicos de Plaspy y consulte la documentación de Autoseeker para procedimientos específicos del dispositivo.

## Resumen de la configuración

El objetivo de configurar el AT-17 para Plaspy es preparar el dispositivo para que envíe actualizaciones de ubicación y estado de forma fiable al endpoint de ingestión de Plaspy y verificar que el equipo sea visible en su cuenta Plaspy. La configuración normalmente abarca direccionamiento del servidor, selección del transporte y un paso de validación de conectividad para que el rastreador aparezca en el monitoreo en vivo y en los reportes archivados.

- Apuntar el dispositivo al endpoint de Plaspy para que los reportes por GPRS o SMS se entreguen a Plaspy.
- Seleccionar el tipo de transporte soportado por el dispositivo y por Plaspy, normalmente UDP o TCP en el puerto compartido.
- Guardar y aplicar los ajustes en el AT-17 usando el método oficial de configuración de Autoseeker.
- Validar la conectividad y comprobar que el dispositivo envíe actualizaciones de posición iniciales y mensajes de alarma a Plaspy.
- Confirmar la visibilidad en Plaspy para seguimiento en tiempo real, alertas y reproducción histórica.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (all devices in Plaspy use the same port)  
- Transport support: UDP or TCP on port 8888 (the device may be configured using UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when data arrives

## Requisitos habituales antes de la configuración

- Asegúrese de que el AT-17 tenga la batería interna cargada o esté alimentado durante la configuración y las pruebas.
- Confirme que existe conexión GSM/GPRS 2G en el área de despliegue, ya que el AT-17 es un dispositivo 2G.
- Obtenga acceso al método o software oficial de Autoseeker para ingresar los ajustes de servidor y transporte.
- Mantenga el dispositivo encendido y la SIM configurada para datos o para reportes por SMS, según la configuración que elija.
- Conozca las credenciales APN necesarias si el dispositivo las requiere para conexiones GPRS y téngalas a mano.
- Tenga acceso a una cuenta Plaspy y una forma de observar que el dispositivo aparece en la plataforma durante la validación.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AT-17 envía reportes de ubicación y estado al endpoint y puerto compartidos de Plaspy usando los métodos de reporte que soporte. Plaspy recibe esos mensajes, aplica la detección de protocolo y pone a disposición los datos de posición y de eventos para monitoreo, alertas y reproducción archivada.

- El dispositivo se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede establecerse en UDP o TCP en el dispositivo; Plaspy acepta ambos y procesa los mensajes entrantes.
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar mensajes de posición y eventos.
- Las actualizaciones de posición y las alarmas se vuelven visibles en Plaspy para seguimiento en tiempo real y para los flujos operacionales.
- Las trayectorias históricas reportadas al endpoint de Plaspy se conservan en la plataforma según la configuración de su cuenta y las políticas de retención.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Autoseeker para el AT-17 (comandos SMS, herramienta del fabricante o software de servicio según lo provea Autoseeker).  
2. Ingrese la dirección del servidor de Plaspy estableciendo el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del servidor a 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
4. Elija el tipo de transporte si el dispositivo requiere seleccionar entre UDP o TCP.  
5. Configure cualquier APN o credenciales GPRS necesarias para que el rastreador pueda usar datos móviles y alcanzar el servidor Plaspy.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere para activar los nuevos valores del servidor.  
7. Valide que el AT-17 reporte a Plaspy observando actualizaciones de posición en vivo y eventos de prueba en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El AT-17 puede configurarse por distintos métodos según el firmware y el modelo regional. Los comandos exactos varían según la herramienta del fabricante o el conjunto de comandos por SMS. Dado que los comandos y formatos dependen del firmware, consulte la documentación de Autoseeker o las guías de configuración suministradas por el proveedor para la sintaxis precisa.

Si su firmware del AT-17 admite configuración por comandos SMS, los pasos públicos típicos son:
- Use la lista oficial de comandos de Autoseeker para establecer el dominio o la IP del servidor, el puerto y el transporte.
- Proporcione las credenciales APN si el operador de la SIM las requiere, usando el formato de comando APN del dispositivo.

Note: The device specific SMS or serial command syntax is maintained by Autoseeker. Refer to the official user manual for command examples and placeholders such as [apn], [apnu], and [apnp] if present in vendor instructions.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; verifique siempre el conjunto de comandos para la revisión de su dispositivo.  
- Donde esté soportado, elija UDP o TCP según la fiabilidad de su red y la recomendación del firmware del dispositivo. Ambos son aceptados por Plaspy en el puerto 8888.  
- La configuración por SMS puede estar disponible para ajustes básicos de servidor y alarmas, mientras que la configuración completa de GPRS suele realizarse mediante la herramienta del fabricante o por comandos SMS.  
- Confirme el APN y la disponibilidad de datos de la SIM antes del despliegue para asegurarse de que el dispositivo pueda establecer conexiones GPRS con Plaspy.  
- Existen variaciones por instalador y mercado; algunos distribuidores ofrecen servicios de preconfiguración que pueden establecer los valores de Plaspy antes del despliegue.

## Por qué usar Plaspy con esta configuración

Configurar el Autoseeker AT-17 para reportar a Plaspy ofrece a los equipos operativos visibilidad centralizada para ubicación en tiempo real, gestión de alarmas y análisis histórico. La larga autonomía de la batería del AT-17 y su montaje resistente lo hacen adecuado para despliegues prolongados, y dirigir sus reportes a Plaspy le permite integrar los datos de seguimiento en la gestión de flotas, respuesta a incidentes y flujos de recuperación.

Learn more about Plaspy and how it ingests device data at https://www.plaspy.com. Manufacturer specifications and configuration methods can change over time; verify the latest device-specific setup details and firmware behavior at the Autoseeker website https://autoseekergps.com/.
