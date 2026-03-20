---
slug: /atrack/as11/features
id: as11-features
sidebar_label: Features
title: ATrack - AS11 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador LTE ATrack AS11 y su compatibilidad con Plaspy para seguimiento de activos a largo plazo
keywords:
  - ATrack AS11
  - características AS11
  - rastreador GPS AS11
  - características ATrack AS11
  - compatibilidad AS11 Plaspy
  - rastreador GPS robusto
  - rastreador LTE Cat M1
  - rastreador LTE Cat1
  - rastreador de activos BLE
  - seguimiento de activos AS11
---

# ATrack - Funciones del AS11

Esta página ofrece un resumen público de las funciones del ATrack AS11 cuando se utiliza con Plaspy. Resume las capacidades prácticas del AS11, cómo se integran en Plaspy para seguimiento y monitoreo, y qué debe considerar usted al planificar despliegues utilizando Plaspy como plataforma de backend.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, la variante regional y las elecciones específicas de instalación. Cuando corresponde, esta página describe el conjunto de funciones del AS11 en términos generales; para especificaciones detalladas del dispositivo y las últimas versiones de firmware consulte la documentación oficial del fabricante.

## Resumen de capacidades

El ATrack AS11 es un rastreador GPS LTE resistente diseñado para la gestión de activos a largo plazo en entornos severos y es compatible con Plaspy desde su configuración inicial. Combina protección industrial, autonomía prolongada, opciones celulares amplias y conectividad local para ofrecer ubicación y telemetría adecuadas a activos y equipos remotos.

- Diseño robusto y resistencia ambiental para despliegues en exteriores e industriales.
- Conectividad LTE en variantes Cat.1 y Cat.M1 para compatibilidad con múltiples operadores y operación de bajo consumo.
- Fijaciones GNSS con precisión de metros típica para reportes de ubicación confiables.
- Soporte para sensores locales y E/S, incluyendo BLE para sensores accesorios y múltiples entradas y salidas configurables.
- Batería recargable de larga duración y gran capacidad de registro interno para admitir conectividad intermitente y subidas diferidas.

## Características principales del ATrack - AS11

- Carcasa robusta con certificación IP68 y cumplimiento MIL STD 810H para resistencia al agua, polvo, golpes y vibraciones.
- Variantes celulares que soportan 4G LTE Cat.1 y Cat.M1 para ajustarse a distintos operadores y necesidades de despliegue.
- GNSS integrado con GPS y GLONASS, soporte SBAS y precisión típica de posicionamiento en CEP de 2.5 m.
- Bluetooth Low Energy v4.2 para emparejar sensores locales y dispositivos accesorios.
- Amplias E/S e interfaces, incluyendo entrada de ignición, entradas y salidas digitales configurables, entrada analógica (0–40 V), RS232 serial y 1 Wire para iButton o sensores de temperatura.
- Gran almacenamiento flash interno y registro en cola con capacidad para miles de registros y mensajes en espera, lo que permite transmisión diferida.
- Soporte de gestión remota incluyendo FOTA y funciones de gestión de dispositivos para despliegues a gran escala.
- Soporte opcional de antena GNSS externa para implementaciones con recepción desafiante.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe la telemetría y los eventos del AS11 para mostrar ubicaciones en tiempo real, recorridos históricos y datos de sensores en paneles y alertas. El AS11 puede enviar datos a Plaspy usando opciones de transporte estándar y Plaspy detecta automáticamente protocolos compatibles para facilitar la incorporación.

- Las actualizaciones de ubicación en tiempo real y los recorridos históricos aparecen en los paneles de Plaspy cuando el dispositivo envía fijaciones GNSS.
- Los eventos de E/S y de sensores, como cambios de ignición, activaciones de entradas digitales y lecturas analógicas, están disponibles para impulsar alertas y reglas operativas.
- Los datos de sensores BLE y las lecturas de accesorios conectados pueden reenviarse a Plaspy como parte de los flujos de telemetría cuando el dispositivo los proporciona.
- El registro fuera de línea y los mensajes en cola almacenados por el AS11 se suben a Plaspy cuando se restablece la conectividad, preservando la continuidad de los registros.
- Los dispositivos pueden configurarse para reportar a endpoints de Plaspy como d.plaspy.com y Plaspy detecta el protocolo del rastreador para simplificar la configuración.

## Casos de uso típicos

- Seguimiento de larga duración de contenedores de envío y activos remotos donde el acceso para mantenimiento es limitado.
- Monitoreo de remolques, maquinaria pesada y activos sin alimentación para detectar ubicación y eventos de movimiento.
- Flujos de trabajo de antirrobo y recuperación usando seguimiento en tiempo real, reporte de eventos y salidas configurables.
- Telemetría de activos e integración de sensores mediante entradas analógicas, sensores BLE y registro en cola para carga posterior.
- Monitoreo remoto de equipos en entornos con redes intermitentes donde el registro fuera de línea es crítico.
- Supervisión de flotas para activos mixtos (con y sin alimentación) que requieren hardware duradero y larga autonomía.

## Notas sobre disponibilidad de funciones

- Las revisiones de firmware y hardware influyen en las funciones disponibles y el comportamiento exacto; las listas de características pueden cambiar entre versiones.
- El soporte de bandas celulares y las variantes de hardware difieren según la región y la certificación del operador, por lo que se recomienda validar la variante antes de compras a gran escala.
- La vida útil de la batería depende en gran medida del intervalo de reporte, las condiciones de red y los periféricos habilitados; las duraciones indicadas son orientativas.
- La funcionalidad de antena externa opcional y las interfaces de accesorios pueden estar presentes en algunas variantes pero no en todas; confirme con el proveedor.
- Las capacidades de mensajes registrados y las configuraciones específicas de E/S dependen del firmware del dispositivo y del aprovisionamiento.

## Por qué usar Plaspy con estas funciones

Utilizar el AS11 con Plaspy ofrece a las organizaciones una forma confiable de recopilar ubicación y telemetría de activos resistentes y presentar esos datos para la toma de decisiones operativas. La combinación de hardware duradero, registro en cola para conectividad intermitente, E/S flexible y soporte de sensores BLE hace que el AS11 sea ideal para seguimiento de activos remotos, flujos de trabajo antirrobo e integraciones de telemetría que alimentan paneles y alertas en Plaspy.

Para conocer más sobre cómo Plaspy puede apoyar desplegables con dispositivos como el ATrack AS11 visite https://www.plaspy.com. Para las especificaciones de dispositivo más actuales y detalladas, el comportamiento de firmware y la documentación del fabricante, por favor verifique la información con ATrack en https://www.atrack.com.tw/.
