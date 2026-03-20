---
slug: /arknav/r_9pro/configuration
id: r_9pro-configuration
sidebar_label: Configuration
title: ArkNav - R-9PRO Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ArkNav R-9PRO con ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - Configuración ArkNav R-9PRO
  - Instalación ArkNav R-9PRO
  - Configuración servidor ArkNav R-9PRO
  - Integración rastreador ArkNav con Plaspy
  - Configuración GPRS R-9PRO
  - Ajustes telemetría R-9PRO
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS vehicular
  - Guía instalación rastreador flota
  - Configuración seguimiento en tiempo real
---

# ArkNav - R-9PRO Configuración

Esta página documenta el contexto público de configuración para usar el ArkNav R-9PRO con la plataforma Plaspy. Resume los ajustes compartidos del servidor Plaspy que debe usar, explica los pasos prácticos para preparar el equipo y aclara qué verificar en el lado del fabricante antes de la integración. Las indicaciones están pensadas para instaladores técnicos y administradores de flota que configuran unidades R-9PRO para seguimiento centralizado en Plaspy.

Plaspy emplea configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta a la plataforma. Los pasos de configuración del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguir las herramientas de configuración de ArkNav o el manual del dispositivo para instrucciones específicas mientras aplica los ajustes de Plaspy que se indican a continuación.

## Resumen de configuración

Este proceso prepara el R-9PRO para enviar posición GNSS y telemetría del vehículo a Plaspy utilizando la conexión GPRS del equipo y las herramientas de configuración ArkNav. El objetivo es apuntar el rastreador al endpoint de Plaspy, confirmar el transporte y la conectividad, y validar que los datos aparezcan en la plataforma Plaspy.

- Configure el equipo para usar el endpoint y el puerto del servidor Plaspy para que pueda alcanzar la plataforma.
- Confirme la conectividad de datos móviles y los ajustes APN correctos en la SIM usada para GPRS.
- Seleccione el protocolo de transporte si es requerido y guarde los cambios en el rastreador.
- Valide que el rastreador reporte posiciones y eventos de I/O en Plaspy y supervisar las actualizaciones esperadas.
- Use las herramientas ArkNav o la interfaz serial USB para la configuración inicial y OTA cuando aplique.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y diferenciará el protocolo del rastreador automáticamente una vez que el equipo alcance el servidor.

## Requisitos habituales antes de la configuración

- Una unidad R-9PRO alimentada con el cableado necesario y una fuente de alimentación vehicular estable dentro del rango de entrada soportado.
- Una SIM móvil activa con datos GPRS habilitados y el APN correcto para el operador.
- Acceso a las herramientas de configuración ArkNav o a un cable de programación USB a serial según lo provea la documentación del dispositivo.
- Anotar la versión de firmware y la revisión de hardware del equipo para seguir los pasos del fabricante correspondientes.
- Información básica para el registro en Plaspy, como el ID único del dispositivo o IMEI, para confirmar que la unidad aparece en la plataforma.
- Un plan para probar la conectividad y verificar el reporte una vez aplicados los cambios de configuración.

## Cómo se conecta este rastreador a Plaspy

El R-9PRO transmite posición GNSS y la telemetría configurada a través de GPRS al endpoint y puerto compartidos de Plaspy. Una vez que el rastreador alcance d.plaspy.com en el puerto 8888, Plaspy aceptará la conexión y detectará automáticamente el protocolo correcto para interpretar los datos entrantes.

- El rastreador debe estar configurado para enviar actualizaciones de posición y datos de eventos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la elección de configuración del dispositivo; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador y comienza a ingerir posición y telemetría de I/O.
- Mensajes por evento como encendido, alarma o pánico son reenviados a Plaspy para generación de alertas e informes.
- La visibilidad del dispositivo en Plaspy se valida confirmando actualizaciones de posición recientes y telemetría en el panel de la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de ArkNav para el R-9PRO (cable de programación USB, herramienta ArkNav o herramienta web del fabricante).
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 como puerto de destino para el envío de datos.
4. Elija UDP o TCP si el firmware del dispositivo solicita seleccionar el transporte.
5. Configure o verifique el APN y los ajustes de la SIM para que el dispositivo pueda establecer la conexión GPRS.
6. Aplique o guarde la configuración en el equipo y realice cualquier reinicio requerido.
7. Valide que el equipo reporte a Plaspy comprobando actualizaciones de posición recientes y telemetría en la plataforma Plaspy.

Siga la documentación de ArkNav para los nombres exactos de los menús y la localización de parámetros en la interfaz de configuración del fabricante.

## Ejemplo de comandos de configuración

El R-9PRO normalmente se configura usando las herramientas del proveedor ArkNav o una interfaz de programación USB a serial y puede soportar métodos por SMS o comandos seriales según el firmware. Los formatos exactos de los comandos y las herramientas varían según el firmware de ArkNav y se incluyen en el manual oficial del dispositivo y en el software de configuración. Consulte la herramienta de configuración ArkNav o la guía de programación del R-9PRO para la sintaxis precisa de los comandos usados para establecer servidor, puerto, APN y opciones de transporte.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de menús o la sintaxis de comandos; confirme siempre el procedimiento correcto para su revisión de firmware.
- El R-9PRO soporta programación OTA para actualizaciones remotas, pero la configuración inicial de servidor y APN a menudo se realiza localmente o mediante un cable de programación.
- Elija UDP o TCP según la preferencia del instalador o las características de la red; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Todos los dispositivos Plaspy usan el mismo puerto 8888 por lo que debe emplear este puerto cuando configure múltiples modelos para la misma cuenta.
- Mantenga a mano la documentación del fabricante para variantes regionales y cualquier consideración específica de bandas GPRS o APN por región.

## Por qué usar Plaspy con esta configuración

Usar el ArkNav R-9PRO con Plaspy ofrece a los operadores de flota visibilidad centralizada de la ubicación y la telemetría del vehículo, junto con alertas configurables e informes. Las características del hardware R-9PRO como múltiples canales I/O, batería interna de respaldo y programación OTA complementan los paneles y alertas automatizadas de Plaspy para soportar monitoreo en tiempo real, respuesta a robos y reportes telemáticos.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details and firmware notes on the ArkNav website https://www.arknavgps.com.tw/. Manufacturer specifications, setup methods, and firmware behavior can change over time so confirm current configuration steps with ArkNav documentation before wide deployment.
