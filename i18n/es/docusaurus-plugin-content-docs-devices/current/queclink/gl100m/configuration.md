---
slug: /queclink/gl100m/configuration
id: gl100m-configuration
sidebar_label: Configuration
title: QuecLink - GL100M Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GL100M con ajustes de servidor Plaspy comandos SMS y pasos prácticos
keywords:
  - Configuración QuecLink GL100M
  - Instalación QuecLink GL100M
  - Configuración servidor GL100M
  - Configuración Plaspy GL100M
  - Configuración rastreador GPS QuecLink
  - Configuración seguimiento de vehículos
  - Ajustes servidor rastreador GPS
  - Configuración plataforma de rastreo
  - Guía de configuración QuecLink
  - Configuración rastreador Plaspy
---

# QuecLink - GL100M Configuración

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GL100M con Plaspy. Consolida los ajustes de servidor Plaspy que usted debe aplicar, explica el flujo de configuración habitual y presenta comandos SMS de ejemplo que se usan comúnmente en este modelo. Use esta guía para preparar un dispositivo GL100M y que pueda comunicarse con Plaspy para el reporte de ubicación y notificaciones de eventos.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GL100M soporta reporte por GPRS/GSM y configuración por SMS usando su protocolo @Track integrado, por lo que esta guía se enfoca en pasos prácticos y públicos que coinciden con esas capacidades, recomendando siempre verificar con la documentación de QuecLink.

## Resumen de configuración

Configurar un GL100M para Plaspy implica preparar el rastreador para que se registre y envíe su posición y eventos al endpoint del backend de Plaspy. La configuración típica incluye el APN de datos móviles, el endpoint y puerto del servidor, los intervalos de reporte y cualquier entrada de evento como SOS. En el GL100M esto suele realizarse mediante comandos SMS o con la herramienta de configuración del fabricante.

- Configure el APN del dispositivo y las credenciales GPRS para que el rastreador use datos móviles y alcance Plaspy.
- Apunte el rastreador al endpoint del servidor Plaspy (d.plaspy.com o la IP del servidor) y configure el puerto 8888.
- Seleccione el transporte UDP o TCP en el dispositivo si es necesario; Plaspy acepta ambos y detecta automáticamente el protocolo del rastreador.
- Configure reportes periódicos de posición y entradas de eventos para que el dispositivo envíe datos oportunos a Plaspy.
- Valide la conectividad para confirmar que el dispositivo aparece en línea y reportando en la plataforma Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador por lo que el protocolo correcto será gestionado en el servidor

## Requisitos típicos antes de la configuración

- Un dispositivo GL100M con alimentación e instalación básica completadas.
- Una tarjeta SIM activa con datos móviles habilitados y las credenciales APN correctas del operador.
- Capacidad para enviar comandos SMS al dispositivo o acceso al software o herramienta oficial de configuración de QuecLink.
- Conocimiento de la contraseña del dispositivo si fue cambiada respecto al valor de fábrica.
- Cobertura celular en el área donde operará el dispositivo y donde la SIM esté provisionada.
- Opcionalmente, una forma de ver las respuestas o registros del dispositivo para confirmar que los comandos fueron aceptados.

## Cómo se conecta este rastreador a Plaspy

El GL100M suele configurarse para enviar reportes de posición y notificaciones de eventos a través de la red GPRS/GSM al endpoint y puerto del servidor de Plaspy. Cuando se apunta a Plaspy, el dispositivo utilizará su protocolo y transporte configurados para establecer sesiones y entregar telemetría. El servidor de Plaspy usa el endpoint compartido y la detección automática de protocolo para recibir datos de los rastreadores compatibles.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Todos los dispositivos usan el puerto 8888 en Plaspy; configure el GL100M para usar el puerto 8888 en sus ajustes GPRS.
- El dispositivo puede usarse con UDP o TCP; Plaspy acepta ambos y detecta el protocolo correcto automáticamente.
- Las actualizaciones de ubicación, los reportes programados y las alertas de eventos (por ejemplo SOS o disparos de entradas) se envían a Plaspy para visibilidad y monitoreo.
- Usar el APN y las credenciales GPRS correctas asegura que el dispositivo pueda alcanzar el servidor Plaspy sobre la conexión de datos móviles.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de QuecLink para el GL100M (comandos SMS o la herramienta de configuración del fabricante).
2. Configure el APN del dispositivo y las credenciales GPRS (use el APN de su operador) para que el rastreador tenga conectividad de datos.
3. Ingrese el endpoint del servidor Plaspy añadiendo d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del servidor GPRS.
4. Establezca el puerto del servidor en 8888 según lo requerido para las conexiones con Plaspy.
5. Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere selección; Plaspy soporta ambos y detecta el protocolo automáticamente.
6. Aplique o guarde la configuración y reinicie el dispositivo si la unidad o la herramienta lo solicitan.
7. Verifique que el GL100M reporte a Plaspy y aparezca en línea en la plataforma comprobando la llegada de mensajes de posición o eventos.

## Ejemplos de comandos de configuración

El GL100M puede configurarse enviando comandos SMS. Los comandos de ejemplo a continuación reflejan una secuencia pública típica de configuración. La configuración de muestra usa la contraseña de fábrica queclink. Reemplace los marcadores como {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador móvil.

1. Paso inicial opcional — restaurar la configuración de fábrica (opcional si necesita una configuración limpia)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar la zona horaria a UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador (reemplace los marcadores con los valores de su operador)
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = APN de la red móvil
- {{apnu}} = nombre de usuario del APN si el operador lo requiere
- {{apnp}} = contraseña del APN si el operador lo requiere

4. Configurar el servidor GPRS a Plaspy usando el dominio y la IP con puerto 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando apunta el dispositivo al endpoint y puerto del servidor Plaspy. El comando incluye tanto el dominio como la IP como se muestra en ejemplos públicos de configuración.

5. Establecer el intervalo de actualización periódica a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar la notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Estos comandos son ejemplos extraídos de muestras públicas de configuración para el GL100M. Conserve la contraseña del dispositivo y cámbiela según corresponda tras la configuración.

## Notas de configuración

- La sintaxis exacta de los SMS y los parámetros disponibles pueden variar según la versión de firmware y la configuración de fábrica del GL100M; confirme siempre con la respuesta del dispositivo o la documentación oficial de QuecLink.
- Puede configurar el GL100M por SMS o con el software de configuración de QuecLink cuando esté disponible; elija el método compatible con su despliegue y firmware.
- Al elegir UDP frente a TCP, tenga en cuenta que Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente; seleccione el transporte que mejor se adapte a su red y al comportamiento del dispositivo.
- Reemplace los marcadores de APN {{apn}}, {{apnu}} y {{apnp}} con las credenciales de su operador móvil; ajustes APN faltantes o incorrectos impedirán la conectividad GPRS.
- Si el dispositivo usa una contraseña de fábrica (por ejemplo queclink en este ejemplo público), cámbiela después de la configuración para asegurar el equipo.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un QuecLink GL100M correctamente configurado ofrece a las organizaciones una forma práctica de centralizar la visualización de ubicación, el monitoreo de eventos y la supervisión operativa. Apuntar el dispositivo al endpoint compartido de Plaspy garantiza un manejo consistente de los reportes de posición y alertas, mientras que la detección automática de protocolo reduce la selección manual de protocolos durante la integración.

Para obtener más información sobre Plaspy y cómo soporta integraciones con rastreadores visite https://www.plaspy.com. Para conocer los métodos de configuración específicos más recientes, el comportamiento de firmware y las referencias oficiales de comandos, verifique siempre los detalles con el fabricante en https://www.queclink.com/
