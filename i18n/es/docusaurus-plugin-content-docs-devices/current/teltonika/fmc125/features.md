---
slug: /teltonika/fmc125/features
id: fmc125-features
sidebar_label: Features
title: Teltonika - FMC125 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Teltonika FMC125 y su integración con Plaspy para flotas y control de combustible
keywords:
  - Teltonika FMC125
  - características FMC125
  - rastreador GPS FMC125
  - rastreador GPS Teltonika
  - seguimiento de flotas
  - monitoreo de combustible
  - rastreador RS232 RS485
  - rastreador Dual SIM
  - telemetría vehicular
  - rastreador compatible con Plaspy
---

# Teltonika - Características del FMC125

Esta página ofrece una descripción pública de las funciones del Teltonika FMC125 y explica cómo se integra el dispositivo con Plaspy para el rastreo de flotas y la telemetría. Resume las capacidades prácticas relevantes para usuarios de Plaspy y muestra cómo los datos de telemetría y serial del FMC125 se convierten en paneles, alertas e informes útiles.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el módulo regional, el método de instalación y la implementación del fabricante. Para configuraciones específicas del dispositivo y los detalles técnicos más recientes, consulte la documentación oficial de Teltonika y las notas de lanzamiento.

## Resumen de funciones

El FMC125 es un rastreador profesional para vehículos, pensado para la gestión de flotas cuando la conectividad celular fiable y la integración de telemetría externa son prioritarias. Combina reportes GNSS en tiempo real con enlaces celulares robustos y entradas seriales para capturar datos adicionales del vehículo y de sensores.

- Conectividad celular confiable con LTE Cat 1 y conmutación a 2G, además de Dual SIM para mayor continuidad de servicio.
- Informes de ubicación GPS en tiempo real que alimentan mapas y trazas históricas en Plaspy.
- Enlaces seriales RS232 y RS485 para conectar dispositivos de telemetría externos y telemática de video como DualCam y Dashcam.
- Entrada por impulso para medidores de flujo de combustible basados en pulsos, facilitando análisis de consumo y detección de pérdidas.
- Identificación de conductor y activos mediante RFID y sensores 1-wire para asociar eventos con personal y equipos.
- Diseño pensado para integrarse fácilmente en despliegues profesionales de flotas y logística.

## Características principales del Teltonika - FMC125

- Conectividad 4G LTE Cat 1 con fallback a 2G para mantener la disponibilidad de enlace en distintos entornos de red.
- Soporte Dual SIM para redundancia y flexibilidad según la cobertura regional.
- Reportes de ubicación en tiempo real basados en GNSS para seguimiento y historial de rutas.
- Interfaz serial RS232 para dispositivos de telemetría e integración con sistemas de video telemático.
- Interfaz serial RS485 para cadenas de telemetría y sensores externos.
- Entrada por impulso que acepta señales de medidores de flujo de combustible para monitorizar consumos.
- Soporte para RFID y sensores 1-wire para capturar identificación de conductor y eventos sencillos de sensores.
- Compatibilidad con sistemas de video telemático Teltonika DualCam y Dashcam mediante enlace serial para correlacionar eventos.

## Cómo funcionan estas funciones con Plaspy

Plaspy procesa la transmisión de datos del FMC125 y transforma la ubicación y la telemetría serial en mapas, alertas e informes que los equipos de flotas usan para operaciones y seguridad. Plaspy detecta automáticamente protocolos compatibles y presenta la telemetría en paneles e historiales.

- La ubicación y el movimiento en vivo se muestran en los mapas y flujos de Plaspy para seguimiento en tiempo real y coordinación de despachos.
- Los conteos de pulsos de las entradas por impulso se analizan y utilizan en los informes de consumo de combustible y en flujos de alerta de Plaspy.
- Los eventos de RFID y sensores 1-wire se registran en Plaspy para asociar viajes y sucesos con conductores o activos en informes.
- La telemetría serial de RS232 y RS485 se procesa para enriquecer el contexto del vehículo y, cuando hay cámaras DualCam o Dashcam, adjuntar eventos de video a los registros.
- La resiliencia de conectividad proporcionada por Dual SIM ayuda a mantener el reporte continuo del dispositivo para que Plaspy conserve un rastreo preciso y alertas oportunas.
- Los datos del FMC125 se pueden aprovechar en reglas de automatización y notificaciones de Plaspy para respaldar flujos operativos y antirrobo, incluyendo acciones de inmovilizador integradas cuando estén implementadas.

## Casos de uso típicos

- Despacho y supervisión de rutas para flotas usando GPS en tiempo real y datos históricos de recorrido.
- Monitoreo de combustible y detección de pérdidas mediante entradas por impulso conectadas a medidores de flujo y análisis de Plaspy.
- Identificación y reporte de conductores usando eventos de RFID y sensores 1-wire para asociar actividad con personal.
- Captura de incidentes y correlación de evidencia al emparejar telemática de video con ubicación y marcas de tiempo de eventos.
- Seguridad de activos y flujos antirrobo mediante conectividad continua y alertas de Plaspy.
- Despliegues a gran escala en logística y transporte que requieren variantes de módulo regional y pedidos por volumen.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones varían según la versión de firmware y la variante de hardware regional, por lo que el comportamiento específico puede diferir entre unidades.
- Algunas funciones requieren periféricos externos compatibles, como medidores de flujo de combustible, tags RFID, sensores 1-wire o cámaras compatibles.
- La instalación y el cableado del vehículo influyen en las señales disponibles para monitorización de ignición o flujos de inmovilizador y pueden requerir instalación profesional.
- Los códigos de pedido del fabricante y los módulos regionales determinan las bandas celulares soportadas y deben seleccionarse según la región de despliegue.
- Para las especificaciones técnicas más actuales, consulte la documentación del fabricante y los registros de cambios de firmware.

## Por qué usar Plaspy con estas funciones

Usar el FMC125 con Plaspy brinda a los operadores de flotas visibilidad combinada de ubicación, telemetría de combustible, identidad del conductor y video de eventos cuando está disponible. El dispositivo ofrece puntos de integración que permiten a Plaspy convertir flujos crudos de sensores y serial en paneles operativos, informes y alertas que apoyan despacho, cumplimiento y respuesta ante incidentes.

Para conocer más sobre Plaspy y cómo puede integrar la telemetría del FMC125 en sus flujos de trabajo de flota visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente en el sitio del fabricante https://www.teltonika-gps.com/.
