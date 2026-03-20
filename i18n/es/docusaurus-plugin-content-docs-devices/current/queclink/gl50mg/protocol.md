---
slug: /queclink/gl50mg/protocol
id: gl50mg-protocol
sidebar_label: Protocol
title: QuecLink - GL50MG Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del QuecLink GL50MG y su compatibilidad con Plaspy para rastreo de activos y gestión de flotas
keywords:
  - protocolo QuecLink GL50MG
  - protocolo GPS QuecLink GL50MG
  - protocolo de comunicación QuecLink GL50MG
  - protocolo de rastreo QuecLink GL50MG
  - rastreador GPS QuecLink Plaspy
  - compatibilidad GL50MG Plaspy
  - protocolo para rastreadores de activos
  - rastreador LTE Cat M1 NB IoT
  - protocolo de rastreo de vehículos
  - protocolo GPS para gestión de flotas
---

# QuecLink - Protocolo GL50MG

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GL50MG con Plaspy. Se enfoca en cómo el dispositivo se comunica con el endpoint de ingestión de Plaspy, qué ajustes de conexión se suelen emplear y cómo el conocimiento del protocolo ayuda a garantizar la llegada confiable de posiciones y eventos a Plaspy para mapeo, geocercas y alertas. El GL50MG es un rastreador compacto para activos con certificación IP67, diseñado para larga autonomía y redes de baja potencia, compatible con LTE Cat M1 y NB‑IoT, con fallback a 2G, BLE para accesorios y un botón programable para alertas.

Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El endpoint público de Plaspy es d.plaspy.com (54.85.159.138) en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la dirección del equipo. El comportamiento exacto del protocolo y los campos de telemetría disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que confirme detalles específicos del equipo con los recursos oficiales de QuecLink cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el GL50MG empaqueta y envía posiciones GNSS, telemetría de batería y sensores, y notificaciones de eventos a un servidor como Plaspy. En términos generales, el protocolo regula los envíos periódicos o orientados a eventos, la identificación del dispositivo y el comportamiento de transporte utilizado para entregar datos útiles para seguimiento en tiempo real y flujos de trabajo posteriores.

- Permite que el GL50MG reporte ubicación, telemetría de sensores y eventos del botón programable a Plaspy para mapeo y alertas
- Transporta información de identificación para que Plaspy pueda asociar los mensajes entrantes con un registro de dispositivo registrado
- Soporta reportes periódicos y transmisiones por eventos para balancear la vida de la batería y la oportunidad de la información
- Transporta datos de accesorios y sensores, como telemetría derivada de BLE, cuando el dispositivo reenvía esa información
- Funciona sobre transportes IP estándar para que el dispositivo alcance el endpoint público de Plaspy para ingestión

## Cómo Plaspy detecta el protocolo

La capa de ingestión de Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos e incluye detección automática de protocolo, por lo que la mayoría de los dispositivos configurados correctamente comienzan a reportar sin necesidad de seleccionar manualmente el protocolo en la plataforma. Cuando un GL50MG está dirigido al endpoint de Plaspy y utiliza el transporte soportado, Plaspy reconoce el flujo del dispositivo y lo asocia con las reglas de manejo adecuadas.

- Plaspy escucha en d.plaspy.com (54.85.159.138) en el puerto 8888 para tráfico de rastreadores
- Los dispositivos pueden usar UDP o TCP para enviar datos al endpoint de Plaspy
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración
- La detección automática reduce la necesidad de seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está correctamente apuntado al endpoint
- Si un dispositivo no aparece, las comprobaciones típicas incluyen ajustes del servidor del equipo, selección del transporte y la accesibilidad de la red

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el GL50MG establece la accesibilidad de red y entrega sus cargas de reporte a Plaspy. El GL50MG está diseñado para redes de área amplia de baja potencia y puede usar diferentes portadoras celulares para uplink según el despliegue y el soporte regional. Desde la perspectiva de transporte, los elementos clave de configuración son el host de Plaspy y el protocolo de transporte.

- El host público de Plaspy es d.plaspy.com y la IP pública es 54.85.159.138
- Plaspy acepta tráfico de dispositivos en el puerto 8888 y todos los dispositivos de Plaspy usan el mismo puerto
- El GL50MG puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones del dispositivo
- Dirija el servidor del dispositivo o el host de reporte del APN a d.plaspy.com o a 54.85.159.138 según su flujo de aprovisionamiento
- Verifique el plan celular y la cobertura para LTE Cat M1, NB‑IoT o fallback a 2G para garantizar que los paquetes puedan alcanzar el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de telemetría se proporcionan y cómo se codifican los eventos; siempre revise las notas de la versión del firmware instalado
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas soportadas y el comportamiento de la red incluso cuando el protocolo de reporte es similar
- La selección del transporte entre UDP y TCP puede afectar las características de entrega y debe elegirse según las necesidades de fiabilidad de la red y las opciones de configuración del dispositivo
- El reporte de accesorios BLE se provee a través del dispositivo y el soporte depende del firmware del accesorio y de la compatibilidad con el firmware del dispositivo
- Verifique que el dispositivo haya sido aprovisionado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar una ingestión correcta
- Consulte la documentación de QuecLink para cualquier comando o herramienta de configuración específicos del fabricante que afecten las comunicaciones

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración correcta, agilizar la resolución de problemas y lograr una operación predecible a largo plazo al usar el GL50MG con Plaspy. Saber qué envía el dispositivo y cómo se conecta reduce la fricción de integración y le permite diseñar perfiles de reporte que cumplan con requisitos de autonomía y alertas.

- Confirma que el apuntado del dispositivo y el transporte son correctos para que los mensajes lleguen al endpoint de Plaspy
- Ayuda a diagnosticar telemetría faltante revisando firmware, tipo de transporte y cobertura de red
- Informa la configuración de intervalos de reporte y eventos para balancear vida de batería y oportunidad de la información
- Orienta las expectativas sobre los datos de accesorios BLE y qué telemetría de accesorios estará disponible en Plaspy
- Asiste a los equipos de operaciones en la planificación de mantenimiento y actualizaciones de firmware que pueden cambiar el comportamiento del protocolo

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL50MG con Plaspy ofrece a los operadores una solución de rastreo de activos de baja potencia y discreta que ingresa ubicación en tiempo real, eventos y telemetría de accesorios en una única plataforma. La larga autonomía del GL50MG, su durabilidad IP67 y el soporte multired celular lo hacen adecuado para recuperación de vehículos robados, supervisión de flotas de alquiler y monitoreo de activos de alto valor donde el mantenimiento poco frecuente y la colocación discreta son importantes.

Si desea conocer más sobre cómo Plaspy ingiere telemetría de dispositivos, visite https://www.plaspy.com para detalles de la plataforma y documentación. Para las notas de protocolo específicas del dispositivo, comportamiento de firmware y pasos de configuración documentados por el fabricante, verifique la información vigente en el sitio web de QuecLink https://www.queclink.com/ ya que el soporte de protocolo y la implementación del firmware pueden cambiar con el tiempo.
