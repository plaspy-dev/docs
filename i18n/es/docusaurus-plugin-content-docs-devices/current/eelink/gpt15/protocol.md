---
slug: /eelink/gpt15/protocol
id: gpt15-protocol
sidebar_label: Protocol
title: EElink - GPT15 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del tracker EElink GPT15 y su comunicación con Plaspy para seguimiento y alertas en tiempo real
keywords:
  - Protocolo EElink GPT15
  - Protocolo GPS EElink GPT15
  - Protocolo de comunicación EElink GPT15
  - Rastreador GPS GPT15
  - Compatibilidad GPT15 Plaspy
  - Integración rastreador GPS Plaspy
  - Guía protocolo rastreador GPS
  - Protocolo rastreador equipaje
  - Comunicación rastreador de activos
  - Protocolo seguimiento en tiempo real
---

# EElink — Protocolo GPT15

Esta página ofrece un contexto de protocolo público para usar el tracker EElink GPT15 con la plataforma Plaspy. Se centra en cómo el GPT15 se comunica con Plaspy a alto nivel, qué parámetros de conexión emplea y consideraciones prácticas para integrar el dispositivo en Plaspy para seguimiento en tiempo real, alertas de geocercas y telemetría. El contenido está pensado para instaladores, usuarios técnicos e integradores de sistemas que necesiten entender el flujo de comunicación sin exponer detalles privados de implementación.

El GPT15 es un tracker compacto para viajes y activos con posicionamiento triple (GPS, Wi‑Fi y LBS), emparejamiento Bluetooth 4.0, sensor de manipulación ligero y batería recargable. Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando este reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se mantiene a nivel de protocolo y recomienda consultar la documentación del fabricante para detalles específicos de firmware.

## Visión general del protocolo

A grandes rasgos, el protocolo de reporte define cómo el GPT15 envía información de ubicación, sensores y estado a un servidor remoto. Para la compatibilidad con Plaspy esto significa que el tracker debe transmitir su telemetría al endpoint de Plaspy para que la plataforma ingiera puntos de ubicación, interprete eventos de sensores y muestre alertas a los usuarios. El rol del protocolo es entregar telemetría legible y una identidad mínima del dispositivo de forma fiable para que Plaspy pueda asociar los datos con el activo correcto.

- Permite entregas periódicas y por eventos de telemetría desde el GPT15 a Plaspy para mapeo en tiempo real y registro histórico.
- Transmite identidad y estado para que Plaspy vincule los mensajes entrantes con el registro del dispositivo adecuado.
- Envía datos de posicionamiento por capas (GPS, Wi‑Fi, LBS) y eventos de sensores como manipulación y batería baja para alertas accionables.
- Soporta disparadores de configuración remota y reportes que permiten ajustar intervalos de reporte y umbrales de alerta.
- Proporciona los campos esenciales que Plaspy necesita para generar eventos de geocercas, alertas de proximidad y resúmenes de telemetría.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de muchos tipos de trackers en un endpoint y puerto compartidos, y detecta automáticamente el protocolo del tracker cuando el dispositivo reporta correctamente. Para la mayoría de usuarios esto significa que no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el GPT15 esté configurado para reportar al endpoint de Plaspy y use los ajustes de transporte compatibles.

- Plaspy escucha en un único endpoint y puerto compartido para los reportes entrantes y determina el tipo de protocolo automáticamente.
- Apunte el GPT15 al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para que los datos lleguen a Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y puesta en marcha.
- Cuando un dispositivo configurado correctamente reporta al endpoint de Plaspy, la plataforma empata los mensajes con los registros de dispositivo y comienza a ingerir telemetría sin selección manual de protocolo.
- Si un dispositivo utiliza transporte alterno o intervalos de reporte no estándar, confirme esos ajustes durante la puesta en marcha para que Plaspy reciba datos consistentes.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el GPT15 alcanza el endpoint de Plaspy. El GPT15 puede configurarse para usar transporte estándar de redes móviles y puede reportar por UDP o TCP según el soporte del dispositivo y la configuración elegida. Plaspy acepta ambos tipos de transporte en el mismo puerto para simplificar el despliegue.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración seleccionada.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 como endpoint de reporte.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, evitando la necesidad de gestionar múltiples puertos de destino.
- Elija UDP para reportes de menor latencia y un solo paquete, o TCP para entrega orientada a conexión si el dispositivo y la red lo permiten.
- Asegúrese de que los datos móviles o las políticas de red local no bloqueen conexiones salientes hacia el endpoint de Plaspy y el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y revisiones de hardware pueden cambiar qué campos se reportan y con qué frecuencia el GPT15 envía actualizaciones.
- Las opciones de configuración por parte del fabricante y las posibilidades de configuración remota (app o SMS) pueden afectar la selección de transporte y el comportamiento de reporte.
- Algunas funciones del dispositivo, como la proximidad por Bluetooth o la ubicación asistida por Wi‑Fi, pueden depender del firmware y no estar presentes en todas las unidades.
- La elección entre UDP y TCP puede modificar las características de fiabilidad; valide el transporte seleccionado según la configuración del dispositivo y las limitaciones de la red.
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar que Plaspy reciba la telemetría.
- Siempre valide la compatibilidad frente a la documentación del fabricante y las notas de la versión para comportamientos específicos de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una configuración exitosa, reportes fiables y una resolución efectiva de problemas al integrar el GPT15 con Plaspy. Aunque Plaspy detecta automáticamente el protocolo y usa ajustes de conexión compartidos, conocer el transporte, el firmware y las capacidades del dispositivo reduce el tiempo hasta su funcionamiento y favorece la estabilidad a largo plazo.

- Asegura el registro correcto del dispositivo y la correspondencia de identidad en Plaspy para un seguimiento preciso del activo.
- Facilita la solución de problemas cuando un dispositivo no aparece en Plaspy revisando endpoint, transporte y ajustes de reporte.
- Orienta en la elección de intervalos de reporte y configuraciones de eventos para equilibrar la vida de la batería y la frecuencia de actualización.
- Ayuda a interpretar eventos de sensores como alertas de manipulación o notificaciones de batería baja en los paneles de Plaspy.
- Apoya la planificación informada de actualizaciones de firmware para evitar cambios inesperados en los campos reportados.

## Por qué usar Plaspy con este protocolo

Usar el EElink GPT15 con Plaspy aporta visibilidad práctica para equipaje, objetos personales y pequeños despliegues de activos. El posicionamiento triple y los sensores integrados del GPT15 suministran datos de ubicación y eventos por capas que Plaspy consolida en mapas en tiempo real, alertas e historial. Para viajeros, familias y pequeñas organizaciones, esta combinación ofrece un tracker compacto con monitoreo centralizado y flujos de configuración remota sencillos.

Para comenzar, configure el GPT15 para que reporte al endpoint de Plaspy empleando los ajustes de conexión compartidos y confirme la selección de transporte en la configuración del dispositivo. Conozca más sobre Plaspy y cómo soporta flotas con múltiples dispositivos en https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del GPT15 con el fabricante en https://www.eelink.com.cn/ antes de un despliegue a gran escala.
