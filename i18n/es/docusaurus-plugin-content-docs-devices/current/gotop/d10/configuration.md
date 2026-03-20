---
slug: /gotop/d10/configuration
id: d10-configuration
sidebar_label: Configuration
title: GOTOP - D10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el GOTOP D10 y conectarlo a Plaspy, con parámetros de servidor, transporte y pasos prácticos
keywords:
  - Configuración GOTOP D10
  - Instalación GOTOP D10
  - GOTOP D10 Plaspy
  - Configuración servidor GOTOP D10
  - Configuración rastreador GPS D10
  - Configuración software de seguimiento GOTOP D10
  - Configuración plataforma GPS GOTOP D10
  - Rastreador GOTOP Plaspy
  - Guía instalación GOTOP D10
  - Configuración rastreador vehicular D10
---

# GOTOP - D10 Configuración

Esta página presenta el contexto público de configuración para utilizar el rastreador GOTOP D10 con Plaspy. Reúne los ajustes prácticos y la orientación orientada a la plataforma necesarios para apuntar un D10 hacia Plaspy, de modo que el dispositivo pueda enviar ubicación, alarmas y telemetría básica a la plataforma.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use esta página para los ajustes enfocados en Plaspy y consulte la documentación de GOTOP para procedimientos y herramientas específicas del dispositivo.

## Resumen de configuración

Configurar el D10 para Plaspy garantiza que el rastreador pueda alcanzar el endpoint de ingestión de Plaspy y ser visible en su cuenta. El objetivo es proporcionar al dispositivo el endpoint de servidor correcto, el tipo de transporte y los prerrequisitos de red necesarios para que los paquetes de ubicación y eventos lleguen de forma fiable.

- Configure el dispositivo para reportar a Plaspy usando el endpoint y puerto compartidos para que Plaspy reciba y normalice la telemetría.
- Verifique la conectividad celular y la configuración APN en el D10 para permitir la entrega de paquetes de datos a Plaspy.
- Seleccione el tipo de transporte compatible con el dispositivo y apunte al servidor de Plaspy para que la detección automática del protocolo pueda mapear los paquetes entrantes.
- Valide los informes comprobando que los mensajes de ubicación, alarma y estado de energía aparezcan en Plaspy.
- Guarde y aplique los cambios de configuración y, si el firmware lo exige, reinicie el dispositivo para comenzar el reporte.

## Valores del servidor Plaspy

Use los siguientes valores de servidor de Plaspy al configurar el D10. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP son compatibles; elija el que requiera el firmware de su dispositivo
- Nota: Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo envíe datos al endpoint del servidor

## Requisitos típicos antes de comenzar

- Confirme que el D10 esté encendido y accesible para su configuración o conexión directa temporal.
- Inserte una tarjeta Micro SIM funcional con servicio de datos activo y la configuración APN correcta para la red móvil local.
- Tenga a mano el IMEI del dispositivo y cualquier herramienta de configuración del proveedor, lista de comandos SMS o software USB/serial provisto por el vendedor.
- Asegúrese de contar con una cuenta de Plaspy o acceso de administrador para verificar que el rastreador aparezca y envíe telemetría.
- Revise el manual de usuario de GOTOP o la interfaz del proveedor para conocer el método exacto de configuración compatible con el firmware de su D10.
- Si la instalación es discreta, planifique un método seguro para reiniciar el dispositivo o aplicar ajustes sin interrumpir su operación.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el D10 envía su ubicación, alarmas y reportes de estado al endpoint de Plaspy para que los operadores puedan monitorear los dispositivos de forma centralizada. Apunte el D10 al servidor y puerto de Plaspy, y Plaspy detectará el protocolo y procesará los paquetes entrantes en eventos de dispositivo e historial de ubicación.

- El D10 transmite posiciones y datos de posicionamiento híbrido a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Alarmas como vibración, geocerca, estado de encendido y eventos de energía se reenvían a Plaspy para disparar alertas y flujos de trabajo.
- Mensajes de batería y fallos de alimentación permiten a Plaspy mostrar indicadores de salud del dispositivo y activar notificaciones de mantenimiento.
- Plaspy normaliza los paquetes entrantes y detecta automáticamente el protocolo del dispositivo, por lo que se requiere un mapeo manual mínimo en la plataforma.
- Cuando corresponda, funciones opcionales como SOS o eventos de inmovilizador se reportan para que Plaspy los incluya en las alertas a los operadores.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración GOTOP para el D10 según lo descrito en la documentación del fabricante.
2. En los ajustes de servidor del dispositivo, ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como endpoint principal de reporte.
3. Configure el puerto del dispositivo en 8888 para que coincida con el puerto de ingestión de Plaspy utilizado por todos los dispositivos compatibles.
4. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP según la opción del firmware del D10.
5. Aplique o guarde la configuración en la interfaz del dispositivo o mediante la herramienta del proveedor.
6. Reinicie el D10 si el firmware exige un reinicio para que los ajustes de red entren en vigencia.
7. Valide que el dispositivo reporte a Plaspy confirmando la llegada de telemetría y actualizaciones de ubicación en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El D10 puede configurarse usando las herramientas del fabricante, comandos SMS o software de configuración según el firmware y la distribución del proveedor. Los comandos exactos y la sintaxis varían según la versión de firmware y la herramienta del proveedor que utilice, por lo que debe consultar la documentación de GOTOP para los formatos de comandos precisos.

Si su dispositivo utiliza comandos SMS de configuración proporcionados por GOTOP, siga la lista de comandos del fabricante y sustituya el dominio o IP del servidor y el puerto por los valores indicados en el Flujo de trabajo común de configuración. Plaspy aceptará datos en d.plaspy.com o 54.85.159.138 usando el puerto 8888 y detectará el protocolo automáticamente.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los campos de configuración exactos, la sintaxis de comandos y los transportes disponibles; siempre verifique las notas de la versión del firmware del D10.
- El D10 soporta configuración de IP de servidor dual en muchas variantes de firmware; puede configurar un backend secundario para redundancia mientras usa Plaspy como endpoint primario.
- Elija UDP o TCP en función del soporte del firmware del dispositivo y las condiciones de red; UDP es común por su baja sobrecarga y TCP puede usarse cuando se necesita entrega garantizada y está soportado.
- Verifique que el APN y el servicio de datos de la SIM funcionen antes de validar el reporte al endpoint de Plaspy.
- Mantenga a mano el manual de GOTOP y el registro de cambios del firmware, ya que los pasos de configuración y los comandos disponibles del fabricante pueden actualizarse.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP D10 con Plaspy ofrece visibilidad centralizada de la ubicación en tiempo real, alarmas y estado de los dispositivos para vehículos pequeños y activos portátiles. Las capacidades de posicionamiento híbrido y las funciones de alarma del D10 proporcionan los datos de eventos que Plaspy necesita para alimentar paneles, activar alertas y respaldar flujos operativos en flotas mixtas.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods firmware behavior and manufacturer details please verify current information on the GOTOP website https://www.gotop.cc/
