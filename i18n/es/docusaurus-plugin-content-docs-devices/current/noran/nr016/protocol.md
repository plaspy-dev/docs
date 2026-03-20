---
slug: /noran/nr016/protocol
id: nr016-protocol
sidebar_label: Protocol
title: Noran - NR016 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Noran NR016 y su comunicación con Plaspy para rastreo en tiempo real y gestión de flotas
keywords:
  - Protocolo Noran NR016
  - Noran NR016 GPS
  - Compatibilidad NR016 Plaspy
  - Protocolo de rastreo Noran
  - Protocolo de comunicación NR016
  - Rastreador GPS Noran Plaspy
  - Rastreo vehicular NR016
  - Telemetría y alarmas NR016
  - Rastreo de flotas Noran
  - Rastreo antirrobo NR016
---

# Noran - Protocolo NR016

Esta página ofrece un contexto público sobre el protocolo utilizado por el rastreador Noran NR016 al integrarse con la plataforma Plaspy. Describe, en términos generales y no sensibles, cómo el dispositivo se comunica con Plaspy y resalta las configuraciones de conexión y las consideraciones operativas relevantes durante la integración y el despliegue.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado a la plataforma. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en el rol de la comunicación y en recomendaciones prácticas de integración en lugar de detalles internos del dispositivo.

## Descripción general del protocolo

El NR016 utiliza posicionamiento celular y satelital para reportar ubicación, alarmas y telemetría de sensores a un endpoint de servidor. El protocolo del equipo define cómo el rastreador se identifica, cómo se empaquetan los datos de ubicación y evento para su transmisión y cómo se reportan las alarmas y la telemetría para que Plaspy pueda mostrarlas y actuar sobre ellas.

- Transporta coordenadas GPS y localización híbrida por estación base para ofrecer actualizaciones de posición consistentes al servidor.
- Reporta eventos de alarma y sensores como SOS, vibración, ACC, estado de puertas y baúl, y notificaciones de batería baja.
- Envía telemetría y estados de entradas/salidas para control de relés, inmovilización e entradas de sensores externos para que Plaspy pueda generar alertas y acciones.
- Permite reportes periódicos de posición y señales de vida para que Plaspy mantenga la presencia del dispositivo y el historial.
- Soporta transporte sobre la red de datos móviles para alcanzar el endpoint configurado y que los reportes se ingesten en los paneles de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint y puerto compartidos y está diseñado para determinar automáticamente el protocolo del rastreador cuando un equipo correctamente configurado se reporta. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está apuntando al endpoint de Plaspy.

- El dominio del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com.
- La IP del servidor de Plaspy para el reporte de dispositivos es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y las opciones del equipo.
- Cuando el NR016 apunta al endpoint de Plaspy y el dispositivo es alcanzable, Plaspy detectará el protocolo del dispositivo automáticamente para su ingestión.

## Transporte y contexto de conexión

El comportamiento de conexión lo determina la configuración del NR016 y la red móvil. El rastreador envía sus reportes a través de datos celulares GPRS/3G al servidor dirigido por dirección o IP; Plaspy proporciona un punto de entrada único y compartido para esos reportes, de modo que los instaladores puedan apuntar los equipos a un endpoint conocido.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El transporte puede ser UDP o TCP en el puerto 8888 según la capacidad del dispositivo y la elección del instalador.
- Todos los equipos que reportan a Plaspy usan el puerto 8888, lo que simplifica reglas de firewall y de red.
- Use un APN estable y cobertura celular confiable para asegurar que los reportes lleguen al endpoint de Plaspy.
- Pruebe la conectividad desde el dispositivo hacia d.plaspy.com o 54.85.159.138 para validar el reporte durante la instalación.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades NR016 pueden cambiar exactamente qué mensajes y campos de telemetría se envían; confirme la versión de firmware al validar el comportamiento.
- Las revisiones de hardware u accesorios opcionales (micrófono, sensor de vibración externo, E/S adicionales) pueden afectar qué entradas y alarmas están disponibles en Plaspy.
- Algunos dispositivos permiten cambiar el transporte entre UDP y TCP; elija el modo que coincida con el firmware instalado y el entorno de red.
- La configuración del fabricante mediante SMS o herramientas locales de setup puede ser necesaria para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando se reporta al puerto compartido, pero la configuración del lado del dispositivo debe estar correctamente establecida para que la detección tenga éxito.
- Siempre valide funciones clave como SOS, comandos de inmovilizador y mapeos de E/S después de la instalación para garantizar el comportamiento esperado.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a instaladores, integradores y operadores de flotas a fijar expectativas sobre la configuración, la resolución de problemas y la confiabilidad a largo plazo cuando el NR016 se usa con Plaspy. Tener claro cómo y qué reporta el rastreador reduce tiempos de inactividad y mejora la respuesta ante incidentes.

- Asegura la correcta dirección del servidor y la configuración de transporte para que los equipos lleguen a Plaspy de forma confiable.
- Ayuda a verificar que las alarmas y la telemetría (ACC, puertas, vibración, SOS) se mapeen a las alertas y paneles de Plaspy.
- Orienta los pasos de resolución cuando falta telemetría o los reportes son intermitentes.
- Informa las decisiones sobre actualizaciones de firmware o cambios de hardware que puedan alterar el contenido de los mensajes.
- Facilita la planificación de reglas de firewall y de red al saber que Plaspy usa un único puerto compartido.

## Por qué usar Plaspy con este protocolo

El NR016 está diseñado para seguridad vehicular y telemática de flotas, y cuando reporta a Plaspy sus actualizaciones de ubicación, alarmas y telemetría de E/S se vuelven accionables en un sistema centralizado. Organizaciones que gestionan autos, taxis, autobuses o flotas comerciales ligeras se benefician de combinar las entradas orientadas al vehículo y las funciones antirrobo del NR016 con los mapas, alertas e informes de Plaspy.

Si desea saber más sobre Plaspy y cómo se integra con dispositivos como el Noran NR016, visite https://www.plaspy.com. Verifique siempre los detalles más recientes específicos del dispositivo, el comportamiento del firmware y las notas de implementación en el sitio del fabricante http://www.norantracker.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
