---
slug: /queclink/gv55w/configuration
id: gv55w-configuration
sidebar_label: Configuration
title: QuecLink - GV55W Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV55W para integrarlo con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración QuecLink GV55W
  - Instalación QuecLink GV55W
  - Configuración GV55W Plaspy
  - Configuración rastreador GPS QuecLink
  - Configuración servidor GV55W
  - Configuración seguimiento GV55W
  - Configuración telemática QuecLink
  - Configuración dispositivo Plaspy
  - Rastreador vehicular GV55W
  - Configuración SMS GV55W
---

# QuecLink - Configuración GV55W

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GV55W con Plaspy. Reúne los ajustes prácticos del servidor, los pasos habituales del flujo de trabajo y los comandos SMS públicos que se emplean para apuntar un GV55W a Plaspy y permitir el envío de datos en tiempo real y la ingesta de telemetría.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, aquí se incluyen comandos SMS de ejemplo publicados para el GV55W y se explican los valores de servidor de Plaspy que necesita usar durante la configuración.

## Resumen de la configuración

Configurar un GV55W para Plaspy implica preparar el dispositivo para comunicarse con el endpoint compartido de Plaspy, validar que los mensajes llegan a la plataforma y habilitar los eventos que planea usar. Los comandos públicos para este modelo se suelen aplicar por SMS, aunque también pueden estar disponibles a través del software de configuración de QuecLink o herramientas del proveedor.

- Apuntar el dispositivo a los ajustes del servidor de Plaspy para que los mensajes lleguen a su cuenta u organización.
- Configurar el APN y la conectividad celular para que el rastreador tenga acceso a datos GPRS/3G.
- Habilitar reportes periódicos y eventos de entrada para que Plaspy reciba posiciones y notificaciones de alarma.
- Verificar la conectividad del dispositivo con Plaspy y confirmar que la unidad aparece en la plataforma.
- Usar el mismo puerto de Plaspy y confiar en la detección automática del protocolo para aceptar los datos del rastreador.

## Ajustes del servidor de Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when a device connects

## Requisitos típicos antes de configurar

- Un GV55W con alimentación, con una SIM celular activa instalada y con datos habilitados para el APN objetivo.
- Conocimiento del método de configuración que su unidad soporta, por ejemplo comandos SMS o una herramienta oficial de QuecLink.
- La contraseña por defecto del dispositivo o la contraseña de administrador configurada necesaria para la configuración por SMS cuando aplique. Los comandos de ejemplo abajo usan la contraseña de fábrica queclink.
- Acceso a un teléfono móvil capaz de enviar SMS al rastreador o acceso al software de configuración del fabricante.
- Comprensión básica de los valores APN de su operador celular para reemplazar marcadores como {{apn}}, {{apnu}} y {{apnp}} cuando sea necesario.

## Cómo se conecta este rastreador a Plaspy

El GV55W envía mensajes de posición GNSS y telemetría a través de la red celular al endpoint del servidor de Plaspy. Una vez configurado para usar el dominio o la IP del servidor de Plaspy y el puerto compartido, Plaspy ingiere los mensajes, normaliza la telemetría y pone a disposición la ubicación y los eventos para monitoreo en tiempo real e informes.

- El rastreador reporta al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Todos los dispositivos usan el mismo puerto de Plaspy 8888 para reportes.
- El dispositivo puede usar transporte UDP o TCP para enviar mensajes a Plaspy según la configuración; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo de forma explícita en Plaspy.
- Los reportes de eventos y entradas, como SOS o eventos de encendido, se transmiten a Plaspy para alertas y análisis.

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o al software para el GV55W, o prepárese para enviar comandos SMS si el dispositivo lo soporta.
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 cuando el dispositivo lo solicite.
3. Configure el puerto en 8888 en los ajustes del servidor del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte durante la configuración.
5. Configure el APN y la autenticación necesaria para que el dispositivo obtenga conectividad de datos celulares.
6. Aplique o guarde la configuración y reinicie el rastreador si el equipo o el procedimiento lo requieren.
7. Valide que el dispositivo reporta a Plaspy confirmando que la unidad aparece en la plataforma y que se reciben mensajes de posición y eventos.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son ejemplos públicos de material de configuración del GV55W. Se muestran en el orden en que comúnmente se aplican. Los comandos de ejemplo usan la contraseña del dispositivo queclink como valor por defecto. Si su dispositivo tiene otra contraseña de administrador, reemplace queclink por la contraseña correspondiente. Reemplace marcadores como {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador celular.

- Restauración opcional a valores de fábrica (usar solo si necesita resetear el dispositivo a los valores por defecto)

```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Establecer la zona horaria a UTC 0

```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Definir el APN del operador. Reemplace los marcadores con los valores de su operador:
  - {{apn}} = nombre del APN
  - {{apnu}} = usuario del APN si se requiere
  - {{apnp}} = contraseña del APN si se requiere

```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

- Configurar el servidor GPRS para reportar a Plaspy. Este comando incluye dominio e IP y define el puerto del servidor. Apunta a Plaspy en d.plaspy.com y 54.85.159.138 usando el puerto 8888:

```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Establecer el intervalo de reporte a 60 segundos

```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar notificación del botón SOS en la entrada 2

```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota: Estos comandos SMS se presentan como ejemplos públicos. Las cadenas de comando exactas, parámetros y el orden requerido pueden variar según la versión de firmware y la revisión de hardware. Envíe solo los comandos que comprenda y confirme con la documentación de su dispositivo.

## Notas de configuración

- La configuración por SMS es de uso común para el GV55W, pero también pueden existir herramientas del fabricante o software del proveedor que suelen ser preferibles para aprovisionamiento masivo.
- Diferentes versiones de firmware o revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; siempre verifique con la documentación actual de QuecLink.
- Plaspy acepta tanto UDP como TCP en el puerto 8888 y detecta automáticamente el protocolo del dispositivo; elija el transporte en el dispositivo solo si es necesario.
- Mantenga segura la contraseña de administrador del dispositivo y cambie los valores por defecto al desplegar a gran escala.
- Si utiliza el comando de restauración de fábrica, tómele como opcional y úselo solo cuando necesite una configuración limpia.

## Por qué usar Plaspy con esta configuración

Usar el GV55W con Plaspy ofrece un camino directo a la localización en tiempo real, alertas de eventos y visibilidad de telemetría para flotas de vehículos ligeros. Apuntar el rastreador a los ajustes de servidor compartido de Plaspy y confirmar la conectividad permite que Plaspy normalice la telemetría del GV55W y muestre posiciones, encendido, SOS y reportes programados para monitoreo operativo y respuesta a incidentes.

Para obtener más información sobre Plaspy y cómo se gestionan los dispositivos en la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar las instrucciones y la sintaxis de comandos actuales con QuecLink en https://www.queclink.com/ antes de aplicar configuraciones a gran escala.
