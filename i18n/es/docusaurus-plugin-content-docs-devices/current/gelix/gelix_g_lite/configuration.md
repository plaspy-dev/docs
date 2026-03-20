---
slug: /gelix/gelix_g_lite/configuration
id: gelix_g_lite-configuration
sidebar_label: Configuration
title: Gelix - Gelix G Lite Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Gelix G Lite en Plaspy, con ajustes de servidor, opciones de transporte y flujo de instalación
keywords:
  - Configuración Gelix G Lite
  - Instalación Gelix G Lite
  - Rastreador Gelix Plaspy
  - Configuración servidor Gelix
  - Configuración plataforma GPS Gelix
  - Configuración software rastreo Gelix
  - Rastreo de vehículos Gelix
  - Compatibilidad Plaspy con rastreadores
  - Ajustes servidor Plaspy
  - Rastreo de flotas Gelix
---

# Gelix - Configuración de Gelix G Lite

Esta página describe el contexto de configuración pública para usar el rastreador Gelix G Lite con Plaspy. Se enfoca en los ajustes de servidor y el flujo práctico necesarios para apuntar un dispositivo Gelix G Lite a Plaspy, de modo que el dispositivo pueda ser detectado y gestionado por la plataforma. La información aquí está dirigida a instaladores y usuarios técnicos que preparan un equipo para operar con Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas o procedimientos del proveedor. Verifique siempre los pasos específicos del dispositivo con la documentación de Gelix según sea necesario.

## Resumen de la configuración

El objetivo de este proceso es preparar el Gelix G Lite para que envie sus datos de ubicación y estado a Plaspy, de forma que el dispositivo sea visible y utilizable en la plataforma. El proceso se centra en configurar el endpoint de red y el transporte, validar la conectividad móvil y confirmar que el dispositivo reporta correctamente.

- Apunte el dispositivo al dominio o IP del servidor Plaspy y configure el puerto compartido de Plaspy para que el rastreador pueda iniciar la conexión.
- Seleccione el protocolo de transporte (UDP o TCP) si el firmware del equipo requiere elegir un transporte.
- Verifique la conectividad de datos móviles y los ajustes APN necesarios para que los datos GPRS lleguen a Plaspy.
- Aplique o guarde la configuración y reinicie el rastreador si el fabricante recomienda un reinicio para que los cambios surtan efecto.
- Confirme que el Gelix G Lite está reportando a Plaspy y que es visible en la plataforma.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Note: All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when a device connects

## Requisitos habituales antes de la configuración

- Un Gelix G Lite con alimentación y los cables necesarios, con acceso físico para la configuración.
- Acceso al método o software de configuración oficial de Gelix provisto por el fabricante o el proveedor.
- Una SIM celular activa con datos habilitados y los ajustes APN correctos para la red móvil que se utilizará.
- Conocimiento de la versión de firmware del equipo y de cualquier instrucción específica del proveedor que afecte la configuración.
- Forma de aplicar cambios y, si es necesario, reiniciar el equipo tras las modificaciones (acceso físico o herramienta de gestión remota).
- Credenciales o permisos requeridos por la herramienta de configuración del fabricante.

## Cómo se conecta este rastreador a Plaspy

El Gelix G Lite envía posiciones y telemetría del dispositivo al endpoint y puerto compartidos de Plaspy para que pueda ser supervisado dentro de la plataforma. Plaspy recibe las conexiones entrantes en el endpoint común, identifica el protocolo del dispositivo automáticamente y comienza a procesar los datos del rastreador.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 usando el puerto 8888.
- El transporte se selecciona como UDP o TCP en el dispositivo si el firmware lo requiere.
- Cuando el dispositivo se conecta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo e interpreta los mensajes.
- El envío correcto de reportes habilita la visibilidad de ubicación, el reporte de eventos y el monitoreo operativo en Plaspy.
- Tras la configuración, verifique que los reportes periódicos o los mensajes de arranque aparezcan en la plataforma.

## Flujo de configuración habitual

1. Acceda al método o software de configuración oficial de Gelix suministrado por Gelix o su proveedor.  
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o, si es necesario, use 54.85.159.138.  
3. Configure el puerto del dispositivo en 8888 (este es el puerto común de Plaspy utilizado por todos los dispositivos).  
4. Elija UDP o TCP si la configuración del equipo requiere seleccionar un protocolo de transporte.  
5. Aplique o guarde la configuración en la herramienta del dispositivo y siga las indicaciones del proveedor para confirmar los cambios.  
6. Reinicie el Gelix G Lite si el fabricante lo solicita para activar los nuevos ajustes de red.  
7. Valide que el dispositivo reporte a Plaspy comprobando la conexión del equipo y los mensajes de ubicación iniciales en la plataforma.

## Ejemplo de comandos de configuración

Los comandos exactos y la interfaz a usar pueden variar según el firmware de Gelix y las herramientas de configuración del fabricante. Los dispositivos Gelix se suelen configurar mediante la utilidad oficial de configuración o las herramientas de aprovisionamiento que suministra el proveedor. Dado que los formatos de comandos y los pasos difieren entre revisiones de firmware y herramientas, siga las instrucciones de Gelix proporcionadas con su equipo para la sintaxis y secuencia exactas.

Si dispone de una referencia de comandos o un archivo de configuración suministrado por el fabricante, use el dominio d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 como valores de destino, y configure el transporte en UDP o TCP según lo requiera su dispositivo.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de configuración y la sintaxis de comandos; confirme siempre los pasos correctos para su versión de dispositivo.
- La elección entre UDP y TCP puede depender de las características de la red y de las recomendaciones del fabricante; pruebe ambos si el equipo soporta los dos transportes.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta el protocolo automáticamente, por lo que debe concentrarse en asegurar que el endpoint y el transporte estén configurados correctamente en el rastreador.
- Verifique los ajustes APN y de datos móviles antes de intentar conectar con Plaspy para evitar problemas de conectividad.
- Mantenga un registro de la configuración aplicada y de cualquier identificador de dispositivo para poder emparejar el equipo con la entrada correspondiente en Plaspy cuando comience a reportar.

## Por qué usar Plaspy con esta configuración

Usar el Gelix G Lite con Plaspy ofrece a flotas y administradores de activos una forma sencilla de obtener visibilidad y supervisión operativa sin la complejidad de configurar servidores por dispositivo. Apuntar el rastreador al endpoint compartido de Plaspy y al puerto común permite que Plaspy interprete automáticamente el protocolo del dispositivo y comience a procesar los mensajes de ubicación y estado, habilitando monitoreo, alertas y seguimiento histórico.

To learn more about Plaspy and how it supports trackers like the Gelix G Lite visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and setup tools can change over time, so verify the latest device-specific configuration details and commands on the Gelix website at http://www.gelix.com/.
