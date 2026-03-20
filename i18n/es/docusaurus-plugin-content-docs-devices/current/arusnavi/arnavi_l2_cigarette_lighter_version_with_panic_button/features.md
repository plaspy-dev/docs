---
slug: /arusnavi/arnavi_l2_cigarette_lighter_version_with_panic_button/features
id: arnavi_l2_cigarette_lighter_version_with_panic_button-features
sidebar_label: Features
title: Arusnavi - Arnavi L2 (cigarette lighter version with panic button) Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Arnavi L2 para mechero y su integración con Plaspy
keywords:
  - Arusnavi Arnavi L2 características
  - Arnavi L2 compatibilidad Plaspy
  - rastreador GPS para mechero
  - rastreador con botón de pánico
  - rastreador GPS con sensores BLE
  - rastreador GNSS multi constelación
  - rastreador vehicular 2G GPRS
  - seguimiento plug and play de vehículos
  - capacidades Arnavi L2
  - seguimiento de flotas Plaspy
---

# Arusnavi - Arnavi L2 (versión para mechero con botón de pánico) — Características

Esta página ofrece un resumen público de las funciones del rastreador Arnavi L2 en su versión para mechero y explica cómo se integran sus capacidades con Plaspy para la supervisión de vehículos y flotas. Aquí encontrará una visión general de la telemetría, alertas y sensores disponibles al usar este rastreador plug and play con Plaspy, mantenida en un nivel general y sin detalles sensibles.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Antes de desplegar a gran escala, verifique la revisión de firmware y las opciones de configuración de su unidad y consulte la documentación de Arusnavi para detalles específicos por región o modelo.

## Resumen de funciones

El Arnavi L2 es un rastreador GPS plug and play para toma de mechero pensado para instalaciones rápidas y traslado entre vehículos. Integra posicionamiento GNSS multi constelación, módem 2G GPRS, soporte BLE, un botón de pánico dedicado y registro interno (black box) para ofrecer reporte continuo de posición, telemetría básica y señalización de emergencia, útil para alquileres, rideshare y despliegues temporales de flotas.

- Instalación rápida sin perforaciones mediante arnés para toma de mechero, ideal para cambios de vehículo y montajes temporales
- Posicionamiento GNSS multi constelación para mejor cobertura satelital y reportes de ubicación más estables
- Rastreo en tiempo real y telemetría vía 2G GPRS con registro local tipo black box para periodos fuera de cobertura
- Botón de pánico dedicado para señalizar alarmas de forma inmediata y detección de eventos basada en acelerómetro
- Soporte BLE para hasta cinco sensores externos que amplían el monitoreo a temperatura, sensores de puerta y etiquetas BLE
- Entradas I/O protegidas y entradas discretas para capturar estado de encendido, sensores de combustible o relés cuando está instalado

## Características principales del Arusnavi Arnavi L2 (versión para mechero con botón de pánico)

- Arnés de alimentación para toma de mechero plug and play para instalación rápida y fácil extracción entre vehículos
- Soporte GNSS multi constelación que incluye GPS, GLONASS, Galileo, BeiDou y QZSS para posicionamiento robusto
- Módem 2G GSM GPRS para reportes casi en tiempo real y configuración remota cuando hay cobertura 2G disponible
- Botón de pánico dedicado para reportar eventos de alarma de forma inmediata a plataformas de monitoreo
- Acelerómetro integrado para detección de remolque y disparadores de eventos relacionados con el estilo de conducción
- Soporte Bluetooth Low Energy para hasta cinco sensores y etiquetas BLE externas
- Registro interno tipo black box (unos 8 MB o aproximadamente 12 000 registros) para conservar datos durante huecos de cobertura
- Entradas I/O protegidas y entradas discretas universales para detección de encendido e integración con sensores de combustible o dispositivos de relé

## Cómo funcionan estas funciones con Plaspy

Al conectarse a Plaspy, el Arnavi L2 reporta posición GNSS, telemetría y eventos del dispositivo a su cuenta para que usted pueda supervisar vehículos, responder a alarmas y auditar recorridos. Plaspy detecta automáticamente protocolos comunes de rastreadores y procesa las corrientes de posición y eventos para su visualización y generación de alertas.

- Las actualizaciones de posición y la telemetría aparecen en los mapas y el historial de Plaspy, permitiendo a los operadores seguir el movimiento y revisar viajes
- Las pulsaciones del botón de pánico y los eventos generados por el acelerómetro se envían a Plaspy como alertas para atención inmediata por parte del operador
- El registro interno se sincroniza con Plaspy tras la reconexión, de modo que los viajes y eventos ocurridos durante huecos de cobertura se preservan
- Las entradas de sensores BLE se representan en los canales de sensores de Plaspy para estados de temperatura, puertas o etiquetas cuando la configuración del dispositivo lo soporta
- Los cambios de estado de encendido y de las IO se mapean a eventos de motor encendido/apagado y marcadores discretos dentro de Plaspy para informes de kilometraje y uso

Nota: El Arnavi L2 puede configurarse para reportar a los servidores de Plaspy usando TCP o UDP configurables en el dispositivo, apuntando a los endpoints de Plaspy, y Plaspy detectará el protocolo del rastreador automáticamente. Consulte la guía de configuración del dispositivo y de Plaspy al establecer el reporte.

## Casos de uso típicos

- Vehículos de alquiler y rideshare que requieren instalación y retirada rápidas, con alarma de pánico y telemetría básica
- Flotas en leasing de corto plazo y vehículos de demostración donde no conviene un cableado permanente
- Modo guardia para vehículos estacionados usando etiquetas BLE junto con alertas de remolque y movimiento
- Flotas pequeñas y medianas que necesitan seguimiento sin fricciones y continuidad mediante registro a bordo
- Monitoreo de conducción ecológica y comportamiento del conductor basado en eventos del acelerómetro y telemetría
- Monitoreo de temperatura o accesorios para entregas de última milla usando sensores BLE

## Notas sobre disponibilidad de funciones

- El comportamiento de las funciones depende de la versión de firmware del dispositivo y de la revisión de hardware del modelo instalado en su vehículo
- La disponibilidad de redes regionales es importante, el dispositivo usa un módem 2G GPRS y la cobertura 2G puede variar según el país u operador
- La compatibilidad con sensores BLE depende de las listas de sensores soportados por el fabricante y del firmware que permita tipos de sensores concretos
- La instalación en toma de mechero ofrece portabilidad, pero las variantes cableadas o instalaciones profesionales pueden habilitar opciones de I/O adicionales
- Siempre consulte la documentación de Arusnavi y las notas de versión de firmware para obtener los detalles más recientes sobre funciones soportadas y sus límites

## Por qué usar Plaspy con estas funciones

Combinar el Arnavi L2 con Plaspy proporciona a los operadores una forma de bajo fricción para lograr visibilidad de vehículos y monitoreo basado en eventos sin necesidad de cableado permanente. Plaspy ingiere posición y eventos del rastreador para que usted pueda centralizar alertas, auditar el historial de viajes y mantener supervisión operativa en una flota mixta de dispositivos temporales o instalados de forma permanente.

Learn more about how Plaspy can present tracker data and alerts on your dashboards at https://www.plaspy.com. For the latest device specific feature details firmware behavior and manufacturer guidance verify current information at https://www.arusnavi.ru.
