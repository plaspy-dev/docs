---
slug: /teltonika/fmb900/features
id: fmb900-features
sidebar_label: Features
title: Teltonika - FMB900 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones públicas del rastreador Teltonika FMB900 y su integración con Plaspy para monitoreo de flotas
keywords:
  - funciones Teltonika FMB900
  - rastreador GPS FMB900
  - compatibilidad Teltonika FMB900 Plaspy
  - FMB900 rastreador BLE
  - FMB900 inmovilizador
  - FMB900 sensor EYE
  - seguimiento de flotas FMB900
  - rastreador vehicular compacto
  - rastreador de instalación oculta
  - rastreador 2G para vehículos
---

# Teltonika - FMB900: Características

Esta página describe el contexto público de funciones para el uso del Teltonika FMB900 con Plaspy. Se centra en las capacidades prácticas del modelo, el soporte de sensores BLE, las opciones de gestión remota y la forma en que esas funciones se presentan en Plaspy para casos de uso de seguimiento de vehículos y activos.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para límites técnicos específicos del dispositivo, pasos de configuración y los detalles del firmware más recientes, usted debe consultar la documentación oficial de Teltonika.

## Resumen de funciones

El FMB900 es un rastreador vehicular 2G compacto y de bajo costo, diseñado para seguimiento en tiempo real sencillo, flujos de trabajo anti-robo y telemetría básica. Su reducido tamaño y conectividad BLE lo hacen apropiado para instalaciones discretas y para ampliar la telemetría con sensores inalámbricos, mientras que las opciones de gestión remota facilitan el mantenimiento a nivel de flota.

- Diseño delgado y perfil bajo para instalaciones ocultas o en espacios reducidos del vehículo.
- Conectividad celular 2G para reportes básicos de posición y telemetría de bajo ancho de banda.
- Soporte Bluetooth Low Energy para emparejar módulos EYE Beacon y EYE Sensor y captar mediciones ambientales y de manipulación.
- Capacidad de bloqueo remoto del motor para flujos de trabajo anti-robo e inmovilizador.
- Gestión remota del dispositivo y actualizaciones de firmware vía Teltonika FOTA WEB y configuración con Teltonika Configurator.

## Funciones principales del Teltonika - FMB900

- Soporte Bluetooth Low Energy (BLE) para accesorios EYE Beacon y EYE Sensor, que permiten registrar temperatura, humedad, efecto magnético y detección de movimiento.
- Conectividad celular GSM 2G adecuada para informes esenciales de ubicación y telemetría.
- Funcionalidad de bloqueo remoto del motor para soportar flujos de trabajo de inmovilización.
- Compatibilidad con herramientas de gestión remota mediante Teltonika FOTA WEB para actualizaciones de firmware y Teltonika Configurator para ajustes del dispositivo.
- Factor de forma delgado con baja altura ideal para instalaciones ocultas o en lugares estrechos.
- Opciones de paquete de instalación simples que incluyen un cable de alimentación para una puesta en marcha rápida.
- Diseñado para casos de uso de control básico de flota y reporte de posiciones.

## Cómo funcionan estas funciones con Plaspy

Cuando está conectado a Plaspy, el FMB900 entrega ubicación y entradas de sensores que Plaspy muestra en sus herramientas de monitoreo e informes. Plaspy detecta automáticamente muchos protocolos comunes de Teltonika, por lo que las posiciones entrantes y los datos de sensores BLE pueden visualizarse sin una configuración profunda a nivel de protocolo.

- Ubicación en tiempo real y el historial de posiciones visibles en los mapas y líneas de actividad de Plaspy.
- Telemetría de sensores BLE procedente de EYE Sensor y EYE Beacon presentada como eventos ambientales o de manipulación en los informes y alertas de Plaspy.
- Eventos de inmovilizador y bloqueo del motor reflejados en los registros de eventos de Plaspy para soportar respuestas anti-robo y acciones remotas.
- Flujos de trabajo de gestión de dispositivos visibles en Plaspy, mientras que las actualizaciones de firmware y la configuración masiva siguen siendo compatibles con Teltonika FOTA WEB y Configurator.
- La instalación compacta del dispositivo reduce su visibilidad en el vehículo mientras Plaspy mantiene la supervisión continua y el sistema de alertas.

## Casos de uso típicos

- Prevención de robo y recuperación de vehículos mediante instalaciones discretas y bloqueo remoto del motor.
- Seguimiento básico de flotas y reproducción de rutas para furgonetas, automóviles y vehículos ligeros.
- Monitoreo de carga sensible a la temperatura cuando se empareja con sensores BLE EYE Sensor.
- Rastreo de pequeños activos y remolques donde se requiere un rastreador compacto.
- Detección de manipulación y movimiento mediante balizas BLE para control de puertas o intrusiones.
- Supervisión de conducción eficiente a través de telemetría básica e informes de comportamiento de conducción que Plaspy puede mostrar.

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones puede depender de la versión de firmware del dispositivo y de las opciones habilitadas en la revisión de hardware específica.
- Las capacidades de sensores BLE requieren accesorios compatibles EYE Beacon o EYE Sensor y un emparejamiento y configuración correctos.
- La disponibilidad de redes 2G y las bandas de frecuencia soportadas varían según la región y el operador; verifique la cobertura local antes del despliegue.
- El bloqueo remoto del motor requiere una instalación y cableado correctos; las prácticas del instalador y el cableado del vehículo afectan la funcionalidad.
- Los servicios de gestión remota de Teltonika, como FOTA WEB y Configurator, se usan para actualizaciones y aprovisionamiento; puede que se requiera acceso a esos servicios para despliegues masivos.

## Por qué usar Plaspy con estas funciones

Utilizar el Teltonika FMB900 con Plaspy ofrece a las organizaciones una vía sencilla para el rastreo en tiempo real, flujos de trabajo anti-robo discretos y monitoreo ampliado con sensores, sin necesidad de cableado complejo. Plaspy consolida la posición del FMB900 y las entradas de sensores BLE en paneles de control de flota, registros de eventos e informes que facilitan la visibilidad operativa y respuestas oportunas.

Learn more about how Plaspy can help you deploy and monitor Teltonika trackers on the Plaspy website https://www.plaspy.com. For the most current device specifications, firmware behavior and manufacturer details verify information directly with Teltonika at https://www.teltonika-gps.com/
