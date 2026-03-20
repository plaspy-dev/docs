---
slug: /dct/syrus_4g_lite/configuration
id: syrus_4g_lite-configuration
sidebar_label: Configuration
title: DCT - Syrus 4G Lite Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para DCT Syrus 4G Lite con Plaspy, incluye ajustes de servidor y ejemplo de script Syrus Desk
keywords:
  - configuración DCT Syrus 4G Lite
  - configuración Syrus 4G Lite
  - configuración rastreador Plaspy
  - configuración rastreador GPS DCT
  - script Syrus Desk
  - ajustes servidor Syrus 4G Lite
  - configuración seguimiento de flotas
  - configuración pasarela telemática
  - ejemplos Syruslang
  - ajustes servidor Plaspy
---

# DCT - Syrus 4G Lite Configuración

Esta página documenta el contexto público de configuración para usar el DCT Syrus 4G Lite con Plaspy. Reúne los ajustes de servidor prácticos, un flujo de trabajo típico y un ejemplo de script Syrus Desk que los instaladores suelen emplear para apuntar un Syrus 4G Lite al servidor de Plaspy y permitir el envío de telemetría y posiciones en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor que utilice, como Syrus Desk. Utilice la guía a continuación junto con la documentación del fabricante para detalles específicos del dispositivo.

## Resumen de la configuración

El objetivo es preparar el Syrus 4G Lite para que se conecte de forma fiable a Plaspy y reporte GNSS, telemetría y eventos para su visualización en la plataforma. El ejemplo de script Syrus SB que aparece más adelante es un punto de partida práctico que puede cargar con Syrus Desk para establecer los valores de APN y el destino remoto.

- Configure los parámetros APN de la conexión celular para que el dispositivo tenga datos móviles.
- Establezca el endpoint remoto al servidor de Plaspy y el puerto correcto.
- Seleccione el modo de transporte requerido por su instalación, UDP o TCP.
- Aplique y guarde el perfil del dispositivo, luego reinicie o vuelva a conectar para validar el envío de datos.
- Verifique que el dispositivo aparezca y envíe información en Plaspy para que paneles y alertas reflejen la telemetría en vivo.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos habituales antes de la configuración

- Un Syrus 4G Lite con alimentación, antenas y batería interna instaladas y cargadas.
- Una SIM móvil activa con plan de datos y el APN correcto para su operador.
- Acceso a la herramienta oficial de configuración del fabricante, como Syrus Desk, para cargar scripts o perfiles.
- Una cuenta o tenant en Plaspy listo para recibir datos de dispositivos y verificar reportes.
- Firmware recomendado más reciente o, como mínimo, confirmación de que el firmware soporta el script y las funciones aplicadas.
- Un procedimiento de prueba para confirmar la conectividad de red y que el dispositivo aparece en Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El Syrus 4G Lite se configura para abrir una conexión hacia el endpoint del servidor Plaspy y enviar posiciones GNSS, estado del equipo y mensajes de evento configurados. Una vez que el dispositivo tenga datos móviles y estén establecidos el servidor remoto y el puerto, Plaspy ingiere la telemetría para el seguimiento en tiempo real y los informes históricos.

- El dispositivo envía posiciones y telemetría a d.plaspy.com en el puerto 8888 o al servidor IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede usar su framing nativo del protocolo Syrus.
- Los disparadores de eventos e informes de entradas definidos en el dispositivo se reenvían a Plaspy para alertas y paneles.
- Tras una configuración exitosa, el estado y el movimiento del dispositivo son visibles en Plaspy para monitoreo y diagnóstico.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración del fabricante, como Syrus Desk.
2. Prepare o cree un archivo de script nuevo y vacío en formato Syrus SB o use el editor de perfiles de Syrus Desk.
3. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 y establezca el puerto en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte para el servidor remoto.
5. Configure el APN del operador y las credenciales APN que requiera su SIM.
6. Aplique o guarde la configuración, cargue el script o perfil en el dispositivo y reinícielo si es necesario.
7. Valide que el Syrus 4G Lite reporte a Plaspy y que posiciones y eventos sean visibles en la plataforma.

## Comandos de configuración de ejemplo

El Syrus 4G Lite acepta archivos de script Syrus SB que se pueden cargar con Syrus Desk. A continuación hay un ejemplo adaptado de un script público Syrus SB. Guarde este contenido como un archivo de texto plano con extensión .tmf y cárguelo en Syrus Desk para el dispositivo.

- El script incluye un paso inicial opcional para borrar o restablecer la configuración anterior.
- Los marcadores {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por el APN del operador, el usuario del APN y la contraseña del APN según corresponda. Si no se requiere usuario o contraseña, deje el marcador correspondiente vacío.

Example Syrus SB script for Syrus Desk:

#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
#configuring the APN
>SRFA{{apn}}<
>SRFI<
>SRFL{{apnu}}<
>SRFP{{apnp}}<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
#A Destination Address holding the server destination
>SDA4;P00<
#Time-only Time And Distance signal definition
>STD80300<
#Event triggered by T&D signal
>SED37NV4;TD8+<
#Input report event
>SED05NV4;IP3+<
#end

Para mayor claridad, el mismo endpoint de servidor puede especificarse por IP si su flujo de trabajo prefiere direccionamiento numérico. Plaspy acepta conexiones a 54.85.159.138 en el puerto 8888 como alternativa a d.plaspy.com.

## Notas de configuración

- La sintaxis exacta de los comandos y las directivas de script disponibles dependen del firmware de Syrus y de la versión de Syrus Desk; verifique la compatibilidad antes de desplegar masivamente.
- Elija TCP o UDP según las necesidades de su instalación; ambos son compatibles con Plaspy en el puerto 8888 y la plataforma detectará automáticamente el protocolo usado por el rastreador.
- Reemplace {{apn}}, {{apnu}} y {{apnp}} por los valores específicos del operador. Si las credenciales APN no son necesarias, deje usuario y contraseña en blanco.
- Cargar un archivo .tmf mediante Syrus Desk es un método habitual para el aprovisionamiento masivo y para aplicar perfiles consistentes en muchos dispositivos.
- Siempre confirme, tras la configuración, que el dispositivo reporta a Plaspy y que eventos y posiciones aparecen como se espera en la plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el Syrus 4G Lite para reportar a Plaspy ofrece un camino confiable para el monitoreo de flotas en tiempo real, diagnóstico remoto y alertas basadas en eventos. El hardware robusto del equipo, su GNSS integrado y las capacidades de blackbox, junto con la ingesta de telemetría de Plaspy, permiten a los equipos de operaciones seguir ubicación, estado del dispositivo y registros de incidentes desde una sola plataforma.

Para saber más sobre Plaspy, visite https://www.plaspy.com. Para las notas específicas más recientes de configuración por dispositivo, detalles de firmware y guía de Syrus Desk, verifique la información vigente en el sitio del fabricante https://www.digitalcomtech.com/ ya que los procedimientos del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
