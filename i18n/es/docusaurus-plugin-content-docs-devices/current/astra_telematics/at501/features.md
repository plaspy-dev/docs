---
slug: /astra_telematics/at501/features
id: at501-features
sidebar_label: Features
title: Astra Telematics - AT501 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las características del rastreador AT501 y su integración con Plaspy para monitoreo a largo plazo y visibilidad de flotas
keywords:
  - Astra Telematics AT501
  - características AT501
  - rastreador GPS AT501
  - rastreador Astra Telematics
  - vida de batería AT501
  - AT501 LTE M NB IoT
  - AT501 GNSS
  - AT501 BLE acelerómetro
  - AT501 IP68
  - compatibilidad AT501 Plaspy
---

# Astra Telematics - Características del AT501

Esta página ofrece una visión pública del AT501 Mini Asset Tracker de Astra Telematics y de cómo sus características se integran con Plaspy para la gestión de flotas y el monitoreo de activos. Se centra en información práctica y no sensible sobre las capacidades que ofrece el AT501 y en cómo resultan útiles cuando el dispositivo se utiliza con Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware del dispositivo, la revisión de hardware, la provisión celular regional y las opciones de instalación. Para especificaciones y notas de firmware más actuales consulte la documentación del fabricante enlazada más abajo y a su proveedor de hardware antes del despliegue.

## Resumen de características

El AT501 es un rastreador compacto alimentado por batería, diseñado para el monitoreo a largo plazo de activos pequeños y sin fuente de energía. Combina conectividad celular multinetwork, GNSS multiconstelación, modos ultrabajo consumo y provisión local por BLE para ofrecer telemetría de ubicación y eventos adecuada a despliegues de larga autonomía.

- Paquete de batería reemplazable de larga duración que soporta intervalos de reporte extendidos para minimizar el mantenimiento en campo.
- Conectividad celular multinetwork con LTE-M, NB-IoT y fallback 2G para mantener los uplinks en áreas con cobertura variable.
- GNSS multiconstelación para posicionamiento confiable usando GPS, Galileo, GLONASS y BeiDou.
- Reportes basados en eventos mediante acelerómetro interno para reducir transmisiones manteniendo la captura de movimientos.
- Carcasa robusta con calificación IP68, montaje magnético y opción de tornillo M4 para instalaciones seguras en campo.
- Bluetooth Low Energy para configuración y diagnóstico local antes o durante la puesta en marcha.

## Características principales de Astra Telematics - AT501

- Paquete de batería LTC reemplazable de 13,000 mAh diseñado para larga vida útil en modos de bajo consumo.
- Módem celular multinetwork con eSIM compatible con LTE-M y NB-IoT, más fallback 2G para amplia cobertura.
- GNSS multiconstelación con antena interna para reportes de posición adecuados al rastreo de activos.
- Operación ultrabajo consumo y reportes programados para preservar la batería en despliegues prolongados.
- Acelerómetro MEMS que dispara reportes por movimiento y detecta eventos relevantes.
- Interfaz Bluetooth Low Energy para configuración y diagnóstico local mediante un smartphone.
- Carcasa IP68 resistente y opciones de montaje que incluyen fijación magnética y perno M4.
- Personalización de hardware y de reportes ofrecida por el proveedor para alinear la telemetría con los flujos de trabajo en Plaspy.

## Cómo funcionan estas características con Plaspy

Cuando se despliega con Plaspy, el AT501 envía telemetría de posición y eventos a la plataforma Plaspy para que usted y su equipo puedan supervisar el historial de ubicación de activos, eventos de movimiento y el estado de los reportes. Plaspy detecta automáticamente los protocolos de rastreadores compatibles y acepta uplinks en su endpoint de ingestión, permitiendo que los dispositivos se provisionen y gestionen junto con el resto del hardware de la flota.

- Las transmisiones programadas de bajo consumo y los reportes activados por el acelerómetro alimentan Plaspy para balancear visibilidad y duración de batería.
- La detección de movimiento genera reportes de evento en Plaspy que resaltan posibles reubicaciones o escenarios de robo sin requerir reportes continuos de alta frecuencia.
- El soporte multinetwork celular ayuda a garantizar que la telemetría llegue a Plaspy desde áreas con características de cobertura variables.
- BLE ofrece un canal local para provisionar la identidad del dispositivo y ajustes iniciales antes de registrar el AT501 en Plaspy.
- Plaspy recibe uplinks en d.plaspy.com y soporta reporte por UDP o TCP en el puerto estándar de dispositivos Plaspy, con detección automática de protocolos para formatos de rastreadores comunes.

## Casos de uso típicos

- Rastreo de larga duración de remolques, contenedores y otros activos sin alimentación eléctrica donde la vida de batería es crítica.
- Monitoreo antirrobo y alertas de movimiento para equipos almacenados y herramientas portátiles de alto valor.
- Monitoreo de inventarios estacionales o poco móviles donde se buscan visitas de mantenimiento mínimas.
- Visibilidad remota de activos para planificación logística e informes históricos de ubicación.
- Despliegue rápido en campo de numerosos ítems usando montaje magnético o instalación con un solo perno.

## Notas sobre disponibilidad de funciones

- Las diferencias de firmware y las actualizaciones continuas pueden cambiar el comportamiento de los reportes, los conjuntos de funciones y los perfiles de consumo energético.
- Las revisiones de hardware y la provisión celular regional pueden afectar las bandas celulares disponibles y el rendimiento de conectividad.
- Las estimaciones de duración de batería dependen del intervalo de reportes, los patrones de movimiento, la temperatura y las condiciones reales de cobertura.
- Algunas opciones de telemetría y personalización pueden requerir provisión por parte del proveedor o configuración de firmware antes de la integración con Plaspy.
- El AT501 no proporciona interfaces de telemetría del motor del vehículo como CANBus, RS232, ADC o E/S digital para detección de ignición o nivel de combustible.

## Por qué usar Plaspy con estas características

Usar el AT501 con Plaspy ofrece a las organizaciones una vía directa para agregar telemetría de activos de larga duración junto con otros datos de la flota. La combinación de reportes basados en eventos, conectividad celular multinetwork y provisión por BLE hace que el AT501 sea adecuado para despliegues masivos donde la baja necesidad de mantenimiento y los uplinks confiables son prioritarios. En Plaspy, los eventos de movimiento, los reportes programados y el historial de ubicaciones se presentan en una vista operativa única para apoyar tareas de monitoreo e investigación.

Para conocer más sobre Plaspy y cómo gestiona la integración de dispositivos visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, detalles de firmware y orientación del fabricante verifique la información en el sitio de Astra Telematics https://astratelematics.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
