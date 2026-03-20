---
slug: /telic/sbc_avl/features
id: sbc_avl-features
sidebar_label: Features
title: Telic - SBC AVL Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Telic SBC-AVL y cómo sus capacidades se integran con Plaspy para seguimiento de flotas y detección de conductor
keywords:
  - Telic SBC AVL
  - Características SBC-AVL Telic
  - rastreador GPS SBC AVL
  - rastreador GPS Telic
  - funciones SBC AVL
  - rastreador gestión de flotas
  - rastreador detección de conductor
  - integración CAN bus 1-wire
  - rastreador compatible Plaspy
  - seguimiento de vehículos Telic
---

# Telic - Funciones del SBC-AVL

Esta página describe el contexto público de funciones para el uso de la unidad telemática Telic SBC-AVL con Plaspy. Se enfoca en las capacidades prácticas del dispositivo tal como se describen en materiales del fabricante y en la manera en que esas capacidades se presentan y usan dentro de la plataforma Plaspy para el seguimiento de flotas y la supervisión operativa.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Usted debe considerar las descripciones aquí como una guía general y verificar los detalles específicos del equipo con el fabricante y mediante pruebas en campo antes de depender de una función concreta para procesos operativos.

## Resumen de características

El Telic SBC-AVL es una unidad telemática compacta y orientada a costo, pensada para aplicaciones de monitoreo de flotas y vehículos. Sus antenas GSM y GPS integradas y el soporte para interfaces de integración con el vehículo lo hacen apropiado para despliegues que requieren reporte de posición confiable y conexión a sistemas externos.

- Antenas GSM y GPS integradas para reporte de ubicación y comunicaciones.
- Soporte para interfaces 1-wire para conectar sensores externos simples o dispositivos de identificación.
- Soporte de interfaz CAN-bus para integración con sistemas del vehículo y fuentes de datos de diagnóstico a bordo.
- Factor de forma compacto diseñado para reducir el tiempo de puesta en servicio y los costos de instalación.
- Uso versátil en escenarios de gestión de flotas, incluyendo seguimiento de vehículos y detección de conductores.

## Características principales del Telic - SBC-AVL

- Hardware telemático compacto y económico, adecuado para despliegues en flotas.
- Antenas GSM y GPS integradas para soporte de seguimiento y comunicaciones.
- Soporte de interfaz 1-wire para sensores externos simples o dispositivos de identificación de conductor.
- Soporte de CAN-bus para integrarse con sistemas vehiculares que exponen datos a través de CAN.
- Diseñado para casos de uso en gestión de flotas y detección de conductor.
- Ingeniería enfocada en minimizar el esfuerzo de puesta en servicio y los costos asociados.
- Opciones de configuración versátiles para adaptarse a distintos tipos de instalación.

## Cómo interactúan estas funciones con Plaspy

Plaspy recibe y procesa datos de ubicación y eventos desde rastreadores compatibles como el SBC-AVL, mostrando las posiciones de los vehículos, su estado y los eventos de integración en una interfaz unificada. Plaspy detecta automáticamente los protocolos comunes de los rastreadores y acepta los datos de los dispositivos en la plataforma, de modo que los equipos puedan supervisar las operaciones sin necesidad de crear canalizaciones de ingestión personalizadas.

- Las actualizaciones de ubicación y el historial de movimiento del SBC-AVL aparecen en los mapas y reportes de Plaspy.
- La detección de conductor y eventos sencillos de sensores reportados vía 1-wire pueden mostrarse como eventos personalizados en Plaspy.
- Los datos de sistemas del vehículo accesibles vía CAN-bus pueden mapearse a eventos o vistas de diagnóstico en Plaspy cuando el vehículo expone las señales relevantes.
- Plaspy soporta las opciones estándar de conectividad de red para rastreadores y puede aceptar conexiones de dispositivos configuradas por TCP o UDP hacia la plataforma.
- La gestión de dispositivos de Plaspy detecta los formatos de protocolo entrantes para simplificar la incorporación y el reporte.

## Casos de uso típicos

- Seguimiento en tiempo real de la ubicación de vehículos para despacho y supervisión de rutas.
- Flujos de trabajo de identificación y detección de conductores usando dispositivos conectados por 1-wire.
- Integración de señales de sistemas vehiculares mediante CAN-bus para visibilidad operativa y análisis de diagnóstico.
- Despliegues de bajo costo donde es importante minimizar el tiempo de instalación y puesta en servicio.
- Escenarios de flota mixta que requieren rastreadores compactos y versátiles para diferentes tipos de vehículo.
- Informes operativos de flota y análisis histórico para apoyar mejoras de eficiencia.

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen del firmware del dispositivo y pueden variar entre versiones.
- Las revisiones de hardware y las variantes regionales pueden cambiar qué interfaces o integraciones están disponibles.
- La disponibilidad de señales específicas en CAN-bus depende de la marca, el modelo y la configuración del cableado del vehículo.
- Las funciones 1-wire y los sensores conectados pueden requerir componentes adicionales de instalación o configuración.
- Confirme el soporte de funciones y el comportamiento detallado con la documentación de Telic y las notas de lanzamiento antes de implementar.

## Por qué usar Plaspy con estas funciones

Usar el Telic SBC-AVL con Plaspy ayuda a las organizaciones a centralizar los datos de ubicación de vehículos, los eventos de detección de conductor y las señales de integración en una única vista operativa. Las capacidades de detección de dispositivos e ingestión de datos de Plaspy reducen la fricción en la puesta en marcha de unidades SBC-AVL, permitiendo que los equipos de flota se concentren en la supervisión y la optimización en lugar de en trabajo de integración personalizado.

Para saber más sobre Plaspy y cómo la plataforma puede ayudarle a desplegar y gestionar dispositivos Telic SBC-AVL, visite https://www.plaspy.com. Para las especificaciones de dispositivo más actualizadas, el comportamiento del firmware y los detalles de implementación del fabricante, verifique la información en el sitio oficial de Telic https://www.telic.de.
