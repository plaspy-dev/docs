---
slug: /gosafe/g777/configuration
id: g777-configuration
sidebar_label: Configuration
title: Gosafe - G777 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador OBD II Gosafe G777 y usarlo con Plaspy mediante servidor compartido y detección automática de protocolo
keywords:
  - Gosafe G777 configuración
  - Gosafe G777 instalación
  - Gosafe G777 Plaspy
  - configuración rastreador GPS Gosafe
  - configuración rastreador OBD II Gosafe
  - configuración seguimiento G777
  - configuración servidor G777
  - configuración rastreador vehículo Plaspy
  - integración dispositivo Gosafe
  - seguimiento de flotas G777
---

# Gosafe - Configuración del G777

Esta página documenta el contexto público de configuración para usar el rastreador OBD II Gosafe G777 con la plataforma Plaspy. Se centra en los detalles prácticos del servidor y del flujo de trabajo necesarios para apuntar el dispositivo a Plaspy y verificar que el rastreador reporte correctamente. Es una referencia técnica dirigida a instaladores, administradores de flotas y evaluadores técnicos.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo una vez que éste reporta a la plataforma. Los pasos exactos en el lado del fabricante para el G777 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor usadas para programar la unidad. Consulte siempre la documentación del fabricante para las interfaces específicas del dispositivo y las notas de firmware más recientes.

## Resumen de configuración

El objetivo al configurar el G777 para Plaspy es preparar el rastreador para que se comunique de forma confiable con el servidor de Plaspy, confirmar la conectividad y permitir que el dispositivo aparezca y sea gestionado en la plataforma. Este proceso se centra en actualizar el endpoint de reporte y los detalles de transporte, aplicar la configuración y verificar que la telemetría llegue a Plaspy.

- Apuntar el G777 al endpoint del servidor Plaspy para que la ubicación y los eventos lleguen a la plataforma
- Usar el puerto y los ajustes de transporte compartidos por Plaspy que aplican a todos los dispositivos soportados
- Guardar y aplicar los cambios en la herramienta de configuración del fabricante o en la interfaz del dispositivo
- Validar la conectividad y confirmar que el rastreador sea visible en Plaspy después de reportar
- Resolver problemas relacionados con la elección del transporte y las diferencias de firmware si el dispositivo no se registra

## Ajustes del servidor Plaspy

Al configurar el G777 para reportar a Plaspy, use los siguientes ajustes públicos exactamente como se indican:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y depende de la detección automática de protocolo para interpretar los datos entrantes de los rastreadores.

## Requisitos típicos antes de la configuración

- Confirmar que el G777 está instalado y recibiendo alimentación desde el puerto OBD II del vehículo
- Tener acceso al método o software oficial de Gosafe para configurar y programar el G777
- Verificar que el dispositivo esté encendido y en un estado que permita actualizaciones de configuración
- Contar con los datos de identificación del rastreador necesarios para su cuenta Plaspy o el proceso de inventario
- Verificar que la instalación y el montaje en el vehículo estén completos para que el dispositivo pueda obtener fijaciones GPS tras la configuración

## Cómo se conecta este rastreador a Plaspy

El G777 se configura para enviar sus reportes de posición y eventos a un endpoint y puerto del servidor Plaspy donde Plaspy analizará el protocolo entrante y presentará el dispositivo en la plataforma. Una vez que el dispositivo se comunica con el endpoint de Plaspy, Plaspy detecta automáticamente el protocolo y procesa las actualizaciones de posición y los mensajes de eventos.

- El rastreador se apunta a d.plaspy.com o a la IP 54.85.159.138 como host de reporte
- Todos los reportes se envían al puerto 8888 que Plaspy usa para dispositivos soportados
- Seleccione UDP o TCP como transporte en el rastreador si la configuración del dispositivo requiere elegir un transporte
- Plaspy recibe los datos y realiza la detección automática de protocolo para interpretar los mensajes del rastreador
- Tras un reporte exitoso, el dispositivo se vuelve visible y comienza a enviar telemetría a Plaspy

## Flujo típico de configuración

Siga este flujo práctico para configurar un G777 para la integración con Plaspy:

1. Acceda al método o software oficial de Gosafe utilizado para programar el G777
2. En los ajustes de servidor del dispositivo ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138
3. Configure el puerto del servidor en 8888 según lo requiere Plaspy
4. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP según la preferencia del instalador o la guía del dispositivo
5. Aplique o guarde la configuración en la herramienta del fabricante o en la interfaz del dispositivo
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para aplicar los cambios
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con la telemetría esperada

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el G777 dependen de las herramientas de Gosafe y del firmware del dispositivo. No se incluye aquí un conjunto público de comandos. Use la utilidad oficial de configuración de Gosafe o las instrucciones proporcionadas por el vendedor para ingresar los valores de host y puerto de Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888, y para seleccionar UDP o TCP si el dispositivo lo requiere.

Si dispone de un conjunto de comandos del fabricante o de una plantilla de configuración por SMS, aplique los mismos valores de host y puerto y siga el orden recomendado por Gosafe. Conserve cualquier marcador de posición que proporcione el fabricante cuando esté presente y consulte la documentación oficial de Gosafe para ejemplos de comandos exactos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de usuario de configuración o la sintaxis de comandos; consulte las notas de firmware de Gosafe cuando estén disponibles
- La elección entre UDP o TCP puede afectar el comportamiento de entrega de mensajes según su red y preferencia de instalación; pruebe ambos si es necesario
- Plaspy usa un único puerto compartido 8888 para todos los dispositivos, por lo que solo necesita configurar el mismo puerto en el G777
- La detección automática de protocolo en Plaspy reduce la necesidad de especificar detalles del protocolo en la plataforma una vez que el rastreador reporta
- Mantenga siempre una copia de la configuración original del dispositivo por si necesita revertir los ajustes después de las pruebas

## Por qué usar Plaspy con esta configuración

Configurar el Gosafe G777 para reportar a Plaspy ofrece una forma sencilla de centralizar la visibilidad de los vehículos, el reporte de eventos y el monitoreo operativo en una única plataforma. Para administradores de flotas y propietarios de vehículos, la combinación de un rastreador OBD II programable y una plataforma que detecta protocolos automáticamente puede simplificar el despliegue y reducir la carga de configuración por dispositivo.

Learn more about integrating trackers and fleet devices with Plaspy at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the current information on the official Gosafe website https://gosafesystem.com/
