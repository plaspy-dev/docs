---
slug: /thingsys/ts_g17w/features
id: ts_g17w-features
sidebar_label: Features
title: ThingSys - TS-G17W Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador ThingSys TS-G17W y su integración con Plaspy para rastreo y alertas en tiempo real
keywords:
  - ThingSys TS-G17W
  - TS-G17W características
  - rastreador GPS ThingSys
  - TS-G17W Plaspy
  - rastreador GPS para vehículos
  - rastreador GPS 4G
  - rastreador GPS IP67
  - dispositivo de rastreo para flotas
  - funciones de rastreador GPS
  - rastreo en tiempo real
---

# ThingSys - Características del TS-G17W

Esta página presenta las capacidades públicas del rastreador ThingSys TS-G17W cuando se utiliza con Plaspy. Aquí se resumen las funcionalidades prácticas que usted verá en Plaspy al desplegar el equipo para rastreo en vivo, alertas y telemetría básica del vehículo. El foco está en las características orientadas al usuario y el valor operativo, no en instrucciones detalladas de configuración.

La disponibilidad exacta de funciones en una unidad concreta puede variar según la versión de firmware, la revisión de hardware, las bandas regionales y el método de instalación. Verifique siempre el firmware del dispositivo, las bandas soportadas y cualquier accesorio opcional con el fabricante y compruebe el comportamiento en sitio durante la puesta en marcha.

## Resumen de funciones

El TS-G17W es un rastreador vehicular compacto y resistente, diseñado para reportes continuos de ubicación en entornos móviles o expuestos. Combina conectividad celular con un receptor GNSS de alta sensibilidad y una pequeña batería de respaldo para mantener los reportes durante interrupciones breves de energía, por lo que resulta apropiado para vehículos de flota, autos de alquiler, activos logísticos y despliegues antirrobo.

- Carcasa impermeable IP67 y diseño compacto para instalaciones discretas en entornos exigentes
- Conectividad primaria 4G LTE FDD con retroceso a 2G GSM donde esté soportado regionalmente para mayor cobertura
- GNSS de alta sensibilidad con precisión típica alrededor de 5 metros para reportes de ubicación precisos
- Batería de respaldo integrada para permitir envíos breves de posición durante cortes de energía y entrada tolerante a voltajes de instalación vehicular
- Entradas y salidas orientadas a vehículo, incluyendo detección de encendido (ACC) y soporte opcional de relay externo para corte remoto
- Soporta modos de trazado por GPRS y sondeo por SMS para adaptarse a áreas con cobertura de datos limitada

## Funciones principales del ThingSys - TS-G17W

- Conectividad 4G LTE FDD con fallback regional a 2G para compatibilidad con más operadores
- Receptor GNSS de alta sensibilidad con precisión típica cercana a 5 m y buen desempeño en señales débiles
- Batería de respaldo Li-ion 3.7 V integrada para permitir reportes cortos durante interrupciones de energía
- Detección ACC para reportar el estado encendido/apagado del vehículo y segmentar viajes por eventos
- Interfaz opcional para relay externo que permite la funcionalidad de corte remoto cuando se instala
- Clasificación IP67 y amplio rango de voltaje de operación, adecuado para sistemas vehiculares
- Soporte para modo trazado GPRS y sondeo por SMS para telemetría flexible según condiciones de red

## Cómo interactúan estas funciones con Plaspy

Plaspy recibe los reportes del TS-G17W y los presenta como puntos de ubicación en tiempo real, trayectos históricos y eventos de alerta en paneles y reportes automatizados. La integración está pensada para ser sencilla: Plaspy detecta automáticamente protocolos comunes de rastreadores y muestra los datos del dispositivo junto con la telemetría de la flota para supervisión operativa.

- Actualizaciones de ubicación en tiempo real y trayectos históricos visibles en Plaspy para enrutamiento y reproducción de recorridos
- El estado de encendido (ignición) se reporta a Plaspy para que los eventos de on/off y la segmentación de viajes aparezcan en los informes
- Eventos de alarma como exceso de velocidad y vibración se entregan a Plaspy como alertas para flujos de trabajo basados en reglas
- Los reportes en modo trazado GPRS o por sondeo SMS son procesados por Plaspy cuando la cobertura de datos es variable
- Comandos de corte remoto son compatibles cuando el rastreador está configurado con un relay externo y el enrutamiento de plataforma está habilitado

## Casos de uso típicos

- Gestión de flotas con rastreo en vivo, historial de viajes y monitoreo de eventos de conductores
- Flujos de trabajo de antirrobo y recuperación que usan corte remoto y notificaciones de alarma
- Monitoreo de vehículos de renta y uso compartido para controlar estado de encendido e historial de ubicaciones
- Rastreo logístico y de activos para remolques o equipos expuestos que requieren protección IP67
- Despliegues con cobertura celular variable donde el sondeo por SMS complementa los reportes GPRS

## Notas sobre disponibilidad de funciones

- El soporte de bandas celulares y el comportamiento de fallback dependen de la SKU regional y la asignación de bandas del operador
- El chipset GNSS exacto y la sensibilidad pueden variar según lote de producción o modelo regional; los valores reportados son típicos
- Características opcionales como el relay externo requieren la instalación y cableado adecuados y pueden no venir con todas las unidades
- La versión de firmware influye en los tipos de alerta disponibles, comandos de configuración y modos de reporte
- Verifique el método de instalación y el cableado de sensores al momento del despliegue para asegurar que señales como la detección ACC se lean de forma confiable

## Por qué usar Plaspy con estas funciones

Usar el TS-G17W con Plaspy permite convertir hardware de rastreo vehicular robusto en información operativa útil. El rastreador aporta puntos de ubicación, eventos de encendido y alarmas configurables, mientras que Plaspy presenta esa información en mapas en vivo, reglas y reportes para que los equipos monitoreen flotas, respondan incidentes y analicen actividad histórica desde una única plataforma.

Para saber más sobre Plaspy y cómo la plataforma puede trabajar con dispositivos ThingSys visite https://www.plaspy.com. Para detalles específicos del dispositivo, comportamiento de firmware e información de modelos regionales consulte al fabricante en https://www.thingsys.com/.
