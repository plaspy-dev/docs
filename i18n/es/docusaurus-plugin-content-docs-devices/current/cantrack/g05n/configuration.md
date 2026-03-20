---
slug: /cantrack/g05n/configuration
id: g05n-configuration
sidebar_label: Configuration
title: CanTrack - G05N Configuration
sidebar_class_name: menu_item_tracker
description: Configure el CanTrack G05N para integrarlo con Plaspy, con ajustes de servidor, transporte y una lista práctica de verificación
keywords:
  - Configuración CanTrack G05N
  - Configuración G05N
  - Configuración G05N Plaspy
  - Configuración rastreador GPS CanTrack
  - Configuración servidor G05N
  - Configuración rastreador Plaspy
  - Configuración rastreador de vehículos
  - Rastreo de flotas G05N
  - Guía de instalación G05N
  - Configuración telemetría G05N
---

# CanTrack - Configuración del G05N

Esta página describe el contexto público de configuración para usar el rastreador vehicular CanTrack G05N con la plataforma Plaspy. Se concentra en los ajustes prácticos y públicamente disponibles que necesitará para apuntar un dispositivo G05N a Plaspy y verificar una integración exitosa. El G05N es un rastreador cableado que reporta vía GSM/GPRS TCP/IP y SMS, y se usa comúnmente en gestión de flotas, antirobo y flujos de trabajo telemáticos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siga la guía a continuación y consulte la documentación oficial de CanTrack para instrucciones específicas del dispositivo.

## Visión general de la configuración

Esta configuración prepara el G05N para comunicarse con Plaspy definiendo el endpoint de reporte, el transporte y el comportamiento del dispositivo, de modo que las posiciones y los eventos lleguen a la plataforma. El objetivo es proporcionar los datos del servidor Plaspy, seleccionar el transporte si es necesario y validar que el dispositivo informe correctamente tras la configuración.

- Configure el dispositivo para que reporte al endpoint y puerto del servidor Plaspy
- Seleccione UDP o TCP como transporte si el dispositivo requiere una elección explícita
- Guarde y aplique los ajustes para que el G05N empiece a reportar vía GPRS y use SMS como respaldo
- Verifique la conectividad y los mensajes entrantes en Plaspy para confirmar la detección del protocolo
- Valide que eventos clave como encendido, alarma, SOS y subida de puntos almacenados funcionen correctamente

## Ajustes del servidor Plaspy

Use los siguientes ajustes de servidor Plaspy al configurar el CanTrack G05N. Estos son los valores públicos que Plaspy requiere.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y que Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

## Requisitos habituales antes de la instalación

- El dispositivo debe estar alimentado y cableado según la guía del instalador para tener alimentación estable del vehículo
- Una SIM GSM activa con datos y capacidad de SMS para reporte por GPRS/TCP/IP y respaldo vía SMS
- Acceso al método oficial de configuración CanTrack, como el software del fabricante, comandos SMS o una herramienta de configuración proporcionada por el vendedor
- Visibilidad básica de GNSS durante las pruebas iniciales para que el dispositivo pueda obtener posición en los primeros reportes
- Acceso a su cuenta en Plaspy y un lugar en la plataforma para validar los datos entrantes del dispositivo
- Acceso físico al cableado o a los controles del inmovilizador si se habilitarán funciones remotas

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G05N envía ubicación y telemetría al servidor Plaspy usando GPRS TCP/IP, con SMS como canal secundario. El dispositivo se apunta al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir las actualizaciones de posición, alarmas y respuestas a comandos remotos.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Seleccione UDP o TCP en el dispositivo si la configuración requiere elegir el transporte
- Plaspy recibe las conexiones entrantes en el puerto compartido y detecta automáticamente el protocolo del dispositivo
- Eventos del vehículo como cambios de encendido, exceso de velocidad y SOS se envían a Plaspy para geolocalización y alertas
- Los puntos GPS almacenados durante pérdida de señal se cargan en Plaspy cuando se restablece la conectividad

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración CanTrack proporcionado por el fabricante o distribuidor.
2. Ubique el área de ajustes de servidor o APN en la herramienta de configuración o en la lista de comandos SMS.
3. Ingrese el servidor Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138.
4. Configure el puerto de reporte en 8888 para todo el reporte hacia Plaspy.
5. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
6. Aplique o guarde la configuración y, si el fabricante lo indica, reinicie el dispositivo para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy y que la plataforma muestre posición y datos de eventos del dispositivo.

## Ejemplos de comandos de configuración

Los comandos exactos y los pasos de configuración varían según la herramienta del fabricante, el firmware y el método que utilice para configurar el G05N. Los dispositivos CanTrack suelen ser configurables mediante el software del fabricante, comandos SMS o una utilidad USB/serial del proveedor. Al configurar el transporte y el endpoint deberá ingresar d.plaspy.com o 54.85.159.138, establecer el puerto 8888 y seleccionar UDP o TCP según lo requiera la herramienta específica. Siga la referencia de comandos oficial de CanTrack o la utilidad de configuración para la sintaxis precisa según su versión de firmware.

## Notas sobre la configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos y los menús de configuración, por lo que debe confirmar los comandos con la documentación actual de CanTrack.
- Elija TCP o UDP según la recomendación del instalador y el comportamiento de la red; ambos transportes son compatibles con Plaspy, pero la estabilidad puede variar según la operadora.
- El G05N soporta reporte por SMS como respaldo, por lo que valide el acceso a comandos SMS si el reporte por datos falla durante las pruebas.
- El almacenamiento en búfer de puntos en el dispositivo se cargará automáticamente cuando se restablezca GPRS, pero debe confirmar el reporte en vivo después de la configuración.
- Dependiendo del firmware, puede ser necesario reiniciar el dispositivo para aplicar los ajustes; incluya reinicios como parte del flujo de validación.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G05N con Plaspy centraliza el rastreo en tiempo real, las alertas y las capacidades de comando remoto en una sola plataforma para gerentes de flota, proveedores de servicio y propietarios de vehículos. La combinación de reporte primario por GPRS TCP/IP, respaldo por SMS y almacenamiento local de puntos ayuda a preservar el historial de rutas y garantiza que eventos críticos como SOS o cortes de alimentación lleguen al sistema de monitoreo.

To learn more about Plaspy and how it ingests device data visit https://www.plaspy.com. For the latest device specific commands firmware notes and manufacturer setup guidance verify details on the CanTrack website https://www.cantrackgps.com/ since manufacturer specifications and configuration methods can change over time.
