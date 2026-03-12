---
slug: /concox/vl802
id: vl802
sidebar_label: VL802
sidebar_class_name: menu_item_tracker
---
# Concox - VL802

![VL802](./tracker.png)

El VL802 es una terminal de vehículo LTE compacta diseñada para la gestión de flotas industriales y comerciales. Compatible con Plaspy desde el primer uso, el VL802 aporta un rendimiento de rastreador GPS robusto y resistente a la red para automóviles, camiones y autobuses — brindando seguimiento en tiempo real confiable, telemetría rica y funciones de control bidireccional en las que confían los operadores de flotas e integradores.

Diseñado para operación continua en entornos exigentes, el VL802 combina LTE Cat 1 con respaldo GSM 2G, posicionamiento GNSS de múltiples constelaciones y una amplia E/S para detección de ignición, control de inmovilizador e integración de sensores analógicos. Cuando se empareja con Plaspy, el VL802 se convierte en un nodo central de telemática para flujos de anti-robo, monitoreo del comportamiento del conductor y telemetría de combustible o sensores a través de sus interfaces analógicas y digitales.

## Aspectos Clave

- Localizador GPS compatible con Plaspy con LTE y retroceso a 2G para seguimiento en tiempo real fiable y entrega continua de datos.
- GNSS de alta sensibilidad \(GPS + BDS + LBS\) con precisión de posicionamiento \<2,5 m CEP y TTFF rápido para fijaciones de ubicación rápidas.
- Rango de alimentación industrial de 9–36 VDC, más una batería de respaldo Li-Polímero de 1.000 mAh para operación resiliente en distintos tipos de vehículo.
- Amplias E/S: entradas ACC y SOS, E/S configurables, RS485, detección analógica 0–5 V y una salida de relé para inmovilizador/corte remoto.
- Acelerómetro a bordo y alertas disparadas por eventos \(geocerca, exceso de velocidad, vibración, conducción fatigada, incautación\) para habilitar una gestión proactiva de la flota.
- Comunicación bidireccional manos libres, soporte de escucha remota y pulsador de pánico para mayor seguridad y respuesta ante incidentes.
- Bluetooth para configuración local rápida y emparejamiento de accesorios, reduciendo el tiempo de instalación y facilitando la configuración en campo.

## Cómo Funciona con Plaspy

Integrado con Plaspy, el VL802 transmite la posición y los datos telemétricos a través de su enlace celular, de modo que los gestores de flota vean ubicaciones en tiempo real y el estado de los vehículos en el panel de Plaspy. Plaspy ingiere coordenadas GNSS, telemetría y notificaciones de eventos y las convierte en alertas accionables, informes históricos y flujos de trabajo automatizados para la gestión de la flota, la respuesta ante robos y el coaching de conductores.

- Actualizaciones en tiempo real de ubicación y telemetría a través de LTE con retroceso a 2G para garantizar un seguimiento continuo en áreas de cobertura mixta.
- Detección de ignición \(ACC\) y eventos de entradas digitales \(SOS, puerta o alarma\) se envían a Plaspy para informes y alertas basados en la ignición.
- La detección analógica 0–5 V puede utilizarse para monitoreo de combustible u otras integraciones de sensores y está disponible para Plaspy como valores de telemetría.
- El control remoto de inmovilizador/relé y los comandos de corte remoto son compatibles para flujos de anti-robo cuando se ejecutan a través del canal de comandos de Plaspy.
- La configuración por Bluetooth permite una instalación rápida en sitio y emparejamiento de accesorios; la comunicación bidireccional y la escucha remota proporcionan verificación de incidentes y funciones de seguridad del conductor.

## Resumen técnico

| Conectividad | LTE Cat 1 con respaldo GSM 2G |
| --- | --- |
| Bandas | VL802-E: LTE-FDD B1/B3/B7/B8/B20/B28; LTE-TDD B34/B38/B39/B40/B41; GSM 850/900/1800/1900 MHz  \<br>VL802-L: LTE-FDD B1/B2/B3/B4/B5/B7/B8/B28; GSM 850/900/1800/1900 MHz |
| Alimentación y batería | Tensión de entrada 9–36 VDC; batería de respaldo Li-Polímero industrial de 1.000 mAh a 3,7 V |
| Interfaces y almacenamiento | Ranura Micro-SIM; RS485; dos E/S configurables \(entrada/salida digital\); entradas digitales para ACC y SOS; salida de relé digital \(inmovilización/corte remoto\); detección analógica 0–5 V; indicadores LED \(GNSS verde, Celular azul, Alimentación roja\); almacenamiento de datos 16+16 MB |
| GNSS | GPS + BDS + LBS; Precisión de posicionamiento \<2,5 m CEP; Sensibilidad de seguimiento -162 dBm; Sensibilidad de adquisición -160 dBm; TTFF \(cielo abierto\): arranque en caliente ≤1 s, arranque en frío ≤32 s |
| Bluetooth | Bluetooth para configuración local y emparejamiento de accesorios \(BLE compatible para configuración\) |
| Gestión remota | Comunicación bidireccional celular para comandos remotos y monitoreo de audio; Bluetooth para configuración en sitio y emparejamiento |
| Mecánica y ambiental | Dimensiones 105 × 56 × 22 mm; Peso 120 g; Rango de temperatura de operación -20 °C a +70 °C; Protección IP65 |
| Sensores y características | Acelerómetro a bordo; admite alerta SOS, alerta de velocidad, alerta de vibración anormal y alerta de conducción fatigada; comunicación bidireccional manos libres y escucha remota |

## Casos de uso

- Gestión de flota: datos continuos del rastreador GPS y eventos de comportamiento del conductor alimentan a Plaspy para la planificación de rutas, programación e informes de rendimiento.
- Antirrobo e inmovilización: control remoto de relé y comandos de corte ejecutados mediante Plaspy para asegurar vehículos de alto valor o recuperar activos.
- Transporte público y servicios a los pasajeros: ubicaciones en tiempo real, monitoreo de audio remoto y alertas SOS para la seguridad de los pasajeros y la supervisión operativa.
- Telemática para seguros y puntuación de conductores: eventos de velocidad, conducción fatigada y vibración capturados para pólizas telemáticas y coaching.
- Telemetría de sensores y monitoreo de combustible: entradas analógicas 0–5 V y RS485 permiten la integración de sensores de combustible u otros sensores del vehículo para paneles de telemetría en Plaspy.

## Por qué elegir este rastreador con Plaspy

El VL802 ofrece un equilibrio entre hardware robusto e interfaces flexibles, lo que lo convierte en un rastreador GPS compatible con Plaspy ideal para flotas comerciales. Su conectividad LTE-primaria con respaldo GSM, GNSS de alta sensibilidad y rango de alimentación industrial reducen los puntos ciegos y aumentan la fiabilidad del seguimiento en tiempo real. Amplias E/S y una salida de relé permiten flujos de trabajo prácticos de anti-robo e inmovilización, mientras la detección analógica y RS485 apoyan el monitoreo de combustible y sensores de terceros. Audio incorporado, SOS y alertas basadas en el acelerómetro enriquecen la telemetría y las capacidades de respuesta ante incidentes.

Para operadores de flota e integradores de sistemas que buscan un terminal confiable que se integre de forma limpia con Plaspy, el VL802 ofrece telemetría, detección de ignición, control de inmovilizador y herramientas de configuración por Bluetooth necesarias para implementar soluciones escalables de gestión de flotas, anti-robo y telemática con total confianza.

