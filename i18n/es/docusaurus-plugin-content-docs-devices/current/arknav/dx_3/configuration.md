---
slug: /arknav/dx_3/configuration
id: dx_3-configuration
sidebar_label: Configuration
title: ArkNav - DX-3 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador ArkNav DX-3 compatible con Plaspy y ajustes de servidor compartidos
keywords:
  - Configuración ArkNav DX-3
  - Instalación ArkNav DX-3
  - ArkNav DX-3 Plaspy
  - Guía configuración DX-3
  - Configuración dispositivo Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador de seguridad personal
  - Seguimiento personas vulnerables
  - Rastreador con botón de pánico
  - Rastreador con voz bidireccional
---

# ArkNav - DX-3 Configuración

Esta página documenta el contexto público de configuración para usar el ArkNav DX-3 con Plaspy. Explica los ajustes compartidos del servidor Plaspy y los pasos prácticos que normalmente seguirá para apuntar el DX-3 a Plaspy, de modo que los eventos, alertas de pánico, sesiones de Start Tracking y las actualizaciones de estado sean visibles en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que utilice el proveedor, por lo que esta página se centra en los ajustes necesarios para Plaspy y en el flujo de trabajo habitual al integrar el DX-3.

## Resumen de la configuración

El objetivo de la configuración es preparar el DX-3 para que comunique de forma fiable eventos y ubicación a Plaspy, manteniendo el comportamiento del dispositivo orientado a la privacidad. Normalmente se asegura que el dispositivo sea accesible en la red, que apunte al endpoint de Plaspy y que opere con el modo de transporte que el dispositivo soporte.

- Configure el rastreador para enviar alarmas y ubicación al endpoint del servidor Plaspy.
- Establezca el puerto compartido de Plaspy para que el DX-3 use el puerto que Plaspy espera.
- Seleccione el protocolo de transporte si el dispositivo requiere elección entre UDP o TCP.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy con los tipos de evento esperados.
- Pruebe las funciones de pánico, alerta por caída y las sesiones de Start Tracking para que cuidadores y operadores vean las alertas y la ubicación.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de Plaspy al configurar el DX-3. Estos son los valores que Plaspy requiere para el reporte de dispositivos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador al conectarse.

## Requisitos típicos antes de la configuración

- Batería del dispositivo totalmente cargada o alimentación continua durante la configuración mediante la base de carga o el cargador.
- Acceso al método oficial de configuración ArkNav para el DX-3, como la herramienta del fabricante o el cable de programación USB.
- Servicio de red activo según lo requiera el dispositivo para voz y reporte de eventos.
- Una computadora o dispositivo móvil capaz de ejecutar la utilidad de configuración del fabricante o de conectarse al dispositivo para la puesta a punto.
- Número de serie del dispositivo e identificadores que requiera su flujo de trabajo de monitoreo o el proceso de incorporación en Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el DX-3 reporta alarmas, seguimiento bajo demanda y actualizaciones de estado al endpoint y puerto compartidos de Plaspy para que los usuarios de la plataforma reciban notificaciones y datos de ubicación de forma rápida.

- El rastreador se configura para reportar al endpoint de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Las alertas de pánico y man-down (alerta por caída o inmovilización) se transmiten de inmediato para que Plaspy pueda enrutar las notificaciones a cuidadores u operadores.
- Las sesiones de Start Tracking envían actualizaciones de ubicación mientras el usuario tiene activado el seguimiento, y esas actualizaciones aparecen en el mapa en vivo de Plaspy.
- Se reporta el estado de batería y del cargador para que Plaspy pueda notificar a los equipos sobre condiciones de batería baja.
- Se pueden iniciar sesiones de voz bidireccional durante alertas cuando la capacidad de voz en red está disponible y soportada.

## Flujo de trabajo de configuración habitual

1. Acceda al método oficial de configuración del ArkNav DX-3 o al software suministrado por el fabricante o proveedor.
2. En los ajustes del servidor del dispositivo ingrese el endpoint de Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888 para que envíe datos al puerto donde escucha Plaspy.
4. Elija el modo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los ajustes fueron aceptados.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy provocando un evento de prueba, como una sesión de Start Tracking o una alerta de pánico, y confirme la visibilidad en el lado de Plaspy.

## Comandos de configuración de ejemplo

Los comandos de configuración del modelo DX-3 y la sintaxis exacta dependen de las herramientas del fabricante ArkNav y del firmware. Dado que los fabricantes ofrecen diferentes interfaces de configuración, los pasos precisos pueden realizarse mediante una utilidad de configuración de escritorio, un cable de programación USB a serial o el software proporcionado por el fabricante. Consulte la documentación de la utilidad de configuración del ArkNav DX-3 para la sintaxis exacta de los comandos y ejemplos.

Si dispone de un conjunto de comandos ArkNav por parte del fabricante, siga esa secuencia al ingresar los valores del endpoint y puerto de Plaspy. Conserve los marcadores de posición que utilice el fabricante y reemplácelos por sus valores reales al ejecutar los comandos.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar los menús de configuración y las opciones de transporte soportadas; confirme siempre el nivel de firmware antes de seguir un flujo de trabajo.
- Elegir UDP frente a TCP puede afectar la semántica de entrega; Plaspy soporta ambos en el puerto 8888 y detectará automáticamente el protocolo del dispositivo al conectarse.
- Plaspy utiliza el mismo puerto para todos los dispositivos, por lo que solo necesita establecer el puerto 8888 para que el DX-3 reporte a Plaspy.
- Siga la documentación de ArkNav y las instrucciones del proveedor al usar el cable USB a serial o el software del fabricante para evitar una mala configuración.
- Respete el comportamiento de privacidad del dispositivo: el DX-3 comparte ubicación continua solo cuando se presiona Start Tracking o durante una sesión de emergencia, lo cual forma parte del diseño del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el ArkNav DX-3 con Plaspy ofrece una forma sencilla de integrar un rastreo personal con respeto por la privacidad en un flujo de trabajo de monitoreo o atención. Plaspy recibe tipos de eventos discretos como pánico y man-down, además de actualizaciones de ubicación bajo demanda e información de estado, de modo que los operadores pueden responder con rapidez sin necesidad de monitoreo continuo.

Para obtener más información sobre Plaspy y las configuraciones de rastreadores compatibles visite https://www.plaspy.com. Para detalles específicos de configuración del ArkNav DX-3, notas de firmware y especificaciones técnicas completas consulte el sitio del fabricante en https://www.arknavgps.com.tw/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que verifique la documentación vigente antes de desplegar dispositivos.
