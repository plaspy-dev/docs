---
slug: /condor/ts_728/configuration
id: ts_728-configuration
sidebar_label: Configuration
title: Condor - TS-728 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Condor TS-728 con Plaspy, con ajustes de servidor y ejemplos de configuración por SMS
keywords:
  - Configuración Condor TS-728
  - Configuración TS-728 Plaspy
  - configuración servidor Condor TS-728
  - configuración rastreador marítimo Condor
  - configuración SMS TS-728
  - rastreador satelital Condor Plaspy
  - configuración Iridium TS-728
  - guía instalación rastreador Condor
  - configuración seguimiento flota TS-728
  - integración rastreador satelital Plaspy
---

# Condor - TS-728 Configuración

Esta página documenta el contexto de configuración pública para usar el rastreador Condor TS-728 con Plaspy. Explica los ajustes compartidos del servidor de Plaspy que deberá utilizar, resume los prerrequisitos habituales e incluye comandos de ejemplo por SMS provistos en la configuración del modelo. Use esta guía para preparar el TS-728 para reportar a Plaspy y validar la conectividad desde la instalación hasta la visibilidad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La descripción del TS-728 lo identifica como un rastreador marítimo con conectividad por satélite Iridium; los comandos públicos que aparecen a continuación son un ejemplo basado en SMS que incluye entradas estilo APN y GPRS. Confirme el mejor método de configuración para su firmware y su suscripción satelital con el fabricante antes del despliegue.

## Resumen de configuración

El objetivo de la configuración es que el TS-728 informe de manera fiable a Plaspy para que la posición y la telemetría de la embarcación aparezcan en la plataforma en tiempo real. Los comandos públicos por SMS incluidos con el modelo son un método común para aplicar ajustes de servidor y red cuando el proveedor facilita una interfaz SMS.

- Configure el rastreador para que apunte al servidor de Plaspy y así los paquetes de GPS y telemetría lleguen a la plataforma.
- Aplique parámetros de red como APN, modo de transporte y cualquier identificador que requiera el equipo.
- Valide la conectividad entre el rastreador y el servidor y confirme que el dispositivo aparezca en Plaspy.
- Active actualizaciones regulares de posición y los intervalos de reporte adecuados para la supervisión marítima.
- Use el comando de verificación suministrado para comprobar el estado de conexión en vivo luego de la configuración.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según lo requiera la configuración del equipo
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- IMEI conocido del dispositivo y acceso a la interfaz SMS del equipo o al canal de configuración del fabricante
- Servicio satelital activo o suscripción celular según corresponda a su instalación TS-728
- Alimentación aplicada y dispositivo montado según la guía de instalación para que obtenga posicionamiento y comience a reportar
- Credenciales APN si el dispositivo se configura con entradas al estilo GPRS o en una configuración híbrida
- Acceso a la documentación del proveedor o a la herramienta de configuración para opciones específicas del dispositivo y notas de firmware
- Capacidad para enviar comandos SMS desde un teléfono o una herramienta de gestión si la configuración se realiza por SMS

## Cómo se conecta este rastreador a Plaspy

El TS-728 se configura para enviar ubicación y telemetría al endpoint y puerto compartidos de Plaspy para que los operadores en tierra vean los datos de la embarcación en la plataforma. Dependiendo de la instalación y el firmware, el rastreador puede usar SMS para recibir la configuración y luego utilizar su enlace satelital o GPRS para reenviar la telemetría a Plaspy.

- El rastreador reporta al endpoint del servidor de Plaspy usando el host y puerto configurados.
- Plaspy recibe los paquetes en el puerto 8888 y detecta automáticamente el protocolo del rastreador para su análisis.
- Mensajes regulares de posición y telemetría se envían según el intervalo de actualización configurado para proporcionar visibilidad continua.
- Mensajes de evento y alarmas enviados por el dispositivo se reenvían a Plaspy para alertas y registro.
- La visibilidad en la plataforma permite monitorización, comprobaciones de geocercas e integración en flujos de trabajo de gestión de flota.

## Proceso común de configuración

1. Acceda al método de configuración oficial de Condor o al software documentado por el proveedor, o use la interfaz SMS del dispositivo si está soportada.
2. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del equipo.
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP como transporte si el equipo exige una selección de transporte para la entrada del servidor.
5. Aplique o guarde la configuración en el dispositivo y, si corresponde, envíe los comandos SMS de confirmación que se requieran.
6. Reinicie el dispositivo si el fabricante recomienda un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta con las actualizaciones de posición esperadas.

## Comandos de configuración de ejemplo

Los siguientes comandos de ejemplo se proporcionan para enviar por SMS. La contraseña predeterminada del dispositivo en estos ejemplos es 0000. Reemplace los marcadores y el alias basado en el IMEI según corresponda para su IMEI y valores APN. Envíelos como mensajes SMS en texto plano al rastreador en el orden mostrado cuando use el método de configuración por SMS.

1. Establecer el APN del operador
```
APN,0000,{{apn}}
```
Si su operador requiere usuario o contraseña de APN, incluya los marcadores opcionales:
```
APN,0000,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} es la cadena APN del operador
- {{apnu}} es el nombre de usuario del APN si se requiere
- {{apnp}} es la contraseña del APN si se requiere

2. Establecer un identificador de 5 dígitos (use los últimos 5 dígitos del IMEI)
```
ALIAS,0000,XXXXX#
```
- Reemplace XXXXX por los últimos cinco dígitos del IMEI del dispositivo. Por ejemplo, si el IMEI termina en 12345 use ALIAS,0000,12345#

3. Establecer la zona horaria a UTC 0
```
GMT,0000,-0#
```

4. Establecer el servidor GPRS o de reporte a Plaspy
```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
- Este ejemplo establece explícitamente la IP del servidor 54.85.159.138 y el puerto 8888 y muestra las banderas de transporte y modo tal como se usan en los comandos del dispositivo
- Alternativamente, si el equipo acepta un dominio, use d.plaspy.com en lugar de la IP

5. Establecer el intervalo de actualización a 1 minuto (ejemplo)
```
INTERVALO,0000,M,6#
```
- Interprete los valores de intervalo según la documentación del fabricante; este ejemplo es la muestra pública proporcionada

6. Activar modo GPRS
```
GPRS,0000,A#
```

7. Verificar ajustes de conexión (comando de comprobación)
```
CONEXION,0000#
```
- Este comando de verificación solicita al dispositivo que informe el estado actual de la conexión

Notas sobre los comandos
- La contraseña predeterminada del dispositivo en los ejemplos proporcionados es 0000. Cámbiela siguiendo las instrucciones del fabricante después de completar la configuración, si es posible.
- Mantenga el orden de los comandos de servidor y red cuando el fabricante recomiende una secuencia específica de configuración.
- Si su instalación usa transporte únicamente por satélite, confirme si el dispositivo requiere formatos de comando o entradas de servidor distintos para Iridium frente a GPRS.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y los parámetros soportados; confirme siempre los comandos con la documentación del fabricante para su versión de dispositivo.
- Los comandos de ejemplo se basan en SMS y reflejan el contenido de configuración pública suministrado; las herramientas del fabricante pueden ofrecer una alternativa por GUI o configuración por cable.
- Elija UDP o TCP según el soporte del dispositivo y los requisitos de la red; Plaspy acepta ambos transportes y detecta automáticamente el protocolo.
- Cambie las contraseñas predeterminadas cuando sea posible para asegurar el acceso a la configuración del dispositivo; en los ejemplos se usa 0000 como contraseña por defecto.
- Use el comando CONEXION,0000# después de aplicar los ajustes para confirmar que el dispositivo informa al endpoint de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Condor TS-728 con Plaspy brinda a los operadores de flota una plataforma única para consolidar activos marítimos, recibir actualizaciones continuas de ubicación y activar alertas en embarcaciones que operan fuera de redes terrestres. El endpoint compartido de Plaspy y la detección automática del protocolo simplifican la integración: los dispositivos configurados para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 serán procesados por la plataforma para mapeo, informes y alarmas.

Para obtener más información sobre Plaspy y cómo soporta despliegues satelitales y de conectividad mixta visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, detalles de firmware y la referencia oficial de comandos consulte al fabricante en https://condorskyseeker.com/ para confirmar los métodos y comportamientos exactos de configuración.
