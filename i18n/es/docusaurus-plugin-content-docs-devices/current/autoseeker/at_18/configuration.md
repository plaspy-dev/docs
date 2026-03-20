---
slug: /autoseeker/at_18/configuration
id: at_18-configuration
sidebar_label: Configuration
title: Autoseeker - AT-18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Autoseeker AT-18 y que reporte a Plaspy con servidor compartido y detección automática de protocolo
keywords:
  - Configuración Autoseeker AT-18
  - Instalación Autoseeker AT-18
  - Configuración AT-18 Plaspy
  - Configuración rastreador GPS Autoseeker
  - Configuración servidor AT-18
  - Integración rastreador GPS Plaspy
  - Rastreo de vehículos AT-18
  - Configuración respaldo SMS AT-18
  - Rastreo de flotas Autoseeker AT-18
  - Configuración rastreador Plaspy
---

# Autoseeker - Configuración del AT-18

Esta página documenta el contexto público de configuración para usar el Autoseeker AT-18 con Plaspy. Se enfoca en los ajustes prácticos a nivel de plataforma necesarios para que el AT-18 envíe paquetes de posición y estado a los servidores de Plaspy, y explica qué verificar en el equipo y por parte del instalador antes de validar la conectividad. Use esta guía para alinear la configuración del fabricante con la información del servidor de Plaspy.

Plaspy emplea ajustes compartidos de servidor para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del distribuidor. El AT-18 es compatible con Plaspy desde fábrica y soporta reporte GPRS TCP con respaldo por SMS, además de alarmas por ignición, geocerca, exceso de velocidad y batería baja, las cuales usted deberá verificar con el manual del dispositivo durante la instalación.

## Resumen de configuración

Este proceso prepara el Autoseeker AT-18 para comunicarse de forma confiable con Plaspy y aparecer como un dispositivo activo en la plataforma. El objetivo principal es apuntar el rastreador al servidor de Plaspy, asegurar que el equipo tenga conectividad móvil y alimentación válidas, y confirmar que Plaspy reciba e interprete los paquetes.

- Configure el rastreador para enviar sus reportes GPRS TCP al punto de conexión del servidor de Plaspy.
- Valide que el dispositivo tenga una SIM activa y APN correcto para que funcione el reporte GPRS TCP.
- Habilite o confirme el comportamiento de respaldo por SMS para que las alertas persistan cuando no haya datos por paquetes.
- Guarde y aplique la configuración del fabricante, y reinicie el equipo si es necesario.
- Confirme que el dispositivo aparezca en Plaspy y que reporte posiciones y eventos esperados.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP
- detección automática de protocolo en Plaspy
- todos los dispositivos en Plaspy usan el mismo puerto para reportar

## Requisitos previos habituales

- El AT-18 debe estar alimentado e instalado según las instrucciones de cableado del fabricante.
- Una tarjeta SIM con un plan de datos móviles activo y el APN correcto configurado en el dispositivo.
- Acceso al método oficial de configuración de Autoseeker o a la herramienta del distribuidor para cambiar servidor, puerto y APN.
- El equipo debe soportar reporte GPRS TCP y opcionalmente respaldo por SMS según lo indicado en la descripción del producto.
- Una cuenta de Plaspy o acceso de administrador a la plataforma Plaspy para verificar que el dispositivo sea visible y empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT-18 envía paquetes periódicos GPRS TCP al punto de conexión del servidor de Plaspy, donde Plaspy detecta automáticamente el protocolo del rastreador y procesa la información de posición y alarmas. Los reportes por SMS funcionan como canal de respaldo para alertas críticas cuando no hay datos por paquetes.

- El dispositivo envía localización y telemetría por GPRS TCP a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy realiza la detección automática del protocolo y asigna los paquetes entrantes al flujo del dispositivo AT-18.
- Eventos de estado como ignición (ACC) encendido/apagado, exceso de velocidad, salida de geocerca y batería baja se reenvían a Plaspy para notificaciones y registro.
- El respaldo por SMS puede usarse para alertas inmediatas cuando los paquetes GPRS no se entregan.
- Plaspy agrega la información para visualización en mapa, notificaciones y reportes históricos.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de Autoseeker o al software que suministre el fabricante o el instalador.
2. En los ajustes de servidor del rastreador, ingrese d.plaspy.com o utilice la IP 54.85.159.138 tal como lo proporciona Plaspy.
3. Configure el puerto de reporte del dispositivo en 8888 para alinearlo con la configuración del servidor Plaspy.
4. Elija UDP o TCP si el rastreador requiere selección explícita de transporte; para el AT-18 normalmente se usa GPRS TCP, aunque UDP también puede estar soportado en algunos casos.
5. Configure el APN y los ajustes de datos del dispositivo para que el reporte GPRS pueda establecer conexión móvil.
6. Aplique o guarde la configuración y reinicie el equipo si la herramienta del fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy y que aparezcan en la plataforma los mensajes de posición y alarmas.

## Ejemplos de comandos de configuración

Los comandos y el formato exacto dependen del firmware de Autoseeker y de la herramienta de configuración que utilice. Algunas instalaciones emplean comandos por SMS, mientras que otras usan una aplicación de PC o móvil suministrada por el fabricante. Dado que la sintaxis varía según la versión de firmware y la herramienta, siga la documentación de Autoseeker o las indicaciones del instalador para establecer el servidor, IP, puerto, APN y transporte. Aquí no se incluyen comandos de dispositivo ya que son específicos de la interfaz de configuración de Autoseeker.

## Notas de configuración

- Las diferencias de firmware pueden modificar la sintaxis de los comandos y las opciones disponibles; siempre verifique la revisión del firmware antes de aplicar cambios.
- El AT-18 usa GPRS TCP como reporte primario con respaldo por SMS; prefiera TCP cuando lo indique el instalador y valide los formatos SMS si va a usar alertas de respaldo.
- Si la herramienta del fabricante permite usar dominio o IP para el servidor, use d.plaspy.com para un mantenimiento futuro más sencillo o 54.85.159.138 cuando el DNS esté restringido.
- Confirme e ingrese el APN correcto para la SIM instalada para asegurar que las sesiones de datos se establezcan de forma fiable.
- Al seleccionar el transporte, elija TCP para reporte GPRS TCP tal como suele soportar el AT-18, aunque UDP puede ser una opción en algunas configuraciones.

## Por qué usar Plaspy con esta configuración

Configurar el Autoseeker AT-18 para que reporte a Plaspy proporciona a las organizaciones una forma sencilla de centralizar la localización, el estado de ignición y el registro de alarmas para flotas y activos móviles. Con Plaspy manejando la detección automática de protocolos y los ajustes compartidos de servidor, instaladores y responsables pueden enfocarse en la instalación fiable del dispositivo y la configuración de la SIM en lugar de descubrir puntos de conexión a nivel de plataforma.

Learn more about Plaspy and how it can display and manage AT-18 device feeds at https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and manufacturer commands consult the official Autoseeker documentation at https://autoseekergps.com/ since manufacturer specifications and setup methods can change over time.
