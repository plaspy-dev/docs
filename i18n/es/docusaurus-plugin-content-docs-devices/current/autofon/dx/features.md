---
slug: /autofon/dx/features
id: dx-features
sidebar_label: Features
title: AutoFon - DX Маяк Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador AutoFon DX Маяк y su integración con Plaspy para monitoreo de ubicación y eventos
keywords:
  - AutoFon DX Маяк
  - funciones AutoFon DX Mayak
  - rastreador GPS DX Mayak
  - funciones rastreador GPS AutoFon
  - compatibilidad DX Mayak Plaspy
  - rastreo de vehículos AutoFon
  - rastreador GLONASS GPS AutoFon
  - orientación BLE AutoFon
  - detección de golpes acelerómetro
  - rastreador GPS discreto AutoFon
---

# AutoFon - DX Маяк — Funciones

Esta página ofrece un panorama público de las funciones del AutoFon DX Маяк y explica cómo sus capacidades se presentan y utilizan dentro de Plaspy. Se centra en información práctica y no sensible sobre el reporte de ubicación, la detección de eventos, los modos de operación y las formas habituales en que el rastreador se integra en los flujos de monitoreo de Plaspy.

La disponibilidad y el comportamiento exactos de cada función pueden variar según la versión del firmware, la revisión del hardware, el método de instalación y la implementación del fabricante. Para obtener la sintaxis precisa de comandos, cambios de firmware y la orientación más reciente del fabricante, consulte la documentación oficial de AutoFon y las notas de firmware.

## Resumen de funciones

El AutoFon DX Маяк está diseñado para ofrecer reportes de posición confiables y notificaciones de eventos combinando navegación satelital y respaldo por red celular, junto con modos de bajo consumo y soporte BLE. En Plaspy, el rastreador puede entregar actualizaciones de ubicación, eventos de movimiento y de impacto, además de indicadores básicos de estado del dispositivo para visibilidad y control operativo.

- Posicionamiento GNSS preciso usando GLONASS y GPS para fijar coordenadas
- Ubicación aproximada mediante datos de estaciones base celulares cuando no hay señal satelital
- Reporte de coordenadas y eventos a través de redes GSM 2G mediante GPRS o por SMS
- Acelerómetro integrado para detectar movimiento y golpes, útil en alertas anti robo e impactos
- Funciones Bluetooth BLE para detección de presencia de smartphones y localización direccional por BLE
- Modos de energía configurables para equilibrar respuesta y duración de batería

## Funciones principales del AutoFon - DX Маяк

- Posicionamiento por satélite GLONASS y GPS para coordenadas precisas y seguimiento de movimiento
- Posicionamiento aproximado por estaciones base celulares como respaldo cuando no hay satélites disponibles
- Vías de reporte duales: paquetes GPRS a un servidor de monitoreo o mensajes SMS a números seleccionados
- Acelerómetro integrado para monitoreo de movimiento y detección de golpes e impactos
- Bluetooth BLE para etiquetado de presencia con el smartphone del propietario y para localización direccional basada en BLE
- Dos modos principales de operación: modo en línea continuo y modo de sueño por intervalos para mayor autonomía
- Memoria no volátil tipo caja negra para almacenar paquetes GPRS no enviados hasta que sea posible transmitirlos
- Medidor de consumo energético y telemetría básica como nivel de batería, temperatura y calidad de señal

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y normaliza la telemetría del DX Маяк para que la ubicación, los eventos de movimiento y el estado del dispositivo sean visibles en una única interfaz de monitoreo. Plaspy detecta automáticamente los protocolos del rastreador y acepta reportes de dispositivos DX Маяк configurados para enviar datos al servidor de monitoreo de Plaspy.

- Las coordenadas GNSS y el movimiento derivado (velocidad y rumbo) aparecen en los mapas y en el historial de recorridos de Plaspy
- Las posiciones por respaldo celular se muestran como ubicaciones aproximadas cuando no hay fijaciones satelitales
- Los eventos de movimiento y los golpes reportados por el acelerómetro se registran con sello de tiempo para alertas y auditoría
- Los paquetes almacenados en la caja negra se pueden entregar a Plaspy cuando se restablece la conectividad, preservando el historial de eventos
- La telemetría del dispositivo, como nivel de batería, temperatura y fuerza de señal, está disponible para monitorear el estado operativo
- Plaspy soporta flujos comunes de configuración para que los dispositivos apunten al endpoint de monitoreo; Plaspy detecta el protocolo del rastreador de forma automática

## Casos de uso típicos

- Monitoreo anti robo y recuperación de autos, motocicletas y vehículos todoterreno
- Seguimiento de carga valiosa y envíos donde se requiere instalación discreta
- Seguimiento rutinario de flotas y vehículos oficiales para visibilidad de rutas y registro de eventos
- Rastreo de objetos personales y activos como bicicletas, herramientas pequeñas o bienes portátiles
- Conciencia de ubicación y alertas de presencia para niños, adultos mayores o mascotas
- Búsqueda local y recuperación en el sitio usando localización direccional BLE junto con la aplicación AutoFon BLE

## Notas sobre disponibilidad de funciones

- La presencia y el comportamiento de las funciones pueden cambiar con actualizaciones de firmware y revisiones de hardware; consulte las notas de la versión de firmware para detalles
- La autonomía de la batería depende en gran medida del modo de operación, la frecuencia de reporte y de si el GNSS se utiliza de forma continua o intermitente
- Las funciones BLE requieren el smartphone del propietario y la aplicación AutoFon BLE para detección de presencia y localización direccional
- Los reportes por GPRS y SMS dependen de la disponibilidad de la red GSM 2G local y del soporte del operador en la región de despliegue
- Algunos campos de telemetría y tipos de notificación deben habilitarse en la configuración del dispositivo o mediante el servidor de monitoreo para aparecer en Plaspy

## Por qué usar Plaspy con estas funciones

Usar el AutoFon DX Маяк junto con Plaspy centraliza la telemetría del dispositivo, el historial de posiciones y las notificaciones de eventos en un único entorno de monitoreo. La detección automática de protocolos de Plaspy y su endpoint de monitoreo estándar facilitan recibir reportes por GPRS o SMS desde instalaciones DX Маяк compatibles, ayudando a los equipos a mantener visibilidad y a responder rápidamente ante movimientos o impactos.

Aprenda más sobre cómo Plaspy puede ayudarle a monitorear dispositivos AutoFon en https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, información de firmware y la orientación del fabricante, verifique la documentación oficial de AutoFon en https://www.autofon.ru/
