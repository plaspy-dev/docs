---
slug: /navtelekom/s_2613/configuration
id: s_2613-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2613 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Navtelekom СИГНАЛ S-2613 con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - Navtelekom
  - configuración SIGNAL S-2613
  - instalación S-2613 Navtelekom
  - configuración servidor S-2613
  - configuración Plaspy S-2613
  - configuración rastreador GPS
  - instalación seguimiento vehicular
  - configuración gestión de flotas
  - rastreador GPS Navtelekom
  - guía instalación S-2613
---

# Navtelekom - СИГНАЛ S-2613 Configuración

Esta página recopila instrucciones públicas para integrar el rastreador Navtelekom СИГНАЛ S-2613 con la plataforma Plaspy. Está dirigida a instaladores técnicos y administradores de flotas para preparar el dispositivo y permitir la comunicación con Plaspy usando los ajustes de servidor públicos y los métodos de configuración habituales del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y realiza detección automática del protocolo en las conexiones entrantes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como NTC Configurator o DRC, por lo que siga esta página para los detalles relativos a Plaspy y consulte al fabricante para procedimientos específicos del equipo.

## Resumen de la configuración

Este proceso prepara al S-2613 para enviar posición y telemetría a Plaspy para que los dispositivos aparezcan en su panel de flota y generen eventos. El objetivo es configurar el endpoint de red del rastreador, confirmar el transporte y la conectividad, y validar que los reportes lleguen al servidor compartido de Plaspy.

- Configure el rastreador para reportar al endpoint del servidor Plaspy y confirme los ajustes de transporte.
- Asegúrese de que el dispositivo tenga alimentación, antenas y una SIM funcional si se requiere conectividad GSM.
- Valide que el rastreador alcance el endpoint de Plaspy y que Plaspy muestre la telemetría del dispositivo.
- Guarde y aplique la configuración en el dispositivo usando la herramienta del fabricante y, si es necesario, reinicie el rastreador.
- Confirme que los reportes de eventos, como cambios en entradas digitales y telemetría básica, sean visibles en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el rastreador o la herramienta de configuración del fabricante:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y realiza detección automática del protocolo para simplificar la configuración por dispositivo.

## Requisitos previos

- Confirme que el rastreador tiene alimentación y que las antenas GNSS y GSM externas requeridas están conectadas.
- Inserte y active una tarjeta SIM 2G compatible si la conectividad GSM es necesaria en su región.
- Acceda a la herramienta de configuración del fabricante como NTC Configurator para configuración local o DRC para gestión remota.
- Disponga de una cuenta Plaspy y permisos adecuados para ver dispositivos recién conectados en su organización.
- Tenga acceso físico o remoto al equipo para aplicar ajustes y realizar un reinicio si se requiere.

## Cómo se conecta este rastreador a Plaspy

El SIGNAL S-2613 se configura para enviar coordenadas GNSS y telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir datos de posición, eventos y estado del dispositivo. Plaspy captura los mensajes entrantes, decodifica el protocolo automáticamente y muestra la información en paneles y reportes de flota.

- El rastreador envía actualizaciones de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP según el firmware del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador para que el servidor acepte los mensajes sin necesidad de registrar el protocolo por dispositivo.
- Plaspy registra telemetría e informes de eventos como cambios en entradas digitales y telemetría analógica cuando el dispositivo los proporciona.
- La conexión y el reporte exitosos se validan visualizando el dispositivo en Plaspy y comprobando la actividad reciente de mensajes.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante, por ejemplo NTC Configurator o la herramienta remota del proveedor.
2. Confirme que el dispositivo tiene una SIM funcional, antenas instaladas y alimentación estable.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo server/host.
4. Establezca el puerto del servidor en 8888 como puerto de destino para la telemetría.
5. Elija UDP o TCP en la opción de transporte si el dispositivo requiere selección de transporte.
6. Aplique o guarde la configuración en la herramienta del fabricante y realice el reinicio del equipo si es necesario.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo y los mensajes recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos y formatos exactos dependen de la herramienta del fabricante, el firmware y el método de configuración empleado (USB, serial, SMS o software). Dado que Navtelekom proporciona configuración a través de NTC Configurator y herramientas remotas DRC, siga la documentación del fabricante y la interfaz de usuario para ingresar el host y el puerto del servidor. Si utiliza un método por SMS proporcionado por Navtelekom para ajustes básicos, siga la sintaxis de SMS publicada por el fabricante.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las etiquetas de menú y las opciones de transporte disponibles; verifique la versión de firmware antes de seguir pasos específicos por menú.
- Elija TCP o UDP según la fiabilidad de la red y sus preferencias; ambos son compatibles con Plaspy en el puerto 8888 y Plaspy detectará el protocolo automáticamente.
- Debido a que el S-2613 utiliza un módem 2G, confirme la cobertura GSM 2G regional y la provisión de la SIM antes del despliegue.
- Use NTC Configurator o DRC oficiales siempre que sea posible para evitar errores de sintaxis y preservar los ajustes y compatibilidad del firmware.
- Siempre confirme que el host y el puerto del servidor se ingresen exactamente como d.plaspy.com o 54.85.159.138 y que el puerto 8888 quede guardado para que el dispositivo reporte a Plaspy.

## Por qué usar Plaspy con esta configuración

Integrar el Navtelekom СИГНАЛ S-2613 con Plaspy ofrece un camino directo para incorporar posición GNSS, entradas y telemetría en una plataforma de gestión de flotas. Plaspy ingiere los mensajes enviados al endpoint del servidor compartido, aplica detección automática de protocolo y presenta ubicación, eventos y telemetría básica para monitoreo operativo y alertas.

Learn more about Plaspy and how it supports tracker integrations at https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer tools consult the official Navtelekom documentation at https://www.navtelecom.ru/ as device configuration methods and firmware behavior can change over time.
