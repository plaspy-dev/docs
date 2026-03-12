---
slug: /totemtech/at07_4g
id: at07_4g
sidebar_label: AT07-4G
sidebar_class_name: menu_item_tracker
---
# Totemtech - AT07-4G

![AT07-4G](./tracker.jpg)

El AT07-4G \(también referenciado como AT07-3G/4G\) es un rastreador GPS compacto y robusto, diseñado para despliegues exigentes de vehículos y activos. Pensado para una gestión fiable de flotas y protección antirrobo, el AT07-4G ofrece rastreo en tiempo real compatible con Plaspy, telemetría robusta e integración periférica flexible para el monitoreo de combustible, estado de puerta/encendido y alertas de emergencia.

Construido para operar en variantes celulares y constelaciones GNSS múltiples, el AT07-4G combina conectividad persistente, almacenamiento a bordo y actualizaciones de firmware OTA para mantener visibles vehículos y activos incluso ante pérdidas de red o condiciones adversas. Su formato compacto y su amplio rango de entrada de energía lo hacen ideal para flotas mixtas que requieren posición precisa, diagnósticos e informes basados en eventos hacia Plaspy.

## Puntos clave

- Rastreador GPS compatible con Plaspy con seguimiento en tiempo real y registro histórico para gestión de flotas y visibilidad de activos.
- GNSS de múltiples constelaciones \(GPS/GLONASS/BeiDou\) utilizando un chip AT6558R de 50 canales para reacquisición rápida y alta precisión de posición.
- Variante celular 3G/4G y GSM cuádrupla banda con reporte GPRS configurable por tiempo, distancia o cambio de ruta.
- Amplias I/O para telemetría y periféricos: puerto RS232 para sensores externos \(medidores de combustible Omnicomm, RFID\), entrada de temperatura 1-wire, I/O digitales/analógicos y puertos de voz.
- Memoria flash a bordo de 16 MB almacena ~4,000 registros cuando no hay red; actualizaciones de firmware OTA y configuración por SMS/GPRS soportadas.
- Conjunto completo de alarmas: geocercas, exceso de velocidad, SOS, estado de la puerta, pérdida de alimentación externa, arrastre, inactividad y detección de vibración \(temblor\).
- Amplio rango de tolerancia de potencia y protección con opciones de entrada DC, protección integrada contra sobretensión y una batería de respaldo Li-Polímero de 800 mAh diseñada para altas temperaturas.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el AT07-4G suministra ubicación y telemetría continuas a su plataforma de seguimiento. El dispositivo admite modos de reporte configurables y puede transmitir datos de posición y eventos a hasta dos servidores simultáneamente. Plaspy ingiere fijaciones GPS/GLONASS/BeiDou, eventos de E/S y telemetría de sensores para proporcionar mapas en tiempo real, alertas y análisis para gestores de flotas.

- Actualizaciones de ubicación y telemetría en tiempo real \(soluciones GNSS, velocidad y rumbo\).
- Estado de puerta, SOS, pérdida de alimentación externa y otros estados de eventos digitales para alertas de seguridad y antirrobo.
- Monitoreo de combustible vía sensores de combustible conectados por RS232 \(compatibilidad Omnicomm\) y entradas analógicas para telemetría relacionada con combustible.
- Control remoto del inmovilizador mediante relé externo \(periférico opcional\) y salidas digitales donde se implementen flujos de inmovilización.
- Datos de temperatura y sensores auxiliares vía puerto 1-wire e interfaces serie/analógicas, permitiendo monitorización ambiental y seguimiento del estado de activos.

## Resumen técnico

| Modelo | AT07-4G \(también referenciado como AT07-3G/4G\) |
| --- | --- |
| Conectividad | Celular 3G/4G; soporte GSM cuádrupla banda y múltiples opciones de bandas LTE |
| Bandas / Variantes | EG91-EX: FDD-LTE B1/B3/B8/B20/B28; WCDMA B1/B8; GSM B3/B8. EG91-NAX: FDD-LTE B2/B4/B5/B12/B13/B25/B26; WCDMA B2/B4/B5. |
| GNSS | GPS/GLONASS/BeiDou con chip AT6558R, 50 canales; sensibilidad -162 dBm; precisión horizontal típica de 2.5 m \(SBAS 2.0 m; SBAS+PPP \<1–2 m dependiendo del modo\). |
| Rendimiento GNSS | Reacquisición ≈0.1 s; Arranque en caliente/tibio ≈1 s; Arranque en frío ≈27 s. |
| Alimentación & Batería | Entrada DC 9–50 V \(la ficha técnica también lista soporte de +12–60 V / 1.5 A\); protección integrada contra sobretensión; batería de respaldo Li-Polímero de 800 mAh diseñada para altas temperaturas. |
| Interfaces | 1 × puerto serie RS232; 1 entrada de conmutador; 4 entradas digitales; 3 salidas digitales; 1 entrada analógica; 1 × puerto de sensor de temperatura 1-wire; puerto de antena GPS; 1 botón SOS; 4 puertos de voz bidireccionales \(micrófono y altavoz\). |
| Almacenamiento | Memoria flash de 16 MB \(aprox. 4,000 registros almacenados\) para registro offline. |
| Indicadores | LEDs para estado de GPS, GSM y alimentación. |
| Dimensiones & Peso | 89 × 55 × 25 mm; ~100 g. |
| Condiciones de operación | -20 °C a 60 °C; humedad 5%–95% sin condensación. |
| Consumo | Típico 2 W en modo normal, hasta 12.5 W en pico. |
| Paquete & Opciones | El paquete estándar incluye antena GPS y juego de cables I/O. Periféricos opcionales: relé, sensor de puerta, sensor de combustible, cámara, sensor de temperatura, micrófono, altavoz, zumbador, lectores y etiquetas iButton/RFID, lámpara LED, sensor de peso, medidor de consumo de combustible, compatibilidad Omnicomm. |
| Gestión & Integración | Actualizaciones de firmware OTA, configurables vía SMS/GPRS/software del proveedor; admite conexión a servidores y plataformas de rastreo comunes. |

## Casos de uso

- Gestión de flotas — ubicación continua, telemetría e historial de rutas para camiones, furgonetas y flotas mixtas integradas en paneles de Plaspy.
- Antirrobo e inmovilización — alarmas de puerta/apertura, alertas de pérdida de alimentación externa y flujos de inmovilización basados en relé para asegurar los vehículos.
- Monitoreo de combustible y análisis de consumo — soporte RS232 para sensores de combustible Omnicomm y otros, más entradas analógicas para telemetría detallada de combustible.
- Protección perimetral y de activos — geocercas, remolque y detección de vibración \(temblor\) para detectar movimientos no autorizados.
- Cadena de frío / monitorización de temperatura — entrada de sensor de temperatura 1-wire y soporte de sensores seriales para telemetría ambiental en los informes de Plaspy.

## Por qué elegir este rastreador con Plaspy

El AT07-4G está diseñado para ofrecer seguimiento GPS fiable y telemetría rica donde la disponibilidad y la flexibilidad de periféricos son importantes. Como rastreador GPS compatible con Plaspy, proporciona fijaciones GNSS rápidas, reporting configurable y almacenamiento local de datos para mantener la continuidad de los registros durante pérdidas transitorias de red. Su amplio rango de potencia, batería de respaldo tolerante a altas temperaturas y su formato robusto lo hacen adecuado para entornos exigentes en vehículos.

Para flotas centradas en monitoreo de combustible, medidas antirrobo y telemetría de sensores integrada, el AT07-4G ofrece un equilibrio práctico de entradas, conectividad serie y periféricos opcionales. Plaspy puede agregar la ubicación del rastreador, eventos de encendido/puerta, datos de combustible y alarmas en paneles, alertas e informes unificados, y puede correlacionar flujos de sensores externos \(incluidos sensores Bluetooth cuando exista un gateway del ecosistema\) con la telemetría del vehículo para obtener una visión operativa más completa. El resultado es una inteligencia de flota escalable y accionable, con controles anti-robo seguros y gestión remota a través de Plaspy.

