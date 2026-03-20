---
slug: /suntech/st4945b/configuration
id: st4945b-configuration
sidebar_label: Configuration
title: Suntech - ST4945B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST4945B con comandos y pasos prácticos para ajustar los servidores Plaspy
keywords:
  - Configuración Suntech ST4945B
  - Instalación Suntech ST4945B
  - Configuración Suntech Plaspy
  - Configuración GPS Plaspy
  - Configuración servidor ST4945B
  - Configuración software seguimiento ST4945B
  - Configuración plataforma GPS Plaspy
  - Guía configuración rastreador activos
  - Configuración LTE Cat M1
  - Configuración NB IoT rastreador
---

# Suntech - Configuración ST4945B

Esta página describe el contexto público de configuración para usar el rastreador Suntech ST4945B con Plaspy. Explica los ajustes del servidor Plaspy y ofrece orientación práctica basada en el fragmento de configuración pública disponible para este modelo. El ST4945B es un rastreador robusto LTE Cat M1 / NB‑IoT para activos, diseñado para monitoreo de baja potencia a largo plazo y es compatible con Plaspy desde el primer momento.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El ST4945B puede configurarse mediante comandos SMS como se muestra a continuación o usando las herramientas oficiales de Suntech, según su despliegue y las interfaces disponibles.

## Resumen de configuración

Este proceso prepara el ST4945B para enviar posiciones GNSS y telemetría a Plaspy y valida la conectividad para que el dispositivo sea visible en la plataforma. El ejemplo de configuración que se muestra a continuación proviene del fragmento público de configuración del dispositivo y utiliza comandos SMS para establecer el APN y el endpoint del servidor Plaspy.

- Configure el APN de red del equipo y el servidor GPRS para habilitar datos móviles.
- Apunte el rastreador al servidor Plaspy usando el endpoint y puerto compartidos de Plaspy.
- Establezca el intervalo de reporte para que el dispositivo transmita actualizaciones con la cadencia requerida.
- Verifique los ajustes y confirme que el dispositivo reporta a Plaspy para seguimiento en tiempo real y reproducción histórica.
- Use el IMEI del dispositivo para derivar el ID interno requerido por los comandos SMS de Suntech.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so the platform can ingest TCP or UDP streams

## Requisitos típicos antes de la configuración

- Una tarjeta SIM operativa instalada en el ST4945B con datos móviles activos y capacidad SMS para la configuración basada en SMS.
- El IMEI del dispositivo para derivar el ID que utilizan los comandos SMS de Suntech.
- Datos del APN, nombre de usuario APN y contraseña APN suministrados por su operador móvil cuando sean necesarios.
- Acceso al método de configuración oficial de Suntech o a la interfaz SMS para enviar los comandos de configuración.
- Una cuenta Plaspy o el registro del dispositivo en Plaspy para que los dispositivos reportados sean visibles después de la configuración.
- Una fuente de energía confiable o batería completamente cargada durante la configuración para evitar interrupciones.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ST4945B envía posiciones GNSS y telemetría al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos flujos TCP o UDP y mapea el dispositivo por su ID de reporte, brindándole visibilidad en tiempo real y reportes de eventos en la plataforma. El flujo común es simple y repetible entre despliegues.

- El rastreador reporta al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los datos pueden enviarse por UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo y analiza la telemetría para funciones de panel y alertas.
- Actualizaciones regulares de posición y mensajes de evento permiten reproducción histórica y notificaciones basadas en reglas.
- Comandos de verificación o consultas de estado pueden confirmar que el dispositivo apunta al servidor Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Suntech o a las instrucciones de configuración por SMS proporcionadas por el fabricante o su proveedor.
2. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de red del dispositivo.
3. Establezca el puerto del servidor en 8888, el puerto compartido que usa Plaspy para todos los dispositivos.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Configure los campos APN, nombre de usuario APN y contraseña APN según lo requiera su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o la herramienta lo requieren.
7. Valide que el dispositivo esté reportando a Plaspy revisando el estado en Plaspy y usando el comando de verificación mostrado más abajo.

## Ejemplos de comandos de configuración

La configuración pública del ST4945B utiliza SMS para establecer parámetros de red y reporte. El ID de dispositivo usado en los comandos son los seis dígitos tomados del IMEI excluyendo el dígito final. Por ejemplo, si el IMEI es 123456789012345 el ID del dispositivo es 901234.

- Placeholders used in the commands
  - {{device_id}} the six digit device ID derived from the IMEI as described above
  - [apn] the operator APN
  - [apnu] the APN username if required
  - [apnp] the APN password if required

1) Set the operator APN and Plaspy GPRS server
Send this SMS to the device phone number. The fourth numeric field should be 1 if you supply an APN username or password, otherwise use 0.

```
SA200NTW;{{device_id}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

If you do not need APN authentication, use:

```
SA200NTW;{{device_id}};02;0;[apn];;;54.85.159.138;8888;;;;
```

2) Set the periodic update interval to 60 seconds
This command sets reporting frequency values and related timing fields. Adjust only if your deployment needs different intervals.

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Check current settings on the device
Use this verification command to request the PresetA configuration back from the device.

```
SA200CMD;{{device_id}};02;PresetA
```

Notas sobre el envío de comandos
- Envíe los mensajes SMS al número telefónico de la SIM dentro del ST4945B.
- Reemplace {{device_id}}, [apn], [apnu] y [apnp] por sus valores.
- El host del servidor en estos comandos utiliza la IP de Plaspy 54.85.159.138 y el puerto 8888 según lo requerido por Plaspy.

## Notas de configuración

- Revisión de firmware y hardware puede alterar el formato de los comandos o los campos disponibles. Verifique siempre la sintaxis exacta de SMS para el firmware de su dispositivo.
- El ST4945B soporta configuración por SMS como se muestra, pero algunos despliegues usan herramientas de Suntech o un servidor de mantenimiento para aprovisionamiento masivo.
- Elija UDP o TCP según los requisitos de su sitio y tenga en cuenta que Plaspy aceptará ambos y detectará el protocolo automáticamente.
- Asegúrese de que las credenciales APN sean correctas; los ajustes de APN incorrectos son la causa más común de fallas de conectividad.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, los elementos clave a cambiar por dispositivo son el ID del dispositivo y los campos APN.

## Por qué usar Plaspy con esta configuración

Usar el ST4945B con Plaspy brinda a las organizaciones telemetría de larga duración y conectividad resiliente para activos en entornos exteriores exigentes. Apuntar el rastreador a Plaspy con los ajustes anteriores hace que el dispositivo esté disponible de inmediato para monitoreo en tiempo real, alertas de eventos y reproducción histórica, manteniendo al mismo tiempo operación de baja potencia y redundancias de conectividad robustas.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific setup instructions, firmware clarifications, and command syntax verify details on the manufacturer website http://www.suntechint.com/ since manufacturer documentation and firmware behavior can change over time.
