---
slug: /castel/idd_213e/features
id: idd_213e-features
sidebar_label: Features
title: Castel - IDD-213E Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Castel IDD-213E y su integración con Plaspy para seguimiento y diagnóstico remoto de vehículos
keywords:
  - Castel IDD-213E
  - Funciones Castel IDD-213E
  - Rastreador GPS Castel
  - IDD-213E OBD
  - Rastreador OBD II
  - Rastreador compatible J1939
  - Rastreador para diagnóstico vehicular
  - Seguimiento de flotas Plaspy
  - IDD-213E rastreador 3G
  - Rastreador diagnóstico Castel
---

# Castel - IDD-213E: Características

Esta página describe el contexto público de funciones al usar el Castel IDD-213E con Plaspy. Resume las capacidades del dispositivo relevantes para seguimiento de ubicación, diagnóstico vehicular y monitoreo de flotas cuando el IDD-213E se conecta a una plataforma de backend como Plaspy. El contenido se centra en funciones prácticas para el usuario y en cómo suelen integrarse en un flujo de trabajo de gestión de flotas.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y la implementación del fabricante. Cuando procede, Plaspy presenta los datos y eventos que reporta el IDD-213E, pero usted debe verificar las especificaciones del dispositivo con el fabricante y revisar las notas de firmware antes del despliegue.

## Resumen de funciones

El Castel IDD-213E es un dispositivo todo en uno de diagnóstico a bordo y rastreo diseñado para vehículos particulares y comerciales. Combina una instalación tipo plug-and-play con captura de datos diagnósticos e informe de ubicación en tiempo real para soportar diagnósticos remotos y monitoreo operativo.

- Conexión plug-and-play estilo OBD que simplifica la instalación en vehículos compatibles
- Lectura de información ECU como velocidad, RPM y temperatura del refrigerante para visibilidad del estado del vehículo
- Captura de códigos de falla y datos de captura en el momento del fallo (freeze frame) para apoyar la resolución de problemas y la planificación de mantenimiento
- Provisión de estadísticas de kilometraje y consumo de combustible útiles para análisis de rendimiento y costos de flota
- Monitoreo de comportamiento de conducción, incluyendo exceso de velocidad, aceleraciones o frenadas bruscas y tiempo prolongado de ralentí
- Conectividad 3G para transmisión continua de datos y capacidad de alarmas vía SMS para alertas inmediatas

## Funciones principales del Castel - IDD-213E

- Compatible con protocolos OBD II EOBD y estándares industriales J1939 y J1708 para amplio soporte de vehículos
- Captura a bordo de parámetros ECU incluyendo velocidad, RPM, temperatura del refrigerante del motor y códigos de diagnóstico
- Recolección de datos de captura en el momento del fallo (freeze frame) para preservar información contextual cuando se detecta una falla
- Seguimiento de kilometraje e informes de consumo de combustible para métricas operativas y reportes
- Monitoreo de comportamiento de conducción que abarca exceso de velocidad, eventos de aceleración o frenado brusco y tiempos de ralentí
- Instalación plug-and-play diseñada para conexión rápida al puerto de diagnóstico del vehículo
- Conectividad celular 3G para enlace de datos confiable y mensajes de alarma vía SMS
- Capacidad de conexión a servidores backend usando direcciones por dominio o IP para integrarse con sistemas de gestión de flotas

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere y presenta los datos del IDD-213E para ofrecer a los responsables de flota visibilidad accionable y supervisión remota. Plaspy detecta automáticamente los protocolos de rastreador compatibles y muestra los reportes del dispositivo en la plataforma para que los equipos puedan monitorear vehículos sin mapeo manual de protocolos.

- Rastreo de ubicación en tiempo real y reproducción histórica de rutas basados en los reportes de posición del dispositivo
- Visualización de parámetros diagnósticos reportados y códigos de falla en las vistas de detalle del vehículo y en los registros de eventos
- Registros agregados de kilometraje y consumo de combustible para reportes y análisis de tendencias
- Detección de eventos y alertas por exceso de velocidad, aceleraciones o frenadas bruscas y tiempo de ralentí prolongado
- Notificaciones o alarmas que Plaspy recibe cuando el dispositivo envía avisos por SMS o reportes de fallas
- Indicadores centralizados de conectividad y salud del dispositivo para confirmar que el IDD-213E está reportando al backend

## Casos de uso típicos

- Gestión de flotas para vehículos comerciales que requieren visibilidad combinada de ubicación y diagnóstico
- Diagnóstico remoto para reducir el tiempo de reparación al exponer DTC y datos de captura en el momento del fallo al equipo de servicio
- Operaciones de renta de autos para control de kilometraje, monitoreo de uso e informes de comportamiento
- Flujos de trabajo de seguros vehiculares que utilizan datos diagnósticos y de comportamiento para evaluar riesgos
- Escuelas de conducción y programas de capacitación para monitorear patrones de desempeño del conductor
- Talleres de servicio que desean datos prediagnósticos antes de que el vehículo llegue para su reparación

## Notas sobre disponibilidad de funciones

- El conjunto de funciones y los nombres de parámetros pueden cambiar con actualizaciones de firmware; confirme las capacidades para la versión de firmware en uso
- Las revisiones de hardware y variantes regionales pueden afectar los protocolos soportados o la telemetría disponible
- El método de instalación y el acceso al puerto de diagnóstico del vehículo pueden influir en qué parámetros ECU puede leer el dispositivo
- El comportamiento de alarmas por SMS depende de la disponibilidad de la red móvil y de la configuración de la SIM usada en el dispositivo
- El comportamiento de integración en Plaspy depende de que el dispositivo reporte esos campos al backend; Plaspy presenta los datos que el rastreador envía

## Por qué usar Plaspy con estas funciones

Usar el Castel IDD-213E con Plaspy combina la información diagnóstica a bordo y la conciencia de ubicación en una vista operativa única. Plaspy organiza ubicación, parámetros diagnósticos, métricas de viaje y alertas de eventos para que los equipos de operaciones puedan priorizar mantenimiento, vigilar la seguridad de los conductores y comprender la utilización de los vehículos desde una plataforma central.

Si usted quiere explorar cómo Plaspy puede presentar y actuar sobre los datos del IDD-213E, obtenga más información sobre Plaspy en https://www.plaspy.com. Para detalles técnicos más actuales y específicos del dispositivo, notas de firmware y orientación del fabricante, por favor verifique la información en el sitio oficial de Castel http://www.castelecom.com/ .
