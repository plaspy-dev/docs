---
slug: /cantrack/gt02/configuration
id: gt02-configuration
sidebar_label: Configuration
title: CanTrack - GT02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CanTrack GT02 y reportar a Plaspy con comandos SMS y ajustes de servidor
keywords:
  - Configuración CanTrack GT02
  - Instalación CanTrack GT02
  - Configuración servidor GT02
  - Configuración GT02 Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreo vehicular
  - Rastreo de flotas GT02
  - Configuración SMS GT02
  - Configuración rastreador GPRS
  - Manual CanTrack GT02
---

# CanTrack - Configuración GT02

Esta página documenta el contexto público de configuración para usar el CanTrack GT02 con la plataforma de rastreo Plaspy. Resume los ajustes y comandos públicos prácticos que se utilizan comúnmente para apuntar un rastreador GT02 a Plaspy y validar la conectividad. El GT02 es un rastreador vehicular que usa GSM GPRS y GPS y permite enviar la ubicación por SMS o en tiempo real vía GPRS a un servidor en Internet; esta guía muestra cómo se suelen dirigir esas capacidades hacia Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Los comandos de ejemplo en esta página provienen de patrones públicos de configuración por SMS del GT02 e incluyen una contraseña por defecto mostrada en material público del equipo. Verifique siempre los pasos específicos del dispositivo con la documentación oficial del fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo al configurar un CanTrack GT02 para Plaspy es preparar el equipo para que envíe su ubicación y estado al punto final y puerto compartidos de Plaspy, de modo que el dispositivo sea visible y gestionable dentro de la plataforma. La configuración normalmente incluye definir la contraseña del dispositivo si es necesario, aplicar el APN correcto para datos móviles y apuntar el equipo al servidor de Plaspy usando el método de transporte indicado.

- Configure el equipo para reportar ubicación y eventos a los ajustes del servidor de Plaspy
- Defina el APN y las credenciales GPRS necesarias para que el rastreador use datos móviles
- Elija el protocolo de transporte y establezca el puerto común de Plaspy utilizado por todos los dispositivos
- Valide la conectividad y confirme que el rastreador aparece en Plaspy después de la configuración
- Use SMS o la herramienta del fabricante para realizar estos pasos públicos según la disponibilidad

## Ajustes del servidor de Plaspy

- Ingrese el dominio del servidor d.plaspy.com donde el rastreador solicita el nombre del host del servidor
- La IP del servidor 54.85.159.138 es el punto final de Plaspy que también puede usarse si se requiere una IP
- El puerto 8888 es el puerto de Plaspy utilizado por todos los dispositivos en la plataforma
- Las opciones de transporte admiten UDP o TCP en el puerto 8888 según su preferencia de rastreador
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al punto final compartido

## Requisitos habituales antes de la configuración

- Un rastreador GT02 alimentado con batería interna cargada o conectado a la alimentación del vehículo
- Una tarjeta SIM operativa con un plan de datos móviles activo y el APN correcto del operador
- Cobertura GSM y disponibilidad de GPRS en el lugar de instalación
- Acceso a los comandos SMS del fabricante o a la herramienta de configuración del GT02
- Conocimiento de la contraseña del dispositivo; el ejemplo público usa la contraseña por defecto 123456
- Un medio para recibir respuestas de confirmación por SMS o verificar el reporte del dispositivo en Plaspy

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GT02 envía telemetría de ubicación y eventos por GPRS al punto final y puerto configurados para que Plaspy pueda recibir y procesar los datos. Plaspy recibe estos reportes en un punto final y puerto compartidos y detecta automáticamente el protocolo utilizado por el rastreador.

- El rastreador se configura para reportar al punto final y puerto compartidos de Plaspy
- Los datos se transmiten desde el GT02 a Plaspy por GPRS usando UDP o TCP según lo seleccionado
- Plaspy recibe la telemetría y detecta automáticamente el protocolo del dispositivo para su parseo
- Los reportes exitosos permiten ubicación en vivo, alertas de eventos e historial dentro de Plaspy
- La verificación se realiza revisando confirmaciones por SMS o comprobando el estado del dispositivo en Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o a su software, o prepárese para enviar comandos SMS si el equipo lo soporta
2. Configure el APN del dispositivo y las credenciales GPRS necesarias para habilitar datos móviles
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 según la interfaz de configuración del rastreador
4. Establezca el puerto 8888 para la conexión al servidor
5. Seleccione UDP o TCP si el dispositivo solicita elegir el protocolo de transporte
6. Aplique o guarde la configuración en el equipo y reinicie el rastreador si es necesario
7. Valide que el equipo reporte a Plaspy revisando el estado del dispositivo en la plataforma o confirmando respuestas SMS del rastreador

## Comandos de configuración de ejemplo

El GT02 puede configurarse enviando mensajes SMS con comandos. A continuación se muestran comandos de ejemplo públicos con estilo del fabricante. La muestra utiliza la contraseña por defecto del dispositivo 123456 tal como aparece en material público. Use estos comandos en el orden indicado al aplicar una configuración inicial.

- Comando opcional para restaurar a configuración de fábrica
```text
#begin#123456#
```
Este comando restaura la configuración de fábrica y normalmente se usa solo cuando es necesario durante la provisión inicial.

- Establecer la zona horaria a UTC 0
```text
#timezone#123456#W#0#00#
```

- Configurar el APN del operador
```text
#apn#123456#[apn]#[apnu]#[apnp]#
```
Placeholders:
- [apn] es el nombre del APN del operador móvil
- [apnu] es el usuario del APN si el operador lo requiere
- [apnp] es la contraseña del APN si el operador lo requiere
Si el usuario o la contraseña no son necesarios, algunos firmwares aceptan valores vacíos o los placeholders pueden omitirse según la sintaxis del dispositivo.

- Establecer el servidor GPRS a Plaspy
```text
#IP#123456#54.85.159.138#8888#
```
Esto configura el dispositivo para reportar al servidor de Plaspy en la IP y puerto 8888. Puede sustituir d.plaspy.com cuando el rastreador acepte un nombre de host en lugar de una IP.

- Verificar o consultar ajustes usando el comando de verificación mostrado en material público
```text
TCP
```
Algunas variantes del GT02 responden con la configuración de red o conexión actual cuando se les consulta mediante un SMS corto de verificación como el ejemplo anterior. La palabra clave exacta y el formato de la respuesta pueden variar según el firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis SMS y los comandos disponibles; confirme siempre los formatos exactos con la documentación del fabricante
- El GT02 admite configuración vía SMS según ejemplos públicos, pero algunas instalaciones usan software o herramientas de configuración del fabricante en su lugar
- Si puede elegir, UDP o TCP se seleccionan según el comportamiento de red y la preferencia; Plaspy acepta ambos transportes en el mismo puerto
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo cuando llegan datos
- Mantenga la contraseña del dispositivo segura y cámbiela desde la predeterminada si su política de seguridad lo requiere

## Por qué usar Plaspy con esta configuración

Configurar un CanTrack GT02 para reportar a Plaspy ofrece visibilidad sencilla de la ubicación y el estado del vehículo usando un punto final de servidor ampliamente compatible y un puerto común. Para gestores de flota y administradores, usar Plaspy con un ajuste de servidor consistente simplifica el despliegue y la supervisión de muchos dispositivos GT02 y otros tipos de equipos.

Learn more about Plaspy and how it handles device connections and fleet visibility at https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation instructions for the CanTrack GT02 verify details on the manufacturer website https://www.cantrackgps.com/ as methods and firmware behavior can change over time.
