---
slug: /skymobile/sm_9570/protocol
id: sm_9570-protocol
sidebar_label: Protocol
title: SkyMobile - SM-9570 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador SkyMobile SM-9570 y su comunicación con Plaspy para un seguimiento de flotas confiable
keywords:
  - Protocolo SkyMobile SM-9570
  - Protocolo GPS SkyMobile SM-9570
  - Compatibilidad SM-9570 Plaspy
  - Protocolo de rastreo SM-9570
  - Protocolo rastreador vehicular SkyMobile
  - Protocolo embeddex track
  - Integración de dispositivos Plaspy
  - Seguimiento de flota SM-9570
  - Comunicación GPS Plaspy
  - Guía de protocolo SM-9570
---

# SkyMobile - Protocolo SM-9570

Esta página describe el contexto del protocolo público para usar el rastreador GPS SkyMobile SM-9570 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy, qué papel desempeña el protocolo del equipo en el seguimiento diario y qué esperar al integrar el SM-9570 en una implementación de gestión de flotas. La información está pensada para integradores de sistemas, administradores y usuarios técnicos que requieren una visión clara y no sensible de la relación de comunicación entre el dispositivo y Plaspy.

El SM-9570 combina un chipset GPS UBLOX de alta sensibilidad, múltiples interfaces de entrada y salida, y capacidades de reporte periódico. Está basado en el protocolo embeddex @ track para ofrecer flexibilidad de integración. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos admitidos y detecta automáticamente el protocolo del rastreador, aunque el comportamiento en tiempo de ejecución puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para las comunicaciones con Plaspy, el dominio del servidor es d.plaspy.com, la IP del servidor es 54.85.159.138 y el puerto es 8888.

## Resumen del protocolo

A grandes rasgos, el protocolo del SM-9570 define cómo el rastreador empaqueta la información de ubicación, estado y sensores y la envía a un servidor remoto como Plaspy. El propósito del protocolo es asegurar que la plataforma reciba telemetría consistente y reconocible que pueda traducirse en actualizaciones de ubicación, alertas y cambios en estados de entrada/salida para la monitorización y control de la flota.

- Permite que el SM-9570 reporte ubicación y estado periódicos a un punto remoto para visibilidad de la flota
- Proporciona información de identificación del dispositivo para que la plataforma asocie mensajes con el activo correcto
- Transporta telemetría como coordenadas GPS, detección de movimiento o sensores de movimiento y estados básicos de I/O para monitoreo remoto
- Soporta intervalos y condiciones de reporte configurables para que el dispositivo pueda ahorrar energía o aumentar la frecuencia de envío según se requiera
- Facilita la integración con plataformas de rastreo usando las convenciones del protocolo embeddex @ track cuando aplique

## Cómo Plaspy detecta el protocolo

Plaspy recibe las comunicaciones entrantes de los dispositivos en un único endpoint y puerto compartido y aplica detección automática para determinar el protocolo del rastreador en uso. En la mayoría de los casos, un SM-9570 correctamente configurado que reporte al endpoint de Plaspy será reconocido sin necesidad de seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy acepta los reportes de dispositivos en el dominio d.plaspy.com y en la dirección IP 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración en el lado del dispositivo
- El puerto y el endpoint son consistentes entre modelos, y Plaspy detecta automáticamente el protocolo del rastreador a partir de los mensajes entrantes
- Cuando el SM-9570 está apuntando al endpoint de Plaspy y reporta correctamente, por lo general no es necesario seleccionar el protocolo manualmente en Plaspy
- Los registros de la plataforma y las vistas de estado del dispositivo dentro de Plaspy pueden ayudarle a verificar que los mensajes se estén recibiendo y que el protocolo fue identificado

## Transporte y configuración de conexión

El transporte de conexión es un detalle de configuración del dispositivo que afecta cómo el SM-9570 envía mensajes de protocolo a Plaspy. El dispositivo puede configurarse para usar UDP o TCP y debe apuntar al endpoint y puerto de Plaspy como parte de la puesta en marcha inicial.

- El SM-9570 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones elegidas
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP directa 54.85.159.138 al enviar reportes
- El puerto 8888 es el puerto compartido que Plaspy usa para todos los dispositivos soportados
- Elija UDP para reportes ligeros y sin conexión, o TCP si la configuración del dispositivo o la red requiere un transporte orientado a conexión
- Asegúrese de que el APN del dispositivo y la política de la red celular permitan conexiones salientes al endpoint de Plaspy para evitar problemas de entrega

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar detalles de los mensajes, campos disponibles y comportamientos; siempre verifique la versión de firmware del dispositivo al validar compatibilidad
- Las revisiones de hardware o variantes regionales del SM-9570 pueden alterar los modos de transporte soportados o las funciones I/O disponibles
- Las implementaciones del protocolo por parte del fabricante a veces incluyen campos opcionales o extensiones; estos pueden variar entre compilaciones de firmware
- La elección de UDP frente a TCP afecta la semántica de entrega, pero no cambia el hecho de que Plaspy recibe los datos en el puerto 8888
- La detección automática de Plaspy maneja muchas variantes comunes, pero confirme durante la puesta en marcha que los reportes del dispositivo están llegando a d.plaspy.com o a 54.85.159.138
- Consulte con el fabricante las notas específicas de firmware cuando integre funciones avanzadas o extensiones propietarias

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del SM-9570 es práctico y ayuda a garantizar una operación confiable y sostenida con Plaspy. Saber qué envía el dispositivo, cómo se identifica y qué transporte utiliza acelera la puesta en marcha y la resolución de problemas.

- Acelera la configuración inicial asegurando que el dispositivo apunte al endpoint y puerto correctos de Plaspy
- Ayuda a diagnosticar problemas de conectividad al centrar la atención en el transporte, APN o en cuestiones relacionadas con el firmware
- Mejora la precisión de la interpretación de la telemetría cuando los usuarios de la plataforma saben qué campos de datos suele proporcionar el dispositivo
- Facilita el mantenimiento planificado y las actualizaciones de firmware al anticipar posibles cambios en el protocolo
- Permite configurar correctamente los intervalos de reporte y comportamientos de I/O para optimizar la vida de la batería y el uso de la red

## Por qué usar Plaspy con este protocolo

Usar el SkyMobile SM-9570 con Plaspy ofrece a las organizaciones una vía práctica hacia la visibilidad vehicular en tiempo real y la gestión centralizada de flotas. La alta sensibilidad GPS del SM-9570, la detección de movimiento y su I/O flexible, combinados con el manejo de dispositivos de Plaspy, entregan datos de ubicación y estado aprovechables para los equipos operativos. Dado que Plaspy usa un puerto único y consistente y detecta automáticamente el protocolo del rastreador, la integración suele ser directa cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

Para conocer más sobre Plaspy y cómo gestiona la integración de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y revisiones de hardware del SM-9570 consulte la documentación del fabricante en http://www.skymobile.com.co. El soporte del protocolo y el comportamiento del firmware del dispositivo pueden cambiar con el tiempo, por lo que se recomienda verificar la información actual con el fabricante.
