---
slug: /gelix/gelix_g_lite/features
id: gelix_g_lite-features
sidebar_label: Features
title: Gelix - Gelix G Lite Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador Gelix G Lite y su integración con Plaspy para seguimiento de vehículos y activos
keywords:
  - Características Gelix G Lite
  - Rastreador GPS Gelix
  - Gelix G Lite Plaspy
  - Gelix GLONASS GPS
  - Seguimiento de vehículos Gelix
  - Seguimiento de flotas Gelix
  - Soporte de relé Gelix
  - Compatible sensor de combustible Gelix
  - Compatible bus CAN Gelix
  - Capacidades Gelix G Lite
---

# Gelix - Características de Gelix G Lite

Esta página ofrece un resumen público de las características del rastreador Gelix G Lite y de cómo sus capacidades se aprovechan en Plaspy para la geolocalización y el monitoreo de flotas o activos. Se describen las funciones operativas principales y no sensibles que son relevantes al integrar unidades Gelix G Lite en la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de cada función pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para configuraciones específicas del dispositivo, actualizaciones de firmware e instrucciones técnicas detalladas, consulte la documentación oficial de Gelix y al proveedor del equipo para obtener la información más actualizada.

## Resumen de características

El Gelix G Lite es un rastreador telemático orientado a la navegación que combina recepción GLONASS y GPS con conectividad celular para ofrecer reportes de posición confiables e interfaces con hardware de monitoreo vehicular. Está diseñado para arrancar rápidamente e integrarse con sistemas y elementos de control comunes en vehículos, aportando valor práctico a operadores de flotas y administradores de activos.

- Adquisición rápida de posición después del encendido, lo que permite un rastreo más ágil tras iniciar el dispositivo
- Recepción combinada GLONASS y GPS para aumentar la disponibilidad de satélites y la fiabilidad del posicionamiento
- Modos de recepción multicanal para mejorar el rendimiento de seguimiento en condiciones variables
- Salida para relé para controlar cerraduras electrónicas u otros elementos conmutados del vehículo
- Compatibilidad con sensores externos de nivel de combustible para monitoreo cuando dichos sensores estén instalados
- Soporte para integración con adaptadores de bus CAN del vehículo para incorporar datos vehiculares a los flujos telemáticos

## Características principales del Gelix G Lite

- Receptor de navegación GLONASS y GPS para posicionamiento satelital fiable
- Comportamiento de arranque rápido diseñado para captar la posición inicial poco después de encenderse
- Modo de 12 canales para recepción GPS y modo de 24 canales para la recepción combinada GLONASS/GPS
- Puntos de conexión para relé que permiten el control externo de cerraduras electrónicas o dispositivos conmutados
- Compatibilidad con sensores de nivel de combustible para reportar mediciones relacionadas con combustible cuando estén configurados
- Compatibilidad con adaptadores de bus CAN del vehículo para permitir la recolección de datos vehiculares mediante adaptadores soportados
- Módulo GLONASS/GPS probado por el fabricante y validado por importantes fabricantes nacionales
- Diseñado para operar con redes GSM GPRS estándar para el reporte de datos

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe mensajes de ubicación y estado desde los rastreadores compatibles y los presenta en mapas, reportes y flujos de eventos para supervisión operativa. Cuando un Gelix G Lite está conectado, Plaspy detecta automáticamente el protocolo del dispositivo y muestra la información posicional y de sensores que el rastreador transmite.

- Los reportes de posición desde GLONASS y GPS aparecen en el mapa de Plaspy para seguimiento en tiempo real y histórico
- El comportamiento de arranque rápido mejora la visibilidad de la ubicación inicial en Plaspy tras ciclos de encendido del dispositivo
- Las acciones de relé y los eventos de control remoto pueden registrarse como eventos editables o acciones dentro de Plaspy cuando el dispositivo informa el estado del relé o acepta comandos remotos
- Las entradas de sensores de combustible y las métricas derivadas del bus CAN pueden llegar a Plaspy como campos de telemetría cuando el rastreador y los adaptadores están configurados para reportarlos
- Plaspy ofrece historial de eventos, reproducción de ubicación y herramientas de reporte que aprovechan los datos del rastreador para gestión y análisis de flotas

## Casos de uso típicos

- Seguimiento en tiempo real de flotas para vehículos de reparto, servicio o logística
- Control remoto de cerraduras electrónicas y gestión de acceso para seguridad de activos
- Monitoreo y conciliación de niveles de combustible en vehículos equipados con sensores de combustible
- Integración de datos diagnósticos u operativos del vehículo mediante adaptadores de bus CAN para supervisión de flotas
- Rastreo de activos para vehículos en alquiler o uso compartido que requieren reporte de posición consistente
- Revisión de ubicación e historial post viaje para auditorías operativas y optimización de rutas

## Notas sobre disponibilidad de funciones

- La presencia de cada función depende de la versión de firmware y de la revisión de hardware específica de cada unidad Gelix G Lite
- Compatibilidad con relé, sensores de combustible y bus CAN puede requerir cableado específico, adaptadores opcionales o instalación por parte del distribuidor
- El soporte de redes celulares regionales y la configuración GPRS pueden afectar la conectividad del dispositivo y deben validarse en la instalación
- Opciones de configuración del fabricante y actualizaciones de firmware pueden habilitar o modificar la forma en que ciertas funciones reportan a Plaspy
- Verifique qué funciones están habilitadas en un dispositivo antes del despliegue y confirme los pasos de integración con la documentación del instalador

## Por qué usar Plaspy con estas características

Usar Plaspy con dispositivos Gelix G Lite ofrece una vía práctica para convertir datos de posición e interfaces vehiculares en monitoreo accionable, reportes y controles operativos. Plaspy enfatiza la visibilidad, la reproducción histórica y el manejo de eventos para que las organizaciones puedan emplear el Gelix G Lite tanto en el rastreo rutinario de ubicaciones como en integraciones que impliquen control remoto o telemetría basada en sensores.

Learn more about how Plaspy supports telematics devices and fleet operations at https://www.plaspy.com. For the latest device specific feature details, firmware behavior, and manufacturer instructions, please verify information with Gelix on the official website http://www.gelix.com/.
