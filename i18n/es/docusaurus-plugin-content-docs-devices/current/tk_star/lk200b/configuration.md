---
slug: /tk_star/lk200b/configuration
id: lk200b-configuration
sidebar_label: Configuration
title: TK-Star - LK200B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TK-Star LK200B con ajustes de servidor Plaspy y comandos SMS de ejemplo para conexión GPRS
keywords:
  - Configuración TK-Star LK200B
  - Instalación TK-Star LK200B
  - Configuración de servidor LK200B
  - Configuración GPRS LK200B
  - Configuración de rastreador Plaspy
  - Ajustes de servidor Plaspy
  - Comandos SMS para rastreador GPS
  - Configuración de seguimiento de vehículos
  - Configuración de software de seguimiento LK200B
  - Integración para seguimiento de flotas
---

# TK-Star - Configuración LK200B

Esta página describe el contexto público de configuración para usar el rastreador TK-Star LK200B con Plaspy. Explica los ajustes compartidos del servidor Plaspy a los que debe apuntar el dispositivo, muestra pasos prácticos de instalación usados en campo y recopila los comandos SMS públicos documentados para este modelo. Utilice esta guía para preparar el tracker y validar la conectividad antes de añadir dispositivos en la plataforma Plaspy.

Plaspy emplea un único endpoint y puerto compartidos para dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Los comandos mostrados aquí son la secuencia pública basada en SMS para el LK200B y deben usarse como referencia práctica junto con la documentación oficial del fabricante.

## Resumen de la configuración

El objetivo de la configuración es dejar el LK200B listo para que comunique de forma fiable la ubicación y el estado a Plaspy. En el LK200B esto suele implicar configurar el APN del operador, apuntar el dispositivo al servidor de Plaspy, seleccionar el transporte si es necesario y habilitar los intervalos de subida periódicos.

- Configure el APN y las credenciales del operador para que el rastreador tenga acceso a datos móviles.  
- Apunte el servidor GPRS del dispositivo a Plaspy usando el dominio o la IP proporcionados y el puerto compartido.  
- Establezca un intervalo de subida para que el rastreador envíe ubicaciones periódicas a Plaspy.  
- Ponga el tracker en modo de reporte GPRS y confirme la conectividad mediante SMS o los registros de la plataforma.  
- Valide que el dispositivo aparezca en Plaspy y reporte en el intervalo esperado.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on the tracker side  
- automatic protocol detection in Plaspy so you do not need to select a protocol in the platform

## Requisitos típicos antes de comenzar

- Un TK-Star LK200B con alimentación y una SIM operativa que tenga datos habilitados y opcionalmente capacidad SMS.  
- Acceso al método de configuración del proveedor que prefiera, como comandos SMS o la herramienta oficial.  
- Conocimiento de la contraseña administrativa para administración por SMS (el valor por defecto se indica en los comandos públicos abajo).  
- Información del APN del operador móvil, incluyendo nombre de APN y, si aplica, usuario y contraseña del APN.  
- Un plan para el intervalo de subida periódico y un procedimiento de prueba para confirmar que el dispositivo reporta a Plaspy.

## Cómo se conecta este tracker a Plaspy

El LK200B se configura para enviar datos GPRS al endpoint y puerto de Plaspy, de modo que Plaspy reciba reportes de posición, estado y eventos. Plaspy utiliza el puerto de red configurado y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

- El tracker envía paquetes GPRS a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.  
- El dispositivo puede usar UDP o TCP según la configuración de firmware.  
- Plaspy detecta automáticamente el protocolo del rastreador para poder parsear los mensajes entrantes.  
- Los intervalos de subida regulares permiten visibilidad continua y la recolección de trazas históricas en Plaspy.  
- Los registros en la plataforma y los mensajes de respuesta del dispositivo (cuando están habilitados) ayudan a validar una conexión exitosa.

## Flujo de configuración habitual

1. Acceda al método de configuración del fabricante, ya sea administración por SMS o la herramienta TK-Star documentada por el proveedor.  
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según su preferencia.  
3. Establezca el puerto de destino en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.  
4. Seleccione UDP o TCP en el tracker si el dispositivo requiere especificar el transporte.  
5. Aplique o guarde la configuración y cambie el dispositivo a modo de reporte GPRS si es necesario.  
6. Reinicie o apague/encienda el equipo según lo indique la guía del fabricante.  
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos de la plataforma o las entradas de telemetría recientes.

## Comandos de configuración de ejemplo

El LK200B admite configuración por SMS. Los siguientes comandos SMS públicos aparecen en la documentación del fabricante. La contraseña por defecto en estos ejemplos es 123456. Reemplace los marcadores y la contraseña si usted ha cambiado la contraseña administrativa.

- Restauración de fábrica opcional (use solo si necesita resetear a valores de fábrica):
```text
begin123456
```

- Configurar el APN del operador (reemplazar [apn] por el APN de su operador):
```text
apn123456 [apn]
```

- Establecer el usuario del APN (opcional, reemplace [apnu] con el usuario APN):
```text
apnuser123456 [apnu]
```

- Establecer la contraseña del APN (opcional, reemplace [apnp] con la contraseña APN):
```text
apnpasswd123456 [apnp]
```

- Apuntar el servidor GPRS a Plaspy usando la IP pública y el puerto:
```text
adminip123456 54.85.159.138 8888
```
También puede apuntar al dominio en lugar de la IP si el dispositivo soporta nombres de dominio.

- Establecer el intervalo de subida a 60 segundos (ajuste el número al intervalo deseado en segundos):
```text
upload123456 60
```

- Cambiar el tracker a modo GPRS (habilita el reporte por datos):
```text
gprs123456
```

Notas sobre los marcadores:
- [apn] es el nombre APN del operador móvil.  
- [apnu] es el usuario del APN si el operador lo requiere.  
- [apnp] es la contraseña del APN si el operador lo requiere.  
- Mantenga la contraseña administrativa numérica (123456) si no la ha cambiado; se usa como parte de cada cadena de comando SMS. Cambie la contraseña usando los procedimientos oficiales del dispositivo si fuera necesario.

## Observaciones sobre la configuración

- Las variaciones de firmware del fabricante pueden cambiar la sintaxis exacta de los comandos o las opciones disponibles; confirme siempre los comandos con la versión de firmware de su dispositivo.  
- Si su LK200B soporta nombres de dominio, puede usar d.plaspy.com en lugar de la IP; ambos apuntan al mismo endpoint de Plaspy.  
- Elija UDP o TCP según las condiciones de su red local y las recomendaciones del proveedor; Plaspy aceptará cualquiera y detectará el protocolo automáticamente.  
- La configuración por SMS es útil en campo cuando no dispone de la herramienta de configuración; asegúrese de usar la contraseña administrativa correcta y registre los cambios realizados.  
- Después de cambiar APN o ajustes de servidor, valide la conectividad observando el reporte en Plaspy o comprobando mensajes de acuse de recibo del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el LK200B con Plaspy ofrece una vía sencilla para centralizar la telemetría del rastreador en una sola plataforma para monitoreo, alertas e historial de rutas. Los ajustes compartidos del servidor Plaspy permiten estandarizar despliegues apuntando varios dispositivos al mismo dominio o IP y puerto, reduciendo la complejidad de configuración por unidad.

Para conocer más sobre las funciones y capacidades de Plaspy visite https://www.plaspy.com. Para detalles más actuales sobre la configuración específica del LK200B, notas de firmware y comandos oficiales verifique la documentación del fabricante en https://www.tk-star.com/ ya que las instrucciones del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
