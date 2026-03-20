---
slug: /cantrack/vsl100/features
id: vsl100-features
sidebar_label: Features
title: CanTrack - VSL100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del CanTrack VSL100, limitador de velocidad GPS y compatibilidad con Plaspy
keywords:
  - Funciones de CanTrack VSL100
  - Rastreador GPS CanTrack VSL100
  - Limitador de velocidad VSL100
  - Compatibilidad VSL100 con Plaspy
  - Capacidades CanTrack VSL100
  - Gobernanza de velocidad para flotas
  - Rastreador GPS con detección de manipulación
  - Detección de inhibidores de señal
  - Impresora portátil de infracciones
  - Rastreador GNSS de alta precisión
---

# CanTrack - Funciones del VSL100

Esta página ofrece un resumen público de las funciones del CanTrack VSL100 y explica cómo sus capacidades se mapean dentro de Plaspy. Se enfoca en detalles no sensibles de cara al usuario sobre localización, gobernanza de velocidad, detección de manipulación y de inhibidores, generación de evidencia impresa en sitio y los tipos de telemetría que el equipo puede enviar a Plaspy para supervisión y reportes de flotas.

La disponibilidad exacta y el comportamiento de cada función pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. Los fabricantes pueden modificar el firmware o añadir opciones, por lo que el resumen a continuación describe las capacidades típicas y públicamente documentadas del VSL100 en relación con la integración en Plaspy.

## Resumen de funciones

El CanTrack VSL100 combina limitación de velocidad ejecutable, seguimiento GNSS de alta precisión y protecciones contra manipulación, pensado para vehículos pesados y flotas que requieren cumplimiento documentado y supervisión en tiempo real. En la práctica, el dispositivo ofrece controles operativos y registros auditables que alimentan Plaspy para la monitorización centralizada.

- Gobernanza de velocidad ejecutable con límites preconfigurados y avisos previos configurables para reducir incidentes de exceso de velocidad.
- Seguimiento GNSS en tiempo real con alta sensibilidad y precisión reportada para mantener conciencia continua de la ubicación en Plaspy.
- Resistencia a manipulación y detección de inhibidores que generan alarmas cuando se detecta interferencia o pérdida de señal.
- Mini impresora portátil para imprimir informes de infracciones recientes y proporcionar evidencia física durante inspecciones.
- Varios métodos de configuración y recuperación de datos, incluyendo herramienta de PC, GPRS, SMS y descarga por USB de datos históricos recientes.
- Batería de respaldo a corto plazo y amplio rango de tensión de entrada para mantener el reporte durante interrupciones breves de alimentación.

## Funciones principales de CanTrack - VSL100

- Limitación y gobernanza de velocidad ejecutable con máximos predefinidos y umbrales de aviso alineados a la política de la flota.
- Seguimiento GNSS de alta precisión con receptor multicanal para actualizaciones de posición fiables y mejor desempeño de fix.
- Carcasa resistente a manipulación y lógica de detección que activa alarmas ante sospecha de interferencia física.
- Detección de inhibidores con notificación de alarma cuando se observa interferencia o pérdida de señal prolongada.
- Soporte para mini impresora portátil que permite generar informes de infracciones de hasta una hora para inspectores o conductores en carretera.
- Canales de configuración múltiples, incluidos herramientas de configuración en PC, configuración remota por GPRS y comandos SMS.
- Registro local de datos y descarga por USB de históricos recientes para auditorías y análisis offline.
- Batería de respaldo y amplio rango de voltaje de entrada para preservar operación a corto plazo durante cortes de energía.

## Integración con Plaspy

Al integrar el VSL100 con Plaspy, el dispositivo transmite ubicación, estados y eventos para que los operadores de flota puedan ver telemetría en tiempo real, auditar infracciones y configurar alertas de forma centralizada. Plaspy ingiere los eventos del dispositivo y preserva registros históricos para informes y flujos operativos.

- Las ubicaciones y actualizaciones de seguimiento en tiempo real aparecen en los paneles de Plaspy, proporcionando visibilidad continua de las posiciones de los vehículos.
- Los eventos de gobernanza de velocidad y las infracciones registradas quedan logadas en Plaspy para que los operadores revisen incidentes y generen reportes de cumplimiento.
- Las alarmas por manipulación e inhibidores se entregan a Plaspy como eventos, permitiendo a los administradores investigar y responder a posibles interferencias.
- Los datos históricos recuperados del dispositivo o subidos a Plaspy respaldan análisis posteriores al incidente y auditorías offline.
- Los informes impresos en sitio proporcionan evidencia física inmediata, mientras que Plaspy mantiene el historial electrónico canónico de eventos.

## Casos de uso típicos

- Aplicar límites de velocidad corporativos o regulatorios en flotas de camiones y reparto para reducir riesgos y documentar cumplimiento.
- Supervisar vehículos de construcción y equipos en obra donde el control de velocidades y las alertas inmediatas mejoran la seguridad en sitio.
- Gestionar el transporte de mercancías peligrosas o reguladas, donde la detección de manipulación y los registros auditables son imprescindibles.
- Apoyar flotas de transporte de pasajeros y autobuses con infracciones documentadas y reportes centralizados para reguladores.
- Integrar seguimiento en tiempo real y eventos de velocidad en flujos de despacho y logística para optimizar decisiones de ruta y respuesta.
- Generar informes forenses para auditorías de cumplimiento combinando logs del dispositivo y registros históricos de Plaspy.

## Notas sobre disponibilidad de funciones

- Las funciones exactas y los rangos de parámetros dependen de la versión de firmware y la configuración del fabricante; el comportamiento puede cambiar entre versiones de firmware.
- Revisiones de hardware y variantes regionales pueden afectar las interfaces disponibles, las bandas soportadas o accesorios incluidos como la mini impresora.
- Las decisiones de instalación y el cableado del vehículo pueden influir en qué sensores y salidas quedan activos; verifique las opciones instaladas durante el despliegue.
- Algunos umbrales de evento y comportamientos de ejecución son configurables y pueden ser establecidos por el instalador o el administrador de la flota.
- Consulte siempre la documentación del fabricante para las especificaciones técnicas definitivas y las configuraciones soportadas.

## Por qué usar Plaspy con estas funciones

Combinar el VSL100 con Plaspy centraliza la ubicación, los eventos de gobernanza de velocidad y las alarmas por manipulación en una única plataforma de monitorización y reportes. Esta combinación ayuda a los gestores de flota a mantener conciencia situacional, responder rápidamente a incidentes y conservar registros auditables para cumplimiento y análisis operativo.

Para obtener más información sobre cómo Plaspy puede ingerir y presentar telemetría y eventos del VSL100, visite https://www.plaspy.com. Para la información más reciente sobre características del dispositivo, notas de firmware y orientación del fabricante, verifique los detalles en la web de CanTrack https://www.cantrackgps.com/ ya que el hardware y el firmware pueden cambiar con el tiempo.
