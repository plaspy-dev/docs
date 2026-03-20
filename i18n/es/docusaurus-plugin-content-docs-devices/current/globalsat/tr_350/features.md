---
slug: /globalsat/tr_350/features
id: tr_350-features
sidebar_label: Features
title: GlobalSat - TR-350 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador personal GlobalSat TR-350 4G LTE y cómo SOS, GNSS, Wi‑Fi y BLE interactúan con Plaspy
keywords:
  - funciones GlobalSat TR-350
  - rastreador GPS GlobalSat TR-350
  - capacidades TR-350
  - funciones TR-350 para Plaspy
  - rastreador GPS personal
  - rastreador SOS voz bidireccional
  - posicionamiento GNSS Wi Fi Bluetooth LE
  - alerta de caída reporte de movimiento
  - rastreador compatible con Plaspy
  - rastreador de seguridad portátil
---

# GlobalSat - Funciones del TR-350

Esta página ofrece una visión pública de las funciones del GlobalSat TR-350 tal como se emplea con Plaspy. Resume las capacidades del dispositivo relevantes para la monitorización, las alertas y la visibilidad de ubicación dentro de Plaspy, basándose en las descripciones del fabricante y en el contexto operativo práctico para proveedores de servicio y cuidadores.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las decisiones de implementación del fabricante. Antes del despliegue, confirme el comportamiento del firmware, las funciones soportadas y los pasos de aprovisionamiento con el fabricante y su proveedor de dispositivos.

## Resumen de funciones

El TR-350 es un rastreador personal compacto 4G LTE diseñado para sistemas móviles de respuesta personal de emergencia (MPERS) y uso como dispositivo de seguridad portátil. Su combinación de GNSS de alta sensibilidad, posicionamiento por Wi‑Fi y soporte de balizas Bluetooth LE pretende mejorar el contexto de ubicación en exteriores e interiores, mientras que el SOS integrado y la voz bidireccional permiten comunicaciones directas en emergencias.

- Reporte de ubicación GNSS en tiempo real con asistencia de Wi‑Fi y escaneo de balizas Bluetooth LE para mejorar el posicionamiento en entornos mixtos.
- Botón SOS de un toque para señalización rápida de emergencia y enrutamiento preconfigurado de llamadas a cuidadores o centros de respuesta.
- Voz bidireccional con micrófono y altavoz integrados para comunicación directa entre el usuario y el respondedor.
- Reporte de movimiento y alertas de aviso por caída para ayudar a detectar incidentes y generar notificaciones oportunas.
- Telemetría de batería y conectividad para vigilar el estado del dispositivo y el tiempo de actividad en despliegues a largo plazo.

## Funciones principales del GlobalSat - TR-350

- Factor de forma compacto y portátil, pensado para seguridad personal y despliegues MPERS.
- GNSS de alta sensibilidad para posicionamiento confiable en exteriores.
- Posicionamiento por Wi‑Fi para complementar el GNSS donde la señal satelital es débil.
- Escaneo de balizas Bluetooth Low Energy para mejorar la precisión en interiores y la detección de proximidad.
- Botón SOS de un solo toque con capacidad de llamada de emergencia y transmisión de eventos.
- Voz bidireccional con micrófono y altavoz integrados para comunicaciones manos libres.
- Reporte de movimiento y función de aviso por caída para soportar la detección automática de incidentes.
- Resistencia al agua IPX6 y alarmas por vibración o timbre para un uso diario robusto.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe telemetría de ubicación y estado desde dispositivos compatibles y presenta esa información en paneles, alertas y flujos de informes. Cuando un TR-350 está emparejado con Plaspy, la telemetría como fijaciones de ubicación, eventos SOS y el estado del dispositivo se incorporan a los flujos de eventos de Plaspy, de modo que operadores y cuidadores puedan actuar con contexto oportuno.

- Las fijaciones de ubicación y los datos de posicionamiento asistido aparecen en los mapas y vistas de historial de Plaspy para soportar rastreo en tiempo real y reproducción.
- Los eventos del botón SOS se convierten en mensajes de alerta y pueden integrarse en flujos de notificación e incidentes.
- Los avisos de movimiento y de caída se transforman en eventos monitorizables, permitiendo respuestas basadas en reglas y revisiones por parte del operador.
- Los indicadores de nivel de batería y conectividad muestran la salud del dispositivo para ayudar a mantener el tiempo de actividad y planificar mantenimiento.
- Los datos asistidos por Wi‑Fi y Bluetooth LE mejoran el contexto de posicionamiento en interiores que se muestra junto a las coordenadas GNSS.
- Plaspy detecta automáticamente los protocolos de rastreadores soportados e incorpora la telemetría del TR-350 en la plataforma para una visibilidad unificada; los dispositivos reportan a endpoints de Plaspy como d.plaspy.com como parte del aprovisionamiento normal.

## Casos de uso típicos

- Monitorización de adultos mayores con integración de botón SOS y aviso por caída para residencias asistidas y cuidado en el hogar.
- Seguridad infantil usando ubicación en tiempo real y voz bidireccional para respuesta rápida de los padres.
- Protección de trabajadores solitarios y programas de seguridad para empleados remotos que dependen de reportes de movimiento y alertas de emergencia.
- Servicios MPERS y de monitoreo por suscripción que requieren dispositivos portátiles con comunicación directa y capacidades de alerta.
- Alquileres de corto plazo o despliegues temporales que necesitan rastreadores personales compactos y fáciles de aprovisionar.
- Flujos de trabajo de cuidadores y centros de respuesta que combinan telemetría de dispositivos con triaje humano.

## Notas sobre disponibilidad de funciones

- Las actualizaciones de firmware del fabricante pueden habilitar, refinar o modificar funciones como la sensibilidad de detección de caídas y el comportamiento del posicionamiento asistido.
- Las revisiones de hardware o las variantes regionales pueden afectar el soporte de bandas celulares, el comportamiento del módem y otras características relacionadas con radio.
- Las decisiones de instalación y el uso de accesorios pueden influir en la calidad de la señal y el rendimiento práctico del posicionamiento en interiores.
- Algunas funciones, nombres de eventos y formatos de telemetría dependen del firmware del dispositivo y de la configuración del fabricante.
- Consulte siempre la documentación oficial de GlobalSat y a su proveedor de dispositivos para obtener la lista precisa de funciones del hardware y firmware que planea desplegar.

## Por qué usar Plaspy con estas funciones

El uso del GlobalSat TR-350 con Plaspy ofrece una forma práctica de centralizar la telemetría de seguridad personal y los datos de incidentes en una plataforma de rastreo y monitorización. Plaspy puede consolidar el contexto de ubicación GNSS, Wi‑Fi y Bluetooth LE con eventos de SOS, movimiento y caída para proporcionar a operadores y cuidadores una mejor conciencia situacional y opciones de respuesta más rápidas.

Si desea obtener más información sobre cómo Plaspy puede apoyar despliegues de rastreadores personales portátiles como el TR-350, visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y orientación del fabricante, consulte los recursos de GlobalSat en https://www.globalsat.com.tw/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con el fabricante.
