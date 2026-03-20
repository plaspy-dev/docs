---
slug: /telic/lt910_ww/features
id: lt910_ww-features
sidebar_label: Features
title: Telic - LT910-WW Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Telic LT910 WW y su integración con Plaspy para rastreo de flotas y telemetría remota
keywords:
  - Telic LT910 WW características
  - rastreador GPS Telic LT910 WW
  - compatibilidad LT910 WW con Plaspy
  - rastreador GPS LTE Telic
  - LT910 WW RS232 USB rastreador
  - rastreo de flotas Telic
  - LT910 WW LTE global
  - rastreador IoT industrial
  - dispositivo compatible con Plaspy
  - pasarela de telemetría vehicular
---

# Telic - LT910-WW: Características

Esta página ofrece un panorama público de las funciones del Telic LT910-WW y de cómo sus capacidades se emplean habitualmente con Plaspy. Se enfoca en las fortalezas prácticas del equipo en conectividad celular, en interfaces industriales y en la forma en que estas capacidades se integran con los flujos de trabajo típicos de Plaspy para rastreo, reenvío de telemetría y monitoreo remoto.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y los detalles de la instalación o los periféricos conectados. Para límites, interfaces o detalles técnicos actualizados de cada unidad, consulte la documentación y las notas de la versión del fabricante.

## Resumen de funciones

El LT910-WW es un terminal IoT industrial diseñado para conectividad celular global con opciones de retroceso, y para integrar receptores GNSS externos y periféricos de sensores mediante interfaces seriales y USB. En despliegues con Plaspy, el terminal suele actuar como una pasarela de comunicaciones sólida, reenviando datos de posición y telemetría a la nube de Plaspy para visualización, alertas e informes históricos.

- Conectividad LTE global con retroceso automático a 3G y 2G para ampliar la cobertura en escenarios de roaming.
- Interfaces industriales RS232 y USB para conectar receptores GNSS externos, adaptadores de telemetría o pasarelas de sensores.
- Soporte para un amplio rango de tensión de entrada y modo de bajo consumo, adecuado para instalaciones en vehículos y despliegues con restricción energética.
- Portas SIM bloqueable y carcasa robusta con amplio rango de temperatura de operación para instalaciones seguras en campo.
- Funciona como pasarela de telemetría cuando se combina con sensores o interfaces de vehículo externos para alimentar los paneles e informes de Plaspy.

## Características principales del Telic - LT910-WW

- Conectividad primaria LTE con retroceso automático a 3G y 2G para reportes continuos en distintas regiones.
- Basado en el módulo Telit LE910C1-WWX de banda ancha para soporte de múltiples bandas en despliegues internacionales.
- Puertos RS232 (V.24/V.28) Sub-D y USB para conectar unidades GNSS externas, adaptadores OBD o CAN y otros módulos de sensores.
- Amplio rango de tensión de alimentación y modo de bajo consumo adecuado para instalaciones en vehículos y activos remotos.
- Portador de tarjeta SIM con cierre y conector de antena estándar para uso fiable y seguro en campo.
- Amplio rango de temperatura de operación y carcasa industrial compacta para montaje en vehículos, armarios y equipos.
- Diseñado para funcionar como pasarela de telemetría cuando se combina con módulos periféricos externos para datos posicionales y analógicos/digitales.

## Cómo funcionan estas funciones con Plaspy

Al desplegarse con Plaspy, el LT910-WW envía telemetría y estado desde su conexión celular y los periféricos conectados a la nube de Plaspy, donde esos datos se normalizan para monitoreo y análisis. El terminal puede configurarse para reportar a los endpoints de Plaspy usando TCP o UDP en el puerto estándar de la plataforma, y Plaspy detecta el protocolo del rastreador e ingiere los datos para su uso en tiempo real.

- Reporte de ubicación en tiempo real en Plaspy cuando se conecta un receptor GNSS externo o una fuente NMEA vía RS232 o USB.
- Telemetría y estado de entradas digitales procedentes de interfaces de vehículo o pasarelas ADC que se reenvían a Plaspy para paneles e disparadores de reglas.
- Modos de bajo consumo o reportes intermitentes se reflejan como estado del dispositivo en Plaspy, permitiendo a los operadores monitorear conectividad y activos con respaldo de batería.
- Pasarelas externas como adaptadores BLE o CAN conectados al LT910-WW pueden aportar datos de sensores adicionales que Plaspy presentará para monitoreo y alarmas.
- Plaspy muestra recorridos históricos, posiciones en vivo, eventos de geocerca y alertas basadas en la telemetría serializada enviada por el terminal.

## Casos de uso típicos

- Conectividad global para flotas donde un enlace LTE primario con retroceso 3G/2G garantiza cobertura de roaming amplia y reportes continuos a Plaspy.
- Telemetría de activos remotos que agrega datos de sensores a través de dispositivos conectados por RS232 o USB y los reenvía para monitoreo centralizado.
- Flujos de trabajo de anti-robo e inmovilización de vehículos cuando se combina con interfaces de control externas y reglas y alertas configuradas en Plaspy.
- Despliegues temporales o portátiles donde el amplio rango de tensión y el modo de bajo consumo reducen la complejidad de la instalación.
- Monitoreo de maquinaria industrial que utiliza telemetría serial para transmitir datos operativos a Plaspy para análisis y notificaciones.
- Hubs de integración que convierten señales heredadas de vehículos o equipos en telemetría IP consumible por Plaspy.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y las opciones proporcionadas por el fabricante influyen en qué interfaces y comportamientos están disponibles en una unidad concreta.
- Las revisiones de hardware y las variantes regionales del módulo pueden cambiar las bandas LTE soportadas y las opciones de conectores específicos.
- Algunas capacidades, como el reporte posicional, requieren receptores GNSS externos o fuentes NMEA conectadas al dispositivo.
- Los detalles de la instalación y los periféricos conectados determinan si son posibles flujos de trabajo como control de ignición, medición de combustible o inmovilizador.
- Verifique siempre el conjunto exacto de funciones para su número de serie y firmware con la documentación del fabricante antes del despliegue.

## Por qué usar Plaspy con estas funciones

Combinar el LT910-WW con Plaspy ofrece a las organizaciones una forma flexible de convertir transporte celular robusto e E/S industrial en inteligencia accionable para flotas y activos. Plaspy normaliza la telemetría del terminal y de los periféricos conectados en mapas, alertas e informes, de modo que los equipos mantengan visibilidad, respondan a eventos y analicen el rendimiento histórico en despliegues globales.

Para conocer más sobre cómo Plaspy trabaja con dispositivos como el LT910-WW visite https://www.plaspy.com. Para detalles de funciones del dispositivo, comportamiento de firmware y especificaciones del fabricante más actuales, verifique la información en el sitio oficial de Telic https://www.telic.de.
