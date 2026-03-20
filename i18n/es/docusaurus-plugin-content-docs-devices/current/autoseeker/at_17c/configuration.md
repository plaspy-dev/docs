---
slug: /autoseeker/at_17c/configuration
id: at_17c-configuration
sidebar_label: Configuration
title: Autoseeker - AT-17C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Autoseeker AT-17C con Plaspy, incluyendo servidor y pasos prácticos
keywords:
  - Configuración Autoseeker AT-17C
  - Instalación Autoseeker AT-17C
  - Integración AT-17C Plaspy
  - Configuración de servidor AT-17C
  - Configuración de rastreador GPS Plaspy
  - Guía de instalación rastreador de activos
  - Configuración rastreador magnético de activos
  - Configuración GPRS TCP
  - Configuración reporte por SMS
  - Instalación rastreador de larga duración
---

# Autoseeker - Configuración AT-17C

Esta página ofrece contexto público para la configuración del rastreador de activos Autoseeker AT-17C con Plaspy. Se centra en los ajustes de servidor compartido y las consideraciones prácticas necesarias para apuntar el dispositivo a Plaspy, de modo que la plataforma pueda recibir datos de ubicación y alarmas desde la unidad.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto de escucha para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración del fabricante para el AT-17C pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor; siga la documentación del fabricante junto con estos ajustes específicos para Plaspy.

## Resumen de configuración

Preparar el AT-17C para Plaspy principalmente implica configurar el rastreador para que reporte su telemetría al endpoint de ingestión de Plaspy y verificar la conectividad. Los siguientes puntos describen los objetivos prácticos del proceso de configuración.

- Apuntar el dispositivo al endpoint público de Plaspy para que la telemetría se enrute a su cuenta en la plataforma.
- Configurar la capa de transporte y el puerto que usará el rastreador para comunicarse con Plaspy.
- Verificar la conectividad celular y el modo de reporte para que el dispositivo pueda enviar informes por GPRS TCP o SMS según corresponda.
- Validar que las posiciones, alarmas y eventos de manipulación sean visibles en Plaspy después de que el dispositivo esté en línea.
- Guardar y aplicar la configuración en el rastreador y, si es necesario, reiniciar el dispositivo para comenzar a reportar.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el AT-17C. Plaspy requiere el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo que usa el rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data arrives

## Requisitos habituales antes de la configuración

- Una unidad AT-17C con batería cargada o alimentación temporal suficiente para la configuración inicial y las pruebas.
- Una tarjeta SIM activa con plan de datos y capacidad de SMS si va a usar reportes por GPRS TCP o por SMS.
- Acceso al método de configuración oficial de Autoseeker o al software del proveedor para la revisión de firmware de su equipo.
- Conocimiento del APN del dispositivo y de cualquier credencial de la SIM requerida por su operador móvil.
- Una cuenta o acceso a Plaspy donde pueda confirmar que el dispositivo aparece y reporta.
- Un entorno de prueba o una ubicación temporal con cobertura celular para validar el envío de informes.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el AT-17C envía datos de ubicación y alarmas al endpoint y puerto compartido de ingestión de Plaspy. Plaspy recibe la telemetría entrante, detecta automáticamente el protocolo del dispositivo y muestra posiciones, alarmas e historial en la plataforma.

- El rastreador se apunta a d.plaspy.com o al IP de respaldo 54.85.159.138 para que la telemetría se enrute a Plaspy.
- Los datos se envían por el puerto 8888, que Plaspy utiliza para todas las conexiones de dispositivos.
- El dispositivo puede reportar por GPRS TCP o vía SMS según la configuración y la disponibilidad de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al registro del dispositivo.
- Una vez que el dispositivo reporte, Plaspy mostrará posiciones en vivo, alertas de manipulación y los informes programados según la configuración del equipo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Autoseeker o al software del proveedor para el AT-17C correspondiente a su revisión de firmware y hardware.
2. En los ajustes de servidor o APN del dispositivo, introduzca el dominio del servidor de Plaspy d.plaspy.com o use la IP 54.85.159.138 si su herramienta requiere una dirección IP.
3. Establezca el puerto en 8888, ya que Plaspy utiliza el mismo puerto en todos los dispositivos.
4. Elija el protocolo de transporte UDP o TCP si el rastreador requiere una selección explícita.
5. Ingrese el APN o las credenciales del operador de la SIM si su proveedor las exige, luego aplique o guarde la configuración.
6. Reinicie el dispositivo si el fabricante recomienda un reboot para aplicar los nuevos ajustes de red.
7. Valide que el AT-17C reporte a Plaspy revisando su cuenta en la plataforma para ver posición en vivo, telemetría o eventos de alarma.

## Ejemplos de comandos de configuración

El AT-17C soporta reportes por GPRS TCP y por SMS, pero los comandos y formatos específicos de configuración varían según el firmware y la herramienta de configuración de Autoseeker que utilice. Dado que las herramientas del fabricante y los formatos de comandos SMS cambian, siga la guía oficial de Autoseeker para obtener los comandos exactos.

En la práctica, las acciones de configuración que realizará con herramientas del proveedor o por SMS suelen incluir especificar:
- el servidor como d.plaspy.com o 54.85.159.138,
- el puerto como 8888,
- el transporte como UDP o TCP,
- y las credenciales APN para la SIM instalada si son necesarias.

Si utiliza un método de configuración basado en SMS, el manual del proveedor le proporcionará la sintaxis exacta de los comandos SMS y los marcadores que deba sustituir por APN o números telefónicos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los campos de configuración disponibles y los formatos de comandos SMS; confirme siempre el procedimiento correcto para su unidad.
- Elija TCP cuando prefiera una entrega persistente y ordenada de la telemetría GPRS; UDP puede emplearse cuando esté soportado y se busque menor sobrecarga.
- El reporte por SMS puede servír como respaldo o para consultas remotas cuando la conectividad de datos sea limitada.
- Asegúrese de que el APN de la SIM y los ajustes del operador sean correctos antes de finalizar la sesión de configuración.
- Después de aplicar los ajustes, dé tiempo al dispositivo para registrarse en la red celular y empezar a reportar a Plaspy en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-17C con Plaspy ofrece visibilidad de activos de larga autonomía con reportes de alarmas integrados para la gestión de flotas y activos. Apuntar el rastreador al endpoint compartido de Plaspy permite que la plataforma detecte automáticamente el protocolo del dispositivo e ingiera la telemetría para monitoreo en tiempo real, informes históricos y flujos de trabajo de alertas por manipulación.

To learn more about Plaspy and how it consolidates location and alarm data for fleet and asset operations visit https://www.plaspy.com. For the latest device specific setup steps, SMS command formats, and firmware notes for the AT-17C consult the official Autoseeker documentation at https://autoseekergps.com/ since manufacturer procedures and firmware behavior can change over time.
