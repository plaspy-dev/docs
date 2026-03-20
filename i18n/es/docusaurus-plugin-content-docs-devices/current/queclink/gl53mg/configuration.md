---
slug: /queclink/gl53mg/configuration
id: gl53mg-configuration
sidebar_label: Configuration
title: QuecLink - GL53MG Configuration
sidebar_class_name: menu_item_tracker
description: Configure QuecLink GL53MG para Plaspy con ajustes públicos de servidor y comandos SMS de ejemplo para seguimiento confiable
keywords:
  - Configuración QuecLink GL53MG
  - Instalación QuecLink GL53MG
  - Configuración GL53MG Plaspy
  - Configuración servidor GL53MG
  - Configuración rastreador QuecLink
  - Comandos SMS QuecLink GL53MG
  - Configuración rastreador GPS GL53MG
  - Configuración software seguimiento QuecLink
  - Configuración LTE GL53MG
  - Configuración rastreador Plaspy
---

# QuecLink - Configuración GL53MG

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GL53MG con Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de comandos SMS que se emplean comúnmente para apuntar un GL53MG a Plaspy y habilitar el reporte de datos del activo. Las indicaciones aquí están orientadas a usuarios técnicos que preparan el dispositivo para su integración con la plataforma Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos y secuencias aquí como ejemplos públicos prácticos y no como un manual exhaustivo del fabricante.

## Resumen de la configuración

Configurar el GL53MG para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos a Plaspy usando el endpoint y el puerto compartidos de la plataforma. La configuración pública comúnmente utiliza comandos SMS para establecer el APN y la información del servidor GPRS, además de ajustar intervalos de reporte y el comportamiento de entradas.

- Apunte el dispositivo al endpoint del servidor de Plaspy para que el rastreador pueda establecer una sesión de reporte persistente.
- Configure el APN del operador y las credenciales necesarias para que el rastreador pueda usar datos celulares para la conexión GPRS.
- Seleccione el modo de transporte UDP o TCP según corresponda y establezca el puerto de la plataforma en 8888.
- Habilite las entradas y los intervalos de reporte requeridos para que eventos y actualizaciones de ubicación aparezcan en Plaspy.
- Valide la conectividad confirmando que el dispositivo se registre y reporte a Plaspy tras la configuración.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888 según preferencia del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para el reporte

## Requisitos típicos antes de la configuración

- Un QuecLink GL53MG cargado y funcional con acceso al método de configuración por SMS del dispositivo o a la herramienta oficial de configuración de QuecLink.
- Una tarjeta SIM operativa provisionada para datos con el APN del operador, nombre de usuario y contraseña según sea necesario.
- Conocimiento de la contraseña predeterminada del dispositivo si la configuración por SMS requiere autenticación. Los comandos de ejemplo abajo usan la contraseña por defecto queclink.
- Cobertura celular en la zona de despliegue del dispositivo compatible con LTE Cat M1 NB2 del rastreador y redes de respaldo.
- Capacidad para enviar y recibir SMS al dispositivo para configuración vía SMS, o acceso a la interfaz de configuración oficial de QuecLink si lo prefiere.

## Cómo se conecta este rastreador a Plaspy

El GL53MG se configura para reportar mensajes de posición y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma muestre la ubicación, el estado y las alertas. Una vez configurados el servidor y el APN, el dispositivo utilizará el transporte seleccionado para enviar la telemetría a Plaspy, donde la plataforma se encarga de la detección automática del protocolo.

- El rastreador inicia una sesión GPRS usando el APN y las credenciales configuradas.
- El reporte del dispositivo se dirige a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección durante la configuración.
- Plaspy recibe la conexión del dispositivo y detecta automáticamente el protocolo para parsear los mensajes entrantes.
- Tras una configuración exitosa, las actualizaciones de posición y las entradas configuradas son visibles en la plataforma Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de QuecLink o al software correspondiente, o prepárese para enviar comandos SMS si prefiere la configuración por SMS.
2. Configure el APN del operador y, si corresponde, las credenciales APN (usuario y contraseña) mediante el método de configuración del dispositivo.
3. Ingrese el endpoint del servidor de Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración y, si procede, reinicie el dispositivo para asegurar que los ajustes estén activos.
6. Valide que el GL53MG reporte a Plaspy y que el dispositivo aparezca en la plataforma con las actualizaciones de posición esperadas.
7. Si es necesario, ajuste los intervalos de reporte o el comportamiento de entradas para que coincidan con las necesidades operativas.

## Comandos de configuración de ejemplo

El QuecLink GL53MG puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos SMS públicos son una secuencia de ejemplo usada para preparar el dispositivo para Plaspy. Estos comandos asumen que la contraseña del dispositivo es el valor predeterminado queclink. Preserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por el APN, usuario APN y contraseña APN de su operador al enviarlos.

1. Comando opcional de restauración de fábrica inicial para resetear los ajustes del dispositivo a valores de fábrica
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador y las credenciales
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} es el APN de datos móviles de su operador
- {{apnu}} es el nombre de usuario del APN si se requiere
- {{apnp}} es la contraseña del APN si se requiere

4. Configurar el servidor GPRS a Plaspy usando dominio e IP y especificar el puerto 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando incluye tanto el dominio de Plaspy como la IP del servidor Plaspy y establece el puerto 8888
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes de transporte

5. Establecer intervalo de reporte periódico a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Siga las indicaciones de QuecLink para el formato exacto de envío de SMS soportado por su firmware y confirme que cada SMS es aceptado por el dispositivo.

## Notas de configuración

- La configuración basada en SMS está incluida en los ejemplos públicos anteriores; los métodos alternativos de configuración incluyen las herramientas oficiales de QuecLink y utilidades de firmware.
- La versión de firmware y la revisión de hardware pueden cambiar el formato de comandos soportados o el orden de parámetros. Verifique la sintaxis del comando según el firmware del dispositivo que tenga desplegado.
- Elija UDP o TCP según sus necesidades de despliegue; ambos transportes son soportados por Plaspy en el puerto 8888.
- Preserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} al preparar los comandos y reemplácelos por los valores específicos del operador.
- Los comandos de ejemplo usan la contraseña del dispositivo queclink tal como se muestra en el ejemplo público de configuración. Confirme la contraseña correcta de su dispositivo antes de enviar SMS de configuración.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un QuecLink GL53MG correctamente configurado ofrece una forma sencilla de centralizar los datos de rastreo de activos en una única plataforma. Apuntar el GL53MG a Plaspy con los ajustes de servidor compartidos permite a las organizaciones monitorear la ubicación de los dispositivos, recibir alertas configuradas por entradas y mantener conciencia operativa en sus despliegues.

To learn more about Plaspy visit https://www.plaspy.com and review the latest QuecLink device documentation at https://www.queclink.com/ to confirm current firmware behavior and manufacturer setup procedures. Manufacturer specifications and configuration methods can change over time so verify the latest device specific details on the official QuecLink site.
