---
slug: /queclink/gb130mg
id: gb130mg
sidebar_label: GB130MG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GB130MG

![GB130MG](./tracker.png)

El GB130MG es un rastreador GPS para vehículos compacto e impermeable con LTE, diseñado para implementaciones de seguro basado en el uso \(UBI\) y telemática de flotas a gran escala. Como rastreador compatible con Plaspy, ofrece datos de ubicación y movimiento de alta fidelidad, durabilidad robusta y una instalación rápida para ayudar a que flotas y aseguradoras implementen el seguimiento y la telemetría en tiempo real a gran escala.

Construido para entornos adversos, el GB130MG combina conectividad global LTE Cat M1 / NB2 con respaldo 2G, posicionamiento GNSS de múltiples constelaciones y BLE 5.2 para la integración de accesorios. Su carcasa IP67, la batería NiMH de respaldo interna para altas temperaturas y el acelerómetro de 6 ejes convierten este rastreador GPS en una opción fiable para analítica de choques, alertas antirrobo y gestión continua de la flota cuando se integra con la plataforma Plaspy.

## Puntos clave

- Rastreador GPS compatible con Plaspy optimizado para seguimiento en tiempo real y despliegues telemáticos a gran escala.
- Conectividad global LTE Cat M1 / NB2 con respaldo 2G para roaming amplio y comunicaciones celulares fiables.
- u‑blox All‑in‑One GNSS \(GPS, GLONASS, Galileo, BeiDou\) con precisión autónoma mejor que 2 m.
- Carcasa robusta con clasificación IP67 y batería NiMH de respaldo interna para montaje bajo el capó o expuesto.
- Acelerómetro de 6 ejes muestreando hasta 400 Hz para detección precisa de choques y reconstrucción de accidentes \(captura pre/post-evento\).
- BLE 5.2 para sensores Bluetooth e integraciones de accesorios, lo que habilita telemetría ampliada y monitoreo ambiental.
- Formato compacto y ligero para una instalación rápida y de bajo costo \(se puede instalar en menos de cinco minutos\).
- Certificaciones de operadores \(CE, FCC, PTCRB, T‑Mobile, Verizon, AT&T, USCC y otros\) para despliegues certificados por operadores de forma sencilla.

## Cómo funciona con Plaspy

El GB130MG se integra con Plaspy para transmitir la ubicación y la telemetría en casi tiempo real y alimentar los flujos de trabajo de la plataforma para la gestión de flotas, UBI y operaciones antirrobo. Plaspy ingiere las posiciones GNSS del dispositivo, los eventos de acelerómetro de alta frecuencia y los datos de sensores BLE para alimentar mapas en vivo, alertas e informes históricos.

- Actualizaciones de ubicación y telemetría en tiempo real: las posiciones GNSS y la telemetría del dispositivo se transmiten por LTE Cat M1 / NB2 \(con respaldo 2G\) a Plaspy.
- Eventos de choque y accidentes: el acelerómetro de 6 ejes de alta frecuencia captura datos previos y posteriores al evento para reconstrucción de accidentes y alertas automáticas de incidentes.
- Encendido real y encendido virtual: Plaspy puede utilizar señales de encendido derivadas del voltaje y del acelerómetro para determinar el estado del vehículo para la generación de informes de viaje y la detección de inactividad.
- Flujos de trabajo de remolque e inmovilización: la alarma de remolque en estado de encendido apagado y los flujos de trabajo del inmovilizador impulsados por la plataforma pueden implementarse a través de Plaspy cuando se empareja con los sistemas de control del vehículo.
- Sensores Bluetooth: BLE 5.2 permite la integración de sensores externos \(temperatura, puerta, carga\) para que Plaspy pueda correlacionar la telemetría de sensores con la ubicación y el comportamiento de conducción.
- Informes programados y basados en reglas: admite informes por tiempo, distancia o kilometraje y alertas de geocerca que Plaspy puede mostrar a operadores y titulares de pólizas.
- Múltiples canales de comunicación: los datos y alertas se entregan vía TCP, UDP o SMS, dependiendo de la disponibilidad de la red y la configuración de la plataforma.

## Resumen técnico

| Conectividad | LTE Cat M1 / NB2 \(global\), 2G fallback |
| --- | --- |
| Bandas | Bandas LTE y GSM comunes para despliegues globales \(certificadas por operadores\) |
| Potencia y batería | Tensión de funcionamiento 8–32 V DC; batería NiMH de respaldo interna para altas temperaturas \(200 mAh\) |
| Interfaces | Antenas internas celulares, GNSS y Bluetooth; indicadores LED para CEL, GNSS y PWR; capacidades de alarma de remolque y detección de encendido virtual \(voltaje y acelerómetro\) |
| GNSS | Receptor All‑in‑One de u‑blox que soporta GPS, GLONASS, Galileo, BeiDou; precisión autónoma \< 2 m; cold start ~29 s, warm start ~21 s, hot start ~1 s; sensibilidad de seguimiento -167 dBm |
| Sensores | Acelerómetro de 6 ejes muestreando hasta 400 Hz; captura hasta 15 segundos previos y posteriores al evento para reconstrucción de accidentes |
| Bluetooth | BLE 5.2 para conectividad de accesorios inalámbricos e integraciones IoT |
| Comunicaciones y protocolos | TCP, UDP, SMS transportados para telemetría y alertas |
| Certificaciones y cumplimiento | CE, FCC, PTCRB, T‑Mobile, Verizon, AT&T, USCC, E‑Mark, IC |
| Forma y entorno | Dimensiones 134.6 × 67.5 × 14.8 mm; peso 130 g; IP67; rango de temperatura de funcionamiento -30 °C a +70 °C \(almacenamiento -40 °C a +70 °C\) |

## Casos de uso

- Seguro basado en el uso \(UBI\): captura de GNSS de alta fidelidad y comportamiento de conducción para calcular puntuaciones de riesgo y activar primas basadas en el uso.
- Gestión de flotas y enrutamiento: seguimiento en tiempo real, informes programados y alertas de geocerca para el cumplimiento de rutas, despacho y seguimiento de la utilización.
- Flujos de anti-robo y recuperación: alarmas de remolque en estado de encendido apagado y flujos de inmovilizador impulsados por la plataforma ayudan a asegurar activos estacionados.
- Análisis de accidentes y soporte de reclamaciones: datos de acelerómetro a 400 Hz con captura previa y posterior al evento para reconstrucción de incidentes y procesamiento de reclamaciones respaldado por telemetría.
- Monitoreo de carga y activos con sensores: BLE 5.2 permite sensores de temperatura, puertas o movimiento para complementar la telemetría de ubicación en logística y protección de activos.

## Por qué elegir este rastreador con Plaspy

Cuando se necesita un rastreador GPS compatible con Plaspy que combine durabilidad, posicionamiento preciso y telemetría rica, el GB130MG destaca. Su carcasa impermeable IP67 y la batería de respaldo interna de alta temperatura permiten instalaciones en ubicaciones exigentes, mientras que el GNSS de u‑blox y la precisión de posición por debajo de 2 m ofrecen un seguimiento en tiempo real fiable. La captura de acelerómetro de alta tasa añade detalle forense para la detección de choques y la validación de reclamaciones, y BLE 5.2 amplía la telemetría mediante sensores Bluetooth.

Certificado para operadores principales y compatible con LTE Cat M1 / NB2 global con respaldo 2G, el GB130MG simplifica despliegues a gran escala y roaming. Integrado con Plaspy, ayuda a los operadores a implementar gestión de flotas, flujos de trabajo de telemetría para combustible y uso, respuestas ante robo y telemática de seguros con un menor costo de instalación y alta fidelidad de datos. Para empresas que requieren seguimiento GPS preciso, analítica de choques robusta y soporte de sensores flexible, el GB130MG ofrece una opción práctica y lista para operadores que escala con las capacidades de la plataforma de Plaspy.

