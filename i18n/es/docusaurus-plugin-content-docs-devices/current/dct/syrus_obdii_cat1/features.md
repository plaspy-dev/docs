---
slug: /dct/syrus_obdii_cat1/features
id: syrus_obdii_cat1-features
sidebar_label: Features
title: DCT - SYRUS OBDII-CAT1 Features
sidebar_class_name: menu_item_tracker
description: Funciones telemáticas OBDII plug and play precisas y compatibilidad con Plaspy para rastreo y diagnóstico de flotas
keywords:
  - Funciones DCT SYRUS OBDII CAT1
  - Rastreador GPS SYRUS OBDII CAT1
  - Funciones telemáticas OBDII
  - Rastreador OBDII plug and play
  - Diagnóstico vehicular OBDII
  - Rastreo acelerómetro 3 ejes
  - OBDII celular pentaband
  - Rastreo de flotas compatible con Plaspy
  - Telemetría vehicular en tiempo real
  - Compatibilidad SYRUS OBDII con Plaspy
---

# DCT - SYRUS OBDII-CAT1: Características

Esta página resume el contexto público de funcionalidades para el uso del rastreador DCT SYRUS OBDII-CAT1 con Plaspy. Se enfoca en las capacidades prácticas que importan a responsables de flota e integradores cuando el dispositivo se despliega como unidad compatible con Plaspy, y explica cómo la telemetría y los diagnósticos del dongle OBDII se traducen en monitorización e informes dentro de Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el modelo regional y los detalles de la instalación en el vehículo. La información que sigue se basa en la descripción del dispositivo proporcionada por el fabricante y refleja la funcionalidad típica del SYRUS OBDII-CAT1 cuando se utiliza con plataformas telemáticas en la nube como Plaspy.

## Resumen de características

El SYRUS OBDII-CAT1 es un dongle OBDII compacto y plug-and-play diseñado para vehículos de pasajeros y de uso ligero. Combina posicionamiento GNSS, sensor de movimiento y telemetría OBDII para entregar datos de ubicación y diagnóstico en tiempo real a plataformas telemáticas. Al integrarse con Plaspy, el equipo ofrece visibilidad continua, detección de eventos de conducción y reporte de parámetros del motor que respaldan operaciones de flota y flujos de trabajo de mantenimiento.

- Instalación OBDII plug-and-play para despliegues rápidos sin modificaciones del cableado del vehículo.
- GNSS de alta sensibilidad con soporte de SBAS (Satellite Based Augmentation) y desempeño de posicionamiento de hasta 2 metros para seguimiento preciso.
- Conectividad celular pentaband para transmitir telemetría y diagnósticos con amplia cobertura regional.
- Reporte estándar de parámetros OBDII: RPM del motor, nivel de combustible, temperatura de aceite y refrigerante, y posición del acelerador.
- Acelerómetro integrado de 3 ejes para detectar frenadas bruscas, impactos y eventos de conducción.
- Diseño listo para la nube que se autoconfigura para integrarse con Plaspy y otras plataformas gateway.

## Características principales del DCT - SYRUS OBDII-CAT1

- Dongle telemático OBDII de conexión directa compatible con vehículos de pasajeros y comerciales ligeros.
- Reporte de ubicación GNSS en tiempo real con soporte SBAS para mayor precisión.
- Telemetría estándar por PID OBD como RPM del motor, nivel de combustible, lecturas de temperatura y posición del acelerador.
- Acelerómetro de 3 ejes integrado para detección de eventos de conducción y choques.
- Módem celular pentaband para soporte amplio de redes móviles.
- Comportamiento de autoconfiguración para despliegues rápidos y escalables y gestión remota de dispositivos.
- Diseñado para la transmisión continua de ubicación y telemetría vehicular hacia plataformas en la nube.

## Cómo funcionan estas funciones con Plaspy

Cuando se configura como compatible con Plaspy, el SYRUS OBDII-CAT1 envía fijaciones GNSS, telemetría OBD y eventos del acelerómetro a Plaspy, donde los datos se normalizan, visualizan y quedan disponibles para alertas e informes. Plaspy ingiere parámetros OBDII estándar y eventos de movimiento para que los equipos de flota puedan supervisar la salud del vehículo, el comportamiento del conductor y la posición desde una única interfaz.

- Seguimiento en mapa en tiempo real y reproducción de rutas utilizando posiciones GNSS de alta precisión.
- Información sobre salud del vehículo y planificación de mantenimiento a partir de parámetros OBDII como RPM, nivel de combustible y temperaturas visibles en los informes de Plaspy.
- Visibilidad de eventos de conducción y registros históricos basados en detecciones de frenadas bruscas o impactos por el acelerómetro.
- Resúmenes de viaje, informes agregados y telemetría exportable para integración con sistemas administrativos mediante las APIs de Plaspy.
- Aprovisionamiento centralizado de dispositivos y monitoreo de estado a través de la gestión de dispositivos de Plaspy cuando el dongle está desplegado como unidad compatible.

## Casos de uso típicos

- Rastreo en vivo de flotas de vehículos de pasajeros y comerciales ligeros para mejorar la utilización y la logística.
- Diagnóstico remoto del motor y monitoreo de tendencias para planificación de mantenimiento usando telemetría OBD.
- Programas de comportamiento de conductores que emplean eventos del acelerómetro para identificar frenadas bruscas, impactos u otros eventos.
- Implementaciones rápidas para flotas de alquiler o grandes parques vehiculares donde la instalación plug-and-play minimiza el tiempo de inactividad.
- Flujos de trabajo de recuperación de vehículos y prevención de robo sustentados por el reporte continuo de posición.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según la versión de firmware y la configuración de software; consulte las notas de la versión de firmware del dispositivo para conocer el comportamiento preciso.
- Revisiones de hardware o variantes regionales del dongle OBDII pueden afectar las bandas celulares soportadas y algunos comportamientos de telemetría.
- Algunos parámetros OBD dependen de la marca y modelo del vehículo y de los PIDs expuestos por la ECU del vehículo; la disponibilidad de diagnósticos específicos depende del vehículo.
- El método de instalación y el estado del puerto OBDII del vehículo pueden influir en la calidad de la telemetría y las lecturas de los sensores.
- Para detalles sobre gestión y configuración de dispositivos al trabajar con Plaspy, revise tanto la guía de integración de Plaspy como la documentación del fabricante.

## Por qué usar Plaspy con estas funciones

Usar el SYRUS OBDII-CAT1 con Plaspy ofrece a los operadores de flota una vía práctica para combinar seguimiento de ubicación preciso con telemetría e inventario de eventos basados en OBDII. Plaspy centraliza los flujos entrantes del dongle en paneles, informes y APIs que ayudan a reducir tiempos de inactividad, supervisar el comportamiento de conductores y ejecutar programas de mantenimiento preventivo de forma más eficiente.

Para obtener más información sobre Plaspy y cómo admite dispositivos telemáticos OBDII como el SYRUS OBDII-CAT1, visite https://www.plaspy.com. Para las especificaciones de dispositivo más actuales, notas de firmware y detalles del fabricante, verifique la información en el sitio oficial de DCT https://www.digitalcomtech.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
