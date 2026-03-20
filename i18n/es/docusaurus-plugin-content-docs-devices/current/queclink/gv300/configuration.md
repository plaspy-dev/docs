---
slug: /queclink/gv300/configuration
id: gv300-configuration
sidebar_label: Configuration
title: QuecLink - GV300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar un rastreador QuecLink GV300 y reportar a Plaspy con ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración QuecLink GV300
  - Instalación QuecLink GV300
  - Configuración GV300 Plaspy
  - Configuración servidor GV300
  - Configuración rastreador GPS QuecLink
  - Guía configuración rastreador vehicular
  - Configuración SMS GV300
  - Configuración rastreador Plaspy
  - Configuración rastreador gestión de flotas
  - Ajustes servidor rastreador GPS
---

# QuecLink - Configuración del GV300

Esta página describe el contexto público de configuración para usar el rastreador QuecLink GV300 con Plaspy. Reúne los ajustes de servidor prácticos, los pasos previos necesarios y ejemplos de comandos SMS que suelen emplearse para apuntar un dispositivo GV300 hacia la plataforma Plaspy, de modo que el equipo pueda enviar ubicación y telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos concretos del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor; use los comandos aquí como punto de partida práctico y verifique los detalles específicos del dispositivo en la documentación de QuecLink.

## Resumen de la configuración

El objetivo de configurar un GV300 para Plaspy es preparar el equipo para registrarse con los servidores de Plaspy, enviar actualizaciones de ubicación programadas y por eventos, y habilitar la visibilidad en los paneles y alertas de Plaspy. La configuración suele incluir definir el APN del equipo, establecer el endpoint del servidor GPRS, elegir el transporte y fijar los intervalos de reporte.

- Configure el APN y las credenciales de datos móviles para que el GV300 pueda usar GPRS y acceder a la red
- Apunte el servidor GPRS del dispositivo a Plaspy usando el endpoint y puerto compartidos de Plaspy
- Seleccione UDP o TCP como transporte si el dispositivo lo requiere y confirme que envía reportes periódicos
- Ajuste los intervalos de reporte y las entradas por eventos para recibir la telemetría relevante en Plaspy
- Verifique que el dispositivo se registre y aparezca en Plaspy para confirmar ubicación y alarmas

## Ajustes del servidor de Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- automatic protocol detection in Plaspy so the platform identifies the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Un GV300 con alimentación, con tarjeta SIM y datos móviles habilitados para que el equipo pueda establecer conectividad GPRS
- Conocimiento del APN de la SIM y, opcionalmente, del usuario y la contraseña del APN según su operador móvil
- Capacidad para enviar comandos SMS al dispositivo o acceder al software de configuración de QuecLink, según el flujo de trabajo del instalador
- Acceso a la contraseña por defecto o credenciales de administrador del dispositivo; los comandos de ejemplo usan la contraseña por defecto queclink
- Una fuente de alimentación fiable durante la configuración y un plan para reiniciar el dispositivo tras aplicar cambios
- Acceso a las notas de firmware o documentación de QuecLink para cualquier particularidad del dispositivo

## Cómo se conecta este rastreador a Plaspy

Al estar configurado, el GV300 envía su telemetría e informes de eventos al endpoint y puerto del servidor de Plaspy. Plaspy ingiere las posiciones GNSS reportadas y los mensajes de eventos configurados, y los asigna a la cuenta y registro de dispositivo correspondiente para seguimiento y alertas.

- El rastreador se configura para reportar al endpoint y la IP compartidos de Plaspy: d.plaspy.com y 54.85.159.138 en el puerto 8888
- El dispositivo puede usar UDP o TCP en el puerto 8888 según el transporte seleccionado en la configuración
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto puede atender múltiples protocolos de dispositivo
- Los reportes programados y los informes por eventos son recibidos por Plaspy para visualización y alertas
- Las alarmas y eventos de entradas digitales aparecen en Plaspy una vez que el dispositivo se comunica correctamente con el servidor

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración QuecLink para el GV300, por ejemplo comandos SMS o el software de configuración de QuecLink
2. Ingrese el endpoint del servidor como d.plaspy.com o la IP 54.85.159.138 según el formato de comando del dispositivo
3. Ajuste el puerto del servidor a 8888, que es el puerto que usa Plaspy para todos los dispositivos soportados
4. Elija UDP o TCP si el dispositivo requiere selección explícita de transporte
5. Configure el APN y las credenciales del APN y luego aplique o guarde la configuración en el equipo
6. Reinicie el dispositivo si el fabricante lo requiere para aplicar los ajustes de red y servidor
7. Valide que el GV300 reporte a Plaspy confirmando que el dispositivo aparece y actualiza en la plataforma Plaspy

## Comandos de configuración de ejemplo

El GV300 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos de ejemplo provienen de formatos públicos de configuración SMS de QuecLink. La contraseña del dispositivo utilizada en estos ejemplos es queclink, que es el valor por defecto del fabricante.

1. Restauración opcional a configuración de fábrica inicial
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
Nota: Este comando restablece parámetros configurables. Úselo solo cuando se requiera una restauración de fábrica inicial.

2. Ajustar la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador y credenciales opcionales
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} es el APN de la red móvil
- {{apnu}} es el usuario del APN si el operador lo requiere
- {{apnp}} es la contraseña del APN si el operador lo requiere

4. Configurar el servidor GPRS para reportar a Plaspy usando dominio e IP en el formato de ejemplo
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando configura el dispositivo para contactar a Plaspy en d.plaspy.com y 54.85.159.138 en el puerto 8888. Mantenga el puerto 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos.

5. Establecer el intervalo de actualización de ubicación a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe estos comandos SMS en el orden mostrado cuando realice una configuración guionizada. Ajuste los marcadores y parámetros para adecuarlos a la configuración de su operador y al comportamiento de reporte requerido.

## Notas de configuración

- La configuración vía SMS es un flujo de trabajo común para instaladores del GV300 y aquí se muestra usando formatos de comando públicos de QuecLink
- Las versiones de firmware y las revisiones de hardware pueden cambiar el comportamiento de los comandos o el orden de los parámetros; consulte las notas de firmware de QuecLink antes de aplicar actualizaciones masivas
- Elija TCP o UDP según sus necesidades de red y confiabilidad; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente
- Preserve y proteja la contraseña del dispositivo; los ejemplos usan la contraseña por defecto queclink, la cual debe cambiarse en producción
- Verifique los marcadores {{apn}}, {{apnu}} y {{apnp}} con su operador móvil y sustitúyalos antes de enviar los comandos

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GV300 con Plaspy ofrece una combinación práctica de hardware de grado vehicular y un punto de ingestión en la nube unificado. Con los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos, flotas y equipos de seguridad pueden estandarizar la configuración en muchos dispositivos y obtener reportes consistentes en la plataforma Plaspy para monitoreo, alertas y análisis.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y verifique los detalles de configuración y firmware específicos del dispositivo con QuecLink en https://www.queclink.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
