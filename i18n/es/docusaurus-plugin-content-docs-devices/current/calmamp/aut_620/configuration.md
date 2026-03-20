---
slug: /calmamp/aut_620/configuration
id: aut_620-configuration
sidebar_label: Configuration
title: CalmAmp - AUT-620 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CalmAmp AUT-620 para reportar a Plaspy, con ajustes de servidor y comandos SMS
keywords:
  - Configuración CalmAmp AUT-620
  - Instalación CalmAmp AUT-620
  - Configuración AUT-620 Plaspy
  - Configuración rastreador GPS CalmAmp
  - Configuración servidor AUT-620
  - Configuración rastreador Plaspy
  - Configuración rastreador de activos
  - Configuración seguimiento de vehículos
  - Configuración rastreador GPRS
  - Comandos SMS CalmAmp AUT-620
---

# CalmAmp - AUT-620 Configuración

Esta página documenta el contexto público de configuración para usar el CalmAmp AUT-620 con la plataforma Plaspy. Se enfoca en los pasos prácticos y ajustes de servidor necesarios para apuntar un AUT-620 a Plaspy, de modo que el dispositivo pueda comunicarse con la plataforma y aparecer en ella.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para configurar un AUT-620 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando estén disponibles, esta página incluye los comandos públicos publicados por CalmAmp; siempre verifique las instrucciones actuales del dispositivo con la documentación oficial de CalmAmp.

## Resumen de configuración

El objetivo de esta configuración es preparar el AUT-620 para enviar posiciones y eventos de dispositivo a Plaspy, de modo que los activos sean visibles y reporten de forma confiable. El procedimiento público suele configurar los detalles de APN de la red, apunta el dispositivo al endpoint de Plaspy, ajusta el puerto compartido que usa Plaspy y valida que el dispositivo esté reportando.

- Configure el APN de la red del dispositivo, usuario y contraseña si el SIM lo requiere.
- Establezca la dirección del servidor GPRS en Plaspy y el puerto compartido para que los reportes lleguen a la plataforma.
- Seleccione el transporte (UDP o TCP) cuando el dispositivo requiera elegirlo.
- Reinicie o vuelva a arrancar el AUT-620 si es necesario para que los nuevos ajustes se apliquen y el dispositivo se registre en Plaspy.
- Verifique los ajustes y confirme que el dispositivo está reportando a Plaspy mediante el comando de verificación del dispositivo o la visibilidad en la plataforma.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos valores son el endpoint público de Plaspy y deben usarse al configurar el AUT-620 para que reporte a Plaspy.

## Requisitos típicos antes de la configuración

- Acceso al AUT-620 con alimentación y nivel de batería suficiente para la configuración y las pruebas.
- Una SIM celular con datos habilitados y la configuración APN correcta para el operador.
- Capacidad para enviar SMS al dispositivo si utiliza configuración por SMS, o acceso a la herramienta del fabricante o servicio OTA si lo prefiere.
- El ID del dispositivo o MID que devuelve el dispositivo para que los comandos SMS que requieren un ID se apliquen correctamente.
- Confirmación de la versión de firmware y cualquier nota específica del dispositivo en la documentación de CalmAmp.

## Cómo se conecta este rastreador a Plaspy

El AUT-620 se configura para enviar sus datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo aparezca y pueda ser monitoreado en Plaspy. Una vez configurado, Plaspy recibe los datos del dispositivo, identifica automáticamente el protocolo y muestra la información de posición y eventos en la plataforma.

- Los reportes del dispositivo se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar UDP o TCP si el firmware requiere selección de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario establecer una cadena de protocolo específica en la plataforma.
- Los mensajes de eventos y ubicación que produce el AUT-620 se enrutan a Plaspy para su visibilidad y monitoreo.
- Después de la configuración y el reinicio, valide que el dispositivo aparece y reporta en Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración CalmAmp para el AUT-620 (comandos SMS, herramienta PULS OTA u otra herramienta del fabricante).
2. Ingrese la dirección del servidor como d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto común que usa Plaspy para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo solicita la selección del transporte durante la configuración.
5. Aplique o guarde la configuración en el dispositivo o envíe los comandos SMS correspondientes.
6. Reinicie o vuelva a arrancar el dispositivo si es necesario para que los nuevos ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma.

Si utiliza comandos por SMS, siga exactamente la sintaxis publicada por CalmAmp y confirme que se use el MID o ID del dispositivo cuando sea necesario.

## Ejemplos de comandos de configuración

El AUT-620 puede configurarse por SMS usando los comandos públicos publicados por CalmAmp. El dispositivo responde con un identificador MID tras un comando de consulta; ese MID se utiliza como ID de dispositivo en comandos posteriores cuando se requiere.

Nota: Mantenga los campos de marcador de posición tal como están. Reemplace [apn], [apnu] y [apnp] con el APN, el usuario del APN y la contraseña del APN de su operador móvil respectivamente.

- Para solicitar el ID del dispositivo (el dispositivo responde con MID de 10 dígitos):
```text
!R0
```

- Establecer el APN del operador (reemplace [apn] por el APN de su operador):
```text
!RP,2306,0,[apn]
```

- Establecer el usuario del APN si es necesario (reemplace [apnu] por el usuario):
```text
!RP,2314,0,[apnu]
```

- Establecer la contraseña del APN si es necesario (reemplace [apnp] por la contraseña):
```text
!RP,2315,0,[apnp]
```

- Establecer el servidor GPRS a Plaspy (se muestra la IP pública de Plaspy aquí):
```text
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor al puerto compartido de Plaspy:
```text
!RP,769,0,8888
```

- Reiniciar el rastreador para aplicar los ajustes (recomendado después de la configuración):
```text
!R3,70,0
```

- Para consultar los ajustes actuales en el dispositivo:
```text
!RO
```

Siga el orden exacto de comandos cuando el fabricante especifique un orden. Se recomienda el comando de reinicio después de aplicar la configuración de red y servidor para que el AUT-620 se registre en el endpoint configurado.

## Notas de configuración

- CalmAmp admite la configuración por SMS para el AUT-620 como se muestra; también puede usar herramientas OTA de CalmAmp como PULS si están disponibles para actualizaciones masivas o remotas.
- Plaspy utiliza el mismo puerto (8888) para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que los elementos clave en el dispositivo son la dirección del servidor y el puerto.
- La selección del transporte (UDP o TCP) se realiza en el dispositivo; elija el transporte que el firmware del dispositivo soporte o requiera. Plaspy acepta ambos transportes en el puerto 8888.
- Tenga listos los marcadores [apn], [apnu] y [apnp]: deben coincidir con la configuración del operador móvil para la conectividad de datos.
- Las revisiones de firmware y las variaciones de hardware pueden cambiar los comandos disponibles o los índices de parámetros; confirme comandos e índices con la documentación de CalmAmp para la versión de firmware de su dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el CalmAmp AUT-620 para reportar a Plaspy ofrece a las organizaciones visibilidad de activos a largo plazo con bajo mantenimiento mediante un endpoint compartido que detecta protocolos automáticamente. Para activos desplegados por periodos prolongados, la combinación de un AUT-620 alimentado por batería y la visibilidad en Plaspy simplifica el monitoreo remoto y las alertas de eventos sin necesidad de reconexiones manuales frecuentes.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the most current device commands, firmware behavior, and manufacturer setup methods for the AUT-620, verify details on the official CalmAmp website http://www.calamp.com/ as vendor instructions can change over time.
