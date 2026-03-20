---
slug: /skypatrol/sp4603/configuration
id: sp4603-configuration
sidebar_label: Configuration
title: SkyPatrol - SP4603 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar SkyPatrol SP4603 en Plaspy, con ajustes de servidor, opciones de transporte y pasos prácticos de integración
keywords:
  - Configuración SkyPatrol SP4603
  - Configuración SP4603
  - Configuración servidor SP4603
  - Configuración Plaspy SP4603
  - Configuración rastreador SkyPatrol
  - Configuración plataforma SP4603
  - Seguimiento de flotas SP4603
  - Configuración dispositivo SkyPatrol
  - Guía de configuración SP4603
  - Compatibilidad GPS Plaspy
---

# SkyPatrol - Configuración del SP4603

Esta página reúne la información de configuración pública para usar el rastreador SkyPatrol SP4603 Series con la plataforma Plaspy. Contiene los ajustes de servidor y los pasos prácticos que necesitará para apuntar un SP4603 a Plaspy y validar que el equipo sea visible y reporte correctamente. Cuando corresponde, esta guía referencia capacidades públicas del SP4603 como gestión OTA, soporte FOTA, y funciones de geocercas y detección de interferencias.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración de SkyPatrol que utilice. Use esta guía para aplicar los valores públicos del endpoint de Plaspy y luego consulte la documentación de SkyPatrol y sus herramientas de instalador para los formatos de comandos y menús específicos del dispositivo.

## Resumen de la configuración

El objetivo de esta configuración es preparar un SP4603 para que se comunique de forma confiable con Plaspy y aparezca en la plataforma para monitoreo e informes. Esto implica aplicar el endpoint y el puerto de Plaspy en el rastreador, elegir el método de transporte si es necesario, y validar que el dispositivo envíe datos de ubicación y eventos después de la configuración.

- Configure el SP4603 para que reporte a Plaspy usando el endpoint de servidor y puerto proporcionados
- Seleccione UDP o TCP como transporte si el firmware del equipo requiere elegir uno
- Guarde y aplique los ajustes y reinicie el dispositivo cuando las herramientas del fabricante lo soliciten
- Valide la conectividad y que los datos de ubicación y eventos como activaciones de geocerca o alertas por interferencias aparezcan en Plaspy
- Use las funciones de gestión por aire del SP4603 para actualizaciones remotas cuando estén disponibles y mantenga el firmware al día

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP on port 8888
- Plaspy notes: all devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Acceso físico al SP4603 o acceso a la herramienta de configuración SkyPatrol utilizada por su instalador
- Una tarjeta SIM activa y servicio de datos móviles si el equipo reporta vía GSM GPRS (el SP4603 es un equipo GSM GPRS cuatribanda)
- Conocimiento de las credenciales APN necesarias para la SIM si el equipo requiere configurar el APN
- Fuente de alimentación confirmada y batería cargada o instalación fija para que el dispositivo complete la configuración y las pruebas
- Acceso a las notas de firmware del dispositivo o a la documentación de SkyPatrol para comandos o opciones de transporte específicas del modelo
- Cobertura de red en el sitio de instalación que permita al dispositivo alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888

## Cómo se conecta este rastreador a Plaspy

Al configurar el endpoint de Plaspy, el SP4603 abrirá una conexión desde el equipo al servidor de Plaspy y enviará periódicamente datos de ubicación y eventos. Plaspy recibe la información entrante en el puerto compartido de la plataforma y detecta automáticamente el protocolo del dispositivo, haciéndolo disponible en la interfaz de Plaspy para rastreo y monitoreo.

- El rastreador envía posiciones periódicas a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según el firmware del SP4603 o la elección de configuración
- Los reportes de eventos como entrada/salida de geocerca, detección de interferencias y eventos de entradas/salidas son reenviados a Plaspy
- Plaspy detecta automáticamente el protocolo usado por el SP4603, por lo que no se requiere seleccionar el protocolo manualmente dentro de Plaspy
- Una vez que reporta, el dispositivo queda visible para monitoreo operativo e historial en la plataforma Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración SkyPatrol o al software correspondiente para su modelo SP4603 (esto puede ser una herramienta web, software de escritorio o comandos SMS/AT según el equipo y el firmware).
2. En los ajustes de servidor del dispositivo ingrese el dominio d.plaspy.com o la IP del servidor 54.85.159.138 tal como lo facilita Plaspy.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los equipos soportados.
4. Elija la opción de transporte UDP o TCP si la configuración del SP4603 requiere seleccionar un protocolo de transporte.
5. Configure los parámetros APN o de la SIM necesarios para que el equipo establezca conectividad GPRS si aplica.
6. Aplique o guarde la configuración en la herramienta SkyPatrol y realice cualquier reinicio o reboot del dispositivo que solicite el procedimiento.
7. Valide que el SP4603 reporte a Plaspy comprobando que el dispositivo aparece en la plataforma Plaspy y que se reciben actualizaciones de ubicación o eventos entrantes.

## Ejemplos de comandos de configuración

Los comandos exactos y los métodos de configuración del SP4603 dependen de la herramienta de SkyPatrol y de la edición de firmware en uso. Los dispositivos SkyPatrol suelen configurarse con software del fabricante, conjuntos de comandos por SMS o utilidades de gestión OTA. Dado que los conjuntos de comandos varían entre versiones de firmware, consulte la documentación de SkyPatrol para la sintaxis exacta requerida por su unidad.

Si utiliza un conjunto de comandos SMS o CLI de SkyPatrol proporcionado por el fabricante, aplique los ajustes del servidor Plaspy según lo descrito en la guía del fabricante y use d.plaspy.com o 54.85.159.138 con puerto 8888. Conserve cualquier marcador de posición como credenciales APN cuando la utilidad de configuración del dispositivo lo solicite.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús, la sintaxis de comandos o el comportamiento del transporte; revise siempre las notas de la versión del firmware del SP4603 antes de aplicar los ajustes.
- Elegir TCP frente a UDP puede afectar garantías de entrega y comportamiento de reconexión; seleccione el transporte que su instalación soporte y pruebe en su entorno.
- La configuración de APN y de la SIM es necesaria para reportes GPRS; confirme el APN, usuario y contraseña con su operador móvil e ingréselos en el dispositivo cuando sea necesario.
- Debido a que Plaspy utiliza un puerto compartido y detección automática de protocolos, concéntrese en la entrada correcta del endpoint y puerto en el equipo en lugar de seleccionar el protocolo dentro de Plaspy.
- Pruebe la configuración en un entorno controlado antes de un despliegue masivo para confirmar que geocercas, detección de interferencias y otros eventos reportados por el SP4603 llegan a Plaspy como se espera.

## Por qué usar Plaspy con esta configuración

Usar el SkyPatrol SP4603 con Plaspy ofrece un camino sencillo para integrar la telemetría del dispositivo en una plataforma única de monitoreo y gestión de flotas. El soporte del SP4603 para gestión por aire, FOTA, geocercas y reporte de eventos combina bien con la detección automática de protocolos y el endpoint centralizado de Plaspy, lo que simplifica los despliegues a gran escala y el mantenimiento continuo de los equipos.

Learn more about how Plaspy supports trackers and fleet operations at https://www.plaspy.com. For the latest device specific commands, firmware behavior, and setup procedures verify current information and detailed manuals on the SkyPatrol website https://www.skypatrol.com/.
