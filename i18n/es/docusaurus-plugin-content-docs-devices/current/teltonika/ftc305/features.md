---
slug: /teltonika/ftc305/features
id: ftc305-features
sidebar_label: Features
title: Teltonika - FTC305 Features
sidebar_class_name: menu_item_tracker
description: Conozca las características del Teltonika FTC305 y cómo este rastreador compatible con Plaspy atiende la movilidad eléctrica y la telemática de flotas
keywords:
  - Teltonika FTC305
  - características FTC305
  - rastreador GPS Teltonika FTC305
  - compatibilidad FTC305 con Plaspy
  - rastreador GPS movilidad eléctrica
  - rastreador telemática de flotas
  - 4G LTE Cat 1 rastreador
  - rastreador telemetría CAN bus
  - rastreador GPS IP67
  - capacidades FTC305
---

# Teltonika - FTC305 Características

Esta página resume las capacidades públicas del rastreador Teltonika FTC305 cuando se utiliza con Plaspy. Se enfoca en las funcionalidades prácticas del dispositivo, cómo se reflejan en los flujos de trabajo de Plaspy y el valor operativo típico que el FTC305 puede aportar en despliegues de movilidad eléctrica y telemática para flotas.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación, la variante regional de radio y la implementación del fabricante. Confirme siempre los detalles críticos del equipo para el SKU y nivel de firmware elegido consultando la documentación del fabricante antes de desplegar.

## Resumen de características

El FTC305 es un rastreador compacto 4G LTE Cat 1 diseñado para transporte eléctrico y telemática de flotas. Está pensado para ofrecer posicionamiento GNSS fiable, conectividad celular y telemetría de calidad vehicular para casos donde la movilidad eléctrica y los vehículos industriales requieren hardware resistente y datos integrados por CAN-bus.

- Compatible con Plaspy desde fábrica para integrar ubicación GNSS y telemetría CAN-bus en flujos de trabajo de flota.
- Conectividad 4G LTE Cat 1 con retroceso a 2G para cobertura regional amplia y compatibilidad con redes heredadas.
- Rango amplio de entrada de alimentación para soportar plataformas de alta tensión de movilidad eléctrica y vehículos industriales.
- Carcasa resistente con certificación IP67 o variante sin carcasa para instalaciones embebidas y montaje flexible.
- Soporte para antenas externas GNSS y celulares que mejoran la recepción en instalaciones difíciles.

## Funciones principales del Teltonika - FTC305

- Reporte de posición GNSS en tiempo real, apto para seguimiento en vivo y análisis de rutas históricas.
- Módem 4G LTE Cat 1 con fallback a 2G para mantener conectividad donde sea necesario.
- Soporte de amplio rango de tensión de entrada para plataformas de alta tensión y vehículos utilitarios.
- Lectura de CAN-bus para exponer telemetría derivada de la ECU cuando esté disponible en el vehículo.
- Carcasa con certificación IP67 para uso exterior sellado y una variante sin carcasa para instalaciones embebidas.
- Soporte de antenas externas tanto para GNSS como para celular para mejorar la consistencia del posicionamiento.
- Batería de respaldo externa opcional disponible en paquetes de fábrica específicos para resiliencia a corto plazo.

## Cómo funcionan estas funciones con Plaspy

Conectado a Plaspy, el FTC305 envía posiciones y telemetría del vehículo que Plaspy procesa para mapeo, monitoreo e informes. Plaspy detecta automáticamente muchos protocolos comunes de rastreadores y muestra la ubicación y los datos derivados del CAN para uso operativo.

- Las actualizaciones de ubicación en vivo aparecen en los mapas de Plaspy para monitoreo de rutas y decisiones de despacho.
- La telemetría CAN-bus puede mostrarse en paneles de Plaspy para respaldar el monitoreo del estado del vehículo y métricas derivadas cuando esas señales están expuestas.
- El soporte para antenas externas ayuda a reducir la pérdida de fixes y mejora la continuidad de los datos presentados en Plaspy.
- La operación con batería de respaldo permite que Plaspy siga recibiendo trazas de posición o genere alertas durante cortes de energía.
- Las variantes de dispositivo y opciones de empaquetado facilitan la integración en instalaciones visibles o embebidas, que Plaspy puede representar en inventarios de dispositivos.

## Casos de uso típicos

- Gestión de flotas de vehículos eléctricos donde la ubicación y la telemetría del vehículo respaldan operaciones y planificación de mantenimiento.
- Detección y respuesta ante robos usando seguimiento en tiempo real combinado con la resiliencia de batería de respaldo.
- Seguimiento de movilidad eléctrica para manejo de materiales e industriales, como montacargas, carritos utilitarios y vehículos de traslado.
- Instalaciones embebidas donde las variantes sin carcasa y las antenas externas permiten despliegues discretos o montados en chasis.
- Análisis impulsado por telemetría que combina señales CAN-bus e historial posicional para informar KPIs de flotas eléctricas.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar entre SKUs de producto y opciones de paquete de fábrica, como inclusión de carcasa o batería de respaldo.
- Las revisiones de firmware pueden cambiar salidas de telemetría, nombres de parámetros y bases de datos CAN soportadas; consulte las notas de la versión de firmware para detalles.
- El soporte de bandas celulares regionales y los perfiles de radio varían según la variante del modelo; confirme la variante de radio correcta para su región de despliegue.
- Algunos campos de telemetría dependen del cableado del vehículo y de la disponibilidad del CAN; no todos los vehículos exponen los mismos parámetros CAN.
- La documentación del fabricante y las páginas de producto son la fuente autorizada para especificaciones técnicas actualizadas.

## Por qué usar Plaspy con estas funciones

Combinar el FTC305 con Plaspy ofrece una combinación práctica de hardware de rastreo de calidad vehicular y una plataforma diseñada para mostrar ubicación y telemetría para equipos operativos. Plaspy organiza datos de posición en vivo, rutas históricas y señales CAN disponibles para que los responsables de flotas puedan monitorear el desempeño, responder a incidentes y generar informes operativos para flotas eléctricas e industriales.

Para más información sobre el uso de Plaspy con rastreadores compatibles, visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique las especificaciones y la información de soporte más recientes del FTC305 con el fabricante en https://www.teltonika-gps.com/.
