---
slug: /aoya/a206b/configuration
id: a206b-configuration
sidebar_label: Configuration
title: AoYa - A206b Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador AoYa A206b con Plaspy y la detección automática de protocolo
keywords:
  - configuración AoYa A206b
  - instalación AoYa A206b
  - configuración A206b Plaspy
  - configuración rastreador AoYa
  - configuración servidor A206b
  - rastreo vehicular A206b
  - rastreo de flotas AoYa A206b
  - configuración plataforma A206b
  - configuración dispositivo Plaspy
  - guía instalación AoYa A206b
---

# AoYa - Configuración del A206b

Esta página describe el contexto público de configuración para usar el rastreador GPS AoYa A206b con la plataforma Plaspy. Resume la información que necesita para apuntar el dispositivo a Plaspy, explica los valores compartidos del servidor requeridos y propone un flujo de trabajo seguro y general para aplicar esos ajustes al rastreador. La guía se basa en la descripción del dispositivo y en prácticas de configuración públicas, no en credenciales privadas o específicas de cada unidad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente los protocolos, por lo que el mismo endpoint y puerto se emplean para incorporar varios modelos de rastreadores. Los pasos de configuración por parte del fabricante para el A206b pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el A206b también ofrece métodos comunes de configuración como SMS o software del vendedor para definir APN y datos del servidor, que aquí se resumen a alto nivel.

## Resumen de la configuración

Preparar un AoYa A206b para Plaspy implica configurar el rastreador para que alcance el endpoint público del servidor de Plaspy y sea reconocido por la plataforma. La configuración pública típica incluye establecer el APN del operador móvil, apuntar el dispositivo a Plaspy, elegir el modo de transporte si es necesario y validar la conectividad.

- Apunte el rastreador al endpoint del servidor Plaspy y aplique el puerto compartido que utiliza la plataforma.
- Configure el APN del operador móvil para que el dispositivo tenga acceso GPRS funcional.
- Seleccione el modo de transporte (UDP o TCP) cuando el dispositivo requiera una elección explícita.
- Guarde y aplique la configuración y luego valide que el rastreador reporte a Plaspy.
- Utilice los canales de configuración del fabricante, como SMS o software del proveedor, tal como lo documenta AoYa para realizar los cambios.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Estos valores son la configuración pública de Plaspy que deberá ingresar en el dispositivo o mediante la herramienta del fabricante para que el A206b pueda establecer conexión con la plataforma.

## Requisitos previos habituales

- Un dispositivo A206b con batería cargada o alimentación conectada y listo para configuración.
- Una tarjeta SIM activa con un plan de datos y la información APN correcta proporcionada por el operador móvil.
- Acceso al método de configuración oficial de AoYa, como comandos SMS documentados o software de configuración del proveedor.
- Una cuenta en Plaspy o flujo de registro de dispositivos para confirmar que el rastreador aparece tras la configuración.
- Una forma confiable de probar la conectividad desde el lugar de la instalación, por ejemplo verificación de la señal celular.

## Cómo se conecta este rastreador a Plaspy

El A206b comunica datos de ubicación y operación a Plaspy a través de la red celular enviando su información al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos mensajes, detecta el protocolo del dispositivo y muestra el rastreador como activo en la plataforma.

- El rastreador se configura para reportar al dominio o IP del servidor Plaspy indicados arriba.
- Los datos se envían por GPRS al puerto 8888, usando UDP o TCP según la selección del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se puede usar el mismo puerto y endpoint para distintos modelos.
- Una vez que reporta, las actualizaciones de ubicación y el estado del dispositivo quedan visibles en Plaspy para monitoreo y gestión.
- La validación consiste en confirmar que el dispositivo aparece en línea en Plaspy después de guardar la configuración.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de AoYa o al software, según indique el fabricante.
2. Configure el APN del dispositivo para que tenga conexión de datos celular funcional según el operador.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP pública 54.85.159.138 según lo permita la interfaz del dispositivo.
4. Establezca el puerto de destino en 8888, conforme a los requisitos de Plaspy.
5. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
6. Guarde o aplique la configuración en el dispositivo y espere a que se conecte por datos celulares.
7. Valide que el dispositivo reporte a Plaspy y aparezca en línea en la plataforma.

Cuando el dispositivo soporte configuración por SMS o por software, use esos métodos del fabricante para establecer APN, dirección del servidor, transporte y cualquier otro parámetro requerido, siguiendo la documentación de AoYa.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración disponibles y los formatos de los comandos; siempre verifique la revisión del dispositivo antes de aplicar instrucciones.
- La elección entre UDP o TCP puede influir en el comportamiento de conectividad según las condiciones de la red y el firmware del dispositivo; seleccione el transporte que mejor se ajuste a su práctica de instalación.
- El A206b suele soportar configuración por SMS y por software del proveedor; emplee esos canales para resumir o aplicar ajustes en lugar de confiar en métodos no documentados.
- Plaspy usa el mismo puerto para los dispositivos compatibles y detectará automáticamente el protocolo del rastreador una vez que el dispositivo se conecte a d.plaspy.com o a la IP indicada.
- Confirme los detalles del APN con el operador móvil en vez de fiarse de valores por defecto que pueden variar por región o proveedor.

## Por qué usar Plaspy con esta configuración

Utilizar el AoYa A206b con Plaspy ofrece una forma sencilla de incorporar datos fiables de ubicación y operación de vehículos a una plataforma centralizada de gestión de flotas o activos. Los ajustes públicos de Plaspy permiten estandarizar en un único endpoint y puerto, mientras que la detección automática de protocolo reduce la complejidad de configuración en flotas con dispositivos mixtos.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los métodos de configuración específicos más recientes, el comportamiento del firmware y detalles del fabricante, revise la documentación oficial de AoYa en http://www.aoyagps.com/ antes de comenzar la configuración.
