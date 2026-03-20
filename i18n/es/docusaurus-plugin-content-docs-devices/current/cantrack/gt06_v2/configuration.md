---
slug: /cantrack/gt06_v2/configuration
id: gt06_v2-configuration
sidebar_label: Configuration
title: CanTrack - GT06 v2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack GT06 v2 para apuntar el rastreador a los servidores de Plaspy y seguimiento en tiempo real
keywords:
  - Configuración CanTrack GT06 v2
  - Instalación CanTrack GT06 v2
  - Configuración servidor GT06 v2
  - Configuración Plaspy GT06 v2
  - Configuración rastreador GPS CanTrack
  - Ajustes servidor Plaspy
  - Guía configuración rastreador vehicular
  - Comandos SMS GT06 v2
  - Configuración rastreador GPRS
  - Configuración rastreo de flotas
---

# CanTrack - Configuración del GT06 v2

Esta página describe la configuración pública necesaria para usar el rastreador CanTrack GT06 v2 con Plaspy. El GT06 v2 utiliza GSM GPRS y GPS para obtener datos de ubicación y puede enviar esa información por SMS a números autorizados o por GPRS a un servidor en internet para seguimiento en tiempo real. Esta guía se centra en los pasos públicos de configuración y en ejemplos de comandos SMS para apuntar el dispositivo a Plaspy usando los ajustes compartidos del servidor de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor. El GT06 v2 admite configuración mediante SMS como muestran los ejemplos a continuación, pero usted debe verificar los procedimientos exactos en la documentación actual del fabricante si observa un comportamiento distinto.

## Visión general de la configuración

El objetivo de configurar un GT06 v2 para Plaspy es preparar el rastreador para comunicarse de forma fiable con la plataforma Plaspy, de modo que la ubicación y los eventos básicos del dispositivo sean visibles en la interfaz de seguimiento. La configuración normalmente implica definir los detalles del APN de la red, establecer el endpoint del servidor de Plaspy, elegir el protocolo de transporte si corresponde y verificar que el dispositivo reporte correctamente.

- Configure el APN del dispositivo y cualquier autenticación del operador para que el rastreador pueda usar GPRS
- Configure la dirección o dominio del servidor GPRS para apuntar a Plaspy
- Seleccione transporte UDP o TCP en el dispositivo si es necesario y establezca el puerto compartido de Plaspy
- Valide la conectividad y confirme que el equipo reporta a Plaspy para visibilidad en tiempo real
- Use comandos SMS o la herramienta oficial del fabricante según la preferencia del instalador

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note that all devices in Plaspy use the same port for server reporting

## Requisitos previos antes de la configuración

- Un GT06 v2 con alimentación y acceso a su método de configuración por SMS o la herramienta del fabricante
- Una tarjeta SIM activa en el dispositivo con datos habilitados y el APN correcto para el operador móvil
- Conocer la contraseña por defecto del rastreador para configuración por SMS si va a usar comandos SMS (la contraseña por defecto usada en los ejemplos es 123456)
- Acceso al manual de usuario de CanTrack o a la herramienta del proveedor para referencia cuando sea necesario
- Un método para monitorear el dispositivo tras la configuración y confirmar que reporta a Plaspy

## Cómo se conecta este rastreador a Plaspy

El GT06 v2 puede transmitir datos de ubicación por la red móvil usando GPRS a una dirección de servidor configurada. Cuando se apunta al endpoint y puerto del servidor Plaspy, los mensajes entrantes del rastreador son emparejados por Plaspy y la plataforma detecta automáticamente el protocolo correcto para su procesamiento.

- El equipo se configura para reportar al endpoint y puerto compartidos de Plaspy
- El reporte puede usar UDP o TCP según la configuración del dispositivo y la preferencia del operador
- Plaspy recibe los datos GPRS y asigna el dispositivo a la cuenta mediante la detección del protocolo
- El SMS sigue estando disponible para alertas simples y verificación local de los ajustes desde números autorizados
- Una vez confirmado el reporte, la ubicación y las actualizaciones de eventos aparecen en Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial de CanTrack que prefiera, como comandos SMS o la herramienta del proveedor documentada por CanTrack
2. Asegúrese de que la SIM y el APN estén configurados en el dispositivo para que pueda conectarse a la red de datos móviles
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como servidor GPRS
4. Establezca el puerto en 8888, que es el puerto compartido usado por Plaspy para todos los dispositivos
5. Seleccione UDP o TCP si su dispositivo requiere selección del transporte
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el firmware lo exige
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma antes de la instalación final

## Ejemplos de comandos de configuración

El GT06 v2 admite configuración por SMS. A continuación hay ejemplos de comandos SMS reportados en documentación pública. La contraseña por defecto del dispositivo usada en estos ejemplos es 123456. Mantenga el orden de los comandos cuando este importe; el reinicio de fábrica es opcional y solo se usa si desea restaurar los valores por defecto antes de la configuración.

- Reinicio de fábrica opcional para iniciar la configuración
```text
begin123456
```

- Configurar el APN del operador
```text
apn123456 {{apn}} {{apnu}} {{apnp}}
```
Explicación: reemplace {{apn}} por la cadena APN del operador, {{apnu}} por el nombre de usuario del APN si se requiere y {{apnp}} por la contraseña del APN si se requiere. Deje el usuario o la contraseña en blanco si no se usan.

- Establecer la zona horaria a UTC0 (ejemplo)
```text
timezone123456 0
```

- Configurar el servidor GPRS por IP y puerto para apuntar el rastreador a Plaspy
```text
adminip123456 54.85.159.138 8888
```
Alternativamente puede usar el dominio d.plaspy.com cuando el dispositivo acepta nombres de dominio en lugar de la IP.

- Consultar la configuración actual del dispositivo
```text
check123456
```

## Notas de configuración

- La configuración por SMS es un método público común para el GT06 v2, pero también pueden existir herramientas del proveedor o utilidades de firmware para aprovisionamiento masivo
- Diferentes versiones de firmware o revisiones de hardware pueden aceptar formatos de comando ligeramente distintos o tener contraseñas por defecto y comportamientos diferentes
- Elija UDP o TCP según la preferencia del instalador y las condiciones de la red; Plaspy soporta ambos y detectará el protocolo automáticamente
- Conserve los marcadores de posición como {{apn}} {{apnu}} y {{apnp}} y sustituya por los valores proporcionados por su operador móvil
- Si realiza un reinicio de fábrica como paso inicial, vuelva a aplicar APN y ajustes del servidor después

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack GT06 v2 para apuntar a Plaspy ofrece un camino sencillo para integrar un rastreador compacto de vehículos con una plataforma centralizada de gestión de flotas. Usar los ajustes de servidor compartidos de Plaspy facilita el aprovisionamiento consistente de múltiples dispositivos y permite confiar en la detección automática de protocolo de Plaspy para gestionar los mensajes entrantes del GT06 v2.

To learn more about Plaspy and how it manages device connectivity and fleet visibility visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and full CanTrack documentation please verify details on the official manufacturer website https://www.cantrackgps.com/ as setup steps and firmware behavior can change over time.
