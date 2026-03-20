---
slug: /arusnavi/integral_4/features
id: integral_4-features
sidebar_label: Features
title: Arusnavi - Integral 4 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador Arusnavi Integral 4 y su integración con Plaspy para gestión de flotas y telemetría
keywords:
  - Características Arusnavi Integral 4
  - Rastreador GPS Arusnavi Integral 4
  - Compatibilidad Integral 4 Plaspy
  - Funciones GPS Integral 4
  - Características rastreador GPS Arusnavi
  - Capacidades telemetría Integral 4
  - Seguimiento de flotas Integral 4
  - Sensores BLE Integral 4
  - Soporte RS485 CAN Integral 4
  - Monitoreo de vehículos Arusnavi
---

# Arusnavi - Características de Integral 4

Esta página ofrece una descripción pública y no sensible de las capacidades del Arusnavi Integral 4 y de cómo se aprovechan con Plaspy para monitoreo centralizado, generación de informes y operaciones de flota. Se enfoca en la funcionalidad práctica relevante para usuarios de Plaspy y en la forma en que la telemetría, la localización y los eventos del equipo pueden visualizarse en la plataforma.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la variante de hardware, el método de instalación, el modelo regional y la configuración del fabricante. Para límites técnicos específicos del dispositivo y detalles más recientes, consulte la documentación oficial de Arusnavi.

## Resumen de características

El Integral 4 es un rastreador GNSS compacto pensado para instalaciones con espacio limitado que requieren localización en tiempo real fiable y opciones de telemetría flexibles. Combina posicionamiento multi-constelación, conectividad celular, soporte para sensores BLE y diversas interfaces cableadas para alimentar datos de vehículos y activos a Plaspy, tanto para seguimiento en vivo como para análisis histórico.

- Soporte multi GNSS para fijaciones de posición consistentes mediante GPS, GLONASS, Galileo, BeiDou y QZSS, mejorando la cobertura en distintas condiciones
- Conectividad doble SIM 2G GSM con antenas internas para una instalación simplificada y reportes continuos
- BLE interno con capacidad para emparejar múltiples sensores y ampliar la telemetría con datos de temperatura, proximidad y auxiliares
- Interfaces cableadas que incluyen USB, 1-WIRE, RS-485, CAN y opciones UART/RS-232 para recopilar telemetría de vehículo y sensores
- Registro interno tipo caja negra que almacena un gran volumen de eventos para preservar el historial cuando se interrumpe la conectividad celular
- Factor de forma compacto y amplio rango de voltaje de operación adecuados para instalaciones en vehículos y equipos

## Características principales del Arusnavi - Integral 4

- Posicionamiento GNSS multi constelación compatible con GPS, GLONASS, Galileo, BeiDou y QZSS para datos de ubicación fiables
- Módem dual SIM 2G GSM con antenas internas que ayuda a mantener la conectividad en entornos móviles
- Bluetooth Low Energy interno con soporte para emparejar múltiples dispositivos BLE y ampliar la telemetría auxiliar
- Múltiples interfaces cableadas, incluyendo USB, 1-WIRE, RS-485, CAN y UART/RS-232 opcional según la variante
- Almacenamiento onboard tipo black box que conserva registros localmente y los envía cuando se restablece la conectividad
- Entradas y salidas discretas configurables, además de una entrada analógica ADC para detección de eventos e integración de control
- Gestión de alimentación de nivel empresarial con amplio rango de voltaje de operación y opciones de batería interna de respaldo
- Carcasa compacta y de bajo perfil diseñada para instalaciones donde el espacio es limitado

## Cómo funcionan estas funciones con Plaspy

El Integral 4 transmite posiciones GNSS, telemetría y eventos discretos a Plaspy, donde se muestran en paneles, alertas e informes históricos. Plaspy detecta automáticamente protocolos y dispositivos compatibles, y el Integral 4 puede configurarse para reportar a los servidores de monitoreo de Plaspy mediante opciones comunes TCP o UDP.

- Las actualizaciones de ubicación en tiempo real procedentes de múltiples constelaciones GNSS aparecen en los mapas de Plaspy y en la reproducción de rutas
- La telemetría procedente de sensores conectados por CAN o RS-485 se reenvía a Plaspy para diagnóstico y análisis
- Las lecturas de sensores BLE emparejados con el equipo se ingieren como telemetría auxiliar y se muestran junto con los datos del vehículo
- Los registros almacenados localmente en la caja negra del dispositivo se cargan en Plaspy cuando se restablece el enlace celular para mantener la continuidad histórica
- Los eventos de entradas y salidas discretas están disponibles en Plaspy como disparadores para alertas, reglas y flujos de trabajo operativos
- Plaspy permite configurar el dominio del servidor de monitoreo y el protocolo, y reconoce automáticamente los protocolos de dispositivo admitidos

## Casos de uso típicos

- Gestión de flotas y historial de rutas para camiones, vans y vehículos ligeros donde se requiere una instalación compacta
- Monitoreo de combustible y telemetría mediante sensores RS-485 o CAN para seguir consumo y tendencias de sensores
- Control de transporte de pasajeros integrando balizas BLE, RFID o contadores de pasajeros para visibilidad de ocupación y operaciones
- Seguridad y anti robo mediante detección de ignición y eventos de puertas combinados con alertas remotas
- Telemetría de activos y equipos para semirremolques, contenedores o maquinaria móvil que requieren flexibilidad de alimentación y registro
- Diagnóstico remoto y rutinas de mantenimiento programadas utilizando datos del bus del vehículo y telemetría de sensores

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la variante de hardware y la configuración de fábrica; algunas interfaces como CAN o UART pueden ser opcionales en modelos específicos
- La versión de firmware afecta las funciones soportadas y los conjuntos de comandos; las actualizaciones del fabricante pueden añadir o modificar comportamientos
- Los modelos regionales pueden diferir en soporte de bandas celulares y aprobaciones regulatorias para conectividad 2G
- El número y tipo de dispositivos BLE compatibles puede depender del firmware y de las listas de dispositivos certificados que suministre Arusnavi
- Las opciones de instalación y el cableado pueden alterar qué puertos E/S y sensores están disponibles para el rastreador

## Por qué usar Plaspy con estas funciones

Integrar el Integral 4 con Plaspy ofrece a las organizaciones una vía práctica para unificar datos de ubicación y sensores en una sola plataforma de monitoreo. La combinación de posicionamiento multi GNSS, interfaces I/O flexibles y soporte para sensores BLE brinda a los operadores la visibilidad necesaria para la gestión de rutas, supervisión de activos y alertas basadas en eventos, mientras que el registro a bordo reduce las brechas en los historiales cuando la conectividad es intermitente.

Si desea saber más sobre cómo Plaspy puede trabajar con dispositivos como el Arusnavi Integral 4 visite https://www.plaspy.com. Para las listas de funciones específicas más actuales, notas de firmware y detalles de implementación del dispositivo consulte la documentación del fabricante en https://www.arusnavi.ru.
