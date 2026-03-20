---
slug: /teltonika/fmb208/configuration
id: fmb208-configuration
sidebar_label: Configuration
title: Teltonika - FMB208 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB208 y reportar a Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - Configuración Teltonika FMB208
  - Configuración FMB208
  - Configuración servidor FMB208
  - Configuración FMB208 Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador Teltonika
  - Configuración rastreador AIS140
  - Configuración rastreo de vehículos
  - Integración plataforma GPS
  - Configuración seguimiento de flotas
---

# Teltonika - FMB208: Configuración

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FMB208 con Plaspy. Está enfocada en los ajustes de servidor compartido de Plaspy y en pasos prácticos que puede aplicar con los métodos comunes de configuración de Teltonika para que el dispositivo reporte a la plataforma Plaspy.

Plaspy utiliza un único endpoint de servidor y puerto compartido para los dispositivos compatibles y detecta automáticamente el protocolo del tracker. Los pasos de configuración en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use esta guía como punto de partida práctico y consulte la documentación oficial de Teltonika para comandos específicos del dispositivo.

## Resumen de la configuración

El objetivo es preparar el FMB208 para que se comunique de forma fiable con Plaspy usando los ajustes de servidor compartido de la plataforma. Esto incluye proporcionar las credenciales APN de datos móviles si son necesarias, configurar la dirección del servidor y el puerto, seleccionar el transporte cuando aplique y validar que los reportes del dispositivo sean visibles en Plaspy.

- Configurar el APN y las credenciales de la SIM necesarias para que el dispositivo tenga acceso a internet
- Establecer la dirección y el puerto del servidor de Plaspy para que el tracker envíe la telemetría al endpoint correcto
- Elegir UDP o TCP como transporte en el dispositivo si la herramienta de configuración lo solicita
- Aplicar y guardar la configuración, luego validar que el dispositivo esté reportando a Plaspy
- Utilizar canales de configuración de Teltonika como comandos SMS, Teltonika Configurator, FOTA Web o la app FMBT según corresponda

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de configurar

- Alimentar el dispositivo y confirmar que está instalado correctamente según las guías del instalador
- Acceder al método oficial de configuración de Teltonika que prefiera, por ejemplo comandos SMS, Teltonika Configurator, FOTA Web o la app FMBT
- Contar con una tarjeta SIM válida con datos habilitados y las credenciales APN de su operador móvil
- Usuario y contraseña del APN si la red requiere autenticación
- Tener a mano los datos del servidor Plaspy mostrados arriba para ingresar el dominio o la IP y establecer el puerto 8888
- Verificar de forma básica que el rastreador sea visible en Plaspy después de la configuración

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el FMB208 enviará datos de posición y eventos al endpoint y puerto compartido de Plaspy para que la plataforma muestre la ubicación y el estado del dispositivo. Plaspy detecta el protocolo del tracker automáticamente, por lo que no es necesario cambiar puertos por dispositivo en la plataforma.

- El dispositivo transmite datos de localización y estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del equipo; Plaspy acepta ambos
- Los eventos y alertas configurados en el tracker se hacen visibles en Plaspy cuando el dispositivo reporta correctamente
- Tras la configuración, se valida el dispositivo confirmando que la telemetría llega a la plataforma Plaspy

## Flujo de configuración habitual

1. Acceda al método o software oficial de Teltonika que usará para este dispositivo (SMS, Teltonika Configurator, FOTA Web o la app móvil FMBT).
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo correspondiente.
3. Ajuste el puerto del servidor a 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si la herramienta de configuración lo solicita.
5. Proporcione los ajustes y credenciales del APN cuando sean necesarios para que el dispositivo tenga conectividad de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo recomiendan.
7. Valide que el dispositivo reporte a Plaspy comprobando su visibilidad en la plataforma y verificando la telemetría reciente.

## Comandos de configuración de ejemplo

Para configurar los parámetros básicos en su Teltonika, puede usar el siguiente ejemplo público cuando la configuración por SMS sea compatible. Este comando establece los campos APN y configura el dispositivo para que reporte a Plaspy.

- Ejemplo de comando en una sola línea para entrada por SMS o consola:

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores y valores:
- [apn] es el nombre del APN de la red móvil necesario para la conectividad de datos
- [apnu] es el usuario del APN si el operador lo requiere; dejar en blanco si no aplica
- [apnp] es la contraseña del APN si el operador la requiere; dejar en blanco si no aplica
- 2004 configura la dirección del servidor a d.plaspy.com, dirigiendo el dispositivo al endpoint de Plaspy
- 2005 establece el puerto en 8888, que es el puerto compartido de Plaspy
- 2006 en este ejemplo es una bandera específica del dispositivo usada en el comando de parámetros; consulte la documentación de Teltonika para conocer los significados exactos si necesita ajustar este valor

Si utiliza otro canal de configuración como Teltonika Configurator o FOTA, ingrese valores equivalentes en los campos de dirección del servidor y puerto en lugar de enviar un SMS.

## Notas de configuración

- Las variantes de firmware y regionales pueden cambiar la numeración o el comportamiento de los parámetros; verifique el significado de los parámetros para su versión de firmware en los recursos de Teltonika
- Teltonika admite múltiples canales de configuración, incluidos SMS, Teltonika Configurator, FOTA Web y la app FMBT; elija el que sea adecuado para su despliegue
- Cuando un dispositivo requiera selección de transporte, elija UDP o TCP según sus necesidades operativas; Plaspy acepta ambos y detecta el protocolo automáticamente
- Use el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera su herramienta de configuración; la plataforma acepta ambos y utiliza el puerto 8888 para todos los dispositivos
- Si emplea un comando por SMS, incluya los marcadores del APN exactamente y reemplace con los valores de su operador para la SIM

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB208 con Plaspy ofrece a los gestores de flotas y activos un camino sencillo para integrar hardware compatible con AIS140 en un único endpoint de plataforma. Configurar el dispositivo para que reporte al servidor compartido de Plaspy simplifica la incorporación, ya que el mismo puerto y la detección automática de protocolo reducen la configuración por dispositivo en la plataforma.

Learn more about Plaspy and how it supports third party trackers on the main website https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and parameter definitions verify current information on the manufacturer website https://www.teltonika-gps.com/ .
