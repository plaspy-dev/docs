---
slug: /aquila/obd_ii/configuration
id: obd_ii-configuration
sidebar_label: Configuration
title: Aquila - OBD II Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Aquila OBD II con Plaspy, con ajustes de servidor y pasos prácticos de instalación
keywords:
  - Configuración Aquila OBD II
  - Instalación Aquila OBD II
  - Aquila OBD II Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador OBD II GPS
  - Configuración rastreador diagnóstico vehicular
  - Configuración rastreador gestión de flotas
  - Configuración OBD II Plaspy
  - Ajustes servidor Aquila
  - Guía Aquila OBD II
---

# Aquila - Configuración OBD II

Esta página describe el contexto público de configuración para usar el rastreador Aquila OBD II con la plataforma Plaspy. Reúne los ajustes prácticos del lado de la plataforma que debe aplicar para que el dispositivo entregue datos de ubicación y OBD a Plaspy para visualización y análisis. Use esta guía junto con la documentación del fabricante para completar la instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Esta página se centra en la información del endpoint de Plaspy y en el flujo de trabajo común que seguirá al integrar el Aquila OBD II.

## Visión general de la configuración

El objetivo de la configuración es preparar el Aquila OBD II para que se comunique de forma fiable con la plataforma Plaspy y usted pueda ver los datos de ubicación y diagnóstico del vehículo en su cuenta. La configuración normalmente implica apuntar el dispositivo al servidor de reporte, confirmar las opciones de transporte y validar que el rastreador envíe datos a Plaspy.

- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos GPRS se reenvíen a Plaspy para su procesamiento
- Seleccione el método de transporte compatible con el dispositivo y con Plaspy, UDP o TCP, usando el puerto compartido de Plaspy
- Verifique la conectividad celular y la configuración del APN para que el rastreador pueda abrir una sesión GPRS con el servidor
- Aplique y guarde la configuración en el dispositivo y confirme que reporta la ubicación y parámetros OBD a Plaspy
- Valide que Plaspy reciba y reconozca el protocolo del dispositivo para que la telemetría y los eventos aparezcan en la plataforma

## Ajustes del servidor Plaspy

Configure el Aquila OBD II para que reporte al servidor de Plaspy usando estos ajustes públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que siempre debe usar el puerto 8888 para el reporte a Plaspy.

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBD II del vehículo para conectar y alimentar el rastreador
- Una SIM activa y compatible con datos y el APN correcto configurado para conectividad GPRS
- Acceso a la herramienta oficial de configuración de Aquila o al método de configuración por SMS/OTA que provea el fabricante
- Conocimiento de la versión de firmware del dispositivo y de cualquier menú o formato de comando SMS específico del proveedor
- Una cuenta de prueba o visibilidad del dispositivo en Plaspy para confirmar el reporte después de la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Aquila OBD II utiliza el enlace celular del vehículo para enviar telemetría GPS y OBD al endpoint compartido del servidor y puerto de Plaspy. Plaspy recibe los datos y los asigna al protocolo de dispositivo correspondiente mediante detección automática, de modo que la información esté disponible en la plataforma.

- El rastreador abre una sesión GPRS y envía paquetes a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte de datos puede usar UDP o TCP según la configuración del dispositivo y las condiciones de red
- Plaspy inspecciona automáticamente el tráfico entrante y detecta el protocolo del rastreador para su análisis
- La ubicación, eventos de movimiento y diagnósticos OBD II se reenvían a la plataforma para monitoreo e informes
- El diseño de puerto compartido significa que el mismo puerto 8888 se usa para todos los dispositivos que reportan a Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software para Aquila OBD II, como la herramienta del proveedor, comandos SMS o el canal de configuración OTA.
2. En los ajustes de servidor del dispositivo introduzca el dominio d.plaspy.com o la IP 54.85.159.138 como endpoint de reporte.
3. Configure el puerto de reporte en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar un protocolo de transporte.
5. Configure cualquier APN y parámetros de la SIM necesarios para que el rastreador pueda establecer una sesión de datos GPRS.
6. Aplique o guarde la configuración y envíe cualquier comando de confirmación específico del proveedor si la herramienta de Aquila lo solicita.
7. Reinicie el equipo si el fabricante lo recomienda para aplicar los cambios.
8. Valide que el dispositivo reporte a Plaspy y que la plataforma muestre el dispositivo como activo y parseando los datos correctamente.

## Ejemplos de comandos de configuración

El Aquila OBD II puede configurarse de distintas maneras según la herramienta del fabricante, el conjunto de comandos SMS o el firmware. Los comandos exactos y la sintaxis varían según el firmware y la revisión de producción, por lo que consulte la documentación oficial de Aquila para los comandos precisos. Al introducir ajustes, asegúrese de que el dispositivo apunte a d.plaspy.com o 54.85.159.138 y al puerto 8888 y de elegir UDP o TCP si es necesario.

Si su proveedor ofrece configuración por SMS, el SMS o la herramienta normalmente incluirá campos para servidor, puerto, transporte y APN. Siempre conserve el dominio o la IP del servidor, el puerto 8888 y la elección del transporte al preparar los comandos de configuración.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los menús disponibles y la sintaxis de comandos SMS; confirme los pasos exactos con la documentación de Aquila para su versión de firmware
- La selección entre TCP y UDP puede influir en el comportamiento de entrega y la fiabilidad de la red; elija el transporte que se alinee con sus necesidades operativas y la recomendación del dispositivo
- El APN y los parámetros de la SIM deben ser correctos para que el dispositivo abra una sesión GPRS; los operadores exigen credenciales de APN coincidentes
- La configuración por aire (OTA) puede estar disponible en algunas revisiones de firmware de Aquila; use OTA solo cuando el proveedor lo respalde y documente
- Plaspy detecta automáticamente el protocolo del dispositivo, así que el enfoque principal es configurar correctamente la dirección del servidor y el puerto

## Por qué usar Plaspy con esta configuración

Usar el Aquila OBD II con Plaspy permite a las organizaciones combinar ubicación del vehículo y diagnósticos a bordo en una sola plataforma. Esta visibilidad integrada ayuda en el monitoreo operativo, programas de mantenimiento preventivo y análisis de flotas al entregar posición GPS, eventos de movimiento y parámetros OBD a Plaspy para su análisis.

Para saber más sobre cómo Plaspy puede gestionar datos GPS y OBD II para su flota visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo y detalles de firmware más recientes del Aquila OBD II, verifique la información en el sitio del fabricante https://www.itriangle.in/ ya que la documentación del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
