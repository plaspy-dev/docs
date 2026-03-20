---
slug: /carscop/cc_338/features
id: cc_338-features
sidebar_label: Features
title: Carscop - CC-338 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del GPS Carscop CC-338 y su integración con Plaspy para flotas y carsharing
keywords:
  - Carscop CC-338
  - características Carscop CC-338
  - localizador GPS Carscop CC-338
  - CC-338 Plaspy
  - telemática vehicular Carscop
  - rastreador OBD II CANBUS
  - rastreador GPS 4G
  - rastreador para carsharing
  - rastreador para gestión de flotas
  - inmovilizador remoto
---

# Carscop - CC-338 — Características

Esta página ofrece una visión pública y orientada a funciones del Carscop CC-338 y cómo sus capacidades se integran con Plaspy para seguimiento de vehículos, gestión de flotas y carsharing. Resume las funciones prácticas que puede esperar cuando el CC-338 trabaja con Plaspy y destaca cómo se exponen canales de telemetría y comandos para flujos operativos.

La disponibilidad exacta de funciones en una unidad instalada puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante para un vehículo concreto. Esta página se basa en la descripción del fabricante del CC-338 como contexto público; para detalles técnicos específicos del dispositivo consulte siempre la documentación oficial de Carscop.

## Resumen de funciones

El CC-338 es una T-Box 4G compacta diseñada para aportar telemática, control remoto y telemetría vehicular a automóviles convencionales. Combina conectividad celular multinetwork con posicionamiento GPS, acceso OBD II CANBUS, control local por Bluetooth y una serie de salidas cableadas para acciones remotas, por lo que resulta adecuada para alquileres sin atención, carsharing y operaciones de flota.

- Seguimiento GPS en tiempo real con A-GPS y fallback por estaciones celulares para mejorar la disponibilidad en entornos complejos.
- Telemetría profunda del vehículo vía OBD II CANBUS cuando el vehículo expone datos relevantes para diagnóstico y métricas operativas.
- Múltiples canales de control, incluyendo API por internet, Bluetooth LE para control local y salidas cableadas para cierres, luces, sirena y corte de motor.
- Registro de datos a bordo y retención de la última posición conocida para reenviar eventos a Plaspy una vez que se restaure la conectividad.
- Amplio rango de tensión de entrada y soporte de batería auxiliar para flotas de 12V y 24V.

## Funciones principales del Carscop - CC-338

- Soporte celular multinetwork para 4G, 3G y 2G que maximiza la cobertura para telemetría y comandos remotos.
- Interfaz OBD II CANBUS que permite diagnóstico del vehículo y reenvío de telemática cuando el CAN del vehículo expone esa información.
- Posicionamiento A-GPS con fallback por LBS (estaciones celulares) y comportamiento de subida GPS configurable.
- Bluetooth Low Energy para control local y flujos de trabajo por proximidad cuando el dispositivo está offline.
- Salidas de control cableadas para cierre centralizado, sirena, luces, bocina y función inmovilizadora por corte de motor.
- Entradas para ACC de ignición y alarma de puertas, además de sensores de choque y G-sensor para detección de eventos.
- Registro local con batería Li recargable de respaldo para conservar datos y alertar en caso de pérdida de alimentación.
- Capacidad de actualización de firmware por aire y conectividad TCP/IP abierta para integradores.

## Cómo funcionan estas funciones con Plaspy

Al conectarse a Plaspy, el CC-338 envía la ubicación y la telemetría del vehículo a un entorno unificado de gestión de flotas para que los operadores puedan monitorear vehículos, responder a alarmas y emitir comandos remotos. Plaspy puede recibir los datos del dispositivo y presentar eventos, registros históricos y acciones de control para flujos de trabajo operativos.

- Las actualizaciones de ubicación en tiempo real y las rutas históricas aparecen en Plaspy para monitoreo en vivo y generación de informes.
- El estado de ignición ACC, eventos de puertas abiertas, alarmas de sensores y entradas similares se reenvían a Plaspy como eventos para uso y reportes de seguridad.
- La telemetría del CAN del vehículo, como parámetros del motor y diagnósticos, se incorpora a los paneles de Plaspy cuando el vehículo expone esos datos.
- Los comandos de inmovilización remota y las salidas cableadas pueden ejecutarse mediante la integración con Plaspy para soportar flujos anticlonación y control en alquileres.
- El control local basado en Bluetooth LE y los eventos de sensores BLE pueden apoyar flujos por proximidad, con acciones coordinadas desde Plaspy cuando se combinan con lógica del servidor.
- Los dispositivos pueden configurarse para conectar con servidores Plaspy como d.plaspy.com usando TCP o UDP en el puerto estándar; Plaspy detecta automáticamente el protocolo del tracker para la integración.

## Casos de uso típicos

- Alquiler de autos sin atención y carsharing de autos con cierre remoto, autenticación de usuarios vía app o BLE y facturación por uso ligada a datos de ignición.
- Seguimiento de flotas y supervisión operativa donde la ubicación en tiempo real y la telemetría apoyan despacho y planificación de mantenimiento.
- Monitorización antirrobo e inmovilización remota con notificaciones de alarma por apertura de puertas, golpes y pérdida de alimentación.
- Informes de diagnóstico y consumo derivados del CAN del vehículo cuando esos parámetros están disponibles.
- Acceso local offline y desbloqueo de corto alcance mediante Bluetooth LE para flujos seguros por proximidad.
- Disparadores de mantenimiento programado basados en kilometraje o datos de diagnóstico recogidos vía OBD II CANBUS.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según el nivel de firmware y la versión del fabricante; no todas las unidades expondrán todas las capacidades de fábrica.
- Algunas funciones de telemetría y control dependen de lo que el vehículo expone por su OBD II CANBUS y pueden variar según marca, modelo y año.
- Las opciones de instalación y el cableado (para salidas cableadas y entradas de alarma) afectan qué canales de control estarán disponibles tras el montaje.
- Las variantes regionales celulares pueden cambiar las bandas soportadas y el comportamiento de la red; verifique la compatibilidad de red para su área de despliegue.
- Las opciones de integración con Plaspy incluyen conectividad TCP o UDP; consulte la documentación de Plaspy y Carscop para la configuración recomendada en despliegues en servidores privados.

## Por qué usar Plaspy con estas funciones

Combinar el CC-338 con Plaspy ofrece a los operadores una vista única para conciencia de ubicación, monitoreo de eventos y control remoto. Plaspy ingiere la telemetría del tracker y la presenta junto con el estado del vehículo y los registros históricos para que los equipos puedan gestionar flujos de carsharing, responder a alarmas y mantener la salud de la flota desde una sola plataforma. La API abierta y la conectividad TCP/IP del CC-338 reducen la fricción de integración para flujos personalizados y despliegues en servidores privados.

Learn more about Plaspy and how it can be used with compatible trackers at https://www.plaspy.com. Device features, firmware behavior, and manufacturer implementation can change over time, so verify the latest device specific information and technical documentation on the Carscop website at http://www.carscop.com/.
