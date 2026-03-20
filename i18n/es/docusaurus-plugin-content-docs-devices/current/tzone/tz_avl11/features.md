---
slug: /tzone/tz_avl11/features
id: tz_avl11-features
sidebar_label: Features
title: TZone - TZ-AVL11 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador GPS TZone TZ-AVL11 y su integración con Plaspy para vigilancia de vehículos y activos
keywords:
  - Características TZone TZ-AVL11
  - Rastreador GPS TZ-AVL11
  - Compatibilidad TZone con Plaspy
  - Receptor RFID TZ-AVL11
  - Micrófono escucha TZ-AVL11
  - Sensor de temperatura TZ-AVL11
  - Rastreo de vehículos TZ-AVL11
  - Alarmas y geocerca TZ-AVL11
  - Rastreo de bajo consumo TZ-AVL11
  - Capacidades de rastreo TZ-AVL11
---

# TZone - TZ-AVL11: Características

Esta página ofrece el contexto público de funciones para el uso del rastreador TZone TZ-AVL11 con la plataforma Plaspy. Describe las capacidades del TZ-AVL11 que son relevantes para el monitoreo de flotas y activos cuando se integra con Plaspy, y explica cómo se manifiestan esas funciones en la práctica sin entrar en procedimientos privados de configuración.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Cuando se requieran detalles específicos para la instalación, la configuración o el cumplimiento normativo, consulte la documentación del dispositivo y al fabricante para obtener la información más actualizada.

## Resumen de funciones

El TZ-AVL11 es un rastreador GPS compacto con batería de respaldo que ofrece un conjunto de capacidades orientadas al seguimiento de vehículos y activos. Combina reporte de ubicación, sensores locales y monitoreo de audio con múltiples métodos de reporte para facilitar la supervisión continua y la notificación de eventos.

- Receptor RFID integrado de 2.4G para identificación mediante etiquetas y flujos simples de inventario
- Reporte de posición vía datos celulares o SMS con métodos compatibles TCP o UDP
- Micrófono integrado y función de escucha remota para monitoreo de audio
- Memoria a bordo para almacenar posiciones y eventos cuando la conectividad es intermitente
- Múltiples tipos de alarma, incluyendo exceso de velocidad, geocerca, batería baja, corte de alimentación, detección de movimiento y SOS
- Diseño de bajo consumo y batería interna para operación prolongada y energía de respaldo

## Funciones principales del TZone - TZ-AVL11

- Receptor RFID 2.4G para identificación por proximidad de activos o conductores
- Antenas GPS y GSM integradas para recepción consolidada
- Varias opciones de reporte, incluyendo GPRS mediante TCP o UDP y reporte por SMS
- Puerto mini USB para actualizaciones de firmware y mantenimiento del dispositivo
- Batería interna de litio para respaldo y funcionamiento autónomo extendido
- Micrófono con capacidad de escucha remota para monitorear el entorno del dispositivo
- Sensor de temperatura para vigilancia local de condiciones ambientales
- Funciones de alarma y eventos: exceso de velocidad, geocerca, batería baja, corte de alimentación, movimiento y SOS

## Cómo funcionan estas funciones con Plaspy

Plaspy puede recibir y mostrar los datos de ubicación y eventos del TZ-AVL11 para que los equipos supervisen activos en mapas, reciban alertas y revisen el historial reciente. Plaspy detecta automáticamente muchos protocolos de rastreadores, y el TZ-AVL11 puede configurarse para reportar a Plaspy usando los métodos estándar TCP o UDP hacia el endpoint de la plataforma.

- Las actualizaciones de posición en tiempo real y periódicas aparecen en los mapas de Plaspy para seguimiento en vivo
- Los eventos de alarma, como activaciones de geocerca, batería baja y detección de movimiento, se muestran como notificaciones o eventos en Plaspy
- Los registros almacenados en la memoria del dispositivo pueden reconciliarse con los reportes de Plaspy tras la reconexión para preservar el historial
- Las lecturas RFID y los eventos de temperatura pueden presentarse en Plaspy como identificaciones o notas ambientales cuando el dispositivo envía esos valores
- Las operaciones remotas, como la escucha de audio, quedan registradas en el historial de actividad del dispositivo para que los administradores relacionen eventos y respuestas

Note: Plaspy supports device reporting over TCP or UDP and can accept connections directed to the platform domain. Plaspy also performs automatic protocol detection to simplify device onboarding.

## Casos de uso típicos

- Seguimiento de flotas y supervisión de rutas con monitoreo audible en escenarios sensibles de seguridad
- Identificación de activos y puntos de control de inventario usando el receptor RFID 2.4G integrado
- Monitoreo remoto de vehículos o equipos donde se requiere operación con batería de respaldo
- Vigilancia de carga o ambientes sensibles a temperatura combinada con conocimiento de ubicación
- Flujos de trabajo basados en alertas para robo, movimientos no autorizados o pérdida de alimentación mediante geocercas y alarmas por corte de energía
- Reconstrucción histórica de rutas y auditoría usando la memoria a bordo y los reportes en Plaspy

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen del firmware del dispositivo y pueden variar entre versiones de firmware o revisiones de hardware
- Las variantes regionales y el soporte de bandas celulares pueden afectar la conectividad de red y el comportamiento de reporte
- Ciertas funciones, como el uso de RFID, el monitoreo de audio o la detección de puertas/motor, pueden requerir cableado específico o accesorios durante la instalación
- La capacidad de la batería y el rendimiento en espera dependen de la configuración, el intervalo de reporte y las condiciones ambientales
- Confirme siempre el conjunto exacto de funciones y el comportamiento del firmware con la documentación del fabricante para la unidad específica que posee

## Por qué usar Plaspy con estas funciones

Combinar el TZ-AVL11 con Plaspy ofrece a las organizaciones una forma directa de integrar las capacidades del dispositivo en una plataforma centralizada de seguimiento y alertas. Plaspy consolida las actualizaciones de ubicación, los eventos de alarma y la información de sensores para que operaciones, despacho y equipos de seguridad puedan actuar con información consistente desde una sola interfaz.

Para saber más sobre cómo Plaspy soporta rastreadores como el TZ-AVL11 y explorar las capacidades de la plataforma, visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y detalles del fabricante, verifique la documentación actual en http://www.tzonedigital.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
