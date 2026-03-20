---
slug: /teltonika/fmp100/features
id: fmp100-features
sidebar_label: Features
title: Teltonika - FMP100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Teltonika FMP100 y su integración con Plaspy para rastreo vehicular inmediato y telemetría BLE
keywords:
  - Teltonika FMP100
  - características FMP100
  - rastreador GPS FMP100
  - características Teltonika FMP100
  - FMP100 Plaspy
  - rastreador GPS Teltonika
  - sensores BLE FMP100
  - rastreador plug and play
  - rastreo vehicular FMP100
  - seguimiento de flotas Plaspy
---

# Teltonika - Funciones del FMP100

Esta página ofrece un resumen público orientado a funciones del rastreador GPS Teltonika FMP100 y cómo sus capacidades se integran con los flujos de trabajo de Plaspy. Se centra en las funcionalidades prácticas, los sensores compatibles y los puntos de interacción que usted puede esperar al usar el FMP100 con Plaspy para ubicación, eventos y telemetría.

La disponibilidad y el comportamiento exacto de características específicas pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la forma en que la unidad esté instalada o emparejada con accesorios. Para configuración del dispositivo, actualizaciones de firmware y detalles técnicos actualizados consulte la documentación y recursos de producto de Teltonika.

## Visión general de funciones

El FMP100 es un rastreador compacto plug and play diseñado para alimentarse desde el enchufe de cigarrillo del vehículo y permitir una implantación rápida con telemetría opcional vía BLE. Está pensado para instalaciones temporales, car sharing, alquileres y flotas piloto donde la facilidad de instalación y el aprovisionamiento rápido son prioritarios.

- Alimentación plug and play mediante el encendedor del vehículo para una instalación rápida y no permanente.
- Posicionamiento GPS nativo para reportes continuos de ubicación a Plaspy.
- Soporte Bluetooth Low Energy para emparejar con EYE Beacons y EYE Sensors compatibles y capturar telemetría de temperatura, humedad, detección magnética y movimiento.
- Botón de usuario integrado además de LED RGB y buzzer para interacción con el conductor y señalización local de eventos.
- Salida de carga integrada de 1A para alimentar o cargar dispositivos pequeños mientras se realiza el rastreo.
- Flujo de trabajo para configuración remota y actualización de firmware a través de Teltonika FOTA y herramientas web.

## Características principales del Teltonika - FMP100

- Factor de forma compacto plug and play alimentado por el encendedor para despliegues rápidos.
- Posicionamiento GPS para ofrecer actualizaciones de ubicación en tiempo real a Plaspy.
- Bluetooth Low Energy para telemetría de sensores externos cuando se empareja con accesorios EYE compatibles.
- Botón de usuario integrado para disparar eventos como pánico o modos de viaje.
- LED RGB y buzzer para retroalimentación visual y sonora local y para indicar estados.
- Salida de carga integrada de 1A para cargar teléfonos inteligentes o accesorios pequeños.
- Soporte de gestión remota incluyendo FOTA y flujos de configuración web mediante herramientas de Teltonika.
- Conectividad GSM 2G con soporte de bandas comunes para telemetría celular en regiones compatibles.

## Cómo funcionan estas funciones con Plaspy

Plaspy consume los datos de ubicación y sensor del FMP100 para mostrar el estado en vivo del vehículo, eventos y telemetría de sensores en paneles y herramientas de reporte. Tras la instalación física y el emparejamiento BLE requerido, el dispositivo envía la ubicación y las entradas de sensores emparejados a Plaspy para mapeo, alertas y análisis histórico.

- Las posiciones GPS en vivo aparecen en los mapas de Plaspy para seguimiento de rutas y conciencia de ubicación.
- Las pulsaciones del botón y los eventos señalados localmente se registran en Plaspy como alertas para revisión por parte del operador.
- Las lecturas de sensores BLE como temperatura, humedad, cambios magnéticos y movimiento se entregan a Plaspy cuando están emparejadas con accesorios compatibles.
- El estado del dispositivo indicado por LED RGB y buzzer se registra en los logs de eventos y puede mostrarse en los flujos de actividad de Plaspy.
- Las tareas de configuración remota y actualización de firmware se gestionan con las herramientas de Teltonika y se coordinan con los procesos de gestión de dispositivos en Plaspy.

## Casos de uso típicos

- Despliegue rápido de flotas donde los vehículos requieren aprovisionamiento inmediato sin cableado en taller.
- Servicios de car sharing y alquiler que necesitan rastreo temporal, monitoreo de uso y alertas de pánico.
- Programas piloto y flotas estacionales que se benefician de la capacidad de conexión y desconexión rápida.
- Monitoreo de carga o productos sensibles a la temperatura usando sensores BLE de temperatura y humedad emparejados con el rastreador.
- Seguridad de activos y detección de manipulación mediante eventos de botón y telemetría de magnetismo o movimiento.
- Escenarios de conveniencia para el conductor donde la salida de carga integrada puede alimentar un teléfono mientras el vehículo es rastreado.

## Notas sobre disponibilidad de funciones

- Las revisiones de firmware y hardware pueden alterar el comportamiento exacto y las opciones de configuración disponibles; verifique siempre las notas de la versión del firmware del dispositivo.
- La compatibilidad con sensores BLE depende del emparejamiento con EYE Beacons y EYE Sensors soportados y de los perfiles que el fabricante implemente.
- La disponibilidad de bandas celulares y el soporte 2G varían por región y operador; confirme la compatibilidad de la red local antes del despliegue.
- Algunas variantes de empaque y códigos de producto incluyen accesorios distintos como cables micro USB o herramientas para la bandeja SIM.
- Las funciones de gestión remota requieren el flujo de trabajo FOTA y la configuración web soportada por el proveedor y pueden necesitar versiones de firmware específicas.

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMP100 con Plaspy ofrece a las organizaciones una forma rápida de añadir conciencia de ubicación y telemetría ambiental básica a sus flotas sin una instalación permanente. El diseño plug and play del equipo reduce el tiempo de despliegue, mientras que el soporte para sensores BLE y la señalización local amplían la visibilidad operativa más allá del simple rastreo de posición.

Learn more about Plaspy and how the platform can incorporate FMP100 tracking and sensor telemetry at https://www.plaspy.com. For the most current device specifications, firmware behaviour, and manufacturer implementation details verify the official Teltonika documentation at https://www.teltonika-gps.com/.
