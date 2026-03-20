---
slug: /cantrack/g900ls_4g/features
id: g900ls_4g-features
sidebar_label: Features
title: CanTrack - G900LS-4G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador CanTrack G900LS-4G y su integración con Plaspy para seguimiento vehicular confiable
keywords:
  - CanTrack G900LS-4G
  - características G900LS-4G
  - rastreador GPS CanTrack
  - G900LS-4G Plaspy
  - rastreador vehicular G900LS-4G
  - seguimiento de flotas G900LS-4G
  - rastreador protocolo GT06
  - rastreador GPS 4G LTE
  - rastreo vehicular en tiempo real
  - relé inmovilizador vehicular
---

# CanTrack - G900LS-4G: Características

Esta página ofrece un resumen público de las funciones del rastreador GPS CanTrack G900LS-4G y explica cómo estas capacidades se integran con Plaspy para la gestión de flotas y el monitoreo de vehículos. Se centra en los aspectos prácticos y no sensibles del equipo que son relevantes cuando el rastreador se utiliza con Plaspy, incluyendo conectividad, tipos de telemetría, soporte de alarmas y control remoto opcional por relé.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. La implementación del fabricante y las opciones de configuración del dispositivo también afectan las funciones disponibles, por lo que usted debe confirmar los detalles actuales con la documentación del fabricante y la configuración de su equipo antes del despliegue.

## Resumen de características

El G900LS-4G es un rastreador vehicular compacto diseñado para reportes continuos de ubicación y telemetría básica del vehículo. Está pensado para una amplia cobertura en redes móviles y utiliza un protocolo de la serie GT06 con reporting estándar TCP/IP para una integración sencilla en plataformas como Plaspy. El dispositivo prioriza el seguimiento en tiempo real, la notificación de alarmas esenciales y una capacidad opcional de inmovilización remota.

- Reporte de ubicación GPS en tiempo real para supervisión continua y georreferenciación
- Detección de encendido o ACC para registrar viajes y mostrar eventos de encendido/apagado
- Alarma por corte de alimentación y batería de respaldo integrada para mantener telemetría ante pérdida de energía
- Control remoto opcional por relé para cortar combustible o electricidad y soportar flujos de inmovilización
- Alarmas por movimiento, cambio de ángulo, vibración y otros eventos sospechosos
- Factor de forma compacto y amplio rango de voltaje de entrada para instalaciones en vehículos mixtos

## Características principales del CanTrack - G900LS-4G

- 4G LTE con respaldo a GSM para conectividad amplia y reportes fiables
- Protocolo de la serie GT06 con reporting TCP/IP estándar para compatibilidad con plataformas
- Posición en tiempo real, reporte de velocidad y telemetría relacionada con viajes como estado de encendido
- Alarma por corte de alimentación y batería de respaldo integrada para detección de manipulación
- Control opcional por relé para corte remoto de combustible o electricidad y uso como inmovilizador
- Soporte de alarmas por movimiento, cambio de ángulo y sensor de vibración para monitoreo antirrobo
- Amplio rango de voltaje de entrada y tamaño reducido para autos, motocicletas y flotas mixtas
- Detalles de rendimiento GNSS reportados por el fabricante, incluyendo seguimiento multicanal y precisión típica de posicionamiento

## Cómo funcionan estas funciones con Plaspy

Cuando el G900LS-4G se configura para reportar a Plaspy, el dispositivo envía flujo de posiciones y eventos a la plataforma donde se visualizan, registran y pueden accionarse. Plaspy detecta automáticamente el protocolo del rastreador e ingiere la telemetría para poner a disposición la información de ubicación, estado y alarmas a los administradores.

- Posiciones en tiempo real e historial de movimiento aparecen en los mapas y en las vistas de línea de tiempo de Plaspy
- Los eventos de encendido o ACC se muestran en los registros de viaje y pueden emplearse en informes
- Las alertas por corte de alimentación y la batería de respaldo pueden activar notificaciones y ayudar a identificar posibles manipulaciones
- Los eventos de alarma como movimiento, cambio de ángulo y vibración se reflejan como alertas en la plataforma para la revisión del operador
- Cuando el dispositivo soporta control remoto por relé, Plaspy puede mostrar el estado del relé y, si la configuración del equipo lo permite, enviar comandos remotos o controles estilo SMS mediante flujos de trabajo de la plataforma

## Casos de uso típicos

- Seguimiento centralizado y despacho para flotas mixtas usando ubicación y datos de viaje en tiempo real
- Monitoreo antirrobo con alarmas de movimiento y corte de alimentación, además de inmovilización remota opcional
- Registro de eventos de conductor y cumplimiento mediante estado de encendido e informes de exceso de velocidad
- Protección de vehículos compactos como motocicletas y bicicletas eléctricas donde el tamaño reducido es importante
- Escenarios de comando remoto como consulta de estado del dispositivo o alternancia del relé cuando la instalación lo permite
- Monitoreo de activos en regiones con cobertura mixta 4G LTE y GSM

## Notas sobre disponibilidad de funciones

- La funcionalidad depende del firmware y la revisión de hardware; las funciones listadas por el fabricante pueden variar entre unidades
- Las funciones opcionales, como la inmovilización por relé, requieren el cableado de hardware correcto y pueden necesitar accesorios adicionales o configuración por el instalador
- Las variantes regionales y el soporte de bandas celulares afectan la compatibilidad de red y deben confirmarse antes del despliegue
- El tipo de instalación y el cableado del vehículo influyen en la disponibilidad de detección de encendido y algunas entradas de alarma
- Consulte siempre la documentación más reciente del fabricante para especificaciones precisas y comportamiento relacionado con firmware

## Por qué usar Plaspy con estas funciones

Usar el CanTrack G900LS-4G con Plaspy centraliza los datos de ubicación y eventos para que los equipos puedan monitorear activos, responder a alarmas y generar informes operativos desde una única plataforma. Las herramientas de mapeo, alertas e informes de Plaspy facilitan convertir la telemetría cruda en supervisión operativa accionable, ayudando a reducir tiempos de inactividad y a mejorar la visibilidad diaria de la flota.

To learn more about how Plaspy supports devices like the G900LS-4G, visit https://www.plaspy.com. For the most current and specific device features, firmware notes, and manufacturer details please verify information on the official CanTrack website https://www.cantrackgps.com/.
