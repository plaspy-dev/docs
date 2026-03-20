---
slug: /atrack/ax7/protocol
id: ax7-protocol
sidebar_label: Protocol
title: ATrack - AX7 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el ATrack AX7 con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - protocolo ATrack AX7
  - protocolo GPS ATrack AX7
  - protocolo de comunicación ATrack AX7
  - protocolo de rastreo ATrack AX7
  - compatibilidad ATrack AX7 Plaspy
  - rastreador AX7 OBDII
  - protocolo rastreador ATrack para vehículos
  - protocolo rastreador GPS Plaspy
  - rastreo de flotas AX7
  - protocolo GPS OBDII
---

# ATrack - Protocolo AX7

En esta página encontrará una referencia pública sobre el protocolo para utilizar el rastreador vehicular ATrack AX7 con la plataforma Plaspy. El foco está en los aspectos de comunicación y conexión relevantes al integrar el AX7 para control de flotas, seguimiento vehicular o aplicaciones de renta de autos. El AX7 es un dispositivo tipo OBDII con antenas GPS y GSM integradas, memoria interna, batería de respaldo, modo de suspensión y soporte para reportes por TCP y UDP; estas características de hardware influyen en cómo se comunica con una plataforma en la nube como Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece una guía pública e independiente de la implementación sobre cómo el AX7 suele comunicarse con Plaspy, alentando siempre a verificar contra la documentación del fabricante y las notas de firmware.

## Visión general del protocolo

El protocolo de un rastreador GPS define cómo se identifica el dispositivo, cómo envía datos de ubicación y eventos, y cómo recibe comandos opcionales del servidor. En el caso del AX7, el objetivo público del protocolo es entregar de forma fiable información de posición, estado y eventos desde el dispositivo hacia Plaspy para que la plataforma pueda mostrar y procesar esos datos en la supervisión y operación de flotas.

- Permite que el AX7 reporte ubicación, velocidad, marcas de tiempo e indicaciones de eventos a Plaspy en un formato que la plataforma pueda procesar
- Proporciona identidad o ID del equipo para que Plaspy asocie los reportes entrantes con el registro vehicular correcto
- Transporta datos de estado como alimentación, batería y eventos internos según la configuración del AX7 y el comportamiento del firmware
- Soporta tanto transporte TCP como UDP según la configuración del dispositivo y las condiciones de red
- Permite a Plaspy reconocer o procesar los reportes entrantes y aplicar funciones de plataforma como geocercas, alertas y reproducción histórica

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes de muchos modelos de rastreadores a través de un endpoint unificado y detecta automáticamente el protocolo cuando un dispositivo se conecta y comienza a reportar. En la mayoría de los casos, un AX7 correctamente configurado enviará datos a Plaspy y la plataforma interpretará la secuencia entrante sin necesidad de seleccionar el protocolo manualmente.

- El endpoint público de Plaspy es d.plaspy.com y también es accesible en la dirección IP 54.85.159.138
- La plataforma escucha en el puerto 8888, usado para todos los dispositivos soportados en Plaspy
- El AX7 puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888
- Cuando el dispositivo apunte al endpoint de Plaspy y envíe sus reportes iniciales, Plaspy detectará y procesará el protocolo AX7 automáticamente
- Por lo general, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar a d.plaspy.com en el puerto adecuado

## Transporte y contexto de conexión

La selección de transporte y la resolución por DNS o IP determinan cómo el AX7 envía sus datos a Plaspy. El AX7 soporta tanto TCP como UDP y puede configurarse a nivel de dispositivo para usar el transporte que mejor se adapte al entorno de despliegue y a la red.

- El AX7 puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del equipo y el soporte del firmware
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Plaspy utiliza el puerto 8888 como puerto compartido para todos los dispositivos, lo que simplifica la configuración en flotas con modelos mezclados
- TCP ofrece entrega más confiable en ciertas condiciones de red, mientras que UDP puede preferirse por menor overhead en reportes frecuentes
- Firewalls de red y las configuraciones de los operadores móviles pueden afectar la entrega; asegúrese de que las conexiones salientes del dispositivo a d.plaspy.com en el puerto 8888 estén permitidas

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles o el comportamiento en el reporte de eventos; siempre verifique la versión de firmware del dispositivo al validar el comportamiento
- Revisiones de hardware y variantes regionales pueden introducir diferencias en las bandas GSM soportadas o en el comportamiento de E/S que afectan lo que se reporta
- Las herramientas de configuración del fabricante o servidores de aprovisionamiento pueden modificar las configuraciones por defecto de reporte, como el tipo de transporte o la dirección del servidor
- La elección entre TCP y UDP puede afectar la latencia y la fiabilidad de entrega, pero Plaspy acepta ambos en el puerto 8888
- Valide parámetros como la dirección del servidor, el puerto y el transporte con dispositivos en ambiente de producción antes de un despliegue a gran escala
- En caso de duda, consulte la documentación oficial del fabricante para pasos de configuración específicos del dispositivo

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AX7 ayuda a asegurar una instalación fiable, agilizar la resolución de problemas y mantener visibilidad a largo plazo en operaciones de flota. Saber qué envía el rastreador y cómo Plaspy lo acepta reduce el tiempo de integración y facilita el diagnóstico de problemas comunes.

- Garantiza que la dirección del servidor y el transporte estén correctamente configurados para que el dispositivo reporte con éxito a Plaspy
- Ayuda a resolver problemas de conectividad relacionados con restricciones de red, configuraciones APN o desajustes de transporte
- Aclara cómo las actualizaciones de firmware o los valores predeterminados del fabricante pueden cambiar el comportamiento de los reportes y los campos de datos
- Ayuda a interpretar estados del dispositivo como el uso de la batería de respaldo, reportes de memoria interna y las indicaciones de modo de suspensión
- Mejora la fiabilidad operativa al alinear las configuraciones del dispositivo con las expectativas de la plataforma Plaspy

## Por qué usar Plaspy con este protocolo

Usar el ATrack AX7 con Plaspy ofrece un camino directo hacia la visibilidad vehicular y la supervisión operativa de flotas. La forma OBDII del AX7 simplifica la instalación, mientras que la memoria interna, la batería de respaldo y el seguimiento basado en eventos contribuyen a reportes consistentes incluso con condiciones de red intermitentes. Combinado con la detección automática de protocolo y los ajustes de conexión compartidos de Plaspy, las organizaciones pueden desplegar dispositivos AX7 con una configuración mínima en la plataforma.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores como el ATrack AX7, visite https://www.plaspy.com. Para detalles específicos más actuales del protocolo del dispositivo, notas de firmware e instrucciones de configuración, verifique la información en el sitio del fabricante https://www.atrack.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
