---
slug: /topfly/solarguardx_110/configuration
id: solarguardx_110-configuration
sidebar_label: Configuration
title: TopFly - SolarGuardX 110 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TopFly SolarGuardX 110 con Plaspy usando servidor compartido y comandos SMS
keywords:
  - TopFly SolarGuardX 110
  - configuración SolarGuardX 110
  - configuración del rastreador TopFly
  - configuración Plaspy
  - ajustes de servidor rastreador GPS
  - configuración de seguimiento de activos
  - comandos SMS del dispositivo
  - configuración de seguimiento de flotas
  - configuración del endpoint del servidor
  - guía de integración de rastreadores
---

# TopFly - SolarGuardX 110 Configuración

Esta página documenta el contexto público de configuración para usar el TopFly SolarGuardX 110 con Plaspy. Se enfoca en los ajustes prácticos del servidor y en los comandos SMS suministrados por el fabricante que comúnmente se emplean para apuntar el equipo hacia Plaspy y habilitar el envío de datos. Utilice esta guía para entender lo que debe preparar antes de integrar el SolarGuardX 110 en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SolarGuardX 110 admite configuración vía SMS como se muestra abajo; sin embargo, siempre verifique cualquier acción específica del equipo con la documentación oficial de TopFly correspondiente a su versión de firmware.

## Resumen de la configuración

Configurar el SolarGuardX 110 para Plaspy prepara el dispositivo para enviar ubicación y telemetría al endpoint centralizado de Plaspy y garantiza que el rastreador pueda supervisarse desde la plataforma. El proceso de configuración normalmente establece parámetros de red, el destino de reporte y la cadencia de envío para que Plaspy pueda ingerir los datos de forma confiable.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que posiciones y eventos lleguen a su cuenta.
- Configurar el APN y acceso a la red para que esté disponible la conectividad GPRS o LTE.
- Definir el intervalo de reporte y el almacenamiento en búfer para que las actualizaciones frecuentes y el registro offline funcionen según lo esperado.
- Validar los ajustes de transporte y confirmar que el equipo se conecta correctamente a Plaspy.
- Usar el método recomendado por el fabricante, como comandos SMS o la herramienta oficial, para aplicar la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la puesta en marcha

- Dispositivo encendido y con carga accesible en la batería integrada y la carga solar si aplica.
- Tarjeta Nano SIM activa provisionada para datos y SMS según lo requiera su instalación y operador.
- Conocimiento de la contraseña de configuración del equipo; la contraseña por defecto en los comandos públicos del SolarGuardX 110 es 0000.
- Acceso al método oficial de configuración TopFly, ya sea por comandos SMS o por el software de configuración del proveedor.
- Cobertura de red LTE Cat 1 para que el dispositivo registre en la red móvil y alcance Plaspy.
- Registro de la cadencia de reporte prevista para que pueda definir valores TIMER o intervalos que cumplan sus necesidades de monitoreo.

## Cómo se conecta este rastreador a Plaspy

El SolarGuardX 110 se configura para reportar posición y telemetría al endpoint compartido y al puerto de Plaspy usando el transporte elegido. Una vez configurado, el equipo envía actualizaciones de ubicación, datos almacenados en búfer y mensajes de evento a Plaspy, donde quedan disponibles para operadores y procesos.

- El rastreador envía posición y telemetría a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- La cadencia de reporte se controla desde el equipo, por lo que las actualizaciones llegan a Plaspy según los ajustes TIMER.
- El registro en búfer del dispositivo sube los puntos almacenados a Plaspy cuando se restablece la conectividad.
- Eventos como movimiento, alarmas o disparos de entradas/salidas se transmiten a Plaspy para alertas y monitoreo.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración TopFly, ya sea por comandos SMS o por la herramienta del fabricante adecuada para su firmware.
2. Ingrese el servidor de Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 como se indica aquí.
3. Configure el puerto de destino en 8888, que es el puerto compartido utilizado por Plaspy para todos los dispositivos soportados.
4. Elija el transporte UDP o TCP si el equipo solicita una selección de transporte.
5. Configure el APN y los parámetros de red necesarios para habilitar la conectividad GPRS o LTE.
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante recomienda un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy monitorizando la conectividad del equipo y los mensajes entrantes en la plataforma.

## Comandos de configuración de ejemplo

El SolarGuardX 110 acepta comandos SMS para configuración. Los ejemplos públicos a continuación usan la contraseña del equipo 0000 que es la predeterminada. Reemplace los marcadores de APN con los valores de su operador.

- Establecer la zona horaria a UTC 0
```sms
GMT,0000,0#
```

- Configurar el APN del operador y los campos opcionales de autenticación APN
```sms
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} es el nombre del punto de acceso, {{apnu}} es el usuario del APN si se requiere y {{apnp}} es la contraseña del APN si se requiere. Deje usuario y contraseña vacíos si su operador no los solicita.

- Establecer el servidor GPRS a Plaspy usando la IP del servidor y el puerto 8888
```sms
IP,0000,54.85.159.138 8888#
```
Nota: Es posible que pueda usar d.plaspy.com en lugar de la IP dependiendo del firmware del dispositivo y del soporte DNS.

- Establecer el intervalo de actualización a 60 segundos
```sms
TIMER,0000,60:60:0:0#
```
Explicación: Este ejemplo configura la cadencia de reporte y las ranuras de temporizador relacionadas según el conjunto de comandos públicos del dispositivo. Ajuste el intervalo para cumplir los requisitos operativos.

## Notas de configuración

- La configuración vía SMS está documentada públicamente para este dispositivo, pero su instalación puede preferir la herramienta del fabricante o un método OTA según el firmware.
- Las revisiones de firmware y las variantes de hardware pueden afectar la sintaxis exacta de los comandos y el soporte DNS para nombres de dominio como d.plaspy.com.
- Elija UDP o TCP de manera deliberada; ambos son compatibles, pero el comportamiento puede variar según la red y el firmware del dispositivo.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que no es necesario cambiar el puerto por dispositivo.
- Preserve la contraseña del equipo y reemplace la contraseña por defecto 0000 cuando lo exija su política de seguridad, después de confirmar la conectividad.

## Por qué usar Plaspy con esta configuración

Usar el SolarGuardX 110 con Plaspy brinda a los equipos de operaciones visibilidad remota confiable para activos en exteriores, con bajo mantenimiento gracias a la energía solar de apoyo y un amplio registro en búfer. Configurar el rastreador para apuntar a Plaspy permite la monitorización centralizada de ubicación, eventos y registros históricos que soportan flujos de trabajo de seguridad y gestión de flotas.

Learn more about Plaspy and how it integrates with devices like the SolarGuardX 110 at https://www.plaspy.com. For the most current device specific configuration commands, firmware behavior, and manufacturer details verify setup and documentation on the official TopFly website https://www.topflytech.com/.
