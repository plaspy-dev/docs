---
slug: /box/box_tracker/protocol
id: box_tracker-protocol
sidebar_label: Protocol
title: Box - Box Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Box Tracker y su comunicación con Plaspy para integrar GPS en flotas
keywords:
  - protocolo Box Tracker
  - compatibilidad del Box Tracker GPS
  - integración Box Plaspy
  - protocolo de rastreo vehicular Box
  - comunicación Box Tracker
  - Box Tracker GPRS TCP UDP
  - gestión de flotas Box Tracker
  - compatibilidad Plaspy con trackers
  - guía de protocolo para trackers GPS
  - integración por terceros para trackers
---

# Box - Protocolo del Box Tracker

Esta página ofrece una visión pública del protocolo usado por el Box Tracker con Plaspy. Resume cómo suele comunicarse el dispositivo, qué papel tiene el protocolo en el reporte de datos y cómo Plaspy recibe e interpreta la información para el monitoreo de flotas y activos. El contenido se centra en contexto de alto nivel y no sensible, apropiado para integradores de sistemas y usuarios técnicos.

El Box Tracker es un rastreador vehicular compacto orientado a integradores terceros. Soporta GSM cuatribanda, GPRS y transporte tanto por TCP como por UDP, e incluye características como batería de respaldo, memoria interna, entradas digitales y analógicas, y buena recepción GPS y GSM. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento en tiempo de ejecución puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de reglas y convenciones que el Box Tracker usa para enviar ubicación, estado y datos de entradas a un servidor remoto como Plaspy. A grandes rasgos, el protocolo permite al dispositivo identificarse, transmitir telemetría y aportar el contexto necesario para que Plaspy convierta los reportes en registros de ubicación y eventos utilizables.

- Establece metadatos de identificación para que Plaspy asocie un reporte de dispositivo con un vehículo o activo registrado.
- Transporta posiciones GPS y telemetría asociada que Plaspy convierte en registros de posición y movimiento.
- Envía indicadores de eventos y estados de entradas (digitales y analógicas) que Plaspy presenta como alertas o canales personalizados.
- Proporciona mensajes de latido (keepalive) para que Plaspy pueda rastrear la conectividad del dispositivo y su actividad reciente.
- Soporta tanto transportes persistentes como sin conexión, permitiendo que los dispositivos funcionen en diversas condiciones de red.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un punto compartido y realiza detección automática de protocolo, por lo que los integradores por lo general no necesitan seleccionar manualmente un protocolo cuando el dispositivo apunta al endpoint de Plaspy. La configuración correcta del dispositivo para reportar al endpoint de Plaspy es el requisito principal para la detección automática.

- Plaspy escucha en un único puerto compartido para todos los dispositivos y protocolos soportados.
- Cuando el Box Tracker reporta a Plaspy, la plataforma inspecciona los datos entrantes de forma segura y no invasiva para mapearlos a un perfil de dispositivo conocido.
- Normalmente los usuarios configuran el destino de reporte del equipo; una vez que el reporte apunta a Plaspy, el sistema intentará identificar automáticamente el protocolo del dispositivo.
- La detección automática reduce los pasos de configuración para integradores que usan múltiples modelos de rastreadores.
- Si un dispositivo utiliza ajustes no estándar o variantes de firmware, puede ser necesario realizar ajustes manuales en el equipo para asegurar reportes consistentes.

## Contexto de transporte y conexión

El contexto de conexión define cómo el Box Tracker alcanza a Plaspy a través de redes móviles. El rastreador puede usar UDP o TCP dependiendo de la configuración del dispositivo y las capacidades del firmware, y puede apuntar a Plaspy por nombre de dominio o por dirección IP.

- Los dispositivos pueden configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com para enrutamiento basado en DNS.
- También pueden configurarse para reportar directamente a la IP del servidor de Plaspy 54.85.159.138 cuando se desee.
- Plaspy recibe reportes de dispositivos en el puerto 8888 y soporta transporte tanto TCP como UDP en ese puerto.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración de DNS y puertos para los integradores.
- Elija UDP para menor sobrecarga y datagramas más rápidos en redes con pérdida, o TCP cuando se prefiera entrega fiable y ordenada, sujeto al soporte por parte del dispositivo y el firmware.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué campos o eventos transmite el dispositivo y cuándo lo hace; siempre revise las notas de la versión del firmware.
- Revisiones de hardware a veces alteran las entradas disponibles, el comportamiento de la memoria interna o la gestión de energía, lo que afecta la cadencia de reporte.
- Las opciones de configuración del fabricante pueden habilitar o deshabilitar transportes y reportes de eventos, lo que impacta la compatibilidad con plataformas aguas abajo.
- La selección de transporte (TCP vs UDP) está determinada por la capacidad y configuración del dispositivo; verifique que el transporte elegido esté permitido en su entorno de red.
- El registro interno y el comportamiento de la batería de respaldo pueden influir en cuándo el dispositivo sube datos almacenados tras recuperarse la conectividad.
- Valide la compatibilidad y los pasos de despliegue según la documentación oficial del fabricante para detalles específicos por modelo.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del Box Tracker ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y mantener la estabilidad operativa a largo plazo al integrar los dispositivos con Plaspy. Saber qué partes de la comunicación son configurables y cuáles dependen del firmware reduce la incertidumbre durante el despliegue.

- Ayuda a confirmar que la identificación del dispositivo y los formatos de reporte se mapeen correctamente al registro de dispositivo en Plaspy.
- Facilita la elección de transporte y ajustes de red apropiados para su entorno.
- Permite una resolución de problemas eficiente cuando los mensajes no se reciben o aparecen incompletos en Plaspy.
- Apoya la planificación sobre el impacto de actualizaciones de firmware, la subida de datos en respaldo y el reporte ante fallos de energía.
- Mejora la confianza al validar que entradas personalizadas y disparadores de eventos se transmiten según lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el Box Tracker con Plaspy ofrece a las organizaciones un camino sencillo para capturar posiciones GPS, estados de entradas y datos de eventos desde hardware compacto orientado a integradores. El modelo de conexión compartida de Plaspy y la detección automática de protocolos reducen la carga de configuración, de modo que los integradores puedan concentrarse en el despliegue y uso operativo en lugar de gestionar múltiples endpoints distintos.

Para obtener más información sobre Plaspy y cómo maneja integraciones de dispositivos, visite https://www.plaspy.com. Para los detalles más actuales sobre protocolos específicos de dispositivo, notas de firmware y orientación de implementación, verifique la información con el fabricante en http://www.boxtelematics.com/.
