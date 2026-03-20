---
slug: /wanway/gs12/configuration
id: gs12-configuration
sidebar_label: Configuration
title: WanWay - GS12 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del WanWay GS12 con ajustes de servidor Plaspy y comandos SMS para integración rápida
keywords:
  - Configuración WanWay GS12
  - Instalación WanWay GS12
  - WanWay GS12 con Plaspy
  - Configuración de servidor GS12
  - Configuración rastreador GPS GS12
  - Configuración de dispositivo Plaspy
  - Ajustes servidor rastreador GPS
  - Rastreo de vehículos GS12
  - Comandos SMS GS12
  - Configuración rastreo de flotas
---

# WanWay - Configuración GS12

Esta página describe la configuración pública para usar el rastreador WanWay GS12 con Plaspy. Explica los ajustes de servidor prácticos y los pasos comunes que puede seguir para provisionar un GS12 y que empiece a enviar posiciones y eventos a la plataforma Plaspy. El contenido usa comandos de configuración públicos y los parámetros compartidos del servidor Plaspy necesarios para conectar el dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware del GS12, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que estas instrucciones deben considerarse una guía pública práctica más que una garantía específica del dispositivo.

## Resumen de configuración

El objetivo del proceso de configuración es preparar el GS12 para que se comunique con Plaspy y que las posiciones y eventos aparezcan en su cuenta. La configuración normalmente incluye proveer parámetros de datos móviles, apuntar el dispositivo al endpoint del servidor Plaspy, seleccionar el transporte si es necesario y verificar que el dispositivo reporte su estado.

- Configure el APN del dispositivo para que el rastreador pueda usar datos móviles y alcanzar Plaspy
- Apunte el rastreador a Plaspy usando el endpoint y puerto compartidos
- Seleccione UDP o TCP si el dispositivo requiere elegir el transporte
- Ajuste los intervalos de reporte y active el modo GPRS para que el dispositivo envíe actualizaciones de posición
- Verifique la conectividad y confirme que el rastreador sea visible en Plaspy después de la configuración

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Requisitos previos típicos

- Un GS12 instalado y con alimentación, con acceso a la configuración por SMS o a la herramienta del fabricante
- Una tarjeta SIM activa con datos móviles habilitados y el APN correcto del operador
- Capacidad para enviar y recibir SMS desde el dispositivo si utiliza la configuración vía SMS
- Acceso a las instrucciones oficiales de WanWay o al software del fabricante como referencia
- Una cuenta Plaspy o instrucciones de incorporación para validar que el dispositivo aparece en la plataforma

## Cómo se conecta este rastreador a Plaspy

El GS12 envía la ubicación GNSS y la telemetría de eventos del dispositivo a través de la red celular al servidor y puerto de Plaspy. Plaspy procesa los mensajes y los presenta como actualizaciones de ubicación en tiempo real, alertas de eventos y telemetría para monitoreo e informes.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com en el puerto 8888
- Los datos pueden transmitirse por UDP o TCP según la configuración del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor aceptará datos entrantes de dispositivos compatibles
- Las ubicaciones y eventos como ACC, alarma de manipulación, exceso de velocidad y kilometraje se reenvían a Plaspy para paneles y alertas
- Tras la configuración, el rastreador debería aparecer en Plaspy para monitoreo operativo y generación de informes

## Flujo de configuración típico

1. Acceda al método oficial de configuración de WanWay o al software adecuado para el GS12 (comandos SMS o herramienta del proveedor).
2. Configure el APN del dispositivo según el operador para que GPRS o datos celulares estén disponibles.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138.
4. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
5. Elija UDP o TCP si el GS12 requiere una selección explícita de transporte.
6. Aplique o guarde la configuración y cambie el dispositivo a modo GPRS si es necesario.
7. Reinicie el rastreador si las instrucciones del fabricante recomiendan un reinicio.
8. Valide que el dispositivo reporta a Plaspy y que aparece en la plataforma después de la configuración.

## Comandos de configuración de ejemplo

El GS12 admite configuración por SMS. A continuación encontrará comandos públicos de ejemplo que puede enviar al dispositivo por SMS. Conserve los marcadores de posición cuando los reemplace por los valores específicos del operador.

- Configure el APN del operador. Reemplace [apn] por el APN de su operador. Si el operador requiere usuario y contraseña, incluya [apnu] y [apnp] tal como se los proporcione el operador.

```
APN,[apn]{{# if apnu then }},[apnu],[apnp]{{# endif }}#
```

(Si su sistema de mensajería no soporta sintaxis condicional, use una de las siguientes formas según si su APN requiere credenciales.)

Solo APN:
```
APN,[apn]#
```

Con usuario y contraseña del APN:
```
APN,[apn],[apnu],[apnp]#
```

- Configure el servidor GPRS para apuntar a Plaspy usando el dominio público y el puerto:

```
SERVER,1,d.plaspy.com,8888,0#
```

- Ejemplo para establecer un intervalo de reporte periódico. Los valores son ilustrativos y deben ajustarse a sus necesidades de reporte:

```
TIMER,60,60#
```

- Cambiar a modo GPRS para habilitar el envío de datos IP sobre la red móvil:

```
GPRSON,1#
```

- Verificar configuración y parámetros del dispositivo:

```
PARAM#
```

- Consultar el estado del dispositivo:

```
STATUS#
```

Notas sobre marcadores de posición y comandos:
- [apn] es la cadena APN del operador necesaria para datos celulares.
- [apnu] y [apnp] son marcadores de posición opcionales para usuario y contraseña del APN, usados solo cuando el operador exige credenciales.
- Mantenga el carácter de almohadilla final (#) tal como se muestra; forma parte del formato de comandos SMS del GS12.

## Notas de configuración

- Muchas unidades GS12 soportan configuración por SMS como se muestra, pero los fabricantes también pueden ofrecer herramientas o software de PC para aprovisionamiento masivo.
- Las variaciones de firmware pueden cambiar la sintaxis de los comandos o las opciones disponibles; siempre consulte las notas de firmware si un comando no es aceptado.
- Elija UDP o TCP en función de la fiabilidad de su red y los requisitos del dispositivo. Ambos transportes son compatibles con Plaspy y el servidor aceptará cualquiera en el puerto 8888.
- Si usa la IP del servidor en lugar del dominio, puede enviar 54.85.159.138 en lugar de d.plaspy.com en el comando SERVER.
- Al usar comandos SMS, espere un minuto para que el dispositivo aplique los ajustes y cambie a modo GPRS antes de validar la conectividad.

## Por qué usar Plaspy con esta configuración

Usar el WanWay GS12 con Plaspy ofrece un camino sencillo para llevar posiciones GNSS y telemetría de eventos a una plataforma centralizada de gestión de flotas. Las funciones del GS12 para detección de ACC, alarmas, kilometraje y corte remoto se integran con la ingestión en tiempo real de Plaspy para soportar monitoreo, alertas e informes operativos en flotas vehiculares.

Learn more about Plaspy and how devices are managed on the platform at https://www.plaspy.com. For the most current GS12 device specific details, firmware notes, and manufacturer tools consult the official WanWay website https://www.wanwaytech.net/ as device specifications and setup methods may change over time.
