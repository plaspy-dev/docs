---
slug: /atrack/ax5/configuration
id: ax5-configuration
sidebar_label: Configuration
title: ATrack - AX5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ATrack AX5 para Plaspy, con parámetros de servidor, comandos y flujo de trabajo
keywords:
  - Configuración ATrack AX5
  - Instalación AX5
  - Configuración ATrack para Plaspy
  - Ajustes de servidor AX5
  - Configuración de localizador vehicular
  - Configuración de rastreador GPS
  - Rastreador para gestión de flotas
  - Dispositivos compatibles con Plaspy
  - Configuración de rastreador OBDII
  - Configuración GPRS AX5
---

# ATrack - Configuración AX5

Esta página documenta el contexto público de configuración para utilizar el rastreador ATrack AX5 con la plataforma Plaspy. Se centra en los ajustes prácticos de servidor, los prerequisitos necesarios y ejemplos de comandos del fabricante que están disponibles públicamente para que el AX5 reporte datos a Plaspy. Utilice estas indicaciones junto con las herramientas y la documentación del fabricante para los pasos específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguir los métodos del fabricante para aplicar cambios y usar los comandos que se muestran a continuación como ejemplos públicos para configurar el AX5 y que envíe datos a Plaspy.

## Resumen de configuración

El objetivo de esta configuración es preparar el AX5 para que se conecte de forma fiable a Plaspy, reporte posición y eventos, y sea visible en la plataforma. Esto normalmente incluye configurar el APN y parámetros GPRS, ajustar el intervalo de reporte y apuntar el dispositivo al endpoint y puerto del servidor de Plaspy.

- Configure el equipo para usar GPRS y el APN del operador para que pueda enviar datos por la red móvil.
- Defina intervalos de reporte y disparadores de eventos para que el dispositivo informe con la cadencia deseada.
- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos lleguen a la plataforma.
- Valide que el dispositivo se está conectando y aparece en Plaspy después de aplicar los ajustes.
- Utilice las herramientas del fabricante o comandos AT cuando estén disponibles para aplicar cambios y confirmar el estado.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes del servidor de Plaspy al configurar el AX5. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos a la configuración

- Acceso físico al puerto OBD II del vehículo o al AX5 instalado para aplicar configuración o reiniciar la unidad si es necesario.
- Dispositivo con energía suficiente o conectado a la alimentación del vehículo para que pueda registrarse en la red móvil.
- SIM activa con datos móviles habilitados y credenciales APN correctas para su operador.
- Acceso al método o software oficial de configuración ATrack, o a una interfaz que acepte los comandos AT del AX5.
- Conocimiento de los marcadores de posición del APN como [apn], [apnu] y [apnp] para poder proporcionar los valores correctos del operador cuando se requiera.
- Visibilidad básica de red para confirmar que el dispositivo puede alcanzar el servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con los ajustes de servidor de Plaspy, el AX5 utiliza su conexión GPRS para enviar mensajes de posición y eventos al endpoint y puerto compartidos de Plaspy. Plaspy detecta automáticamente el protocolo del rastreador y procesa los datos entrantes para que la unidad aparezca en la plataforma.

- El AX5 envía tráfico GPRS a Plaspy usando TCP o UDP dirigido al puerto 8888.
- El dispositivo reporta actualizaciones periódicas de ubicación según el intervalo de rastreo configurado.
- Entradas de eventos como ACC o pánico pueden activar reportes inmediatos al servidor de Plaspy.
- Plaspy analiza el protocolo entrante automáticamente, por lo que no es necesario seleccionar manualmente el protocolo por dispositivo en la plataforma.
- Confirmar la conectividad a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888 verifica la alcanzabilidad del dispositivo hacia Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de ATrack o al software proporcionado por el fabricante o su instalador.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del servidor a 8888.
4. Seleccione UDP o TCP en el dispositivo si la herramienta de configuración requiere elegir el transporte.
5. Establezca el APN y cualquier nombre de usuario y contraseña del APN necesarios para la SIM usando marcadores como [apn], [apnu] y [apnp] al aplicar los ajustes.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado con el comando de verificación del fabricante o confirmando la visibilidad en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El AX5 soporta comandos de configuración estilo AT. Los siguientes comandos públicos se proporcionan como una secuencia de ejemplo para apuntar el dispositivo a Plaspy y configurar reportes básicos. Preserve el orden cuando este sea importante.

1. Configure eventos de entrada ACC y acciones de reporte
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Establezca el intervalo de rastreo a 60 segundos
```text
AT$TRAC=1,60,,,,,2
```

3. Configure el dispositivo en modo binario
```text
AT$FORM=1,@P,0,""
```

4. Configure el servidor GPRS con marcadores de APN y la IP y puerto de Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
- Explicación de los marcadores de posición
  - [apn] es el nombre del APN del operador
  - [apnu] es el nombre de usuario del APN si el operador lo requiere
  - [apnp] es la contraseña del APN si el operador lo requiere

5. Consulte el estado del dispositivo
```text
AT$INFO=?
```

Nota: El comando AT$GPRS anterior establece las credenciales del APN y apunta el dispositivo a la IP y puerto del servidor de Plaspy. Dependiendo del firmware o la cadena de herramientas, alternativamente puede introducir d.plaspy.com en lugar de la dirección IP. El dispositivo también puede aceptar la selección de transporte (UDP o TCP) en los parámetros de configuración o en la herramienta del fabricante.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles. Verifique la sintaxis exacta para la revisión de firmware de su AX5.
- El AX5 soporta transporte TCP y UDP. Elija el transporte requerido por su instalación o siga las indicaciones del instalador; Plaspy aceptará cualquiera de los dos en el puerto 8888 y detectará el protocolo automáticamente.
- Mantenga correctas las credenciales del APN y pruebe la conectividad de datos móviles antes de aplicar los ajustes del servidor.
- Si la configuración se aplica por SMS, USB o software del fabricante, siga el procedimiento oficial de ATrack para ese método.
- Después de aplicar los ajustes, reiniciar el dispositivo puede ayudar a que los nuevos parámetros de red y reporte entren en vigor.

## Por qué usar Plaspy con esta configuración

Usar el ATrack AX5 con Plaspy ofrece un camino sencillo hacia la visibilidad de flota y el monitoreo de eventos al aprovechar la capacidad del AX5 de reportar por GPRS y el endpoint unificado de Plaspy. Los ajustes de servidor compartidos de Plaspy facilitan el despliegue de muchos dispositivos sin cambios por equipo, y la detección automática de protocolos de Plaspy reduce la complejidad de configuración en la plataforma.

Para obtener más información sobre Plaspy y cómo la plataforma maneja los datos de los dispositivos, visite https://www.plaspy.com. Para las instrucciones más recientes específicas del dispositivo, notas de firmware y documentación detallada del AX5, verifique la información en el sitio oficial del fabricante https://www.atrack.com.tw/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
