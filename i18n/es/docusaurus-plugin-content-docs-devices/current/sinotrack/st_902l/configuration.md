---
slug: /sinotrack/st_902l/configuration
id: st_902l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-902L Configuration
sidebar_class_name: menu_item_tracker
description: Configure el SinoTrack ST-902L para enviar ubicación y alarmas a Plaspy por SMS o herramientas del fabricante con ajustes públicos del servidor
keywords:
  - Configuración SinoTrack ST-902L
  - Configuración ST-902L Plaspy
  - Configuración rastreador SinoTrack OBD II
  - Configuración servidor ST-902L
  - Configuración APN SMS ST-902L
  - Rastreador GPS SinoTrack Plaspy
  - Configuración GPRS ST-902L
  - Configuración rastreador Plaspy
  - Rastreo vehicular ST-902L
  - Comandos SMS ST-902L
---

# SinoTrack - Configuración ST-902L

Esta página documenta la información pública necesaria para apuntar un rastreador SinoTrack ST-902L a Plaspy para rastreo en tiempo real. Se concentra en los ajustes prácticos del servidor y en los comandos SMS que se usan comúnmente para preparar un ST-902L para su uso con Plaspy, y explica qué debe verificar antes de registrar la unidad en la plataforma.

Plaspy utiliza un único endpoint de ingestión y puerto compartido para los rastreadores soportados y detecta automáticamente el protocolo del dispositivo cuando llegan los datos. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que considere los comandos y pasos siguientes como el proceso público recomendado más que como un manual exhaustivo del fabricante.

## Resumen de la configuración

El ST-902L debe configurarse con un APN celular válido y para reenviar su tráfico GPRS a Plaspy. La configuración se realiza comúnmente mediante comandos SMS o herramientas de aprovisionamiento del fabricante, y el objetivo es lograr que el dispositivo reporte de manera fiable a Plaspy para que sea visible en los paneles de flota.

- Provea al dispositivo una SIM de datos local con datos activos y las credenciales APN correctas.
- Configure el servidor GPRS del rastreador para apuntar a Plaspy y que los paquetes de posición y alarma sean reenviados.
- Valide el ID del dispositivo y los ajustes usando la respuesta RCONF antes de registrar la unidad en Plaspy.
- Establezca los intervalos de reporte y el modo operativo para que el rastreador envíe actualizaciones con la frecuencia deseada.
- Confirme que el dispositivo está visible y reportando en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

Configure el ST-902L para reportar a Plaspy usando estos ajustes públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y que el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.

## Requisitos típicos previos a la configuración

- Acceso al puerto OBD II del vehículo para la instalación y suministro de energía desde el vehículo.
- Una tarjeta SIM de datos local funcional con datos activos y credenciales APN correctas para el operador móvil.
- Capacidad para enviar mensajes SMS al rastreador para configuración por SMS o acceso a las herramientas de aprovisionamiento del fabricante.
- Encienda el dispositivo y asegúrese de que tenga fijación GNSS y conectividad celular para la validación inicial.
- Una cuenta en Plaspy o acceso organizacional donde registrará el dispositivo una vez que esté reportando.

## Cómo se conecta este rastreador a Plaspy

El ST-902L envía datos de ubicación y eventos a través de redes celulares al endpoint y puerto del servidor configurado, donde Plaspy recibe y procesa los paquetes. Una vez dirigido a Plaspy, el dispositivo es visible en la plataforma y puede entregar actualizaciones de posición y alarmas en tiempo real.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy.
- Los paquetes de posición y eventos se reenvían por GPRS/4G al endpoint de ingestión de Plaspy.
- Plaspy realiza detección automática de protocolo para aplicar el parser correcto a los mensajes entrantes.
- Las alarmas y notificaciones de eventos, como geocercas o manipulación, pueden reenviarse a Plaspy como eventos inmediatos.
- Use el comando RCONF del dispositivo para recuperar el ID que Plaspy utilizará para identificar la unidad.

## Flujo de configuración típico

1. Acceda al método o software de configuración oficial del fabricante, o prepárese para enviar comandos SMS al dispositivo según el manual.
2. Ingrese la dirección del servidor Plaspy — ya sea d.plaspy.com o la IP 54.85.159.138 — en los ajustes del servidor del dispositivo o en el comando SMS.
3. Establezca el puerto del dispositivo en 8888, recordando que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP en el dispositivo si el firmware lo requiere.
5. Aplique o guarde la configuración en el dispositivo y, si usa SMS, espere los mensajes de acuse de recibo del equipo.
6. Reinicie o haga un ciclo de energía si la documentación del fabricante indica que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la recepción de datos entrantes y usando el comando RCONF para confirmar los ajustes y el ID del dispositivo.

## Ejemplo de comandos de configuración

Los comandos SMS públicos proporcionados por el fabricante para dispositivos Sinotrack pueden usarse para configurar el ST-902L. Preserve los marcadores de posición al usar el comando APN. Los comandos se muestran en el orden recomendado para el aprovisionamiento inicial.

- Reinicio inicial opcional a configuración de fábrica (usar solo si es necesario para un aprovisionamiento limpio):
```
RESET
```

- Establecer la zona horaria a UTC 0 (comando de ejemplo según documentación pública):
```
8960000E00
```

- Configurar el APN de su operador. Reemplace los marcadores de posición con el APN, usuario y contraseña del operador según sea necesario:
```
8030000 [apn] [apnu] [apnp]
```
Explicación: [apn] es la cadena APN del operador, [apnu] es el usuario APN opcional y [apnp] es la contraseña APN opcional.

- Configurar el servidor GPRS a la IP y puerto de Plaspy según la guía pública de configuración:
```
8040000 54.85.159.138 8888
```
Si su método de aprovisionamiento acepta un nombre de dominio y su dispositivo lo soporta, puede ingresar d.plaspy.com en lugar de la IP donde el dispositivo lo permita.

- Establecer el intervalo de actualización de ubicación cuando el rastreador está encendido:
```
8050000 60
```
(Ejemplo que fija un intervalo de 60 segundos; ajústelo según sus necesidades.)

- Establecer el intervalo de actualización para otra condición de reporte, por ejemplo cuando el vehículo está apagado o estacionado:
```
8090000 60
```

- Cambiar el dispositivo a modo GPRS para habilitar el reporte de datos:
```
7100000
```

- Verificar la configuración actual y leer el ID del dispositivo que Plaspy usará:
```
RCONF
```
La respuesta RCONF contiene el ID del dispositivo y los ajustes que se usan para validar el aprovisionamiento correcto antes de añadir el dispositivo a Plaspy.

## Notas de configuración

- La configuración por SMS suele estar soportada por el ST-902L; confirme la sintaxis exacta de los SMS y los números a usar con el manual del fabricante para su versión de firmware.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones disponibles. Verifique siempre los comandos con el manual que viene con su unidad.
- Elija UDP o TCP según el comportamiento de la red regional y el soporte del firmware del dispositivo; Plaspy detectará automáticamente el protocolo cuando lleguen los datos.
- Plaspy utiliza el puerto 8888 para los dispositivos soportados; asegúrese de que las reglas de firewall y red permitan tráfico saliente del dispositivo hacia este puerto.
- Use la verificación RCONF después de aplicar los ajustes para confirmar el ID del dispositivo y los parámetros del servidor antes de completar el registro en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el SinoTrack ST-902L para reportar a Plaspy ofrece una vía sencilla para obtener visibilidad en tiempo real del vehículo, monitoreo de eventos y gestión centralizada de flotas. La instalación plug and play en OBD II del ST-902L, junto con la posibilidad de aprovisionamiento por SMS o remoto, permite despliegues rápidos y el reenvío inmediato de datos de ubicación y alarmas a Plaspy para seguimiento, alertas e informes históricos.

Learn more about Plaspy and how your fleet can benefit by visiting https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer details verify the official SinoTrack documentation at https://www.sinotrackgps.com/ as setup methods and firmware behavior can change over time.
