---
slug: /queclink/gv300can
id: gv300can
sidebar_label: GV300CAN
sidebar_class_name: menu_item_tracker
---
# QuecLink - GV300CAN

![GV300CAN](./tracker.png)

El GV300CAN de Queclink es un rastreador GPS para vehículos de tercera generación, diseñado para una gestión de flotas robusta, logística de cadena de frío y monitoreo del transporte. Listo para Plaspy desde el primer uso, el GV300CAN combina una posición GNSS fiable de un receptor u‑blox All‑in‑One con comunicación GSM/GPRS para ofrecer seguimiento en tiempo real, telemetría programada e informes basados en eventos para flotas y vehículos de alto valor.

Diseñado para integrarse, el GV300CAN soporta transporte TCP/UDP y SMS y el protocolo propietario @Track de Queclink, lo que permite a Plaspy ingerir ubicación, datos CANBus del vehículo, alarmas y telemetría de sensores. El conjunto de E/S ampliable, el soporte CAN/J1708 y el acelerómetro a bordo lo hacen práctico para flujos de trabajo anti‑robo, monitorización de combustible, detección de impactos y control remoto del inmovilizador cuando se gestiona a través de Plaspy.

## Aspectos destacados

- Dispositivo de seguimiento GPS compatible con Plaspy para un seguimiento preciso en tiempo real de vehículos y activos.
- Rendimiento GNSS de un receptor u‑blox All‑in‑One con precisión de posición \< 2,5 m CEP y sensibilidad de −162 dBm.
- GSM/GPRS cuádruple banda \(850/900/1800/1900 MHz\) con transporte TCP/UDP/SMS para telemetría continua y reportes programados.
- Soporte CANBus y J1708 para telemetría directa del vehículo — integre datos del motor, velocidad y diagnóstico en Plaspy.
- Amplio conjunto de alarmas que incluye geocerca, estacionamiento, remolque, detección de impactos y alertas de batería de respaldo baja para una respuesta oportuna ante incidentes.
- Detección del nivel de combustible y monitoreo de temperatura configurables vía sensores 1‑wire para apoyar la monitorización de la cadena de frío y la gestión del combustible.
- Control remoto de salidas digitales para flujos de inmovilizador y respuesta anti‑robo cuando se combina con el sistema de mando y control de Plaspy.
- Formato compacto y robusto con amplio rango de voltaje de operación \(8–32 V DC\) para instalaciones versátiles en vehículos.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el GV300CAN transmite posiciones GNSS, marcos CANBus y eventos de entradas digitales/analógicas a la plataforma de seguimiento e informes en tiempo real de Plaspy. Plaspy utiliza el transporte TCP/UDP o SMS del dispositivo para recibir actualizaciones programadas por tiempo, distancia o kilometraje, y para activar alertas y flujos de trabajo automatizados basados en la telemetría entrante.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy mediante TCP/UDP o SMS para seguimiento en tiempo real en el mapa.
- Captura de datos del vehículo CANBus/J1708 enviados a Plaspy para estado del motor, velocidad y telemetría diagnóstica.
- Monitoreo de combustible y telemetría de temperatura disponibles para Plaspy a través de entradas analógicas y sensores 1‑wire para la cadena de frío y la optimización del combustible.
- Control remoto del inmovilizador y salidas digitales: Plaspy puede emitir comandos para bloquear o desactivar vehículos cuando sea necesario.
- Soporte de antena Bluetooth \(BLE\) facilita la integración con sensores BLE y beacons cuando se use junto con la monitorización de Plaspy.

## Resumen técnico

| Conectividad | GSM/GPRS \(cuádruple banda\), transporte TCP/UDP/SMS; protocolo @Track de Queclink |
| --- | --- |
| Bandas | GSM cuádruple banda: 850/900/1800/1900 MHz \(GPRS, clase de ranuras múltiples 10\) |
| Alimentación & Batería | Voltaje de operación 8–32 V DC; batería interna de respaldo Li‑Polymer de 250 mAh; alarma de batería de respaldo baja |
| Interfaces | RS232 \(Molex de 16 pines\), 1 entrada digital positiva + 2 entradas digitales negativas, 1 entrada analógica \(0–12 V o 0–30 V seleccionable\), 1 salida digital + 1 salida digital en retención \(open drain, máx. 150 mA\), mini USB |
| GNSS | Receptor u‑blox All‑in‑One; sensibilidad de −162 dBm; precisión de posición \< 2,5 m CEP; soporte para antena GNSS interna/externa |
| Bluetooth | Soporte de antena GSM/BLE interna \(habilita integración de sensores BLE/beacons cuando se use\) |
| Gestión remota | Control remoto OTA de salidas digitales; mini USB para depuración y actualizaciones de firmware; soporte de protocolo para informes y comandos remotos |
| Formato | 80 × 48 × 25 mm; 72 g; temperatura de operación −30 °C a +80 °C \(almacenamiento −40 °C a +80 °C\) |
| Certificaciones y garantía | FCC, CE, E‑Mark, Anatel; garantía de un año para clientes afectados y soporte técnico de por vida de Queclink |

## Casos de uso

- Gestión de flotas: ubicación continua, eventos del conductor y telemetría CAN alimentan los paneles de Plaspy para el cumplimiento de rutas y análisis de utilización.
- Logística de cadena de frío: monitorización de temperatura mediante sensores 1‑wire y reportes programados permiten mantener visibles los envíos perecederos en Plaspy.
- Antirrobo e inmovilización: geocerca, remolque y alarmas de batería baja, además del control remoto de salidas digitales, permiten intervenciones rápidas a través de Plaspy.
- Monitoreo de combustible y telemetría: detección analógica del nivel de combustible y datos CAN ayudan a reducir pérdidas de combustible y a soportar el seguimiento de costos en los informes de Plaspy.
- Captura y reconstrucción de incidentes: acelerómetro de 3 ejes integrado y detección de impactos proporcionan datos de eventos para el análisis posterior al incidente.

## Por qué elegir este rastreador con Plaspy

El GV300CAN ofrece una mezcla equilibrada de hardware de grado automotriz y interfaces flexibles que lo convierten en una opción práctica para los clientes de Plaspy centrados en el seguimiento en tiempo real, telemetría y flujos de trabajo anti‑robo. Su soporte CAN/J1708 permite a Plaspy ingerir datos detallados del vehículo junto a las posiciones GNSS, mientras que alarmas y entradas configurables respaldan casos de uso desde monitoreo de temperatura de la cadena de frío hasta gestión de combustible e inmovilización. El formato compacto, el amplio rango de voltaje y un entorno operativo robusto facilitan la instalación en flotas mixtas.

Nota sobre el ciclo de vida: Queclink anunció una retirada de la red 2G \(End‑of‑Life\) para el GV300CAN; el cese de 2G se produjo en junio de 2022. Queclink ofrece una garantía de un año para clientes afectados y soporte técnico de por vida; el fabricante recomienda el GV350CEU como alternativa para escenarios de retirada de 2G. Los usuarios de Plaspy deben evaluar la compatibilidad de red y planes de migración como parte de los despliegues a largo plazo de la flota.

