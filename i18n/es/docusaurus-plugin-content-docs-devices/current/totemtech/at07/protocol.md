---
slug: /totemtech/at07/protocol
id: at07-protocol
sidebar_label: Protocol
title: Totemtech - AT07 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo y notas de conexión para compatibilidad del Totemtech AT07 con Plaspy
keywords:
  - Totemtech AT07
  - protocolo Totemtech AT07
  - rastreador GPS AT07
  - protocolo GPS Totemtech
  - protocolo de rastreo AT07
  - Totemtech AT07 Plaspy
  - comunicación rastreador GPS
  - rastreo vehicular Totemtech
  - firmware OTA Totemtech
  - rastreo de activos AT07
---

# Totemtech - Protocolo AT07

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS Totemtech AT07 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy, en los ajustes de conexión compartidos que Plaspy espera y en consideraciones prácticas útiles para la integración y la operación diaria. La configuración técnica y el comportamiento relacionado con firmware se describen a alto nivel; se recomienda consultar la documentación del fabricante para comandos específicos del equipo y notas de firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El AT07 incluye funciones como transmisión simultánea a dos servidores, acelerómetro de tres ejes, actualizaciones OTA, amplio rango de entrada de alimentación, soporte para GPRS y comandos por SMS, 16 Mb de memoria flash, medición de nivel de combustible, monitoreo de voz y puertos I/O configurables por el usuario. Estas funciones influyen en cómo se configura el rastreador para reportar a Plaspy y en cómo se interpreta la información una vez recibida.

## Resumen del protocolo

El protocolo de reporte es el conjunto de reglas que el AT07 usa para enviar datos de ubicación, sensores y estado a un punto remoto. Para la integración con Plaspy, el protocolo define cómo el dispositivo se identifica, cómo se codifican la telemetría y las alertas, y cuándo el equipo solicita o acepta cambios de configuración remota. Comprender este contexto público del protocolo ayuda a configurar el dispositivo para que reporte de forma confiable al endpoint de Plaspy y a mapear las funciones del equipo a los campos de la plataforma.

- El protocolo determina cómo el AT07 envía ubicación, datos del acelerómetro y telemetría de sensores a un servidor remoto.
- La identificación del dispositivo y los intervalos de reporte se transmiten por el protocolo para que Plaspy asocie los datos con el rastreador correcto.
- Los comandos y la configuración pueden entregarse vía GPRS o SMS según la configuración; el protocolo describe cómo se intercambian las actualizaciones remotas.
- La capacidad de servidor dual del AT07 permite reportar simultáneamente a Plaspy y a un servidor secundario para redundancia o servicios del fabricante.
- Las actualizaciones OTA y el comportamiento de la memoria del dispositivo influyen en cuándo y cómo el rastreador transmite datos y cómo se vacían los puntos almacenados al servidor.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint común y determina automáticamente el protocolo del rastreador a partir de los mensajes entrantes. Cuando un AT07 está configurado para reportar a Plaspy, por lo general usted no necesita elegir manualmente un protocolo dentro de Plaspy porque la plataforma analiza la conexión entrante y aplica el manejo adecuado automáticamente.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138
- The port is 8888 and all devices in Plaspy use the same port
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la selección manual de protocolo normalmente no es necesaria si el equipo reporta al endpoint de Plaspy
- Si el dispositivo está configurado para enviar al endpoint de Plaspy, la plataforma empata los mensajes entrantes con el registro de dispositivo correcto mediante el identificador y el patrón de mensaje
- En configuraciones con servidor dual, el AT07 puede reportar a Plaspy mientras también envía datos a un servidor del fabricante o de respaldo sin cambios adicionales en el lado de Plaspy

## Transporte y contexto de conexión

El AT07 puede apuntarse a un nombre de dominio o a una dirección IP y soporta opciones comunes de transporte GPRS. Para la integración con Plaspy, configure el rastreador para que envíe su tráfico de reporte al endpoint de Plaspy y elija el transporte que soporte el firmware del equipo y su SIM.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, según el soporte del equipo y la configuración
- Los dispositivos pueden apuntar a d.plaspy.com o 54.85.159.138 al establecer el endpoint principal de reporte
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos de rastreadores
- El AT07 soporta enviar datos GPRS a una IP o nombre de dominio a su elección, lo que permite dirigir el tráfico a Plaspy manteniendo configurado un servidor secundario
- El soporte de comandos por SMS en el AT07 posibilita la configuración fuera de banda para equipos que no están alcanzables por GPRS en un momento dado

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos disponibles y los modos de transporte soportados; verifique la versión de firmware al diagnosticar problemas
- Las revisiones de hardware u opcionales como el sensor de nivel de combustible o el monitoreo de voz pueden modificar qué datos están presentes en los reportes
- Los ajustes por defecto del fabricante podrían apuntar el dispositivo a un servidor distinto; confirme el endpoint de reporte activo al incorporar el equipo
- Elegir UDP frente a TCP puede afectar el comportamiento de entrega y depende del firmware del dispositivo y de las condiciones de red
- Las actualizaciones OTA pueden ajustar el comportamiento del protocolo o introducir nuevas funciones que deben validarse frente a las expectativas de Plaspy
- Siempre pruebe un dispositivo representativo en un entorno controlado antes de desplegar flotas grandes para confirmar el comportamiento con Plaspy

## Por qué es importante entender el protocolo

Conocer cómo se comunica el AT07 ayuda a asegurar reportes consistentes, un mapeo preciso de la telemetría de sensores y una resolución más rápida de problemas cuando surjan inconvenientes de conectividad o integridad de datos. Tener una visión clara del contexto de comunicación también ayuda a los equipos de operaciones a planificar actualizaciones de firmware y la gestión del ciclo de vida del dispositivo.

- Una configuración adecuada del protocolo garantiza que eventos de ubicación y acelerómetro se entreguen de forma confiable a Plaspy
- Conocer los transportes y endpoints disponibles acelera la resolución de problemas de conectividad
- Mapear los sensores del dispositivo a los campos de la plataforma evita interpretar erróneamente lecturas de combustible o entradas analógicas
- Estar al tanto del comportamiento OTA previene cambios inesperados en los reportes tras una actualización de firmware
- Comprender el reporte a servidores duales ayuda a mantener continuidad mientras se prueban o cambian sistemas backend

## Por qué usar Plaspy con este protocolo

Usar el Totemtech AT07 con Plaspy ofrece una forma práctica de consolidar la telemetría de vehículos y activos en una sola plataforma que maneja la detección de protocolo y estandariza los datos entrantes. Plaspy recibe los reportes en un endpoint dedicado y aplica el parseo correspondiente para que las organizaciones puedan centrarse en la supervisión y las operaciones en lugar de manejar detalles de bajo nivel del protocolo.

Plaspy recibe el tráfico AT07 en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador. Dado que Plaspy usa el mismo puerto para todos los dispositivos compatibles, incorporar rastreadores adicionales es sencillo cuando los equipos están configurados para reportar al endpoint de Plaspy.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el Totemtech AT07 visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y orientación de implementación, verifique la información en el sitio del fabricante http://www.totemtek.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
