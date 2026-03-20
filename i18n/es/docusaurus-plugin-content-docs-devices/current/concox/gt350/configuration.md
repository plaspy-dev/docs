---
slug: /concox/gt350/configuration
id: gt350-configuration
sidebar_label: Configuration
title: Concox - GT350 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox GT350 con ajustes de servidor Plaspy y comandos SMS GPRS comunes
keywords:
  - Concox GT350
  - configuración GT350
  - configuración Concox GT350
  - GT350 Plaspy
  - configuración servidor GT350
  - configuración rastreador GPS Concox
  - configuración SMS Concox GT350
  - ajustes GPRS GT350
  - configuración rastreador personal Concox
  - configuración software seguimiento GT350
---

# Concox - Configuración del GT350

Esta página describe el contexto público de configuración para utilizar el rastreador personal Concox GT350 con Plaspy. Reúne los ajustes de servidor prácticos y los comandos SMS GPRS comúnmente publicados para el GT350, de modo que pueda preparar el dispositivo para reportar ubicación y estado a Plaspy. Utilice esta guía junto con la documentación oficial de Concox para instrucciones específicas del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GT350 admite configuración por SMS para los parámetros GPRS y los puntos finales del servidor, por lo que esta página destaca los comandos SMS más habituales y los valores estándar del servidor de Plaspy que debe aplicar.

## Resumen de la configuración

Configurar el GT350 para Plaspy prepara el rastreador para establecer un canal de reporte persistente hacia los servidores de Plaspy y para aparecer como un dispositivo activo en la plataforma. El objetivo es garantizar el APN y los parámetros GPRS correctos, apuntar el rastreador a Plaspy y verificar el comportamiento de reporte.

- Proporcione al dispositivo las credenciales APN correctas para que pueda abrir datos GPRS.
- Configure el GT350 para usar Plaspy como su servidor GPRS, indicando el dominio o la IP y el puerto compartido.
- Establezca un intervalo de reporte regular para que las actualizaciones de ubicación se envíen a Plaspy.
- Habilite GPRS en el dispositivo y verifique los ajustes mediante una consulta de estado.
- Valide la conectividad confirmando que el rastreador informe a Plaspy y aparezca en la plataforma.

## Ajustes del servidor de Plaspy

Al configurar el GT350 para su uso con Plaspy, utilice los siguientes valores públicos del servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device preference
- Plaspy automatically detects the tracker protocol and all devices use the same port

Estos valores son los puntos finales públicos de Plaspy que debe aplicar en el rastreador para que alcance el servidor de ingestión de Plaspy.

## Requisitos habituales antes de la configuración

- Un GT350 con batería cargada y alimentación funcionando.
- Una tarjeta SIM activa con datos habilitados y la información APN correcta del operador móvil.
- Capacidad para enviar y recibir SMS hacia el dispositivo para la configuración basada en SMS (el GT350 admite comandos SMS).
- Acceso a las instrucciones oficiales de Concox o a la herramienta del proveedor para cualquier paso de configuración por software.
- Registro del IMEI del dispositivo o el identificador que utilice Plaspy para el registro del equipo.
- Conocimientos básicos para elegir el modo de transporte UDP o TCP si el dispositivo requiere selección explícita.

## Cómo se conecta este rastreador a Plaspy

El GT350 se configura para reportar ubicación y eventos del dispositivo al punto final del servidor de Plaspy y utiliza el puerto compartido de Plaspy para que la plataforma pueda recibir e interpretar la telemetría. La detección automática de protocolo de Plaspy elimina la necesidad de seleccionar un protocolo en muchos casos, pero el rastreador debe apuntar al dominio o IP y al puerto correctos.

- El rastreador abre una conexión GPRS usando el APN del operador y luego se conecta al servidor Plaspy configurado.
- Las actualizaciones de ubicación se envían según el intervalo TIMER configurado al punto final de Plaspy.
- Plaspy recibe mensajes en el puerto 8888 e identifica automáticamente el protocolo del dispositivo.
- Eventos como SOS o cruces de geocerca se transmiten a la plataforma una vez que el dispositivo está en línea.
- Los administradores pueden confirmar la visibilidad del dispositivo dentro de Plaspy tras una configuración exitosa.

## Flujo típico de configuración

1. Acceda al método de configuración por SMS o por software oficial de Concox, según lo documentado por el fabricante.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el comando SERVER.
3. Establezca el puerto 8888 para la entrada del servidor del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Configure el APN de su operador móvil y habilite GPRS en el GT350.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo recomienda.
7. Verifique que el dispositivo informe a Plaspy y aparezca en la plataforma, usando el comando de verificación GPRSSET o comprobando la actividad del dispositivo en Plaspy.

## Ejemplos de comandos de configuración

El GT350 soporta configuración vía SMS. A continuación se muestran los comandos públicos más comunes publicados para el dispositivo. Conserve los marcadores como {{apn}}, {{apnu}} y {{apnp}} cuando aplique las credenciales de su operador.

- Reinicio opcional a configuración de fábrica (usar solo si necesita restaurar valores por defecto):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace {{apn}}, {{apnu}}, {{apnp}} con su APN, usuario y contraseña si se requieren. Si no necesita usuario ni contraseña, incluya solo el APN.
```text
APN,{{apn}}{{apnu ? ',{{apnu}}' : ''}}{{apnp ? ',{{apnp}}' : ''}}#
```
(Ejemplo práctico si solo se requiere APN)
```text
APN,internet#
```

- Establecer el servidor GPRS usando el dominio de Plaspy y el puerto:
```text
SERVER,1,d.plaspy.com,8888,0#
```
Alternativamente utilice la IP del servidor Plaspy:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos. El dispositivo acepta cualquiera de las siguientes formas:
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Habilitar modo GPRS:
```text
GPRSON,1#
```

- Consultar parámetros GPRS actuales:
```text
GPRSSET#
```

Notas sobre los marcadores de posición y uso:
- {{apn}} es la cadena APN del operador móvil necesaria para la conectividad de datos.
- {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN cuando el operador requiere credenciales.
- Los ejemplos del comando SERVER muestran tanto el dominio (d.plaspy.com) como la IP numérica (54.85.159.138). Cualquiera de las dos formas es válida para apuntar el rastreador a Plaspy y ambas usan el puerto 8888.

## Notas de configuración

- La versión de firmware y las variantes regionales pueden cambiar el comportamiento de los comandos; confirme la sintaxis exacta en el manual del dispositivo o con el soporte de Concox.
- Este ejemplo de configuración del GT350 está basado en SMS, por lo que asegúrese de que la SIM pueda enviar y recibir SMS y tenga datos habilitados para GPRS.
- Elija UDP o TCP según la preferencia del instalador o el requisito del dispositivo. Plaspy admite ambos y detectará el protocolo automáticamente.
- Use los comandos SERVER mostrados arriba para apuntar el rastreador a d.plaspy.com o a 54.85.159.138 y siempre establezca el puerto en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos.
- Mantenga las credenciales APN actualizadas y verifíquelas con el operador móvil antes de comenzar a solucionar problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el Concox GT350 con Plaspy ofrece a las organizaciones una forma sencilla de consolidar la telemetría de rastreadores personales en una única plataforma para monitoreo, alertas y supervisión operativa. Configurar el dispositivo para reportar a Plaspy mediante los ajustes de servidor compartidos facilita poner en línea los equipos GT350 y hacerlos visibles en la plataforma.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and technical specifications please verify setup details on the manufacturer site https://www.iconcox.com/ as methods and behavior can change with firmware or hardware revisions.
