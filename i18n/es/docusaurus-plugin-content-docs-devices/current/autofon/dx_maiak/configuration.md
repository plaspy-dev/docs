---
slug: /autofon/dx_maiak/configuration
id: dx_maiak-configuration
sidebar_label: Configuration
title: AutoFon - DX Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon DX Маяк y cómo apuntar el rastreador a Plaspy para monitoreo e informes de eventos
keywords:
  - Configuración AutoFon DX Маяк
  - Configuración AutoFon DX Mayak
  - DX Mayak Plaspy
  - Configuración rastreador GPS AutoFon
  - Configuración seguimiento de vehículos
  - Configuración servidor del rastreador
  - Guía de compatibilidad Plaspy
  - Configuración rastreador GPRS
  - Configuración plataforma de rastreo GPS
  - Lista de verificación conectividad del rastreador
---

# AutoFon - DX Маяк Configuración

Esta página explica el contexto público de configuración para utilizar el rastreador AutoFon DX Маяк con la plataforma de monitoreo Plaspy. Se centra en los ajustes de servidor prácticos y en el flujo de trabajo necesario para dirigir el dispositivo a Plaspy, de modo que la plataforma reciba los datos de ubicación y los eventos.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que usted utilice, por lo que esta página se enfoca en los parámetros públicos comunes y las acciones prácticas que deberá realizar al configurar el DX Маяк para Plaspy.

## Resumen de configuración

Preparar un AutoFon DX Маяк para su uso con Plaspy implica configurar el rastreador para que envíe sus datos al endpoint de Plaspy, validar la conectividad y asegurarse de que el dispositivo sea visible y reporte en su cuenta de Plaspy. Utilice las herramientas del fabricante o los comandos SMS documentados por AutoFon para aplicar estos ajustes cuando estén disponibles.

- Configure el rastreador para enviar datos GPRS al dominio o IP del servidor de Plaspy para que la información llegue a la plataforma
- Seleccione el transporte (UDP o TCP) si el dispositivo exige elegir uno y configure el puerto común que usa Plaspy
- Verifique el APN y la conectividad de la SIM para que el dispositivo pueda establecer una sesión GPRS hacia Internet
- Guarde y aplique los ajustes, luego confirme que el dispositivo aparece como en línea en Plaspy
- Valide que los informes de ubicación, movimiento y eventos estén llegando desde el DX Маяк a la plataforma Plaspy

## Ajustes del servidor de Plaspy

Al configurar el DX Маяк para Plaspy, use los siguientes ajustes públicos del servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888 depending on device configuration options
- Plaspy automatically detects the tracker protocol so all devices can use the same port and be recognized by the platform

## Requisitos previos

- El dispositivo con alimentación y accesible para configuración mediante la cuenta web de AutoFon o la interfaz de comandos por SMS
- Tarjeta SIM 2G activa con datos habilitados y ajustes APN correctos si utilizará reporte por GPRS
- Acceso al método oficial de configuración de AutoFon o a las herramientas de instalación para el DX Маяк
- Conocimiento del número telefónico del dispositivo para comandos vía SMS si va a configurar por ese método
- Una cuenta en Plaspy o una configuración de monitoreo donde pueda verificar que el dispositivo aparece en línea después de la configuración

## Cómo se conecta este rastreador a Plaspy

El DX Маяк envía coordenadas y registros de eventos a través de la red 2G usando GPRS hacia un servidor de monitoreo. Al configurarlo para Plaspy, el dispositivo reporta al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir su telemetría y presentarla en la interfaz.

- El rastreador se configura para enviar paquetes GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Puede elegir UDP o TCP como transporte si el DX Маяк ofrece esa opción
- Plaspy detecta automáticamente el protocolo del rastreador por lo que el mismo puerto funciona para muchos tipos de dispositivos
- Los datos de eventos, como ubicación, disparos del acelerómetro, estado de batería y potencia de señal, se reenvían a Plaspy cuando el rastreador transmite
- Tras una configuración exitosa, el dispositivo aparecerá en línea y reportará eventos en la vista de monitoreo de Plaspy

## Flujo de configuración habitual

1. Prepare físicamente el DX Маяк y asegúrese de que tenga alimentación y una SIM 2G activa con acceso de datos.
2. Acceda al método de configuración oficial de AutoFon o al software correspondiente, como la cuenta personal de monitoreo o el conjunto de comandos SMS del dispositivo.
3. Ingrese el endpoint del servidor de Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 cuando la configuración solicite la dirección del servidor.
4. Configure el puerto del dispositivo en 8888 como puerto destino para el reporte GPRS.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte; seleccione el protocolo que prefiera su instalador y que soporte el equipo.
6. Aplique o guarde la configuración en la interfaz del dispositivo o envíe el comando SMS correspondiente para confirmar los ajustes.
7. Reinicie el dispositivo si el fabricante o la herramienta de configuración lo requiere.
8. Valide que el DX Маяк reporta a Plaspy comprobando el estado del dispositivo y los mensajes entrantes en su cuenta de monitoreo Plaspy.

## Ejemplos de comandos de configuración

El DX Маяк puede configurarse desde las herramientas web de AutoFon o mediante comandos SMS según la versión de firmware y las herramientas del distribuidor. La sintaxis y la secuencia exactas de los comandos dependen de la versión de firmware y del conjunto de comandos SMS de AutoFon, documentación que provee el fabricante. Debido a que los formatos de comando varían, consulte la guía oficial de configuración de AutoFon para DX Маяк o la lista de comandos suministrada por su distribuidor para obtener las plantillas SMS o los pasos de configuración precisos necesarios para apuntar el dispositivo a:

- d.plaspy.com o 54.85.159.138
- port 8888
- UDP o TCP transport según sea necesario

Si necesita comandos por SMS o una lista de ejemplo, refiérase a la documentación de AutoFon para el DX Маяк o solicite el conjunto de comandos a su distribuidor. Plaspy aceptará conexiones en el puerto 8888 y detectará automáticamente el protocolo del dispositivo una vez que el rastreador esté apuntado a la dirección del servidor de Plaspy.

## Notas de configuración

- Las diferencias de firmware y las personalizaciones del proveedor pueden cambiar los comandos exactos y los menús del DX Маяк; verifique siempre las notas del firmware del dispositivo.
- Seleccionar TCP frente a UDP puede afectar el comportamiento de entrega y la retransmisión; elija el transporte que soporte su política de instalación y el firmware del dispositivo.
- El DX Маяк admite modos de operación continuo y de sueño por intervalos; el modo continuo consume más energía pero mantiene el equipo listo para recibir comandos.
- Si configura el dispositivo por SMS, guarde un registro de los formatos de comando utilizados para facilitar la resolución de problemas y las auditorías.
- Para rastreadores que operan en modos de sueño profundo o por intervalos, confirme los horarios de reporte para que Plaspy muestre la cadencia de actualizaciones esperada.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon DX Маяк con Plaspy ofrece una forma directa de centralizar la recolección de ubicación, eventos derivados del acelerómetro y otras telemetrías reportadas en una plataforma de monitoreo. Configurar el rastreador para que apunte al endpoint compartido de Plaspy hace que su dispositivo sea reconocido por la plataforma sin requerir puertos específicos por dispositivo, ya que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific setup instructions, firmware behavior, and manufacturer details for the AutoFon DX Маяk please verify information on the official AutoFon website https://www.autofon.ru/ as manufacturer documentation may change over time.
