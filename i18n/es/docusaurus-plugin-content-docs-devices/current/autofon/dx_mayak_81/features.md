---
slug: /autofon/dx_mayak_81/features
id: dx_mayak_81-features
sidebar_label: Features
title: AutoFon - DX Mayak 8.1 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador AutoFon DX Mayak 8.1 e integración con Plaspy para seguimiento alertas y telemetría
keywords:
  - funciones AutoFon DX Mayak 8.1
  - rastreador GPS DX Mayak 8.1
  - compatibilidad AutoFon Plaspy
  - rastreador GPS GLONASS
  - rastreador de activos con batería
  - localización por presencia BLE
  - rastreador GPS de larga duración de batería
  - rastreador GPRS con fallback SMS
  - rastreador antirrobo vehicular
  - rastreador GPS IP67 resistente
---

# AutoFon - DX Mayak 8.1: Funciones

Esta página ofrece una visión pública y orientada a funciones del AutoFon DX Mayak 8.1 y explica cómo sus capacidades se integran con Plaspy para seguimiento, telemetría y alertas. Resume las funciones del dispositivo más relevantes para usuarios de Plaspy y destaca el valor práctico al vigilar vehículos, carga y activos portátiles.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. El resumen siguiente se basa en la descripción del fabricante; verifique las opciones y límites específicos del dispositivo en la documentación del fabricante al planificar despliegues.

## Panorama de funciones

El DX Mayak 8.1 es un rastreador compacto alimentado por batería, diseñado para protección antirrobo discreta y monitoreo de activos a largo plazo. Combina posicionamiento dual GNSS, seguimiento por intervalos de bajo consumo, alertas basadas en eventos y capacidades BLE de presencia para equilibrar una amplia autonomía con telemetría accionable.

- Diseño compacto y alimentado por batería para instalaciones ocultas y períodos de espera que pueden durar varios años.
- Posicionamiento dual GNSS (GLONASS + GPS) con asistencia AGPS para fijaciones de posición más fiables.
- Seguimiento por intervalos y modos de sueño de bajo consumo para prolongar la vida útil de la batería en despliegues prolongados.
- Alertas basadas en eventos por movimiento, choque y SOS para activar flujos de notificación inmediatos.
- Telemetría amplia: cada informe incluye nivel de batería, temperatura, número de satélites y señal GSM.
- Presencia BLE y localización a corta distancia para ayudar a los propietarios a encontrar el dispositivo cuando está cercano.

## Funciones principales del AutoFon - DX Mayak 8.1

- Compatibilidad con Plaspy para reportes listos para usar a servidores de monitoreo mediante mensajería GPRS estándar y respaldo por SMS.
- Receptor GNSS dual que combina GLONASS y GPS con AGPS y corrección lógica de posición para mejorar las fijaciones.
- Diseño de bajo consumo con celdas reemplazables y seguimiento por intervalos configurable para prolongar la vida operativa.
- Detección por acelerómetro de movimiento, inclinación y choque, además de un botón SOS interno para alarmas inmediatas.
- Módulo BLE de bajo consumo para etiquetado de presencia del propietario y localización asistida por smartphone a corta distancia.
- Almacenamiento no volátil de paquetes con gran capacidad de búfer para retener mensajes no enviados y retransmitirlos cuando regresa la conectividad.
- Opciones de carcasa IP54 e IP67 para mayor durabilidad en instalaciones ocultas o expuestas.
- Configuración por Micro-USB y opciones para actualizaciones del servidor y herramientas locales de configuración.

## Cómo funcionan estas funciones con Plaspy

Al integrarse con Plaspy, el DX Mayak 8.1 envía posición, telemetría y eventos a los paneles y sistemas de notificación de Plaspy, permitiendo que los operadores supervisen el estado de los activos y reaccionen ante incidencias. Plaspy detecta automáticamente el protocolo del rastreador y acepta los reportes en el endpoint de monitoreo, lo que simplifica la configuración inicial.

- Actualizaciones de posición en tiempo real e informes periódicos aparecen en los mapas de Plaspy para mantener la conciencia de ubicación.
- Los eventos de movimiento, inclinación, choque y SOS generan registros de alerta y pueden activar notificaciones, reglas de escalado o flujos de trabajo dentro de Plaspy.
- Campos de telemetría como nivel de batería, temperatura interna, número de satélites y señal GSM aportan contexto operativo sobre la salud del dispositivo en Plaspy.
- La retransmisión de paquetes almacenados preserva eventos históricos y asegura que Plaspy reciba los mensajes en cola tras la restauración de la red.
- El dispositivo soporta reporte principal por GPRS con respaldo por SMS para redundancia, información que Plaspy muestra como indicadores de evento y estado.

## Casos de uso típicos

- Protección antirrobo discreta para vehículos con alertas instantáneas de movimiento y SOS reportadas a Plaspy.
- Monitoreo a largo plazo de remolques, equipos y contenedores cuando se requiere autonomía de batería por varios años.
- Recuperación y localización a corta distancia usando ayuda BLE y etiquetado con smartphone cuando el activo está cerca.
- Supervisión de flota para vehículos ligeros y equipos de soporte que requieren informes periódicos de posición y telemetría.
- Vigilancia de personas vulnerables o uso personal donde el seguimiento de perfil bajo y las alertas de emergencia son importantes.

## Notas sobre disponibilidad de funciones

- Las variantes de firmware y hardware regional pueden habilitar o deshabilitar funciones específicas como intervalos de reporte, funciones BLE o ciertos campos de telemetría.
- Algunos elementos de telemetría y umbrales de eventos son configurables; los valores reales dependen del firmware instalado y de la configuración aplicada.
- El método de instalación y la ubicación de montaje afectan la recepción GNSS y el alcance BLE; ubicaciones subterráneas o protegidas pueden reducir el rendimiento de satélites o BLE.
- El comportamiento de respaldo por SMS y GPRS depende de la disponibilidad de la red GSM local y de la provisión de la tarjeta SIM.
- La documentación del fabricante es la fuente autorizada para medidas exactas, estimaciones de vida útil de la batería y revisiones de hardware.

## Por qué usar Plaspy con estas funciones

Emparejar el DX Mayak 8.1 con Plaspy ofrece a las organizaciones una forma práctica de convertir el seguimiento compacto y de bajo consumo del dispositivo en visibilidad operativa. Plaspy consolida flujos de posición, telemetría y eventos de alarma en mapas, informes y flujos de notificación para que los equipos puedan supervisar la salud del dispositivo, investigar incidentes y ejecutar procedimientos de recuperación desde una única plataforma de monitoreo.

Para saber más sobre cómo Plaspy trabaja con rastreadores compatibles visite https://www.plaspy.com. Para obtener especificaciones de dispositivo, notas de firmware y orientación del fabricante más actuales y detalladas, consulte la documentación oficial de AutoFon en https://www.autofon.ru/ ya que las funciones del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
