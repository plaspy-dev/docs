---
slug: /carscop/cc_688/features
id: cc_688-features
sidebar_label: Features
title: Carscop - CC-688 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Carscop CC-688 y su integración con Plaspy para flotas rentas y carsharing
keywords:
  - Carscop CC-688
  - Carscop CC 688
  - Funciones CC-688
  - Rastreador GPS Carscop
  - Capacidades CC-688
  - Rastreador compatible Plaspy
  - Dispositivo de rastreo para flotas
  - Rastreador para car sharing
  - Telemetría CAN OBD
  - T Box para alquiler sin llaves
---

# Carscop - CC-688 Características

Esta página ofrece una visión pública de las funciones del T-Box Carscop CC-688 y cómo se integran con Plaspy. Está dirigida a gestores de flotas, operadores de alquiler y plataformas de car sharing que despliegan este rastreador compatible con Plaspy para monitoreo en tiempo real y control remoto.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación, el modelo regional y la configuración del fabricante. Utilice esta página para planificación y comparación, y consulte al fabricante del dispositivo para obtener los detalles técnicos específicos y más actuales.

## Resumen de funciones

El CC-688 es un T-Box diseñado para vehículos que combina posicionamiento GNSS, conectividad celular global y múltiples interfaces con el vehículo para habilitar flujos de trabajo de alquiler sin llaves, control remoto y envío de telemetría a Plaspy. Está pensado para alquiler desatendido, car sharing y gestión de flotas donde se requiere acceso remoto y telemetría vehicular.

- Posicionamiento GNSS en tiempo real y reporte de ubicación para seguimiento en vivo y reproducción histórica.
- Acceso sin llaves y soporte para arranque mediante BLE, NFC y autenticación por teclado táctil local.
- Integración CANBUS y OBD II para exponer datos del motor y sensores del vehículo cuando estén disponibles en el bus del vehículo.
- Salidas de relé y controladores de actuadores para bloqueo de puertas, claxon, luces y arranque o paro del motor en escenarios de inmovilización remota.
- Funciones de seguridad y anti robo como batería de respaldo opcional, detección de impacto mediante sensor G y soporte para sirena externa.

## Funciones principales del Carscop - CC-688

- Conectividad celular global en 2G 3G y 4G para el reenvío de datos y la gestión remota.
- Posicionamiento GNSS con soporte para posicionamiento asistido y opciones multiconstelación según la variante.
- BLE y NFC para emparejamiento local del dispositivo, handshake con el teléfono y eventos de acceso sin contacto.
- Interfaces CANBUS y OBD II para recopilar DTCs, estado del motor y valores de sensores del vehículo expuestos por el bus.
- Salidas de relé y control de actuadores para bloqueo y desbloqueo, claxon, luces y arranque o corte del motor para control tipo inmovilizador.
- Detección de impactos con sensor G y batería de respaldo opcional para notificaciones de manipulación y pérdida de alimentación.
- Actualizaciones de firmware OTA y cambios remotos de parámetros para escalar despliegues y mantener configuraciones de dispositivos.
- Control de hotspot Wi Fi para gestionar la conectividad local y una API abierta y opción de reenvío TCP IP para integración con sistemas.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el CC-688 reenvía datos de ubicación, telemetría y eventos para que los operadores de flota puedan monitorear vehículos, gestionar accesos y responder a incidentes. Plaspy detecta automáticamente muchos protocolos de rastreadores y puede ingerir la telemetría del CC-688 para proporcionar visibilidad central y procesamiento de eventos.

- La ubicación y la telemetría en tiempo real aparecen en los paneles de Plaspy y permiten la reproducción histórica de rutas y eventos.
- Los eventos de acceso procedentes de BLE NFC y del teclado táctil pueden registrarse en Plaspy para auditoría e informes de uso.
- Los datos CANBUS y OBD II recibidos por el dispositivo pueden mostrarse en Plaspy como estado del vehículo, DTCs o lecturas de sensores cuando el bus del vehículo los expone.
- Los flujos de comandos a relés y actuadores se reflejan como acciones de control remoto en Plaspy, permitiendo inmovilizaciones y operaciones de bloqueo o desbloqueo cuando están configuradas.
- Eventos de seguridad como detección de impactos, alertas de batería de respaldo y señales de manipulación pueden generar alarmas y notificaciones dentro de Plaspy para la respuesta del operador.

## Casos de uso típicos

- Alquiler de autos desatendido y car sharing donde las reservas desde la app y la entrega sin llaves reducen la necesidad de personal en sitio.
- Gestión de flotas con seguimiento en tiempo real, monitoreo basado en telemetría e informes centralizados para optimizar uso y seguridad.
- Flujos de trabajo anti robo y recuperación que combinan alertas de manipulación, notificaciones de batería de respaldo y corte remoto del motor.
- Programas de mantenimiento y diagnóstico que aprovechan la telemetría CANBUS y OBD II para identificar DTCs e indicadores de salud del vehículo.
- Inmovilización remota o control de acceso para eventos de alto riesgo o fuera de política.

## Notas sobre disponibilidad de funciones

- El conjunto de funciones puede variar según la versión de firmware y el software del dispositivo cargado al momento del despliegue.
- Revisión de hardware y variantes regionales pueden cambiar las bandas celulares soportadas, opciones GNSS o puertos I O disponibles.
- La telemetría CANBUS y OBD II depende del modelo del vehículo y de si el bus del vehículo expone los puntos de datos específicos requeridos.
- Algunas funciones de actuadores o inmovilizadores pueden requerir instalación profesional y arneses de cableado adicionales o módulos de bypass.
- Las elecciones de configuración y aprovisionamiento del fabricante durante la instalación pueden habilitar o deshabilitar flujos de acceso específicos como el desbloqueo por NFC o BLE.

## Por qué usar Plaspy con estas funciones

Usar el CC-688 con Plaspy brinda a los operadores una plataforma única para recopilar ubicación, telemetría del vehículo y eventos de acceso mientras gestionan centralmente flujos de control remoto. Plaspy ayuda a convertir los datos del CC-688 en información accionable para los equipos de operaciones, permitiendo un mejor aprovechamiento, respuestas más rápidas a incidentes y una gestión simplificada de flotas de alquiler sin llaves o car sharing.

Learn more about how Plaspy can work with devices like the Carscop CC-688 by visiting https://www.plaspy.com. Device features and firmware behavior can change over time, so please verify the latest device specific information and installation guidance on the manufacturer website at http://www.carscop.com/.
