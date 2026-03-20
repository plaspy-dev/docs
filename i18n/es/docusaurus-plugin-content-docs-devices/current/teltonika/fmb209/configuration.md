---
slug: /teltonika/fmb209/configuration
id: fmb209-configuration
sidebar_label: Configuration
title: Teltonika - FMB209 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB209 y reportar a Plaspy con ajustes de servidor y ejemplos
keywords:
  - Configuración Teltonika FMB209
  - Instalación Teltonika FMB209
  - FMB209 Plaspy
  - Configuración GPS Teltonika
  - Configuración de servidor FMB209
  - Configuración de rastreador Plaspy
  - Rastreo de vehículos FMB209
  - Configuración GPS FMB209
  - Configuración de rastreador Teltonika
  - Configuración de telemetría FMB209
---

# Teltonika - FMB209 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Teltonika FMB209 con Plaspy. Se enfoca en los ajustes de servidor prácticos, los pasos comunes de preparación y un ejemplo de comando que puede usar para apuntar el dispositivo a Plaspy y permitir el seguimiento en tiempo real y la ingestión de telemetría. Use esta guía junto con la documentación y las herramientas de Teltonika al configurar dispositivos para producción.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para los dispositivos compatibles, y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme los procedimientos específicos del dispositivo antes de hacer cambios.

## Resumen de configuración

Este proceso prepara el FMB209 para comunicarse con Plaspy para que las posiciones, el estado del equipo y la telemetría de sensores lleguen a la plataforma. El comando de ejemplo incluido muestra cómo se pueden establecer parámetros básicos de conectividad en un dispositivo Teltonika usando una sola cadena de parámetros.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y aparezca en su cuenta de Plaspy.
- Proporcione el APN y los datos de conectividad necesarios para que el rastreador acceda a la red de datos móviles.
- Establezca el dominio y puerto del servidor Plaspy para que la telemetría se enrute en tiempo real.
- Valide la selección del transporte (UDP o TCP) si el dispositivo lo requiere y confirme que el rastreador esté en línea en Plaspy.
- Pruebe el reporte y verifique que la telemetría como la posición GPS, el estado de la batería de respaldo y los datos RS232 del sensor sean visibles en los paneles de Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos habituales antes de la configuración

- Asegúrese de que el FMB209 esté alimentado y accesible en el vehículo o activo objetivo.
- Una tarjeta SIM válida con un plan de datos móviles y los valores APN correctos para la región objetivo.
- Acceso a las herramientas de configuración de Teltonika o al método de comandos SMS según lo proporcionado por el instalador o proveedor.
- Conocimiento de la versión de firmware del dispositivo y de cualquier nota del fabricante que afecte los nombres de parámetros o el comportamiento.
- Una cuenta de Plaspy o un acuerdo de incorporación para que el dispositivo pueda validarse en la plataforma después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el FMB209 envía su ubicación y telemetría a Plaspy usando el endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión entrante del rastreador, detecta automáticamente el protocolo del dispositivo y comienza a ingerir posiciones y telemetría para su visualización y alertas.

- El rastreador se configura para reportar a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- Los datos se envían por el protocolo de transporte elegido, UDP o TCP, según la configuración del dispositivo.
- Plaspy identifica automáticamente el protocolo y procesa los mensajes entrantes de posición y estado.
- La telemetría y los datos de sensores RS232 enviados por el rastreador quedan disponibles para alertas e informes en Plaspy.
- Los eventos de dispositivo en línea y fuera de línea son visibles en Plaspy una vez que el rastreador establece conexión con el endpoint compartido del servidor.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Teltonika para el FMB209, como comandos SMS o el software de configuración de Teltonika proporcionado por el proveedor.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en el parámetro de servidor.
3. Establezca el puerto del servidor en 8888 como puerto de destino para los datos de seguimiento.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Proporcione las credenciales APN y cualquier parámetro de conectividad necesario para que el dispositivo pueda acceder a la red móvil.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el procedimiento lo requiere.
7. Valide que el dispositivo reporte a Plaspy y confirme que la posición y la telemetría aparezcan en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El siguiente ejemplo público muestra un comando de parámetros Teltonika que establece valores básicos de conectividad, incluyendo marcadores de posición para APN y el dominio y puerto de Plaspy. Conserve los marcadores de posición cuando los reemplace por el APN y las credenciales de su operador.

- Example setparam command for Teltonika devices

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Notas sobre los marcadores de posición
  - [apn] es el nombre APN de la tarjeta SIM requerido para acceder a datos móviles.
  - [apnu] es el usuario del APN si su operador lo solicita.
  - [apnp] es la contraseña del APN si es requerida por el operador.
- Cómo usar este comando
  - Envíe el comando a través del canal de configuración soportado por Teltonika para su dispositivo (por ejemplo SMS o la herramienta del proveedor). Esta cadena de comando única configura los marcadores de APN y apunta el dispositivo a d.plaspy.com en el puerto 8888. El parámetro final en este ejemplo es un valor de bandera del dispositivo presente en la cadena de comando pública.

## Notas de configuración

- El firmware y los nombres de parámetros pueden variar entre las versiones de Teltonika y las variantes regionales; siempre confirme los identificadores de parámetros para su versión de firmware.
- El comando de ejemplo demuestra opciones de configuración por SMS o texto comúnmente soportadas por los dispositivos Teltonika; si utiliza las herramientas de PC o la gestión remota de Teltonika, los mismos valores se ingresan mediante la interfaz de software.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy acepta ambos transportes en el puerto compartido y detectará automáticamente el protocolo conectado.
- Después de aplicar los cambios, valide la conectividad confirmando que el dispositivo aparece en línea en Plaspy y que reporta la telemetría esperada.
- Las prácticas de instalación y las variantes de mercado específicas pueden modificar los parámetros disponibles y la sintaxis de los comandos.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB209 con Plaspy ofrece una vía sencilla para centralizar la ubicación, el estado del dispositivo y la telemetría de sensores externos en una sola plataforma para monitoreo y supervisión operativa. Los ajustes de servidor compartidos de Plaspy simplifican el despliegue porque todos los dispositivos compatibles usan el mismo dominio y puerto, y Plaspy detecta automáticamente el protocolo del rastreador cuando este se conecta.

To learn more about Plaspy and how it handles tracker integrations, visit https://www.plaspy.com. For device specific configuration methods, parameter names, and firmware details, verify the latest information on the manufacturer site https://www.teltonika-gps.com/ before finalizing your deployment.
