---
slug: /eelink/tk319_l/features
id: tk319_l-features
sidebar_label: Features
title: EElink - TK319‑L Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características y compatibilidad con Plaspy del rastreador GPS EElink TK319‑L, incluido posicionamiento, alertas y telemetría
keywords:
  - EElink TK319‑L características
  - localizador GPS EElink TK319‑L
  - compatibilidad TK319-L con Plaspy
  - características TK319 L
  - localizador GPS EElink
  - rastreador de vehículos TK319-L
  - rastreador NB-IoT
  - rastreador LTE Cat M1
  - rastreo GPS LBS
  - compatibilidad protocolo EELINK 2.0
---

# EElink - TK319‑L: Características

Esta página ofrece una visión pública de las capacidades del EElink TK319‑L y cómo se presentan esos datos cuando el dispositivo se integra con Plaspy. Está enfocada en la funcionalidad visible para el usuario y el contexto operativo, de modo que gerentes de flota, integradores y evaluadores técnicos sepan qué esperar al desplegar el TK319‑L con Plaspy para seguimiento, telemetría y alertas.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para detalles específicos del dispositivo, como el cableado, opciones de firmware o módulos opcionales, confirme la documentación actual del fabricante y la revisión de hardware instalada antes del despliegue.

## Resumen de funcionalidades

El TK319‑L es un rastreador compacto para vehículos diseñado para mantener conectividad robusta en redes IoT celulares modernas y con conmutación a GSM como respaldo. Combina posicionamiento GNSS con ubicaciones asistidas para mejorar la disponibilidad, e incluye entradas para vehículo y alarmas configurables para apoyar operaciones de flota y flujos de trabajo anti‑robo.

- Conectividad celular multimodo con NB‑IoT y LTE Cat M1 como redes principales y GSM como respaldo para mayor cobertura.
- Posicionamiento dual GPS y LBS para mejorar la disponibilidad de la ubicación tanto en exteriores como cuando se requieren señales asistidas.
- Entradas orientadas a vehículos, incluyendo detección de encendido ACC y condiciones de alarma configurables para monitoreo operativo y de seguridad.
- Opcionalmente puede incluir relé para corte de motor y botón SOS para emergencias e inmovilización cuando el hardware trae esas opciones.
- Puertos de expansión como RS232 y GPIO para conectar telemetría y sensores de terceros y así ampliar la funcionalidad.

## Funciones principales del EElink - TK319‑L

- Conectividad NB‑IoT y LTE Cat M1 con GSM como respaldo para cobertura celular redundante.
- Posicionamiento dual GPS y LBS para ofrecer actualizaciones continuas de ubicación.
- Entradas para vehículo, incluida la detección de encendido ACC, y alarmas de seguridad configurables como choque, caída y vibración.
- Detección de exceso de velocidad además de notificaciones de batería baja y corte de alimentación para apoyar alertas operativas.
- Funciones de hardware opcionales, como relé para corte remoto del motor y botón SOS cuando están presentes en la unidad.
- Interfaces de expansión, incluyendo RS232 y GPIO, para conectar sensores externos y dispositivos de telemetría según sea necesario.
- Factor de forma compacto y amplio rango de voltaje de operación que soporta diversas clases de vehículos.

## Cómo funcionan estas funciones con Plaspy

Al integrar un TK319‑L con Plaspy, el dispositivo informa ubicación, estados de entradas y condiciones de alarma a la plataforma Plaspy, donde esos datos se ponen a disposición para monitoreo, informes y automatización de flujos de trabajo. Plaspy procesa los mensajes del protocolo EELINK 2.0 y mapea la telemetría del dispositivo a campos del panel y reglas de alerta.

- Actualizaciones de ubicación en tiempo real y reproducción histórica de rutas para visibilidad de la flota y revisión de incidentes.
- Estado de encendido ACC y segmentación de viajes mostrados en Plaspy para ayudar a analizar patrones de uso y eventos de motor encendido/apagado.
- Condiciones de seguridad y alarma como choque, caída, vibración, exceso de velocidad, batería baja y corte de alimentación generan alertas y pueden activar reglas de notificación.
- Control opcional de relé y eventos SOS son visibles para flujos de trabajo remotos autorizados y procedimientos de respuesta cuando el hardware soporta esas funciones.
- Datos de sensores conectados por RS232 o GPIO se presentan en los informes de Plaspy y pueden usarse en paneles personalizados.

## Casos de uso típicos

- Seguimiento continuo de flotas y registro de viajes para operaciones de vehículos comerciales.
- Monitoreo anti‑robo y recuperación con capacidades de inmovilización remota cuando se instala y configura la opción de relé.
- Monitoreo de seguridad para detección rápida de choques, caídas o eventos de vibración.
- Recolección de telemetría incluyendo datos de sensores de terceros para monitoreo de combustible o temperatura mediante puertos de expansión.
- Seguimiento de activos en flotas mixtas donde el tamaño compacto y el amplio rango de voltaje soportan autos, camionetas, camiones y equipos.
- Monitoreo operativo remoto para flotas de servicio que requieren conectividad consistente a través de redes IoT.

## Notas sobre la disponibilidad de funciones

- Funciones opcionales como el relé para corte de motor y el botón SOS dependen de la variante de hardware específica solicitada e instalada.
- Las revisiones de firmware pueden modificar el comportamiento de alarmas, intervalos de reporte y nombres de parámetros opcionales. Confirme la versión de firmware para los comportamientos en los que confía.
- El tipo de instalación y el cableado influyen en qué entradas de vehículo están disponibles y cómo se reportan eventos como la detección de ACC.
- Las bandas celulares regionales y la disponibilidad de red pueden afectar la operación NB‑IoT o LTE Cat M1; el comportamiento de respaldo GSM puede variar según el operador.
- Revise la documentación del fabricante para detalles sobre el cableado de puertos de expansión, compatibilidad de sensores y protocolos de periféricos soportados.

## Por qué usar Plaspy con estas funciones

Usar el TK319‑L con Plaspy proporciona a las organizaciones una plataforma única para recopilar ubicación, eventos de E/S del vehículo y condiciones de alarma para supervisión operativa. Plaspy mapea la telemetría del rastreador en paneles, reportes y reglas de alerta para que los equipos puedan monitorear flotas en tiempo real, investigar incidentes con reproducción histórica y automatizar notificaciones para eventos de seguridad y protección.

Learn more about how Plaspy can present TK319‑L data and support deployment planning on https://www.plaspy.com. For the most current device specifications, firmware notes, and optional hardware details verify information with the manufacturer at https://www.eelink.com.cn/ since device features and firmware behavior may change over time.
