---
slug: /navtelekom/s_2654/features
id: s_2654-features
sidebar_label: Features
title: Navtelekom - СИГНАЛ S-2654 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones y compatibilidad con Plaspy del rastreador Navtelekom СИГНАЛ S-2654
keywords:
  - Navtelekom СИГНАЛ S-2654
  - funciones del rastreador Navtelekom
  - СИГНАЛ S-2654 GLONASS
  - rastreador vehicular GLONASS
  - rastreador vehicular 3G
  - rastreador doble SIM
  - rastreador con registro en microSD
  - MODBUS CAN RS232 RS485
  - rastreadores compatibles con Plaspy
  - dispositivo de telemetría para flotas
---

# Navtelekom - Características del СИГНАЛ S-2654

Esta página ofrece un resumen público de las capacidades del Navtelekom СИГНАЛ S-2654 y cómo se presentan cuando el dispositivo está integrado con Plaspy. Resume las funciones prácticas, las opciones de E/S y los comportamientos de telemetría relevantes para gestores de flotas, integradores y operadores que estén evaluando o manteniendo dispositivos conectados a los flujos de trabajo de Plaspy.

La disponibilidad y el comportamiento exactos pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la configuración del fabricante. El S-2654 aparece como archivado por el fabricante; aunque la documentación, las herramientas de configuración y el historial de firmware siguen accesibles en los recursos de Navtelekom, las unidades individuales pueden diferir en qué funciones están activas o son compatibles.

## Resumen de funciones

El СИГНАЛ S-2654 es un rastreador vehicular GLONASS diseñado para uso en flotas y telemetría industrial. Combina un módem celular 3G con redundancia de doble SIM, registro local y una amplia conectividad industrial para proporcionar informes de ubicación y telemetría a una plataforma central como Plaspy.

- Posicionamiento GNSS en tiempo real vía GLONASS con posibilidad de antena externa para mejorar la recepción de señal.
- Módem 3G integrado y soporte de doble SIM para mantener la conectividad celular en informes y telemetría.
- Buffer local de datos y registro de viajes en microSD con soporte hasta 32 GB para conciliación fuera de línea.
- Amplia E/S e interfaces seriales: entradas universales, salidas configurables, RS-232, RS-485, CAN y 1-Wire para la integración con sistemas del vehículo.
- Soporte MODBUS para reenviar telemetría desde controladores y sensores de terceros a la plataforma de rastreo.
- Batería interna de respaldo y protección robusta de la línea de alimentación adecuada para entornos vehiculares e industriales.

## Características principales del Navtelekom - СИГНАЛ S-2654

- Posicionamiento por satélite GLONASS con opción de antena GNSS externa.
- Módem celular 3G integrado y soporte de doble SIM para redundancia de operador.
- Almacenamiento local en microSD para registro continuo durante huecos de cobertura.
- Seis entradas universales y cuatro salidas configurables para detección de eventos y control remoto.
- Interfaces seriales y de bus: RS-232, RS-485, CAN y 1-Wire para conectar equipos.
- Soporte del protocolo MODBUS para integración de telemetría de terceros.
- Batería interna Li-Po de alrededor de 800 mAh para mantener operación autónoma breve.
- Protección robusta de la alimentación diseñada para sistemas eléctricos vehiculares e industriales.

## Cómo funcionan estas funciones con Plaspy

Cuando se conecta a Plaspy, el S-2654 entrega posiciones y telemetría para monitoreo en tiempo real, reproducción histórica e informes de eventos. Plaspy ingiere los datos del dispositivo y los expone a través de mapas, reportes y alertas para que usted pueda rastrear activos y responder a incidentes.

- Las actualizaciones de ubicación en tiempo real y las rutas históricas aparecen en los mapas de Plaspy y en la reproducción de viajes cuando el dispositivo reporta vía su enlace celular.
- Las entradas universales se mapean a tipos de eventos en Plaspy, de modo que ignición, puertas o alarmas puedan activar alertas e informes.
- La telemetría por serial, CAN y MODBUS puede reenviarse a Plaspy como datos de sensores o controladores para visibilidad operacional.
- Los registros locales en microSD ofrecen archivos en búfer que Plaspy puede conciliar cuando se restablece la conectividad.
- Plaspy detecta protocolos de rastreadores compatibles y acepta conexiones de dispositivos en su endpoint de ingestión, permitiendo que el S-2654 se integre sin mapeos de protocolo manuales.
- La doble SIM y la conectividad celular resiliente reducen las lagunas de datos y mejoran la continuidad de los informes en Plaspy.

## Casos de uso típicos

- Gestión de flotas con rastreo en vivo, historial de rutas e informes operativos para flotas de servicio y reparto.
- Flujos de trabajo de antirrobo e inmovilización usando salidas configurables y controles basados en eventos ligados a las alertas de Plaspy.
- Recolección de telemetría de combustible y motor integrando sensores conectados por MODBUS o CAN y enviando lecturas a Plaspy.
- Integración de vehículos industriales mediante enlaces RS-232 o RS-485 para capturar telemetría de equipos y monitorearla de forma centralizada.
- Registro offline de viajes en zonas con baja cobertura y posterior conciliación en Plaspy usando los registros en microSD.
- Diagnóstico remoto y gestión de versiones aprovechando las herramientas del fabricante y la visibilidad que ofrece Plaspy para planificación de mantenimiento.

## Notas sobre disponibilidad de funciones

- El S-2654 figura como archivado por el fabricante; la documentación y el historial de firmware aún están disponibles, pero el comportamiento del dispositivo puede variar según la versión de firmware.
- Las revisiones de hardware y las decisiones de cableado en la instalación pueden cambiar qué entradas, salidas e interfaces están presentes o activas en una unidad instalada.
- El soporte regional de bandas celulares, el firmware del módem y la compatibilidad con operadores dependen de la unidad concreta y su aprovisionamiento.
- Las integraciones MODBUS, CAN y serial requieren el cableado y la configuración adecuados usando las utilidades de Navtelekom y pueden necesitar mapeo antes de que los datos aparezcan en Plaspy.
- La capacidad de registro en microSD y la autonomía de la batería de respaldo dependen de la calidad de la tarjeta, los ajustes de registro y el estado del dispositivo.

## Por qué usar Plaspy con estas funciones

Plaspy ofrece una vista operativa única para el flujo de datos del S-2654, recopilando posiciones, eventos de E/S y telemetría serial en paneles, alertas e informes. Para organizaciones que necesitan conciencia de ubicación consistente, historial de viajes auditable e integración de telemetría vehicular, las interfaces industriales y el registro local del S-2654 se combinan bien con los flujos de trabajo de rastreo y reporte de Plaspy.

Para conocer más sobre cómo usar Plaspy con dispositivos como el СИГНАЛ S-2654 visite https://www.plaspy.com. Verifique los detalles específicos del dispositivo, el comportamiento del firmware y la documentación del fabricante en el sitio oficial de Navtelekom https://www.navtelecom.ru/ ya que las funciones y las implementaciones pueden cambiar con el tiempo.
