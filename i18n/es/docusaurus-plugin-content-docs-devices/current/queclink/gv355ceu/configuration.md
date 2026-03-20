---
slug: /queclink/gv355ceu/configuration
id: gv355ceu-configuration
sidebar_label: Configuration
title: QuecLink - GV355CEU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV355CEU, compatibilidad con Plaspy y ajustes de servidor para rastreo de flotas confiable
keywords:
  - QuecLink GV355CEU
  - configuración GV355CEU
  - configuración rastreador QuecLink
  - GV355CEU Plaspy
  - configuración GPS QuecLink
  - configuración rastreador de flotas
  - descarga DDD tacógrafo
  - ajustes servidor GV355CEU
  - configuración servidor Plaspy
  - configuración telemetría vehicular
---

# QuecLink - Configuración GV355CEU

Esta página ofrece el contexto público de configuración para usar el QuecLink GV355CEU con Plaspy. Resume los valores de servidor prácticos, el flujo de trabajo recomendado y ejemplos de comandos SMS públicos que permiten preparar el dispositivo para comunicarse con Plaspy para seguimiento en tiempo real, telemetría y procesos relacionados con tacógrafo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo a continuación muestran un método habitual del fabricante para configurar el GV355CEU; verifique siempre los comandos exactos y su comportamiento con el firmware del equipo y la documentación oficial de QuecLink.

## Resumen de la configuración

Configurar el GV355CEU para Plaspy implica preparar el rastreador para que envíe su posición, telemetría y eventos al endpoint y puerto del servidor Plaspy, y luego validar que los informes aparezcan en la plataforma Plaspy. El proceso normalmente incluye ajustar el APN, la dirección del servidor, el transporte, el intervalo de reporte y cualquier comportamiento de entradas o alarmas necesario para flotas.

- Configure el APN de datos en el dispositivo para que el GV355CEU pueda usar la red celular y alcanzar Plaspy.
- Ajuste la entrada del servidor GPRS para apuntar a Plaspy usando el dominio o la IP y el puerto compartido.
- Seleccione UDP o TCP como transporte en el dispositivo si es necesario y asegúrese de que el dispositivo use el puerto 8888.
- Defina intervalos de reporte y habilite entradas como SOS para que los eventos se reenvíen a Plaspy.
- Valide la conectividad y que los reportes de telemetría y posición sean visibles en Plaspy después de aplicar la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles: 8888

## Requisitos habituales antes de la configuración

- Un GV355CEU con alimentación instalado o conectado a una fuente de bancada para aceptar comandos SMS o de software.
- Una SIM activa con datos habilitados y el APN correcto del operador para conectividad GPRS/LTE.
- Acceso al método de configuración del fabricante QuecLink, como comandos SMS, configuración por mini USB o las herramientas oficiales de QuecLink para su revisión de firmware.
- Conocimiento de la contraseña del dispositivo usada en los comandos SMS; los ejemplos abajo usan la contraseña por defecto queclink.
- Un método para recibir el estado del dispositivo y confirmar reportes en Plaspy después de la configuración, por ejemplo acceso a la cuenta Plaspy con registro del dispositivo o un flujo de monitoreo.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GV355CEU apunta al endpoint de Plaspy y utiliza la red celular para transmitir posición y telemetría al servidor y puerto compartidos de Plaspy. Plaspy ingiere los mensajes del dispositivo, mapea el protocolo automáticamente y pone los datos a disposición para seguimiento en vivo, reproducción histórica y generación de informes.

- El rastreador envía posiciones GNSS y telemetría del vehículo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que la misma configuración de servidor y puerto funciona en los dispositivos soportados.
- Los eventos y alarmas (por ejemplo SOS, encendido del motor o activaciones de entradas) se reenvían a Plaspy según la configuración del dispositivo.
- Los reportes periódicos de posición y estado permiten visibilidad en los paneles de Plaspy y soportan informes y alertas posteriores.
- Configurar correctamente el APN y el transporte asegura conectividad confiable con el endpoint del servidor Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración QuecLink para el GV355CEU, como comandos SMS, mini USB o la herramienta de configuración del fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de transporte.
5. Configure el APN y las credenciales del operador necesarias para que la SIM use datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el propio equipo requieren reinicio para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy revisando los mensajes entrantes de posición y telemetría en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GV355CEU puede ser configurado enviando comandos SMS al dispositivo. Los siguientes comandos de ejemplo se ofrecen como muestra pública. Estos comandos usan la contraseña del dispositivo queclink como prefijo. Envíe cada línea como un SMS separado al número de la SIM del dispositivo y preserve los marcadores de posición donde se indican.

1. Restauración de fábrica opcional
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restaura la configuración de fábrica. Úselo solo cuando sea necesario o durante el aprovisionamiento inicial según corresponda.

2. Configurar la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Configura la entrada de zona horaria del dispositivo en este ejemplo como UTC 0.

3. Configurar el APN del operador
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- Reemplace los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} con el APN del operador, el usuario APN y la contraseña APN según lo requiera el operador de la SIM. Si no se necesita usuario o contraseña, deje los marcadores vacíos de acuerdo con la sintaxis del fabricante.

4. Configurar el servidor GPRS a Plaspy
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Configura las entradas del servidor GPRS del dispositivo al dominio d.plaspy.com y a la IP 54.85.159.138 usando el puerto 8888. Este ejemplo incluye tanto el dominio como la IP según el ejemplo público.

5. Ajustar el intervalo de actualización a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Ajusta la configuración del intervalo de reporte para que el dispositivo envíe actualizaciones regulares de posición. El ejemplo fija los reportes cada 60 segundos.

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Habilita las notificaciones del botón SOS asociadas con la entrada 2 en este ejemplo.

Notas sobre marcadores de posición y contraseña
- Los comandos de ejemplo usan la contraseña queclink como prefijo de comando. Confirme y use la contraseña configurada en su hardware.
- {{apn}}, {{apnu}}, {{apnp}} son marcadores de posición para el APN del operador, el usuario APN y la contraseña APN respectivamente. Reemplácelos con los valores correctos para su SIM.

## Observaciones de configuración

- La configuración por SMS se muestra en este ejemplo público; también pueden estar disponibles herramientas del fabricante como configuración por mini USB o software de configuración para distintos firmwares.
- Las revisiones de firmware y las SKUs del mercado local pueden cambiar la sintaxis exacta de los comandos SMS o los parámetros disponibles; confirme el conjunto de comandos con la documentación de QuecLink para su firmware.
- La elección de UDP o TCP puede depender de las condiciones de red y la preferencia del instalador; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Use la contraseña del dispositivo de forma consistente al enviar comandos SMS y cambie las credenciales por defecto según su política de seguridad cuando sea posible.
- Si realiza una restauración de fábrica como parte del aprovisionamiento, recuerde volver a aplicar los ajustes de APN y servidor después.

## Por qué usar Plaspy con esta configuración

Integrar el QuecLink GV355CEU con Plaspy brinda a las flotas datos consolidados de ubicación, telemetría y procesos de tacógrafo en una única plataforma. Con los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo, el GV355CEU puede apuntar al endpoint de Plaspy para entregar actualizaciones continuas de posición, notificaciones de eventos y la recuperación remota de DDD del tacógrafo para incluirlos en informes y alertas de Plaspy.

Learn more about Plaspy and how it supports fleet tracking and telematics at https://www.plaspy.com. For the most current device specific configuration methods, firmware behaviors and command syntax consult the official QuecLink documentation at https://www.queclink.com/ to verify the latest instructions.
