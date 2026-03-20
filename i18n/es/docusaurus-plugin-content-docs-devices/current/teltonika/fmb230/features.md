---
slug: /teltonika/fmb230/features
id: fmb230-features
sidebar_label: Features
title: Teltonika - FMB230 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Teltonika FMB230 y cómo su GPS y Bluetooth LE trabajan con Plaspy para rastreo de vehículos y sensores
keywords:
  - Características Teltonika FMB230
  - Rastreador GPS Teltonika FMB230
  - Compatibilidad FMB230 Plaspy
  - FMB230 Bluetooth LE
  - FMB230 impermeable IP67
  - Soporte GNSS FMB230
  - Rastreo de vehículos FMB230
  - Monitoreo de sensores FMB230
  - Capacidades Teltonika FMB230
  - Opciones de instalación FMB230
---

# Teltonika - FMB230: Funciones

Esta página sintetiza el contexto público de uso del Teltonika FMB230 con Plaspy. Describe las capacidades prácticas que usted puede aprovechar en Plaspy para rastreo de ubicación, integración de sensores vía Bluetooth LE e instalaciones robustas. El contenido está orientado a las funcionalidades visibles para el usuario y a cómo se traducen en visibilidad operativa cuando el dispositivo reporta a la plataforma Plaspy.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para detalles técnicos específicos del dispositivo, registros de cambios de firmware y las especificaciones más recientes, consulte la documentación y las notas de lanzamiento de Teltonika.

## Resumen de funciones

El FMB230 es un rastreador compacto y resistente que combina conectividad celular multinetwork, soporte mult GNSS y Bluetooth Low Energy para ofrecer ubicación y telemetría de sensores para vehículos y activos. Su caja impermeable IP67 y las opciones de instalación buscan simplificar el despliegue en entornos exigentes.

- Posicionamiento multi GNSS con soporte para varios sistemas de satélites para mejorar cobertura y precisión
- Conectividad Bluetooth LE para conectar balizas y sensores de baja energía externos, útiles para temperatura, humedad y detección magnética
- Carcasa resistente con grado IP67 y cierre tipo click que facilita la instalación rápida con diferentes opciones de cableado
- Batería interna de respaldo y modos de bajo consumo para mantener reportes de posición ante pérdida de alimentación
- Reporte por datos celulares y SMS para conectividad continua y entrega remota de telemetría
- Entradas cableadas flexibles para integrar señales discretas y estado de encendido cuando sea necesario

## Características principales del Teltonika - FMB230

- Soporte Bluetooth 4.0 Low Energy que permite periféricos BLE externos como sensores de temperatura y humedad, sensores BLE universales y balizas compatibles
- Carcasa IP67 resistente con mecanismo de cierre en dos fases tipo click que no requiere herramientas para una instalación simplificada
- Módulo TM2500 como base de radio, ofreciendo GSM, GPRS, GNSS y capacidades Bluetooth dentro de la arquitectura del equipo
- Soporte mult GNSS incluyendo GPS, GLONASS, GALILEO, BEIDOU, QZSS y AGPS para mayor fiabilidad en la posición
- Alta sensibilidad de seguimiento y precisión de posición CEP por debajo de 2.5 metros en condiciones típicas, según el fabricante
- Tiempos de arranque GNSS rápidos con desempeño declarado para arranques en caliente, tibio y frío
- Soporte celular cuatribanda y transferencia de datos GPRS multislot con capacidad SMS para comunicaciones de texto y datos
- Amplio rango de tensión de entrada con protección contra sobretensión e inversión de polaridad, además de batería interna Li-Ion de respaldo y modos de bajo consumo

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe ubicación y telemetría de rastreadores compatibles y muestra el estado del dispositivo en una vista operativa unificada. La ubicación del FMB230, los datos de sensores BLE y las entradas discretas pueden presentarse en Plaspy para monitoreo y generación de alertas, sujeto a la configuración del equipo y a las capacidades del firmware.

- Las actualizaciones de ubicación del FMB230 aparecen en los mapas y cronogramas de Plaspy para apoyar la reconstrucción de rutas y el rastreo en tiempo real
- Las lecturas de sensores Bluetooth LE y las detecciones de balizas pueden asignarse a canales de sensores en Plaspy para el monitoreo de temperatura, humedad o presencia cuando el dispositivo y los periféricos admiten ese reporte
- Alertas como exceso de velocidad, detección de interferencias (jamming), eventos de encendido y otros escenarios detectados en el equipo pueden mostrarse en Plaspy como eventos para flujos de trabajo operativos y notificaciones
- El estado en línea del dispositivo y el nivel de batería de respaldo ayudan a Plaspy a identificar problemas de conectividad y situaciones de pérdida de energía
- Plaspy gestiona automáticamente la detección de protocolos para los rastreadores soportados y acepta reportes por los métodos de transporte estándar, lo que simplifica la configuración dentro de la plataforma
- La telemetría recibida del FMB230 se puede incorporar en reglas de mapeo, reportes programados y paneles de control de flota en Plaspy para supervisión operativa

## Casos de uso típicos

- Rastreo de flotas para supervisión de rutas y análisis del historial de posiciones
- Monitoreo de activos en entornos duros o exteriores aprovechando la protección IP67 del equipo
- Monitoreo ambiental remoto mediante sensores BLE de temperatura y humedad
- Detección de presencia en remolques o equipos con balizas BLE o sensores magnéticos
- Monitoreo de comportamiento del conductor y eventos usando funciones de detección de exceso de velocidad y estado de encendido
- Integración de telemetría de combustible y operación cuando se utilizan sensores compatibles y el firmware lo admite

## Notas sobre disponibilidad de funciones

- El soporte de funciones depende de la versión de firmware y la revisión de hardware; algunas capacidades con periféricos BLE y escenarios avanzados requieren versiones específicas de firmware
- El soporte celular regional y la disponibilidad de bandas pueden variar; confirme la compatibilidad de la red para operación 2G o 4G en su área de despliegue objetivo
- Las decisiones de instalación física, como el tipo de cable y el método de montaje, pueden afectar el acceso a las entradas y el alcance BLE para los sensores conectados
- La funcionalidad de sensores y periféricos puede requerir dispositivos de terceros compatibles y la configuración correcta tanto en el rastreador como en Plaspy
- Las certificaciones y aprobaciones regulatorias pueden variar según la región y el lote de dispositivos; siempre verifique las declaraciones del fabricante para su unidad

## Por qué usar Plaspy con estas funciones

Combinar el Teltonika FMB230 con Plaspy ofrece una forma práctica de centralizar ubicación, telemetría de sensores y visibilidad de eventos para vehículos y activos. Plaspy le ayuda a convertir datos posicionales, reportes de sensores BLE y eventos del equipo en información utilizable para los equipos operativos, facilitando el monitoreo consolidado, las alertas y los reportes en una flota mixta.

Para obtener más información sobre Plaspy y cómo se integran los rastreadores compatibles visite https://www.plaspy.com. Para los detalles técnicos más actuales y específicos del dispositivo, notas de firmware e información regulatoria, por favor verifique la documentación del fabricante en https://www.teltonika-gps.com/
