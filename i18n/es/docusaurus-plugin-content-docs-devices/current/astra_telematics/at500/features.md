---
slug: /astra_telematics/at500/features
id: at500-features
sidebar_label: Features
title: Astra Telematics - AT500 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS recargable Astra Telematics AT500 y su integración con Plaspy para seguimiento de activos
keywords:
  - Astra Telematics AT500
  - funciones AT500
  - rastreador GPS AT500
  - rastreador GPS Astra Telematics
  - compatibilidad AT500 Plaspy
  - rastreador compacto para activos
  - LTE M NB IoT rastreador
  - configuración BLE
  - carga inalámbrica Qi
  - rastreador IP68
---

# Astra Telematics - Funciones del AT500

Esta página ofrece un resumen público de las funciones del Astra Telematics AT500 y su uso práctico cuando se integra con Plaspy. Resume las capacidades clave que verá en los paneles y reportes de Plaspy para el AT500, con foco en funcionalidades visibles para el usuario como reporte de ubicación, detección de movimiento, telemetría de batería y estado del dispositivo, y aprovisionamiento en campo mediante BLE.

La disponibilidad y el comportamiento exacto de las funciones dependen de la unidad específica, la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. La información a continuación se basa en descripciones públicas del dispositivo y pretende ayudarle a comprender qué puede aportar el AT500 a implementaciones con Plaspy, siempre recomendando verificar la documentación vigente del fabricante.

## Resumen de funciones

El AT500 Mini Asset Tracker es un dispositivo recargable y compacto pensado para el rastreo discreto y de larga duración de activos pequeños y de difícil acceso. Combina GNSS multiconstelación, opciones celulares de bajo consumo, configuración por BLE y carga inalámbrica Qi en una carcasa IP68 compacta para facilitar despliegues densos y mantenimientos de baja intervención.

- Factor de forma compacto, apto para montaje con imanes o adhesivo para colocación en activos pequeños
- GNSS multiconstelación para fijaciones de posición fiables en entornos variados
- Conectividad celular multi red con LTE M y NB‑IoT más fallback a 2G para amplia cobertura
- Batería recargable de 2200 mAh con carga inalámbrica Qi y gestión de energía consciente del movimiento para mayor autonomía
- BLE para configuración y diagnóstico en sitio mediante un teléfono inteligente
- Carcasa con clasificación IP68, eSIM interna y antenas internas para simplificar el aprovisionamiento

## Funciones principales del Astra Telematics - AT500

- Rastreador recargable y compacto diseñado para instalación discreta en equipos pequeños y activos compartidos
- Soporte GNSS multiconstelación, incluyendo GPS, Galileo, GLONASS y BeiDou para posicionamiento más preciso
- Conectividad celular en LTE M y NB‑IoT con fallback a 2G para mantener los reportes cuando sea necesario
- BLE (Bluetooth Low Energy) para configuración local y diagnóstico en campo con herramientas móviles
- Gestión de energía sensible al movimiento con acelerómetro MEMS para reducir consumo y activar reportes por movimiento
- Carga inalámbrica Qi y batería interna de 2200 mAh para flujos de recarga de bajo contacto
- Protección IP68 y batería de respaldo interna para uso rudo o en exteriores
- eSIM interna y antenas integradas para facilitar el aprovisionamiento a gran escala y reducir la complejidad de instalación

## Cómo funcionan estas funciones con Plaspy

Cuando el AT500 está conectado a Plaspy, envía ubicación, movimiento y telemetría de estado al mismo ecosistema de Plaspy que se utiliza con otros rastreadores. Plaspy detecta automáticamente protocolos compatibles e ingiere la telemetría para ofrecer visibilidad de ubicación en tiempo real, reglas de eventos e informes históricos.

- Las actualizaciones de posición GNSS aparecen en los mapas en tiempo real de Plaspy y en el historial de viajes para rastrear activos
- Los eventos de movimiento y la lógica de activación pueden mostrarse como alertas de actividad o movimiento dentro de Plaspy
- El nivel de batería y la telemetría de salud del dispositivo están disponibles para monitoreo y planificación de mantenimiento
- El aprovisionamiento asistido por BLE reduce el tiempo de configuración en campo y facilita diagnósticos rápidos antes de registrar los dispositivos en Plaspy
- El reporte por redes múltiples permite mantener telemetría persistente del activo en Plaspy incluso en escenarios de cobertura desafiante

## Casos de uso típicos

- Rastreo de pequeños activos no motorizados como herramientas, instrumentos y equipos compartidos donde la discreción y el tamaño son críticos
- Programas de equipo compartido y alquiler que requieren colocación discreta y larga autonomía para rastrear la utilización
- Flujos anti robo que se apoyan en alertas de movimiento e historial de ubicaciones para recuperar activos portátiles mediante Plaspy
- Despliegues de alta densidad en bodegas, patios o campus donde el aprovisionamiento por BLE y las antenas internas simplifican las implementaciones
- Instalaciones remotas o exteriores que necesitan protección IP68 y carga inalámbrica para un mantenimiento de baja intervención

## Notas sobre disponibilidad de funciones

- El comportamiento de funciones como intervalos de reporte, perfiles de energía y umbrales de movimiento puede variar según el firmware y la configuración
- Revisiones de hardware y variantes regionales de celular pueden cambiar las bandas soportadas o el comportamiento de red para LTE M, NB‑IoT y 2G
- Algunas integraciones y entradas específicas para vehículos no están presentes en el AT500; por ejemplo, no soporta CANbus ni interfaces de identificación de conductor
- El método de instalación y el montaje pueden afectar el desempeño GNSS y la potencia de la señal celular debido a la colocación y los materiales circundantes
- Consulte siempre la documentación del fabricante para límites específicos del dispositivo, opciones de configuración y las notas de firmware más recientes

## Por qué usar Plaspy con estas funciones

Usar el AT500 con Plaspy permite a las organizaciones incluir activos compactos en la misma visión operativa que utilizan para el monitoreo de flotas y equipos mayores. El AT500 aporta los datos de ubicación, movimiento y estado que Plaspy necesita para ofrecer conciencia situacional, alertas e informes en flotas mixtas sin requerir E/S de grado vehicular.

Si desea conocer más sobre cómo Plaspy puede gestionar dispositivos AT500 y otros rastreadores visite https://www.plaspy.com. Para detalles específicos de dispositivo, notas de firmware y guías de despliegue siempre verifique las especificaciones en el sitio del fabricante https://astratelematics.com/
