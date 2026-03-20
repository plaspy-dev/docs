---
slug: /eelink/tk319h/features
id: tk319h-features
sidebar_label: Features
title: EElink - TK319‑H Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador EElink TK319‑H y su integración con Plaspy para rastreo vehicular y notificación de alarmas
keywords:
  - funciones EElink TK319‑H
  - rastreador GPS EElink TK319‑H
  - compatibilidad TK319‑H Plaspy
  - alarmas TK319‑H
  - detección ACC TK319‑H
  - opción relé TK319‑H
  - protocolo EElink MoveLink
  - rastreo vehicular TK319‑H
  - AGPS LBS TK319‑H
  - seguimiento de flotas Plaspy
---

# EElink - TK319‑H: Características

Esta página ofrece un resumen público de las funciones del EElink TK319‑H y explica cómo se utiliza el dispositivo con Plaspy para la monitorización de flotas, el manejo de alarmas y la telemetría básica. El contenido se centra en detalles prácticos y no sensibles sobre sus capacidades, el comportamiento de la integración y el valor operativo al combinar el rastreador con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones dependen de la versión de firmware, la revisión de hardware, accesorios opcionales, opciones de instalación y la implementación del fabricante. Para planificar un despliegue, confirme el conjunto de funciones concreto de su unidad antes de depender de una capacidad específica en producción.

## Resumen de funciones

El TK319‑H es un rastreador vehicular 3G compacto diseñado para ofrecer reportes continuos de ubicación y alarmas basadas en eventos hacia Plaspy. Su combinación de GPS con soporte AGPS, fallback por LBS y expansión flexible de E/S lo hace apropiado para flotas de vehículos, alquileres y el seguimiento de activos de mayor valor donde la visibilidad oportuna de la ubicación y los incidentes es crítica.

- Seguimiento GPS en tiempo real con correcciones asistidas por AGPS y fallback a estaciones base para mantener visibilidad de ubicación.
- Detección de ignición ACC para distinguir estados de conducción y estacionamiento y así mejorar los reportes de viajes y uso.
- Alarmas integradas de choque, exceso de velocidad, vibración, aceleración y desaceleración que pueden reenviarse a Plaspy para notificaciones inmediatas.
- Expansión serial y de GPIO además de interfaces opcionales para relé y sensor de temperatura que permiten telemetría personalizada y flujos de control remoto.
- Amplio rango de entrada de CC y una pequeña batería de respaldo para preservar el envío de reportes y generar alertas por pérdida de alimentación durante interrupciones de la fuente principal.
- Perfil físico compacto que facilita instalaciones discretas en distintos tipos de vehículos.

## Características principales del EElink - TK319‑H

- Compatible con Plaspy mediante el protocolo MoveLink EELINK para una integración de backend directa.
- Posicionamiento GPS con asistencia AGPS y fallback por estaciones base LBS para condiciones de señal degradada.
- Reportes de ubicación en tiempo real aptos para seguimiento en vivo y reconstrucción histórica de rutas.
- Detección de ignición ACC para informar el estado de encendido y habilitar reportes o alertas basadas en la ignición.
- Múltiples alarmas de seguridad y movimiento, incluyendo choque, exceso de velocidad, vibración, aceleración y desaceleración.
- Expansión serial y de GPIO para entradas adicionales de sensores y telemetría.
- Soporte opcional de relé para flujos autorizados de corte remoto y una interfaz opcional para sensor de temperatura.
- Amplio rango de entrada de 9 a 72 V CC y una pequeña batería de respaldo que ayuda a mantener los reportes ante pérdida de energía.

## Cómo interactúan estas funciones con Plaspy

Plaspy incorpora las actualizaciones de ubicación y los eventos de los dispositivos TK319‑H para que los operadores de flota puedan ver posiciones en vivo, recibir alarmas y revisar la actividad histórica desde una única plataforma. La integración está diseñada para mostrar el contexto del evento y el estado operativo junto con la telemetría compacta.

- Las actualizaciones de posición en tiempo real se muestran en los mapas dentro de Plaspy y se archivan para historial de viajes y revisión de rutas.
- Eventos de alarma como choque, exceso de velocidad, vibración, aceleración y desaceleración se reenvían a Plaspy para notificaciones y registro de incidentes.
- El estado de ignición ACC se mapea en Plaspy para diferenciar entre conducción y estacionamiento y para habilitar reportes basados en la ignición.
- El control opcional del relé puede coordinarse con flujos de trabajo en Plaspy cuando esté permitido, para soportar intervenciones remotas.
- La telemetría por serial y GPIO aparece en Plaspy como entradas suplementarias cuando están configuradas, permitiendo el monitoreo ampliado de sensores conectados.
- El fallback por LBS ayuda a mantener la continuidad del seguimiento en Plaspy cuando las fijaciones GPS no están disponibles temporalmente.

## Casos de uso típicos

- Monitoreo de operaciones de flota para ubicación en tiempo real, historial de viajes y métricas de uso basadas en la ignición.
- Rastreo de vehículos de alquiler donde la instalación compacta, la detección de ignición y la monitorización remota ayudan a gestionar activos.
- Flujos anti‑hurto que combinan reportes de alarma y control opcional por relé para vías de intervención.
- Detección de choques e incidentes de seguridad que enrutan alertas a despachadores a través de Plaspy para una respuesta rápida.
- Detección de pérdida de energía y monitoreo de continuidad para vehículos o equipos con preocupaciones sobre la alimentación externa.
- Instalaciones con conciencia de temperatura cuando se monta y se integra un sensor de temperatura en las E/S del dispositivo.

## Notas sobre la disponibilidad de funciones

- Las funciones opcionales como el relé y la interfaz del sensor de temperatura pueden no estar presentes en todas las variantes de hardware o configuraciones de fábrica.
- Las revisiones de firmware y los ajustes del fabricante pueden cambiar el comportamiento de las alarmas, la frecuencia de los reportes y los campos de telemetría disponibles.
- El agrupamiento regional de bandas celulares para conectividad 3G varía según el modelo y la región; confirme la variante de hardware adecuada para su área de despliegue.
- Las diferencias en el cableado de instalación y el cableado del vehículo afectan la detección ACC y ciertas entradas de telemetría, por lo que se recomienda la verificación in situ.
- Siempre revise la etiqueta del dispositivo y la documentación del fabricante para conocer las capacidades y el soporte de accesorios enviados.

## Por qué usar Plaspy con estas funciones

Usar el EElink TK319‑H con Plaspy proporciona una vía directa hacia la visibilidad operativa para flotas y propietarios de activos. El dispositivo aporta las señales básicas de ubicación y eventos que Plaspy consume para habilitar la visualización en mapa, alertas, historial de viajes y flujos básicos de control remoto, ayudando a los equipos a mantener supervisión y reaccionar más rápido ante incidentes.

Para obtener más información sobre cómo Plaspy puede trabajar con el TK319‑H, visite https://www.plaspy.com. Para las especificaciones de dispositivo más recientes, notas de firmware y detalles del fabricante, verifique la información en el sitio oficial de EElink https://www.eelink.com.cn/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
