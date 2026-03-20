---
slug: /falcom/fox3_4g_na/configuration
id: fox3_4g_na-configuration
sidebar_label: Configuration
title: Falcom - FOX3-4G-NA Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Falcom FOX3-4G-NA con ajustes de servidor de Plaspy
keywords:
  - Configuración Falcom FOX3-4G-NA
  - Instalación FOX3-4G-NA
  - Rastreador Falcom Plaspy
  - Ajustes de servidor FOX3
  - Configuración rastreo vehicular
  - Guía instalación rastreador GPS
  - Configuración servidor Plaspy
  - Rastreador gestión de flotas
  - Integración Falcom FOX3
  - Configuración plataforma GPS FOX3
---

# Falcom - Configuración FOX3-4G-NA

Esta página describe el contexto público de configuración para usar el rastreador Falcom FOX3-4G-NA con Plaspy. Explica los ajustes de servidor y el flujo de trabajo necesarios para apuntar su dispositivo al endpoint de Plaspy, de modo que la plataforma reciba la ubicación y los datos del equipo. La información se centra en los detalles de integración con Plaspy que son públicos y comúnmente requeridos para la configuración en el servidor.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que utilice. Consulte la documentación de Falcom o la herramienta de instalación para encontrar los nombres de menú, formatos de comando SMS o utilidades de configuración específicos para su unidad FOX3-4G-NA.

## Resumen de configuración

El objetivo de esta configuración es preparar el FOX3-4G-NA para comunicarse de forma fiable con la plataforma Plaspy, de modo que el dispositivo aparezca en la flota y reporte eventos y posiciones. Usar el endpoint público de Plaspy y el puerto indicado permitirá que el rastreador transmita su telemetría a Plaspy, donde usted podrá monitorizar y administrar el equipo.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que los datos lleguen a la plataforma
- Configurar el protocolo de transporte y el puerto acorde con los ajustes de Plaspy
- Verificar la conectividad celular y la recepción GNSS para asegurar el envío de reportes
- Guardar y aplicar los ajustes en el equipo Falcom y confirmar que Plaspy recibe reportes visibles
- Implementar los ajustes usando las herramientas de Falcom o comandos SMS según provea el fabricante

## Ajustes del servidor Plaspy

Configure su FOX3-4G-NA para reportar a los siguientes ajustes del servidor Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using either UDP or TCP as required by your configuration method
- Plaspy automatically detects the tracker protocol so the device can use the shared server endpoint
- Note that all devices in Plaspy use the same port so setting port 8888 is consistent across supported trackers

## Requisitos previos típicos antes de la configuración

- Dispositivo alimentado y accesible para configuración mediante la herramienta de Falcom o la interfaz de instalador
- SIM celular activa con datos habilitados y cobertura en la región de despliegue
- Antena GNSS o posición de instalación que garantice recepción satelital fiable
- Acceso a la documentación de configuración de Falcom o a las herramientas de soporte para FOX3-4G-NA
- Una cuenta Plaspy o un flujo de aprovisionamiento para confirmar que el dispositivo aparece tras la configuración
- Firmware en el FOX3-4G-NA que soporte configuración remota de servidor y los protocolos requeridos

## Cómo se conecta este rastreador a Plaspy

Al configurarse para reportar a Plaspy, el FOX3-4G-NA enviará mensajes periódicos y por eventos al endpoint compartido de Plaspy para que los dispositivos sean visibles y monitoreados en la plataforma. El equipo utiliza su conexión de datos celular para entregar la telemetría a la dirección y puerto del servidor indicados más arriba.

- El rastreador se configura para reportar al endpoint del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138
- Los reportes se envían al puerto 8888 que es el puerto común usado por Plaspy para dispositivos compatibles
- El transporte puede ser UDP o TCP según el método de configuración del dispositivo y su preferencia
- Plaspy detecta automáticamente el protocolo del dispositivo al recibir la conexión, por lo que normalmente no se requiere seleccionar el protocolo manualmente en el servidor
- Una vez en modo de reporte, el dispositivo aparecerá en Plaspy y transmitirá actualizaciones de ubicación e información de estado para la supervisión en la plataforma

## Flujo de configuración común

1. Acceda al método oficial de configuración de Falcom o al software para FOX3-4G-NA, como la interfaz web, la herramienta USB/serial o la utilidad de instalador proporcionada por Falcom o su proveedor.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Establezca el puerto del dispositivo en 8888 que es el puerto compartido de Plaspy para los dispositivos soportados.
4. Seleccione UDP o TCP para el transporte si el dispositivo requiere que elija un protocolo.
5. Aplique o guarde la configuración en la herramienta de Falcom y confirme que los ajustes se escribieron correctamente en el dispositivo.
6. Reinicie el FOX3-4G-NA si el firmware o la herramienta de configuración lo exige para comenzar a reportar a Plaspy.
7. Valide que el dispositivo esté reportando a Plaspy comprobando la visibilidad del equipo y la telemetría reciente en su cuenta o interfaz de monitorización de Plaspy.

## Ejemplos de comandos de configuración

El FOX3-4G-NA soporta distintos métodos de configuración según el firmware y las herramientas de Falcom que utilice. La sintaxis exacta de comandos y los comandos SMS o CLI disponibles varían con el firmware y las compilaciones regionales, por lo que debe consultar la documentación de Falcom para los formatos de comando específicos del dispositivo. Plaspy acepta conexiones a d.plaspy.com o 54.85.159.138 en el puerto 8888 via UDP o TCP y detectará automáticamente el protocolo del rastreador.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menú, la sintaxis de comandos y las opciones de configuración disponibles. Confirme siempre los pasos exactos para su versión de firmware.
- Al elegir entre UDP y TCP, considere las condiciones de red y las opciones de configuración que expone su herramienta Falcom. Plaspy soporta ambos transportes.
- Use el dominio d.plaspy.com cuando sea posible para que la resolución DNS gestione futuros cambios de IP en la infraestructura; de lo contrario la IP 54.85.159.138 es una alternativa válida.
- Algunos instaladores prefieren configurar el servidor por IP en entornos sin conexión o restringidos; otros usan el dominio. Ambos son compatibles con Plaspy.
- Verifique la señal GNSS y celular durante la configuración para que el dispositivo pueda establecer una sesión de datos y transmitir la telemetría inicial tras aplicar los ajustes.

## Por qué usar Plaspy con esta configuración

Usar el FOX3-4G-NA con Plaspy ofrece una vía directa para que la telemetría del equipo llegue a una plataforma de gestión de flotas que soporta detección automática de protocolos y ajustes de servidor consistentes. Las organizaciones obtienen reportes de posición confiables y visibilidad de los dispositivos al configurar el rastreador al endpoint y puerto compartidos de Plaspy.

Para obtener más información sobre Plaspy y las funciones de la plataforma disponibles para el rastreo de flotas, visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y la guía oficial de Falcom para el FOX3-4G-NA, verifique la información en el sitio del fabricante en https://www.falcom.de ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.
