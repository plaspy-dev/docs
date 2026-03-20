---
slug: /hunterpro/cp60g/configuration
id: cp60g-configuration
sidebar_label: Configuration
title: HunterPro - CP60G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador HunterPro CP60G a Plaspy con ajustes de servidor y flujo de configuración prácticos
keywords:
  - configuración HunterPro CP60G
  - configuración CP60G Plaspy
  - configuración servidor CP60G
  - configuración rastreador GPS CP60G
  - configuración software HunterPro
  - configuración rastreo vehicular CP60G
  - configuración rastreador Plaspy
  - configuración plataforma rastreo GPS
  - configuración flota CP60G
  - configuración GPRS CP60G
---

# HunterPro - Configuración del CP60G

Esta página ofrece contexto público de configuración para utilizar el rastreador GPS HunterPro CP60G con la plataforma Plaspy. Resume los ajustes prácticos de servidor y los pasos comunes que debe seguir para apuntar un dispositivo CP60G a Plaspy, de manera que la ubicación y los datos del dispositivo sean visibles en la plataforma. Utilice esta guía junto con la documentación del fabricante para procedimientos específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme cualquier comando o utilidad específicos con la documentación de HunterPro antes de proceder.

## Resumen de la configuración

Preparar un HunterPro CP60G para su uso con Plaspy se centra en configurar sus parámetros de reporte GPRS para que el dispositivo pueda alcanzar los endpoints de servidor de Plaspy y enviar datos de posición y eventos. El objetivo es registrar el dispositivo en Plaspy, transmitir actualizaciones de ubicación de forma confiable y que aparezca como un equipo activo en la plataforma.

- Configure el servidor del dispositivo a d.plaspy.com o a la IP equivalente y use el puerto compartido de Plaspy para que el CP60G envíe sus datos a la plataforma.
- Asegúrese de la conectividad GPRS y que el APN esté correcto para que el rastreador pueda abrir una sesión de datos hacia Plaspy.
- Seleccione el modo de transporte soportado por el dispositivo, UDP o TCP, y ajuste el puerto de Plaspy en consecuencia.
- Aplique y guarde la configuración, reinicie el rastreador si es necesario y verifique que el dispositivo reporte en Plaspy.

## Ajustes de servidor de Plaspy

Utilice los siguientes ajustes públicos de servidor al configurar el CP60G para Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Automatic protocol detection in Plaspy when the device connects to the server

## Requisitos típicos antes de la configuración

- Una unidad CP60G con alimentación y antenas conectadas y el dispositivo encendido.
- Una tarjeta SIM activa con plan de datos y los detalles de APN correctos proporcionados por su operador móvil.
- Acceso al método o software de configuración HunterPro usado para ajustar parámetros de servidor y GPRS.
- Conocimiento de la versión de firmware del dispositivo y de cualquier comando de configuración específico del proveedor.
- Una ventana de mantenimiento o un entorno de pruebas seguro para aplicar ajustes y reiniciar el dispositivo.
- Acceso al equipo de soporte o de cuenta de Plaspy si necesita asistencia para validar el dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El CP60G utiliza su conexión GSM GPRS para abrir una sesión de datos y enviar paquetes de ubicación y eventos a Plaspy. El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar los datos del rastreador.

- El rastreador se configura para enviar su telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Seleccione UDP o TCP como transporte según la opción de configuración del dispositivo; Plaspy aceptará cualquiera de los dos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega tráfico, por lo que no se requiere una selección de protocolo separada en la plataforma.
- Una vez que el dispositivo comienza a reportar, Plaspy ofrece visibilidad de la ubicación, el estado de conectividad y reportes básicos de eventos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración HunterPro o al software del CP60G provisto por el fabricante.
2. Configure los parámetros GPRS, incluyendo el APN según lo requiera la SIM y el operador móvil.
3. Ingrese el servidor de Plaspy como d.plaspy.com o, alternativamente, use la IP 54.85.159.138 en el campo de servidor del dispositivo.
4. Ajuste el puerto del dispositivo a 8888 ya que Plaspy utiliza este mismo puerto para todos los equipos.
5. Seleccione UDP o TCP para el transporte si el dispositivo requiere elegir uno.
6. Aplique o guarde la configuración y reinicie el CP60G si el dispositivo necesita un reinicio para aplicar cambios de red.
7. Valide que el dispositivo reporte en Plaspy revisando la actividad en la plataforma y confirmando las conexiones entrantes.

## Ejemplo de comandos de configuración

Los comandos exactos o las cadenas SMS utilizadas para configurar un CP60G varían según la herramienta del fabricante, la compilación de firmware y variantes regionales. Los dispositivos HunterPro suelen configurarse mediante una herramienta de software proporcionada por el proveedor o mediante un conjunto de comandos SMS. Al aplicar los ajustes de Plaspy normalmente configurará el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, además de seleccionar UDP o TCP si el dispositivo lo requiere. Confirme la sintaxis precisa de los comandos con la documentación de HunterPro o la utilidad de configuración que acompaña al CP60G.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos o los campos de configuración disponibles. Verifique la versión de firmware de su dispositivo antes de aplicar comandos.
- TCP y UDP funcionan con Plaspy, pero el comportamiento puede diferir en condiciones de red degradadas. Elija el transporte que mejor se ajuste a sus necesidades de confiabilidad y latencia.
- Confirme siempre los ajustes de APN con el operador móvil antes de iniciar la resolución de fallas de conexión.
- Las herramientas del fabricante pueden requerir una conexión USB o serial para configuraciones avanzadas, mientras que algunas versiones soportan configuración por SMS para cambios básicos de servidor y APN.
- Mantenga un registro de la configuración original del dispositivo antes de realizar cambios para poder restaurar los valores de fábrica si es necesario.

## Por qué usar Plaspy con esta configuración

Configurar el HunterPro CP60G para reportar a Plaspy ofrece a las organizaciones un camino sencillo hacia la visibilidad centralizada y el monitoreo operativo. Plaspy acepta conexiones de dispositivos en un endpoint compartido, por lo que las organizaciones pueden consolidar los datos de rastreo de múltiples unidades CP60G en una sola plataforma para supervisión de flotas, procesos de recuperación y monitoreo de eventos.

Para obtener más información sobre la plataforma Plaspy visite https://www.plaspy.com. Para detalles actualizados específicos del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio de HunterPro http://hunterpro.com.tw/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
