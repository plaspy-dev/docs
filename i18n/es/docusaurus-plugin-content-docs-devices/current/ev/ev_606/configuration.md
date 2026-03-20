---
slug: /ev/ev_606/configuration
id: ev_606-configuration
sidebar_label: Configuration
title: EV - EV-606 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EV-606 y apuntarlo a los servidores de Plaspy
keywords:
  - configuración EV-606
  - configuración EV-606 Plaspy
  - configuración rastreador EV
  - configuración GPS EV-606
  - configuración servidor EV-606
  - configuración dispositivo Plaspy
  - rastreo de vehículos EV-606
  - rastreador de activos EV-606
  - configuración rastreador personal EV
  - comandos SMS EV-606
---

# EV - Configuración EV-606

Esta página describe el contexto público de configuración para usar el rastreador EV EV-606 con la plataforma de seguimiento Plaspy. Explica los pasos prácticos y los comandos SMS públicos necesarios para preparar el dispositivo y que pueda comunicarse con Plaspy, usando los valores oficiales de servidor de Plaspy aplicables a todos los dispositivos compatibles.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del dispositivo una vez que éste apunta al endpoint de Plaspy. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor; esta página referencia los comandos SMS públicos del EV-606 cuando están disponibles y recomienda verificar siempre la documentación oficial del fabricante.

## Resumen de la configuración

El objetivo es dejar el EV-606 listo para reportar ubicación y estado a Plaspy de forma fiable. En el EV-606 esto suele implicar ajustar la zona horaria, configurar el APN y permitir que el dispositivo cambie su dirección de servidor para apuntar a Plaspy.

- Apuntar el dispositivo al endpoint del servidor Plaspy usando los ajustes compartidos de servidor.
- Configurar el APN del operador para que el dispositivo tenga conectividad de datos (GPRS).
- Aplicar la zona horaria y parámetros del dispositivo necesarios para marcas de tiempo correctas.
- Validar la conectividad para que el dispositivo aparezca en Plaspy y empiece a reportar.
- Si el fabricante exige habilitación para cambios de servidor, contacte al proveedor o fabricante.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once the device reports

## Requisitos típicos antes de la configuración

- Un dispositivo EV-606 cargado y listo con la contraseña de fábrica conocida (la contraseña por defecto aparece más abajo).
- Una tarjeta SIM con datos activados y el APN del operador configurado para conectividad GPRS.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante según sea necesario.
- Datos de contacto del fabricante o vendedor si es necesario que habiliten la opción de cambio de servidor en el dispositivo.
- Conocimientos básicos de la contraseña del dispositivo y los valores APN de su operador móvil.

## Cómo se conecta este rastreador a Plaspy

El EV-606 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tenga datos celulares válidos y los ajustes de servidor estén aplicados, Plaspy detectará el protocolo del dispositivo y comenzará a procesar los datos sin que sea necesaria la selección manual del protocolo.

- El rastreador envía mensajes de posición y eventos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede establecerse en UDP o TCP según el firmware del dispositivo o la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo usado por el rastreador para parsear correctamente los mensajes.
- El dispositivo usa GPRS para subidas en tiempo real y soporta reenvío de datos almacenados cuando se recupera la conectividad.
- El reporte exitoso permite visibilidad y monitoreo de eventos dentro de la plataforma Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante para el EV-606, como la interfaz de comandos SMS o el software del vendedor.
2. Configure el APN del dispositivo para que tenga acceso a datos móviles utilizando el método del fabricante.
3. Ingrese el servidor de Plaspy como d.plaspy.com o la dirección IP 54.85.159.138 en el campo de servidor.
4. Establezca el puerto 8888 para la comunicación con Plaspy.
5. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante lo exige.
7. Valide que el dispositivo aparezca y reporte correctamente en Plaspy, confirmando la detección automática del protocolo.

## Comandos de configuración de ejemplo

El EV-606 puede configurarse por SMS usando la contraseña del dispositivo. A continuación se muestran ejemplos públicos de comandos SMS. La contraseña por defecto en estos ejemplos es 123456.

- Establecer la zona horaria a UTC 0
```text
123456L+00
```

- Configurar el APN del operador (reemplace los marcadores por los valores de su operador)
```text
123456S1,[apn],[apnu],[apnp]
```
Notas:
- [apn] es el nombre del APN de su operador móvil.
- [apnu] es el nombre de usuario del APN si su operador lo requiere; inclúyalo sólo si es necesario.
- [apnp] es la contraseña del APN si su operador lo requiere; inclúyala sólo si es necesario.
- Algunos operadores no requieren apnu ni apnp; inclúyalos únicamente cuando correspondan.

- Establecer la IP y puerto del servidor para reportar a Plaspy (puede requerir habilitación por parte del fabricante)
```text
123456I1,54.85.159.138,8888
```
Notas:
- Este comando configura el dispositivo para reportar al servidor Plaspy en 54.85.159.138 puerto 8888.
- El dispositivo también puede aceptar el dominio d.plaspy.com como dirección de servidor en las herramientas del vendedor en lugar de la IP.
- El fabricante puede requerir habilitar la opción de cambio de servidor antes de que este comando surta efecto; contacte al proveedor si el comando no se aplica.

Plaspy acepta UDP o TCP en el puerto 8888 y detecta automáticamente el protocolo del rastreador cuando llegan los mensajes.

## Observaciones sobre la configuración

- Las versiones de firmware y revisiones de hardware del fabricante pueden cambiar los comandos SMS disponibles y los parámetros requeridos; siempre verifique la sintaxis de los comandos con la documentación vigente del fabricante.
- La configuración por SMS está soportada tal como se muestra arriba, pero pueden existir herramientas del vendedor o actualizaciones OTA según su proveedor.
- La contraseña por defecto usada en los ejemplos públicos es 123456; cambie las contraseñas del dispositivo cuando sea posible y apropiado por razones de seguridad.
- Algunos dispositivos requieren que el fabricante habilite los cambios de parámetros de servidor antes de aceptar un comando de tipo I1.
- Elija TCP o UDP según la recomendación del instalador y las capacidades del firmware; ambos transportes son aceptados por Plaspy en el puerto compartido.

## Por qué usar Plaspy con esta configuración

Usar el EV-606 con Plaspy ofrece un camino sencillo hacia una visibilidad y monitoreo confiables. Apuntar este dispositivo a Plaspy con los ajustes de servidor compartidos garantiza que las actualizaciones de ubicación, alarmas de movimiento y reenvíos de datos almacenados lleguen a una única plataforma que reconoce automáticamente el protocolo del rastreador. Esto reduce la complejidad por dispositivo y facilita la consolidación de flotas o activos.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest EV EV-606 device specific instructions and firmware details at the manufacturer site http://www.eviewltd.com/. Manufacturer specifications, setup methods, and firmware behavior can change over time so confirm the current process with the official documentation.
