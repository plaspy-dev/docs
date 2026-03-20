---
slug: /uvi_group/gt02/configuration
id: gt02-configuration
sidebar_label: Configuration
title: UVI Group - GT02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador UVI Group GT02 con Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración UVI Group GT02
  - Instalación UVI Group GT02
  - Configuración servidor GT02
  - Configuración GT02 Plaspy
  - Configuración rastreador GPS GT02
  - Configuración rastreador vehicular
  - Comandos SMS GT02
  - Configuración GPRS rastreador
  - Configuración APN GT02
  - Configuración plataforma seguimiento GPS
---

# UVI Group - GT02: Configuración

Esta página presenta el contexto público de configuración para utilizar el rastreador UVI Group GT02 con Plaspy. Reúne los pasos prácticos y públicos y los comandos que se usan para apuntar un dispositivo GT02 al servicio Plaspy, de modo que el equipo pueda reportar posición y estado vía GPRS. Siempre que sea posible, se muestran ejemplos de comandos SMS y comandos de verificación para ayudar en un flujo de configuración directamente en el dispositivo.

Plaspy usa ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GT02 admite configuración por GPRS y SMS; esta guía utiliza esos comandos públicos como ejemplo, pero se recomienda confirmar los pasos específicos del equipo en la documentación del fabricante.

## Resumen de la configuración

Configurar el GT02 para Plaspy prepara el dispositivo para comunicarse por la red celular y reportar datos GPS al endpoint del servidor Plaspy en un puerto compartido. El proceso normalmente implica establecer el APN del equipo, la dirección y el puerto del servidor, el intervalo de reporte y, opcionalmente, ajustes de zona horaria o un reinicio a configuración de fábrica. A continuación se incluyen ejemplos de comandos SMS tomados de la documentación del equipo.

- Apuntar el rastreador al endpoint y puerto del servidor Plaspy para que los datos lleguen a la plataforma.
- Configurar el APN de la SIM y las credenciales del operador necesarias para datos GPRS.
- Definir los intervalos de reporte para que el dispositivo envíe actualizaciones de posición según la frecuencia deseada.
- Validar la conectividad y el estado del equipo mediante comandos de verificación por SMS.
- Opcionalmente, realizar un reinicio a fábrica inicial o ajustar la zona horaria si fuera necesario.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos habituales antes de la configuración

- Un equipo GT02 alimentado con una tarjeta SIM funcional y un plan de datos activo que soporte GPRS
- Acceso a la interfaz de comandos SMS del dispositivo o a la herramienta de configuración del fabricante
- Conocimiento de la contraseña o código de administración del equipo (la documentación pública del GT02 muestra 666666 como contraseña por defecto en los ejemplos)
- Información correcta del APN del operador móvil para habilitar la conectividad GPRS
- Un método para recibir mensajes de confirmación del dispositivo (teléfono para SMS u otro medio) después de la configuración
- Opcional: accesorios de cableado o instalación del fabricante si el equipo será cableado permanentemente en un vehículo

## Cómo se conecta este rastreador a Plaspy

El GT02 usa su conexión GSM/GPRS para enviar posiciones GPS y mensajes de estado al endpoint y puerto compartidos del servidor Plaspy. Una vez configurado con el APN y los ajustes de servidor correctos, el rastreador establecerá una sesión TCP o UDP (según lo configurado) y transmitirá datos de ubicación para que el dispositivo sea visible en Plaspy.

- El rastreador se configura para reportar al endpoint del servidor Plaspy en d.plaspy.com o 54.85.159.138
- El dispositivo comunica por el puerto 8888, que Plaspy utiliza para todos los dispositivos soportados
- Los datos se envían por GPRS usando TCP o UDP según la elección del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Los comandos de verificación pueden confirmar que los ajustes de servidor y APN se aplicaron correctamente

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del UVI Group GT02, normalmente mediante comandos SMS o la herramienta de configuración del fabricante según la documentación de UVI Group.
2. Configure el APN del equipo con los ajustes del operador para que los datos GPRS estén disponibles.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo lo solicita.
5. Aplique o guarde la configuración en el dispositivo y espere los mensajes de confirmación.
6. Reinicie o apague y encienda el rastreador si las instrucciones del fabricante recomiendan un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la interfaz de monitoreo de la plataforma.

## Comandos de configuración de ejemplo

La documentación del fabricante del GT02 provee un conjunto de comandos SMS para la configuración pública. Estos ejemplos usan la contraseña por defecto 666666 que aparece en la documentación pública. Preserve cualquier marcador de posición como [apn], [apnu] y [apnp] y reemplácelo con el APN, usuario y contraseña de su operador según sea necesario.

- Reinicio a fábrica inicial opcional (usar solo si desea restaurar la configuración de fábrica):
```text
FACTORY,666666#
```

- Establecer la zona horaria a UTC+0:
```text
gmt,666666,e,0#
```

- Configurar el APN del operador (reemplazar [apn] y opcionalmente [apnu] y [apnp]):
```text
APN,666666,[apn],[apnu],[apnp]#
```
Nota: Mantenga los marcadores [apn], [apnu] y [apnp] y reemplácelos con el APN, usuario y contraseña de su operador cuando sea necesario. Si no se requiere usuario o contraseña, omita esos marcadores conforme a la sintaxis del dispositivo.

- Configurar el servidor GPRS para apuntar a Plaspy por IP y puerto (el ejemplo público usa la IP y puerto de Plaspy):
```text
server,666666,0,54.85.159.138,8888,0#
```
Nota: Este comando de servidor en la documentación pública usa la IP 54.85.159.138 y el puerto 8888 de Plaspy. También puede configurar valores de dominio si el dispositivo los soporta, por ejemplo d.plaspy.com, pero siga la sintaxis de comandos del dispositivo.

- Establecer el intervalo de actualización de ubicación a 60 segundos:
```text
timer,666666,,60#
```

- Verificar los ajustes GPRS actuales:
```text
GPRSSET,666666#
```

- Consultar el estado del dispositivo:
```text
status,666666#
```

Siga el orden de comandos cuando realice una configuración inicial como se muestra arriba: primero un reinicio a fábrica si lo desea, luego aplicar zona horaria, APN, servidor y ajustes de timer. La sintaxis exacta de los SMS debe coincidir con lo que espera el firmware del dispositivo.

## Notas sobre la configuración

- La configuración vía SMS está documentada públicamente para el GT02; si usa comandos SMS, asegúrese de que el teléfono que envía los mensajes pueda alcanzar el dispositivo y que la SIM tenga capacidad de envío de SMS.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o el orden de los parámetros; siempre verifique el formato exacto de los SMS en el manual vigente del equipo.
- Puede elegir UDP o TCP como transporte. La documentación del GT02 muestra la configuración del servidor con parámetros numéricos; siga las indicaciones del fabricante para la selección del transporte.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador al conectarse.
- Rellene los marcadores de APN con los datos de su operador. Si su operador requiere un usuario o contraseña para el APN, proporcione [apnu] y [apnp] como se muestra en el comando APN.

## Por qué usar Plaspy con esta configuración

Configurar el GT02 para reportar a Plaspy ofrece a gestores de flotas y propietarios de vehículos una vía sencilla para obtener visibilidad continua y supervisión operativa. Con el dispositivo enviando datos GPS por GPRS al servidor Plaspy, las organizaciones pueden centralizar la información de seguimiento, monitorear el movimiento de los vehículos y recibir actualizaciones de estado en una única plataforma.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el GT02, visite https://www.plaspy.com. Para los métodos de configuración específicos más actuales, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio web de UVI Group en http://www.uvi-group.com/
