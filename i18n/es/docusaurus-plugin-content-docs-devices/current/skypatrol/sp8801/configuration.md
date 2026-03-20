---
slug: /skypatrol/sp8801/configuration
id: sp8801-configuration
sidebar_label: Configuration
title: SkyPatrol - SP8801 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SkyPatrol SP8801 con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - Configuración SkyPatrol SP8801
  - Configuración SP8801 Plaspy
  - Configuración rastreador SkyPatrol
  - Ajustes servidor Plaspy
  - Configuración rastreador GPS SP8801
  - Configuración rastreador personal
  - Compatibilidad rastreador GPS Plaspy
  - Configuración servidor dispositivo de rastreo
  - Guía SkyPatrol SP8801
  - Configuración plataforma de rastreo
---

# SkyPatrol - Configuración del SP8801

Esta página explica el contexto público de configuración para usar el SkyPatrol SP8801 con la plataforma de rastreo Plaspy. Resume los ajustes de servidor compartidos que requiere Plaspy y detalla los pasos prácticos, desde el lado del fabricante, que normalmente deberá realizar para apuntar un SP8801 al servicio de Plaspy y que el dispositivo pueda reportar ubicación y alertas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use esta guía junto con la documentación oficial de SkyPatrol cuando sea necesario.

## Resumen de la configuración

El objetivo al configurar un SP8801 para Plaspy es garantizar que el rastreador envíe de forma confiable sus datos de ubicación y eventos al endpoint de Plaspy, de modo que el dispositivo aparezca en su cuenta y los reportes funcionen correctamente. Esto implica establecer el destino del servidor, seleccionar el transporte si es necesario, guardar la configuración y confirmar que el dispositivo reporta en la plataforma.

- Configure el dispositivo con los datos del servidor Plaspy para que el tráfico saliente llegue a la plataforma.
- Seleccione UDP o TCP en el dispositivo si la interfaz de configuración lo requiere.
- Establezca el dominio o la IP del servidor Plaspy y el puerto compartido utilizado por Plaspy.
- Guarde y aplique la configuración en el SP8801 y reinicie el dispositivo si la herramienta del fabricante lo solicita.
- Verifique que el rastreador sea visible en Plaspy y que las actualizaciones de ubicación y las alertas se reciban correctamente.

## Ajustes de servidor de Plaspy

- Dominio del servidor: d.plaspy.com  
- IP del servidor: 54.85.159.138  
- Puerto: 8888 — tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto  
- Soporte de transporte: configure UDP o TCP en el dispositivo si la interfaz lo requiere  
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al servidor

## Requisitos típicos antes de la configuración

- Un SP8801 con batería cargada y encendido, con acceso a la interfaz o app de configuración del fabricante.
- Acceso al método de configuración oficial de SkyPatrol adecuado para su dispositivo y firmware.
- Conocimiento de los ajustes necesarios de Plaspy: d.plaspy.com o 54.85.159.138 y puerto 8888.
- Conectividad de red desde el dispositivo que permita conexiones salientes hacia el endpoint de Plaspy.
- Credenciales o acceso a la herramienta o portal del proveedor que se use para cambiar la configuración del dispositivo.
- Una cuenta Plaspy o un administrador disponible para confirmar el registro y la visibilidad del dispositivo, si es necesario.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el SP8801 enviará sus paquetes de reporte al endpoint y puerto del servidor Plaspy para que la plataforma pueda procesar y mostrar la ubicación, el movimiento y las alertas del dispositivo. Plaspy recibe los datos y mapea automáticamente el protocolo entrante para ofrecer visibilidad en la plataforma.

- El SP8801 se apunta a d.plaspy.com o a 54.85.159.138 como servidor destino.
- El dispositivo se configura para enviar datos al puerto 8888, el puerto compartido que Plaspy utiliza para todos los dispositivos compatibles.
- El rastreador puede usar transporte UDP o TCP según lo permita la interfaz de configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al servidor.
- Una vez que el reporte inicia, Plaspy procesará las actualizaciones entrantes para su visualización y gestión de eventos en la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de SkyPatrol o al software correspondiente para el SP8801 según las instrucciones del fabricante.
2. En los ajustes de servidor o red del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los rastreadores compatibles.
4. Si el equipo requiere selección de transporte, elija UDP o TCP según corresponda a su instalación.
5. Aplique o guarde los cambios de configuración mediante la herramienta o interfaz de SkyPatrol.
6. Reinicie el rastreador si la documentación del fabricante indica que es necesario para aplicar los ajustes.
7. Valide que el SP8801 esté reportando a Plaspy confirmando que el dispositivo aparece y se actualiza en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El fabricante del SP8801 puede ofrecer múltiples métodos de configuración, como una app, un portal web o una herramienta por serie/USB. La sintaxis exacta de los comandos y las herramientas varían según el firmware y el software del proveedor, por lo que siga las instrucciones de SkyPatrol para su dispositivo. En general, asegúrese de ingresar los siguientes valores donde la herramienta de configuración lo solicite:

- Dominio o IP del servidor:
  - d.plaspy.com
  - 54.85.159.138
- Puerto:
  - 8888
- Transporte:
  - UDP o TCP según la opción disponible en el dispositivo

Si la herramienta de SkyPatrol usa cadenas de comandos o comandos tipo SMS, siga la documentación del proveedor y sustituya el dominio o IP del servidor y el puerto indicados arriba. Dado que los fabricantes usan distintas sintaxis, consulte siempre las instrucciones oficiales de SkyPatrol para el formato exacto de comandos según su firmware.

## Notas sobre la configuración

- Las revisiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis de comandos y las opciones disponibles; confirme siempre con la documentación de SkyPatrol para la versión de su dispositivo.
- La elección entre UDP o TCP puede afectar el comportamiento de entrega; seleccione el transporte requerido por su red local o el recomendado por el fabricante.
- Todos los dispositivos en Plaspy usan el mismo número de puerto 8888, por lo que no necesita variar puertos por dispositivo para la compatibilidad con Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al servidor, lo que reduce la necesidad de especificar manualmente la identificación del protocolo.
- Si usa una app o portal del proveedor, registre los pasos de configuración que empleó para que los instaladores puedan reproducir la configuración en varias unidades.

## Por qué usar Plaspy con esta configuración

Usar el SkyPatrol SP8801 con Plaspy le permite centralizar de forma sencilla las actualizaciones de ubicación y las alertas de rastreadores personales en una sola plataforma para monitoreo y supervisión operativa. Esta configuración garantiza que los dispositivos reporten a un endpoint Plaspy consistente, de modo que la visibilidad de la ubicación, las alertas de geocercas y el reporte de eventos estén disponibles para sus equipos.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Because manufacturer specifications and setup methods can change, verify the latest SkyPatrol SP8801 configuration details and firmware behavior on the official SkyPatrol site https://www.skypatrol.com/ before proceeding with large scale deployments.
