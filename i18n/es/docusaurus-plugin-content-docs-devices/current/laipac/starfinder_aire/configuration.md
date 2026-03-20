---
slug: /laipac/starfinder_aire/configuration
id: starfinder_aire-configuration
sidebar_label: Configuration
title: Laipac - StarFinder AIRE Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar Laipac StarFinder AIRE a Plaspy con ajustes de servidor compartidos y pasos prácticos de configuración
keywords:
  - Configuración Laipac StarFinder AIRE
  - Configuración rastreador Laipac
  - Configuración StarFinder AIRE Plaspy
  - Ajustes servidor GPS
  - Integración dispositivo Plaspy
  - Configuración rastreo vehicular
  - Configuración plataforma GPS
  - Configuración monitoreo rastreador
  - Configuración dispositivo Laipac
  - Rastreo de flotas Plaspy
---

# Laipac - StarFinder AIRE Configuración

Esta página describe el contexto público de configuración para usar el Laipac StarFinder AIRE con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y en los pasos generales que debe seguir para preparar el dispositivo y que reporte a Plaspy, permitiendo visibilidad, notificaciones y seguimiento. Use esta guía junto con la documentación oficial de Laipac y las herramientas del proveedor que tenga disponibles.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El StarFinder AIRE soporta funciones como conectividad GSM GPRS, geocercas, detección de movimiento, salidas de relé y actualización de parámetros por aire, características habituales al integrar con plataformas como Plaspy.

## Resumen de la configuración

Configurar el StarFinder AIRE para Plaspy garantiza que el dispositivo pueda alcanzar el endpoint de Plaspy, autenticarse o registrarse según su flujo de trabajo y reportar telemetría y eventos para monitoreo en tiempo real. Este proceso prepara al rastreador para una comunicación confiable y verifica que el dispositivo aparezca en el sistema de Plaspy.

- Ingrese el endpoint compartido de Plaspy y el puerto de red para que el rastreador pueda establecer conectividad uplink
- Seleccione el protocolo de transporte compatible, UDP o TCP, y confirme la opción en el dispositivo
- Verifique que el rastreador envíe mensajes de posición y eventos para que el dispositivo sea visible en Plaspy
- Guarde y aplique los cambios de configuración y reinicie el rastreador si se requiere para activar los nuevos ajustes
- Valide que lleguen a Plaspy alertas como eventos de geocerca, detección de movimiento y desconexión de alimentación

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes de servidor de Plaspy al configurar el StarFinder AIRE. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy performs automatic protocol detection for incoming tracker connections

## Requisitos previos para la configuración

- Un StarFinder AIRE con batería cargada y alimentación conectada, y la antena externa requerida instalada
- Una SIM válida provisionada para datos GPRS si planea usar la red celular para reportes
- Acceso al método de configuración oficial de Laipac o al software del proveedor, por ejemplo el cable de programación o la herramienta de configuración OTA
- Una cuenta de Plaspy o acceso a su despliegue de Plaspy para confirmar que el dispositivo aparece tras la configuración
- El cable de programación micro USB u otro accesorio necesario para la configuración local
- Conocimiento del IMEI u otro identificador del dispositivo que use en su cuenta de Plaspy para el registro

## Cómo se conecta este rastreador a Plaspy

El StarFinder AIRE normalmente envía datos de posición y eventos al endpoint de Plaspy por GPRS usando el transporte configurado. Una vez apuntado a Plaspy, el dispositivo establecerá sesiones y transmitirá mensajes que Plaspy ingestará y asociará a sus vistas de flota y alertas.

- Los uplinks del dispositivo se dirigen al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- El rastreador puede usar transporte UDP o TCP al enviar datos a Plaspy según la configuración del equipo
- Plaspy detecta automáticamente el protocolo que utiliza el rastreador, por lo que el mismo puerto puede emplearse para distintos dispositivos
- Los eventos típicos reportados incluyen actualizaciones de posición en tiempo real, alertas de entrada/salida de geocerca, alertas de movimiento o impacto desde el sensor G y notificaciones de desconexión de energía
- Una vez que los mensajes llegan a Plaspy, el dispositivo aparece en la plataforma para seguimiento y análisis

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Laipac o al software proporcionado por el vendedor, por ejemplo mediante el cable de programación micro USB, la utilidad del fabricante o la actualización de parámetros por aire
2. Ubique las opciones de servidor TCP/UDP o servidor remoto en la interfaz de configuración del dispositivo
3. Ingrese el servidor como d.plaspy.com o, alternativamente, use la IP 54.85.159.138
4. Configure el puerto en 8888, que es el que Plaspy utiliza para todos los dispositivos compatibles
5. Seleccione UDP o TCP si el equipo requiere que se especifique el transporte de forma explícita
6. Aplique o guarde la configuración en el dispositivo y reinícielo si es necesario para que los ajustes entren en vigor
7. Valide que el dispositivo reporte a Plaspy comprobando en su cuenta de Plaspy los mensajes entrantes y el estado del equipo

## Ejemplos de comandos de configuración

Los comandos exactos y el formato para configurar el StarFinder AIRE dependen del firmware de Laipac y de la herramienta del proveedor que utilice. Los dispositivos Laipac suelen configurarse mediante la utilidad del fabricante, el cable de programación o actualizaciones OTA. Dado que los conjuntos de comandos varían según la versión de firmware y la herramienta, consulte la guía de programación oficial de Laipac o el soporte del proveedor para obtener los comandos SMS o serie precisos para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP.

## Notas de configuración

- Las revisiones de firmware y modelo pueden cambiar nombres de parámetros y la sintaxis de comandos, por lo que siempre revise la documentación de Laipac para su revisión de hardware específica
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, así que solo necesita ingresar servidor y puerto una vez por dispositivo
- Si el dispositivo ofrece tanto UDP como TCP, elija el transporte que se ajuste a sus necesidades operativas; Plaspy soporta ambos y detectará el protocolo automáticamente
- Si usa configuración por aire, permita tiempo para que el dispositivo reciba y aplique los parámetros y para que llegue el primer mensaje a Plaspy
- Mantenga un registro de identificadores de dispositivos como el IMEI para poder relacionar los datos entrantes con las entradas en Plaspy

## Por qué usar Plaspy con esta configuración

Integrar el StarFinder AIRE con Plaspy ofrece a las organizaciones una forma práctica de centralizar los datos de rastreo de vehículos y activos en una única plataforma de monitoreo. Con el dispositivo reportando posición y eventos a Plaspy, los operadores obtendrán visibilidad en tiempo real, recibirán alertas por movimiento y geocercas, y podrán supervisar el estado operacional para mejorar la gestión de activos.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el Laipac StarFinder AIRE visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, detalles de firmware y orientación de instalación, verifique la documentación oficial de Laipac en https://laipac.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
