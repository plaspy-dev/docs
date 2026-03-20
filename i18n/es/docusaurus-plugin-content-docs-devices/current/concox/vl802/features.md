---
slug: /concox/vl802/features
id: vl802-features
sidebar_label: Features
title: Concox - VL802 Features
sidebar_class_name: menu_item_tracker
description: Resumen de prestaciones del Concox VL802 y cómo este rastreador LTE compatible con Plaspy soporta seguimiento telemetría y anti robo
keywords:
  - Características Concox VL802
  - Rastreador GPS Concox VL802
  - Compatibilidad VL802 con Plaspy
  - Funciones rastreador VL802
  - Capacidades Concox VL802
  - Rastreador LTE VL802
  - seguimiento de flotas Concox VL802
  - Funciones de telemetría VL802
  - Inmovilizador Concox VL802
  - Rastreo GNSS VL802
---

# Concox - VL802: características

Esta página resume el contexto público de funcionalidades del Concox VL802 cuando se usa con Plaspy. Se centra en las capacidades prácticas que usted puede aprovechar en Plaspy para ubicación de vehículos, telemetría, reporte de eventos y flujos de trabajo de control remoto. El contenido está dirigido a operadores de flotas, integradores y evaluadores técnicos que necesitan entender cómo el VL802 funciona como terminal compatible con Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el cableado de la instalación y la configuración del fabricante. Use esta página como una guía de alto nivel; consulte la documentación oficial de Concox y las notas de versión del firmware para detalles técnicos específicos y actualizados del dispositivo.

## Resumen de funciones

El VL802 es un terminal vehicular LTE compacto diseñado para operación continua en flotas e integración con plataformas telemáticas como Plaspy. Su combinación de redundancia celular, GNSS multiconstelación y múltiples E/S ofrece seguimiento en tiempo real fiable, telemetría de sensores y capacidades de control remoto para una amplia gama de vehículos.

- LTE con retroceso a 2G GSM para conectividad celular robusta y reportes consistentes en áreas de cobertura mixta
- Posicionamiento GNSS multiconstelación que mejora la precisión y reduce el tiempo de fijación en entornos variados
- Rango industrial de alimentación con batería de respaldo interna para mantener reportes durante cortes de energía
- Entradas y salidas completas, incluyendo ACC, SOS, E/S configurables, detección analógica 0–5 V, RS485 y una salida por relé para control de inmovilizador
- Audio integrado, detección de eventos por acelerómetro y Bluetooth para configuración local y emparejamiento de accesorios

## Funciones principales del Concox - VL802

- Conectividad celular principal LTE Cat 1 con retroceso a 2G GSM para continuidad en la transmisión de datos
- Soporte GNSS múltiple (GPS además de BDS y LBS) para mejor posicionamiento y menor tiempo de primera fijación
- Soporte de alimentación vehicular en un rango de voltaje industrial más batería de respaldo Li-Polymer a bordo para mayor resiliencia
- Entradas digitales para detección de ignición (ACC) y SOS, además de E/S digitales configurables para cableados de evento personalizados
- Detección analógica 0–5 V para telemetría de sensores externos como nivel de combustible u otros sensores de voltaje
- Interfaz RS485 y una salida por relé adecuada para control remoto de inmovilizador o corte de alimentación
- Acelerómetro a bordo y alertas basadas en eventos que incluyen exceso de velocidad, vibración, fatiga al volante y eventos relacionados con geocercas
- Manejo de audio bidireccional y escucha remota para verificación de incidentes, además de Bluetooth para configuración local rápida

## Cómo funcionan estas capacidades con Plaspy

Cuando se conecta a Plaspy, el VL802 transmite coordenadas GNSS, telemetría y notificaciones de eventos para que gerentes de flota e integradores puedan monitorear activos en tiempo real. Plaspy ingiere datos de posición y sensores y los muestra mediante paneles, informes y reglas de alerta configurables que apoyan los flujos operativos.

- Actualizaciones de ubicación en tiempo real y continuidad mediante LTE con retroceso GSM que aparecen en los mapas y vistas de seguimiento en vivo de Plaspy
- El estado de ignición (ACC) y eventos de entradas digitales como SOS o alarmas de puertas se envían a Plaspy para registro de eventos y generación de alertas
- Lecturas de sensores analógicos 0–5 V y telemetría vía RS485 pueden presentarse en Plaspy como canales de telemetría para paneles e informes
- Control de relé y acciones de inmovilizador remoto pueden ejecutarse desde los canales de comando de Plaspy para apoyar procedimientos antirrobo y de recuperación
- Alertas generadas por acelerómetro y eventos configurados se envían como notificaciones accionables en Plaspy para monitoreo de comportamiento del conductor y respuesta a incidentes

## Casos de uso típicos

- Ubicación y despacho en flotas comerciales donde el seguimiento continuo y los reportes conscientes de la ignición mejoran el enrutamiento y la utilización
- Flujos anti robo que combinan control remoto de relé, rastreo de ubicación y entradas de alarma para protección de activos
- Monitoreo de transporte público mediante ubicación en vivo, supervisión de audio y manejo de SOS para seguridad de pasajeros y control operativo
- Telemetría y evaluación de conductores donde eventos de exceso de velocidad, fatiga y vibración alimentan análisis y procesos de capacitación
- Telemetría de sensores y monitoreo de combustible usando entradas analógicas e integraciones RS485 para obtener datos de consumo y mantenimiento

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden diferir según la versión de firmware y la revisión de hardware; las actualizaciones de firmware pueden habilitar, modificar o refinar funcionalidades
- Variantes regionales del producto pueden enviarse con soporte de bandas celulares o configuraciones predeterminadas distintas; confirme la variante utilizada en su despliegue
- Las decisiones de instalación, como el cableado de ACC, SOS y salidas de relé, afectan qué funciones están disponibles en un vehículo en particular
- Algunas funciones avanzadas requieren configuración en la plataforma Plaspy para consumir y presentar los datos de forma eficaz
- Verifique siempre requisitos regulatorios, del operador o locales de instalación al desplegar equipos telemáticos celulares

## Por qué usar Plaspy con estas funciones

Combinar el Concox VL802 con Plaspy ofrece un camino práctico desde la telemetría del dispositivo hasta la visión operativa. Plaspy consolida datos de posición GNSS, telemetría digital y analógica y notificaciones de eventos en vistas en vivo, informes históricos y reglas de alerta que ayudan a las flotas a reducir tiempos fuera de servicio, mejorar la seguridad y responder más rápido a incidentes.

Para conocer más sobre cómo Plaspy soporta rastreadores como el VL802 y revisar opciones de integración, visite https://www.plaspy.com. Para especificaciones de dispositivo, detalles de firmware y orientación del fabricante más actual, verifique la información en el sitio oficial de Concox en https://www.iconcox.com/ ya que las implementaciones y el comportamiento de funciones pueden cambiar con el tiempo.
