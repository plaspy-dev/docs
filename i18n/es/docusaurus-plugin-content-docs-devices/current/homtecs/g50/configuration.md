---
slug: /homtecs/g50/configuration
id: g50-configuration
sidebar_label: Configuration
title: Homtecs - G50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del router Homtecs G50 para conectar con Plaspy usando servidor compartido y pasos prácticos
keywords:
  - Configuración Homtecs G50
  - Configurar Homtecs G50
  - Homtecs G50 Plaspy
  - Configuración servidor G50
  - Configuración plataforma G50
  - Configuración router Homtecs
  - Configuración rastreo flotas G50
  - Configuración dispositivo Plaspy
  - Ajustes servidor Plaspy
  - Configuración router IoT 4G
---

# Homtecs - G50 Configuración

Esta página presenta el contexto público de configuración para usar el Homtecs G50 con Plaspy. Describe los ajustes de servidor compartidos que Plaspy espera, explica el flujo general para apuntar un dispositivo al servidor de Plaspy y señala consideraciones prácticas basadas en la descripción del router G50. El objetivo es ayudar a integradores técnicos e instaladores a preparar el equipo para su conectividad y visibilidad en Plaspy.

El Homtecs G50 es un router industrial 4G LTE resistente con múltiples interfaces y funciones de gestión remota. Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la configuración de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe validar cualquier instrucción específica contra la documentación de Homtecs.

## Resumen de configuración

Preparar el G50 para comunicarse con Plaspy se centra en configurar el endpoint de red, elegir el transporte y verificar que el dispositivo pueda alcanzar la plataforma. El proceso de configuración consiste principalmente en asegurar que el G50 reporte al endpoint compartido de Plaspy y que el router sea estable y accesible a través del enlace móvil.

- Configure el equipo para enviar telemetría o datos encaminados al endpoint de Plaspy para que la plataforma pueda ingerir los mensajes del dispositivo.
- Seleccione el método de transporte compatible con el firmware del dispositivo y apunte los ajustes de transporte al servidor compartido de Plaspy.
- Valide la conectividad del G50 con Plaspy y confirme que el dispositivo aparezca en la plataforma.
- Use las herramientas del fabricante o la interfaz web/CLI integrada del G50 para aplicar y guardar la configuración.
- Verifique cualquier ajuste de APN o configuraciones a nivel de SIM en la conexión celular para permitir conexiones salientes a Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el G50 para que reporte a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device requirements  
- Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la configuración

- Alimentación estable para el G50 y para cualquier módulo o dispositivo serial conectado.
- Conectividad celular activa y una SIM provisionada para datos si usa el enlace de banda ancha móvil del router.
- Acceso a la interfaz de configuración de Homtecs o al software oficial del fabricante para el G50.
- Conocimiento de la versión de firmware del G50 y de las notas de la versión que puedan afectar el comportamiento de red o serial.
- Acceso administrativo para guardar ajustes y reiniciar el equipo después de la configuración.
- Acceso a la cuenta de Plaspy o contactos de la plataforma para confirmar la visibilidad del dispositivo tras la configuración.

## Cómo se conecta este dispositivo a Plaspy

Cuando se configura para reportar a Plaspy, el equipo envía sus datos al endpoint y puerto compartidos de Plaspy. Plaspy escucha en el mismo puerto para todos los dispositivos y detecta el protocolo que usa el dispositivo, lo que simplifica el enrutamiento en la plataforma.

- El G50 se configura para enviar mensajes salientes a d.plaspy.com o a 54.85.159.138.
- El tráfico se envía por el puerto 8888 usando el transporte seleccionado en el equipo (UDP o TCP).
- Plaspy recibe los datos del dispositivo y mapea los mensajes según el protocolo detectado.
- Una vez que llegan los mensajes, el dispositivo aparece en Plaspy para monitoreo e informes de eventos.
- Los operadores de la plataforma pueden verificar la telemetría y el estado de conectividad a través de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Homtecs, como la interfaz web del G50, la consola serial o la utilidad de configuración de Homtecs.
2. En los ajustes de red o servidor, ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o IP 54.85.159.138.
3. Establezca el puerto de destino en 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el equipo requiere seleccionar el transporte para conexiones salientes.
5. Aplique o guarde la configuración a través de la interfaz del G50 y confirme cualquier cambio pendiente.
6. Reinicie el equipo si el firmware requiere un reboot para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando los mensajes entrantes o la visibilidad del dispositivo en la plataforma.

## Ejemplos de comandos de configuración

El G50 soporta múltiples métodos de configuración y los comandos exactos o los campos de la interfaz pueden variar según el firmware y las herramientas del proveedor. Dado que los métodos de configuración varían entre las versiones de firmware de Homtecs, consulte la documentación oficial de Homtecs o la utilidad de configuración para la sintaxis precisa. Si utiliza una interfaz tipo línea de comandos o SMS proporcionada por Homtecs, traduzca el dominio o la IP y los valores de puerto desde la sección Ajustes del servidor Plaspy al formato de comandos del dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de menús, los transportes disponibles y los nombres exactos de los campos en la interfaz de configuración del G50.
- Si el equipo soporta tanto TCP como UDP, pruebe ambos en caso de problemas de conectividad; Plaspy detectará automáticamente el protocolo una vez que lleguen los mensajes.
- Las funciones de gestión remota del G50 pueden facilitar despliegues masivos, pero valide los perfiles guardados antes de realizar un despliegue amplio.
- Use las funciones de registro remoto y monitoreo del G50 para confirmar las conexiones salientes a d.plaspy.com o 54.85.159.138 y al puerto 8888.
- Mantenga a mano las notas de la versión del fabricante al actualizar el firmware, ya que el comportamiento de red y las opciones de configuración pueden cambiar.

## Por qué usar Plaspy con esta configuración

Usar el Homtecs G50 con Plaspy permite integrar conectividad celular robusta en Plaspy para obtener visibilidad del equipo y monitoreo operacional. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo reducen la necesidad de endpoints únicos por dispositivo, simplificando despliegues a escala de flotas y los flujos de trabajo de integración.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup information with Homtecs at http://www.homtecsm2m.com/
