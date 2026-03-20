---
slug: /gotop/g35/protocol
id: g35-protocol
sidebar_label: Protocol
title: GOTOP - G35 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP G35 para integración con Plaspy y telemetría en tiempo real
keywords:
  - Protocolo GOTOP G35
  - Protocolo GPS GOTOP G35
  - Protocolo de comunicación GOTOP G35
  - Protocolo de rastreo GOTOP G35
  - Protocolo rastreador GPS para animales GOTOP G35
  - Protocolo de dispositivo Plaspy
  - Compatibilidad de rastreadores Plaspy
  - Protocolo rastreador GPS montado en collar
  - Protocolo rastreador GPS de larga batería
  - Protocolo de posicionamiento multimodo
---

# GOTOP - G35 Protocolo

Esta página ofrece un marco público del protocolo para usar el rastreador animal GOTOP G35 con Plaspy. Explica el papel del protocolo de reporte del dispositivo en la entrega de ubicación, estado y alertas a Plaspy sin exponer detalles sensibles de implementación. El contenido está pensado para ayudar a integradores técnicos y responsables de flota a comprender cómo se comunica el G35 en aspectos relevantes para la configuración y la resolución de problemas.

El G35 es un rastreador para collar diseñado para despliegues de larga duración con posicionamiento multimodo y reportes por SMS o datos LTE. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Verifique siempre el comportamiento específico del dispositivo con el fabricante cuando sea necesario.

## Descripción general del protocolo

El protocolo del G35 regula cómo el rastreador envía ubicaciones, estado de sensores, eventos de movimiento y alarmas desde el campo hacia un servicio backend como Plaspy. En términos prácticos, permite que el dispositivo se identifique, reporte telemetría útil y active alertas que Plaspy puede presentar a los usuarios y a las reglas de automatización.

- Permite la transmisión periódica de posiciones y telemetría como batería, movimiento y condiciones de señal.
- Transporta notificaciones de alarmas y eventos, incluidos geovallas, movimiento, batería baja y respuestas de localización por tono.
- Asocia cada mensaje con una identidad de dispositivo para que Plaspy pueda vincular los datos entrantes al activo correcto.
- Soporta entrega en tiempo real a través de datos celulares y notificaciones por SMS cuando el dispositivo lo admite.
- Permite la sincronización o carga de registros a bordo para que puntos históricos y la reproducción de rutas estén disponibles en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta tráfico entrante de dispositivos en un endpoint de servidor compartido y determina automáticamente el protocolo del rastreador en función de los patrones de los mensajes recibidos. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un único endpoint de servidor compartido para todos los rastreadores compatibles usando el dominio d.plaspy.com y la IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, 8888, simplificando la configuración entre distintos modelos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un dispositivo configurado correctamente normalmente aparecerá sin selección manual.
- Si un dispositivo soporta múltiples transportes, asegúrese de configurarlo para que reporte al endpoint de Plaspy y permita la detección y el registro automáticos.
- Cuando los dispositivos envían telemetría vía SMS o datos LTE, Plaspy utiliza los mensajes entrantes para correlacionar la identidad del dispositivo con los registros de la plataforma.

## Transporte y contexto de conexión

El G35 puede usar SMS para notificaciones y datos LTE para telemetría continua. Al reportar a Plaspy por IP, el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la compatibilidad del equipo y las condiciones de red. Estos detalles de conexión determinan cómo el rastreador alcanza el servidor de Plaspy, pero no cambian el propósito de más alto nivel del protocolo.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP pública del servidor Plaspy es 54.85.159.138.
- El puerto compartido usado por todos los dispositivos soportados por Plaspy es 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al enviar datos a Plaspy.
- Elija el transporte (UDP o TCP) según las opciones de configuración del dispositivo y la confiabilidad de la red en el área de despliegue.
- El reporte por SMS está disponible en el G35 como canal alterno para eventos y notificaciones breves cuando el backend del fabricante lo soporta.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos soportados y las opciones de reporte; confirme la versión de firmware del rastreador al diagnosticar problemas de compatibilidad.
- Las revisiones de hardware o variantes de SKU pueden habilitar o limitar funciones como posicionamiento por WiFi, monitoreo de voz o memoria ampliada de waypoints.
- Algunas funciones reportadas por el G35 dependen del comportamiento del backend del fabricante o de flujos de trabajo en la aplicación, lo que afecta cómo los registros llegan a Plaspy.
- La selección de transporte entre UDP y TCP puede influir en las características de entrega; verifique lo que su dispositivo soporta y qué transporte está configurado.
- Capacidades como geovallas, detección de movimiento y monitoreo de voz se exponen como eventos que Plaspy puede consumir, pero las cargas útiles exactas y los disparadores dependen del firmware.
- Valide la compatibilidad contra la documentación del fabricante y asegúrese de apuntar el dispositivo al endpoint de Plaspy para permitir la detección automática del protocolo.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar una configuración fiable, alertas precisas y operación predecible a largo plazo al integrar el G35 con Plaspy. La claridad sobre los intervalos de reporte, las elecciones de transporte y la semántica de eventos reduce errores de configuración y mejora la eficiencia en la resolución de problemas.

- Asegura la correcta configuración de endpoints y ajustes de transporte para que los datos lleguen a Plaspy de forma confiable.
- Ayuda a depurar lagunas en la telemetría distinguiendo limitaciones del dispositivo de problemas de red o de plataforma.
- Orienta sobre las compensaciones entre batería e intervalos de reporte para ajustar la duración en espera según las necesidades del despliegue.
- Aclara cómo se señalizan las alarmas de geovalla y movimiento para que las reglas de notificación en Plaspy se comporten como se espera.
- Facilita mapear registros de waypoints a bordo y datos históricos sincronizados en Plaspy para reproducción y análisis.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G35 con Plaspy combina hardware diseñado para animales con una plataforma centralizada de rastreo para ofrecer visibilidad, alertas y reproducción histórica de rutas para mascotas, ganado e investigación de campo. La combinación de posicionamiento multimodo, larga duración de batería y compatibilidad con Plaspy soporta despliegues donde la autonomía y la telemetría fiable son críticas.

Si desea saber más sobre cómo funciona Plaspy con dispositivos como el G35, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que por favor verifique la información más reciente sobre el protocolo específico del dispositivo y las notas de firmware en el sitio del fabricante https://www.gotop.cc/.
