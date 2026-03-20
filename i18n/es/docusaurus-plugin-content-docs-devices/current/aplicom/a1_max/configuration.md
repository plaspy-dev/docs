---
slug: /aplicom/a1_max/configuration
id: a1_max-configuration
sidebar_label: Configuration
title: Aplicom - A1 MAX Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Aplicom A1 MAX y reportar a Plaspy con ajustes de servidor compartido y pasos de validación
keywords:
  - Aplicom A1 MAX configuración
  - instalación Aplicom A1 MAX
  - configuración servidor Aplicom A1 MAX
  - rastreador Aplicom Plaspy
  - configuración rastreador GPS A1 MAX
  - configuración telemática de flotas
  - configuración seguimiento de vehículos
  - integración Aplicom A1 MAX
  - configuración servidor Plaspy
  - guía configuración rastreador GPS
---

# Aplicom - Configuración A1 MAX

Esta página describe el contexto público de configuración para usar el rastreador GPS Aplicom A1 MAX con la plataforma de flotas Plaspy. Se centra en los valores de servidor compartidos y en el proceso general necesario para apuntar el dispositivo a Plaspy, de modo que el equipo pueda enviar telemetría y datos del vehículo para su visualización en la plataforma.

Plaspy utiliza un conjunto común de ajustes de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante para el A1 MAX pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione Aplicom o el integrador del vehículo. Use esta guía para los valores y el flujo de trabajo específicos de Plaspy, y consulte la documentación de Aplicom para procedimientos propios del dispositivo.

## Resumen de la configuración

El objetivo principal al configurar un Aplicom A1 MAX para Plaspy es asegurarse de que la unidad envíe su flujo de telemetría al endpoint y puerto compartidos de Plaspy, para que la plataforma pueda analizar y mostrar la ubicación, el estado del vehículo y los eventos. En la práctica, esto implica aplicar la dirección y el puerto del servidor de Plaspy en el rastreador, elegir el método de transporte si es necesario, guardar los ajustes y validar que los datos lleguen a Plaspy.

- Apunte el dispositivo al endpoint de Plaspy para que la telemetría se enrute a la plataforma.
- Use el puerto común de Plaspy para que la plataforma reciba y normalice mensajes de todos los dispositivos.
- Seleccione UDP o TCP como transporte en el dispositivo si la interfaz de configuración exige una elección.
- Guarde o aplique la configuración y utilice las herramientas del fabricante para subir ajustes o realizar una actualización OTA si está soportado.
- Verifique la conectividad y que el dispositivo aparezca en Plaspy con la telemetría y los eventos esperados.

## Ajustes de servidor de Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support UDP or TCP depending on device configuration options  
- automatic protocol detection in Plaspy so the platform identifies the tracker protocol without per device manual protocol selection

## Requisitos típicos antes de comenzar

- Confirme que el Aplicom A1 MAX tiene alimentación y está instalado o accesible para su configuración.
- Asegúrese de que el dispositivo tenga una conexión celular funcional y de que la SIM necesaria esté activa y autorizada para transmitir.
- Obtenga acceso al método o software de configuración oficial de Aplicom utilizado por instaladores o proveedores.
- Tenga a mano los ajustes del servidor Plaspy para ingresar: d.plaspy.com o 54.85.159.138 y puerto 8888.
- Verifique notas de versión de firmware y revisión de hardware con Aplicom o su integrador para identificar posibles diferencias en la configuración.
- Prepárese para validar la visibilidad del dispositivo en Plaspy una vez aplicados los cambios.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el A1 MAX envía su telemetría y mensajes de eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes entrantes en el mismo puerto para todos los dispositivos compatibles y aplica detección automática de protocolo, por lo que se requiere una selección mínima de protocolo por dispositivo.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Todo el tráfico dirigido a Plaspy se envía al puerto 8888, que Plaspy utiliza para conexiones de dispositivos.
- La selección de transporte puede ser UDP o TCP según la opción de configuración del dispositivo; elija el que soporte el equipo o el que prefiera el instalador.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes para su visualización en la plataforma.
- Una vez que se reciben los datos, Plaspy muestra la ubicación, el estado de eventos y otras telemetrías extraídas del flujo del dispositivo.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Aplicom o al software proporcionado por Aplicom o su instalador.
2. Introduzca la dirección del servidor Plaspy especificando d.plaspy.com o usando la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si la interfaz del A1 MAX solicita una selección de transporte.
5. Guarde o aplique la configuración usando la interfaz del equipo o la herramienta de gestión de Aplicom y realice el reinicio del dispositivo o la aplicación OTA requerida.
6. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con la telemetría y los informes de eventos esperados.

## Notas de configuración

- Las versiones de firmware del Aplicom A1 MAX y las funciones de software opcionales pueden afectar los nombres de menú y los pasos en la interfaz de configuración del dispositivo.
- Plaspy emplea el mismo puerto para todos los dispositivos compatibles, lo que simplifica el manejo del lado del servidor y reduce las diferencias por modelo en la plataforma.
- Considere las ventajas y desventajas entre UDP y TCP en el dispositivo; elija el transporte que se ajuste a sus necesidades de red y fiabilidad.
- Use las herramientas de Aplicom, el servicio de actualización OTA o el flujo de trabajo recomendado por el proveedor para aplicar cambios en lugar de métodos no documentados.
- Confirme cualquier integración con el vehículo, como mapeo CAN o interfaces seriales, con el instalador y la documentación de Aplicom antes del despliegue.

## Por qué usar Plaspy con esta configuración

Configurar el Aplicom A1 MAX para que reporte a Plaspy ofrece un camino directo hacia la visibilidad de la flota y la telemetría centralizada. Las organizaciones se benefician de un seguimiento de ubicación consolidado, visibilidad de eventos y la capacidad de combinar datos del vehículo con otros procesos de gestión de flotas en Plaspy.

Para obtener más información sobre Plaspy y cómo gestiona los datos entrantes de dispositivos, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y detalles de implementación más recientes del Aplicom A1 MAX, consulte la documentación oficial de Aplicom en https://www.aplicom.com/ donde pueden publicarse actualizaciones o guías del fabricante.
