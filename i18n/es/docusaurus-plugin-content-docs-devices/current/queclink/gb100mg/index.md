---
slug: /queclink/gb100mg
id: gb100mg
sidebar_label: GB100MG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GB100MG

![GB100MG](./tracker.png)

El GB100MG de Queclink es un rastreador GPS compacto montado en la batería, diseñado para seguros basados en el uso \(UBI\) y telemática de flotas, y es compatible con Plaspy para una integración sencilla. Diseñado para una instalación rápida en menos de cinco minutos en el compartimento del motor, el GB100MG ofrece localización en tiempo real, telemetría de alta resolución y entrega fiable de mensajes sobre redes LTE Cat M1 / NB1 globales con respaldo 2G. Con antenas internas y una carcasa clasificada con IP67, está construido para operar de forma fiable bajo el capó de los vehículos modernos.

El GB100MG admite monitoreo avanzado del comportamiento del conductor y capturas de datos de accidentes, además de ofrecer conectividad BLE 4.2 para accesorios inalámbricos. Almacena hasta 10,000 mensajes y reporta ubicación y estado vía TCP, UDP o SMS, lo que lo hace adecuado para gestión de flotas, fluxos de anti-robo y telemática de seguros cuando se usa junto con la plataforma de Plaspy. Nota: GB100MG fue anunciado como descontinuado \(Tiempo de descontinuación: 2022.9\); Queclink ofrece una garantía de un año y soporte técnico de por vida para clientes afectados y recomienda el GB130MG como sustituto actual.

## Aspectos clave

- Rastreador GPS compatible con Plaspy optimizado para UBI y telemática de flotas — permite seguimiento en tiempo real e integración de telemetría.
- Conectividad global LTE Cat M1 / NB1 con respaldo 2G EGPRS para cobertura amplia y entrega de datos confiable.
- Carcasa IP67 resistente y compacta con antenas internas para una instalación rápida en menos de cinco minutos en el compartimento del motor.
- Acelerómetro de 6 ejes de alta resolución con muestreo de hasta 1,600 Hz para detección precisa de colisiones y reconstrucción.
- Soporte BLE 4.2 para sensores y accesorios Bluetooth para ampliar la telemetría \(temperatura, puertas, sensores de carga, etc.\).
- Gran búfer \(hasta 10,000 mensajes\) y múltiples modos de reporte \(programados, por distancia y por kilometraje\) para una captura de datos de flota fiable.
- Precisión GNSS autónoma por debajo de 2.5 m CEP \(receptor Qualcomm\) con TTFF rápido para una localización en tiempo real fiable.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el GB100MG transmite en tiempo real la ubicación, telemetría y datos de eventos a la nube de Plaspy \(o mediante lotes programados\), habilitando tableros en tiempo real, alertas y informes para gestores de flotas y aseguradoras. El dispositivo soporta transporte TCP, UDP y SMS, de modo que Plaspy puede ingerir datos incluso cuando el tráfico de datos está limitado. Plaspy aprovecha la telemetría de colisiones del GB100MG, eventos de comportamiento del conductor y entradas de sensores BLE para ofrecer información accionable para coaching, manejo de reclamaciones y flujos de trabajo anti-robo.

- Actualizaciones de ubicación y telemetría en tiempo real vía LTE Cat M1 / NB1 \(con respaldo 2G\)
- Trayectorias de acelerómetro de alta tasa y datos de detección de colisiones para reconstrucción de accidentes y soporte de reclamaciones
- Detección de ignición virtual usando señales de voltaje y acelerómetro — útil para reglas basadas en ignición y flujos de trabajo de inmovilizador cuando se integra con Plaspy
- Alarma de remolque y monitoreo de ignición apagada para detectar movimientos no autorizados y activar alertas anti-robo
- Lecturas de sensores BLE \(sensores inalámbricos\) para extender la telemetría de vehículos hacia monitorización de carga, temperatura o proximidad
- Mensajería en búfer \(hasta 10,000 mensajes\) con disparadores de reporte flexibles \(tiempo, distancia, kilometraje\)

## Visión técnica

| Conectividad | LTE Cat M1 \(eMTC\) y Cat NB1 \(NB-IoT\) con respaldo EGPRS \(GPRS/EDGE\) 2G |
| --- | --- |
| Bandas | eMTC/NB1: B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B25/B28; EGPRS: 850/900/1800/1900 MHz \(GPRS/EDGE multi-slot class 33\) |
| Potencia y batería | Rango de tensión de funcionamiento 8–32 V DC; batería NiMH interna de respaldo de alta temperatura, 200 mAh \(soporta operación durante pérdida de energía\) |
| Interfaces | Antenas internas para celular, GNSS y Bluetooth; no se documentan puertos de antena externa |
| GNSS | Receptor GNSS Qualcomm; precisión de posición autónoma \< 2.5 m CEP; TTFF: ~31 s \(frío\), 21 s \(tibio\), 3 s \(caliente\) |
| Bluetooth | BLE 4.2 para sensores y accesorios Bluetooth |
| Informes y Protocolos | Informes por TCP, UDP y SMS; informes programados, por distancia y por kilometraje; búfer de hasta 10,000 mensajes |
| Sensores | Acelerómetro incorporado de 6 ejes con muestreo hasta 1,600 Hz para datos de colisión y detección de comportamiento de conducción |
| Físico y ambiental | Dimensiones: 134.6 × 67.5 × 14.8 mm; Peso: 130 g; carcasa IP67; Temperatura de operación -30°C a +70°C; Almacenamiento -40°C a +70°C; Humedad 0–95% sin condensación |
| Indicadores y Certificaciones | LEDs: GNSS, PWR, CELL. Certificaciones: FCC, CE, Verizon, PTCRB, AT&T |
| Gestión remota | No especificado en la documentación del dispositivo proporcionada |

## Casos de uso

- Programas de seguros basados en el uso \(UBI\) — recopilan comportamiento del conductor, telemetría de colisiones y kilometraje para apoyar la puntuación de riesgo y las primas.
- Gestión de flotas y coaching de conductores — monitorear frenadas bruscas, aceleración, ralentí y kilometraje para optimizar operaciones y seguridad.
- Reconstrucción de accidentes y soporte de reclamaciones — muestreo de acelerómetro de alta tasa ofrece trazas detalladas de eventos de choque para aseguradoras e investigadores.
- Anti-robo y detección de remolque — alarmas de ignición apagada y reporte en búfer ayudan a detectar movimientos no autorizados y a alertar; puede alimentar flujos de trabajo del inmovilizador mediante reglas de Plaspy.
- Integración de sensores Bluetooth — ampliar la telemetría del vehículo con accesorios BLE para monitorización de carga, temperatura o detección de proximidad.

## Por qué elegir este rastreador con Plaspy

El GB100MG ofrece un conjunto de características centrado para empresas que implementan UBI y telemática de flotas, que requieren seguimiento en tiempo real sólido, datos de colisiones de alta fidelidad y modos de informe flexibles. Sus antenas internas y su carcasa con clasificación IP67 simplifican la instalación en el compartimento del motor, reduciendo el tiempo de inactividad del vehículo y el costo de instalación. Combinado con Plaspy, las flotas y las aseguradoras obtienen acceso a paneles en tiempo real, alertas basadas en reglas y telemetría histórica que respaldan programas de seguridad, medidas anti-robo y telemetría operativa.

Como el GB100MG está certificado por importantes reguladores \(FCC, CE, Verizon, PTCRB, AT&T\) y utiliza un acelerómetro de alta tasa además de soporte BLE, sigue siendo una opción fiab le para instalaciones existentes. Sin embargo, tenga en cuenta que el GB100MG ha entrado en estado de descontinuación \(Tiempo de descontinuación: 2022.9\). Queclink continúa ofreciendo una garantía de un año y soporte técnico de por vida para clientes afectados y recomienda el GB130MG como la alternativa moderna para implementaciones nuevas. Para los clientes actuales de Plaspy, GB100MG ofrece un rendimiento probado como rastreador GPS, telemetría fiable y compatibilidad directa con Plaspy para la gestión de flotas, seguimiento en tiempo real y telemática de seguros.

