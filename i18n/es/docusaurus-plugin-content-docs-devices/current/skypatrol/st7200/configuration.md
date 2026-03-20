---
slug: /skypatrol/st7200/configuration
id: st7200-configuration
sidebar_label: Configuration
title: SkyPatrol - ST7200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para SkyPatrol ST7200 y compatibilidad con Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - SkyPatrol ST7200 configuración
  - SkyPatrol ST7200 instalación
  - ST7200 configuración servidor
  - ST7200 configuración Plaspy
  - configuración rastreador GPS SkyPatrol
  - configuración software rastreo ST7200
  - configuración rastreador vehículos recreativos
  - rastreo de vehículos ST7200
  - configuración rastreador GPS Plaspy
  - guía de instalación ST7200
---

# SkyPatrol - Configuración del ST7200

Esta página describe el contexto público de configuración para usar el SkyPatrol ST7200 con la plataforma Plaspy. Explica los valores compartidos del servidor Plaspy que deberá aplicar al ST7200 y ofrece un flujo de trabajo práctico para que el rastreador pueda comunicarse con Plaspy y aparecer en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos del fabricante para configurar el ST7200 pueden variar según la revisión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía sirve para los valores específicos de Plaspy y el flujo general; confirme los pasos específicos del dispositivo en la documentación de SkyPatrol.

## Resumen de la configuración

El objetivo de esta configuración es indicar al ST7200 que envíe sus ubicaciones y actualizaciones de estado al servidor de Plaspy y verificar que el dispositivo sea visible y reporte correctamente en la plataforma. Use el endpoint y el puerto del servidor que se listan a continuación al actualizar la configuración del dispositivo mediante el método de SkyPatrol que tenga disponible.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y así los datos de ubicación lleguen a la plataforma.
- Seleccione la opción de transporte que soporte el equipo y Plaspy, UDP o TCP en el mismo puerto.
- Valide la conectividad de red y que el ST7200 tenga carga suficiente y batería de respaldo.
- Aplique y guarde los cambios en la herramienta de configuración de SkyPatrol y luego verifique el reporte en Plaspy.
- Confirme que el identificador de dispositivo que usa Plaspy coincida con el ID de hardware del ST7200 que configuró.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para la ingestión en la plataforma

## Requisitos típicos antes de la configuración

- Verifique que el ST7200 y su batería interna de respaldo tengan carga suficiente y estén alimentados para la configuración.
- Necesita acceso al método oficial de configuración de SkyPatrol o al software del proveedor para cambiar los ajustes de servidor y transporte.
- Cobertura de red para que el dispositivo pueda alcanzar el endpoint del servidor Plaspy.
- El identificador del dispositivo o los datos de registro que proporcionará a Plaspy para asociar el rastreador con la cuenta correcta.
- Acceso físico al dispositivo según sea necesario para comprobaciones de instalación y verificación posterior a la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el ST7200 envía mensajes periódicos de ubicación y estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe los paquetes entrantes en el puerto 8888 y detecta automáticamente el protocolo que usa el dispositivo, lo que hace que la configuración sea consistente entre los dispositivos compatibles.

- El rastreador reporta a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP en el puerto 8888 según las opciones del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes.
- Una configuración exitosa permite la visibilidad y el reporte de eventos en la plataforma Plaspy.
- Las herramientas de la plataforma correlacionan el identificador del dispositivo con los datos reportados para seguimiento y monitoreo.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de SkyPatrol o al software del proveedor que programe el ST7200.
2. Ingrese el servidor Plaspy como d.plaspy.com o, donde se requiera, establezca la IP del servidor en 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, recordando que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte; el equipo puede configurarse usando UDP o TCP en el puerto 8888.
5. Aplique o guarde la configuración en la herramienta de SkyPatrol.
6. Reinicie el ST7200 si el fabricante o el firmware lo requieren para activar los nuevos ajustes del servidor.
7. Valide que el dispositivo reporte a Plaspy confirmando la llegada de datos en su cuenta Plaspy o observando los eventos esperados del dispositivo en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración del ST7200 dependen de la herramienta de SkyPatrol o de la interfaz de firmware. SkyPatrol ofrece métodos específicos del proveedor como una utilidad de configuración, interfaz web o herramientas de instalador; esos comandos y formatos de mensaje del proveedor no se incluyen aquí. Use el método de SkyPatrol para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, y elija UDP o TCP según sea necesario.

Si dispone de cadenas de comandos en bruto de SkyPatrol o de una guía de configuración del proveedor, inclúyalas en el orden que requiera la herramienta del proveedor y preserve los marcadores de posición como [apn] o [apnu] tal como aparecen. Cuando estén disponibles, presente esos comandos en bloques de código en su documentación local para mayor claridad.

## Notas de configuración

- Las revisiones de firmware y hardware del ST7200 pueden cambiar las opciones de configuración disponibles; verifique los comandos o las rutas de menú frente al firmware de su dispositivo.
- Elegir TCP o UDP puede afectar las características de entrega; configure el transporte que coincida con las instrucciones de SkyPatrol y las condiciones de su red.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo entrante, lo que simplifica la configuración en la plataforma.
- Verifique la disponibilidad de redes de 2da generación en su región si el dispositivo depende de estándares celulares antiguos.
- Consulte siempre la documentación y las herramientas de SkyPatrol para cualquier paso específico del dispositivo que no estén cubiertos por los ajustes compartidos de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el SkyPatrol ST7200 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar la telemetría de ubicación de activos de vehículos recreativos y monitorear el reporte de dispositivos en una sola plataforma. Dirigir el ST7200 al endpoint del servidor Plaspy permite una ingestión consistente de mensajes de ubicación y estado para que los equipos puedan usar Plaspy para visibilidad, recuperación y supervisión de flotas.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details, verify setup instructions and documentation at the SkyPatrol website https://www.skypatrol.com/ as those details can change over time.
