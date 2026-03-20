---
slug: /teltonika/fmb020/configuration
id: fmb020-configuration
sidebar_label: Configuration
title: Teltonika - FMB020 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para conectar Teltonika FMB020 a Plaspy con ajustes de servidor compartido y comandos
keywords:
  - Configuración Teltonika FMB020
  - Instalación Teltonika FMB020
  - Configuración FMB020 Plaspy
  - Configuración rastreador GPS Plaspy
  - Instalación rastreador OBD II
  - Configuración servidor rastreador Teltonika
  - Configuración plataforma rastreo GPS
  - Configuración seguimiento vehicular
  - Integración sensores BLE
  - Rastreador para gestión de flotas
---

# Teltonika - FMB020 Configuration

Esta página documenta el contexto público de configuración para usar el rastreador GPS Teltonika FMB020 con Plaspy. Se enfoca en los ajustes de servidor compartido de Plaspy y en los pasos prácticos que puede aplicar para preparar unidades FMB020 y que reporten ubicación y telemetría a Plaspy. Use esta guía junto con la documentación del producto Teltonika y las herramientas de su instalador para completar el aprovisionamiento del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante y las herramientas de aprovisionamiento disponibles pueden variar según firmware, revisión de hardware, tipo de instalación y el conjunto de herramientas del proveedor. Las instrucciones a continuación describen la información pública común necesaria para señalar un FMB020 hacia Plaspy y validar la conectividad.

## Visión general de la configuración

Este proceso prepara el FMB020 para enviar datos a Plaspy y hace que el dispositivo sea visible en la plataforma. El comando de ejemplo en la sección Ejemplo de comandos de configuración muestra cómo se pueden aplicar parámetros básicos en una sola línea, usando marcadores de posición para las credenciales de red.

- Configure el APN y las credenciales de red para que el dispositivo tenga conectividad de datos móviles.
- Establezca el dominio o la IP del servidor Plaspy y el puerto compartido para que el FMB020 reporte al endpoint correcto.
- Seleccione el tipo de transporte UDP o TCP cuando el dispositivo requiera una elección explícita.
- Guarde y aplique la configuración, luego reinicie o reinitialice el dispositivo si es necesario.
- Valide que el rastreador aparezca en Plaspy y que se reciban actualizaciones de ubicación y telemetría.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar su FMB020. Plaspy requiere el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Requisitos previos habituales

- Confirme que el FMB020 tiene la revisión de firmware correcta para su despliegue y que dispone de acceso a las herramientas de configuración de Teltonika.
- Asegúrese de que el dispositivo esté alimentado e instalado correctamente en el puerto OBD II del vehículo o en el punto de instalación elegido.
- Tenga una tarjeta SIM válida con un plan de datos y las credenciales APN correctas para su operador móvil.
- Acceso a Teltonika Configurator, FOTA WEB o al método de instalador que su organización use para el aprovisionamiento.
- Acceso administrativo a la cuenta o equipo de Plaspy que recibirá y gestionará el dispositivo una vez que reporte.

## Cómo se conecta este rastreador a Plaspy

Cuando está correctamente configurado, el FMB020 envía datos de posición y telemetría al endpoint compartido de Plaspy usando los ajustes de servidor y puerto indicados arriba. Plaspy recibe esos reportes, detecta automáticamente el protocolo del dispositivo y hace visible el equipo en paneles y reportes.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138
- Los datos se envían por el puerto 8888 que Plaspy usa para todos los dispositivos soportados
- Puede seleccionar transporte UDP o TCP cuando el FMB020 requiera una selección de transporte
- Plaspy detecta automáticamente el protocolo del rastreador e interpreta los mensajes entrantes para ofrecer seguimiento en tiempo real y reporte de eventos
- Una vez que reporta, el dispositivo aporta ubicación y telemetría a Plaspy para mapeo, historial y alertas

## Flujo de configuración típico

1. Acceda al método oficial de configuración Teltonika o al software como Teltonika Configurator o la herramienta de aprovisionamiento que haya elegido.
2. Ingrese el servidor Plaspy como d.plaspy.com o use la IP 54.85.159.138 en el campo de servidor.
3. Ajuste el puerto a 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos compatibles.
4. Elija UDP o TCP si el firmware del FMB020 requiere una selección explícita de transporte para la conexión al servidor.
5. Aplique o guarde la configuración para que los nuevos parámetros se escriban en el dispositivo.
6. Reinicie el dispositivo si el firmware o el procedimiento lo requieren para aplicar los ajustes de red y servidor.
7. Valide que el dispositivo reporte correctamente a Plaspy comprobando el estado del dispositivo y la telemetría entrante en su cuenta Plaspy.

## Ejemplo de comandos de configuración

Para configurar los parámetros básicos en su dispositivo Teltonika, ingrese el siguiente comando tal como se muestra en la guía pública del dispositivo. Este ejemplo usa marcadores de posición para los valores del APN y establece el dominio y puerto del servidor Plaspy. Mantenga los marcadores de posición tal cual y reemplácelos por valores reales para su SIM y red.

- Single command example for basic parameters

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los campos del comando
- El marcador [apn] corresponde al nombre del APN de la red móvil requerido por la SIM
- El marcador [apnu] es para el nombre de usuario del APN cuando el operador lo solicita
- El marcador [apnp] es para la contraseña del APN cuando el operador lo solicita
- 2004 establece el dominio del servidor a d.plaspy.com
- 2005 establece el puerto del servidor a 8888
- 2006 en este comando es el parámetro relacionado con el transporte usado en la cadena de configuración del dispositivo; consulte la documentación de Teltonika para los valores exactos y su significado

Si su proceso de aprovisionamiento utiliza una interfaz diferente como Teltonika Configurator o FOTA WEB, traduzca estos mismos valores a los campos correspondientes en esas herramientas.

## Notas de configuración

- Las variaciones de firmware pueden cambiar los índices de parámetros o los métodos de configuración disponibles, por lo que confirme los mapeos de parámetros con la documentación del producto Teltonika para su versión de firmware.
- El FMB020 soporta gestión remota vía Teltonika Configurator y FOTA WEB para despliegues por etapas y actualizaciones de firmware, lo que puede simplificar el aprovisionamiento masivo.
- Elija UDP o TCP según el diseño de su red y las reglas de firewall; Plaspy acepta datos por cualquiera de los dos transportes en el puerto 8888.
- Dependiendo de su despliegue y del firmware del equipo, pueden estar soportados comandos vía SMS o mediante el configurador directo; consulte las guías de Teltonika para los métodos soportados.
- Verifique siempre las credenciales APN con el proveedor de la SIM antes de desplegar los dispositivos para evitar retrasos en la conectividad.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB020 con Plaspy ofrece a los operadores de flotas una vía rápida y de bajo esfuerzo para integrar ubicación y telemetría basados en OBD II en su plataforma de rastreo. El diseño compacto plug and play del FMB020 combinado con el soporte para sensores BLE ayuda a los equipos a desplegar a escala mientras recolectan telemetría más rica para alertas, reportes y análisis de conducción eficiente.

Learn more about Plaspy and how it handles device connections at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior and parameter mappings verify details on the manufacturer site https://www.teltonika-gps.com/
