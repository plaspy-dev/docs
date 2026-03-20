---
slug: /concox/gt06f/configuration
id: gt06f-configuration
sidebar_label: Configuration
title: Concox - GT06F Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Concox GT06F para usar con Plaspy mediante comandos SMS públicos y ajustes de servidor compartidos para seguimiento fiable
keywords:
  - Configuración Concox GT06F
  - Configuración GT06F
  - Concox GT06F Plaspy
  - Configuración servidor GT06F
  - Configuración rastreador GPS
  - Configuración rastreador vehicular
  - Ajustes servidor Plaspy
  - Comandos SMS GT06F
  - Configuración rastreador GPRS
  - Configuración rastreador Concox
---

# Concox - GT06F: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Concox GT06F con la plataforma Plaspy. Reúne los comandos SMS publicados por el fabricante y los ajustes de servidor de Plaspy necesarios para apuntar un dispositivo GT06F a la plataforma y lograr un seguimiento confiable.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor, por lo que esta guía se centra en los pasos y comandos prácticos públicos que usted puede utilizar para configurar un GT06F que reporte a Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar el GT06F para que pueda comunicarse de forma confiable con Plaspy y aparecer como un rastreador activo en la plataforma. Las acciones habituales incluyen configurar el APN del operador, establecer el endpoint de servidor GPRS, seleccionar el transporte si es necesario y validar el reporte.

- Configurar el APN del operador para que el dispositivo use datos móviles vía GPRS
- Establecer el servidor GPRS a Plaspy usando el dominio o la IP y el puerto de la plataforma
- Seleccionar UDP o TCP como transporte cuando el dispositivo requiera elegir uno
- Definir intervalos de reporte periódicos para que el rastreador envíe actualizaciones regulares a Plaspy
- Verificar los ajustes y confirmar que el dispositivo reporte a Plaspy usando los comandos de verificación incorporados

## Ajustes de servidor de Plaspy

Use estos ajustes públicos de Plaspy al configurar el GT06F. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y realiza detección automática del protocolo.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de comenzar

- Un dispositivo GT06F con alimentación disponible y acceso al método de entrada SMS del equipo
- Una tarjeta SIM activa con datos y SMS habilitados y los detalles de APN correctos para el operador móvil
- Acceso al método de configuración oficial de Concox o la documentación del GT06F
- Una cuenta en Plaspy y conocimiento del endpoint del servidor de la plataforma para validar que el dispositivo aparezca en línea
- Un teléfono o gateway SMS capaz de enviar mensajes SMS en texto plano al dispositivo
- Notas básicas sobre la versión de firmware o revisión de hardware para poder seguir la guía del fabricante correspondiente

## Cómo se conecta este rastreador a Plaspy

El GT06F se configura para enviar su ubicación y datos del dispositivo por GPRS al endpoint del servidor y al puerto de Plaspy. La configuración se aplica normalmente mediante comandos SMS o herramientas del fabricante que ajustan el APN y los campos de servidor para que el dispositivo establezca la conexión de datos y reporte al endpoint compartido de Plaspy.

- El dispositivo usa la conexión de datos de la SIM con el APN configurado para conectarse a la red móvil
- Un comando SERVER apunta el rastreador a d.plaspy.com o a la dirección IP de Plaspy en el puerto 8888
- El dispositivo puede configurarse para usar transporte UDP o TCP si el firmware lo permite
- Plaspy escucha en el puerto 8888 conexiones entrantes y realiza detección automática del protocolo
- Una vez configurado, el rastreador envía actualizaciones periódicas para que el dispositivo sea visible en Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Concox para GT06F, normalmente comandos SMS o la herramienta del proveedor documentada por Concox.
2. Configure el APN del operador usando el comando APN para que el dispositivo pueda usar datos móviles.
3. Ingrese el servidor de Plaspy usando d.plaspy.com o 54.85.159.138 y configure el puerto 8888.
4. Seleccione UDP o TCP en el dispositivo si la configuración del GT06F requiere elegir el transporte.
5. Defina los intervalos de reporte, por ejemplo un temporizador de 60 segundos, y habilite el modo GPRS para que el dispositivo envíe actualizaciones.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo requieren.
7. Valide que el dispositivo reporte a Plaspy y aparezca en línea en la plataforma usando el comando de verificación o revisando la interfaz de Plaspy.

## Ejemplos de comandos de configuración

El GT06F puede configurarse enviando mensajes SMS con los comandos que se muestran a continuación. Conserve los marcadores de posición cuando envíe los comandos y reemplácelos por los valores de su operador.

- Reinicio de fábrica opcional (use solo si es necesario)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,{{apn}}# 
```
Si su operador requiere usuario o contraseña incluya los marcadores de posición:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Nota: {{apn}} es el APN del operador, {{apnu}} es el usuario del APN si es necesario, y {{apnp}} es la contraseña del APN si es necesaria.

- Establecer el servidor GPRS apuntando a Plaspy usando el dominio (recomendado)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O establecer el servidor GPRS usando la dirección IP de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```

- Configurar el intervalo de actualización a cada 60 segundos
```text
TIMER,60#
```
Formato alternativo de temporizador:
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Verificar la configuración GPRS actual en el dispositivo
```text
GPRSSET#
```

Envíe cada comando SMS al número del dispositivo y espere las respuestas de confirmación que proporcione el firmware del rastreador.

## Notas de configuración

- La configuración vía SMS es comúnmente soportada por el firmware del GT06F; use las instrucciones oficiales de Concox para la sintaxis exacta de su versión de firmware.
- Algunas revisiones de firmware requieren banderas de transporte diferentes o parámetros de comando ligeramente distintos; revise el SMS de respuesta del dispositivo para confirmar.
- Elija UDP o TCP según su instalación y las condiciones de red; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo.
- Al usar comandos SERVER basados en dominio, el dispositivo debe poder resolver DNS; si no hay DNS, puede usar la alternativa con la IP de Plaspy.
- Mantenga los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} tal como aparecen y reemplácelos por los valores de su operador al enviar los comandos.

## Por qué usar Plaspy con esta configuración

Configurar un Concox GT06F para reportar a Plaspy ofrece a las organizaciones una vía directa para obtener visibilidad en tiempo real y monitoreo operativo. Usar los comandos SMS publicados y los ajustes de servidor compartidos de Plaspy hace que sea práctico desplegar y validar dispositivos rápidamente en flotas e instalaciones.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo y detalles de firmware consulte el sitio del fabricante Concox en https://www.iconcox.com/ ya que el comportamiento del dispositivo y las instrucciones del fabricante pueden cambiar con el tiempo.
