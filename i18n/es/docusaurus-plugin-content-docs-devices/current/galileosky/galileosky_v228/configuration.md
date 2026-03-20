---
slug: /galileosky/galileosky_v228/configuration
id: galileosky_v228-configuration
sidebar_label: Configuration
title: GalileoSky - GALILEOSKY V2.2.8 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GALILEOSKY V2.2.8 con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - GalileoSky
  - GALILEOSKY V2.2.8
  - Configuración GALILEOSKY
  - Instalación GALILEOSKY
  - Compatibilidad Plaspy
  - Configuración de rastreador GPS
  - Configuración de seguimiento vehicular
  - Guía de configuración de servidor
  - Rastreador GLONASS GPS
  - Configuración de plataforma de rastreo
---

# GalileoSky - Configuración GALILEOSKY V2.2.8

Esta página detalla el contexto público de configuración para usar el rastreador GLONASS GPS GALILEOSKY V2.2.8 con Plaspy. El enfoque está en los ajustes prácticos del servidor y el flujo de configuración necesarios para enrutar los datos del dispositivo hacia Plaspy, y explica cómo preparar el equipo para que sea visible en la plataforma, mientras que los cambios en el dispositivo se realizan con las herramientas del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GALILEOSKY V2.2.8 admite monitoreo en línea, carga de archivos offline por USB, configuración por SMS y GPRS, subida de fotos por GPRS, reporte a dos servidores y actualizaciones de firmware remotas por GSM; utilice estas capacidades junto con los ajustes de servidor de Plaspy que se indican abajo.

## Resumen de la configuración

Este proceso prepara el GALILEOSKY V2.2.8 para enviar datos de posición y eventos a Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo es asegurar conectividad fiable, selección correcta del transporte y visibilidad en Plaspy una vez que el dispositivo esté en línea.

- Configure el equipo para reportar al endpoint del servidor de Plaspy de modo que los datos lleguen a su cuenta Plaspy
- Valide la conexión de datos móviles o la vía de configuración para que el rastreador pueda establecer GPRS cuando sea necesario
- Seleccione UDP o TCP en el dispositivo si el fabricante exige elegir transporte
- Guarde y aplique los ajustes, luego confirme la visibilidad del dispositivo en la aplicación Plaspy tras un reinicio o la primera transmisión
- Use las herramientas de carga offline o USB del dispositivo cuando la configuración de la red requiera diagnóstico local

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy behavior: all devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la configuración

- Dispositivo encendido y accesible para configuración, con batería interna cargada si aplica
- SIM activa con datos o GPRS habilitado si se utilizará monitoreo en línea o subida de fotos
- Datos de APN y parámetros del operador disponibles para que el rastreador establezca conexiones GPRS
- Acceso al método oficial de configuración de GalileoSky, como comandos SMS, herramienta de configuración GPRS o interfaz USB
- Conocimiento básico de la versión de firmware del dispositivo y de las herramientas del proveedor necesarias para cambiar los ajustes del servidor
- Opcional: tarjeta microSD insertada si planea almacenar fotos o archivos offline pesados

## Cómo se conecta este rastreador a Plaspy

El GALILEOSKY V2.2.8 se configura para reportar ubicación, eventos y opcionalmente fotos a Plaspy apuntando el endpoint de reporte del dispositivo al servidor y puerto compartidos de Plaspy. Una vez configurado, Plaspy identifica automáticamente el protocolo del rastreador para procesar los datos sin necesidad de seleccionar el protocolo por dispositivo en la plataforma.

- El rastreador se programará para enviar datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Puede elegir transporte UDP o TCP en el equipo si el firmware solicita una selección
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes del dispositivo a la plataforma
- Los reportes de eventos, las actualizaciones de monitoreo en línea y las subidas de fotos por GPRS se enrutan al endpoint de Plaspy
- El reporte a dos servidores, soportado por el dispositivo, puede usarse como redundancia junto al endpoint de Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración de GalileoSky o al software para GALILEOSKY V2.2.8 mediante comandos SMS, la utilidad del proveedor o conexión USB
2. Introduzca el endpoint del servidor Plaspy como d.plaspy.com o use la IP 54.85.159.138 si la herramienta lo requiere
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto en todos los dispositivos compatibles)
4. Seleccione UDP o TCP como transporte si el dispositivo o firmware solicita elegir uno
5. Configure el APN y los parámetros del operador de la SIM necesarios para GPRS o conexión de datos
6. Aplique o guarde los cambios de configuración en el dispositivo y realice un reinicio si el fabricante lo solicita
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y los primeros mensajes de telemetría en la plataforma

## Ejemplos de comandos de configuración

Los comandos exactos y su formato varían según el firmware de GalileoSky y el método de configuración (SMS, utilidad GPRS o USB). Los fabricantes suelen publicar listas de comandos SMS y utilidades de configuración; consulte la documentación oficial de GalileoSky para la sintaxis de los comandos usados para establecer dominio de servidor, IP, puerto, transporte y valores de APN. Si utiliza configuración por SMS, el manual del proveedor mostrará la plantilla exacta para actualizar servidor y APN.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos SMS o la interfaz de la utilidad de configuración; verifique siempre las notas de la versión de firmware
- Elija UDP o TCP en función de la fiabilidad y el comportamiento del firmware; UDP suele ser más liviano mientras que TCP puede ofrecer garantías de entrega para ciertos tipos de mensajes
- El dispositivo admite reporte a dos servidores; configure una de esas entradas apuntando a Plaspy en d.plaspy.com o 54.85.159.138 puerto 8888
- El equipo soporta actualización remota de firmware por GSM, por lo que conviene actualizar al firmware estable más reciente antes de despliegues masivos
- Use los modos de carga offline por USB y las funciones de diagnóstico cuando problemas de red o de APN requieran solución local

## Por qué usar Plaspy con esta configuración

Usar el GALILEOSKY V2.2.8 con Plaspy ofrece a las organizaciones una forma sencilla de integrar un dispositivo GLONASS/GPS que soporta monitoreo en línea, subida de fotos por GPRS y reporte a dos servidores. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación al eliminar la necesidad de manejar protocolos por dispositivo en la plataforma.

Para más información sobre Plaspy y cómo puede recibir datos de rastreadores GALILEOSKY visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, el comportamiento del firmware y los detalles oficiales de configuración consulte la web del fabricante en https://galileosky.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
