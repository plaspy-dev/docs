---
slug: /arknav/k_18u/protocol
id: k_18u-protocol
sidebar_label: Protocol
title: ArkNav - K-18U Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar el registrador GPS ArkNav K-18U con Plaspy, incluyendo contexto de conexión y transporte
keywords:
  - Protocolo ArkNav K-18U
  - Protocolo GPS ArkNav K-18U
  - Compatibilidad ArkNav K-18U Plaspy
  - Protocolo registrador de datos GPS ArkNav
  - Protocolo de rastreo K-18U
  - Protocolo de comunicación ArkNav
  - Compatibilidad registrador GPS K-18U
  - Soporte de dispositivo Plaspy
  - Integración de rastreador GPS Plaspy
  - Rastreo de flotas ArkNav
---

# ArkNav - Protocolo K-18U

Esta página ofrece contexto público del protocolo para utilizar el registrador GPS ArkNav K-18U con Plaspy. Resume cómo las capacidades de registro GPS del K-18U y las sentencias NMEA que guarda se relacionan con el envío de datos a la red y la integración en una plataforma de flotas. El contenido se centra en conceptos de comunicación y puntos de configuración útiles al conectar este modelo a Plaspy, sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página explica el contexto general de transporte y detección para facilitar la configuración y la resolución de problemas.

## Resumen del protocolo

El ArkNav K-18U es, sobre todo, un registrador GPS que almacena sentencias NMEA completas y fijaciones de posición con sello de tiempo. Cuando el equipo se configura para reportar por red en lugar de solo guardar en tarjeta SD, un protocolo de reporte común permite que la plataforma reciba información de ubicación, hora y estado. Comprender esta capa de comunicación facilita la conexión del registrador con plataformas de flotas como Plaspy y garantiza que los datos GPS registrados se conviertan en telemetría utilizable.

- El protocolo del dispositivo define cómo el rastreador entrega datos de posición y sellos de tiempo a un servidor remoto.
- En el K-18U, sentencias NMEA registradas como GPRMC y GPGGA son la fuente de información de ubicación y hora.
- Una configuración con capacidad de reporte mueve los datos del registro local a un flujo que Plaspy puede interpretar.
- Campos a nivel de protocolo permiten a Plaspy asociar los reportes entrantes con una identidad de dispositivo y un sello temporal.
- Una configuración correcta del transporte y el direccionamiento es necesaria para que la plataforma reciba actualizaciones de ubicación continuas o periódicas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint compartido y selecciona automáticamente el parser de protocolo adecuado para el tráfico entrante. En la mayoría de los casos, un rastreador configurado correctamente que apunte al endpoint de Plaspy será detectado sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta el protocolo del rastreador de forma automática.
- Apuntar el dispositivo al endpoint del servidor Plaspy permite la detección automática sin elegir un protocolo dentro de Plaspy.
- Si un dispositivo está configurado para reportar, Plaspy empareja los mensajes entrantes con un protocolo soportado basándose en los patrones de reporte observados.
- Para pruebas iniciales, asegúrese de que el rastreador esté enviando datos al endpoint de Plaspy para que la detección pueda ocurrir.
- Si la detección no se produce, verifique la configuración de red del dispositivo, el tipo de transporte y que el dispositivo esté enviando activamente datos al endpoint configurado.

## Contexto de transporte y conexión

El K-18U puede utilizarse en modo de reporte en red según su configuración y firmware. Al conectarlo a Plaspy, preste atención a la selección de transporte y al direccionamiento, ya que son elementos clave para establecer un canal de reporte estable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración local.
- El dominio público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto que usa Plaspy para reportes de rastreadores es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Configure el K-18U para apuntar a d.plaspy.com o a 54.85.159.138 y seleccione el tipo de transporte que soporte el dispositivo.
- Alcanzabilidad de red, reglas de firewall y ajustes de datos móviles pueden afectar si los reportes llegan de forma fiable al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar cómo el K-18U reporta datos o qué opciones de transporte están disponibles.
- Revisiones de hardware o builds regionales del firmware pueden introducir diferencias de protocolo que afecten la integración.
- El K-18U es principalmente un registrador que almacena sentencias NMEA; el comportamiento de reporte por red depende de la configuración del equipo y de las funciones del firmware.
- Elija UDP o TCP en el dispositivo según lo que soporte el equipo y las condiciones de la red; algunos entornos favorecen UDP y otros requieren TCP.
- Confirme cómo el dispositivo envía su identidad o número de serie para que Plaspy pueda vincular los reportes entrantes al activo correcto.
- Siempre valide la compatibilidad y el comportamiento actual con la documentación del fabricante para la unidad y la versión de firmware específicas.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de reporte del dispositivo reduce el tiempo de configuración, simplifica la resolución de problemas y ayuda a mantener la fiabilidad a largo plazo al usar el K-18U con Plaspy. Conocer el transporte y el comportamiento de reporte esperado previene errores comunes de configuración y aclara cuándo un dispositivo está funcionando correctamente.

- Facilita la configuración inicial al alinear los ajustes de reporte del dispositivo con los requisitos de conexión de Plaspy.
- Acelera la resolución de problemas cuando los reportes no llegan a la plataforma, permitiendo revisar transporte, endpoint y reglas de firewall.
- Mejora la planificación para despliegues a escala de flota cuando entiende cómo los dispositivos se identifican y sus intervalos de reporte.
- Aumenta la continuidad de datos al combinar los modos de registro y reporte del dispositivo con las necesidades operativas.
- Permite verificar si un dispositivo está registrando localmente en tarjeta SD o si está reportando activamente al servidor.

## Por qué usar Plaspy con este protocolo

Usar el ArkNav K-18U en modo de reporte en red con Plaspy puede brindar a las organizaciones visibilidad continua de la ubicación de activos y recorridos históricos derivados de los datos GPS del dispositivo. La detección automática de protocolos de Plaspy y su modelo de puerto unificado simplifican la incorporación, de modo que los dispositivos correctamente configurados para apuntar al endpoint de Plaspy pueden empezar a reportar con mínima configuración manual en la plataforma.

Para obtener más información sobre Plaspy y cómo se integra con una amplia gama de rastreadores visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación de implementación para el ArkNav K-18U consulte la documentación del fabricante en https://www.arknavgps.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
