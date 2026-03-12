---
slug: /queclink/gv600wg
id: gv600wg
sidebar_label: GV600WG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GV600WG

![GV600WG](./tracker.png)

El GV600WG de Queclink es un rastreador GPS robusto, diseñado para vehículos de uso intensivo — remolques, cisternas, unidades refrigeradas y plataformas planas — y es compatible con Plaspy para una integración rápida en flujos de gestión de flotas. Con impermeabilización IP67, antenas internas a prueba de manipulación y una batería interna de alta capacidad, el GV600WG ofrece seguimiento en tiempo real fiable y telemetría rica incluso en los entornos de transporte más exigentes.

Construido alrededor de un receptor GNSS All‑in‑One de u-blox y un amplio soporte celular UMTS/GSM, el GV600WG ofrece ubicación precisa, modos de reporte flexibles y un amplio conjunto de E/S para detección de encendido, sensores analógicos y accesorios BLE. Combinar este dispositivo con Plaspy ofrece una solución escalable para protección antirrobo, control remoto del inmovilizador, interfaces de monitoreo de combustible y visibilidad de extremo a extremo del ciclo de vida del remolque.

## Aspectos clave

- Carcasa robusta a prueba de agua IP67 y construcción duradera para entornos de flota y transporte de químicos/combustibles.
- Duración excepcional de la batería en modo de espera — batería interna 3.7V 5800 mAh \(18650\); admite hasta 120 días al reportar una vez al día — ideal para remolques sin alimentación continua.
- Posicionamiento GNSS de precisión con receptor u-blox \(precisión autónoma \< 2.5 m CEP\) y alta sensibilidad \(tracking -162 dBm\) para un seguimiento en tiempo real fiable.
- Amplia cobertura celular: UMTS/HSPA y GSM/GPRS/EDGE en bandas globales para una conectividad constante y carga de telemetría.
- Conjunto completo de E/S para telemetría de flotas: entrada de encendido \(ignition\); entrada analógica \(0–32 V\); soporte 1‑wire \(sensores de temperatura, iButton ID\); puertos serie y salidas digitales configurables.
- Soporte para accesorios BLE \(sensores de temperatura y humedad, llaveros, expansores de E/S\) para monitoreo ampliado y flujos de trabajo anti‑robo.
- Buffering en el dispositivo de hasta 10,000 mensajes garantiza continuidad de datos durante interrupciones de red.
- Capacidades de control remoto \(control OTA de salidas digitales\) para intervenciones tipo inmovilizador y gestión remota de activos.

## Cómo funciona con Plaspy

La integración del GV600WG con Plaspy proporciona un flujo completo de telemetría y rastreo: el dispositivo recopila datos GNSS y de sensores, y luego transmite mensajes a Plaspy a través de transports estándar. Plaspy decodifica los paquetes entrantes, presenta la ubicación en tiempo real en mapas, activa flujos de trabajo de geocerca y alarmas, y almacena telemetría histórica para informes y análisis. Este conjunto compatible con Plaspy admite una gestión proactiva de la flota y una respuesta ante robos, manteniendo la continuidad de datos durante pérdidas de conectividad.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas por TCP, UDP o SMS a Plaspy para paneles de seguimiento en vivo y registros históricos.
- Monitoreo del estado de encendido mediante la entrada de disparo positiva para respaldar informes de comportamiento del conductor, eventos de inicio/detención de ruta y estrategias de ahorro de combustible.
- Entrada analógica usable para monitoreo de combustible u otra telemetría analógica, con umbrales y alarmas personalizables en Plaspy.
- Inmovilizador remoto y control de salidas mediante comandos OTA de salidas digitales para intervenir ante robos desde Plaspy.
- Sensores Bluetooth \(BLE\) para temperatura/humedad y presencia de llavero integrados a alertas de Plaspy y monitoreo de cumplimiento.
- Alarmas de geocerca \(hasta 20 regiones circulares + 20 poligonales\), avisos de batería baja y alarmas especiales disparadas por acelerómetro enviadas a Plaspy para notificación instantánea.

## Visión general técnica

| Conectividad | UMTS/HSPA y GSM/GPRS/EDGE; HSPA DL hasta 7.2 Mbps / UL hasta 5.76 Mbps |
| --- | --- |
| Bandas | UMTS/HSPA 850/900/1900/2100 MHz; GSM 850/900/1800/1900 MHz |
| Alimentación y batería | Batería interna de ion de litio 3.7V, 5800 mAh \(18650\); autonomía en espera hasta 120 días al reportar una vez al día; voltaje de operación DC 8–32 V; admite múltiples fuentes de alimentación; conector impermeable de 18 pines |
| Interfaces | 1 entrada digital de disparo positivo \(detección de encendido\); 1 entrada analógica \(0–32 V\); soporte 1-wire \(sensores de temperatura, iButton ID\); 1 salida de alimentación \(3.3 V\); 4 entradas de disparo negativo configurables o salidas open-drain \(150 mA máx.\); RS232 y puertos serial TTL |
| GNSS | Receptor GNSS All‑in‑One de u-blox; precisión de posición autónoma \< 2.5 m CEP; sensibilidad de seguimiento -162 dBm; TTFF: frío/templado ≈ 27 s, caliente ≈ 1 s |
| Bluetooth | Soporte BLE para accesorios \(sensores de temperatura y humedad, llaveros, expansores de E/S\) |
| Gestión remota | Transportes TCP, UDP, SMS; control OTA de salidas digitales; buffer en el dispositivo de hasta 10,000 mensajes; modos de reporte flexibles \(tiempo, distancia, kilometraje\) |
| Forma y entorno | 135 × 62 × 38 mm, 320 g; IP67 a prueba de agua; voltaje de operación DC 8–32 V; temperatura -30 °C a +80 °C; humedad 0%–95% sin condensación |

## Casos de uso

- Gestión de flotas para remolques y vehículos pesados — seguimiento continuo de posición, kilometraje y telemetría de encendido para programación y reportes de utilización.
- Protección antirrobo e inmovilización remota — alertas habilitadas por Plaspy más control OTA de salidas para intervenciones oportunas.
- Carga refrigerada y sensible a la temperatura — sensores BLE de temperatura o sondas 1-wire alimentan a Plaspy para cumplimiento y alertas de prevención de deterioro.
- Cisternas y materiales peligrosos — carcasa IP67 y construcción robusta para rastreo seguro en entornos de transporte de combustibles y químicos.
- Remolques estacionales o de alquiler — la larga autonomía de la batería facilita despliegues a largo plazo cuando se desconecta la alimentación externa.

## Por qué elegir este rastreador con Plaspy

Combinar el GV600WG con Plaspy ofrece a los operadores de flotas un rastreador GPS robusto, compatible con Plaspy, que equilibra una larga vida de batería, posicionamiento GNSS preciso y un conjunto completo de interfaces enfocadas a la flota. El soporte BLE interno, la entrada analógica y los puertos serie facilitan la extensión de la telemetría para monitoreo de combustible, cumplimiento de temperatura e identificación de conductor/activo. En operaciones, el transporte TCP/UDP/SMS y un buffering sólido de mensajes aseguran datos continuos en Plaspy para informes fiables, geocercas y flujos de trabajo de anti‑robo.

Nota: Queclink ha anunciado la fase de descontinuación \(EOL\) del GV600WG y los pedidos se han discontinuado a partir del 8 de agosto de 2025. Se proporciona una garantía de un año para los clientes afectados, y Queclink recomienda opciones de migración como GV650CAU Lite. Aunque el GV600WG siga siendo una opción sólida compatible con Plaspy mientras esté disponible, consulte a Queclink o a su integrador de Plaspy para planificar la migración y las hojas de ruta de flota a largo plazo.

