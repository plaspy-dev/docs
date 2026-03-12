---
slug: /concox/vl106
id: vl106
sidebar_label: VL106
sidebar_class_name: menu_item_tracker
---
# Concox - VL106

![VL106](./tracker.png)

El VL106 es un rastreador GPS compatible con Plaspy diseñado para despliegues de vehículos exigentes, donde la ubicación continua y precisa y los datos de movimiento son fundamentales. Combinando una solución de navegación asistida por INS con GNSS de múltiples constelaciones \(GPS/BDS/GLONASS/Galileo\), el VL106 mantiene una alta precisión de posicionamiento y un rendimiento de seguimiento fiable en túneles, estacionamientos subterráneos y otros entornos con GNSS difíciles. Su diseño compacto y robusto, junto con un rango de alimentación de grado automotriz, lo hacen ideal para gestión de flotas, seguro basado en el uso \(UBI\), financiación de vehículos y soluciones antirrobo.

Diseñado para integrarse de forma fluida con la plataforma Plaspy, el VL106 ofrece seguimiento en tiempo real, telemetría rica e informes de eventos para ayudar a los operadores a reducir riesgos, mejorar la seguridad y optimizar operaciones. Detección de encendido/ACC integrada, un relé para corte remoto de combustible/energía, captura de IMU a alta velocidad para análisis de colisiones y almacenamiento a bordo aseguran la captura continua de datos incluso durante interrupciones de conectividad, convirtiendo al VL106 en una opción práctica de rastreador GPS para despliegues profesionales de flotas y seguridad.

## Puntos Clave

- Rendimiento de rastreador GPS asistido por INS para posicionamiento continuo y preciso en entornos con GNSS degradado.
- Compatible con Plaspy para seguimiento en tiempo real, alertas y paneles de gestión de flotas.
- Alta precisión de posicionamiento \(CEP &lt; 2.0 m\) con arranques en caliente y en frío rápidos para fijaciones de ubicación fiables.
- IMU integrada \(acelerómetro de 3 ejes y giroscopio de 3 ejes\) que permiten el análisis del comportamiento de conducción, la detección de colisiones y la telemetría avanzada.
- E/S automotriz que incluye detección ACC/encendido, botón SOS/pánico y salida de relé para inmovilizador remoto o corte de combustible/energía.
- Formato compacto y robusto con rango de voltaje de entrada amplio \(9–36 VDC\) y protección IP65 para entornos vehiculares exigentes.
- Almacenamiento a bordo y una pequeña batería de respaldo para conservar datos de eventos críticos en caso de pérdida de conectividad.

## Cómo Funciona con Plaspy

Cuando se combina con Plaspy, el VL106 transmite la telemetría de ubicación, movimiento y eventos a la plataforma en tiempo real de Plaspy, donde los datos se visualizan, analizan y se convierten en alertas e informes accionables. Plaspy ingiere datos GNSS e IMU del vehículo para alimentar mapas en vivo, reproducción histórica, informes de conducción y flujos de trabajo automáticos de eventos para gestión de flotas y respuesta ante robo.

- Actualizaciones en tiempo real de ubicación y telemetría para el seguimiento de la flota en vivo.
- Detección de ACC/encendido y estado SOS/pánico informados instantáneamente a Plaspy.
- Corte de combustible/poder mediante salida de relé usable para comandos de inmovilizador remoto a través de flujos de trabajo de Plaspy.
- Transmisión de IMU a alta frecuencia \(20 Hz durante 10 segundos alrededor de impactos\) para apoyar la reconstrucción de colisiones y el análisis postincidente.
- La retención de almacenamiento a bordo garantiza que los eventos críticos estén disponibles para Plaspy tras una pérdida temporal de señal; Plaspy puede combinar la telemetría del VL106 con feeds de sensores externos, como sensores Bluetooth gestionados a través de la plataforma Plaspy.

## Resumen Técnico

| Conectividad | Conectividad celular LTE y GSM para comunicaciones globales |
| --- | --- |
| Bandas | No especificadas \(LTE/GSM soportados\) |
| Alimentación y Batería | Voltaje de entrada amplio 9–36 VDC; batería de respaldo a bordo de 100 mAh, Li‑Polymer de 3.7 V |
| Interfaces | Detección ACC/encendido, botón SOS/pánico, salida de relé para corte remoto de combustible/energía, ranura Micro‑SIM |
| GNSS | Multi‑constelación: GPS / BDS / GLONASS / Galileo; precisión de posicionamiento &lt;2.0 m CEP; arranque en caliente ≤1 s, arranque en frío ≤24 s; sensibilidad de seguimiento -165 dBm, sensibilidad de adquisición -148 dBm |
| IMU / Sensores | IMU integrada de 3‑ejes \(acelerómetro\) y 3‑ejes \(giroscopio\); grabación de eventos de colisión y captura IMU a 20 Hz durante 10 s pre/post impacto |
| Almacenamiento | Almacenamiento a bordo 128 + 128 Mb |
| Gestión Remota | No especificado \(el dispositivo soporta informes remotos de eventos; consultar al proveedor para FOTA/herramientas de gestión\) |
| Formato y Entorno | Compacto: 94.3 x 50.4 x 15.0 mm; IP65; temperatura de operación -20℃ a +70℃ |
| Instalación Típica | Instalación en vehículo; uso industrial/automotriz |

## Casos de Uso

- Gestión de flotas: seguimiento en tiempo real continuo, telemetría del comportamiento del conductor e informes automatizados para mejorar la utilización y reducir los costos operativos.
- Seguro basado en el uso \(UBI\): monitorización precisa del comportamiento de conducción \(aceleración/braking brusco, toma de curvas, vuelcos\) para respaldar la valoración de riesgos y análisis de aseguradoras.
- Financiación de automóviles y recuperación: capacidad de inmovilización remota mediante salida de relé para flujos de trabajo de recuperación seguros y disuasión de robos.
- Investigación de colisiones y seguridad: captura de datos IMU a alta frecuencia y registros pre/post impacto para la reconstrucción de accidentes y análisis de responsabilidad.
- Antirrobo y seguridad: alertas instantáneas de manipulación, desconexión de suministro de energía y violaciones de geocerca, combinadas con acciones de respuesta impulsadas por Plaspy.

## Por qué Elegir Este Rastreador con Plaspy

El VL106 ofrece una solución robusta de rastreador GPS con INS para organizaciones que requieren continuidad fiable de la ubicación y telemetría rica en condiciones de conducción reales. Su GNSS de múltiples constelaciones, receptor de alta sensibilidad y la IMU integrada proporcionan datos precisos de posición y movimiento donde los rastreadores GPS estándar pueden fallar. Emparejado con Plaspy, los operadores obtienen una solución compatible con Plaspy que convierte esta telemetría bruta en seguimiento en tiempo real, ideas para gestión de flotas y acciones automáticas de anti‑robos, respaldando flujos de trabajo de monitoreo de combustible, controles de encendido e inmovilizador, y análisis detallado del comportamiento de conducción. Para flotas, aseguradoras y proveedores de financiación que buscan seguimiento preciso, fidelidad de eventos e integración fluida de la plataforma, el VL106 con Plaspy ofrece una opción práctica y escalable sin comprometer la robustez ambiental o las interfaces de grado automotriz.

