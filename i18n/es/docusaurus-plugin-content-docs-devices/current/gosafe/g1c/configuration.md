---
slug: /gosafe/g1c/configuration
id: g1c-configuration
sidebar_label: Configuration
title: Gosafe - G1C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Gosafe G1C con ajustes de servidor Plaspy y pasos prácticos de instalación
keywords:
  - Configuración Gosafe G1C
  - Instalación Gosafe G1C Plaspy
  - Rastreador GPS Gosafe G1C
  - Configuración dispositivo Plaspy
  - Configuración servidor Gosafe G1C
  - Configuración plataforma G1C GPS
  - Guía instalación Gosafe G1C
  - Gestión de flotas G1C
  - Rastreo vehicular G1C
  - Tracker LTE Gosafe G1C
---

# Gosafe - Configuración del G1C

Esta página describe el contexto público de configuración para usar el rastreador Gosafe G1C con Plaspy. Resume los ajustes de servidor prácticos y los pasos típicos necesarios para apuntar un dispositivo G1C compatible a la plataforma Plaspy, de modo que el equipo pueda enviar ubicaciones y eventos. La información aquí está dirigida a instaladores técnicos e integradores que preparan unidades G1C para su uso con Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Use esta guía como la parte orientada a Plaspy del flujo de trabajo de configuración y consulte la documentación de Gosafe cuando necesite detalles específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara el G1C para comunicarse con Plaspy configurando el rastreador para que reporte al endpoint y puerto del servidor Plaspy. El objetivo es asegurar conectividad fiable y autenticada, y visibilidad en la plataforma Plaspy para que la ubicación, los eventos y el estado del dispositivo sean visibles desde su aplicación de gestión de flota o monitoreo.

- Apunte el G1C al endpoint del servidor Plaspy para que envíe telemetría a Plaspy.
- Seleccione el protocolo de transporte compatible con el dispositivo y con Plaspy y configure el puerto correspondiente.
- Verifique que la fuente de alimentación del dispositivo, la conectividad celular y los parámetros APN sean correctos para que la unidad pueda establecer sesiones de datos.
- Aplique y guarde la configuración en el dispositivo y luego confirme que la unidad comienza a reportar a Plaspy.
- Valide que los eventos como encendido, registro de choque o entrada de pánico del G1C aparezcan en la plataforma Plaspy.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el G1C:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so all devices may use the same port and the platform will identify the protocol

## Requisitos habituales antes de la configuración

- Dispositivo encendido y accesible para configuración mediante la herramienta del fabricante o el método aprobado por el instalador.
- SIM celular activa con datos habilitados y valores APN adecuados para el operador en uso.
- Conocimiento del IMEI o número de serie del dispositivo para registro y resolución de problemas.
- Acceso a la herramienta de configuración oficial de Gosafe o a la documentación correspondiente a la revisión de firmware del G1C.
- Una cuenta de Plaspy con permisos para agregar o monitorear dispositivos en la cuenta o instancia de cliente objetivo.
- Comprobaciones básicas de conectividad de red para confirmar que el dispositivo puede alcanzar servidores externos desde la ubicación de instalación.

## Cómo se conecta este rastreador a Plaspy

El G1C envía datos de ubicación, estado y eventos al endpoint y puerto del servidor Plaspy para que la plataforma pueda procesar y mostrar la telemetría. Una vez configurado con los ajustes de Plaspy, establece una sesión sobre el transporte elegido y comienza a reportar según las reglas de eventos y reporte de posición de su firmware.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la dirección IP correspondiente 54.85.159.138.
- Los datos se envían por el puerto 8888 usando UDP o TCP según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma puede aceptar los datos entrantes sin endpoints específicos por dispositivo.
- Actualizaciones de ubicación, notificaciones de eventos (como encendido o detección de choque reportados por el equipo) y mensajes de estado se entregan a la plataforma Plaspy para su visualización y monitoreo.
- La visibilidad en Plaspy permite monitoreo operativo, alertas y el historial de posiciones para la unidad G1C.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Gosafe para el G1C (herramienta del fabricante, portal web o interfaz de instalador).
2. Ingrese la dirección del servidor Plaspy introduciendo d.plaspy.com o, si se solicita, la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo a 8888 ya que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte y guarde esa opción.
5. Configure cualquier APN o ajustes celulares necesarios para la SIM instalada para que el dispositivo pueda establecer sesiones de datos.
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si el procedimiento del fabricante exige un reinicio.
7. Valide que el dispositivo está reportando a Plaspy verificando el estado del equipo y la posición inicial en la plataforma Plaspy o en la interfaz de monitoreo.

## Ejemplos de comandos de configuración

No hay comandos de ejemplo universales para el G1C incluidos en el contenido público de modelConfiguration aquí. Los comandos exactos de configuración y el método para enviarlos varían según el firmware de Gosafe y la herramienta del fabricante en uso. Use la utilidad de configuración de Gosafe o el manual del instalador para aplicar los ajustes del servidor Plaspy:

- Ingrese el dominio del servidor d.plaspy.com o la IP del servidor 54.85.159.138 en el campo etiquetado como server o host.
- Configure el puerto de destino en 8888.
- Seleccione UDP o TCP para el transporte si se le solicita.
- Guarde y aplique la configuración, luego siga el paso específico del dispositivo para reiniciar o reiniciar los servicios de comunicación si es necesario.

Si dispone de un conjunto de comandos SMS o serie proporcionado por Gosafe para su firmware, aplique los comandos equivalentes de servidor, puerto y transporte según el manual de Gosafe. Siempre preserve cualquier marcador de posición que el fabricante requiera al sustituir APN o credenciales.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de configuración y la sintaxis de comandos; confirme siempre con la documentación del firmware Gosafe G1C.
- Seleccionar TCP frente a UDP depende de la preferencia del instalador y del comportamiento de red del dispositivo; Plaspy soporta ambas y detectará el protocolo automáticamente.
- Asegúrese de que las credenciales APN y el servicio de la SIM estén activos antes de intentar validar conectividad a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- En despliegues de múltiples unidades, confirme que cada IMEI del dispositivo esté registrado para poder identificar rápidamente las unidades en la plataforma Plaspy.
- Si el dispositivo ofrece modos LTE Cat 1 y GPRS, verifique la cobertura del operador y el plan de datos para que coincidan con el despliegue regional previsto.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G1C con Plaspy ofrece una forma sencilla de integrar unidades compactas y con funciones completas en una única plataforma de monitoreo. Apuntar el G1C al endpoint compartido de Plaspy simplifica implementaciones a gran escala porque la plataforma utiliza un único puerto para todos los dispositivos y detecta automáticamente el protocolo entrante, reduciendo la complejidad de configurar servidores por dispositivo.

Para obtener más información sobre Plaspy y cómo soporta dispositivos de rastreo GPS, visite https://www.plaspy.com. Para métodos de configuración de dispositivos, comportamiento de firmware y detalles del fabricante más recientes para el Gosafe G1C, verifique la información actual en el sitio oficial de Gosafe https://gosafesystem.com/ ya que las especificaciones y pasos de configuración del fabricante pueden cambiar con el tiempo.
