---
slug: /eelink/tk1193g/features
id: tk1193g-features
sidebar_label: Features
title: EElink - TK119‑3G Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del EElink TK119‑3G para rastreo vehicular en tiempo real y flujos antirrobo compatibles con Plaspy
keywords:
  - EElink TK119‑3G
  - funciones EElink TK1193G
  - rastreador GPS TK119‑3G
  - rastreador GPS EElink
  - rastreo vehicular Plaspy
  - rastreador compatible Plaspy
  - detección encendido ACC TK119‑3G
  - expansión RS232 TK119‑3G
  - inmovilizador relé TK119‑3G
  - rastreo de flotas TK119‑3G
---

# EElink - TK119‑3G - Funciones

Esta página describe el contexto público de uso del rastreador EElink TK119‑3G con Plaspy. Se centra en las capacidades prácticas y el comportamiento que usted puede esperar cuando el dispositivo está instalado y envía datos de ubicación y eventos a la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la configuración del fabricante. Para detalles técnicos específicos del dispositivo y las notas de firmware más recientes consulte la documentación del fabricante y las notas de la versión.

## Resumen de funciones

El TK119‑3G es un rastreador vehicular compacto diseñado para ofrecer visibilidad en tiempo real de flotas y soportar flujos antirrobo. Combina conectividad celular con GPS y respaldo por estación base (LBS) para proporcionar informes de posición continuos y telemetría de eventos a Plaspy.

- Posicionamiento GPS en tiempo real con respaldo LBS y asistencia AGPS para obtener fijaciones más rápidas en entornos de señal variable.
- Detección de encendido ACC para reportar eventos de motor encendido/apagado, útil para monitoreo de conductores y uso del vehículo.
- Alarmas de seguridad que incluyen choque/caída, vibración y exceso de velocidad, con comportamiento configurable de corte de alimentación automático.
- Salida de relé opcional para inmovilización remota o corte de combustible/energía como respuesta ante robo o intervenciones de seguridad.
- Puerto de expansión RS232 para integrar dispositivos de telemetría y periféricos externos.
- Batería de respaldo con alarmas de pérdida de alimentación y batería baja para mantener la visibilidad durante sabotajes o desconexiones.

## Funciones principales del EElink - TK119‑3G

- Conectividad celular WCDMA y GSM para amplia cobertura de red donde esté disponible.
- Posicionamiento GPS con respaldo por estación base (LBS) y asistencia AGPS para mejorar los tiempos de fijación.
- Entrada ACC para capturar el estado de encendido y eventos de telemetría relacionados.
- Alarma de choque/caída que ayuda a detectar impactos o incidentes significativos y reportarlos a Plaspy.
- Alarma de vibración para detectar manipulación o movimiento cuando el vehículo está detenido.
- Alarma de exceso de velocidad con opción de corte automático de alimentación para soportar acciones de seguridad o inmovilización inmediata.
- Salida de relé opcional para control remoto de circuitos de combustible o energía.
- Interfaz de expansión RS232 para añadir flujos de datos de sensores o telemetría de terceros.

## Cómo funcionan estas funciones con Plaspy

Cuando el TK119‑3G está conectado a Plaspy, sus mensajes de ubicación y eventos son recibidos por la plataforma y convertidos en seguimiento, alertas y registros históricos. Plaspy detecta automáticamente los protocolos compatibles del dispositivo e ingiere la telemetría para monitorización y generación de informes en tiempo real.

- La ubicación y el movimiento del dispositivo se muestran en mapas usando GPS con respaldo LBS y posiciones asistidas por AGPS.
- Los eventos de ACC se registran como entradas de encendido/apagado en el historial del vehículo para reportes de uso y conductor.
- Alarmas de seguridad como choque/caída, vibración y exceso de velocidad generan notificaciones inmediatas e incidentes registrados para despacho o revisión.
- El control del relé reportado por el dispositivo permite flujos de trabajo de inmovilización remota y acciones basadas en eventos visibles dentro de Plaspy.
- Los datos de periféricos conectados por RS232 pueden reenviarse a Plaspy como telemetría extendida para diagnóstico o monitoreo de combustible.
- Plaspy acepta conexiones de dispositivos configurados para apuntar a la plataforma (por ejemplo usando el dominio del servidor Plaspy) y detecta automáticamente las configuraciones de protocolo para facilitar la incorporación.

## Casos de uso típicos

- Flujos anti‑robo y recuperación de unidades mediante inmovilización por relé y eventos de corte de alimentación.
- Monitoreo de comportamiento y seguridad del conductor, donde las alertas de choque/caída, exceso de velocidad y vibración activan una respuesta rápida.
- Reportes de encendido y uso para facturación operativa, registro de horas o programación de mantenimiento.
- Integración de dispositivos de telemetría de terceros vía RS232 para monitoreo de combustible y equipos.
- Detección de manipulación y continuidad de alertas gracias a la batería de respaldo y alarmas por pérdida de alimentación.
- Instalaciones compactas donde la forma discreta del equipo facilita su uso en vehículos o activos móviles.

## Notas sobre disponibilidad de funciones

- La presencia de funciones y el comportamiento exacto de las alarmas dependen de la versión de firmware y de la configuración del fabricante.
- Revisiones de hardware o variantes regionales pueden cambiar las interfaces disponibles o la compatibilidad de red.
- El tipo de instalación y el cableado (para ACC, relé y RS232) afectan qué funciones estarán operativas en un vehículo concreto.
- Componentes opcionales como relés o periféricos externos pueden no incluirse en todos los kits y pueden requerir instalación profesional.
- Para especificaciones técnicas definitivas y las últimas recomendaciones de firmware consulte la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Combinar el TK119‑3G con Plaspy permite a las organizaciones convertir las señales de posición y eventos del rastreador en monitorización accionable, alertas e informes históricos. La plataforma de Plaspy ingiere eventos de encendido, alarmas de seguridad y telemetría de periféricos para apoyar despacho, cumplimiento y procesos anti‑robo, conservando a la vez un historial auditable y buscable.

Para obtener más información sobre cómo Plaspy puede integrarse con rastreadores EElink y revisar opciones de integración visite https://www.plaspy.com. Verifique siempre las funciones del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante en el sitio EElink https://www.eelink.com.cn/ ya que las especificaciones y capacidades pueden cambiar con el tiempo.
