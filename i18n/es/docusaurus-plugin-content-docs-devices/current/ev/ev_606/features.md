---
slug: /ev/ev_606/features
id: ev_606-features
sidebar_label: Features
title: EV - EV-606 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador personal y de activos EV-606 y su integración con Plaspy
keywords:
  - EV EV-606
  - funciones EV-606
  - rastreador GPS EV-606
  - rastreador EV Plaspy
  - rastreador personal y de activos
  - sensor G 3D
  - monitoreo de voz
  - registro de datos 60000
  - reenvío en zonas sin GPRS
  - SOS geocerca
---

# EV - EV-606 Características

Esta página describe el contexto público de uso del rastreador EV EV-606 con Plaspy. Se centra en las capacidades visibles para el usuario, cómo se presentan dentro de la plataforma Plaspy y qué pueden esperar las organizaciones al integrar este modelo para seguimiento personal o de activos. Los detalles aquí están pensados para ayudar en la planificación operativa y la selección del dispositivo, no para sustituir la documentación del fabricante.

La disponibilidad exacta de funciones del EV-606 puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Siempre que es posible, esta página resalta funciones descritas por el fabricante; sin embargo, el comportamiento final depende de la configuración del dispositivo, estado del firmware y ajustes aplicados en la instalación.

## Resumen de características

El EV-606 es un rastreador compacto para uso personal y de activos, diseñado para monitoreo prolongado, asistencia en interiores y alertas basadas en eventos. Combina posicionamiento satelital con fallback a CellLocate, registro local persistente, detección de movimiento y capacidades de audio para ofrecer visibilidad útil en escenarios de flota, activos y seguridad personal.

- Rastreo en tiempo real con GPS y fallback a CellLocate para mejorar la localización en entornos cubiertos o interiores
- Sensor G 3D integrado para detección de movimiento, alertas por impacto y comportamiento dependiente de energía
- Batería recargable y reemplazable diseñada para prolongar el tiempo de operación entre cargas
- Registro en el dispositivo con 8 MB de memoria flash que almacena hasta 60,000 puntos de ubicación para recuperación posterior
- Monitorización de voz y comunicación bidireccional para supervisión de audio o conversaciones directas
- Alarmas por eventos que incluyen botón SOS, geocerca, exceso de velocidad, movimiento y pérdida/recuperación de señal GPS

## Características principales del EV-606

- Soporte dual de posicionamiento usando GPS y fallback a CellLocate para mejor cobertura en áreas cerradas o con protección
- Sensor G 3D que proporciona detección de movimiento, disparo de alarmas por impacto y reportes de eventos basados en movimiento
- Arquitectura de batería recargable y reemplazable para mantenimiento en campo y operación prolongada
- Capacidad de registro local con 8 MB de flash y almacenamiento para hasta 60,000 ubicaciones grabadas
- Capacidades de monitorización de voz y comunicación bidireccional para interacción de audio remota
- Funcionalidad de alarma por exceso de velocidad y geocerca para vigilancia de perímetros y comportamiento
- Botón de emergencia SOS para alertas inmediatas ante eventos críticos
- Actualizaciones de firmware por aire (OTA) para recibir mejoras del fabricante sin necesidad de flasheo manual

## Cómo funcionan estas funciones con Plaspy

Cuando el EV-606 está conectado a Plaspy, sus datos de ubicación y eventos pasan a formar parte del tablero y los informes de la plataforma. Plaspy detecta automáticamente protocolos compatibles del rastreador y presenta ubicación, eventos e historial para uso operativo y supervisión.

- Las ubicaciones en tiempo real e históricas del dispositivo están disponibles en Plaspy para visualización en mapa y revisión de rutas
- Los eventos de movimiento e impacto reportados por el sensor G 3D aparecen como actividad o alarmas para revisión por el operador
- Las alertas de SOS, geocerca, exceso de velocidad, movimiento y pérdida de GPS se muestran como notificaciones y pueden integrarse en flujos de trabajo de monitoreo
- Las ubicaciones registradas en el dispositivo se suben y reconcilian para que Plaspy muestre un historial continuo incluso cuando el dispositivo estuvo offline
- Los eventos de voz y la capacidad de comunicación bidireccional se indican en notas del dispositivo y en los registros de actividad cuando la integración lo soporta
- Las actualizaciones de firmware por aire y los cambios en el estado del dispositivo se representan como información de estado dentro de Plaspy

## Casos de uso típicos

- Rastreo de seguridad personal para trabajadores aislados, cuidadores y personas vulnerables que se benefician del botón SOS y la comunicación bidireccional
- Monitoreo de activos para equipos que se trasladan entre interiores y exteriores, donde CellLocate mejora la ubicación
- Escenarios de seguimiento de larga duración donde el registro en el dispositivo y las baterías recargables reducen las visitas de mantenimiento
- Supervisión de vehículos o pequeñas flotas donde las geocercas y las alertas por exceso de velocidad apoyan políticas de cumplimiento y ruteo
- Situaciones de investigación o recuperación que usan alarmas de movimiento e impacto para detectar manipulación o manejo inesperado
- Contextos que requieren contacto de audio o monitorización como parte de reportes remotos o verificación de seguridad

## Notas sobre disponibilidad de funciones

- El nivel de firmware puede afectar las alarmas disponibles, el comportamiento del registro y las funciones de voz; confirme las notas de lanzamiento del firmware para el comportamiento exacto
- Las versiones de hardware y las variantes regionales pueden cambiar el soporte de radio o el comportamiento de CellLocate; verifique la etiqueta del dispositivo y la documentación del fabricante
- Las decisiones de instalación, como la ubicación del dispositivo y la cobertura celular local, influirán en el desempeño del GPS y la eficacia del fallback a CellLocate
- La capacidad y retención del registro en el dispositivo dependen del intervalo de muestreo configurado y de funciones activas como grabación de voz o de alarmas
- Las actualizaciones de firmware proporcionadas por el fabricante pueden habilitar o modificar funciones; utilice las instrucciones oficiales del fabricante para las actualizaciones OTA

## Por qué usar Plaspy con estas funciones

Integrar el EV-606 con Plaspy otorga a las organizaciones una vista centralizada de datos de ubicación y eventos que es fácil de monitorear y sobre la cual actuar. Plaspy captura tanto los reportes en tiempo real como el historial almacenado en el dispositivo, de modo que los equipos pueden combinar alertas inmediatas con revisiones forenses de ubicaciones registradas. La plataforma está diseñada para presentar eventos relacionados con movimiento, alarmas y audio en contexto, ayudando a los operadores a tomar decisiones oportunas.

Para saber más sobre Plaspy y cómo la plataforma puede gestionar rastreadores como el EV-606, visite https://www.plaspy.com. Para información técnica más actual y específica del dispositivo, notas de firmware e instrucciones oficiales, verifique los detalles con el fabricante en http://www.eviewltd.com/.
