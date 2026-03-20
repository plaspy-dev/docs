---
slug: /concox/jm_ll01/features
id: jm_ll01-features
sidebar_label: Features
title: Concox - JM-LL01 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Concox JM-LL01 y su integración con Plaspy para seguimiento y telemetría a largo plazo
keywords:
  - Concox JM-LL01
  - funciones Concox JM-LL01
  - rastreador GPS Concox JM-LL01
  - compatibilidad JM-LL01 Plaspy
  - rastreador de activos batería de larga duración
  - rastreador LTE Cat M1 NB-IoT
  - rastreador GPS BDS
  - rastreador detección de manipulación
  - configuración BLE 4.2
  - registro en el dispositivo
---

# Concox - JM-LL01 Funciones

Esta página ofrece una visión pública de las funciones del rastreador Concox JM-LL01 en relación con Plaspy. Describe las capacidades prácticas del equipo, cómo se reflejan dentro de Plaspy y los escenarios operativos habituales donde se emplea el JM-LL01. El contenido está pensado para planificación y descubrimiento general, no como guía de configuración específica del dispositivo.

La disponibilidad exacta de funciones en una unidad concreta depende de la versión de firmware, la revisión de hardware, la variante regional del modelo, el método de instalación y de cómo el fabricante implemente funciones específicas. Usted debe consultar la documentación oficial de Concox y las notas de versión para detalles específicos por modelo y firmware antes del despliegue.

## Resumen de funciones

El JM-LL01 es un rastreador GNSS compacto y resistente, optimizado para despliegues de baja potencia y larga duración, así como para gestión de flotas y activos. Combina conectividad celular multi-red, posicionamiento por múltiples fuentes, batería de gran capacidad y sensores básicos de anti-manipulación/monitoreo para ofrecer telemetría de ubicación y eventos confiable en activos no atendidos.

- Batería recargable de larga duración de 10,000 mAh y perfiles de energía configurables para operación prolongada sin supervisión.
- Conectividad LTE Cat M1 y NB‑IoT con respaldo GSM 2G para amplia cobertura y telemetría de bajo consumo.
- Posicionamiento GNSS de múltiples fuentes usando GPS y BDS con LBS como respaldo cuando la señal satelital es débil.
- Registro en el dispositivo para conservar el historial de ubicaciones fuera de cobertura, con subidas cuando se restablece la conectividad.
- Detección de manipulación y sensor de movimiento para soportar alertas antirrobo y notificaciones de desplazamiento.
- BLE 4.2 para configuración local y flujos opcionales de puesta en marcha local.

## Funciones principales de Concox - JM-LL01

- Conectividad celular optimizada para IoT que incluye LTE Cat M1 y NB‑IoT con respaldo GSM 2G para continuidad.
- Posicionamiento GNSS de múltiples fuentes que combina GPS y BDS con LBS de respaldo para mayor disponibilidad de ubicación.
- Batería recargable de alta capacidad (10,000 mAh) con modos de operación configurables para equilibrar frecuencia de reporte y duración de batería.
- Detección de manipulación mediante sensor de luz y monitorización de movimiento con acelerómetro triaxial para alertas de robo o alteración.
- Memoria en el dispositivo para registro offline de posiciones GPS y preservación de rastros durante cortes de conectividad.
- Radio BLE 4.2 para configuración local, puesta en servicio y emparejamiento opcional con periféricos Bluetooth compatibles.
- Carcasa robusta con grado IP65 y opciones de montaje magnético o con correa para instalación rápida y segura en activos.
- Perfiles de reporte y energía configurables para soportar una amplia gama de escenarios de monitoreo de activos a largo plazo.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere la telemetría de ubicación y eventos de unidades Concox JM-LL01 compatibles y presenta esa información mediante mapas en tiempo real, reglas de alerta e informes históricos. La conectividad del rastreador, sus sensores y el registro en el dispositivo trabajan en conjunto para proporcionar visibilidad continua y notificaciones basadas en eventos en Plaspy incluso cuando las condiciones de red varían.

- Las actualizaciones de ubicación en tiempo real y la telemetría aparecen en los mapas y paneles de Plaspy para conciencia situacional.
- Las alertas por manipulación, movimiento, vibración y otros eventos se integran en los flujos de alertas de Plaspy para permitir acciones oportunas.
- Las posiciones registradas en el dispositivo se suben a Plaspy cuando se restablece la conectividad, preservando los datos históricos para informes.
- El estado de batería y la información del modo de energía configurado pueden mostrarse en Plaspy para apoyar la planificación de mantenimiento y el seguimiento del ciclo de vida de la batería.
- La configuración local vía BLE puede emplearse durante la instalación para ajustar parámetros del equipo antes o mientras registra el dispositivo en Plaspy.

## Casos de uso típicos

- Monitoreo a largo plazo de contenedores, remolques y equipos en alquiler donde la duración de batería y la operación sin supervisión son prioritarios.
- Seguimiento de flotas y logística para brindar visibilidad de rutas y alertas de movimiento en activos distribuidos.
- Vigilancia anti‑robo y seguridad usando detección de manipulación, alertas de movimiento y notificaciones oportunas encaminadas a Plaspy.
- Despliegues remotos o con cobertura intermitente donde el registro en el dispositivo conserva el historial hasta que se pueda subir.
- Instalaciones temporales o reubicables usando base magnética o montaje con correa para fijado y remoción rápida.
- Seguimiento del ciclo de vida y redistribución de activos de alto valor que se mueven entre sitios.

## Notas sobre disponibilidad de funciones

- La presencia y el comportamiento de las funciones dependen de la versión de firmware y la revisión de hardware; las capacidades pueden cambiar con actualizaciones de firmware.
- Las variantes regionales o por operador pueden diferir en bandas celulares soportadas, certificaciones o comportamiento de respaldo de red.
- Algunas funciones, como emparejamiento de periféricos BLE, umbrales de alerta específicos y estimaciones de tiempo de funcionamiento, dependen de la configuración y la instalación.
- La capacidad y retención del registro en el dispositivo dependen de los intervalos de reporte configurados y de cómo el firmware gestione la cola de datos.
- Verifique siempre las capacidades exactas de una unidad y la compilación de firmware contra la documentación oficial de Concox.

## Por qué usar Plaspy con estas funciones

Combinar el Concox JM-LL01 con Plaspy centraliza datos de ubicación, eventos y estado en una plataforma que facilita monitoreo, informes y alertas para activos distribuidos. Las herramientas de visualización, el motor de reglas y los informes de Plaspy ayudan a convertir las posiciones GNSS del JM-LL01, los registros en dispositivo y los eventos de sensores en información accionable para equipos de operaciones, seguridad y mantenimiento.

Learn more about Plaspy and how it supports trackers like the JM-LL01 at https://www.plaspy.com. For the most current device specifications, firmware behavior, and manufacturer guidance, please consult Concox at https://www.iconcox.com/ to verify device-specific details.
