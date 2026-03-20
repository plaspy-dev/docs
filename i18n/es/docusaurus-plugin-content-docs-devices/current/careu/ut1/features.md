---
slug: /careu/ut1/features
id: ut1-features
sidebar_label: Features
title: CAREU - UT1 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador GPS CAREU UT1 y su integración con Plaspy para seguimiento y telemetría de activos robustos
keywords:
  - CAREU UT1
  - características CAREU UT1
  - rastreador GPS CAREU UT1
  - funciones UT1 Plaspy
  - rastreador compatible con Plaspy
  - rastreador robusto para activos
  - rastreador LTE Cat 1
  - seguimiento de activos industriales
  - seguimiento de remolques
  - rastreador antirobo
---

# CAREU - UT1: Características

Esta página presenta un resumen público de las capacidades del rastreador GPS CAREU UT1 y cómo se integra con Plaspy para ofrecer ubicación, telemetría y visibilidad operativa. El enfoque está en las capacidades prácticas y en cómo se reflejan en los paneles, alertas e informes de Plaspy para flotas, activos y flujos de trabajo de seguridad.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, las opciones de fábrica y las particularidades de la instalación. Cuando existan opciones del fabricante o variantes regionales, pueden modificar el comportamiento del dispositivo; consulte la documentación del fabricante y las notas de la versión para detalles específicos antes de planificar un despliegue.

## Resumen de funciones

El CAREU UT1 es un rastreador alimentado para activos pensado para entornos exigentes. Ofrece conectividad celular robusta, registro interno y opciones flexibles de sensores y E/S. Está diseñado para mantener los paneles de Plaspy actualizados con ubicación y telemetría de flotas industriales, remolques y activos asegurados.

- Seguimiento en tiempo real mediante LTE Cat 1 con retroceso a 3G/2G para una cobertura resiliente en distintos sitios.
- Carcasa robusta con clasificación IP67 y diseño tolerante a la vibración para uso en construcción, minería e industria.
- Opciones de batería interna de respaldo con modo de super ahorro y gran capacidad de registro a bordo para amplia autonomía.
- Capacidades anti robo que incluyen alertas por manipulación y pérdida de alimentación, además de inmovilización remota y control de ignición.
- Soporte flexible de sensores e interfaces como 1‑Wire y RS‑232 con CAN opcional para telemetría ampliada.
- Configuración remota y actualizaciones de firmware vía FOTA, además de soporte por SMS, FTP y comandos USSD.

## Funciones principales del CAREU - UT1

- Conectividad celular principal LTE Cat 1 con retroceso a redes 3G y 2G para reportes persistentes.
- Carcasa robusta con clasificación IP67, diseñada para exposición a polvo, agua y entornos con fuertes vibraciones.
- Opciones de batería interna de respaldo (aproximadamente 5.2 Ah o 10.4 Ah) y modo de super ahorro para operación prolongada sin conexión.
- Gran registrador de posiciones a bordo capaz de almacenar hasta 200,000 registros para sincronizarse más tarde.
- Posicionamiento GNSS usando GPS, GLONASS y QZSS para obtener fijaciones de ubicación confiables.
- Interfaces flexibles de E/S y sensores, incluidas 1‑Wire y RS‑232, con soporte CAN opcional para datos de vehículo y telemetría de combustible.
- Funciones de eventos y seguridad como detección de manipulación, detección de bloqueo GSM, reportes de geocerca y detección de eventos por acelerómetro.
- Capacidades de gestión remota que incluyen configuración remota y FOTA por FTP, además de rutas de comando vía SMS y USSD.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe los flujos de ubicación y telemetría del UT1 para que los equipos operativos y de seguridad puedan monitorear el estado en vivo, responder a eventos y analizar la actividad histórica. La telemetría y los reportes de eventos del UT1 se traducen en elementos accionables dentro de Plaspy para despacho, supervisión de flota y respuesta de seguridad.

- Las transmisiones de ubicación en tiempo real y las actualizaciones periódicas aparecen en los mapas y vistas de rastreo de Plaspy para visibilidad de activos en vivo.
- Alertas de eventos como manipulación, pérdida de alimentación, violación de geocerca y eventos de acelerómetro se muestran como notificaciones y entradas en el registro de actividad.
- Los registros almacenados a bordo por el UT1 pueden sincronizarse con Plaspy para reconstruir rutas y eventos históricos cuando se restablece la conectividad.
- Los datos de sensores y E/S procedentes de 1‑Wire, RS‑232 y dispositivos CAN opcionales se presentan en Plaspy como campos de telemetría para monitoreo y creación de reglas.
- Los comandos remotos y los flujos de configuración habilitados por FOTA y la configuración remota permiten a los administradores aplicar ajustes y actualizaciones de firmware a escala mediante sistemas backend que interactúan con Plaspy.

## Casos de uso típicos

- Gestión anti robo y de inmovilización para flotas, con alertas de manipulación y pérdida de energía enviadas a equipos de seguridad.
- Monitoreo de maquinaria pesada y equipos de construcción para conocimiento de posición y detección de eventos en sitios exigentes.
- Seguimiento de remolques y activos no motorizados donde la larga autonomía y los modos de super ahorro reducen las visitas de mantenimiento.
- Protección de activos seguros como cajeros automáticos, cajas fuertes y equipos móviles que requieren sellado ambiental y resistencia a vibraciones.
- Telemetría de vehículos industriales y mineros con integración CAN opcional para datos de combustible y del vehículo cuando está disponible.

## Notas sobre disponibilidad de funciones

- Algunas funciones, como interfaces CAN opcionales, actualizaciones del acelerómetro de 6 ejes o arreglos específicos de E/S, pueden ser opciones de fábrica o requerir diferentes revisiones de hardware.
- Las versiones de firmware afectan el comportamiento en registro, intervalos de reporte, modos de energía y capacidades de actualización remota; consulte las notas de la versión para el comportamiento exacto.
- La instalación y el cableado (por ejemplo entradas de ignición externas o arreglos de alimentación externos) influyen en qué funciones están disponibles en una implementación concreta.
- Las variantes regionales celulares pueden diferir en las bandas soportadas y el comportamiento de retroceso; verifique las unidades suministradas para su región.
- Plaspy puede detectar automáticamente el protocolo del rastreador e ingerir datos de dispositivos compatibles, pero se requieren pasos de configuración y aprovisionamiento antes de que los datos del dispositivo aparezcan en Plaspy.

## Por qué usar Plaspy con estas funciones

Usar el CAREU UT1 junto con Plaspy ofrece un punto único para recopilar ubicación, seguridad y telemetría de sensores para activos robustos y flotas industriales. Plaspy centraliza alertas, registros históricos y telemetría para que los equipos puedan monitorear activos en campo, reaccionar ante incidentes y generar informes operativos sin tener que consolidar manualmente datos crudos de los dispositivos.

Para saber más sobre cómo Plaspy soporta dispositivos como el CAREU UT1 visite https://www.plaspy.com. Para obtener las especificaciones más actuales del dispositivo, notas de firmware y opciones del fabricante, consulte la documentación oficial de CAREU en https://www.systech-iot.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
