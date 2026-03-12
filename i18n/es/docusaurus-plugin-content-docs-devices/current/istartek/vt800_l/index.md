---
slug: /istartek/vt800_l
id: vt800_l
sidebar_label: VT800-L
sidebar_class_name: menu_item_tracker
---
# iStartek - VT800-L

![VT800-L](./tracker.jpg)

El VT800-L de iStartek es un rastreador GPS 4G CAT4 profesional diseñado para despliegues exigentes de gestión de flotas y anti-robo de vehículos. Compatible con Plaspy desde el primer uso, el VT800-L ofrece seguimiento en tiempo real confiable y telemetría completa para que los operadores puedan monitorizar la posición del vehículo, su estado y el comportamiento de conducción en entornos de red mixtos.

Diseñado para camiones, autobuses, taxis, flotas de alquiler y vehículos privados de alto valor, el VT800-L combina un receptor GNSS dual L76K GPS+BD de alta precisión con un módulo de comunicación 4G Quectel EC200A-CN y buffer de memoria flash de 128 Mbits. Esa combinación garantiza un flujo continuo de datos hacia Plaspy incluso en zonas con cobertura limitada y permite una planificación robusta, monitorización de rutas y una respuesta rápida ante robos.

## Aspectos destacados

- Compatible con Plaspy para integrarse sin problemas en los flujos de trabajo existentes de seguimiento en tiempo real y gestión de flotas.
- Conectividad 4G CAT4 \(Quectel EC200A-CN\) con soporte celular de múltiples modos para cobertura en grandes áreas y rápidas subidas/bajadas.
- GNSS de alta precisión \(GPS/BDS/QZSS\) con almacenamiento local \(memoria flash de 128 Mbit\) para conservar el historial ante interrupciones de cobertura.
- E/S abundantes y expansión: puertos RS232, entradas analógicas AD, múltiples entradas digitales y salidas de drenaje abierto de alto corriente para telemetría y accesorios.
- Telemática avanzada: monitorización del comportamiento de conducción \(aceleración brusca, frenadas bruscas y virajes, velocidad excesiva\), alarmas de manipulación y geocerca, y soporte de monitorización de temperatura para hasta ocho sensores.
- Monitoreo de combustible opcional mediante sensores capacitivos o ultrasonidos para el control de combustible de la flota y detección de anomalías.
- Factor de forma compacto y robusto con rango de entrada de 9–100V y batería interna de respaldo de polímero de alta temperatura de 500 mAh para operación ininterrumpida.

## Cómo funciona con Plaspy

El VT800-L ofrece actualizaciones continuas de posición y estado a Plaspy mediante su enlace de datos 4G y la capacidad de subida IP a dos servidores. Cuando el rastreador detecta la pérdida de red, la memoria flash integrada de 128 Mbit almacena la posición y la telemetría; la unidad envía automáticamente el historial almacenado a Plaspy cuando la conectividad se restablece. Plaspy ingiere registros de ubicación, alarmas y telemetría para proporcionar paneles en vivo, alertas y reproducción de rutas históricas.

- Ubicación y telemetría en tiempo real: posiciones GNSS, velocidad, rumbo y eventos del acelerómetro 3D alimentan a Plaspy para el seguimiento en vivo y el análisis de comportamiento.
- Eventos de manipulación y geocerca: alertas inmediatas permiten a Plaspy notificar al despacho o a los equipos de seguridad para la respuesta antirrobo.
- Carga de historial en búfer: los puntos almacenados se transmiten a Plaspy tras la reconexión, conservando registros de viaje precisos y logs de cumplimiento.
- Telemetría de sensores: entradas de temperatura \(hasta 8 sensores\) y datos opcionales de monitoreo de combustible se integran en los informes y paneles de Plaspy.
- Integración de periféricos: decodificadores RS232 conectados a RFID/iButton o OBD permiten reportar el ID del conductor y datos del motor a Plaspy para registros de conductor y diagnósticos del vehículo.

## Visión técnica

| Conectividad | 4G CAT4 \(Quectel EC200A-CN\), admite LTE-FDD, LTE-TDD, DC-HSPA+ y WCDMA |
| --- | --- |
| Bandas | LTE-FDD B1 / B3 / B8; LTE-TDD B34 / B38 / B40; WCDMA B1 / B8 |
| Velocidad de datos | LTE-FDD hasta 150 Mbps de descarga / 50 Mbps de subida \(capacidad del dispositivo\) |
| Alimentación y batería | Rango de entrada de potencia 9–100V; protección ante caídas de tensión; batería interna de respaldo de polímero de alta temperatura de 500 mAh |
| Interfaces | 2 × RS232, 2 × entradas analógicas AD, 3 × entradas digitales, 2 × salidas de drenaje abierto \(>500 mA\), interfaz 1-wire, ranura micro SIM, puerto de depuración micro USB, MIC externo y altavoz |
| GNSS | Receptor dual GPS + BDS L76K; admite posicionamiento GPS / BDS / QZSS |
| Almacenamiento | Memoria flash de 128 Mbit para registro en búfer y carga de historial |
| Sensores | Acelerómetro 3D para detección de comportamiento de conducción; admite hasta 8 sensores de temperatura \(1-wire\) |
| Procesador y Protocolo | MCU Cortex-M4 \(AT32F415RBT7\); nuevo protocolo iStartek |
| Antenas e indicadores | Conectores de antena GSM y GPS externos; dos LEDs \(azul, verde\) |
| Factor de forma | Caja compacta 72 × 61 × 24 mm; opciones de montaje magnético para instalaciones flexibles en vehículos/remolques |
| Gestión remota | Se describe subida a dos servidores por IP; gestión de firmware por FOTA/remota no especificada |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, cumplimiento de rutas y análisis del comportamiento de conducción para camiones, autobuses y taxis.
- Protección antirrobo: alarmas por manipulación y geocerca combinadas con actualizaciones de posición permiten una rápida recuperación y respuesta remota a incidentes.
- Cadena de frío y cargas sensibles a la temperatura: hasta ocho sensores de temperatura proporcionan telemetría a Plaspy para un monitorizado continuo de las condiciones.
- Monitoreo de combustible y control de costos: sensores de combustible capacitivos u ultrasonidos opcionales alimentan datos de nivel de combustible y consumo a los informes de Plaspy.
- Identificación del conductor y control de acceso: compatibilidad RS232 para sistemas RFID e iButton vincula eventos del conductor y datos de horas de servicio a los flujos de trabajo de la flota.

## Por qué elegir este rastreador con Plaspy

El VT800-L combina hardware de grado industrial con la flexibilidad de integración que exigen las operaciones modernas de flotas. Al ser compatible con Plaspy, los operadores obtienen un despliegue rápido y una ingestión de telemetría consistente para la gestión de flotas, monitorización antirrobo e informes operativos. La conectividad 4G, el posicionamiento multi-GNSS y el almacenamiento local reducen las lagunas de datos, mientras que la abundante E/S y el soporte de periféricos permiten recoger y visualizar telemetría, monitorización de temperatura e identificación del conductor dentro de los paneles de Plaspy.

Para organizaciones que requieren un rastreador GPS compacto y de alto rendimiento para camiones, autobuses o flotas mixtas, el VT800-L ofrece una base fiable para el seguimiento en tiempo real, información basada en telemetría y operaciones de flota escalables en la plataforma Plaspy.

