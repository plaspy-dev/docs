---
slug: /topfly/warriorx_100/protocol
id: warriorx_100-protocol
sidebar_label: Protocol
title: TopFly - WarriorX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para conectar el rastreador TopFly WarriorX 100 a los servidores de Plaspy
keywords:
  - protocolo TopFly WarriorX 100
  - protocolo GPS WarriorX 100
  - protocolo TopFly para Plaspy
  - protocolo de comunicación WarriorX 100
  - protocolo de rastreo WarriorX 100
  - rastreadores compatibles con Plaspy
  - integración protocolo rastreador GPS
  - protocolo de seguimiento de activos TopFly
  - seguimiento de flotas WarriorX 100
  - compatibilidad TopFly Plaspy
---

# TopFly - Protocolo WarriorX 100

Esta página describe el contexto público del protocolo para usar el rastreador TopFly WarriorX 100 con la plataforma Plaspy. Resume cómo el dispositivo se comunica con Plaspy en términos no sensibles, qué opciones de conexión son las más comunes y qué debe verificar al integrar el rastreador para ubicación en tiempo real, telemetría e informes de eventos.

El WarriorX 100 es un rastreador de activos para exterior, de baja potencia y alimentado por batería, diseñado para largas duraciones y despliegues en entornos exigentes. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación del fabricante cuando necesite detalles específicos de firmware o revisiones del modelo.

## Descripción general del protocolo

El protocolo de comunicación define cómo el WarriorX 100 formatea y envía telemetría y eventos para que Plaspy los procese de forma fiable. El contenido público de esta página se centra en el papel del protocolo más que en los detalles internos de implementación.

- Permite transmitir posiciones GNSS, lecturas de sensores y notificaciones de eventos desde el rastreador a Plaspy para mapeo y alertas.
- Proporciona identificación del dispositivo y estado para que Plaspy asocie los mensajes entrantes con el activo y la configuración correctos.
- Soporta perfiles de reporte configurables para que el dispositivo equilibre la frecuencia de actualización con la vida útil de la batería según las necesidades operativas.
- Transporta tipos de evento como alertas por extracción, lecturas de temperatura, transiciones de geovalla y estado de batería para flujos de trabajo automatizados.
- Funciona sobre transportes estándar soportados por el WarriorX 100 para que Plaspy pueda ingerir datos desde condiciones de red diversas.

## Cómo Plaspy detecta el protocolo

Plaspy recopila la telemetría entrante en un endpoint compartido y determina automáticamente el protocolo del rastreador a partir de las características de la conexión y del mensaje. En la mayoría de los casos usted no necesita seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un único puerto consistente para el tráfico de dispositivos, de modo que el comportamiento es el mismo entre los rastreadores soportados.
- Los dispositivos que apuntan al endpoint de Plaspy y envían datos son identificados y emparejados automáticamente con el manejador de protocolo apropiado.
- La configuración correcta del dispositivo para reportar al endpoint de Plaspy es el requisito habitual para que la detección automática funcione.
- Si un rastreador no se detecta automáticamente, confirme el enrutamiento de red, el endpoint y los ajustes de transporte del dispositivo con sus herramientas de aprovisionamiento.
- Plaspy no requiere configuración de puerto por dispositivo porque todos los dispositivos usan el mismo puerto de ingestión y el modelo de endpoint compartido.

## Transporte y contexto de conexión

La configuración de transporte determina cómo el WarriorX 100 establece y mantiene el enlace con Plaspy. El rastreador soporta múltiples transportes según el firmware y la configuración, y Plaspy acepta el tráfico de dispositivos en su endpoint público de ingestión.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las necesidades del despliegue.
- Los dispositivos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP pública 54.85.159.138 al configurar su endpoint de reporte.
- Plaspy usa el puerto 8888 para ingestión y todos los dispositivos soportados por Plaspy emplean el mismo puerto para simplificar el aprovisionamiento.
- Otros transportes soportados por el WarriorX 100, como MQTT o SMS, son manejados por el dispositivo y pueden usarse en paralelo cuando el operador y el firmware lo permiten.
- La selección del transporte afecta el comportamiento de la conexión y el uso de batería, por lo que elija la opción que coincida con sus requisitos de despliegue y las capacidades del firmware del equipo.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware pueden cambiar los transportes disponibles, las opciones de cadencia de mensajes y ajustes de cifrado opcionales que afectan la integración.
- Revisión de hardware o soporte de accesorios pueden introducir diferencias en el reporte de sensores o en las interfaces periféricas.
- Algunas funciones, como FOTA, cifrado opcional o soporte de periféricos BLE, pueden requerir compilaciones de firmware específicas o pasos de aprovisionamiento.
- La elección de transporte entre UDP, TCP o MQTT puede afectar la fiabilidad y la duración de la batería; valide el transporte recomendado para su flujo de trabajo.
- Los valores por defecto de configuración del fabricante pueden diferir de lo que Plaspy espera; confirme el endpoint de reporte y el puerto durante el aprovisionamiento.
- Siempre valide la compatibilidad para flujos críticos como alertas antirrobo y monitoreo de temperatura contra las notas de la versión actuales del fabricante.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el WarriorX 100 ayuda a asegurar una configuración confiable, solucionar problemas con eficiencia y predecir el comportamiento durante la vida útil del despliegue. Tener una visión clara de las opciones de protocolo y transporte reduce el tiempo de inactividad y facilita mejores decisiones en cuanto a batería y frecuencia de reporte.

- Identificación más rápida de la causa raíz cuando un dispositivo deja de reportar o envía telemetría inesperada.
- Mejor planificación de la vida útil de la batería al seleccionar perfiles de reporte y transportes adecuados a las necesidades operativas.
- Alertas y manejo de eventos más confiables para antirrobo, geovallas y monitoreo de cadena de frío.
- Coordinación más sencilla de actualizaciones de firmware y habilitación de funciones que dependen del soporte del protocolo.
- Mejora en el aprovisionamiento de dispositivos y en los flujos de despliegue masivo cuando el endpoint y el puerto están estandarizados.

## Por qué usar Plaspy con este protocolo

Usar el WarriorX 100 con Plaspy ofrece visibilidad centralizada para el rastreo de activos de larga duración en exteriores, combinando el hardware robusto del dispositivo y la precisión GNSS con las capacidades de ingestión y mapeo de Plaspy. Las organizaciones obtienen recolección consistente de telemetría, procesamiento de eventos y reproducción histórica mientras minimizan el mantenimiento en campo gracias al diseño enfocado en batería del dispositivo y sus modos de reporte flexibles.

Para saber más sobre Plaspy y cómo ingiere y gestiona la telemetría de dispositivos, visite https://www.plaspy.com. Para el protocolo más actualizado específico del dispositivo, comportamiento de firmware y detalles de implementación consulte la documentación del fabricante en https://www.topflytech.com/ ya que el soporte de dispositivos y las funciones de firmware pueden cambiar con el tiempo.
