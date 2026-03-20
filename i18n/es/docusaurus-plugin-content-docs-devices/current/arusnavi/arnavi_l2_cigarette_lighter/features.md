---
slug: /arusnavi/arnavi_l2_cigarette_lighter/features
id: arnavi_l2_cigarette_lighter-features
sidebar_label: Features
title: Arusnavi - Arnavi L2 (cigarette lighter) Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador GPS Arusnavi Arnavi L2 enchufe encendedor y su compatibilidad con Plaspy
keywords:
  - Arusnavi Arnavi L2 características
  - Arnavi L2 rastreador enchufe encendedor
  - Arusnavi rastreador GPS Plaspy
  - Arnavi L2 soporte sensores BLE
  - rastreador GPS plug and play
  - rastreador GPS flota de taxis
  - rastreador para autos de alquiler
  - seguimiento de flotas Plaspy
  - Arnavi L2 seguimiento en tiempo real
  - Arnavi L2 capacidades de telemetría
---

# Arusnavi - Arnavi L2 (cigarette lighter) — Características

Esta página ofrece un resumen público de las funcionalidades del rastreador GPS Arusnavi Arnavi L2 con conexión al encendedor y explica cómo puede aprovecharse en la plataforma Plaspy. El enfoque está en las capacidades visibles para el usuario, el valor operativo práctico y las formas habituales en que el dispositivo envía ubicación y datos de sensores a Plaspy para monitoreo y reporte de flotas.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Antes de desplegar, verifique siempre el firmware del dispositivo y la documentación oficial del fabricante para obtener los detalles más actuales y específicos del equipo.

## Resumen de características

El Arnavi L2 es un rastreador GPS compacto, diseñado para instalación rápida mediante la toma del encendedor del vehículo, ideal para telemática portátil. Ofrece seguimiento en tiempo real, posicionamiento multi GNSS, soporte BLE para sensores y almacenamiento local en modo caja negra para mantener continuidad de datos ante pérdidas temporales de red.

- Conexión por toma del encendedor para instalación rápida, no invasiva y fácil traslado entre vehículos.
- Seguimiento en tiempo real mediante red celular 2G GPRS combinado con posicionamiento multi GNSS para actualizaciones de ubicación confiables.
- Soporte Bluetooth Low Energy para hasta cinco sensores inalámbricos que amplían la telemetría más allá de la ubicación.
- Entrada discreta de encendido y E/S universal protegida para detección del estado del motor y escenarios de control remoto.
- Almacenamiento local tipo caja negra que captura registros sin conexión y los sube a Plaspy cuando vuelve la conectividad.

## Funciones principales del Arusnavi - Arnavi L2 (enchufe encendedor)

- Instalación plug and play mediante la toma del encendedor para despliegues rápidos y retirada sin cableado fijo.
- Conectividad celular 2G GPRS para reportes continuos hacia plataformas telemáticas.
- Soporte multi GNSS incluyendo GPS, GLONASS, Galileo, BeiDou y QZSS para mejorar el posicionamiento.
- Soporte Bluetooth Low Energy para hasta cinco sensores externos que permiten telemetría como temperatura o tags de vigilancia.
- Entrada positiva discreta de encendido para detección de motor encendido/apagado y registro de sesiones de conductor.
- E/S universal protegida con capacidad de salida hasta 500 mA para control remoto de actuadores o alarmas.
- Acelerómetro integrado y funciones EcoDriving para eventos basados en movimiento y análisis de comportamiento del conductor.
- Memoria local tipo caja negra (aprox. 8 MB, hasta ~12 000 registros) para almacenar datos durante interrupciones de red.

## Cómo funcionan estas funciones con Plaspy

Cuando el Arnavi L2 está conectado y reportando, Plaspy ingiere posición, estado y datos de sensores para mostrar mapas en tiempo real, paneles y el historial de eventos. Plaspy detecta automáticamente el protocolo del dispositivo, de modo que la telemetría entrante se parsea y muestra en la plataforma sin selección manual de protocolo.

- Las ubicaciones en tiempo real y las actualizaciones GNSS aparecen en los mapas de Plaspy y se usan para reproducción de rutas.
- Los eventos de la entrada de encendido se traducen en marcadores de motor encendido/apagado y en registros de sesiones de conductor dentro de Plaspy.
- El estado de la E/S universal y las salidas pueden reflejar acciones de alarma o control remoto y quedan registradas en los eventos.
- Las lecturas de sensores BLE emparejados se presentan en Plaspy para monitoreo de telemetría y configuración de alertas.
- Los datos almacenados en la caja negra se suben cuando se restablece la conectividad, de modo que Plaspy preserva la continuidad histórica de los datos.

## Casos de uso habituales

- Flotas de taxis y servicios de transporte que requieren reemplazos rápidos de equipos y seguimiento continuo entre turnos.
- Operaciones de alquiler de autos que necesitan instalación no invasiva y monitoreo antirrobo.
- Vehículos de servicio y reparto donde la portabilidad y la reasignación rápida de rastreadores mejoran la operación.
- Despliegues que combinan sensores BLE para monitoreo de temperatura o tags de seguridad junto con el seguimiento vehicular.
- Pruebas a corto plazo o unidades móviles que se benefician de la instalación plug and play y del almacenamiento en búfer offline.

## Notas sobre disponibilidad de funciones

- Algunas capacidades dependen del firmware del dispositivo y pueden cambiar con actualizaciones del fabricante.
- Revisiones de hardware o variantes regionales pueden modificar las entradas, salidas o conjuntos de funciones inalámbricas disponibles.
- El tipo de instalación importa: el comportamiento en una instalación por toma del encendedor puede diferir del de un montaje con cableado fijo.
- El soporte de sensores Bluetooth y la cantidad de sensores que funcionan de forma confiable pueden variar según el firmware y el entorno.
- Confirme el cableado de E/S y los casos de uso de las salidas con la documentación del fabricante antes de conectar actuadores.

## Por qué usar Plaspy con estas funciones

La combinación del Arnavi L2 con Plaspy ofrece una vía directa desde el hardware hasta la información operativa. El dispositivo suministra la telemetría esencial —posición, estado de encendido, datos de sensores y registros en búfer— mientras que Plaspy convierte esos flujos en mapas, alertas, reportes y análisis histórico para gerentes de flota y equipos operativos.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el Arnavi L2 visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y orientación de instalación más recientes, verifique la información en el sitio oficial del fabricante https://www.arusnavi.ru, ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
