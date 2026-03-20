---
slug: /cantrack/c32plus/features
id: c32plus-features
sidebar_label: Features
title: CanTrack - C32Plus Features
sidebar_class_name: menu_item_tracker
description: Resumen de características del rastreador CanTrack C32Plus y su integración con Plaspy para seguimiento en tiempo real
keywords:
  - Características CanTrack C32Plus
  - Rastreador GPS CanTrack C32Plus
  - Características C32Plus
  - Compatibilidad C32Plus con Plaspy
  - Características rastreador GPS CanTrack
  - Rastreador C32Plus GT06
  - Rastreo de vehículos C32Plus
  - Rastreador para e bike CanTrack
  - Rastreador GPS para motocicleta C32Plus
  - Gestión de flotas C32Plus
---

# CanTrack - Funciones del C32Plus

Esta página ofrece un resumen público de las funcionalidades del CanTrack C32Plus y de cómo puede utilizarse con Plaspy para el seguimiento de vehículos y activos. Se centra en las capacidades prácticas y no sensibles que puede esperar cuando el C32Plus está configurado para reenviar datos de posición y eventos a Plaspy para su monitoreo y uso operativo.

La disponibilidad exacta de funciones depende de la versión de firmware, la revisión de hardware, el cableado de instalación y la implementación del fabricante. La información que sigue se basa en el conjunto de características descritas por el fabricante y debe usarse como guía general para integración y planificación.

## Resumen de características

El C32Plus es un rastreador compacto de conexión fija diseñado para sistemas eléctricos de 9–90 V y optimizado para bajo consumo. Ofrece posicionamiento GNSS, conectividad GSM GPRS cuadri banda, almacenamiento en búfer para uso offline y varias opciones de alarma y control que lo hacen adecuado para vehículos livianos y pequeñas flotas cuando se integra con Plaspy.

- Reporte de ubicación GNSS en tiempo real con precisión de CEP menor a 10 metros para posicionamiento consistente.
- Conectividad GSM GPRS cuadri banda para amplia cobertura celular y actualizaciones en vivo.
- Almacenamiento en búfer cuando no hay conectividad, que guarda registros de ubicación para subirlos posteriormente.
- Bajo consumo de energía ideal para e-bikes, motocicletas y otros vehículos pequeños con sistemas eléctricos limitados.
- Compatibilidad con protocolo GT06 y actualizaciones de firmware OTA para simplificar la integración y el mantenimiento remoto.

## Funciones principales del CanTrack - C32Plus

- Compatibilidad con el protocolo GT06 para reportes TCP/IP hacia plataformas de seguimiento.
- Chipset GNSS MTK de alta sensibilidad que ofrece posicionamiento con precisión por debajo de los 10 metros.
- Amplio rango de voltaje de entrada apto para sistemas eléctricos de 9 a 90 voltios.
- Consumo energético reducido pensado para minimizar la descarga de batería en vehículos pequeños.
- Búfer interno capaz de almacenar múltiples registros de ubicación cuando GPRS no está disponible.
- Soporte para actualizaciones de firmware OTA para mantenimiento remoto del dispositivo.
- Entradas de alarma configurables, incluyendo detección de corte de alimentación, encendido y alertas por vibración.
- Función opcional de corte y reanudación remotos del motor donde esté habilitada por el instalador y el fabricante.

## Cómo funcionan estas funciones con Plaspy

Cuando se configura para reportar a Plaspy, el C32Plus reenvía datos de ubicación, eventos y telemetría para que Plaspy ofrezca una vista operativa continua. Plaspy puede detectar automáticamente protocolos comunes de rastreadores y mapear los mensajes entrantes hacia su panel y herramientas de informe.

- Las actualizaciones de ubicación en vivo aparecen en los mapas de Plaspy para monitoreo en tiempo real y visibilidad de rutas.
- Alarmas como corte de alimentación, cambios de encendido y vibración se registran como eventos para atención inmediata.
- Los registros almacenados durante brechas de cobertura se suben a Plaspy cuando vuelve la conectividad, preservando rutas históricas.
- El estado de las actualizaciones OTA y los indicadores básicos de salud del dispositivo pueden monitorearse para facilitar el mantenimiento masivo.
- Cuando las funciones de inmovilizador remoto están habilitadas y autorizadas, Plaspy puede reflejar los resultados de comandos y las actualizaciones de estado.

## Casos de uso típicos

- Gestión de flotas para vehículos livianos y flotas mixtas que requieren rastreadores de bajo consumo.
- Monitoreo antirrobo con alarmas de vibración y corte de alimentación, además de soporte opcional de corte de motor.
- Protección de scooters y motocicletas donde el tamaño compacto y el bajo consumo son prioritarios.
- Monitoreo de e-bikes y vehículos pequeños para seguir el uso y el estado de la tensión externa.
- Sitios remotos o regiones con cobertura celular intermitente donde el almacenamiento en búfer preserva los datos.
- Mantenimiento remoto de dispositivos mediante actualizaciones OTA para reducir visitas in situ.

## Notas sobre disponibilidad de funciones

- La versión de firmware puede cambiar las funciones y el comportamiento, como formatos de alarma y reglas de almacenamiento en búfer.
- Las revisiones de hardware y las variantes regionales pueden alterar las entradas soportadas o el comportamiento de las bandas celulares.
- El cableado de instalación y las entradas elegidas determinan qué alarmas y campos de telemetría están disponibles en cada caso.
- Funciones opcionales como el corte remoto del motor dependen de la habilitación por parte del fabricante, la normativa local y la configuración del instalador.
- Siempre consulte la documentación del fabricante para esquemas de cableado específicos del dispositivo y capacidades de firmware soportadas.

## Por qué usar Plaspy con estas funciones

Usar el CanTrack C32Plus con Plaspy ofrece una solución compacta y de bajo consumo para equipos que necesitan conciencia continua de ubicación, alertas basadas en eventos y telemetría consolidada. Plaspy integra esas señales de los dispositivos en una vista operativa única, facilitando el monitoreo de rutas, la respuesta a alarmas y la gestión de dispositivos en una flota heterogénea.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the most current device specifications, firmware behavior and manufacturer details on the CanTrack site https://www.cantrackgps.com/. Device features and implementation details can change over time so checking the manufacturer documentation will ensure you have the latest information.
