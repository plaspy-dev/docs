---
slug: /teltonika/fmb110/features
id: fmb110-features
sidebar_label: Features
title: Teltonika - FMB110 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador Teltonika FMB110 y su integración con Plaspy para seguimiento y telemetría de vehículos
keywords:
  - Características Teltonika FMB110
  - Rastreador GPS Teltonika FMB110
  - FMB110 Plaspy
  - Características FMB110 para Plaspy
  - Características rastreador GPS Teltonika
  - FMB110 1 Wire temperatura
  - FMB110 sensores BLE
  - FMB110 inmovilizador
  - seguimiento vehicular FMB110
  - telemetría cadena de frío FMB110
---

# Teltonika - FMB110: Características

Esta página ofrece un resumen público de las capacidades del Teltonika FMB110 y describe cómo se integran con Plaspy para el rastreo de vehículos, la telemetría de sensores y flujos básicos de antirobo. Está orientada a gestores de flota, integradores y revisores técnicos que evalúan el FMB110 para su despliegue con Plaspy, con detalles prácticos no sensibles.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, las opciones de instalación y la implementación del fabricante. Para restricciones técnicas específicas del dispositivo, opciones avanzadas de configuración o registros de cambios de firmware, consulte la documentación y los recursos de firmware de Teltonika.

## Resumen de funciones

El FMB110 es un rastreador GPS 2G compacto diseñado para ofrecer informes de posición en tiempo real y telemetría básica para flotas mixtas. Sus antenas internas y sus opciones I/O reducidas lo hacen apropiado para instalaciones discretas en vehículos, soportando medición de temperatura, identificación por RFID o iButton, sensores BLE y bloqueo remoto del motor cuando se requiere.

- Informes de ubicación GNSS en tiempo real sobre redes 2G GSM para seguimiento de posición y visibilidad de rutas.
- Soporte 1 Wire para sondas de temperatura DS18B20 y lectura de iButton o etiquetas RFID para identificación de conductores o activos.
- Conectividad Bluetooth Low Energy para emparejar balizas y sensores inalámbricos como sondas de temperatura o humedad.
- Soporte de inmovilizador para bloqueo remoto del motor, útil en procedimientos antirobo y control de acceso.
- Factor de forma compacto con antenas celulares y GNSS internas para simplificar la instalación y evitar el tendido de antenas externas.

## Funciones principales del Teltonika - FMB110

- Conectividad celular 2G GSM compatible con las bandas GSM comunes para envío de telemetría y recepción de comandos.
- Antena GNSS interna para adquisición de posición y reportes periódicos.
- Interfaz 1 Wire compatible con sondas de temperatura DS18B20 y lectores de iButton o etiquetas RFID.
- Soporte Bluetooth Low Energy para integrar sensores externos y balizas orientadas a monitoreo ambiental o detección de manipulación.
- Control de inmovilizador para bloqueo remoto del motor en escenarios de anticlanqueo y control de acceso de flotas.
- Opciones estándar de empaquetado y cableado que facilitan el aprovisionamiento y despliegues masivos.
- Gestión remota mediante las herramientas de Teltonika para actualizaciones de firmware y configuración.

## Cómo funcionan estas funciones con Plaspy

Cuando el FMB110 está conectado a Plaspy, su ubicación y telemetría compatible se integran en los paneles, alertas e informes históricos de Plaspy. Plaspy detecta automáticamente muchos protocolos de rastreadores y muestra las posiciones y datos de sensores entrantes para supervisión operativa, además de proporcionar alertas e informes que aprovechan las capacidades del dispositivo.

- La posición y el movimiento en tiempo real aparecen en los mapas de Plaspy para visibilidad de la flota y reproducción de rutas.
- Las lecturas de temperatura desde sondas DS18B20 pueden registrarse y graficarse en Plaspy para monitoreo de cadena de frío y generación de alertas.
- Las lecturas de iButton o RFID pueden usarse en Plaspy para registrar eventos de identificación de conductores o bitácoras de acceso.
- Las entradas de sensores BLE y los cambios de estado de balizas pueden presentarse como telemetría o eventos dentro de Plaspy cuando se emparejan y configuran a través del rastreador.
- El estado del inmovilizador y los comandos de control pueden supervisarse y emplearse en flujos de trabajo de Plaspy para apoyar procedimientos antirobo y políticas de acceso.

## Casos de uso típicos

- Rastreo de ubicación de flota y análisis histórico de rutas para vehículos de reparto y servicio.
- Monitoreo de cadena de frío con sondas DS18B20 externas para registrar la temperatura de la carga durante el transporte.
- Car sharing y control de acceso mediante lecturas de iButton o RFID para asociar conductores a viajes.
- Operaciones antirobo que combinan localización en tiempo real con control remoto del inmovilizador y alertas.
- Incorporación de telemetría de sensores BLE para monitoreo ambiental de remolques o detección de manipulación de la carga.

## Notas sobre disponibilidad de funciones

- El firmware es determinante: funciones como el comportamiento BLE, el control del inmovilizador y el manejo de sensores dependen de la versión de firmware y de la configuración de Teltonika.
- Las revisiones de hardware y las variantes de SKU pueden alterar conectores disponibles, cables incluidos y cantidades de empaquetado.
- Las opciones de instalación afectan la capacidad: algunas funciones requieren cableado específico o la presencia e instalación correcta de sondas y antenas externas.
- El uso de bandas celulares regionales y el soporte de operadores para 2G pueden variar según el mercado y el proveedor de servicios.
- Verifique siempre las listas de funciones actuales, versiones de firmware y accesorios compatibles con la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Combinar el Teltonika FMB110 con Plaspy ofrece a las organizaciones un camino sencillo desde un hardware compacto hasta insights operativos. El FMB110 proporciona ubicación vehicular, medición de temperatura, identificación, entradas para sensores BLE y soporte de inmovilizador, mientras que Plaspy consolida esos datos en mapas, alertas e informes que ayudan a gestionar flotas, aplicar políticas de acceso, detectar manipulación y supervisar cargas sensibles a la temperatura.

Para conocer más sobre cómo Plaspy puede utilizar el FMB110 en su despliegue, visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio de Teltonika https://www.teltonika-gps.com/.
