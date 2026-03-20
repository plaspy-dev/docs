---
slug: /topfly/solarguardx_100/features
id: solarguardx_100-features
sidebar_label: Features
title: TopFly - SolarGuardX 100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador y candado TopFly SolarGuardX 100 y su integración con Plaspy
keywords:
  - TopFly SolarGuardX 100 características
  - SolarGuardX 100 rastreador GPS
  - SolarGuardX 100 compatibilidad con Plaspy
  - rastreador de carga con energía solar
  - candado rastreador GPS resistente
  - rastreador LTE Cat M1 NB2
  - rastreador con soporte de sensores BLE
  - rastreador seguridad contenedores y remolques
  - geocerca y alertas rastreador
  - registro de ubicaciones en búfer
---

# TopFly - SolarGuardX 100: Funciones

Esta página ofrece una vista general pública de las funciones del TopFly SolarGuardX 100 y cómo se aprovechan sus capacidades dentro de Plaspy. Resume las funciones prácticas del modelo para la seguridad de flotas y carga, describe los tipos de telemetría y eventos que el dispositivo puede generar, y explica cómo se presentan esas señales en Plaspy para monitoreo y flujos de trabajo operacionales.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la revisión de firmware, la variante de hardware, el método de instalación, la versión regional del producto y la implementación del fabricante. Use esta página como guía general al planificar despliegues con Plaspy y consulte la documentación del fabricante para obtener detalles específicos y actualizados del dispositivo.

## Resumen de funciones

El SolarGuardX 100 es un rastreador GPS tipo candado, resistente y con asistencia solar, diseñado para la protección de activos al aire libre y despliegues de larga duración. Combina una batería de gran capacidad con carga solar integrada, protección industrial contra el agua y varias interfaces inalámbricas para que la ubicación, las alarmas y los datos de sensores auxiliares lleguen a Plaspy, ofreciendo visibilidad casi en tiempo real y resiliencia ante interrupciones de conectividad.

- Energía asistida por panel solar con batería recargable de alta capacidad y carga por USB Tipo C para mayor autonomía en campo y menor mantenimiento.
- Caja industrial con clasificación IP67, imán integrado y cuerda suministrada para un montaje seguro en contenedores, remolques y camiones.
- Posicionamiento GNSS de alta precisión con soporte multi-constelación para mejorar la fiabilidad de la ubicación en seguimiento de carga y flotas.
- Conectividad celular amplia que incluye LTE Cat M1 y NB2 con respaldo GSM para cobertura amplia y enlaces optimizados para IoT.
- Soporte para accesorios BLE para sensores de temperatura, humedad y de puerta, de modo que la telemetría ambiental se pueda emparejar con los datos de ubicación.
- Amplio buffer local y alarmas y geocercas configurables para preservar el historial de rastreo y disparar alertas ante incidentes.

## Funciones principales del TopFly - SolarGuardX 100

- Sistema de batería con asistencia solar y paquete recargable integrado, además de carga por USB Tipo C para reducir la necesidad de recargas manuales.
- Diseño tipo candado resistente con protección IP67, imán integrado y cuerda incluida para montaje seguro en exteriores.
- Rendimiento GNSS con operación multi-constelación para precisión horizontal que va de submetro a pocos metros en condiciones típicas.
- Conectividad celular que cubre LTE Cat M1 y NB2, con respaldo GSM, para operar en una amplia variedad de redes.
- Soporte Bluetooth Low Energy (BLE) para emparejar accesorios TOPFLYtech y de terceros, como sensores ambientales y de puerta.
- Gran almacenamiento local en búfer para retener miles de puntos de ubicación cuando no hay cobertura y reenviarlos cuando se restaura la conectividad.
- Eventos de seguridad configurables, como corte de cuerda y alarmas de cierre/abre del candado, con reporte de eventos a plataformas backend.
- Capacidades de gestión remota, incluidas actualizaciones over-the-air y configuración mediante comandos de red para ajustar el comportamiento en campo.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, los dispositivos SolarGuardX 100 reportan posición, eventos y telemetría de sensores para que los equipos operativos y de seguridad puedan rastrear activos y responder a alarmas. Plaspy detecta automáticamente protocolos de tracker compatibles e ingiere mensajes de ubicación y eventos para visualización y flujos de trabajo basados en reglas.

- Las actualizaciones de ubicación en tiempo real y las rutas históricas se muestran en Plaspy para que despachadores puedan ver el movimiento de activos y el historial reciente de posiciones.
- Las alarmas de seguridad y los eventos de geocerca, como el corte de cuerda y los estados de bloqueo/desbloqueo, se entregan a Plaspy para notificaciones y escalamiento.
- Las ubicaciones y eventos almacenados en búfer se sincronizan con Plaspy una vez que se restablece la conectividad, manteniendo un registro continuo de actividad.
- La telemetría de accesorios BLE emparejados puede reenviarse a Plaspy como telemetría auxiliar para monitoreo ambiental.
- La configuración remota y las actualizaciones de firmware se reflejan en el estado del dispositivo dentro de Plaspy, permitiendo a los administradores gestionar ajustes de flota y supervisar la salud de los dispositivos.

## Casos de uso típicos

- Monitoreo antirrobo de contenedores y remolques con alertas por corte de cuerda y estado de cierre reportadas a los equipos operativos.
- Rastreo de activos de flota para remolques, equipos portátiles y contenedores intermodales para mejorar visibilidad y utilización.
- Monitoreo de cadena de frío y carga sensible a la temperatura al reenviar la telemetría de sensores BLE junto con la ubicación.
- Vigilancia en puertos, patios y zonas de staging, donde dispositivos resistentes al clima reducen las necesidades de mantenimiento.
- Despliegues remotos que dependen de carga solar y amplios buffers para soportar conectividad intermitente.
- Flujos de trabajo de última milla o control de acceso que emplean desbloqueo por RFID o BLE en procedimientos operativos coordinados.

## Notas sobre la disponibilidad de funciones

- Conjuntos de funciones como modelos de accesorios BLE compatibles, comportamiento de alarmas y capacidad de almacenamiento en búfer pueden variar según la revisión de firmware y hardware.
- El soporte de bandas celulares regionales y las aprobaciones de operadores dependen de la variante del dispositivo y del país donde se despliegue.
- Algunas interfaces y funciones de gestión requieren una instalación correcta, emparejamiento de accesorios o aprovisionamiento de red para funcionar según lo esperado.
- El comportamiento del almacenamiento en búfer y la carga de datos está sujeto a la configuración del firmware y puede ajustarse mediante configuraciones del fabricante o comandos remotos.
- Verifique siempre la etiqueta del dispositivo, las notas de la versión de firmware y las guías del fabricante para conocer especificaciones y limitaciones exactas antes del despliegue.

## Por qué usar Plaspy con estas funciones

Usar SolarGuardX 100 con Plaspy aporta valor práctico a organizaciones que necesitan visibilidad persistente, detección de alarmas y telemetría resistente para activos de carga y flota en exteriores. Plaspy consolida flujos de ubicación, eventos de seguridad y lecturas de sensores en una única vista operativa para que los equipos puedan actuar ante incidentes, monitorear el estado y mantener registros históricos completos.

Para saber más sobre cómo Plaspy soporta despliegues con SolarGuardX 100 visite https://www.plaspy.com. Para conocer las funciones específicas del dispositivo, comportamiento del firmware y detalles del fabricante, verifique la información con TopFly en https://www.topflytech.com/
