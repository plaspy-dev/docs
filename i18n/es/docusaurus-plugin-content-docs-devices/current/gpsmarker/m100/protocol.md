---
slug: /gpsmarker/m100/protocol
id: m100-protocol
sidebar_label: Protocol
title: GPSMarker - M100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GPSMarker M100 y su compatibilidad con servidores Plaspy y ajustes de reporte
keywords:
  - Protocolo GPSMarker M100
  - Protocolo GPS del GPSMarker M100
  - Protocolo GPSMarker M100 para Plaspy
  - Protocolo de comunicación GPSMarker M100
  - Protocolo de rastreo GPSMarker M100
  - Protocolo del rastreador GPSMarker
  - Compatibilidad de dispositivos Plaspy
  - Rastreo vehicular GPSMarker
  - Integración GPSMarker M100
  - Protocolo GPRS abierto
---

# GPSMarker - Protocolo M100

Esta página resume el contexto público del protocolo para usar el rastreador GPSMarker M100 con la plataforma Plaspy. Describe de manera general y no sensible el papel del protocolo de reporte del dispositivo y explica cómo el rastreador se comunica con los servidores Plaspy, de modo que integradores y administradores puedan configurar el reporte y validar la conectividad. La información sirve para la configuración, resolución de problemas y comprobaciones de compatibilidad, preservando los detalles de implementación del fabricante.

El GPSMarker M100 es un rastreador GPS compacto y de larga duración con receptor de 72 canales, múltiples sensores y soporte para un protocolo estilo GPRS abierto según lo descrito por el fabricante. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo apunta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles específicos del dispositivo deben validarse con la documentación oficial de GPSMarker.

## Resumen del protocolo

El protocolo de comunicación del M100 define cómo el rastreador informa posiciones, eventos de sensores y estado a un servidor remoto, y cómo el servidor puede responder o reconocer esos reportes. En la práctica, el protocolo es el puente entre el hardware del dispositivo y los servicios de Plaspy, permitiendo que la ubicación y la telemetría se conviertan en datos útiles para monitoreo y alertas.

- Permite que el M100 envíe fijaciones de posición, eventos de inicio de movimiento, reportes de choque o impacto, lecturas de temperatura y alertas SOS a un servidor remoto.
- Proporciona un identificador consistente o mecanismo de registro de dispositivo para que Plaspy asocie los reportes entrantes con el activo correcto.
- Entrega la telemetría en un formato que Plaspy puede interpretar y convertir en historial de ubicaciones, alertas y elementos de tablero sin exponer los detalles internos del firmware.
- Soporta el reporte remoto vía datos celulares usando un método de conexión estilo GPRS abierto, según lo indicado por el fabricante.
- Puede verse afectado por revisiones de firmware o parámetros de configuración que modifiquen intervalos de reporte, umbrales de eventos o los campos de sensores disponibles.

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint público compartido para el reporte de dispositivos e incluye detección automática de protocolo, por lo que la mayoría de los rastreadores no requieren selección manual de protocolo dentro de la plataforma. Cuando el M100 se configura para reportar a Plaspy, la plataforma asocia las conexiones entrantes con el dispositivo y protocolo correctos de forma automática.

- Plaspy escucha conexiones de dispositivos en el servidor público d.plaspy.com y en la dirección IP 54.85.159.138.
- Todos los dispositivos compatibles usan el mismo puerto de red en Plaspy, lo que simplifica la configuración y el enrutamiento dentro de la plataforma.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el M100 envía reportes válidos al endpoint de Plaspy.
- En muchas implementaciones, los usuarios solo necesitan apuntar el dispositivo al endpoint de Plaspy y configurar el tipo de transporte; normalmente no se requiere seleccionar el protocolo manualmente.
- Si un dispositivo no aparece, los pasos prácticos siguientes son verificar los ajustes de reporte, el APN, el tipo de transporte y la versión de firmware.

## Transporte y contexto de conexión

Las opciones de conexión, como UDP o TCP, y la dirección del servidor son parte de la configuración del dispositivo y determinan cómo el M100 alcanza a Plaspy. El M100 puede configurarse para usar uno u otro transporte según las capacidades del modelo y las preferencias de despliegue.

- El M100 puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 cuando la resolución DNS no esté disponible o no sea deseada.
- Plaspy usa el puerto 8888 para todos los dispositivos, lo que estandariza despliegues y la configuración de cortafuegos para flotas.
- La elección entre UDP y TCP puede afectar las características de entrega y el comportamiento de reintento; seleccione el transporte que coincida con la configuración del dispositivo y el entorno de red.
- Asegúrese de que el APN del dispositivo y el plan de datos móviles permitan conexiones salientes al endpoint de Plaspy y que cualquier firewall intermedio permita el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar cómo el M100 estructura o programa los reportes; verifique la versión de firmware del dispositivo al solucionar problemas.
- Las revisiones de hardware y las configuraciones opcionales de sensores pueden afectar qué campos de telemetría están presentes en los reportes.
- La selección del transporte (UDP o TCP) debe coincidir con la configuración del dispositivo para asegurar el reporte exitoso a Plaspy.
- El dispositivo soporta reporte estilo GPRS abierto según lo indicado por el fabricante, pero los detalles de implementación pueden variar según el firmware.
- Valide la compatibilidad contra la documentación oficial de GPSMarker y las notas de firmware antes de despliegues a gran escala.
- Algunas funciones de sensor, como SOS de pánico, detección de choques, monitoreo de temperatura y control de relé, dependen de las opciones de hardware y de la configuración local.

## Por qué es importante entender el protocolo

Comprender cómo el M100 se comunica con Plaspy reduce la fricción en la puesta en marcha, aumenta la confiabilidad en producción y ayuda a los equipos a solucionar problemas de conectividad o datos de forma más eficiente. El conocimiento del protocolo también ayuda a alinear la configuración del dispositivo con los requisitos operativos y de cumplimiento.

- Garantiza la configuración correcta del dispositivo para que la ubicación y los datos de sensores lleguen de manera confiable a Plaspy.
- Ayuda a los administradores a elegir los ajustes de transporte y red apropiados para su entorno.
- Facilita la resolución de problemas por datos faltantes al enfocar las comprobaciones en APN, transporte, dominio o IP y compatibilidad de firmware.
- Apoya la planificación de la vida útil de la batería y los intervalos de reporte al entender la frecuencia de transmisión del dispositivo.
- Aclara qué eventos de sensor se reportarán a Plaspy para que las alertas y el geofencing funcionen como se espera.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el GPSMarker M100 brinda a las organizaciones un camino directo para convertir los reportes del dispositivo en datos de rastreo accionables, alertas y análisis históricos. El modelo de endpoint compartido de Plaspy y la detección automática de protocolos eliminan gran parte de la carga de configuración manual, permitiéndole concentrarse en el monitoreo y las operaciones en lugar de la selección de protocolo por dispositivo.

Si desea obtener más información sobre cómo Plaspy maneja el reporte de dispositivos, la gestión de dispositivos y el monitoreo de flotas, visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos del dispositivo, notas de firmware y revisiones de hardware del GPSMarker M100, consulte la información en el sitio del fabricante https://gpsmarker.ru/. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo, por lo que se recomienda revisar los recursos del fabricante para obtener la información más actualizada del dispositivo.
