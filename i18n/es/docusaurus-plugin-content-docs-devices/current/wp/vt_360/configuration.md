---
slug: /wp/vt_360/configuration
id: vt_360-configuration
sidebar_label: Configuration
title: WP - VT-360 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar WP VT-360 con ajustes de servidor Plaspy y pasos prácticos para seguimiento vehicular
keywords:
 - WP VT-360
 - configuración WP VT-360
 - instalación WP VT-360
 - configuración Plaspy
 - ajustes del servidor Plaspy
 - configuración rastreador GPS
 - instalación seguimiento de vehículos
 - configuración servidor VT-360
 - instalación rastreador GPS WP
 - configuración plataforma de rastreo
---

# WP - VT-360 Configuración

Esta página resume el contexto público de configuración para usar el rastreador WP VT-360 con Plaspy. Se centra en el endpoint del servidor y en los ajustes de transporte que debe aplicar para que el VT-360 reporte ubicación y estado a la plataforma Plaspy. El contenido está diseñado como una guía práctica y se apoya en la documentación del fabricante para procedimientos específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT-360 es compatible con Plaspy y soporta las características de conectividad y reporte descritas aquí, pero siempre confirme los detalles con la documentación oficial del VT-360 antes de desplegar.

## Resumen de la configuración

El objetivo de la configuración es preparar el VT-360 para enviar su telemetría y eventos a Plaspy, de modo que los vehículos aparezcan en la plataforma para monitoreo e informes. Apuntará el dispositivo al servidor de Plaspy, elegirá el transporte apropiado (UDP o TCP) si es necesario, guardará o aplicará los ajustes y verificará que el equipo sea visible en Plaspy.

- Configure el endpoint de reporte del VT-360 a Plaspy para que los mensajes de ubicación y eventos lleguen a la plataforma.
- Elija el protocolo de transporte compatible con su equipo y firmware, UDP o TCP en el puerto de Plaspy.
- Aplique o guarde la configuración y reinicie el dispositivo cuando la herramienta del fabricante lo requiera.
- Valide la conectividad y que el dispositivo aparezca en Plaspy para reporte y seguimiento en tiempo real.
- Mantenga un registro del IMEI del dispositivo y de cualquier identificador usado por Plaspy para el registro del equipo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP, configurable según la herramienta o firmware del VT-360
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes

## Requisitos típicos antes de la configuración

- Acceso al método o software oficial de configuración del VT-360 provisto por WP
- Un VT-360 alimentado y conectado con una SIM celular válida y cobertura de red 2G o 3G si es necesario
- El IMEI del dispositivo o identificador único disponible para registro y validación en Plaspy
- Conocimiento de la versión de firmware del VT-360 y de los comandos o menús específicos del fabricante
- Un método para leer los registros del dispositivo o mensajes de confirmación que valide el reporte exitoso
- De ser posible, una antena GPS y GSM externa instalada según las instrucciones para una recepción confiable

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el VT-360 envía sus actualizaciones de ubicación y reportes de eventos al endpoint compartido de Plaspy usando el puerto y el transporte seleccionado durante la configuración. Plaspy recibe los datos y los mapea a vistas de seguimiento de vehículos, alertas y registros históricos para que los operadores de flotas puedan monitorear la actividad.

- El VT-360 reporta telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El dispositivo puede usar UDP o TCP como transporte si el firmware o la herramienta de configuración requiere elegir uno
- Plaspy detecta automáticamente el protocolo usado por el rastreador y decodifica los mensajes
- Las actualizaciones de ubicación, eventos de ignición y entradas, y las notificaciones de alarma se reenvían a la plataforma Plaspy para su visibilidad
- Una vez que el reporte es exitoso, el dispositivo se vuelve visible en Plaspy para seguimiento en vivo y consulta del historial

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software del WP VT-360 (por ejemplo la aplicación del proveedor, comandos SMS o la herramienta de configuración).
2. Ingrese el servidor de Plaspy especificando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo servidor/host.
3. Ajuste el puerto a 8888, que es el puerto compartido de reporte usado por Plaspy para los dispositivos compatibles.
4. Elija la opción de transporte UDP o TCP si el VT-360 requiere seleccionar el transporte en su interfaz de configuración.
5. Aplique o guarde los cambios en la herramienta del fabricante y confirme que los ajustes fueron aceptados.
6. Reinicie el dispositivo si la herramienta o el firmware exige un reinicio para activar la nueva configuración de reporte.
7. Valide que el VT-360 reporte a Plaspy revisando la visibilidad del dispositivo en la plataforma y confirmando la recepción de telemetría.

## Ejemplo de comandos de configuración

Los comandos exactos y el método para aplicarlos varían según el firmware del VT-360 y la herramienta de WP. Dado que el VT-360 normalmente se configura mediante el software del fabricante o comandos SMS/OTA soportados, siga la documentación de WP o las indicaciones de la herramienta para ingresar los valores de Plaspy indicados más arriba. Si usa configuración por SMS provista por WP, deberá suministrar el dominio o la IP del servidor y el puerto de Plaspy como parte de esos comandos SMS según la sintaxis del proveedor.

Si la documentación del proveedor incluye ejemplos de comandos, aplíquelos en el orden que recomienden, reemplazando servidor y puerto por:
- d.plaspy.com o 54.85.159.138
- puerto 8888
- transporte UDP o TCP según se requiera

Siempre preserve los marcadores de posición y siga la sintaxis del proveedor para campos de APN o credenciales cuando aparezcan en los comandos.

## Notas de configuración

- Las versiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis de comandos y la disposición de los menús; revise siempre la documentación del VT-360 para instrucciones específicas por firmware.
- Elija UDP o TCP según el soporte del dispositivo y las consideraciones de fiabilidad de la red; Plaspy detectará el protocolo automáticamente una vez que lleguen los mensajes.
- Todos los dispositivos en Plaspy reportan en el mismo puerto, por lo que use el puerto 8888 para que el VT-360 coincida con lo esperado por la plataforma.
- Si configura por aire, permita tiempo para que los ajustes se propaguen y confirme revisando los registros o la telemetría en la plataforma.
- Mantenga un registro de la configuración y del IMEI para facilitar la solución de problemas y el registro del dispositivo en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el WP VT-360 con Plaspy ofrece una vía sencilla para obtener visibilidad de la flota y monitoreo operativo. Apuntar el VT-360 al endpoint y puerto compartidos de Plaspy permite que el dispositivo reporte ubicación, eventos de ignición y alarmas a una plataforma centralizada para seguimiento en vivo, historial y alertas. Esto ayuda a los administradores y operadores de flota a mantener supervisión y responder más rápidamente a los eventos del vehículo.

Para conocer más sobre Plaspy y cómo soporta rastreadores como el VT-360 visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo más recientes, comportamiento del firmware y detalles del fabricante, verifique siempre la información en el sitio oficial de WP http://www.wondeproud.com/ ya que las instrucciones del proveedor pueden cambiar con el tiempo.
