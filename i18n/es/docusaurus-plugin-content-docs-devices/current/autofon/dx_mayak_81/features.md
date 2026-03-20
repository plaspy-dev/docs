---
slug: /autofon/dx_mayak_81/features
id: dx_mayak_81-features
sidebar_label: Features
title: AutoFon - DX Mayak 8.1 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador AutoFon DX Mayak 8.1 y su integración con Plaspy para seguimiento de activos a largo plazo
keywords:
  - AutoFon DX Mayak 8.1
  - Rastreador GPS AutoFon
  - Funciones DX Mayak 8.1
  - Rastreador GPS DX Mayak 8.1
  - Compatibilidad AutoFon Plaspy
  - Rastreador a batería
  - Seguimiento a largo plazo
  - Rastreador GPS GLONASS
  - Detección de presencia BLE
  - Alertas movimiento choque SOS
---

# AutoFon - DX Mayak 8.1: Características

Esta página ofrece un resumen público de las funciones del AutoFon DX Mayak 8.1 que son relevantes para su uso con Plaspy. Se enfoca en capacidades prácticas y no sensibles, y explica cómo el dispositivo informa ubicación, telemetría y alarmas a entornos de monitoreo gestionados por Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para detalles de configuración específicos del equipo, comportamientos avanzados y notas de versión de firmware consulte la documentación y materiales del fabricante.

## Resumen de características

El DX Mayak 8.1 es un rastreador compacto alimentado por batería, diseñado para protección discreta antirrobo y monitoreo de activos a largo plazo. Combina posicionamiento GNSS dual con modos de bajo consumo, alarmas activadas por eventos y detección de presencia en corto alcance para mantener visibles vehículos y bienes portátiles conservando la vida útil de la batería.

- Posicionamiento GNSS dual con GLONASS y GPS, más asistencia AGPS para fijaciones de ubicación más confiables.
- Seguimiento en intervalos de bajo consumo para despliegues de varios años y larga espera de batería en instalaciones ocultas.
- Alarmas activadas por eventos que incluyen detección de movimiento, detección de choque y botón SOS.
- Telemetría detallada enviada con cada mensaje: nivel de batería, temperatura interna, conteo de satélites y señal GSM.
- Detección de presencia y localización de corto alcance basada en BLE mediante una app móvil para facilitar la recuperación y el estado de proximidad.
- Manejo robusto de desconexiones con amplio almacenamiento no volátil de paquetes y retransmisión automática cuando se restablece la conexión.

## Funciones principales del AutoFon - DX Mayak 8.1

- Compatible con Plaspy desde el primer momento mediante reporte GPRS estándar a servidores de monitoreo y fallback por SMS como redundancia.
- Receptor GLONASS más GPS con soporte AGPS y correcciones lógicas de posición para mejorar la fiabilidad de la fijación.
- Modos de bajo consumo e intervalos de seguimiento configurables pensados para despliegues a largo plazo con alimentación mediante pilas CR123A.
- Acelerómetro integrado para detección de movimiento, inclinación y choques, y botón SOS interno para enviar alarmas de forma inmediata.
- Módulo BLE para etiquetado de presencia del propietario y localización en corto alcance con la app móvil complementaria.
- Búfer de mensajes no volátil suficiente para retener miles de paquetes GPRS no enviados y retransmitirlos cuando vuelve la conectividad.
- Factor de forma compacto con protección IP54 y variantes herméticas opcionales IP67 para instalaciones ocultas o expuestas.
- Opciones de gestión remota que incluyen actualizaciones server side, comandos por SMS e interfaces de configuración local según lo provea el fabricante.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el DX Mayak 8.1 informa ubicación, telemetría y eventos de alarma a paneles centralizados y flujos de notificación. Plaspy recibe actualizaciones de ubicación estructuradas y telemetría, conserva el historial de eventos y muestra alertas para la acción operativa y la generación de reportes.

- Las actualizaciones de ubicación y telemetría en tiempo real aparecen en los mapas y paneles de dispositivos de Plaspy para visibilidad continua.
- Los eventos de movimiento, choque y SOS se registran como alarmas y pueden activar notificaciones y flujos de trabajo dentro de Plaspy.
- Nivel de batería, conteo de satélites, temperatura y señal GSM se muestran como campos de telemetría para apoyar el mantenimiento y el diagnóstico.
- La retransmisión de paquetes almacenados garantiza que los eventos históricos se entreguen a Plaspy después de cortes de red para mantener la continuidad.
- La presencia de propietario y la localización de corto alcance por BLE pueden reflejarse en Plaspy como indicadores de proximidad o presencia cuando el dispositivo reporta esos estados.
- Plaspy detecta automáticamente los protocolos de rastreador compatibles y acepta el reporte GPRS estándar hacia su endpoint de monitoreo para una integración ágil.

## Casos de uso típicos

- Protección antirrobo discreta de vehículos donde se requieren montaje oculto y larga autonomía en espera.
- Monitoreo de activos a largo plazo para semirremolques, contenedores y equipos portátiles con registros infrecuentes.
- Supervisión de flotas ligeras y equipos de apoyo que necesitan telemetría periódica y alertas por eventos.
- Monitoreo personal y de personas vulnerables cuando se requiere ubicación discreta y alertas SOS.
- Rastreo de motocicletas y vehículos todoterreno donde el tamaño compacto y la capacidad de ocultamiento son importantes.
- Localización en corto alcance de activos en patios o depósitos usando BLE para facilitar la recuperación.

## Notas sobre disponibilidad de funciones

- La disponibilidad de funciones depende de la versión de firmware y la revisión de hardware. Las capacidades descritas aquí reflejan el comportamiento típico del dispositivo, pero pueden variar por lote de producción.
- La ubicación de instalación y el montaje afectan la recepción GNSS y la duración de la batería. Las instalaciones ocultas pueden reducir la visibilidad de satélites y alterar el rendimiento de reporte.
- La presencia BLE requiere la app móvil complementaria y la configuración de usuario adecuada para reportar la proximidad del propietario.
- El fallback por SMS depende de la cobertura GSM regional y del aprovisionamiento de la SIM, y puede ser una redundancia útil cuando GPRS no está disponible.
- El DX Mayak 8.1 se centra en posicionamiento por satélite y GSM, además de detección de eventos mediante acelerómetro. No incluye sensores de combustible integrados, entradas de ignición ni salidas de inmovilizador.

## Por qué usar Plaspy con estas funciones

Usar el DX Mayak 8.1 con Plaspy ofrece a las organizaciones una forma práctica de combinar larga autonomía de batería, posicionamiento confiable y alarmas por eventos con monitoreo centralizado y flujos de notificación. Plaspy recopila ubicación y telemetría, preserva el historial de eventos durante cortes y presenta las alarmas en paneles que ayudan a los equipos operativos a responder más rápido y mantener la continuidad del servicio.

Learn more about how Plaspy can support deployments with trackers like the DX Mayak 8.1 at https://www.plaspy.com. For the latest device specific feature lists, firmware behavior and manufacturer implementation details verify information on the official AutoFon website https://www.autofon.ru/.
