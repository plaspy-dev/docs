---
slug: /sinotrack/st_906l/configuration
id: st_906l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-906L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack ST-906L y conectarlo a Plaspy con ajustes de servidor y comandos SMS
keywords:
  - configuración SinoTrack ST 906L
  - instalación SinoTrack ST 906L
  - ST 906L Plaspy
  - guía configuración SinoTrack
  - configuración servidor ST 906L
  - configuración dispositivo Plaspy
  - configuración rastreador GPS
  - configuración rastreador vehicular
  - configuración GPRS SMS
  - ajustes servidor Plaspy
---

# SinoTrack - Configuración del ST-906L

Esta página reúne la información pública de configuración necesaria para usar el SinoTrack ST-906L con Plaspy. Contiene los ajustes de servidor disponibles públicamente y los comandos SMS más comunes para preparar el rastreador y conectarlo a la plataforma Plaspy. Utilice esta guía para saber qué parámetros debe configurar en el equipo para que Plaspy reciba sus datos y muestre los dispositivos en la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos en el lado del fabricante pueden cambiar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST-906L admite configuración por SMS y GPRS; esta guía muestra los comandos prácticos y el flujo de trabajo que se usan habitualmente para registrar el equipo en Plaspy.

## Resumen de la configuración

Preparar un ST-906L para integrarlo con Plaspy implica configurar parámetros de red, confirmar la conectividad y permitir que el equipo reporte al endpoint y puerto compartidos de Plaspy. Los comandos que se indican a continuación reflejan opciones públicas de configuración vía SMS habituales en dispositivos SinoTrack.

- Configure el APN y el GPRS para que el rastreador pueda abrir una sesión de datos hacia Plaspy.
- Establezca la dirección del servidor y el puerto para que la información de ubicación y eventos se envíe a Plaspy.
- Seleccione el método de transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.
- Valide la conectividad leyendo la configuración y confirme que la unidad aparezca en Plaspy.
- Active los intervalos de reporte y las entradas de alarma para que la telemetría y los eventos se entreguen a Plaspy.

## Ajustes del servidor Plaspy

- El dominio de servidor d.plaspy.com es el nombre público de host de Plaspy que puede usar en la configuración del dispositivo.
- La IP del servidor 54.85.159.138 es el endpoint numérico alternativo utilizado por Plaspy.
- El puerto 8888 es el único puerto que Plaspy utiliza para todos los dispositivos compatibles.
- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según los requisitos del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que la plataforma acepta datos de dispositivos compatibles sin asignación manual por dispositivo.

## Requisitos típicos antes de la configuración

- Un ST-906L alimentado e instalado con acceso a su método de configuración, normalmente por comandos SMS o mediante la herramienta del fabricante.
- Una tarjeta SIM activa con datos habilitados y servicio de SMS para enviar y recibir comandos de configuración.
- Credenciales APN correctas del operador móvil para permitir sesiones GPRS/LTE.
- Conocimiento del IMEI o ID del dispositivo que la plataforma usará para registrar e identificar el rastreador.
- Acceso al manual de instalación o documentación del fabricante para conocer la sintaxis y el comportamiento específico de los SMS del equipo.
- Un teléfono o herramienta capaz de enviar mensajes SMS en texto plano al número del rastreador.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ST-906L abre una conexión de datos y envía mensajes de posición y eventos al endpoint y puerto configurados de Plaspy. Plaspy ingiere esos mensajes, aplica la detección automática de protocolo y muestra el dispositivo en el panel para seguimiento en tiempo real y notificaciones.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy, centralizando la telemetría.
- Las actualizaciones de ubicación y los eventos configurados se envían a Plaspy a través de transporte GPRS/LTE.
- La plataforma recibe entradas de alarma como corte de energía, SOS, exceso de velocidad y eventos de geocerca para notificaciones y reproducción histórica.
- Plaspy determina automáticamente el protocolo usado por el ST-906L, por lo que en la mayoría de los casos no es necesario mapear manualmente el protocolo.
- Todos los dispositivos usan el mismo puerto 8888 de Plaspy, lo que facilita la provisión masiva y la gestión de entradas de servidor.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración del fabricante o al software, habitualmente comandos SMS documentados por SinoTrack o mediante una herramienta de configuración aprobada.
2. Ingrese el nombre de host del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el ajuste de servidor del dispositivo.
3. Configure el puerto del servidor en 8888 para que el dispositivo envíe datos a Plaspy.
4. Seleccione UDP o TCP como transporte si el equipo solicita elegir un método de transporte.
5. Configure las credenciales APN y los intervalos de reporte necesarios para su implementación.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware lo requiere.
7. Valide que el ST-906L reporte a Plaspy comprobando el estado del dispositivo en la plataforma y usando el comando de verificación para leer la configuración.

## Ejemplos de comandos de configuración

El ST-906L puede configurarse mediante comandos SMS. Los comandos siguientes son ejemplos públicos que se usan habitualmente para preparar el equipo para Plaspy. Envíelos como mensajes SMS al número del dispositivo en el orden indicado cuando el orden sea importante.

- Paso inicial opcional para restaurar valores de fábrica cuando sea necesario
```text
RESET
```

- Ajustar la zona horaria a UTC 0
```text
8960000E00
```

- Configurar el APN del operador
```text
8030000 [apn] [apnu] [apnp]
```
Explicación: reemplace [apn] por el nombre del APN de su operador, [apnu] por el usuario del APN si se requiere y [apnp] por la contraseña del APN si es necesaria. Si el operador no pide usuario o contraseña, esos campos generalmente pueden dejarse vacíos según las reglas de análisis de SMS del dispositivo.

- Configurar el servidor GPRS hacia Plaspy usando la IP y el puerto
```text
8040000 54.85.159.138 8888
```
Nota: Plaspy también soporta el dominio d.plaspy.com. Use la IP mostrada aquí si su dispositivo requiere una dirección numérica en la sintaxis del comando.

- Establecer el intervalo de reporte cuando la unidad está encendida
```text
8050000 60
```
- Establecer el intervalo de reporte cuando la unidad está apagada
```text
8090000 60
```

- Cambiar el modo del dispositivo a GPRS
```text
7100000
```

- Leer la configuración actual para verificar ajustes
```text
RCONF
```
Explicación: RCONF es el comando de verificación que devuelve los valores configurados, incluyendo IDs y entradas de servidor. Úselo para confirmar que el servidor, el APN y los intervalos de reporte se aplicaron correctamente.

## Notas sobre la configuración

- Las variantes de firmware y modelos regionales pueden modificar el comportamiento de los comandos SMS y los parámetros disponibles. Siempre verifique la sintaxis SMS con la documentación del dispositivo según la revisión de firmware que tenga.
- La configuración vía SMS es comúnmente compatible, pero las cadenas exactas de comando y los formatos de respuesta pueden variar por versión de software o personalización del proveedor.
- Elija UDP o TCP en función de las necesidades de la instalación y las características de la red. Plaspy acepta datos en ambos transportes y detecta el protocolo automáticamente.
- Tenga las credenciales APN a mano antes de configurar el servidor GPRS. Una configuración incorrecta del APN impedirá que el equipo establezca una sesión de datos hacia Plaspy.
- Cuando esté disponible, prefiera usar el comando de verificación RCONF después de configurar para confirmar que servidor, APN e intervalos de reporte se aplicaron correctamente.

## Por qué usar Plaspy con esta configuración

Usar el SinoTrack ST-906L con Plaspy ofrece visibilidad centralizada de la ubicación de vehículos y la telemetría de eventos para flotas o para seguimiento de vehículos individuales. El soporte del ST-906L para configuración por SMS y GPRS facilita la provisión en campo, mientras que la detección automática de protocolos de Plaspy y el puerto compartido simplifican el despliegue a gran escala y la ingestión en la plataforma.

Learn more about Plaspy and how it can centralize your tracking data at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify setup details on the official SinoTrack site https://www.sinotrackgps.com/ as manufacturer procedures and firmware behavior can change over time.
