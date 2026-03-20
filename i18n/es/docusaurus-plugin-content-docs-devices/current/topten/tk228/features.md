---
slug: /topten/tk228/features
id: tk228-features
sidebar_label: Features
title: TopTen - TK228 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador TopTen TK228 y su integración con Plaspy para monitoreo vehicular
keywords:
  - TopTen TK228
  - funciones TopTen TK228
  - rastreador GPS TopTen TK228
  - rastreador OBD II TK228
  - rastreador OBD TopTen
  - seguimiento de vehículos Plaspy
  - seguimiento de flotas TK228
  - rastreador con diagnóstico Bluetooth
  - rastreador alarma RFID para autos
  - inmovilizador inalámbrico TK228
---

# TopTen - Características del TK228

Esta página describe las capacidades públicas del TopTen TK228 y cómo se utilizan en la plataforma Plaspy. El texto se centra en descripciones prácticas y no sensibles de lo que el dispositivo puede reportar y de cómo esa información puede mostrarse en Plaspy para supervisión y operaciones.

La disponibilidad de funciones y el comportamiento exacto pueden variar según la versión de firmware, la revisión de hardware, el modelo del vehículo, el método de instalación y la implementación del fabricante. Para comandos específicos del dispositivo, funciones críticas de seguridad o los últimos detalles técnicos, consulte la documentación oficial del fabricante.

## Resumen de funciones

El TK228 es un rastreador compatible con OBD II, de tipo plug and play, diseñado para rastreo y seguridad vehicular. Combina el reporte de posición con acceso a datos del vehículo y funciones de alarma para ofrecer a gestores de flotas y propietarios mayor visibilidad y alertas más rápidas ante eventos relevantes.

- Conector OBD II plug and play para instalación rápida en vehículos con puerto OBD II
- Posicionamiento GPS con respaldo por estación base GSM para métodos duales de localización
- Acceso a datos del vehículo vía bus CAN y diagnóstico por Bluetooth para obtener velocidad y odómetro
- Múltiples tipos de alarma: movimiento, exceso de velocidad, geocerca, corte de energía, motor encendido y vibración
- Alarma con RFID integrado y soporte de tags keyless para armar y desarmar sistemas de seguridad
- Inmovilizador inalámbrico y funciones antimanipulación que permiten inmovilización remota y detección de desconexión ilícita

## Características principales del TopTen - TK228

- Compatibilidad con conector OBD II para instalación no invasiva en vehículos equipados con dicho puerto
- Posicionamiento GPS con localización por estación base GSM como fuente secundaria
- Acceso a datos del bus CAN para velocidad, odómetro y diagnósticos relacionados cuando el vehículo lo soporte
- Diagnóstico por Bluetooth para acceso local a datos CAN y lectura o borrado de códigos de error
- Múltiples funciones de alarma: movimiento, exceso de velocidad, geocerca, motor encendido, corte de energía y vibración
- Alarma para autos con RFID integrado y soporte de tags keyless para control de acceso de usuarios
- Sensor de choque integrado para detectar eventos de vibración y permitir modos de ahorro de energía
- Batería de respaldo recargable integrada para notificaciones de chequeo de emergencia y alertas por corte de energía

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y normaliza los reportes de rastreadores compatibles para que la ubicación, las alarmas y los datos vehiculares disponibles puedan mostrarse y utilizarse en monitoreo e informes. Cuando un TK228 está configurado para reportar en Plaspy, la plataforma presenta la información de ubicación y eventos junto con el estado del equipo y las diagnósticos disponibles.

- Los puntos de ubicación y la localización por respaldo GSM aparecen en el mapa de Plaspy para seguimiento de rutas y posición
- Los eventos de alarma (movimiento, exceso de velocidad, geocerca, corte de energía, vibración, motor encendido) se registran como alertas y entradas en el historial del dispositivo
- La telemetría del vehículo disponible desde el bus CAN (si el vehículo lo soporta) se muestra en campos legibles como velocidad y odómetro cuando se reportan
- La disponibilidad de diagnóstico por Bluetooth y acceso remoto se muestra como capacidades del dispositivo para que los operadores sepan cuándo se pueden realizar diagnósticos remotos
- Las notificaciones de antimanipulación y corte de energía quedan registradas para ayudar a detectar posible extracción del dispositivo o problemas eléctricos
- Plaspy detecta automáticamente el protocolo del rastreador y soporta métodos estándar de reporte, de modo que el TK228 puede integrarse sin necesidad de mapeo manual de protocolos

## Casos de uso típicos

- Rastreo de ubicación y historial de rutas de vehículos de flota para supervisión operativa
- Alertas en tiempo real ante sospecha de robo o movimiento no autorizado mediante alarmas de movimiento y vibración
- Monitoreo de odómetro y lecturas de velocidad cuando el acceso al bus CAN está disponible
- Diagnóstico remoto y visibilidad de códigos de falla para coordinar intervenciones de mantenimiento
- Control de acceso y seguridad con arming y disarming mediante tags RFID para vehículos compartidos
- Monitoreo de corte de energía y antimanipulación para detectar extracción del equipo o desconexión de batería

## Notas sobre disponibilidad de funciones

- La telemetría exacta que el TK228 puede reportar depende del soporte del vehículo para OBD II y datos del bus CAN; no todos los vehículos exponen los mismos parámetros
- Las revisiones de firmware y las opciones de configuración del fabricante pueden modificar qué alarmas y diagnósticos están disponibles o cómo funcionan
- Algunas funciones, como el inmovilizador inalámbrico o la parada remota del motor, pueden estar restringidas por regulaciones locales o requerir instalación especializada
- El diagnóstico por Bluetooth requiere proximidad local y el emparejamiento adecuado para acceder a datos del CAN vía Bluetooth
- Las variantes regionales del fabricante y las revisiones de hardware pueden afectar las funciones y accesorios compatibles

## Por qué usar Plaspy con estas funciones

Usar el TopTen TK228 junto con Plaspy ofrece una vista consolidada de ubicación, alarmas y diagnósticos vehiculares disponibles en una sola plataforma. La detección de dispositivos y el manejo de eventos de Plaspy facilitan identificar cuándo el rastreador reporta una alarma, un problema de alimentación o datos del vehículo que requieren atención, ayudando a priorizar respuestas y mantener la visibilidad operativa.

Si desea conocer más sobre cómo Plaspy puede usar el TK228 para monitoreo vehicular y supervisión de flotas, visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, actualizaciones de firmware y orientación del fabricante, verifique los detalles en el sitio oficial de TopTen en http://www.t10.cn.
