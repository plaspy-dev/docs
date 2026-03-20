---
slug: /queclink/gv501lg/configuration
id: gv501lg-configuration
sidebar_label: Configuration
title: QuecLink - GV501LG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV501LG con ajustes de servidor Plaspy, comandos SMS y pasos prácticos para integración rápida
keywords:
  - configuración QuecLink GV501LG
  - instalación QuecLink GV501LG
  - configuración de servidor GV501LG
  - configuración GV501LG Plaspy
  - rastreador GPS QuecLink Plaspy
  - configuración rastreador OBDII
  - configuración seguimiento de vehículos Plaspy
  - configuración rastreador de flotas GV501LG
  - configuración software de rastreo GV501LG
  - integración QuecLink GV501LG
---

# QuecLink - Configuración del GV501LG

Esta página documenta el contexto público de configuración para usar el QuecLink GV501LG con Plaspy. Se centra en los ajustes prácticos del servidor, los requisitos habituales y los comandos SMS de ejemplo que aparecen en la documentación pública del dispositivo, para que usted prepare el rastreador y lo haga reportar a Plaspy para ingestión de ubicación en tiempo real y telemetría.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos desde el lado del fabricante para configurar el GV501LG pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; la guía que sigue refleja los comandos públicos y el flujo de trabajo recomendado para la integración con Plaspy, y se recomienda verificarlo con la documentación oficial del fabricante.

## Resumen de la configuración

El objetivo de la configuración es que el GV501LG reporte de forma fiable la posición GNSS y la telemetría del vehículo a Plaspy, de modo que la unidad aparezca en la plataforma y envíe actualizaciones periódicas. El contenido público para este modelo muestra el uso de comandos SMS como un método práctico, incluyendo la configuración de APN y servidor.

- Apunte el dispositivo al endpoint y puerto compartidos de Plaspy para que los reportes lleguen a la plataforma.
- Verifique que la SIM y el APN estén correctos para que el rastreador pueda establecer conexión de datos celulares y GPRS.
- Aplique el intervalo de reporte y las reglas de entradas/eventos para que Plaspy reciba datos de ubicación y alertas en tiempo.
- Valide la conectividad y confirme que el dispositivo se registre en Plaspy usando el dominio o la IP del servidor.
- Use los métodos de configuración del fabricante, como comandos SMS o software del proveedor, para aplicar los ajustes y reiniciar la unidad si es necesario.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador una vez que el dispositivo esté apuntando al endpoint compartido del servidor.

## Requisitos habituales antes de la instalación

- Una SIM celular válida con datos habilitados y SMS si va a usar configuración por SMS.
- Información de APN, nombre de usuario APN y contraseña APN proporcionada por el operador móvil para la SIM instalada.
- Acceso físico al puerto OBD-II del vehículo para la instalación y la alimentación inicial.
- Acceso al método oficial de configuración de QuecLink o a la herramienta del proveedor para este modelo; los comandos públicos pueden enviarse por SMS o aplicarse mediante el software del fabricante.
- Conocimiento de la contraseña del dispositivo para la autorización de comandos; los comandos de ejemplo públicos usan la contraseña por defecto queclink.
- Un plan de pruebas para validar la conectividad con el servidor Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El GV501LG se configura para reportar la posición GNSS y la telemetría del vehículo al endpoint y puerto del servidor Plaspy. Una vez definidos el servidor y el transporte, el rastreador enviará actualizaciones de ubicación, notificaciones de eventos y datos derivados del bus CAN a Plaspy para visibilidad y alertas.

- El dispositivo se apunta al dominio d.plaspy.com o a la IP 54.85.159.138 con el puerto 8888 para el envío de datos.
- El transporte puede configurarse como UDP o TCP en el puerto 8888 según el firmware del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del dispositivo para interpretar correctamente los mensajes entrantes.
- Los reportes regulares de posición y eventos aparecen en Plaspy según el intervalo de reporte configurado.
- Alertas como SOS, detección de choque y violación de geocercas se envían a Plaspy para su procesamiento y notificaciones en la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de QuecLink o a su software, o prepárese para enviar comandos SMS si el modelo lo soporta.
2. Asegúrese de que la SIM esté instalada y de tener el APN, el nombre de usuario y la contraseña del APN.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Configure el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo exige elegir el transporte.
5. Aplique o guarde la configuración usando la herramienta del fabricante o enviando los comandos SMS.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware requiere reinicio para aplicar los nuevos ajustes del servidor.
7. Verifique que el dispositivo reporte a Plaspy comprobando los datos entrantes en la plataforma y confirmando que la unidad aparece como activa.

## Comandos de configuración de ejemplo

La configuración pública del modelo incluye comandos SMS usados para ajustar el GV501LG. Los comandos de ejemplo a continuación utilizan la contraseña del dispositivo queclink según el contenido público. El primer comando restaura la configuración de fábrica y es opcional o recomendado solo para la puesta en marcha inicial cuando sea necesario expresamente.

1. Restauración inicial opcional a valores de fábrica
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
2. Establecer la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
3. Configurar el APN del operador
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] es el APN del operador móvil
- [apnu] es el nombre de usuario del APN cuando se requiera
- [apnp] es la contraseña del APN cuando se requiera

4. Apuntar el servidor GPRS a Plaspy (se muestran dominio e IP)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando configura el dispositivo para usar el endpoint d.plaspy.com y la IP 54.85.159.138 con el puerto 8888. Plaspy utiliza el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente.

5. Establecer el intervalo de actualizaciones a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Siga las indicaciones del fabricante para el envío de comandos SMS, incluyendo el formato correcto del mensaje y posibles pausas entre mensajes. Mantenga los marcadores de posición intactos y reemplácelos por los valores de su operador.

## Notas de configuración

- La configuración por SMS se muestra en los comandos públicos anteriores; algunos instaladores prefieren la herramienta oficial de QuecLink o un servidor de aprovisionamiento cuando esté disponible.
- Las revisiones de firmware y hardware pueden alterar la sintaxis de los comandos y los parámetros disponibles; siempre verifique los comandos según la revisión de firmware y la documentación del fabricante.
- Elija UDP o TCP según las necesidades del despliegue y el comportamiento de la red; ambos transportes son compatibles con el servidor Plaspy en el puerto 8888.
- Confirme el APN, el nombre de usuario y la contraseña del APN con el operador celular antes de enviar comandos de configuración.
- El ejemplo público usa la contraseña por defecto del dispositivo queclink para los comandos; actualice la autenticación del dispositivo si requiere una postura de seguridad distinta.

## Por qué usar Plaspy con esta configuración

Usar el GV501LG con Plaspy ofrece un camino directo hacia visibilidad de vehículos en tiempo real, diagnósticos del bus CAN y alertas basadas en eventos sin cableado complejo ni ventanas largas de instalación. Al apuntar el rastreador a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888 y seleccionar el transporte preferido, las flotas obtienen ubicación, telemetría e información operativa oportuna para ruteo, mantenimiento y seguridad.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration methods, firmware behavior, and manufacturer recommendations at the official QuecLink site https://www.queclink.com/ as specifications and setup steps can change over time.
