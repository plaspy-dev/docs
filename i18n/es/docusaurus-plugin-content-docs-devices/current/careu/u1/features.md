---
slug: /careu/u1/features
id: u1-features
sidebar_label: Features
title: CAREU - U1 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS CAREU U1 y su integración con Plaspy para monitoreo de flotas y sensores
keywords:
  - funciones CAREU U1
  - funciones rastreador GPS CAREU U1
  - funciones del CAREU U1
  - capacidades CAREU U1
  - CAREU U1 Plaspy
  - rastreo de flotas CAREU U1
  - telemática vehicular CAREU U1
  - datos vehiculares OBDII CAN
  - monitoreo de temperatura 1-Wire
  - rastreador GPS LTE
---

# CAREU - U1 — Características

Esta página ofrece una vista pública de las funciones del rastreador CAREU U1 y de cómo se aprovechan estas capacidades con Plaspy. Su objetivo es describir el U1 en términos prácticos para el usuario y explicar cómo aparecen las funciones habituales del dispositivo cuando se integran en la plataforma de gestión de flotas Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware de fábrica, la revisión de hardware, los módulos opcionales, las elecciones de instalación y la implementación del fabricante. Para usos críticos confirme las especificaciones del equipo y el comportamiento de la versión de firmware consultando la documentación del fabricante enlazada al final de esta página.

## Resumen de funciones

El CAREU U1 PLUS LTE es un rastreador para vehículos y activos con modos múltiples, diseñado para integraciones telemáticas flexibles. Combina posicionamiento GNSS con conectividad celular y diversas interfaces de accesorios para soportar diagnóstico vehicular, monitoreo de temperatura e integración de sensores de terceros.

- Conectividad celular de múltiples generaciones con LTE y retroceso a 3G y 2G para amplia cobertura y roaming
- Posicionamiento GNSS compatible con varios sistemas satelitales para obtener ubicaciones confiables
- Acceso a datos vehiculares mediante intérprete OBDII y CAN integrado para información del motor y del bus vehículo
- Interfaces de accesorios, incluyendo RS232 y RS485, para conectar cámaras, lectores RFID y otros dispositivos de terceros
- Interfaz 1-Wire para monitoreo de temperatura y opciones de identificación de conductor útiles en transporte refrigerado
- Módulos opcionales Bluetooth y WiFi para configuración local, transmisión de video y escenarios de punto de acceso

## Funciones principales del CAREU - U1

- Conectividad LTE con compatibilidad descendente a redes 3G y 2G
- Posicionamiento GNSS con soporte de GPS asistido para tiempos de fijación más rápidos
- Intérprete incorporado OBDII y CAN para leer datos de la computadora a bordo y flujos de diagnóstico
- Puertos de accesorios RS232 y RS485 para integrar sensores de fatiga, cámaras de tablero, lectores RFID y dispositivos similares
- Interfaz 1-Wire para sensores de temperatura e identificación de conductor mediante i-Button
- Detección y configuración de alarmas y eventos, incluyendo manipulación de antena, alarma por baja o pérdida de alimentación y varios eventos por conducción brusca usando el acelerómetro del dispositivo
- Opciones inalámbricas locales como Bluetooth opcional para configuración y WiFi opcional para transmisión de video y capacidad de hotspot
- Actualización de firmware por aire vía FTP y soporte para almacenamiento local de grandes registros de posición para registro sin conexión

## Integración con Plaspy

Plaspy muestra la posición reportada por el U1, sus eventos y los datos de accesorios para que flotas y operadores puedan usar esas señales en paneles y reportes. Plaspy detecta automáticamente protocolos comunes de rastreadores e ingiere mensajes de posición y eventos, por lo que el U1 requiere una configuración mínima de protocolo para comenzar a reportar en la plataforma.

- Ubicaciones, historial de viajes y registros de posiciones almacenadas por el U1 son visibles en las vistas de monitoreo y mapas de Plaspy
- Métricas derivadas del bus vehicular y OBDII/CAN se exponen como atributos telemáticos para informes y reportes definidos por el usuario
- Eventos de entradas y accesorios reportados vía RS232/RS485 o 1-Wire aparecen como sensores o eventos de entradas digitales para alertas y paneles
- Alarmas como manipulación de antena, pérdida de alimentación o detección de eventos bruscos pueden activar notificaciones y reportes automatizados en Plaspy
- Las funciones opcionales de WiFi o Bluetooth se reconocen como propiedades del dispositivo y pueden indicarse en los paneles de configuración dentro de Plaspy
- Plaspy permite agrupar, filtrar y crear reportes personalizados sobre la telemetría del U1 para apoyar flujos operativos

## Casos de uso típicos

- Rastreo de vehículos de flota y monitoreo de rutas con datos del bus vehicular para soporte de mantenimiento y diagnósticos
- Monitoreo de transporte refrigerado con sensores de temperatura 1-Wire y reporte de eventos para garantizar la integridad de la carga
- Vehículos con video donde cámaras conectadas por RS232 transmiten eventos y marcas de tiempo vinculadas a la ubicación
- Identificación de conductor y control de acceso mediante i-Button o accesorios de identificación compatibles
- Monitoreo de conducción brusca y seguridad utilizando eventos del acelerómetro para programas de capacitación a conductores
- Integración de sensores de terceros como sensores de fatiga o lectores RFID para flujos de trabajo especializados de la flota

## Notas sobre disponibilidad de funciones

- Algunas funciones, como WiFi, Bluetooth o soporte satelital avanzado, pueden ser opcionales y depender del variante U1 específico adquirido
- La versión de firmware y la configuración del equipo afectan qué alarmas, capacidades de registro y protocolos de accesorios están disponibles
- Revisiones de hardware y variantes regionales de bandas celulares pueden modificar el comportamiento de conectividad o los modos de red soportados
- El comportamiento de integración con accesorios de terceros depende del cableado, firmware del accesorio y la configuración de RS232/RS485
- Para especificaciones técnicas completas y actualizadas consulte la documentación del fabricante

## Por qué usar Plaspy con estas funciones

Usar el CAREU U1 con Plaspy ofrece a las organizaciones una plataforma consolidada para reunir datos de ubicación, bus vehicular y sensores de accesorios para supervisión operativa. El sistema de detección y reporte de dispositivos de Plaspy facilita llevar la telemetría del U1 a mapas, alertas y reportes definidos por el usuario, de modo que los equipos puedan actuar rápidamente sobre la información de ubicación y eventos.

Si desea saber más sobre cómo Plaspy soporta rastreadores compatibles y flujos de trabajo de flotas, visite https://www.plaspy.com. Para las especificaciones más recientes, notas de firmware y detalles de implementación del fabricante verifique la información actual en el sitio del fabricante https://www.systech-iot.com/
