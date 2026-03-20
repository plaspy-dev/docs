---
slug: /ruptela/pro5_lite/features
id: pro5_lite-features
sidebar_label: Features
title: Ruptela - Pro5 Lite Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Ruptela Pro5 Lite y su integración con Plaspy para rastreo y telemetría en tiempo real
keywords:
  - características Ruptela Pro5 Lite
  - rastreador GPS Pro5 Lite
  - capacidades Pro5 Lite
  - compatibilidad Pro5 Lite Plaspy
  - características rastreador Ruptela flotas
  - soporte CAN bus Pro5 Lite
  - Pro5 Lite BLE 5.0
  - rastreador LTE Pro5 Lite
  - detección manipulación Pro5 Lite
  - funciones telemetría Pro5 Lite
---

# Ruptela - Características del Pro5 Lite

Esta página ofrece una visión pública y orientada a funciones del Ruptela Pro5 Lite y cómo sus capacidades se integran con Plaspy para rastreo y telemetría en tiempo real. Está pensada para ayudar a gerentes de flota, integradores y evaluadores técnicos a comprender qué funciones del equipo son relevantes al usar el Pro5 Lite con Plaspy y cómo se reflejan típicamente dentro de la plataforma.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. Para especificaciones de dispositivo, capacidades de firmware e instrucciones de instalación precisas, consulte la documentación del fabricante y las notas de la versión.

## Resumen de características

El Pro5 Lite es un rastreador GPS compacto, compatible con Plaspy, diseñado para ofrecer posicionamiento GNSS preciso, conectividad celular y interfaces vehiculares flexibles en una carcasa sin tornillos. Está dirigido a flotas comerciales y operadores de activos que requieren ubicación en vivo, telemetría del vehículo e integración de accesorios con una plataforma como Plaspy.

- GNSS de alta precisión mediante un módulo U‑blox con antena interna para reportes de ubicación consistentes.
- Conectividad LTE con retroceso a 2G y variantes regionales para mayor cobertura de red.
- Interfaces completas para vehículo y accesorios: soporte de doble CAN bus, múltiples entradas digitales y analógicas, y puertos seriales para integraciones OEM.
- Funciones de seguridad integradas como detección de manipulación y interferencias (jamming) y TLS v1.2 para transporte de datos cifrado.
- BLE 5.0 para emparejamiento de accesorios y sensores Bluetooth, además de memoria interna y batería de respaldo para mayor robustez.

## Características principales del Ruptela - Pro5 Lite

- Módulo GNSS U‑blox con antena interna para posicionamiento fiable.
- Conectividad celular LTE con retroceso automático a 2G y modelos específicos por región.
- Soporte de doble CAN bus, incluyendo FMS y J1939, además de CustomCAN para parámetros OEM.
- Varias opciones de E/S: entradas digitales, entradas analógicas, salidas digitales, 1‑wire, RS232 y RS485.
- Soporte BLE 5.0 para emparejamiento de accesorios y sensores Bluetooth.
- Detección de manipulación y jamming combinada con TLS v1.2 para transmisión segura.
- Acelerómetro interno de 3 ejes para detección de movimiento y choques, y conector de audio de 3.5 mm para comunicación con el conductor.
- Batería de respaldo interna y memoria a bordo para registro a corto plazo y continuidad operativa.

## Cómo funcionan estas funciones con Plaspy

El Pro5 Lite envía correcciones GNSS y la telemetría disponible a Plaspy para que los operadores de flota puedan ver ubicaciones en vivo, recorridos históricos y datos de eventos dentro de la interfaz de Plaspy. Plaspy detecta automáticamente los protocolos soportados por el rastreador e ingiere la telemetría para mostrar el estado del vehículo y alertas en tiempo real.

- Actualizaciones de posición en vivo y reproducción histórica para análisis de rutas y despacho.
- Telemetría del CAN bus integrada en los paneles de vehículo para visibilidad de parámetros de motor y diagnósticos.
- Reporte de eventos y alarmas por manipulación, jamming y sucesos detectados por el acelerómetro, permitiendo respuestas rápidas.
- Datos de sensores Bluetooth y accesorios presentados junto con la telemetría del dispositivo para flujos de trabajo de carga o conductor.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto estándar de Plaspy y Plaspy detectará el protocolo del rastreador de forma automática.
- Las corrientes de telemetría del Pro5 Lite alimentan alertas, reportes y flujos de trabajo automatizados dentro de Plaspy.

## Casos de uso típicos

- Rastreo de ubicación y optimización de rutas para flotas comerciales usando GNSS y telemetría CAN.
- Monitoreo antirrobo y procesos de recuperación con eventos de manipulación, rastreo en tiempo real y control de salidas para acciones de inmovilizador.
- Monitoreo de combustible y parámetros de motor mediante datos FMS, J1939 y CustomCAN.
- Supervisión del comportamiento del conductor y seguridad a través de eventos del acelerómetro y canales de comunicación con el conductor.
- Monitoreo de carga y condiciones ambientales con sensores BLE y registro local para cumplimiento normativo.
- Instalaciones ocultas o estilo OBD donde se prefieren factor de forma compacto y carcasa sin tornillos.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware; la habilitación de funciones específicas depende del firmware instalado.
- Las variantes de hardware regionales pueden cambiar las bandas celulares soportadas y el comportamiento de retroceso de red.
- Algunas opciones de E/S y CAN dependen de la instalación en vehículo y del enfoque de cableado usado por los instaladores.
- BLE, puertos seriales e integraciones con accesorios pueden requerir configuración adicional o hardware accesorio.
- Confirme siempre los métodos de configuración y las funciones disponibles en la documentación del producto Ruptela y las notas de la versión de firmware vigentes.

## Por qué usar Plaspy con estas funciones

Usar el Ruptela Pro5 Lite con Plaspy ofrece a los equipos operativos un rastreador compacto que aporta posicionamiento GNSS preciso y telemetría vehicular a una única plataforma de gestión de flotas. La combinación de visibilidad del CAN bus, soporte para accesorios BLE y múltiples opciones de E/S permite a las organizaciones personalizar la monitorización, la seguridad y los flujos antirrobo sin sacrificar el tamaño del dispositivo ni la flexibilidad de instalación.

Para conocer más sobre cómo Plaspy soporta dispositivos como el Pro5 Lite, visite https://www.plaspy.com. Para las listas de funciones específicas más actuales, detalles de firmware y orientación del fabricante, consulte la documentación oficial de Ruptela en https://ruptela.com/ ya que los detalles de implementación y el comportamiento del firmware pueden cambiar con el tiempo.
