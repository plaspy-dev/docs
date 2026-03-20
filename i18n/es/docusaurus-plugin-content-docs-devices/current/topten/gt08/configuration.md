---
slug: /topten/gt08/configuration
id: gt08-configuration
sidebar_label: Configuration
title: TopTen - GT08 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TopTen GT08 y conectarlo a Plaspy mediante servidor compartido, SMS o GPRS
keywords:
- configuración TopTen GT08
- instalación TopTen GT08
- configuración de servidor TopTen GT08
- TopTen GT08 en Plaspy
- guía configuración GT08
- configuración SMS GT08
- ajustes APN GT08
- integración rastreador GPS GT08
- seguimiento de flotas GT08
- configuración de dispositivo Plaspy
---

# TopTen - GT08 Configuración

Esta página ofrece el contexto público de configuración para usar el rastreador TopTen GT08 con Plaspy. Reúne la información práctica y de dominio público necesaria para apuntar un GT08 al servidor de Plaspy, de modo que el dispositivo pueda enviar ubicación y eventos a la plataforma. Cuando los comandos del fabricante son públicos, se muestran a continuación como ejemplos de comandos SMS.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GT08 admite configuración por comandos SMS según la documentación pública del fabricante, y el identificador de dispositivo que usa la plataforma corresponde a los últimos 14 dígitos del IMEI reportado por el comando PAR del dispositivo.

## Resumen de la configuración

Este proceso prepara el GT08 para enviar telemetría y notificaciones de alarma a Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo práctico es configurar el APN/GPRS y los parámetros del servidor del GT08, validar la conectividad y confirmar que el dispositivo sea visible en Plaspy.

- Apunte el GT08 al servidor de Plaspy usando los ajustes de servidor compartidos.  
- Configure el APN y los parámetros GPRS para que el rastreador use datos móviles y alcance Plaspy.  
- Utilice el identificador derivado del IMEI (los últimos 14 dígitos) para que la plataforma reconozca el dispositivo.  
- Verifique la conectividad y el reporte periódico para que el rastreador aparezca en las listas de seguimiento de Plaspy.  
- Opcionalmente, restaure las configuraciones de fábrica antes de aprovisionar si el instalador lo recomienda.

## Configuración del servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles)  
- Transportes soportados: UDP o TCP (configure el que requiera el dispositivo)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

## Requisitos previos habituales

- Un equipo GT08 con energía y funcionamiento correcto, con IMEI legible.  
- Una tarjeta SIM activa con datos móviles (GPRS) y capacidad de SMS si se usa provisión por SMS.  
- Conocimiento del APN del operador y, opcionalmente, del usuario y contraseña del APN para la SIM.  
- Acceso al método de configuración soportado por el fabricante (comandos SMS o herramienta del proveedor).  
- Una forma de recibir y verificar respuestas del dispositivo, por ejemplo acceso al número telefónico asociado para recibir SMS de respuesta.  
- Familiaridad básica con el IMEI del dispositivo para poder derivar el identificador que usa la plataforma.

## Cómo se conecta este rastreador a Plaspy

El GT08 se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir datos de posición y eventos y mostrar el dispositivo. La configuración normalmente establece los parámetros GPRS/APN del equipo y el servidor de destino por IP o dominio.

- El rastreador envía reportes periódicos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El identificador del dispositivo que usa Plaspy corresponde a los últimos 14 dígitos del IMEI tal como aparecen en la respuesta PAR.  
- El transporte puede configurarse en UDP o TCP según el firmware del equipo; Plaspy detectará el protocolo automáticamente.  
- El rastreador podrá enviar mensajes de alarma y estado al servidor de Plaspy una vez que GPRS esté activo y la configuración de servidor aplicada.  
- La verificación de la conexión exitosa se realiza comprobando que el dispositivo aparece en Plaspy y revisando las respuestas del equipo a los comandos de verificación.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el GT08 (provisión por SMS o herramienta del proveedor) según la documentación de TopTen.  
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del equipo.  
3. Establezca el puerto en 8888 (Plaspy usa este mismo puerto para todos los dispositivos).  
4. Seleccione UDP o TCP si el equipo solicita elección de transporte durante la configuración.  
5. Configure el APN y las credenciales GPRS de la SIM móvil que se utilizará.  
6. Aplique o guarde la configuración en el equipo y reinicie el rastreador si es necesario.  
7. Valide que el dispositivo reporta a Plaspy revisando el estado en la plataforma y usando los comandos de verificación disponibles.

## Ejemplos de comandos de configuración

Los siguientes comandos públicos se encuentran en la documentación de TopTen para configuración por SMS. Los comandos se envían al número de teléfono del dispositivo como mensajes SMS. Mantenga los marcadores de posición según sea necesario.

- Paso opcional inicial para restaurar ajustes de fábrica
```text
111111CLR
```
Etiqueta: restauración inicial opcional a valores de fábrica. Use esto solo si necesita borrar configuraciones previas.

- Configure el APN y el servidor GPRS para apuntar el rastreador a Plaspy (el ejemplo usa la IP y puerto del servidor Plaspy). Reemplace los marcadores de posición con los valores de su operador.
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:[apn],[apnu],[apnp];RPT:60;SLP:60;RUN:2;
```
Explicación:
- [apn] = nombre del APN de su operador  
- [apnu] = usuario del APN si es requerido (dejar vacío o eliminar si no se usa)  
- [apnp] = contraseña del APN si es requerida (dejar vacío o eliminar si no se usa)  
- Los parámetros RPT, SLP y RUN forman parte de la sintaxis del fabricante y controlan intervalos de reporte y ciclos según lo publicado por TopTen.

- Verificar o consultar la configuración WWW/GPRS
```text
111111WWW:
```
Este comando de verificación solicita al dispositivo que devuelva su configuración WWW/GPRS actual.

Nota: El GT08 utiliza el ID del rastreador que corresponde a los últimos 14 dígitos del IMEI que se muestran en el comando PAR. Consulte la documentación del fabricante para confirmar los formatos exactos de las respuestas a comandos.

## Notas de configuración

- Las versiones de firmware y la sintaxis de comandos pueden variar; siempre confirme los comandos con la documentación del GT08 correspondiente a su revisión de firmware.  
- El GT08 admite provisión basada en SMS como se muestra arriba; asegúrese de que el número emisor de SMS tenga permiso para gestionar el dispositivo si así lo exige la configuración.  
- Al configurar el servidor puede usar tanto el dominio d.plaspy.com como la IP 54.85.159.138; ambos deberían apuntar a Plaspy en el puerto 8888.  
- Elija UDP o TCP según la capacidad del equipo; Plaspy detectará automáticamente el protocolo después de que el dispositivo se conecte.  
- Mantenga los marcadores [apn], [apnu] y [apnp] como plantillas al preparar los comandos; reemplácelos por los valores suministrados por su operador móvil.

## Por qué usar Plaspy con esta configuración

Usar el TopTen GT08 con Plaspy ofrece a las organizaciones una vía sencilla para consolidar ubicación de vehículos, alarmas y visibilidad operativa en una sola plataforma. Al apuntar los dispositivos GT08 al servidor de Plaspy y validar los reportes, los gestores de flota y operadores pueden confiar en un endpoint de servidor consistente y en el manejo automático de protocolos para simplificar el alta y la supervisión de dispositivos.

Para saber más sobre Plaspy y las configuraciones de dispositivos compatibles visite https://www.plaspy.com. Para comandos específicos del modelo, notas de firmware e instrucciones del fabricante consulte el sitio de TopTen en http://www.t10.cn, ya que los pasos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
