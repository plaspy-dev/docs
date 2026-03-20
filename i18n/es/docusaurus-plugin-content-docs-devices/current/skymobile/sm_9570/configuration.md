---
slug: /skymobile/sm_9570/configuration
id: sm_9570-configuration
sidebar_label: Configuration
title: SkyMobile - SM-9570 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SkyMobile SM-9570 para Plaspy usando ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración SkyMobile SM-9570
  - Configuración SM-9570 en Plaspy
  - Configuración rastreador GPS SkyMobile
  - Configuración servidor SM-9570
  - Configuración de software de rastreo SkyMobile
  - Configuración plataforma GPS SM-9570
  - Configuración rastreador Plaspy
  - Configuración SMS SM-9570
  - Configuración GPRS SM-9570
  - Rastreo de flotas SM-9570
---

# SkyMobile - Configuración SM-9570

Esta página documenta el contexto público de configuración para utilizar el SkyMobile SM-9570 con la plataforma Plaspy. Explica los ajustes de servidor compartidos de Plaspy que debe ingresar en el rastreador, describe el flujo típico de configuración y aporta ejemplos públicos de comandos SMS para el SM-9570 cuando están disponibles. Use esta guía para preparar el dispositivo para comunicarse con Plaspy y validar la conectividad básica.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SM-9570 admite comandos de configuración por SMS en los ejemplos públicos que se muestran a continuación; confirme la versión de firmware y los procedimientos con el fabricante antes de aplicar cambios.

## Visión general de la configuración

El objetivo del proceso de configuración es preparar el SM-9570 para que se comunique de forma confiable con Plaspy, reporte ubicación y eventos de entrada, y aparezca en la plataforma. Esto incluye ajustar parámetros APN, apuntar al endpoint y puerto del servidor Plaspy, definir intervalos de reporte y habilitar entradas necesarias como SOS o entradas digitales.

- Asegúrese de que el dispositivo tenga conectividad de red válida y un APN del operador configurado.
- Apunte el rastreador a Plaspy usando el dominio o la IP del servidor y el puerto correspondientes.
- Seleccione el protocolo de transporte si el dispositivo requiere especificar UDP o TCP.
- Configure el intervalo de reportes y habilite las entradas I/O necesarias para el monitoreo.
- Verifique que el rastreador sea visible en Plaspy después de la configuración y ajuste los parámetros según sea necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos habituales antes de la configuración

- Confirme que el SM-9570 tenga una tarjeta SIM funcional con datos y capacidad de SMS, y que usted conozca la información APN del operador.
- Alimente el dispositivo con una fuente DC adecuada de 8 a 32V según lo especificado por el fabricante.
- Disponga de un teléfono con capacidad de enviar SMS o de una pasarela SMS del operador para enviar comandos de configuración por SMS, si va a utilizar esa opción.
- Tenga acceso al método de configuración oficial del fabricante o a la documentación de SkyMobile para el firmware de su equipo.
- Disponga de la contraseña del dispositivo o de la contraseña por defecto si los comandos requieren autenticación. Los ejemplos públicos a continuación usan la contraseña por defecto SM9570.
- Asegúrese de tener a mano los ajustes del servidor Plaspy: d.plaspy.com o 54.85.159.138 y puerto 8888.

## Cómo se conecta este rastreador a Plaspy

El SM-9570 se configura para enviar ubicación y eventos al endpoint y puerto compartido del servidor Plaspy. Una vez que el dispositivo tenga acceso a la red y los ajustes de servidor correctos, Plaspy recibirá actualizaciones periódicas de ubicación y notificaciones de eventos, y la plataforma detectará automáticamente el protocolo del rastreador.

- El rastreador envía reportes periódicos de ubicación al servidor Plaspy en d.plaspy.com puerto 8888.
- Plaspy acepta conexiones por UDP o TCP según la configuración del rastreador.
- La plataforma detecta automáticamente el protocolo del rastreador para interpretar los mensajes entrantes.
- Eventos de entradas como entradas digitales o pulsaciones del botón SOS pueden reenviarse a Plaspy según la configuración del dispositivo.
- Tras una configuración exitosa, el dispositivo debería aparecer en Plaspy y comenzar a reportar según el intervalo configurado.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de SkyMobile para su SM-9570, normalmente mediante comandos SMS o la herramienta del proveedor, y confirme la versión de firmware del dispositivo.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888. Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere que se especifique explícitamente.
5. Configure el APN y la autenticación según lo requiera el operador móvil, usando los marcadores de posición si es necesario para usuario y contraseña del APN.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo recomienda.
7. Valide la conectividad confirmando que el SM-9570 aparece y reporta en Plaspy y ajuste el intervalo de reporte o las entradas según sea necesario.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del SM-9570 suelen aplicarse vía SMS. La contraseña del dispositivo se incluye en la carga del comando; los ejemplos publicados usan la contraseña por defecto SM9570. Mantenga los marcadores de posición al reemplazarlos por los datos de su operador.

- Resetear a configuración de fábrica (paso inicial opcional)
```text
AT+GTRTO=SM9570,4,,,,,,FFFF$
```

- Establecer la zona horaria a UTC 0
```text
AT+GTTMA=SM9570,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador
```text
AT+GTBSI=SM9570,[apn],[apnu],[apnp],,,,,FFFF$
```
Explicación: Reemplace [apn] con el APN de su operador móvil. Si su operador requiere usuario o contraseña para el APN, reemplace [apnu] y [apnp] según corresponda. Deje los marcadores de posición en blanco si el operador no los requiere.

- Configurar el servidor GPRS a Plaspy usando dominio e IP con puerto 8888
```text
AT+GTSRI=SM9570,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Nota: Este comando muestra tanto el dominio d.plaspy.com como la IP 54.85.159.138 con el puerto 8888. El dispositivo puede usar el dominio o la IP según la disponibilidad de DNS.

- Establecer intervalo de actualización a 60 segundos
```text
AT+GTFRI=SM9570,1,1,0,0,,,60,60,,,0,0,60,FFFFFFFF,0,0,0,FFFF$
```

- Habilitar entradas digitales
```text
AT+GTDIS=SM9570,0,1,,,1,1,0,,2,1,0,,3,0,,,,,,,FFFF$
```

- Habilitar botón SOS en la entrada 2
```text
AT+GTSOS=SM9570,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe cada comando como un mensaje SMS al dispositivo. Mantenga el orden de los comandos cuando siga una secuencia de configuración inicial y envíe el comando de reseteo sólo si necesita restaurar los valores de fábrica.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles. Confirme los comandos con la documentación del SkyMobile SM-9570 correspondiente a su firmware.
- Los ejemplos públicos anteriores utilizan configuración por SMS. Si su instalación usa una herramienta de configuración del proveedor o una interfaz USB, consulte la documentación del fabricante para los pasos equivalentes.
- Elija UDP o TCP según los requisitos de red y servidor. Plaspy soporta ambos y detectará automáticamente el protocolo del rastreador.
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles en la plataforma. Use ese puerto al configurar los ajustes del servidor para el SM-9570.
- Conserve los marcadores de posición del APN como [apn], [apnu] y [apnp] al preparar los comandos y reemplácelos por los valores específicos del operador.

## Por qué usar Plaspy con esta configuración

Integrar el SM-9570 con Plaspy ofrece a los operadores de flotas una forma sencilla de recopilar datos periódicos de ubicación del vehículo, monitorear eventos de entradas y centralizar el rastreo en una plataforma única. Las opciones de reporte periódico y entradas del SM-9570 lo convierten en un dispositivo práctico para operaciones que requieren visibilidad constante y notificaciones de eventos.

Para saber más sobre Plaspy y cómo encaja esta configuración en la plataforma visite https://www.plaspy.com. Para obtener las instrucciones más recientes específicas del dispositivo, notas de firmware y documentación del fabricante, verifique los detalles de configuración en el sitio oficial de SkyMobile http://www.skymobile.com.co. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, así que confirme siempre los procedimientos actuales con la documentación de SkyMobile.
