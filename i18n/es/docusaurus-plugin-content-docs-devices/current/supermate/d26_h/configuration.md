---
slug: /supermate/d26_h/configuration
id: d26_h-configuration
sidebar_label: Configuration
title: Supermate - D26-H Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Supermate D26 H para Plaspy con ajustes de servidor y guía práctica paso a paso
keywords:
  - Configuración Supermate D26-H
  - Instalación Supermate D26-H
  - Supermate D26-H Plaspy
  - Configuración rastreador GPS Supermate
  - Ajustes de servidor D26-H
  - Guía de configuración D26-H
  - Configuración de rastreador Plaspy
  - Rastreo de vehículos D26-H
  - Rastreo de activos D26-H
  - Configuración rastreador Supermate
---

# Supermate - Configuración D26-H

Esta página documenta el contexto público de configuración para usar el rastreador Supermate D26-H con Plaspy. Aquí se explica el endpoint compartido de Plaspy, las opciones de puerto y transporte que soporta la plataforma, y los pasos prácticos que debe seguir para dejar el D26-H preparado y enviando reportes fiables. La información se centra en los ajustes públicos que Plaspy requiere y en cómo aplicarlos utilizando los métodos oficiales del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como referencia práctica y confirme cualquier comportamiento específico del equipo con la documentación oficial de Supermate.

## Resumen de la configuración

El objetivo de este proceso es preparar el Supermate D26-H para que se comunique de forma fiable con la plataforma Plaspy, de modo que la ubicación y los eventos del dispositivo aparezcan en su cuenta. Configure el endpoint de red y el transporte en el equipo, guarde los cambios y valide que el dispositivo se conecte correctamente a Plaspy.

- Ingrese el endpoint del servidor de Plaspy para que el D26-H envíe sus paquetes al sistema.
- Configure el puerto y la opción de transporte para que los paquetes lleguen al puerto de escucha de Plaspy.
- Guarde o aplique la configuración del fabricante y reinicie el dispositivo cuando sea necesario para activar los ajustes.
- Verifique la conectividad y la visibilidad del dispositivo en Plaspy confirmando que el equipo reporte con éxito.
- Tenga a mano notas sobre firmware y revisiones del fabricante para solucionar diferencias en el comportamiento.

## Ajustes públicos del servidor Plaspy

Configure el Supermate D26-H para reportar al servidor de Plaspy usando estos ajustes públicos:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, el puerto 8888, y Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Un dispositivo Supermate D26-H alimentado y accesible, con acceso al método de configuración del fabricante.
- Acceso a la herramienta oficial de configuración Supermate o a las instrucciones proporcionadas por el vendedor.
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para confirmar que el dispositivo aparece en línea después de la configuración.
- Información identificadora del dispositivo, como el IMEI o el ID del equipo, para registrar o localizar el rastreador en Plaspy.
- Una ruta de red estable desde el dispositivo hasta el endpoint del servidor Plaspy para que los paquetes salientes lleguen a d.plaspy.com o a 54.85.159.138.
- Permisos administrativos básicos para aplicar cambios de configuración y reiniciar el dispositivo cuando sea necesario.

## Cómo se conecta este rastreador a Plaspy

Cuando esté configurado, el Supermate D26-H envía paquetes de ubicación y estado al endpoint y puerto del servidor Plaspy. Plaspy recibe esos paquetes, detecta automáticamente el protocolo y asigna el dispositivo a su cuenta para que el seguimiento en tiempo real y las alertas estén disponibles en la plataforma.

- El rastreador queda configurado para reportar al endpoint compartido de Plaspy en d.plaspy.com o a la IP equivalente 54.85.159.138.
- Los paquetes se envían a Plaspy en el puerto 8888.
- Seleccione UDP o TCP como transporte si el equipo requiere una elección explícita.
- Plaspy detecta automáticamente el protocolo del rastreador e interpreta los mensajes entrantes para su visualización y procesamiento.
- Una vez en reporte, el dispositivo proporciona visibilidad y actualizaciones de eventos dentro de la plataforma Plaspy.

## Flujo común de configuración

1. Acceda al método u software oficial de configuración Supermate provisto por el fabricante.
2. Busque la sección de reporting o ajustes de servidor para la configuración remota.
3. Introduzca la dirección del servidor como d.plaspy.com o 54.85.159.138.
4. Configure el puerto del servidor en 8888.
5. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo indican.
7. Valide que el dispositivo aparezca y reporte correctamente en Plaspy comprobando el estado en línea y las ubicaciones recientes.

## Ejemplos de comandos de configuración

Los comandos exactos o las pantallas de configuración varían según el firmware de Supermate y la herramienta del proveedor que esté utilizando. Los dispositivos Supermate pueden requerir una utilidad de PC, una interfaz web o comandos vía SMS según el modelo y el firmware regional. Consulte la documentación oficial de Supermate o la herramienta de configuración para la sintaxis exacta de comandos y los pasos de la interfaz. Cuando aplique comandos, reemplace los marcadores de posición por sus valores específicos siguiendo el formato proporcionado por el fabricante.

## Notas sobre la configuración

- Las diferencias de firmware y de herramientas pueden cambiar los nombres de menú exactos y los formatos de comando usados para establecer la dirección y el puerto del servidor.
- Si su dispositivo requiere seleccionar explícitamente TCP o UDP, escoja el que mejor se adapte a su instalación; Plaspy detectará el protocolo automáticamente cuando lleguen los paquetes.
- Todos los dispositivos en Plaspy reportan al puerto 8888, por lo que asegúrese de que cualquier equipo de red intermedio no bloquee el tráfico saliente a ese puerto.
- Mantenga a mano el identificador del dispositivo, como el IMEI, para localizar y confirmar el rastreador en su cuenta de Plaspy después de la configuración.
- Verifique siempre los ajustes contra la documentación oficial de Supermate para la versión de firmware de su equipo.

## Por qué usar Plaspy con esta configuración

Usar el Supermate D26-H con Plaspy brinda a organizaciones y particulares una vía directa para obtener visibilidad en tiempo real y monitoreo operativo. El diseño compacto y el conjunto de funciones del D26-H, combinados con los ajustes de servidor compartidos de Plaspy, facilitan la integración para rastreo de activos, supervisión de flotas y alertas basadas en ubicación sin necesidad de personalizar un servidor por cada dispositivo.

Para saber más sobre Plaspy y cómo la plataforma gestiona la conectividad y el seguimiento de dispositivos, visite https://www.plaspy.com. Para obtener los pasos de configuración más actualizados, notas de firmware y recursos de soporte del fabricante, consulte http://www.gps-summit.com/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
