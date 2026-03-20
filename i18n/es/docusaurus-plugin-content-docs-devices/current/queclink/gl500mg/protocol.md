---
slug: /queclink/gl500mg/protocol
id: gl500mg-protocol
sidebar_label: Protocol
title: QuecLink - GL500MG Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del QuecLink GL500MG y cómo se comunica con Plaspy para integración de rastreo y telemetría
keywords:
  - Protocolo QuecLink GL500MG
  - Protocolo GPS QuecLink GL500MG
  - Compatibilidad QuecLink GL500MG Plaspy
  - Protocolo de comunicación GL500MG
  - Protocolo de rastreo GL500MG
  - Protocolo rastreador de activos QuecLink
  - Protocolo QuecLink @Track
  - Integración telemetría GL500MG
  - Rastreador GPS QuecLink Plaspy
  - Protocolo seguimiento de activos Plaspy
---

# QuecLink - Protocolo GL500MG

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GL500MG con la plataforma Plaspy. Se enfoca en cómo el dispositivo comunica telemetría y eventos a Plaspy en términos generales y no sensibles, para que integradores y administradores comprendan el papel del protocolo de reporte del rastreador en una implementación exitosa.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento debe considerarse una visión general del protocolo y no una referencia específica por firmware.

## Resumen del protocolo

El GL500MG transmite posiciones GNSS, eventos de movimiento y lecturas de sensores internos a un servidor backend usando los métodos públicos de reporte de QuecLink. El protocolo del rastreador define cómo el dispositivo se identifica, cómo se empaqueta la telemetría para transmisión y qué tipos de eventos se reportan para que la plataforma convierta mensajes crudos en datos de ubicación y alertas utilizables.

- Permite que el GL500MG informe ubicación, eventos del acelerómetro, temperatura y telemetría de luz a un endpoint de servidor.
- Facilita la inclusión de identificación para que Plaspy asocie los mensajes con el registro de activo correspondiente.
- Soporta reportes programados y basados en eventos para equilibrar la vida de la batería y la puntualidad de las actualizaciones en el monitoreo de activos.
- Almacena mensajes en búfer en el dispositivo durante cobertura intermitente, de modo que Plaspy reciba la telemetría histórica cuando se restablece la conectividad.
- Opera sobre los transportes soportados por el dispositivo para que los mensajes lleguen de forma confiable al endpoint configurado.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint y puerto compartidos y usa detección automática de protocolo para determinar cómo parsear los mensajes entrantes. En la mayoría de los casos, un GL500MG configurado correctamente que reporte al endpoint de Plaspy será reconocido sin necesidad de seleccionar el protocolo manualmente en el gestor de dispositivos de Plaspy.

- El endpoint público de servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP conocida del servidor es 54.85.159.138.
- La plataforma Plaspy escucha en el puerto 8888 para reportes de dispositivos y usa el mismo puerto para todos los dispositivos soportados.
- Plaspy detectará automáticamente el protocolo del rastreador una vez que el GL500MG se conecte y comience a reportar al endpoint.
- Normalmente no es necesario que el usuario seleccione un protocolo dentro de Plaspy si el dispositivo está configurado para enviar reportes a d.plaspy.com usando el transporte y puerto correctos.
- La detección automática simplifica la incorporación en flotas mixtas donde los dispositivos usan protocolos de distintos fabricantes.

## Transporte y contexto de conexión

El GL500MG soporta múltiples métodos de transporte para enviar telemetría, y Plaspy acepta tráfico de dispositivo sobre transportes de red estándar. Los dispositivos pueden configurarse para enviar datos al endpoint de Plaspy usando UDP o TCP según las capacidades del equipo y los requerimientos del despliegue.

- El GL500MG puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a 54.85.159.138 como servidor de reporte.
- Plaspy utiliza el mismo puerto de escucha 8888 para todos los dispositivos, por lo que no se requiere configurar un puerto por dispositivo en el servidor.
- La elección entre UDP o TCP afecta las garantías de entrega y debe seleccionarse de acuerdo con la cobertura y la necesidad de fiabilidad del despliegue.
- Para rastreadores celulares como el GL500MG, la configuración de conexión y el APN en el dispositivo determinan si los reportes llegan a Plaspy de forma confiable.

## Notas sobre compatibilidad del protocolo

- QuecLink implementa comportamientos de reporte que pueden diferir según la revisión de firmware; unidades con el mismo número de modelo pueden presentar pequeñas diferencias de protocolo entre versiones de firmware.
- Revisiones de hardware o variantes regionales pueden afectar las bandas soportadas y la conmutación celular, lo que indirectamente puede cambiar la fiabilidad de los reportes y las preferencias de transporte.
- El GL500MG documenta públicamente el uso de los métodos de reporte de QuecLink; cuando en la documentación del fabricante aparecen nombres de protocolo, utilícelos para ajustar la configuración del dispositivo a las expectativas de Plaspy.
- La selección del transporte (UDP versus TCP) debe validarse durante la puesta en marcha para confirmar la entrega de mensajes y el impacto en la batería.
- Verifique siempre la compatibilidad al migrar dispositivos a un nuevo operador de red o cuando se aplique una actualización de firmware al equipo.
- Consulte la documentación oficial de QuecLink y las notas de lanzamiento para aclaraciones específicas del protocolo del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GL500MG facilita la configuración correcta, garantiza un comportamiento predecible en el campo y permite una resolución de problemas más eficiente cuando falta telemetría o los mensajes están mal formados. El conocimiento del protocolo y del contexto de transporte reduce el tiempo de incorporación y mejora la fiabilidad a largo plazo en el monitoreo de activos.

- Asegura que los ajustes de reporte del dispositivo (dirección del servidor, transporte, puerto) sean correctos para la ingestión en Plaspy.
- Ayuda a diagnosticar problemas comunes como mensajes mal formados, fallas en el registro del módem o el comportamiento de buffer después de la pérdida de conectividad.
- Permite tomar decisiones informadas sobre la frecuencia de reportes y los disparadores de eventos para equilibrar la duración de la batería y la oportunidad de las alertas.
- Facilita la planificación de actualizaciones de firmware y revisiones de hardware al aclarar dónde puede cambiar el comportamiento.
- Ayuda a validar la telemetría de sensores y el mapeo de eventos dentro de los paneles y alertas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL500MG con Plaspy brinda a las organizaciones una forma escalable de convertir la telemetría de largo alcance en información útil de ubicación y eventos. La combinación del diseño de bajo consumo del GL500MG y el manejo automático de protocolos de Plaspy facilita la incorporación masiva de dispositivos manteniendo el mantenimiento operativo al mínimo.

El endpoint compartido de Plaspy en d.plaspy.com (54.85.159.138) en el puerto 8888 y la detección automática de protocolo implican que, en general, los administradores solo necesitan configurar el GL500MG para reportar a esa dirección y elegir UDP o TCP en el puerto 8888 según corresponda. Para más detalles sobre el comportamiento específico del protocolo del dispositivo, diferencias de firmware y la orientación más reciente del fabricante, visite https://www.plaspy.com y verifique la documentación y las notas de firmware en el sitio oficial de QuecLink https://www.queclink.com/ . El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que siempre confirme la información vigente con el fabricante.
