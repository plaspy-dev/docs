---
slug: /coban/bn_405c/features
id: bn_405c-features
sidebar_label: Features
title: Coban - BN-405C Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador Coban BN-405C y su compatibilidad con Plaspy para seguimiento alertas y telemetría
keywords:
  - Coban BN-405C
  - Características BN-405C
  - Rastreador GPS Coban
  - Capacidades BN-405C
  - Rastreador GPS para vehículos
  - Rastreador para gestión de flotas
  - Rastreador antirrobo
  - Rastreador compatible con Plaspy
  - Rastreador GNSS
  - Dispositivo de rastreo para camiones
---

# Coban - BN-405C: Características

Esta página presenta el contexto público de funcionalidades para el uso del rastreador Coban BN-405C con Plaspy. Describe las capacidades prácticas, usos operativos habituales y cómo se integra el dispositivo con Plaspy para ubicación en tiempo real, alertas y reproducción histórica. El objetivo es ofrecerle una guía clara a gerentes de flota, instaladores y evaluadores técnicos que consideren este modelo para proyectos de rastreo vehicular.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, el conjunto de opciones instalado y la forma en que el dispositivo se conecta en el vehículo. Los valores por defecto del fabricante, accesorios opcionales y variantes regionales de conectividad celular pueden afectar las funciones presentes. Para configuración específica y los detalles técnicos más recientes consulte la documentación oficial del fabricante.

## Resumen de funciones

El BN-405C es un rastreador vehicular compacto diseñado para flotas, logística y prevención de robos. Combina conectividad celular multioperador con un receptor GNSS de alta sensibilidad, batería interna de respaldo y una amplia suite de alarmas para mantener la visibilidad del vehículo y proporcionar alertas basadas en eventos para la supervisión operativa.

- Reporte de ubicación en tiempo real para seguimiento en mapas y visibilidad de rutas.
- Conectividad celular multioperador y soporte de protocolos estándar para integración sencilla con Plaspy.
- Receptor GNSS de alta sensibilidad para posiciones precisas y reproducción de trayectos.
- Suite de alarmas completa que incluye geocercas, exceso de velocidad, movimiento y corte de alimentación externa para detección de robo y seguridad.
- Entradas y control sobre el vehículo, como reporte de encendido ACC y control remoto de corte de combustible o alimentación para intervenciones.
- Soporte opcional para sensores y cámaras que amplían la telemetría y permiten verificación de incidentes cuando están instalados.

## Funciones principales del Coban - BN-405C

- Rastreo GPS en tiempo real con GNSS de alta sensibilidad para actualizaciones de posición precisas e historial de viajes.
- Soporte celular multioperador y protocolos estándar TCP, UDP y SMS para integración en plataformas.
- Batería interna de respaldo para mantener reportes cuando se corta la alimentación externa.
- Suite de alarmas completa que abarca geocercas, exceso de velocidad, movimiento, choque, apertura de puertas, batería baja y corte de alimentación externa.
- Entrada ACC para reportar encendido/apagado del motor y correlacionar eventos.
- Control remoto de corte de combustible o alimentación para apoyar intervenciones antirrobo cuando está configurado.
- Soporte opcional para sensores externos como nivel de combustible, temperatura o humedad para ampliar la telemetría.
- Capacidad de integración con micrófonos externos y cámaras Wi‑Fi para ayudar en la verificación de incidentes cuando está soportado.

## Cómo funcionan estas funciones con Plaspy

Cuando un BN-405C está conectado a Plaspy, el dispositivo envía ubicación, actualizaciones de estado y las alarmas configuradas, de modo que usted pueda monitorear los vehículos en tiempo real y revisar la actividad histórica. Plaspy recibe y normaliza los mensajes entrantes para presentarlos en mapas, paneles e historiales de alertas que facilitan la toma de decisiones operativas.

- Las ubicaciones y actualizaciones de posición en vivo se muestran en los mapas de Plaspy para seguimiento y despacho.
- Los eventos de alarma como violaciones de geocerca, exceso de velocidad y pérdida de alimentación se muestran como notificaciones y eventos consultables.
- Los eventos de encendido e entradas ACC aparecen en líneas de tiempo para correlacionar viajes y tiempos de motor con incidentes.
- Las lecturas de sensores opcionales y las pruebas de cámara o audio se adjuntan a los eventos cuando esos accesorios están configurados y reportan en Plaspy.
- El historial de viajes y la reproducción usan el flujo de localización del dispositivo y los mensajes almacenados para reconstruir rutas con fines de reporte y cumplimiento.

## Casos de uso típicos

- Gestión y despacho de flotas donde la ubicación en vivo y los eventos de encendido optimizan rutas y utilización.
- Monitoreo logístico y de transporte para verificar cumplimiento de rutas y proteger la carga con geocercas.
- Flujos de trabajo antirrobo y recuperación que usan alarmas de movimiento, detección de corte de alimentación externa y control remoto de corte.
- Supervisión de vehículos de servicio público y utilitarios que se benefician de instalaciones discretas y telemetría robusta.
- Escenarios de aseguramiento y control de riesgos que requieren evidencia de eventos y reproducción histórica.
- Verificación situacional cuando se instalan e integran cámaras o funciones de audio opcionales.

## Notas sobre disponibilidad de funciones

- La presencia de funciones depende de la versión de firmware y la revisión de hardware; algunas funciones pueden requerir firmware más reciente o modelos específicos por región.
- Sensores y accesorios opcionales, como sondas de nivel de combustible, cámaras o micrófonos externos, requieren compra por separado y una instalación correcta para reportar en Plaspy.
- El tipo de instalación y el cableado determinan si entradas como ACC y el control remoto de corte están disponibles y son seguros de usar.
- La configuración del fabricante vía SMS o comandos remotos puede activar o desactivar alarmas y comportamientos de reporte específicos.
- Verifique siempre la documentación del fabricante para opciones soportadas y recomendaciones de instalación según su región y tipo de vehículo.

## Por qué usar Plaspy con estas funciones

Combinar el BN-405C con Plaspy ofrece a las organizaciones una vía práctica para consolidar visibilidad de vehículos, monitoreo de eventos e informes históricos en una sola plataforma. El rastreador provee la telemetría y las señales de alarma en campo, mientras que Plaspy presenta esos datos como posiciones en vivo, alertas y eventos en líneas de tiempo para que usted pueda actuar con rapidez y mantener supervisión operativa en flotas mixtas.

Para más información sobre cómo Plaspy trabaja con rastreadores compatibles como el BN-405C visite https://www.plaspy.com. Para detalles específicos de dispositivo, notas de firmware y guía de instalación consulte al fabricante en https://www.coban.net/ que mantiene la documentación oficial y avisos técnicos.
