---
slug: /navis/ch_5703/features
id: ch_5703-features
sidebar_label: Features
title: Navis - CH -5703 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador marino Navis CH -5703 y su integración con Plaspy para monitoreo y mensajería de embarcaciones
keywords:
  - funciones Navis CH -5703
  - rastreador GPS Navis CH -5703
  - GNSS marino CH -5703
  - rastreador de embarcaciones Navis
  - integración Navis ECDIS
  - compatibilidad Navis AIS
  - receptor DGPS Navis
  - rastreadores compatibles con Plaspy
  - monitoreo de embarcaciones Plaspy
  - características de rastreador marino
---

# Navis - CH -5703: Funciones

Esta página ofrece un resumen público de las capacidades del Navis CH -5703 y de cómo se integran con Plaspy para el monitoreo de embarcaciones y la supervisión operativa. La información se centra en funciones observables y no sensibles, tales como datos de navegación, mensajería e integración de sistemas, que resultan relevantes al usar el CH -5703 con Plaspy.

La disponibilidad exacta y el comportamiento de ciertas funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para configuraciones específicas del equipo, límites de rendimiento y los detalles técnicos más recientes, consulte la documentación oficial de Navis y las notas de firmware.

## Resumen de funciones

El CH -5703 es un instrumento de navegación GNSS marino diseñado para embarcaciones fluviales y marítimas. Combina la recepción multi-constelación con soporte de correcciones diferenciales y proporciona parámetros de navegación, mensajería y puntos de integración útiles para sistemas de monitoreo de embarcaciones.

- Recepción GNSS multi-constelación con soporte de correcciones diferenciales para mejorar la precisión posicional.
- Salidas de navegación estándar que incluyen coordenadas actuales en un sistema seleccionable, fecha y hora, velocidad sobre el suelo y rumbo.
- Capacidad para generar y transmitir mensajes cortos de texto y codificados a un centro de control para reportes de estado y mensajería.
- Opciones de integración con ECDIS y AIS para apoyar la visualización y la formación de mensajes de servicio en sistemas de monitoreo.
- Compatibilidad con controladores de sensores del buque y la red local a bordo para incorporarse a un centro de control de equipos más amplio.
- Opción de modificación para función de brújula satelital que amplía el papel del dispositivo en configuraciones de navegación.

## Características principales del Navis - CH -5703

- Receptor integrado GLONASS, GPS y Galileo con soporte para correcciones diferenciales.
- Diseñado como receptor NAP GNSS y subsistema diferencial DGPS marino para el posicionamiento de embarcaciones.
- Salidas de parámetros de navegación esenciales: coordenadas del buque, fecha y hora, velocidad sobre el suelo y rumbo.
- Funciones internas para crear y enviar mensajes cortos de texto y codificados a un centro de control de monitoreo.
- Interfaces para integración con ECDIS que permiten la visualización de mensajes de servicio e interacción operativa.
- Capacidad de trabajar con AIS cuando está emparejado a través de ECDIS para información de navegación coordinada.
- Compatibilidad con sistemas de control de terceros cuando existe una interfaz de datos compatible.
- Puede desplegarse como parte de un centro de control de equipos o como dispositivo de respuesta gestionado por un supervisor del centro de control.

## Cómo funcionan estas funciones con Plaspy

Plaspy puede ingerir y mostrar las salidas de navegación y mensajería del CH -5703 para que los operadores de flota y los centros de monitoreo tengan una conciencia situacional consolidada. El manejo de dispositivos en Plaspy está diseñado para reflejar la información práctica que proporciona el CH -5703 sin exponer detalles internos del equipo.

- La posición del buque y la trayectoria histórica son visibles en Plaspy usando las coordenadas y la información de rumbo reportadas.
- Los datos de navegación con sello de tiempo, como fecha y hora actuales y velocidad sobre el suelo, están disponibles para monitoreo y archivado.
- Los mensajes cortos de texto y codificados enviados desde el CH -5703 pueden representarse como eventos o mensajes dentro de Plaspy para apoyar los flujos operativos.
- La integración con flujos de trabajo ECDIS y habilitados para AIS puede reflejarse en Plaspy como contexto complementario de navegación y mensajes de servicio cuando esté disponible.
- El dispositivo puede añadirse a conjuntos de monitoreo en Plaspy para que el CH -5703 participe en la supervisión y el reporte centralizado del tráfico.

## Casos de uso típicos

- Monitoreo continuo de la posición de embarcaciones para flotas fluviales y costeras.
- Visibilidad centralizada en centros de control para la supervisión de navegación y seguridad.
- Envío de mensajes operativos cortos desde la embarcación hacia centros de control en tierra.
- Integración con ECDIS para la visualización coordinada de mensajes de servicio y contexto de navegación.
- Uso del CH -5703 como parte de un conjunto de monitoreo de tráfico para respaldar la supervisión de flotas y la gestión de rutas.
- Incorporación de correcciones diferenciales GNSS para reportes de posición de mayor precisión a plataformas de monitoreo.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones y los formatos de mensajes pueden variar entre diferentes revisiones de firmware y variantes de hardware del fabricante.
- La integración con ECDIS y AIS depende de la instalación a bordo y de la presencia de interfaces y sistemas compatibles.
- Algunas funciones pueden requerir configuración específica u opciones de modificación para habilitar el comportamiento de brújula satelital o el formato de mensajes.
- Variantes regionales o de modelo pueden cambiar las bandas soportadas o los modos de corrección; confirme siempre los detalles para su unidad.
- Para la máxima precisión en la planificación operativa, consulte la documentación técnica de Navis y las notas de versión del firmware.

## Por qué usar Plaspy con estas funciones

Usar el Navis CH -5703 con Plaspy integra datos de navegación GNSS marinos fiables con las capacidades de monitoreo y reporte de Plaspy. Plaspy consolida posición, sincronización temporal, velocidad, rumbo y eventos de mensajes cortos de dispositivos compatibles en una única vista operativa, ayudando a los equipos a mantener la conciencia situacional entre embarcaciones y centros de control.

Para saber más sobre cómo Plaspy soporta el seguimiento de embarcaciones y la integración de dispositivos visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente del dispositivo en el sitio oficial del fabricante http://navis.ru/
