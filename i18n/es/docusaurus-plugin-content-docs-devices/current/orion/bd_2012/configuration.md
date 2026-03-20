---
slug: /orion/bd_2012/configuration
id: bd_2012-configuration
sidebar_label: Configuration
title: Orion - BD-2012 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Orion BD-2012 a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Orion BD 2012
  - Configuración BD 2012 Orion
  - Configuración rastreador GPS Orion
  - Configuración Plaspy BD 2012
  - Configuración rastreador Plaspy
  - Configuración dispositivo Orion
  - Configuración seguimiento de vehículos
  - Configuración rastreador de activos
  - Configuración plataforma GPS
  - Manual Orion BD2012
---

# Orion - BD-2012: Configuración

Esta página describe la configuración pública necesaria para usar el rastreador GPS Orion BD-2012 con Plaspy. Se concentra en los valores prácticos y públicos y en el flujo de trabajo que permiten apuntar el dispositivo a Plaspy para que envíe datos de ubicación y eventos a la plataforma. Utilice esta guía junto con la documentación oficial de Orion para detalles específicos del dispositivo y comportamientos del firmware.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Las instrucciones a continuación se centran en el endpoint y el puerto de Plaspy que son comunes a todos los dispositivos y describen los pasos habituales para configurar el BD-2012.

## Resumen de configuración

Preparar el BD-2012 para integrarse con Plaspy consiste principalmente en configurar el rastreador para que envíe su ubicación y estado al endpoint del servidor Plaspy y en validar que los reportes llegan correctamente. El objetivo es obtener visibilidad en tiempo real fiable en Plaspy y garantizar el envío exitoso de eventos desde el dispositivo.

- Configure el rastreador para que informe al dominio o IP del servidor Plaspy y use el puerto de Plaspy
- Elija el modo de transporte que soporte el dispositivo, UDP o TCP, y guarde esa selección
- Aplique y persista los ajustes en el firmware del dispositivo o en el software del proveedor para que los reportes se envíen automáticamente
- Valide la conectividad y que las actualizaciones de ubicación aparezcan en Plaspy
- Confirme cualquier ajuste de firmware o regional en el BD-2012 que afecte la red o los intervalos de reporte

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el BD-2012. Estos valores son públicos y Plaspy los utiliza para recibir los reportes de los dispositivos.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP o TCP puede seleccionarse en el dispositivo según sea necesario
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos previos a la configuración

- Acceso al BD-2012 y al método oficial de configuración, como el software del fabricante, la interfaz web o comandos SMS si Orion los proporciona
- Alimentación estable del dispositivo durante la configuración y las pruebas
- Versión de firmware actual o notas sobre el firmware si el fabricante las proporciona
- Conectividad de red necesaria para que el dispositivo alcance d.plaspy.com o 54.85.159.138 en el puerto 8888
- Credenciales o permisos para cambiar la configuración del dispositivo mediante la herramienta de configuración indicada
- Una cuenta de Plaspy o detalles de aprovisionamiento del dispositivo preparados para asociar el rastreador con su entorno Plaspy

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el BD-2012 enviará mensajes de ubicación y eventos al endpoint compartido de Plaspy en el puerto designado para que la plataforma pueda mostrar y registrar la actividad del dispositivo. El backend de Plaspy aceptará los datos del rastreador y los asignará al registro de dispositivo correspondiente.

- El rastreador se configura para enviar reportes a d.plaspy.com o 54.85.159.138
- Todos los reportes de dispositivos se envían al puerto 8888 en el servidor Plaspy
- Seleccione UDP o TCP en el rastreador si el firmware requiere elegir un protocolo de transporte
- Plaspy detectará automáticamente el protocolo del rastreador y analizará los mensajes entrantes
- Los reportes exitosos se traducen en actualizaciones de ubicación visibles y registros de eventos dentro de Plaspy

## Flujo de configuración habitual

Siga estos pasos prácticos al preparar un Orion BD-2012 para su uso con Plaspy. Los nombres exactos de menús y comandos varían según la herramienta del fabricante y el firmware.

1. Acceda al método de configuración oficial de Orion o al software suministrado con el BD-2012
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor del dispositivo
3. Ajuste el puerto del dispositivo a 8888; todos los dispositivos en Plaspy usan el mismo puerto
4. Si el dispositivo requiere elegir el transporte, seleccione UDP o TCP según la preferencia del instalador o la capacidad del dispositivo
5. Aplique o guarde la configuración en el software del dispositivo o mediante la interfaz de comandos del mismo
6. Reinicie el BD-2012 si las instrucciones del fabricante requieren un reinicio para que los cambios surtan efecto
7. Valide que el dispositivo reporte a Plaspy comprobando las actualizaciones de ubicación y los mensajes de evento en la plataforma Plaspy

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta para configurar el BD-2012 dependen de la herramienta de configuración de Orion, del conjunto de comandos SMS o de la interfaz del firmware. Las herramientas del fabricante a veces ofrecen campos en GUI o comandos SMS/serie para establecer servidor, IP, puerto y transporte. Dado que aquí no se incluyen formatos de comandos específicos, consulte la guía del usuario de Orion BD-2012 para encontrar los comandos apropiados.

Al usar las herramientas de Orion, ingrese los valores del servidor Plaspy exactamente como se muestran:
- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Consulte el manual de Orion para la sintaxis correcta de comandos o los campos de la GUI para aplicar estos valores. Si su dispositivo admite configuración vía SMS y el fabricante publica comandos SMS, use los mismos valores de servidor en esos mensajes.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la disposición de los menús y la sintaxis exacta de los comandos para el BD-2012; siempre confirme con la documentación de Orion
- Elija UDP o TCP según la preferencia del instalador y el soporte del dispositivo; Plaspy aceptará reportes enviados por cualquiera de los dos transportes
- Como Plaspy detecta automáticamente el protocolo del rastreador, generalmente basta con apuntar el dispositivo al servidor y puerto de Plaspy para que se negocie el protocolo
- Pruebe después de la configuración para confirmar que las actualizaciones de ubicación y los eventos aparecen en Plaspy y solucione cualquier restricción de red u operador si los reportes no llegan
- Mantenga un registro de los identificadores del dispositivo y del registro asociado en Plaspy para simplificar la resolución de problemas y el soporte

## Por qué usar Plaspy con esta configuración

Usar el Orion BD-2012 con Plaspy ofrece un camino directo para recibir datos de ubicación y eventos en tiempo real en una plataforma única. Para organizaciones que necesitan visibilidad de activos, monitoreo de flotas o alertas desde dispositivos como el BD-2012, configurar el rastreador para que informe a Plaspy centraliza el seguimiento y simplifica la supervisión operativa.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and command references verify information on the official manufacturer site http://www.oriontech.com.tw/ since manufacturer setup methods and firmware behavior can change over time.
