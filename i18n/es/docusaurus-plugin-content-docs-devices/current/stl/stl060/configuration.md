---
slug: /stl/stl060/configuration
id: stl060-configuration
sidebar_label: Configuration
title: STL - STL060 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS STL STL060 y apuntarlo al servidor Plaspy para reportar ubicación y estado
keywords:
  - configuración STL STL060
  - configuración STL060 Plaspy
  - configuración rastreador GPS STL
  - configuración servidor dispositivo STL
  - configuración rastreador Plaspy
  - configuración seguimiento vehículo STL060
  - configuración plataforma GPS STL
  - configuración SMS STL060
  - configuración servidor seguimiento STL060
  - seguimiento flotas STL060
---

# STL - Configuración del STL060

Esta página cubre el contexto público de configuración para usar el rastreador GPS STL STL060 con Plaspy. Se centra en los ajustes prácticos del servidor y los pasos de preparación necesarios para apuntar el dispositivo a Plaspy, de modo que el equipo pueda enviar ubicación e información básica de estado a la plataforma. Use esta guía para entender qué espera Plaspy y cómo aplicar esos ajustes mediante el método de configuración que provea el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El STL060 admite almacenar posiciones cuando GPRS no está disponible e incluye configuraciones y peticiones de ubicación por SMS, por lo que en algunos entornos podrá usar SMS para configuración básica o la herramienta del fabricante para una configuración completa del servidor.

## Resumen de configuración

El objetivo de la configuración es preparar el STL060 para comunicarse de forma fiable con Plaspy y validar que los reportes de ubicación sean visibles en la plataforma. Este proceso se enfoca en suministrar el endpoint correcto de Plaspy, asegurar que el dispositivo tenga una vía de comunicación activa y verificar que los reportes lleguen a Plaspy.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los paquetes de ubicación se enruten a la plataforma
- Configurar el transporte y el puerto para que el dispositivo pueda abrir una sesión con Plaspy
- Verificar que el dispositivo tenga conectividad celular o una vía de comunicación adecuada para reportes en vivo
- Utilizar la configuración por SMS si no dispone de una herramienta de software o como mecanismo de verificación alternativo
- Confirmar que el dispositivo aparece y reporta en Plaspy después de la configuración

## Ajustes del servidor Plaspy

Utilice exactamente estos ajustes públicos del servidor Plaspy al configurar el STL060 para Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol and all devices use the same port

Siempre introduzca el dominio del servidor o la IP y configure el transporte y el puerto como se indica arriba para que el dispositivo envíe datos a Plaspy correctamente.

## Requisitos típicos antes de la configuración

- Un dispositivo STL060 alimentado y accesible, con capacidad para aceptar cambios de configuración
- Una SIM activa y plan de datos para reportes en tiempo real por GPRS si requiere seguimiento en vivo
- Capacidad para enviar y recibir SMS para ajustes y verificación por SMS si va a usar ese método
- Acceso al método o software oficial del fabricante proporcionado por el vendedor o instalador
- Un entorno confiable para probar los reportes iniciales y validar la visibilidad en Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el STL060 envía su posición y cualquier mensaje de evento compatible al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos mensajes y los asigna al perfil de dispositivo correcto detectando automáticamente el protocolo del rastreador.

- El dispositivo envía paquetes de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la elección de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes entrantes
- Los reportes se hacen visibles en Plaspy para monitoreo operativo e histórico
- Si GPRS no está disponible, el STL060 puede retener datos en memoria y soportar peticiones de posición por SMS

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software proporcionado por el vendedor o instalador.
2. En los ajustes del servidor del dispositivo ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto de destino en 8888, que es usado por Plaspy para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar uno.
5. Aplique o guarde la configuración en la interfaz del equipo o vía SMS según sea soportado.
6. Reinicie el dispositivo si el firmware o la herramienta recomiendan un reinicio para aplicar cambios de red.
7. Valide que el dispositivo reporte a Plaspy revisando que lleguen posiciones entrantes en la plataforma.

## Ejemplos de comandos de configuración

El STL060 soporta configuración por SMS y herramientas del fabricante, y la sintaxis exacta de los comandos puede variar según el firmware y la versión. Dado que los formatos de comando del fabricante y los parámetros especiales cambian con el tiempo, siga el manual oficial del dispositivo o la herramienta de configuración para los comandos exactos. Si utiliza comandos SMS proporcionados por el vendedor, conserve cualquier marcador de posición que el fabricante use como {{apn}}, {{apnu}} o {{apnp}} cuando sea requerido, y reemplácelos por los datos APN de su SIM.

Para configuración por SMS los patrones pueden incluir enviar un comando de servidor y un comando de puerto y luego guardar o reiniciar. Use la documentación oficial del STL para las cadenas de texto exactas si SMS es su método elegido.

## Notas de configuración

- Las versiones de firmware pueden cambiar la sintaxis de comandos y las funciones disponibles; confirme comandos y comportamientos con la documentación vigente del STL.
- Elija UDP o TCP según las condiciones de la red y las recomendaciones del firmware del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Use ajustes por SMS para configuración remota o inicial cuando la conectividad de datos aún no esté disponible, y luego pase a GPRS para reportes continuos.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica despliegues múltiples y el enrutamiento hacia el servidor.
- Probar un solo dispositivo primero y confirmar su visibilidad en Plaspy reduce el alcance de la resolución de problemas en implementaciones más grandes.

## Por qué usar Plaspy con esta configuración

Configurar el STL060 para reportar a Plaspy brinda a las organizaciones visibilidad sobre la ubicación de activos y reportes básicos de eventos usando un endpoint y puerto consistentes. La detección automática de protocolos de Plaspy reduce la necesidad de seleccionar manejadores de protocolo específicos por modelo durante la configuración, permitiéndole concentrarse en la preparación de la red y del dispositivo.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific setup details, firmware notes, SMS command syntax, and configuration tools refer to the manufacturer at http://siliconwireless.in because device configuration methods and firmware behavior can change over time.
