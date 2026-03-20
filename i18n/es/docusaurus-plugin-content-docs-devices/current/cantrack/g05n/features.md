---
slug: /cantrack/g05n/features
id: g05n-features
sidebar_label: Features
title: CanTrack - G05N Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS CanTrack G05N y su integración con Plaspy para monitoreo de flotas y respuesta ante robos
keywords:
  - CanTrack G05N
  - Características CanTrack G05N
  - Rastreador GPS G05N
  - Rastreador GPS CanTrack
  - Compatibilidad G05N Plaspy
  - Rastreador vehicular G05N
  - Inmovilizador G05N
  - Geocerca G05N
  - Almacenamiento de ubicaciones G05N
  - Alertas y alarmas G05N
---

# CanTrack - G05N Características

Esta página describe el contexto de funcionalidades públicas para el uso del rastreador vehicular CanTrack G05N con Plaspy. Resume las capacidades del dispositivo relevantes para los usuarios de Plaspy, aclara cómo el equipo informa posiciones y eventos, y explica los flujos prácticos de monitoreo y control que se habilitan cuando el G05N se integra en una solución de gestión de flotas o activos con Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión del firmware, la revisión de hardware, el cableado de instalación y la implementación del fabricante. El resumen a continuación se basa en la descripción del producto G05N; para detalles específicos y las instrucciones de configuración más actuales consulte la documentación del fabricante y las notas de versión del firmware.

## Resumen de características

El G05N es un rastreador vehicular de instalación permanente diseñado para monitoreo continuo. Reporta datos de ubicación y eventos vía celular GPRS y SMS a plataformas remotas e incluye almacenamiento local para preservar el historial de ruta durante pérdidas de señal.

- Reporte de posición en tiempo real a plataformas remotas mediante GPRS TCP/IP y SMS para actualizaciones de ubicación confiables.
- Telemetría de estado del vehículo incluyendo detección de ignición (ACC) y alertas por corte de alimentación para mostrar el estado operativo.
- Conjunto completo de alarmas que incluye geocerca, exceso de velocidad, vibración, cambio de ángulo, corte de energía y un botón SOS dedicado.
- Soporte de inmovilizador remoto para comandos de corte de combustible o circuito que ayudan en la respuesta ante robos y recuperación de vehículos.
- Almacenamiento a bordo que guarda hasta 1,400 puntos GPS y sube automáticamente los puntos almacenados tras la reconexión.
- Instalación por cableado fijo con amplio rango de entrada y una pequeña batería de respaldo para soportar instalaciones permanentes en vehículos.

## Funciones principales del CanTrack - G05N

- Reporte por GPRS TCP/IP y respaldo por SMS para la entrega de posiciones y eventos a servidores y plataformas remotas.
- Detección del estado de ignición (ACC) para marcar cuándo el vehículo está en marcha o detenido, útil para reconstrucción de rutas y análisis de comportamiento.
- Alertas de geocerca y exceso de velocidad para monitoreo por perímetro y por velocidad.
- Alarmas de vibración y cambio de ángulo para detección de manipulación y movimiento, además de una entrada SOS dedicada para señalización de emergencias.
- Control de inmovilizador remoto que permite cortar el suministro de combustible o el circuito cuando el dispositivo y el cableado lo soportan.
- Búfer local de puntos GPS con subida automática de los datos almacenados en cuanto se restablece la conectividad.
- Detección de corte de alimentación y batería de respaldo de bajo nivel para detectar y reportar interrupciones en la alimentación principal del vehículo.

## Cómo funcionan estas funciones con Plaspy

Al conectarse a Plaspy, el G05N suministra posición, estado y eventos de alarma para que puedan visualizarse, registrarse y actuarse desde la plataforma. Plaspy ingiere los mensajes del dispositivo y los presenta junto con la demás telemetría de la flota para apoyar los flujos de monitoreo y respuesta.

- La ubicación en vivo y los recorridos históricos se muestran en Plaspy usando los reportes de posición del rastreador y los puntos almacenados que se suben.
- Las notificaciones de alarmas y eventos como rupturas de geocerca, exceso de velocidad, SOS, vibración y corte de energía se entregan a Plaspy para alertas y seguimiento de incidentes.
- El estado de ignición (ACC) y la alimentación aparecen en los registros de eventos y pueden usarse para filtrar viajes o analizar tiempos de operación.
- Los comandos de inmovilizador remoto y otros controles a distancia pueden enviarse desde Plaspy cuando el cableado del dispositivo y los comandos del fabricante lo permiten.
- La subida de datos almacenados asegura la continuidad del historial de rutas en Plaspy después de una pérdida temporal de conectividad.

## Casos de uso típicos

- Gestión de flotas para vehículos comerciales pequeños que requieren seguimiento continuo, historial de viajes y alertas de velocidad.
- Protección antirrobo mediante alertas inmediatas por corte de energía y capacidad de inmovilizador remoto para ayudar en la recuperación.
- Telemetría para aseguradoras y análisis de comportamiento de conducción usando el historial de ignición y eventos de alarma.
- Flotas de alquiler y de servicios que necesitan control de perímetros, alertas SOS y registro de eventos para supervisión de activos.
- Instalaciones en motocicletas y vehículos pequeños que se benefician de un rastreador compacto, instalado por cable y con detección de manipulación.

## Notas sobre disponibilidad de funciones

- La presencia de funciones y el comportamiento exacto de los comandos dependen del firmware del dispositivo y de la revisión de hardware instalada en el vehículo.
- Algunas capacidades, como el inmovilizador remoto, requieren un cableado correcto durante la instalación y pueden estar sujetas a restricciones por normativas locales o al diseño eléctrico del vehículo.
- Las bandas de radio regionales, la regionalización del firmware y el soporte de operadores pueden afectar la conectividad y el comportamiento del SMS.
- Las actualizaciones de firmware del fabricante pueden añadir, cambiar o eliminar funcionalidades; confirme los conjuntos de funciones con la documentación y notas de versión más recientes de CanTrack.
- Plaspy ofrece soporte a nivel de plataforma para las funciones reportadas pero no reemplaza la instalación, verificación o configuración que debe realizar un instalador calificado.

## Por qué usar Plaspy con estas funciones

Combinar el CanTrack G05N con Plaspy centraliza ubicación, alertas y control remoto en una sola vista operativa, facilitando que los operadores monitoreen flotas, respondan a incidentes y preserven el historial de rutas. El almacenamiento en búfer del dispositivo, el reporte de eventos y la capacidad de inmovilizador se integran con las herramientas de notificación e informes de Plaspy para permitir una reacción rápida ante robos y mantener la continuidad del rastreo durante cortes temporales de red.

To learn more about Plaspy and how it can aggregate device telemetry for monitoring and operational oversight visit https://www.plaspy.com. For the latest device specific feature details, firmware behavior and manufacturer instructions verify current information at the CanTrack official site https://www.cantrackgps.com/
