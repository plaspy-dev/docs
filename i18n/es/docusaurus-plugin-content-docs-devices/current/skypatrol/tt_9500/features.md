---
slug: /skypatrol/tt_9500/features
id: tt_9500-features
sidebar_label: Features
title: SkyPatrol - TT 9500 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador SkyPatrol TT 9500 y su compatibilidad con Plaspy
keywords:
  - SkyPatrol TT 9500
  - funciones SkyPatrol TT 9500
  - funciones rastreador SkyPatrol
  - TT 9500 geocercas
  - control de relé TT 9500
  - contadores TT 9500
  - rastreador GPS Plaspy
  - rastreador compatible con Plaspy
  - TT 9500 banda cuádruple
  - sensibilidad GPS TT 9500
---

# SkyPatrol - Funciones del TT 9500

Esta página describe el contexto público de funciones al usar el SkyPatrol TT 9500 con Plaspy. Se centra en capacidades prácticas, opciones de geocercas y funciones del dispositivo que usted puede utilizar dentro de Plaspy para monitoreo de ubicación y visibilidad operativa. El TT 9500 se presenta como un rastreador compacto y robusto compatible con Plaspy para despliegues de seguimiento a gran escala en todo el mundo.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Esta página resume las capacidades reportadas para el TT 9500 y cómo se integran con los flujos de trabajo de Plaspy; consulte la documentación del fabricante para detalles definitivos y específicos del dispositivo.

## Resumen de funciones

El TT 9500 se comercializa como un rastreador todo en uno para necesidades generales de seguimiento, con énfasis en capacidad de geocercas, control remoto mediante un relé interno y eficiencia energética. Su diseño facilita la instalación, la compatibilidad global con redes GSM y una construcción duradera adecuada para uso exterior.

- Soporta geocercas avanzadas en el dispositivo mediante el protocolo personalizado SkyPatrol EDDIE+ con gran cantidad de vallas configurables
- Relé integrado para control remoto de sistemas o equipos conectados
- Bajo consumo energético para prolongar los intervalos de mantenimiento
- Compatibilidad quad band para operar en redes móviles internacionales
- Carcasa resistente y a prueba de salpicaduras y receptor GPS ultrasensible para mejorar la adquisición de posición
- Siete contadores configurables y secuenciación de mensajes para identificación y seguimiento de eventos

## Funciones principales del SkyPatrol - TT 9500

- Soporte del protocolo personalizado EDDIE+ con capacidad de geocercas en el dispositivo de hasta 250 vallas
- Múltiples tipos de geocercas, incluyendo geocercas circulares, poligonales (hasta 25 puntos) y geocercas por ruta para trayectos predefinidos
- Relé interno para activación o desactivación remota de equipos conectados
- Bajo consumo de energía adecuado para mayor duración de la batería en despliegues de campo
- Módem cuádruple compatible con redes GSM globales
- Carcasa resistente y a prueba de salpicaduras para uso exterior e industrial
- Receptor GPS ultrasensible para mejorar la adquisición de señal en entornos difíciles
- Siete tipos distintos de contadores para registrar recuentos de eventos o métricas operativas

## Cómo funcionan estas funciones con Plaspy

Plaspy puede recibir y mostrar datos de ubicación y eventos desde unidades TT 9500 compatibles y proporcionar visibilidad centralizada, alertas y reproducción histórica para los equipos operativos. Plaspy detecta automáticamente el protocolo del rastreador y acepta los reportes del dispositivo en la plataforma, lo que permite utilizar el conjunto de funciones del TT 9500 sin seleccionar el protocolo por unidad.

- Los eventos de geocerca reportados por el TT 9500 pueden mostrarse como eventos de entrada y salida en Plaspy para monitoreo y notificaciones
- Las activaciones del relé y los eventos de control remoto pueden registrarse y visualizarse en la línea de tiempo de eventos del dispositivo para supervisión operativa
- Los contadores reportados por el dispositivo se pueden usar para medir métricas de uso y aparecen en el historial de eventos o en las herramientas de informe de Plaspy
- Plaspy acepta conexiones de dispositivos en su endpoint de ingestión d.plaspy.com y puede trabajar con reportes UDP o TCP según la configuración del rastreador
- Las fijaciones de ubicación del TT 9500 se trazan en los mapas de Plaspy e incluyen en el historial de rutas y en las vistas de seguimiento en tiempo real
- La secuenciación de mensajes e identificadores de evento del TT 9500 ayudan a Plaspy a correlacionar eventos del dispositivo con reglas definidas por el usuario

## Casos de uso típicos

- Seguimiento de flotas donde el control remoto por relé puede gestionar alimentación de equipos o flujos de inmovilización
- Monitoreo de activos en entornos exteriores o industriales que requieren carcasa resistente y adquisición GPS confiable
- Proyectos regionales e internacionales que aprovechan la compatibilidad cuádruple de bandas GSM
- Operaciones que requieren un gran número de geocercas en el dispositivo para gestión de límites de sitio o cumplimiento de rutas
- Despliegues que necesitan contadores de eventos para kilometraje, tiempo de funcionamiento u otras métricas de uso
- Instalaciones que se benefician del bajo consumo energético para reducir la frecuencia de mantenimiento

## Notas sobre disponibilidad de funciones

- Conjuntos de funciones como límites de geocercas, tipos de contadores y comportamiento del relé dependen de la versión de firmware y la configuración del fabricante
- Revisiones de hardware y variantes regionales pueden afectar las bandas del módem, opciones de carcasa o características de alimentación
- Las elecciones de instalación y el cableado pueden cambiar qué funciones están disponibles o cómo se comportan en la práctica
- Plaspy ingerirá los eventos soportados, pero los nombres exactos de eventos y sus parámetros dependen del firmware y los mensajes de protocolo enviados por el dispositivo
- Verifique siempre las capacidades exactas de una unidad específica con la documentación del fabricante y las notas de la versión de firmware

## Por qué usar Plaspy con estas funciones

Usar el TT 9500 con Plaspy ofrece una manera práctica de centralizar datos de ubicación, eventos de geocerca y contadores de dispositivos para visibilidad operativa y seguimiento de incidentes. La plataforma de Plaspy está diseñada para visualizar ubicación en vivo, almacenar trazas históricas y mostrar eventos de dispositivos para que los equipos puedan monitorear activos y flotas usando el conjunto de funciones del TT 9500.

To learn more about how Plaspy can work with SkyPatrol devices, visit https://www.plaspy.com. For the most current, device specific feature details, firmware notes, and official specifications, please verify information with the manufacturer at https://www.skypatrol.com/
