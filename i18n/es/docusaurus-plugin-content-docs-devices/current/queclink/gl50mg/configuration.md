---
slug: /queclink/gl50mg/configuration
id: gl50mg-configuration
sidebar_label: Configuration
title: QuecLink - GL50MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para preparar el QuecLink GL50MG y reportar a Plaspy con ajustes del servidor comandos SMS y flujo de trabajo
keywords:
  - Configuración QuecLink GL50MG
  - Instalación QuecLink GL50MG
  - QuecLink GL50MG Plaspy
  - Configuración servidor GL50MG
  - Comandos SMS GL50MG
  - Configurar APN GL50MG
  - Configuración rastreador QuecLink
  - Configuración rastreador GPS GL50MG
  - Configuración rastreador Plaspy
  - Rastreo vehicular GL50MG
---

# QuecLink - Configuración del GL50MG

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GL50MG con Plaspy. Incluye los ajustes públicos del servidor Plaspy, el flujo de trabajo práctico y ejemplos de comandos SMS que aparecen en la documentación pública de QuecLink, para que usted pueda preparar el dispositivo y enviar reportes a Plaspy para seguimiento en tiempo real y alertas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GL50MG suele configurarse mediante comandos SMS en los ejemplos públicos que se muestran abajo; utilícelos como referencia y verifique los detalles en la documentación oficial de QuecLink correspondiente a su firmware y variante de hardware.

## Resumen de la configuración

Configurar el GL50MG para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos al endpoint de ingestión de Plaspy, de modo que los equipos aparezcan y reporten de forma fiable en la plataforma. Los elementos de configuración pública de QuecLink incluyen comandos SMS para restaurar ajustes, establecer credenciales APN, apuntar el dispositivo al servidor de Plaspy y ajustar el intervalo de reporte y el comportamiento de entradas.

- Apuntar el dispositivo al endpoint de Plaspy para que la telemetría llegue al mapeo y sistema de alertas.
- Proveer credenciales APN para que el GL50MG pueda conectarse a la red de datos móviles según sea necesario.
- Definir un intervalo de reporte apropiado y habilitar entradas como SOS para reenviar eventos a Plaspy.
- Validar la conectividad y visibilidad en Plaspy después de aplicar los cambios.
- Usar las herramientas del fabricante o los comandos SMS que se muestran abajo como base para la configuración y verificación.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos son los valores públicos del endpoint de Plaspy que debe usar al configurar el GL50MG para que la telemetría sea recibida y analizada por Plaspy.

## Requisitos previos habituales

- Un dispositivo GL50MG con batería cargada y una SIM activa con datos si se utiliza reporte celular.
- Capacidad para enviar SMS al dispositivo si emplea el método de configuración por SMS que se muestra.
- Credenciales APN del operador de la SIM, a menudo representadas por los marcadores [apn], [apnu] y [apnp] en los comandos del fabricante.
- Acceso a las instrucciones o al software de configuración de QuecLink para su versión de firmware y revisión de hardware específica.
- Conocimientos básicos sobre si su despliegue prefiere transporte UDP o TCP para las conexiones dispositivo-servidor.
- Una forma de observar los reportes del dispositivo en Plaspy para confirmar que el equipo está en línea tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GL50MG envía actualizaciones periódicas de ubicación y mensajes de eventos al endpoint y puerto compartidos de Plaspy, donde Plaspy ingiere, interpreta y muestra la información. La detección automática de protocolo de Plaspy significa que solo necesita apuntar el dispositivo a la dirección y puerto de Plaspy; Plaspy detectará el protocolo del rastreador.

- Los reportes de ubicación y latidos se envían a d.plaspy.com en el puerto 8888 usando UDP o TCP.
- Eventos de SOS o botones programables pueden configurarse para generar notificaciones inmediatas a Plaspy.
- Los ajustes de APN y GPRS permiten que el dispositivo obtenga conectividad de datos móviles antes de enviar telemetría.
- Los intervalos regulares de reporte (por ejemplo 60 segundos en los ejemplos públicos) controlan la frecuencia de actualización hacia Plaspy.
- Plaspy recibe esos mensajes y hace visible el dispositivo para mapeo, reproducción histórica y flujos de alertas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de QuecLink para su GL50MG, por ejemplo la interfaz de comandos SMS descrita por el fabricante o una herramienta de software autorizada.
2. Ingrese el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto 8888 para el reporte del dispositivo según lo exige Plaspy.
4. Si el dispositivo solicita seleccionar un transporte, elija UDP o TCP según sus preferencias de red y del dispositivo.
5. Configure las credenciales APN y cualquier otro elemento de red como zona horaria o comportamiento de entradas.
6. Aplique o guarde la configuración y reinicie el dispositivo si el equipo o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en línea y envía mensajes de ubicación o eventos en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los siguientes comandos son los ejemplos públicos de comandos SMS extraídos de la guía de QuecLink. Se presentan en orden y usan la contraseña de dispositivo queclink como ejemplo de contraseña por defecto. Envíe estos comandos como mensajes SMS al número del dispositivo cuando la configuración por SMS esté soportada. Mantenga los marcadores [apn], [apnu] y [apnp] y reemplácelos por los valores de su operador.

1. Comando opcional de restauración a fábrica
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restaura los ajustes de fábrica. Marque esto como opcional y úselo solo si necesita un restablecimiento antes de una configuración limpia.

2. Establecer la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Ajuste los parámetros de zona horaria según lo requiera su despliegue.

3. Configurar el APN del operador
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- Reemplace [apn] con el APN del operador móvil, [apnu] con el usuario del APN si aplica, y [apnp] con la contraseña del APN si aplica. Mantenga los marcadores hasta sustituirlos por valores reales.

4. Configurar el servidor GPRS a Plaspy
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando público incluye tanto el dominio d.plaspy.com como la IP 54.85.159.138 y configura el puerto 8888. El dispositivo puede aceptar dominio o IP; ambos se muestran en el ejemplo.

5. Establecer intervalo de actualizaciones periódicas a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Este comando pone el dispositivo para reportar cada 60 segundos en el ejemplo público. Ajuste los intervalos según la vida de batería y las necesidades operativas.

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Configura una entrada programable (SOS) para el envío inmediato de eventos.

Nota: Estos comandos reflejan ejemplos públicos de QuecLink. La sintaxis exacta y los campos requeridos pueden variar según la revisión de firmware. Verifique el formato correcto de comandos para su firmware GL50MG antes de enviar.

## Notas sobre la configuración

- Las versiones de firmware de QuecLink y las variantes regionales del dispositivo pueden cambiar los comandos y parámetros disponibles; siempre verifique con la documentación oficial de QuecLink para su revisión de dispositivo.
- La configuración pública por SMS mostrada arriba es un método común; en algunos despliegues se usan herramientas o software del fabricante en lugar de SMS.
- Elija transporte UDP o TCP según la fiabilidad de la red y el comportamiento del dispositivo; Plaspy acepta ambos y detectará automáticamente el protocolo después de que el dispositivo apunte a d.plaspy.com en el puerto 8888.
- Mantenga seguras las credenciales APN y las contraseñas del dispositivo; cambie las contraseñas por defecto si su flujo de trabajo lo permite.
- Después de aplicar la configuración, confirme que el dispositivo aparece y reporta correctamente en Plaspy antes de finalizar la instalación.

## Por qué usar Plaspy con esta configuración

Usar el GL50MG con Plaspy ofrece un camino sencillo hacia la visibilidad en tiempo real, alertas y monitoreo operativo para activos que requieren larga autonomía de batería y montaje discreto. Con los comandos públicos de configuración puede apuntar el dispositivo a Plaspy y habilitar reportes periódicos y entradas de emergencia para que el equipo sea visible en el mapeo y en los flujos de trabajo de Plaspy.

Conozca más sobre Plaspy y cómo gestiona la ingestión de dispositivos y el monitoreo de flotas en https://www.plaspy.com. Para los comandos más actuales de QuecLink, notas de firmware y documentación específica de modelos, verifique la configuración y sintaxis de comandos en el sitio del fabricante https://www.queclink.com/ ya que las especificaciones y el comportamiento del firmware pueden cambiar con el tiempo.
