---
slug: /gotop/g25c/configuration
id: g25c-configuration
sidebar_label: Configuration
title: GOTOP - G25C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para el rastreador GOTOP G25C y su integración con Plaspy
keywords:
  - configuración GOTOP G25C
  - instalación GOTOP G25C
  - configuración servidor GOTOP G25C
  - GOTOP G25C Plaspy
  - configuración rastreador GPS G25C
  - instalación rastreador GOTOP
  - configuración rastreador 4G G25C
  - seguimiento vehicular G25C
  - configuración APN GOTOP G25C
  - configuración SMS GOTOP G25C
---

# GOTOP - Configuración G25C

Esta página documenta el contexto público de configuración para usar el rastreador GPS GOTOP G25C con la plataforma Plaspy. Resume los ajustes públicos del servidor Plaspy que debe ingresar en el dispositivo y explica pasos prácticos de instalación y comprobaciones habituales para la integración. El contenido está pensado para ayudar a técnicos y administradores a preparar el equipo para comunicarse con Plaspy en base a los parámetros públicos disponibles.

Plaspy utiliza un único endpoint y puerto compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante para el G25C pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice (SMS, herramienta web o software de configuración). Use esta guía como referencia práctica centrada en Plaspy y verifique los comandos y menús específicos del dispositivo en la documentación de GOTOP.

## Resumen de la configuración

El objetivo al configurar un GOTOP G25C para Plaspy es dirigir el rastreador al endpoint de Plaspy, confirmar conectividad celular y satelital fiable, y validar que los datos de posición y eventos aparezcan en la plataforma. Los ajustes normalmente se aplican mediante la herramienta del proveedor, SMS o la interfaz de configuración del G25C y luego se prueban en Plaspy.

- Configure el rastreador para que informe al endpoint de Plaspy y así la telemetría llegue al puerto compartido de la plataforma.
- Ajuste el transporte y el puerto del dispositivo para asegurar que los paquetes alcancen Plaspy (UDP o TCP en el puerto 8888).
- Verifique la conectividad celular y los parámetros APN para que el G25C pueda enviar datos vía 4G LTE.
- Valide el bloqueo GPS/BDS y confirme que las actualizaciones de ubicación se muestran en Plaspy.
- Pruebe la notificación de alarmas y eventos como movimiento, batería baja y geocercas para asegurarse de que las alertas lleguen a la plataforma.

## Ajustes del servidor de Plaspy

Al configurar cualquier dispositivo para usar con Plaspy, utilice las siguientes configuraciones públicas exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives and all devices in Plaspy use the same port

## Requisitos previos habituales

- Un GOTOP G25C cargado con batería suficiente o alimentación externa para la configuración y las pruebas
- Servicio celular activo o una SIM con plan de datos y APN correctos configurados en el dispositivo
- Acceso al método de configuración oficial de GOTOP para el G25C, como comandos SMS, software del proveedor o la interfaz web del dispositivo
- Visibilidad de cielo despejado durante el bloqueo inicial de GPS para validar la posición satelital (GPS/BDS)
- IMEI del dispositivo o datos de identificación disponibles para el registro y verificación en la plataforma
- Una cuenta en Plaspy o acceso a la plataforma para validar que el dispositivo informa correctamente al servidor

## Cómo se conecta este rastreador a Plaspy

El G25C envía mensajes de ubicación, estado y alarmas a través de su conexión LTE al endpoint y puerto del servidor Plaspy. Plaspy recibe los datos en el puerto compartido y emplea detección de protocolo para interpretar los mensajes entrantes de los protocolos de rastreador compatibles.

- El rastreador se dirige a enviar paquetes a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Seleccione el transporte UDP o TCP en el dispositivo si requiere una selección explícita
- El G25C transmite actualizaciones periódicas de ubicación y notificaciones de eventos a Plaspy
- Condiciones de alarma como movimiento, batería baja, geocerca y alertas por desconexión se remiten a la plataforma cuando se disparan
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario configurar un nombre de protocolo en el lado de la plataforma

## Flujo típico de configuración

1. Acceda al método de configuración oficial de GOTOP para el G25C (comandos SMS, aplicación del proveedor o herramienta web).
2. Localice los ajustes de servidor o reporte en el menú del dispositivo donde se introduce el dominio o la IP del servidor.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor según la herramienta del dispositivo que esté usando.
4. Configure el puerto en 8888 para el endpoint de Plaspy.
5. Elija UDP o TCP como transporte si el dispositivo exige una selección explícita.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo o firmware requiere reboot para aplicar los cambios.
7. Valide que el dispositivo informa a Plaspy comprobando en la plataforma que aparezca el estado en línea y verificando las actualizaciones de ubicación y mensajes de eventos.

## Ejemplos de comandos de configuración

El GOTOP G25C admite configuración mediante las herramientas del proveedor y mediante parámetros por SMS, pero los formatos exactos de los comandos varían según el firmware y la región. Dado que la sintaxis concreta de SMS o comandos es específica del fabricante y no se proporciona aquí, consulte el manual del usuario del GOTOP G25C para las cadenas de comando exactas.

Canales de configuración comunes que puede usar:
- Comandos SMS enviados desde un teléfono móvil al dispositivo para ajustes de servidor, puerto y APN (la sintaxis varía según el firmware)
- Una utilidad de configuración GOTOP o interfaz web donde puede introducir el dominio o IP del servidor y el puerto
- Archivos de configuración del fabricante usados con el software del proveedor

Consulte siempre la documentación de GOTOP para conocer los formatos de comando precisos y el orden correcto si decide usar la configuración por SMS.

## Notas de configuración

- Las diferencias de firmware pueden cambiar cómo y dónde aparecen las opciones de servidor, puerto y transporte en el menú del dispositivo; verifique los pasos para su revisión de firmware.
- TCP y UDP están soportados por Plaspy en el puerto 8888; elija el transporte que coincida con su instalación o la recomendación del proveedor. Plaspy detectará el protocolo automáticamente.
- Si utiliza configuración por SMS, confirme la sintaxis exacta en el manual de GOTOP antes de enviar comandos para evitar errores de configuración.
- Verifique los ajustes APN con el proveedor de la SIM si el dispositivo no se conecta por 4G LTE.
- Mantenga un registro del IMEI del dispositivo y de cualquier identificador configurado para facilitar la localización y validación en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP G25C para que informe a Plaspy ofrece un endpoint centralizado y coherente para recibir datos de ubicación y eventos de múltiples dispositivos. Para organizaciones que requieren visibilidad operativa, el enfoque de servidor compartido de Plaspy simplifica la puesta en marcha al usar un servidor y puerto comunes mientras gestiona automáticamente la detección de protocolos.

Para obtener más información sobre Plaspy y las funcionalidades de la plataforma, visite https://www.plaspy.com. Para detalles actuales del dispositivo GOTOP G25C, actualizaciones de firmware y la sintaxis exacta de comandos SMS o del proveedor, consulte https://www.gotop.cc/.
