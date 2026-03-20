---
slug: /aplicom/t10_g/features
id: t10_g-features
sidebar_label: Features
title: Aplicom - T10 G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Aplicom T10 G y su integración con Plaspy para telemetría y ubicación de flotas
keywords:
  - Aplicom T10 G
  - Funciones Aplicom T10 G
  - Rastreador GPS Aplicom T10 G
  - Rastreador CAN T10 G
  - T10 G IP67
  - Aplicom Silver Cloud
  - Rastreador LTE Cat M1
  - Rastreador de telemetría vehicular
  - Seguimiento de flotas Plaspy
  - Rastreador compatible con Plaspy
---

# Aplicom - Funciones del T10 G

Esta página ofrece un resumen público de las capacidades del Aplicom T10 G y de cómo se utilizan con Plaspy para el seguimiento de flotas, telemetría vehicular y visibilidad operativa. Se concentra en información de carácter no sensible y de cara al usuario sobre qué puede proporcionar el equipo y cómo se refleja esa información en los flujos de trabajo de Plaspy.

La disponibilidad exacta de funciones y su comportamiento dependen de la versión de firmware, la revisión de hardware, variantes opcionales, el método de instalación y la implementación del fabricante. Para detalles a nivel de dispositivo, como bandas soportadas, opciones GNSS y asignaciones CAN, consulte la documentación oficial y las hojas de producto de Aplicom.

## Resumen de funciones

El Aplicom T10 G es un rastreador vehicular robusto diseñado para ofrecer informes de ubicación continuos y telemetría desde el bus del vehículo hacia plataformas en la nube como Plaspy. Está pensado para despliegues de flotas que requieren hardware resistente, gestión remota de dispositivos y la capacidad de integrar datos del bus CAN en flujos de seguimiento e informes.

- Informes de ubicación en tiempo real cuando la variante del dispositivo incluye GNSS, para visibilidad de rutas y seguimiento.
- Acceso integrado al bus CAN para capturar señales del vehículo, como estado del encendido y mensajes de diagnóstico, cuando estén disponibles en la unidad.
- Carcasa resistente con protección IP67 y montaje plug-and-play para operación fiable en entornos vehiculares e industriales exigentes.
- Resiliencia celular mediante LTE Cat M1 con roaming global 4G y retroceso a 2G para mayor cobertura en distintas regiones.
- Aprovisionamiento remoto y gestión del ciclo de vida a través de Aplicom Silver Cloud para simplificar despliegues y actualizaciones de firmware.

## Características principales del Aplicom T10 G

- Compatibilidad con Plaspy para transmitir ubicación y telemetría derivada de CAN hacia paneles e informes en Plaspy.
- Interfaz CAN integrada para leer señales del bus del vehículo cuando estén presentes en la conexión.
- Carcasa robusta con clasificación IP67, apta para montaje en vehículos y activos en condiciones adversas.
- Conectividad LTE Cat M1 con roaming global 4G y retroceso 2G, mejorando la cobertura regional.
- Instalación plug-and-play para reducir tiempos de montaje y facilitar implementaciones a escala en flotas.
- Gestión remota de dispositivos mediante Aplicom Silver Cloud para aprovisionamiento, configuración y manejo de firmware.
- Informes de ubicación basados en GNSS disponibles en las variantes aplicables.
- Kit de inicio y opción de variante 2G para pruebas y despliegues en áreas con redes heredadas.

## Cómo funcionan estas funciones con Plaspy

Al desplegarse con Plaspy, el T10 G transmite ubicación y telemetría derivada del bus CAN hacia los flujos de Plaspy para que los operadores puedan monitorear vehículos, ver señales clave del bus y agregar datos a reportes y alertas. Plaspy detecta trackers compatibles de forma automática e ingiere la telemetría para su uso en interfaces de seguimiento y paneles operativos.

- Las actualizaciones de ubicación aparecen en los mapas y en las vistas de historial de Plaspy para seguimiento en tiempo real y análisis de viajes.
- Señales derivadas del CAN, como el estado del encendido y mensajes de diagnóstico, se reflejan como campos de telemetría cuando el dispositivo y el bus del vehículo las proporcionan.
- El aprovisionamiento remoto vía Aplicom Silver Cloud acelera la incorporación, permitiendo que los equipos empiecen a reportar a Plaspy con mínima configuración manual.
- La resiliencia celular del dispositivo contribuye a mantener la continuidad de los flujos de telemetría y ubicación hacia Plaspy en áreas de cobertura variable.
- El soporte de kit de inicio facilita pruebas piloto y verificación del flujo de datos hacia Plaspy antes de realizar despliegues a gran escala.

## Casos de uso típicos

- Gestión centralizada de flotas con visibilidad continua de ubicación y telemetría a nivel vehicular.
- Flujos de trabajo de seguridad y antirrobo que utilizan estado de encendido y ubicación para detectar movimientos no autorizados.
- Programas de mantenimiento preventivo que incorporan mensajes de diagnóstico provenientes del CAN en la planificación de servicios.
- Flotas transfronterizas y en roaming que se benefician de LTE Cat M1 y retroceso 2G para una cobertura más amplia.
- Despliegues piloto y rollouts por fases usando kits de inicio y variantes 2G para validar la compatibilidad con Plaspy.
- Monitoreo de remolques y activos donde la carcasa resistente y la gestión remota son importantes.

## Notas sobre disponibilidad de funciones

- Las señales del bus CAN y los parámetros específicos que el T10 G puede exponer dependen del bus del vehículo y de cómo cada marca y modelo expone esas señales.
- Los informes de ubicación GNSS y el soporte de bandas celulares pueden variar según la variante del T10 G; consulte la hoja de datos de Aplicom para detalles por variante.
- Revisiones de firmware y hardware pueden modificar la funcionalidad disponible y las asignaciones de señales con el tiempo.
- Las funciones de aprovisionamiento remoto requieren integración con Aplicom Silver Cloud y la configuración adecuada para reenviar telemetría a Plaspy.
- El contenido del kit de inicio y la disponibilidad de la variante 2G pueden diferir según la región y el canal de suministro.

## Por qué usar Plaspy con estas funciones

Combinar el Aplicom T10 G con Plaspy ofrece a las organizaciones una vía práctica para unir hardware resistente montado en vehículos con una plataforma de gestión de flotas que muestra ubicación y telemetría del bus del vehículo. Esta combinación ayuda a los operadores de flotas a transformar señales a nivel vehicular y actualizaciones continuas de ubicación en información operativa, reportes y alertas sin necesidad de integraciones personalizadas extensas.

Para obtener más información sobre cómo Plaspy puede usar telemetría proveniente de dispositivos como el Aplicom T10 G visite https://www.plaspy.com. Para las especificaciones más actuales y detalladas del dispositivo, notas de firmware e información de variantes consulte la documentación oficial de Aplicom en https://www.aplicom.com/ ya que las funciones y el comportamiento del firmware del fabricante pueden cambiar con el tiempo.
