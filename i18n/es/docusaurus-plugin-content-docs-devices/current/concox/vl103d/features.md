---
slug: /concox/vl103d/features
id: vl103d-features
sidebar_label: Features
title: Concox - VL103D Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del Concox VL103D y su compatibilidad con Plaspy para rastreo y telemetría vehicular
keywords:
  - características Concox VL103D
  - rastreador GPS Concox VL103D
  - compatibilidad VL103D Plaspy
  - rastreador vehicular Concox
  - características rastreador GPS
  - rastreador LTE GNSS
  - telemetría vehicular
  - recuperación de vehículos robados
  - rastreador para gestión de flotas
  - especificaciones VL103D
---

# Concox - Características del VL103D

Esta página ofrece un resumen público de las características del Concox VL103D y cómo sus capacidades se integran con Plaspy. Se concentra en funciones relevantes para la localización en tiempo real, telemetría vehicular y flujos operativos habituales cuando el VL103D se utiliza con la plataforma de seguimiento Plaspy.

La descripción del VL103D en esta página se basa en la información proporcionada por el fabricante y en el resumen del modelo para la compatibilidad con Plaspy. La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante; confirme siempre los detalles específicos con la documentación del proveedor.

## Resumen de funcionalidades

El VL103D es un terminal vehicular LTE GNSS compacto diseñado para instalaciones discretas en motocicletas, autos y vehículos comerciales ligeros. Combina conectividad celular y GNSS de alta sensibilidad con interfaces de integración vehicular para enviar posición y telemetría básica a Plaspy, apoyando tareas de rastreo, recuperación y gestión de flotas.

- Rastreo continuo en tiempo real por LTE con retrocompatibilidad 2G para mantener cobertura.
- Posicionamiento GNSS de alta sensibilidad usando GPS y BDS con precisión CEP inferior a 2.5 metros para reportes de ubicación precisos.
- Entradas y salidas para integración con el vehículo: entrada ACC para encendido, salida digital por relé para corte remoto, entrada SOS configurable y ADC de 0 a 5 V para sensores analógicos.
- Carcasa robusta con protección IP66, amplio rango de voltaje de operación y tamaño reducido para instalaciones discretas.
- Inteligencia de movimiento incorporada mediante acelerómetro de 3 ejes para reportar eventos bruscos y actividad de conducción.

## Funciones principales del Concox VL103D

- Conectividad celular LTE Cat 1 con retroceso GSM para amplia cobertura y reportes continuos.
- Posicionamiento GPS y BeiDou con asistencia LBS para obtener una primera solución rápida y actualizaciones de posición consistentes.
- Amplio rango de voltaje de entrada de 9 a 90 VDC, compatible con distintos tipos de vehículos.
- Batería de respaldo industrial integrada para mantener energía de forma temporal cuando se corta la alimentación principal.
- Conjunto de E/S vehiculares que incluye detección de encendido ACC, salida digital por relé para corte remoto, entrada SOS configurable y ADC de 0 a 5 V para telemetría analógica.
- Acelerómetro de 3 ejes integrado para detección de eventos bruscos y sensado básico de movimiento.
- Carcasa compacta con clasificación IP66, adecuada para ambientes expuestos y montaje discreto.
- Indicadores LED para estado de GNSS, celular y energía que facilitan la instalación y el diagnóstico.

## Cómo funcionan estas funciones con Plaspy

Cuando un VL103D está conectado a Plaspy, el dispositivo transmite posiciones GNSS y telemetría a la plataforma para que los operadores puedan ver ubicaciones en vivo, recibir alertas de eventos y revisar rutas históricas. Plaspy procesa los datos de posición, sensores y alarmas disponibles y los presenta junto con reglas configurables y herramientas de reporte.

- Actualizaciones de ubicación en tiempo real y reproducción de rutas históricas mostradas en los mapas de Plaspy para visibilidad operativa.
- Estado de encendido y señales de corte remoto reflejadas en Plaspy como entradas y salidas discretas para monitoreo y flujos de respuesta.
- Lecturas de sensores analógicos mediante el ADC de 0 a 5 V que pueden registrarse y graficarse en Plaspy para paneles de telemetría.
- Eventos de movimiento y alarmas del acelerómetro y otras entradas del equipo que alimentan reglas de alerta e informes de incidentes en Plaspy.
- Estado del dispositivo e información basada en los LED que ayudan a verificar la instalación y realizar diagnósticos básicos en campo cuando se supervisa con Plaspy.

## Casos de uso típicos

- Flujos de recuperación de vehículos robados que requieren instalación compacta, rastreo continuo y capacidad de corte remoto.
- Gestión de flotas de vehículos comerciales ligeros que necesitan reporte de posición, historial de rutas y visibilidad de eventos del conductor.
- Escenarios de antirobo e inmovilización remota que integran salida por relé y alarmas de movimiento a través de Plaspy.
- Telemetría de sensores analógicos para combustible u otros sensores del vehículo, integrada en reportes y paneles de la flota.
- Instalaciones en motocicletas o aplicaciones encubiertas donde se exige factor de forma reducido y protección IP66.
- Monitoreo de seguridad y comportamiento del conductor mediante reporte de eventos bruscos basados en el acelerómetro.

## Notas sobre disponibilidad de funciones

- Las capacidades exactas dependen del firmware y la revisión de hardware del dispositivo; las funciones listadas se basan en la descripción actual del modelo y pueden variar con actualizaciones.
- El soporte de bandas celulares regionales y variantes regulatorias puede afectar el comportamiento de conectividad en distintos mercados.
- Las opciones de instalación y el cableado influyen en qué entradas y salidas están disponibles y cómo el dispositivo reporta a Plaspy.
- Las opciones de configuración del fabricante y los ajustes de funciones pueden habilitar o deshabilitar funciones específicas, como el reporte de sensores o umbrales de alarma.
- Plaspy detecta automáticamente los protocolos de rastreador compatibles e ingiere la posición y los datos de sensores según el conjunto de capacidades del dispositivo.

## Por qué usar Plaspy con estas funciones

Usar el VL103D con Plaspy ofrece una solución práctica para combinar localización GNSS precisa, telemetría a nivel vehicular e inteligencia básica de movimiento en una vista operativa unificada. Para organizaciones que requieren conciencia de ubicación, apoyo en recuperación o monitoreo sencillo de eventos de conductores, el VL103D aporta las señales desde el vehículo mientras Plaspy proporciona consolidación, alertas e informes históricos.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific feature details, firmware behavior, and official manufacturer specifications at https://www.iconcox.com/ to ensure your deployment matches current product capabilities.
