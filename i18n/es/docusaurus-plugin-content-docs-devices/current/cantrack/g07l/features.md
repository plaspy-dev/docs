---
slug: /cantrack/g07l/features
id: g07l-features
sidebar_label: Features
title: CanTrack - G07L Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador CanTrack G07L 4G y su integración con Plaspy para gestión de flotas y antirrobo
keywords:
  - características CanTrack G07L
  - rastreador GPS CanTrack G07L
  - compatibilidad G07L Plaspy
  - rastreador GPS 4G
  - características rastreador vehicular
  - alarma por movimiento y vibración
  - detección estado de ignición
  - alerta corte de energía
  - almacenamiento en memoria sin conexión
  - rastreador para gestión de flotas
---

# CanTrack - G07L: Características

Esta página ofrece un resumen público de las funciones del CanTrack G07L y cómo sus capacidades reportadas se integran con Plaspy para seguimiento en tiempo real, reporte de eventos y flujos de trabajo de flota. Se concentra en información práctica y no sensible que operadores e integradores suelen necesitar al desplegar dispositivos con Plaspy.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para configuración específica del equipo, notas de firmware y detalles técnicos más recientes consulte la documentación y las notas de la versión del fabricante.

## Resumen de funciones

El G07L es un rastreador vehicular compacto y con cableado fijo, diseñado para amplios rangos de voltaje y reportes de posición continuos mediante 4G con retroceso a GSM. Combina telemetría estándar, alarmas de evento y almacenamiento en memoria para soportar seguimiento confiable en zonas con interrupciones de cobertura.

- Seguimiento de ubicación en tiempo real sobre 4G con retroceso a GSM para continuidad en áreas de cobertura mixta.
- Amplio rango de trabajo de 9 a 90 V, adecuado para motocicletas, autos, camionetas y vehículos pesados.
- Alarma por movimiento y vibración mediante sensor G integrado para detección de manipulación y antirrobo.
- Detección del estado de ignición para reportar encendido y apagado del motor, útil en reportes de tiempo de funcionamiento y uso.
- Alarma por corte de energía y batería interna opcional para preservar el último estado conocido durante una pérdida de alimentación.
- Memoria local para almacenar registros mientras está sin conexión y subida automática cuando se restablece la conectividad.

## Funciones principales del CanTrack - G07L

- Conectividad 4G LTE con retroceso a GSM para reporte continuo de telemetría a través de redes celulares.
- Soporte de entrada de voltaje amplio 9–90 V para instalaciones flexibles en flotas mixtas.
- Sensor G a bordo que proporciona alarmas por movimiento y vibración para detección de manipulación.
- Entrada de ignición para detectar el estado del motor y habilitar reportes de tiempo de funcionamiento y viajes.
- Alarma por corte de energía y batería interna opcional para retener la posición y el estado de alarma.
- Buffer de almacenamiento local capaz de guardar registros del dispositivo mientras está sin conexión y sincronizarlos tras la reconexión.
- Modos configurables de suspensión y estabilización en estacionamiento para reducir el desplazamiento del GPS después de aparcar.
- Opciones de gestión remota que incluyen USB, SMS y actualizaciones OTA para configuración y mantenimiento de firmware.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere las transmisiones de telemetría y eventos del G07L y las presenta en paneles de seguimiento, reportes y flujos de alerta. Los eventos del dispositivo se mapean a acciones en la plataforma para apoyar la supervisión operativa y la respuesta a incidentes.

- Las actualizaciones de posición en vivo y las fijaciones frecuentes del GPS aparecen en los mapas de Plaspy para visibilidad en tiempo real de los vehículos.
- Las alarmas por movimiento y vibración se registran como eventos, permitiendo que los operadores disparen alertas o inicien investigaciones.
- Las señales de encendido y apagado alimentan el cálculo de tiempo de funcionamiento del motor, la detección de viajes y los reportes de utilización en Plaspy.
- Los eventos de corte de energía y batería de respaldo se muestran para ayudar a identificar manipulación o problemas eléctricos.
- Los registros almacenados sin conexión se suben después de la reconexión, de modo que las rutas históricas y los reportes se mantienen completos.
- Las capacidades de configuración remota y actualización de firmware se pueden coordinar desde Plaspy junto con las operaciones de campo.

## Casos de uso típicos

- Seguimiento de flotas mixtas con motocicletas, autos, camionetas y camiones donde se requiere un amplio rango de voltaje.
- Detección antirrobo y de manipulación mediante alarmas de movimiento y cortes de energía integradas en flujos de alerta.
- Reportes de tiempo de funcionamiento del motor y viajes basados en el estado de ignición para facturación, mantenimiento y control de uso.
- Monitoreo a largo plazo en áreas con interrupciones de cobertura mediante almacenamiento en memoria para preservar datos históricos.
- Supervisión de flotas de alquiler y programas de vehículos compartidos que necesitan historial confiable de posición y eventos.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware pueden habilitar, modificar o deshabilitar comportamientos específicos, como intervalos de reporte y sensibilidad de alarmas.
- Las revisiones de hardware y variantes regionales pueden diferir en las bandas LTE soportadas e interfaces disponibles.
- El cableado de la instalación y el método elegido para detectar la ignición afectan la precisión de la detección de encendido y apagado del motor.
- Componentes opcionales, como la batería interna de respaldo, podrían no estar presentes en todas las unidades o variantes.
- Consulte siempre la documentación del fabricante y las notas de la versión para obtener orientación técnica y de instalación actualizada.

## Por qué usar Plaspy con estas funciones

Usar el CanTrack G07L con Plaspy ofrece un camino directo hacia la visibilidad operativa y la supervisión basada en eventos. El dispositivo aporta ubicación y eventos de estado que Plaspy convierte en vistas de mapa en vivo, notificaciones de alerta y reportes históricos útiles para operaciones de flota, flujos antirrobo y análisis de utilización.

To learn more about how Plaspy works with compatible trackers and to explore platform capabilities visit https://www.plaspy.com. For the most current device specific details including firmware behavior and manufacturer implementation verify information with CanTrack at https://www.cantrackgps.com/
