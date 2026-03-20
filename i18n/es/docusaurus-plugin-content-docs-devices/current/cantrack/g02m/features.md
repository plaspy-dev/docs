---
slug: /cantrack/g02m/features
id: g02m-features
sidebar_label: Features
title: CanTrack - G02M Features
sidebar_class_name: menu_item_tracker
description: Características del rastreador CanTrack G02M y su compatibilidad con Plaspy para seguimiento en tiempo real, alertas de geocerca y respuestas de ubicación por SMS
keywords:
  - CanTrack G02M
  - CanTrack G02M características
  - CanTrack G02M rastreador GPS
  - CanTrack G02M Plaspy
  - características rastreador de mascotas
  - rastreador GPS para mascotas
  - G02M alertas de geocerca
  - G02M ubicación por SMS
  - G02M seguimiento GPRS
  - rastreador compatible con Plaspy
---

# CanTrack - G02M - Características

Esta página documenta el contexto público de funciones para usar el rastreador CanTrack G02M con Plaspy. Resume las capacidades del dispositivo relevantes para integrar el G02M en Plaspy para monitoreo en vivo, alertas y revisión de trayectos históricos. El contenido se centra en funciones prácticas de cara al usuario y en cómo se traducen a los flujos de trabajo de Plaspy.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware del dispositivo, la revisión de hardware, el modelo regional, el método de instalación y la implementación del fabricante. Para detalles técnicos específicos del dispositivo, notas de lanzamiento de firmware o instrucciones de configuración, consulte la documentación oficial y los recursos de soporte de CanTrack.

## Descripción general de funciones

El CanTrack G02M es un rastreador compacto para mascotas y pequeños activos diseñado para reportes de ubicación sencillos y confiables. Admite consultas rápidas por SMS además de cargas continuas al servidor, lo que permite consultas inmediatas desde un teléfono y seguimiento constante cuando está conectado a un servicio de datos. A continuación se listan las capacidades principales de interés para el uso diario.

- Reporte de ubicación en tiempo real vía GPS con posicionamiento asistido por Wi‑Fi y respaldo LBS para mayor cobertura.
- Carga por GPRS al servidor para seguimiento continuo y reproducción de rutas históricas en Plaspy.
- Consulta rápida por SMS que devuelve un enlace de Google Maps con latitud y longitud para búsquedas instantáneas.
- Notificaciones por geocerca y alertas de batería baja para ayudar a proteger mascotas y pequeños activos.
- Factor de forma pequeño y batería recargable de 300 mAh adecuada para collares y objetos llevados encima.

## Funciones principales del CanTrack - G02M

- Posicionamiento GPS con métodos asistidos para mejorar la obtención de fixes en entornos mixtos.
- Carga de datos por GPRS a un servidor de seguimiento para transmisión de ubicación en vivo y registro histórico.
- Respuestas por SMS con coordenadas que incluyen un enlace a Google Maps para verificaciones manuales rápidas desde cualquier teléfono.
- Alertas de geocerca que se pueden configurar en el dispositivo y que se muestran en Plaspy como eventos.
- Notificaciones de batería baja reportadas por el dispositivo para facilitar la recarga oportuna.
- Intervalos de subida ajustables para balancear la resolución del seguimiento y la duración de la batería.
- Diseño compacto y ligero pensado para collares de mascotas y artículos portátiles pequeños.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe actualizaciones de ubicación y eventos del G02M cuando el rastreador está configurado para enviar datos a un endpoint de seguimiento compatible. Una vez activo el reporte, Plaspy muestra ubicaciones en mapas en vivo, conserva rutas históricas y presenta las alertas configuradas para supervisión operativa.

- Las posiciones en vivo del G02M aparecen en los mapas de Plaspy para brindar conciencia situacional inmediata.
- Las rutas históricas registradas vía carga GPRS están disponibles en Plaspy para revisión y reproducción.
- Los eventos de geocerca generados por el dispositivo se reenvían a Plaspy para que los usuarios reciban notificaciones o vean las alertas en la plataforma.
- Las alertas de batería baja se muestran como eventos de dispositivo en Plaspy para ayudar a programar recargas.
- Los intervalos de subida configurados en el dispositivo definen la frecuencia con la que Plaspy recibe actualizaciones, permitiendo ajustar la relación entre vida de batería y granularidad del seguimiento.

## Casos de uso típicos

- Seguimiento de mascotas como perros y gatos durante paseos o cuando deambulan al aire libre.
- Rastreo personal ligero para niños o adultos mayores cuando se prefieren dispositivos discretos.
- Monitoreo de pequeños activos como mochilas, equipaje o equipos portátiles que requieren seguimiento GPS compacto.
- Implementaciones temporales y servicios de alquiler donde la configuración simple y las búsquedas por SMS ofrecen visibilidad inmediata.
- Servicios de cuidado y paseadores de mascotas que necesitan verificar ubicaciones actuales o recibir alertas de geocerca fácilmente.

## Notas sobre disponibilidad de funciones

- Las diferencias de firmware pueden cambiar las funciones disponibles, las opciones del menú y el comportamiento de las alertas; verifique el conjunto de funciones según la versión de firmware del dispositivo.
- Las variantes de hardware regionales o de bandas pueden afectar la conectividad de red y el rendimiento GPRS en algunos países.
- Las capacidades de SMS y de carga al servidor dependen del servicio de la SIM, el plan de datos y la disponibilidad de la red móvil en la ubicación del dispositivo.
- La instalación física y la colocación de la antena pueden influir en el rendimiento del GPS y en la eficacia del posicionamiento asistido.
- Para las especificaciones más actuales y las opciones compatibles, consulte la documentación oficial de CanTrack.

## Por qué usar Plaspy con estas funciones

Usar el CanTrack G02M con Plaspy ofrece un camino sencillo desde un rastreador compacto para mascotas hasta una solución completa basada en servidor. Plaspy facilita visualizar ubicaciones en vivo, revisar rutas históricas y gestionar alertas como violaciones de geocerca y notificaciones de batería baja, convirtiendo la telemetría básica del G02M en visibilidad operativa útil para el seguimiento personal y de pequeños activos.

To learn more about Plaspy and how the G02M can be integrated into your tracking workflows, visit https://www.plaspy.com. For the latest device specific details, firmware notes, and manufacturer guidance verify information on the official CanTrack website https://www.cantrackgps.com/.
