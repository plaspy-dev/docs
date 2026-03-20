---
slug: /cantrack/g500l/configuration
id: g500l-configuration
sidebar_label: Configuration
title: CanTrack - G500L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para CanTrack G500L con ajustes de servidor Plaspy y pasos prácticos de instalación
keywords:
  - Configuración CanTrack G500L
  - Instalación CanTrack G500L
  - Configuración de servidor CanTrack G500L
  - Configuración rastreador GPS CanTrack
  - Configuración G500L para Plaspy
  - Configuración rastreador Plaspy
  - Instalación rastreador GPS OBDII
  - Configuración seguimiento de vehículos
  - Instalación rastreador GPS para flotas
  - Ajustes servidor rastreador GPS
---

# CanTrack - G500L Configuración

Esta página describe el contexto público de configuración para usar el CanTrack G500L con Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera, los pasos prácticos para apuntar un G500L al endpoint de Plaspy y qué debe verificar en el dispositivo y con su instalador antes de intentar la integración. El G500L está diseñado para una instalación OBD-II rápida plug and play y aparece como compatible con Plaspy de serie.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Todos los dispositivos en Plaspy usan el mismo puerto, y el G500L puede configurarse para usar UDP o TCP en ese puerto según el método de configuración del dispositivo o una opción de firmware.

## Visión general de la configuración

El proceso de configuración prepara el G500L para transmitir posición y telemetría OBD a Plaspy y para que el dispositivo sea visible en su panel de flota en Plaspy. El objetivo es apuntar el dispositivo al endpoint compartido de Plaspy, confirmar el transporte y la conectividad, y verificar la ingestión de datos en Plaspy.

- Configure el G500L para que reporte al endpoint del servidor Plaspy y así la posición y la telemetría OBD lleguen a su cuenta.
- Valide que el dispositivo tenga una conexión de datos celular activa y los ajustes APN correctos si el instalador lo requiere.
- Seleccione el modo de transporte que soporte el firmware del dispositivo, UDP o TCP, y configure el puerto de Plaspy.
- Guarde y aplique los cambios de configuración y confirme que el dispositivo aparece y reporta en Plaspy.
- Solucione cualquier brecha de conectividad o telemetría revisando IMEI, versión de firmware y alimentación del vehículo.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy cuando configure el G500L para que reporte a Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la instalación

- Acceso físico al puerto OBD-II del vehículo para la instalación y verificación del dispositivo.
- Una SIM activa con plan de datos instalada en el dispositivo y APN correcto configurado si el rastreador lo requiere.
- Acceso al método oficial de configuración de CanTrack o al software usado para programar el dispositivo (app del fabricante, comandos SMS o herramienta de configuración).
- IMEI y número de serie del dispositivo registrados para aprovisionamiento y verificación en Plaspy.
- Alimentación en el puerto OBD y un estado del vehículo que permita al rastreador inicializar las pilas GNSS y celular.
- Una cuenta de Plaspy y acceso organizacional para ver dispositivos recién conectados en su panel.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el G500L transmite la posición GNSS y la telemetría OBD a través de su enlace celular al endpoint y puerto compartido del servidor Plaspy. Plaspy ingiere esos paquetes y muestra ubicación, telemetría y alertas en su panel de flota, manejando automáticamente la detección de protocolo.

- El dispositivo se configura para enviar paquetes a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta cualquiera de los dos en el puerto compartido.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo por separado en Plaspy.
- Posición, PIDs OBD, códigos DTC y banderas de eventos se reenvían a Plaspy para mapeo, reportes y alertas.
- El enfoque de puerto compartido simplifica el aprovisionamiento porque todos los dispositivos soportados usan el mismo puerto y Plaspy maneja las diferencias de protocolo.

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial de CanTrack proporcionado por el fabricante o el proveedor.
2. Localice los ajustes de servidor o reporte en la interfaz de configuración del dispositivo.
3. Ingrese d.plaspy.com o la IP 54.85.159.138 como dirección del servidor.
4. Configure el puerto en 8888.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
6. Aplique o guarde la configuración y siga cualquier indicación en pantalla para confirmar los ajustes.
7. Reinicie o haga un ciclo de energía del dispositivo si el fabricante lo exige para activar los nuevos ajustes de servidor.
8. Valide que el dispositivo reporte a Plaspy verificando la conectividad y la telemetría en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El conjunto exacto de comandos o la herramienta de configuración del G500L dependen del firmware de CanTrack y del conjunto de herramientas del proveedor. Los fabricantes suelen ofrecer uno o más métodos como una app de configuración, cadenas de comandos SMS o una herramienta de escritorio. Dado que los comandos específicos del modelo son proporcionados por el fabricante y pueden cambiar con el firmware, consulte la documentación de CanTrack o a su proveedor para los comandos y la sintaxis exacta necesarios para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.

Si dispone de un conjunto de comandos SMS o una herramienta del proveedor de CanTrack, utilice esos comandos oficiales para establecer el servidor y el puerto, y conserve los marcadores de posición que el fabricante emplee para APN, usuario o contraseña.

## Notas de configuración

- Las diferencias de firmware pueden cambiar dónde aparecen los campos de servidor y si es obligatorio seleccionar el transporte; siempre confirme la versión de firmware antes de aplicar las instrucciones.
- Si el G500L admite configuración por SMS, ponga el dispositivo en línea brevemente para verificar los ajustes porque los cambios vía SMS pueden requerir reinicio para surtir efecto.
- Elegir UDP o TCP afecta típicamente la semántica de entrega y el comportamiento de retransmisión; seleccione el transporte recomendado por su instalador o por el soporte de CanTrack.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, lo que simplifica la configuración del servidor en el dispositivo.
- Verifique APN y el aprovisionamiento celular antes de solucionar la conectividad al servidor para evitar falsos negativos al probar el reporte a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G500L con Plaspy proporciona visibilidad inmediata del vehículo, telemetría a nivel OBD y reporte de eventos en una sola plataforma. La naturaleza plug and play del G500L reduce el tiempo de instalación, mientras que Plaspy centraliza ubicación, códigos de diagnóstico y alertas para que los equipos de flota y operaciones puedan monitorear vehículos, responder a fallas y analizar patrones de uso.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los pasos de configuración específicos más actuales, notas de firmware y documentación del fabricante verifique los detalles en el sitio oficial de CanTrack https://www.cantrackgps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
