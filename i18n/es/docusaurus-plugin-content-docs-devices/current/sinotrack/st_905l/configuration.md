---
slug: /sinotrack/st_905l/configuration
id: st_905l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-905L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack ST-905L y enviar telemetría a Plaspy por servidor y SMS
keywords:
  - Configuración SinoTrack ST-905L
  - Configuración SinoTrack para Plaspy
  - Configuración servidor ST 905L
  - Comandos SMS ST 905L
  - Configuración tracker Plaspy
  - Configuración APN rastreador GPS
  - Integración plataforma rastreo vehicular
  - Configuración rastreador de activos
  - Ajustes servidor de rastreo
  - Configuración rastreador para gestión de flotas
---

# SinoTrack - Configuración del ST-905L

Esta página documenta el contexto público de configuración para usar el SinoTrack ST-905L con Plaspy. Se centra en los pasos y comandos públicos y prácticos que permiten apuntar el rastreador a Plaspy, validar la conectividad y confirmar que el dispositivo envía ubicación y telemetría a la plataforma. La información se basa en la descripción del producto ST-905L y en los comandos SMS públicos para configurar APN y servidor.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Cuando el ST-905L admite provisión por SMS, los comandos que se muestran a continuación representan el flujo público documentado para establecer el APN, servidor, intervalos de reporte y verificar la configuración.

## Resumen de la configuración

El objetivo de esta configuración es preparar el ST-905L para que se comunique de forma confiable con Plaspy y sea visible en la plataforma para seguimiento en tiempo real y telemetría. Los comandos SMS públicos del ST-905L permiten a los instaladores establecer el APN, el endpoint del servidor y los intervalos de reporte sin herramientas adicionales.

- Apuntar el dispositivo al endpoint de ingestión de Plaspy y al puerto para que los reportes lleguen a su cuenta de Plaspy
- Configurar las credenciales APN del operador móvil para que el rastreador use datos celulares
- Ajustar la zona horaria y los intervalos de reporte según su política de seguimiento y expectativas de batería
- Cambiar el rastreador a modo GPRS tras la configuración para que envíe datos por celular
- Verificar la configuración del dispositivo con el comando RCONF para confirmar el ID y los ajustes
- Asegurarse de que el dispositivo esté alimentado y tenga conectividad de red antes de la validación final

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com debe ingresarse si el firmware del dispositivo acepta un nombre de dominio
- La IP del servidor 54.85.159.138 puede usarse cuando se requiera una dirección numérica
- El puerto 8888 es el puerto de ingestión que Plaspy utiliza para todos los dispositivos compatibles
- El transporte puede ser UDP o TCP; seleccione el que requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el dispositivo al endpoint y puerto correctos

## Requisitos típicos antes de la configuración

- Un ST-905L cargado con una tarjeta SIM activa y con datos habilitados (GPRS o LTE)
- Capacidad para enviar comandos SMS al dispositivo desde un número autorizado usado durante la provisión
- Credenciales APN del operador móvil: nombre de APN y, si corresponde, usuario y contraseña
- Acceso al IMEI o ID del dispositivo y posibilidad de confirmar ajustes con el comando RCONF
- Familiaridad básica con el formato de comandos SMS del fabricante o con la herramienta de provisión si está disponible
- Asegúrese de que el dispositivo tenga vista despejada al cielo para obtener fijaciones GNSS durante la validación inicial

## Cómo se conecta este rastreador a Plaspy

El ST-905L se configura para enviar sus paquetes de ubicación y telemetría a Plaspy a través del endpoint y puerto compartidos de Plaspy. Una vez que se configuran el servidor y el APN, el rastreador sube reportes periódicos de posición y mensajes de evento que Plaspy ingiere y muestra en paneles y alertas.

- El dispositivo envía paquetes periódicos de ubicación y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la selección durante la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para que los datos se analicen sin necesidad de seleccionar el protocolo por dispositivo
- Los intervalos de reporte y los disparadores de eventos determinan la frecuencia con que el dispositivo sube posiciones a Plaspy
- Se pueden usar RCONF u otros comandos de verificación para confirmar el ID del dispositivo y los ajustes de servidor actuales

## Flujo de configuración habitual

1. Acceda al método de provisión SMS oficial de SinoTrack o a la herramienta de configuración del fabricante según la documentación de SinoTrack
2. Ajuste la zona horaria y otros parámetros locales si su política de reporte lo requiere
3. Ingrese d.plaspy.com o 54.85.159.138 como la dirección del servidor del dispositivo, según si el firmware acepta dominio o solo IP numérica
4. Configure el puerto del dispositivo en 8888 en la sección de servidor
5. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte
6. Configure el APN y las credenciales APN con los valores del operador para la SIM instalada
7. Aplique o guarde la configuración, luego reinicie o cambie el dispositivo a modo GPRS si es necesario
8. Valide que el dispositivo reporta a Plaspy comprobando la llegada de datos y utilizando el comando RCONF para verificar

## Ejemplos de comandos de configuración

El ST-905L admite comandos de configuración por SMS. Los siguientes comandos públicos aparecen en la documentación del fabricante y se muestran en el orden recomendado. Sustituya los marcadores de APN por los valores de su operador.

- Paso inicial opcional para restaurar ajustes de fábrica (usar solo cuando sea necesario)
```text
RESET
```

- Establecer la zona horaria a UTC 0 (comando de ejemplo)
```text
8960000E00
```

- Configurar el APN del operador
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explicación: reemplace {{apn}} por el nombre del APN del operador. {{apnu}} es el usuario del APN si se requiere. {{apnp}} es la contraseña del APN si se requiere. Deje usuario y contraseña en blanco si su operador no los usa, pero conserve los marcadores según exija el formato del comando del dispositivo.

- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto
```text
8040000 54.85.159.138 8888
```
Nota: Si el firmware del dispositivo acepta un nombre de dominio, puede alternativamente apuntar a d.plaspy.com cuando esté soportado.

- Establecer intervalo de actualización cuando el rastreador está activo
```text
8050000 60
```

- Establecer intervalo de actualización cuando el rastreador está apagado o en otro estado
```text
8090000 60
```

- Cambiar el dispositivo a modo GPRS para que suba datos por celular
```text
7100000
```

- Verificar ajustes actuales del dispositivo y recuperar el ID con el comando de verificación
```text
RCONF
```

Use estos comandos en el orden mostrado para la provisión inicial: considere RESET solo si necesita borrar ajustes previos, luego configure zona horaria, APN, servidor, intervalos, cambie a GPRS y verifique con RCONF.

## Notas de configuración

- La provisión por SMS es compatible con el ST-905L y resulta práctica para activaciones de campo cuando no hay herramienta de configuración disponible
- Versiones de firmware o revisiones de hardware pueden cambiar el formato de comandos o los parámetros soportados; confirme siempre la sintaxis actual con la documentación de SinoTrack
- Elija TCP o UDP según la preferencia del instalador y el soporte del dispositivo; Plaspy acepta ambos y gestiona la detección automática del protocolo
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, así que aplique este valor de forma consistente durante la provisión
- Pruebe el reporte del dispositivo después de la configuración en un entorno controlado para confirmar la conectividad APN y la ingestión en Plaspy

## Por qué usar Plaspy con esta configuración

Usar el ST-905L con Plaspy ofrece a las organizaciones una vía directa para convertir un rastreador listo para usar en un dispositivo de monitoreo de activos y vehículos en tiempo real dentro de una plataforma centralizada de gestión de flotas. Al configurar el APN y los datos del servidor por SMS y apuntar el dispositivo a Plaspy, usted habilita reportes de ubicación, alertas y visibilidad operativa sin depender de la nube por defecto del proveedor.

Learn more about Plaspy and how it ingests device data at https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and manufacturer guidance verify current information on the SinoTrack website https://www.sinotrackgps.com/ as manufacturer specifications and setup methods can change over time.
