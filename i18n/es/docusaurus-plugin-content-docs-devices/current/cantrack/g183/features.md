---
slug: /cantrack/g183/features
id: g183-features
sidebar_label: Features
title: CanTrack - G183 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador OBD CanTrack G183 y cómo sus datos diagnósticos y telemáticos se integran con Plaspy para gestión de flotas
keywords:
  - funciones CanTrack G183
  - rastreador GPS CanTrack G183
  - rastreador OBD G183
  - CanTrack G183 Plaspy
  - rastreador diagnóstico vehicular
  - telemática DTC
  - rastreador OBDII JOBD
  - rastreador GNSS multiconstelación
  - dispositivo de seguimiento de flotas
  - telemática GPS en tiempo real
---

# CanTrack - G183: Características

Esta página describe las características públicas del rastreador CanTrack G183 cuando se integra con Plaspy. Resume las capacidades del dispositivo relevantes para la integración con Plaspy y las operaciones de flota, y explica cómo los datos de ubicación y diagnósticos del G183 pueden aprovecharse en Plaspy para monitoreo, alertas e informes.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el modelo regional, el tipo de instalación y la implementación del fabricante. Revise la documentación del fabricante y las notas de la versión para obtener los detalles específicos del dispositivo antes del despliegue.

## Resumen de funciones

El CanTrack G183 es un rastreador a nivel OBD diseñado para ofrecer ubicación del vehículo, diagnósticos y reporte de eventos para flotas de pasajeros y comerciales. Combina GNSS multiconstelación, amplio soporte de protocolos OBD y vehiculares, un acelerómetro integrado y almacenamiento local para mantener el historial de eventos durante interrupciones cortas de conectividad.

- Conectividad a nivel OBD para diagnósticos y reporte de parámetros, incluyendo carga de DTC y reporte de kilometraje.
- Posicionamiento GNSS multiconstelación para ubicación en tiempo real y seguimiento de rutas confiable.
- Reporte en tiempo real mediante red celular usando TCP y SMS para alimentar telemática y datos diagnósticos en Plaspy.
- Acelerómetro integrado y buffer en memoria flash para capturar y reconstruir eventos de conducción e incidentes.
- Factor de forma compacto OBD A/B para una instalación sencilla en automóviles particulares y vehículos comerciales.

## Características principales del CanTrack - G183

- Soporte de protocolos OBD incluyendo OBDII, JOBD, J1939, J1708 y múltiples protocolos específicos de fabricantes para cobertura vehicular amplia.
- Receptor GNSS multiconstelación compatible con GPS/GLONASS/QZSS/COMPASS/Galileo con alto número de canales para fijaciones de posición consistentes.
- Modos de reporte en tiempo real por TCP y SMS para telemática continua y mensajería de respaldo.
- Carga de Diagnostic Trouble Codes (DTC) y reporte de parámetros del vehículo como kilometraje y datos relacionados con combustible cuando el vehículo y el firmware los soporten.
- Reporte de eventos y alarmas incluyendo exceso de velocidad, conducción brusca, colisión, remolque, baja tensión, encendido/apagado, conexión/desconexión del dongle, SOS y temperatura elevada.
- Acelerómetro 3 ejes a bordo (±16 g) para detección y reconstrucción de colisiones y eventos de conducción.
- Memoria flash local para almacenar eventos durante cortes temporales de red y reenviarlos cuando se restablezca la conectividad.
- Interfaz OBD A/B compacta y robusta con factor de forma pequeño, ideal para despliegues escalables en flotas.

## Cómo funcionan estas funciones en Plaspy

Plaspy ingiere datos de ubicación, diagnósticos y eventos del G183 para que usted, como operador de flota, pueda visualizar la posición de los vehículos, recibir alertas e incluir datos de salud vehicular en informes. La plataforma de Plaspy detecta automáticamente muchos protocolos comunes de rastreadores para simplificar la integración y el análisis de datos.

- Posición en vivo y recorridos históricos mostrados en los paneles de Plaspy para conciencia de ubicación y análisis de rutas.
- Códigos de diagnóstico (DTC) y parámetros derivados del OBD presentados en Plaspy para ayudar a priorizar mantenimiento y reducir tiempos de inactividad.
- Eventos de alarma como SOS, colisión, remolque, cambios de encendido y conexión/desconexión reportados a Plaspy para flujos de trabajo de alerta e incidentes.
- Datos de kilometraje y monitoreo de combustible disponibles en los informes de Plaspy para respaldar análisis de consumo y métricas operativas.
- Reconstrucción de eventos mediante datos del acelerómetro y registros en buffer, de modo que Plaspy pueda mostrar un historial telemático continuo incluso tras pérdidas breves de conectividad.

## Casos de uso típicos

- Gestión de flotas que combine ubicación, kilometraje y telemetría relacionada con combustible para optimizar rutas y costos operativos.
- Flujos de trabajo de diagnóstico vehicular y mantenimiento preventivo usando DTC y parámetros OBD para priorizar servicios.
- Monitoreo antirrobo y respuesta rápida mediante alarmas por remolque, detección de desconexión del dongle y notificaciones SOS.
- Programas de seguridad y monitoreo de conducta de conductores utilizando datos de conducción brusca y colisiones para acciones de coaching.
- Soporte para flotas mixtas donde vehículos particulares y comerciales requieren compatibilidad con una amplia gama de protocolos.

## Notas sobre disponibilidad de funciones

- El firmware del fabricante y las variantes regionales de hardware determinan exactamente qué parámetros OBD y alarmas están disponibles en cada unidad.
- Algunos diagnósticos avanzados o parámetros específicos del fabricante requieren ECUs compatibles y pueden variar según marca, año y versión del vehículo.
- Los umbrales de alarma, el comportamiento de reporte de eventos y las políticas de buffer son configurables en el firmware y pueden diferir entre versiones del dispositivo.
- Las opciones del módulo celular y las aprobaciones de red regionales pueden influir en los modos de conectividad disponibles y en el rendimiento.
- Verifique siempre la revisión de firmware y la configuración del dispositivo tras la instalación para confirmar el conjunto de funciones activas.

## Por qué usar Plaspy con estas funciones

Usar el CanTrack G183 con Plaspy proporciona a las organizaciones una forma práctica de combinar el rastreo de ubicación con diagnósticos vehiculares y reporte de eventos. El acceso a nivel OBD del dispositivo y el GNSS multiconstelación facilitan un posicionamiento consistente y telemetría operativa, mientras que los datos del acelerómetro y el buffer local ayudan a preservar el contexto de incidentes para su revisión e informes.

Para saber más sobre cómo Plaspy puede integrarse con dispositivos como el CanTrack G183, visite https://www.plaspy.com. Para obtener los detalles técnicos y la documentación de firmware más recientes y específicos del dispositivo, confirme las listas de funciones y las notas de implementación con el fabricante en https://www.cantrackgps.com/.
