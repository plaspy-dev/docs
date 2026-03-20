---
slug: /sinotrack/st_902a/protocol
id: st_902a-protocol
sidebar_label: Protocol
title: SinoTrack - ST-902A Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el SinoTrack ST-902A con Plaspy, incluyendo conectividad y configuración del servidor
keywords:
  - Protocolo SinoTrack ST-902A
  - Protocolo GPS SinoTrack ST-902A
  - Compatibilidad ST-902A con Plaspy
  - Rastreador OBD GPS ST-902A
  - Protocolo de rastreo SinoTrack
  - Rastreo de flotas ST-902A
  - Rastreadores compatibles con Plaspy
  - Rastreador GPRS GPS ST-902A
  - Rastreo vehicular ST-902A
  - Protocolo de comunicación ST-902A
---

# SinoTrack - Protocolo ST-902A

Esta página describe el contexto del protocolo público para usar el SinoTrack ST-902A New Mini OBD GPS Tracker con Plaspy. Se enfoca en cómo el dispositivo se comunica con un servidor Plaspy en términos generales, no sensibles y agnósticos a la implementación, y explica las configuraciones que normalmente se ajustan para apuntar el rastreador a Plaspy para seguimiento en tiempo real, alertas y reproducción histórica.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece una guía general, no propietaria, adecuada para difusión pública.

## Resumen del protocolo

El ST-902A transmite la posición, el movimiento y la telemetría de alarmas del vehículo hacia un endpoint en línea a través de datos celulares. El rastreador también puede configurarse y consultarse mediante SMS para parámetros como el APN y la dirección del servidor, un método común para apuntar el reporte del dispositivo a una plataforma de terceros como Plaspy.

- Envía reportes periódicos de GPS y mensajes por eventos para alarmas y movimientos
- Incluye información identificadora para que el servidor receptor asocie los datos con un dispositivo
- Transporta telemetría por la conexión celular hacia un endpoint de servidor configurado para ingestión
- Admite configuración por comandos SMS para APN, dirección de servidor y consultas básicas del equipo
- Permite que Plaspy ingiera posiciones y eventos para monitoreo en tiempo real y reproducción histórica

## Cómo Plaspy detecta el protocolo

Plaspy recibe la telemetría entrante en un endpoint compartido y detecta automáticamente el protocolo del rastreador cuando llegan los datos. En la mayoría de las implementaciones, usted solo necesita configurar el dispositivo para que reporte a Plaspy y la plataforma se encargará de la identificación del protocolo y el procesamiento de mensajes.

- Apunte el dispositivo al endpoint del servidor Plaspy y la plataforma intentará la detección automática
- Normalmente no se requiere seleccionar el protocolo manualmente dentro de Plaspy cuando el rastreador está correctamente configurado
- La identidad del dispositivo, como el IMEI, es utilizada por Plaspy para registrar y asociar las fuentes entrantes
- Plaspy soporta los modos de transporte comunes usados por rastreadores celulares para ingestión directa
- Si múltiples dispositivos reportan, Plaspy utiliza el mismo puerto y endpoint compartido para consolidar las conexiones entrantes

## Transporte y contexto de conexión

La conexión a Plaspy se realiza por datos celulares y puede configurarse para usar UDP o TCP según el soporte del dispositivo. Para los equipos apuntados a Plaspy, el endpoint y el puerto necesarios se comparten entre dispositivos para simplificar el despliegue y la escalabilidad.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para configuración directa
- El puerto es 8888 y el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita el aprovisionamiento y la configuración remota vía SMS
- Los ajustes APN en el rastreador deben ser correctos para que el dispositivo establezca conectividad GPRS
- La configuración por SMS sigue siendo útil como respaldo o para dispositivos con conectividad de datos intermitente

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades ST-902A pueden afectar qué comandos y opciones de reporte están disponibles
- Revisiones de hardware o variantes regionales del modelo pueden cambiar los transportes soportados y la sintaxis de comandos SMS
- Cambios del fabricante en ajustes por defecto o formatos de comandos SMS pueden afectar el aprovisionamiento del dispositivo
- La elección del transporte (UDP vs TCP) se controla desde la configuración del equipo y debe coincidir con lo esperado por Plaspy
- Verifique el manejo del IMEI y el comportamiento de registro del dispositivo si opera en regiones con reglas de cumplimiento especiales
- Compare siempre el comportamiento del dispositivo con la documentación del fabricante antes de un despliegue a gran escala
- Para dispositivos que usan fallback por SMS, asegúrese de que el plan de la SIM soporte entrega de textos confiable en su área de operación

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador facilita una configuración más rápida, una operación confiable y una resolución eficiente de problemas al integrar el ST-902A con Plaspy. Un conocimiento básico de cómo reporta el equipo y qué ajustes se requieren reduce la fricción en el despliegue y ayuda a diagnosticar problemas de conectividad o calidad de datos.

- Garantiza que se apliquen APN y ajustes de servidor correctos para un reporte GPRS confiable
- Ayuda a decidir si usar transporte UDP o TCP para su despliegue
- Facilita la interpretación de eventos y mensajes de alarma recibidos por Plaspy
- Mejora la velocidad de aprovisionamiento en sitio usando configuración por SMS cuando no hay datos disponibles
- Reduce el tiempo para resolver brechas de reporte validando registro y conexión del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el ST-902A con Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad vehicular en tiempo real con un esfuerzo mínimo de instalación. La forma OBD plug and play combinada con ajustes de servidor configurables por SMS facilita el despliegue de dispositivos y su apuntado al endpoint compartido de Plaspy para seguimiento consolidado, alertas y reproducción histórica.

Para saber más sobre Plaspy visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la documentación de protocolo específica del fabricante y las notas de firmware más recientes en el sitio del fabricante https://www.sinotrackgps.com/ antes de un despliegue a gran escala.
