---
slug: /atrack/au7/configuration
id: au7-configuration
sidebar_label: Configuration
title: ATrack - AU7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para el rastreador ATrack AU7 con ajustes de servidor Plaspy y comandos de ejemplo
keywords:
  - Configuración ATrack AU7
  - Instalación ATrack AU7
  - Configuración AU7 para Plaspy
  - Ajustes de servidor AU7
  - Rastreador GPS ATrack AU7
  - rastreo de vehículos AU7
  - Configuración TCP UDP AU7
  - Configuración GPRS ATrack AU7
  - Configuración de protocolo AU7
  - Configuración de dispositivo Plaspy
---

# ATrack - Configuración del AU7

Esta página documenta el contexto público de configuración para usar el rastreador ATrack AU7 con Plaspy. Se centra en los ajustes de servidor y en comandos de ejemplo que se usan habitualmente para apuntar un AU7 a Plaspy, de modo que el dispositivo pueda enviar ubicaciones y eventos a la plataforma. Cuando aplique, se incluyen ejemplos de comandos AT públicos para ilustrar los pasos prácticos de configuración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; use esta página como guía práctica de integración y verifique los procedimientos específicos del equipo con la documentación oficial de ATrack y sus herramientas.

## Resumen de la configuración

Esta configuración prepara el AU7 para enviar datos de rastreo a la plataforma Plaspy utilizando el endpoint y puerto compartidos de Plaspy. El objetivo es definir intervalos de reporte, disparadores de eventos, modo de transporte y los ajustes GPRS para que el rastreador establezca una conexión de datos persistente con Plaspy y aparezca en la plataforma.

- Configure el rastreador para que reporte al endpoint y puerto del servidor de Plaspy
- Defina el intervalo de reporte y las reglas de eventos para asegurar telemetría útil en Plaspy
- Elija transporte UDP o TCP según preferencia del instalador o soporte de firmware
- Valide los ajustes GPRS y el APN para que el dispositivo obtenga conectividad de datos móviles
- Confirme que el dispositivo envía mensajes correctamente y es visible en Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el AU7. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta el protocolo del rastreador automáticamente.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy realiza detección automática de protocolo para conexiones entrantes de rastreadores

## Requisitos típicos antes de configurar

- Una unidad AU7 con alimentación y acceso a la interfaz de configuración del fabricante o a la herramienta de aprovisionamiento
- SIM con datos móviles activa y los ajustes APN correctos configurados en el dispositivo
- Credenciales del instalador o integrador, o acceso físico para enviar comandos AT o usar el software de configuración de ATrack
- Cobertura de red para la tecnología móvil elegida y confirmación de que el dispositivo puede usar TCP o UDP para la sesión de datos
- Un plan de pruebas, por ejemplo un vehículo conocido o banco de pruebas, para validar el reporte al servidor

## Cómo se conecta este rastreador a Plaspy

El AU7 se configura para enviar telemetría, eventos y muestras periódicas de ubicación al endpoint y puerto compartidos de Plaspy. Una vez aplicados los ajustes de GPRS y servidor, el rastreador inicia las conexiones y envía cargas en binario o texto según su protocolo; Plaspy detecta y decodifica automáticamente el protocolo para su visualización y monitoreo.

- El dispositivo abre una sesión de datos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El instalador puede elegir UDP o TCP como transporte para los mensajes del dispositivo
- El rastreador envía reportes periódicos de posición y mensajes por eventos a Plaspy
- Plaspy recibe los mensajes en el puerto compartido y detecta automáticamente el protocolo del rastreador
- Una conexión y reporte exitosos hacen que la unidad sea visible y utilizable en la plataforma Plaspy

## Flujo común de configuración

1. Acceda al método oficial de configuración ATrack para el AU7 (consola, comandos SMS o herramienta del proveedor según el dispositivo y firmware).
2. Ingrese el servidor de Plaspy por nombre de host d.plaspy.com o por IP 54.85.159.138 en los ajustes de GPRS o servidor.
3. Configure el puerto del servidor en 8888, que es usado por todos los dispositivos de Plaspy.
4. Elija UDP o TCP como transporte si el rastreador requiere selección de transporte.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta o el conjunto de comandos del fabricante.
6. Reinicie el rastreador si el dispositivo o las instrucciones del proveedor recomiendan un reinicio tras la configuración.
7. Valide que el dispositivo reporte a Plaspy y sea visible en la plataforma usando comandos de estado del equipo o los registros de conexión en Plaspy.

## Comandos de configuración de ejemplo

El AU7 soporta comandos de configuración estilo AT. Los siguientes ejemplos públicos muestran una secuencia práctica para configurar reglas de reporte, intervalo, formato binario y apuntar el servidor GPRS a Plaspy. Reemplace los valores de marcador de posición como {{apn}}, {{apnu}} y {{apnp}} por los provistos por su operador móvil.

1. Configurar evento ACC y acciones de reporte
```
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Establecer intervalo de tiempo a 60 segundos para reportes de rastreo
```
AT$TRAC=1,60,,,,,2
```

3. Configurar modo de reporte binario
```
AT$FORM=1,@P,0,""
```

4. Configurar servidor GPRS apuntando a Plaspy
```
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```
- {{apn}} es el nombre de punto de acceso de datos móviles
- {{apnu}} es el nombre de usuario del APN si lo requiere el operador
- {{apnp}} es la contraseña del APN si lo requiere el operador

5. Comprobar estado y configuración del dispositivo
```
AT$INFO=?
```

Estos comandos son ejemplos públicos que muestran cómo apuntar un AU7 a Plaspy usando la IP y el puerto del servidor. Si lo prefiere, puede reemplazar la IP por el dominio d.plaspy.com cuando la interfaz de configuración acepte nombres de host.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y los parámetros soportados; siempre confirme los comandos con las notas de la versión del firmware del AU7.
- Elija TCP o UDP según las necesidades de la instalación y el soporte del firmware; TCP puede ofrecer mayor confiabilidad de sesión mientras que UDP suele utilizarse para mensajes más livianos.
- Tenga a la mano los marcadores de APN {{apn}}, {{apnu}} y {{apnp}} provistos por el operador; si están incorrectos no habrá conectividad GPRS.
- Algunas instalaciones utilizan SMS o herramientas del proveedor para la configuración, según prácticas del sitio y capacidades del firmware del dispositivo.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos que soporta y detecta automáticamente el protocolo del rastreador al recibir los mensajes.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el ATrack AU7 permite a las organizaciones centralizar la visibilidad de la flota, monitorear alertas basadas en eventos y recibir actualizaciones periódicas de posición desde el rastreador a través de un único endpoint compartido de Plaspy. El motor de reportes y eventos configurable del AU7, junto con la detección automática de protocolos de Plaspy, simplifican la integración y reducen la complejidad inicial de configuración.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer guidance verify details on the ATrack official website https://www.atrack.com.tw/ because device setup and firmware features can change over time.
