---
slug: /tramigo/t22/configuration
id: t22-configuration
sidebar_label: Configuration
title: Tramigo - T22 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Tramigo T22 con ajustes de servidor Plaspy y comandos SMS para integrar el dispositivo
keywords:
  - Tramigo T22
  - Configuración Tramigo T22
  - Instalación Tramigo T22
  - Configuración Plaspy
  - Configuración de rastreador GPS
  - Configuración rastreo de vehículos
  - Configuración GPRS del rastreador
  - Ajustes del servidor Tramigo
  - Comandos SMS para rastreador
  - Rastreador para gestión de flotas
---

# Tramigo - T22 Configuración

Esta página recoge el contexto público de configuración para usar el rastreador GPS Tramigo T22 con la plataforma Plaspy. Contiene los ajustes de servidor prácticos y los comandos SMS de uso común publicados para el T22, para que pueda preparar el dispositivo y permitir que se comunique con Plaspy para el rastreo y la monitorización.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se centra en los valores públicos de configuración y en ejemplos de SMS que se usan habitualmente para conectar un Tramigo T22 a Plaspy.

## Resumen de configuración

El Tramigo T22 requiere ajustes básicos de red y servidor para enviar datos de posición y eventos a Plaspy. El proceso de configuración prepara el dispositivo para la conectividad GPRS, apunta al endpoint de Plaspy y valida que el rastreador informe correctamente a la plataforma.

- Configure el APN GPRS del dispositivo para que tenga acceso a datos móviles y pueda reportar.
- Apunte el T22 al endpoint y puerto del servidor Plaspy para que los datos lleguen a su cuenta.
- Elija el método de transporte UDP o TCP según lo exija su instalación y el firmware del dispositivo.
- Active el reporte periódico o los disparadores de eventos para que el rastreador envíe posiciones a Plaspy.
- Verifique la conectividad y confirme que el rastreador aparece en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto 8888

## Requisitos previos

- Un Tramigo T22 encendido con una tarjeta SIM activa y GPRS habilitado por el operador móvil.
- Acceso al método de configuración por SMS del equipo o a la herramienta de configuración Tramigo proporcionada por el vendedor.
- APN correcto, usuario APN y contraseña APN del operador de la SIM para permitir la conectividad GPRS.
- Conocimiento de si su instalación debe usar UDP o TCP y si el firmware del dispositivo soporta TCP.
- Una forma de reiniciar el rastreador tras la configuración si es necesario para aplicar nuevos ajustes GPRS o de servidor.
- Acceso a Plaspy y conocimiento del contexto de la cuenta para verificar el dispositivo tras su registro.

## Cómo se conecta este rastreador a Plaspy

El Tramigo T22 usa GSM y GPRS para enviar datos de ubicación y eventos a Plaspy. Una vez que el dispositivo tiene un APN válido y los ajustes de servidor, abrirá una conexión al endpoint de Plaspy y comenzará a reportar según el perfil de reporte configurado.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy: d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección del dispositivo durante la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpreta los mensajes entrantes sin necesidad de seleccionar el protocolo por dispositivo.
- Los reportes regulares de posición y eventos del T22 serán visibles en Plaspy para monitorización y uso operativo.
- La verificación se completa confirmando que el dispositivo aparece y se actualiza en la interfaz de Plaspy después de la configuración.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de Tramigo o al software correspondiente, o prepárese para enviar comandos SMS tal como indica la documentación de Tramigo.
2. Introduzca el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto en 8888, teniendo en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte durante la configuración.
5. Configure el APN del dispositivo con los valores de su operador para que GPRS pueda conectarse.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware requiere reinicio para que los cambios surtan efecto.
7. Valide que el Tramigo T22 reporte a Plaspy comprobando el registro del dispositivo y sus actualizaciones en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El Tramigo T22 puede configurarse enviando comandos SMS al dispositivo. Los comandos a continuación son ejemplos públicos usados para establecer el APN, habilitar reportes, desactivar ciertas respuestas ACK y apuntar el rastreador al servidor Plaspy. Mantenga los marcadores de posición cuando los reemplace por los valores de su operador.

1. Establecer el APN del operador
```text
GPRS,APN,[apn],[apnu],[apnp]
```
- [apn] es el nombre del APN del operador
- [apnu] es el usuario APN si el operador lo requiere
- [apnp] es la contraseña APN si el operador la requiere

2. Activar el reporte FIND cada 1 minuto
```text
R,10,F,1,1,1,35
```
- Este comando es el ejemplo público para habilitar el reporte periódico FIND según la documentación de Tramigo. Confirme los parámetros de tiempo con la documentación del fabricante.

3. Desactivar la respuesta ACK de Ping
```text
Set,GPRSPingResponse,0
```

4. Desactivar la respuesta ACK de mensajes
```text
Set,GPRSMsgResponse,0
```

5. Configurar el servidor GPRS a Plaspy usando la IP y transporte TCP
```text
GPRS,Connect,54.85.159.138,8888,tcp
```
- El ejemplo anterior usa la IP del servidor Plaspy y transporte TCP. Puede alternativamente apuntar a d.plaspy.com si su equipo acepta nombres de dominio.

6. Para consultar la configuración actual
```text
Status
```
- Envíe el comando Status para solicitar que el dispositivo devuelva su estado de configuración actual, si está soportado.

## Notas de configuración

- La configuración del Tramigo T22 puede realizarse por SMS como se muestra en los comandos públicos anteriores o mediante las herramientas del proveedor Tramigo; elija la opción más adecuada para su instalación.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y los parámetros soportados. Si un comando falla, confirme la sintaxis correcta con la documentación de Tramigo para su versión de firmware.
- Elija TCP o UDP según sus necesidades de red y el soporte del dispositivo. Plaspy acepta ambos transportes en el puerto 8888 y detectará automáticamente el protocolo entrante.
- Mantenga las credenciales APN y cualquier marcador de posición seguros. Reemplace [apn], [apnu] y [apnp] con los valores del operador antes de enviar comandos.
- Si los ajustes no surten efecto de inmediato, puede ser necesario reiniciar o apagar y volver a encender el dispositivo para aplicar los cambios de red y servidor.

## Por qué usar Plaspy con esta configuración

Usar el Tramigo T22 con Plaspy ofrece una vía sencilla para integrar visibilidad en tiempo real de ubicaciones y eventos dentro de una plataforma centralizada de gestión de flotas o activos. Con los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo, usted puede estandarizar la configuración de rastreadores en múltiples dispositivos y enfocarse en la monitorización operativa en lugar de gestionar protocolos por dispositivo.

To learn more about Plaspy and how it integrates with supported trackers visit https://www.plaspy.com. For the latest Tramigo T22 specific firmware behavior and manufacturer setup details verify information on the Tramigo website http://www.tramigo.net/.
