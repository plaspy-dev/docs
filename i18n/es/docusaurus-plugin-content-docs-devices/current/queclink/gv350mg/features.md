---
slug: /queclink/gv350mg/features
id: gv350mg-features
sidebar_label: Features
title: QuecLink - GV350MG Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del QuecLink GV350MG y su integración con Plaspy para flotas y cadena de frío
keywords:
  - QuecLink GV350MG
  - características GV350MG
  - rastreador GPS GV350MG
  - telemática QuecLink
  - compatibilidad GV350MG Plaspy
  - rastreo de flotas GV350MG
  - cadena de frío GV350MG
  - CAN bus GV350MG
  - temperatura 1-wire GV350MG
  - rastreador de vehículos GV350MG
---

# QuecLink - GV350MG: Características

Esta página describe en términos públicos las capacidades del QuecLink GV350MG y cómo funciona con Plaspy. Resume las funciones del dispositivo relevantes para integrar el GV350MG en Plaspy, incluyendo seguimiento en tiempo real, ingestión de telemetría y supervisión de eventos. El contenido está orientado a información práctica y no sensible, para ayudar a equipos de flota y logística a comprender el uso del rastreador con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el cableado y la configuración de la instalación, y la forma en que el fabricante implemente funciones específicas. Para detalles actualizados y específicos del dispositivo consulte la documentación oficial de QuecLink y a su proveedor de equipos.

## Resumen de características

El GV350MG es un rastreador vehicular compacto con LTE Advanced diseñado para flotas comerciales y aplicaciones de cadena de frío. Combina posicionamiento GNSS robusto, conectividad celular con fallback, interfaces para bus vehicular y búfer local para ofrecer reportes continuos de ubicación y telemetría aptos para integrarse con Plaspy.

- Seguimiento GNSS en tiempo real fiable con receptor u-blox de alta sensibilidad para actualizaciones precisas de posición.
- Conectividad LTE Cat M1 y NB1 con fallback EGPRS 2G para mantener cobertura en distintas regiones.
- Integración completa con el vehículo mediante CAN 2.0A/B y SAE J1939, además de RS232 y múltiples entradas/salidas digitales para telemetría de motor y sensores.
- Búfer local para períodos sin conectividad y soporte para sensores de temperatura y accesorios orientados a la cadena de frío.
- Soporte de alertas y eventos, incluyendo geocerca, detección de remolque y choque, monitoreo de comportamiento de conducción y eventos configurables en las E/S.

## Características principales del QuecLink - GV350MG

- Conectividad celular LTE Cat M1 y NB1 con fallback EGPRS 2G para cobertura resiliente en áreas extensas.
- Receptor GNSS u-blox de alta sensibilidad con sensibilidad de seguimiento alrededor de -162 dBm y precisión de posición típicamente inferior a 2.5 m CEP.
- Soporte completo de CAN 2.0A/B y SAE J1939 para recopilación de datos de motor y telemetría del vehículo.
- Dos puertos RS232 y múltiples entradas y salidas digitales, incluyendo una salida con retención para control de ignición o monitoreo de alarmas.
- Soporte para canales de temperatura 1-wire para supervisión de remolques refrigerados y conexión de sensores auxiliares.
- Búfer local de mensajes capaz de almacenar hasta 10,000 mensajes para salvar cortes de conectividad.
- Opciones de control y gestión remota, incluyendo control OTA de salidas digitales y actualizaciones de firmware vía mini USB.
- Alimentación amplia para vehículos con rango de 8 a 32 V CC y una batería interna de respaldo para continuidad temporal de energía.

## Cómo funcionan estas funciones con Plaspy

Cuando usted empareja el GV350MG con Plaspy, la telemetría del dispositivo se reenvía a un panel centralizado donde la ubicación, las señales del vehículo y los eventos configurados quedan visibles para operaciones e informes. Plaspy procesa los datos del dispositivo para ofrecer alertas, reproducción histórica y flujos de trabajo basados en reglas que dependen de la información del rastreador.

- Ubicación en vivo y reproducción histórica de rutas y posiciones basadas en las correcciones GNSS recibidas del dispositivo.
- Parámetros del bus vehicular y del motor desde CAN y RS232 que aparecen como puntos de telemetría en Plaspy para monitoreo e informes.
- Eventos de entradas digitales, como ignición, apertura de puertas o disparos de alarma, que se convierten en eventos accionables y pueden integrarse en reglas y alertas de Plaspy.
- Detecciones de geocerca, remolque, choque y comportamiento de conducción que generan alertas dentro de Plaspy para una respuesta operativa rápida.
- Mensajes en búfer que se entregan a Plaspy tras la reconexión para evitar huecos en los registros históricos por cortes breves.
- El control remoto de salidas proporcionado por el dispositivo puede activarse desde Plaspy para accionar salidas configuradas cuando la instalación y la política lo permiten.

## Casos de uso típicos

- Rastreo de flotas y supervisión operativa para flotas comerciales que requieren posición fiable y telemetría vehicular.
- Logística de cadena de frío con sensores 1-wire de temperatura combinados con datos de ubicación para envíos sensibles a la temperatura.
- Monitoreo de combustible y diagnóstico vehicular mediante la combinación de telemetría del bus CAN con entradas de sensores para detección de pérdidas y análisis.
- Flujos de trabajo de antirrobo y recuperación usando geocerca, detección de remolque y control remoto de salidas.
- Programas de seguridad y capacitación de conductores mediante detección de choques y monitoreo de comportamiento de conducción para reconstruir eventos.
- Integración de cámaras y accesorios utilizando RS232 y extensores de E/S para enriquecer la conciencia situacional.

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones puede variar según la versión de firmware y la revisión de hardware del dispositivo. No todas las unidades expondrán todas las funciones listadas.
- Las variantes regionales y las aprobaciones de operadores pueden afectar las bandas de red compatibles y el comportamiento del fallback en distintos mercados.
- Algunas funciones requieren cableado específico, instalación de sensores o módulos accesorios y deben configurarse durante la puesta en marcha.
- Opciones del fabricante, como antena GNSS externa, número de sensores 1-wire o pasarelas de accesorios, pueden diferir entre SKUs.
- Confirme siempre las capacidades exactas, los conjuntos de comandos y las configuraciones soportadas en la documentación técnica oficial de QuecLink para su número de serie o número de pieza.

## Por qué usar Plaspy con estas funciones

Usar el GV350MG con Plaspy ofrece a las organizaciones una forma consolidada de visualizar ubicación y telemetría vehicular junto con alertas e informes. El hardware del dispositivo aporta sensores e interfaces vehiculares, mientras que Plaspy proporciona paneles centralizados, reglas configurables y análisis histórico que convierten esos datos en decisiones operativas. Esta combinación es útil para equipos que gestionan flotas, logística refrigerada y programas de seguridad vehicular que necesitan reportes consistentes y flujos de trabajo orientados a eventos.

Learn more about Plaspy and how Plaspy can be used with devices like the GV350MG on https://www.plaspy.com. Device features, firmware behaviour and manufacturer details can change over time so verify the latest device specific information on the QuecLink website https://www.queclink.com/.
