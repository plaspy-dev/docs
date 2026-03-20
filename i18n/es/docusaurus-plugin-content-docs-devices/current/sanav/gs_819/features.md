---
slug: /sanav/gs_819/features
id: gs_819-features
sidebar_label: Features
title: Sanav - GS-819 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador GPS Sanav GS-819 y su integración con Plaspy para seguimiento y monitoreo
keywords:
  - funciones Sanav GS-819
  - rastreador GPS Sanav GS-819
  - GS-819 Plaspy
  - rastreador vehicular Sanav
  - entradas salidas GS-819
  - sensor de movimiento Sanav
  - GS-819 3G GPRS SMS
  - funciones rastreador Sanav
  - informes configurables GS-819
  - seguimiento GPS Sanav
---

# Sanav - GS-819 Características

Esta página describe el contexto público de funciones para el uso del Sanav GS-819 con Plaspy. Resume las capacidades del modelo relevantes para el rastreo vehicular, cómo el dispositivo reporta posiciones y eventos, y cómo esas capacidades se reflejan en el monitoreo y la operación dentro de Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el cableado de instalación y la implementación del fabricante. Para comportamiento específico del equipo, opciones avanzadas de configuración y detalles técnicos más recientes consulte la documentación oficial de Sanav y las notas de versión.

## Resumen de funciones

El GS-819 es un rastreador vehicular compacto y resistente, orientado a ofrecer posicionamiento GPS fiable y reportes flexibles. Integra módulos GNSS y celular de alta sensibilidad con múltiples interfaces de E/S y reporte configurable para soportar flujos de trabajo comunes de rastreo de vehículos.

- Alta sensibilidad GPS para obtener fijaciones de posición confiables en entornos típicos de vehículo
- Canales de reporte múltiples mediante 3G, GPRS o SMS para conectividad flexible
- Detección ACC ON/OFF para monitorear el estado de encendido del vehículo y su uso
- Varias opciones de E/S, incluyendo salidas, entradas analógicas y entradas digitales para integración de sensores y relés
- Reporte automático programable por tiempo o distancia para controlar la cadencia de seguimiento
- Sensor de movimiento integrado y memoria flash local para captura y almacenamiento intermedio de eventos

## Características principales del Sanav - GS-819

- Receptor SiRF Star IV para la capacidad de posicionamiento GNSS
- Módulo celular Cinterion EHS6 compatible con comunicaciones 3G y GPRS
- Reporte de posición vía 3G GPRS o, en fallback, mediante SMS
- Detección ACC ON/OFF para monitorizar el estado de ignición
- 4 salidas, 2 entradas analógicas y 4 entradas digitales para conexiones de dispositivos y sensores externos
- Configuración vía comandos SMS COTA y software de PC para ajuste remoto o local
- Reporte automático programable según intervalos de tiempo o umbrales de distancia
- Sensor de movimiento integrado y memoria flash a bordo para registro local y buffering de eventos

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y muestra la telemetría y las actualizaciones de estado del GS-819 para que usted pueda monitorear vehículos y eventos desde una interfaz central. Plaspy también detecta automáticamente protocolos de rastreadores soportados y acepta datos de dispositivos compatibles, lo que facilita la integración.

- Las posiciones GPS en tiempo real e históricas se muestran en los mapas de Plaspy para visualizar la ubicación y las rutas del vehículo
- El estado de ignición detectado por ACC ON/OFF aparece como evento o atributo de estado para cada dispositivo
- Los intervalos de reporte configurables en el equipo determinan la frecuencia de actualización que se refleja en Plaspy
- Estados de E/S, como entradas digitales y salidas, pueden registrarse y presentarse en los registros de eventos
- Plaspy acepta tráfico de dispositivos hacia el dominio de la plataforma y soporta configuraciones de transporte comunes, de modo que las unidades GS-819 pueden reportar en la plataforma sin trabajo de protocolo personalizado

## Casos de uso típicos

- Rastreo de ubicación y historial de recorridos de flotas
- Monitoreo del uso del vehículo y ciclos de trabajo basado en la ignición
- Supervisión remota de entradas y salidas auxiliares para control operacional
- Rastreo de vehículos de reparto o servicio con intervalos de reporte configurables
- Seguimiento de activos vehiculares que requieren una carcasa robusta para el rastreador

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y las revisiones de hardware del fabricante pueden modificar qué funciones están disponibles o cómo se comportan
- Las variantes regionales y la cobertura de la red celular pueden afectar la conectividad 3G o GPRS y el rendimiento de reporte
- La instalación física y el cableado determinan qué entradas y salidas son utilizables en cada instalación
- El soporte de la interfaz RS 232 para accesorios externos depende de la configuración del equipo y del equipo conectado
- Confirme siempre el comportamiento específico de funciones y los comandos de configuración con la documentación oficial del fabricante

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el Sanav GS-819 centraliza los datos de ubicación y eventos en un único entorno de monitoreo, facilitando el rastreo de vehículos, la revisión de historial y la respuesta ante eventos operativos. La detección de dispositivos y el manejo de datos de Plaspy permiten a los administradores gestionar la cadencia de reportes, ver estados de ignición y entradas, y analizar patrones de movimiento en toda la flota.

Si desea más información sobre cómo Plaspy trabaja con dispositivos como el GS-819 visite https://www.plaspy.com. Para los detalles técnicos más actuales y específicos del dispositivo, avisos de firmware y guías de instalación consulte al fabricante en http://es.sanav.com/
