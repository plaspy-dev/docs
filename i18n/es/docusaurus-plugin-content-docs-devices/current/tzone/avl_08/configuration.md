---
slug: /tzone/avl_08/configuration
id: avl_08-configuration
sidebar_label: Configuration
title: TZone - AVL-08 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TZone AVL-08 con ajustes de servidor Plaspy y comandos SMS para la puesta en marcha
keywords:
  - Configuración TZone AVL-08
  - Instalación AVL-08 Plaspy
  - Configuración rastreador GPS TZone
  - Configuración del servidor AVL-08
  - Comandos SMS AVL-08
  - Configuración GPRS AVL-08
  - Integración de rastreadores con Plaspy
  - Configuración rastreo de vehículos
  - Configuración rastreadores para gestión de flotas
  - Configuración plataforma rastreadores GPS
---

# TZone - Configuración del AVL-08

Esta página describe el contexto público de configuración para usar el rastreador GPS TZone AVL-08 con Plaspy. Se centra en los ajustes prácticos del servidor, el flujo de configuración y los comandos SMS públicos que permiten que el equipo reporte ubicación y estado a la plataforma Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que aquí se ofrece información práctica y pública, recomendando siempre verificar con la documentación oficial del fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo al configurar un AVL-08 para Plaspy es preparar el equipo para que envíe datos de ubicación por GPRS al endpoint de Plaspy, confirmar la conectividad y asegurarse de que el dispositivo aparezca y reporte correctamente en la plataforma.

- Configurar el APN del operador móvil para que el rastreador pueda usar datos GPRS y acceder a Internet.
- Apuntar el equipo al endpoint y puerto del servidor Plaspy.
- Establecer un intervalo de reporte adecuado para posición y telemetría.
- Activar el modo de reporte por GPRS para que el dispositivo envíe datos en lugar de depender solo de SMS.
- Validar que el rastreador sea visible y que reporte correctamente en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol and all devices use the same port on the platform

(Nota: conserve exactamente el dominio, la IP y el puerto cuando configure el dispositivo.)

## Requisitos habituales antes de la configuración

- Un equipo AVL-08 alimentado y accesible con una SIM funcional que disponga de datos y capacidad de SMS según lo requiera la instalación.
- El APN del operador móvil, y si aplica usuario y contraseña, para configurar el acceso GPRS.
- Acceso al método oficial de configuración TZone para el AVL-08, ya sea mediante comandos SMS o herramientas del proveedor.
- La contraseña SMS o credenciales básicas necesarias para enviar comandos de configuración al rastreador.
- Una cuenta de Plaspy o acceso a su espacio de trabajo Plaspy para confirmar que el dispositivo aparece y reporta tras la configuración.
- Opcional: un entorno estable para probar la conectividad y verificar las actualizaciones de posición.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AVL-08 envía datos por GPRS al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar la ubicación y los eventos. Plaspy recibe los datos y utiliza la detección automática de protocolo para decodificar y mostrar la telemetría del dispositivo.

- El rastreador se configura apuntando al servidor Plaspy mediante IP o nombre de dominio.
- Los datos del equipo se envían por GPRS al servidor Plaspy en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del equipo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo es necesario configurar el endpoint y el transporte.
- La plataforma ofrece visibilidad, registro de eventos y monitoreo operativo del equipo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TZone para el AVL-08, normalmente comandos SMS o software del proveedor.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del equipo.
3. Establezca el puerto del servidor en 8888 como requiere Plaspy.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Configure el APN del operador y las credenciales opcionales del APN para que el rastreador pueda usar GPRS.
6. Aplique o guarde la configuración y reinicie el equipo si el dispositivo o la herramienta del proveedor lo requieren.
7. Valide que el equipo reporte a Plaspy y aparezca en su espacio de trabajo Plaspy con las actualizaciones de posición esperadas.

## Comandos de configuración de ejemplo

El AVL-08 soporta configuración vía SMS. Envíe estos comandos por SMS al dispositivo en el orden mostrado para la configuración inicial. Los ejemplos incluyen la contraseña SMS por defecto en la cadena de comando según el formato del fabricante. Sustituya los marcadores por los valores de su operador.

- Establecer el APN del operador
  - Formato del comando (APN obligatorio, usuario y contraseña del APN opcionales):
  ```
  *000000,011,{{apn}},{{apnu}},{{apnp}}#
  ```
  - Si su APN no requiere usuario ni contraseña, envíe:
  ```
  *000000,011,{{apn}}#
  ```
  - Explicación: {{apn}} es el APN de su operador móvil. {{apnu}} y {{apnp}} son usuario y contraseña del APN, opcionales.

- Establecer el intervalo de actualización a 60 segundos
  ```
  *000000,018,60,999#
  ```
  - Explicación: Configura el intervalo de reporte. Ajuste el valor 60 según la política de reportes que usted requiera.

- Configurar el servidor GPRS a Plaspy
  ```
  *000000,015,0,54.85.159.138,8888#
  ```
  - Explicación: Apunta el equipo a la IP y puerto del servidor Plaspy. Alternativamente puede usar el dominio d.plaspy.com en herramientas de proveedor que acepten nombres DNS.

- Activar el modo GPRS
  ```
  *000000,016,1#
  ```
  - Explicación: Habilita el modo de reporte por GPRS para que el equipo envíe datos al servidor configurado.

Nota: Los comandos SMS mostrados incorporan la secuencia numérica de la contraseña SMS como parte del formato. Si la contraseña SMS de su equipo es distinta, reemplace el valor inicial numérico según corresponda.

## Observaciones sobre la configuración

- El formato de los comandos SMS y el orden de parámetros pueden variar entre versiones de firmware y revisiones regionales del equipo; verifique la sintaxis con la documentación actual de TZone.
- El AVL-08 admite configuración por SMS como se muestra, pero algunos instaladores prefieren usar herramientas del proveedor para configuraciones masivas o ajustes específicos de firmware.
- Elija UDP o TCP según la fiabilidad de la red y su preferencia operativa; Plaspy acepta ambos transportes y detecta el protocolo automáticamente.
- Use la IP 54.85.159.138 o el dominio d.plaspy.com al configurar el equipo; ambos apuntan al endpoint Plaspy en el puerto 8888.
- Mantenga las credenciales APN y las contraseñas sensibles seguras durante la configuración y cambie las contraseñas SMS por defecto cuando el equipo lo permita.

## Por qué usar Plaspy con esta configuración

Configurar el TZone AVL-08 para reportar a Plaspy proporciona a las organizaciones visibilidad consistente de la ubicación de vehículos y activos, alarmas y estado operativo usando un único endpoint de servidor compartido. Para flotas o gestores de activos que necesitan monitoreo consolidado y manejo de alarmas, apuntar los equipos al servidor Plaspy y aprovechar la detección automática de protocolos simplifica la incorporación de múltiples modelos de dispositivos.

Para obtener más información sobre Plaspy y cómo soporta una amplia gama de rastreadores visite https://www.plaspy.com. Para detalles más recientes del dispositivo AVL-08, notas de firmware e instrucciones del fabricante, verifique los métodos de configuración y comandos en el sitio oficial de TZone http://www.tzonedigital.com/
