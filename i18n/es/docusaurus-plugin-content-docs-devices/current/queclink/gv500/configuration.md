---
slug: /queclink/gv500/configuration
id: gv500-configuration
sidebar_label: Configuration
title: QuecLink - GV500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV500 con los ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - Configuración QuecLink GV500
  - Configuración GV500
  - Configuración servidor GV500
  - GV500 configuración para Plaspy
  - Configuración tracker GPS GV500
  - Configuración OBDII GV500
  - Configuración dispositivo Plaspy
  - Configuración seguimiento vehicular
  - Rastreo de flotas GV500
  - Configuración plataforma GPS QuecLink
---

# QuecLink - Configuración del GV500

Esta página documenta el contexto público de configuración para usar el QuecLink GV500 con Plaspy. Explica los ajustes de servidor prácticos y los pasos en el lado del fabricante que se emplean comúnmente para que el GV500 reporte a Plaspy. La descripción del GV500 en esta guía refleja su instalación tipo OBDII, sus capacidades de comunicación GPRS y las funciones del dispositivo, como el protocolo integrado @Track y los reportes de eventos relevantes para la integración con la plataforma.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que las entradas de dispositivo suelen apuntar al mismo endpoint de backend. Los pasos exactos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. Los comandos SMS de ejemplo que se muestran a continuación son muestras públicas y ejemplifican un flujo de trabajo común para configurar un GV500 y que envíe datos a Plaspy.

## Resumen de la configuración

El objetivo de configurar un GV500 para Plaspy es preparar el rastreador para conectarse al backend de Plaspy, asegurar la conectividad GPRS fiable y habilitar que el dispositivo reporte posiciones y eventos para que el vehículo sea visible en la plataforma. Esto incluye configurar el APN de la red, el endpoint del servidor, los intervalos de reporte y los eventos de entrada que desea que la plataforma reciba.

- Señalar el dispositivo al endpoint del servidor Plaspy para que el GV500 abra una sesión GPRS y envíe datos.
- Configurar el APN del operador y las credenciales requeridas para que el rastreador tenga acceso a Internet.
- Elegir transporte UDP o TCP según lo permita el dispositivo y establecer el puerto compartido de Plaspy.
- Definir intervalos de reporte y habilitar entradas de eventos como SOS o alertas I/O para visibilidad en la plataforma.
- Verificar que el dispositivo esté reportando activamente a Plaspy y sea visible en la lista de dispositivos de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son el endpoint público de Plaspy que debe usar al configurar el GV500. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y realiza la detección de protocolo de forma automática.

## Requisitos típicos antes de la configuración

- Acceso físico al vehículo para conectar y alimentar el GV500 mediante el puerto OBDII o un punto de instalación aprobado.
- Una SIM activa con plan de datos y los ajustes APN correctos para el operador móvil.
- Acceso al método de configuración que acepte el GV500, como comandos SMS o el software oficial de QuecLink.
- La contraseña por defecto del dispositivo usada en los comandos de ejemplo es queclink, como se muestra más abajo.
- Conocimiento de los valores del servidor Plaspy d.plaspy.com y 54.85.159.138 y del puerto compartido 8888.
- Un procedimiento para validar la conectividad y el reporte una vez aplicados los ajustes, por ejemplo comprobando el estado del dispositivo en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El GV500 utiliza su conexión GPRS para transmitir reportes de posición y mensajes de eventos al endpoint de servidor configurado. Cuando apunta a Plaspy, abrirá una sesión TCP o UDP con la plataforma y enviará telemetría según su programación de reporte y los disparadores de eventos configurados.

- El rastreador reporta posiciones GPS programadas al endpoint y puerto de Plaspy configurados.
- Informes de eventos como SOS, cruces de geocerca y batería baja se envían a Plaspy para su visibilidad inmediata.
- El dispositivo envía datos por GPRS después de configurar el APN del operador y sus credenciales.
- Plaspy acepta la conexión entrante en el puerto compartido y detecta automáticamente el protocolo del rastreador para interpretar los mensajes.
- Una vez conectado, el dispositivo aparece en Plaspy para monitoreo, historial y notificaciones.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de QuecLink para el GV500 usando SMS o la herramienta de software del fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 según lo requiere Plaspy.
4. Seleccione transporte UDP o TCP en el dispositivo si requiere una selección explícita.
5. Configure el APN del operador y los campos de usuario y contraseña del APN si su red los requiere.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware necesita un reboot para activar los ajustes.
7. Valide que el GV500 esté reportando a Plaspy y que los datos de posición y eventos aparezcan en la plataforma.

Si el dispositivo usa comandos SMS para la configuración, envíe los mensajes SMS debidamente formateados desde un número autorizado e incluya la contraseña del dispositivo cuando sea necesario.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS públicos son un ejemplo común para dispositivos QuecLink GV500. Normalmente se envían por SMS al número del dispositivo. Los comandos de ejemplo usan la contraseña por defecto del dispositivo queclink cuando es requerida. Conserve los marcadores de posición [apn], [apnu] y [apnp] y reemplácelos por su APN del operador, usuario del APN y contraseña del APN.

- Paso inicial opcional para restaurar valores de fábrica
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Ajustar la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Establecer el APN del operador y credenciales opcionales del APN
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explicación: reemplace [apn] por el APN de su operador. Si su operador requiere usuario o contraseña, reemplace [apnu] y [apnp] según corresponda. Si no son necesarios, deje esos marcadores vacíos según la sintaxis de comandos del dispositivo.

- Configurar el servidor GPRS a Plaspy usando dominio e IP con puerto 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando configura el dispositivo para usar Plaspy como servidor de reporte. Incluye el dominio y la IP de Plaspy y especifica el puerto 8888.

- Establecer el intervalo de actualización de posición GPS a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar la notificación del botón SOS asignada a la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe cada comando como un único mensaje SMS al número del dispositivo. Los comandos y los marcadores deben coincidir con las expectativas del firmware del dispositivo. Si cambia la contraseña por defecto queclink, use la nueva contraseña en los comandos posteriores.

## Notas de configuración

- Las revisiones de firmware y hardware del dispositivo pueden cambiar la sintaxis de los comandos y las opciones disponibles; verifique la compatibilidad de los comandos con el firmware de su GV500.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.
- Elija TCP o UDP según la preferencia del instalador y las opciones del firmware del dispositivo; el comportamiento puede variar ligeramente según el tipo de transporte.
- La configuración por SMS está soportada y se muestra aquí en ejemplos, pero las herramientas oficiales de QuecLink pueden ofrecer un flujo de trabajo más seguro y auditable.
- Reemplace los marcadores del APN por los datos de su operador y pruebe la conectividad antes de desplegar dispositivos a gran escala.

## Por qué usar Plaspy con esta configuración

Usar Plaspy como backend para dispositivos QuecLink GV500 ofrece a las organizaciones un endpoint de servidor consistente y detección automática de protocolo, de modo que múltiples dispositivos puedan gestionarse con un único perfil de configuración. Los ajustes compartidos de Plaspy reducen la variación por dispositivo y ayudan a estandarizar la incorporación y el monitoreo de flotas.

Para saber más sobre Plaspy y cómo soporta las integraciones de dispositivos, visite https://www.plaspy.com. Para los comandos específicos más actuales, orientación de firmware e información detallada de hardware, verifique la documentación más reciente en el sitio del fabricante https://www.queclink.com/. Los pasos específicos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme los detalles actuales con los recursos oficiales de QuecLink.
