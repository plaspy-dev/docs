---
slug: /concox/vl103d
id: vl103d
sidebar_label: VL103D
sidebar_class_name: menu_item_tracker
---
# Concox - VL103D

![VL103D](./tracker.png)

El VL103D es un terminal compacto de vehículo LTE GNSS diseñado para una instalación discreta en motocicletas, automóviles de pasajeros y vehículos comerciales ligeros. Compatible con Plaspy de fábrica, el VL103D combina un hardware robusto, preparado para la carretera, con una conectividad 4G LTE confiable \(con respaldo de 2G GSM\) para ofrecer seguimiento en tiempo real continuo, fijaciones de posición rápidas y la telemetría del vehículo necesaria para procesos de recuperación, anti‑robos y gestión básica de flotas.

El VL103D está diseñado para entornos automotivos exigentes: resistencia a polvo y agua IP66, un amplio rango de entrada de 9–90 VDC, una batería de respaldo industrial de 270 mAh y sensores de movimiento integrados, lo que lo convierte en un rastreador GPS práctico para la recuperación de vehículos robados, monitoreo del comportamiento del conductor y desactivación remota cuando se integra a través de la plataforma Plaspy.

## Aspectos clave

- Rastreador GPS compatible con Plaspy — integra la posición GNSS y la telemetría del vehículo en Plaspy para seguimiento en tiempo real y alertas.
- Conectividad celular fi able — LTE Cat 1 con respaldo GSM \(E-GSM900/DCS1800\) para una amplia cobertura y continuidad.
- Diseño robusto listo para vehículos — carcasa con clasificación IP66, formato compacto \(92 × 40 × 20 mm\) y un rango de voltaje de operación amplio \(9–90 VDC\).
- GNSS de alta sensibilidad — GPS + BDS + LBS con precisión CEP \< 2.5 m y TTFF rápido para fijaciones de ubicación rápidas.
- Interfaces de integración con el vehículo — entrada ACC de encendido, salida digital/relé para corte remoto \(inmovilizador\), entrada SOS configurable y ADC de 0–5 V para sensores analógicos.
- Inteligencia de movimiento a bordo — acelerómetro de 3 ejes que habilita telemetría de comportamiento de conducción \(aceleraciones bruscas, frenado, giros\) y detección de colisiones/eventos.
- Energía de respaldo e indicadores de estado — batería de respaldo de Li‑Polymer de 270 mAh integrada y indicadores LED para GNSS, celular y estado de energía.

## Cómo funciona con Plaspy

Cuando se conecta a Plaspy, el VL103D transmite fijaciones GNSS y telemetría del vehículo a la plataforma vía LTE \(con respaldo de GSM\), lo que habilita mapas en tiempo real, alertas y reproducción de rutas históricas. Plaspy ingiere datos de posición, velocidad, alarmas y sensores desde el dispositivo y los correlaciona con reglas configurables para gestión de flotas, respuesta ante robos y generación de informes telemáticos.

- Actualizaciones de ubicación y telemetría en tiempo real — las posiciones GNSS se envían vía LTE/GSM a Plaspy para seguimiento continuo y conciencia situacional.
- Control de encendido e inmovilizador — entrada ACC \(encendido\) y salida digital de relé soportan monitorización del estado de encendido y acciones de corte remoto/inmovilizador a través de Plaspy.
- Soporte para sensores analógicos — la entrada ADC de 0–5 V puede transmitir datos de sensores analógicos \(p. ej., combustible\) a Plaspy para telemetría y flujos de monitoreo de combustible.
- Informes de eventos y alarmas — eventos de movimiento, exceso de velocidad, entrada/salida de geocerca y detección de batería son reportados a Plaspy para alertas inmediatas y respuestas automáticas.
- Telemetría de comportamiento de conducción — notificaciones de eventos bruscos basadas en el acelerómetro \(aceleración, frenado, giro\) alimentan puntuaciones de conductor e informes de seguridad en Plaspy.

## Visión general técnica

| Conectividad | LTE Cat 1 \(4G\) con respaldo GSM \(2G\) |
| --- | --- |
| Bandas | GSM: E‑GSM900 / DCS1800; LTE-FDD: B1 / B3 / B7 / B8 / B20 / B28; LTE-TDD: B34 / B38 / B40 |
| Alimentación & Batería | Rango amplio de entrada 9–90 VDC; batería de respaldo industrial Li‑Polymer de 270 mAh integrada |
| Interfaces | RS485; entrada digital \(ACC\); entrada SOS configurable; salida digital \(relé/corte remoto\); ADC de 0–5 V para sensores analógicos |
| GNSS | GPS + BDS + LBS; precisión de posicionamiento CEP \< 2.5 m; TTFF: arranque en caliente promedio ≤1 s; arranque en frío promedio ≤32 s |
| Sensores | Acelerómetro de 3 ejes para detección de eventos bruscos y detección de colisiones |
| Indicadores LED | GNSS \(azul\), celular \(verde\), energía \(rojo\) |
| Bluetooth | No especificado / no se reporta BLE integrado |
| Gestión Remota | No especificado en los detalles del dispositivo \(consulte Plaspy para OTA/FOTA o flujos de configuración\) |
| Factor de Forma | Terminal compacto para instalación en vehículo — 92.0 × 40.0 × 20.0 mm; peso 55 g; IP66; rango de operación −20 °C a +70 °C |

## Casos de uso

- Recuperación de vehículos robados — conectividad LTE/GSM fiable, instalación compacta y capacidad de corte remoto que aceleran los procesos de recuperación e inmovilización cuando se gestionan a través de Plaspy.
- Gestión de flotas para vehículos comerciales ligeros — seguimiento en tiempo real, telemetría del comportamiento del conductor y alertas de geocerca respaldan la asignación de pedidos, el cumplimiento de rutas y programas de seguridad.
- Anti‑robo e inmovilizador remoto — salida de relé/corte remoto y eventos de movimiento/alarma proporcionan controles prácticos de anti‑robo cuando se configuring en Plaspy.
- Telemetría de sensores analógicos \(por ejemplo, monitoreo de combustible\) — la entrada ADC de 0–5 V permite la integración de sensores del vehículo para monitoreo de nivel de combustible u otros señales analógicas en los informes de Plaspy.
- Motocicletas e instalaciones discretas — su tamaño compacto y la carcasa con clasificación IP66 lo hacen adecuado para montajes encubiertos en motocicletas y vehículos pequeños.

## Por qué elegir este rastreador con Plaspy

Emparejar el VL103D con Plaspy ofrece un equilibrio pragmático entre conectividad, precisión e integración con el vehículo para operadores que requieren un rastreo confiable de grado comercial. Las comunicaciones LTE Cat 1 del dispositivo con respaldo GSM y el GNSS de alta sensibilidad aseguran un seguimiento en tiempo real continuo, mientras que el amplio rango de voltaje y la clasificación IP66 simplifican la instalación en diferentes tipos de vehículos. La telemetría de acelerómetro a bordo, la entrada ADC para sensores analógicos y la salida de relé para corte remoto brindan a gestores de flotas y equipos de recuperación telemetría y control accionables. Integrado en Plaspy, el VL103D se convierte en parte de una solución escalable para gestión de flotas, respuesta ante robos, informes telemáticos y alertas operativas, ofreciendo el rastreo y control en tiempo real que esperan los operadores modernos.

