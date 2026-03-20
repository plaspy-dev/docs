---
slug: /dct/syrus_satcom_lite/protocol
id: syrus_satcom_lite-protocol
sidebar_label: Protocol
title: DCT - Syrus Satcom Lite Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el protocolo DCT Syrus Satcom Lite con Plaspy para rastreo GPS vía satélite y visibilidad remota de activos
keywords:
  - protocolo DCT Syrus Satcom Lite
  - protocolo GPS DCT Syrus Satcom Lite
  - Syrus Satcom Lite Plaspy
  - protocolo localizador GPS satelital
  - protocolo rastreo remoto de activos
  - compatibilidad Plaspy con rastreo de flotas
  - integración Pegasus IoT Cloud
  - protocolo rastreador satcom para activos
  - protocolo GPS habilitado por satélite
  - protocolo de rastreo Syrus Satcom Lite
---

# DCT - Syrus Satcom Lite: Protocolo

Esta página describe el contexto del protocolo público para usar el rastreador DCT Syrus Satcom Lite con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy a alto nivel, cuál es el papel del protocolo de reporte y qué aspectos considerar al configurar el rastreo GPS vía satélite y la visibilidad remota de activos en la plataforma Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página ofrece orientación general y recomienda revisar la documentación del proveedor para detalles específicos del equipo.

## Resumen del protocolo

El protocolo de comunicación del Syrus Satcom Lite regula cómo el rastreador envía actualizaciones de posición, eventos de movimiento, telemetría de sensores y alertas hacia un backend en la nube como Plaspy. A nivel público, el protocolo permite que el dispositivo se identifique, reporte telemetría útil y respalde flujos de trabajo basados en eventos sin exponer internals propietarios del fabricante.

- Permite reportes de posiciones GPS, detección de movimiento y entradas auxiliares configurables para monitoreo remoto.
- Transporta información de estado y alertas para que Plaspy pueda activar notificaciones y reglas automatizadas.
- Provee datos de identificación persistente para que Plaspy asocie los mensajes con el registro de activo correcto.
- Soporta intervalos de reporte configurables y reenvío de mensajes de emergencia para priorizar eventos críticos.
- Conecta el transporte satelital con la ingesta en la nube para que activos fuera de cobertura celular aparezcan en los paneles de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy acepta tráfico de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo que usa el rastreador cuando éste está correctamente configurado para reportar a Plaspy. En la mayoría de despliegues, el dispositivo solo necesita apuntar al endpoint de Plaspy usando el transporte y puerto correctos; Plaspy gestiona la selección de protocolo en el lado servidor.

- Plaspy usa un endpoint unificado para aceptar telemetría de muchos modelos de rastreadores y detecta automáticamente el protocolo.
- Normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo reporta al endpoint de Plaspy.
- Una identificación y formato de reporte adecuados permiten que Plaspy mapee los mensajes entrantes al activo y al conjunto de funciones correctos.
- La detección automática reduce los pasos de configuración en flotas mixtas al eliminar la necesidad de configurar el protocolo por dispositivo en muchos casos.
- Si un dispositivo no se detecta automáticamente, el siguiente paso recomendado es verificar la configuración de reporte del dispositivo y la guía del fabricante.

## Contexto de transporte y conexión

Los dispositivos Syrus Satcom Lite envían telemetría a través de enlaces satelitales que finalmente reenvían los datos por transporte IP para alcanzar Plaspy. El equipo puede configurarse para usar UDP o TCP según el soporte del dispositivo y el enrutamiento satelital elegido; Plaspy acepta ambos transportes en el puerto y endpoint compartidos.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones e ingesta de dispositivos.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el enrutamiento a nivel de flota.
- Asegúrese de que cualquier gateway satelital o enrutamiento intermedio preserve el transporte y los detalles de destino elegidos al reenviar a Plaspy.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede depender de la versión de firmware y la revisión de hardware del Syrus Satcom Lite; verifique las notas de firmware por cambios en el protocolo.
- Las opciones de configuración del fabricante y el comportamiento del gateway satelital pueden afectar qué transporte y funciones de reporte están disponibles.
- La selección de transporte entre UDP y TCP puede estar restringida por el enrutamiento del proveedor satelital o la configuración del gateway.
- Plaspy detecta automáticamente el protocolo entrante cuando el dispositivo reporta al endpoint de Plaspy, pero se requiere una direccionamiento correcto del dispositivo.
- Confirme qué entradas auxiliares y modos de reporte de movimiento están habilitados en el equipo para asegurar que Plaspy reciba la telemetría necesaria para sus flujos de trabajo.
- Siempre valide la compatibilidad y el comportamiento actual frente a la documentación del fabricante al planificar despliegues.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Syrus Satcom Lite ayuda a garantizar la entrega confiable de datos de ubicación y alertas en Plaspy, acorta los ciclos de resolución de problemas y favorece un comportamiento operativo predecible para activos remotos.

- Acelera la configuración inicial al confirmar la dirección de reporte del dispositivo, el transporte y la cadencia esperada de mensajes.
- Facilita la resolución de problemas por mensajes faltantes o retrasados al revisar transporte, enrutamiento y diferencias de firmware.
- Permite tomar decisiones informadas sobre la frecuencia de reporte para equilibrar la vida útil de la batería y la oportunidad de las actualizaciones.
- Aclara qué sensores auxiliares y eventos de movimiento estarán disponibles en los paneles y reglas de Plaspy.
- Favorece la confiabilidad a largo plazo al alinear firmware del dispositivo y enrutamiento satelital con las expectativas de ingesta de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Syrus Satcom Lite con Plaspy extiende la visibilidad en tiempo real a activos que operan fuera de la cobertura celular, manteniendo la supervisión centralizada, las alertas y el análisis histórico. Las organizaciones obtienen telemetría accionable de eventos de movimiento, reportes GPS comparativos e entradas de sensores auxiliares, y pueden exponer esas señales en Plaspy para notificaciones basadas en reglas y supervisión operativa.

Para saber más sobre Plaspy y cómo puede consolidar GPS y telemetría entregados por satélite en una vista operativa única, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y guías de implementación del fabricante, verifique la información en el sitio de DCT en https://www.digitalcomtech.com/ ya que el comportamiento del equipo y el soporte de protocolo pueden variar con revisiones de firmware y hardware.
