---
slug: /cantrack/c32/configuration
id: c32-configuration
sidebar_label: Configuration
title: CanTrack - C32 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CanTrack C32 con los ajustes de servidor Plaspy y pasos prácticos para seguimiento en tiempo real
keywords:
  - configuración CanTrack C32
  - instalación CanTrack C32
  - CanTrack C32 Plaspy
  - configuración rastreador GPS C32
  - configuración rastreador vehicular CanTrack
  - configuración servidor Plaspy
  - ajustes servidor rastreador GPS
  - configuración plataforma seguimiento vehicular
  - configuración software C32
  - integración CanTrack con Plaspy
---

# CanTrack - Configuración del C32

Esta página explica el contexto público de configuración para usar el rastreador CanTrack C32 con Plaspy. Describe los ajustes de servidor prácticos y los pasos habituales que deberá seguir en el lado del fabricante o instalador para apuntar un C32 a la plataforma Plaspy, tomando la descripción del producto C32 como base para la guía de configuración.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere esta página como una guía práctica de integración, no como un reemplazo de la documentación oficial de CanTrack.

## Visión general de la configuración

Configurar el CanTrack C32 para Plaspy prepara el dispositivo para enviar datos de ubicación y estado a Plaspy, de modo que el rastreador sea visible y gestionable en la plataforma. El objetivo es garantizar que el equipo esté alimentado, sea accesible por el método de conectividad elegido y tenga la dirección y puerto del servidor Plaspy correctos para que los datos lleguen de forma fiable.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que la telemetría y los eventos lleguen a la plataforma.
- Seleccionar el tipo de transporte (UDP o TCP) si el equipo requiere elegirlo.
- Configurar el puerto compartido de Plaspy para que el dispositivo y la plataforma se comuniquen por el canal esperado.
- Guardar y aplicar la configuración en el C32 mediante la herramienta del fabricante o por SMS.
- Verificar la conectividad y que la ubicación en tiempo real y los eventos aparezcan en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: The C32 may be configured to use UDP or TCP on port 8888
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la configuración

- El CanTrack C32 está alimentado y accesible para configuración (instalado o temporalmente alimentado sobre una mesa de trabajo).
- Acceso al método oficial de configuración de CanTrack, como el software del proveedor, herramienta web o el conjunto de comandos por SMS.
- El IMEI o identificador del dispositivo registrado para vincularlo en la plataforma si su flujo de trabajo lo requiere.
- Conectividad de red adecuada para el rastreador instalado (asegúrese de que el entorno de instalación permita que el dispositivo alcance el servidor Plaspy).
- Acceso a las credenciales de la cuenta Plaspy o información de soporte para confirmar el registro y la visibilidad del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el C32 reporta posición y estado al endpoint y puerto compartidos de Plaspy para que los administradores de flota y operadores puedan monitorizar los dispositivos en la plataforma. Plaspy acepta el protocolo entrante y gestiona automáticamente la detección para que los dispositivos aparezcan en el formato correcto.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com en el puerto 8888
- Mensajes de eventos y alarmas se entregan al mismo endpoint de Plaspy para procesamiento central
- El dispositivo puede reportar información de estado como encendido, alimentación y otros campos definidos por el C32
- El procesamiento en la plataforma detecta automáticamente el protocolo del rastreador una vez que los paquetes llegan a d.plaspy.com
- Use UDP o TCP según lo requiera el dispositivo o la instalación; Plaspy soporta ambos transportes

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de CanTrack para el C32 (aplicación del fabricante, herramienta de configuración o conjunto de comandos documentado).
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o como la IP 54.85.159.138 según el campo disponible.
3. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP si la configuración del dispositivo requiere elegir un tipo de transporte.
5. Aplique o guarde la configuración en el rastreador usando la herramienta del fabricante o el proceso de comandos.
6. Reinicie el dispositivo si el fabricante lo exige para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y las actualizaciones en vivo en la plataforma Plaspy.

## Ejemplo de comandos de configuración

Los comandos exactos de configuración y el método para enviarlos dependen del firmware de CanTrack y del canal de configuración que proporcione el fabricante. Algunos instaladores usan una herramienta de configuración para Windows, otros usan comandos por SMS y algunos emplean un método de aprovisionamiento OTA. Dado que los métodos varían, consulte la documentación de CanTrack para la sintaxis y la secuencia exacta de comandos del C32.

Si dispone de un conjunto concreto de comandos de CanTrack del fabricante, utilice sus comandos publicados para establecer:
- dirección del servidor a d.plaspy.com o 54.85.159.138
- puerto del servidor a 8888
- transporte a UDP o TCP (si es necesario)
- aplicar/guardar y reiniciar el dispositivo

Conserve cualquier marcador de posición de los comandos del fabricante (por ejemplo marcadores para APN, usuario o contraseña) exactamente como los provea CanTrack.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos y la ubicación de menús en las herramientas de CanTrack; siempre confirme los comandos correctos para su revisión de firmware.
- Elegir UDP o TCP es una opción del dispositivo; ambos son compatibles con Plaspy y la plataforma detectará el protocolo automáticamente.
- Debido a que Plaspy usa un único puerto para todos los dispositivos, configurar el puerto 8888 es un paso universal para la compatibilidad con la plataforma.
- Las funciones OTA y la capacidad de actualización remota son características del modelo, pero pueden requerir pasos adicionales del fabricante para habilitarlas.
- Guarde una copia de la configuración original del dispositivo antes de realizar cambios para poder revertir si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack C32 con Plaspy ofrece a las organizaciones una forma práctica de centralizar los datos de seguimiento de vehículos, motocicletas y bicicletas eléctricas en una sola plataforma. Apuntar el C32 a Plaspy con los ajustes de servidor compartidos permite a los operadores recibir actualizaciones de ubicación, monitorizar eventos y gestionar dispositivos sin necesidad de configurar puertos por dispositivo en el servidor.

Learn more about Plaspy and how it can host devices like the CanTrack C32 at https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and command syntax for the C32, verify the manufacturer documentation at https://www.cantrackgps.com/ as methods and firmware versions may change over time.
