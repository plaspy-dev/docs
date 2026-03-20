---
slug: /suntech/st4290/configuration
id: st4290-configuration
sidebar_label: Configuration
title: Suntech - ST4290 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST4290 con ajustes de servidor Plaspy y comandos SMS para integración
keywords:
  - Configuración Suntech ST4290
  - configuración ST4290 Plaspy
  - configuración servidor ST4290
  - configuración rastreador GPS Suntech
  - seguimiento de flotas ST4290
  - compatibilidad ST4290 Plaspy
  - configuración rastreador GPS
  - configuración rastreador de activos
  - guía instalación ST4290
  - configuración rastreador Suntech
---

# Suntech - Configuración del ST4290

Esta página describe el contexto público de configuración necesario para usar el rastreador Suntech ST4290 con la plataforma Plaspy. Se centra en los ajustes de servidor prácticos y en los comandos visibles para el fabricante que permiten apuntar el dispositivo a Plaspy, y explica qué verificar antes de integrar un ST4290 en su cuenta Plaspy. Esta guía está pensada para instaladores e integradores técnicos que trabajan con comandos públicos del dispositivo y flujos de configuración proporcionados por el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta al servidor. Los métodos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre confirme los pasos específicos del dispositivo con la documentación de Suntech mientras emplea los puntos finales compartidos de Plaspy descritos a continuación.

## Resumen de configuración

El objetivo de la configuración del ST4290 para Plaspy es apuntar el dispositivo al servidor de Plaspy, asegurarse de que el rastreador puede conectarse mediante el transporte elegido y validar que los datos de posición y eventos lleguen a Plaspy para monitoreo en tiempo real y alertas. Cuando esté disponible, el ST4290 puede configurarse mediante comandos SMS o con la herramienta de configuración del proveedor, según su flujo de instalación.

- Configure el rastreador para usar Plaspy como su endpoint GPRS para que GNSS y telemetría se envíen a Plaspy.
- Ajuste el intervalo de actualización/reportes del dispositivo según el despliegue y el perfil de batería.
- Verifique el APN y las credenciales necesarias para que el enlace celular pueda establecer sesiones de datos GPRS o LTE.
- Confirme el transporte (UDP o TCP) y el puerto asignado para que el dispositivo se comunique con Plaspy.
- Valide que el dispositivo aparezca en línea en Plaspy y que los reportes de posición y los eventos de entradas/salidas sean visibles.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support: UDP or TCP (the device may be configured using UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la instalación

- Un ST4290 cargado y accesible con una SIM válida provisionada para datos y habilitada para la tecnología de radio requerida.
- Acceso al método oficial de configuración Suntech para la versión de firmware de su equipo (comandos SMS o software del proveedor).
- Conocimiento del IMEI del dispositivo; necesitará el IMEI para derivar el ID SMS del dispositivo usado en algunos comandos de Suntech.
- Detalles del APN del operador, incluyendo nombre del APN y, si aplica, usuario y contraseña del APN.
- Una cuenta en Plaspy y la confirmación del flujo de provisión de dispositivos dentro de Plaspy para validar los reportes entrantes.

## Cómo se conecta este rastreador a Plaspy

El ST4290 se configura para reportar posiciones GNSS y eventos al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes y los asigna a un registro de dispositivo usando la identidad enviada por el rastreador. Como Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo, la mayoría de las tareas de configuración se centran en los ajustes de servidor y APN.

- El rastreador envía paquetes periódicos de posición y telemetría a d.plaspy.com (54.85.159.138) en el puerto 8888.
- Configure el transporte UDP o TCP en el dispositivo según la preferencia del instalador o la confiabilidad del operador.
- Los eventos de movimiento y de entradas (por ejemplo encendido del motor o pánico) se transmiten en el mismo enlace a Plaspy para su alerta.
- Plaspy reconoce automáticamente el protocolo del rastreador cuando los paquetes llegan al servidor y presenta el dispositivo en la plataforma.

## Flujo habitual de configuración

1. Acceda al método oficial de configuración Suntech para su ST4290 (interfaz de comandos SMS o herramienta de configuración del proveedor) correspondiente al firmware instalado en su unidad.  
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes GPRS/servidor del dispositivo.  
3. Establezca el puerto del dispositivo a 8888 (todos los dispositivos Plaspy usan este mismo puerto).  
4. Seleccione el protocolo de transporte UDP o TCP en el dispositivo si la configuración requiere elegir transporte.  
5. Proporcione los detalles del APN del operador y cualquier usuario o contraseña del APN que requiera su SIM y operador.  
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si las instrucciones del fabricante indican un reinicio.  
7. Valide que el ST4290 reporte a Plaspy comprobando la conectividad del dispositivo y las actualizaciones de posición recientes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El ST4290 puede configurarse mediante comandos SMS. A continuación se muestran las plantillas públicas de comandos SMS extraídas del contenido proporcionado por el proveedor. Conserve los marcadores de posición y calcule el ID del dispositivo según corresponda.

Nota sobre el ID del dispositivo
- Los comandos SMS para Suntech ST4290 usan un ID de dispositivo derivado del IMEI. El ID del dispositivo son los seis dígitos que comienzan en la posición 9 del IMEI hasta la 14 (es decir, los seis dígitos anteriores al último dígito del IMEI). Ejemplo: si el IMEI es 123456789012345, el ID del dispositivo es 901234 (dígitos 9–14). Use ese valor de seis dígitos en los comandos como {{device_id}}.

1) Configurar APN del operador y servidor GPRS de Plaspy
- El comando siguiente establece el APN, el usuario y la contraseña opcionales del APN, y la IP y puerto del servidor Plaspy. Reemplace {{device_id}} por el ID de seis dígitos derivado del IMEI como se explicó arriba. Use [apn], [apnu] y [apnp] como marcadores de posición para su APN, usuario APN y contraseña APN. Si no usa usuario o contraseña de APN, algunos dispositivos requieren que la bandera de credenciales APN se ajuste a 0 o se omita según la orientación del proveedor; el siguiente comando incluye esa posición de bandera.

```
SA200NTW;{{device_id}};02;[1 or 0];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Explicación de los campos:
  - {{device_id}} — ID de dispositivo de seis dígitos derivado del IMEI (dígitos 9–14).
  - [1 or 0] — ponga 1 si va a proveer usuario o contraseña del APN, ponga 0 si no.
  - [apn] — marcador del nombre del APN del operador.
  - [apnu] — marcador del usuario del APN (deje vacío si no se usa).
  - [apnp] — marcador de la contraseña del APN (deje vacío si no se usa).
  - 54.85.159.138 y 8888 — IP y puerto del servidor Plaspy (requeridos).

2) Establecer intervalo de reporte a 60 segundos
- Este comando ajusta los parámetros de repetición/reportes incluyendo un intervalo de actualización de 60 segundos.

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Verificar configuración actual
- Use este comando de verificación para solicitar al dispositivo que devuelva la información de configuración preset.

```
SA200CMD;{{device_id}};02;PresetA
```

Notas
- Envíe los comandos SMS desde un número móvil autorizado si el dispositivo está configurado para aceptar comandos solo desde números predefinidos.
- Si sus herramientas del proveedor usan la forma de nombre de dominio en lugar de la IP, puede que sea posible configurar d.plaspy.com en lugar de la IP en el software del proveedor; los ejemplos anteriores usan la IP de Plaspy para coincidir con la plantilla del proveedor.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato de los comandos y los campos requeridos. Confirme la sintaxis exacta de los comandos para su versión de firmware con la documentación de Suntech antes de un despliegue masivo.
- El ST4290 soporta la configuración por SMS como se muestra arriba cuando el firmware y la política de instalación lo permiten; también puede haber software de configuración del proveedor o métodos de configuración OTA disponibles.
- Elija UDP o TCP según la confiabilidad de la red y la preferencia del instalador; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo entrante.
- Asegúrese de que los ajustes APN sean correctos para la SIM en uso; un APN incorrecto o credenciales faltantes impedirán que el dispositivo establezca una sesión de datos.
- Al usar comandos SMS, calcule el {{device_id}} con precisión a partir del IMEI tal como lo documenta Suntech para evitar el rechazo de comandos.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST4290 con Plaspy ofrece un camino sencillo para obtener visibilidad en tiempo real de posiciones, eventos de entradas/salidas y telemetría para operaciones de activos y flotas. Las opciones de batería de larga duración del ST4290 y su carcasa IP67 lo hacen adecuado para despliegues prolongados, mientras que Plaspy ingiere los datos de ubicación y eventos en el endpoint compartido del servidor para que los equipos puedan monitorear dispositivos, configurar alertas y ejecutar procesos de recuperación.

To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device-specific configuration methods, firmware behavior, and manufacturer details on the official Suntech website http://www.suntechint.com/ as vendor specifications and supported commands may change over time.
