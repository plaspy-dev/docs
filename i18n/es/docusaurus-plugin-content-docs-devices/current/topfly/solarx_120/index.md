---
slug: /topfly/solarx_120
id: solarx_120
sidebar_label: SolarX 120
sidebar_class_name: menu_item_tracker
---
# TopFly - SolarX 120

![SolarX 120](./tracker.png)

El SolarX 120 de SolarX \(modelo SolarX 120\) es un rastreador GPS de alta durabilidad con asistencia solar, diseñado para el monitoreo de activos al aire libre a largo plazo. Construido para soportar entornos adversos con una carcasa robusta con clasificación IP67 y una batería recargable Li-Polymer de 7,500 mAh, este rastreador compatible con Plaspy extiende la vida útil en campo gracias a la carga solar continua y a intervalos de reporte configurables de hasta cada 3 segundos para un seguimiento en tiempo real.

Diseñado para contenedores, remolques, camiones y otros activos pesados, SolarX 120 combina posicionamiento GNSS de múltiples constelaciones, conectividad celular LTE/2G y soporte de sensores BLE 5.3 para ofrecer telemetría robusta, alertas de movimiento y de retirada. Cuando se integra con Plaspy, el dispositivo proporciona flujos de ubicación confiables, reporte con almacenamiento intermedio cuando la cobertura se interrumpe y telemetría de sensores para temperatura, humedad y estado de la puerta usando sensores BLE TOPFLYtech \(TSTH1-B, TSDT1-B\) u otros dispositivos BLE compatibles.

## Aspectos clave

- Rastreador GPS compatible con Plaspy diseñado para el seguimiento de activos en exterior, con protección IP67 y una carcasa robusta y de gran espesor.
- Carga asistida por energía solar, junto con una batería Li-Polymer recargable de 7,500 mAh para una operación prolongada sin supervisión.
- Seguimiento en tiempo real con actualizaciones configurables tan frecuentes como cada 3 segundos y almacenamiento en búfer de hasta 49,000 puntos.
- Soporte BLE 5.3 y compatible con sensores TOPFLYtech BLE \(TSTH1-B, TSDT1-B\) para monitorización de temperatura, humedad y puerta.
- Alertas de movimiento \(inicio de movimiento y detención\) y eventos de estacionamiento utilizables en flujos de trabajo de Plaspy para gestión de flotas y detección antirrobo.
- Conectividad celular multimodal \(LTE FDD/Cat 1 y 2G GSM\) con transporte TCP/UDP/MQTT/SMS para una entrega de telemetría flexible a Plaspy.
- Opciones de montaje robustas — imanes, tornillos, cinta, bridas o poliuretano — para instalación rápida en activos pesados.

## Cómo funciona con Plaspy

El SolarX 120 transmite ubicación y telemetría de sensores a Plaspy utilizando protocolos de transporte estándar y puede operar en modos en vivo o de almacenamiento y reenvío. Con cobertura normal, envía fijaciones GNSS frecuentes y datos de sensores BLE a Plaspy para visualización inmediata, geocercas y alertas basadas en reglas. Si se interrumpe la cobertura, el dispositivo almacena en búfer hasta 49,000 puntos y los sube cuando se restablece la conexión, garantizando que no se pierdan datos históricos de seguimiento.

- Actualizaciones en tiempo real de ubicación y telemetría a Plaspy mediante TCP, UDP, MQTT o SMS.
- Alertas de movimiento \(inicio de movimiento y detención\) y eventos de estacionamiento utilizables en flujos de trabajo de Plaspy para gestión de flotas y detección antirrobo.
- Alertas de retirada mediante el sensor de luz incorporado para notificar a Plaspy posibles manipulaciones o desenganche.
- Telemetría de sensores BLE \(temperatura, humedad y estado de la puerta\) de sensores TOPFLYtech compatibles y otros dispositivos BLE, integrada en los paneles y reportes de Plaspy.
- Almacenamiento de datos en búfer para su transmisión posterior cuando el dispositivo recupera la conectividad, preservando las trayectorias históricas para auditorías y análisis.

## Resumen técnico

| Conectividad | LTE FDD Cat 1, LTE TDD Cat 1, 2G GSM |
| --- | --- |
| Bandas | LTE FDD: B1/B2/B3/B4/B5/B7/B8/B12/B13/B17/B18/B19/B20/B25/B26/B28/B66; LTE TDD: B34/B38/B39/B40/B41; 2G GSM: 850/900/1800/1900 MHz |
| Alimentación y batería | batería recargable Li-Polymer de 7,500 mAh / 3.6 V; carga asistida por energía solar; cable magnético USB-C para carga/datos |
| Interfaces | USB-C \(cable magnético\) para carga/datos, indicadores LED para red/GNSS/batería, interruptor de encendido físico |
| GNSS | Receptor todo en uno: GPS, BeiDou, Galileo, QZSS \(SBAS\); 24 canales de seguimiento / 64 de adquisición; precisión horizontal \< 1.5 m CEP; sensibilidad de adquisición -148 dBm; sensibilidad de seguimiento -162 dBm; TTFF frío \<20 s, tibio \<2 s, caliente \<2 s |
| Bluetooth | BLE 5.3 para sensores externos; compatible con sensores TOPFLYtech BLE \(TSTH1-B, TSDT1-B\) y otros dispositivos BLE |
| Gestión remota | Soporte FOTA; intervalos de reporte configurables; admite TCP, UDP, MQTT y SMS |
| Formato | Carcasa exterior robusta para exteriores, IP67 \(probada a 5 m durante 15 horas\); dimensiones 85 × 185 × 31 mm; peso 370 g |
| Sensores y almacenamiento | Sensor de temperatura interno, sensor de luz para detección de retirada, acelerómetro de 3 ejes; búfer interno de hasta 49,000 puntos de ubicación; hasta 64 regiones de geocerca |
| Rango operativo | -25 °C a +80 °C |

## Casos de uso

- Gestión de flotas para camiones y remolques de larga distancia: telemetría continua del rastreador GPS para optimización de rutas, detección de inactividad e historial de viajes.
- Monitoreo de contenedores de envío: energía solar y una carcasa robusta permiten despliegues prolongados con alertas de retirada y manipulación.
- Antirrobo para remolques y equipos pesados: alertas de movimiento y retirada alimentan las reglas de Plaspy para activar alertas y flujos de recuperación.
- Monitoreo de cadena de frío o condiciones de la carga: sensores BLE de temperatura/humedad emparejados con SolarX 120 proporcionan telemetría ambiental a los paneles de Plaspy.
- Auditoría remota de activos: almacenamiento de ubicaciones en búfer conserva el historial de rutas cuando los dispositivos operan en zonas de baja cobertura y luego se sincronizan con Plaspy para informes de cumplimiento.

## Por qué elegir este rastreador con Plaspy

SolarX 120 está diseñado para organizaciones que requieren un rastreo de activos fiable y de bajo mantenimiento, con total compatibilidad con Plaspy. Su combinación de hardware robusto, autonomía de batería con asistencia solar y conectividad multimodal minimiza las visitas de servicio y mantiene en línea flotas, contenedores y equipos pesados. El soporte de sensores BLE y la telemetría avanzada facilitan la captura de datos ambientales y el estado de las puertas junto con fijaciones GNSS precisas, mientras que el almacenamiento en búfer y FOTA reducen la carga operativa.

Combinado con Plaspy, SolarX 120 ofrece seguimiento en tiempo real accionable, telemetría robusta y alertas basadas en eventos que respaldan respuestas ante robos, monitoreo de flotas y reporting basado en condiciones. Ya sea que necesite seguimiento de alta frecuencia para análisis detallados de rutas o despliegues prolongados sin supervisión para activos remotos, el SolarX 120 ofrece la resiliencia del hardware y la flexibilidad de datos necesarias para escalar su programa de seguimiento con confianza.

