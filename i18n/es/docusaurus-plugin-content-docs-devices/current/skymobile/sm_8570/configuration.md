---
slug: /skymobile/sm_8570/configuration
id: sm_8570-configuration
sidebar_label: Configuration
title: SkyMobile - SM-8570 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el SkyMobile SM-8570 a Plaspy con ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración SkyMobile SM-8570
  - Configuración SM 8570
  - Configuración rastreador SkyMobile
  - Configuración SM 8570 Plaspy
  - Configuración de dispositivo Plaspy
  - Configuración servidor GPS
  - Comandos SMS SM 8570
  - Configuración plataforma de rastreo GPS
  - Configuración rastreo de vehículos
  - Guía integración de rastreador
---

# SkyMobile - Configuración SM-8570

Esta página documenta el contexto público de configuración para usar el rastreador GPS SkyMobile SM-8570 con Plaspy. Se centra en los ajustes prácticos y los comandos disponibles públicamente para que usted pueda apuntar el dispositivo a los servidores de Plaspy y validar la conectividad. La descripción del equipo señala que el SM-8570 es un localizador GPS GSM cuatribanda con buena recepción, capacidad SMS y compatibilidad con el protocolo @Track, lo que aclara las opciones de configuración disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador usado por el SM-8570. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, en esta página se incluyen los comandos SMS públicos del modelo y se explica cómo se relacionan con los ajustes del servidor de Plaspy.

## Resumen de la configuración

Este proceso prepara el SM-8570 para comunicarse con Plaspy configurando el APN de la operadora, ajustando el servidor y puerto GPRS, y habilitando las opciones de reporte que permiten que el dispositivo sea visible en la plataforma Plaspy.

- Configure el APN del operador para que el dispositivo pueda usar datos móviles para reportes.
- Apunte los ajustes del servidor GPRS al servidor de Plaspy para que la ubicación y los eventos se envíen a la plataforma.
- Establezca intervalos de reporte y reporte de eventos para que el dispositivo proporcione actualizaciones oportunas.
- Opcionalmente active el SOS y otras teclas funcionales para reportar alertas específicas a Plaspy.
- Deshabilite o ajuste los modos de ahorro de energía para que el dispositivo reporte según lo requiera su caso de uso.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos antes de la configuración

- Un SM-8570 cargado y con energía, con pruebas funcionales básicas completadas.
- Una tarjeta SIM activa provisionada para datos y SMS según lo requiera el dispositivo y su red.
- Capacidad para enviar comandos de configuración por SMS o acceso al software o herramienta oficial del fabricante.
- Conocimiento de la contraseña del dispositivo para configuración por SMS (el ejemplo público aquí usa la contraseña por defecto SM8570).
- Valores de APN confirmados con el operador para completar los marcadores {{apn}}, {{apnu}} y {{apnp}}.
- Acceso a la documentación del fabricante o soporte del proveedor para comportamientos específicos del firmware.

## Cómo se conecta este rastreador a Plaspy

El SM-8570 se configura para enviar datos de ubicación y eventos a un endpoint centralizado de Plaspy. Los ajustes del servidor GPRS del dispositivo se apuntan al servidor y puerto compartidos de Plaspy para que la plataforma reciba las actualizaciones de rastreo y las muestre.

- El dispositivo envía paquetes de ubicación a d.plaspy.com en el puerto 8888.
- Plaspy acepta conexiones en el mismo puerto para todos los dispositivos soportados y detecta el protocolo automáticamente.
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo y las consideraciones de red.
- Se pueden habilitar eventos como SOS o reportes por movimiento para reenviar alertas a Plaspy.
- Plaspy agrega los datos del dispositivo para visibilidad, informes y monitoreo operativo.

## Proceso típico de configuración

1. Acceda al método o software de configuración oficial del fabricante; para muchas instalaciones del SM-8570 esto es mediante comandos SMS o una herramienta del proveedor.
2. Ingrese el nombre de host del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del servidor GPRS.
3. Establezca el puerto del servidor en 8888 según lo requiere Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de transporte.
5. Configure el APN y las credenciales del operador para que el dispositivo disponga de conectividad de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del proveedor lo requieren.
7. Valide que el SM-8570 reporte a Plaspy y aparezca en la plataforma; ajuste los intervalos de reporte o la configuración de eventos según sea necesario.

## Ejemplos de comandos de configuración

El SM-8570 puede configurarse enviando comandos SMS al dispositivo. Los ejemplos públicos siguientes preservan la secuencia mostrada en ejemplos del fabricante. La contraseña del dispositivo en estos comandos es la por defecto SM8570. Reemplace los marcadores {{apn}}, {{apnu}} y {{apnp}} con el APN, usuario y contraseña de su operador según corresponda.

- Establecer el APN del operador (reemplace los marcadores según sea necesario)
```text
AT+GTBSI=SM8570,{{apn}},{{apnu}},{{apnp}},,,,,0002$
```

- Configurar el servidor GPRS para apuntar a Plaspy (se indican dominio e IP)
```text
AT+GTSRI=SM8570,4,,,d.plaspy.com,8888,54.85.159.138,8888,,0,1,,,,,0003$
```

- Establecer el intervalo de actualización de reportes
```text
AT+GTFRI=SM8570,1,1,,,0000,2359,300,300,,,1F,,,,,,,,,0007$
```

- Activar el reporte del botón SOS
```text
AT+GTFKS=SM8570,1,,1,1,1,,,ffff$
```

- Deshabilitar o ajustar el modo de ahorro de energía
```text
AT+GTNMD=SM8570,8,3,2,3,1800,1800,,,,,,,,0005$
```

Notas sobre marcadores y uso:
- {{apn}} es la cadena APN del operador necesaria para datos GPRS.
- {{apnu}} es el usuario del APN si el operador lo requiere; dejar vacío si no es necesario.
- {{apnp}} es la contraseña del APN si el operador la solicita.
- Envíe cada comando como SMS al dispositivo desde un número autorizado, o use la herramienta de configuración oficial si está disponible.
- Mantenga la contraseña por defecto SM8570 si su dispositivo todavía la usa; cambie la contraseña siguiendo la guía del proveedor después de la configuración si lo considera necesario.

## Notas sobre la configuración

- Las versiones de firmware del fabricante y las revisiones de hardware pueden modificar la sintaxis de los comandos o los parámetros disponibles; confirme siempre con la documentación del proveedor.
- El SM-8570 soporta la configuración por SMS como se muestra; algunos instaladores prefieren una herramienta del proveedor o configuración por USB/serial cuando está disponible.
- La elección entre UDP o TCP puede afectar la fiabilidad y el comportamiento en la red; pruebe ambos transportes en su entorno de despliegue.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y la plataforma detecta automáticamente el protocolo del rastreador al conectarse.
- Mantenga un registro de las contraseñas y los pasos de configuración realizados para facilitar el mantenimiento y la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Usar el SM-8570 con Plaspy ofrece a las organizaciones una forma sencilla de capturar posiciones GPS y datos de eventos desde un rastreador GSM cuatribanda probado y consolidar esos datos en una única plataforma para monitoreo e informes. Las opciones públicas de configuración por SMS facilitan las instalaciones en campo cuando no están disponibles las herramientas del proveedor, mientras que la detección automática de protocolos de Plaspy y los ajustes de servidor compartidos simplifican la integración.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Las especificaciones del fabricante, el comportamiento del firmware y los procedimientos de configuración pueden cambiar con el tiempo, por lo que verifique los detalles específicos del dispositivo en el sitio de SkyMobile http://www.skymobile.com.co.
