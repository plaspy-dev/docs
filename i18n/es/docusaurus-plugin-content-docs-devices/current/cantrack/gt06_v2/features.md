---
slug: /cantrack/gt06_v2/features
id: gt06_v2-features
sidebar_label: Features
title: CanTrack - GT06 v2 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funcionalidades del rastreador GPS CanTrack GT06 v2 y su integración con Plaspy para monitoreo vehicular
keywords:
  - características CanTrack GT06 v2
  - rastreador GPS CanTrack GT06 v2
  - compatibilidad GT06 v2 Plaspy
  - funciones CanTrack GT06 v2
  - capacidades GT06 v2
  - rastreo vehicular GT06 v2
  - funciones rastreador GPS Plaspy
  - seguimiento en tiempo real GT06 v2
  - alarmas GT06 v2
  - características rastreador GPS CanTrack
---

# CanTrack - GT06 v2: Funcionalidades

Esta página presenta el contexto público de funcionalidades del CanTrack GT06 v2 y cómo sus capacidades se emplean con Plaspy. Se enfoca en las funciones orientadas al usuario, como el reporte de ubicación, las señales de alarma y la forma en que esos eventos suelen reflejarse cuando el dispositivo informa a una plataforma de gestión de flotas como Plaspy.

La disponibilidad y el comportamiento exacto de cada función pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para configuraciones a nivel de dispositivo, funciones opcionales y detalles técnicos más recientes, consulte la documentación oficial de CanTrack.

## Resumen de funcionalidades

El GT06 v2 es un rastreador compacto para vehículos que utiliza redes GSM/GPRS junto con posicionamiento por GPS para proporcionar reportes de ubicación de vehículos y otros activos móviles. Ofrece reportes tanto por SMS como por GPRS, un conjunto de alarmas configurables y funciones opcionales de voz y control que se usan comúnmente en flujos de trabajo de rastreo vehicular.

- Reporte de ubicación en tiempo real por SMS y por GPRS para seguimiento en servidor
- Operación global GSM cuatribanda para amplia compatibilidad de red
- Alarmas por exceso de velocidad, antirrobo por ACC, SOS y pérdida de energía, respaldadas por una batería interna de reserva
- Opciones de llamadas bidireccionales y funcionalidad de corte de circuito para instalaciones específicas
- Visualización de posiciones en teléfonos móviles o servicios de mapas como Google Maps y Google Earth

## Funciones principales del CanTrack - GT06 v2

- Reporte de posición GPS adecuado para aplicaciones de rastreo vehicular
- Transmisión por GPRS de datos de ubicación a un servidor en Internet para monitoreo en tiempo real
- Consultas de ubicación y notificaciones de alarmas vía SMS hacia números autorizados
- Alarma por exceso de velocidad para notificar cuando se superan umbrales configurados
- Alarma anti robo por ACC para detectar eventos relacionados con el encendido del vehículo cuando está configurada
- Alarma SOS para señalización de emergencia iniciada por el usuario
- Batería de respaldo integrada que permite detectar y notificar cortes de energía
- Funciones opcionales que incluyen llamadas bidireccionales y corte remoto de combustible o de circuito según la variante de hardware

## Cómo funcionan estas funciones con Plaspy

Al utilizarse con Plaspy, el GT06 v2 puede enviar sus datos de ubicación por GPRS y los mensajes de alarma al servidor de Plaspy para que los vehículos y eventos sean visibles en una interfaz central de monitoreo. Plaspy detecta protocolos de rastreadores compatibles e ingiere la información de ubicación y alertas para proporcionar visibilidad continua y manejo de eventos.

- Las posiciones reportadas por GPRS aparecen en los mapas de Plaspy para seguimiento en tiempo real y visualización histórica
- Alarmas como exceso de velocidad, SOS y pérdida de energía se registran como eventos para que los operadores puedan revisarlas y responder
- Las funciones basadas en SMS siguen siendo útiles para consultas directas al dispositivo y para configuraciones donde no hay GPRS disponible
- Las funciones opcionales de control remoto o voz se gestionan fuera del seguimiento central a menos que el instalador o el fabricante las integren específicamente
- Plaspy captura los reportes entrantes del servidor y los asocia con los registros de dispositivo para ofrecer supervisión a nivel de flota

## Casos de uso típicos

- Monitoreo de ubicación de flotas y vehículos de alquiler para supervisión operativa
- Protección de activos y disuasión de robos mediante alarmas de pérdida de energía y antirrobo
- Rastreo de personal o vehículos para empresas que requieren conocimiento de ubicación
- Consultas rápidas de ubicación por SMS cuando no hay conexión de datos móviles
- Monitoreo que brinda tranquilidad a propietarios y gerentes de negocios
- Integración de eventos de alarma en un flujo de trabajo centralizado para coordinar respuestas

## Notas sobre disponibilidad de funciones

- Ciertas funciones listadas como opcionales por el fabricante, como llamadas bidireccionales y corte remoto, pueden depender de la variante de hardware o de configuraciones posteriores a la venta
- La versión de firmware y la revisión de hardware pueden modificar el funcionamiento de las alarmas y de los reportes por GPRS en la práctica
- Las funciones por SMS requieren una SIM activa con crédito suficiente y cobertura de red en la región de operación
- El soporte de frecuencias GSM es amplio, pero la compatibilidad real con redes depende de los operadores locales
- Para reportes basados en servidor, la configuración del dispositivo debe apuntar al servidor de rastreo previsto según lo indique el instalador o la plataforma

## Por qué usar Plaspy con estas funciones

Plaspy ofrece un modo centralizado de recopilar posiciones por GPRS y señales de alarma de dispositivos como el CanTrack GT06 v2, facilitando a las organizaciones mantener visibilidad en tiempo real sobre una flota mixta. Con Plaspy, los operadores pueden ver el historial de ubicación, monitorear eventos de alarma y gestionar múltiples dispositivos desde una sola interfaz para apoyar operaciones rutinarias y la respuesta a incidentes.

Para obtener más información sobre cómo Plaspy puede funcionar con dispositivos CanTrack visite https://www.plaspy.com. Para descripciones de funciones específicas del dispositivo, comportamiento de firmware y detalles de hardware opcionales más recientes, por favor verifique la información con el fabricante en https://www.cantrackgps.com/
