---
slug: /arusnavi/arnavi_l3r100/features
id: arnavi_l3r100-features
sidebar_label: Features
title: Arusnavi - ARNAVI L3R100 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del ARNAVI L3R100 y su integración con Plaspy
keywords:
  - Arusnavi ARNAVI L3R100 funciones
  - ARNAVI L3R100 rastreador GPS
  - Arusnavi ARNAVI L3R100 compatibilidad Plaspy
  - ARNAVI L3R100 sensores BLE
  - ARNAVI L3R100 soporte RS485
  - rastreador GNSS multi constelación
  - Arnavi protocolo EGTS soporte
  - rastreador compacto para vehículos
  - rastreador GPS bajo consumo
  - telemetría para seguimiento de flotas
---

# Arusnavi - ARNAVI L3R100 Características

Esta página ofrece un resumen público de las funciones del Arusnavi ARNAVI L3R100 y explica cómo se aprovechan en implementaciones con Plaspy. El enfoque está en las capacidades del dispositivo relevantes para el seguimiento en tiempo real, la recolección de telemetría y la supervisión de flotas o activos cuando se integran con la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la forma en que la unidad esté instalada o configurada. Para detalles específicos recientes y guía de implementación consulte la documentación y las notas de versión del fabricante Arusnavi.

## Resumen de funciones

El ARNAVI L3R100 es un controlador de navegación y rastreador GPS compacto diseñado para instalaciones con espacio limitado, a la vez que soporta telemetría mixta por cable e inalámbrica. Combina posicionamiento GNSS multi constelación, conectividad 2G GPRS, soporte para sensores BLE e interfaces de sensores por cable, ofreciendo un nodo de telemetría flexible para la monitorización de vehículos y activos.

- Factor de forma compacto y peso reducido para instalaciones discretas en vehículos y activos
- GNSS multi constelación para fijaciones rápidas y actualizaciones de posición consistentes
- Conectividad 2G GPRS para envío continuo de ubicación y telemetría
- Soporte Bluetooth Low Energy para hasta ocho sensores inalámbricos que amplían la telemetría sin cableado adicional
- Interfaz RS485 para múltiples sensores cableados que capturan telemetría como niveles o temperaturas
- Entradas discretas y E/S universales protegidas para reportar encendido, puertas y habilitar flujos de control de relés

## Funciones principales del Arusnavi - ARNAVI L3R100

- Receptor GNSS multi constelación que cubre GPS, GLONASS, GALILEO, BEIDOU y QZSS para mejorar el posicionamiento
- Conectividad GSM 2G GPRS para la transmisión de reportes y telemetría remota
- Soporte Bluetooth Low Energy 4.0 que permite conectar hasta ocho sensores BLE compatibles
- Interfaz RS485 que admite múltiples sensores cableados para recopilación de telemetría
- Compatibilidad con los protocolos Arnavi y EGTS para una integración sencilla con plataformas de monitoreo
- Capacidad de transmitir simultáneamente a dos servidores de monitoreo para redundancia y reportes duales
- E/S universal protegida con entradas discretas adecuadas para detección de encendido y puertas, así como para control de relés
- Configuración remota y actualizaciones de firmware vía web, además de configuración local por USB Type-C y almacenamiento interno tipo black box

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el ARNAVI L3R100 envía posición, telemetría de sensores y estados de entradas para que los operadores puedan supervisar vehículos y activos en tiempo real y revisar actividad histórica. Plaspy detecta automáticamente los protocolos soportados por el rastreador e ingiere datos GNSS y de telemetría para potenciar la visibilidad y los flujos de trabajo automatizados.

- Actualizaciones de posición en tiempo real y telemetría disponibles en Plaspy para seguimiento en vivo y reproducción de rutas
- Entradas discretas como encendido o estado de puertas se mapean a eventos y pueden usarse en reglas e informes de Plaspy
- Telemetría de sensores BLE y RS485 se reporta a Plaspy para vistas de temperatura de carga, monitoreo de niveles y otras métricas
- El dispositivo puede configurarse para reportar a los servidores de Plaspy, incluyendo d.plaspy.com, y puede usar UDP o TCP en el puerto estándar de Plaspy para conexiones de dispositivo
- La transmisión a dos servidores brinda redundancia para que Plaspy reciba datos incluso si un servidor alterno también está configurado

## Casos de uso típicos

- Seguimiento de flotas y historial de rutas para supervisión operativa y planificación de horarios
- Flujos anti robo que combinan entradas de puertas y encendido con control remoto de relés para estrategias de inmovilización
- Recolección remota de telemetría para nivel de combustible y temperatura usando sensores RS485 cableados o dispositivos BLE compatibles
- Instalaciones mixtas con sensores cableados e inalámbricos cuando se requiere cableado limitado o sensores distribuidos
- Instalaciones discretas o con espacio restringido que necesitan seguimiento GPS compacto con reporte confiable
- Escenarios de reporte redundante donde es deseable transmitir simultáneamente a varios servidores de monitoreo

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y las opciones de configuración del equipo influyen en qué funciones están disponibles y en su comportamiento
- Las revisiones de hardware y las variantes regionales pueden cambiar las bandas celulares soportadas o las interfaces disponibles
- La compatibilidad de sensores BLE y RS485 depende de los perfiles de sensor soportados e integración del fabricante
- Las decisiones de instalación, como el cableado, la fuente de alimentación y la selección de arneses, afectan la telemetría y el comportamiento de las entradas
- Confirme siempre las capacidades actuales y los procedimientos de configuración con la documentación de Arusnavi para su lote de dispositivos específico

## Por qué usar Plaspy con estas funciones

Usar el ARNAVI L3R100 con Plaspy permite a las organizaciones consolidar ubicación y telemetría en una sola plataforma de monitoreo. La combinación de posicionamiento GNSS, soporte para sensores mixtos, entradas discretas y transmisión a doble servidor facilita el seguimiento de vehículos, la monitorización de condiciones de carga y la implementación de alertas y flujos de trabajo basados en eventos dentro de Plaspy.

Para más información sobre Plaspy visite https://www.plaspy.com. Para los últimos detalles específicos del dispositivo, comportamiento de firmware y notas oficiales de implementación consulte el sitio del fabricante https://www.arusnavi.ru.
