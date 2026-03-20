---
slug: /sinotrack/st_902l/features
id: st_902l-features
sidebar_label: Features
title: SinoTrack - ST-902L Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador OBD II SinoTrack ST-902L y su integración con Plaspy para seguimiento vehicular en tiempo real
keywords:
  - SinoTrack ST-902L
  - características SinoTrack ST-902L
  - rastreador GPS OBD II
  - rastreador 4G
  - UBLOX7020
  - seguimiento vehicular
  - compatible con Plaspy
  - alertas de geocerca
  - detección de manipulación
  - gestión de flotas
---

# SinoTrack - Funciones del ST-902L

Esta página ofrece un resumen público enfocado en las funciones del SinoTrack ST-902L y en cómo se aprovechan en Plaspy. Incluye las capacidades prácticas y no sensibles que usted puede esperar al integrar el ST-902L con Plaspy para ubicación en tiempo real, reporte de eventos y supervisión de flotas.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación, la variante regional y la configuración del fabricante. Cuando planifique despliegues o dependa de alarmas o informes concretos, verifique siempre el comportamiento específico del dispositivo en la documentación oficial de SinoTrack y en las notas de la versión.

## Resumen de funciones

El ST-902L es un rastreador compacto de conexión por OBD II diseñado para automóviles y vehículos ligeros. Proporciona posicionamiento GNSS, conectividad celular y reporte de eventos desde el vehículo sin necesidad de cableado permanente, lo que lo hace apropiado para despliegues rápidos y flotas.

- Instalación plug-and-play en conector OBD II de 16 pines para incorporación rápida de vehículos sin recableado.
- Informes de posición GNSS en tiempo real para visibilidad continua de ubicación mediante un receptor UBLOX7020.
- Conectividad celular 4G LTE y GSM/GPRS para rastreo en vivo, con SMS como método de configuración de respaldo.
- Batería de respaldo integrada y detección de manipulación para registrar eventos cuando se corta la alimentación por OBD.
- Dirección de servidor configurable por SMS o mediante la configuración del fabricante para que el dispositivo reenvíe datos a Plaspy.
- Soporte para tipos de eventos habituales como geocerca, exceso de velocidad, impacto y notificaciones de batería baja.

## Funciones principales del SinoTrack - ST-902L

- Factor de forma plug-in OBD II para instalación no invasiva en automóviles y vehículos ligeros.
- Módulo GNSS UBLOX7020 que ofrece fijaciones de posición consistentes y una precisión típica de ubicación alrededor de 10 metros.
- Reportes celulares 4G LTE y GSM/GPRS con soporte de comandos SMS para configuración y aprovisionamiento.
- Batería de respaldo para operación limitada sin alimentación principal y detección de manipulación cuando el dispositivo se desconecta.
- Reporte de eventos y alarmas que incluyen geocerca, exceso de velocidad, impactos y notificaciones de batería baja.
- Configuración de APN y parámetros de servidor vía SMS para permitir una integración rápida con plataformas de rastreo.
- Compatibilidad con la aplicación PRO y el portal web del fabricante para gestión alternativa del dispositivo y activación.

## Cómo funcionan estas funciones con Plaspy

Cuando el dispositivo está configurado para enviar datos a Plaspy, el ST-902L reenvía información de ubicación y eventos a la plataforma Plaspy para supervisión en tiempo real, reproducción histórica y generación de reportes de flota. Plaspy detecta los protocolos compatibles del rastreador y presenta la telemetría y las alarmas entrantes en paneles y reportes.

- Configure el dispositivo para apuntar al endpoint de ingestión de Plaspy y el ST-902L transmitirá actualizaciones de posición y alarmas a la plataforma.
- Los eventos de geocerca y exceso de velocidad generados por el dispositivo se muestran como eventos en los paneles de Plaspy y pueden activar notificaciones.
- Las alertas de manipulación y batería baja se entregan como eventos accionables para que los equipos de operaciones puedan responder ante posibles robos o pérdidas de alimentación.
- La configuración por SMS o la puesta a punto del fabricante son útiles para establecer APN y parámetros de servidor durante el aprovisionamiento antes del registro del dispositivo en Plaspy.
- La plataforma Plaspy muestra ubicación en vivo, historial de viajes y líneas de tiempo de eventos para cada vehículo equipado con ST-902L.

## Casos de uso típicos

- Despliegue rápido de flotas donde la instalación plug-and-play OBD II reduce el costo y el tiempo de instalación.
- Monitoreo antirrobo con detección de manipulación y alertas por batería de respaldo para notificar a los gestores si se desconecta el dispositivo.
- Supervisión de conductores y seguridad mediante reportes de exceso de velocidad e impactos.
- Rastreo de vehículos de renta y arrendamiento para registro de ubicaciones e inspecciones de retorno sin cambios de cableado permanentes.
- Cumplimiento básico y registro de rutas para apoyar la contabilidad de viajes y la revisión de historiales.

## Notas sobre disponibilidad de funciones

- El nivel de firmware y la configuración del fabricante pueden cambiar los comandos disponibles, los umbrales de alarma y los intervalos de reporte.
- Las revisiones de hardware y las variantes regionales de bandas celulares pueden afectar la conectividad en algunos mercados; confirme la compatibilidad de bandas con el fabricante para su región.
- Algunas funciones requieren APN y aprovisionamiento correcto de la SIM; no se incluye SIM de datos local y debe configurarse.
- Las aplicaciones, portales o servicios de cuenta del fabricante pueden ofrecer capacidades adicionales que son independientes de la integración con Plaspy.
- Consulte siempre el manual de usuario y las notas de la versión de SinoTrack más recientes para obtener comandos de dispositivo detallados y pasos de configuración.

## Por qué usar Plaspy con estas funciones

Combinar el ST-902L con Plaspy ofrece a los equipos de operaciones un camino rápido desde el aprovisionamiento del dispositivo hasta la visibilidad operativa. El factor de forma OBD II plug-and-play simplifica la instalación, mientras que el reporte de eventos y el rendimiento GNSS del dispositivo proporcionan las señales de ubicación y alarma que Plaspy necesita para ofrecer seguimiento en tiempo real, análisis histórico y reportes de flota.

Para obtener más información sobre cómo Plaspy soporta rastreadores como el ST-902L y explorar opciones de despliegue, visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, detalles de firmware y comandos de configuración del fabricante, verifique la información en el sitio oficial de SinoTrack https://www.sinotrackgps.com/
