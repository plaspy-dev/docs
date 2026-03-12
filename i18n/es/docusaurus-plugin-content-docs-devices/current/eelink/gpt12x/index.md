---
slug: /eelink/gpt12x
id: gpt12x
sidebar_label: GPT12‑X
sidebar_class_name: menu_item_tracker
---
# EElink - GPT12‑X

![GPT12‑X](./tracker.jpg)

El GPT12‑X es un rastreador GPS delgado y de larga autonomía, diseñado para despliegues de varios años y monitoreo a escala empresarial. Listo para usar con Plaspy, el GPT12‑X integra conectividad LTE Cat‑M y NB‑IoT junto con posicionamiento multi‑GNSS para ofrecer seguimiento en tiempo real fiable, alarmas de eventos y una vida útil de la batería ampliada para proyectos de gestión de activos y flotas que requieren bajo mantenimiento y alta disponibilidad.

La batería de 5000 mAh de la unidad admite hasta cinco años en modo de espera con activaciones diarias y incluye un modo de emergencia para actualizaciones en tiempo real frecuentes cuando sea necesario. Construido para entornos exigentes, el GPT12‑X a prueba de agua soporta activación por vibración, detección de colisión/caída, una alarma de manipulación por sensor de luz, configuración remota y actualizaciones de firmware OTA, e se integra con Plaspy mediante el protocolo EELINK para telemetría, geocercas y enrutamiento de alarmas sin interrupciones.

## Aspectos destacados

- Compatibilidad con Plaspy: el soporte del protocolo EELINK permite una integración rápida para seguimiento en tiempo real e ingestión de telemetría.
- Autonomía ultralarga: la batería de 5000 mAh proporciona hasta cinco años de espera con ciclos de activación diarios, reduciendo las visitas de mantenimiento.
- Conectividad LPWA dual: LTE Cat‑M y NB‑IoT para cobertura de área amplia con bajo consumo y transferencia de datos rentable.
- Posicionamiento multi‑GNSS: soporte para GPS, GLONASS, Galileo, BDS y QZSS para mejorar la precisión de ubicación en entornos desafiantes.
- Inteligencia de eventos: activación por vibración, alarmas de colisión/caída y detección de manipulación por sensor de luz para casos de uso de seguridad y anti‑robo.
- Gestión remota: actualizaciones de firmware OTA y configuración remota facilitan implementaciones a gran escala y actualizaciones del ciclo de vida a través de Plaspy.
- Diseño robusto y compacto: carcasa delgada e impermeable y formato ligero para instalación flexible en vehículos o activos.

## Cómo funciona con Plaspy

El GPT12‑X envía telemetría y mensajes de alarma compactos a través de LTE Cat‑M o NB‑IoT utilizando el protocolo EELINK, que Plaspy ingiere para proporcionar paneles, alertas de geocercas e informes de posición históricos. Plaspy utiliza las soluciones GNSS del rastreador, datos de batería y de eventos para generar mapas en tiempo real, alertas ante eventos de colisión/manipulación e informes programados para la gestión de flotas. La configuración remota y las actualizaciones de firmware OTA se gestionan a través del canal de gestión del dispositivo para que los ajustes y el firmware se mantengan centralizados desde Plaspy.

- Actualizaciones de ubicación y telemetría en tiempo real \(posición GNSS, con marca de tiempo\).
- Alarmas de activación por colisión/caída y vibración para detección rápida de incidentes.
- Alertas de manipulación mediante el sensor de luz para detectar intentos de apertura del compartimento.
- Eventos de entrada/salida en geocercas y alarmas de zona configurables.
- Estado de la batería y notificaciones de modo de espera prolongado, incluida la monitorización en tiempo real de emergencia cuando se active.
- Correlación de encendido/puerta/inmovilizador del vehículo — si Plaspy dispone de señales de vehículo separadas, la telemetría del GPT12‑X puede combinarse con esas entradas para soportar flujos de trabajo de encendido o inmovilización.

## Resumen técnico

| Conectividad | LTE Cat‑M y NB‑IoT \(celular de área amplia de bajo consumo\) |
| --- | --- |
| Bandas | Variantes regionales/bandas disponibles; las bandas específicas dependen del modelo y del mercado |
| Energía y batería | Batería de litio de 5000 mAh; hasta cinco años en modo de espera con activaciones diarias; modo de emergencia admite seguimiento en tiempo real frecuente |
| Interfases / Sensores | Activación por vibración; acelerómetro para detección de colisión/caída; alarma de manipulación por sensor de luz; soporte de configuración remota |
| GNSS | Soporte multi‑GNSS: BDS, GPS, GLONASS, Galileo, QZSS |
| Bluetooth | No se reportan sensores Bluetooth \(no especificado\) |
| Gestión remota | Protocolo EELINK para integración con la plataforma; actualización de firmware OTA y configuración remota |
| Formato | 120 × 69 × 19.5 mm; 165 g; carcasa delgada e impermeable \(calificación de impermeabilidad no especificada\) |

## Casos de uso

- Gestión de flotas para vehículos de bajo uso o equipos estacionales, donde una vida de batería de varios años reduce el mantenimiento y los costos de seguimiento.
- Protección anti‑robo y monitoreo de seguridad con alarmas de vibración, colisión/caída y manipulación por sensor de luz enviadas a Plaspy para alertas inmediatas.
- Seguimiento remoto de activos para contenedores, remolques o equipos almacenados fuera del sitio, donde la cobertura LPWA y el multi‑GNSS mejoran la fiabilidad de la ubicación.
- Seguimiento de emergencia para activos monitoreados de forma intermitente: cambiar de modo de espera prolongado a seguimiento en tiempo real de emergencia para seguir los activos durante operaciones de recuperación.
- Telemetría y flujos de trabajo basados en geocercas donde Plaspy gestiona informes, alertas y análisis, mientras que el GPT12‑X ofrece larga vida y detección de eventos robusta.

## Por qué elegir este rastreador con Plaspy

Para las organizaciones que despliegan un gran número de rastreadores en flotas o activos dispersos, el GPT12‑X ofrece una solución de baja intervención y alta confiabilidad que complementa las capacidades de la plataforma de Plaspy. Su soporte multi‑GNSS y la conectividad celular LPWA proporcionan un rendimiento consistente del rastreador GPS en áreas donde la energía y la disponibilidad de la red son limitadas. La larga vida en modo de espera reduce la carga operativa y el protocolo EELINK facilita la integración con Plaspy para telemetría, geocercas y manejo de alarmas. Aunque la unidad destaca en el reporte de ubicación y eventos a largo plazo, Plaspy también puede combinar la telemetría del GPT12‑X con entradas de vehículo adicionales \(como encendido o sistemas de inmovilización\) o sensores externos cuando se requieren monitoreo de combustible, control de encendido o sensores Bluetooth para una solución completa de gestión de flotas o anti‑robo.

