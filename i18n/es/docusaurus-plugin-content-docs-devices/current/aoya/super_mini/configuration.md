---
slug: /aoya/super_mini/configuration
id: super_mini-configuration
sidebar_label: Configuration
title: AoYa - super mini Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador AoYa super mini y reportar ubicación y eventos a Plaspy usando ajustes de servidor compartido
keywords:
  - Configuración AoYa super mini
  - Instalación AoYa super mini
  - Configuración servidor AoYa super mini
  - Configuración rastreador AoYa para Plaspy
  - Configuración de dispositivos Plaspy
  - Instalación rastreador GPS AoYa
  - Configuración GPS super mini
  - Configuración seguimiento vehicular Plaspy
  - Seguimiento de flotas AoYa super mini
  - Integración AoYa super mini
---

# AoYa - super mini Configuración

Esta página explica el contexto público de configuración para usar el rastreador AoYa super mini con la plataforma Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere y describe, en términos generales, cómo preparar el equipo para que reporte ubicación y estado a Plaspy. El contenido se basa en la descripción del dispositivo y la guía pública disponible, y está pensado para ayudar a usuarios técnicos e instaladores a completar los pasos básicos de integración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AoYa super mini suele ofrecer opciones de configuración por SMS y por software del fabricante y admite reporte mediante red móvil; esta página resume esos conceptos públicos sin reproducir comandos específicos del dispositivo.

## Resumen de configuración

Preparar el AoYa super mini para su uso con Plaspy se centra en configurar el equipo para que envíe sus datos de ubicación y eventos al endpoint de servidor compartido de Plaspy, validar la conectividad y asegurarse de que el dispositivo aparezca en la plataforma. Cuando están disponibles, los fabricantes facilitan comandos SMS o software de configuración para ajustar el APN, la dirección del servidor, el modo de transporte y otros parámetros operativos. Siga la documentación del fabricante para la sintaxis exacta y cualquier contraseña requerida por el dispositivo.

- Configure el equipo para que reporte al endpoint del servidor de Plaspy y así Plaspy pueda recibir posiciones y eventos.
- Ingrese ajustes de conectividad móvil válidos, como APN y credenciales del operador si son necesarias.
- Seleccione el modo de transporte (UDP o TCP) si el rastreador requiere una selección manual.
- Guarde y aplique la configuración, luego confirme que el dispositivo es visible y está reportando en Plaspy.
- Valide el comportamiento del dispositivo tras la instalación para confirmar que alarmas y eventos de geocerca se entregan correctamente.

## Ajustes de servidor de Plaspy

Utilice los siguientes ajustes públicos de servidor de Plaspy al configurar el rastreador. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador entrante, por lo que aplique estos valores de forma consistente:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming connections

## Requisitos típicos antes de la instalación

- Dispositivo alimentado y accesible para configuración (batería cargada o conectado a la alimentación del vehículo).
- SIM activa con datos móviles habilitados si el rastreador reporta por red celular y el modelo requiere SIM.
- APN conocido del operador móvil que utilizará el dispositivo.
- Acceso al método oficial de configuración del fabricante, como comandos SMS o software del proveedor.
- Información del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponible para ingresar durante la configuración.
- Conocimiento administrativo de cualquier contraseña del dispositivo o paso de seguridad que el fabricante requiera para aplicar ajustes.

## Cómo se conecta este rastreador a Plaspy

El AoYa super mini se configura para enviar sus mensajes de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar y mostrar los datos del dispositivo. El endpoint de Plaspy recibe el flujo de datos entrante y mapea los mensajes del dispositivo a la plataforma mediante detección automática del protocolo.

- El equipo se ajusta para reportar a d.plaspy.com o al endpoint IP equivalente de Plaspy.
- Todos los mensajes se dirigen al puerto 8888 para que la plataforma reciba la telemetría en un puerto compartido.
- Plaspy detecta si el rastreador comunica por UDP o TCP y gestiona el protocolo de forma automática.
- Una vez activo el reporte, Plaspy muestra ubicación, eventos y actualizaciones de estado en la plataforma para su monitoreo.
- La conectividad y la entrega de mensajes se pueden validar comprobando el estado del dispositivo dentro de Plaspy tras la configuración.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software proporcionado para el AoYa super mini.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto en 8888 según lo requiere Plaspy.
4. Seleccione el modo de transporte UDP o TCP si el dispositivo solicita selección de transporte.
5. Ajuste la configuración de la red móvil, como el APN y cualquier credencial del operador, mediante el método del fabricante.
6. Guarde o aplique la configuración en el dispositivo y espere a que establezca conexión con Plaspy.
7. Valide que el dispositivo reporte a Plaspy y aparezca como activo en la plataforma.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar los comandos disponibles, la disposición de menús o los pasos requeridos; confirme siempre el procedimiento con el manual del dispositivo.
- Algunos instaladores prefieren la configuración por SMS y otros usan el software del fabricante; ambos métodos son comunes para este modelo según la guía pública.
- Considere las implicaciones de elegir UDP frente a TCP para el reporte según las necesidades de la instalación; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Confirme la exactitud del APN y de las credenciales del operador antes de aplicar los ajustes del servidor para evitar problemas de conectividad.
- Mantenga un registro de cualquier ajuste específico del dispositivo y verifique después de actualizaciones de firmware o mantenimiento.

## Por qué usar Plaspy con esta configuración

Usar el AoYa super mini con Plaspy ofrece un camino sencillo hacia la visibilidad de la flota y el monitoreo operativo al enrutar los mensajes del dispositivo al endpoint compartido de Plaspy. Centralizar el reporte de dispositivos en Plaspy simplifica la gestión porque Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y maneja automáticamente la detección de protocolo, reduciendo la carga de configuración por dispositivo en el lado de la plataforma.

Para obtener más información sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Para conocer los métodos de configuración más actuales específicos del dispositivo, el comportamiento de firmware y los detalles del fabricante, verifique la documentación más reciente en el sitio oficial de AoYa http://www.aoyagps.com/ ya que los procedimientos del proveedor y el firmware pueden cambiar con el tiempo.
