---
slug: /gosafe/g797/features
id: g797-features
sidebar_label: Features
title: Gosafe - G797 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Gosafe G797 y su integración con Plaspy para flotas y telemática de seguros
keywords:
  - Gosafe G797
  - características Gosafe G797
  - rastreador GPS Gosafe G797
  - Gosafe G797 Plaspy
  - rastreador GPS OBD2
  - telemática vehicular
  - rastreador para gestión de flotas
  - telemática para seguros
  - reconstrucción de choques FNOL
  - telemetría GNSS OBD
---

# Gosafe - G797 — Características

Esta página ofrece una descripción pública de las capacidades del rastreador Gosafe G797 relevantes para su uso con Plaspy. Explica las funcionalidades prácticas que puede esperar cuando el G797 se implementa con Plaspy para gestión de flotas, telemática para seguros y programas de renta o leasing.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. El soporte de vehículos para PIDs OBD específicos, paquetes de sensores opcionales, bandas celulares y opciones de aprovisionamiento pueden diferir entre unidades y regiones.

## Resumen de funciones

El G797 es un rastreador OBDII compacto plug-and-play diseñado para combinar posicionamiento GNSS con diagnóstico a bordo para monitorización operacional y flujos de trabajo basados en eventos. Está pensado para transmitir ubicación, diagnósticos y datos de eventos a plataformas telemáticas como Plaspy para facilitar la visibilidad en tiempo real y el análisis posterior a incidentes.

- Instalación plug-and-play directa en el puerto OBDII (J1962) para despliegues rápidos en flotas.
- Posicionamiento GNSS preciso mediante un receptor Ublox 6 con asistencia SBAS para mejorar la exactitud.
- Acceso a diagnósticos OBD y J1939, incluyendo extracción de VIN y lectura de PIDs cuando están disponibles.
- Acelerómetro 3D auto‑calibrado integrado y opción de IMU 6D con acelerómetro/giroscopio para detección y reconstrucción de eventos.
- Conectividad celular con reporte por GPRS/EDGE y variantes UMTS/LTE opcionales para soporte regional más amplio.
- Aprovisionamiento remoto y actualizaciones de firmware vía herramientas GICUS y USB para optimizar despliegues en flotas.

## Funciones principales del Gosafe - G797

- Conexión OBDII plug-and-play que entrega identificadores del vehículo y telemetría derivada del OBD a Plaspy.
- Receptor GNSS Ublox 6 con soporte SBAS para mayor precisión y sensibilidad en la ubicación.
- Acelerómetro 3D auto‑calibrado a bordo, con opción de IMU 6D para datos de choque y eventos más completos.
- Soporte de protocolos OBD y diagnósticos comunes, incluyendo J1939 y protocolos estándar OBDII para leer VIN, fuentes de odómetro y PIDs disponibles.
- Reporte celular sobre GPRS/EDGE con variantes UMTS/LTE según la unidad adquirida.
- Configuración remota y gestión de firmware mediante flujos de trabajo de aprovisionamiento GICUS y USB.
- Soporte opcional para Bluetooth y accesorios en los modelos que incluyan esta capacidad.
- Diseño robusto y tolerancia ambiental pensados para uso vehicular y despliegues en flota.

## Cómo funcionan estas funciones con Plaspy

Cuando se conecta a Plaspy, el G797 envía paquetes de ubicación, diagnósticos y eventos que Plaspy ingiere para monitorización en vivo, reproducción histórica y automatización de flujos de trabajo. Plaspy organiza y presenta la combinación de datos GNSS y OBD para apoyar la toma de decisiones operativas.

- Las ubicaciones en vivo y los historiales (breadcrumbs) se muestran en Plaspy para visibilidad de flota en tiempo real y reproducción de rutas.
- La extracción de VIN y la telemetría derivada del OBD permiten a Plaspy asociar dispositivos con vehículos y mostrar valores diagnósticos en paneles.
- La acumulación de odómetro desde múltiples fuentes usando datos OBD y GNSS ayuda a mejorar la precisión del kilometraje para facturación y reportes de mantenimiento.
- Los eventos del acelerómetro y la IMU opcional alimentan flujos de trabajo de FNOL e incidentes para alertas rápidas y reconstrucción dentro de Plaspy.
- El aprovisionamiento remoto y las actualizaciones de firmware reducen visitas de campo al habilitar despliegues gestionados y cambios de configuración coordinados con los registros en Plaspy.
- La telemetría recolectada puede utilizarse para activar alertas, reglas e informes en Plaspy conforme a sus políticas operativas.

## Casos de uso típicos

- Telemática para seguros y programas de seguro basado en uso que requieren VIN, trazas de conducción y datos de eventos para suscripción y FNOL.
- Gestión de grandes flotas para monitoreo de rutas, identificación de vehículos y conciliación de odómetros en flotas heterogéneas.
- Operaciones de renta y leasing que necesitan instalaciones OBDII resistentes a manipulaciones y reportes de kilometraje confiables para facturación.
- Reconstrucción de choques y análisis de seguridad usando acelerómetro y giroscopio opcional en revisiones post incidente.
- Despliegues regionales donde las variantes celulares opcionales se ajustan a bandas de red locales y requisitos de aprovisionamiento.
- Implementaciones que requieren un dispositivo integrado al vehículo, compacto, para instalación rápida y mínima intervención del conductor.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware y la revisión de hardware; sensores opcionales y bandas celulares pueden no estar presentes en todas las unidades.
- La disponibilidad de PIDs OBD depende de la marca, modelo y la implementación del ECM del vehículo y no está garantizada para todos los parámetros en todos los vehículos.
- Capacidades opcionales como la IMU 6D, Bluetooth o variantes LTE requieren elegir la variante de hardware correspondiente al momento de la compra.
- El método de instalación y el uso de cables de extensión o conectores en T pueden afectar la disponibilidad de datos y las consideraciones de robo o manipulación.
- Siempre consulte la documentación del fabricante y las notas de la versión vigentes para conocer la matriz exacta de funciones e instrucciones de aprovisionamiento.

## Por qué usar Plaspy con estas funciones

Usar el Gosafe G797 con Plaspy ofrece una vista combinada de posiciones GNSS y diagnósticos del vehículo que ayuda a las organizaciones a mejorar la visibilidad, optimizar flujos de trabajo de mantenimiento y acelerar la respuesta ante incidentes. La integración OBDII del equipo y sus sensores de eventos complementan los paneles y alertas de Plaspy, permitiendo una telemetría consolidada para operaciones, análisis de seguros y gestión de renta.

Para saber más sobre Plaspy y cómo puede trabajar con el G797, visite https://www.plaspy.com. Para las especificaciones de dispositivo más recientes, detalles de firmware y notas de implementación del fabricante, verifique la información con Gosafe en https://gosafesystem.com/ ya que las funciones y el comportamiento pueden cambiar con el tiempo.
