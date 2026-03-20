---
slug: /astra_telematics/at503/protocol
id: at503-protocol
sidebar_label: Protocol
title: Astra Telematics - AT503 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del Astra Telematics AT503 y compatibilidad con Plaspy para rastreo GPS
keywords:
  - Protocolo Astra Telematics AT503
  - Protocolo GPS Astra Telematics AT503
  - Protocolo de comunicación AT503
  - Protocolo de rastreo AT503
  - Compatibilidad AT503 Plaspy
  - Integración de telemetría AT503
  - Rastreadores compatibles con Plaspy
  - Guía de protocolo de rastreador GPS
  - Comunicación de rastreador de activos
  - Rastreador LTE M NB IoT
---

# Astra Telematics - Protocolo AT503

Esta página describe el contexto público del protocolo para usar el Astra Telematics AT503 Mini Asset Tracker con Plaspy. Explica el papel de la comunicación del dispositivo para entregar ubicación y telemetría a Plaspy sin revelar detalles privados de implementación. Use esta guía para comprender cómo el dispositivo informa a la plataforma y qué verificar durante el despliegue y la resolución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando recibe datos. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que el comportamiento final del equipo debe confirmarse con la documentación y las notas de firmware de Astra Telematics.

## Resumen del protocolo

El protocolo de reporte del AT503 es el mecanismo mediante el cual el dispositivo empaqueta correcciones GNSS, eventos de movimiento, telemetría de batería y estado diagnóstico para enviarlos a un servidor remoto. Para la integración con Plaspy, el protocolo permite que el rastreador se identifique, entregue datos de posición y eventos oportunos, y soporte flujos de trabajo de configuración remota como aprovisionamiento OTA o configuración asistida por BLE.

- Permite que el AT503 envíe posición GNSS y sellos de tiempo a Plaspy para mapeo e historial.
- Comunica eventos de movimiento y activación basados en el acelerómetro MEMS interno para que Plaspy aplique reglas inteligentes de reporte.
- Reporta estado de batería y salud del dispositivo para que Plaspy muestre alertas de mantenimiento y ayude en la planificación del ciclo de vida.
- Soporta identificación del dispositivo y persistencia de sesión para que Plaspy asocie los datos entrantes con el registro de activo correcto.
- Habilita pasos opcionales de aprovisionamiento en campo, como la activación asistida por BLE que configura parámetros de red y reporte.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico en un endpoint compartido y usa detección automatizada para determinar el protocolo entrante del dispositivo. Normalmente, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy usando los ajustes de conexión correctos.

- Plaspy escucha en un único endpoint de servidor compartido para que los dispositivos puedan reportar usando ajustes comunes.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía sus primeros reportes válidos al servidor.
- Cuando está configurado correctamente, el AT503 se registrará y aparecerá en Plaspy sin selección manual de protocolo.
- La detección funciona a través de los transportes soportados, por lo que se aceptan y procesan reportes por TCP o UDP.
- Si un dispositivo no aparece, verifique el aprovisionamiento del dispositivo, el registro en la red y la configuración del fabricante para asegurarse de que los reportes se envíen al endpoint de Plaspy.

## Contexto de transporte y conexión

Las elecciones de conexión determinan cómo el AT503 alcanza Plaspy, pero no cambian el resumen público del protocolo presentado aquí. El AT503 puede configurarse para usar UDP o TCP en el puerto compartido de Plaspy según el firmware del dispositivo y las necesidades del despliegue. Use el dominio o la dirección IP que se indican abajo como host de destino al configurar el rastreador para que reporte a Plaspy.

- El host objetivo para reportes a Plaspy es d.plaspy.com y la IP pública correspondiente del servidor es 54.85.159.138.
- Plaspy acepta reportes de dispositivos en el puerto 8888 y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- El AT503 puede configurarse para enviar datos usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y el transporte elegido.
- Elija TCP en entornos que requieran entrega confiable o UDP para sobrecarga mínima si el dispositivo y la red lo permiten.
- Asegúrese de que las reglas de salida de la red permitan el transporte y el destino seleccionados para que el dispositivo pueda alcanzar Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware influyen en qué características y formatos de reporte soporta el AT503; confirme siempre las notas de la versión de firmware para detalles del protocolo.
- Las revisiones de hardware y las variantes celulares regionales pueden alterar las opciones de transporte disponibles o el comportamiento de registro celular.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega y debe coincidir con la configuración usada durante el aprovisionamiento.
- Los flujos de aprovisionamiento por BLE pueden cambiar la forma en que el dispositivo se configura inicialmente para apuntar al endpoint de Plaspy.
- La personalización del fabricante o las funciones opcionales pueden añadir campos o eventos a los reportes que Plaspy ingestará si siguen los canales de reporte estándar.
- Valide la compatibilidad probando un dispositivo de muestra antes de despliegues a gran escala y revisando la documentación oficial de Astra Telematics.

## Por qué es importante comprender el protocolo

Entender cómo el AT503 se comunica con Plaspy hace que los despliegues sean más previsibles, simplifica la resolución de problemas y ayuda a los equipos a diseñar perfiles de reporte que equilibren la vida útil de la batería con las necesidades de telemetría.

- Asegura que el dispositivo esté configurado para apuntar al endpoint y transporte correctos de Plaspy para conectividad inmediata.
- Ayuda a diagnosticar por qué pueden faltar reportes, al acotar problemas a la red, transporte o comportamiento del firmware.
- Permite optimizar la frecuencia de reportes y los desencadenantes de movimiento para cumplir objetivos de duración de batería.
- Soporta decisiones informadas sobre comportamientos de respaldo, como la disponibilidad de 2G en la región del dispositivo.
- Facilita la coordinación de los flujos de aprovisionamiento en campo usando BLE y verificar que la identidad del dispositivo se asocie al activo correcto en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el AT503 con Plaspy brinda a las organizaciones una solución de rastreo de activos de bajo mantenimiento y larga duración que alimenta telemetría consistente de ubicación y movimiento en una única plataforma de flotas. La construcción robusta del AT503, su larga vida de batería, GNSS multiconstelación y opciones celulares se alinean con los flujos de trabajo de Plaspy para monitoreo remoto, alertas de geocerca y reportes del ciclo de vida del activo.

Para conocer más sobre Plaspy y cómo su flota puede usar Plaspy con dispositivos Astra Telematics visite https://www.plaspy.com. Para detalles más actuales sobre el protocolo específico del dispositivo, orientación de firmware y variantes regionales de hardware, consulte al fabricante en https://astratelematics.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
