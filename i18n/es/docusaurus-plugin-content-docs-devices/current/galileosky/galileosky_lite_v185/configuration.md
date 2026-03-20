---
slug: /galileosky/galileosky_lite_v185/configuration
id: galileosky_lite_v185-configuration
sidebar_label: Configuration
title: GalileoSky - GALILEOSKY Lite v1.8.5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar GALILEOSKY Lite v1.8.5 con Plaspy, incluyendo ajustes de servidor y pasos prácticos
keywords:
  - configuración GalileoSky
  - configuración GALILEOSKY Lite v1.8.5
  - configuración GALILEOSKY Lite
  - configuración GalileoSky Plaspy
  - configuración rastreador vehicular
  - ajustes servidor rastreador GPS
  - configuración servidor Plaspy
  - guía de configuración de dispositivo de rastreo
  - configuración plataforma GPS
  - configuración seguimiento de flotas
---

# GalileoSky - Configuración GALILEOSKY Lite v1.8.5

Esta página describe el contexto público de configuración para usar el rastreador GALILEOSKY Lite v1.8.5 con Plaspy. Resume los ajustes de servidor y los pasos prácticos que debe aplicar para apuntar el dispositivo a Plaspy y habilitar el reporte en tiempo real. Use esta guía junto con la documentación del fabricante para completar la instalación y la verificación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Las indicaciones siguientes se enfocan en el punto de conexión de Plaspy, el puerto y los pasos prácticos comunes para integrar este rastreador con la plataforma Plaspy.

## Resumen de la configuración

Este proceso prepara el GALILEOSKY Lite v1.8.5 para reportar ubicación y telemetría del dispositivo a Plaspy. El objetivo es configurar correctamente el servidor y el transporte, verificar la conexión y confirmar la visibilidad en la plataforma Plaspy para que los equipos de despacho y operaciones puedan monitorear los vehículos.

- Apunte el dispositivo al endpoint de Plaspy usando los ajustes públicos de servidor.
- Seleccione el transporte apropiado (UDP o TCP) si el dispositivo requiere elegir.
- Guarde y aplique la configuración mediante el método de GalileoSky o por SMS/herramientas remotas.
- Reinicie o interrumpa la alimentación si es necesario para iniciar la primera conexión a Plaspy.
- Verifique que el dispositivo reporte posición y estado correctamente a Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el GALILEOSKY Lite v1.8.5 para reporte:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Una unidad GALILEOSKY Lite v1.8.5 instalada y con alimentación, con acceso al método de configuración proporcionado por el fabricante.
- Conectividad de red adecuada para el dispositivo (por ejemplo GPRS u otro canal de datos soportado) para que el rastreador alcance el servidor Plaspy.
- Acceso al Configurator del fabricante, herramienta USB o comandos SMS que se usan para cambiar el servidor y el transporte.
- Tener a la mano los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) para copiarlos en la configuración del dispositivo.
- Acceso administrativo a Plaspy para verificar el registro del dispositivo y ver la telemetría entrante.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el GALILEOSKY Lite v1.8.5 envía la ubicación y la telemetría del equipo al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos del dispositivo, identifica automáticamente el protocolo del rastreador y hace que el equipo sea visible en la plataforma para seguimiento e informes.

- El rastreador transmite puntos de posición y paquetes de telemetría a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Configure el rastreador para usar UDP o TCP según la interfaz del dispositivo o la preferencia del instalador; ambos son aceptados por Plaspy en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y comienza a decodificar los mensajes cuando el dispositivo se conecta.
- Conexiones exitosas permiten visibilidad en tiempo real de coordenadas, eventos y estado de entradas/salidas en Plaspy.
- Reportes periódicos, alarmas y diagnósticos remotos enviados por el rastreador serán procesados por el servicio Plaspy.

## Flujo de configuración común

1. Acceda al método de configuración oficial de GalileoSky o al software correspondiente (Configurator, herramienta USB o comandos SMS) para el GALILEOSKY Lite v1.8.5.
2. Ingrese el servidor Plaspy como d.plaspy.com o utilice la IP 54.85.159.138 cuando el dispositivo lo requiera.
3. Establezca el puerto en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP si el dispositivo solicita selección de transporte; ambos son compatibles con Plaspy en el puerto 8888.
5. Aplique o guarde la configuración usando la herramienta del dispositivo o envíe el comando SMS correspondiente si está soportado.
6. Reinicie el dispositivo o haga un ciclo de energía si es necesario para que el rastreador inicie una nueva conexión a Plaspy.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y las posiciones recientes en la plataforma.

## Ejemplos de comandos de configuración

El GALILEOSKY Lite v1.8.5 soporta múltiples métodos de configuración y los comandos exactos o pasos en la interfaz gráfica varían según el firmware y el Configurator del fabricante. Dado que las herramientas del fabricante y los conjuntos de comandos pueden cambiar, consulte la documentación de GalileoSky para obtener los comandos SMS o del Configurator exactos para establecer servidor, puerto y transporte.

Si utiliza SMS para la configuración, la guía del fabricante mostrará las plantillas SMS exactas y los marcadores a completar para establecer el dominio o la IP del servidor y el puerto. Si usa el Configurator o la interfaz USB, ingrese d.plaspy.com o 54.85.159.138 y el puerto 8888 en los campos de servidor, y seleccione UDP o TCP cuando se solicite.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales pueden cambiar los campos de configuración exactos o las plantillas SMS; consulte siempre el manual del dispositivo para su versión de firmware.
- La elección entre TCP y UDP puede depender de las condiciones de red y de la preferencia del instalador; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Este modelo admite configuración remota vía GPRS o SMS; verifique el formato correcto de los comandos en la documentación de GalileoSky antes de enviar instrucciones.
- Plaspy utiliza un único puerto para todos los dispositivos para simplificar los ajustes de servidor. Apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 es suficiente para la conectividad inicial.
- Después de aplicar los ajustes, siempre valide que el dispositivo sea visible en Plaspy y que la telemetría reciente llegue como se espera.

## Por qué usar Plaspy con esta configuración

Usar el GALILEOSKY Lite v1.8.5 con Plaspy ofrece una forma sencilla de llevar la ubicación del vehículo, el reporte de eventos y la telemetría del dispositivo a una plataforma de monitoreo de flotas. Las funcionalidades locales del equipo, como entradas digitales, datos del acelerómetro y registro a bordo, complementan la capacidad de Plaspy para recibir y presentar posiciones y eventos para supervisión operativa y análisis de rutas.

Para obtener más información sobre cómo Plaspy puede integrarse con sus dispositivos de rastreo y revisar las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos de configuración específicos del dispositivo, notas de firmware y guías de instalación consulte la documentación del fabricante en https://galileosky.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
