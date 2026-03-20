---
slug: /bce/fm_500_blue/configuration
id: fm_500_blue-configuration
sidebar_label: Configuration
title: BCE - FM-500 Blue+ Configuration
sidebar_class_name: menu_item_tracker
description: Configure el BCE FM-500 Blue+ para usarlo con Plaspy mediante ajustes públicos de servidor y guía práctica de instalación
keywords:
  - configuración BCE FM-500 Blue+
  - instalación FM-500 Blue+
  - FM-500 Blue+ Plaspy
  - configuración rastreador BCE
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - rastreador para gestión de flotas
  - configuración servidor Plaspy
  - configuración plataforma GPS
  - configuración software de rastreo
---

# BCE - Configuración del FM-500 Blue+

Esta página describe el contexto de configuración pública para usar el rastreador BCE FM-500 Blue+ con Plaspy. Aquí encontrará los ajustes de servidor que Plaspy comparte y los pasos prácticos que normalmente se requieren para preparar el FM-500 Blue+ y garantizar su comunicación fiable y visibilidad en la plataforma. La información está pensada para usuarios técnicos, integradores e instaladores que necesiten apuntar el dispositivo a Plaspy y validar la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El FM-500 Blue+ soporta posicionamiento GPS y GLONASS, transferencia GSM GPRS, múltiples entradas y salidas, e interfaces CAN de vehículo como J1939 que pueden incluirse en los datos enviados al servidor de rastreo cuando estén configuradas.

## Resumen de la configuración

Configurar el FM-500 Blue+ para Plaspy prepara el dispositivo para reportar ubicación y telemetría a un único endpoint de Plaspy, de modo que el equipo aparezca en la plataforma y empiece a enviar eventos. El proceso se centra en parámetros de red, la selección del transporte y pasos de verificación para confirmar que el rastreador es visible en Plaspy.

- Configure el endpoint de red del dispositivo al servidor de Plaspy y confirme los ajustes de transporte para permitir el flujo de datos.
- Asegúrese de que el dispositivo tenga alimentación operativa y conectividad celular para enviar datos GPRS a Plaspy.
- Verifique que el firmware del dispositivo y el método de configuración sean compatibles con la herramienta que utilizará.
- Guarde y aplique los ajustes en el dispositivo, luego confirme que el rastreador se registra y reporta correctamente en Plaspy.
- Use la detección y los registros de Plaspy para verificar que el protocolo del rastreador fue reconocido y que la ubicación y la telemetría llegan como se espera.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el FM-500 Blue+ para que reporte en Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos

## Requisitos típicos antes de la instalación

- Fuente de alimentación confiable para el FM-500 Blue+ y todo el cableado requerido realizado según la guía del instalador.
- SIM celular activa con servicio de datos compatible con GSM GPRS para que el rastreador pueda transmitir a la nube.
- Acceso al método de configuración oficial de BCE o al software proporcionado por el vendedor o distribuidor para su revisión de firmware.
- Instalación de antenas adecuada para recepción GPS GLONASS y señal GSM.
- Un plan de pruebas para validar el reporte a Plaspy después de la configuración, incluyendo la posibilidad de visualizar los datos entrantes en la plataforma.

## Cómo se conecta este rastreador a Plaspy

El FM-500 Blue+ envía su posición, movimiento y telemetría opcional del vehículo a través de la red celular al endpoint del servidor Plaspy. Una vez configurado para apuntar al servidor de Plaspy, la plataforma detectará el protocolo del rastreador de forma automática y comenzará a procesar los mensajes entrantes.

- El dispositivo transmite posición GPS GLONASS y telemetría vía GSM GPRS a d.plaspy.com o a 54.85.159.138
- Los datos se envían al puerto 8888 usando UDP o TCP según la selección de transporte del dispositivo
- Plaspy emplea detección automática de protocolo para identificar el formato de mensajes del FM-500 Blue+
- Cuando está configurado para reportar datos CAN del vehículo o sensores externos, esos registros se envían a Plaspy junto con los eventos de posición
- Una conexión exitosa hace que el dispositivo sea visible en Plaspy y habilita el reporte de eventos y la supervisión

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de BCE o al software para el FM-500 Blue+ provisto por su vendedor o la documentación de instalación.
2. En los ajustes de servidor del dispositivo introduzca el endpoint de Plaspy usando el nombre de dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, que es el puerto que Plaspy usa para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para enviar datos al servidor.
5. Configure los parámetros celulares necesarios, como la SIM y el APN, para que el rastreador establezca conexión GPRS.
6. Aplique o guarde la configuración en el dispositivo y realice cualquier reinicio requerido si las instrucciones del fabricante lo indican.
7. Valide que el dispositivo reporte a Plaspy comprobando la actividad del equipo en la plataforma y confirmando que el protocolo del rastreador fue detectado automáticamente.

## Ejemplos de comandos de configuración

No se proporcionó un conjunto público de comandos específico para este modelo en el contenido de configuración suministrado. La sintaxis exacta de comandos y mensajes de configuración varía según el firmware de BCE, las herramientas del proveedor y las interfaces de instalación. Para el FM-500 Blue+ debe usar la utilidad de configuración oficial de BCE, el conjunto de comandos SMS o la herramienta de configuración por serie que el fabricante o su distribuidor le proporcionen para establecer los parámetros de servidor d.plaspy.com o 54.85.159.138 y el puerto 8888 y para seleccionar UDP o TCP si es necesario.

Si obtiene una lista oficial de comandos de BCE o plantillas SMS del fabricante, aplique esos comandos en el orden recomendado por BCE y siga las notas del fabricante.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de configuración disponibles y la sintaxis de comandos. Verifique la revisión de firmware del dispositivo antes de aplicar ajustes.
- Elija UDP o TCP según la preferencia del instalador y las capacidades del firmware del dispositivo. Plaspy acepta ambos transportes en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que la configuración es consistente entre modelos compatibles.
- Al configurar el reporte de CAN o sensores externos, asegúrese de que esas interfaces estén habilitadas y mapeadas correctamente en la herramienta de configuración de BCE antes de enviar los datos a Plaspy.
- Consulte la documentación de BCE para opciones de configuración por SMS o procedimientos de configuración por puerto serie si no utiliza el software del proveedor.

## Por qué usar Plaspy con esta configuración

Usar el BCE FM-500 Blue+ con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación de activos y vehículos, el movimiento y la telemetría opcional recogida vía interfaces CAN. Configurar el dispositivo para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 permite que Plaspy detecte automáticamente el protocolo del rastreador y comience a ingerir datos de posición y eventos para monitoreo, generación de informes y supervisión operativa.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles de configuración más recientes del fabricante en http://www.bce.en/ para confirmar los pasos específicos de configuración y el comportamiento del firmware. Las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que es una buena práctica verificar las instrucciones actuales en el sitio oficial de BCE.
