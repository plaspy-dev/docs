---
slug: /coban/bn_311c/configuration
id: bn_311c-configuration
sidebar_label: Configuration
title: Coban - BN-311C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban BN-311C con ajustes de servidor Plaspy y comandos SMS
keywords:
  - configuración Coban BN-311C
  - instalación Coban BN-311C
  - BN-311C Plaspy
  - configuración rastreador Plaspy
  - configuración de rastreador GPS
  - configuración rastreador Coban
  - ajustes de servidor BN-311C
  - configuración servidor Plaspy
  - configuración rastreador GSM GPRS
  - comandos SMS de configuración
---

# Coban - BN-311C Configuración

Esta página documenta el contexto público de configuración para utilizar el Coban BN-311C con Plaspy. Reúne los ajustes de servidor y los comandos SMS prácticos que se usan comúnmente para apuntar un BN-311C al servicio de rastreo de Plaspy y para validar la conectividad y los reportes básicos después de la instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante para configurar un BN-311C pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se centra en los valores públicos y los comandos SMS conocidos para la configuración inicial, recomendando que usted verifique cualquier diferencia específica del equipo con el fabricante.

## Visión general de la configuración

El objetivo del proceso de configuración es preparar el BN-311C para comunicarse de forma fiable con la plataforma Plaspy y validar que los reportes de posición y alarmas se reciben correctamente. Los comandos y ajustes aquí incluidos son los comandos SMS públicos que se usan habitualmente para la provisión inicial, la configuración del APN y servidor, y una cadencia básica de reportes.

- Configure el APN y los parámetros GPRS para que el equipo pueda intercambiar datos con Plaspy.
- Apunte el dispositivo al endpoint del servidor Plaspy usando la dirección pública o la IP y el puerto compartido que utiliza Plaspy.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo o el operador lo requieren.
- Valide los reportes y use el comando de verificación para confirmar que los ajustes están activos.
- Opcionalmente active mejoras de protocolo como reporte extendido de sensores si el firmware lo soporta.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the same server endpoint and port work for supported devices
- Note: Plaspy uses the same port for all supported devices to simplify device provisioning

## Requisitos típicos antes de la configuración

- Una unidad BN-311C con alimentación y acceso a su arnés de cableado y los accesorios de instalación necesarios.
- Una tarjeta SIM activa con plan de datos y las credenciales APN correctas del operador móvil.
- Capacidad para enviar y recibir SMS hacia el dispositivo para la configuración basada en SMS (el BN-311C admite configuración por SMS).
- La contraseña por defecto del dispositivo (usada en los ejemplos) si no la ha cambiado desde los valores de fábrica.
- Conocimientos básicos del APN, nombre de usuario APN y contraseña APN proporcionados por su operador móvil.
- Acceso a la documentación del fabricante o a la herramienta de instalador para notas específicas de firmware y opciones avanzadas.

## Cómo se conecta este equipo a Plaspy

El BN-311C envía reportes de posición GNSS, alarmas y mensajes de estado por GSM/GPRS a Plaspy. Cuando está configurado para reportar a Plaspy usando los ajustes públicos de servidor, la plataforma recibe estos mensajes y los muestra como ubicaciones en vivo, eventos y telemetría.

- El dispositivo se apunta al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888 para el reporte.
- El transporte puede ser UDP o TCP dependiendo de la preferencia del instalador o de la capacidad del firmware; ambos son compatibles en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes para que el dispositivo aparezca correctamente en la plataforma.
- Las alarmas y los eventos de control remoto (por ejemplo acciones de inmovilizador en el modelo tipo C) se entregan a Plaspy como eventos accionables.
- Use el comando SMS de verificación para confirmar que el dispositivo está reportando al endpoint de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el BN-311C (comandos SMS como los indicados abajo o una herramienta aprobada por el proveedor).
2. Establezca el APN y las credenciales APN del operador móvil para que GPRS funcione.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del equipo.
4. Configure el puerto del servidor en 8888 y tenga en cuenta que Plaspy usa el mismo puerto en los dispositivos compatibles.
5. Elija UDP o TCP como transporte si el firmware del equipo requiere una selección explícita.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo lo solicita.
7. Valide que el dispositivo reporta a Plaspy usando el comando de verificación y confirmando la visibilidad en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El BN-311C admite configuración por SMS. Los comandos siguientes son los comandos SMS públicos que se usan comúnmente para la configuración inicial. La contraseña por defecto del equipo utilizada en estos ejemplos es 123456. Mantenga los marcadores de posición tal como aparecen y reemplace con las credenciales de su operador donde se requiera.

- Reinicio de fábrica inicial opcional (úselo solo cuando sea necesario)
```text
begin123456
```

- Ajustar la zona horaria a UTC+0
```text
time zone123456 0
```

- Configurar el APN de su operador móvil
```text
apn123456 [apn]
```
Reemplace [apn] por la cadena APN de su operador.

- Configurar el nombre de usuario y la contraseña del APN
```text
up123456 [apnu] [apnp]
```
Reemplace [apnu] y [apnp] por el nombre de usuario y la contraseña del APN si su operador los requiere. Si no son necesarios, deje los marcadores de posición vacíos según corresponda.

- Configurar el servidor GPRS usando la IP y el puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
Este comando apunta el rastreador a la IP del servidor Plaspy y al puerto compartido 8888. También puede usar el dominio d.plaspy.com en firmware o herramientas que acepten nombres de dominio.

- Establecer un intervalo típico de actualización de posición (formato de ejemplo usado por este firmware)
```text
fix060s060s***n123456
```
Este comando es un ejemplo de configuración de fijaciones periódicas. Mantenga la contraseña de fábrica en el comando. Los formatos exactos de intervalo pueden variar según el firmware.

- Cambiar al modo de reporte GPRS (se muestran dos formas; use la que soporte su firmware)
```text
gprs123456,1,1
```
o
```text
gprs123456
```
Una forma habilita el modo GPRS con parámetros, la otra es un comando más sencillo para habilitarlo. Use la variante que soporte el firmware de su equipo.

- Verificar la configuración actual
```text
check123456
```
Este comando solicita un informe de estado del equipo para confirmar los ajustes.

- Habilitar modo de protocolo extendido para mejorar el reporte de combustible o estado de sensores digitales
```text
protocol123456 18
```
Este comando establece el modo de protocolo 18, que puede habilitar reportes mejorados de ciertos estados de sensores en firmware compatible.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos SMS y los parámetros disponibles; siempre verifique los formatos de comando con la documentación del fabricante para su unidad.
- La configuración por SMS es un método común y práctico para la provisión del BN-311C, pero algunos instaladores prefieren herramientas del proveedor o provisionamiento OTA cuando está disponible.
- Elija UDP o TCP según sus necesidades operativas; UDP suele ser más liviano mientras que TCP puede ofrecer mayor fiabilidad en la entrega ordenada dependiendo de las condiciones de red y el comportamiento del firmware.
- Mantenga la contraseña del dispositivo segura y cámbiela desde el valor de fábrica cuando sea apropiado por razones de seguridad y control administrativo.
- El comando adminip anterior usa la IP y el puerto de Plaspy; también puede ingresar d.plaspy.com cuando el rastreador soporte nombres DNS.

## Por qué usar Plaspy con esta configuración

Usar el BN-311C con Plaspy ofrece a operadores de vehículos pequeños y motocicletas una vía sencilla para obtener ubicación en vivo, alertas de eventos y monitoreo básico de flotas, aprovechando la detección automática de protocolos de la plataforma y el enfoque de endpoint de servidor compartido. El compacto BN-311C reporta posiciones GNSS y alarmas a Plaspy para que usted pueda monitorear rutas, recibir alertas en tiempo real y ejecutar flujos de control remoto como la inmovilización cuando sea necesario.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official commands for the BN-311C consult the manufacturer website at https://www.coban.net/ as device behavior and configuration methods can change over time.
