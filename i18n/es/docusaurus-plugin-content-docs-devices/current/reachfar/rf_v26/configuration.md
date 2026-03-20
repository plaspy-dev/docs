---
slug: /reachfar/rf_v26/configuration
id: rf_v26-configuration
sidebar_label: Configuration
title: Reachfar - RF-V26+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Reachfar RF-V26+ con los ajustes de servidor de Plaspy y pasos para integrar el dispositivo
keywords:
  - Configuración Reachfar RF-V26+
  - Instalación Reachfar RF-V26+
  - Configuración RF-V26+ en Plaspy
  - Configuración rastreador GPS Reachfar
  - Rastreador GPS para animales Plaspy
  - Configuración rastreador ganado
  - Configuración GPS para granja
  - Ajustes servidor Plaspy
  - Configuración servidor rastreador GPS
  - Integración dispositivo Plaspy
---

# Reachfar - RF-V26+ Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS para animales Reachfar RF-V26+ con Plaspy. Aquí se detallan los ajustes prácticos del servidor y las consideraciones generales necesarias para enviar las ubicaciones y estados del RF-V26+ a la plataforma Plaspy para mapeo en tiempo real, historial y telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos del fabricante para configurar el RF-V26+ pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siga la documentación del fabricante cuando se requieran comandos o utilidades específicas del dispositivo.

## Resumen de la configuración

El objetivo del proceso de configuración es apuntar el RF-V26+ hacia Plaspy para que los reportes de posición y estado del dispositivo se reciban de forma fiable y se muestren en la plataforma. A continuación se enumeran los objetivos prácticos principales al preparar el rastreador para la integración.

- Configurar el rastreador para que envíe su ubicación y estado a Plaspy usando el endpoint de servidor compartido.
- Asegurarse de que el dispositivo esté encendido, accesible y con la configuración del fabricante aplicada.
- Seleccionar el transporte y puerto correctos para que el enlace del rastreador coincida con lo que espera Plaspy.
- Validar la conectividad para que las posiciones aparezcan en Plaspy como ubicaciones en vivo y como trayectorias históricas.
- Confirmar que la telemetría básica, como estado de batería o carga, se reporte cuando esté disponible.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el RF-V26+ o al ingresar la información de servidor en la herramienta del fabricante:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que la plataforma detectará automáticamente el protocolo del dispositivo cuando lleguen los datos.

## Requisitos típicos antes de la configuración

- El RF-V26+ está cargado e instalado en su soporte o montado en el collar según lo previsto.
- Acceso al método de configuración de Reachfar o al software proporcionado por el fabricante.
- Identificar la ruta de datos del rastreador para que el dispositivo pueda enviar información a un servidor externo.
- Familiaridad básica con la introducción de un dominio o IP de servidor y un puerto en la herramienta del fabricante.
- Un método para reiniciar o ciclos de energía del rastreador después de la configuración, si fuese necesario.
- Acceso a la cuenta o proyecto de Plaspy donde se validará el dispositivo una vez que empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

Cuando el RF-V26+ está configurado para reportar a Plaspy, sus puntos de ubicación y los campos de estado disponibles se reenvían al endpoint compartido de Plaspy y se vuelven visibles en la plataforma. El rastreador se configura para usar el endpoint y el puerto de Plaspy para que la plataforma pueda ingerir y mostrar la telemetría.

- El rastreador se apunta al endpoint de servidor de Plaspy d.plaspy.com o a 54.85.159.138.
- Todos los datos se envían al puerto 8888 del endpoint de Plaspy.
- El dispositivo puede usar transporte UDP o TCP al enviar uplinks hacia Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa las fuentes de ubicación entrantes.
- Una vez recibidos los reportes, las posiciones y las trayectorias están disponibles en Plaspy para revisión en tiempo real y análisis histórico.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Reachfar o al software del fabricante según lo descrito en la guía del usuario del RF-V26+.
2. En la configuración de servidor o carga remota, ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP de servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione la opción de transporte UDP o TCP si la configuración del dispositivo requiere elegir un transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante.
6. Reinicie o aplique un ciclo de energía al RF-V26+ si el procedimiento del fabricante requiere reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporta a Plaspy verificando actualizaciones de posición en vivo y la telemetría inicial en su proyecto o cuenta de Plaspy.

## Ejemplos de comandos de configuración

La configuración pública del RF-V26+ que se proporciona aquí no incluye una lista estandarizada de comandos del fabricante. La sintaxis exacta de los comandos y los pasos de configuración varían según el firmware de Reachfar y la herramienta del proveedor que esté utilizando. Use la utilidad de configuración de Reachfar o el manual del usuario del RF-V26+ para establecer el dominio de servidor d.plaspy.com o la IP 54.85.159.138 y el puerto 8888, seleccionando UDP o TCP según corresponda. Tras aplicar los ajustes, confirme que el rastreador envía datos y que Plaspy los recibe.

Si dispone de comandos específicos según la documentación de Reachfar o la herramienta del vendedor, aplíquelos en el orden recomendado por Reachfar y luego verifique el reporte a Plaspy en el puerto 8888.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden modificar la sintaxis de los comandos y los campos disponibles; siempre consulte la documentación de Reachfar para el RF-V26+ antes de aplicar órdenes.
- Elija UDP o TCP según la opción de la herramienta del fabricante y la fiabilidad del enlace en su despliegue; Plaspy acepta cualquiera de los dos transportes en el puerto 8888.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, la variable principal de configuración es el endpoint de servidor y la selección del transporte.
- Si la configuración se realiza en campo, confirme que el rastreador está montado y puede adquirir posiciones GNSS para que los reportes iniciales contengan datos de ubicación.
- Mantenga un registro de los cambios de configuración y del identificador del dispositivo para poder emparejar el RF-V26+ con el dispositivo informante en Plaspy durante la validación.

## Por qué usar Plaspy con esta configuración

Integrar el RF-V26+ con Plaspy ofrece posicionamiento en el animal y reportes de estado que facilitan a los administradores monitorear el movimiento del rebaño, recibir alertas de perímetro y revisar rangos históricos. Dado que el RF-V26+ está diseñado para uso rudo al aire libre con asistencia solar, reenviar su telemetría a Plaspy permite una supervisión operativa práctica con mínima interacción en sitio.

Para saber más sobre Plaspy y cómo procesa los datos de los rastreadores, visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo RF-V26+, notas de firmware y herramientas del fabricante, verifique la información actual en el sitio de Reachfar https://www.reachfargps.com/.
