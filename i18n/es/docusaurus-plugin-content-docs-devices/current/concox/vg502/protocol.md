---
slug: /concox/vg502/protocol
id: vg502-protocol
sidebar_label: Protocol
title: Concox - VG502 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador OBDII Concox VG502 con Plaspy y habilitar telemetría y ubicación confiables
keywords:
  - protocolo Concox VG502
  - protocolo GPS Concox VG502
  - compatibilidad VG502 Plaspy
  - comunicación rastreador Concox
  - protocolo OBDII VG502
  - protocolo rastreador GPS Plaspy
  - protocolo seguimiento vehicular VG502
  - protocolo rastreador para gestión de flotas
  - protocolo rastreador para seguro basado en uso
  - protocolo OBDII BLE
---

# Concox - Protocolo VG502

Esta página describe el contexto público del protocolo para usar el rastreador OBDII GNSS Concox VG502 con Plaspy. Explica, a alto nivel, cómo este dispositivo plug and play comunica datos de ubicación y telemetría con Plaspy y qué esperar al integrar unidades VG502 en una implementación de Plaspy. El enfoque es el contexto de conexión y protocolo, no detalles internos o sensibles de implementación.

El VG502 envía soluciones GNSS y telemetría OBDII —como kilometraje, códigos de falla, estado de ignición (ACC), consumo de combustible y RPM del motor— a un servidor remoto para que Plaspy los procese. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la operación en campo puede diferir ligeramente entre unidades o compilaciones de firmware.

## Visión general del protocolo

El protocolo de reporte del VG502 define cómo el dispositivo se identifica, transmite la ubicación y la telemetría del vehículo, e informa al servidor sobre eventos como cambios de ignición, fallas y alertas de comportamiento de conducción. Para la integración con Plaspy, la función pública del protocolo es entregar datos de posición y diagnóstico utilizables y confiables al endpoint configurado de Plaspy.

- Permite que el rastreador envíe actualizaciones de ubicación GNSS y telemetría OBDII a un servidor remoto para mapas en tiempo real e informes históricos.
- Transporta identidad del dispositivo e información de sesión para que Plaspy asocie los mensajes entrantes con el registro vehicular correcto.
- Reporta notificaciones de eventos como transiciones de geocerca, colisiones y extracción del dispositivo para que Plaspy pueda generar alertas y análisis.
- Proporciona información periódica de estado y salud que Plaspy usa para monitoreo de dispositivos y reportes de disponibilidad.
- Soporta configuración local opcional y actualizaciones de firmware vía BLE mientras el reporte a la red continúa hacia el servidor.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de los rastreadores compatibles en un único endpoint y puerto compartidos. Cuando un VG502 correctamente configurado reporta a Plaspy, la plataforma inspecciona el tráfico entrante y determina automáticamente el protocolo del rastreador, por lo que normalmente no se requiere seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy usa el endpoint compartido d.plaspy.com para el reporte de dispositivos.
- La IP del servidor Plaspy para reportes es 54.85.159.138 y el servicio escucha en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, lo que simplifica la configuración de flotas.
- Con el dispositivo apuntando al endpoint de Plaspy, la detección del protocolo es automática; normalmente solo debe asegurarse de que el rastreador esté configurado para reportar a Plaspy.

## Transporte y contexto de conexión

Las opciones de transporte y conexión influyen en cómo el VG502 alcanza a Plaspy, pero no cambian el propósito general del protocolo. El dispositivo soporta enlace celular para reportes WAN y puede configurarse para reportar por UDP o TCP según las necesidades de la implementación y las herramientas de configuración del dispositivo.

- El VG502 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El reporte utiliza el puerto 8888 y el dispositivo puede emplear UDP o TCP en ese puerto según lo que soporte.
- Usar un nombre de dominio permite resolución DNS a nivel de operador y facilita cambios futuros de endpoint.
- La configuración por IP directa puede ser útil en entornos restringidos o donde el DNS es limitado.
- Asegúrese de que la SIM y la configuración del operador permitan conexiones salientes al endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden alterar el tiempo de envío de mensajes, los campos de telemetría disponibles y el comportamiento de funciones entre dispositivos.
- Revisiones de hardware o variantes regionales pueden exponer distintos parámetros OBDII o características de rendimiento GNSS.
- Las herramientas de configuración del fabricante o ajustes locales vía BLE pueden cambiar el transporte (UDP versus TCP) y la frecuencia de reporte.
- Algunos vehículos exponen PIDs OBDII de forma distinta; la compatibilidad con diagnósticos específicos puede variar según el vehículo y el software.
- Verifique siempre que el dispositivo apunte al endpoint de Plaspy y que la conectividad celular esté activa durante las pruebas.
- Confirme el comportamiento de sensores opcionales o accesorios BLE según el manual del dispositivo si depende de esos flujos de datos en Plaspy.
- Valide la compatibilidad contra la documentación del fabricante y las notas de la versión del firmware para detalles específicos.

## Por qué es importante conocer el protocolo

Entender el protocolo de comunicación y el contexto de conexión del VG502 ayuda a garantizar una configuración fluida, una resolución de problemas más eficiente y una operación confiable a largo plazo dentro de Plaspy. Saber qué envía el dispositivo y cómo se conecta permite una mejor configuración, análisis de causa raíz más rápido y un comportamiento de reporte más predecible.

- Reduce el tiempo de despliegue al alinear transporte y ajustes de endpoint del dispositivo con las expectativas de Plaspy.
- Facilita el diagnóstico de problemas de conectividad al separar fallas de enrutamiento de red de diferencias de protocolo o firmware.
- Mejora el ajuste de eventos y alertas al aclarar cómo y cuándo el dispositivo reporta telemetría o eventos específicos.
- Ayuda a validar los campos de datos OBDII para que los informes de Plaspy muestren los parámetros vehiculares esperados.
- Soporta tareas de ciclo de vida como actualizaciones de firmware y cambios de configuración al comprender el comportamiento esperado tras actualizaciones.

## Por qué usar Plaspy con este protocolo

Usar el Concox VG502 con Plaspy ofrece una vía eficiente para obtener visibilidad vehicular en tiempo real y telemetría OBDII sin instalación fija. El factor de forma OBDII y la doble posición GNSS hacen del VG502 una opción práctica para despliegues rápidos en autos corporativos, flotas mixtas y programas de seguro basado en uso, mientras que Plaspy ingiere y normaliza los datos del dispositivo para mapas, informes y alertas.

Plaspy acepta reportes VG502 en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto 8888 usando UDP o TCP. Debido a que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y realiza detección automática del protocolo, la mayoría de las unidades VG502 solo necesitan apuntar al endpoint de Plaspy para comenzar a reportar.

Learn more about Plaspy and how your fleet can use the platform at https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify information on the official Concox website at https://www.iconcox.com/ as implementation and firmware behavior can change over time.
