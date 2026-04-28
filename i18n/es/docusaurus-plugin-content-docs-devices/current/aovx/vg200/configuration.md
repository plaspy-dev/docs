---
slug: /aovx/vg200/configuration
id: vg200-configuration
sidebar_label: Configuration
title: AOVX - VG200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del AOVX VG200 para Plaspy con servidor, comandos SMS e integración práctica del rastreador
keywords:
  - configuración del AOVX VG200
  - configuración del AOVX VG200 para Plaspy
  - configuración del servidor AOVX VG200
  - configuración del rastreador GPS AOVX VG200
  - configuración de la plataforma de rastreo AOVX VG200
  - configuración del rastreador Plaspy
  - guía de configuración de rastreador GPS
  - configuración de rastreador vehicular
  - configuración de rastreador para motocicleta
  - configuración de plataforma GPS Plaspy
---

# AOVX - VG200 Configuration

Esta página cubre el contexto de configuración pública para usar el AOVX VG200 con Plaspy. Se enfoca en los datos del servidor, el flujo básico de configuración y los comandos prácticos que están disponibles públicamente para la preparación inicial del rastreador.

Plaspy utiliza una configuración de servidor compartida para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador después de que la unidad comienza a enviar datos. Esto significa que el punto de conexión público y el puerto son los mismos para todos los dispositivos, aunque los pasos exactos de configuración del fabricante pueden variar según el firmware, la revisión del hardware, el tipo de instalación y las herramientas que AOVX proporcione.

## Resumen de configuración

El VG200 debe prepararse para que pueda enviar datos de rastreo al punto de conexión del servidor de Plaspy. En la práctica, configurar el equipo suele implicar definir el APN para datos móviles, establecer la dirección y el puerto del servidor Plaspy, y confirmar que el dispositivo esté listo para reportar información de ubicación y estado.

- Configure el dispositivo para que pueda conectarse a la red del operador con los ajustes de APN correctos.
- Apunte el rastreador al punto de conexión del servidor de Plaspy usado para la comunicación del dispositivo.
- Use el puerto público de Plaspy para que el rastreador se conecte al canal compartido del servicio.
- Seleccione el modo de transporte compatible si el dispositivo requiere elegir un protocolo.
- Valide los ajustes guardados con los comandos de verificación disponibles antes de la instalación en campo.
- Confirme que el rastreador comience a reportar para que aparezca en Plaspy para monitoreo e historial.

## Parámetros del servidor Plaspy

Use los siguientes parámetros públicos de Plaspy al configurar el VG200:

- Dominio del servidor `d.plaspy.com`
- IP del servidor `54.85.159.138`
- Puerto `8888`
- Compatibilidad de transporte para `UDP` o `TCP`
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo comienza a comunicarse

## Requisitos habituales antes de configurar

Antes de configurar el VG200, asegúrese de que el dispositivo y la instalación estén listos para la comunicación inicial.

- Confirme que el rastreador tenga energía y pueda permanecer activo durante la configuración.
- Verifique que tenga acceso al método o herramienta oficial de configuración de AOVX para el dispositivo.
- Asegúrese de contar con los datos del operador para que el rastreador pueda conectarse a la red móvil.
- Tenga a la mano los datos públicos del servidor de Plaspy para ingresarlos durante la configuración.
- Revise la documentación más reciente del fabricante para conocer los pasos exactos según el firmware.
- Planee probar el dispositivo después de guardar los ajustes para confirmar que reporta en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El VG200 se conecta a Plaspy enviando sus datos al punto de conexión compartido del servidor de Plaspy en el puerto `8888`. Una vez que el dispositivo está configurado correctamente, Plaspy recibe la conexión, identifica automáticamente el protocolo del rastreador y comienza a usar los datos entrantes para el rastreo y el monitoreo.

- El rastreador se dirige al dominio o a la dirección IP del servidor de Plaspy usada para la comunicación pública del dispositivo.
- Los datos se envían por el puerto compartido de Plaspy `8888`, utilizado en todos los dispositivos compatibles.
- El dispositivo puede usar `UDP` o `TCP` según el método de configuración del fabricante y el comportamiento del firmware.
- Después de iniciar la comunicación, Plaspy detecta automáticamente el protocolo del rastreador.
- Una vez conectado, el dispositivo puede aparecer en Plaspy para visibilidad en vivo, historial de rutas y supervisión operativa.
- La validación normalmente se realiza confirmando que el rastreador esté reportando datos después de guardar la configuración.

## Flujo común de configuración

1. Abra el método o software oficial de configuración de AOVX para el VG200.
2. Ingrese la información del APN del operador necesaria para la conectividad de datos.
3. Configure el servidor de Plaspy usando `d.plaspy.com` o `54.85.159.138`.
4. Establezca el puerto en `8888`.
5. Seleccione `UDP` o `TCP` si el dispositivo o la herramienta requieren elegir un transporte.
6. Guarde o aplique los cambios de configuración en la herramienta del fabricante.
7. Reinicie el dispositivo si el proceso de configuración requiere un reinicio.
8. Confirme que el rastreador comience a reportar en Plaspy y que el dispositivo aparezca en línea o activo.

## Ejemplos de comandos de configuración

La información pública de configuración del VG200 incluye comandos por SMS para la configuración inicial y la verificación. Los marcadores de posición que se muestran a continuación deben reemplazarse por los valores específicos de su operador cuando corresponda.

- Configure el APN del operador e incluya el usuario y la contraseña solo si su operador lo requiere.

```text
APN,{{apn}}#
```

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configure el punto de conexión del servidor de Plaspy.

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Establezca el intervalo de actualización.

```text
TIMER,60,60#
```

- Cambie el rastreador a modo GPRS.

```text
GPRSON,1#
```

- Verifique la configuración actual.

```text
PARAM#
```

- Verifique el estado del rastreador.

```text
STATUS#
```

En estos comandos, `{{apn}}` es el nombre del APN del operador, `{{apnu}}` es el usuario del APN y `{{apnp}}` es la contraseña del APN. Si su operador no requiere credenciales, el comando APN más corto puede ser suficiente.

## Notas de configuración

- El flujo de comandos público mostrado aquí usa SMS, pero el método exacto de configuración puede variar según el firmware o la herramienta del fabricante.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que el VG200 debe apuntarse al puerto compartido `8888`.
- Si el dispositivo ofrece una opción de transporte, use la alternativa pública `UDP` o `TCP` compatible con su método de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador, así que por lo general no se requiere asignación manual de protocolos en la plataforma.
- Para conocer el comportamiento más actual del dispositivo y la sintaxis de los comandos, revise siempre la documentación más reciente de AOVX antes del despliegue.

## Por qué usar Plaspy con esta configuración

Usar el VG200 con Plaspy ofrece a los operadores de flotas y a los propietarios de vehículos una forma práctica de centralizar datos de ubicación en tiempo real, supervisar el estado del dispositivo y organizar la actividad de rastreo en una sola plataforma. Con el rastreador configurado para reportar a los parámetros compartidos de servidor de Plaspy, el dispositivo puede aportar visibilidad, revisión de rutas y monitoreo operativo sin necesidad de un endpoint personalizado aparte.

Para equipos que administran motocicletas o vehículos compactos, la configuración del VG200 resulta especialmente útil cuando se prefiere un flujo de configuración público y sencillo, y cuando el dispositivo debe reportar de forma constante en Plaspy. Si desea conocer más sobre Plaspy y cómo admite implementaciones de rastreadores, visite https://www.plaspy.com. Para obtener la información más reciente sobre la configuración específica del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la información actual en https://www.aovx.com/.
