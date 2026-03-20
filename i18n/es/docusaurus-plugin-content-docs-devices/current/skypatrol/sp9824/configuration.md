---
slug: /skypatrol/sp9824/configuration
id: sp9824-configuration
sidebar_label: Configuration
title: SkyPatrol - SP9824 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del SkyPatrol SP9824 con Plaspy, incluye ajustes de servidor flujo de trabajo y validación
keywords:
  - Configuración SkyPatrol SP9824
  - Instalación SkyPatrol SP9824
  - SP9824 Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador de activos SP9824
  - Configuración GPS SkyPatrol
  - Configuración servidor SP9824
  - Compatibilidad dispositivo Plaspy
  - Configuración seguimiento de activos
  - Configuración rastreador cadena de frío
---

# SkyPatrol - SP9824: Configuración

Esta página documenta el contexto público de configuración para usar el SkyPatrol SP9824 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y el flujo de trabajo de puesta en marcha que Plaspy requiere, explica qué debe preparar antes de conectar el equipo y describe cómo el SP9824 normalmente reporta ubicación y telemetría de sensores en los tableros de Plaspy. Use esta guía como complemento práctico a la documentación del producto SP9824 al preparar dispositivos para la integración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre confirme los procedimientos específicos del dispositivo con la documentación oficial de SkyPatrol.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el SP9824 para que envíe de forma fiable su ubicación y la telemetría ambiental a Plaspy. Esto implica introducir los datos del servidor de Plaspy, elegir el transporte correcto si es necesario y validar que el rastreador aparece en la plataforma Plaspy. Dado que Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza la detección automática del protocolo, la configuración se centra en el punto de destino y la conectividad en lugar de asignar puertos distintos por dispositivo.

- Configure el SP9824 para que apunte al endpoint del servidor de Plaspy y permitir la ingestión de datos
- Seleccione UDP o TCP en el equipo si este obliga a elegir el transporte
- Guarde y aplique los ajustes para que el rastreador inicie el reporte saliente
- Valide la conectividad y la visibilidad en la plataforma Plaspy una vez que el dispositivo esté en línea
- Confirme que los eventos ambientales y de manipulación sean visibles en los tableros de Plaspy

## Ajustes del servidor Plaspy

Al configurar el SP9824 para su uso con Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Protocolos de transporte soportados UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto, así que configure el puerto 8888 para este rastreador también.

## Requisitos típicos antes de la configuración

- Asegúrese de que el SP9824 tenga batería suficiente y esté encendido para la configuración
- Disponga de acceso físico al dispositivo o acceso a la herramienta del proveedor usada para configurarlo
- Obtenga el método o software oficial de configuración de SkyPatrol proporcionado por el proveedor
- Confirme que el dispositivo tenga conectividad de red adecuada según su método de comunicación
- Tenga una cuenta o tenant de Plaspy lista para validar el reporte del dispositivo y asignar el registro en la plataforma

## Cómo se conecta este rastreador a Plaspy

El SP9824 envía fijaciones periódicas de ubicación y telemetría de sensores al endpoint del servidor de Plaspy para que la plataforma muestre posiciones en vivo, alarmas e informes históricos. La configuración dirige el equipo al endpoint y puerto compartidos de Plaspy para que los mensajes entrantes se encaminen a la plataforma y se puedan parsear.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy
- Las actualizaciones de ubicación y la telemetría ambiental como temperatura y luz se reenvían a Plaspy
- La detección de manipulación y los eventos de alarma se envían a Plaspy para alertas inmediatas y registro
- Plaspy recibe los mensajes del dispositivo y detecta automáticamente el protocolo para un parseo correcto
- La visibilidad y los informes históricos estarán disponibles una vez que Plaspy reciba los datos del dispositivo

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de SkyPatrol o al software recomendado por el proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888. Recuerde que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Si el dispositivo requiere elegir un transporte, seleccione UDP o TCP según corresponda a su despliegue.
5. Aplique o guarde los cambios de configuración en la herramienta del proveedor o en la interfaz del dispositivo.
6. Reinicie el equipo si las instrucciones del proveedor requieren un reboot para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy y que la ubicación y la telemetría de sensores aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los comandos y el método exacto de configuración varían según el firmware de SkyPatrol y las herramientas del proveedor. Algunos proveedores ofrecen una utilidad de configuración de escritorio o web, mientras que otros pueden usar SMS o una interfaz de aprovisionamiento. Dado que los comandos específicos del modelo los proporciona el proveedor y pueden cambiar con el firmware, consulte la documentación de SkyPatrol o la utilidad de configuración del proveedor para la sintaxis exacta de los comandos y ejemplos paso a paso.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los menús de configuración y la sintaxis de comandos; verifique la documentación de SkyPatrol para la revisión de su dispositivo.
- Elija UDP o TCP según la interfaz del dispositivo y el entorno de red; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que no es necesario asignar puertos por dispositivo en la plataforma.
- Confirme que la telemetría ambiental y los eventos de manipulación estén habilitados en el equipo si necesita esos valores en Plaspy.
- Si su herramienta del proveedor usa marcadores de posición para APN o ajustes de conectividad, mantenga los marcadores y reemplace con los valores de su operador según lo requiera el proveedor.

## Por qué usar Plaspy con esta configuración

Usar el SP9824 con Plaspy permite un seguimiento de activos de bajo mantenimiento con telemetría ambiental y alertas por manipulación. La larga duración de batería y el diseño robusto del SP9824 lo hacen ideal para despliegues a largo plazo donde el mantenimiento frecuente es poco práctico. Al configurarlo para reportar al endpoint compartido de Plaspy, las organizaciones obtienen visibilidad en vivo, reportes históricos de ubicación y alertas basadas en eventos relacionados con temperatura, luz y manipulación.

To learn more about Plaspy and its capabilities visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and configuration tools consult the official SkyPatrol documentation at https://www.skypatrol.com/ as manufacturer specifications and setup methods can change over time.
