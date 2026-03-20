---
slug: /topfly/solarx_310/features
id: solarx_310-features
sidebar_label: Features
title: TopFly - SolarX 310 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de características del TopFly SolarX 310 y su integración con Plaspy para sensores BLE y energía solar
keywords:
  - TopFly SolarX 310
  - Características del SolarX 310
  - Rastreador GPS TopFly
  - Rastreador GPS solar
  - Sensores BLE SolarX 310
  - Precisión GNSS SolarX 310
  - Almacenamiento en búfer SolarX 310
  - Rastreador compatible con Plaspy
  - Función antirrobo SolarX 310
  - Seguimiento de flotas SolarX 310
---

# TopFly - Características del SolarX 310

Esta página describe el contexto público de uso del rastreador GPS TopFly SolarX 310 con Plaspy. Explica las capacidades del SolarX 310 relevantes para monitoreo, alertas e informes históricos dentro de Plaspy, sin entrar en detalles privados de configuración.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación, los accesorios y la implementación del fabricante. Para parámetros específicos del dispositivo y los detalles técnicos más recientes, consulte la documentación oficial de TopFly y las notas de la versión de firmware.

## Resumen de funciones

El SolarX 310 es un rastreador GPS resistente con asistencia solar, pensado para despliegues prolongados en exteriores sobre contenedores, semirremolques, camiones y otros activos móviles de alto valor. Al usarse con Plaspy, ofrece ubicación y telemetría continuas, reproducción con búfer tras pérdida de conectividad y alarmas configurables para antirrobo y monitoreo ambiental.

- Alimentación asistida por energía solar y batería recargable Li‑polymer integrada para soportar largos periodos en campo.
- Rastreo en tiempo real con actualizaciones tan frecuentes como cada 3 segundos para visibilidad de ubicación muy responsiva.
- Receptor GNSS multiconstelación con precisión horizontal por debajo de 2 metros para reportes de posición precisos.
- Soporte BLE 5.3 para sensores externos de temperatura y detección de puertas, combinando telemetría ambiental con ubicación.
- Gran búfer offline que almacena decenas de miles de puntos para reconstrucción fiable de trayectos tras cortes de red.

## Funciones principales del TopFly - SolarX 310

- Carga solar y batería recargable integrada para despliegues prolongados con menos mantenimiento.
- Soporte de reporte de alta frecuencia con intervalos configurables hasta aproximadamente 3 segundos para seguimiento casi en tiempo real.
- Cobertura GNSS multiconstelación para mejorar la precisión de posicionamiento y reducir el tiempo de obtención de posición.
- Compatibilidad BLE 5.3 para emparejar accesorios TopFly como sensores de temperatura y de puertas.
- Carcasa resistente con clasificación IP67, adecuada para exposición exterior y montaje en activos.
- Gran búfer interno capaz de almacenar hasta 60,000 registros de ubicación cuando no hay conectividad de red.
- Detección de manipulación y extracción mediante un interruptor Hall integrado, además de tipos de alarma y regiones de geocerca configurables.
- Varias opciones de comunicación incluyendo TCP, UDP, MQTT y SMS, con opciones de seguridad habituales disponibles.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere las transmisiones de telemetría y ubicación del SolarX 310 para mostrar paneles en vivo, generar alertas y conservar trayectos históricos para análisis. Los puntos almacenados en búfer se reenvían a Plaspy cuando la conectividad regresa, de modo que los trayectos permanecen continuos en la plataforma.

- Las actualizaciones de posición en vivo y periódicas aparecen en los mapas y líneas de tiempo de dispositivos en Plaspy según el cronograma de reporte del equipo.
- La reproducción histórica desde el búfer reconstruye trayectos en Plaspy usando los puntos almacenados y transmitidos tras periodos offline.
- Las alertas de manipulación y extracción provenientes del interruptor Hall se muestran como eventos en tiempo real en Plaspy para notificación y automatización inmediata.
- La telemetría de sensores BLE, como temperatura y estado de puertas, puede mostrarse junto con la ubicación en informes y reglas de alerta de Plaspy cuando el accesorio emparejado lo soporta.
- Las alarmas configurables y los eventos de geocerca generados por el dispositivo se envían a Plaspy para notificaciones basadas en reglas y flujos de trabajo posteriores.
- Plaspy detecta automáticamente los protocolos comunes de rastreadores e ingiere mensajes TCP, UDP, MQTT y SMS para simplificar la incorporación de dispositivos.

## Casos de uso típicos

- Visibilidad de flotas para semirremolques y camiones donde se requieren posición en tiempo real e historial de rutas.
- Seguimiento remoto de contenedores donde la energía solar y la resistencia IP67 mantienen los dispositivos en línea en entornos expuestos.
- Monitoreo antirrobo usando detección de extracción, geocercas y alertas inmediatas ante movimientos no autorizados.
- Monitoreo ambiental de carga sensible mediante sensores BLE de temperatura y humedad emparejados con el rastreador.
- Monitorización de activos a largo plazo donde grandes búferes offline preservan el historial de ubicaciones durante cortes de red.
- Seguimiento del ciclo de vida de activos para equipos arrendados o de alto valor que requieren operación de campo con bajo mantenimiento.

## Notas sobre disponibilidad de funciones

- Las revisiones de firmware y hardware pueden cambiar los intervalos de reporte soportados, las opciones de seguridad y la compatibilidad con accesorios.
- Algunos accesorios y sensores BLE requieren modelos específicos de sensores TopFly y pueden no ser universalmente compatibles.
- Las variantes regionales de bandas celulares y las aprobaciones de operadores afectan la disponibilidad de red y deben confirmarse para su área de despliegue.
- El tipo de instalación y el método de montaje influyen en el rendimiento de carga solar y la longevidad de la batería.
- Confirme los tipos de alarma, límites de geocercas y opciones de configuración con la documentación oficial de TopFly para el dispositivo exacto que posee.

## Por qué usar Plaspy con estas funciones

Combinar el SolarX 310 con Plaspy permite a las organizaciones consolidar ubicación, telemetría de sensores y alertas de eventos en una vista operativa unificada. Los paneles y los informes históricos de Plaspy facilitan la gestión de alertas por extracción, umbrales de temperatura o la recuperación de huecos mediante almacenamiento en búfer, ayudando a los equipos a mantener visibilidad sobre activos distribuidos.

Para obtener más información sobre cómo Plaspy puede trabajar con el TopFly SolarX 310 visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, comportamiento de firmware y compatibilidad de accesorios, verifique los detalles con el fabricante en https://www.topflytech.com/.
