---
slug: /concox/tr06/configuration
id: tr06-configuration
sidebar_label: Configuration
title: Concox - TR06 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Concox TR06 para usar con Plaspy mediante servidor público y comandos SMS
keywords:
  - Configuración Concox TR06
  - Instalación Concox TR06
  - Configuración servidor TR06
  - Configuración TR06 Plaspy
  - Configuración rastreador GPS Concox
  - Comandos SMS TR06
  - Rastreo vehicular TR06
  - Gestión de flotas TR06
  - Compatibilidad GPS Plaspy
  - Configuración GPRS TR06
---

# Concox - Configuración TR06

Esta página describe la configuración pública necesaria para utilizar el rastreador Concox TR06 con Plaspy. Incluye los ajustes de servidor prácticos y ejemplos de comandos SMS que se emplean habitualmente para apuntar un dispositivo TR06 a Plaspy, de modo que el equipo pueda enviar ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al recibir datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TR06 soporta configuración vía SMS y GPRS según su documentación pública; en esta página se muestran los comandos y el flujo de trabajo públicos usados para integrar un TR06 con Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el TR06 para que se comunique de forma fiable con Plaspy y aparezca en su cuenta. Mediante los comandos SMS públicos del TR06 o la herramienta oficial del fabricante puede configurar parámetros APN, el servidor de Plaspy, los intervalos de reporte y habilitar GPRS para que el dispositivo envíe datos a la plataforma.

- Apuntar el TR06 al endpoint de servidor de Plaspy para que los datos de ubicación lleguen a la plataforma.
- Configurar el APN del dispositivo y activar GPRS para que el rastreador use datos móviles.
- Establecer un intervalo de reporte adecuado para que el dispositivo actualice posición y estado con la frecuencia requerida.
- Validar la conectividad y confirmar que el equipo aparece en Plaspy una vez que informe.
- Usar el comando de verificación para comprobar los parámetros actuales de GPRS y servidor en el dispositivo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos

Estos ajustes públicos dirigen el tráfico del TR06 hacia Plaspy. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará el protocolo automáticamente.

## Requisitos típicos antes de comenzar

- Un dispositivo TR06 con alimentación conectada y en funcionamiento.
- Una tarjeta SIM válida con datos GPRS habilitados y capacidad SMS para configurar por SMS.
- Datos APN de su operador móvil para configurar el acceso GPRS.
- Acceso al método de configuración por SMS del TR06 o a la herramienta oficial de Concox.
- Acceso administrativo a su cuenta de Plaspy para confirmar que el dispositivo aparece después de la configuración.
- Familiaridad básica con el envío de comandos SMS al rastreador o con el uso de la interfaz de configuración del fabricante.

## Cómo se conecta este rastreador a Plaspy

El TR06 se configura para enviar ubicación y datos del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda ingerir la telemetría y mostrarla. Una vez que el APN y los ajustes de servidor estén correctos, el dispositivo abrirá una sesión GPRS y enviará reportes periódicos a Plaspy.

- El rastreador se ajusta para usar el dominio o la IP de Plaspy y el puerto 8888 para subir datos.
- Plaspy acepta transporte TCP o UDP, seleccione el que soporte el equipo o prefiera su red.
- La detección automática del protocolo por parte de Plaspy simplifica la incorporación del dispositivo.
- Mensajes periódicos tipo TIMER o latido permiten a Plaspy mostrar posición y estado en tiempo real.
- Los comandos de verificación permiten confirmar que el dispositivo apunta a Plaspy antes de comprobar la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Concox para el TR06, normalmente comandos SMS o la herramienta de configuración Concox.
2. Introduzca el endpoint del servidor Plaspy como dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888 en la configuración del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere seleccionar explícitamente el transporte.
5. Establezca el APN y, si aplica, nombre de usuario y contraseña del APN de su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo requieren.
7. Valide que el TR06 reporte a Plaspy comprobando el estado del dispositivo en su cuenta Plaspy y usando el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

El TR06 soporta configuración vía SMS. A continuación están los comandos SMS públicos en el orden habitual. Envíelos como mensajes SMS al número de la SIM del dispositivo desde un número autorizado.

- Reinicio de fábrica opcional (usar solo si necesita borrar ajustes existentes):

```
FACTORY#
```

- Establecer la zona horaria a UTC 0:

```
GMT,E,0#
```

- Configurar el APN del operador (reemplazar {{apn}} por el APN de su operador, e incluir {{apnu}} y {{apnp}} si su operador requiere usuario y contraseña):

```
APN,{{apn}},{{apnu}},{{apnp}}#
```

Nota: mantenga los marcadores {{apn}}, {{apnu}}, {{apnp}} según corresponda. Si su APN requiere solo el nombre, envíe únicamente APN,{{apn}}#.

- Configurar el servidor GPRS usando el dominio de Plaspy (la selección UDP o TCP puede gestionarse por separado en algunos firmwares):

```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativamente, configurar el servidor GPRS usando la IP de Plaspy:

```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización a cada 60 segundos (ejemplos mostrados):

```
TIMER,60#
```

o

```
TIMER,60,60#
```

- Habilitar modo GPRS:

```
GPRSON,1#
```

- Verificar parámetros actuales de GPRS y servidor:

```
GPRSSET#
```

Siga el orden anterior para una configuración típica: APN, SERVER, TIMER y luego habilitar GPRS. Si realiza un reinicio de fábrica primero, vuelva a aplicar los ajustes de APN y servidor después.

## Notas sobre la configuración

- Las versiones de firmware del fabricante y las personalizaciones locales pueden cambiar el formato exacto de los comandos o el orden de los parámetros; consulte el manual oficial del dispositivo si un comando no funciona como se espera.
- El TR06 soporta la configuración por SMS como se muestra; si prefiere utilizar la herramienta oficial de Concox, aplique los mismos ajustes de servidor Plaspy en esa herramienta.
- Elija UDP o TCP según las opciones del firmware del dispositivo y su red; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, por lo que debe configurar el puerto 8888 de forma consistente cuando configure varios equipos.
- Mantenga los marcadores del APN y sustitúyalos por las credenciales del operador según sea necesario; valores APN faltantes o incorrectos impedirán la conectividad GPRS.

## Por qué usar Plaspy con esta configuración

Usar el Concox TR06 con Plaspy ofrece un camino sencillo hacia la visibilidad de la flota, el monitoreo operativo y la notificación de eventos. Apuntar el TR06 a Plaspy con los ajustes públicos de servidor y habilitar GPRS permite que las actualizaciones de posición se recopilen, muestren y supervisen en una sola plataforma, mejorando la supervisión operativa.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods, firmware behavior, and manufacturer details with Concox at https://www.iconcox.com/ to ensure you are working with the latest official documentation.
