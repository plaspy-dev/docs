---
slug: /queclink/gv51mg/configuration
id: gv51mg-configuration
sidebar_label: Configuration
title: QuecLink - GV51MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GV51MG con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración QuecLink GV51MG
  - Configuración GV51MG
  - Configuración GV51MG Plaspy
  - Ajustes servidor GV51MG
  - Configuración rastreador Plaspy
  - Configuración rastreador de vehículos
  - Comandos SMS GV51MG
  - Ajustes APN GV51MG
  - Configuración rastreador GPS QuecLink
  - Configuración rastreo de flotas
---

# QuecLink - Configuración del GV51MG

Esta página reúne la información pública necesaria para configurar el rastreador QuecLink GV51MG para su uso con Plaspy. Incluye los pasos prácticos para apuntar el dispositivo al servidor de Plaspy y describe los comandos SMS más usados en la configuración inicial. El contenido se basa en la descripción del GV51MG y en los ejemplos de comandos SMS suministrados por el fabricante cuando están disponibles.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use los valores de servidor compartidos de Plaspy que se indican a continuación al configurar el dispositivo y consulte los recursos de QuecLink para detalles específicos del dispositivo.

## Resumen de configuración

Esta configuración prepara el GV51MG para que reporte posición y eventos del dispositivo a Plaspy estableciendo el APN celular, el endpoint y puerto del servidor Plaspy, y comportamientos habituales del equipo como el intervalo de reporte y las entradas de botones. Los ejemplos muestran configuración vía SMS, que es uno de los métodos públicos disponibles para muchos dispositivos QuecLink.

- Apuntar el GV51MG al endpoint y puerto del servidor Plaspy para que el dispositivo entregue datos de ubicación y eventos.
- Configurar el APN del dispositivo y los marcadores de autenticación para que GPRS/LTE pueda transportar la telemetría al servidor.
- Definir un intervalo de actualización regular para asegurar reportes de ubicación oportunos dentro de Plaspy.
- Habilitar entradas o canales de alarma (por ejemplo SOS) para que los eventos aparezcan en la plataforma Plaspy.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy después de aplicar los cambios.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Una tarjeta SIM con datos habilitados y un APN conocido del operador de red del dispositivo.
- Acceso físico al dispositivo o la capacidad de enviar SMS al número del dispositivo para configurar por SMS.
- El dispositivo debe estar alimentado y con conectividad de red para que pueda registrarse en la red celular.
- La contraseña por defecto del dispositivo QuecLink (en los ejemplos aquí se usa queclink) o las credenciales necesarias para que el equipo acepte comandos de configuración.
- El APN del operador y, opcionalmente, el nombre de usuario y la contraseña del APN para rellenar los marcadores correspondientes.
- Conocimiento de la versión de firmware del dispositivo y la herramienta de configuración del fabricante o la referencia de comandos SMS para el GV51MG.

## Cómo se conecta este tracker a Plaspy

El GV51MG se configura para enviar mensajes de ubicación y eventos al endpoint y puerto del servidor Plaspy para que Plaspy muestre la posición del dispositivo, su estado y alertas en la plataforma. Plaspy utiliza un endpoint y puerto compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los mensajes.

- El dispositivo envía telemetría a d.plaspy.com o al servidor de respaldo 54.85.159.138 usando el transporte configurado.
- El puerto 8888 se utiliza para todos los dispositivos y debe configurarse en el rastreador.
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que basta con apuntar el dispositivo a la dirección y puerto correctos.
- El reporte de eventos, como entradas SOS, se reenvía a Plaspy una vez que el dispositivo esté configurado para enviar esos eventos.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración QuecLink para el GV51MG (comandos SMS, herramienta USB o software de configuración del proveedor) tal como lo provea QuecLink o su distribuidor.
2. Ingrese d.plaspy.com o la IP de respaldo 54.85.159.138 en los campos de configuración del servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, ya que Plaspy utiliza este mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP si el dispositivo requiere elegir un transporte.
5. Configure los ajustes APN y cualquier nombre de usuario o contraseña del APN necesarios para la conectividad de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del GV51MG lo requiere.
7. Valide que el dispositivo reporta a Plaspy comprobando la visibilidad del equipo y la telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El GV51MG puede configurarse vía SMS usando comandos estilo AT de QuecLink. Los siguientes ejemplos públicos muestran una secuencia común. La contraseña del dispositivo usada en estos ejemplos es queclink, que es la configuración de fábrica en el contenido provisto. Si esa contraseña fue cambiada en su dispositivo, utilice la contraseña actual.

1) Paso opcional inicial — Restaurar configuración de fábrica (usar solo si es necesario)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2) Ajustar la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3) Establecer el APN del operador
- Reemplace los marcadores con los valores de su operador:
  - [apn] es la cadena APN de su operador
  - [apnu] es el usuario del APN si se requiere
  - [apnp] es la contraseña del APN si se requiere
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4) Configurar el servidor GPRS hacia Plaspy por dominio e IP con puerto 8888
- El ejemplo incluye tanto el dominio como la IP de respaldo y usa el puerto 8888 según lo requiere Plaspy
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5) Establecer el intervalo de actualización a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6) Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre estos comandos
- Envíe cada comando como un único SMS al número del dispositivo desde un número permitido si el equipo está configurado para aceptar SMS solo desde ciertos números.
- Mantenga el orden de los comandos al realizar una configuración inicial: APN y ajustes del servidor deben establecerse antes de validar el envío de datos.
- Preserve los marcadores como [apn], [apnu] y [apnp] y reemplácelos por las credenciales de su operador cuando envíe los comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles. Verifique siempre el manual del GV51MG correspondiente a la versión de firmware que está usando.
- La configuración vía SMS es un método público común para dispositivos QuecLink, pero también pueden existir herramientas del proveedor o utilidades USB que ofrezcan configuración masiva o en lote.
- Elija UDP o TCP según sus necesidades de red y fiabilidad. Plaspy acepta ambos y detectará el protocolo automáticamente en el servidor.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará el protocolo de los mensajes entrantes.
- Mantenga seguras las credenciales de acceso del dispositivo y considere cambiar las contraseñas por defecto después de la configuración inicial.

## Por qué usar Plaspy con esta configuración

Configurar el QuecLink GV51MG para que apunte a Plaspy ofrece una forma práctica de integrar rastreadores compactos y discretos en una plataforma de seguimiento centralizada. Para organizaciones que gestionan flotas en leasing, programas BHPH, alquileres o operaciones básicas de flota, la combinación del hardware GV51MG y los ajustes de servidor Plaspy permite que los dispositivos informen posición y eventos clave en un único sistema de monitoreo.

Para obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos, visite https://www.plaspy.com. Para detalles específicos de configuración del GV51MG, referencias de comandos y documentación de firmware más reciente, verifique la información actual en el sitio del fabricante https://www.queclink.com/ ya que el comportamiento y los comandos del dispositivo pueden cambiar con las revisiones de firmware y hardware.
