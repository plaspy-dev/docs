---
slug: /queclink/gv355ceu
id: gv355ceu
sidebar_label: GV355CEU
sidebar_class_name: menu_item_tracker
---
# QuecLink - GV355CEU

![GV355CEU](./tracker.png)

El Queclink GV355CEU es un rastreador GPS para vehículos LTE de alta precisión diseñado para aplicaciones exigentes de gestión de flotas y cumplimiento normativo. Como dispositivo compatible con Plaspy, el GV355CEU ofrece seguimiento en tiempo real fiable, telemetría completa del vehículo y recuperación remota de tacógrafo, de modo que las flotas pueden supervisar la ubicación del vehículo, las horas del conductor y datos diagnósticos críticos desde una única plataforma.

Construido para flotas mixtas y uso intensivo, el GV355CEU combina conectividad LTE Cat‑1 con respaldo 2G, un motor GNSS de u‑blox y amplio soporte de interfaces de vehículo \(dual CAN, J1708, K‑Line y OBDII\). Cuando se integra con Plaspy, este rastreador permite una precisión de posición continua por debajo de 2 m, descargas automáticas de archivos DDD desde tacógrafos compatibles y alertas accionables para anti‑robo, comportamiento del conductor y flujos de trabajo de mantenimiento.

## Puntos destacados

- Rastreador GPS compatible con Plaspy que ofrece seguimiento en tiempo real fiable y visibilidad de la gestión de la flota.
- Soporte avanzado de tacógrafo — descarga remota de archivos DDD para horas del conductor y flujos de cumplimiento.
- Interfaces dual CAN, J1708 y OBDII para telemetría enriquecida y extracción de códigos DTC \(diagnóstico\).
- GNSS de alta precisión \(GPS/GLONASS/Galileo/BeiDou\) con precisión autónoma \< 2 m para rutas precisas y geocercas.
- Soporte BLE 5.2 y 1‑Wire para sensores Bluetooth, sondas de temperatura e integración de identificación del conductor \(iButton\).
- Formato compacto y robusto con antenas internas y batería de respaldo para mantener los informes durante cortes de energía.
- Conjunto de eventos y alarmas: geocerca, alarma de remolque, detección de conducción agresiva/colisión y alarmas de entrada configurables para protección antirrobo.

## Cómo funciona con Plaspy

Cuando se combina con Plaspy, el GV355CEU transmite la ubicación y la telemetría del vehículo a la plataforma a través de LTE/2G mediante TCP/UDP o SMS. Plaspy ingiere posiciones GNSS, parámetros del bus CAN y archivos DDD de tacógrafo para que los gestores de flota obtengan una visión unificada de la ubicación del vehículo, las horas del conductor, diagnósticos y eventos de estado. Las alertas e informes se generan en Plaspy a partir de eventos del dispositivo, informes programados y disparadores de geocerca.

- Actualizaciones en tiempo real de ubicación y telemetría transmitidas a Plaspy para seguimiento en vivo y reproducción histórica.
- Descarga remota de archivos DDD de tacógrafos D8 y tacógrafos con interfaz CAN para informes de cumplimiento.
- Estado de ignición y entradas digitales/analógicas \(puertas, alarmas, PTO\) utilizado por Plaspy para activar reglas y flujos de trabajo.
- Monitoreo de combustible y parámetros del motor disponibles a través de CAN/OBDII cuando el vehículo expone esas señales, habilitando monitoreo de combustible e informes de eficiencia.
- Control remoto de salidas para admitir flujos de inmovilización o corte del motor cuando se integra mediante comandos de Plaspy y salidas del dispositivo.
- Sensores Bluetooth y sondas 1‑Wire alimentan Plaspy con datos de temperatura, identificación del conductor y datos de accesorios para la gestión de carga o conductor.

## Resumen técnico

| Conectividad | LTE Cat 1 con respaldo 2G; transmisión TCP/UDP/SMS |
| --- | --- |
| Bandas | LTE‑FDD: B1/B2/B3/B4/B5/B7/B8/B20/B28; GSM/GPRS/EDGE como respaldo |
| Alimentación y batería | Amplio rango de voltaje de operación 8–32 V DC; batería de respaldo Li‑Polímero interna de 250 mAh |
| Interfaces | 1 × RS232, 1 × RS485, dual CAN \(vehículo pesado y ligero\), K‑Line \(D8 tacógrafo\), mini‑USB, 1‑Wire, múltiples entradas digitales y analógicas, salida digital con enclavamiento, puerto I/O configurable |
| GNSS | Receptor GNSS u‑blox \(GPS/GLONASS/Galileo/BeiDou\); precisión de posición autónoma \< 2 m |
| Bluetooth | BLE 5.2 para identificación del conductor, sensores de temperatura y accesorios BLE |
| Gestión remota | Descarga remota de tacógrafos y control de salidas; mini‑USB para configuración y firmware; OTA control de salidas del dispositivo |
| Formato | Compacto: 94 × 58.5 × 21 mm; peso 92 g; antenas internas para celular, GNSS y BLE; indicadores LED para estado de señal celular, GNSS, energía y tacógrafo/CAN |

## Casos de uso

- Cumplimiento de flota y gestión de tacógrafos: automatizar la recuperación de DDD y la generación de informes de horas del conductor para auditorías regulatorias.
- Antirrobo y recuperación de la flota: alertas de geocerca, monitorización de la ignición y control remoto de salidas ayudan a disuadir robos y permiten flujos de inmovilización.
- Telemetría de flota mixta: recopilar parámetros del motor, DTCs y datos de combustible de vehículos pesados y ligeros vía J1939/CAN y OBDII para la planificación de mantenimiento.
- Monitoreo de cadena de frío y carga: integrar sensores de temperatura 1‑Wire y BLE para rastrear las condiciones de la carga junto con la posición GPS en Plaspy.
- Identificación del conductor y seguimiento de comportamiento: identificación del conductor por BLE y detección de conducción brusca respaldan la conciliación de nómina y programas de entrenamiento en seguridad.

## Por qué elegir este rastreador con Plaspy

El GV355CEU está diseñado para flotas que requieren un rendimiento fiable de rastreador GPS, además de datos profundos del vehículo, todo accesible desde Plaspy para una gestión centralizada. Su amplio soporte de protocolos \(dual CAN, J1708, K‑Line y OBDII\), GNSS de alta precisión y conectividad LTE aseguran un seguimiento en tiempo real continuo y telemetría enriquecida. Los usuarios de Plaspy obtienen descargas automáticas de DDD de tacógrafos, alertas configurables \(geocerca, remolque, batería baja, choque\) y control remoto de salidas para respaldar procedimientos de inmovilización y antirrobo.

Optar por el GV355CEU junto con Plaspy ofrece una solución telemática escalable que reduce procesos manuales, mejora la seguridad de la flota, facilita el cumplimiento normativo y permite obtener insights operativos como el monitoreo de combustible y el mantenimiento predictivo cuando el CAN del vehículo expone esos parámetros. Con sensores BLE, identificación del conductor y un formato compacto, preparado para uso en vehículos, este rastreador de Queclink está optimizado para la gestión moderna de flotas, la recuperación de vehículos robados y las necesidades de telemetría de extremo a extremo.

