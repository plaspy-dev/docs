---
slug: /sinotrack/st_901a/configuration
id: st_901a-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901A Configuration
sidebar_class_name: menu_item_tracker
description: Configurar SinoTrack ST-901A para usar con Plaspy mediante ajustes públicos de servidor y comandos SMS o GPRS
keywords:
  - Configuración SinoTrack ST-901A
  - Configuración SinoTrack
  - Configuración ST-901A
  - Configuración Plaspy
  - Configuración de rastreo de flotas
  - Configuración de rastreador GPS
  - Configuración de servidor ST-901A
  - Guía de instalación Sinotrack
  - Configuración GPRS del rastreador
  - Plataforma de rastreo de vehículos
---

# SinoTrack - Configuración ST-901A

Esta página recopila el contexto público de configuración para usar el rastreador SinoTrack ST-901A con Plaspy. Incluye los pasos prácticos y los ajustes de servidor públicos que permiten preparar un ST-901A para reportar posición y estado a la plataforma Plaspy. La guía que sigue se basa en comandos del fabricante que pueden enviarse por SMS, así como en los detalles del servidor de Plaspy aplicables a los dispositivos compatibles.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos concretos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST-901A admite reportes por SMS y GPRS; los comandos del fabricante que se muestran a continuación son ejemplos comunes de configuración pública que puede usar para apuntar el dispositivo a Plaspy.

## Resumen de la configuración

El objetivo al configurar un ST-901A para Plaspy es asegurar que el rastreador pueda establecer una conexión GPRS con el servidor de Plaspy, identificarse con su ID de dispositivo y transmitir actualizaciones periódicas de posición o reportes de eventos. Los comandos públicos que se muestran a continuación ilustran el flujo común de configuración vía SMS usado en muchos dispositivos SinoTrack.

- Configurar el APN del equipo para que el rastreador pueda usar datos móviles en el reporte GPRS.
- Apuntar el rastreador al endpoint del servidor de Plaspy para que los datos se envíen a la plataforma.
- Definir los intervalos de reporte para que el rastreador envíe actualizaciones con la cadencia deseada.
- Cambiar el modo del rastreador a GPRS para que use TCP o UDP para entregar datos.
- Verificar la configuración y obtener el ID del dispositivo con el comando RCONF para la identificación en Plaspy.

## Ajustes de servidor de Plaspy

Utilice los siguientes ajustes del servidor de Plaspy al configurar el ST-901A. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos habituales antes de la configuración

- Un rastreador con batería cargada o alimentado para realizar la configuración y pruebas.
- Una tarjeta SIM con un plan de datos GPRS activo si va a usar reportes por GPRS.
- Acceso a un teléfono con capacidad de enviar SMS o a una herramienta que permita enviar los comandos de configuración SMS del fabricante.
- Conocimiento de los valores APN de su operador para los marcadores {{apn}}, {{apnu}} y {{apnp}}.
- Acceso a la documentación oficial del fabricante o herramientas del proveedor para orientación específica del dispositivo.
- Un método para recibir y visualizar las respuestas del dispositivo a comandos de verificación como RCONF.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para reportes GPRS, al ST-901A se le indica enviar sus datos de ubicación y eventos al endpoint y puerto compartidos del servidor Plaspy. Plaspy usa el ID de dispositivo que reporta el rastreador para asociar los datos entrantes con el activo correcto en la plataforma.

- El rastreador se configura con los datos del servidor Plaspy (d.plaspy.com o 54.85.159.138) y el puerto 8888.
- El equipo puede usar transporte UDP o TCP para enviar mensajes a Plaspy.
- Plaspy detecta automáticamente qué protocolo de rastreador se está usando y procesa los mensajes entrantes.
- El comando RCONF devuelve el ID del dispositivo que Plaspy utiliza para vincular el rastreador a una cuenta.
- Una vez habilitado el reporte, el rastreador envía actualizaciones periódicas que Plaspy muestra para monitoreo y análisis.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración del fabricante, o prepárese para enviar comandos SMS desde un teléfono autorizado.
2. Configure el APN del rastreador usando los valores de su operador y verifique que el APN incluya el nombre de usuario y la contraseña correctos si se requieren.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS y configure el puerto 8888.
4. Seleccione UDP o TCP si el dispositivo requiere una selección de transporte explícita.
5. Aplique o guarde la configuración y, si corresponde, cambie el dispositivo al modo GPRS para comenzar a reportar.
6. Reinicie el dispositivo si el fabricante recomienda un reinicio después de la configuración.
7. Valide que el equipo informe a Plaspy consultándolo con RCONF y confirmando que las actualizaciones son visibles en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos públicos son los SMS típicos usados con rastreadores SinoTrack como el ST-901A. Estos comandos se envían como mensajes de texto al dispositivo. Preserve el orden cuando se indique.

- Paso inicial opcional para restaurar configuración de fábrica:
```
RESET
```

- Ajustar la zona horaria a UTC 0:
```
8960000E00
```

- Establecer el APN del operador móvil. Reemplace los marcadores con los valores de su operador:
```
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explicación: {{apn}} es el nombre del punto de acceso, {{apnu}} es el usuario del APN y {{apnp}} es la contraseña del APN. Si su APN no requiere usuario ni contraseña, deje los marcadores vacíos según el formato que requiera el equipo.

- Configurar el servidor GPRS a Plaspy por IP y puerto:
```
8040000 54.85.159.138 8888
```
Nota: Alternativamente puede configurar el servidor con el dominio d.plaspy.com cuando el dispositivo acepte ajustes por nombre de dominio.

- Establecer el intervalo de actualización cuando el dispositivo está encendido:
```
8050000 60
```
(Ejemplo que fija un intervalo de reporte de 60 segundos mientras está encendido)

- Establecer el intervalo de actualización cuando el dispositivo está apagado:
```
8090000 60
```
(Ejemplo que fija un intervalo de reporte de 60 segundos mientras está apagado; adapte según sus necesidades)

- Cambiar el rastreador al modo GPRS:
```
7100000
```

- Verificar la configuración actual del dispositivo y obtener el ID usado por Plaspy:
```
RCONF
```
Explicación: La respuesta del dispositivo al comando RCONF contiene el ID del equipo. Plaspy utiliza ese ID para asociar los datos entrantes con el rastreador correcto.

## Notas de configuración

- Las revisiones de firmware y hardware del fabricante pueden cambiar los formatos de comando y el comportamiento; confirme siempre los comandos con la documentación más reciente del fabricante.
- El ST-901A soporta tanto la configuración por SMS como el reporte por GPRS; use comandos SMS cuando el dispositivo no tenga conexión de red o como método principal de configuración si está soportado.
- Elegir TCP o UDP afecta la gestión de la sesión en el dispositivo y el servidor. Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador.
- Mantenga los marcadores como {{apn}}, {{apnu}} y {{apnp}} al preparar los comandos y sustituya por los valores específicos de su operador antes de enviarlos.
- Restablecer a valores de fábrica es opcional y debe usarse cuando necesite un estado de configuración limpio; eliminará configuraciones personalizadas previas.

## Por qué usar Plaspy con esta configuración

Configurar el SinoTrack ST-901A para reportar a Plaspy permite visibilidad centralizada y monitoreo en tiempo real de una flota o conjunto de activos rastreados. El uso de los ajustes de servidor compartidos de Plaspy simplifica el despliegue porque todos los rastreadores compatibles apuntan al mismo endpoint y puerto, y Plaspy detecta automáticamente el protocolo del rastreador para procesar los mensajes entrantes.

Learn more about Plaspy and how it can be used with supported trackers at https://www.plaspy.com. For device specific command references, firmware updates, and the latest manufacturer setup details for the ST-901A, confirm information on the official SinoTrack website https://www.sinotrackgps.com/ since vendor documentation and firmware behavior can change over time.
