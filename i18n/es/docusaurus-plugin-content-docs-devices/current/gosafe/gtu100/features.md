---
slug: /gosafe/gtu100/features
id: gtu100-features
sidebar_label: Features
title: Gosafe - GTU100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Gosafe GTU100 e integración con Plaspy para telemetría y gestión de flotas
keywords:
  - Gosafe GTU100
  - características GTU100
  - características del rastreador Gosafe
  - compatibilidad GTU100 con Plaspy
  - rastreador GPS GTU100
  - rastreador GPS para flotas
  - GTU100 LTE Cat1
  - GTU100 multi-GNSS
  - GTU100 sensores BLE
  - detección de choques GTU100
---

# Gosafe - GTU100: Características

Esta página ofrece un resumen público de las funciones del Gosafe GTU100 cuando se utiliza con Plaspy. Resume las capacidades del rastreador relevantes para despliegues con Plaspy, explica cómo suele integrarse el dispositivo con la plataforma y destaca el valor operativo que usted puede esperar al usar el GTU100 para monitoreo de flotas y activos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional, el tipo de instalación y la implementación del fabricante. Para configuraciones a nivel de dispositivo, detalles de firmware y las especificaciones más recientes, consulte la documentación oficial de Gosafe y los recursos del fabricante.

## Resumen de capacidades

El GTU100 es un rastreador compacto, listo para instalar en vehículos, diseñado para flotas ligeras y comerciales y optimizado para su uso con Plaspy. Está orientado a ofrecer conectividad resiliente, posicionamiento GNSS fiable, procesamiento de eventos a bordo y opciones flexibles de E/S y sensores para soportar seguimiento en tiempo real, alertas basadas en eventos y gestión remota a escala de flota.

- Conectividad celular resiliente con LTE Cat-1 y conmutación a 2G/3G, además de opciones dual-SIM y eSIM para amplia cobertura regional.
- Posicionamiento multi-GNSS con alta sensibilidad y métodos de localización asistida para obtener fijaciones precisas en el seguimiento de flotas.
- Procesamiento de eventos a bordo y herramientas de gestión remota del dispositivo para reducir dependencias en la nube y simplificar despliegues masivos.
- Soporte de sensores y periféricos, incluyendo sensores Bluetooth y la interfaz 1-Wire para identificación de conductor y monitoreo de temperatura.
- Modos de bajo consumo y batería de respaldo integrada para mantener la telemetría y la notificación de eventos durante interrupciones de alimentación.

## Características principales del Gosafe - GTU100

- Módem celular LTE Cat-1 con conmutación a 2G/3G y soporte para dual-SIM o eSIM para alta disponibilidad de conectividad.
- Receptor multi-GNSS compatible con GPS, GLONASS, Galileo y BeiDou, con posicionamiento asistido y alta sensibilidad.
- Procesamiento de eventos a bordo mediante Gosafe Event Manager (GEM) para detectar y reportar localmente eventos predefinidos.
- Gestión de dispositivos y actualizaciones OTA de firmware a través de GICUS para mantenimiento a escala de flota.
- E/S configurables que incluyen detección de encendido, una entrada digital configurable, una salida digital de colector abierto y una interfaz 1-Wire para identificación de conductor o sondas de temperatura.
- Soporte BLE 4.2 para integración de sensores inalámbricos como sensores de temperatura y monitoreo de activos.
- Acelerómetro 3D integrado para detección de movimiento e impactos y captura de datos de choques.
- Modos de funcionamiento de bajo consumo y batería de respaldo a bordo para mantener las comunicaciones durante cortes de energía.

## Cómo aprovechan estas funciones a Plaspy

Cuando el GTU100 se despliega con Plaspy, transmite datos de ubicación, eventos y sensores a la plataforma para visibilidad en tiempo real e informes históricos. Plaspy detecta automáticamente protocolos compatibles y procesa la telemetría para paneles, alertas y análisis de flota. Los dispositivos pueden configurarse para reportar mediante los métodos de transporte estándar hacia los endpoints de Plaspy.

- Ubicación en tiempo real: las fijaciones multi-GNSS y asistidas alimentan Plaspy para seguimiento en vivo y reproducción de rutas.
- Reportes basados en eventos: eventos filtrados por GEM, como cambios de encendido, impactos y detecciones de identificación de conductor, se reciben en Plaspy como eventos accionables.
- Telemetría de sensores: sensores BLE y sondas 1-Wire aportan datos de temperatura y estado de carga que Plaspy puede mostrar y sobre los que puede generar alertas.
- Gestión remota de dispositivos: los flujos de trabajo GICUS y OTA facilitan actualizaciones de firmware y configuraciones a escala desde el modelo de gestión de Plaspy.
- Alertas y flujos operativos: capturas de choques, señales de manipulación o entradas de control de inmovilización pueden trasladarse a Plaspy para alertar y permitir acciones por parte del operador.

Nota: Plaspy soporta patrones de conectividad estándar para rastreadores y maneja automáticamente la detección de protocolos durante la integración. Para detalles sobre endpoints recomendados y opciones de transporte, consulte la guía de configuración de Plaspy y la documentación del dispositivo.

## Casos de uso habituales

- Seguimiento diario de ubicación y reproducción de rutas para vehículos comerciales ligeros.
- Correlación de viajes y conductor usando detección de encendido e identificación de conductor por 1-Wire para atribuir tiempos de uso y recorridos.
- Detección de choques e impactos para activar alertas rápidas y análisis postevento en Plaspy.
- Monitoreo de temperatura y condiciones de carga mediante sensores BLE o sondas 1-Wire para transporte refrigerado.
- Gestión remota y mantenimiento de firmware en flotas mixtas de gran tamaño utilizando OTA y GICUS.
- Flujos antirobo e inmovilización cuando se integra con módulos de relé externos y las alertas de Plaspy.

## Notas sobre disponibilidad de funciones

- Las diferencias de firmware pueden cambiar las funciones soportadas o el comportamiento de eventos; verifique la versión de firmware en cada unidad.
- Revisiones de hardware y variantes regionales pueden afectar el soporte de bandas celulares, tolerancias de potencia y compatibilidad de accesorios.
- El método de instalación y el cableado determinan qué E/S y sensores están disponibles; algunas funciones requieren cableado o accesorios específicos.
- El rendimiento de ubicación asistida por Bluetooth y Wi‑Fi depende del entorno y la disponibilidad de sensores.
- Confirme las capacidades OTA, GEM y GICUS tanto en las notas de la versión de firmware del dispositivo como en su plan de despliegue con Plaspy.

## Por qué usar Plaspy con estas funciones

Usar el GTU100 junto con Plaspy brinda a los operadores visibilidad centralizada de la ubicación del vehículo, eventos y telemetría de sensores, al tiempo que simplifica la gestión del ciclo de vida del dispositivo. La combinación de conectividad celular resiliente, posicionamiento multi-GNSS, procesamiento de eventos a bordo y gestión OTA ayuda a reducir tiempos de inactividad y mejora la fiabilidad del seguimiento en tiempo real y las alertas en flotas mixtas.

Para obtener más información sobre Plaspy y cómo soporta rastreadores como el Gosafe GTU100 visite https://www.plaspy.com. Para las especificaciones más actuales y detalladas del dispositivo, notas de firmware y orientación del fabricante consulte https://gosafesystem.com/ ya que las funciones y el comportamiento de firmware pueden cambiar con el tiempo.
