---
slug: /topfly/tlw2_12bl/configuration
id: tlw2_12bl-configuration
sidebar_label: Configuration
title: TopFly - TLW2-12BL Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el rastreador GPS TopFly TLW2 12BL con ajustes de servidor Plaspy y configuración por SMS
keywords:
  - Configuración TopFly TLW2 12BL
  - Instalación TopFly TLW2 12BL
  - Configuración TLW2 12BL Plaspy
  - Configuración rastreador GPS TopFly
  - Ajustes servidor TLW2 12BL
  - Comandos SMS TLW2 12BL
  - Configuración TopFly para Plaspy
  - Configuración rastreador GPS vehicular
  - Seguimiento de flotas TLW2 12BL
  - Configuración rastreador Plaspy
---

# TopFly - Configuración TLW2-12BL

Esta página documenta el contexto público de configuración para usar el rastreador GPS TopFly TLW2-12BL con la plataforma Plaspy. Resume los ajustes a nivel de planificación y los pasos prácticos que usted puede seguir para apuntar el dispositivo a Plaspy, incluyendo los comandos SMS que aparecen en la documentación del dispositivo y los valores compartidos del servidor Plaspy necesarios para el reporte.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos y el flujo descritos más abajo sirven como referencia práctica pública y deben verificarse con la documentación oficial de TopFly cuando sea necesario.

## Resumen de configuración

Preparar un TLW2-12BL para Plaspy implica configurar el rastreador para que se conecte al endpoint del servidor Plaspy, asegurarse de que los datos móviles o el control por SMS funcionen, y validar que la posición y la telemetría lleguen a la plataforma. El ejemplo modelConfiguration que sigue muestra una configuración basada en SMS que usan muchos instaladores para la puesta en marcha básica.

- Configure los ajustes de red del dispositivo para que pueda alcanzar el endpoint y el puerto del servidor Plaspy.
- Establezca el APN y las credenciales correctas para la tarjeta SIM instalada para que se pueda usar GPRS.
- Apunte el rastreador al endpoint de reporte de Plaspy y confirme el protocolo de transporte si el dispositivo lo requiere.
- Defina un intervalo de subida apropiado para que Plaspy reciba la frecuencia de actualizaciones de posición deseada.
- Verifique la conectividad del dispositivo y la visibilidad en vivo en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device configuration needs  
- Plaspy automatically detects the tracker protocol when devices report to the shared endpoint

## Requisitos típicos antes de la configuración

- Un TLW2-12BL instalado y con alimentación, con acceso a su interfaz de SMS o de configuración.
- Una tarjeta SIM activa con plan de datos y el APN correcto para el operador móvil.
- Capacidad para enviar comandos SMS desde un teléfono o una herramienta de configuración si el dispositivo usa setup por SMS.
- Conocimiento de la contraseña del dispositivo o de la contraseña por defecto para autorizar los comandos de configuración (en los ejemplos se muestra la contraseña por defecto).
- Acceso a la documentación oficial de TopFly o a las herramientas del proveedor para instrucciones específicas de firmware.
- Una cuenta en Plaspy y el identificador del dispositivo objetivo disponible para confirmar que el equipo aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TLW2-12BL envía posición y telemetría a Plaspy transmitiendo paquetes de datos al endpoint y puerto compartidos de Plaspy. Plaspy ingiere coordenadas GNSS, cambios de estado y telemetría, y las presenta en mapas, paneles y reportes.

- Los reportes del dispositivo se envían al endpoint de Plaspy en d.plaspy.com o a la IP 54.85.159.138 usando el puerto 8888.
- El rastreador puede usar UDP o TCP como transporte según la configuración del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo usado por el rastreador, de modo que los equipos pueden verse sin seleccionar un protocolo personalizado en la plataforma.
- Las actualizaciones de ubicación y telemetría aparecen en Plaspy después de que el rastreador se conecte y autentique correctamente al endpoint compartido.
- El almacenamiento en memoria del equipo sube los puntos guardados a Plaspy cuando la conectividad se restablece tras una caída.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de TopFly para el TLW2-12BL, como el conjunto de comandos SMS o el software de configuración del proveedor.
2. Configure el APN del operador móvil y las credenciales de la SIM para que el dispositivo pueda usar datos GPRS.
3. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto 8888 para el reporte saliente.
5. Elija UDP o TCP si el dispositivo requiere la selección explícita del transporte.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el flujo del equipo lo solicita.
7. Valide que el dispositivo reporte a Plaspy y que las posiciones y la telemetría sean visibles en la plataforma.

## Ejemplo de comandos de configuración

El TLW2-12BL admite comandos de configuración por SMS según la documentación pública. Los comandos de ejemplo siguientes usan la contraseña por defecto del dispositivo 0000 y configuran la zona horaria, el APN, la IP y puerto del servidor Plaspy y un intervalo de reporte. Conserve los marcadores de posición cuando reemplace valores de APN.

- La contraseña por defecto usada en los ejemplos es 0000.
- Envíe cada línea como un SMS separado al número del rastreador.

GMT command to set time zone (example sets UTC 0)
```
GMT,0000,0#
```

APN command to set the mobile operator APN and optional APN username and password
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} placeholder is the operator APN string.
- {{apnu}} and {{apnp}} are optional APN username and APN password placeholders used if your carrier requires them.

GPRS server command using the public Plaspy server IP and port 8888
```
IP,0000,54.85.159.138 8888#
```
- This command sets the device to report to Plaspy using the provided IP and port. Some firmware variants accept a domain name instead of an IP; consult TopFly docs if you prefer to use d.plaspy.com.

Timer command to set reporting interval for position updates (example sets 60 seconds)
```
TIMER,0000,60:60:0:0#
```

## Notas de configuración

- Las variaciones de firmware pueden aceptar nombres de dominio o requerir una sintaxis ligeramente distinta para IP y puerto. Si necesita soporte de dominio, revise las notas de firmware de TopFly antes de cambiar de IP a d.plaspy.com.
- El TLW2-12BL soporta configuración por SMS como se muestra, pero los instaladores también pueden usar herramientas del proveedor o aprovisionamiento en la nube dependiendo del firmware y las herramientas disponibles.
- Elija UDP o TCP según la fiabilidad de la red y sus preferencias operativas; Plaspy soporta ambos protocolos y detecta automáticamente el que utilicen los dispositivos.
- Mantenga la contraseña del dispositivo segura y cambie las credenciales por defecto cuando el dispositivo lo permita.
- Valide tanto las actualizaciones en vivo inmediatas como la subida de puntos en búfer tras una interrupción de red para confirmar el comportamiento de extremo a extremo.

## Por qué usar Plaspy con esta configuración

Usar el TLW2-12BL con Plaspy ofrece a los operadores de flotas actualizaciones de posición precisas y de alta frecuencia y un endpoint único para la ingestión de telemetría. La detección automática de protocolos de Plaspy y la configuración de servidor compartida simplifican la incorporación de múltiples modelos de dispositivos, ya que todos los equipos compatibles usan el mismo puerto y endpoint de reporte.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior and manufacturer details verify the official TopFly documentation at https://www.topflytech.com/
