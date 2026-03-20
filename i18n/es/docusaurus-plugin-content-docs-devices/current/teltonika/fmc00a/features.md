---
slug: /teltonika/fmc00a/features
id: fmc00a-features
sidebar_label: Features
title: Teltonika - FMC00A Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del Teltonika FMC00A y su integración con Plaspy para datos OBD y monitoreo vehicular en tiempo real
keywords:
  - funciones Teltonika FMC00A
  - rastreador GPS Teltonika FMC00A
  - rastreador OBD II FMC00A
  - compatibilidad FMC00A Plaspy
  - rastreo vehicular OBD
  - rastreador LTE Cat 1
  - rastreador telemática vehicular
  - monitoreo vehicular en tiempo real
  - geocercas e informes de viajes
  - capacidades rastreador Teltonika
---

# Teltonika - Características del FMC00A

Esta página describe el contexto público de funcionalidades del Teltonika FMC00A y cómo estas capacidades pueden utilizarse con Plaspy para el seguimiento y monitoreo de vehículos. Se enfoca en información práctica y no sensible sobre lo que ofrece el FMC00A y cómo aparecen esos datos y eventos en un entorno de gestión de flotas administrado con Plaspy.

La disponibilidad exacta de las funciones y su comportamiento pueden variar según la versión de firmware del dispositivo, la revisión de hardware, la marca y modelo del vehículo, y el tipo de instalación. Para detalles específicos del dispositivo, como parámetros OBD compatibles para un vehículo concreto, registros de cambios de firmware o diferencias entre variantes de hardware, consulte la documentación oficial de Teltonika.

## Resumen de funcionalidades

El FMC00A es un rastreador OBD-II plug and play diseñado para Norteamérica con conectividad LTE Cat 1 y con respaldo a 3G. Proporciona seguimiento de ubicación, lectura de parámetros OEM desde OBD y un conjunto de detecciones y reportes integrados pensados para ofrecer visibilidad de la flota y monitoreo básico del conductor y del vehículo.

- Instalación OBD II plug and play para despliegues rápidos en vehículos compatibles
- Conectividad LTE Cat 1 con fallback a 3G para mantener disponibilidad de red
- Lectura de parámetros OEM desde OBD, incluyendo odómetro y nivel de combustible cuando el vehículo lo soporte
- Soporte multiconstelación GNSS para posicionamiento fiable a través de varios sistemas globales
- Detecciones a bordo como eventos basados en acelerómetro, detección de interferencia (jamming) y alertas por desconexión o remolque

## Funciones principales del Teltonika - FMC00A

- Factor de forma OBD II plug and play para una instalación y remoción sencilla
- Datos celulares LTE Cat 1 con fallback a 3G para mayor cobertura en Norteamérica
- Lectura de parámetros OEM via OBD que permite reportar odómetro y nivel de combustible cuando el vehículo lo provea
- Soporte mult GNSS incluyendo GPS, GLONASS, GALILEO y BEIDOU, además de opciones de posicionamiento asistido para mejorar la precisión
- Eventos basados en acelerómetro utilizados para métricas de conducción eficiente y detección de exceso de velocidad
- Detección de interferencia (jamming) y otras funciones de monitoreo de manipulación
- Soporte de geocercas, tanto automáticas como manuales
- Posibilidad de actualizaciones de firmware y configuración mediante FOTA WEB, FOTA, Teltonika Configurator o la app móvil FMBT

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere los datos del FMC00A para ofrecer visibilidad en tiempo real de la ubicación, telemetría y eventos en los paneles de control de la flota. Plaspy detecta automáticamente los protocolos compatibles del rastreador para simplificar la incorporación y la generación de reportes.

- Posición GPS en tiempo real y historial de movimiento visibles en mapas de Plaspy e informes de viajes
- Métricas derivadas de OBD, como lecturas de odómetro y nivel de combustible, mostradas cuando están disponibles desde el vehículo
- Visibilidad de eventos como disparos del acelerómetro, detección de desconexión o remolque, alertas de jamming y entradas o salidas de geocercas
- Escenarios de viaje y resúmenes de inactividad excesiva o eventos de conducción disponibles para revisión operativa
- Los dispositivos pueden configurarse para enviar datos al servidor de Plaspy y Plaspy mostrará el estado del equipo y el estado de actualizaciones de firmware cuando esté disponible

## Casos de uso típicos

- Monitoreo de ubicación de la flota con información de odómetro y nivel de combustible basada en OBD
- Control de mantenimiento y seguimiento de kilometraje basado en lecturas de odómetro reportadas por el vehículo
- Monitoreo del comportamiento del conductor e indicadores de conducción eficiente mediante eventos basados en acelerómetro
- Detección de manipulación y robo mediante alertas de desconexión, detección de remolque y jamming
- Despliegue rápido para flotas de alquiler o vehículos compartidos gracias a la interfaz OBD plug and play
- Control de acceso a sitios mediante geocercas y registro automático de viajes para facturación o cumplimiento

## Notas sobre disponibilidad de funciones

- La disponibilidad de parámetros OBD depende del fabricante y modelo del vehículo; algunos parámetros OEM pueden no estar expuestos en todos los vehículos
- La versión de firmware y la revisión de hardware pueden habilitar o modificar ciertas detecciones y el comportamiento de los reportes
- Las variantes regionales y las certificaciones orientan al FMC00A hacia el mercado de Norteamérica; confirme las aprobaciones específicas por región con el fabricante
- Algunas funciones avanzadas requieren configuración o actualizaciones de firmware mediante herramientas de Teltonika como FOTA WEB o Teltonika Configurator
- El tipo de instalación y la ubicación del dispositivo (por ejemplo conexión directa al puerto OBD) influyen en qué parámetros del vehículo son legibles

## Por qué usar Plaspy con estas funciones

Usar el FMC00A con Plaspy brinda a las organizaciones una forma sencilla de combinar datos vehiculares provenientes de OBD con reportes de ubicación y eventos en una sola vista de gestión de flota. La incorporación de dispositivos de Plaspy y la detección automática de protocolos reducen la fricción de configuración, mientras que los paneles y alertas facilitan la actuación sobre eventos relacionados con odómetro, nivel de combustible, geocercas y seguridad reportados por el rastreador.

Si desea saber más sobre cómo Plaspy puede trabajar con rastreadores Teltonika, visite https://www.plaspy.com. Por favor verifique los detalles más recientes sobre funcionalidades específicas del dispositivo, comportamiento de firmware y la documentación del fabricante en https://www.teltonika-gps.com/ ya que las características e implementaciones pueden cambiar con el tiempo.
