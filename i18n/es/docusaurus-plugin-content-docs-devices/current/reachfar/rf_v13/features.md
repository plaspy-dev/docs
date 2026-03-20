---
slug: /reachfar/rf_v13/features
id: rf_v13-features
sidebar_label: Features
title: Reachfar - RF-V13 Features
sidebar_class_name: menu_item_tracker
description: Funciones y compatibilidad con Plaspy del detector de alarmas GSM Reachfar RF-V13 para puertas y ventanas
keywords:
  - Reachfar RF-V13
  - características Reachfar RF-V13
  - localizador GPS Reachfar RF-V13
  - rastreador alarma puerta ventana
  - sistema de alarma GSM
  - rastreador sensor magnético
  - rastreador GPRS TCP IP
  - posicionamiento LBS
  - alarma de voz bidireccional
  - rastreador compatible con Plaspy
---

# Reachfar - RF-V13: Funciones

Esta página resume el contexto público de funciones para usar el detector de alarmas de puertas y ventanas Reachfar RF-V13 con Plaspy. Se enfoca en las capacidades prácticas que puede esperar al integrar el RF-V13 con Plaspy para registro de eventos, alertas y conocimiento básico de ubicación.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para configuración específica del dispositivo, características de rendimiento y las notas de firmware más recientes, consulte la documentación oficial de Reachfar y los recursos del producto.

## Resumen de funciones

El RF-V13 es un comunicador GSM compacto para alarmas de puertas/ventanas con sensor magnético que reporta eventos de intrusión e información de ubicación básica a plataformas remotas. Está pensado para seguridad perimetral discreta y se integra con Plaspy cuando se configura para enviar informes por GPRS/TCP-IP o SMS formateados.

- Detección de intrusión en puertas y ventanas mediante una caja con sensor magnético para reportar eventos de apertura/cierre.
- Reporte por GSM en frecuencias cuatribanda para alertas remotas por SMS y envío de datos GPRS TCP/IP a plataformas.
- Conciencia básica de ubicación usando LBS y características de posicionamiento GPS cuando están disponibles.
- Verificación de alarma por voz bidireccional para permitir la confirmación inmediata de eventos mediante llamada.
- Diseño compacto y recargable pensado para montaje poco visible en puertas, ventanas y activos pequeños.

## Funciones principales del Reachfar - RF-V13

- Detección de intrusión en puertas/ventanas con sensor magnético y envío inmediato de alarmas.
- Soporte GSM cuatribanda para conectividad celular amplia y alertas por SMS.
- Capacidad de reporte GPRS Clase 12 TCP/IP para enviar eventos y ubicación a plataformas en línea.
- Posicionamiento LBS para ubicación aproximada (precisión aproximada 200–800 m) y características de posicionamiento temporal GPS cuando el GPS está disponible.
- Funcionalidad de llamadas de voz bidireccionales para verificación de alarmas y coordinación de respuesta.
- Batería interna recargable y host compacto apto para montaje discreto.
- Opciones de configuración remota mediante comandos SMS y la app móvil de Reachfar.

## Cómo funcionan estas funciones con Plaspy

Cuando el RF-V13 está configurado para reportar a Plaspy, los eventos de alarma, el estado del dispositivo y la información de ubicación disponible son recibidos y presentados para monitoreo y respuesta. Plaspy consolida los informes entrantes en eventos con marca de tiempo, visualizaciones de ubicación y reglas de alerta para que su equipo pueda actuar rápidamente ante alarmas perimetrales.

- Los eventos de alarma del sensor magnético se registran y pueden activar notificaciones en Plaspy según las reglas de su cuenta.
- Los datos de ubicación basados en LBS y GPS se muestran como posiciones contextuales en el mapa de Plaspy; LBS ofrece ubicación aproximada cuando el GPS no está disponible.
- Plaspy acepta informes por SMS y GPRS/TCP-IP del RF-V13 para capturar eventos; detecta automáticamente protocolos de rastreadores comunes.
- El estado de batería y conectividad reportado por el dispositivo puede registrarse para monitoreo de salud del equipo.
- La verificación por voz bidireccional sigue siendo una función a nivel de dispositivo, mientras Plaspy proporciona historial centralizado y entrega de alertas.
- Plaspy puede correlacionar eventos del RF-V13 con otros dispositivos compatibles con Plaspy para ofrecer una visión situacional más amplia.

## Casos de uso típicos

- Monitoreo perimetral de casas y departamentos con alertas inmediatas y verificación por voz para posibles intrusiones.
- Seguridad en pequeños comercios o puestos donde sensores discretos en puertas/ventanas notifiquen a propietarios o personal de forma remota.
- Monitoreo de propiedades o almacenes remotos donde la ubicación aproximada y alertas de intrusión son suficientes.
- Ubicaciones temporales o móviles que requieren un dispositivo de alarma poco intrusivo con reporte celular.
- Accesos que necesitan alarmas verificadas para reducir despachos innecesarios mediante la confirmación por voz bidireccional.

## Notas sobre disponibilidad de funciones

- La funcionalidad depende del firmware y la revisión de hardware del dispositivo; nombres y comportamientos de funciones pueden variar entre versiones.
- El método de instalación y la cobertura celular local afectarán la confiabilidad de los reportes y la precisión del posicionamiento LBS.
- Variantes regionales del fabricante o ajustes de operadores pueden cambiar los modos de reporte soportados o los formatos SMS.
- En algunas fuentes el RF-V13 aparece listado como fuera de producción; confirme disponibilidad y soporte antes de desplegar masivamente.
- Verifique siempre el firmware específico del dispositivo, los comandos de configuración y la compatibilidad con Plaspy antes de su uso operativo.

## Por qué usar Plaspy con estas funciones

Combinar el RF-V13 con Plaspy centraliza los eventos de alarma, el contexto de ubicación y los registros históricos en una sola plataforma, de modo que su equipo pueda monitorear la seguridad perimetral junto con otros activos rastreados. Las reglas de eventos y las opciones de notificación de Plaspy ayudan a asegurar que los reportes de intrusión y la información de salud del dispositivo lleguen rápidamente a las personas indicadas, mientras la plataforma conserva un registro con marcas de tiempo para auditoría y análisis de respuesta.

Para conocer más sobre cómo Plaspy puede gestionar reportes de alarma y ubicación de dispositivos como el RF-V13, visite https://www.plaspy.com. Para las especificaciones de producto más recientes, el comportamiento de firmware y detalles de implementación del fabricante, consulte los recursos oficiales de Reachfar en https://www.reachfargps.com/ para verificar la información actual.
