---
slug: /autofon/maiak_45/protocol
id: maiak_45-protocol
sidebar_label: Protocol
title: AutoFon - Маяк 4.5 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo AutoFon Маяк 4.5 y cómo comunica con Plaspy para rastreo y alertas
keywords:
  - Protocolo AutoFon Маяк 4.5
  - AutoFon Mayak 4.5 GPS
  - Compatibilidad Mayak 4.5 con Plaspy
  - Rastreador GPS AutoFon
  - Seguimiento por intervalos GPRS
  - Seguimiento por SMS
  - Protocolo de rastreo de vehículos
  - Protocolo para rastreo de activos
  - Documentación del protocolo de rastreador
  - Compatibilidad de rastreadores con Plaspy
---

# AutoFon - Protocolo Маяк 4.5

Esta página describe el contexto público del protocolo para usar el rastreador AutoFon Маяк 4.5 con Plaspy. Se centra en cómo el dispositivo informa posición y telemetría a un servidor y cómo esa comunicación se interpreta desde la perspectiva de integración con la plataforma. El contenido está pensado para ayudar a administradores e integradores a entender el comportamiento esperado sin exponer detalles sensibles de implementación.

El AutoFon Маяк 4.5 puede enviar la posición por SMS y mediante paquetes GPRS de intervalo hacia un servidor de monitoreo configurado. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que los comportamientos específicos del equipo deben validarse contra la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

A alto nivel, el protocolo del rastreador es el conjunto de reglas que el AutoFon Маяк 4.5 emplea para enviar datos de ubicación, estado y eventos a un servidor remoto o a números autorizados vía SMS. Para la integración con Plaspy, el protocolo determina cómo se identifica el dispositivo, qué campos de telemetría envía y cómo se codifican y entregan alertas como detección de movimiento o pérdida de alimentación.

- Permite el envío periódico de posiciones desde el dispositivo a un endpoint de monitoreo remoto en modo intervalo GPRS.
- Autoriza reportes por SMS y comandos remotos como canal alterno o de respaldo.
- Transmite telemetría de estado como detección de movimiento, nivel de batería y desconexión de alimentación externa hacia la plataforma de monitoreo.
- Soporta notificaciones de eventos para alarmas, intentos de manipulación o disparos por movimiento, de modo que la plataforma pueda generar alertas inmediatas.
- Proporciona la base para que Plaspy mapee los mensajes entrantes en marcadores en tiempo real, trayectorias históricas y notificaciones de eventos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un único endpoint y puerto compartido y detecta automáticamente el protocolo del rastreador cuando llegan los mensajes. En la mayoría de los casos, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al servidor de Plaspy.

- El dominio público del servidor de Plaspy es d.plaspy.com, que resuelve al endpoint de la plataforma.
- La dirección IP del servidor de Plaspy es 54.85.159.138 para los casos en que se requiera direccionamiento numérico.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos y utiliza el mismo puerto para todos los equipos compatibles.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP para entregar la telemetría a Plaspy.
- Cuando un Mayak 4.5 apunta al endpoint de Plaspy y envía reportes, Plaspy identifica y procesa automáticamente sus mensajes.

## Contexto de transporte y conexión

El contexto de transporte y conexión describe cómo el AutoFon Маяк 4.5 alcanza el servidor y qué opciones de direccionamiento se usan comúnmente. Este contexto es útil para configurar los parámetros APN del dispositivo, reglas de firewall en redes y para asegurar la entrega confiable de telemetría.

- El Mayak 4.5 puede enviar paquetes GPRS por intervalo a un servidor de monitoreo configurado o enviar reportes SMS a números autorizados.
- Para la conectividad con Plaspy, el dispositivo puede usar transporte UDP o TCP en el puerto 8888 según la configuración del equipo y el soporte del firmware.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección numérica 54.85.159.138 como destino de los reportes GPRS.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y red para despliegues de monitoreo.
- Use los controles de configuración del dispositivo (por SMS o interfaz de configuración) para establecer la dirección del servidor y el modo de transporte si el firmware del rastreador lo requiere.

## Notas de compatibilidad del protocolo

- La compatibilidad puede depender de la versión de firmware y de la revisión de hardware; distintos compilados de firmware pueden ofrecer opciones de reporte o conjuntos de campos ligeramente diferentes.
- El modo de transporte (UDP vs TCP) es seleccionable en muchos dispositivos y debe coincidir con la configuración del equipo para asegurar la entrega al puerto 8888 de Plaspy.
- El reporte por SMS es una solución práctica de respaldo para equipos o redes donde el GPRS es intermitente, pero las cargas útiles y comandos por SMS pueden variar según el firmware.
- Las variantes de hardware o unidades descontinuadas pueden omitir características que aparecen en páginas de producto más recientes; verifique la disponibilidad de funciones en la unidad específica que tenga.
- Los parámetros de configuración del fabricante, como APN, servidor de destino y números autorizados, deben estar correctamente configurados para la ingestión en Plaspy.
- Valide la compatibilidad contra la documentación del fabricante al planear despliegues masivos o cuando se requieran funciones avanzadas.

## Por qué es importante entender el protocolo

Comprender cómo el rastreador se comunica con una plataforma de monitoreo reduce el tiempo de configuración, previene errores comunes y facilita la resolución de problemas si los datos faltan o están malformados. Conocer el patrón de comunicación también ayuda a asegurar el despliegue y a establecer expectativas operativas correctas.

- Asegura la correcta configuración de APN y del servidor para que los paquetes de intervalo GPRS lleguen al endpoint de Plaspy.
- Ayuda a seleccionar el modo de transporte apropiado (UDP o TCP) según el entorno de red y el firmware del dispositivo.
- Facilita la interpretación del comportamiento del equipo, como intervalos de latido, reportes por movimiento y notificaciones por pérdida de alimentación.
- Reduce el tiempo de diagnóstico al clarificar si un problema es de red, configuración del dispositivo o del firmware.
- Permite planificar compensaciones entre vida de batería y frecuencia de reporte cuando se usan reportes por intervalo a largo plazo.

## Por qué usar Plaspy con este protocolo

Usar Plaspy para recibir y procesar reportes de dispositivos AutoFon Маяк 4.5 ofrece una forma central y consistente de visualizar datos de ubicación, monitorear eventos y gestionar alertas para activos o personas. La combinación de larga vida de batería, detección de movimiento y opciones duales de reporte (GPRS y SMS) hace que este rastreador sea una opción práctica para despliegues que necesitan telemetría de bajo mantenimiento y alertas confiables en lugar de reportes continuos de alta frecuencia.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores de flotas y activos como el AutoFon Маяк 4.5 visite https://www.plaspy.com. Para detalles específicos del protocolo del equipo, comportamiento de firmware y la guía más reciente del fabricante, verifique la información en el sitio oficial de AutoFon https://www.autofon.ru/. El soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme la implementación actual del dispositivo con el fabricante.
