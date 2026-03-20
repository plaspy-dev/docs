---
slug: /aplicom/a9_ipex/features
id: a9_ipex-features
sidebar_label: Features
title: Aplicom - A9 IPEX Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Aplicom A9 IPEX y su integración con Plaspy para monitoreo de flotas y activos
keywords:
  - Aplicom A9 IPEX
  - Funciones A9 IPEX
  - Rastreador GPS Aplicom
  - Geocerca A9 IPEX
  - Integración CAN A9 IPEX
  - RS232 reefer A9 IPEX
  - Acelerómetro A9 IPEX
  - GPS GLONASS A9 IPEX
  - Compatibilidad Aplicom Plaspy
  - Seguimiento de activos A9 IPEX
---

# Aplicom - A9 IPEX: Características

Esta página ofrece un resumen público de las capacidades del rastreador Aplicom A9 IPEX y explica cómo estas funciones se integran con Plaspy. El enfoque es práctico y no incluye información sensible; aquí se destaca para qué está diseñado el equipo y cómo esas funciones se reflejan en Plaspy para el monitoreo de flotas y activos.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la configuración del fabricante. Para detalles técnicos específicos del dispositivo y el comportamiento de firmware más reciente consulte la documentación oficial de Aplicom enlazada más abajo.

## Resumen de características

El Aplicom A9 IPEX es un rastreador robusto orientado al trabajo de campo, diseñado para el monitoreo de vehículos y activos en entornos exigentes. Su diseño prioriza la durabilidad, la integración flexible con vehículos y varios métodos de posicionamiento para garantizar un seguimiento y reporte de eventos fiables.

- Carcasa con certificación IP67 que protege contra polvo y agua en entornos exigentes
- Posicionamiento GPS y GLONASS con asistencia A-GPS y Cell ID para mayor fiabilidad de ubicación
- Conectividad al sistema CAN para integrar señales de la red del vehículo, incluidos sistemas de frenado electrónico
- Puerto serie RS232 para lectura de unidades reefer y conexión con Thermo King, Euroscan y equipos similares de la cadena de frío
- Acelerómetro 3D integrado para detección de movimiento, medición de aceleraciones y activación por movimiento
- Soporte de geocercas con múltiples formas como círculos, rectángulos y polígonos y notificaciones de entrada/salida

## Funciones principales del Aplicom - A9 IPEX

- Carcasa resistente IP67 para instalaciones exteriores y uso pesado
- Soporte dual de GNSS compatible con GPS y GLONASS
- Posicionamiento asistido mediante A-GPS y Cell ID cuando esté disponible
- Conectividad por bus CAN para integración con sistemas del vehículo y acceso a datos
- Interfaz serie RS232 para lectura de equipos externos como controladores de refrigeración
- Acelerómetro 3D para detección de movimiento y activadores de eventos
- Configuración flexible de geocercas con formas de círculo, rectángulo y polígono
- Reporte de eventos de entrada y salida de geocercas para alertas basadas en ubicación

## Cómo funcionan estas características con Plaspy

Cuando el dispositivo está configurado para enviar sus canales de datos disponibles a Plaspy, el A9 IPEX puede transmitir información de ubicación y eventos a la plataforma para su visualización y monitoreo. Plaspy detecta protocolos comunes de rastreadores e ingiere los reportes del dispositivo para que la ubicación y los eventos se muestren junto con otros activos de su flota.

- Rutas y ubicaciones en tiempo real e históricas mostradas en los mapas de Plaspy usando datos de GPS, GLONASS y posicionamiento asistido
- Eventos de geocerca (entrada y salida) presentados como alertas y eventos en la línea de tiempo dentro de Plaspy
- Detección de movimiento y eventos derivados del acelerómetro disponibles en Plaspy cuando el acelerómetro está configurado para reportarlos
- Señales originadas en CAN y lecturas RS232 de unidades reefer pueden enviarse a Plaspy para visualización e informes cuando el equipo esté configurado para reenviar esos canales
- Conectividad del dispositivo y estado de reporte visibles en Plaspy para ayudar a monitorear la salud y el estado de reporte de la flota

## Casos de uso típicos

- Seguimiento de la ubicación de flotas para equipos de construcción y maquinaria pesada que operan en exteriores
- Monitoreo de remolques refrigerados y cadena de frío mediante integración RS232 con unidades reefer
- Supervisión de sistemas del vehículo para flotas que requieren datos de bus CAN, por ejemplo señales de frenado
- Control de acceso a sitios y cumplimiento de rutas mediante geocercas
- Detección de movimientos no autorizados usando eventos de movimiento basados en el acelerómetro
- Despliegue de activos en entornos donde se requiere resistencia al polvo y al agua

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen del firmware del dispositivo y pueden estar habilitadas, deshabilitadas o comportarse de forma diferente entre versiones
- Revisiones de hardware y kits de cableado opcionales pueden influir en las interfaces presentes o utilizables en una unidad concreta
- Se requiere configuración e instalación adecuada para que las integraciones CAN y RS232 informen datos significativos a Plaspy
- Las características de la red celular y la configuración de la SIM pueden afectar el posicionamiento asistido como Cell ID y A-GPS
- Para las especificaciones técnicas y funciones soportadas más recientes consulte la documentación de Aplicom

## Por qué usar Plaspy con estas funciones

Combinar el Aplicom A9 IPEX con Plaspy ofrece a las organizaciones una forma centralizada de recopilar, visualizar y actuar sobre los datos de seguimiento y eventos de dispositivos robustos de campo. Plaspy puede mostrar el historial de ubicaciones, la actividad de geocercas, eventos de movimiento y cualquier señal del vehículo o reefer que el dispositivo esté configurado para reenviar, ayudando a los equipos a mejorar la supervisión operativa y responder más rápidamente a los incidentes.

Para obtener más información sobre Plaspy y cómo puede ingerir y presentar datos del Aplicom A9 IPEX visite https://www.plaspy.com. Para descripciones de funciones específicas del dispositivo, notas de firmware y orientación del fabricante consulte la información en https://www.aplicom.com/
