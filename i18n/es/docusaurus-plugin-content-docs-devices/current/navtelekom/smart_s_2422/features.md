---
slug: /navtelekom/smart_s_2422/features
id: smart_s_2422-features
sidebar_label: Features
title: Navtelekom - SMART S-2422 Features
sidebar_class_name: menu_item_tracker
description: Resumen público del Navtelekom SMART S-2422 y su integración con Plaspy para rastreo de flotas y activos
keywords:
  - Navtelekom SMART S 2422
  - SMART S 2422 características
  - rastreador GPS Navtelekom
  - SMART S 2422 Plaspy
  - rastreador vehicular SMART S 2422
  - rastreador GPS GLONASS Navtelekom
  - rastreador 2G Navtelekom
  - entradas salidas SMART S 2422
  - seguimiento de flota SMART S 2422
  - telemetría Bluetooth acelerómetro
---

# Navtelekom - SMART S-2422: Características

Esta página presenta un resumen público de las funciones del Navtelekom SMART S-2422 y de cómo sus capacidades se aprovechan con Plaspy para el monitoreo de vehículos y activos. Se centra en información práctica y no sensible sobre el rastreador, la forma en que reporta posición y telemetría, y qué puede esperar al integrar el dispositivo con Plaspy para seguimiento en tiempo real, alertas e informes.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el cableado de instalación específico y la implementación del fabricante. Los detalles a continuación reflejan la descripción del equipo y los patrones de uso habituales; para parámetros técnicos concretos y el comportamiento del firmware más reciente consulte la documentación y las notas de versión del fabricante.

## Resumen de características

El SMART S-2422 es un rastreador vehicular GNSS compacto diseñado para reportes continuos de posición y telemetría a través de redes celulares, con múltiples entradas y salidas para sensores y control del vehículo. Su utilidad de configuración y opciones de conectividad local facilitan el despliegue y diagnóstico en entornos de flota.

- Fijaciones de posición GNSS mediante GPS y GLONASS para una localización confiable.
- Módem celular 2G con ranura para una sola SIM y antena GSM integrada para enlace de datos móviles.
- Varias entradas universales y salidas de control para captar señales de encendido, puertas y sensores.
- Interfaces RS-485 y 1-Wire para integrar dispositivos de telemetría y sensores externos.
- Soporte Bluetooth 4.0 para diagnóstico local, configuración y conectividad de sensores de corto alcance.
- Acelerómetro integrado y protección robusta contra sobretensiones para entornos eléctricos de vehículos comerciales.

## Funciones principales del Navtelekom - SMART S-2422

- GNSS (GPS y GLONASS) para detección de posición y movimiento.
- Módem GSM 2G con ranura para SIM y antenas integradas para comunicación celular.
- Tres entradas universales configurables para señales discretas, analógicas, de pulso o de frecuencia.
- Dos salidas de control para conmutación remota o accionamiento de actuadores.
- Interfaces RS-485 y 1-Wire para conectar módulos de telemetría y sensores periféricos.
- Bluetooth 4.0 para diagnóstico local y emparejamiento de sensores.
- Acelerómetro integrado para soportar análisis de comportamiento de conductor y Eco Driving.
- Protección contra sobretensiones hasta 200 V para mayor fiabilidad en sistemas eléctricos vehiculares.

## Cómo funcionan estas funciones con Plaspy

Cuando se configura para Plaspy, el SMART S-2422 envía la ubicación, telemetría y eventos de E/S a la plataforma Plaspy para que los equipos puedan monitorizar los vehículos en tiempo real y analizar datos históricos. Plaspy detecta automáticamente los protocolos soportados por el rastreador y presenta los datos del dispositivo en paneles, mapas e informes.

- Los reportes de posición GNSS, marcas de tiempo y velocidad se muestran en los mapas y en las vistas de seguimiento en vivo de Plaspy.
- Los eventos de entradas universales, como encendido y estado de puertas, se tratan como marcadores de evento para segmentar viajes y generar alertas.
- Entradas analógicas, de pulso o de frecuencia, usadas para sensores de combustible o contadores, pueden alimentar canales de telemetría en Plaspy para su monitoreo e informes.
- Las salidas de control pueden reflejarse en los flujos operativos para indicar el estado de conmutación remota o comandos a actuadores cuando se integran y autorizan correctamente.
- Bluetooth y la configuración local mediante NTC Configurator facilitan la puesta en marcha y el diagnóstico en sitio antes de empezar a enviar datos a Plaspy.
- Plaspy acepta el tráfico del dispositivo dirigido al endpoint de ingestión de Plaspy y procesará la ubicación y telemetría según la configuración de la plataforma; los equipos pueden configurarse para usar UDP o TCP y Plaspy detecta automáticamente los detalles del protocolo del rastreador.

## Casos de uso típicos

- Seguimiento de flotas en tiempo real y monitoreo de rutas para logística y despacho.
- Programas de comportamiento del conductor y Eco Driving mediante eventos y telemetría del acelerómetro.
- Monitoreo de nivel de combustible e informes por pulsos a través de entradas analógicas o de frecuencia.
- Flujos anti robo y deshabilitación remota o control de actuadores usando las salidas del dispositivo.
- Integración con sensores o equipos especializados vía RS-485 y 1-Wire para temperatura, lectores RFID o telemetría personalizada.
- Diagnóstico y puesta en marcha en campo mediante Bluetooth y NTC Configurator en Windows.

## Notas sobre disponibilidad de funciones

- Funciones como los modos de entrada exactos, el manejo de pulsos o el soporte para sensores de combustible dependen de la revisión de firmware y de cómo se configure el equipo.
- Revisiones de hardware y variantes regionales pueden afectar las bandas celulares soportadas y el comportamiento del Bluetooth; verifique la unidad que reciba frente a las especificaciones del fabricante.
- El cableado de instalación e integración con el vehículo determina qué entradas y salidas están disponibles y cómo se comportan en la práctica.
- Algunos usos avanzados, como el control remoto de actuadores, requieren un cableado vehicular correcto, diseño fail safe y la configuración apropiada tanto en el dispositivo como en Plaspy.
- Consulte la documentación de NTC Configurator para procedimientos de actualización de firmware y opciones de configuración utilizadas durante el despliegue.

## Por qué usar Plaspy con estas funciones

Emparejar el SMART S-2422 con Plaspy brinda a los equipos operativos una vista consolidada de los datos de posición GNSS, eventos de entrada y telemetría periférica en una sola plataforma. Las herramientas de mapas, alertas e informes de Plaspy convierten señales crudas de ubicación y E/S en información accionable para despacho de flota, planificación de mantenimiento y prevención de pérdidas.

Si desea evaluar cómo el SMART S-2422 puede encajar en su flujo de trabajo telemático, conozca más sobre Plaspy en el sitio principal https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y documentación técnica oficial, verifique la información del fabricante en https://www.navtelecom.ru/.
