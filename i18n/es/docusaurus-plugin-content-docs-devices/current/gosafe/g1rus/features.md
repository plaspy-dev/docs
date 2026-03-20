---
slug: /gosafe/g1rus/features
id: g1rus-features
sidebar_label: Features
title: Gosafe - G1RUS Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del Gosafe G1RUS y cómo este rastreador de bajo consumo funciona con Plaspy para seguimiento y telemetría a largo plazo
keywords:
  - Características Gosafe G1RUS
  - Rastreador GPS Gosafe G1RUS
  - Compatibilidad G1RUS Plaspy
  - Rastreador de activos Gosafe
  - Rastreador de bajo consumo G1RUS
  - Funciones GPS Gosafe
  - Geovallas G1RUS
  - Telemetría Gosafe
  - Puntos de ruta G1RUS
  - Seguimiento de flotas Gosafe
---

# Gosafe - Características del G1RUS

Esta página ofrece un resumen público de las funciones del Gosafe G1RUS cuando se usa con Plaspy. Describe las capacidades prácticas del dispositivo para seguimiento en tiempo real, telemetría y gestión de activos dentro de Plaspy, y explica cómo esas capacidades suelen mapearse a monitorización, alertas y flujos de trabajo operativos.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión o variante de hardware, el método de instalación y la implementación del fabricante. Para detalles específicos del dispositivo, notas de firmware y la documentación técnica más reciente, consulte al fabricante y las notas de la versión del equipo instalado.

## Visión general de funciones

El G1RUS está diseñado para despliegues prolongados y sin supervisión en remolques, contenedores y activos de alto valor. Combina consumo de energía extremadamente bajo, un encapsulado robusto y opciones de alimentación flexibles con posicionamiento GNSS y telemetría configurable para soportar meses o años de reportes con un mantenimiento mínimo.

- Diseñado para despliegues prolongados sin supervisión con posibilidad de varios años en espera cuando se configura para reportes diarios reducidos
- Opciones de alimentación flexibles que incluyen baterías reemplazables CR123, paquete LiPo recargable opcional y variantes de alimentación externa para vehículos o activos con energía
- Reporte de posición GNSS robusto mediante un receptor u‑blox de 56 canales con soporte SBAS y GLONASS para obtener fijaciones fiables
- Múltiples modos de comunicación y variantes regionales para ajustar la compatibilidad con redes celulares disponibles e integración con Plaspy
- Entradas/salidas digitales configurables y un acelerómetro 3D para detección de movimiento y reportes basados en eventos
- Módulo Bluetooth 5.0 opcional para extender la telemetría con sensores y balizas compatibles

## Características principales del Gosafe - G1RUS

- Diseño de hardware de consumo extremadamente bajo, apto para seguimientos de activos prolongados sin supervisión
- Arquitectura de alimentación flexible: baterías CR123 reemplazables, paquete LiPo recargable opcional y variante LB con alimentación externa
- Receptor GNSS u‑blox de 56 canales con asistencia SBAS y GLONASS para fijaciones rápidas y precisas
- Comunicaciones GSM cuatribanda con variantes opcionales 3G y LTE Cat 1 para mayor flexibilidad según la cobertura celular regional
- Entradas y salidas digitales configurables además de acelerómetro 3D para eventos de movimiento e integraciones externas sencillas
- Bluetooth 5.0 opcional para conectar sensores BLE y balizas y reportar condiciones adicionales del activo
- Capacidades de gestión remota, incluyendo actualización de firmware OTA y aprovisionamiento condicional de perfiles
- Carcasa resistente y múltiples opciones de montaje, pensadas para remolques, contenedores y otros activos expuestos

## Cómo se integran estas funciones con Plaspy

Plaspy recibe los reportes de posición y telemetría del G1RUS y los presenta como datos de ubicación en vivo, trayectorias históricas y alertas desencadenadas por eventos. Cuando el firmware del dispositivo soporta reportes condicionales y gestión de perfiles, esas capacidades ayudan a mantener una larga vida útil de la batería mientras garantizan que Plaspy reciba los eventos y la telemetría necesarios para los flujos operativos.

- Visualización de ubicación en vivo e historial en Plaspy a partir de las fijaciones GNSS reportadas por el dispositivo
- Detección de movimiento e impactos mediante eventos del acelerómetro que pueden generar alertas y activar flujos de trabajo
- Geovallas, perfiles por tiempo y velocidad, y hasta 128 puntos de ruta que pueden usarse en Plaspy para validar paradas y gestionar rutas
- Estado y diagnóstico del dispositivo, como nivel de batería, detección de entrada de alimentación y indicadores básicos de salud, mostrados para supervisión operativa
- Perfiles de reporte condicional que reducen el uso celular y preservan la batería mientras resaltan los eventos importantes en Plaspy
- Funciones de aprovisionamiento remoto y actualización de firmware que permiten a los administradores de flota gestionar dispositivos desplegados cuando lo soportan el firmware del equipo y los flujos de trabajo de Plaspy

## Casos de uso típicos

- Seguimiento a largo plazo de remolques y contenedores donde la duración de la batería y el montaje resistente son requisitos clave
- Gestión de entregas y rutas usando puntos de ruta y geovallas basadas en tiempo o velocidad para validar paradas y optimizar operaciones
- Flujos de trabajo para prevención de robo y recuperación de activos mediante alertas de movimiento y telemetría para generar notificaciones rápidas en Plaspy
- Monitoreo suplementario de condiciones con sensores Bluetooth opcionales para temperatura de carga, estado de puertas o detección de proximidad
- Monitorización de equipos estacionados o estacionales donde la larga vida de la batería reduce visitas de mantenimiento y baja el costo total de propiedad
- Flotas mixtas donde algunos activos usan baterías reemplazables y otros variantes con alimentación externa para despliegues flexibles

## Notas sobre disponibilidad de funciones

- Algunas funciones dependen de la variante; elementos opcionales como Bluetooth, soporte 3G o LTE, y entradas de alimentación externa pueden no estar presentes en todas las unidades
- La versión de firmware y la configuración afectan de forma determinante el comportamiento de los reportes, los perfiles condicionales y las capacidades de aprovisionamiento remoto
- Revisiones de hardware y variantes celulares regionales pueden cambiar el soporte de bandas y el comportamiento de comunicaciones
- El método de instalación y el cableado influyen en qué entradas, sensores externos o interfaces vehiculares están disponibles para telemetría
- Consulte siempre la documentación del fabricante del dispositivo y las notas de la versión de firmware actuales para obtener listas precisas de funciones e instrucciones de configuración

## Por qué usar Plaspy con estas funciones

Usar el G1RUS con Plaspy proporciona a las organizaciones una forma práctica de monitorizar activos largos y sin supervisión con un mantenimiento mínimo. La combinación de electrónica de bajo consumo, opciones de alimentación flexibles y telemetría configurable permite a los operadores elegir cadencias de reporte e integraciones que equilibren la vida útil de la batería con la visibilidad operativa. Plaspy puede mostrar posición, eventos de movimiento, estado del dispositivo y telemetría de sensores en conjunto, facilitando la gestión de flotas, la validación de entregas y la respuesta ante posibles robos o usos indebidos.

Para obtener más información sobre Plaspy y cómo puede trabajar con dispositivos como el Gosafe G1RUS visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles específicos del dispositivo y la documentación técnica más reciente en el sitio del fabricante https://gosafesystem.com/ antes de desplegar a gran escala.
