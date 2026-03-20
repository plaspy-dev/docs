---
slug: /gotop/g23n/features
id: g23n-features
sidebar_label: Features
title: GOTOP - G23N Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GOTOP G23N NB‑IoT y su integración con Plaspy para gestión de flotas y controles remotos
keywords:
  - GOTOP G23N
  - GOTOP G23N características
  - rastreador GPS GOTOP G23N
  - G23N NB IoT
  - G23N Plaspy
  - rastreador NB IoT
  - rastreador GPS vehicular
  - rastreador para gestión de flotas
  - funciones GPS GOTOP
  - salida inmovilizador G23N
---

# GOTOP - G23N: Características

Esta página ofrece un resumen público de las funciones del rastreador GOTOP G23N NB‑IoT y de cómo sus capacidades se presentan y utilizan dentro de Plaspy. Resume las funciones del dispositivo relevantes para seguimiento, telemetría, alertas y flujos de trabajo de control remoto cuando el G23N está integrado con Plaspy para la monitorización de vehículos y flotas.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y los detalles de la instalación. Esta página toma la descripción del fabricante como referencia para las capacidades públicas, pero no sustituye la documentación oficial del fabricante ni las notas de versión para el comportamiento e implementación del firmware.

## Resumen de funciones

El G23N es un rastreador compacto de grado vehicular centrado en telemetría NB‑IoT de bajo consumo, posicionamiento multiconstelación y entradas y salidas prácticas para antirrobo y monitoreo de tiempo de funcionamiento. Su diseño está orientado a instalaciones discretas y despliegues prolongados donde la comunicación periódica y las alertas por eventos son importantes.

- Conectividad NB‑IoT basada en el módulo Quectel BC26 para telemetría de área amplia y bajo consumo con larga vida de despliegue.
- Posicionamiento GNSS multiconstelación usando GPS más BDS y asistencia LBS para ofrecer reportes de ubicación precisos.
- Entradas y salidas de grado vehicular con detección ACC y una salida de baja tensión utilizable para control remoto de alimentación o corte de combustible.
- Amplio rango de entrada DC compatible con diversos sistemas eléctricos de vehículos para simplificar la instalación.
- Soporte opcional de batería interna de respaldo y alarma por pérdida de alimentación para mantener operación corta sin red y detectar manipulación.
- Carcasa compacta resistente a la intemperie y antenas internas para montaje discreto en autos, motocicletas, bicicletas eléctricas y vehículos comerciales ligeros.

## Funciones principales del GOTOP - G23N

- Conectividad NB‑IoT mediante el módulo Quectel BC26 para telemetría eficiente y larga autonomía en escenarios de reportes periódicos.
- GNSS multiconstelación con GPS y BDS y asistencia LBS para mejorar la disponibilidad de posición y la precisión reportada.
- Amplio rango de entrada DC para soportar distintos sistemas eléctricos vehiculares y simplificar instalaciones en diversos tipos de vehículos.
- Entrada de detección ACC para reportar estados de encendido o tiempo de funcionamiento en informes y reglas de eventos.
- Salida de baja tensión dedicada para control remoto tipo corte de combustible o inmovilización, para intervenciones antirrobo cuando están autorizadas.
- Batería de respaldo opcional para proporcionar operación a corto plazo y habilitar notificaciones por pérdida de alimentación.
- Interfaz de configuración UART‑TTL para ajuste del dispositivo e integración cuando se dispone de acceso físico.
- Rápida reacquisición GNSS que facilita fijar la posición rápidamente tras pérdida de señal, ayudando a mantener la precisión de rutas y paradas.

## Cómo funcionan estas funciones con Plaspy

Al integrar el G23N con Plaspy, sus señales de posicionamiento, estado y alarmas se muestran en la plataforma Plaspy para proporcionar visibilidad operativa y manejo de eventos. Plaspy detecta automáticamente protocolos de rastreadores compatibles y mapea las entradas y alarmas comunes del dispositivo a funciones de la plataforma para su monitoreo y respuesta.

- Marcadores de ubicación en tiempo real e historial de rutas basados en reportes GNSS del G23N transmitidos a Plaspy.
- Visibilidad de encendido y tiempo de funcionamiento impulsada por eventos de detección ACC, mostrada en el estado del vehículo e informes de viajes.
- Eventos de pérdida de alimentación y batería de respaldo señalados en Plaspy para alertar a los operadores sobre manipulación o desconexión de la fuente externa.
- Acciones remotas sobre la salida de baja tensión mapeadas a funciones de Plaspy para inmovilizaciones o cortes autorizados cuando están configurados.
- Telemetría periódica NB‑IoT y alarmas visibles en paneles y reportes para monitoreo de despliegues prolongados y revisión de incidentes.

## Casos de uso típicos

- Gestión de flotas pequeñas y medianas que requieren seguimiento continuo, monitoreo de tiempo de funcionamiento y reporte de eventos.
- Monitoreo de vehículos de alquiler y financiados con alarmas por pérdida de alimentación y opciones de inmovilización remota para flujos de trabajo de seguridad.
- Taxis, autos particulares, motocicletas y bicicletas eléctricas que necesitan instalación compacta y rápida reacquisición GNSS en entornos urbanos.
- Vehículos comerciales ligeros y de reparto que se benefician de un amplio rango de entrada DC para soportar sistemas eléctricos diversos.
- Despliegues de seguridad de activos que requieren conectividad NB‑IoT de bajo mantenimiento y operación corta sin red mediante batería de respaldo.
- Situaciones en las que se prefieren E/S físicas sencillas y una UART de configuración para facilitar la integración e instalación.

## Notas sobre disponibilidad de funciones

- La disponibilidad exacta de funciones como tipos de alarma, comportamiento de E/S y soporte de batería de respaldo puede variar según la versión de firmware y la revisión de hardware.
- Las variantes regionales de bandas celulares y la disponibilidad de redes NB‑IoT pueden afectar la conectividad y el comportamiento de la telemetría en distintos mercados.
- Algunos comportamientos y opciones de configuración dependen de cómo se instala y cablea el dispositivo en el vehículo, por lo que una instalación profesional puede influir en el rendimiento de las funciones.
- La documentación del fabricante y las notas de la versión del firmware son las fuentes autorizadas para los detalles más actuales sobre el dispositivo y los comandos soportados.
- Plaspy mapea las entradas y alarmas comúnmente anunciadas a funciones de la plataforma, pero los administradores deben validar qué eventos envía el firmware específico de su dispositivo.

## Por qué usar Plaspy con estas funciones

Usar el GOTOP G23N con Plaspy brinda a las organizaciones una vista unificada de ubicación, estado de encendido, eventos de energía y acciones remotas autorizadas. Plaspy recopila la telemetría del rastreador y la presenta en paneles, informes y reglas de alerta que ayudan a los equipos operativos a monitorear el estado de los vehículos, responder a incidentes y supervisar de forma rutinaria sin necesitar sistemas separados para telemetría y control.

Para obtener más información sobre Plaspy y cómo puede utilizar el G23N en sus despliegues de seguimiento visite https://www.plaspy.com. Para descripciones de funciones específicas del dispositivo, comportamiento del firmware y detalles de implementación más recientes consulte la documentación del fabricante en https://www.gotop.cc/ antes de planificar instalaciones o flujos de trabajo operativos.
