---
slug: /concox/ll702/configuration
id: ll702-configuration
sidebar_label: Configuration
title: Concox - LL702 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Concox LL702 a Plaspy usando ajustes de servidor compartidos y comandos SMS
keywords:
  - configuración Concox LL702
  - instalación Concox LL702
  - Concox LL702 Plaspy
  - configuración rastreador GPS LL702
  - configuración servidor Concox
  - comandos SMS Concox LL702
  - configuración APN Concox
  - configuración dispositivo Plaspy
  - configuración seguimiento de activos
  - integración rastreador GPS
---

# Concox - Configuración del LL702

Esta página describe el contexto público de configuración para usar el rastreador Concox LL702 con Plaspy. Resume los pasos prácticos y los comandos públicos que puede usar para apuntar un dispositivo LL702 a Plaspy, explica los prerequisitos necesarios y reúne los valores de servidor estándar que Plaspy publica para la integración de dispositivos. Si su despliegue requiere personalizaciones más profundas o métodos de transporte alternativos, consulte la documentación del fabricante o las herramientas del proveedor para instrucciones específicas del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LL702 admite configuración por SMS y ajustes de servidor GPRS; los comandos de ejemplo a continuación reflejan los comandos públicos por SMS comúnmente usados para establecer APN, servidor, temporizador y modo GPRS para este modelo.

## Resumen de configuración

El proceso de configuración prepara el LL702 para comunicarse de forma confiable con Plaspy y para aparecer en la plataforma para seguimiento en vivo, alertas e historial. La configuración pública se centra en establecer los parámetros de acceso a la red, apuntar el dispositivo al endpoint de Plaspy, habilitar el envío de datos y validar la conectividad.

- Establecer o verificar el APN del equipo para que el rastreador pueda abrir una sesión GPRS para el envío de datos.
- Configurar el servidor GPRS para que apunte a Plaspy usando el dominio o la IP publicada y el puerto compartido.
- Elegir el intervalo de reporte y habilitar GPRS para que el dispositivo envíe informes de posición periódicos a Plaspy.
- Verificar la configuración con el comando de verificación del dispositivo y confirmar que el rastreador aparece en Plaspy.
- Opcionalmente realizar un reinicio de fábrica o ajustar la zona horaria como parte del aprovisionamiento inicial.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos compatibles con Plaspy usan el mismo puerto y Plaspy realiza la detección de protocolo automáticamente para aceptar los datos del dispositivo.

## Requisitos comunes antes de la configuración

- Un dispositivo LL702 cargado e instalado o accesible para configuración y pruebas.
- Una Nano SIM válida con datos habilitados y el APN correcto para el operador móvil.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta oficial de configuración del fabricante.
- Conocimiento del APN y, opcionalmente, del usuario y contraseña del APN para su operador de SIM.
- Cobertura de red para LTE Cat 1 o 2G según esté disponible en la región del dispositivo para que el rastreador pueda registrarse en la red del operador.

## Cómo se conecta este rastreador a Plaspy

El LL702 se configura para abrir una sesión de datos móviles y enviar mensajes periódicos de posición y eventos a Plaspy en el endpoint y puerto compartidos. Una vez que el dispositivo establece conectividad, reportará según el temporizador y modo configurados, permitiendo visibilidad en Plaspy para seguimiento en tiempo real y alertas.

- El equipo utiliza el APN configurado para establecer una conexión de datos GPRS o LTE.
- Las entradas de servidor configuradas apuntan los reportes a d.plaspy.com o a la IP de Plaspy usando el puerto 8888.
- El LL702 envía actualizaciones periódicas de posición y mensajes de eventos según el temporizador y el modo de trabajo configurados.
- Plaspy recibe esos mensajes y detecta automáticamente el protocolo para parsear la ubicación y los eventos.
- Una configuración correcta habilita ubicación en tiempo real, eventos de geocerca y alertas de estado en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el LL702, como comandos SMS o la herramienta de configuración del proveedor.
2. Establezca el APN del dispositivo usando el comando APN e incluya usuario y contraseña si el operador los requiere.
3. Ingrese la dirección del servidor de Plaspy enviando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
4. Configure el puerto del servidor a 8888 y elija UDP o TCP si el dispositivo requiere selección explícita de transporte.
5. Aplique o guarde la configuración y habilite el modo GPRS para el envío de datos.
6. Reinicie el dispositivo si el firmware lo requiere para que los nuevos ajustes tengan efecto.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación del dispositivo y comprobando la presencia del rastreador en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Para configurar el LL702 vía SMS, envíe los siguientes comandos públicos en el orden mostrado. Mantenga los marcadores de posición tal como están y reemplace [apn], [apnu] y [apnp] con los valores de APN de su operador donde corresponda. El reset etiquetado es opcional para el aprovisionamiento inicial.

- Optional initial factory reset
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
If your operator requires only an APN
```text
APN,[apn]#
```
If your operator requires APN username and password
```text
APN,[apn],[apnu],[apnp]#
```
(Replace [apn] with your operator APN. Replace [apnu] and [apnp] with APN username and password if required.)

- Set the GPRS server to use the Plaspy domain on port 8888
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to use the Plaspy IP on port 8888
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds
Single parameter form
```text
TIMER,60#
```
Two parameter form
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Check current GPRS and server parameters
```text
GPRSSET#
```

Estos comandos reflejan el flujo público de configuración por SMS para el LL702. Use la forma con dominio para permitir resolución DNS y la forma con IP cuando la resolución DNS no esté disponible o cuando lo recomienden las pautas de instalación locales.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el soporte exacto de comandos y la sintaxis. Verifique la lista de comandos contra la versión de firmware de su dispositivo.
- El LL702 soporta la configuración por SMS como se muestra; también pueden existir herramientas del proveedor o utilidades USB/PC según su suministrador.
- Puede configurar el servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138, ambos con el puerto 8888. Plaspy acepta UDP o TCP en ese puerto.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo al conectarse, reduciendo la necesidad de seleccionar el protocolo por dispositivo.
- Mantenga los marcadores [apnu] y [apnp] disponibles por si su operador de SIM requiere autenticación en el APN.

## Por qué usar Plaspy con esta configuración

Configurar el LL702 para reportar a Plaspy brinda a los equipos de operaciones y a los gestores de flota visibilidad persistente sobre la ubicación de los activos, alertas y actividad histórica. El posicionamiento multisensor y la amplia autonomía en espera del LL702 se complementan con la plataforma centralizada de Plaspy para ofrecer telemetría continua, monitorización de geocercas y alertas basadas en eventos para prevención de robo y supervisión de flotas.

To learn more about Plaspy and how it supports device integrations visit https://www.plaspy.com. Manufacturer specifications, command syntax, and firmware behavior can change over time so verify the latest device specific setup details on the manufacturer website https://www.iconcox.com/ before large scale deployment.
