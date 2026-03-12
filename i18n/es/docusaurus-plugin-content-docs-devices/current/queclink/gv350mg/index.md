---
slug: /queclink/gv350mg
id: gv350mg
sidebar_label: GV350MG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GV350MG

![GV350MG](./tracker.png)

El GV350MG es un rastreador vehicular compacto LTE Advanced diseñado para gestión profesional de flotas, logística de cadena de frío y monitoreo de transporte. Compatible con Plaspy listo para usar, el GV350MG ofrece seguimiento en tiempo real fiable, integración robusta de bus CAN e telemática extensa para vehículos comerciales en todo el mundo, con conectividad LTE Cat M1/NB1 y respaldo 2G para cobertura continua.

La unidad combina un receptor GNSS u-blox de alta sensibilidad, soporte completo de CAN 2.0A/B y SAE J1939, puertos RS232 y múltiples E/S para recoger telemetría de ubicación, motor y sensores. Cuando se empareja con Plaspy, el GV350MG ofrece alertas oportunas, aplicación de geocercas, datos de comportamiento de conducción y almacenamiento local en búfer de hasta 10,000 mensajes — todo ello esencial para la gestión de flotas escalable, protección antirrobo y flujos de monitoreo de combustible.

## Aspectos clave

- Compatible con Plaspy: seguimiento en tiempo real fluido e integración telemática a través de transporte TCP/UDP/SMS y generación de informes programados.
- LTE Cat M1 y NB1 a nivel global con respaldo EGPRS \(2G\) para una amplia cobertura y mayor resiliencia de conectividad.
- GNSS u-blox de alta sensibilidad \(rastreo −162 dBm\) con precisión de posición &lt; 2.5 m CEP para servicios de ubicación precisos.
- Integración completa del vehículo: CAN 2.0A/B y SAE J1939, dos puertos RS232, múltiples E/S digitales y salida con latching para monitorización de encendido y alarmas.
- Diseñado para flotas comerciales: rango de tensión DC 8–32 V, batería de respaldo de 250 mAh y temperatura de funcionamiento −30 °C a +80 °C.
- Funciones telemáticas avanzadas: alarmas de geocerca, detección de remolque y de colisiones, monitorización del comportamiento de conducción y soporte para sensores de combustible dual.
- Preparado para accesorios: admite canales de temperatura 1-wire, cámaras externas, Garmin FMI y extensores de E/S para despliegues personalizados.

## Cómo funciona con Plaspy

Plaspy procesa la ubicación del GV350MG y la telemetría del vehículo para ofrecer un panel unificado, alertas e informes. El dispositivo transmite de forma continua las fijaciones GNSS, parámetros del bus CAN y eventos de E/S a Plaspy mediante transporte seguro TCP/UDP o SMS. Plaspy aplica entonces reglas para geocercas, informes programados y alarmas, posibilitando control operativo en tiempo real y análisis histórico para la gestión de flotas y la logística de cadena de frío.

- Actualizaciones de ubicación y telemetría en tiempo real: posición GNSS, velocidad, rumbo y flujo de datos CAN con marca de tiempo hacia Plaspy para seguimiento en vivo y reproducción.
- Estado de encendido y alarmas: entradas digitales configurables entregan eventos de encendido, puerta o alarma a Plaspy para flujos de trabajo de ruta y seguridad.
- Monitoreo de combustible: soporte para sensores de combustible dual proporciona telemetría de nivel de combustible a Plaspy para monitoreo y detección de robo de combustible.
- Capacidad de inmovilización remota: control OTA de salidas digitales permite funciones de inmovilización remota o desactivación del motor cuando se configure.
- Sensores Bluetooth: el GV350MG está optimizado para integraciones cableadas en vehículos y sensores 1-wire; los periféricos Bluetooth pueden utilizarse mediante gateways Bluetooth externos cuando sea necesario \(no dispone de BLE integrado\).

## Resumen técnico

| Conectividad | LTE Cat M1 \(eMTC\) y NB1 \(NB-IoT\) con respaldo EGPRS \(GPRS/EDGE\) 2G |
| --- | --- |
| Bandas / Velocidades de datos | EGPRS: 850/900/1800/1900 MHz; eMTC subida/bajada hasta 375 Kbps; NB1 DL 32 Kbps / UL 70 Kbps |
| Alimentación y batería | Tensión de operación 8–32 V DC; batería interna de respaldo Li-Polymer de 250 mAh |
| Interfaces | CAN 2.0A/B, SAE J1939; 2 × RS232; múltiples entradas/salidas digitales \(incluida salida latching\); E/S configurables \(analógicas o open-drain\); hasta 8 × canales de temperatura 1-wire / iButton; mini USB |
| GNSS | Receptor All-in-One de u-blox; rastreo −162 dBm; precisión de posición &lt;2.5 m CEP; antena interna de parche GNSS, conector SMA GNSS externo opcional |
| Bluetooth | No Bluetooth integrado; admite sensores de temperatura 1-wire y puede emparejarse con gateways Bluetooth externos cuando sea necesario |
| Gestión remota | Control OTA de salidas digitales, actualizaciones de firmware vía mini USB \(depuración/actualización\); almacenamiento local en búfer de hasta 10,000 mensajes |
| Condiciones de operación | Temperatura de operación −30 °C a +80 °C; diseñado para entornos de vehículos comerciales |
| Factor de forma y antenas | Antenas internas celular y GNSS de parche; conector SMA GNSS externo opcional; formato compacto de rastreador vehicular |
| Certificaciones | FCC, Verizon, CE, E-Mark, Anatel, UKCA |

## Casos de uso

- Antirrobo de flota e inmovilización: control remoto de salidas más alarmas de geocerca y de remolque/colisión para flujos de recuperación de vehículos seguros.
- Logística de cadena de frío: sensores de temperatura 1-wire y GNSS preciso proporcionan telemetría de temperatura y visibilidad de la ubicación para remolques refrigerados.
- Gestión de combustible: compatibilidad con sensores de combustible dual junto con datos CAN ayuda a detectar pérdidas de combustible y optimizar el consumo.
- Comportamiento del conductor y seguridad: detección de colisiones, monitorización del comportamiento de conducción y reconstrucción de eventos para apoyar programas de seguridad y capacitación.
- Telemetría del vehículo e integración de cámaras: RS232, CAN y compatibilidad de accesorios permiten cámaras e integraciones OEM para telemática avanzada y responsabilidad.

## Por qué elegir este rastreador con Plaspy

El GV350MG está diseñado para operadores que requieren telemática fiable y precisa, con conectividad continua. Su conectividad principal LTE Cat M1/NB1 con respaldo EGPRS mantiene los vehículos en línea en zonas de cobertura variadas, mientras la GNSS u-blox de alta sensibilidad y el soporte CAN ofrecen telemetría accionable para la gestión de flotas, monitoreo de combustible y estrategias anti-robos. Con la integración de Plaspy, obtienes paneles centralizados, alertas configurables \(geocerca, remolque, colisión, alarmas de E/S\), informes programados y control remoto de salidas, lo que facilita una respuesta rápida, análisis de causa raíz y una implementación escalable en flotas comerciales. Las certificaciones y la compatibilidad de accesorios hacen del GV350MG una opción práctica para telemática global, logística de cadena de frío y entornos vehiculares exigentes.

