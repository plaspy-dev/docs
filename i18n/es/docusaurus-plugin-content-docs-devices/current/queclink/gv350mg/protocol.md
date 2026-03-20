---
slug: /queclink/gv350mg/protocol
id: gv350mg-protocol
sidebar_label: Protocol
title: QuecLink - GV350MG Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el tracker QuecLink GV350MG con Plaspy, con ajustes de conexión y compatibilidad
keywords:
  - protocolo QuecLink GV350MG
  - protocolo GPS QuecLink GV350MG
  - protocolo QuecLink GV350MG para Plaspy
  - protocolo de comunicación QuecLink GV350MG
  - protocolo de rastreo GV350MG
  - integración telemática GV350MG
  - compatibilidad de dispositivos Plaspy
  - guía de protocolo para rastreo de flotas
  - protocolo de tracker LTE Cat M1 NB1
  - protocolo de telemetría CAN bus
---

# QuecLink - Protocolo GV350MG

Esta página ofrece contexto público sobre el protocolo para usar el rastreador QuecLink GV350MG con Plaspy. Explica de manera concisa cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión son frecuentes y qué esperar durante la integración sin revelar detalles privados de implementación. El propósito es brindar información práctica que ayude a operadores e integradores a comprender la relación de comunicación entre el GV350MG y Plaspy.

El GV350MG es un rastreador vehicular compacto con LTE Advanced diseñado para gestión de flotas, logística de cadena de frío y monitoreo del transporte. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del dispositivo, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y las decisiones de implementación del fabricante. Esta página describe el contexto público de conexión y consideraciones de compatibilidad, y recomienda verificar la documentación oficial de QuecLink para detalles específicos de firmware.

## Descripción general del protocolo

A grandes rasgos, el protocolo de comunicación del GV350MG es el mecanismo que permite al dispositivo identificarse, reportar posición GNSS, enviar telemetría de CAN bus y sensores, y recibir comandos remotos o configuraciones cuando esto está soportado. Con Plaspy actuando como punto final servidor, el protocolo habilita la entrega estructurada de telemetría para que la plataforma muestre ubicación en tiempo real, alertas e informes históricos.

- El protocolo transporta fijaciones GNSS, marcas de tiempo, velocidad, rumbo y telemetría vehicular como parámetros CAN y eventos de entradas digitales.
- Incluye mecanismos para que el dispositivo se identifique y Plaspy pueda correlacionar los mensajes entrantes con el registro de vehículo correcto.
- El comportamiento de reporte (intervalos, disparadores por evento y buffering) lo determina el firmware y la configuración del dispositivo, y el protocolo lo transmite a Plaspy.
- El protocolo admite telemetría en vivo y la carga de mensajes almacenados cuando se restablece la conectividad, facilitando un rastreo de flota confiable.
- La telemetría enviada mediante el protocolo del rastreador es interpretada por Plaspy para generar alertas, eventos de geocercas y paneles de telemetría.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador. En la mayoría de los casos no es necesario seleccionar manualmente el protocolo en Plaspy cuando el GV350MG está configurado para reportar al endpoint de Plaspy, ya que la plataforma reconoce el formato del dispositivo y mapea la telemetría entrante al vehículo correspondiente.

- Plaspy escucha en un único puerto para todos los rastreadores soportados y usa detección automatizada para identificar formatos de protocolo entrantes.
- Los dispositivos configurados para reportar a d.plaspy.com o a la IP del servidor Plaspy serán procesados por el endpoint compartido de Plaspy.
- Cuando el GV350MG apunta correctamente al endpoint de Plaspy, pasos típicos como la identificación del dispositivo y el mapeo de telemetría se realizan automáticamente.
- La selección manual de protocolo dentro de Plaspy rara vez es necesaria si el dispositivo está reportando correctamente a la dirección y puerto de Plaspy.
- Si un rastreador no aparece, las verificaciones comunes incluyen confirmar la configuración de red del dispositivo, el APN y que esté enviando datos al host y puerto correctos de Plaspy.

## Transporte y contexto de conexión

El GV350MG soporta múltiples opciones de transporte para entregar telemetría y puede configurarse para usar TCP, UDP u otros transportes según los requerimientos del despliegue. Para la integración con Plaspy, los dispositivos pueden configurarse para reportar al dominio de Plaspy o a su IP pública usando el puerto compartido.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 al enviar datos a Plaspy.
- El endpoint público de servidor de Plaspy para reporte de dispositivos es d.plaspy.com y también es accesible mediante la IP pública 54.85.159.138 en el puerto compartido.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto para ingestión, lo que simplifica la configuración a escala.
- El GV350MG también soporta transportes alternativos a nivel de fabricante, pero TCP y UDP hacia el endpoint de Plaspy son las rutas de integración más comunes.
- Consideraciones de red como la configuración del APN, cobertura móvil y reglas de firewall son importantes para asegurar que el dispositivo pueda alcanzar d.plaspy.com en el puerto designado.

## Notas de compatibilidad del protocolo

- Los dispositivos GV350MG se reportan como compatibles con Plaspy, pero el comportamiento puede variar entre versiones de firmware y revisiones de hardware.
- Las actualizaciones de firmware del fabricante pueden cambiar campos de reporte, temporización y opciones de transporte soportadas; confirme los detalles de firmware antes de desplegar en masa.
- La elección entre TCP y UDP puede afectar la semántica de entrega y el buffering durante periodos de conectividad intermitente.
- La disponibilidad de parámetros CAN depende de la configuración del vehículo y de cómo se haya cableado el GV350MG a las redes del vehículo.
- Las guías de configuración del fabricante y las notas de lanzamiento son la fuente principal para comportamientos específicos de firmware y disponibilidad de funciones.
- Valide siempre un dispositivo de muestra de extremo a extremo contra Plaspy antes de desplegar flotas grandes para asegurar que la telemetría y los eventos esperados aparezcan correctamente.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a asegurar una configuración exitosa, agilizar la resolución de problemas y mantener una fiabilidad predecible a largo plazo al integrar el GV350MG con Plaspy. Tener claridad sobre cómo reporta el dispositivo y qué espera la plataforma reduce el tiempo de integración y facilita el monitoreo operativo consistente.

- Permite configurar correctamente el dispositivo para que la telemetría llegue a Plaspy de forma confiable y se muestre en los paneles.
- Ayuda a solucionar problemas de conectividad al confirmar transporte, endpoint e intervalos de reporte.
- Facilita la validación de telemetrías críticas como GNSS, parámetros CAN y eventos de entradas/salidas para flujos operativos.
- Orienta decisiones sobre la selección de transporte y planificación de red para una entrega estable de mensajes.
- Reduce el riesgo de despliegue al destacar impactos relacionados con versiones de firmware y revisiones de hardware en el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el GV350MG con Plaspy ofrece a las organizaciones una solución práctica para combinar GNSS de alta sensibilidad, telemetría CAN bus y conectividad celular resistente en un flujo centralizado de gestión de flotas. Plaspy ingiere ubicación y telemetría vehicular para que los equipos puedan monitorear el estado de la flota, aplicar geocercas, recibir alertas por eventos críticos y analizar rutas y comportamientos históricos.

El endpoint unificado de ingestión de Plaspy (d.plaspy.com en 54.85.159.138 en el puerto 8888) y la detección automática de protocolo simplifican el despliegue al eliminar la necesidad de seleccionar el protocolo dispositivo por dispositivo. Para saber más sobre Plaspy y cómo puede ayudar a gestionar dispositivos GV350MG a escala, visite https://www.plaspy.com. Para obtener los detalles más recientes del fabricante, notas de firmware y documentación específica de protocolo del dispositivo, verifique la información con QuecLink en https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
