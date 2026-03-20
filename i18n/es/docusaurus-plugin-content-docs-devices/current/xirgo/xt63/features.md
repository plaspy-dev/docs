---
slug: /xirgo/xt63/features
id: xt63-features
sidebar_label: Features
title: Xirgo - XT63 Features
sidebar_class_name: menu_item_tracker
description: Resumen práctico de las funciones del rastreador Xirgo XT63 y su integración con sistemas de flotas compatibles con Plaspy
keywords:
  - Xirgo XT63
  - características Xirgo XT63
  - rastreador GPS XT63
  - rastreador GPS Xirgo
  - compatibilidad XT63 Plaspy
  - XT63 OBD JBUS
  - geocerca XT63
  - telemetría XT63
  - rastreador compatible Plaspy
  - seguimiento de flota XT63
---

# Xirgo - Características del XT63

Esta página describe el contexto público de funcionalidades para usar el rastreador Xirgo XT63 con Plaspy. Resume las capacidades del XT63 relevantes para la monitorización de flotas, reportes de eventos e integración de telemetría dentro de los paneles y flujos de trabajo impulsados por Plaspy, y explica cómo suele reflejarse esa información a nivel de plataforma.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación, la variante regional y la configuración del fabricante. Para detalles específicos del dispositivo, opciones de configuración y las especificaciones técnicas más recientes, consulte la documentación oficial de Xirgo.

## Resumen de funciones

El XT63 es un rastreador telemático para vehículos diseñado para ofrecer ubicación confiable y telemetría de vehículos de pasajeros, camiones comerciales y equipos. Combina posicionamiento GNSS con conectividad celular, Bluetooth opcional y múltiples opciones de interfaz vehicular para soportar seguimiento, monitoreo de eventos e integración con plataformas de gestión de flotas como Plaspy.

- Informes de ubicación GPS en tiempo real para visibilidad continua de la flota y seguimiento de rutas.
- Soporte para protocolos OBD y JBUS donde estén disponibles, para exponer parámetros del motor y del vehículo.
- Notificaciones de geocerca y alertas por movimiento basadas en un acelerómetro integrado.
- Transporte de telemetría flexible sobre protocolos comunes como MQTT, HTTPS, UDP y SMS.
- Múltiples puertos de entradas y salidas y interfaces seriales para capturar ignición, puertas, alarmas y señales de actuadores.

## Características principales del Xirgo XT63

- GNSS integrado y conectividad celular con soporte multinetwork dependiente del modelo para mantener cobertura.
- Interfaces OBD y JBUS opcionales para parámetros del motor y diagnóstico cuando están disponibles.
- Entradas y salidas digitales y analógicas, incluyendo múltiples I/O, puertos seriales y de 1 wire para integraciones vehiculares.
- Detección de movimiento y acelerómetro de 3 ejes para alertas de desplazamiento y monitoreo antirrobo.
- Soporte Bluetooth opcional para ampliar telemetría con sensores externos y balizas.
- Opciones configurables de transporte y seguridad incluyendo MQTT, AWS MQTT con TLS 1.2, HTTPS, UDP y SMS.
- Paquetes de datos personalizables y configuración a nivel de plataforma para ajustar los informes a sus necesidades.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere ubicación y telemetría de rastreadores compatibles como el XT63 y presenta esos datos en paneles, reportes y reglas de alerta. La plataforma detecta el protocolo del dispositivo y mapea los eventos del equipo a telemetría utilizable para que los equipos de flota puedan monitorear vehículos, configurar alertas y analizar datos operativos sin necesidad de desarrollar middleware personalizado.

- Actualizaciones de posición en vivo y recorridos históricos aparecen en los mapas de Plaspy para revisión de rutas y despacho.
- Eventos de geocerca y alertas por movimiento generan notificaciones y pueden vincularse a flujos de trabajo dentro de Plaspy.
- Eventos de entradas digitales como ignición, estado de puertas y alarmas están disponibles como eventos discretos para reportes y alertas.
- Datos OBD y JBUS provenientes del equipo se reflejan como telemetría relacionada con motor y combustible cuando la unidad está conectada y reportando.
- Salidas de dispositivo y cambios de estado de actuadores pueden registrarse en Plaspy como eventos cuando la instalación lo soporta.
- Plaspy detecta automáticamente el protocolo del rastreador y acepta conexiones TCP o UDP en el endpoint de la plataforma para simplificar la configuración del dispositivo.

## Casos de uso típicos

- Monitoreo de operaciones de flota para ubicación en tiempo real, cumplimiento de rutas e informes de utilización.
- Flujos de trabajo de prevención y recuperación ante robo usando alertas por movimiento, notificaciones de violación de geocerca e historial de eventos.
- Diagnóstico de motor y monitoreo de combustible cuando el XT63 está conectado a interfaces OBD o JBUS.
- Integración remota de actuadores y control de seguridad para aplicaciones de inmovilizador o corte de arranque donde esté permitido.
- Monitoreo de activos y carga mejorado con sensores Bluetooth opcionales para telemetría de temperatura o proximidad.
- Seguimiento de equipos para flotas mixtas que incluyen vehículos ligeros, pesados y equipos comerciales.

## Notas sobre disponibilidad de funciones

- Algunas funciones como Bluetooth, bandas celulares específicas o respaldos de batería opcionales dependen del modelo y pueden no estar presentes en todas las unidades XT63.
- La versión de firmware y la configuración del fabricante determinan los campos de telemetría disponibles, el comportamiento de eventos y los formatos de paquete.
- La instalación física y el cableado afectan qué entradas, salidas e interfaces vehiculares son utilizables en una implementación concreta.
- Las variantes regionales o las aprobaciones de operadoras influyen en las generaciones de red soportadas y el comportamiento de roaming.
- Verifique siempre las capacidades exactas para su número de serie o lote de compra con la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el XT63 con Plaspy brinda a las organizaciones visibilidad consolidada sobre la ubicación de vehículos, actividad de eventos y telemetría a nivel vehicular. La combinación de interfaces en el vehículo, detección de movimiento y protocolos de transporte configurables hace del XT63 un equipo práctico para flotas que requieren alertas accionables, informes históricos e integración de datos de motor o sensores en sus flujos operativos.

Aprenda más sobre Plaspy y cómo la plataforma puede procesar la telemetría del XT63 visitando https://www.plaspy.com. Para las especificaciones de dispositivo, listas de funciones y comportamiento de firmware más actuales consulte la documentación oficial de Xirgo en https://xirgo.com/ para confirmar detalles de implementación y opciones soportadas.
