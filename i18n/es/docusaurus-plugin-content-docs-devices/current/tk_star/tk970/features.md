---
slug: /tk_star/tk970/features
id: tk970-features
sidebar_label: Features
title: TK-Star - TK970 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS TK-Star TK970 y su integración con Plaspy para seguimiento y monitoreo de flotas
keywords:
  - Características TK-Star TK970
  - Rastreador GPS TK970
  - Compatibilidad TK970 con Plaspy
  - Rastreador vehicular TK970
  - Rastreador GPS para motocicleta TK970
  - Rastreador GPS 4G TK970
  - TK970 NB IoT
  - Corte de motor por relé TK970
  - Geocercas y alertas TK970
  - Reproducción histórica de rutas TK970
---

# TK-Star - Características del TK970

Esta página ofrece un resumen público de las capacidades del TK-Star TK970 y explica cómo pueden aprovecharse con Plaspy para seguimiento en tiempo real, alertas y reportes históricos. Está redactada para describir funciones prácticas y no sensibles, así como los comportamientos esperados cuando el TK970 se integra con la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. Siempre verifique las capacidades específicas del equipo y el comportamiento del firmware con la documentación del fabricante al planear despliegues o integraciones avanzadas.

## Resumen de funciones

El TK970 es un rastreador vehicular 4G compacto diseñado para motocicletas, autos particulares, flotas de alquiler y activos vehiculares mixtos. Combina posicionamiento multiconstelación GNSS, opciones celulares extendidas, controles de seguridad en el dispositivo e informes de eventos para soportar rastreo, respuesta ante robo y supervisión de flotas cuando se conecta a Plaspy.

- Posicionamiento multimodo con GPS, BeiDou y GLONASS, además de respaldo por red para mejorar cobertura en interiores y zonas urbanas.
- Conectividad celular que incluye variantes 4G LTE, NB IoT, Cat M1 y 2G para adaptarse a despliegues regionales.
- Funciones de seguridad y control remoto como SOS, corte remoto de motor u oil por relé, alarma por vibración y micrófono integrado para monitoreo de voz.
- Factor de forma compacto y amplio rango de tensión de operación para una instalación flexible en motocicletas y vehículos.
- Informes de eventos en el propio dispositivo como geocercas, exceso de velocidad, movimiento y alertas por vibración, con historial de ruta y reproducción en el servidor.
- Pequeña batería interna de respaldo que proporciona tiempo de espera corto cuando se pierde la alimentación externa.

## Funciones principales del TK-Star TK970

- Posicionamiento GNSS multiconstelación compatible con GPS, BeiDou (BD) y GLONASS para fijaciones de ubicación más consistentes.
- Varias opciones de transporte celular incluyendo variantes regionales 4G LTE además de NB IoT, Cat M1 y retroceso a 2G.
- Salida por relé para corte y reanudación remotos de motor u oil, apoyando respuestas anti robo y flujos de inmovilización.
- Botón SOS y sensor de vibración para detección de manipulación y movimiento con reporte de eventos.
- Micrófono integrado que permite monitoreo de voz remoto donde esté permitido por la normativa local y la configuración del dispositivo.
- Alarmas y eventos telemáticos en el dispositivo incluyendo incumplimiento de geocerca, notificaciones por exceso de velocidad y alertas por movimiento.
- Batería interna de respaldo (~180 mAh) para proporcionar tiempo limitado de espera cuando se interrumpe la alimentación externa.
- Dimensiones compactas y amplio rango de tensión de operación adecuadas para motocicletas, automóviles y activos vehiculares mixtos.

## Cómo funcionan estas funciones con Plaspy

Cuando el TK970 está instalado y configurado para reportar a Plaspy, las posiciones y los mensajes de evento se transmiten a la plataforma Plaspy para su visualización, notificación y almacenamiento histórico. Plaspy detecta automáticamente muchos protocolos de rastreadores e ingiere datos de ubicación y eventos en paneles y reportes de flota.

- Actualizaciones de ubicación en tiempo real y visualización en mapa en Plaspy basadas en coordenadas GNSS y posiciones por respaldo de red.
- Enrutamiento de eventos para SOS, alarmas por vibración, incumplimiento de geocerca y notificaciones por exceso de velocidad para que los operadores reciban alertas oportunas.
- Acciones de control remoto, como el corte y la reanudación del motor por relé, que pueden ejecutarse y registrarse a través de las interfaces de Plaspy cuando están habilitadas.
- Reproducción histórica de rutas y reportes consolidados almacenados en el servidor de Plaspy para revisión y cumplimiento.
- Los dispositivos pueden configurarse para reportar a Plaspy mediante UDP o TCP al dominio del servidor Plaspy; Plaspy detectará automáticamente el protocolo del dispositivo.

## Casos de uso típicos

- Seguimiento de flotas para automóviles, camionetas y flotas mixtas con monitoreo en tiempo real e historial de rutas para equipos operativos.
- Protección de motocicletas y scooters donde la instalación compacta y las alarmas por vibración mejoran la respuesta anti robo.
- Monitoreo de vehículos de alquiler con alertas por movimiento y reproducción histórica para respaldar facturación e investigación de incidentes.
- Protección remota de activos en entornos urbanos y semi remotos donde el respaldo por LBS y Wi Fi mejora la cobertura.
- Respuesta rápida y flujos de trabajo de emergencia usando notificaciones SOS enviadas a través de Plaspy al personal de operaciones.
- Paneles consolidados de telemetría y eventos para flotas mixtas que combinan datos del TK970 con otros dispositivos.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware y la revisión de hardware; no todas las variantes regionales incluirán las mismas bandas o capacidades.
- Algunas funciones, como el monitoreo de voz y el control remoto del motor, pueden requerir configuración local, permisos y cumplimiento normativo.
- Los métodos de respaldo por red y la calidad del posicionamiento asistido por LBS o Wi Fi dependen del entorno celular y de red local.
- El comportamiento de alimentación y la autonomía en espera dependen del cableado de instalación y del estado de la batería; la batería interna de respaldo ofrece capacidad limitada únicamente.
- Consulte siempre la documentación del fabricante para la unidad específica que posee y verifique las notas de la versión del firmware para cambios recientes.

## Por qué usar Plaspy con estas funciones

Usar el TK-Star TK970 con Plaspy permite a las organizaciones centralizar datos de ubicación y eventos de rastreadores compactos y versátiles en una sola plataforma de monitoreo y reporte. Plaspy toma la telemetría del TK970 y la presenta en mapas en vivo, reglas de alerta y reproducción histórica para que los equipos operativos puedan actuar rápidamente sobre la información de ubicación y las señales de evento.

Para obtener más información sobre Plaspy y cómo soporta dispositivos como el TK970 visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, notas de firmware y orientación del fabricante, consulte siempre el sitio oficial de TK Star en https://www.tk-star.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
