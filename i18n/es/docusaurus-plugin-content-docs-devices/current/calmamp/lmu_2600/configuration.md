---
slug: /calmamp/lmu_2600/configuration
id: lmu_2600-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-2600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CalmAmp LMU-2600 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración CalmAmp LMU-2600
  - Instalación CalmAmp LMU-2600
  - CalmAmp LMU-2600 Plaspy
  - Configuración de servidor LMU-2600
  - Configuración rastreador GPS LMU-2600
  - Configuración seguimiento de flotas
  - Configuración rastreador Plaspy
  - Configuración SMS CalmAmp
  - Configuración GPRS LMU-2600
  - Configuración plataforma de seguimiento vehicular
---

# CalmAmp - Configuración LMU-2600

Esta página ofrece la guía pública para configurar el CalmAmp LMU-2600 con Plaspy. Explica los ajustes de servidor compartidos por Plaspy y los pasos prácticos para apuntar un LMU-2600 hacia Plaspy, de modo que el dispositivo reporte posiciones y eventos a la plataforma. Las indicaciones usan comandos públicos y ejemplos de configuración del fabricante cuando están disponibles.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LMU-2600 soporta GSM GPRS y tiene rutas de configuración por SMS y GPRS en su documentación pública, por lo que puede configurarse mediante SMS o mediante el software del fabricante según su flujo de trabajo.

## Resumen de la configuración

El objetivo de este proceso es preparar el LMU-2600 para que pueda comunicarse de forma fiable con Plaspy y aparecer en la plataforma para monitoreo, reporte de eventos y uso operativo. Los comandos que siguen son un ejemplo público para establecer el APN y los valores del servidor usando SMS, tal como se documenta para el dispositivo.

- Configure el APN del dispositivo y las credenciales APN opcionales para habilitar la conectividad GPRS.
- Establezca la dirección del servidor GPRS hacia Plaspy y el puerto compartido usado por todos los dispositivos Plaspy.
- Seleccione el tipo de transporte si el dispositivo requiere elegir UDP o TCP y asegúrese de usar el transporte correcto según su red.
- Aplique y reinicie el dispositivo para que los nuevos ajustes surtan efecto y luego valide que la unidad está reportando a Plaspy.
- Use los comandos de verificación del fabricante para leer la configuración y confirmar el MID o el identificador del dispositivo antes de enviar comandos SMS de configuración.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP depending on device preference and network conditions  
- Plaspy automatically detects the tracker protocol so all devices use the same port and the platform handles protocol identification

## Requisitos típicos antes de la configuración

- Una unidad LMU-2600 alimentada e instalada correctamente, con capacidad de conectarse a la red de datos móviles mediante una SIM operativa si va a usar GPRS.
- Acceso al método de configuración de CalmAmp que vaya a utilizar, por ejemplo comandos SMS o la herramienta de software del fabricante.
- El APN del operador y, si aplica, el usuario y contraseña del APN proporcionados por su operador móvil.
- Capacidad para enviar SMS a la unidad cuando use la configuración mediante comandos SMS.
- Acceso administrativo a su cuenta de Plaspy y los detalles de registro del dispositivo para confirmar que la unidad aparece tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el LMU-2600 se ajusta para reportar al endpoint y puerto compartidos del servidor Plaspy. El dispositivo envía mensajes de ubicación y eventos al servidor Plaspy, donde los datos entrantes se parsean y se asocian con la entrada de dispositivo correcta.

- El rastreador se configura con el dominio o la IP del servidor Plaspy para que los paquetes GPRS se enruten a la plataforma.
- Los mensajes se envían al puerto compartido de Plaspy para que el tráfico entrante sea aceptado de forma uniforme para todos los modelos.
- Plaspy detecta automáticamente el protocolo del rastreador y parsea las cargas de ubicación y eventos para mostrarlas en la plataforma.
- Los datos de eventos y telemetría se vuelven visibles en Plaspy una vez que el dispositivo se conecta y autentica correctamente.
- Latidos regulares del dispositivo e informes de excepción permiten el monitoreo operativo en la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de CalmAmp que vaya a utilizar, por ejemplo comandos SMS o el software/portal de configuración de CalmAmp.
2. Obtenga el MID o ID del dispositivo según lo requiera el flujo de trabajo del LMU-2600 (ver paso de verificación abajo usando el comando !R0).
3. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 en el campo de configuración del servidor del dispositivo.
4. Establezca el puerto del servidor en 8888, que es el puerto común de Plaspy para todos los dispositivos.
5. Elija UDP o TCP si el dispositivo requiere una selección explícita de transporte según sus condiciones de red.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los nuevos ajustes entren en vigor.
7. Valide que el dispositivo reporta a Plaspy comprobando la actividad en la plataforma y usando los comandos SMS de verificación cuando estén disponibles.

## Ejemplo de comandos de configuración

El ejemplo público de configuración del LMU-2600 muestra comandos SMS para establecer el APN, la IP del servidor, el puerto y reiniciar el dispositivo. El dispositivo espera un valor de ID llamado MID que se devuelve con el comando !R0. Preserve los marcadores de posición exactamente al enviar comandos.

- Retrieve the MID so you can target configuration commands
```text
!R0
```

- Set the operator APN (replace [apn] with your operator APN)
```text
!RP,2306,0,[apn]
```

- Set the APN username if required (replace [apnu] with your APN username)
```text
!RP,2314,0,[apnu]
```

- Set the APN password if required (replace [apnp] with your APN password)
```text
!RP,2315,0,[apnp]
```

- Set the GPRS server to the Plaspy server IP
```text
!RP,2319,0,54.85.159.138
```

- Set the server port to the Plaspy port
```text
!RP,769,0,8888
```

- Reboot the tracker to apply settings Note this reboot is typically required for changes to take effect
```text
!R3,70,0
```

- Check current device settings
```text
!RO
```

Notas sobre marcadores de posición y flujo
- [apn] es la cadena APN del operador móvil. Sustituya por el APN de su proveedor celular.
- [apnu] y [apnp] son el usuario y contraseña opcionales del APN cuando el operador los requiere.
- El LMU-2600 devuelve un valor MID en respuesta a !R0 que debe capturar y usar como identificador del dispositivo cuando el flujo de configuración lo exija.
- Los comandos anteriores son la secuencia SMS documentada públicamente. Si utiliza herramientas CalmAmp o PULS OTA, aplique los ajustes equivalentes allí.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar parámetros de comando o el formato requerido del MID; siempre verifique la respuesta del dispositivo al usar comandos SMS.
- El ejemplo público del LMU-2600 admite configuración vía SMS para valores de APN y servidor; también puede usar las herramientas de configuración de CalmAmp cuando estén disponibles.
- Elija UDP o TCP según el comportamiento de su red y operador; Plaspy acepta cualquiera de los dos en el puerto compartido y detectará el protocolo automáticamente.
- Asegúrese de que su plan de datos SIM soporte GPRS o el método de datos móviles que seleccione.
- Tras aplicar los ajustes, confirme que el dispositivo reporta revisando la actividad reciente en Plaspy y usando el comando de verificación !RO.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el CalmAmp LMU-2600 ofrece a las organizaciones una forma directa de centralizar datos de ubicación y eventos de vehículos en una única plataforma. Con los ajustes de servidor compartidos y la detección automática de protocolos, es más sencillo integrar unidades en una flota mixta, ya que todos los rastreadores usan el mismo puerto y la plataforma realiza el parseo del protocolo.

To learn more about Plaspy and how it manages device connections and fleet visibility visit https://www.plaspy.com. Device specific setup methods, firmware behavior, and manufacturer details can change over time so verify the latest configuration procedures and command syntax at CalmAmp support http://www.calamp.com/ before deploying at scale.
