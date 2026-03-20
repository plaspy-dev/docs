---
slug: /xexun/tk_102_2/features
id: tk_102_2-features
sidebar_label: Features
title: Xexun - TK-102-2 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Xexun TK-102-2 y su integración con Plaspy para seguimiento y alertas
keywords:
  - características Xexun TK-102-2
  - rastreador GPS Xexun TK-102-2
  - características TK-102-2 Plaspy
  - registro en tarjeta SD Xexun
  - seguimiento en tiempo real Plaspy
  - alerta geovalla rastreador
  - alerta de exceso de velocidad Xexun
  - botón SOS rastreador GPS
  - vigilancia por voz rastreador
  - rastreo móvil Xexun
---

# Xexun - TK-102-2 — Características

Esta página describe el contexto público de funcionalidades del Xexun TK-102-2 cuando se utiliza con Plaspy. Explica las capacidades del equipo que son relevantes para la visibilidad y el monitoreo dentro de Plaspy, y cómo esas capacidades se traducen en flujos prácticos de seguimiento y alertas. El enfoque está en las funciones dirigidas al usuario y en las consideraciones de integración, no en detalles de protocolo a bajo nivel.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la configuración del fabricante. Siempre que sea posible, esta página se basa en la descripción del dispositivo proporcionada por el fabricante y destaca las funciones indicadas explícitamente para el TK-102-2; para detalles de implementación, cambios de firmware o variantes regionales consulte la documentación oficial del fabricante.

## Resumen general de funciones

El TK-102-2 es una evolución de la línea TK102 que prioriza una mayor autonomía de batería y el registro de posiciones en el propio dispositivo, junto con las funcionalidades básicas de rastreo. Admite tanto el sondeo en tiempo real como el registro local sin servidor, ofrece opciones de monitoreo por voz e incluye un conjunto de alertas que lo hacen apto para uso personal y en vehículos.

- Ranura para tarjeta SD en el dispositivo para guardar posiciones GPS y registros locales de ruta
- Soporte para modos de rastreo sin servidor además del reporte en vivo
- Sondeo en tiempo real y seguimiento por SMS para solicitudes inmediatas de ubicación
- Alertas por geovalla, movimiento, exceso de velocidad y batería baja
- Vigilancia por voz y números predefinidos configurables
- Diseño compacto y batería de mayor capacidad para más tiempo operativo

## Funciones principales del Xexun - TK-102-2

- Ranura para tarjeta SD para almacenamiento local de posiciones GPS y datos históricos de seguimiento
- Compatibilidad con modos de rastreo sin servidor junto con reporte en vivo a servidores
- Sondeo en tiempo real y seguimiento automático por SMS para obtener ubicaciones bajo demanda
- Capacidad de vigilancia por voz y posibilidad de autorizar hasta cinco números telefónicos preestablecidos
- Alertas de eventos que incluyen geovalla, movimiento, exceso de velocidad y batería baja
- Botón SOS para avisos inmediatos y comprobación del IMEI para identificación del dispositivo
- Seguimiento con número oculto, funciones del centro de SMS, ID de GSM y función Tlimit para control operativo

## Cómo funcionan estas funciones con Plaspy

Plaspy está diseñado para recibir y presentar informes y eventos procedentes de rastreadores compatibles. Cuando el TK-102-2 envía mensajes de ubicación o eventos al servidor, Plaspy mostrará esas actualizaciones en los mapas y en las líneas de tiempo de eventos. Plaspy también detecta automáticamente el protocolo del rastreador para simplificar la incorporación del dispositivo.

- Las actualizaciones de ubicación en vivo y los reportes periódicos aparecen en los mapas de Plaspy cuando el rastreador transmite a los servidores de Plaspy
- Las alertas como geovalla, movimiento, exceso de velocidad y batería baja se presentan como eventos en Plaspy para el monitoreo operativo
- El sondeo en tiempo real y el rastreo activado por SMS pueden aportar datos de ubicación que Plaspy registrará cuando el dispositivo transmita a la plataforma
- Las rutas históricas que se suben a la plataforma son visibles como trayectorias en Plaspy; los registros locales en la tarjeta SD permanecen en el dispositivo a menos que se suban
- Plaspy detecta automáticamente los protocolos compatibles para facilitar la configuración y puede aceptar informes enviados a d.plaspy.com en el puerto de ingestión estándar de Plaspy

## Casos de uso típicos

- Seguimiento personal o familiar donde la vigilancia por voz y el SOS se utilizan para monitorear la seguridad
- Monitoreo de vehículos para flotas pequeñas o vehículos individuales mediante sondeo en vivo y alertas
- Rastreo de activos donde el registro local en la tarjeta SD proporciona un respaldo redundante de posiciones GPS
- Flujos de recuperación y verificación de ubicación que dependen de la comprobación del IMEI y del seguimiento con número oculto
- Supervisión operativa en la que las alertas de geovalla y exceso de velocidad ayudan a hacer cumplir políticas

## Notas sobre disponibilidad de funciones

- La presencia de funciones y su comportamiento exacto dependen del firmware y la revisión de hardware del fabricante
- Algunas funciones se controlan por decisiones de instalación y por comandos de configuración enviados al rastreador
- El registro local en la tarjeta SD crea registros que son independientes del historial en el servidor a menos que el dispositivo suba esos registros
- Las variantes de firmware regionales y el comportamiento de los operadores pueden afectar las funciones basadas en SMS y los métodos de reporte en tiempo real
- Verifique siempre el comportamiento específico de las funciones y los comandos soportados contra la documentación oficial de Xexun para el firmware de su dispositivo

## Por qué usar Plaspy con estas funciones

Usar el Xexun TK-102-2 con Plaspy ofrece una combinación práctica de registro local en el dispositivo y monitoreo centralizado. Plaspy presenta actualizaciones de ubicación y alertas de eventos en una vista unificada, permitiendo que organizaciones y particulares supervisen movimientos, respondan a alertas y revisen reportes históricos cuando el dispositivo transmite a la plataforma.

Si desea conocer más sobre cómo Plaspy puede trabajar con el TK-102-2 y otros rastreadores compatibles, visite https://www.plaspy.com. Para detalles específicos y actuales sobre funciones del dispositivo, notas de firmware y orientación del fabricante consulte el sitio oficial de Xexun https://www.xexun.com/.
