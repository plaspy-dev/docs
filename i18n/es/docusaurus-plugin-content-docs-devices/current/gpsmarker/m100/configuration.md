---
slug: /gpsmarker/m100/configuration
id: m100-configuration
sidebar_label: Configuration
title: GPSMarker - M100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GPSMarker M100 y conectarlo a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - configuración GPSMarker M100
  - instalación GPSMarker M100
  - rastreador M100 Plaspy
  - configuración de rastreador GPS
  - ajustes servidor GPSMarker
  - configuración de seguimiento de vehículos
  - configuración GPRS para rastreador
  - configuración de rastreador Plaspy
  - configuración plataforma M100 GPS
  - guía de configuración GPSMarker
---

# GPSMarker - Configuración del M100

Esta página documenta el contexto público de configuración para usar el rastreador GPSMarker M100 con Plaspy. Resume los ajustes de servidor prácticos y los pasos recomendados para preparar el M100 y que sea visible en una implementación de Plaspy, basándose en detalles públicos del dispositivo. Use esta guía junto con el manual oficial de GPSMarker para procedimientos específicos del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos que soporta y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante, las herramientas disponibles y el comportamiento del firmware pueden variar según la revisión del hardware, la versión del firmware, el tipo de instalación y las herramientas del proveedor, por lo que siempre confirme los pasos específicos con la documentación del fabricante.

## Resumen de la configuración

Este proceso prepara el GPSMarker M100 para enviar su telemetría a Plaspy y hace que el dispositivo sea visible en la plataforma. El M100 soporta un protocolo GPRS abierto y ofrece sensores integrados y larga duración de batería, lo que lo hace adecuado para muchos casos de seguimiento de activos. Use los pasos a continuación para definir el endpoint del servidor, el transporte y verificar la conectividad.

- Configure el M100 para reportar al endpoint de Plaspy de modo que la ubicación y los eventos se reenvíen a la plataforma.
- Seleccione el método de transporte que soporte el dispositivo (UDP o TCP) y establezca el puerto requerido.
- Verifique la conectividad del dispositivo vía GPRS o el método de red soportado por el fabricante antes de finalizar.
- Aplique actualizaciones de firmware o use el cable de configuración del proveedor si es necesario para garantizar el comportamiento esperado.
- Confirme que el dispositivo aparezca en Plaspy y que informe las ubicaciones y eventos esperados.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP; elija el que requiera la herramienta de configuración del M100
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar

## Requisitos típicos antes de la instalación

- Acceso al método oficial de configuración del GPSMarker M100, como el software del proveedor, comandos SMS o cable USB para firmware y ajustes
- Un M100 alimentado y funcional con batería suficiente o alimentación externa para la configuración y pruebas
- Una tarjeta SIM activa y un plan de datos móviles que soporte GPRS si utilizará la opción celular del dispositivo
- Cobertura de red en la ubicación del dispositivo para permitir conexiones GPRS al servidor de Plaspy
- Acceso básico a una cuenta de Plaspy o credenciales de la plataforma para verificar que el dispositivo aparece y reporta correctamente
- Documentación del fabricante o notas de la versión del M100 para revisar comportamientos específicos del firmware

## Cómo se conecta este rastreador a Plaspy

El GPSMarker M100 se configura para enviar su telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir mensajes de ubicación y eventos y presentarlos en la plataforma. La detección automática de protocolos de Plaspy reduce la necesidad de seleccionar una cadena de protocolo específica en muchos casos, pero la elección del transporte (UDP o TCP) todavía es necesaria en algunos dispositivos.

- El M100 envía mensajes de posición y eventos al endpoint d.plaspy.com o directamente a la IP 54.85.159.138
- Los reportes se realizan por el puerto 8888 que Plaspy utiliza para todos los dispositivos soportados
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint
- Una vez conectado, Plaspy recibe actualizaciones de posición y eventos de sensores para su monitoreo y visualización

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del GPSMarker M100 provisto por el fabricante, como el software del proveedor, el conjunto de comandos SMS o el cable USB de configuración.
2. En la configuración del dispositivo, ingrese d.plaspy.com o alternativamente la IP del servidor 54.85.159.138 como endpoint de reporte.
3. Establezca el puerto de reporte en 8888, acorde con la política de puerto compartido de Plaspy.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia o requisitos de la red.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta o el procedimiento de comandos del fabricante.
6. Reinicie el M100 si la herramienta de configuración o el manual indican que es necesario para aplicar los cambios.
7. Valide que el dispositivo esté reportando a Plaspy revisando las actualizaciones de posición y eventos entrantes en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos o los pasos varían según el firmware del GPSMarker y el método de configuración del proveedor. GPSMarker ofrece varias formas de configurar los equipos, como herramientas por cable USB, comandos SMS o software de configuración dedicado. Dado que las herramientas y los conjuntos de comandos del fabricante pueden cambiar, consulte el manual del GPSMarker M100 para la sintaxis y la secuencia exactas necesarias para su versión de firmware.

Si su firmware admite configuración por SMS, el manual del proveedor listará las plantillas de comandos SMS y los marcadores como los valores de APN. Si usa un cable USB o una aplicación de configuración, siga los pasos de la interfaz para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto 8888, luego guarde y reinicie el dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de configuración disponibles y la sintaxis de los comandos; siempre revise las notas de la versión del M100 antes de aplicar ajustes.
- Elija UDP o TCP según la confiabilidad de la red y sus necesidades de monitoreo; UDP suele ser más liviano mientras que TCP aporta fiabilidad de conexión a costa de mayor sobrecarga.
- Plaspy detecta automáticamente el protocolo del rastreador, pero el dispositivo debe enviar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy ingiera los datos.
- Si utiliza configuración por SMS, conserve los marcadores como credenciales APN y reemplácelos por los valores de su operador cuando se lo indiquen.
- Mantenga un registro de los cambios y considere aplicar actualizaciones de firmware mediante el cable del proveedor si se recomienda para mejorar la interoperabilidad.

## Por qué usar Plaspy con esta configuración

Usar el GPSMarker M100 con Plaspy proporciona a las organizaciones una forma sencilla de centralizar los datos de ubicación y eventos de este equipo en una plataforma operativa. La larga duración de la batería del M100, sus sensores integrados y su protocolo GPRS abierto lo hacen una opción práctica para escenarios de seguimiento de activos y vehículos donde son importantes los reportes periódicos y las alertas por eventos.

Para conocer más sobre Plaspy y cómo maneja la ingesta y visualización de datos de dispositivos visite https://www.plaspy.com. Para los métodos de configuración específicos más actualizados, notas de firmware y referencias de comandos consulte el sitio oficial de GPSMarker en https://gpsmarker.ru/ ya que los detalles del fabricante y los pasos de instalación pueden cambiar con el tiempo.
