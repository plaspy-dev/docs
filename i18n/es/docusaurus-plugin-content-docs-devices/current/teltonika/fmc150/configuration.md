---
slug: /teltonika/fmc150/configuration
id: fmc150-configuration
sidebar_label: Configuration
title: Teltonika - FMC150 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMC150 con Plaspy, incluye valores de servidor, comandos y flujo de trabajo práctico
keywords:
  - Configuración Teltonika FMC150
  - Instalación Teltonika FMC150
  - Teltonika FMC150 Plaspy
  - Configuración servidor FMC150
  - Configuración software rastreo FMC150
  - Configuración rastreador Teltonika
  - Instalación rastreador GPS vehicular
  - Configuración telemetría FMC150
  - Configuración rastreador Plaspy
  - Rastreador gestión de flotas
---

# Teltonika - Configuración FMC150

Esta página documenta el contexto público de configuración para usar el Teltonika FMC150 con Plaspy. Se centra en los ajustes de servidor, el flujo de trabajo y los comandos de ejemplo que se suelen emplear para preparar los dispositivos FMC150 y que reporten a Plaspy. Use esta información para aplicar los valores compartidos de Plaspy en su equipo y validar la conectividad antes de desplegar la flota.

Plaspy emplea los mismos ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El FMC150 soporta los métodos de configuración estándar de Teltonika y el ejemplo de configuración que se muestra a continuación ilustra un comando típico para fijar el APN y los valores del servidor de Plaspy.

## Resumen de la configuración

Este proceso prepara el FMC150 para enviar posiciones GNSS y telemetría derivada del CAN a Plaspy mediante la asignación del endpoint de Plaspy y los parámetros de red necesarios. El objetivo es asegurar que el equipo pueda establecer una conexión saliente hacia Plaspy y que la plataforma reciba los mensajes esperados para visibilidad y monitoreo.

- Aplique los datos del servidor Plaspy en el FMC150 para que reporte al host y puerto correctos.
- Configure el APN del equipo y los campos de autenticación necesarios para disponer de conectividad celular.
- Seleccione el modo de transporte (UDP o TCP) si el equipo exige una elección explícita.
- Guarde y aplique los ajustes, y luego verifique que el dispositivo aparezca en Plaspy y transmita telemetría.
- Use el comando setparam de ejemplo si configura mediante SMS o una herramienta de aprovisionamiento Teltonika.

## Valores del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the FMC150 may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos típicos antes de comenzar

- Un equipo FMC150 con alimentación instalado o accesible para su configuración.
- Conectividad celular activa en el dispositivo y un APN configurado para su operador.
- Acceso al método de configuración Teltonika que utilice (comandos SMS, Teltonika Configurator o herramienta de aprovisionamiento).
- Credenciales o permisos para cambiar ajustes del dispositivo y reiniciarlo si lo requiere el procedimiento.
- Conocimiento de si su despliegue necesita seleccionar UDP o TCP en el dispositivo.
- Acceso a una cuenta Plaspy o a un administrador de plataforma para confirmar que el dispositivo queda visible tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el FMC150 envía sus posiciones GNSS y la telemetría derivada del CAN al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir, parsear y mostrar los datos en paneles y reportes.

- El equipo se configura con d.plaspy.com o con la IP de servidor equivalente para dirigir el tráfico saliente hacia Plaspy.
- El rastreador usa el puerto 8888 para toda la comunicación con Plaspy.
- Seleccione UDP o TCP en el FMC150 si el dispositivo exige una selección de transporte; Plaspy admite ambos.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes sin cambiar puertos por dispositivo.
- Tras la conexión exitosa, Plaspy recibe mensajes de posición y telemetría para seguimiento en tiempo real, alertas e informes históricos.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Teltonika o al software que utilice para el FMC150, como aprovisionamiento vía SMS o el Teltonika Configurator.
2. Introduzca la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de host del servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 como puerto de salida para la comunicación con Plaspy.
4. Elija UDP o TCP si el FMC150 requiere una selección de transporte.
5. Proporcione los ajustes del APN celular y cualquier usuario o contraseña de APN que sea necesario antes de guardar.
6. Aplique o guarde la configuración y reinicie la unidad si su procedimiento lo requiere.
7. Verifique que el FMC150 reporte a Plaspy y que aparezca en la plataforma con la telemetría esperada.

## Comandos de configuración de ejemplo

Para configurar parámetros básicos en el FMC150 usando un comando setparam al estilo Teltonika, utilice el siguiente comando público. Este comando fija los valores de APN y los campos del servidor Plaspy. Mantenga los marcadores de posición y reemplácelos por los datos de su operador cuando sea necesario.

- Ejemplo de comando setparam para configurar APN y servidor Plaspy

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de marcadores de posición y campos
  - [apn] — reemplace con el nombre del APN de su operador celular
  - [apnu] — reemplace con el usuario APN si el operador lo requiere; deje vacío si no aplica
  - [apnp] — reemplace con la contraseña APN si el operador la requiere; deje vacío si no aplica
  - El campo 2004 configura el dominio del servidor a d.plaspy.com
  - El campo 2005 configura el puerto del servidor a 8888
  - El campo 2006 habitualmente indica el transporte o un flag de activación según el firmware de Teltonika; consulte la documentación del dispositivo o el configurador para la semántica exacta

Este comando se envía típicamente por SMS al dispositivo o se aplica mediante las herramientas de aprovisionamiento Teltonika según su flujo de trabajo. No cambie el orden de los parámetros si su herramienta de aprovisionamiento exige una secuencia específica.

## Notas de configuración

- Las diferencias de firmware pueden alterar los IDs de parámetro y el comportamiento de los comandos; siempre verifique el mapeo de parámetros para la revisión de firmware específica de su FMC150.
- Las prácticas de instalación varían por región y SKU; confirme si su variante de dispositivo requiere ajustes APN o de red adicionales para 4G LTE Cat 1 y retroceso a 2G.
- Elija entre UDP y TCP según las condiciones de su red y el soporte del firmware del equipo; Plaspy acepta ambos en el puerto 8888.
- El aprovisionamiento por SMS y las herramientas de Teltonika Configurator son métodos habituales para aplicar estos ajustes; utilice el que coincida con sus procedimientos operativos.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica los despliegues con múltiples modelos.

## Por qué usar Plaspy con esta configuración

Usar el FMC150 con Plaspy centraliza la telemetría a nivel CAN y la información de posición GPS en una plataforma única para monitoreo de flotas, planificación de mantenimiento y supervisión operativa. Los valores de servidor compartidos de Plaspy simplifican el aprovisionamiento a gran escala, mientras que la detección automática de protocolos reduce la complejidad de configuración por dispositivo.

Learn more about Plaspy and how it integrates with compatible trackers at https://www.plaspy.com. For the latest device specific configuration methods firmware notes and official parameter references verify information on the manufacturer website https://www.teltonika-gps.com/.
