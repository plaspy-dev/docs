---
slug: /astra_telematics/at210/configuration
id: at210-configuration
sidebar_label: Configuration
title: Astra Telematics - AT210 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Astra Telematics AT210 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración Astra Telematics AT210
  - Configuración AT210 Plaspy
  - Configuración de servidor AT210
  - Configuración del rastreador GPS Astra AT210
  - Configuración GPRS AT210
  - Configuración TCP UDP AT210
  - Configuración de dispositivo Plaspy
  - Manual del rastreador AT210
  - Rastreo de vehículos AT210
  - Configuración SMS del rastreador
---

# Astra Telematics - Configuración del AT210

Esta página presenta el contexto público de configuración para usar el rastreador Astra Telematics AT210 con Plaspy. Reúne los pasos prácticos y los comandos SMS públicos que se usan comúnmente para apuntar el AT210 al servidor de Plaspy, de modo que el dispositivo pueda reportar la ubicación del vehículo y eventos básicos a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página como guía práctica y confirme el comportamiento específico del dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo de este proceso es dejar un AT210 listo para comunicarse de forma fiable con Plaspy y aparecer en su cuenta. La configuración pública del AT210 suele realizarse mediante comandos SMS para ajustar el APN y los parámetros del servidor. Plaspy publica un endpoint y un puerto compartidos a los que debe apuntar el rastreador; la plataforma detecta automáticamente el protocolo correcto del dispositivo.

- Configure el APN del dispositivo y, si aplica, las credenciales del APN para que tenga conectividad de datos GPRS.
- Establezca la dirección del servidor GPRS hacia Plaspy y el puerto de la plataforma para que el rastreador envíe la telemetría al endpoint correcto.
- Seleccione el protocolo de transporte (UDP o TCP) en el dispositivo o mediante la herramienta del proveedor si fuera necesario.
- Aplique y guarde los ajustes, y reinicie el rastreador si es necesario para que empiece a reportar.
- Verifique que el dispositivo aparezca en Plaspy y que esté enviando actualizaciones de ubicación y mensajes de eventos.

## Ajustes del servidor Plaspy

Al configurar el AT210 para Plaspy, utilice los siguientes ajustes públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy realiza detección automática de protocolo, por lo que la plataforma acepta TCP o UDP desde el rastreador

Todos los dispositivos configurados para Plaspy usan el mismo puerto y la plataforma intentará detectar automáticamente el protocolo del rastreador.

## Requisitos previos típicos

- Una unidad AT210 con alimentación, conectividad celular funcional y una SIM activa que soporte datos.
- El nombre APN de la red móvil y, opcionalmente, usuario y contraseña del APN proporcionados por el operador de la SIM.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta oficial de configuración de Astra Telematics si está disponible.
- Acceso básico a una cuenta en Plaspy y la forma de confirmar el identificador del dispositivo para que pueda ser validado en la plataforma.
- Documentación del fabricante o notas de firmware para el número de serie y la revisión de firmware específicos del AT210.

## Cómo se conecta este rastreador a Plaspy

El AT210 envía sus datos de ubicación y eventos al endpoint y puerto de Plaspy configurados en el dispositivo. Una vez el dispositivo esté apuntando a Plaspy, la plataforma recibe e interpreta la telemetría entrante y hace visible el rastreador en los paneles de flota y reportes.

- El rastreador usa GPRS para abrir una conexión al endpoint de Plaspy ya sea por IP o por dominio.
- El AT210 se configura para reportar al endpoint d.plaspy.com o a la IP 54.85.159.138.
- Los datos se envían al puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta automáticamente si el rastreador utiliza UDP o TCP y procesa el protocolo entrante en consecuencia.
- Después de la configuración, el dispositivo debería comenzar a enviar mensajes de ubicación y estado a Plaspy para su monitoreo y procesamiento de eventos.

## Flujo de configuración común

1. Acceda al método oficial de configuración de Astra Telematics, como el conjunto de comandos SMS del proveedor o el software de configuración del fabricante.
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888.
4. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP según las políticas de red o la recomendación del instalador.
5. Configure los parámetros APN para su SIM para que los datos GPRS estén disponibles, incluyendo usuario y contraseña del APN si el operador lo exige.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere para que los cambios tengan efecto.
7. Valide que el AT210 reporta a Plaspy confirmando que el dispositivo aparece en la interfaz de Plaspy y envía actualizaciones de ubicación.

## Ejemplos de comandos de configuración

El modelo AT210 dispone de un conjunto de comandos SMS públicos para configurar APN y parámetros de servidor. Envíe estos comandos como mensajes de texto al dispositivo en el orden mostrado. Los marcadores de posición se mantienen y deben reemplazarse con los valores de su operador cuando corresponda.

1. Establecer el APN del operador
```text
$APAD,{{apn}}
```
Reemplace {{apn}} con el nombre del APN de su operador móvil.

2. Establecer el usuario del APN (opcional)
```text
$APUN,{{apnu}}
```
Reemplace {{apnu}} con el usuario del APN si su operador lo requiere. Este comando es opcional.

3. Establecer la contraseña del APN (opcional)
```text
$APPW,{{apnp}}
```
Reemplace {{apnp}} con la contraseña del APN si es necesario. Este comando es opcional.

4. Apuntar el servidor GPRS a Plaspy por IP
```text
$IPAD,54.85.159.138
```
Esto apunta el rastreador a la IP del servidor Plaspy. También puede usar el dominio d.plaspy.com cuando el método de configuración del dispositivo lo permita.

5. Establecer el puerto del servidor para Plaspy
```text
$PORT,8888
```
Todos los dispositivos Plaspy usan el puerto 8888. Si su rastreador requiere una selección de transporte separada para UDP o TCP, ajústela mediante el método del fabricante; el AT210 soporta ambos en este puerto.

Nota: Si su herramienta de instalación o firmware permite ingresar el servidor como dominio, puede usar d.plaspy.com en lugar de la IP. Si el dispositivo requiere selección explícita de transporte, elija UDP o TCP dentro de la misma herramienta o del conjunto de comandos SMS si está disponible.

## Notas de configuración

- La configuración por SMS está documentada públicamente para el AT210; siga la sintaxis SMS del fabricante exactamente y reemplace los marcadores de posición con la información de su operador.
- Las revisiones de firmware y las variantes de hardware pueden cambiar el comportamiento de los comandos o los campos disponibles. Confirme los comandos según las notas de firmware del AT210.
- Elija TCP o UDP según la fiabilidad de la red y la preferencia del instalador. Plaspy acepta ambos y detectará el protocolo automáticamente.
- Plaspy usa el puerto 8888 para todos los dispositivos, por lo que la configuración de puerto es consistente entre rastreadores compatibles.
- Si no existe un comando público para seleccionar el transporte en el conjunto de SMS, utilice la herramienta oficial de Astra Telematics o contacte al proveedor para obtener el comando exacto según su firmware.

## Por qué usar Plaspy con esta configuración

Configurar el Astra Telematics AT210 para reportar a Plaspy ofrece una vía eficiente para centralizar la visibilidad de la ubicación del vehículo y los eventos operativos. Con el AT210 apuntando al servidor y puerto de Plaspy, los responsables de flota pueden ver el estado del dispositivo, monitorear movimientos e integrar los datos de rastreo en sus flujos operativos.

Para conocer más sobre Plaspy y cómo recibe y muestra los datos de los rastreadores visite https://www.plaspy.com. Verifique siempre los métodos de configuración y el comportamiento del firmware más recientes en el sitio del fabricante https://astratelematics.com/ ya que los detalles y comandos de configuración pueden cambiar con el tiempo.
