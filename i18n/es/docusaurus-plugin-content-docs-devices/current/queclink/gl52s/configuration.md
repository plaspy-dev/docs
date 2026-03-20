---
slug: /queclink/gl52s/configuration
id: gl52s-configuration
sidebar_label: Configuration
title: QuecLink - GL52S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador QuecLink GL52S con Plaspy, incluye ajustes de servidor y ejemplos de comandos SMS
keywords:
  - configuración QuecLink GL52S
  - instalación QuecLink GL52S
  - configuración GL52S Plaspy
  - ajustes servidor QuecLink GL52S
  - comandos SMS QuecLink GL52S
  - configuración rastreador GL52S
  - configuración rastreador de activos GL52S
  - configuración dispositivo QuecLink
  - configuración rastreador Plaspy
  - rastreo de activos GL52S
---

# QuecLink - GL52S Configuración

Esta página documenta el contexto público de configuración para usar el QuecLink GL52S con Plaspy. Se enfoca en los ajustes prácticos del servidor y en los comandos SMS que se utilizan comúnmente para apuntar un dispositivo a Plaspy. Utilice esta guía para comprender qué debe aplicarse en el equipo para que el rastreador pueda comunicarse con Plaspy y proporcionar visibilidad y monitoreo.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para los dispositivos compatibles, detectando automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante varían según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo que se muestran abajo provienen de contenido público de configuración SMS de QuecLink y deben verificarse con el firmware de su dispositivo y la documentación oficial del fabricante antes de su uso.

## Resumen de configuración

El objetivo al configurar un GL52S para Plaspy es preparar el rastreador para que informe ubicación y eventos al endpoint compartido de Plaspy y así el dispositivo sea visible en la plataforma. La configuración puede realizarse mediante comandos SMS o con las herramientas de configuración de QuecLink, según la variante del dispositivo y el firmware.

- Apuntar el dispositivo al endpoint de Plaspy para que los datos se envíen a d.plaspy.com en el puerto requerido.
- Configurar transporte y parámetros de red para que el dispositivo pueda crear una conexión usando UDP o TCP según lo soporte.
- Proveer APN y credenciales si el dispositivo opera en modo celular GPRS que los requiera.
- Validar los reportes del equipo confirmando que llegan al servidor de Plaspy y aparecen en la plataforma.
- Mantener un registro de contraseñas por defecto y pasos de configuración para mantenimiento y resolución de problemas futuros.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are supported on port 8888
- Plaspy automatically detects the tracker protocol when data arrives and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Un equipo GL52S encendido y capaz de recibir SMS si va a usar configuración por SMS.
- Conocimiento de la contraseña por defecto del dispositivo (el ejemplo por defecto que se muestra abajo es queclink) y posibilidad de cambiarla si fuese necesario.
- Credenciales APN ([apn], [apnu], [apnp]) si el dispositivo requiere ajustes GPRS para conectividad.
- Acceso a las herramientas oficiales de configuración de QuecLink o a la documentación correspondiente a su versión de firmware y revisión de hardware.
- Una cuenta de Plaspy o instrucciones de aprovisionamiento para confirmar que el dispositivo es visible tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GL52S envía su posición y datos de eventos al endpoint compartido de Plaspy para que el dispositivo pueda ser monitoreado y gestionado desde la plataforma. Dependiendo del firmware y del transporte seleccionado, el rastreador iniciará la comunicación con el endpoint de Plaspy y la plataforma detectará el protocolo automáticamente.

- El dispositivo se apunta a d.plaspy.com (o 54.85.159.138) en el puerto 8888 para que la telemetría llegue a Plaspy.
- El transporte puede configurarse en UDP o TCP según el firmware del equipo y las preferencias de red.
- Una vez que los datos llegan a Plaspy, la plataforma mapea el protocolo del dispositivo de forma automática y comienza a procesar la telemetría.
- El reporte de eventos como SOS o actualizaciones de estado se envía a Plaspy para monitoreo y alertas.
- La conexión exitosa se valida cuando el dispositivo aparece en Plaspy y reporta actualizaciones periódicas de ubicación.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de QuecLink para su dispositivo y firmware (comandos SMS, herramientas de distribuidor o utilidad de configuración de firmware).
2. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 cuando se requiera un host numérico.
3. Configure el puerto en 8888 ya que Plaspy utiliza este puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo solicita una selección de transporte.
5. Proporcione APN y datos de autenticación si configura el modo GPRS (use los marcadores como [apn], [apnu], [apnp] donde corresponda).
6. Aplique o guarde la configuración y reinicie el equipo si el método requiere un reboot para aplicar los cambios.
7. Valide que el dispositivo reporta a Plaspy verificando la llegada de datos y el estado del equipo en la plataforma Plaspy.

## Comandos de ejemplo para configuración

Los siguientes comandos SMS son ejemplos públicos utilizados para dispositivos QuecLink cuando se soporta la configuración por SMS. Se presentan en el mismo orden que un ajuste típico. La contraseña por defecto de muestra en estos ejemplos es queclink. Ajuste los marcadores y parámetros según su entorno.

1. Restaurar configuración de fábrica (reset inicial opcional)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restaura la configuración de fábrica. Indíquelo como opcional o inicial si necesita una base limpia antes de configurar.

2. Ajustar la zona horaria a UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Configura la zona horaria/reporte de tiempo; ajuste los parámetros según la zona horaria requerida.

3. Establecer el APN del operador (reemplace los marcadores)
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] = nombre del APN
- [apnu] = usuario del APN (si se requiere)
- [apnp] = contraseña del APN (si se requiere)
- Proporcione las credenciales APN correctas que suministre su operador móvil cuando use GPRS.

4. Configurar el servidor GPRS a Plaspy (se muestra dominio e IP)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando establece el host y el puerto del servidor para el reporte de datos a Plaspy. Incluye tanto el dominio como la IP numérica como suele verse en ejemplos públicos. Plaspy acepta d.plaspy.com y la IP 54.85.159.138 en el puerto 8888.

5. Establecer intervalo de actualización a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Configura intervalos de reporte. Ajústelo según la vida útil de la batería y la frecuencia de reporte deseada.

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Habilita notificaciones SOS mapeadas a una entrada específica. Ajuste el mapeo de entradas según su instalación.

Nota: Mantenga la contraseña por defecto queclink segura y cámbiela tras la configuración inicial cuando sea posible.

## Notas sobre la configuración

- Estos comandos son ejemplos públicos en estilo SMS; su firmware y la variante del modelo pueden aceptar parámetros o formatos de comando diferentes.
- La descripción del GL52S indica capacidad Sigfox. Si su variante específica de GL52S utiliza exclusivamente Sigfox, siga la guía del proveedor para Sigfox en lugar de los comandos SMS/GPRS. Use los comandos anteriores solo cuando el firmware de su equipo soporte configuración por SMS/GPRS.
- Elija UDP o TCP según el comportamiento de su red y firmware. Ambos transportes son compatibles con Plaspy en el puerto 8888.
- Las versiones de firmware, revisiones de hardware y variantes regionales pueden modificar la sintaxis de los comandos y las funciones disponibles. Siempre verifique los comandos con la documentación oficial de su dispositivo.
- La configuración por SMS se usa comúnmente para ajustes remotos; siempre que sea posible, pruebe los comandos en una unidad antes de desplegar en masa.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un GL52S correctamente configurado ofrece visibilidad continua de activos, monitoreo confiable de eventos y gestión centralizada de dispositivos. La detección automática de protocolos de Plaspy y el uso consistente de un puerto simplifican la incorporación de múltiples modelos de rastreadores, ya que se aplican los mismos valores de servidor y puerto en los dispositivos compatibles.

Para saber más sobre Plaspy y cómo puede gestionar dispositivos GL52S visite https://www.plaspy.com. Para los métodos de configuración más actualizados por dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de QuecLink https://www.queclink.com/ ya que los procedimientos y la sintaxis de comandos pueden cambiar con el tiempo.
