---
slug: /trackerking/ec33b/features
id: ec33b-features
sidebar_label: Features
title: TrackerKing - EC33B Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador TrackerKing EC33B y su integración con la plataforma Plaspy
keywords:
  - TrackerKing EC33B
  - funciones EC33B
  - funciones TrackerKing EC33B
  - rastreador GPS EC33B
  - TrackerKing EC33B Plaspy
  - capacidades EC33B
  - funciones del EC33B
  - seguimiento de flotas EC33B
  - antirrobo EC33B
  - telemetría EC33B
---

# TrackerKing - Funciones del EC33B

Esta página ofrece una visión pública, orientada a funciones, del TrackerKing EC33B y de cómo sus capacidades se integran con la plataforma Plaspy. Aquí se describen las funciones prácticas y las opciones de monitoreo que puede esperar al usar el EC33B en un despliegue con Plaspy, y cómo esas funciones se traducen en visibilidad y control dentro de la plataforma.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el cableado y los accesorios de instalación, o las variantes regionales del fabricante. Para detalles específicos del dispositivo como opciones de configuración, diagramas de cableado y comportamiento del firmware más reciente, consulte la documentación oficial de TrackerKing y verifique las funciones durante la instalación y las pruebas.

## Resumen de funciones

El EC33B es un rastreador vehicular compacto diseñado para monitoreo continuo de ubicación, resistencia en zonas con cobertura celular variable e integración con flujos de trabajo de gestión de flotas. Cuando se combina con Plaspy, el EC33B proporciona ubicación en vivo, reproducción histórica de rutas y datos de eventos que soportan la supervisión operativa y flujos anti robo.

- Ubicación GPS en tiempo real y reproducción de historial de rutas para visibilidad operativa y revisión posterior de recorridos
- Conectividad 4G con conmutación automática a 2G para mantener el rastreo en áreas con cobertura mixta
- Robusto almacenamiento offline que guarda miles de puntos para preservar el historial durante cortes de señal
- Entrada de voltaje amplia de 9 a 90 voltios, compatible con diversos tipos de vehículos sin convertir la alimentación
- Detección de ignición ACC y reporte de kilometraje para análisis de encendido y apagado del motor
- Corte remoto de motor y suministro de combustible para inmovilización y medidas anti robo

## Funciones principales del TrackerKing - EC33B

- Módulo celular 4G Cat 1 con conmutación automática a 2G para mantener la conectividad en zonas de baja cobertura
- Soporte para protocolos de rastreo comunes como GT06 para una integración sencilla con la plataforma
- Caché offline capaz de almacenar hasta 8,000 puntos de datos para retransmisión en zonas ciegas cuando vuelve la cobertura
- Rango de voltaje operativo amplio de 9 a 90 voltios para uso en autos, vans y vehículos comerciales
- Detección ACC y reporte de ignición virtual para estado del motor y cálculos de kilometraje
- Capacidad de inmovilizador remoto mediante corte de motor y combustible para control antirrobo y gestión de flotas
- Múltiples entradas de alarma incluyendo vibración, geocerca, exceso de velocidad y SOS para alertas basadas en eventos
- Entrada para micrófono externo y cable SOS para supervisión de voz remota y flujos de respuesta a emergencias

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere el flujo de telemetría del EC33B y lo presenta en paneles, mapas e informes para que los equipos operativos puedan monitorear flotas, recibir alertas y ejecutar acciones de control remoto. Plaspy detecta automáticamente los protocolos compatibles para simplificar el alta de dispositivos y la presentación de reportes.

- La ubicación en tiempo real y la telemetría continua aparecen en Plaspy para monitoreo en vivo y reproducción de rutas
- Las alertas por eventos como vibración, entrada o salida de geocerca, exceso de velocidad y SOS se envían a las notificaciones y registros de eventos de Plaspy
- El estado ACC y la ignición virtual se reportan en Plaspy para soportar reportes de tiempo de motor encendido, comportamiento del conductor y kilometraje
- Las retransmisiones desde la caché offline del dispositivo se incorporan en los recorridos históricos e informes cuando se restablece la cobertura
- Los comandos de corte remoto de motor y combustible emitidos desde Plaspy pueden utilizarse para acciones de inmovilización cuando la instalación lo soporta
- Telemetría como voltaje de batería externa y alarmas de falla de alimentación se muestran como alertas para seguimiento operativo

## Casos de uso típicos

- Gestión de flotas para autos, vans y camiones con rastreo continuo y reporte de kilometraje
- Flujos antirrobo que combinan rastreo en tiempo real con la inmovilización remota
- Monitoreo de cumplimiento y seguridad usando alarmas por exceso de velocidad y violaciones de geocerca
- Respuesta a emergencias y seguridad del conductor mediante entrada SOS y supervisión de voz remota
- Rastreo de activos en áreas con cobertura intermitente aprovechando la amplia caché offline
- Instalaciones en vehículos comerciales donde el amplio rango de entrada de voltaje facilita el cableado de alimentación

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones y las opciones de menú pueden variar según la versión de firmware y la revisión de hardware suministrada por el fabricante
- Las elecciones de instalación y el cableado determinan la disponibilidad de funciones como control del inmovilizador, detección ACC y uso de micrófono externo
- Variantes regionales del dispositivo o limitaciones del operador pueden afectar las bandas celulares y el comportamiento de conmutación
- El soporte de protocolos y la configuración pueden requerir ajustar el dispositivo al modo correcto para que Plaspy detecte e ingiera los mensajes
- Confirme el comportamiento del caché offline y el número máximo de puntos almacenados tras actualizaciones de firmware y durante las pruebas de aceptación

## Por qué usar Plaspy con estas funciones

Combinar el EC33B con Plaspy centraliza los datos de ubicación, eventos y telemetría para que los equipos obtengan supervisión operativa sin tener que manejar múltiples sistemas. Los mapas, alertas e informes de Plaspy facilitan el monitoreo del movimiento en tiempo real, la revisión de rutas históricas y la actuación sobre eventos como SOS o infracciones de geocerca, mientras que las acciones de control remoto permiten respuestas rápidas ante robo o uso indebido.

Para obtener más información sobre el uso de Plaspy con rastreadores compatibles visite https://www.plaspy.com. Para detalles técnicos específicos del dispositivo, notas de firmware y orientación del fabricante verifique la información en el sitio de TrackerKing https://trackerking.cn/ ya que las funciones del dispositivo y las implementaciones de firmware pueden cambiar con el tiempo.
