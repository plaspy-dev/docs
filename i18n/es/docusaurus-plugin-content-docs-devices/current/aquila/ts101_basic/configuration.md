---
slug: /aquila/ts101_basic/configuration
id: ts101_basic-configuration
sidebar_label: Configuration
title: Aquila - TS101-Basic Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Aquila TS101-Basic para prepararlo y usarlo con la plataforma Plaspy
keywords:
- Configuración Aquila TS101-Basic
- Configuración inicial Aquila TS101-Basic
- Configuración de rastreador Aquila
- Configuración TS101-Basic para Plaspy
- Configuración servidor Plaspy
- Guía configuración rastreador GPS
- Configuración seguimiento de vehículos
- Rastreador para gestión de flotas
- Configuración plataforma GPS TS101-Basic
- Configuración de rastreador para Plaspy
---

# Aquila - Configuración del TS101-Basic

Esta página describe el contexto público de configuración para usar el Aquila TS101-Basic con la plataforma Plaspy. Explica los parámetros de servidor compartidos y los pasos prácticos que normalmente deberá seguir para apuntar el rastreador a Plaspy, de modo que el dispositivo pueda reportar ubicación y estado. El TS101-Basic es un rastreador vehicular compacto con interruptor antivandálico, carcasa IP65, antenas internas, seguimiento en tiempo real y almacenamiento sólido en el equipo para 10,000 registros, características que lo hacen adecuado para escenarios de seguimiento de flotas y activos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía para comprender el endpoint público de Plaspy y el flujo práctico para configurar el TS101-Basic; siempre contraste cualquier comando o herramienta específica del equipo con la documentación oficial del fabricante.

## Resumen de configuración

Preparar el TS101-Basic para Plaspy se centra en asegurar que el dispositivo pueda alcanzar el endpoint de Plaspy y que la plataforma reciba el identificador del rastreador y las actualizaciones de posición. El proceso de configuración consiste principalmente en apuntar el dispositivo al servidor de Plaspy, seleccionar el transporte correcto si es necesario y verificar la conectividad y el envío de datos.

- Configure el dispositivo para que reporte a Plaspy usando el endpoint público y el puerto.
- Seleccione el modo de transporte apropiado en el rastreador si el firmware requiere UDP o TCP.
- Guarde y aplique los ajustes en la herramienta de configuración del fabricante o mediante SMS.
- Reinicie o apague y vuelva a encender el rastreador si es necesario para iniciar la primera conexión.
- Valide que Plaspy reciba la primera posición y muestre el dispositivo en línea en la plataforma.
- Mantenga la documentación del firmware y las notas de instalación a mano para solución de problemas y futuras actualizaciones.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Estos ajustes compartidos son usados por Plaspy para todos los dispositivos compatibles y permiten aceptar conexiones en un puerto único y consistente mientras Plaspy detecta automáticamente el protocolo del dispositivo.

## Requisitos previos

- Equipo alimentado e instalado según las indicaciones mecánicas y eléctricas del fabricante.
- Acceso al método oficial de configuración o al software del fabricante para el TS101-Basic.
- El dispositivo debe poder establecer conexiones de red salientes según el entorno de instalación.
- Registro del identificador único del dispositivo, como IMEI o ID del rastreador, para registro y verificación.
- Conocimiento de la versión de firmware del equipo y cualquier nota específica del proveedor.
- Acceso administrativo a cualquier herramienta de configuración o interfaz SMS necesaria para desbloquear o cambiar los ajustes del servidor.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el rastreador envía periódicamente actualizaciones de ubicación y estado al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo sea visible dentro de la plataforma. Plaspy recibe los datos y utiliza la detección de protocolo para interpretar los mensajes del dispositivo sin requerir puertos separados para cada tipo de rastreador.

- El rastreador envía datos de ubicación y movimiento al endpoint del servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando se establece la conexión.
- La plataforma procesa los reportes entrantes para ofrecer visibilidad en tiempo real y almacenamiento histórico.
- Las notificaciones de eventos y las actualizaciones de estado del dispositivo se transmiten a Plaspy para monitoreo operativo.
- Una configuración exitosa hace que el TS101-Basic sea visible en Plaspy y esté disponible para seguimiento e informes.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración o al software del fabricante del TS101-Basic siguiendo las instrucciones del proveedor.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor.
3. Establezca el puerto del servidor a 8888 como puerto de destino para los reportes.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte en su interfaz de configuración.
5. Aplique o guarde la configuración usando la herramienta o método del fabricante.
6. Reinicie o aplique un ciclo de alimentación al dispositivo si el firmware necesita reiniciarse para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo en la plataforma y confirmando la primera carga de posición.

## Ejemplos de comandos de configuración

Las herramientas del fabricante y el firmware del TS101-Basic varían según la revisión y la distribución del proveedor, por lo que los comandos exactos o las cadenas SMS difieren entre unidades. Dado que no se facilita aquí un conjunto público de comandos, utilice el software de configuración oficial de Aquila o la documentación del fabricante para cambiar servidor y puerto. Cuando el dispositivo requiera entrada manual, ingrese el servidor como d.plaspy.com o 54.85.159.138 y el puerto como 8888; seleccione UDP o TCP si se requiere elección de transporte. Plaspy detectará el protocolo del rastreador automáticamente una vez que el dispositivo se conecte.

## Notas de configuración

- Las versiones de firmware y las herramientas de configuración del proveedor pueden presentar menús o cadenas de comandos diferentes; siempre consulte las notas de la versión de firmware.
- Los instaladores deben registrar el IMEI o ID del dispositivo y verificar el primer reporte en línea en Plaspy después de la configuración.
- Elegir UDP o TCP puede afectar el comportamiento de la conexión según las condiciones de red; pruebe ambos si aparecen problemas de conectividad.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos compatibles, mantenga servidor y puerto consistentes entre equipos para simplificar la puesta a punto de la flota.
- Consulte la documentación oficial del fabricante para comandos específicos del equipo, cadenas SMS u opciones que estén fuera de los ajustes públicos de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Aquila TS101-Basic con Plaspy ofrece una forma práctica de integrar hardware de rastreo resistente y discreto en una plataforma centralizada de gestión de flotas. El diseño antivandálico del equipo, la carcasa IP65, las antenas internas y el almacenamiento duradero lo convierten en una buena opción para casos de uso de rastreo vehicular donde la fiabilidad de reporte y los datos históricos son importantes. Apuntar el TS101-Basic a Plaspy con los ajustes compartidos proporciona a los equipos una forma coherente y de bajo esfuerzo para inscribir dispositivos y comenzar el monitoreo.

Learn more about Plaspy and how the platform can work with compatible trackers at https://www.plaspy.com. Please verify the latest device specific configuration steps, firmware behavior, and manufacturer details with the official Aquila documentation at https://www.itriangle.in/ as manufacturer methods and firmware can change over time.
