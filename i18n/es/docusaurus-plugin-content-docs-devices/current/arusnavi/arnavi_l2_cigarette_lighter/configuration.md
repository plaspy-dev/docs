---
slug: /arusnavi/arnavi_l2_cigarette_lighter/configuration
id: arnavi_l2_cigarette_lighter-configuration
sidebar_label: Configuration
title: Arusnnavi - Arnavi L2 (cigarette lighter) Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador Arnavi L2 con alimentación por toma de encendedor para funcionar con Plaspy usando ajustes de servidor compartidos y guía práctica
keywords:
  - Configuración Arusnavi Arnavi L2
  - Arnavi L2 configuración Plaspy
  - Configuración rastreador GPS Arusnavi
  - Configuración rastreador toma encendedor
  - Configuración servidor Plaspy
  - Configuración seguimiento Arnavi L2
  - Integración plataforma GPS Plaspy
  - Seguimiento de flotas Arnavi L2
  - Configuración sensores BLE Arnavi L2
  - Guía de instalación Arnavi L2
---

# Arusnavi - Arnavi L2 (toma de encendedor) — Configuración

Esta página explica el contexto de configuración pública para usar el rastreador GPS Arnavi L2 con alimentación por toma de encendedor en la plataforma Plaspy. Se enfoca en los ajustes de servidor compartidos y en el flujo práctico de instalación necesario para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicación, estado y datos de sensores para monitoreo en tiempo real e informes históricos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la guía a continuación para preparar el Arnavi L2 para Plaspy y consulte la documentación de Arusnavi para procedimientos específicos del dispositivo.

## Resumen de configuración

Este proceso prepara el Arnavi L2 para comunicarse de forma confiable con Plaspy, permitiendo a los administradores de flota ver la ubicación del vehículo, el estado de encendido y los sensores, así como recibir alertas. El objetivo es aplicar el endpoint y puerto compartidos de Plaspy en el dispositivo y confirmar que los datos almacenados se suben cuando se restablece la conectividad.

- Configure el dispositivo para reportar al endpoint del servidor Plaspy y que aparezca en la plataforma.
- Verifique que los datos móviles y la configuración de la SIM sean correctos para establecer una conexión GPRS.
- Seleccione el transporte adecuado (UDP o TCP) si es necesario y configure el mismo puerto que utiliza Plaspy.
- Valide el seguimiento en tiempo real y la subida de datos almacenados tras una breve prueba de manejo o simulación de movimiento.
- Verifique el emparejamiento de sensores BLE y el reporte de la entrada de encendido si utiliza esas funciones.

## Ajustes del servidor Plaspy

- Dominio del servidor Plaspy d.plaspy.com
- IP del servidor Plaspy 54.85.159.138
- Puerto 8888
- El transporte puede ser UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda parsear los mensajes soportados
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la instalación

- Dispositivo alimentado desde la toma del encendedor y físicamente instalado con buena visibilidad GNSS
- Nano SIM activa con datos habilitados y un plan GPRS 2G compatible si la red local lo requiere
- Acceso a las herramientas oficiales de configuración de Arusnavi, como el portal web, la herramienta USB para PC o la app móvil para configuración remota
- Computadora o smartphone con la utilidad de configuración del fabricante si la configuración requiere USB o Bluetooth
- Conocimiento del APN del dispositivo y de las credenciales del operador necesarias para la conectividad de datos
- Confirmar la versión de firmware del dispositivo y obtener la documentación más reciente del fabricante cuando esté disponible

## Cómo se conecta este rastreador a Plaspy

El Arnavi L2 está configurado para enviar posición, estado y telemetría de sensores al endpoint y puerto compartidos de Plaspy, de modo que la plataforma muestre ubicación en vivo, alarmas y recorridos históricos. Los datos que no se puedan subir de inmediato se almacenan localmente y se cargan cuando se restablece la conexión.

- Las posiciones periódicas y soluciones GNSS se transmiten a d.plaspy.com en el puerto 8888 utilizando UDP o TCP
- Cambios de estado e entradas como encendido/apagado se reportan y procesan en Plaspy
- Datos de sensores Bluetooth LE y lecturas internas se retransmiten a Plaspy para telemetría y alertas
- Los registros en búfer tipo black box se suben al mismo endpoint de Plaspy cuando hay conexión disponible
- Plaspy detecta automáticamente el protocolo del rastreador para parsear correctamente los mensajes entrantes

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de Arusnavi (herramienta USB para PC, app móvil o configuración remota web) provisto por el fabricante.
2. Localice la sección de ajustes de servidor o monitoreo en la herramienta de configuración del dispositivo.
3. Introduzca d.plaspy.com o, alternativamente, la IP 54.85.159.138 como endpoint del servidor.
4. Configure el puerto del dispositivo en 8888.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el protocolo de transporte.
6. Aplique o guarde la configuración en el dispositivo y cargue o escriba los ajustes en el rastreador.
7. Reinicie el dispositivo si la herramienta de configuración o el propio equipo indica que es necesario.
8. Valide que el dispositivo reporte a Plaspy observando que la unidad aparezca en línea, comprobando una actualización de posición reciente y confirmando la subida de registros almacenados si aplica.

## Ejemplos de comandos de configuración

El fabricante ofrece varios métodos de configuración, incluyendo herramienta USB para PC, configuración remota web y app móvil. Los comandos exactos de configuración y las cadenas SMS dependen del firmware de Arusnavi y de la interfaz de configuración elegida, y no se incluyen aquí como comandos públicos. Use las herramientas oficiales de Arusnavi para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, y seleccione UDP o TCP si el dispositivo lo requiere.

Si dispone de cadenas de comandos o configuración por SMS proporcionadas por Arusnavi, aplíquelas en el orden que indique el fabricante y conserve los marcadores de posición como credenciales APN según lo indique la documentación del dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús de configuración y las opciones disponibles; siempre confirme los pasos con las notas de la versión del firmware.
- Elija UDP para menor sobrecarga y por el patrón típico de mensajes de los rastreadores, o TCP si el dispositivo o su red requieren un transporte orientado a conexión. Ambos transportes son compatibles con Plaspy.
- Asegúrese de que el operador móvil soporte GPRS 2G en su área de despliegue, ya que el dispositivo emplea GSM 2G GPRS para telemetría.
- El emparejamiento y la configuración de sensores BLE se gestionan mediante la app móvil de Arusnavi o la herramienta de configuración y pueden requerir pasos de registro separados.
- Si depende del almacenamiento tipo black box, pruebe deshabilitando temporalmente los datos móviles y verifique que los registros se suben cuando la conectividad vuelve.

## Por qué usar Plaspy con esta configuración

Usar el Arnavi L2 con Plaspy ofrece a las organizaciones una opción telemática rápida y de tipo plug in para vehículos que deben permanecer portátiles e intercambiables. La forma de alimentación por toma del encendedor, el posicionamiento multi GNSS y el soporte de sensores BLE, junto con la conectividad al servidor Plaspy, brindan visibilidad casi en tiempo real de la ubicación, el estado de encendido y los sensores sin necesidad de instalaciones empotradas.

Learn more about Plaspy features and platform capabilities at https://www.plaspy.com. For the most current device specific configuration commands, firmware details, and installation instructions, verify the latest information on the Arusnavi manufacturer website https://www.arusnavi.ru.
