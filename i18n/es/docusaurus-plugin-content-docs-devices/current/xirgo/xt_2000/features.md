---
slug: /xirgo/xt_2000/features
id: xt_2000-features
sidebar_label: Features
title: Xirgo - XT-2000 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del módem OBD II GPS Xirgo XT-2000 y su integración con Plaspy para rastreo de vehículos
keywords:
  - Xirgo XT-2000
  - características XT-2000
  - rastreador GPS Xirgo
  - XT-2000 OBD II
  - XT-2000 Plaspy
  - rastreo de vehículos
  - gestión de flotas
  - telemática OBDII
  - monitoreo de conducta del conductor
  - códigos de falla diagnóstica
---

# Xirgo - Características del XT-2000

Esta página ofrece un resumen público y no sensible de las funciones del Xirgo XT-2000 y cómo las capacidades del dispositivo se traducen en uso operativo dentro de Plaspy. Describe las funciones principales orientadas al usuario y aclara qué puede esperar usted, como gestor o administrador de flotas, al desplegar el XT-2000 con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Use esta página como una guía práctica y consulte al fabricante para obtener los detalles más actuales y específicos del dispositivo.

## Resumen de funciones

El XT-2000 es un módem OBD II tipo plug and play con motor GPS integrado y sensores a bordo, diseñado para vehículos de pasajeros y de servicio ligero. Transmite la ubicación del vehículo y parámetros seleccionados del OBD II a través de redes celulares, siendo adecuado para múltiples aplicaciones telemáticas donde la instalación rápida y el acceso a parámetros del vehículo son importantes.

- Instalación plug and play mediante el conector J1962 OBD II integrado para despliegues rápidos
- Motor GPS y antenas integradas para seguimiento continuo de ubicación y control de velocidad
- Acceso a parámetros OBD II como VIN, estado de ignición, velocidad y códigos diagnósticos
- Acelerómetro incorporado para detección de movimiento y eventos básicos
- Soporte para TCP, UDP, FTP y actualizaciones de firmware por aire para mantener los dispositivos al día

## Funciones principales del Xirgo - XT-2000

- Interfaz OBD II integrada para acceder a datos del vehículo a través del puerto de diagnóstico
- Motor GPS y antena integrados para reporte de posición y velocidad
- Acelerómetro para detectar eventos de movimiento y proporcionar conciencia básica de actividad
- Soporte para reporte de códigos de diagnóstico DTC según lo que provea el vehículo
- Diseño compacto y alimentado por el puerto OBD para una instalación sencilla sin fuentes de alimentación externas
- Compatibilidad con múltiples protocolos OBD II para amplio soporte de vehículos en Norteamérica
- Soporte de comunicación de red incluyendo TCP, UDP y FTP para uplink de datos y gestión de dispositivos

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y procesa la telemetría y los eventos que envía el XT-2000, de modo que usted puede ver la ubicación, el movimiento y los parámetros seleccionados del vehículo desde la plataforma Plaspy. Plaspy detecta automáticamente los protocolos de los rastreadores e ingiere datos de posición y eventos para visibilidad e informes.

- Los datos de ubicación y velocidad del XT-2000 aparecen en Plaspy como actualizaciones de posición en tiempo real y rutas históricas
- Parámetros OBD II como VIN y estado de ignición proporcionados por el dispositivo están disponibles para identificación de activos y monitoreo de estado
- Los códigos de falla diagnóstica que reporte el XT-2000 pueden almacenarse en Plaspy para seguimiento de mantenimiento e integración en flujos de trabajo
- Los eventos de movimiento generados por el acelerómetro pueden mostrarse como eventos dentro de Plaspy para detección de actividad y desplazamiento
- El XT-2000 puede configurarse para reportar a Plaspy mediante TCP o UDP; Plaspy acepta conexiones de rastreadores y detecta automáticamente el protocolo del dispositivo

## Casos de uso típicos

- Rastreo de flotas para automóviles particulares y vehículos de servicio ligero con instalación rápida y sin herramientas
- Programas telemáticos posventa que requieren VIN y estado básico del vehículo
- Flujos de trabajo de monitoreo de conducta del conductor que aprovechan velocidad, estado de ignición y eventos de movimiento
- Flujos de trabajo de mantenimiento y diagnóstico que recopilan DTC y parámetros OBD II para priorización y gestión de reparaciones
- Servicios al consumidor y por suscripción que ofrecen localización del vehículo y acceso a datos básicos del mismo

## Notas sobre disponibilidad de funciones

- Las funciones del dispositivo dependen de la versión de firmware y de la configuración del fabricante; los conjuntos de funciones pueden cambiar con las actualizaciones
- Las revisiones de hardware y las variantes regionales pueden afectar los protocolos OBD II soportados y la compatibilidad
- Algunos parámetros OBD II y códigos de diagnóstico dependen del vehículo y pueden no estar disponibles en todas las marcas y modelos
- El método de instalación es relevante: el XT-2000 requiere conexión al puerto OBD II y la posición puede influir en la recepción GPS
- Para detalles más recientes, documentación y soporte específico del dispositivo, consulte la documentación del fabricante

## Por qué usar Plaspy con estas funciones

Usar el XT-2000 con Plaspy ofrece a las organizaciones una vía sencilla para capturar la ubicación del vehículo, parámetros OBD II clave y eventos de movimiento con un esfuerzo de instalación mínimo. La plataforma de Plaspy está diseñada para ingerir telemetría estándar de rastreadores, de modo que los equipos puedan centralizar el monitoreo, los informes históricos y la supervisión operativa de flotas y programas vehiculares.

Learn more about Plaspy and how the platform can be used with OBD II GPS devices at https://www.plaspy.com. For the most current, device specific feature details, firmware behavior, and manufacturer documentation please verify information at https://xirgo.com/
