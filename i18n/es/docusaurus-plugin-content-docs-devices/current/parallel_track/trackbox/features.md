---
slug: /parallel_track/trackbox/features
id: trackbox-features
sidebar_label: Features
title: Parallel track - Trackbox Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS Parallel Track Trackbox y su integración con Plaspy para reportes de ubicación y mapas
keywords:
  - Parallel track Trackbox
  - funciones Trackbox
  - Parallel Track rastreador GPS
  - integración Trackbox Plaspy
  - reportes de ubicación Trackbox
  - seguimiento en tiempo real Trackbox
  - integración POST Trackbox
  - seguimiento SMS Trackbox
  - rastreo de vehículos Trackbox
  - rastreo de activos Trackbox
---

# Parallel track - Trackbox — Funciones

Esta página presenta un resumen público de las funciones del rastreador GPS Parallel track - Trackbox y explica cómo puede integrarse con Plaspy para el envío de ubicación y las funciones básicas de seguimiento. Se destacan las capacidades más relevantes para usuarios de Plaspy y se aclara de qué manera el dispositivo suele enviar los datos de posición a un servicio web.

La disponibilidad exacta de funciones, el comportamiento y la experiencia del usuario pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para la configuración específica del equipo y los detalles técnicos más recientes, consulte la documentación del fabricante.

## Resumen de funciones

El Parallel track - Trackbox es un rastreador GPS compacto diseñado para enviar información de posición a intervalos programados o bajo demanda. Transmite datos de ubicación a un servicio web predefinido y admite métodos de integración web comunes, por lo que es apropiado para escenarios de seguimiento sencillos.

- Envío periódico de ubicación para visibilidad continua
- Informes de ubicación bajo demanda mediante SMS como transporte alternativo
- Entrega de datos mediante HTTP POST estándar para integración con sitios web
- Compatibilidad con proveedores de mapas web comunes para visualización
- Diseño compacto pensado para instalaciones sencillas en distintos tipos de activos

## Funciones principales de Parallel track - Trackbox

- Informes automáticos de ubicación periódicos enviados a un endpoint web configurado
- Recuperación de posición bajo demanda a través de solicitudes por SMS
- Exportación de datos mediante cargas útiles HTTP POST estándar para integración
- Diseñado para integrarse con servicios de mapas y visualización en tiempo real
- Factor de forma compacto apto para diversas instalaciones
- Pensado para el seguimiento de vehículos, equipos y personal cuando esté permitido
- Ruta de integración simple hacia servicios y plataformas web de terceros

## Cómo funcionan estas funciones con Plaspy

Al utilizarlo con Plaspy, el Trackbox puede enviar sus informes periódicos y los solicitados directamente al servicio de seguimiento de Plaspy, de modo que las posiciones se visualicen en los mapas y en los historiales. Plaspy está diseñado para aceptar informes de dispositivos y mostrar las actualizaciones de ubicación, ayudando a centralizar la supervisión de activos.

- Plaspy acepta los informes entrantes del Trackbox y los asocia con el registro del dispositivo para vistas en tiempo real e históricas
- Los reportes basados en POST pueden enviarse al endpoint de servicio de Plaspy para su ingestión
- Plaspy detecta automáticamente protocolos de rastreadores compatibles para simplificar el alta de dispositivos
- Las actualizaciones del dispositivo se muestran en los mapas y en la línea de tiempo de Plaspy para supervisión operativa
- Las solicitudes por SMS siguen siendo útiles cuando la conectividad de datos móviles es limitada; las posiciones reportadas pueden incorporarse en Plaspy si se reenvían o se intermedian a través de un endpoint web

## Casos de uso típicos

- Monitoreo de flotas para supervisión de rutas y coordinación de despachos
- Seguimiento de activos para equipos que se mueven entre ubicaciones
- Reporte de ubicación personal en escenarios permitidos y conformes a la normativa
- Seguimiento temporal para alquileres o asignaciones de corta duración
- Reporte remoto de posición cuando se prefiere una integración simple mediante POST
- Respaldo de reportes vía SMS cuando los enlaces de datos móviles principales no están disponibles

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones puede variar según la versión de firmware y la revisión de hardware del dispositivo
- Algunas funciones dependen de cómo se instale y configure el equipo por parte del instalador
- El servicio celular regional y el comportamiento de SMS pueden influir en la frecuencia y el momento de llegada de los reportes
- La implementación por parte del fabricante de las cargas útiles POST y de los enlaces de mapas puede cambiar con el tiempo
- Consulte el manual oficial del dispositivo para conocer los nombres exactos de parámetros y los pasos de configuración

## Por qué usar Plaspy con estas funciones

Emplear el Parallel track - Trackbox con Plaspy ofrece una forma simple de centralizar las actualizaciones de ubicación desde dispositivos que informan por intervalos o bajo demanda. Plaspy proporciona visualización en mapas, historial de dispositivos y visibilidad consolidada de eventos, lo que permite a los equipos supervisar el movimiento de activos sin necesidad de desarrollar un backend propio.

Para obtener más información sobre Plaspy y cómo puede recibir y presentar los informes del Trackbox, visite https://www.plaspy.com. Para los detalles específicos del dispositivo y la documentación del fabricante, consulte http://www.paralleltrack.co.uk; las funciones del equipo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es recomendable verificar la información más reciente con el fabricante.
