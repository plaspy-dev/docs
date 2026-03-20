---
slug: /arusnavi/arnavi_l2/configuration
id: arnavi_l2-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi L2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS Arnavi L2 de Arusnavi y conectarlo a Plaspy para seguimiento en tiempo real
keywords:
  - Configuración Arusnavi Arnavi L2
  - Instalación Arnavi L2
  - Configurar Arnavi L2 en Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración servidor Arnavi L2
  - Integración Arnavi L2
  - Guía configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Seguimiento de flotas Arusnavi
  - Telemetría Arnavi L2
---

# Arusnavi - Configuración del Arnavi L2

Esta página describe el contexto público de configuración para usar el rastreador GPS Arusnavi Arnavi L2 con Plaspy. Se centra en los ajustes de servidor prácticos y en el flujo de trabajo necesario para apuntar el L2 hacia Plaspy, de modo que el equipo entregue ubicación en tiempo real, telemetría de sensores BLE e informes de eventos a la plataforma. El contenido se basa en la información pública de compatibilidad y en la descripción del dispositivo Arnavi L2.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante para el Arnavi L2 pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor (herramienta USB, app Bluetooth o interfaz web). Use esta guía para preparar el dispositivo para Plaspy y confirme los pasos específicos del dispositivo con la documentación oficial de Arnavi.

## Resumen de la configuración

Preparar el Arnavi L2 para Plaspy implica configurar el dispositivo para que reporte al endpoint compartido de Plaspy y validar que los reportes lleguen y se procesen. El objetivo general es asegurar que el rastreador envíe datos de posición, telemetría y eventos a Plaspy de forma fiable para que los activos sean visibles en la plataforma.

- Configure la dirección del servidor y el transporte para que los reportes vayan a Plaspy
- Verifique la conectividad celular y cualquier APN o ajuste de SIM necesario para datos
- Valide que el dispositivo se comunique correctamente con Plaspy y sea visible en la plataforma
- Habilite el emparejamiento de sensores BLE y confirme el reenvío de telemetría cuando sea necesario
- Asegure que las entradas de evento (encendido, acelerómetro) estén configuradas para generar reportes

## Ajustes del servidor Plaspy

Configure el Arnavi L2 para que reporte al servidor de Plaspy usando los ajustes públicos que se indican a continuación. Plaspy usa el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: UDP or TCP is supported; choose the transport your device or firmware requires
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Una unidad Arnavi L2 con alimentación y el arnés de cableado conectado, o acceso al dispositivo vía USB o Bluetooth para configurarlo
- Una SIM GSM/GPRS 2G activa o eSIM provisionada para datos si se usa reporte celular
- Acceso a las herramientas o instrucciones de configuración de Arnavi (utilidad de configuración por USB, app móvil del fabricante, comandos SMS o herramienta web según su firmware)
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles para pegar en la configuración del dispositivo
- Conocimiento de las credenciales APN requeridas por su operador móvil si se usa una SIM
- Un lugar o entorno de prueba con recepción GNSS para validar la posición

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el Arnavi L2 envía ubicación y telemetría al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos del equipo y determina automáticamente el protocolo, de modo que los mensajes reportados aparecen en la plataforma sin necesidad de diferenciar puertos por dispositivo.

- El dispositivo reporta fijaciones de ubicación y marcas de tiempo al endpoint y puerto de Plaspy
- Los datos de sensores BLE emparejados con el L2 se reenvían a Plaspy como eventos de telemetría
- Los eventos de encendido y acelerómetro se envían como reportes discretos para detección de viajes y comportamiento de conducción
- Registros de caja negra o almacenados pueden subirse a Plaspy tras la restauración de la conectividad
- Plaspy identifica el protocolo entrante de forma automática y mapea los mensajes dentro de la plataforma

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Arnavi para su dispositivo o firmware (herramienta de configuración por USB, app Bluetooth, utilidad para PC o comandos SMS según lo proveído por Arnavi).
2. En los ajustes de servidor del dispositivo ingrese el dominio de Plaspy d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto de reporte del dispositivo en 8888.
4. Elija la opción de transporte requerida por el dispositivo (UDP o TCP) si el dispositivo solicita la selección.
5. Configure cualquier dato APN o ajustes de SIM necesarios para que el dispositivo tenga una sesión de datos IP activa.
6. Aplique o guarde la configuración y reinicie el equipo si la herramienta lo requiere para activar los nuevos ajustes.
7. Valide que el Arnavi L2 reporte a Plaspy observando la actividad del dispositivo en Plaspy y confirmando la llegada de actualizaciones de posición y telemetría.

## Ejemplos de comandos de configuración

El Arnavi L2 soporta múltiples canales de configuración y herramientas del fabricante. Los comandos exactos y la sintaxis varían según el firmware y la utilidad de configuración de Arnavi que utilice. Dado que los comandos de configuración difieren por firmware y herramientas del instalador, no se incluyen comandos exactos aquí. Use la herramienta de configuración de Arnavi o la documentación oficial para establecer:

- server host to d.plaspy.com or 54.85.159.138
- port to 8888
- transport to UDP or TCP
- APN settings as required by your mobile operator

Si usa configuración por comandos SMS o una utilidad para PC suministrada por Arnavi, siga los ejemplos del fabricante y reemplace cualquier marcador de servidor o puerto por los valores de Plaspy mencionados arriba. Mantenga siempre el orden que requiera el fabricante al aplicar múltiples ajustes y consulte los recursos de Arnavi para el formato de comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menú exactos, la sintaxis de comandos o las opciones de transporte; confirme los pasos correctos para su versión de firmware.
- Elegir TCP frente a UDP puede afectar las características de entrega de mensajes; seleccione el transporte soportado por sus políticas de sitio y el firmware Arnavi.
- Plaspy usa el mismo puerto (8888) para todos los dispositivos compatibles y detectará automáticamente el protocolo entrante para garantizar compatibilidad.
- Los sensores BLE deben emparejarse y probarse localmente con el L2 para asegurar que su telemetría se reenvíe a Plaspy.
- Use la herramienta de configuración USB de Arnavi o las utilidades oficiales móviles/PC cuando estén disponibles para evitar errores de formato en SMS.

## Por qué usar Plaspy con esta configuración

Configurar el Arnavi L2 para que reporte a Plaspy ofrece a las organizaciones una vía directa para convertir rastreadores compactos y sellados en feeds de ubicación y telemetría en vivo. Plaspy captura ubicación en tiempo real, telemetría de sensores BLE, datos de encendido y eventos para que los operadores puedan monitorear activos, analizar comportamiento de conducción y activar alertas basadas en eventos configurados.

Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, notas de firmware y detalles del fabricante, verifique la información actual en el sitio de Arnavi https://www.arusnavi.ru.
