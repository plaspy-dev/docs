---
slug: /gosafe/g717/configuration
id: g717-configuration
sidebar_label: Configuration
title: Gosafe - G717 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Gosafe G717 con Plaspy usando servidores compartidos y detección automática de protocolo
keywords:
  - Configuración Gosafe G717
  - Instalación Gosafe G717
  - Gosafe G717 Plaspy
  - Configuración servidor G717
  - Instalación rastreador GPS G717
  - Configuración rastreador Gosafe
  - Integración rastreador Plaspy
  - Configuración seguimiento vehicular
  - Configuración plataforma GPS
  - Software seguimiento G717
---

# Gosafe - Configuración del G717

Esta página explica cómo configurar públicamente el rastreador Gosafe G717 para que funcione con Plaspy. Aquí encontrará los ajustes de servidor compartido y los pasos prácticos para dirigir un G717 hacia Plaspy y así permitir que el dispositivo envíe posiciones y eventos a la plataforma. La guía se centra en la conectividad pública y en la información de servidor necesaria para la integración, asumiendo el uso del G717 según lo indicado por el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión del hardware, el tipo de instalación o las herramientas de configuración del proveedor. El G717 es un rastreador tipo plug and play para toma de corriente (encendedor) que soporta redes 2G, 3G y LTE, comunicación TCP y SMS, y puede configurarse por IP o dominio, por lo que su método de configuración específico dependerá del firmware y de la herramienta del fabricante que use.

## Resumen de configuración

Configurar un Gosafe G717 para Plaspy consiste principalmente en asegurar que el rastreador envíe su telemetría al endpoint y puerto compartido de Plaspy para que la plataforma pueda recibir y mostrar ubicaciones, eventos y alertas. Use el método de configuración del G717 provisto por Gosafe o su instalador para establecer el dominio o la IP del servidor y el tipo de transporte, y luego valide que el dispositivo reporte correctamente a Plaspy.

- Apunte el dispositivo al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma
- Configure el transporte del dispositivo en TCP o UDP según corresponda y establezca el puerto que usa Plaspy
- Asegúrese de que el dispositivo tenga conectividad móvil activa y la provisión adecuada para datos o configuración por SMS
- Guarde la configuración y reinicie el rastreador si la herramienta del fabricante lo requiere
- Verifique que el dispositivo aparezca en Plaspy y envíe actualizaciones de ubicación y eventos

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note that Plaspy uses the same port for all supported devices

## Requisitos habituales antes de la instalación

- Un Gosafe G717 alimentado y funcionando, instalado en la toma de corriente del vehículo
- Una SIM activa con capacidad de datos o SMS según lo requiera el dispositivo y la disponibilidad de la red
- Acceso al método oficial de configuración de Gosafe o a la herramienta del proveedor para el G717
- Conocer si la herramienta de instalación requiere configurar por IP o por dominio y la selección del transporte
- Confirmación de la versión de firmware del dispositivo si se necesita soporte del instalador o comandos específicos
- Un plan de prueba para validar que el dispositivo reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888

## Cómo se conecta este rastreador a Plaspy

El G717 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartido de Plaspy, de modo que Plaspy pueda ingerir, parsear y mostrar la telemetría del dispositivo. Plaspy aceptará conexiones del rastreador en el puerto 8888 y determinará automáticamente el protocolo del dispositivo, por lo que normalmente no se requiere seleccionar un protocolo por dispositivo en la plataforma.

- La telemetría del dispositivo se envía a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del equipo y el comportamiento de la red
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Los mensajes de evento e informes de posición se reenvían a la plataforma Plaspy para visualización
- La validación en Plaspy confirma que el dispositivo está en línea y reportando según lo esperado

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Gosafe o al software del proveedor para el G717 (comandos SMS, herramienta web o utilitario USB/serie según la herramienta del instalador).
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la pantalla de configuración de servidor del dispositivo o en la configuración del APN según corresponda.
3. Establezca el puerto de destino en 8888 según lo requiere Plaspy.
4. Seleccione UDP o TCP si la herramienta de configuración del G717 solicita elegir un transporte.
5. Aplique o guarde la configuración en la herramienta Gosafe para confirmar los ajustes en el dispositivo.
6. Reinicie el G717 si las instrucciones del fabricante indican que es necesario para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en línea y la telemetría reciente en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el G717 varían según el firmware y el método de configuración del fabricante. Dependiendo de la herramienta del instalador, puede configurar el servidor por SMS, mediante una utilidad de PC o desde un portal del proveedor. Al establecer la dirección del servidor o la IP, use d.plaspy.com o 54.85.159.138 y configure el puerto en 8888, eligiendo UDP o TCP si el dispositivo requiere selección de transporte. Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

Si necesita ejemplos específicos de SMS o comandos para el G717, consulte la guía de configuración oficial de Gosafe incluida con el dispositivo o la documentación de la herramienta del proveedor para la sintaxis exacta de los comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los comandos exactos o los nombres de los menús de configuración; verifique la versión de firmware antes de aplicar las instrucciones.
- Elegir TCP frente a UDP puede afectar el comportamiento de entrega en algunas redes móviles; pruebe ambos si encuentra problemas de conectividad.
- El G717 admite configuración por IP o por dominio, por lo que puede usar tanto d.plaspy.com como 54.85.159.138 según prefiera su herramienta de configuración.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse.
- Si su instalador usa configuración por SMS, confirme que la SIM soporta mensajes de texto y que los comandos SMS están habilitados en el firmware del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G717 con Plaspy ofrece un camino sencillo para obtener visibilidad del vehículo y monitoreo de eventos. La forma plug and play del G717, junto con su soporte de redes móviles y reporte de eventos, lo hacen adecuado tanto para flotas como para vehículos particulares. Apuntar el dispositivo a Plaspy con los ajustes de servidor compartidos proporciona acceso centralizado a ubicaciones, alertas y telemetría operativa en la plataforma.

To learn more about Plaspy and how it collects and displays device telemetry visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions consult the official Gosafe website https://gosafesystem.com/ to verify that commands and configuration methods match your device revision.
