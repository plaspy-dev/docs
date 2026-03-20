---
slug: /trackerking/ec35/features
id: ec35-features
sidebar_label: Features
title: TrackerKing - EC35 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de compatibilidad del TrackerKing EC35 con Plaspy, cubre seguimiento, sensores, resistencia y telemetría de flotas
keywords:
  - Características TrackerKing EC35
  - Rastreador GPS TrackerKing EC35
  - Compatibilidad EC35 Plaspy
  - Funciones TrackerKing EC35
  - Seguimiento vehicular EC35
  - Soporte sensor de combustible EC35
  - Identificación conductor IButton EC35
  - Rastreador 4G EC35
  - Rastreador IP68 EC35
  - Telemetría de flota EC35
---

# TrackerKing - Características del EC35

Esta página describe el contexto público de funcionalidades para el uso del TrackerKing EC35 con Plaspy. Resume las capacidades del EC35 que interesan a los usuarios de Plaspy, incluyendo seguimiento, entradas de telemetría y opciones de control remoto. El objetivo es explicar cómo las funciones del dispositivo se mapean a la funcionalidad de Plaspy y a usos operativos habituales, sin sustituir la documentación del fabricante.

La disponibilidad y el comportamiento exacto de ciertas funciones pueden variar según la versión de firmware, la revisión de hardware, accesorios opcionales, el método de instalación y variantes regionales. Cuando es posible, esta página se basa en la descripción del modelo EC35, pero usted debe confirmar los conjuntos de funciones y el comportamiento del firmware con el fabricante y su proveedor del dispositivo.

## Resumen de características

El EC35 es un rastreador vehicular resistente, diseñado para ofrecer continuidad de servicio y reportes fiables en zonas con cobertura variable. Combina conectividad celular, carcasa duradera e entradas de sensor flexibles para que gestores de flotas y activos puedan monitorear ubicación y estados clave del vehículo a través de Plaspy.

- Seguimiento GPS en tiempo real con reproducción histórica de rutas para visibilidad operativa y revisión de incidentes
- Conectividad celular 4G Cat1 con retroceso automático a 2G para mantener el reporte en coberturas mixtas
- Carcasa con clasificación IP68 y amplio rango de alimentación de 9–90V para instalación en autos, camiones, motocicletas y maquinaria pesada
- Entradas integradas para sensores de nivel de combustible y temperatura, además de identificación de conductor por IButton para atribución de eventos
- Batería interna de respaldo que preserva los reportes durante la pérdida de alimentación principal y permite alertas relacionadas con energía

## Funciones principales del TrackerKing EC35

- Módem celular 4G Cat1 con retroceso automático a 2G para conectividad resiliente en áreas con redes mixtas
- Soporte para protocolos de rastreo estándar GT06, JT808 y Tianqin, lo que facilita la integración con plataformas como Plaspy
- Carcasa impermeable IP68 y construcción robusta adecuada para despliegues en vehículos y exteriores exigentes
- Amplio rango de entrada de 9–90V y batería interna de respaldo para reducir interrupciones y generar alertas por eventos de energía
- Detección de ACC y soporte de ignición virtual para el monitoreo de eventos de motor y control de uso
- Entradas para sensores externos de nivel de combustible y temperatura, extendiendo la telemetría para gestión de combustible y visibilidad de cadena de frío
- Identificación de conductor mediante IButton y soporte para módulos de relé Bluetooth opcionales para emparejamiento local de sensores
- Capacidad de corte remoto de motor y combustible para control tipo inmovilizador cuando se integra con flujos de trabajo en Plaspy

## Cómo funcionan estas características con Plaspy

Plaspy ingiere los reportes de ubicación, telemetría y estado del EC35 y expone esas señales en mapas, reproducción de historial, alertas y paneles de flota. Plaspy detecta automáticamente los protocolos compatibles del rastreador y presenta los eventos del dispositivo de forma que apoye la supervisión operativa y las reglas automatizadas.

- Actualizaciones de ubicación en tiempo real y reproducción de ruta en Plaspy para despacho y análisis posterior al viaje
- Eventos de ignición y de ignición virtual reflejados en Plaspy para cómputo de kilometraje, reportes de uso y seguimiento de eventos del motor
- Lecturas de nivel de combustible y de sensores de temperatura externos transmitidas a Plaspy para apoyar la gestión de combustible y el monitoreo de cadena de frío
- Eventos de identificación de conductor por IButton y emparejamientos Bluetooth opcionales visibles en Plaspy para atribución de conductor y flujos simples de control de acceso
- Acciones de corte remoto de motor y combustible disponibles en Plaspy cuando se configuran para soportar flujos de trabajo anti robo e inmovilización

## Casos de uso habituales

- Rastreo de flotas y supervisión de rutas para autos, camionetas ligeras y vehículos comerciales
- Flujos de trabajo anti robo y recuperación combinando ubicación, control de inmovilizador y alertas de estado
- Programas de monitoreo de combustible que usan entradas de sensores externos para detectar patrones de consumo y pérdidas
- Monitoreo de carga sensible a temperatura y cadena de frío con sensores externos y reproducción histórica
- Rastreo de motocicletas y maquinaria pesada donde la protección IP68 y la amplia tolerancia de voltaje son importantes
- Atribución de conductor y procesos de entrega/recepción por turnos usando identificación por IButton y accesorios Bluetooth opcionales

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen de la versión de firmware del equipo y pueden ser añadidas, modificadas o desactivadas mediante actualizaciones del fabricante
- Revisiones de hardware y variantes regionales pueden afectar las bandas celulares soportadas, las entradas disponibles o la compatibilidad con accesorios
- Funciones opcionales como módulos de relé Bluetooth o tipos específicos de sensores pueden requerir hardware adicional o configuración del proveedor
- El método de instalación y el cableado influyen en qué entradas quedan disponibles y cómo se reportan eventos de ignición o pérdida de alimentación
- Verifique siempre las funciones necesarias para su despliegue con su proveedor del dispositivo y consulte la documentación más reciente del fabricante

## Por qué usar Plaspy con estas funciones

Usar el TrackerKing EC35 con Plaspy ofrece una vía práctica para unificar visibilidad de ubicación, telemetría de sensores y control remoto para flotas de vehículos y activos móviles. El diseño robusto del EC35, su amplio rango de entrada y sus interfaces de sensor ayudan a mantener el flujo de datos desde vehículos diversos, mientras Plaspy recopila, muestra y actúa sobre esa información mediante mapas, alertas e informes.

To learn more about how Plaspy can work with devices like the EC35 visit https://www.plaspy.com. For the latest device specific technical details, firmware notes, and accessories consult TrackerKing documentation at https://trackerking.cn/ since manufacturer features and firmware behavior can change over time.
