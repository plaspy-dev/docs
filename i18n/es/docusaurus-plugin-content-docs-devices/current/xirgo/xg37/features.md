---
slug: /xirgo/xg37/features
id: xg37-features
sidebar_label: Features
title: Xirgo - XG37 Features
sidebar_class_name: menu_item_tracker
description: Resumen de características del rastreador Xirgo XG37 y su compatibilidad con Plaspy para telemática de flotas, CANBUS, geocercas y cumplimiento
keywords:
  - Xirgo XG37
  - XG37 características
  - Rastreador GPS Xirgo XG37
  - XG37 CANBUS
  - XG37 MQTT TLS
  - Notificaciones de geocerca XG37
  - Tacógrafo XG37
  - Rastreador compatible con Plaspy
  - Telemetría de flotas
  - Telemetría vehicular
---

# Xirgo - XG37 Características

Esta página ofrece el contexto público de funcionalidades para el uso del rastreador Xirgo XG37 con Plaspy. Resume las capacidades prácticas del modelo, cómo esas capacidades se integran en Plaspy para rastreo en tiempo real y visibilidad operativa, y qué pueden esperar las flotas al evaluar el equipo para flujos de trabajo de telemática y cumplimiento.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el modelo regional y los detalles de la instalación o el cableado en el vehículo. Para conocer el comportamiento técnico más reciente y específico del dispositivo, consulte la documentación oficial del fabricante y las notas de la versión de Xirgo.

## Resumen de características

El XG37 es una unidad telemática robusta para vehículos diseñada para aportar posición en vivo, telemetría del vehículo y datos de cumplimiento a plataformas como Plaspy. Su diseño prioriza el transporte seguro de telemetría, acceso a datos vehiculares cuando el vehículo lo soporta y flexibilidad para integraciones de flota.

- Reporte GNSS en tiempo real para rastreo y visualización en mapas de Plaspy.
- Acceso completo a telemetría CANBUS cuando el vehículo lo soporta, para señales de motor y diagnóstico.
- Transferencia de datos basada en MQTT con TLS 1.2 para cifrar la telemetría hacia Plaspy.
- Notificaciones instantáneas de geocercas para cumplimiento de rutas, control de patios y detección antirobo.
- Capacidad de descarga remota de tacógrafos para respaldar registros de horas de conducción y procesos de cumplimiento.
- SDK en el dispositivo y soporte para algoritmos personalizados que permiten filtrado a bordo y lógica de borde.

## Características principales del Xirgo - XG37

- Formato telemático resistente pensado para instalaciones profesionales en flotas.
- Acceso completo a datos CANBUS para capturar señales de motor, encendido y diagnóstico cuando estén disponibles.
- Telemetría segura mediante MQTT con TLS 1.2 para proteger los datos en tránsito.
- Opciones de conectividad celular según modelo para cobertura amplia y rutas de respaldo.
- Motor de notificaciones de geocerca instantáneas para alertas basadas en eventos.
- Soporte para descarga remota de tacógrafos, útil en requisitos de cumplimiento normativo.
- SDK del dispositivo para implementar escenarios personalizados y reducir telemetría innecesaria.
- Configuraciones de batería opcionales para operaciones en respaldo y mayor flexibilidad de instalación.

## Cómo se integran estas características con Plaspy

Plaspy consume la telemetría y los eventos que genera el XG37 y los presenta dentro de un entorno único de gestión de flotas para monitoreo e informes. Plaspy detecta automáticamente protocolos de rastreadores compatibles y puede mostrar la ubicación del dispositivo y la telemetría vehicular soportada sin que usted necesite configurar protocolos detallados.

- Visualización en vivo de ubicación y rumbo en los mapas de Plaspy para conciencia operativa en tiempo real.
- Telemetría CANBUS enviada a Plaspy para diagnóstico vehicular, monitoreo de estado y análisis cuando el vehículo provee esas señales.
- Alertas de geocerca y eventos de entrada/salida entregados a Plaspy para flujos de trabajo de cumplimiento y seguridad.
- Archivos de tacógrafo remotos y eventos relacionados disponibles para recolección e informes dentro de Plaspy.
- Transporte seguro usando MQTT con TLS 1.2 que ayuda a mantener la integridad de los datos entre el dispositivo y Plaspy.
- El SDK del dispositivo puede usarse para implementar reglas de muestreo y eventos que reduzcan el ruido y enfoquen a Plaspy en los eventos significativos.

## Casos de uso típicos

- Localización de flotas y seguimiento de activos para despacho y gestión de utilización.
- Flujos de trabajo de cumplimiento regulatorio mediante descargas remotas de tacógrafos e informes centralizados.
- Cumplimiento de rutas y control perimetral usando notificaciones instantáneas de geocerca.
- Planificación de mantenimiento basada en telemetría utilizando señales de diagnóstico del vehículo cuando estén disponibles.
- Monitoreo antirobo y respuesta rápida mediante posición en vivo y alertas.
- Implementaciones de lógica de borde que envían sólo los eventos relevantes a Plaspy para reducir el volumen de datos.

## Notas sobre disponibilidad de funciones

- El soporte de funciones depende del modelo XG37 específico y su firmware; algunas capacidades pueden estar presentes sólo en variantes regionales o de hardware seleccionadas.
- La disponibilidad de datos CANBUS está sujeta a la marca y modelo del vehículo y a cómo se integra el rastreador en la red del vehículo.
- La funcionalidad de tacógrafo remoto requiere el hardware y la configuración adecuados y puede estar restringida por regulaciones regionales.
- Las baterías opcionales y características accesorias varían según la configuración y deben confirmarse antes de la compra.
- Siempre verifique la versión de firmware instalada y la configuración del dispositivo al planear integraciones con Plaspy.

## Por qué usar Plaspy con estas características

Combinar el XG37 con Plaspy consolida ubicación, telemetría vehicular y datos de cumplimiento en una sola plataforma, lo que brinda a los equipos operativos una visión más clara del estado de la flota y ayuda a optimizar los procesos de reporte y alerta. El soporte del equipo para transporte de telemetría seguro y un SDK en el dispositivo facilita reducir el ruido de datos y entregar los eventos que más importan a las operaciones.

Para saber más sobre cómo Plaspy puede trabajar con el XG37 y otros rastreadores de flotas visite https://www.plaspy.com. Para los detalles técnicos específicos del dispositivo, notas de firmware y especificaciones oficiales consulte la documentación de Xirgo en https://xirgo.com/ ya que las funciones e implementaciones del fabricante pueden cambiar con el tiempo.
