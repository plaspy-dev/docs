---
slug: /wp/ot_10/configuration
id: ot_10-configuration
sidebar_label: Configuration
title: WP - OT-10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración y ajustes del servidor para el WP OT-10 compatible con Plaspy, con pasos prácticos y parámetros necesarios
keywords:
  - configuración WP OT-10
  - instalación WP OT-10
  - WP OT-10 Plaspy
  - configuración servidor WP OT-10
  - configuración GPS WP OT-10
  - Wonde Proud OT-10
  - instalación rastreador OT-10
  - configuración GPRS OT-10
  - rastreo vehicular OT-10
  - configuración rastreador GPS Plaspy
---

# WP - Configuración del OT-10

Esta página describe el contexto de configuración pública para usar el rastreador WP OT-10 con Plaspy. Presenta los ajustes prácticos de servidor y el flujo de trabajo necesarios para apuntar un OT-10 a Plaspy, de modo que el dispositivo pueda enviar datos de ubicación y eventos. La guía a continuación se enfoca en el endpoint compartido de Plaspy y en los pasos habituales que siguen los integradores para habilitar la visibilidad en la plataforma Plaspy.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware del OT-10, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que usted utilice. Combine siempre los ajustes siguientes con la documentación del fabricante y las herramientas que Wonde Proud provea para comandos específicos del dispositivo y comportamientos dependientes del firmware.

## Resumen de la configuración

El objetivo de este proceso de configuración es preparar el OT-10 para comunicarse de forma confiable con Plaspy y validar que el dispositivo aparezca en la plataforma. La configuración se centra en apuntar el equipo al endpoint compartido de Plaspy y garantizar que use GPRS sobre el transporte seleccionado para que los datos de ubicación y eventos fluyan hacia la plataforma.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y confirme los ajustes de transporte.
- Verifique la conectividad móvil y el APN del operador para que el OT-10 pueda enviar datos GPRS.
- Aplique los ajustes en la herramienta de configuración del fabricante o a través del puerto de configuración del OT-10.
- Reinicie o apague y encienda el dispositivo si es necesario para activar los nuevos ajustes del servidor.
- Confirme que el OT-10 sea visible y esté reportando en Plaspy después de aplicar la configuración.

## Ajustes del servidor Plaspy

Al configurar el OT-10 para usar con Plaspy, utilice los siguientes ajustes públicos exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and assigns handling accordingly

Tenga en cuenta que Plaspy emplea el mismo puerto para todos los dispositivos soportados y depende de la detección automática de protocolo para interpretar los mensajes entrantes.

## Requisitos típicos antes de la configuración

- Una unidad WP OT-10 con acceso a la interfaz de configuración del fabricante (por ejemplo el puerto mini USB de configuración o el software oficial provisto por Wonde Proud).
- Una tarjeta SIM activa con plan de datos y la información del APN del operador para conectividad GPRS.
- Fuente de alimentación o alimentación vehicular dentro del rango nominal del OT-10 de 8 a 16 VDC para realizar la configuración y pruebas.
- Conocimiento de la versión de firmware del OT-10 y de cualquier instrucción específica del dispositivo proporcionada por Wonde Proud.
- Acceso a la herramienta de configuración del OT-10, cable USB o app de configuración suministrada por el proveedor según lo requiera el dispositivo.
- Acceso administrativo a su cuenta de Plaspy para verificar que el dispositivo aparezca y reporte correctamente después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El OT-10 envía datos de posición y eventos a Plaspy usando los métodos de comunicación que soporta, configurado para usar el endpoint y puerto compartido de Plaspy. Una vez que el dispositivo apunta a Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y parseará los mensajes entrantes para su visualización y generación de alertas.

- El rastreador transmite datos GPRS por UDP o TCP al endpoint del servidor de Plaspy.
- El dispositivo también puede soportar CS Data o SMS como métodos alternativos cuando GPRS no esté disponible.
- Informes de eventos del OT-10 como geocerca, exceso de velocidad, remolque y alertas de alimentación se envían a Plaspy para registro y alertas.
- Plaspy recibe los datos en d.plaspy.com o 54.85.159.138 en el puerto 8888 y aplica detección automática de protocolo para interpretar los mensajes.
- Tras una configuración exitosa, el dispositivo será visible en Plaspy y comenzará a reportar periódicamente al puerto compartido usado por todos los dispositivos.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración del fabricante o al software que Wonde Proud provea para el OT-10.
2. En los ajustes de servidor del dispositivo, ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138.
3. Configure el puerto de reporte del dispositivo en 8888 para coincidir con el puerto compartido de Plaspy.
4. Elija UDP o TCP como transporte si el OT-10 solicita selección de transporte durante la configuración.
5. Aplique o guarde los ajustes en la herramienta del OT-10.
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para aplicar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y los mensajes entrantes en su cuenta Plaspy.

Estos pasos reflejan la secuencia estándar para apuntar un OT-10 a Plaspy. Las etiquetas de menú y los formatos de comando específicos dependen del firmware del OT-10 y de la herramienta de configuración que utilice.

## Ejemplos de comandos de configuración

El OT-10 soporta múltiples métodos de configuración y Wonde Proud proporciona herramientas y formatos de comandos que pueden variar según el firmware. Dado que los comandos del fabricante y los formatos de configuración por SMS o USB no son uniformes entre versiones de firmware, los comandos exactos pueden diferir y deben consultarse en la documentación oficial del OT-10 o en la utilidad de configuración incluida con el dispositivo.

Plaspy requiere que, al establecer la dirección del servidor, use d.plaspy.com o 54.85.159.138 y que el puerto de reporte sea 8888. Plaspy detecta automáticamente el protocolo del dispositivo y todos los equipos usan el mismo puerto de Plaspy.

Si cuenta con cadenas de comando específicas proporcionadas por Wonde Proud para su firmware OT-10 (por ejemplo comandos de configuración por SMS o archivos de configuración USB), siga los ejemplos del fabricante y sustituya la dirección de servidor y el puerto indicados arriba. Preserve cualquier marcador de posición que use la documentación del proveedor, como entradas de APN o campos de usuario y contraseña, al aplicar los ajustes.

## Notas de configuración

- El OT-10 soporta GPRS sobre UDP y TCP como opciones públicas de comunicación; elija el transporte que funcione mejor para su operador y las condiciones de red.
- La capacidad de configuración por aire (OTA) y de actualización de firmware puede estar disponible según el firmware del OT-10; utilice las herramientas oficiales del proveedor para realizar actualizaciones OTA.
- El comportamiento puede variar entre versiones de firmware y revisiones de hardware; confirme siempre la sintaxis de comandos y las rutas de menú con la documentación de Wonde Proud.
- Al configurar por SMS o CS Data, verifique que la tarjeta SIM tenga datos habilitados y que el APN sea el correcto.
- Dado que Plaspy usa un único puerto compartido y detección automática de protocolo, solo necesita establecer correctamente la dirección del servidor y el puerto; la plataforma detectará y parseará el protocolo del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el WP OT-10 con Plaspy ofrece a gerentes de flota e integradores una vía práctica para recibir datos GPS y eventos precisos a través de un endpoint de servidor estandarizado. El soporte del OT-10 para GPRS UDP/TCP, CS Data y SMS, combinado con la detección automática de protocolo de Plaspy, ayuda a reducir la complejidad de configuración y acelera el despliegue en instalaciones vehiculares.

Learn more about Plaspy features and platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details may change over time so verify the latest OT-10 setup instructions and command syntax with Wonde Proud at http://www.wondeproud.com/ before completing your deployment.
