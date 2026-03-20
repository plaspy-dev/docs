---
slug: /visiontek/87vtu/configuration
id: 87vtu-configuration
sidebar_label: Configuration
title: VisionTek - 87VTU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el VisionTek 87VTU con ajustes de servidor de Plaspy y pasos prácticos
keywords:
  - Configuración VisionTek 87VTU
  - Instalación VisionTek 87VTU
  - Configuración rastreador GPS VisionTek 87VTU
  - Configuración Plaspy 87VTU
  - Configuración de dispositivo Plaspy
  - Configuración servidor rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración rastreador para gestión de flotas
  - Guía integración rastreo GPS
  - Configuración servidor tracker VisionTek
---

# VisionTek - Configuración 87VTU

Esta página presenta la información pública necesaria para usar el rastreador VisionTek 87VTU con Plaspy. Reúne los ajustes públicos del servidor Plaspy y los pasos prácticos típicos para apuntar un equipo 87VTU a la plataforma Plaspy, de modo que la unidad pueda enviar paquetes de posición y estado para visibilidad y monitoreo de la flota.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el 87VTU para integrarse con Plaspy y consulte la documentación o herramientas de VisionTek para controles específicos del equipo.

## Visión general de la configuración

Configurar el 87VTU para Plaspy significa preparar el rastreador para enviar sus paquetes al endpoint de Plaspy y verificar que Plaspy reciba y decodifique el protocolo del dispositivo. El objetivo es lograr conectividad fiable, reportes precisos y visibilidad en la plataforma Plaspy para seguimiento de vehículos y monitoreo de eventos.

- Apuntar el dispositivo al endpoint del servidor Plaspy usando la dirección de servidor compartida o la IP.
- Seleccionar el método de transporte que soporte el firmware del dispositivo, UDP o TCP, en el puerto requerido.
- Guardar y aplicar la configuración mediante la herramienta de configuración VisionTek o el método soportado.
- Validar la conectividad y la recepción de paquetes en Plaspy para confirmar que el equipo está reportando.
- Usar funciones integradas como store and forward y track on demand para verificar informes históricos y bajo demanda.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el VisionTek 87VTU:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device sends packets

Todos los dispositivos Plaspy usan el mismo puerto y Plaspy intentará identificar automáticamente el protocolo del rastreador una vez que lleguen los paquetes al endpoint del servidor.

## Requisitos típicos antes de la instalación

- Una unidad VisionTek 87VTU con alimentación conectada y funcionando, ya sea con batería o con energía del vehículo.
- Conexión GSM activa y una SIM válida con datos habilitados si va a enviar paquetes por la red celular, ya que el equipo incluye un módem GSM cuatribanda.
- Cable USB o acceso a la herramienta oficial de configuración VisionTek para subir firmware y cambiar ajustes.
- Conocimiento de la versión de firmware del dispositivo y las credenciales de acceso requeridas por el software de configuración de VisionTek.
- Confirmación de los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) antes de aplicar la configuración.
- Antena externa opcional o verificación de la instalación si se requiere mejorar el rendimiento de señal.

## Cómo este rastreador se conecta a Plaspy

El VisionTek 87VTU envía datos de posición y estado en paquetes a un endpoint de servidor configurado. Al configurarlo para usar Plaspy, el rastreador dirigirá sus paquetes a la dirección y puerto de Plaspy para que la plataforma pueda decodificar y mostrar la telemetría entrante.

- El dispositivo transmite paquetes con ubicación, hora y rumbo al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta cualquiera de los dos en el puerto común.
- Plaspy realiza detección automática de protocolo y tratará de interpretar el formato de paquete del 87VTU al recibirlo.
- Las funciones de store and forward del 87VTU pueden entregar datos históricos tras interrupciones temporales de conectividad.
- Los reportes de eventos, como geocercas o cambios en entradas, se envían como paquetes al servidor compartido de Plaspy para que las alertas y el historial aparezcan en la plataforma.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración VisionTek mediante el puerto USB o las herramientas suministradas por el proveedor. Esta es la interfaz principal para cambiar los ajustes de servidor y transporte.
2. En los ajustes de servidor ingrese el endpoint de Plaspy por nombre de host o IP usando d.plaspy.com o 54.85.159.138.
3. Fije el puerto del servidor en 8888 como puerto destino para los paquetes salientes.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita para la conexión.
5. Aplique o guarde la configuración mediante la herramienta VisionTek y confirme que los cambios fueron aceptados por el equipo.
6. Reinicie el dispositivo si el firmware exige un reinicio para que los cambios de red entren en efecto.
7. Valide que el dispositivo reporte a Plaspy revisando los paquetes entrantes y el estado en la plataforma Plaspy; Plaspy detectará automáticamente el protocolo del rastreador.

## Ejemplos de comandos de configuración

El método exacto de configuración y los comandos varían según el firmware de VisionTek y la herramienta de configuración utilizada. Los dispositivos VisionTek comúnmente emplean una utilidad USB o software del proveedor para escribir los ajustes de servidor y transporte; algunas instalaciones pueden aceptar comandos SMS o serie si así lo provee el fabricante. Para la integración con Plaspy recuerde usar d.plaspy.com o 54.85.159.138 y el puerto 8888 y elegir UDP o TCP si es necesario, ya que Plaspy utiliza el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente.

Si la documentación de su proveedor incluye comandos SMS o serie explícitos para configurar el servidor, aplíquelos en el orden que indique VisionTek y conserve los marcadores de posición que proporcione el fabricante.

## Notas de configuración

- Las diferencias de firmware y de las herramientas pueden cambiar los nombres de menú exactos o la sintaxis de los comandos usados para establecer la dirección del servidor y el transporte; confirme siempre con la documentación de la herramienta de configuración VisionTek.
- Elegir TCP frente a UDP depende de la opción del firmware del dispositivo y de su preferencia por el comportamiento de entrega; ambos transportes son aceptados por Plaspy en el puerto 8888.
- Use el puerto USB del dispositivo y las utilidades VisionTek para actualizaciones de firmware y para capturar registros GSM y GPS cuando depure problemas de conectividad.
- Las funciones de store and forward son útiles durante la instalación para verificar que los datos históricos se reenvían una vez que se restablece la conexión.
- Guarde siempre una copia de su configuración final y anote la versión de firmware para que la resolución de problemas futura tenga contexto.

## Por qué usar Plaspy con esta configuración

Configurar el VisionTek 87VTU para reportar a Plaspy proporciona una forma sencilla de centralizar datos de ubicación y eventos del dispositivo para monitoreo de flota, verificación de rutas y supervisión operativa. Con ajustes de servidor compartidos y detección automática de protocolos, Plaspy simplifica el paso de integración para que instaladores y administradores puedan enfocarse en el despliegue y la validación en lugar de mapeos de servidor personalizados.

Para obtener más información sobre Plaspy y cómo funciona con el VisionTek 87VTU visite https://www.plaspy.com. Para detalles específicos más recientes sobre configuración del dispositivo, notas de firmware y comandos oficiales de configuración, consulte al fabricante en http://www.visiontek.co.in/ ya que las especificaciones del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
