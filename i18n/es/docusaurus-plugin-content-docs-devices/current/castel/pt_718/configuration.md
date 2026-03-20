---
slug: /castel/pt_718/configuration
id: pt_718-configuration
sidebar_label: Configuration
title: Castel - PT-718 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Castel PT 718 y compatibilidad con Plaspy con pasos prácticos y ejemplos de SMS
keywords:
  - configuración Castel PT 718
  - configuración inicial Castel PT 718
  - configuración de servidor PT 718
  - configuración PT 718 Plaspy
  - configuración de rastreador Plaspy
  - guía de configuración de rastreador GPS
  - configuración de rastreador personal
  - configuración de rastreador GPRS
  - comandos SMS de configuración
  - seguimiento de vehículos y personal
---

# Castel - Configuración del PT-718

Esta página describe el contexto público de configuración para usar el rastreador Castel PT-718 con Plaspy. Explica los ajustes prácticos y publicados que requiere el equipo para reportar al servicio de Plaspy y ofrece ejemplos de comandos SMS de configuración comúnmente usados en este modelo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que utilice estas instrucciones como guía práctica y confirme cualquier diferencia específica del dispositivo con la documentación de Castel.

## Resumen de configuración

El objetivo de la configuración es preparar un PT-718 para que se comunique de forma fiable con la plataforma Plaspy, utilizando el endpoint público y el puerto de Plaspy. El procedimiento se centra en establecer conectividad GPRS o ajustes vía SMS, apuntar el dispositivo al servidor de Plaspy y validar que el rastreador sea visible en la plataforma.

- Configure los ajustes de red del dispositivo y el APN para que el PT-718 pueda usar GPRS y enviar datos de localización.
- Apunte el rastreador al endpoint del servidor Plaspy para que los reportes lleguen a su cuenta de Plaspy.
- Seleccione UDP o TCP en el puerto 8888 si el dispositivo requiere elección explícita de transporte.
- Valide los ajustes con una consulta de estado del dispositivo o confirmando que el rastreador aparece en Plaspy.
- Utilice comandos SMS cuando sea aplicable para una configuración rápida en campo sin herramientas adicionales.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Estos valores son los ajustes públicos del endpoint de Plaspy utilizados para dispositivos PT-718 configurados para reportar por GPRS. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador.

## Requisitos previos típicos

- Un PT-718 cargado con una tarjeta SIM operativa que tenga datos habilitados si va a usar reportes por GPRS.
- Conocer el ID del dispositivo para poder derivar la clave secreta de SMS si fuera necesario.
- Acceso al método de configuración del fabricante, como comandos SMS o el software de configuración del proveedor.
- Datos básicos del APN del operador móvil para la conectividad GPRS.
- Un método para enviar y recibir SMS al dispositivo si va a usar configuración o verificación por SMS.

## Cómo se conecta este rastreador a Plaspy

El PT-718 envía actualizaciones de posición y estado al endpoint compartido de Plaspy mediante GPRS una vez que el APN y los ajustes de servidor se aplican correctamente. Plaspy recibe los datos del dispositivo en el puerto 8888 y determina automáticamente el protocolo apropiado para ese rastreador.

- El dispositivo se configura con el nombre de host o la IP del servidor Plaspy y el puerto para que los reportes salientes lleguen a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede establecerse en UDP o TCP según las opciones de configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto funciona para los modelos soportados.
- Una vez que comienza el reporte, la ubicación del dispositivo, las alertas y los mensajes de estado se muestran en la plataforma Plaspy.
- Los reportes periódicos de posición y los mensajes de evento se reenvían a Plaspy para monitoreo y reproducción histórica.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Castel para PT-718, como comandos SMS o la herramienta del proveedor recomendada por el fabricante.
2. Ingrese el servidor de Plaspy por nombre de host o IP, usando d.plaspy.com o 54.85.159.138 según lo requiera la interfaz de configuración.
3. Establezca el puerto en 8888 en la configuración del rastreador.
4. Seleccione UDP o TCP si el dispositivo requiere la elección de transporte durante la configuración.
5. Aplique o guarde la configuración en el dispositivo usando el método oficial.
6. Reinicie el dispositivo si el firmware exige reboot para aplicar cambios de red o servidor.
7. Valide que el dispositivo reporta a Plaspy consultando el estado con un comando de verificación o confirmando su visibilidad en la plataforma Plaspy.

Si utiliza SMS para establecer parámetros en campo, siga el formato de los comandos SMS de Castel y reemplace los marcadores con sus valores reales como se muestra en los ejemplos abajo.

## Ejemplos de comandos de configuración

El PT-718 soporta configuración por SMS. El dispositivo espera una clave secreta para los comandos SMS. La clave secreta por defecto de fábrica para instrucciones SMS son los últimos 6 caracteres ASCII del ID del dispositivo.

1) Configurar APN y el servidor Plaspy IP y puerto
```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```
- [SecretKey] es la contraseña SMS del dispositivo. Por defecto son los últimos 6 caracteres ASCII del ID del dispositivo.
- [apn] es el nombre del APN del operador.
- [apnu] es el usuario del APN si el operador lo requiere; deje vacío si no aplica.
- [apnp] es la contraseña del APN si el operador la requiere; deje vacío si no aplica.
- Este comando establece el APN y configura el dispositivo para reportar a Plaspy en 54.85.159.138 puerto 8888.

2) Verificar los ajustes GPRS actuales en el dispositivo
```
*[SecretKey]#get gprs#*
```
- Use esta consulta para confirmar el APN y los ajustes de servidor después de aplicar la configuración.

Envíe estos comandos como mensajes SMS al PT-718. Reemplace los marcadores con valores reales. Si su dispositivo requiere el nombre de host en lugar de la IP, algunas versiones de firmware aceptan d.plaspy.com en lugar de la IP; consulte las notas de su firmware.

## Notas de configuración

- La configuración vía SMS es compatible con PT-718 y puede ser conveniente para ajustes en campo sin software adicional.
- La clave secreta por defecto son los últimos 6 caracteres ASCII del ID del dispositivo; si la contraseña se cambió, utilice la contraseña actual.
- El comportamiento del firmware y de las herramientas del proveedor puede variar según la revisión de hardware y la versión de software; los comandos y formatos aceptados pueden diferir.
- Elija UDP o TCP según las opciones del dispositivo. Ambos transportes son compatibles con Plaspy en el puerto 8888.
- Confirme siempre las credenciales del APN con su operador móvil y pruebe la conectividad después de aplicar los ajustes.

## Por qué usar Plaspy con esta configuración

Usar el Castel PT-718 con Plaspy ofrece una vía directa para obtener visibilidad en tiempo real de la ubicación y el monitoreo de eventos sin cambiar el hardware base del dispositivo. Apuntar el PT-718 al servidor y puerto de Plaspy asegura que los reportes de posición y las alertas se entreguen a una plataforma única que gestiona automáticamente la detección de protocolos y el manejo de dispositivos.

To learn more about Plaspy visit https://www.plaspy.com. Note that device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions with Castel at http://www.castelecom.com/ before performing large scale deployments.
