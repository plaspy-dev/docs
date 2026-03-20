---
slug: /autoseeker/at_07/configuration
id: at_07-configuration
sidebar_label: Configuration
title: Autoseeker - AT-07 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Autoseeker AT-07 con los ajustes de servidor Plaspy y pasos prácticos para integrarlo en la plataforma
keywords:
  - Configuración Autoseeker AT-07
  - Configuración AT-07
  - Configuración servidor Autoseeker AT-07
  - Configuración AT-07 Plaspy
  - Configuración rastreador Plaspy
  - Configuración plataforma rastreo GPS
  - Configuración rastreo de vehículos
  - Configuración seguimiento de flotas
  - Configuración rastreador GPS Autoseeker
  - Guía de integración AT-07
---

# Autoseeker - Configuración del AT-07

Esta página describe el contexto público de configuración para usar el mini rastreador GPS Autoseeker AT-07 con Plaspy. Resume los ajustes prácticos que deberá aplicar en el dispositivo o a través de las herramientas del fabricante para que el AT-07 envíe ubicación y estado a la plataforma Plaspy. Use esta guía como referencia de integración y consulte los materiales oficiales del fabricante para detalles específicos de la interfaz del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el punto de conexión y el puerto del servidor son los mismos para todos los equipos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siga las instrucciones oficiales de Autoseeker para la sintaxis de comandos o el flujo de la interfaz cuando sea necesario.

## Resumen de la configuración

Prepare el AT-07 para comunicarse de forma confiable con Plaspy configurando el punto de conexión del servidor, el transporte y los parámetros de red necesarios. El objetivo es asegurar que el dispositivo pueda establecer conexión y que Plaspy identifique automáticamente el protocolo del rastreador para empezar a recibir actualizaciones.

- Configure el rastreador para que reporte al endpoint y puerto del servidor Plaspy utilizados por todos los dispositivos.
- Seleccione el método de transporte soportado por el equipo (UDP o TCP) si el dispositivo requiere elegirlo.
- Guarde y aplique la configuración mediante la herramienta oficial de Autoseeker o la interfaz de comandos.
- Valide que el AT-07 sea visible y esté reportando en Plaspy tras la configuración.
- Si hay problemas, verifique la alimentación del dispositivo, la cobertura de red y que el equipo haya aceptado los nuevos ajustes de servidor.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el Autoseeker AT-07:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes

Estos valores son los mismos para todos los dispositivos soportados por Plaspy y permiten que la plataforma reciba e identifique el tráfico de forma consistente.

## Requisitos previos

- Confirme que el AT-07 esté encendido, con batería suficiente y operativo.
- Tenga acceso físico al dispositivo o acceso al método/software de configuración del fabricante.
- Una cuenta en Plaspy o acceso de administrador a la plataforma para verificar el reporte del dispositivo.
- Conectividad de red adecuada para que el dispositivo alcance servidores externos.
- El manual de usuario de Autoseeker o la referencia de configuración correspondiente a su versión de firmware.
- Herramientas básicas de diagnóstico como cable serial, adaptador USB o la app de configuración del proveedor cuando aplique.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el AT-07 envía sus actualizaciones de ubicación y estado al endpoint compartido de la plataforma para que el dispositivo aparezca en Plaspy y pueda monitorearse y generar eventos. Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador para procesar correctamente los mensajes entrantes.

- El rastreador se configura para reportar al servidor Plaspy d.plaspy.com (o a la IP equivalente).
- Los mensajes se envían por el transporte configurado al puerto 8888.
- Plaspy inspecciona los datos entrantes y detecta automáticamente el protocolo del dispositivo.
- Una vez conectado, el equipo aparecerá en Plaspy para monitorización en tiempo real de ubicación y estado.
- Los reportes periódicos y mensajes de eventos permiten la supervisión operativa y alertas dentro de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Autoseeker para el AT-07 (app del fabricante, comandos SMS si están soportados, o una utilidad de escritorio).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto en 8888.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir protocolo de transporte.
5. Aplique o guarde la configuración desde la interfaz del dispositivo o envíe los comandos de configuración.
6. Reinicie el AT-07 si las instrucciones del fabricante requieren reinicio para que los cambios surtan efecto.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma; confirme conectividad y flujo de datos.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis del AT-07 dependen del método de configuración de Autoseeker y de la versión de firmware. Los fabricantes suelen proporcionar una lista de comandos, un conjunto de comandos por SMS o una aplicación de configuración. Al usar una configuración basada en comandos, las acciones públicas típicas son establecer dominio o IP del servidor, establecer puerto y definir transporte. Por ejemplo, una secuencia de comandos (solo ilustrativa) para establecer servidor y puerto y luego guardar sería:

- Establecer servidor a dominio o IP
  ```
  set server d.plaspy.com
  ```
  o
  ```
  set server 54.85.159.138
  ```
- Establecer puerto
  ```
  set port 8888
  ```
- Establecer transporte si es necesario
  ```
  set transport udp
  ```
  o
  ```
  set transport tcp
  ```
- Guardar y reiniciar si la herramienta lo requiere
  ```
  save
  restart
  ```

Nota: Los nombres exactos de los comandos y su sintaxis varían según el firmware y la herramienta del fabricante. Preserve cualquier marcador de posición proporcionado por la documentación de Autoseeker, como [apn] o [apnu], cuando esos valores formen parte del conjunto oficial de comandos. Consulte el manual de Autoseeker para los comandos precisos de su dispositivo y firmware.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de comandos y las opciones de configuración disponibles; consulte la documentación del AT-07 correspondiente a su firmware.
- Algunas herramientas del proveedor muestran opciones gráficas en lugar de comandos en texto; independientemente de la interfaz, los valores del servidor Plaspy (dominio o IP) y el puerto son obligatorios.
- Cuando exista la opción, UDP suele ser la elección común para reportes de rastreadores, pero seleccione el transporte que mejor se adapte a su red y a la recomendación del fabricante.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, lo que reduce la necesidad de seleccionar un protocolo en el servidor.
- Las variantes de mercado o regionales del dispositivo pueden requerir pasos de configuración ligeramente diferentes; verifique con la documentación de Autoseeker.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-07 con Plaspy ofrece una configuración de servidor única y sencilla que permite al dispositivo reportar ubicación y estado a un endpoint compartido. Esto simplifica la incorporación de flotas o activos porque los mismos ajustes de servidor (d.plaspy.com, 54.85.159.138, puerto 8888) aplican a múltiples dispositivos y Plaspy detecta automáticamente el protocolo del rastreador para procesar los mensajes entrantes.

Si desea conocer más sobre Plaspy y cómo administrar datos de rastreo de dispositivos como el Autoseeker AT-07 visite https://www.plaspy.com. Para obtener los comandos de configuración más actuales, notas de firmware y detalles del fabricante, siempre verifique la información más reciente en el sitio oficial de Autoseeker https://autoseekergps.com/.
