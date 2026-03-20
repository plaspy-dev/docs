---
slug: /skypatrol/sp9600/configuration
id: sp9600-configuration
sidebar_label: Configuration
title: SkyPatrol - SP9600 Configuration
sidebar_class_name: menu_item_tracker
description: Configure su SkyPatrol SP9600 para usar con Plaspy, con ajustes de servidor, pasos y guía de configuración
keywords:
  - Configuración SkyPatrol SP9600
  - Instalación SkyPatrol SP9600
  - Integración SP9600 Plaspy
  - Configuración servidor SP9600
  - Configuración seguimiento SP9600
  - Configuración GPS SkyPatrol
  - Configuración plataforma SP9600
  - Configuración rastreador de activos SkyPatrol
  - Software de seguimiento SP9600
  - Configuración rastreador GPS SkyPatrol
---

# SkyPatrol - SP9600 Configuración

Esta página describe el contexto público de configuración para usar la serie SkyPatrol SP9600 con la plataforma Plaspy. Incluye los ajustes del servidor compartidos que deberá introducir en el dispositivo o en la herramienta de configuración del fabricante, pasos prácticos de instalación y orientación para verificar que el rastreador reporte correctamente a Plaspy y sus activos se muestren.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto funcionan para varios tipos de rastreadores. Los pasos exactos en el lado del fabricante para el SP9600 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración suministrada, por lo que considere estas instrucciones como orientación práctica y consulte la documentación de SkyPatrol para comandos o herramientas específicas del dispositivo.

## Resumen de la configuración

Este proceso prepara el SP9600 para enviar sus mensajes de ubicación y estado al endpoint de Plaspy para que los activos aparezcan en su cuenta. El objetivo es establecer los valores del servidor en el rastreador, seleccionar el transporte adecuado si es necesario, guardar la configuración y confirmar que el dispositivo es visible en Plaspy.

- Introduzca el endpoint y puerto de Plaspy en el SP9600 usando el método de configuración de SkyPatrol.
- Seleccione la opción de transporte (UDP o TCP) si el dispositivo requiere elegir transporte.
- Guarde y aplique la configuración en el dispositivo o mediante la herramienta del fabricante.
- Reinicie el dispositivo si es necesario y verifique que el SP9600 esté reportando a Plaspy.
- Confirme la visibilidad del activo y la cadencia de reporte esperada en Plaspy después de recibir los primeros mensajes.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el SP9600:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que puede usar el endpoint y puerto compartidos para dispositivos compatibles

## Requisitos típicos antes de la configuración

- El SP9600 debe estar alimentado y con su batería o fuente recargable instalada y lista.
- Acceso al método oficial de configuración de SkyPatrol o al software suministrado para el SP9600 (aplicación del fabricante, herramienta web o utilidad de configuración).
- Conectividad de red para el dispositivo según la forma en que envía mensajes (confirme que el dispositivo tenga la conectividad requerida por el fabricante).
- Identificador del dispositivo o detalles de registro necesarios en su cuenta Plaspy para identificar la unidad una vez que comience a reportar.
- Acceso a su cuenta Plaspy para validar mensajes entrantes y confirmar la visibilidad del dispositivo tras la configuración.
- Información de firmware reciente o notas de la versión de SkyPatrol para asegurar que no haya cambios específicos del dispositivo que afecten los ajustes del servidor.

## Cómo se conecta este rastreador a Plaspy

El SP9600 se configura para enviar sus mensajes de posición y estado al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar y monitorear los activos. La detección automática de protocolo de Plaspy simplifica la configuración del lado servidor porque se usa el mismo puerto para todos los dispositivos compatibles.

- El rastreador envía mensajes de ubicación y estado a d.plaspy.com (o directamente a 54.85.159.138) en el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP en el puerto 8888 según las opciones disponibles en el SP9600.
- Plaspy detecta el protocolo del rastreador automáticamente, lo que reduce la necesidad de emparejar un protocolo manualmente en el servidor.
- Tras el envío de los primeros mensajes por parte del dispositivo, Plaspy los procesa y muestra el equipo en la plataforma para su monitoreo operativo.
- La cadencia regular de reportes y el comportamiento de los mensajes dependen de los ajustes y el firmware del SP9600.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del SkyPatrol SP9600 o al software proporcionado por el fabricante.
2. Introduzca la dirección del servidor como el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos compatibles.
4. Seleccione UDP o TCP si el dispositivo requiere elegir un protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante o en el propio dispositivo.
6. Reinicie el SP9600 si las instrucciones del fabricante indican un reinicio para aplicar los ajustes.
7. Valide que el dispositivo reporta a Plaspy revisando su cuenta Plaspy para mensajes entrantes y la visibilidad del dispositivo.

## Ejemplo de comandos de configuración

Los comandos específicos de configuración del modelo SP9600 no se publican aquí. Los comandos exactos y el método para enviarlos dependen de la herramienta de configuración de SkyPatrol, del firmware y del flujo de trabajo del instalador. Utilice la interfaz oficial de SkyPatrol o la documentación del fabricante para obtener el formato y el orden precisos de los comandos cuando se requiera una configuración por línea de comandos o estilo SMS.

## Notas de configuración

- Las diferencias de firmware pueden modificar las opciones de configuración disponibles o el formato de los comandos; siempre confirme la revisión de firmware antes de aplicar instrucciones.
- Las opciones de batería en el SP9600 (reemplazable o recargable) afectan la planificación del despliegue y la cadencia de reportes, pero no cambian los ajustes del servidor Plaspy.
- Cuando un dispositivo permite tanto UDP como TCP, elija el transporte requerido por su sitio o la preferencia del instalador; Plaspy aceptará cualquiera en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.
- Consulte la documentación de SkyPatrol para herramientas, comandos y cualquier ajuste opcional necesario para funciones avanzadas.

## Por qué usar Plaspy con esta configuración

Configurar el SkyPatrol SP9600 para que reporte a Plaspy ofrece a las organizaciones visibilidad centralizada de activos móviles, monitoreo de eventos simplificado y un manejo uniforme entre distintos modelos de rastreadores, ya que Plaspy usa un endpoint y puerto compartidos y detecta automáticamente los protocolos de los rastreadores.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the current information at the SkyPatrol website https://www.skypatrol.com/
