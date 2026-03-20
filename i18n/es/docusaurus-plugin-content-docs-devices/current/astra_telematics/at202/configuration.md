---
slug: /astra_telematics/at202/configuration
id: at202-configuration
sidebar_label: Configuration
title: Astra Telematics - AT202 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Astra Telematics AT202 para usar con Plaspy, con ajustes de servidor y comandos SMS
keywords:
  - Configuración Astra Telematics AT202
  - Configuración AT202 Plaspy
  - Configurar servidor Astra AT202
  - Configuración rastreador AT202
  - Configuración SMS AT202
  - Configuración rastreador Plaspy
  - Rastreador de flotas AT202
  - Configuración GPRS LTEM AT202
  - Telemática vehicular AT202
  - Guía instalación AT202
---

# Astra Telematics - Configuración del AT202

Esta página describe el contexto público de configuración para usar el Astra Telematics AT202 con Plaspy. Resume los ajustes compartidos del servidor Plaspy que necesitará, presenta el flujo de configuración habitual e incluye los comandos SMS públicos provistos por el fabricante para direccionar el rastreador hacia Plaspy y permitir la ingestión de datos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que puede emplear un endpoint consistente para varios modelos. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos aquí como referencia pública y verifique los detalles específicos del equipo en la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

Este proceso deja al AT202 listo para enviar datos GNSS y telemática vehicular a Plaspy, de modo que el dispositivo sea visible y reportable en la plataforma. La configuración pública mostrada aquí se centra en ajustar el APN de la red cuando sea necesario, configurar el endpoint y puerto del servidor GPRS, y confirmar que el rastreador reporte a Plaspy.

- Configure el APN, usuario y contraseña del operador celular si su SIM y operador lo requieren.
- Establezca la dirección del servidor del dispositivo al endpoint de Plaspy para que localización y telemetría fluyan a la plataforma.
- Asegúrese de que el dispositivo use el puerto 8888 y un transporte soportado (UDP o TCP) según corresponda.
- Valide la conectividad del dispositivo y confirme que reporta a Plaspy para seguimiento en tiempo real y eventos.
- Guarde y aplique la configuración, luego confirme que el rastreador aparece y se actualiza en la plataforma Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos previos a la configuración

- Dispositivo alimentado y accesible, ya sea en banco de pruebas o instalado con alimentación del vehículo.
- SIM activa compatible con la variante de red del dispositivo y con capacidad GPRS u otra conectividad celular soportada.
- Capacidad para enviar SMS desde un teléfono de aprovisionamiento o acceso a la herramienta de configuración del fabricante si está disponible.
- Acceso a la guía del usuario o documentación rápida del AT202 del fabricante para instrucciones específicas de firmware.
- Una cuenta o acceso a la plataforma Plaspy para validar que el dispositivo aparece y envía telemetría tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El AT202 se configura para reportar posiciones GNSS y telemetría vehicular al endpoint y puerto compartidos de Plaspy. Una vez dirigido a d.plaspy.com o a la IP y puerto del servidor, el dispositivo enviará mensajes periódicos de posición y eventos por el transporte seleccionado, y Plaspy analizará automáticamente el protocolo entrante.

- El rastreador envía actualizaciones de ubicación y eventos de movimiento al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La telemetría como canales CANBus, eventos de entradas digitales, lecturas ADC y mensajes seriales se reenvían a Plaspy para su procesamiento.
- La conectividad del dispositivo, el estado de respaldo de batería y las alertas de movimiento quedan visibles en Plaspy una vez que el dispositivo está reportando.
- Plaspy realiza la detección de protocolos para los mensajes entrantes, por lo que un único puerto de servidor puede soportar múltiples protocolos de rastreadores.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante, como el aprovisionamiento vía SMS o la herramienta del proveedor documentada en la guía del AT202.
2. Configure los parámetros APN de la SIM si su operador móvil los requiere, usando los comandos o la herramienta del fabricante.
3. Ingrese el endpoint del servidor Plaspy estableciendo d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
4. Configure el puerto del servidor a 8888 en la configuración del dispositivo.
5. Seleccione UDP o TCP como transporte si el equipo requiere una selección explícita.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware necesita un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte correctamente a Plaspy y que aparezca en su cuenta o en el panel de control de la plataforma.

## Ejemplo de comandos de configuración

El AT202 soporta aprovisionamiento por SMS con los siguientes comandos públicos. Envíe estos comandos como mensajes SMS de texto plano al número del dispositivo en el orden mostrado cuando sea necesario.

- Configurar el APN del operador
```text
$APAD,{{apn}}
```
- Configurar el nombre de usuario del APN (opcional, solo si su APN lo requiere)
```text
$APUN,{{apnu}}
```
- Configurar la contraseña del APN (opcional, solo si su APN lo requiere)
```text
$APPW,{{apnp}}
```
- Establecer el servidor GPRS a la IP del servidor Plaspy
```text
$IPAD,54.85.159.138
```
- Establecer el puerto del servidor a Plaspy
```text
$PORT,8888
```

Notas sobre los marcadores de posición
- {{apn}} es el nombre del APN del operador móvil requerido para GPRS o datos móviles.
- {{apnu}} y {{apnp}} son los campos de usuario y contraseña del APN cuando el operador exige autenticación.
- Los comandos de IP y puerto apuntan el dispositivo a Plaspy. Alternativamente puede usar d.plaspy.com cuando el dispositivo soporte entradas de nombre de host.

## Notas sobre la configuración

- Los comandos de aprovisionamiento SMS mostrados son comandos públicos del fabricante; algunas instalaciones emplean el software de configuración del proveedor en lugar de SMS.
- Las revisiones de firmware o variantes de hardware pueden cambiar el comportamiento de los comandos o las funciones disponibles. Confirme los comandos en el manual del dispositivo para su versión de firmware.
- Elija UDP o TCP según sus requerimientos de instalación y la capacidad del firmware del dispositivo; Plaspy acepta ambos transportes en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y realiza la detección automática de protocolos para simplificar despliegues multimodelo.
- Si usa aprovisionamiento por SMS, asegúrese de que el dispositivo pueda recibir SMS y de que la SIM esté activa antes de enviar comandos.

## Por qué usar Plaspy con esta configuración

Usar el AT202 con Plaspy ofrece una vía directa para ingerir datos GNSS y telemática vehicular en una única plataforma de gestión de flotas. Apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 permite que Plaspy detecte automáticamente el protocolo entrante y presente ubicación, datos CANBus, eventos de entradas y lecturas de sensores para monitoreo en tiempo real, alertas e informes históricos.

Para más información sobre Plaspy y cómo procesa los datos de los rastreadores visite https://www.plaspy.com. Para los comandos más recientes del AT202, notas de firmware y detalles específicos de configuración del dispositivo, verifique la información en el sitio del fabricante https://astratelematics.com/
