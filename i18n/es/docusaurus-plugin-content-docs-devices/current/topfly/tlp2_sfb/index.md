---
slug: /topfly/tlp2_sfb
id: tlp2_sfb
sidebar_label: TLP2-SFB
sidebar_class_name: menu_item_tracker
---
# TopFly - TLP2-SFB

![TLP2-SFB](./tracker.png)

## TLP2-SFB \(4G LTE\) Asset Tracker — Plaspy Compatible

El TLP2-SFB \(4G LTE\) es un rastreador GPS de uso industrial con energía solar asistida, diseñado para la monitorización de activos al aire libre a largo plazo. Construido para contenedores, remolques y camiones, ofrece seguimiento en tiempo real robusto y un amplio almacenamiento en búfer fuera de línea para que los activos sigan siendo visibles para Plaspy incluso cuando la cobertura es intermitente. Su resistente carcasa con clasificación IP67, las múltiples opciones de montaje y la carga solar integrada lo hacen ideal para la gestión remota de flotas y flujos de trabajo anti‑robo.

Como rastreador GPS compatible con Plaspy, el TLP2-SFB transmite ubicación y telemetría a través de TCP/UDP/MQTT/SMS y se empareja con sensores Bluetooth Low Energy para temperatura, humedad y estado de la puerta. Úselo para alimentar dashboards y alertas de Plaspy para inicio/del movimiento, estacionamiento, detección de retirada y telemetría de sensores enriquecida que soporta monitoreo de cadena de frío y programas de seguridad de activos.

## Key Highlights

- Rastreador GPS compatible con Plaspy con actualizaciones de ubicación en tiempo real tan frecuentes como cada 3 segundos para una visibilidad precisa de la ubicación.
- Batería Li‑Polymer recargable de 9600 mAh alimentada por energía solar, con batería de respaldo interna para extender la vida de despliegue en activos exteriores remotos.
- Amplio búfer a bordo \(hasta 49,000 puntos de ubicación\) que conserva el historial cuando no hay cobertura de red y se sincroniza con Plaspy al volver a estar conectado.
- Soporte BLE 5.0 para sensores de temperatura, humedad y puerta \(TSTH1-B, TSDT1-B\) y relés inalámbricos \(TSR1-B\) para integración de telemetría y control.
- Carcasa robusta con IP67, sensores de luz duales para detección de manipulación y retirada, y montaje flexible \(imán, tornillos, bridas, pegamento\).
- GNSS de alta precisión con receptor Qualcomm Gen 8C y soporte multiconstelación para una precisión autónoma inferior a 2 m CEP.
- Alertas de eventos avanzadas: inicio/detección de movimiento, estacionamiento y alarmas de retirada que se integran con las reglas y notificaciones de Plaspy.

## How It Works with Plaspy

El TLP2-SFB se integra en Plaspy transmitiendo ubicación y telemetría a través de protocolos estándar \(TCP/UDP/MQTT/SMS\). Plaspy ingiere puntos GPS, historial en búfer y datos de sensores BLE para impulsar el seguimiento en tiempo real, alertas e informes históricos. Los administradores pueden configurar umbrales de alerta en Plaspy para movimiento, estacionamiento, manipulación y condiciones de sensores para automatizar respuestas de anti‑robo y de la cadena de frío.

- Actualizaciones de ubicación y telemetría en tiempo real \(tan frecuentes como cada 3 segundos\) para mapas y páginas de seguimiento en vivo de Plaspy.
- Almacenamiento de ubicación en búfer \(hasta 49,000 puntos\) que se carga en Plaspy cuando se restablece la conectividad para conservar el historial de viajes y las rutas de auditoría forense.
- Alertas de inicio/detección de movimiento y de estacionamiento que activan notificaciones y flujos de trabajo de Plaspy para la gestión de flotas y anti‑robo.
- Detección de retirada/manipulación mediante sensores de luz duales, reportada a Plaspy como eventos de retirada o manipulación.
- Sensores Bluetooth \(temperatura, humedad, puerta\) y relés inalámbricos reportados a través del rastreador, permitiendo a Plaspy monitorizar las condiciones de la cadena de frío y el estado de la puerta en tiempo real.

## Technical Overview

| Conectividad | 4G LTE \(FDD\), soporte Cat M1; EGPRS; transporte TCP/UDP/MQTT/SMS |
| --- | --- |
| Bandas | FDD LTE B1/B2/B3/B4/B5/B8/B12/B13/B19/B20/B25/B28; TDD B39 \(solo Cat M1\); EGPRS como respaldo |
| Energía y batería | Li‑Polymer recargable de 9600 mAh \(3.6 V\) con carga por panel solar; batería de respaldo interna |
| Almacenamiento a bordo | Buffer de hasta 49,000 puntos de ubicación para registro offline |
| Interfaces e indicadores | Puerto de carga/data magnético de 4 pines, LEDs indicadores, un interruptor de encendido físico, sensores de luz duales, sensor de temperatura interno |
| GNSS | Receptor Qualcomm Gen 8C; GPS + GLONASS + Galileo + Beidou; precisión de posición autónoma \< 2 m CEP |
| Bluetooth | BLE 5.0 para sensores externos y relés inalámbricos \(compatible con TOPFLYtech TSTH1-B, TSDT1-B, TSR1-B\) |
| Sensado y detección | Acelerómetro de 3 ejes para detección de movimiento; sensores de luz duales para alarmas de retirada/manipulación; admite hasta 64 regiones de geocerca |
| Gestión remota | Soporte FOTA para actualizaciones de firmware remotas; telemetría remota vía MQTT/TCP/UDP/SMS |
| Formato y durabilidad | Sellado IP67 \(probado hasta 5 m\), dimensiones 85 × 185 × 31 mm, peso 370 g; múltiples opciones de montaje \(imán, tornillos, bridas, pegamento\) |

## Use Cases

- Seguimiento de contenedores y remolques — ubicación en tiempo real continua y almacenamiento fuera de línea prolongado para logística transfronteriza o remota.
- Monitoreo de cadena de frío — integrar sensores BLE de temperatura y humedad para alimentar alertas de Plaspy e informes de cumplimiento.
- Gestión de flotas para vehículos pesados — seguimiento en vivo y eventos de movimiento/estacionamiento para optimizar rutas y generar informes de utilización.
- Anti‑robo y detección de retirada — sensores de luz duales y alertas disparadas por accelerómetro proporcionan notificaciones de manipulación y retirada a operadores de Plaspy.
- Despliegues de activos a largo plazo — carga solar y diseño robusto IP67 permiten uso prolongado en campo sin mantenimiento frecuente.

## Why Choose This Tracker with Plaspy

El TLP2-SFB combina durabilidad y alta autonomía con posicionamiento de alta frecuencia y un buffering extenso para entregar un seguimiento confiable compatible con Plaspy para activos exteriores exigentes. Su soporte de sensores BLE aporta telemetría \(temperatura, humedad y estado de la puerta\) a la misma plataforma, simplificando el monitoreo de la cadena de frío y la seguridad. La carga solar más una batería Li‑Polymer de gran capacidad reducen las visitas de mantenimiento y mantienen a los activos reportando durante meses. La construcción robusta con IP67 y las múltiples opciones de montaje lo hacen práctico para despliegues de flota y contenedores donde la disponibilidad es crítica.

Cuando se integra con Plaspy, el TLP2-SFB admite una gestión de flotas más eficiente, alertas automáticas de anti‑robo y un reporting de telemetría rico. Las organizaciones obtienen historial de ubicación preciso, detección de manipulación y notificaciones impulsadas por sensores sin sacrificar la longevidad de la implementación — una opción práctica para operadores que requieren un rastreo GPS confiable y escalable y telemetría para activos de uso intensivo.

