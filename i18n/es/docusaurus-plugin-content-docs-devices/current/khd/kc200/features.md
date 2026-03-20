---
slug: /khd/kc200/features
id: kc200-features
sidebar_label: Features
title: KHD - KC200 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones públicas del rastreador GNSS KHD KC200 y su integración con Plaspy para seguimiento de vehículos y embarcaciones
keywords:
  - funciones KHD KC200
  - rastreador GPS KHD KC200
  - funciones KC200
  - rastreador GNSS KHD
  - seguimiento de vehículos KC200
  - seguimiento de embarcaciones KC200
  - KC200 GSM GPRS
  - alertas geocerca KC200
  - alertas de emergencia KC200
  - compatibilidad KC200 Plaspy
---

# KHD - Funciones del KC200

Esta página ofrece una visión general pública de las capacidades del KHD KC200 y explica cómo se relacionan con el uso del rastreador en la plataforma Plaspy. Resume las funciones prácticas del KC200, como posicionamiento GNSS, reportes por GSM, eventos de geocerca y reportes programados, y cómo se pueden supervisar y gestionar desde Plaspy.

La disponibilidad exacta de funciones y su comportamiento en cada unidad KC200 puede variar según la versión de firmware, la revisión de hardware, la configuración de la tarjeta SIM y la red, el método de instalación y las decisiones de implementación del fabricante. Para la configuración específica del equipo, detalles de firmware y el comportamiento más reciente, consulte la documentación oficial de KHD y las notas de lanzamiento.

## Resumen de funciones

El KC200 es un rastreador GNSS diseñado tanto para seguimiento de vehículos como de embarcaciones. Combina posicionamiento satelital con comunicación GSM para reportar datos de ubicación y eventos a plataformas back-end y para soportar alertas y programación configurables.

- Posicionamiento GNSS mediante GPS o GLONASS para reportes de ubicación
- Comunicación GSM GPRS para envíos en tiempo real a servidores back-end
- Capacidad SMS para alertas y configuración cuando esté disponible
- Reporte de alertas de emergencia y cruces de límites de geocerca
- Soporte para seguimiento programado o intervalos de reporte configurables
- Compatibilidad con plataformas de rastreo personalizables en PC y smartphone

## Características principales del KHD - KC200

- Receptor GNSS compatible con GPS o GLONASS para obtener posiciones confiables
- Conectividad GSM GPRS para enviar informes de ubicación y eventos a servidores
- Soporte SMS como canal alternativo para alertas y comandos básicos
- Reporte de alertas de emergencia según lo descrito en la documentación del fabricante
- Detección y reporte de cruces de límites de geocerca
- Reportes o seguimiento programado según la configuración del dispositivo
- Alta sensibilidad de recepción para mejorar el desempeño en ubicaciones con señal débil
- Compatibilidad con plataformas de rastreo de terceros y software personalizado en PC y móvil

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe reportes de posición y eventos de los rastreadores compatibles y presenta esa información en una interfaz unificada para supervisión y revisión histórica. Los mensajes de GPRS y los eventos del KC200 se integran directamente con las herramientas de visibilidad y alertas que ofrece Plaspy.

- Trazado de ubicación en tiempo real en los mapas de Plaspy cuando el KC200 envía reportes GPRS
- Eventos de geocerca y cruces de límites mostrados como alertas y entradas en la línea de tiempo
- Alertas de emergencia del dispositivo tratadas como eventos de prioridad en Plaspy
- El seguimiento programado o los reportes periódicos aparecen como actualizaciones de posición regulares y puntos en el historial
- Plaspy detecta automáticamente protocolos comunes de rastreadores e integra los mensajes entrantes para su uso inmediato en la plataforma

## Casos de uso típicos

- Seguimiento de flotas para visibilidad de rutas y conocimiento de ubicación
- Rastreo de embarcaciones y pequeñas naves donde haya cobertura GNSS y GSM
- Monitoreo por geocerca para notificaciones de entrada o salida de activos
- Reportes programados periódicos para patrullajes rutinarios o chequeos de activos
- Supervisión de alertas de emergencia para flujos de respuesta prioritaria
- Integración personalizada con plataformas en PC y móvil para equipos operativos

## Notas sobre disponibilidad de funciones

- Conjuntos de funciones como el comportamiento de alertas de emergencia y las opciones de programación pueden diferir según la versión de firmware y la revisión de hardware.
- Las capacidades SMS dependen de la disponibilidad de la tarjeta SIM y del soporte de la red móvil local y pueden usarse de forma distinta al reporte por GPRS.
- El tipo de instalación y la ubicación de la antena afectan la sensibilidad GNSS y la fiabilidad de los reportes.
- Variantes regionales o firmware OEM personalizados pueden cambiar los comandos y formatos de eventos soportados.
- Confirme siempre la lista exacta de funciones y el comportamiento del firmware con la documentación del fabricante para su unidad.

## Por qué usar Plaspy con estas funciones

Combinar Plaspy con el KHD KC200 centraliza los datos de posición, eventos y alertas del rastreador en una única vista operativa. Las herramientas de mapeo, reproducción de historial y alertas de Plaspy facilitan la supervisión de la actividad de vehículos y embarcaciones reportada por el KC200 y permiten actuar sobre eventos de geocerca y emergencias sin gestionar soluciones puntuales separadas.

Para conocer más sobre cómo Plaspy soporta dispositivos como el KHD KC200 y explorar las capacidades de la plataforma, visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo en el sitio del fabricante http://www.khd.hk.
