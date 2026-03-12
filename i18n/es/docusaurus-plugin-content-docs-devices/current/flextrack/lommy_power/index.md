---
slug: /flextrack/lommy_power
id: lommy_power
sidebar_label: Lommy Power
sidebar_class_name: menu_item_tracker
---
# Flextrack - Lommy Power

![Lommy Power](./tracker.jpg)

Lommy Power es un rastreador GPS cableado compacto diseñado para el monitoreo continuo en tiempo real de maquinaria y equipos pesados. Compatible con Plaspy de serie, Lommy Power combina hardware robusto con clasificación IP65, soporta GNSS multiconstelación y comunicaciones inteligentes 4G + 2G, de modo que flotas y contratistas pueden confiar en una telemetría ininterrumpida y en datos de posición precisos para la gestión de flotas, protección antirrobo e informes operativos.

Construido para entornos exigentes en construcción, agricultura, silvicultura y otras aplicaciones de gran rendimiento, Lommy Power se alimenta directamente de la batería del vehículo o máquina \(5–40 V\) para garantizar un monitoreo persistente sin mantenimiento de una batería interna. Cuando se integra con Plaspy, el dispositivo proporciona datos de ubicación, movimiento, ignición y horas de operación en una plataforma centralizada para alertas, geocercas, análisis de utilización e informes preparados para cumplimiento.

## Key Highlights

- Alimentación cableada continua \(5–40 V\) elimina el tiempo de inactividad causado por baterías internas agotadas; ideal para el seguimiento de activos a largo plazo y la gestión de flotas.
- Formato compacto y de fácil ocultamiento \(54 × 44 × 19 mm, 42 g\) con carcasa IP65 y un amplio rango de temperaturas para operación fiable en el campo.
- GNSS multiconstelación preciso \(GPS, GLONASS, GALILEO, BEIDOU, QZSS\) con soporte SBAS para una precisión de posición de hasta unos metros.
- 4G LTE Cat M1 inteligente \(B3/B8/B20\) con respaldo 2G cuádruple-banda y protocolos UDP/SMS para una conectividad robusta en áreas con cobertura mixta.
- Lógica de informes sensible a la energía: actualizaciones frecuentes cuando la ignición/entrada auxiliar está activa; informes de menor frecuencia cuando está inactivo, para equilibrar el seguimiento en tiempo real y la eficiencia de datos.
- Acelerómetro de 3 ejes y detección de movimiento integrados para alertas disparadas por movimiento, detección de infracciones de geocerca y flujos de trabajo anti-robo.
- Instalación simple e integración con plataformas Flextrack \(TrackEye, LommyFleet\) o sistemas de terceros mediante APIs y soluciones de marca blanca.

## How It Works with Plaspy

Cuando se conecta a Plaspy, Lommy Power transmite GNSS y telemetría sobre LTE/2G a los puntos de ingesta de Plaspy mediante UDP o SMS. Plaspy normaliza los datos del dispositivo, aplica reglas configurables y geocercas, y ofrece visualización en tiempo real, alertas e informes históricos para las operaciones de la flota y la monitorización anti-robo. Los modos de informe inteligentes del dispositivo reducen las transmisiones innecesarias, al tiempo que aseguran actualizaciones oportunas durante movimientos o eventos de ignición.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy para mapas en vivo y reproducción de historial.
- Detección de ignición y entrada auxiliar — Plaspy recibe eventos de inicio/parada para la utilización y la programación de mantenimiento.
- Telemetría de horas de operación basada en la medición de la corriente de la batería para un uso preciso del equipo e informes de facturación.
- Informes activados por movimiento y alertas de geocerca para respaldar notificaciones de antirrobo y uso indebido.
- Plaspy puede agregar entradas adicionales \(sensores de monitoreo de combustible, sensores Bluetooth de dispositivos compatibles, flujos de trabajo del inmovilizador\) para que los operadores obtengan una visión completa de la telemetría, incluso si esos sensores provienen de otros equipos.

## Technical Overview

| Conectividad | 4G LTE Cat M1 \(FDD\) con respaldo 2G cuádruple-banda |
| --- | --- |
| Bandas | LTE Cat M1 B3 / B8 / B20; respaldo a 2G cuádruple-banda \(GSM\) |
| Protocolos | UDP, SMS |
| Alimentación & Batería | Dispositivo cableado alimentado desde la batería de la máquina, rango de operación 5–40 V; sin batería interna principal |
| Interfaces | Detección de ignición/arranque-parada; entrada auxiliar opcional \(tercer cable\); medición de corriente de la batería para horas de operación |
| GNSS | Multiconstelación: GPS, GLONASS, GALILEO, BEIDOU, QZSS; SBAS \(WAAS, EGNOS, MSAS, GAGAN\); precisión de posición de hasta unos metros |
| Antenas | Antena GNSS y LTE/GSM integrada \(la mejor recepción cuando el lado de la etiqueta y el borde delgado están orientados hacia afuera\) |
| Memoria & Sensores | 2 MB de memoria flash interna; acelerómetro de 3 ejes para detección de movimiento |
| Sensibilidad & Canales | Sensibilidad de seguimiento hasta -166 dBm; 33 canales de seguimiento, 99 de adquisición, 210 canales PRN |
| Lógica de Reporting | Informa cada 2 minutos cuando la ignición/aux está activa; informa cada 24 horas cuando el motor está apagado y no hay movimiento; el movimiento con el equipo apagado vuelve a informes cada 2 minutos |
| Ambiental | Clasificado IP65; rango de temperatura de operación -30 a +60 °C |
| Dimensiones & Peso | 54 × 44 × 19 mm; 42 g |
| Certificaciones & Seguridad | CE, \(E pendiente\), RoHS, WEEE; el manejo del servidor y de los datos sigue referencias ISAE3402 \(ISO 27002\) |
| Integraciones | Soporte nativo para plataformas Flextrack \(TrackEye, LommyFleet\); APIs abiertas y opciones de marca blanca para plataformas de terceros como Plaspy |
| Bluetooth | No se reporta Bluetooth para esta unidad; Plaspy puede combinar datos de sensores Bluetooth de dispositivos periféricos compatibles cuando estén presentes |

## Use Cases

- Gestión de flotas y equipos pesados — telemetría continua para utilización, programación y facturación basada en horas de operación.
- Detección de antirrobo y uso indebido — alarmas de movimiento, infracciones de geocerca y eventos de ignición enviados a Plaspy para una respuesta rápida.
- Monitorización de maquinaria de construcción, agricultura y silvicultura — diseño robusto y amplio rango de temperaturas para entornos hostiles.
- Planificación de mantenimiento y optimización de disponibilidad — datos precisos de inicio/parada y horas de operación para planificar intervalos de servicio y reducir tiempos de inactividad.
- Soluciones de telemetría complementarias — combine los datos de Lommy Power con sensores de monitoreo de combustible o sensores Bluetooth en Plaspy para obtener una visibilidad más completa de los activos.

## Why Choose This Tracker with Plaspy

Lommy Power ofrece un equilibrio práctico entre hardware robusto, operación cableada continua y posicionamiento multiconstelación que se ajusta a las demandas de la gestión de flotas y la monitorización de maquinaria pesada. Al integrarse con Plaspy, los operadores obtienen un seguimiento en tiempo real fiable, conocimientos impulsados por telemetría y flujos de trabajo de anti-robo configurables sin necesidad de frecuentes servicios de batería. La lógica de informes inteligente del dispositivo minimiza el uso de datos mientras garantiza que los eventos críticos se reporten de inmediato, y las APIs abiertas, junto con integraciones nativas de Flextrack, hacen que el despliegue y la escalabilidad sean sencillos. Elija Lommy Power con Plaspy para un rastreo GPS fiable, informes claros de horas de operación y un manejo de datos seguro y alineado con normas que respalda la eficiencia de la flota y la protección contra robos.

