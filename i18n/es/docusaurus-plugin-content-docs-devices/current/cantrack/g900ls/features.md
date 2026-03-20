---
slug: /cantrack/g900ls/features
id: g900ls-features
sidebar_label: Features
title: CanTrack - G900LS Features
sidebar_class_name: menu_item_tracker
description: Guía pública de características del rastreador CanTrack G900LS y su compatibilidad con Plaspy para seguimiento y alertas en tiempo real
keywords:
  - CanTrack G900LS
  - características G900LS
  - rastreador GPS CanTrack
  - compatibilidad G900LS Plaspy
  - rastreo de vehículos
  - rastreador GPS 4G
  - rastreador para gestión de flotas
  - rastreo en tiempo real
  - inmovilizador remoto
  - batería de respaldo
---

# CanTrack - Características del G900LS

Esta página ofrece un panorama público de las capacidades del CanTrack G900LS y cómo se integran con Plaspy para seguimiento, monitoreo y control remoto. Está diseñada para ayudar a operadores de flotas, propietarios de vehículos e integradores a entender qué información puede reportar el equipo y cómo se presenta en Plaspy, sin entrar en detalles de implementación privados.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el cableado o la instalación específica, y la configuración del fabricante. Para la configuración del dispositivo, notas de cambios de firmware y especificaciones técnicas actuales consulte la documentación y las fichas técnicas del fabricante.

## Resumen de características

El G900LS es un rastreador GPS 4G de instalación fija pensado para aplicaciones profesionales en vehículos. Proporciona actualizaciones frecuentes de posición, telemetría del vehículo y alarmas configurables para que los equipos de despacho y operaciones puedan supervisar activos en Plaspy casi en tiempo real.

- Actualizaciones de posición en tiempo real y registro histórico de rutas para visibilidad operativa y auditorías.
- Telemetría del vehículo, incluyendo detección de ignición ACC y alarmas por movimiento o exceso de velocidad.
- Detección de corte de alimentación con batería de respaldo integrada para funcionamiento autónomo breve y alertas por manipulación.
- Control remoto opcional mediante relé para flujos de trabajo de inmovilización y respuesta ante robo cuando el hardware lo permite.
- Opciones de instalación flexibles con arneses de 4 y 8 pines para adaptarse a distintos cableados y escenarios de servicio.

## Funciones principales del CanTrack - G900LS

- Conectividad global 4G LTE con conmutación a GSM para mantener los reportes en distintas regiones.
- Receptor GNSS de alta precisión con seguimiento multicanal y rendimiento de localización con CEP inferior a 5 metros.
- Reporte de estado de ignición ACC para detección de viajes y registro de tiempo de funcionamiento.
- Alarmas por eventos: movimiento, exceso de velocidad, corte de energía y reportes de cambio de ángulo.
- Batería de respaldo integrada para notificar pérdida de energía y permitir operación autónoma por cortos periodos.
- Salida de relé opcional para corte remoto de combustible o alimentación cuando el dispositivo está equipado e instalado para ello.
- Variantes de arnés de cableado de 4 pines y 8 pines para cubrir diferentes requisitos de instalación.
- Gestión remota mediante comandos de plataforma y SMS para APN, configuración de servidor, consultas de estado y ajuste de intervalos de envío.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe posición y telemetría del G900LS para que los equipos de operaciones combinen el seguimiento en vivo con reglas, geocercas e informes. Plaspy detecta automáticamente el protocolo del rastreador y muestra los eventos del dispositivo junto con las herramientas de mapa e informes para apoyar la toma de decisiones.

- Ubicación en vivo mostrada en los mapas de Plaspy y trazas históricas disponibles para reproducción e informes.
- Campos de telemetría como estado de ignición y detección de movimiento alimentan las reglas y disparadores de alertas en Plaspy.
- Alarmas por eventos como corte de energía y movimiento generan notificaciones para los flujos de trabajo de despacho y seguridad.
- Comandos remotos de inmovilización o control de relé pueden enviarse desde Plaspy cuando el dispositivo y la instalación permiten control remoto.
- Intervalos de carga configurables y habilitación de alarmas le permiten balancear frecuencia de actualización y consumo de datos desde Plaspy.

## Casos de uso típicos

- Gestión de flotas para supervisión de rutas, coordinación de despachos y generación de informes de uso.
- Operaciones antirobo que combinan alarmas por movimiento y corte de energía con control remoto de relé.
- Verificación en logística y entregas usando historial preciso de posiciones y registros de eventos.
- Supervisión en alquiler y leasing con monitoreo de ignición e intervalos de reporte configurables.
- Flujos de trabajo de monitoreo y recuperación de vehículos que priorizan respuestas según eventos de velocidad y movimiento.

## Notas sobre disponibilidad de funciones

- Las variantes de hardware y la elección de arnés de cableado influyen en qué entradas y funciones de relé están presentes en cada unidad.
- Las versiones de firmware pueden añadir, refinar o cambiar campos de telemetría, comportamiento de alarmas y soporte de comandos remotos.
- Las variantes regionales de bandas celulares afectan la cobertura de red y deben verificarse antes de desplegar en un mercado nuevo.
- El control remoto de relé y algunos comandos de plataforma requieren tanto soporte de hardware en el dispositivo como una instalación correcta.
- Siempre confirme las capacidades del dispositivo y la compatibilidad de firmware con la documentación del fabricante antes de definir procedimientos operativos.

## Por qué usar Plaspy con estas funciones

Combinar el CanTrack G900LS con Plaspy ofrece a las organizaciones una forma unificada de ver ubicaciones, monitorear el estado de los vehículos y actuar sobre alarmas desde una sola plataforma. Plaspy agrega datos de ubicación y eventos en tiempo real para que despachadores y gestores de flota puedan aplicar reglas, generar informes y ejecutar comandos remotos como parte de las operaciones diarias.

Para obtener más información sobre cómo Plaspy puede trabajar con el G900LS y otros dispositivos compatibles visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y guías de instalación verifique los detalles con el fabricante en https://www.cantrackgps.com/
