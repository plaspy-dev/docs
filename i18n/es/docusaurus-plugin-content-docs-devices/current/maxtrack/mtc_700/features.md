---
slug: /maxtrack/mtc_700/features
id: mtc_700-features
sidebar_label: Features
title: Maxtrack - MTC-700 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Maxtrack MTC-700 y su integración con Plaspy para monitoreo de flotas y telemetría
keywords:
  - Maxtrack MTC 700
  - características MTC 700
  - rastreador GPS Maxtrack
  - MTC 700 Plaspy
  - rastreo vehicular MTC 700
  - rastreador con Lua embebido
  - telemetría de flota Maxtrack
  - soporte satelital MTC 700
  - MTC 700 Wi Fi
  - telemetría caja negra
---

# Maxtrack - MTC-700: Características

Esta página ofrece un resumen público de las capacidades de la familia Maxtrack MTC-700 y explica cómo se aprovechan estas funciones cuando el equipo reporta a Plaspy. El foco está en las funciones visibles para el usuario y el valor operativo para el monitoreo de flotas, telemetría y escenarios de rastreo personalizados, más que en la configuración de bajo nivel o en detalles privados de implementación.

La familia MTC-700 es muy configurable y abarca varias variantes de hardware. La disponibilidad exacta de funciones depende de la versión de firmware, la revisión de hardware, variantes opcionales como la edición ADV WI FI, las decisiones de instalación y la implementación del fabricante. Verifique el comportamiento y los límites específicos con la documentación oficial de Maxtrack para el equipo que usted tenga.

## Resumen de funciones

La familia MTC-700 está orientada a casos avanzados de rastreo y telemetría, combinando lógica a bordo flexible, múltiples modos de telemetría y mecanismos de respaldo en comunicaciones. Estas capacidades están pensadas para apoyar logística, transporte colectivo, gestión de riesgos y reglas operativas personalizadas que se ejecutan directamente en el dispositivo.

- Lógica embebida y scripting configurable para que el equipo implemente reglas de negocio y acciones a medida.
- Múltiples modos de telemetría para capturar la posición estándar más flujos telemétricos adicionales donde estén soportados.
- Mecanismos de respaldo en comunicaciones, incluyendo reporte por SMS cuando no hay datos por paquete.
- Soporte de conectividad inalámbrica con periféricos en el modelo ADV WI FI para integrar tablets y teléfonos inteligentes.
- Almacenamiento tipo caja negra para retención extendida del historial telemétrico.

## Funciones principales del Maxtrack - MTC-700

- Scripting embebido y acciones con el lenguaje Lua para implementar lógica personalizada, macros y reglas de negocio directamente en el rastreador.
- Módulos a bordo descritos por el fabricante como Moon y macros que permiten personalización extendida y comportamientos automatizados.
- Soporte de múltiples modos de telemetría, incluyendo telemetría estándar, telemetría avanzada de acelerómetro y telemetría de red CAN cuando la variante de hardware expone esas entradas.
- Capacidad de doble tarjeta SIM con identificación de la SIM activa para ayudar a mantener la conectividad y gestionar la selección de operador.
- Reporte de respaldo por SMS y la posibilidad de enviar paquetes de posición vía SMS cuando no hay datos por paquete o falta alimentación externa.
- Detección de interferencias (jamming) que marca posiciones para indicar eventos de interferencia RF.
- Funcionalidad de caja negra que registra parámetros del vehículo e historial telemétrico para retenciones extendidas según configuración.
- Modos de bajo consumo para reducir la corriente cuando el vehículo está apagado y conservar batería.

## Cómo se integran estas funciones con Plaspy

Plaspy recibe flujos de posición y telemetría desde dispositivos MTC-700 compatibles y los presenta en la plataforma para supervisión operativa. La plataforma está diseñada para aceptar los reportes del equipo y mostrar ubicación, marcadores de evento y trazas históricas en una vista unificada.

- La ubicación del equipo y métricas GPS estándar como posición, fecha y hora, y velocidad se muestran en los mapas y reportes de Plaspy.
- Los modos de telemetría soportados por la unidad aparecen como canales telemétricos o registros de evento dentro de Plaspy cuando el dispositivo reporta esos tipos de datos.
- El historial de caja negra registrado en el rastreador puede subirse o reproducirse en Plaspy cuando el equipo está configurado para enviar los registros almacenados al servidor.
- Las marcas por jamming o interferencias reportadas por el rastreador se muestran como eventos para que los operadores identifiquen posibles problemas de señal.
- Plaspy detecta automáticamente muchos protocolos comunes de rastreadores y acepta conexiones al servidor de la plataforma; los equipos pueden apuntar al host del servidor Plaspy y usar los ajustes de transporte estándar soportados por la plataforma.

## Casos de uso típicos

- Operaciones logísticas de flota que requieren procesamiento de reglas en el vehículo y reportes flexibles para la gestión de rutas y manejo de excepciones.
- Gestión de riesgos donde la detección de jamming y el historial de caja negra ayudan a investigar incidentes y validar recorridos.
- Sistemas de transporte colectivo que necesitan inteligencia local en el equipo más monitoreo central para supervisión de horarios y seguridad.
- Operaciones remotas que combinan datos GPRS con respaldos por SMS o enlaces por módem satelital cuando no hay cobertura celular.
- Integraciones donde el modelo ADV WI FI se conecta con dispositivos móviles o periféricos para intercambio local de datos o interacción con el usuario.
- Despliegues personalizados que aprovechan scripts en Lua para implementar comportamientos específicos de la empresa directamente en el rastreador.

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones varía según la variante de hardware MTC-700 y el nivel de firmware; algunos modos de telemetría e interfaces de periféricos pueden estar presentes solo en revisiones específicas.
- La capacidad de comunicación satelital requiere conexión a un módem satelital externo y depende de ese equipo y su configuración.
- El modelo ADV WI FI añade conectividad inalámbrica con periféricos, pero las funciones Wi Fi son específicas de esa variante y pueden requerir configuración adicional.
- El comportamiento y los límites del respaldo por SMS dependen de los servicios del operador móvil y de la configuración del rastreador para mensajería.
- La capacidad de almacenamiento de la caja negra y la duración de la retención dependen de la configuración del dispositivo y de los recursos de almacenamiento a bordo disponibles.

## Por qué usar Plaspy con estas funciones

Usar el MTC-700 con Plaspy permite a las organizaciones centralizar la visibilidad de capacidades avanzadas del equipo mientras mantiene la inteligencia local disponible para decisiones in situ. Plaspy puede mostrar ubicación, marcadores de evento y trazas históricas subidas junto con metadatos operativos para que los equipos monitoreen flotas, investiguen incidentes y tomen acciones desde una única plataforma.

Para saber más sobre cómo Plaspy puede trabajar con rastreadores como el Maxtrack MTC-700 visite https://www.plaspy.com. Para las características específicas más recientes del equipo, notas de firmware y detalles de variantes de hardware consulte la documentación del fabricante en https://maxtrack.com.br.
