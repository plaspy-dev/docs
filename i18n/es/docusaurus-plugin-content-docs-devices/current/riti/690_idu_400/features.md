---
slug: /riti/690_idu_400/features
id: 690_idu_400-features
sidebar_label: Features
title: Riti - 690 (IDU-400) Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Riti 690 IDU 400 y su compatibilidad con Plaspy para rastreo de flotas y telemetría
keywords:
  - Riti 690
  - Riti 690 IDU 400
  - características Riti 690
  - rastreador GPS Riti IDU 400
  - características Locator 690
  - rastreador GPS Riti Plaspy
  - rastreador compatible Plaspy
  - rastreo de vehículos Riti 690
  - rastreador para gestión de flotas Riti
---

# Riti - 690 (IDU-400) Características

Esta página ofrece una visión pública de las capacidades del Riti Locator 690 (IDU-400) y cómo se utiliza habitualmente con Plaspy para la gestión de flotas y la telemetría operativa. El objetivo es describir las funciones prácticas y los tipos de telemetría que Plaspy puede procesar de este modelo, sin sustituir la documentación oficial del fabricante.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, accesorios opcionales, el método de instalación y la implementación del fabricante. Consulte la documentación del fabricante para obtener los detalles más actualizados y confirmar qué capacidades están presentes en una unidad concreta.

## Resumen de funciones

El Locator 690 es una unidad de datos inteligente con GNSS profesional diseñada para las exigencias del IoT en flotas y vehículos comerciales. Proporciona reportes continuos de posición, entradas y salidas del vehículo, almacenamiento a bordo con retransmisión automática y puntos de integración para MDVR y sensores auxiliares, entregando la telemetría central que se espera en despliegues con Plaspy.

- GNSS de alta sensibilidad con múltiples constelaciones para fijaciones de posición rápidas y datos de ubicación confiables.
- Conectividad celular de múltiples generaciones para amplia cobertura de red y uplink de datos fiable.
- Varios puntos de E/S digitales y analógicos además de entradas de temperatura para telemetría de vehículo y sensores.
- Almacenamiento local de eventos con reenvío automático a Plaspy para evitar huecos de información durante cortes de conexión.
- Detección de manipulación integrada y reporte de eventos por sensor G para alertas de robo y colisiones.

## Funciones principales del Riti - 690 (IDU-400)

- Posicionamiento GNSS con soporte para GPS y GLONASS y recepción de alta sensibilidad para mejorar el rendimiento de fijación de posición.
- Soporte celular multibanda en 2G, 3G y 4G para mantener la conectividad en diversas regiones.
- E/S del vehículo que incluyen cinco entradas digitales, dos entradas analógicas, dos entradas de temperatura, una entrada SOS y cuatro salidas digitales para integrarse con sistemas del vehículo.
- Capacidad de almacenamiento a bordo para aproximadamente 30,000 registros con retransmisión automática cuando vuelve la conectividad.
- Sensor G integrado y alertas por manipulación o corte de alimentación para notificaciones basadas en eventos.
- Capacidad de actualización remota de firmware y detección de fallas para simplificar el mantenimiento a gran escala.
- Interfaces seriales RS-232 para integración con MDVR y periféricos.

## Cómo funcionan estas funciones con Plaspy

Plaspy procesa fijaciones de posición, reportes de eventos y cambios de estado de entradas desde dispositivos compatibles como el Locator 690, de modo que las flotas puedan monitorear el estado y reaccionar ante incidentes en tiempo real. Plaspy detecta automáticamente el protocolo del rastreador y soporta los modos de transporte comunes usados por este modelo, facilitando la integración.

- Actualizaciones de ubicación en tiempo real y reproducción histórica disponibles en los paneles de Plaspy para revisar rutas y analizar desempeño.
- Eventos de entradas digitales, como encendido o estado de puertas, visibles en Plaspy para monitoreo operativo y alertas basadas en reglas.
- Los registros almacenados se retransmiten a Plaspy tras cortes de servicio, manteniendo completos los informes e históricos.
- Alertas por eventos del sensor G, manipulación y entradas SOS pueden enviarse a despachadores y flujos de escalamiento.
- Telemetría MDVR por RS-232 y otros datos seriales pueden capturarse y correlacionarse con la ubicación dentro de Plaspy para reconstrucción de incidentes.

## Casos de uso habituales

- Rastreo continuo de flotas y despacho, donde el GNSS y la telemetría celular fiables alimentan mapas en vivo y cálculos de ETA.
- Monitorización antirrobo y respuesta rápida mediante alertas de manipulación, eventos del sensor G y notificaciones basadas en geocercas.
- Reportes regulatorios o para subsidios que requieren informe frecuente de odómetro o kilometraje y registros históricos robustos.
- Programas de MDVR y seguridad del conductor que combinan video con líneas de tiempo de ubicación y eventos.
- Monitoreo de cadena de frío y transporte refrigerado usando las entradas de temperatura del dispositivo y sondas externas opcionales.
- Implementaciones de flotas mixtas donde el soporte celular multibanda reduce las brechas de conectividad regionales.

## Notas sobre disponibilidad de funciones

- El conteo específico de E/S, el soporte de sensores y la compatibilidad con accesorios pueden variar según la revisión de hardware y las configuraciones opcionales del fabricante.
- El nivel de firmware influye en el comportamiento de funciones como intervalos de reporte, generación de alarmas y la lógica de retransmisión automática.
- Algunas integraciones, como sensores externos o periféricos MDVR, pueden requerir accesorios adicionales o configuración durante la instalación.
- La cobertura de bandas celulares regionales y el comportamiento de 2G, 3G o 4G dependen de los operadores locales y de la versión de bandas del dispositivo.
- Confirme siempre la lista exacta de funciones y las opciones soportadas para su unidad con Riti antes del despliegue.

## Por qué usar Plaspy con estas funciones

Combinar el Riti Locator 690 con Plaspy ofrece una vía práctica para obtener visibilidad consolidada de la flota y supervisión operativa. El dispositivo provee los datos de ubicación y eventos que Plaspy utiliza para poblar mapas en vivo, alertas e informes históricos, mientras que el almacenamiento a bordo y la capacidad de actualización remota ayudan a mantener la continuidad y reducir el esfuerzo de mantenimiento en despliegues extensos.

Para saber más sobre cómo Plaspy puede trabajar con dispositivos Riti visite https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware y opciones de accesorios más actuales, verifique los detalles en el sitio del fabricante https://www.riti.com.tw/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
