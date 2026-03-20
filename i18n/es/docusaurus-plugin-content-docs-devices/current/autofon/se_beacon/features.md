---
slug: /autofon/se_beacon/features
id: se_beacon-features
sidebar_label: Features
title: AutoFon - SE+ Beacon Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del AutoFon SE+ Beacon y cómo se integran con Plaspy para el monitoreo discreto y prolongado de activos
keywords:
  - AutoFon SE+ Beacon
  - funciones AutoFon SE+ Beacon
  - rastreador GPS AutoFon SE+ Beacon
  - SE+ Beacon Plaspy
  - funciones del rastreador AutoFon
  - seguimiento de vehículos
  - seguimiento de activos
  - rastreador GPS encubierto
  - rastreador GPRS SMS
  - rastreador GPS de larga duración de batería
---

# AutoFon - Funciones del SE+ Beacon

Esta página ofrece una descripción pública de las funciones del AutoFon SE+ Beacon y explica cómo sus capacidades se mapean a los flujos de monitoreo y operación en Plaspy. Está dirigida a gestores de flotas, propietarios de activos y evaluadores técnicos que necesiten entender las funciones prácticas que el dispositivo puede aportar cuando se integra con la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación, el modelo regional y la configuración del fabricante. Se recomienda revisar la documentación oficial de AutoFon y comprobar el nivel de firmware del dispositivo para confirmar las funciones específicas disponibles en su unidad y despliegue.

## Resumen de funciones

El AutoFon SE+ Beacon es un rastreador GPS compacto y discreto, diseñado para el seguimiento a largo plazo y de bajo mantenimiento de vehículos y activos. Combina posicionamiento GNSS y reportes celulares para ofrecer datos de ubicación periódicos y basados en eventos, adecuados para monitoreo discreto y funciones básicas de control remoto.

- Posicionamiento GPS y GLONASS para obtener fijaciones de posición fiables en distintos entornos
- Modos de reporte dual con GPRS para telemetría principal y SMS como respaldo para alertas o mensajes de emergencia
- Detección de movimiento, inclinación e impactos mediante sensores integrados para generar alertas por eventos
- Canal auxiliar configurable y entrada de alarma para control remoto básico o señalización de dispositivos externos
- Amplio búfer de paquetes offline y capacidad de actualización remota de firmware para mejorar la resiliencia durante brechas de conectividad

## Funciones principales del AutoFon - SE+ Beacon

- Posicionamiento GNSS con GPS y GLONASS para reportes de ubicación confiables
- Reporte en tiempo real por GPRS con respaldo por SMS para alertas y redundancia
- Detección de movimiento, detección de inclinación y reportes de impacto/colisión mediante el acelerómetro del dispositivo
- Microbotón SOS para alertas manuales desde el equipo
- Canal auxiliar y entrada de alarma para control de dispositivos externos o entrada de estado
- Micrófono incorporado para monitoreo de audio remoto cuando está soportado
- Gran búfer interno capaz de almacenar numerosos paquetes no enviados para preservar el historial de eventos durante cortes
- Soporte para actualización remota de firmware a través de la conexión celular para mantener los dispositivos actualizados

## Cómo funcionan estas funciones con Plaspy

Cuando se utiliza con Plaspy, el SE+ Beacon envía mensajes de posición y eventos que Plaspy ingiere, normaliza y presenta en paneles, mapas y flujos de alertas. Plaspy hace visibles las señales del dispositivo de formas que ayudan a los equipos a supervisar el estado de los activos, responder a incidentes y revisar la actividad histórica.

- Las ubicaciones en tiempo real aparecen en los mapas de Plaspy para rastreo en vivo y contexto geográfico
- Los eventos de movimiento, inclinación, impacto y SOS se traducen en alertas y entradas en la línea de tiempo dentro de Plaspy
- Las alertas por SMS como respaldo pueden capturarse como notificaciones en paralelo con los reportes por GPRS cuando están configuradas
- La resiliencia del búfer offline reduce la pérdida de datos al entregar los paquetes almacenados a Plaspy una vez que se restablece la conectividad
- Las acciones del canal auxiliar y los eventos de entrada de alarma pueden reflejarse en Plaspy para control remoto o monitoreo de estado cuando están autorizados y configurados

## Casos de uso típicos

- Monitoreo discreto y prolongado de vehículos donde la baja detectabilidad y la duración de batería son prioritarias
- Seguimiento de activos como remolques, contenedores o cargas de alto valor con alertas por movimiento e impacto
- Monitoreo periódico de objetos estacionarios, como sitios de almacenamiento o cobertizos de equipo
- Escenarios de seguimiento personal o de mascotas que requieren alertas SOS y una instalación compacta
- Supervisión de equipos pequeños y remolques donde la telemetría simple y las alertas por eventos son suficientes

## Notas sobre disponibilidad de funciones

- La presencia y el comportamiento exacto de las funciones dependen de la versión de firmware y la revisión de hardware del dispositivo
- La duración de la batería varía según los intervalos de reporte, la frecuencia de eventos y la configuración de la instalación
- Algunas capacidades, como el canal auxiliar o el micrófono, pueden requerir cableado y configuración autorizados
- Las variantes de modelos regionales pueden diferir en las bandas celulares soportadas o en las configuraciones predeterminadas locales
- Consulte siempre la documentación oficial de AutoFon para obtener los detalles técnicos y regulatorios más actuales

## Por qué usar Plaspy con estas funciones

Usar el AutoFon SE+ Beacon con Plaspy ofrece a las organizaciones una vía práctica para convertir rastreadores compactos y de bajo mantenimiento en visibilidad operativa. Plaspy organiza los datos de ubicación y eventos en mapas, reglas de alerta y reproducción histórica para que los equipos puedan supervisar activos, detectar incidentes y actuar sobre las señales de los sensores de movimiento e impacto.

Para obtener más información sobre cómo Plaspy puede gestionar dispositivos AutoFon y apoyar sus flujos de trabajo de rastreo visite https://www.plaspy.com. Para las especificaciones más recientes, notas de firmware y orientación del fabricante, verifique los detalles en el sitio de AutoFon https://www.autofon.ru/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
