---
slug: /eelink/tk119/features
id: tk119-features
sidebar_label: Features
title: EElink - TK119 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS EElink TK119 y su integración con Plaspy para seguimiento y alertas de vehículos
keywords:
  - EElink TK119
  - características EElink TK119
  - rastreador GPS EElink TK119
  - TK119 Plaspy
  - rastreador GPS para vehículos
  - seguimiento de flotas TK119
  - rastreador GNSS TK119
  - MoveLink EELINK
  - alarmas del rastreador TK119
  - capacidades TK119
---

# EElink - Características del TK119

Esta página ofrece un resumen público centrado en las funciones del EElink TK119 y en cómo sus capacidades se integran con Plaspy para el seguimiento de vehículos y la supervisión de flotas. Describe las funcionalidades orientadas al usuario que usted verá en los paneles y reportes de Plaspy cuando el TK119 esté desplegado, basándose en la descripción del dispositivo y la información del fabricante.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el modelo regional y la forma en que el dispositivo esté instalado y configurado. Utilice esta página como contexto general de producto e integración y consulte la documentación oficial del fabricante para especificaciones y comportamientos precisos y actualizados.

## Resumen de funciones

El TK119 es un rastreador de vehículo compacto diseñado para reportes fiables de posición y alertas de eventos. Combina posicionamiento GNSS multiconstelación con comunicaciones celulares y varias entradas y salidas orientadas al vehículo para ofrecer valor operativo real a flotas y protección de activos.

- Rastreo GNSS en tiempo real usando GPS, BDS y GLONASS con asistencia AGPS y LBS para obtener fijaciones más rápidas.
- Reporte del estado del vehículo incluyendo detección de ACC para capturar eventos de encendido y apagado y habilitar monitoreo basado en reglas.
- Alarmas de seguridad y protección como choque, caída, vibración, exceso de velocidad, geocercas y batería baja o apagado.
- Salida de relé opcional y expansión GPIO para soportar corte remoto de combustible o alimentación y conectar sensores externos.
- Carcasa robusta con clasificación IP65 adecuada para uso diario en flotas en entornos con polvo o humedad.

## Funciones principales del EElink TK119

- Posicionamiento GNSS multiconstelación con asistencia AGPS y LBS para mejorar tiempos de fijación y disponibilidad.
- Integración compatible con Plaspy mediante el protocolo MoveLink EELINK para una conexión backend sencilla.
- Detección de entradas del vehículo, incluyendo estado ACC o de encendido, para seguimiento y reportes sensibles al encendido.
- Alarmas relacionadas con seguridad y robo, como choque, caída, vibración, velocidad y geocercas.
- Control de relé opcional para funcionalidad de corte remoto de combustible o alimentación cuando el hardware lo soporte.
- Expansión GPIO para conectar sensores externos adicionales o entradas digitales.
- Amplio soporte de voltaje para sistemas eléctricos vehiculares comunes y una pequeña batería de respaldo para continuidad durante cortes de energía.
- Carcasa compacta con clasificación IP65 para resistencia al polvo y al agua en operaciones diarias de flota.

## Cómo funcionan estas funciones con Plaspy

Al conectarse a Plaspy, el TK119 envía actualizaciones de posición y eventos de alarma a paneles y reportes centralizados para que los equipos puedan supervisar ubicaciones e incidentes en tiempo real. Plaspy detecta automáticamente parámetros del protocolo MoveLink EELINK para configuraciones comunes de rastreadores y presenta telemetría, eventos e indicadores de estado para uso operativo.

- Actualizaciones de ubicación en tiempo real y reproducción histórica de rutas visibles en los mapas y reportes de Plaspy.
- Eventos de alarma como choque, caída, vibración, exceso de velocidad y violaciones de geocerca enviados a Plaspy para notificaciones y registro de incidentes.
- La detección de ACC aparece como estado de encendido o motor en Plaspy, permitiendo reglas y reportes basados en el encendido.
- El estado y control opcional del relé puede reflejarse en Plaspy, habilitando flujos de trabajo de inmovilización remota cuando el relé está presente y configurado.
- Las fijaciones asistidas por AGPS y LBS contribuyen a una localización más rápida que Plaspy puede mostrar para una mayor conciencia situacional.

Nota: Plaspy acepta dispositivos configurados mediante ajustes de transporte comunes TCP o UDP y normalmente utiliza un único puerto de plataforma para conexiones de dispositivos. Plaspy detectará los protocolos de rastreadores compatibles para simplificar la integración.

## Casos de uso típicos

- Gestión de flotas para autos, vans y camiones que requieren ubicación en vivo e historial de rutas.
- Flujos de trabajo anti robo que combinan notificaciones de alarma y corte de alimentación basado en relé opcional.
- Monitoreo de seguridad del conductor y respuesta a incidentes usando alertas de choque, caída y vibración.
- Supervisión de equipos y vehículos en entornos comerciales o industriales que requieren dispositivos con clasificación IP.
- Reportes basados en encendido para análisis de consumo y uso mediante detección ACC.
- Integraciones donde la expansión GPIO se utiliza para añadir sensores de puerta, entradas de alarma u otra telemetría personalizada.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware o el lote de fabricación, por lo que verifique las capacidades de su unidad específica.
- Componentes de hardware opcionales como el relé o módulos GPIO adicionales pueden no estar presentes en todas las unidades o variantes regionales.
- El comportamiento una vez instalado depende de las prácticas de integración y del cableado para la detección ACC y las entradas externas.
- El soporte de bandas celulares regionales y el comportamiento del módem pueden variar según el modelo o el mercado; consulte la documentación del fabricante para detalles regionales.
- Las actualizaciones de firmware del fabricante pueden añadir o modificar el comportamiento de alarmas, los intervalos de reporte y funciones opcionales.

## Por qué usar Plaspy con estas funciones

Usar el TK119 con Plaspy centraliza los datos de seguimiento y las señales de evento en una sola plataforma para monitoreo y control operativo. Plaspy ofrece visibilidad en mapas, rutas históricas, notificaciones configurables y flujos de trabajo basados en reglas que transforman las alarmas y estados de entrada del TK119 en información accionable para despacho y equipos de flota.

Si desea conocer más sobre cómo Plaspy puede funcionar con el EElink TK119 visite https://www.plaspy.com. Para especificaciones de dispositivo más actuales y detalladas, notas de firmware y guías de instalación, revise la documentación del fabricante en https://www.eelink.com.cn/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
