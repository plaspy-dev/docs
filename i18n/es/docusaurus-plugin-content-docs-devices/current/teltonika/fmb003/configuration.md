---
slug: /teltonika/fmb003/configuration
id: fmb003-configuration
sidebar_label: Configuration
title: Teltonika - FMB003 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Teltonika FMB003 con ajustes de servidor Plaspy y pasos prácticos para integración de flotas
keywords:
  - Configuración Teltonika FMB003
  - Instalación Teltonika FMB003
  - Configuración FMB003 Plaspy
  - Configuración rastreador GPS Teltonika
  - Configuración servidor FMB003
  - Integración rastreador Plaspy
  - Configuración rastreador OBD II
  - Guía del Teltonika Configurator
  - Ajustes de servidor para rastreador GPS
  - Configuración de rastreador de flotas Plaspy
---

# Teltonika - FMB003 Configuration

Esta página describe el contexto público de configuración para usar el Teltonika FMB003 con Plaspy. Aquí encontrará los ajustes de servidor compartidos por Plaspy que debe aplicar en el dispositivo, cómo usa la plataforma esos parámetros y notas prácticas de instalación basadas en comandos públicos y métodos de configuración del fabricante.

Plaspy emplea ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice. Cuando esté disponible, incluimos un ejemplo público de comando para el FMB003 y explicamos los marcadores de posición como los valores APN que usted debe proporcionar.

## Resumen de la configuración

El objetivo es apuntar el FMB003 a Plaspy para que el equipo reporte de forma fiable la ubicación y la telemetría OBD OEM a la plataforma. Esto implica configurar parámetros de red, el endpoint del servidor Plaspy y el modo de transporte que el dispositivo utilizará para enviar datos.

- Configure los ajustes de red del dispositivo, incluyendo APN y credenciales si son necesarias.
- Apunte el rastreador al endpoint del servidor Plaspy para que reenvíe posición y datos OBD.
- Seleccione el protocolo de transporte en caso de que el dispositivo requiera elegir entre UDP o TCP.
- Aplique y guarde la configuración y reinicie el equipo si el firmware lo exige.
- Valide que el rastreador aparezca y reporte en Plaspy usando las herramientas de visibilidad de la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de la configuración

- Acceso físico al puerto OBD II del vehículo para la instalación y verificación de alimentación.
- Una tarjeta SIM activa con plan de datos y los valores APN, usuario y contraseña de su operador móvil.
- Acceso al método oficial de configuración Teltonika que planea usar, como comandos SMS, Teltonika Configurator o FOTA WEB.
- Que la unidad FMB003 tenga firmware compatible con el método de configuración elegido.
- Acceso básico a una cuenta de Plaspy para confirmar que el dispositivo reporta después de la configuración.
- Un método para ver registros o respuestas del dispositivo y así validar que la configuración fue exitosa.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMB003 envía posición y telemetría OBD OEM al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera y muestre los datos en los flujos de trabajo de flota.

- El rastreador envía actualizaciones de ubicación y parámetros OBD OEM a d.plaspy.com en el puerto 8888.
- Plaspy recibe conexiones de dispositivos por UDP o TCP y detecta automáticamente el protocolo del rastreador.
- Los reportes del dispositivo habilitan la visibilidad en los paneles de Plaspy y disparan alertas o automatizaciones según lo configurado.
- La plataforma mapea los datos entrantes del dispositivo a los registros de vehículo para seguimiento, kilometraje y reportes de combustible o batería.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Teltonika que prefiera, por ejemplo SMS, Teltonika Configurator o FOTA WEB.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en la sección de ajuste de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Establezca los valores de APN, nombre de usuario APN y contraseña APN requeridos por su operador móvil.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo y los datos entrantes en la plataforma.

## Comandos de configuración de ejemplo

El FMB003 puede configurarse usando un comando SMS en lote. El ejemplo público abajo establece los parámetros APN e incluye el dominio y puerto del servidor Plaspy. Mantenga los marcadores de posición tal como se muestran y reemplácelos por sus valores reales de APN.

- Reemplace los marcadores:
  - {{apn}} con el APN de su operador móvil
  - {{apnu}} con el usuario APN si es requerido
  - {{apnp}} con la contraseña APN si es requerida

Example SMS batch command:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre este comando de ejemplo:
- El comando incluye el dominio del servidor Plaspy d.plaspy.com y el puerto 8888 para que el dispositivo pueda reportar a Plaspy.
- Los marcadores {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse con los valores de su operador.
- El parámetro final en el lote indica un flag de transporte o relacionado; siga la guía de Teltonika para el valor correcto según elija UDP o TCP.

Si utiliza Teltonika Configurator o FOTA WEB en lugar de SMS, los mismos valores de dominio y puerto deben ingresarse en los campos de servidor correspondientes.

## Notas de configuración

- Las versiones de firmware y las interfaces de configuración de Teltonika pueden variar; confirme los IDs de parámetros y la sintaxis de comandos según el firmware de su unidad.
- Elija UDP o TCP según su política de red y la compatibilidad del dispositivo. Plaspy soporta ambos y detecta el protocolo automáticamente.
- La configuración por SMS es habitualmente soportada, pero requiere que el equipo acepte comandos SMS y que el plan de la SIM permita envío de SMS.
- Siempre reemplace los marcadores de APN por valores específicos del operador antes de enviar los comandos de configuración.
- Verifique la visibilidad del dispositivo en Plaspy tras la configuración para confirmar que está conectado y reportando.

## Por qué usar Plaspy con esta configuración

Configurar el Teltonika FMB003 para reportar a Plaspy ofrece a los operadores de flotas telemetría OBD simple combinada con la visibilidad y los reportes de Plaspy. El factor de forma plug and play, los datos OBD OEM y los ajustes de servidor compartidos de Plaspy facilitan el despliegue consistente de dispositivos y la gestión para kilometraje, combustible o batería y el rastreo en tiempo real.

Learn more about Plaspy on https://www.plaspy.com and verify the latest device specific setup details with the manufacturer at https://www.teltonika-gps.com/ . Device configuration methods, firmware behavior, and manufacturer documentation can change over time so confirm current instructions on the official manufacturer website.
