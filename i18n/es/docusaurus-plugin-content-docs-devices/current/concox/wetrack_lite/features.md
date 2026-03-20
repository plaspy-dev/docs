---
slug: /concox/wetrack_lite/features
id: wetrack_lite-features
sidebar_label: Features
title: Concox - Wetrack Lite Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Concox Wetrack Lite y su integración con Plaspy para monitoreo discreto y alertas
keywords:
  - funciones Concox Wetrack Lite
  - rastreador GPS Concox Wetrack Lite
  - Wetrack Lite para Plaspy
  - funciones rastreador GPS Concox
  - rastreo vehicular Wetrack Lite
  - rastreador GPS discreto Concox
  - capacidades Wetrack Lite
  - rastreo de flotas Concox Wetrack Lite
  - alertas de eventos Wetrack Lite
  - rastreador GPS compatible con Plaspy
---

# Concox - Wetrack Lite: Características

Esta página describe el conjunto público de funcionalidades del Concox Wetrack Lite cuando se integra con Plaspy. Se enfoca en las capacidades prácticas del modelo, el comportamiento de sus eventos y los tipos de telemetría que Plaspy recibe y muestra. El objetivo es que administradores de flotas, operadores de alquiler y integradores de seguimiento entiendan qué aporta el dispositivo en Plaspy, sin sustituir la documentación del fabricante.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la configuración del fabricante. Cuando corresponde, esta página señala las capacidades generales descritas en las especificaciones del equipo, pero usted debe confirmar la versión de firmware y la variante local con el fabricante y el proveedor de instalación.

## Resumen de funcionalidades

El Wetrack Lite es un rastreador GPS compacto y de perfil bajo diseñado para monitoreo discreto de vehículos y visibilidad operativa continua. Combina posicionamiento multiconstelación con reporte de eventos orientados al vehículo y almacenamiento local para conservar el historial de viajes durante pérdidas temporales de conectividad.

- Posicionamiento GNSS multiconstelación con GPS, BDS y LBS para mejorar la precisión en entornos con visibilidad satelital mixta.
- Telemetría vehicular que incluye detección de ignición ACC y alertas basadas en acelerómetro por movimiento y vibración para reportes por evento.
- Amplio rango de voltaje operativo y protección de batería para soportar distintos tipos de vehículos y reducir las restricciones de instalación.
- Almacenamiento a bordo para bufferizar registros de posición y eventos durante breves cortes de GSM, de modo que los datos estén disponibles en Plaspy cuando vuelve la conectividad.
- Factor de forma mini y diodos LED ocultos para instalaciones discretas en vehículos de alquiler, flotas y aplicaciones de logística ligera.

## Características principales del Concox - Wetrack Lite

- Posicionamiento mediante GPS, BDS y LBS con alta precisión reportada, apto para enrutamiento y funciones de geocerca.
- Detección ACC de ignición para reportar los estados de encendido y apagado del vehículo, útil en análisis de uso e inactividad.
- Alertas por movimiento y vibración basadas en acelerómetro para indicar posible manipulación o movimiento no autorizado.
- Alertas por evento como exceso de velocidad, entrada y salida de geocercas, movimiento y desconexión de alimentación.
- Soporte para amplio rango de voltaje de entrada y protección de batería de vehículo, compatible con automóviles, scooters y equipos industriales ligeros.
- Almacenamiento a bordo para encolar datos de ubicación y eventos durante cortes temporales de la red celular.
- Carcasa compacta y ligera con LEDs ocultos para montajes discretos y menor visibilidad.
- Resistencia al agua IPX5 y rango de temperatura operativa extendido para despliegues fiables en campo.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el Wetrack Lite envía posiciones y paquetes de eventos que Plaspy normaliza en mapas en vivo, alertas e informes históricos. Los clientes de Plaspy pueden aprovechar la telemetría del rastreador para construir reglas operativas, notificaciones y flujos de reporte orientados al control de flotas y la prevención de robo.

- Actualizaciones de ubicación en tiempo real y posiciones corregidas visibles en los mapas de Plaspy para monitoreo de rutas y enrutamiento de activos.
- El estado de ignición ACC se refleja en Plaspy para indicar encendido y apagado del vehículo y apoyar análisis de uso.
- Notificaciones de evento por movimiento, vibración, exceso de velocidad y entrada/salida de geocerca entregadas como alertas dentro de Plaspy.
- Eventos de desconexión de alimentación y detección de batería que se muestran como alertas de estado para ayudar a detectar manipulación o problemas de batería.
- Los datos bufferizados en el dispositivo se suben cuando se restablece la conectividad, de modo que Plaspy recibe un historial de viaje más completo y con menos lagunas.

## Casos de uso típicos

- Gestión de flotas pequeñas y medianas que requieren visibilidad de ubicación y reportes de uso basados en ignición.
- Servicios de alquiler de autos y movilidad compartida que necesitan rastreadores discretos para monitorear devoluciones y movimientos no autorizados.
- Flujos de trabajo anti robo que usan alertas por movimiento, vibración y desconexión de alimentación para acelerar la recuperación y la respuesta.
- Rastreo de vehículos de dos ruedas y ligeros donde el amplio rango de voltaje y el tamaño compacto reducen las limitaciones de instalación.
- Logística de corta distancia y servicios de shuttle que se benefician del buffer en el dispositivo para preservar datos de viaje durante interrupciones de cobertura.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware del fabricante y las variantes regionales de hardware pueden cambiar qué funciones están habilitadas o cómo se comportan.
- Las decisiones de instalación física y el cableado para detección ACC o monitoreo de alimentación afectan la telemetría que el equipo puede reportar.
- Algunos umbrales de alerta y comportamientos de geocerca pueden ser configurables en el firmware del dispositivo o por el integrador y variar según la versión.
- La capacidad de almacenamiento a bordo y su comportamiento durante cortes dependen de la lógica del firmware y de los recursos de memoria disponibles.
- Verifique siempre el modelo específico de la unidad, la revisión de firmware y la variante regional para confirmar el soporte exacto de funciones antes del despliegue.

## Por qué usar Plaspy con estas funciones

Usar el Concox Wetrack Lite con Plaspy brinda a las organizaciones una combinación práctica de hardware de bajo perfil y una plataforma que traduce la telemetría del dispositivo en visibilidad operativa. Plaspy ingiere datos de ubicación y eventos para ofrecer seguimiento en mapas, alertas basadas en reglas e informes históricos que los operadores usan para reducir tiempos de inactividad y mejorar la seguridad de los activos.

Para obtener más información sobre cómo Plaspy soporta rastreadores como el Wetrack Lite visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, notas de firmware y la información más reciente del fabricante, consulte el sitio oficial de Concox en https://www.iconcox.com/ para la documentación actualizada.
