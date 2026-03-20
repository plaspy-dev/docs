---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_pro/features
id: mta_glonass_ver12m_can_pro-features
sidebar_label: Features
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del MTA-Glonass ver12M CAN PRO y su integración con Plaspy para rastreo y telemetría de flotas
keywords:
  - OKB Tehnoavtomatika
  - MTA Glonass ver12M CAN PRO
  - funciones MTA Glonass
  - rastreador vehicular Plaspy
  - seguimiento GNSS de flotas
  - telemetría bus CAN
  - rastreador monitoreo de combustible
  - rastreador con batería de respaldo
  - registro de eventos telemática
  - rastreador compatible con Plaspy
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) — Características

Esta página ofrece un resumen público de las capacidades del OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN-PRO) y de cómo se reflejan esas funciones cuando el dispositivo se integra con Plaspy. Se concentra en detalles prácticos no sensibles sobre posicionamiento, comunicaciones, opciones de E/S y telemetría que interesan a operadores de flota e integradores que usan Plaspy para seguimiento e informes.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Cuando el MTA-Glonass incluye interfaces opcionales o opciones de configuración, esos elementos pueden estar presentes o no dependiendo de la unidad específica y de cómo se instaló o configuró.

## Resumen de características

El MTA-Glonass (ver.12M-CAN-PRO) es una terminal profesional de monitoreo vehicular diseñada para ofrecer posicionamiento satelital fiable y telemetría de vehículo. Está orientada a un rendimiento GNSS estable, comunicaciones multicanal e integración con el bus del vehículo para soportar seguimiento en tiempo real e informes históricos en Plaspy.

- Receptor GNSS de alta sensibilidad con soporte Glonass para posicionamientos precisos y actualizaciones de ubicación rápidas.
- Comunicaciones multicanal que incluyen GPRS, SMS y un canal de datos dedicado para asegurar la entrega de telemetría a través de redes móviles.
- Integración nativa con bus CAN para obtener estado del motor, encendido y otros parámetros de la red del vehículo.
- Entradas para sensores de pulso y analógicos, además de una interfaz de temperatura opcional y una salida opcional para control o alarmas.
- Batería de respaldo incorporada y modos de bajo consumo para mantener el registro de eventos y el almacenamiento en búfer durante cortes de energía.
- Almacenamiento interno con registro de eventos y capacidad configurable para garantizar continuidad durante pérdidas de conectividad.

## Características principales del OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO)

- Receptor GNSS de 50 canales y alta sensibilidad con capacidad Glonass para fijaciones de posición consistentes.
- Comunicaciones celulares multicanal que incluyen GPRS, SMS y un canal de datos dedicado para uplink y downlink de telemetría.
- Integración directa con bus CAN para telemetría del motor, encendido y otros datos de la red vehicular.
- Entrada de contacto seco para pulsos y entrada ADC analógica para sensores de combustible, contadores de pulso u otra telemetría analógica.
- Entrada de temperatura 1-Wire opcional para monitoreo ambiental en transporte refrigerado.
- Salida de colector abierto opcional para soportar control remoto o activación de alarmas cuando está instalada.
- Batería de respaldo recargable incorporada para proporcionar seguimiento en espera y almacenamiento en búfer de eventos durante la pérdida de alimentación del vehículo.
- Registro de eventos configurable y almacenamiento no volátil con gran capacidad de registros para informes históricos.

## Cómo funcionan estas características con Plaspy

Plaspy procesa posiciones GNSS, parámetros derivados del bus CAN y eventos generados por entradas del MTA-Glonass para ofrecer seguimiento en vivo, alertas e informes históricos. El dispositivo almacena eventos localmente cuando se interrumpe la conectividad y reenvía los registros guardados a Plaspy al restablecerse el enlace, lo que ayuda a conservar las trazas de auditoría y la continuidad de los datos.

- Las actualizaciones de posición en tiempo real y el historial de movimientos se muestran en los paneles de Plaspy para visibilidad de la flota y monitoreo de rutas.
- Señales extraídas del CAN, como encendido y estado del motor, quedan disponibles en Plaspy para detección de viajes y reporte de tiempos de inactividad.
- Las entradas de pulso y analógicas utilizadas para combustible o caudal se registran y pueden alimentar informes de consumo y detección de anomalías en Plaspy.
- La telemetría de temperatura opcional y las entradas de sensores externos pueden visualizarse en Plaspy para monitoreo de carga y alertas ambientales.
- El almacenamiento en búfer de eventos en el dispositivo garantiza que los registros se entreguen a Plaspy después de cortes temporales de red, preservando la continuidad de los registros.

## Casos de uso típicos

- Gestión de flotas y supervisión de rutas para autobuses, camiones y vehículos de servicio que requieren precisión GNSS y telemetría vehicular.
- Monitoreo de combustible y análisis de consumo usando entradas de pulso y analógicas integradas en los informes de Plaspy.
- Flujos de trabajo anti‑robo y control remoto mediante registro de eventos combinado con la salida opcional para intervención.
- Diagnóstico remoto y planificación de mantenimiento basados en parámetros del bus CAN y en datos históricos de eventos.
- Monitoreo de cargas sensibles a la temperatura cuando se utiliza la interfaz de temperatura opcional con alertas en Plaspy.

## Notas sobre disponibilidad de funciones

- Algunas interfaces y funciones son hardware opcional o características configurables y pueden no estar presentes en todas las unidades de este modelo.
- Las versiones de firmware y las revisiones de hardware pueden modificar el comportamiento relativo a la capacidad de registro, la gestión de energía y las interfaces opcionales; verifique la versión de firmware instalada para conocer el comportamiento exacto.
- Los detalles de la instalación, como el cableado al CAN, las entradas de sensores y la salida opcional, afectan los datos que el dispositivo informa a Plaspy.
- Variantes regionales o del operador pueden alterar las bandas celulares disponibles o los modos de comunicación soportados.
- Confirme siempre el cableado y la configuración de los sensores con el instalador y consulte la documentación del fabricante para diagramas y límites eléctricos.

## Por qué usar Plaspy con estas características

Usar el MTA-Glonass (ver.12M-CAN-PRO) con Plaspy ofrece a los operadores de flota una combinación práctica de posicionamiento satelital preciso, telemetría desde el bus del vehículo e entradas de sensores flexibles. Plaspy recopila y presenta información de ubicación, eventos y datos derivados del CAN de un modo que facilita la supervisión operativa, el análisis histórico y la configuración de alertas sin requerir integraciones complejas.

Para obtener más información sobre cómo Plaspy soporta rastreadores como este y revisar las capacidades de la plataforma, por favor visite https://www.plaspy.com. Para los detalles más actualizados sobre funciones específicas del dispositivo, comportamiento del firmware y recomendaciones de instalación, verifique la información con el fabricante en http://www.okb-ta.ru/.
