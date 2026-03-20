---
slug: /supermate/k20/configuration
id: k20-configuration
sidebar_label: Configuration
title: Supermate - K20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Supermate K20 con ajustes de servidor Plaspy y pasos prácticos de instalación
keywords:
  - Configuración Supermate K20
  - Configuración K20
  - Ajustes servidor Supermate K20
  - Configuración seguimiento Supermate K20
  - Configuración plataforma GPS K20
  - Configuración rastreador Plaspy
  - Ajustes servidor Plaspy
  - Guía integración K20
  - Guía configuración rastreador GPS
  - Configuración seguimiento vehicular
---

# Supermate - Configuración K20

Esta página describe el contexto público de configuración para usar el rastreador GPS Supermate K20 con Plaspy. Resume los ajustes de servidor prácticos y el flujo de trabajo que deberá seguir para apuntar un K20 hacia la plataforma Plaspy, de modo que el dispositivo reporte ubicación y eventos para su monitoreo en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la orientación a continuación para preparar el K20 para Plaspy y verificar su comportamiento, y consulte la documentación oficial de Supermate para instrucciones específicas del dispositivo.

## Resumen de la configuración

El objetivo de este proceso es dejar el K20 listo para comunicarse de forma fiable con Plaspy y que aparezca como un dispositivo activo en su cuenta. Esto incluye configurar el endpoint del servidor Plaspy, confirmar el tipo de transporte según lo requiera el equipo y validar que el rastreador envíe mensajes regulares de posición y eventos.

- Apuntar el K20 al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma.
- Seleccionar el método de transporte apropiado (UDP o TCP) en el K20 si la interfaz del dispositivo lo requiere.
- Establecer y guardar el puerto usado por Plaspy para que los mensajes se enruten correctamente a la plataforma.
- Validar la conectividad y el reporte para que el dispositivo sea visible y utilizable en Plaspy.
- Confirmar que eventos del dispositivo como SOS o alertas de geovalla se entreguen a Plaspy si se utilizan.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port 8888

Use estos valores al configurar los ajustes de servidor o host del K20. Plaspy acepta conexiones de rastreadores tanto por UDP como por TCP en el mismo servidor y puerto, y determinará automáticamente el protocolo correcto.

## Requisitos previos típicos

- Una unidad Supermate K20 alimentada y funcional, con batería cargada o conectada.
- Acceso al método o software oficial de configuración de Supermate para el K20.
- Una conexión celular válida y cualquier ajuste de red requerido por el proveedor o instalador.
- La posibilidad de guardar y aplicar los ajustes en el rastreador y, opcionalmente, reiniciar el dispositivo después de la configuración.
- Acceso a una cuenta de Plaspy o a la interfaz administrativa para confirmar y ver el reporte del dispositivo una vez configurado.

## Cómo se conecta este rastreador a Plaspy

El K20 se configura para enviar sus datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de manera que Plaspy pueda mostrar seguimiento en tiempo real, eventos y estado de sus activos.

- El rastreador reporta actualizaciones de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta cualquiera de los dos.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes.
- El envío de eventos como SOS o alertas de geovalla se dirigirá al mismo endpoint de Plaspy cuando estén configurados.
- Una vez que los mensajes llegan a Plaspy, el dispositivo será visible en la plataforma para monitoreo e informes.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración de Supermate para el K20 (herramienta del fabricante, interfaz web o utilidad del proveedor).
2. Ingrese el servidor Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 en los ajustes de host del dispositivo.
3. Configure el puerto de destino en 8888 como puerto del servidor del rastreador.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que los ajustes se hayan escrito en el rastreador.
6. Reinicie el dispositivo si las instrucciones del fabricante indican un reinicio para activar los nuevos ajustes.
7. Valide que el K20 reporte a Plaspy verificando la visibilidad del dispositivo y los datos entrantes en su cuenta o consola de Plaspy.

## Ejemplos de comandos de configuración

Los comandos y métodos exactos de configuración varían según la herramienta del fabricante y el firmware. Los dispositivos Supermate pueden configurarse mediante software propietario de configuración, por un método OTA suministrado por el proveedor o mediante un menú del propio dispositivo. Dado que los métodos difieren entre versiones de firmware y herramientas, siga la documentación del Supermate K20 o las instrucciones del proveedor para la sintaxis específica de los comandos o la utilidad para cambiar servidor, puerto y transporte.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden modificar los ajustes disponibles y el flujo de configuración exacto; verifique la versión de firmware del K20 antes de aplicar instrucciones.
- Algunas herramientas de configuración presentan el servidor como un campo de nombre de dominio mientras que otras aceptan una dirección IP; Plaspy soporta d.plaspy.com o 54.85.159.138.
- Si el dispositivo requiere elegir entre UDP y TCP, seleccione el transporte indicado por su instalación; Plaspy aceptará cualquiera en el puerto 8888 y detectará automáticamente el protocolo.
- Las prácticas de instalación y las versiones regionales del dispositivo pueden variar; confirme el método de configuración correcto con el proveedor o instalador.
- Mantenga un registro de los ajustes previos antes de realizar cambios para poder revertirlos si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el Supermate K20 con Plaspy ofrece una forma directa de centralizar el seguimiento en tiempo real y el monitoreo de eventos para activos y vehículos. Configurar el K20 para que envíe datos a Plaspy brinda a las organizaciones visibilidad continua, alertas y supervisión operativa sin necesidad de endpoints específicos por cada rastreador.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific setup instructions, firmware behavior, and manufacturer details for the Supermate K20, please verify information at the official Supermate site http://www.gps-summit.com/ as methods and options can change over time.
