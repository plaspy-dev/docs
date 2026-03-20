---
slug: /totemtech/at05/features
id: at05-features
sidebar_label: Features
title: Totemtech - AT05 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador GPS Totemtech AT05 y su integración con Plaspy
keywords:
  - Totemtech AT05
  - Totemtech AT05 características
  - rastreador GPS Totemtech AT05
  - características AT05
  - funciones GPS AT05
  - rastreador Totemtech Plaspy
  - actualización OTA AT05
  - acelerómetro AT05
  - seguimiento vehicular AT05
  - alarmas AT05
---

# Totemtech - Características del AT05

Esta página describe el contexto público de funcionalidades para el uso del rastreador GPS Totemtech AT05 con Plaspy. Resume las capacidades del dispositivo que importan para la visibilidad de ubicación, la monitorización de eventos y la gestión remota cuando el AT05 se integra con la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Use esta página como guía general y consulte la documentación del dispositivo y a su instalador para detalles sobre una unidad o despliegue específicos.

## Resumen de funciones

El AT05 es un rastreador versátil pensado para reportes de localización fiables, alertas de eventos y configuración remota. En operación práctica admite el envío simultáneo a dos servidores, detección de movimiento mediante un acelerómetro integrado, comandos remotos y actualizaciones de firmware por aire (OTA), lo que lo hace adecuado para múltiples flujos de trabajo de rastreo.

- Transmisión de datos simultánea a dos servidores para operar monitorización primaria y de respaldo en paralelo.
- Detección de movimiento y estado mediante un acelerómetro digital de 3 ejes para mejorar la identificación de movimientos.
- Soporte de comandos remotos por GPRS y SMS para configuración y control cuando sea necesario.
- Capacidad de actualización OTA para desplegar firmware sin acceso físico al equipo.
- Rastreo en tiempo real y funciones de historial para monitoreo en vivo y análisis retrospectivo.

## Funciones principales del Totemtech - AT05

- Reporte a dos servidores que permite enviar datos a dos destinos de forma simultánea.
- Acelerómetro digital de 3 ejes para detección de movimiento y alarmas por vibración.
- Soporte para actualizaciones de firmware por aire para gestión remota del firmware.
- Amplio rango de entrada de corriente continua con protección contra sobretensión para adaptarse a distintos sistemas eléctricos de vehículos.
- Interfaz de comandos remotos vía GPRS y SMS para gestión y consultas del dispositivo.
- Reportes de ubicación en tiempo real y recuperación de trazas históricas para revisar desplazamientos pasados.
- Compatibilidad con múltiples tipos de alarmas, incluidas exceso de velocidad, batería baja, estacionamiento, SOS, corte de alimentación exterior y baja tensión interna.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y procesa los datos del rastreador para que usted pueda ver ubicaciones, eventos e historial en un único sistema. El AT05 puede apuntar al endpoint de recolección de Plaspy, y Plaspy reconocerá el tráfico estándar del dispositivo y mostrará la actividad en la plataforma.

- Plaspy puede aceptar los reportes del AT05 junto con un servidor de respaldo para preservar la continuidad de la monitorización.
- Los eventos de movimiento y vibración generados por el acelerómetro se muestran en Plaspy como eventos de movimiento o alarmas.
- Las posiciones en tiempo real y las trazas de historial enviadas por el tracker se traducen en marcadores en el mapa y trazas en la línea de tiempo de la interfaz de Plaspy.
- Los comandos remotos iniciados desde herramientas autorizadas o flujos de trabajo pueden enviarse al dispositivo mediante los canales de comando soportados y quedar reflejados en los registros de eventos de Plaspy.
- El estado de las actualizaciones OTA y ciertas alarmas reportadas por el AT05 pueden registrarse para supervisión operativa dentro de Plaspy.

## Casos de uso típicos

- Rastreo de flotas de vehículos con actualizaciones de posición en vivo y historial de trayectos.
- Detección de movimiento de activos y alertas por manipulación o vibración usando el acelerómetro.
- Gestión remota de dispositivos, incluyendo cambios de configuración y actualizaciones OTA de firmware.
- Reportes redundantes a servidores para garantizar disponibilidad de datos para operaciones y sistemas de respaldo.
- Monitorización y alertas relacionadas con la alimentación, como pérdida de alimentación exterior o baja tensión interna.
- Supervisión de SOS y alertas de emergencia para gestionar flujos de respuesta priorizados.

## Notas sobre disponibilidad de funciones

- La versión de firmware puede cambiar qué funciones están disponibles o cómo se comportan ciertas alarmas; verifique la versión de firmware del equipo.
- Revisiones de hardware o variantes regionales del AT05 pueden modificar las opciones de E/S o los tipos de alarmas soportadas.
- El cableado e instalación de alimentación pueden influir en las alarmas relacionadas con la energía y en la fiabilidad del dispositivo.
- Algunos comandos remotos o comportamientos de alarma pueden depender de la disponibilidad de red y del soporte SMS en la región.
- La configuración del fabricante determina exactamente qué puertos de E/S están activos y cómo funcionan las entradas definidas por el usuario.

## Por qué usar Plaspy con estas funciones

Usar el Totemtech AT05 con Plaspy ofrece a las organizaciones una forma coherente de consolidar telemetría de dispositivos, alarmas y trazas de historial en un único entorno de monitorización e informes. Plaspy ayuda a traducir la detección de movimiento del AT05, el reporte a dos servidores, el soporte de comandos remotos y las actualizaciones OTA en visibilidad operativa que puede apoyar la gestión de flotas, la supervisión de activos y la respuesta a incidentes.

Learn more about Plaspy and how the platform can present AT05 data and alerts on the main Plaspy website https://www.plaspy.com. For the most current device specific feature details, firmware behavior, and manufacturer instructions please verify information with the official Totemtek documentation at http://www.totemtek.com/.
