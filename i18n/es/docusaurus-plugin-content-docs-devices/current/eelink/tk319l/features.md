---
slug: /eelink/tk319l/features
id: tk319l-features
sidebar_label: Features
title: EElink - TK319‑L Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador EElink TK319‑L y su integración con Plaspy para seguimiento de flotas y telemetría
keywords:
  - funciones EElink TK319‑L
  - rastreador GPS EElink TK319‑L
  - compatibilidad TK319‑L Plaspy
  - funciones rastreador GPS EElink
  - rastreador vehicular TK319‑L
  - rastreador NB IoT TK319‑L
  - rastreador LTE Cat M1
  - seguimiento de flotas TK319‑L
  - relé inmovilizador TK319‑L
  - modo dual GPS LBS
---

# EElink - TK319‑L: Características

Esta página ofrece un panorama público de las capacidades del EElink TK319‑L y de cómo se integran con Plaspy para la gestión de flotas, seguimiento de activos y seguridad vehicular. Incluye información práctica y no sensible sobre conectividad, posicionamiento, entradas del vehículo, alarmas y opciones de expansión, para que usted comprenda cómo encaja el dispositivo en los flujos de trabajo y paneles de Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el tipo de instalación. Opciones del fabricante y componentes opcionales como relés o botones SOS pueden no estar presentes en todas las unidades, por lo que es importante revisar la configuración y la documentación oficial de EElink para información específica del modelo.

## Resumen de características

El TK319‑L es un rastreador vehicular compacto diseñado para proporcionar ubicación y telemetría continuas a una plataforma de seguimiento. Combina conectividad celular de amplio alcance y bajo consumo, posicionamiento en modo dual, entradas/salidas para vehículo y alarmas configurables para apoyar la visibilidad en tiempo real y los flujos operativos.

- Conectividad celular de área amplia y bajo consumo para cobertura amplia y seguimiento resiliente entre redes.
- Posicionamiento dual GPS y LBS para mantener reportes de ubicación tanto en exteriores como en entornos asistidos.
- Entradas y salidas vehiculares, incluyendo detección de ACC (encendido) y alarmas configurables para eventos de seguridad y operación.
- Relé opcional para corte remoto del motor en flujos de inmovilización autorizados.
- Puertos de expansión como RS232 y GPIO para conectar periféricos y enviar telemetría adicional a la plataforma.
- Factor de forma compacto y amplio rango de voltaje operativo para instalaciones flexibles en vehículos y activos.

## Características principales del EElink - TK319‑L

- Conectividad principal NB‑IoT y LTE Cat M1 con fallback GSM para amplia cobertura de red.
- Posicionamiento en modo dual GPS y LBS que combina satélite y localización asistida por red.
- Detección de ACC (estado de encendido) para segmentación de viajes y eventos de motor encendido/apagado.
- Alarmas de seguridad como detección de choque o caída, alertas por vibración, exceso de velocidad, baja batería y pérdida de alimentación.
- Opciones de hardware como botón SOS y relé para corte remoto del motor.
- Puertos de expansión RS232 y GPIO para conectar telemetría o dispositivos de monitoreo externos.
- Diseño compacto y amplio rango de voltaje para soportar instalaciones en vehículos livianos y equipos más pesados.

## Cómo funcionan estas características con Plaspy

Plaspy recibe datos de ubicación, eventos y telemetría del TK319‑L usando el protocolo del dispositivo, de modo que los administradores de flota y operadores puedan ver la posición en vivo, el historial y las alarmas en paneles y reportes. Plaspy mapea las entradas/salidas y los eventos de alarma a campos de la plataforma para que la información del rastreador se pueda usar en notificaciones, enrutamiento y flujos operativos.

- Plaspy muestra actualizaciones de ubicación en tiempo real y reproducción histórica de rutas basadas en los reportes de posición del dispositivo.
- El estado de encendido detectado por ACC se refleja en la segmentación de viajes (inicio/fin) y en los reportes operativos.
- Condiciones como choque, vibración, exceso de velocidad, baja batería y corte de energía aparecen como alertas en Plaspy y pueden disparar reglas de notificación.
- El soporte opcional de inmovilizador mediante relé puede integrarse en flujos autorizados de Plaspy para cortar el motor de forma remota cuando esté configurado.
- Los datos provenientes de periféricos conectados por RS232 y GPIO son aceptados y presentados en Plaspy cuando esos sensores están instalados y configurados.

## Casos de uso típicos

- Gestión de flotas para seguimiento continuo, registro de viajes y análisis basado en el encendido del motor.
- Flujos antirobo y recuperación con alertas y control remoto opcional del inmovilizador.
- Monitoreo de seguridad con alertas inmediatas por choque, caída o vibraciones excesivas.
- Telemetría y monitoreo de combustible conectando sensores de terceros a través de los puertos de expansión.
- Seguimiento de activos en flotas mixtas donde el tamaño compacto y la compatibilidad de voltaje facilitan las instalaciones.
- Supervisión de vehículos de servicio para despacho, cumplimiento de rutas y respuesta a incidentes.

## Notas sobre disponibilidad de funciones

- El hardware opcional como relés y botones SOS puede comercializarse en SKUs distintas o habilitarse por el instalador; no necesariamente está incluido en cada unidad.
- La versión de firmware y la implementación del fabricante determinan qué alarmas e integraciones periféricas están disponibles y cómo se reportan los eventos.
- Las bandas celulares regionales y el soporte de la red pueden afectar la elección entre NB‑IoT, LTE Cat M1 y el fallback GSM.
- La compatibilidad de periféricos depende del tipo de sensor conectado y de la configuración aplicada durante la instalación.
- Para pasos de instalación precisos, diagramas de cableado y comportamiento específico de firmware, consulte los materiales oficiales de EElink y las guías de instalación.

## Por qué usar Plaspy con estas funciones

Usar el TK319‑L con Plaspy brinda a las organizaciones visibilidad consolidada sobre la ubicación, el estado del vehículo y los eventos de seguridad, de modo que los equipos puedan gestionar flotas, responder incidentes y generar reportes operativos desde una sola plataforma. Plaspy integra la posición, las entradas/salidas y las condiciones de alarma del rastreador en paneles, notificaciones y registros históricos para apoyar el monitoreo rutinario y la gestión de excepciones.

Aprenda más sobre cómo Plaspy puede aprovechar los datos del TK319‑L para impulsar el seguimiento y los flujos operativos en https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y orientaciones del fabricante, verifique los detalles en el sitio oficial de EElink https://www.eelink.com.cn/.
