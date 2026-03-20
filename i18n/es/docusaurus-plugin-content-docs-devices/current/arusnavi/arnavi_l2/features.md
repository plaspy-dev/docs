---
slug: /arusnavi/arnavi_l2/features
id: arnavi_l2-features
sidebar_label: Features
title: Arusnavi - Arnavi L2 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Arusnavi Arnavi L2 y su compatibilidad con Plaspy para gestión de flotas y activos
keywords:
  - Arusnavi Arnavi L2
  - Características Arnavi L2
  - Rastreador GPS Arnavi L2
  - Rastreador Arusnavi Plaspy
  - Sensores BLE Arnavi L2
  - Carcasa hermética Arnavi L2
  - Conducción eficiente Arnavi L2
  - Registrador de datos Arnavi L2
  - Seguimiento de flotas Arnavi L2
  - Telemetría Arnavi L2
---

# Arusnavi - Arnavi L2: Funciones

Esta página describe el contexto público de funcionalidades para usar el rastreador Arusnavi Arnavi L2 con Plaspy. Resume las capacidades prácticas del modelo, sus características de diseño ambiental y las formas en que dichas capacidades pueden visualizarse y gestionarse dentro de la plataforma Plaspy sin exponer detalles internos del dispositivo.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la variante de hardware, el método de instalación y la implementación del fabricante. Para configuración específica del equipo, variantes regionales y los detalles técnicos más recientes consulte la documentación oficial de Arnavi y las notas de versión.

## Resumen de funciones

El Arnavi L2 es un rastreador GPS compacto y hermético diseñado para ofrecer seguimiento y telemetría confiables en entornos húmedos o de alta humedad. Combina posicionamiento GNSS multiconstelación, un módem celular 2G de bajo consumo y Bluetooth Low Energy para proporcionar ubicación, telemetría de sensores y datos de comportamiento de conducción adecuados para gestión de flotas y activos.

- Carcasa sellada y antenas internas que facilitan el montaje en espacios húmedos o reducidos
- Soporte GNSS multiconstelación para obtener fijaciones de posición confiables en condiciones de recepción difíciles
- Bluetooth Low Energy para emparejar hasta cinco sensores externos para telemetría de combustible y temperatura, además de modos de seguridad con etiquetas BLE
- Acelerómetro integrado y análisis de conducción eficiente para detección de movimiento e información sobre el comportamiento del conductor
- Registrador de datos interno para grabación tipo caja negra y posterior subida a Plaspy
- Amplio rango de entrada de alimentación y bajo consumo en reposo para instalaciones flexibles en vehículos y activos

## Características principales del Arusnavi - Arnavi L2

- Carcasa hermética con antenas internas para proteger la electrónica de la humedad y reducir la complejidad de instalación
- Posicionamiento GNSS multiconstelación que incluye sistemas satelitales principales para mejorar la fiabilidad de las fijaciones
- Soporte Bluetooth 4.0 LE que permite emparejar múltiples sensores BLE y etiquetas de seguridad basadas en BLE
- Perfil de bajo consumo y amplio rango de voltaje operativo apto para diversos sistemas eléctricos de vehículos
- Acelerómetro integrado para detección de movimiento y eventos relacionados con conducción eficiente
- Registrador de datos interno con capacidad para almacenar múltiples eventos cuando no hay conectividad
- Entrada discreta positiva para detección de encendido y una entrada/salida universal con salida protegida para control auxiliar
- Interfaz de configuración por USB y soporte de gestión remota para configuración centralizada y actualizaciones de firmware

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el Arnavi L2 envía ubicación, telemetría y datos de eventos a la plataforma para monitoreo en tiempo real, reproducción histórica y alertas. Plaspy detecta automáticamente el protocolo del rastreador y acepta los reportes del dispositivo, por lo que los equipos pueden incorporarse con una configuración mínima de protocolo.

- Las actualizaciones de ubicación en tiempo real y la reproducción de rutas aparecen en Plaspy para seguimiento y supervisión operativa
- Las lecturas de sensores BLE y los eventos de etiquetas BLE reportados por el L2 se integran en Plaspy para visibilidad de combustible, temperatura y seguridad
- Los eventos de encendido y de movimiento provenientes de la entrada discreta y del acelerómetro se traducen en registros de inicio y fin de viaje y en eventos de comportamiento de conducción dentro de Plaspy
- Las subidas desde el registrador interno y los reportes de respaldo aseguran que Plaspy reciba los registros almacenados tras la reconexión para conservar el historial completo
- La configuración remota y las actualizaciones de firmware pueden coordinarse desde flujos de trabajo compatibles con Plaspy para mantener coherencia en la flota
- Plaspy admite configuraciones comunes de reporte de rastreadores y puede recibir datos cuando el dispositivo está configurado para reportar al servidor de Plaspy

## Casos de uso habituales

- Gestión de flotas y monitoreo de rutas con análisis de conducción eficiente para apoyar programas de seguridad y ahorro
- Detección antirrobo y monitoreo de seguridad usando etiquetas BLE, detección de encendido y alertas de movimiento para respuesta rápida
- Telemetría remota de nivel de combustible y temperatura mediante emparejo de sensores BLE al rastreador para control de inventarios y cadena de frío
- Seguimiento de activos en entornos húmedos o de alta humedad donde se requiere protección hermética
- Instalaciones en vehículos o equipos compactos donde las antenas internas y la pequeña huella facilitan el montaje
- Activos remotos que se benefician del registro a bordo durante cortes de conectividad

## Notas sobre disponibilidad de funciones

- La presencia de características y su comportamiento exacto dependen de la versión de firmware y la revisión de hardware; consulte las notas de Arnavi para ver cambios
- El soporte de bandas celulares regionales y el comportamiento del módem varían por mercado; verifique las bandas soportadas y las variantes regionales en el sitio del fabricante
- La compatibilidad con sensores BLE depende de los perfiles BLE específicos usados por sensores de terceros; pruebe los sensores emparejados en su entorno
- Las decisiones de instalación como el cableado, la fuente de alimentación y la ubicación de montaje pueden afectar telemetrías como la detección de encendido y los eventos del acelerómetro
- Las capacidades de gestión remota requieren la provisión correcta y acceso de red para habilitar actualizaciones de firmware y configuración centralizada

## Por qué usar Plaspy con estas funciones

Usar el Arnavi L2 con Plaspy ofrece a las organizaciones un rastreo compacto y resistente al entorno junto con visibilidad a nivel de plataforma. Plaspy consolida ubicación, telemetría de sensores BLE, marcadores de eventos y subidas de caja negra en una sola vista operativa, mejorando la conciencia situacional y simplificando los flujos de trabajo de la flota.

Si desea saber más sobre cómo Plaspy puede utilizar el Arnavi L2 para monitoreo de flotas y activos visite https://www.plaspy.com. Para las especificaciones del equipo, notas de firmware y detalles del fabricante más recientes verifique la documentación del Arnavi L2 en https://www.arusnavi.ru ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
