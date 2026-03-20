---
slug: /teltonika/tft100/features
id: tft100-features
sidebar_label: Features
title: Teltonika - TFT100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Teltonika TFT100 y cómo se integra con Plaspy para movilidad eléctrica y flotas industriales
keywords:
  - Teltonika TFT100 características
  - TFT100 rastreador GPS
  - Teltonika TFT100 Plaspy
  - TFT100 movilidad eléctrica
  - rastreador para vehículos industriales
  - rastreador GPS robusto
  - integración bus de vehículo
  - rastreador con sensores BLE
  - telemetría para flotas
  - características TFT100 para Plaspy
---

# Teltonika - Características del TFT100

Esta página ofrece un resumen público de las funcionalidades del Teltonika TFT100 y explica cómo sus capacidades documentadas se relacionan con el uso en Plaspy. Se enfoca en detalles prácticos no sensibles sobre rastreo, telemetría e integración para que responsables de flotas e integradores sepan qué esperar al incorporar este modelo en Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Teltonika lista el TFT100 como End of Life, por lo que confirme la disponibilidad actual, el estado del firmware y las opciones de reemplazo con el fabricante antes de planear despliegues.

## Resumen de funcionalidades

El Teltonika TFT100 es un rastreador GPS 2G robusto diseñado para movilidad eléctrica y vehículos industriales de alta tensión. En Plaspy, este equipo se utiliza normalmente para proporcionar ubicación, telemetría del bus del vehículo y datos de sensores externos para monitoreo en tiempo real y análisis histórico en entornos exteriores exigentes.

- Carcasa con certificación IP67 para protección en entornos industriales y exteriores.
- Amplio rango de alimentación 10–97 V para soportar diversas instalaciones eléctricas de vehículos.
- Conectividad celular 2G para reportes de posición y subida de telemetría en regiones con cobertura.
- Múltiples interfaces cableadas como CAN, RS232, RS485 y UART para integración con el bus del vehículo.
- Soporte Bluetooth Low Energy para emparejar sensores y balizas externas orientadas a monitoreo ambiental y activos.

## Características principales del Teltonika TFT100

- Diseño mecánico resistente y protección IP67 para instalaciones con polvo o humedad.
- Rango amplio de voltaje de entrada que acomoda sistemas eléctricos de movilidad eléctrica y maquinaria pesada.
- Módem 2G para telemetría básica y reportes de ubicación donde exista servicio 2G.
- Acceso directo al bus del vehículo mediante interfaces CAN y seriales para recopilar datos de BMS y operaciones.
- Bluetooth Low Energy para emparejar sensores de temperatura, humedad, detectores de movimiento/magnetismo y balizas de identificación de activos.
- Variantes de interfaces y códigos de pedido múltiples para adaptarse a distintas necesidades de instalación y arneses eléctricos.
- Configuración y gestión remota mediante herramientas de Teltonika como Configurator y FOTA WEB.

## Cómo funcionan estas funciones con Plaspy

Cuando un TFT100 está conectado a Plaspy, puede alimentar los paneles, mapas y alertas con ubicación y telemetría. Plaspy consume la telemetría del dispositivo y la presenta para supervisión operativa, revisión histórica y flujos de trabajo basados en eventos relevantes para flotas de movilidad eléctrica y equipos pesados.

- Reporte de ubicación en tiempo real y reproducción histórica de rutas visibles en los mapas de Plaspy.
- Telemetría del bus del vehículo parseada desde CAN o interfaces seriales que puede mostrarse como canales de telemetría y utilizarse en reportes.
- Lecturas de sensores BLE y eventos de balizas que pueden ingresarse para monitoreo ambiental e identificación de activos en Plaspy.
- Eventos basados en telemetría, como cambios en el estado de carga o alertas de puertas, que pueden traducirse en alertas y flujos de trabajo dentro de Plaspy.
- Plaspy muestra datos de sensores y estados junto a la posición para facilitar la programación de mantenimiento y la toma de decisiones operativas.

## Casos de uso típicos

- Monitoreo de gestión de baterías para montacargas eléctricos y vehículos industriales usando datos de BMS obtenidos por CAN.
- Rastreo de flotas de movilidad eléctrica para supervisar ubicación, utilización y actividades de carga.
- Supervisión de maquinaria pesada como manipuladores, cargadores y equipos de exterior que operan en condiciones severas.
- Cadena de frío o sensado ambiental con sensores BLE de temperatura y humedad emparejados al rastreador.
- Monitoreo anti manipulación y seguridad combinando eventos del bus del vehículo y alertas de balizas BLE en Plaspy.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y los perfiles de configuración del fabricante pueden habilitar o restringir campos de telemetría y reglas de parseo específicas.
- Las revisiones de hardware y los códigos de pedido determinan las combinaciones de interfaces disponibles, por ejemplo CAN o RS485 en unidades particulares.
- Las variantes regionales de radio afectan el soporte de bandas 2G; verifique la compatibilidad de bandas para su área de despliegue.
- El soporte de sensores Bluetooth depende del tipo de sensores emparejados y de las reglas de escaneo configuradas en el dispositivo.
- Teltonika indica que el TFT100 está en End of Life; consulte con Teltonika la disponibilidad actual, orientación sobre reemplazos y soporte de firmware.

## Por qué usar Plaspy con estas funciones

Usar el Teltonika TFT100 con Plaspy ofrece a los equipos operativos y de flota una visibilidad consolidada de la ubicación y la telemetría del vehículo sin necesidad de rehacer integraciones. El diseño robusto del rastreador y su amplio rango de alimentación lo hacen apto para entornos exigentes de movilidad eléctrica e industria, mientras que sus interfaces cableadas e inalámbricas permiten llevar datos de BMS y sensores a Plaspy para monitoreo, alertas e informes.

Learn more about integrating devices and fleet workflows on the Plaspy website https://www.plaspy.com. For the latest device specific feature details, firmware behavior and manufacturer guidance verify information with Teltonika at https://www.teltonika-gps.com/.
