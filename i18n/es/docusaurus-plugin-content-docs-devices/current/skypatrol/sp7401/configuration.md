---
slug: /skypatrol/sp7401/configuration
id: sp7401-configuration
sidebar_label: Configuration
title: SkyPatrol - SP7401 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el SkyPatrol SP7401 con Plaspy, con ajustes de servidor y flujo práctico de configuración
keywords:
  - SkyPatrol SP7401
  - Configuración SP7401
  - Ajustes servidor Plaspy
  - Configuración rastreador GPS
  - Guía SP7401
  - Configuración seguimiento vehicular
  - Rastreador CDMA
  - Configuración OBD II
  - Configuración software de rastreo
  - Rastreador para gestión de flotas
---

# SkyPatrol - Configuración SP7401

Esta página describe el contexto de configuración pública para usar el SkyPatrol SP7401 con Plaspy. Aquí encontrará los ajustes de servidor prácticos y el flujo de trabajo que debe seguir para apuntar el SP7401 a Plaspy, además de un resumen de las capacidades del equipo relevantes para la configuración. Use esta guía para preparar el SP7401 para el reporte en la nube y la visibilidad en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El SP7401 es un rastreador vehicular basado en CDMA con compatibilidad OBD II y batería de respaldo para operación continua, por lo que confirme las instrucciones del fabricante para la revisión de hardware específica que esté instalando.

## Visión general de la configuración

Este proceso prepara el SP7401 para enviar ubicación y estado de diagnóstico del vehículo a Plaspy, apuntando el dispositivo al servidor de Plaspy y verificando la conectividad. El objetivo principal es asegurarse de que el equipo pueda enviar datos de forma confiable a Plaspy para que el activo aparezca en la plataforma y reporte eventos y telemetría.

- Ingrese el endpoint del servidor de Plaspy y los ajustes de transporte en el dispositivo mediante el método de configuración del fabricante.
- Asegúrese de que el SP7401 tenga alimentación estable y las conexiones OBD II o del vehículo necesarias para datos de diagnóstico.
- Valide que el dispositivo pueda establecer una conexión de datos CDMA y transmitir al endpoint de Plaspy.
- Confirme que el identificador del dispositivo esté registrado en Plaspy para que los datos entrantes se asignen al activo correcto.
- Reinicie el rastreador si es necesario y verifique los reportes en Plaspy para completar la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto para el reporte

## Requisitos típicos antes de la configuración

- Acceso físico al SP7401 y a su punto de instalación en el vehículo
- Alimentación estable o conexión al puerto OBD II del vehículo cuando aplique
- Conocimiento del identificador del dispositivo empleado por el SP7401 para poder registrarlo o emparejarlo en Plaspy
- Acceso a la herramienta de configuración oficial de SkyPatrol o al método de instalación proporcionado por el proveedor
- Confirmación de que el rastreador tiene conectividad CDMA habilitada y una conexión de datos activa
- Una cuenta en Plaspy o la provisión en la plataforma para asegurar que los reportes entrantes se asocien con la cuenta correcta

## Cómo se conecta este rastreador a Plaspy

El SP7401 se configura para reportar al endpoint y puerto compartidos de Plaspy para que los datos de ubicación y del vehículo sean visibles en la plataforma. Una vez que el dispositivo apunte al endpoint de Plaspy y guarde la configuración, utilizará su conexión de datos CDMA para transmitir telemetría a Plaspy.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com en el puerto 8888
- Los datos se transmiten sobre la conexión de red del dispositivo usando UDP o TCP según la configuración
- Plaspy detecta automáticamente el protocolo usado por el rastreador e ingiere los mensajes entrantes
- Los diagnósticos del vehículo desde la interfaz OBD II pueden reenviarse junto con los datos GPS cuando el dispositivo esté configurado para ello
- Una configuración exitosa hace que el dispositivo aparezca y reporte en Plaspy para su monitoreo operativo

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración del SkyPatrol SP7401 provisto por el fabricante o el proveedor.
2. En los ajustes de servidor del dispositivo ingrese d.plaspy.com o, si la herramienta lo requiere, la IP 54.85.159.138.
3. Establezca el puerto de reporte en 8888 según exige Plaspy.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo pide una selección.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
6. Reinicie el SP7401 si la herramienta de configuración o la documentación del dispositivo requiere un reboot para activar los ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos o la telemetría entrante en su cuenta de Plaspy y confirmando mensajes recientes.

## Ejemplos de comandos de configuración

Los comandos y el método exacto de configuración del SP7401 varían según el firmware y la herramienta del proveedor. Los dispositivos SkyPatrol suelen configurarse mediante la herramienta del proveedor o una interfaz de gestión del dispositivo provista al adquirirlo. Debido a que las versiones de firmware y las utilidades de configuración difieren, consulte la documentación oficial de SkyPatrol o a su proveedor para la sintaxis y ejemplos exactos.

Si dispone de comandos proporcionados por el proveedor o instrucciones en formato SMS, aplíquelos mediante la herramienta del fabricante y asegúrese de que incluyan el endpoint de Plaspy d.plaspy.com o la IP 54.85.159.138 y el puerto 8888. Plaspy soporta tanto transporte UDP como TCP y detectará automáticamente el protocolo del rastreador cuando lleguen los mensajes.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres exactos de los menús o la sintaxis de comandos requerida en la herramienta de configuración de SkyPatrol.
- Elija UDP o TCP según la preferencia del instalador y el entorno de red; Plaspy acepta ambos transportes en el puerto 8888.
- Si utiliza la conexión OBD II para diagnósticos, confirme con el instalador qué PIDs de diagnóstico se reenviarán y cómo se mapearán en su cuenta Plaspy.
- Confirme siempre el identificador del dispositivo que emplea el SP7401 para que los datos entrantes se asignen al registro de activo correcto en Plaspy.
- Las herramientas del fabricante o la configuración por SMS pueden variar por mercado y revisión de hardware, por lo que verifique con la documentación de SkyPatrol.

## Por qué usar Plaspy con esta configuración

Configurar el SkyPatrol SP7401 para reportar a Plaspy ofrece visibilidad centralizada de la ubicación del vehículo y su estado operativo. Para organizaciones que dependen del rastreo GPS y de diagnósticos OBD II, usar Plaspy con un SP7401 configurado correctamente puede optimizar el monitoreo, mejorar los tiempos de respuesta y consolidar la telemetría en una sola plataforma para análisis.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, detalles de firmware y orientación del fabricante, verifique la información en el sitio de SkyPatrol https://www.skypatrol.com/ ya que el comportamiento del dispositivo y los pasos de instalación pueden cambiar con el tiempo.
